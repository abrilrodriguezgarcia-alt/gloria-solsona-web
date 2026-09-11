# Landing master specification — Glòria Solsona Martí

> Document mestre per implementar la landing aprovada. Aquest document descriu la composició, el contingut, el comportament i els criteris de fidelitat visual que Claude Code haurà de respectar durant el desenvolupament.

## 0. Jerarquia de referències

Quan hi hagi dubtes, l'ordre de prioritat és:

1. **Imatge final aprovada de la landing** — referència visual principal.
2. **Aquest document** — explica el que no es pot deduir només mirant la imatge.
3. `CLAUDE.md` — regles generals de treball.
4. `docs/technical-spec.md`, `docs/content-status.md`, `docs/seo-plan.md`, `docs/legal-requirements.md` i `docs/qa-checklist.md`.

No s'ha de reinterpretar ni redissenyar la landing per criteri propi. Si una millora tècnica obliga a modificar una decisió visual, s'ha de documentar abans de canviar-la.

## 1. Fitxer visual de referència

La imatge aprovada s'ha de conservar dins del projecte i no dependre d'una ubicació externa del Mac.

**Ruta canònica prevista:**

`assets/reference/landing-approved.png`

La imatge que actualment és a `Documentos/gloria-solsona-web` s'ha de moure o copiar a aquesta ruta mantenint-ne l'original com a referència visual.

No utilitzar aquesta captura directament com a web ni reconstruir la pàgina com una sola imatge. S'ha de convertir en HTML, CSS i assets reals.

## 2. Estat del disseny

**ESTAT: APROVAT.**

La direcció visual, l'ordre de seccions i la composició desktop de la landing es consideren aprovats.

Això implica que Claude Code **no ha de**:

- proposar una nova direcció visual;
- canviar l'ordre de les seccions;
- convertir les seccions en targetes si a la maqueta no ho són;
- substituir el llenguatge editorial per una estètica SaaS o de plantilla;
- afegir gradients, glassmorphism, ombres fortes o efectes gratuïts;
- compactar els espais amplis;
- canviar la relació entre fotografia i text del hero;
- introduir colors aliens a la identitat visual;
- afegir seccions noves sense aprovació.

## 3. Personalitat visual

La web ha de transmetre:

- rigor jurídic;
- professionalitat;
- serenitat;
- proximitat;
- experiència;
- confiança;
- tracte humà;
- elegància editorial contemporània.

La sensació general ha de ser de **despatx professional amb identitat pròpia**, no de plantilla jurídica genèrica.

### 3.1 Paleta

La maqueta es construeix principalment amb:

- blau marí profund com a color de marca i de text principal;
- blanc i blanc trencat;
- gris/blau molt pàl·lid per a franges de separació;
- gris neutre per a text secundari;
- blau marí fosc al footer.

Els valors hexadecimals exactes s'han d'extreure dels assets de marca o de la maqueta en implementar. No substituir-los per una paleta arbitrària.

### 3.2 Tipografia

Hi ha dos registres tipogràfics clars:

- **serif editorial d'alt contrast** per a H1, títols de secció, números grans, cites i elements de marca;
- **sans serif neta i discreta** per a navegació, cos de text, dades de contacte i microcopy.

No escollir tipografies definitives per aproximació si encara no s'ha confirmat la família exacta del disseny. La tipografia ha de mantenir una aparença editorial i jurídica, no tecnològica.

### 3.3 Recursos recurrents

Conservar:

- línies fines blau marí;
- separadors verticals molt lleugers;
- gran quantitat d'espai en blanc;
- números `01`, `02`, `03` com a element editorial;
- monograma `GS` utilitzat de manera subtil;
- jerarquia molt clara entre titular, subtítol i cos.

## 4. Estructura global exacta

Ordre desktop aprovat:

1. Header integrat al hero.
2. Hero.
3. Àrees de pràctica.
4. Presentació de Glòria Solsona Martí.
5. Trajectòria.
6. Ressenyes.
7. Contacte + Ubicació.
8. Footer.

Les pàgines `Avís legal`, `Privacitat` i `Cookies` són pàgines independents accessibles des del footer; no formen part de l'scroll principal.

---

# 5. Header + Hero

## 5.1 Composició desktop

El hero ocupa la primera gran pantalla de la web i és la peça visual principal.

La composició està dividida visualment en dues zones:

- esquerra: fons clar amb logo, titular i informació;
- dreta: fotografia principal de Glòria asseguda.

La divisió **no ha de semblar un tall dur de dues columnes**. A la zona central hi ha una transició/fusió suau entre el fons clar i la fotografia.

