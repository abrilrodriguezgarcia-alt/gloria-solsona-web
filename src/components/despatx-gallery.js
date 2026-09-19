// Galeria compacta de "El despatx" (docs/landing-master-spec.md §8a.14):
// 1 imatge principal gran ("escenari") + 3 miniatures fixes, sense
// fletxes ni comptador — la pròpia miniatura és l'únic control de
// navegació.
//
// Única interacció, manual (sense autoplay): clic sobre una miniatura
// INTERCANVIA el seu contingut amb el de l'escenari (fos suau) — la
// miniatura clicada passa a ser la principal i la que hi havia principal
// passa a ocupar aquella miniatura.
export function initDespatxGallery() {
  const root = document.querySelector('.despatx__gallery');
  if (!root) return;

  const stage = root.querySelector('.despatx__gallery-stage img');
  const thumbs = [...root.querySelectorAll('.despatx__gallery-thumb')];
  if (!stage || thumbs.length === 0) return;

  // Precarrega les fotos de les miniatures perquè l'intercanvi sigui
  // immediat i sense parpelleig.
  thumbs.forEach((thumb) => {
    if (thumb.dataset.full) new Image().src = thumb.dataset.full;
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FADE_MS = reduceMotion ? 0 : 180;

  // El prefix de l'aria-label ("Mostra com a principal: ...") es captura
  // del propi HTML ja traduït (idèntic als 3 botons) en lloc de fixar-lo
  // en aquest fitxer, perquè el component funcioni igual a index.html i a
  // es/index.html sense dependre de l'idioma.
  const initialLabel = thumbs[0].getAttribute('aria-label') || '';
  const prefixMatch = initialLabel.match(/^(.*?:\s)/);
  const prefix = prefixMatch ? prefixMatch[1] : 'Mostra com a principal: ';

  function labelFor(alt) {
    return `${prefix}${alt.replace(/\.$/, '')}`;
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
    // (imatge, alt i etiqueta accessible).
    thumbImg.src = prevFull;
    thumbImg.alt = prevAlt;
    thumb.dataset.full = prevFull;
    thumb.setAttribute('aria-label', labelFor(prevAlt));
  }

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => swap(thumb));
  });
}
