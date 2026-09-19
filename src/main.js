import './styles/index.css';
import { initHeader } from './components/header.js';
import { initReviews } from './components/reviews.js';
import { initContactForm } from './components/contact-form.js';
import { initLocationMap } from './components/location-map.js';
import { initDespatxGallery } from './components/despatx-gallery.js';
import { initGloriaSlideshow } from './components/gloria-slideshow.js';
import { initCookieConsent } from './components/cookie-consent.js';

initCookieConsent();
initHeader();
initReviews();
initContactForm();
initLocationMap();
initDespatxGallery();
initGloriaSlideshow();
