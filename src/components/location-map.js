// Mapa d'ubicació (Google Maps), gestionat pel consentiment global de
// cookies/serveis de tercers (src/components/cookie-consent.js).
//
// No hi ha cap gate local ni segon clic de consentiment dins la secció: el
// contenidor es renderitza segons `getConsentStatus()` en carregar la
// pàgina i es tornar a renderitzar en viu amb `onConsentChange()` si la
// persona usuària canvia la decisió des de «Configurar cookies» al peu de
// pàgina. Substitueix l'antic src/components/maps-consent.js (FASE 3).

import { CONSENT_ACCEPTED, CONSENT_REJECTED, getConsentStatus, onConsentChange } from './cookie-consent.js';

const MAP_SRC =
  'https://www.google.com/maps?q=Carrer%20Pintor%20Carbonell%2C%2017-19%2C%2008750%20Molins%20de%20Rei%2C%20Barcelona&output=embed';

const MAP_EXTERNAL_URL =
  'https://www.google.com/maps/search/?api=1&query=Carrer%20Pintor%20Carbonell%2C%2017-19%2C%2008750%20Molins%20de%20Rei%2C%20Barcelona';

const TEXT = {
  ca: {
    mapTitle: "Mapa d'ubicació del despatx de Glòria Solsona Martí a Molins de Rei",
    fallbackTitle: 'Mapa no carregat',
    rejected:
      "Has rebutjat els serveis de tercers. Pots consultar la ubicació directament a Google Maps.",
    pending:
      "Per veure el mapa interactiu cal acceptar els serveis de tercers. Pots consultar la ubicació directament a Google Maps.",
    cta: 'Obrir a Google Maps',
  },
  es: {
    mapTitle: 'Mapa de ubicación del despacho de Glòria Solsona Martí en Molins de Rei',
    fallbackTitle: 'Mapa no cargado',
    rejected: 'Has rechazado los servicios de terceros. Puedes consultar la ubicación directamente en Google Maps.',
    pending:
      'Para ver el mapa interactivo es necesario aceptar los servicios de terceros. Puedes consultar la ubicación directamente en Google Maps.',
    cta: 'Abrir en Google Maps',
  },
};

export function initLocationMap() {
  const container = document.querySelector('.contacte__map');
  if (!container) return;

  const isSpanish = document.documentElement.lang === 'es';
  const t = isSpanish ? TEXT.es : TEXT.ca;

  function renderMap() {
    container.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.className = 'contacte__map-iframe';
    iframe.src = MAP_SRC;
    iframe.title = t.mapTitle;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    container.appendChild(iframe);
  }

  function renderFallback(status) {
    container.innerHTML = '';
    const message = status === CONSENT_REJECTED ? t.rejected : t.pending;

    const fallback = document.createElement('div');
    fallback.className = 'contacte__map-fallback';
    fallback.innerHTML = `
      <p class="contacte__map-fallback-title">${t.fallbackTitle}</p>
      <p class="contacte__map-fallback-text">${message}</p>
      <a class="contacte__map-fallback-link" href="${MAP_EXTERNAL_URL}" target="_blank" rel="noopener noreferrer">
        ${t.cta}
      </a>
    `;
    container.appendChild(fallback);
  }

  function render() {
    if (getConsentStatus() === CONSENT_ACCEPTED) {
      renderMap();
    } else {
      renderFallback(getConsentStatus());
    }
  }

  render();
  onConsentChange(render);
}
