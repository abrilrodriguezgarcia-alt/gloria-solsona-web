# Especificació tècnica preliminar

## Objectiu

Construir una landing professional, ràpida, accessible i mantenible que reprodueixi fidelment la proposta visual aprovada.

## Principis tècnics

- Prioritzar HTML semàntic, CSS net i JavaScript mínim.
- Evitar dependències innecessàries.
- Si s'utilitza un framework, ha d'estar justificat per mantenibilitat i desplegament, no per moda.
- Components reutilitzables quan aportin claredat real.
- Cap integració externa ha d'impedir treballar localment.

## Arquitectura prevista

L'estructura final dependrà de l'stack escollit, però ha de mantenir separació clara entre:

- components de layout;
- seccions de la landing;
- contingut/dades;
- estils globals;
- assets;
- SEO/metadades;
- pàgines legals.

## Responsive

Breakpoints a definir segons el contingut real, no només segons dispositius comercials.

Validar com a mínim:

- 1440 px o superior;
- portàtil aproximadament 1280–1366 px;
- tablet aproximadament 768–1024 px;
- mòbil 360–430 px.

El disseny ha de degradar de manera fluida entre aquests rangs.

## Tipografia i espaiat

- Respectar la tipografia de la proposta aprovada.
- Utilitzar `clamp()` quan aporti escalat fluid sense perdre control.
- Mantenir espais amplis entre seccions.
- Recuperar/conservar les franges grises de separació previstes al disseny.
- Evitar compactar el bloc de contacte.

## Ressenyes

El component ha de preveure:

- targetes d'alçada visual coherent;
- 5 estrelles visibles;
- navegació anterior/següent accessible;
- suport tàctil en mòbil si es converteix en carrusel;
- focus de teclat visible;
- sense dependència exclusiva de gestos o hover;
- espai suficient entre cos de la ressenya, atribució i estrelles.

## Google Maps

Opció preferida inicial: `iframe` d'embed oficial, responsive.

Requisits:

- contenidor amb relació d'aspecte controlada;
- `loading="lazy"` quan sigui adequat;
- títol accessible;
- revisar implicacions de privacitat/cookies abans de producció;
- evitar Google Maps JavaScript API si l'embed cobreix la necessitat.

## Formulari de contacte

Fins que es decideixi el backend o servei d'enviament:

- construir només la capa d'interfície si és necessari;
- no simular un enviament reeixit si no existeix backend;
- validació accessible;
- labels reals;
- missatges d'error clars;
- protecció antispam a decidir abans de producció.

## WhatsApp

Només implementar després de confirmació. Si s'incorpora:

- enllaç oficial `wa.me` o mecanisme equivalent;
- número professional confirmat;
- text inicial opcional no intrusiu;
- etiqueta accessible;
- no substituir altres vies de contacte.

## Animacions

- subtils i coherents amb una web jurídica professional;
- sense animacions gratuïtes o espectaculars;
- respectar `prefers-reduced-motion`;
- evitar animar grans blocs durant la lectura;
- cap animació ha d'impedir interacció immediata.

## Rendiment

Objectius orientatius abans de publicació:

- imatges optimitzades i dimensionades;
- fonts limitades als pesos necessaris;
- minimitzar JavaScript client;
- evitar layout shifts;
- càrrega diferida d'elements no crítics;
- Lighthouse alt com a indicador, sense perseguir una puntuació a costa de la UX.

## Seguretat i privacitat

- no guardar secrets al repositori;
- `.env` fora de Git si algun servei el requereix;
- cap API key exposada al client tret que sigui explícitament pública i apropiada;
- no introduir dades personals de desenvolupament en formularis o metadades.

## Fase de desenvolupament

Ordre recomanat:

1. estructura global i tokens visuals;
2. header i hero;
3. seccions de contingut;
4. ressenyes;
5. ubicació/mapa;
6. contacte;
7. footer;
8. pàgines legals provisionals;
9. responsive complet;
10. accessibilitat;
11. SEO tècnic;
12. QA final.
