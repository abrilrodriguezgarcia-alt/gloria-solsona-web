# Requisits legals preliminars

> Document de treball. No és assessorament jurídic i no substitueix la revisió professional corresponent abans de publicació.

## Objectiu

Deixar preparada l'estructura legal de la web sense inventar dades ni publicar textos incomplets com si fossin definitius.

## Pàgines previstes

Com a base, la web haurà de contemplar:

- Avís legal.
- Política de privacitat.
- Política de cookies.

**Estat (2026-09-20):** les tres pàgines (`legal/avis-legal.html`, `legal/privacitat.html`,
`legal/cookies.html`, i les seves versions `/es/`) tenen ja un redactat complet basat en les
dades confirmades i en la implementació tècnica real del lloc web (formulari sense servei
d'enviament actiu, banner de consentiment i mapa de Google Maps segons
`src/components/cookie-consent.js` i `src/components/location-map.js`, sense cap eina
d'analítica). Segueixen sense ser definitives: resta pendent el domini, el proveïdor
d'allotjament, si s'incorporarà analítica i el servei d'enviament del formulari (vegeu les
seccions corresponents més avall), a més de la validació final del text amb Glòria abans de
publicar.

La necessitat i contingut final de cada pàgina dependrà de les funcionalitats efectivament activades.

## Informació pendent necessària

Abans de redactar versions definitives, cal confirmar amb Glòria:

- titular real del lloc web;
- nom complet / denominació que legalment correspongui;
- NIF/CIF si és necessari mostrar-lo;
- domicili professional o dada equivalent aplicable;
- correu de contacte legal;
- telèfon professional si s'ha de publicar;
- número de col·legiació;
- col·legi professional;
- domini definitiu;
- proveïdor d'allotjament, quan sigui necessari per a la informació legal;
- finalitats del formulari de contacte;
- base jurídica aplicable al tractament;
- terminis de conservació;
- destinataris/encarregats del tractament;
- possibles transferències internacionals;
- eines d'analítica;
- serveis de tercers;
- ús de Google Maps;
- mecanisme real de cookies/consentiment;
- si s'utilitzarà WhatsApp com a canal de contacte professional.

## Formulari de contacte

Si existeix, ha de contemplar com a mínim:

- informació bàsica de privacitat en el mateix punt de recollida;
- enllaç a la política de privacitat completa;
- només camps necessaris;
- cap checkbox premarcat;
- consentiments diferenciats quan siguin realment necessaris;
- sistema d'enviament que no exposi credencials.

No s'ha d'activar cap formulari real fins que s'hagi decidit com i on es processen les dades.

## Google Maps

Abans de producció cal revisar el comportament real de l'embed utilitzat i la seva relació amb cookies/tercers.

Si la implementació utilitzada requereix consentiment previ per carregar contingut de tercers, s'haurà de bloquejar fins obtenir-lo.

No assumir automàticament que qualsevol embed té el mateix comportament.

## WhatsApp

Si es confirma el seu ús, cal considerar-lo un canal de tercer. La política de privacitat ha de ser coherent amb aquest canal i el número ha de ser estrictament professional i confirmat per Glòria.

## Cookies

La implementació final dependrà de les tecnologies reals de producció.

Abans d'afegir un banner de cookies, auditar què s'està carregant realment. No incorporar un banner genèric sense correspondència amb les cookies o serveis utilitzats.

Si només hi ha tecnologies estrictament necessàries, la solució pot ser diferent de la d'una web amb analítica, publicitat o embeds que requereixin consentiment.

La web és bilingüe (català a `/`, castellà a `/es/`). Quan s'implementi el
bàner/CMP definitiu, haurà de funcionar íntegrament en tots dos idiomes
(text, categories, botons, preferències i enllaç a la política de cookies),
coherent amb l'idioma de la pàgina on es mostri. No s'ha d'afegir cap bàner
provisional ni cap script de mesurament abans d'aquesta fase.

## Ressenyes

Comprovar abans de publicació:

- font real de les ressenyes;
- fidelitat del text;
- atribució correcta;
- si existeix autorització o base adequada per mostrar identificació de la persona;
- que no s'alteri el sentit del comentari;
- que cap dada sensible sigui exposada.

## Dades de la desenvolupadora

**Prohibit** utilitzar dades d'Abril Rodríguez com a substitut temporal de dades legals de Glòria.

Això inclou, entre d'altres:

- DNI/NIF;
- domicili;
- telèfon;
- correu personal;
- informació fiscal;
- qualsevol altra dada personal.

Els placeholders de desenvolupament han de ser textuals i evidents, per exemple: `[PENDENT CONFIRMAR NIF]`.

## Abans de publicar

Revisió obligatòria:

1. confirmar dades amb Glòria;
2. actualitzar els textos legals;
3. auditar formularis i serveis externs;
4. auditar cookies reals;
5. eliminar placeholders;
6. comprovar footer i enllaços legals;
7. validar que el domini i el titular indicats coincideixen amb la realitat;
8. obtenir, si escau, revisió jurídica definitiva.
