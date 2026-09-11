# QA checklist

Utilitzar aquesta checklist abans de considerar la web preparada per validació o publicació.

## Contingut

- [ ] Nom de Glòria escrit correctament a tot arreu.
- [ ] Cap dada professional inventada.
- [ ] Cap placeholder accidental visible.
- [ ] Cap dada personal d'Abril Rodríguez.
- [ ] Serveis i textos validats amb Glòria.
- [ ] Ressenyes revisades i atribuïdes correctament.
- [ ] Cinc estrelles visibles a cada ressenya segons el disseny aprovat.
- [ ] Text «El dret al servei de les persones» correcte.
- [ ] Contacte real verificat.
- [ ] WhatsApp només si està confirmat.

## Disseny visual

- [ ] Fidelitat a la landing aprovada.
- [ ] Franges grises presents als punts previstos.
- [ ] Espai vertical entre seccions coherent.
- [ ] Contacte prou airejat.
- [ ] Targetes de ressenyes visualment equilibrades.
- [ ] Espai correcte entre text, atribució i estrelles.
- [ ] Fletxes/controls del carrusel ben situats.
- [ ] No hi ha elements que semblin una plantilla genèrica.

## Responsive

Comprovar manualment:

- [ ] 1440 px o superior.
- [ ] 1280–1366 px.
- [ ] 1024 px.
- [ ] 768 px.
- [ ] 430 px.
- [ ] 390 px.
- [ ] 360 px.

En tots els casos:

- [ ] Sense scroll horitzontal accidental.
- [ ] Sense textos tallats.
- [ ] Sense superposicions.
- [ ] Navegació usable.
- [ ] CTA accessibles.
- [ ] Mapa responsive.
- [ ] Ressenyes usables amb tacte.
- [ ] Footer correcte.

## Accessibilitat

- [ ] Un únic `h1` coherent.
- [ ] Jerarquia de headings correcta.
- [ ] HTML semàntic.
- [ ] Enllaços descriptius.
- [ ] `alt` adequats a les imatges.
- [ ] Inputs amb `label` real.
- [ ] Navegació completa amb teclat.
- [ ] Focus visible.
- [ ] Contrast suficient.
- [ ] Controls tàctils de mida adequada.
- [ ] `prefers-reduced-motion` respectat.
- [ ] Carrusel no depèn només de gestos o hover.

## Funcionalitat

- [ ] Menú funciona.
- [ ] Enllaços interns funcionen.
- [ ] Telèfon obre l'acció correcta si s'utilitza `tel:`.
- [ ] Correu funciona si s'utilitza `mailto:`.
- [ ] WhatsApp funciona només amb número verificat.
- [ ] Google Maps mostra la ubicació correcta.
- [ ] Controls de ressenyes funcionen.
- [ ] Formulari no fingeix enviaments si no hi ha backend.
- [ ] Validació del formulari accessible.
- [ ] No hi ha errors rellevants a la consola.

## SEO

- [ ] `<title>` definitiu.
- [ ] Meta description definitiva.
- [ ] Canonical correcta.
- [ ] Open Graph correcte.
- [ ] Favicon i icones correctes.
- [ ] `robots.txt` segons entorn.
- [ ] `sitemap.xml` en producció.
- [ ] Schema revisat i sense dades inventades.
- [ ] Imatges dimensionades i optimitzades.
- [ ] No hi ha pàgines de producció amb `noindex` accidental.

## Rendiment

- [ ] Imatges optimitzades.
- [ ] No es carreguen fonts o pesos innecessaris.
- [ ] JavaScript limitat al necessari.
- [ ] No hi ha grans layout shifts.
- [ ] Recursos no crítics es carreguen de manera adequada.
- [ ] Revisió Lighthouse / DevTools realitzada.

## Legal i privacitat

- [ ] Avís legal complet i revisat.
- [ ] Política de privacitat completa i revisada.
- [ ] Política de cookies coherent amb les tecnologies reals.
- [ ] Formulari alineat amb privacitat.
- [ ] Google Maps revisat des del punt de vista de tercers/cookies.
- [ ] Analítica, si n'hi ha, configurada correctament.
- [ ] No es carreguen trackers inesperats.
- [ ] Cap dada privada de desenvolupament al codi públic.

## Git i desplegament

- [ ] `git status` net abans del release.
- [ ] Canvis importants documentats en commits.
- [ ] Cap secret versionat.
- [ ] `.env` exclòs quan correspongui.
- [ ] Branca de producció correcta.
- [ ] Preview validada abans del desplegament.
- [ ] Domini i DNS només configurats després d'aprovació.

## Validació final amb Glòria

- [ ] Dades professionals.
- [ ] Dades de contacte.
- [ ] Serveis.
- [ ] Ressenyes.
- [ ] Ubicació.
- [ ] Textos.
- [ ] Pàgines legals.
- [ ] Versió mòbil.
- [ ] Autorització explícita per publicar.