La fotografia té un pes visual molt important i ha de conservar la postura i el context arquitectònic. Evitar crops agressius que tallin el cap, les mans o facin desaparèixer la lectura de la persona asseguda.

## 5.2 Logo

Situació: part superior esquerra.

El logo combina:

- monograma `GS`;
- denominació professional;
- nom `Glòria Solsona Martí`.

**PUNT A VALIDAR ABANS DE PUBLICAR:** a la maqueta el logotip mostra la paraula `Advocat`, mentre que el titular principal diu `Advocada`. No corregir automàticament el fitxer de marca: confirmar si `Advocat` forma part del logo oficial o si s'ha d'actualitzar a `Advocada`.

## 5.3 Navegació desktop

Ubicació: part superior dreta, sobre la zona fotogràfica/clara segons el punt de viewport.

Ítems:

- `Àrees`
- `Glòria`
- `Ressenyes`
- `Contacte`

Comportament:

- cada ítem apunta a l'anchor corresponent;
- hover i focus subtils;
- focus de teclat visible;
- no utilitzar animacions cridaneres;
- si s'utilitza smooth scroll, respectar `prefers-reduced-motion`.

## 5.4 Contingut principal del hero

Text visible aprovat a la maqueta:

**H1:**

`Glòria Solsona Martí`

**Subtítol:**

`Advocada`

**Àrees destacades:**

- `Dret de família`
- `Dret successori`
- `Dret civil català`

**CTA:**

`Contacte →`

El CTA ha d'anar a la secció de contacte de la mateixa pàgina.

## 5.5 Monograma decoratiu

A la part baixa de la zona esquerra apareix un `GS` de gran format i opacitat molt baixa.

És decoratiu:

- `aria-hidden="true"` si es recrea com a element;
- no ha de competir amb el text;
- no ha de perdre's totalment però tampoc destacar.

## 5.6 Frase editorial

A la part inferior dreta, sobre la fotografia:

`“El dret al servei de les persones.”`

Característiques:

- serif cursiva/editorial;
- color clar sobre la fotografia;
- alineació i ubicació similars a la maqueta;
- no centrar-la arbitràriament;
- mantenir-la visualment vinculada a la zona inferior dreta del hero.

La frase ha d'anar acompanyada del petit recurs de línies fines de la maqueta.

---

# 6. Àrees de pràctica

## 6.1 Fons i estructura

Franja ampla en gris/blau molt pàl·lid.

No utilitzar targetes amb fons independent, ombres o cantonades arrodonides.

Desktop:

- columna introductòria a l'esquerra;
- tres àrees numerades a la dreta;
- separadors verticals fins entre blocs.

## 6.2 Introducció

**Títol:**

`Àrees de pràctica`

**Text:**

`Assessorament especialitzat en dret de família, successions i dret civil català.`

Incloure la petita línia horitzontal sota el titular segons la maqueta.

## 6.3 Àrees

### 01
`Dret de família`

### 02
`Dret successori`

### 03
`Dret civil català`

Els números són part important de la composició editorial i han de tenir més jerarquia que un simple label.

---

# 7. Bloc Glòria Solsona Martí

## 7.1 Composició

Fons clar/blanc.

Desktop:

- fotografia de retrat a l'esquerra;
- text a la dreta;
- molt aire al voltant;
- fotografia rectangular sense aparença de targeta.

No convertir el bloc en un `about card` convencional.

## 7.2 Contingut visible

**Títol:**

`Glòria Solsona Martí`

**Text de la maqueta:**

`Especialista en dret de família, dret successori i dret civil català. Més de 25 anys de professionalitat al teu servei, amb dedicació i formació continuada.`

Incloure el petit accent de línia sota el titular.

**ESTAT DEL TEXT:** mantenir aquesta redacció com a copy de referència visual. Abans de publicació, contrastar-la amb la informació professional validada per la Glòria si es modifica qualsevol dada objectiva.

---

# 8. Trajectòria

## 8.1 Composició

Franja gris/blau molt pàl·lid.

Desktop dividit en tres zones:

1. títol i frase introductòria;
2. dada `25+` al centre;
3. text de posicionament a la dreta.

Separadors verticals fins entre zones.

## 8.2 Textos

**Títol:**

`Trajectòria`

**Intro:**

`Tota una vida dedicada al dret.`

**Dada principal:**

`25+`

**Label:**

`ANYS DE TRAJECTÒRIA`

**Text dret:**

`Un exercici de l'advocacia basat en el rigor, la proximitat i el compromís amb cada persona.`

