// Galeria compacta de "El despatx" (docs/landing-master-spec.md §8a.12):
// 1 imatge principal gran ("escenari") + una reserva de 7 fotografies
// secundàries, de les quals només 3 es veuen alhora com a miniatures.
//
// Dues interaccions independents, totes manuals (sense autoplay):
// - Fletxes ← →: desplacen quina finestra de 3 miniatures es veu dins la
//   reserva de 7 (cíclic). Actualitzen el comptador ("01 / 07").
// - Clic sobre una miniatura: INTERCANVIA el seu contingut amb el de
//   l'escenari (fos suau) — la miniatura clicada passa a ser la principal
//   i la que hi havia principal passa a ocupar aquella miniatura. La
//   finestra no es mou en clicar, només en prémer les fletxes.
export function initDespatxGallery() {
  const root = document.querySelector('.despatx__gallery');
  if (!root) return;

  const stage = root.querySelector('.despatx__gallery-stage img');
  const thumbs = [...root.querySelectorAll('.despatx__gallery-thumb')];
  const prevBtn = root.querySelector('.despatx__gallery-arrow--prev');
  const nextBtn = root.querySelector('.despatx__gallery-arrow--next');
  const counterCurrent = root.querySelector('.despatx__gallery-counter-current');
  const total = thumbs.length;
  if (!stage || total === 0) return;

  const VISIBLE = Math.min(3, total);
  let windowStart = 0; // índex (dins `thumbs`) del primer de la finestra visible

  // Precarrega totes les fotos de la reserva perquè els intercanvis i la
  // navegació per fletxes siguin immediats i sense parpelleig.
  thumbs.forEach((thumb) => {
    if (thumb.dataset.full) new Image().src = thumb.dataset.full;
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FADE_MS = reduceMotion ? 0 : 180;

  // El prefix de l'aria-label ("Mostra com a principal: ...") es captura
  // del propi HTML ja traduït (idèntic als 7 botons) en lloc de fixar-lo
  // en aquest fitxer, perquè el component funcioni igual a index.html i a
  // es/index.html sense dependre de l'idioma.
  const initialLabel = thumbs[0].getAttribute('aria-label') || '';
  const prefixMatch = initialLabel.match(/^(.*?:\s)/);
  const prefix = prefixMatch ? prefixMatch[1] : 'Mostra com a principal: ';

  function labelFor(alt) {
    return `${prefix}${alt.replace(/\.$/, '')}`;
  }

  function updateWindow() {
    thumbs.forEach((thumb, i) => {
      const offset = (i - windowStart + total) % total;
      thumb.hidden = offset >= VISIBLE;
    });
    if (counterCurrent) {
      counterCurrent.textContent = String(windowStart + 1).padStart(2, '0');
    }
  }

  function swap(thumb) {
    const thumbImg = thumb.querySelector('img');
    const nextFull = thumb.dataset.full;
    if (!nextFull || !thumbImg) return;

    const prevFull = stage.getAttribute('src');
    const prevAlt = stage.getAttribute('alt');

    stage.classList.add('despatx__gallery-stage-img--fading');
    window.setTimeout(() => {
      stage.src = nextFull;
      stage.alt = thumbImg.alt;
      stage.classList.remove('despatx__gallery-stage-img--fading');
    }, FADE_MS);

    // La miniatura clicada hereta la fotografia que abans es veia gran
    // (imatge, alt i etiqueta accessible) — la finestra visible no canvia.
    thumbImg.src = prevFull;
    thumbImg.alt = prevAlt;
    thumb.dataset.full = prevFull;
    thumb.setAttribute('aria-label', labelFor(prevAlt));
  }

  function step(delta) {
    windowStart = (windowStart + delta + total) % total;
    updateWindow();
  }

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => swap(thumb));
  });
  prevBtn?.addEventListener('click', () => step(-1));
  nextBtn?.addEventListener('click', () => step(1));

  // Swipe discret a mòbil sobre la fila de miniatures (complementa les
  // fletxes, no les substitueix).
  const thumbsRow = root.querySelector('.despatx__gallery-thumbs');
  if (thumbsRow) {
    let touchStartX = null;
    thumbsRow.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.touches[0]?.clientX ?? null;
      },
      { passive: true }
    );
    thumbsRow.addEventListener(
      'touchend',
      (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0]?.clientX ?? touchStartX;
        const deltaX = touchEndX - touchStartX;
        const SWIPE_THRESHOLD = 40;
        if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
          step(deltaX < 0 ? 1 : -1);
        }
        touchStartX = null;
      },
      { passive: true }
    );
  }

  updateWindow();
}
