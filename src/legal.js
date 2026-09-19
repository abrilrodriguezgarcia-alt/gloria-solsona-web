import './styles/index.css';
import { initCookieConsent } from './components/cookie-consent.js';

// Punt d'entrada compartit per a les pàgines legals (Avís legal, Privacitat,
// Cookies). Deliberadament sense JS de la landing: aquestes pàgines són
// estàtiques, amb l'única excepció del banner global de consentiment, ja
// que l'enllaç «Configurar cookies» del peu de pàgina (present a totes les
// pàgines) l'ha de poder reobrir també des d'aquí.
initCookieConsent();