La dada `25+` és un element visual central i no s'ha de reduir a un petit badge.

---

# 9. Ressenyes

## 9.1 Composició desktop

Fons clar.

La secció es divideix en:

- columna introductòria a l'esquerra;
- tres ressenyes visibles en paral·lel en desktop;
- separadors verticals fins.

No utilitzar targetes flotants amb ombra.

## 9.2 Introducció

**Títol:**

`Ressenyes`

**Text:**

`La confiança dels qui m'han acompanyat també es reflecteix en les seves paraules.`

Controls de navegació:

`←` i `→`

La posició de referència és sota el text introductori, amb espai suficient i sense competir amb les ressenyes.

## 9.3 Ressenyes visibles a la maqueta

### Ressenya 1

`“Des del primer moment em vaig sentir escoltada i acompanyada.”`

★★★★★

`Opinió a Google`

### Ressenya 2

`“La Glòria no només defensa; escolta, entén i acompanya.”`

★★★★★

`Opinió a Google`

### Ressenya 3

`“A més de ser una gran professional, transmet confiança i tranquil·litat en tot moment.”`

★★★★★

`Opinió a Google`

## 9.4 Regles visuals

- Les tres ressenyes han de percebre's amb una alçada coherent.
- Les cinc estrelles han de ser visibles a totes.
- La tercera ressenya, encara que tingui més text, ha de conservar **espai suficient entre el final del text i les estrelles**.
- No enganxar les estrelles al cos de la ressenya.
- Els controls anterior/següent han de ser accessibles per teclat.
- En mòbil el component pot passar a una ressenya per vista.

## 9.5 Estat del contingut

Les frases de la maqueta són la referència actual. Abans de publicar, verificar que el text que es presenti com a opinió de Google correspon a ressenyes reals/aprovades i que la manera d'atribuir-les és correcta.

No inventar noms de persones, dates ni puntuacions.

---

# 10. Contacte + Ubicació

## 10.1 Composició

Franja clara/gris molt pàl·lid.

> **Addenda (2026-09-11, instrucció expressa):** en incorporar-se el
> formulari de contacte, la composició de dues columnes es reorganitza:
>
> - esquerra: `Contacte` (dades + `Ubicació`/Google Maps, apilats);
> - dreta: formulari de contacte.
>
> Substitueix la composició original d'aquest apartat (`Contacte` |
> `Ubicació`). Vegeu §10.5 per al formulari.

Desktop en dues columnes:

- esquerra: `Contacte` (dades de contacte + `Ubicació`/mapa);
- dreta: formulari de contacte.

Separador vertical al centre.

El bloc ha de tenir **aire**. No compactar text, dades i mapa.

## 10.2 Contacte

**Títol:**

`Contacte`

**Text introductori:**

`Per concertar una consulta o demanar més informació, podeu contactar directament amb el despatx.`

**Dades mostrades a la maqueta:**

- **Telèfon:** `93 277 79 95`
- **Correu:** `gloria@gloriasolsona.cat`
- **Adreça:** `Carrer Pintor Carbonell, 17-19 entresol, 08750 Molins de Rei, Barcelona`

Comportament:

- telèfon amb `tel:`;
- correu amb `mailto:`;
- l'adreça pot enllaçar a Google Maps si convé;
- conservar jerarquia etiqueta/valor de la maqueta.

## 10.3 WhatsApp

**PENDENT DE CONFIRMACIÓ.**

La intenció és incorporar-lo només si la Glòria confirma que el despatx en disposa i facilita el número professional que s'ha d'utilitzar.

No mostrar WhatsApp abans d'aquesta confirmació.

## 10.4a Horari

**PENDENT DE CONFIRMACIÓ** (docs/client-validation-checklist.md).

No mostrar horari d'atenció fins que la Glòria el confirmi.

## 10.4 Ubicació

**Títol:**

`Ubicació`

La il·lustració/mapa estàtic de la maqueta és només una **referència de composició**. A la web final s'ha de substituir per un **Google Maps embed real** si la validació legal/privacitat ho permet.

Regles:

- no repetir una segona línia d'adreça sota el mapa només per omplir espai;
- el mapa ha d'ocupar el bloc visual previst;
- aspect ratio estable;
- responsive;
- `loading="lazy"` quan sigui adequat;
- `title` accessible;
- revisar consentiment/cookies abans de producció.

## 10.5 Formulari de contacte

Afegit 2026-09-11 (instrucció expressa) a la columna dreta del bloc.

**Títol:** `Envia'ns un missatge`.

