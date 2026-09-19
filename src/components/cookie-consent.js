// Banner global de consentiment de cookies/serveis de tercers.
//
// Únic punt d'entrada de consentiment del lloc: src/components/location-map.js
// consulta `getConsentStatus()`/`hasThirdPartyConsent()` i s'hi subscriu amb
// `onConsentChange()` per decidir si carrega Google Maps, sense cap gate
// local propi dins la secció de contacte (FASE 3).

const CONSENT_STORAGE_KEY = 'gs-consent:external-services';
const CONSENT_CHANGE_EVENT = 'gs:consent:changed';

// Valor escrit per l'antic gate local del mapa (retirat a la FASE 3) quan
// l'usuari hi acceptava. Es reconeix en lectura com a acceptació equivalent
// perquè ningú que ja hi hagués donat consentiment abans torni a veure el
// banner nou.
const LEGACY_GRANTED_VALUE = 'granted';

export const CONSENT_ACCEPTED = 'accepted';
export const CONSENT_REJECTED = 'rejected';

const TEXT = {
  ca: {
    label: 'Consentiment de cookies i serveis de tercers',
    title: 'Utilitzem serveis de tercers',
    description:
      "Utilitzem Google Maps per mostrar la ubicació del despatx. Aquest servei pot implicar l'ús de cookies o el tractament de dades per part de Google.",
    reject: 'Rebutjar',
    accept: 'Acceptar',
    policyLabel: 'Política de cookies',
    policyHref: '/legal/cookies.html',
  },
  es: {
    label: 'Consentimiento de cookies y servicios de terceros',
    title: 'Utilizamos servicios de terceros',
    description:
      'Utilizamos Google Maps para mostrar la ubicación del despacho. Este servicio puede implicar el uso de cookies o el tratamiento de datos por parte de Google.',
    reject: 'Rechazar',
    accept: 'Aceptar',
    policyLabel: 'Política de cookies',
    policyHref: '/es/legal/cookies.html',
  },
};

/**
 * Estat actual del consentiment.
 * @returns {'accepted'|'rejected'|null} null = encara sense decisió.
 */
export function getConsentStatus() {
  let raw;
  try {
    raw = localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
  if (raw === CONSENT_ACCEPTED || raw === CONSENT_REJECTED) return raw;
  if (raw === LEGACY_GRANTED_VALUE) return CONSENT_ACCEPTED;
  return null;
}

/** Bàsicament `getConsentStatus() === CONSENT_ACCEPTED`. Pensada per a la
 * FASE 3: el component del mapa la consultarà per decidir si carrega
 * l'iframe de Google Maps. */
export function hasThirdPartyConsent() {
  return getConsentStatus() === CONSENT_ACCEPTED;
}

function persistConsentStatus(status) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Emmagatzematge no disponible (mode privat, cookies bloquejades...): la
    // decisió val només per a aquesta visita i es tornarà a demanar a la següent.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: { status } }));
}

/** Subscriu `callback(status)` a qualsevol canvi de consentiment (acceptar,
 * rebutjar o canviar la decisió des de «Configurar cookies»). Retorna una
 * funció per cancel·lar la subscripció. */
export function onConsentChange(callback) {
  const handler = (event) => callback(event.detail.status);
  window.addEventListener(CONSENT_CHANGE_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handler);
}

function buildBanner(t) {
  const banner = document.createElement('div');
  banner.className = 'cookie-consent';
  banner.id = 'cookie-consent';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', t.label);
  banner.hidden = true;

  banner.innerHTML = `
    <div class="container cookie-consent__row">
      <div class="cookie-consent__text">
        <p class="cookie-consent__title">${t.title}</p>
        <p class="cookie-consent__desc">
          ${t.description}
          <a class="cookie-consent__link" href="${t.policyHref}">${t.policyLabel}</a>
        </p>
      </div>
      <div class="cookie-consent__actions">
        <button type="button" class="cookie-consent__button cookie-consent__button--reject" data-consent-reject>
          ${t.reject}
        </button>
        <button type="button" class="cookie-consent__button cookie-consent__button--accept" data-consent-accept>
          ${t.accept}
        </button>
      </div>
    </div>
  `;

  return banner;
}

export function initCookieConsent() {
  if (document.getElementById('cookie-consent')) return;

  const isSpanish = document.documentElement.lang === 'es';
  const t = isSpanish ? TEXT.es : TEXT.ca;

  const banner = buildBanner(t);
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.after(banner);
  } else {
    document.body.prepend(banner);
  }

  const acceptButton = banner.querySelector('[data-consent-accept]');
  const rejectButton = banner.querySelector('[data-consent-reject]');

  const show = () => {
    banner.hidden = false;
  };
  const hide = () => {
    banner.hidden = true;
  };

  const decide = (status) => {
    persistConsentStatus(status);
    hide();
  };

  acceptButton.addEventListener('click', () => decide(CONSENT_ACCEPTED));
  rejectButton.addEventListener('click', () => decide(CONSENT_REJECTED));

  if (getConsentStatus() === null) {
    show();
  }

  // Enllaç permanent «Configurar cookies» al peu de pàgina: reobre el
  // banner perquè la persona usuària pugui canviar una decisió ja presa.
  document.querySelectorAll('[data-cookie-settings]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      show();
      acceptButton.focus();
    });
  });
}
