# Pla d’implementació — Glòria Solsona Martí

Aquest document defineix com s’ha de passar de la documentació actual a la landing funcional sense alterar la direcció visual aprovada.

## 1. Stack recomanat

Per aquest projecte, la recomanació és mantenir una arquitectura simple i lleugera:

- Vite com a entorn de desenvolupament i build;
- HTML semàntic;
- CSS modern amb variables, grid, flex i `clamp()`;
- JavaScript mínim per navegació, carrusel i microinteraccions;
- sense framework frontend pesant tret que aparegui una necessitat real;
- desplegament posterior compatible amb Cloudflare Pages.

L’objectiu és una web ràpida, fàcil de mantenir i sense dependències innecessàries.

## 2. Estructura prevista del projecte

```text
src/
├── main.js
├── styles/
│   ├── tokens.css
│   ├── global.css
│   ├── layout.css
│   └── components.css
├── components/
│   ├── header.js
│   ├── reviews.js
│   └── mobile-menu.js
└── data/
    └── content.js

public/
├── images/
├── brand/
└── favicon/

legal/
├── avis-legal.html
├── privacitat.html
└── cookies.html
```

La implementació pot variar si Claude justifica una estructura més simple, però s’ha de mantenir separació clara entre contingut, estils, scripts i assets.

## 3. Fases de desenvolupament

### Fase 1 — Base del projecte

- inicialitzar Vite;
- crear estructura de carpetes;
- configurar `.gitignore`;
- preparar variables CSS;
- preparar tipografies provisionals si les definitives encara no estan confirmades;
- incorporar els assets existents.

### Fase 2 — Header + hero

- reproduir composició aprovada;
- usar `assets/images/gloria-hero-provisional.jpg` temporalment;
- mantenir transició suau entre zona clara i fotografia;
- integrar logo, navegació, H1, subtítol, àrees i CTA;
- col·locar la frase «El dret al servei de les persones»;
- validar desktop i portàtil abans de continuar.

### Fase 3 — Àrees de pràctica

- implementar bloc 01/02/03;
- mantenir separadors verticals;
- evitar targetes, ombres i estètica SaaS;
- validar escala tipogràfica i respiració.

### Fase 4 — Presentació + trajectòria

- bloc de Glòria amb fotografia i text;
- trajectòria amb `25+` com a dada central;
- conservar franges de fons aprovades;
- revisar jerarquia editorial.

### Fase 5 — Ressenyes

- tres ressenyes visibles en desktop;
- una per vista en mòbil si cal;
- cinc estrelles visibles;
- controls anterior/següent accessibles;
- navegació per teclat;
- suport tàctil;
- espai coherent entre text i estrelles.

### Fase 6 — Contacte + ubicació

- telèfon i correu clicables;
- adreça professional;
- Google Maps embed quan es decideixi la configuració de privacitat/cookies;
- WhatsApp només després de confirmació;
- no implementar formulari real fins decidir backend o servei d’enviament.

### Fase 7 — Footer + legals

- footer segons maqueta;
- links a Avís legal, Privacitat i Cookies;
- pàgines legals provisionals sense inventar dades;
- cap dada personal de la desenvolupadora.

### Fase 8 — Responsive complet

Validar com a mínim:

- 1440 px+
- 1280–1366 px
- 768–1024 px
- 360–430 px

Corregir abans de continuar si apareixen:

- overflow horitzontal;
- textos tallats;
- nav solapada;
- fotografies mal retallades;
- ressenyes comprimides;
- blocs massa compactes.

### Fase 9 — Accessibilitat

- headings correctes;
- focus visible;
- navegació per teclat;
- alt text;
- contrast;
- controls tàctils suficients;
- `prefers-reduced-motion`;
- labels accessibles.

### Fase 10 — SEO tècnic

- title i meta description finals després de validar contingut;
- Open Graph;
- favicon;
- canonical;
- sitemap;
- robots;
- dades estructurades només amb informació confirmada.

### Fase 11 — QA

Seguir `docs/qa-checklist.md` i comparar visualment amb `assets/reference/landing-approved.png`.

## 4. Regla de treball amb Claude Code

Claude ha de treballar en iteracions petites.

Ordre recomanat:

1. crear base;
2. mostrar resultat;
3. comparar amb maqueta;
4. corregir;
5. fer commit;
6. passar a la següent secció.

No se li ha de demanar que implementi tota la web de cop.

## 5. Criteri per crear branques

Quan comenci el desenvolupament:

- `main` = versió estable;
- `feature/base-structure`;
- `feature/hero`;
- `feature/content-sections`;
- `feature/reviews`;
- `feature/contact-map`;
- `feature/responsive-accessibility`.

No cal crear una branca per cada petit canvi, però sí evitar canvis grans directament a `main`.

## 6. Estat actual

Preparació documental: completa.

Assets disponibles:

- maqueta aprovada;
- fotografia provisional del hero.

Abans de producció encara cal validar dades de client, fotografia definitiva, assets de marca finals i aspectes legals.