**Camps:** Nom i cognoms* · Correu electrònic* · Telèfon · Missatge*, amb
nota discreta sota el missatge sobre no incloure informació confidencial, i
checkbox obligatori d'acceptació de la Política de privacitat.

**Botó:** `Enviar consulta`.

Sense backend propi: preparat per connectar amb un servei extern senzill
(p. ex. Formspree) — vegeu `FORM_ENDPOINT` a `src/components/contact-form.js`.
No s'ha d'activar cap enviament real fins que la clienta confirmi
compte/endpoint (docs/legal-requirements.md, secció «Formulari de
contacte»).

Estil: sense `border-radius` (coherent amb la resta de la landing, que no en
fa servir enlloc), tipografia i colors dels tokens existents, botó ple en
`--color-navy` (primer botó ple de la landing; fins ara només hi havia
CTAs de text subratllat).

---

# 11. Footer

## 11.1 Composició

Fons blau marí fosc.

Primera línia:

- logo/identitat a l'esquerra en versió clara;
- enllaços legals a la dreta.

Enllaços:

- `Avís legal`
- `Privacitat`
- `Cookies`

Separació mitjançant petits divisors verticals segons la maqueta.

Segona línia:

`© 2026 Glòria Solsona Martí. Tots els drets reservats.`

No incloure crèdits ni dades personals de la desenvolupadora tret que s'acordi expressament més endavant.

---

# 12. Responsive

La maqueta aprovada mostra principalment desktop, però la implementació ha de preservar la seva jerarquia en tots els dispositius.

## 12.1 Desktop gran — 1440 px+

- mantenir composició molt propera a la maqueta;
- hero ampli;
- tres àrees en paral·lel;
- retrat + bio en dues columnes;
- trajectòria en tres zones;
- tres ressenyes visibles;
- contacte + mapa en dues columnes.

## 12.2 Portàtil — aproximadament 1280–1366 px

És un punt crític.

No s'accepta:

- tallar contingut perquè la composició s'hagi pensat només per monitor gran;
- nav sobreposada al logo;
- H1 que envaeixi la fotografia de manera no prevista;
- ressenyes comprimides;
- mapa massa petit;
- overflow horitzontal.

Ajustar `clamp()`, grids i paddings abans de canviar l'estructura conceptual.

## 12.3 Tablet — aproximadament 768–1024 px

Es pot reduir el nombre de columnes quan sigui necessari, però mantenint:

- ordre narratiu;
- números de les àrees;
- identitat editorial;
- separadors reinterpretats amb criteri;
- espaiat generós.

## 12.4 Mòbil — 360–430 px

Directrius:

- header compacte i accessible;
- si la navegació desktop no hi cap, utilitzar menú mòbil simple i discret;
- hero en composició vertical o híbrida, sense amagar la fotografia principal;
- H1 llegible i sense salts absurds;
- àrees de pràctica apilades;
- bio apilada;
- `25+` continua tenint jerarquia;
- ressenyes: una per vista, controls accessibles i suport tàctil;
- Contacte abans d'Ubicació;
- mapa ample disponible;
- footer apilat amb ordre clar.

No reduir simplement tota la maqueta desktop a escala.

---

# 13. Microinteraccions i moviment

La web ha de sentir-se refinada, no estàtica, però les animacions han de ser secundàries.

Permès:

- transicions de color/opacitat en links;
- aparicions molt suaus i curtes si aporten poliment;
- moviment discret del carrusel;
- feedback visual de botons i controls.

Evitar:

- parallax intens;
- text que aparegui lletra per lletra;
- animacions llargues abans de poder llegir;
- elements que es moguin contínuament;
- efectes 3D;
- animacions que desplacin el layout.

Sempre respectar `prefers-reduced-motion`.

---

# 14. Accessibilitat obligatòria

- un únic `h1`;
- jerarquia de headings lògica;
- landmarks HTML semàntics;
- links i botons reals, no `div` clicables;
- focus visible;
- contrast WCAG 2.2 AA quan sigui aplicable;
- `alt` descriptiu a fotografies rellevants;
- elements purament decoratius ocults a tecnologies assistives;
- labels accessibles per als controls del carrusel;
- navegació íntegra per teclat;
- targetes tàctils suficients en mòbil;
- no dependre només del color per indicar interacció.

---

# 15. SEO i semàntica de la landing

La implementació visual no ha de sacrificar semàntica.

Estructura recomanada:

- `<header>`: identitat + navegació;
- `<main>`;
- `<section id="arees">`;
- `<section id="gloria">`;
- `<section id="trajectoria">`;
- `<section id="ressenyes">`;
- `<section id="contacte">`;
- `<footer>`.

