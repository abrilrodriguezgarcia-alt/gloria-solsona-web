// Galeria de "El despatx" (docs/landing-master-spec.md §8a.15): 1 escenari
// gran + fletxes discretes + un indicador de punts molt subtil. Les 8
// fotografies reals originals (escenari inicial + reserva de 7) es
// mantenen totes accessibles — el canvi respecte a versions anteriors és
// només de controls (menys protagonisme), no de contingut.
//
// Cada fotografia viu com un punt (`.despatx__gallery-dot`, un botó amb
// una imatge a dins perquè l'i18n i les dades es mantinguin al HTML,
// visualment reduït a un punt petit). Clicar-hi, o usar les fletxes ← →
// (cícliques), mostra aquella fotografia a l'escenari (fos suau) i marca
// el punt actiu.
//
// Autoplay (instrucció expressa): canvia sola cada ~5s, es pausa mentre el
// cursor és sobre la galeria i es reinicia el compte enrere en qualsevol
// interacció manual (fletxes, punts o swipe), perquè no "salti" just
// després que la persona usuària hagi triat una fotografia. Es desactiva
// per complet si `prefers-reduced-motion` és actiu.
export function initDespatxGallery() {
  const root = document.querySelector('.despatx__gallery');
  if (!root) return;

  const stage = root.querySelector('.despatx__gallery-stage img');
  const dots = [...root.querySelectorAll('.despatx__gallery-dot')];
  const prevBtn = root.querySelector('.despatx__gallery-arrow--prev');
  const nextBtn = root.querySelector('.despatx__gallery-arrow--next');
  const total = dots.length;
  if (!stage || total === 0) return;

  let currentIndex = 0;

  // La imatge dins de cada punt (`dotImg.src`, propietat DOM ja resolta
  // pel navegador a una URL absoluta) és la mateixa que Vite processa i
  // reescriu amb el `base` configurat (localhost o el subdirectori de
  // GitHub Pages) — així s'evita mantenir una segona ruta en un atribut
  // `data-*` propi, que Vite no reescriu mai i que provocava 404 en
  // navegar (la fotografia inicial de l'escenari carregava bé perquè és
  // un `<img src>` real, però la resta només vivien en `data-full`).

  // Precarrega totes les fotos perquè la navegació sigui immediata i
  // sense parpelleig.
  dots.forEach((dot) => {
    const img = dot.querySelector('img');
    if (img) new Image().src = img.src;
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FADE_MS = reduceMotion ? 0 : 180;

  function render(index) {
    currentIndex = index;
    const dot = dots[currentIndex];
    const dotImg = dot.querySelector('img');
    if (!dotImg) return;

    stage.classList.add('despatx__gallery-stage-img--fading');
    window.setTimeout(() => {
      stage.src = dotImg.src;
      stage.alt = dotImg.alt;
      stage.classList.remove('despatx__gallery-stage-img--fading');
    }, FADE_MS);

    dots.forEach((d, i) => {
      const active = i === currentIndex;
      d.classList.toggle('despatx__gallery-dot--active', active);
      d.setAttribute('aria-pressed', String(active));
    });
  }

  function step(delta) {
    render((currentIndex + delta + total) % total);
  }

  // ---- Autoplay ----
  const AUTOPLAY_MS = 5000;
  let autoplayTimer = null;

  function stopAutoplay() {
    if (autoplayTimer !== null) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function startAutoplay() {
    if (reduceMotion || total <= 1) return;
    stopAutoplay();
    autoplayTimer = window.setInterval(() => step(1), AUTOPLAY_MS);
  }

  // Qualsevol interacció manual reinicia el compte enrere, perquè
  // l'autoplay no "salti" a la següent just després que la persona
  // usuària n'hagi triat una.
  function restartAutoplay() {
    if (reduceMotion) return;
    startAutoplay();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i !== currentIndex) render(i);
      restartAutoplay();
    });
  });
  prevBtn?.addEventListener('click', () => {
    step(-1);
    restartAutoplay();
  });
  nextBtn?.addEventListener('click', () => {
    step(1);
    restartAutoplay();
  });

  // Pausa mentre el cursor és sobre la galeria (escenari, fletxes i punts).
  root.addEventListener('mouseenter', stopAutoplay);
  root.addEventListener('mouseleave', restartAutoplay);

  // Swipe discret a mòbil sobre l'escenari (complementa les fletxes, no
  // les substitueix).
  const stageContainer = root.querySelector('.despatx__gallery-stage');
  if (stageContainer) {
    let touchStartX = null;
    stageContainer.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.touches[0]?.clientX ?? null;
      },
      { passive: true }
    );
    stageContainer.addEventListener(
      'touchend',
      (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0]?.clientX ?? touchStartX;
        const deltaX = touchEndX - touchStartX;
        const SWIPE_THRESHOLD = 40;
        if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
          step(deltaX < 0 ? 1 : -1);
          restartAutoplay();
        }
        touchStartX = null;
      },
      { passive: true }
    );
  }

  startAutoplay();
}
