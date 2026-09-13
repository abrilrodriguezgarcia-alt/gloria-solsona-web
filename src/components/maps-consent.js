// Mapa d'ubicació (Google Maps) darrere un gate de consentiment.
//
// Encara no existeix un banner de cookies/consentiment global al lloc web
// (docs/legal-requirements.md, secció "Google Maps" i "Cookies"). Fins que
// n'hi hagi un, aquest component és el seu propi gate local i mínim: no
// carrega l'iframe fins que la persona usuària clica el botó del bloc de
// consentiment (marcat a index.html amb data-map-consent).
//
// PUNTS D'INTEGRACIÓ PREVISTOS per quan s'implementi el banner global:
//   1. Important-lo com a mòdul: cridar `grantExternalServicesConsent()`
//      des del banner quan la persona usuària accepti la categoria
//      corresponent (cookies/serveis de tercers).
//   2. Sense import directe: despatxar `window.dispatchEvent(new
//      CustomEvent(EXTERNAL_SERVICES_GRANTED_EVENT))`; aquest mòdul ja hi
//      està subscrit.
// En qualsevol dels dos casos el mapa es renderitza sense recarregar la
// pàgina. La clau de localStorage (CONSENT_STORAGE_KEY) és temporal: quan
// el CMP definitiu existeixi, ha de reutilitzar-la o migrar-la perquè el
// consentiment ja desat no es torni a demanar innecessàriament.

const MAP_SRC =
  'https://www.google.com/maps?q=Carrer%20Pintor%20Carbonell%2C%2017-19%2C%2008750%20Molins%20de%20Rei%2C%20Barcelona&output=embed';

const CONSENT_STORAGE_KEY = 'gs-consent:external-services';
export const EXTERNAL_SERVICES_GRANTED_EVENT = 'gs:consent:external-services:granted';

function hasExternalServicesConsent() {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === 'granted';
  } catch {
    return false;
  }
}

export function grantExternalServicesConsent() {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'granted');
  } catch {
    // Emmagatzematge no disponible (mode privat, cookies bloquejades...):
    // el mapa es carrega igualment per a aquesta visita, però es tornarà a
    // demanar consentiment la propera.
  }
  window.dispatchEvent(new CustomEvent(EXTERNAL_SERVICES_GRANTED_EVENT));
}

export function initMapsConsent() {
  const container = document.querySelector('.contacte__map');
  if (!container) return;

  const isSpanish = document.documentElement.lang === 'es';
  const mapTitle = isSpanish
    ? 'Mapa de ubicación del despacho de Glòria Solsona Martí en Molins de Rei'
    : "Mapa d'ubicació del despatx de Glòria Solsona Martí a Molins de Rei";

  function renderMap() {
    container.querySelector('[data-map-consent]')?.remove();

    const iframe = document.createElement('iframe');
    iframe.className = 'contacte__map-iframe';
    iframe.src = MAP_SRC;
    iframe.title = mapTitle;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    container.appendChild(iframe);
  }

  if (hasExternalServicesConsent()) {
    renderMap();
    return;
  }

  container.querySelector('[data-map-consent-accept]')?.addEventListener('click', () => {
    grantExternalServicesConsent();
    renderMap();
  });

  window.addEventListener(
    EXTERNAL_SERVICES_GRANTED_EVENT,
    () => {
      if (container.querySelector('[data-map-consent]')) renderMap();
    },
    { once: true },
  );
}
