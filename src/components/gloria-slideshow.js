// Diapositives amb pas automàtic de l'apartat Glòria (petició expressa
// 2026-09-12): mostra en seqüència les fotografies personals noves
// (docs/assets-status.md) en lloc de repetir el retrat del hero.
//
// Accessibilitat:
// - Respecta `prefers-reduced-motion`: si està actiu, no arrenca l'avanç
//   automàtic (l'usuari pot igualment reprendre'l amb el botó de pausa).
// - Ofereix un botó de pausa/reproducció explícit (WCAG 2.2.2 — contingut
//   que s'actualitza sol ha de poder aturar-se sense dependre del hover).
// - S'atura en passar-hi el ratolí, en rebre el focus, o quan la pestanya
//   deixa d'estar visible; es reprèn en sortir/perdre el focus, només si
//   l'usuari no l'havia pausat expressament.
// - Un clic a un punt de navegació fixa aquella foto (pausa implícita):
//   una tria manual no ha de desaparèixer als pocs segons.
const INTERVAL_MS = 5000;

export function initGloriaSlideshow() {
  const root = document.querySelector('.gloria__slideshow');
  if (!root) return;

  const slides = [...root.querySelectorAll('.gloria__slide')];
  const dots = [...root.querySelectorAll('.gloria__slideshow-dot')];
  const toggleBtn = root.querySelector('.gloria__slideshow-toggle');
  if (slides.length < 2 || dots.length !== slides.length) return;

  const isSpanish = document.documentElement.lang === 'es';
  const labels = isSpanish
    ? { pause: 'Pausa la secuencia de fotografías', resume: 'Reanuda la secuencia de fotografías' }
    : { pause: 'Pausa la seqüència de fotografies', resume: 'Reprèn la seqüència de fotografies' };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let index = Math.max(
    slides.findIndex((slide) => slide.classList.contains('gloria__slide--active')),
    0
  );
  let timer = null;
  let paused = reduceMotion;

  function show(next) {
    if (next === index) return;
    slides[index].classList.remove('gloria__slide--active');
    dots[index].classList.remove('gloria__slideshow-dot--active');
    dots[index].setAttribute('aria-pressed', 'false');
    index = next;
    slides[index].classList.add('gloria__slide--active');
    dots[index].classList.add('gloria__slideshow-dot--active');
    dots[index].setAttribute('aria-pressed', 'true');
  }

  function advance() {
    show((index + 1) % slides.length);
  }

  function start() {
    if (paused || timer) return;
    timer = window.setInterval(advance, INTERVAL_MS);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  function setPaused(value) {
    paused = value;
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', String(value));
      toggleBtn.setAttribute('aria-label', value ? labels.resume : labels.pause);
      toggleBtn.classList.toggle('gloria__slideshow-toggle--paused', value);
    }
    if (value) stop();
    else start();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      show(i);
      setPaused(true);
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => setPaused(!paused));
  }

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', () => {
    if (!paused) start();
  });
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', () => {
    if (!paused) start();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (!paused) start();
  });

  if (reduceMotion) {
    setPaused(true);
  } else {
    start();
  }
}
