# Pla SEO preliminar

## Objectiu

Preparar la web perquè pugui posicionar de manera clara i natural la presència professional de **Glòria Solsona Martí** i les seves àrees de servei, especialment en cerques locals, sense forçar keyword stuffing.

## Abans de publicar

Cal confirmar:

- domini definitiu;
- ubicació professional exacta;
- municipi/àrea geogràfica de servei;
- àrees jurídiques definitives;
- telèfon i correu professionals;
- col·legiació i dades professionals que sigui pertinent mostrar;
- idiomes d'atenció;
- si existeix o es crearà perfil de Google Business Profile.

## SEO on-page

### Title

Ha de ser específic, natural i coherent amb els serveis confirmats.

Exemple provisional, NO definitiu:

`Glòria Solsona Martí | Advocada a [ubicació]`

No publicar `[ubicació]` fins que estigui validada.

### Meta description

Redacció humana, informativa i aproximadament dins una longitud raonable per a resultats de cerca. No inventar especialitats.

### Jerarquia de capçaleres

- un únic `h1` principal;
- `h2` per blocs principals;
- `h3` només quan existeixi una jerarquia real;
- no utilitzar headings només per estil visual.

## Contingut

Prioritzar:

- nom complet professional;
- què fa;
- per a qui;
- àrees jurídiques reals;
- ubicació real;
- forma de contacte;
- contingut clar, útil i no duplicat.

Evitar:

- repetir artificialment «advocada» i la ubicació;
- crear pàgines buides per cada keyword;
- textos genèrics produïts només per SEO;
- claims no demostrables.

## SEO local

Quan les dades estiguin confirmades, mantenir consistència NAP quan sigui aplicable:

- Name;
- Address;
- Phone.

Valorar:

- Google Business Profile;
- mapa integrat;
- dades estructurades adequades;
- mencions naturals de l'àrea geogràfica dins del contingut.

## Dades estructurades

Valorar schema.org adequat al negoci jurídic, probablement dins la família `LegalService` / `ProfessionalService`, segons l'estructura final i les recomanacions vigents en el moment de publicació.

No afegir:

- puntuacions agregades inventades;
- dades de ressenyes que no compleixin les polítiques aplicables;
- dades professionals no confirmades.

## Open Graph i xarxes

Preparar:

- `og:title`;
- `og:description`;
- `og:image`;
- `og:url`;
- metadades socials equivalents quan sigui necessari.

La imatge social ha de formar part de la identitat de Glòria, no d'Abril ni d'altres projectes.

## Indexació

Durant desenvolupament o preview privada:

- evitar indexació accidental;
- no confiar només en `robots.txt` per protegir informació sensible;
- no incloure informació sensible en una preview pública.

En producció:

- `robots.txt` coherent;
- `sitemap.xml`;
- canonical correctes;
- URLs netes;
- pàgina 404 si l'arquitectura ho requereix.

## Hreflang i canonical (arquitectura CA/ES)

La web té versió catalana (`/`) i versió castellana (`/es/`), generades a partir
d'un únic diccionari de traducció (`src/i18n/es.json` + `scripts/build-i18n.py`).

**Pendent deliberadament fins tenir domini definitiu**: no s'ha afegit cap
`canonical` ni `hreflang` amb URL absoluta, per no inventar un domini que
encara no existeix. Abans de publicar caldrà implementar, com a mínim:

- `canonical` propi de cada pàgina, apuntant a la seva pròpia URL absoluta;
- relacions `hreflang` recíproques entre cada parell CA/ES equivalent
  (català → català, català → castellà, castellà → català, castellà → castellà);
- `x-default` si l'arquitectura final ho fa pertinent.

## Imatges

- noms de fitxer comprensibles quan sigui útil;
- `alt` descriu la funció o contingut de la imatge, no keywords;
- dimensions definides per evitar CLS;
- formats moderns quan sigui convenient.

## Rendiment i SEO tècnic

Revisar:

- Core Web Vitals;
- pes d'imatges;
- càrrega de fonts;
- HTML semàntic;
- enllaços trencats;
- indexabilitat real de continguts importants.

## Després de publicar

Quan existeixi el domini definitiu:

- verificar Search Console;
- enviar sitemap;
- comprovar indexació;
- revisar títols/descripcions reals;
- monitorar errors tècnics;
- revisar resultats locals després d'un període raonable.