No definir el `title`, meta description o schema local amb dades no validades només perquè encaixin amb SEO. Seguir `docs/seo-plan.md`.

---

# 16. Assets necessaris

Abans de finalitzar la implementació, el projecte ha de tenir els assets organitzats, idealment:

```text
assets/
├── brand/
│   ├── logo-dark.*
│   ├── logo-light.*
│   └── monogram-gs.*
├── images/
│   ├── gloria-hero.*
│   └── gloria-portrait.*
└── reference/
    └── landing-approved.png
```

Utilitzar SVG per a logos si existeixen originals vectorials.

Les fotografies s'han d'optimitzar per web, però **no s'ha de substituir la fotografia aprovada per una imatge generada o stock**.

---

# 17. Contingut: què queda bloquejat i què queda pendent

## Bloquejat visualment

- ordre de seccions;
- direcció gràfica;
- relació serif/sans;
- blau marí + neutres;
- composició editorial;
- hero amb fotografia principal;
- tres àrees de pràctica;
- bloc de Glòria;
- trajectòria amb `25+`;
- secció de ressenyes amb cinc estrelles;
- Contacte + Ubicació;
- footer fosc.

## Pendent de confirmar abans de producció

- si el logo ha de dir `Advocat` o `Advocada`;
- font/famílies tipogràfiques exactes si encara no estan documentades;
- textos literals finals de les ressenyes i la seva atribució;
- existència i número de WhatsApp professional;
- dades legals necessàries per Avís legal, Privacitat i Cookies;
- configuració final de cookies/consentiment relacionada amb Google Maps;
- domini i hosting;
- qualsevol dada professional que `docs/content-status.md` continuï marcant com a pendent.

---

# 18. Criteri de fidelitat visual

La implementació es considerarà fidel quan, comparada costat a costat amb la imatge aprovada:

- la jerarquia sigui equivalent;
- la fotografia ocupi un pes similar;
- els espais verticals respirin de manera equivalent;
- els títols tinguin escala i caràcter similars;
- les franges clares/grises apareguin als mateixos blocs;
- els separadors verticals conservin la composició;
- els controls de ressenyes estiguin integrats;
- el footer tingui el mateix pes visual;
- no aparegui cap component visual alien al llenguatge aprovat.

No cal reproducció pixel-perfect cega si perjudica responsive o accessibilitat, però qualsevol adaptació ha de conservar **la intenció de disseny**.

---

# 19. Checklist específica abans de donar la landing per implementada

- [ ] Header i logo alineats amb la maqueta.
- [ ] Navegació porta als anchors correctes.
- [ ] Hero manté la composició text/fotografia.
- [ ] Frase `El dret al servei de les persones` està situada correctament.
- [ ] Monograma GS és subtil.
- [ ] Àrees de pràctica tenen 01/02/03 i separadors.
- [ ] Bloc Glòria respecta foto esquerra + text dret en desktop.
- [ ] Trajectòria dona protagonisme real a `25+`.
- [ ] Cada ressenya mostra cinc estrelles.
- [ ] Hi ha espai suficient entre el text de la tercera ressenya i les estrelles.
- [ ] Fletxes de ressenyes són funcionals i accessibles.
- [ ] Bloc Contacte conserva aire.
- [ ] Telèfon i correu són clicables.
- [ ] Google Maps substitueix el mapa decoratiu quan pertoqui.
- [ ] No hi ha adreça duplicada dins del bloc d'Ubicació.
- [ ] Footer inclou Avís legal, Privacitat i Cookies.
- [ ] No apareix cap dada d'Abril Rodríguez en contingut públic.
- [ ] Desktop gran verificat.
- [ ] Mac/portàtil 1280–1366 verificat.
- [ ] Tablet verificat.
- [ ] Mòbil 360–430 verificat.
- [ ] Navegació per teclat verificada.
- [ ] `prefers-reduced-motion` verificat.
- [ ] No hi ha overflow horitzontal.
- [ ] No hi ha dades inventades.

---

# 20. Instrucció final per a Claude Code

**No comencis redissenyant. Comença reproduint.**

Abans d'escriure el primer component de la landing:

1. llegeix `CLAUDE.md`;
2. llegeix aquest document complet;
3. consulta `assets/reference/landing-approved.png`;
4. revisa la resta de `/docs`;
5. identifica quins assets reals falten;
6. només llavors proposa l'estructura de fitxers i inicia la implementació.

Si detectes una discrepància entre la captura i un document, **no l'arreglis silenciosament**. Indica-la i utilitza la decisió més recent confirmada al projecte.
