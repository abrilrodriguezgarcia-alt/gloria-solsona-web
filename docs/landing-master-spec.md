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

1. Header (franja superior pròpia — vegeu nota FASE 3 a §5.1).
2. Hero.
3. Àrees de pràctica.
4. Presentació de Glòria Solsona Martí.
5. Trajectòria.
6. **El despatx** (afegida a petició expressa, 2026-09-11 — vegeu §8a).
7. Ressenyes.
8. Contacte + Ubicació.
9. Footer.

Les pàgines `Avís legal`, `Privacitat` i `Cookies` són pàgines independents accessibles des del footer; no formen part de l'scroll principal.

---

# 5. Header + Hero

## 5.1 Composició desktop

**Actualització (FASE 3, 2026-09-13, instrucció expressa) — substitueix
"header integrat al hero" per a la navegació:** el logo i el menú ja no
viuen superposats a la fotografia. Formen una franja superior pròpia
(`.site-header__bar`), de fons clar (igual que la resta de la web) i
separada de la foto per un sol filet fi, per sota de la qual comença el
hero (foto + titular). Motiu: la solució anterior (menú sobre la foto,
llegit gràcies a un halo de llum darrere el text) es considerava forçada,
poc elegant i inconsistent amb el to editorial de la web. La resta de la
composició del hero (foto+titular a sota de la franja) no canvia.

El hero ocupa la primera gran pantalla de la web i és la peça visual principal.

La composició està dividida visualment en dues zones:

- esquerra: fons clar amb titular i informació;
- dreta: fotografia principal de Glòria asseguda.

La divisió **no ha de semblar un tall dur de dues columnes**. A la zona central hi ha una transició/fusió suau entre el fons clar i la fotografia.

La fotografia té un pes visual molt important i ha de conservar la postura i el context arquitectònic. Evitar crops agressius que tallin el cap, les mans o facin desaparèixer la lectura de la persona asseguda.

## 5.2 Logo

Situació: part superior esquerra (des de FASE 3, dins la franja superior
`.site-header__bar`, no sobre la fotografia).

El logo combina:

- monograma `GS`;
- denominació professional;
- nom `Glòria Solsona Martí`.

**PUNT A VALIDAR ABANS DE PUBLICAR:** el logotip oficial mostra la paraula `Advocat`, mentre que el titular principal diu `Advocada`. No corregir automàticament el fitxer de marca: confirmar amb la clienta si `Advocat` forma part del logo oficial o si s'ha d'actualitzar a `Advocada` (docs/client-validation-checklist.md).

**Historial (ja no vigent):** a FASE 2 (2026-09-12) es va reconstruir el
lockup del header amb text real ("Glòria Solsona Martí" + "Advocada") en
lloc del logotip oficial, per evitar la incoherència visible amb
"Advocat". A FASE 7 (2026-09-12) es va provar el mateix criteri al footer,
però es va revertir de seguida a petició expressa perquè no funcionava
visualment. **A FASE 4 (2026-09-13, instrucció expressa) s'ha revertit
també el header:** la clienta ha confirmat que el logotip del menú ha de
ser el fitxer oficial (`assets/brand/logotip.png`) tal qual, amb el text
"Advocat" inclòs — no una reconstrucció amb "Advocada". Header i footer
fan servir ara el mateix component (`.logo` + `.logo__image`), coherents
entre ells. El punt de validació sobre si el fitxer oficial hauria de dir
"Advocat" o "Advocada" segueix obert i es resoldrà quan la clienta ho
confirmi definitivament.

## 5.3 Navegació desktop

Ubicació: part superior dreta, dins la franja superior clara
`.site-header__bar` (des de FASE 3 — vegeu §5.1 — ja no sobre la
fotografia).

Ítems (actualitzat 2026-09-12, instrucció expressa — substitueix la llista
de 4 ítems d'aquest apartat i el §8a.6, que deia explícitament que no
s'afegia `El despatx` al menú):

- `Àrees`
- `Glòria`
- `El despatx`
- `Ressenyes`
- `Contacte`

Comportament:

- cada ítem apunta a l'anchor corresponent;
- hover i focus subtils;
- focus de teclat visible;
- no utilitzar animacions cridaneres;
- si s'utilitza smooth scroll, respectar `prefers-reduced-motion`.

**Contrast sobre la fotografia — HISTÒRIC, ja no aplica (FASE 2,
2026-09-12; resolt de manera diferent a FASE 3, 2026-09-13):** es va
detectar que, segons el tram de la fotografia real i l'amplada de
viewport, alguns ítems (`Ressenyes`, `Contacte`) baixaven per sota de
4.5:1 de contrast (mesurat: 4.2:1 a ~1280px). La solució d'aleshores —un
halo de llum darrere el text del menú— es va considerar, a FASE 3, una
solució forçada i poc editorial. **La franja superior clara de §5.1
elimina el problema d'arrel:** el menú ja no és sobre la foto, així que no
calen halos, ombres ni cap altre efecte artificial de llegibilitat — el
text simplement és blau sobre un fons clar pla.

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

**Llegibilitat (FASE 3, 2026-09-13, instrucció expressa):** amb la
fotografia millorada (FASE 2, 2026-09-12) el racó inferior dret on cau la
frase inclou un tram de terra clar i la sabata, on ni l'ombra original ni
un halo complet al text donaven un acabat prou elegant. Solució escollida
d'entre les dues proposades pel client (reposicionar + suport visual
discret, vs. bloc editorial propi): **es manté la posició i es dona suport
amb un degradat radial molt subtil** (`.hero__media::after`,
`src/styles/components.css`) que enfosqueix lleugerament només aquest
racó de la fotografia, sense afectar la resta ni la lectura de la persona
asseguda. El text conserva només una ombra petita i neta (no un halo), ja
no depèn d'un efecte fort per llegir-se.

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

## 7.3 Fotografia: diapositiva de fotografies personals (addenda 2026-09-12)

Addenda a petició expressa: la fotografia de `7.1` ja no és un retall
estàtic del mateix asset del hero. Fins ara aquest bloc reutilitzava
`gloria-hero-provisional.jpg` (el retrat amb toga) amb un enquadrament
més tancat, de manera que el hero i l'apartat Glòria mostraven
essencialment la mateixa fotografia. Substituint aquesta decisió:

- La zona de fotografia (`.gloria__media`) mostra ara quatre fotografies
  personals noves, en seqüència automàtica amb encavalcament (fos),
  perquè l'apartat aporti una cara diferent, més propera i humana, sense
  duplicar el retrat formal del hero.
- Relació d'aspecte 4:5 (retrat vertical), no 8:5 com abans: les quatre
  fotografies són retrats, no un retall panoràmic.
- Comportament: avanç cada 5 segons, amb punts de navegació discrets i un
  botó de pausa/reproducció explícit (compleix WCAG 2.2.2); s'atura en
  passar-hi el ratolí o el focus i no arrenca automàticament si
  `prefers-reduced-motion` està actiu. Implementació a
  `src/components/gloria-slideshow.js`.
- Origen i advertència sobre el contingut de les fotografies (cap és
  fotografia professional ni de despatx; una és de context de
  platja/vacances): vegeu `docs/assets-status.md`, secció «Fotografies de
  l'apartat Glòria». La clienta/usuària va confirmar expressament
  voler-les fer servir totes quatre en seqüència després que Claude Code
  ho senyalés.
- El títol, la línia d'accent i el text de `7.2` no canvien.

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

## 8.3 Recurs gràfic: emblema balança/espasa/llorer

Addenda 2026-09-12 (instrucció expressa): s'incorpora com a element
editorial secundari de fons el símbol balança + espasa + llorer localitzat
al moodboard de la clienta (mateix univers gràfic que el monograma GS;
`assets/reference/WhatsApp Image 2026-09-11 at 20.41.03 (1).jpeg`). Aquesta
decisió **substitueix** la de §8a.5 ("no s'incorpora en aquesta
iteració"), que quedava condicionada a una futura fase institucional —
vegeu també docs/assets-status.md.

Ús:

- Asset: `assets/images/brand/trajectoria-emblem.png` (PNG amb
  transparència, retallat i acolorit en `--color-navy` a partir de la
  referència; no hi ha versió vectorial neta — vegeu nota d'assets).
- Purament decoratiu (`alt=""` + `aria-hidden="true"`), sense significat
  informatiu propi.
- Fons de la secció, a opacitat molt baixa (`opacity: 0.05`) i amb un
  lleuger `blur` de presentació (no redibuixa l'asset, només el suavitza
  en pantalla) perquè es llegeixi com a textura editorial, no com a
  pictograma.
- Col·locat a gran escala i descentrat (parcialment retallat per
  `overflow: hidden` de la secció), superposat a la zona de `25+` i el
  text de tancament, mai centrat exactament sobre la xifra.
- `25+` continua sent el protagonista visual; l'emblema no s'ha
  d'interpretar mai com una icona jurídica genèrica al costat del títol.
- Sense animació ni moviment: no li afecta `prefers-reduced-motion`.

---

# 8a. El despatx

Secció afegida a petició expressa (2026-09-11), entre Trajectòria i
Ressenyes. No formava part de la maqueta original aprovada; s'incorpora
com a refinament de personalitat visual compatible amb la direcció ja
aprovada (§0, §3.1), no com a redisseny.

## 8a.1 Objectiu

Transmetre proximitat, cultura, serenitat i identitat pròpia mostrant
l'espai real del despatx, sense esdevenir una galeria comercial.

## 8a.2 Textos

**Títol CA:** `El despatx` · **ES:** `El despacho`.

**Intro CA:** `Un espai proper, serè i pensat per atendre cada consulta amb
la discreció que requereix.`
**Intro ES:** `Un espacio cercano, sereno y pensado para atender cada
consulta con la discreción que requiere.`

**Frase editorial CA:** `«El compromís és un acte, no una paraula.»`
**ES:** `«El compromiso es un acto, no una palabra.»`

Aquesta frase és un element editorial secundari: mida i tractament
inferiors a la cita del hero (§5.6). Sense atribució d'autoria (no
confirmada).

## 8a.3 Composició

Graella editorial asimètrica (sense targetes, ombres ni border-radius):
foto principal amb pes visual, dues fotos secundàries de proporcions
diferents, bloc de text i bloc de frase editorial + accent gràfic. Mòbil:
apilat, foto principal primera **entre les fotografies** (vegeu
actualització següent sobre l'ordre exacte).

**Actualització (2026-09-12, revisió de ritme/composició global,
petició expressa):** la secció tenia massa aire vertical (per sobre del
`.section` per defecte i sense relació amb el ritme de Trajectòria/
Ressenyes) i el bloc de text quedava centrat en una franja sense cap
ancoratge visual abans de la placa editorial (§8a.5), fent-la sentir
com una peça independent flotant en blanc en lloc de formar una única
secció cohesionada. Canvis aplicats:

- **Ritme vertical:** `.despatx` adopta el mateix `padding-block:
  var(--space-28)` (7rem) que Trajectòria i Ressenyes a partir de
  1025px (abans usava el `.section` per defecte, 8rem — ritme
  Trajectòria → El despatx → Ressenyes ara consistent).
- **Alineació:** la columna de text (`.despatx__intro`) i la de
  biblioteca+monograma (nou embolcall `.despatx__side`) ara són columnes
  flex que ocupen tota l'alçada de la fila (`align-items: stretch` a
  `.despatx__layout`, que ha passat de dues files a una), amb la foto
  principal com a referència d'alçada (`align-self: start`, no s'estira).
  Això alinea el títol amb la part superior de les fotografies i la
  placa editorial amb la inferior (`margin-top: auto` a
  `.despatx__editorial`, només ≥901px), en lloc de quedar centrada amb
  un buit sense ancoratge.
- **Ordre a tablet/mòbil (canvi respecte a la iteració anterior):** la
  placa editorial (§8a.5) ara forma part del mateix bloc que el títol i
  el text (hi va niuada al DOM) i apareix immediatament després del
  paràgraf introductori, **abans** de les fotografies, en lloc d'anar
  encaixada entre la biblioteca i el monograma GS. Es manté "foto
  principal primera" entre les fotografies (segueix apareixent abans que
  biblioteca i monograma). Aquest reordenament és una decisió de ritme
  d'aquesta revisió, no una instrucció prèvia explícita: si en revisar-ho
  la clienta prefereix l'ordre anterior (placa entre fotos), cal
  documentar-ho i revertir-ho.
- Es manté sense tocar: disseny intern de la placa (accent + frase),
  selecció de fotografies, i la resta de seccions de la landing.

## 8a.4 Fotografies

Fotografies reals i **provisionals** del despatx (docs/assets-status.md),
seleccionades del moodboard de `assets/reference/` i copiades a
`assets/images/office/`. La foto principal s'ha retallat respecte
l'original per excloure una fotografia familiar personal visible sobre
l'escriptori (privacitat de tercers).

**Ampliació (2026-09-12, petició expressa):** s'incorporen dues
fotografies més (§8a.7) — detall de la llum de peu i pot de bolígrafs
(`office-detail-lamp.jpg`, ja preparada en una passada anterior però no
utilitzada fins ara) i el monograma `GS` brodat en un aro de fusta
(`office-gs-embroidery.jpg`, nou retall). Selecció final d'aquesta
iteració: zona d'atenció, biblioteca/escriptori, `GS` al vidre, llum
càlida i el brodat `GS` — cobreix les categories prioritàries del brief
sense repetir composicions. No s'ha utilitzat cap altra fotografia del
moodboard: la resta o bé és material de marca/mockup (targetes,
llibretes, papereria — no fotografia real del despatx), o bé mostra
il·lustracions personals de la clienta alienes a aquesta secció, o té
problemes de privacitat (fotografies familiars identificables en una
prestatgeria de fons) que no s'han resolt en aquesta passada.

## 8a.5 Recurs gràfic: màquina d'escriure

**Substituït (2026-09-12, petició expressa).** L'accent ja no és el
retall fotogràfic d'una pintura (`typewriter-detail.jpg`, es manté al
repositori sense utilitzar-se). Ara és una **il·lustració de línia**
(`assets/images/brand/typewriter-line-navy.png`) extreta de
`assets/reference/WhatsApp Image 2026-09-11 at 20.41.03.jpeg` —part del
mateix material de mockup de marca que ja s'havia fet servir per a
`assets/images/brand/trajectoria-emblem.png` (mateix fons pla navy
`rgb(23,28,48)`, mateix mètode de chroma-key a transparència real), sense
retocar ni redibuixar el traç original.

**Advertència sobre el text "Advocat":** l'asset original de referència
mostra la màquina amb un full a la carro amb el monograma `GS` i el text
"Advocat Glòria Solsona Martí" (el mateix mockup de papereria de marca
que apareix a altres imatges del moodboard). Com que la web fa servir
"Advocada", **el retall final exclou completament aquest full/text**: es
talla la imatge per mostrar només el cos de la màquina (carro, teclat,
placa "ROYAL"), sense cap paraula visible. No s'ha editat ni generat cap
versió alternativa del logotip — només s'ha triat quina part de la
il·lustració original es mostra. **Pendent de validar amb la clienta:**
si en el futur es vol recuperar el full amb el monograma (per exemple,
quan es confirmi "Advocada" al sistema de marca), caldria un nou retall
del mateix fitxer origen, no una edició d'aquest.

Com que ara l'asset té transparència real (no una fotografia amb fons
opac), ja no calen els tractaments de `mix-blend-mode`/`filter` de la
revisió anterior (documentats i descartats): el traç blanc es veu
directament sobre `--color-navy-footer`. L'accent es mostra
considerablement més gran (`width: 100%` de la placa, `max-width: 22rem`)
perquè tingui "pes real" dins el bloc, tal com es va demanar
expressament — segueix sense ombres, sense border-radius i sense
convertir-se en un segon hero.

El símbol balança/espasa identificat al moodboard (dins un collage mixt
amb el monograma GS) es va valorar inicialment **sense incorporar** en
aquesta iteració. **Actualitzat 2026-09-12:** instrucció expressa
d'incorporar-lo com a element editorial de fons a la secció Trajectòria —
vegeu §8.3, no a El despatx.

## 8a.6 Menú

**Actualització (2026-09-12, instrucció expressa — substitueix la decisió
original d'aquest apartat.)** `El despatx` s'incorpora a la navegació
principal (desktop i menú mòbil), entre `Glòria` i `Ressenyes` — vegeu
§5.3. Enllaça amb `href="#despatx"`, l'anchor ja existent de la secció.

Decisió original (ja no vigent): no s'afegia `El despatx` a la navegació
principal (CLAUDE.md/brief: "en cas de dubte, no l'afegeixis"); la secció
només era accessible per scroll.

## 8a.7 Díptic de fotografies addicional (superseded — vegeu §8a.8)

**Afegit 2026-09-12, substituït el mateix dia.** Aquesta iteració havia
posat les dues fotos addicionals (`office-detail-lamp.jpg`,
`office-gs-embroidery.jpg`) en una franja/díptic propi sota la graella
principal. Es va detectar que això feia que la secció es llegís com
**dues seccions consecutives** (massa alçada total) — substituït per la
galeria d'una sola fila descrita a §8a.8. Es documenta aquí per mantenir
l'historial de decisions.

## 8a.8 Composició en una fila + galeria compacta

**Replantejament (2026-09-12, petició expressa).** Objectiu: que la
secció ocupi clarament menys alçada i deixi de semblar dues seccions
consecutives, mantenint totes les fotografies disponibles i la direcció
visual aprovada.

**Composició (una sola fila, `.despatx__layout`, grid-template-areas
`'intro main gallery'`):**

- **Esquerra (`intro`):** títol, text introductori i la placa navy de la
  màquina d'escriure (§8a.5) — sense canvis de contingut.
- **Centre (`main`):** la fotografia principal (`office-meeting-area.jpg`)
  es manté com a imatge protagonista, mateixa mida/pes que abans.
- **Dreta (`gallery`, nou — substitueix `.despatx__side` i el díptic de
  §8a.7):** una galeria compacta "protagonista + miniatures"
  (`src/components/despatx-gallery.js`) amb les 4 fotografies restants
  (biblioteca, vidre GS, llum de peu, GS brodat) — cap se sacrifica,
  totes continuen accessibles, però ja no calen dues files.

**Interacció de la galeria:** clic sobre una miniatura substitueix la
foto protagonista amb un fos (`opacity`, ~180ms, respecta
`prefers-reduced-motion` via el reset global — es redueix a 0ms). La
miniatura activa es marca només amb opacitat (sense vora, escala ni
ombra) i `aria-pressed`. Es va triar **clic per sobre de hover** perquè
funcioni igual amb ratolí, teclat (els elements són `<button>` reals,
Tab + Enter/Espai ja hi accedeixen nativament) i tàctil — un canvi
disparat només per hover no funciona en mòbil i és menys accessible. No
s'ha afegit lightbox (opcional al brief): les 4 fotos ja són accessibles
sense necessitat d'obrir cap superposició, i un lightbox hauria afegit
mecanisme (focus trap, tecla Esc, overlay) sense cap necessitat real per
a només 4 imatges — si el nombre de fotografies creix molt en el futur,
caldria reconsiderar-ho.

**Per què no un carrusel comercial:** cap autoplay, cap punt gran, cap
fletxa pesada — la miniatura mateixa és el control de navegació, seguint
el mateix llenguatge discret (línies/opacitat) que la resta de la
landing, no un component de plantilla importat.

**Reducció de la placa navy (~20%, petició expressa):** `padding` i
`gap` interns reduïts i l'amplada màxima de l'accent
(`.despatx__accent`) passa de `22rem` a `17.5rem` — com l'alçada de la
il·lustració depèn del seu propi aspect-ratio, reduir l'amplada la
redueix en la mateixa proporció, mantenint la composició i la identitat.

**Responsive:**

- **Tablet (≤900px):** `'intro intro' / 'main gallery'` — la galeria
  segueix compartint fila amb la foto principal.
- **Mòbil (≤700px):** apilat (`'intro' 'main' 'gallery'`); com la
  galeria ja no comparteix fila amb `main`, `.despatx__gallery-stage`
  passa a `aspect-ratio: 4/3` propi en lloc d'estirar-se a l'alçada
  d'una foto veïna.

## 8a.9 Ampliació de la galeria: 7 imatges, més pes per fotografia (petició expressa)

**Problema detectat (2026-09-12):** amb només 2 fotografies clarament
"grans" (la principal + l'escenari de la galeria) i 4 miniatures petites
gairebé quadrades, la secció es llegia com "dues fotografies protagonistes
+ un apèndix de miniatures sense pes", no com una peça editorial rica.
Calia mostrar més contingut real del despatx sense allargar la secció ni
convertir-la en un mosaic sense jerarquia.

**Canvis:**

- **Miniatures de 4 a 6, en graella de 3×2** (`.despatx__gallery-thumbs`,
  `grid-template-columns: repeat(3, 1fr)`): en comptes d'una sola fila de
  4 icones quadrades, ara són 2 files de 3, amb `aspect-ratio: 4/5` (més
  fotogràfic que un quadrat perfecte). Com la columna de la galeria ja
  estirava la seva alçada a la de la foto principal (§8a.8), afegir una
  fila de miniatures no allarga la secció: simplement reparteix la
  mateixa alçada fixa de manera diferent entre l'escenari i les
  miniatures (l'escenari en queda una mica més petit, les miniatures més
  grosses).
- **Nova fotografia real del despatx:** `office-stationery-art.jpg`
  (retall de `assets/reference/WhatsApp Image 2026-09-11 at
  20.32.28.jpeg`) — les pintures de ploma i llapis penjades i la
  calaixera d'època de fusta, excloent l'aire condicionat i el
  desordre de la taula de vidre en primer terme. Aporta una peça
  d'identitat/detall diferent de les ja existents (vidre GS, brodat GS,
  llum), sense repetir composició.
- **La il·lustració de marca "targeta + màquina d'escriure" ara és
  protagonista visible (canvi de decisió important, petició expressa):**
  `assets/images/brand/typewriter-card-mockup.jpg` (retall net, sense
  vores blanques sobreres, de `assets/reference/WhatsApp Image
  2026-09-11 at 20.41.00.jpeg`) passa a ser la imatge per defecte de
  l'escenari de la galeria (i la primera miniatura, activa d'entrada) —
  substitueix `office-library.jpg` com a protagonista inicial.
  **Aquesta decisió reverteix l'exclusió documentada a §8a.5**: aquí SÍ
  es mostra el full sencer amb el text "Advocat" (masculí; la web fa
  servir "Advocada") i amb telèfon, fax, mòbil i email **encara no
  confirmats/validats per la clienta**. Claude Code va senyalar aquest
  conflicte abans d'aplicar-lo i la usuària del projecte (no la clienta)
  va confirmar expressament voler mostrar el full sencer tal qual,
  acceptant aquest risc. **Pendent crític abans de publicació real:**
  validar amb Glòria Solsona Martí (a) si vol el títol "Advocat" corregit
  a "Advocada" en aquest material de marca, i (b) si les dades de
  contacte del full (telèfon, fax, mòbil, email, adreça) són correctes i
  autoritzades per publicar-se tal qual. Vegeu `docs/assets-status.md`.
- **`office-library.jpg` continua sent la segona miniatura** (ja no és la
  protagonista per defecte), i `office-gs-embroidery.jpg` (el brodat GS)
  passa a ocupar una posició d'igual pes que la resta de miniatures, no
  destacada — la petició expressa era rebaixar-ne el protagonisme, no
  eliminar-la.
- **Placa navy (accent + frase) reduïda una segona vegada** (petició
  expressa: "que no competeixi amb les fotos ara que n'hi ha moltes
  més"): `padding` de la placa de `var(--space-6)` a `var(--space-4)
  var(--space-5)`, `gap` intern de `var(--space-4)` a `var(--space-3)`,
  `margin-top` de `var(--space-6)` a `var(--space-4)`, i l'amplada màxima
  de l'accent (`.despatx__accent`) de `17.5rem` a `13rem`.
- **Interacció:** es manté exactament el mateix mecanisme (clic sobre
  miniatura → fos de l'escenari, `src/components/despatx-gallery.js`,
  sense canvis de codi) — es va valorar una rotació automàtica molt
  subtil de la imatge secundària (opció suggerida al brief) i es descarta
  conscientment: el clic explícit ja soluciona "veure més contingut sense
  allargar la secció" sense dependència de temporitzadors ni el risc
  d'accessibilitat/distracció d'un moviment automàtic constant.
- **Total d'imatges visibles a la secció:** 7 (1 foto principal + 6 a la
  galeria), dins el rang demanat (6–8).

## 8a.10 La il·lustració torna a la placa navy; galeria només amb fotos reals (petició expressa)

**Feedback rebut (2026-09-12):** la il·lustració de marca no havia
d'aparèixer mai com a "foto de galeria" — havia de continuar sent
l'accent de la placa navy, però mostrant-se més completa (amb la
targeta) i millor integrada. A més, es demanava reequilibrar la placa,
afegir fotografies reals si encaixaven bé sense allargar la secció, i
rebaixar encara més el brodat GS a detall secundari.

**Canvis respecte a §8a.9:**

- **Nova il·lustració de l'accent, MÉS COMPLETA (§8a.5 revisat):**
  `assets/images/brand/typewriter-line-navy-card.png` substitueix
  `typewriter-line-navy.png`. Ve d'una altra fotografia del mateix mockup
  de marca (`assets/reference/WhatsApp Image 2026-09-11 at
  20.41.03.jpeg`, no la `20.41.00.jpeg` del mockup en fons blanc usada a
  §8a.9): aquesta versió ja és línia blanca sobre el mateix fons pla navy
  `rgb(23,28,48)` que `typewriter-line-navy.png` i `trajectoria-emblem.png`,
  amb la targeta "Gs Advocat / Glòria Solsona Martí" integrada al mateix
  traç de línia — **sense telèfon, fax, mòbil ni email** (aquest mockup
  concret només mostra el nom i el càrrec, no les dades de contacte
  completes de l'altra versió). Chroma-key a transparència real amb el
  mateix mètode PIL que la resta d'assets d'aquesta família (llindar de
  distància de color respecte al fons, en lloc d'un color exacte, per
  conservar una vora suau a les línies). Com que ara la targeta forma
  part del mateix traç blanc sobre navy que la resta de la il·lustració,
  s'integra directament al fons de la placa sense cap requadre ni tall
  visible — a diferència del mockup en fons blanc de §8a.9, que hauria
  quedat com una caixa clara flotant si s'hagués posat aquí tal qual.
  `typewriter-card-mockup.jpg` (l'asset de §8a.9) es manté al repositori
  sense ús.
  **Pendent de validar amb la clienta (es manté d'§8a.5, no es resol
  aquí):** el text "Advocat" hi surt en masculí; la web usa "Advocada".
- **La il·lustració deixa de ser una imatge de galeria.** S'elimina el
  botó/miniatura i l'escenari per defecte que mostraven
  `typewriter-card-mockup.jpg` (§8a.9): la galeria torna a mostrar només
  fotografies reals del despatx. `office-library.jpg` torna a ser la
  protagonista per defecte de l'escenari.
- **Placa reequilibrada (petició expressa "més elegants"):** la
  compressió de §8a.9 (`padding: var(--space-4) var(--space-5)`, `gap:
  var(--space-3)`, `margin-top: var(--space-4)`) es relaxa altre cop a
  `padding: var(--space-6)`, `gap: var(--space-4)`, `margin-top:
  var(--space-6)` — la mateixa densitat que abans de §8a.9. Amb la
  galeria altre cop a 5 fotografies (no 6) i sense la il·lustració
  competint-hi, la placa pot recuperar aire sense desequilibrar la fila.
  L'amplada màxima de l'accent (`.despatx__accent`) es fixa a `11.5rem`
  (no es recupera als `17.5rem` originals): com la nova il·lustració
  inclou la targeta a sobre de la màquina, el seu aspect-ratio és més
  "quadrat" (1516/1253 ≈ 1.21) que el de la il·lustració només-màquina
  (1535/954 ≈ 1.61) — a la mateixa amplada, seria ~33% més alta: calia
  retallar l'amplada per mantenir una alçada final semblant, evitant que
  la placa allargués la fila de tota la secció.
- **Galeria: de 6 a 5 fotografies, totes reals.** Es manté
  `office-stationery-art.jpg` (afegida a §8a.9). Graella de miniatures de
  3 a 2 columnes (`grid-template-columns: repeat(2, 1fr)`): amb 4
  fotografies de detall (vidre GS, llum, GS brodat, calaixera/pintures) i
  no 5, una graella de 2 columnes en dona 3 files (2+2+1) — la darrera
  fotografia (calaixera/pintures) ocupa tota l'amplada de l'última fila
  (`.despatx__gallery-thumb:last-child { grid-column: 1 / -1; aspect-ratio:
  2/1 }`) en lloc de deixar una cel·la buida.
- **El brodat GS** ja no té cap posició pròpia destacada: és una miniatura
  de detall més, amb el mateix pes visual que vidre GS i llum — mai
  l'escenari per defecte.
- **No s'afegeix cap fotografia real nova en aquesta revisió.** Es va
  revisar el material de `assets/reference/` buscant-ne més: les úniques
  fotografies reals del despatx encara no utilitzades (`...20.34.26.jpeg`,
  taula de treball administrativa amb impressora i calaixos etiquetats;
  `...20.41.10.jpeg`, un altre angle del vidre GS) es descarten — la
  primera perquè queda visualment atapeïda/administrativa (no "premium");
  la segona perquè repetiria el mateix motiu GS que ja s'ha demanat
  rebaixar, no en un altre. No s'inventa cap imatge nova.
- **Composició resultant:** principal (`office-meeting-area.jpg`) →
  secundària destacada (escenari, `office-library.jpg` per defecte) →
  4 fotos de detall ben jerarquitzades (vidre GS, llum, GS brodat,
  calaixera/pintures), amb la placa navy com a peça complementària
  reequilibrada, no com a foto de galeria.

## 8a.11 Galeria compacta tipus editorial: 1 principal + 3 secundàries (petició expressa)

**Feedback rebut (2026-09-12):** la composició de §8a.10 (foto principal en
columna pròpia + galeria separada amb escenari 5:1 + graella 2×2/2×1)
encara es llegia massa pesada i alta — "no una columna de fotos grans".
Es demanava fusionar-ho tot en una única galeria compacta: 1 imatge
principal gran + 3 secundàries, seleccionant només les fotografies més
idònies. La columna esquerra (títol, text, placa navy) es manté
intacta — no s'hi toca res en aquesta revisió.

**Canvis:**

- **La foto principal deixa de tenir columna pròpia.** `.despatx__layout`
  passa de 3 columnes (`intro main gallery`) a 2 (`intro gallery`,
  `grid-template-columns: 1fr 2.15fr`). `.despatx__photo` /
  `.despatx__photo--main` (la figura independent amb
  `office-meeting-area.jpg`) s'eliminen: aquesta mateixa fotografia passa
  a ser la imatge per defecte de l'escenari de la galeria compacta —
  continua sent la protagonista, però ara dins el mateix bloc que la
  resta.
- **Selecció retallada a 4 fotografies reals en total** (abans 5):
  `office-meeting-area.jpg` (principal/escenari) + `office-library.jpg`,
  `office-glass-logo.jpg`, `office-stationery-art.jpg` (3 secundàries).
  Es descarten d'aquesta selecció (es mantenen com a assets vàlids,
  documentats a `docs/assets-status.md`, per si es volen recuperar en el
  futur):
  - `office-detail-lamp.jpg` — es prescindeix per no repetir la
    sensació de calidesa/llum que ja aporta la fotografia principal
    (sofà + làmpada).
  - `office-gs-embroidery.jpg` — es prescindeix per no repetir el mateix
    motiu de lletra "GS" que ja cobreix `office-glass-logo.jpg`; amb
    només 3 espais secundaris, es prioritza varietat de plans (biblioteca
    de treball, identitat/logotip, detall d'objectes personals) per
    sobre de repetir dues variacions del monograma.
  Criteri seguit: una vista general (principal) + varietat de plans
  complementaris (treball, identitat, detall), sense envair els 3 espais
  secundaris amb dues fotografies molt semblants entre si.
- **Escenari apaïsat, no vertical** (`.despatx__gallery-stage`,
  `aspect-ratio: 16/10`, substitueix la relació retrat 870/1200 de la
  foto principal original): l'aspecte apaïsat és clau perquè el bloc
  sencer (escenari + miniatures) no sigui més alt que abans tot i mostrar
  una sola imatge principal més ampla.
- **3 miniatures en una sola fila** (`.despatx__gallery-thumbs`,
  `grid-template-columns: repeat(3, 1fr)`, `aspect-ratio: 4/3` a cada
  miniatura — substitueix la graella 2×2/2×1 de §8a.10): més compacta,
  sense la peça de tancament amb amplada especial que calia quan hi havia
  un nombre senar de miniatures.
- **Interacció reescrita — intercanvi, no marcador d'"actiu"**
  (`src/components/despatx-gallery.js`): abans, clicar una miniatura
  substituïa la imatge de l'escenari però la llista de miniatures es
  mantenia fixa (calia repetir la imatge de l'escenari com a "miniatura
  activa" per no perdre-la). Ara, com que només hi ha 3 espais secundaris
  per a 4 fotografies en total, calia un mecanisme diferent: en clicar una
  miniatura, **s'intercanvia** el seu contingut (imatge, `alt` i
  `aria-label`) amb el de l'escenari — la miniatura clicada passa a ser la
  principal i la que hi havia principal passa a ocupar aquella miniatura.
  Sempre es veuen 4 fotografies diferents, mai cap repetida, sense
  necessitat de portar-ne més de 4 al DOM. Ja no hi ha estat "actiu"/
  `aria-pressed` a les miniatures (dejar de tenir sentit amb un intercanvi
  en lloc d'una selecció): l'`aria-label` de cada botó ("Mostra com a
  principal: ...") es regenera dinàmicament a partir de l'`alt` de la
  imatge que conté en cada moment, perquè mai quedi desactualitzat. El
  prefix del text es captura en temps d'execució del propi `aria-label` ja
  traduït al HTML (no es fixa en el codi JS), perquè el component
  funcioni igual a `index.html` i a `es/index.html` sense dependre de
  l'idioma.
- **`.despatx__editorial` (placa navy): sense canvis d'estil**, tal com
  es va demanar — només s'ha tret la regla `margin-top: auto` (≥901px)
  perquè depenia del `align-items: stretch` de l'antiga graella de 3
  columnes (empenyia la placa cap avall dins d'una columna estirada a
  l'alçada de la foto principal). Amb `align-items: start` (§8a.11) la
  columna d'intro ja no s'estira a cap referència externa, així que aquell
  `auto` hauria quedat sense espai per repartir i el marge superior real
  hauria caigut a 0; es treu la regla perquè torni a valer sempre el
  `margin-top: var(--space-6)` de la declaració base, mantenint el mateix
  aspecte visual de la placa d'abans. Cap altra propietat de la placa
  (padding, gap, mida de l'accent, tipografia) s'ha tocat.
- **Breakpoints simplificats:** com ja no hi ha una foto principal
  compartint fila amb la galeria, els dos trencaments anteriors (≤900px
  intro sencera + `main`/`gallery` a mitges; ≤700px tot apilat amb regla
  pròpia per a l'escenari) es fusionen en un de sol (≤900px, apilat
  senzill `'intro' 'gallery'`), més una regla puntual a ≤480px que
  arrodoneix l'aspect-ratio de les miniatures a `1` (a mòbil molt petit,
  4/3 les deixava massa baixes per al seu ample de columna).

## 8a.12 Galeria amb fletxes + comptador, 8 fotografies, ordre exacte (petició expressa, sense reinterpretar)

**Petició (2026-09-12):** substituir la galeria de §8a.11 per una proposta
tancada i exacta: 1 principal + 3 miniatures visibles + fletxes per
navegar una reserva de 7 fotografies més + comptador "01 / 07", amb un
ordre concret i una selecció d'imatges concreta (incloent-hi fotografies
que la clienta ha confirmat que ja existien a `assets/images/office/`
però que Claude Code encara no havia revisat). Columna esquerra intacta.

**Fotografies (8 en total, cap d'inventada) i procedència:**

1. **Principal per defecte:** `office-meeting-area.jpg` (sense canvis
   d'imatge; alt actualitzat per esmentar també la prestatgeria i els
   quadres, ja visibles a la mateixa fotografia).
2. `office-glass-logo.jpg` — vidre amb monograma GS (sense canvis).
3. `office-library.jpg` — escriptori de vidre davant la prestatgeria
   blanca (sense canvis d'imatge; alt reescrit per descriure-la amb les
   paraules exactes de la petició).
4. **Nova:** `office-desk-detail-gs.jpg` — retall de `assets/reference/
   WhatsApp Image 2026-09-11 at 20.34.37.jpeg`: taula de vidre, llum de
   peu i els quadres de ploma/llapis, amb la peça GS sobre la calaixera.
5. **Nova:** `office-wide-view.jpg` — retall (relació 16/10) de
   `assets/images/office/WhatsApp Image 2026-09-11 at 20.34.26.jpeg`:
   vista àmplia amb la taula principal, la prestatgeria, la impressora i
   la llum de peu. Revisada per privacitat: hi ha un diploma/certificat
   emmarcat de fons, sense fotografia ni dada personal identificable
   (diferent del cas de `...20.41.09.jpeg`, descartat a §8a.9 per aquest
   motiu).
6. **Nova:** `office-legal-library-flowers.jpg` — retall de `assets/
   images/office/WhatsApp Image 2026-09-11 at 20.41.13.jpeg`: taula de
   reunions amb flors, davant les prestatgeries de fons jurídic (volums
   "Revista Jurídica").
7. `office-gs-embroidery.jpg` — monograma GS brodat (sense canvis).
8. **Nova:** `office-antique-books.jpg` — retall de `assets/images/
   office/WhatsApp Image 2026-09-11 at 20.41.14.jpeg`: paret de llibres
   antics, sense cap element de marca ni text superposat.

Els fitxers font de les fotografies 5, 6 i 8 no estaven a
`assets/reference/` sinó ja copiats directament a `assets/images/office/`
(la clienta els hi va afegir); Claude Code els va revisar només quan la
clienta ho va confirmar explícitament, en lloc de descartar la petició
per no trobar-los al lloc esperat. `office-stationery-art.jpg` i
`office-detail-lamp.jpg` (usades a §8a.9) tornen a quedar sense ús —
es mantenen documentades a `docs/assets-status.md`.

**Estructura DOM (`src/components/despatx-gallery.js`, reescrit):** les 7
fotografies secundàries viuen totes al DOM en l'ordre exacte demanat
(vidre GS, escriptori, detall taula/GS, vista àmplia, flors, brodat,
llibres antics), cadascuna com un `<button class="despatx__gallery-thumb">`
— així l'i18n (`scripts/build-i18n.py`) tradueix el seu `alt`/`aria-label`
igual que la resta de continguts estàtics, sense dependre de dades fixades
en JS. Només 3 (una finestra contigua, cíclica) no porten l'atribut
`hidden` en cada moment.

**Interacció (dues accions independents, cap autoplay):**

- **Fletxes ← →** (`.despatx__gallery-arrow`, mateix llenguatge visual que
  `.ressenyes__btn`: glif sol, subratllat fi en hover/focus, sense caixa
  ni ombra): desplacen la finestra de 3 miniatures visibles un lloc amunt
  o avall dins la reserva de 7 (mòdul cíclic — mai cal desactivar-les).
  Actualitzen el comptador.
- **Clic sobre una miniatura visible:** intercanvia el seu contingut
  (imatge + `alt` + `aria-label`) amb el de l'escenari, amb el mateix fos
  de 180ms de revisions anteriors — la finestra visible NO es mou en
  clicar, només amb les fletxes.
- **Comptador** (`.despatx__gallery-counter`, `aria-live="polite"`): "01 /
  07" — el número és la posició (1-indexada) del primer element de la
  finestra visible dins la reserva de 7, no un compte de l'escenari.
- **Swipe opcional a mòbil:** gest horitzontal sobre la fila de
  miniatures (`touchstart`/`touchend`, llindar 40px) crida el mateix pas
  que les fletxes — complementa, no substitueix, la navegació manual.

**Bug detectat i corregit durant la implementació:** `.despatx__gallery-thumb`
declara `display: block` (per a la resta d'estils), i un selector de
classe té més especificitat que `[hidden]{display:none}` del navegador —
sense una regla explícita `.despatx__gallery-thumb[hidden]{display:none}`,
les miniatures "amagades" es continuaven veient. Corregit abans de
donar la revisió per bona (verificat inspeccionant `getComputedStyle`
al navegador, no només l'atribut `hidden` del DOM).

**Composició resultant (retícula 4:3 per a les miniatures, 16:10 per
l'escenari, mateixa que §8a.11):** principal → vidre GS / escriptori de
vidre / detall taula-llum-quadres-GS (finestra inicial) → accessibles amb
fletxes: vista àmplia amb impressora, taula amb flors, brodat GS, paret
de llibres antics. Sense allargar la secció respecte a §8a.11 (fletxes i
comptador afegeixen ~28px, no una fila nova).

## 8a.13 Buit excessiu abans de "Ressenyes" (petició expressa)

**Problema (2026-09-12):** `.despatx` i `.ressenyes` comparteixen el
mateix fons (cap és `.section--muted`), i cadascuna aplicava
`padding-block: var(--space-28)` (112px) a ≥1025px — el buit real entre
el final de la galeria (comptador inclòs) i el títol "Ressenyes" sumava
~224px, sense cap canvi de color que el justifiqués visualment: es
llegia com si faltés contingut, no com a aire editorial deliberat.

**Canvi (només ≥1025px, només aquesta unió):** els dos `padding-block`
es divideixen en `padding-top`/`padding-bottom` perquè només calgui
retallar el costat que toca a l'altra secció:

- `.despatx`: `padding-top` es manté a `var(--space-28)` (el ritme
  Trajectòria → El despatx no canvia); `padding-bottom` passa a
  `var(--space-16)` (64px).
- `.ressenyes`: `padding-bottom` es manté a `var(--space-28)` (el ritme
  Ressenyes → Contacte no canvia); `padding-top` passa a
  `var(--space-12)` (48px).

Buit final: 64 + 48 = **112px** (dins el rang 100–130px demanat).
Verificat amb `getComputedStyle` que Trajectòria→Despatx i
Ressenyes→Contacte queden intactes (112px cadascun, com abans), i que a
tablet/mòbil (<1025px, sense override propi) el `.section` per defecte
segueix sense tocar. Cap canvi a la composició interna de cap de les
dues seccions.

## 8a.14 Simplificació dels controls de la galeria (petició expressa, 2026-09-19)

**Feedback rebut:** la galeria de §8a.12 (1 principal + 3 miniatures
visibles + fletxes per navegar una reserva de 7 + comptador "01 / 07")
funciona bé quant a la fotografia principal, però la combinació
"miniatures + fletxes + comptador" dona massa protagonisme a la secció i
la fa llegir com una galeria de projecte d'arquitectura. `El despatx` ha
de continuar sent context visual de la Glòria i del seu espai de treball,
no una secció protagonista. Es demana reduir els controls al mínim
necessari sense tocar la mida ni l'impacte de la fotografia principal.

**Canvi:**

- **S'eliminen les fletxes** (`.despatx__gallery-arrow`) **i el comptador**
  (`.despatx__gallery-counter`, "01 / 07"). Ja no hi ha cap mecanisme de
  finestra/reserva: les 3 miniatures deixen de ser una vista parcial de 7
  fotografies i passen a ser fixes.
- **Es mantenen exactament les 3 miniatures que ja eren visibles per
  defecte a §8a.12** (`office-glass-logo.jpg`, `office-library.jpg`,
  `office-desk-detail-gs.jpg`): la vista inicial de la secció no canvia
  visualment, només es retira la possibilitat de navegar-hi amb fletxes.
- **Única interacció restant:** clic sobre una miniatura intercanvia el
  seu contingut amb l'escenari (mateix fos de 180ms, mateixa lògica
  d'`aria-label` dinàmic), sense cap altre element de UI — la pròpia
  miniatura és el control de navegació, seguint el mateix criteri ja
  aplicat a §8a.8 ("la miniatura mateixa és el control de navegació").
- **4 fotografies de la reserva de §8a.12 deixen d'utilitzar-se**
  (`office-wide-view.jpg`, `office-legal-library-flowers.jpg`,
  `office-gs-embroidery.jpg`, `office-antique-books.jpg`): ja no hi ha
  cap fletxa que hi doni accés. Es mantenen com a assets vàlids,
  documentats a `docs/assets-status.md`, per si es volen recuperar en el
  futur (mateix criteri que `office-stationery-art.jpg` i
  `office-detail-lamp.jpg` a §8a.10).
- **`src/components/despatx-gallery.js` simplificat:** desapareixen
  `windowStart`, `step()` i la gestió de l'atribut `hidden` sobre les
  miniatures (ja no n'hi ha cap que calgui amagar), així com el swipe
  horitzontal (existia només per moure la finestra amb les fletxes). Es
  manté únicament `swap()`.
- **CSS:** s'eliminen `.despatx__gallery-arrow*`,
  `.despatx__gallery-counter` i `.despatx__gallery-thumb[hidden]`
  (aquesta última ja no cal perquè cap miniatura porta `hidden`).
  `.despatx__gallery-thumbs` ja no viu dins un `.despatx__gallery-nav`
  flex (fletxa—miniatures—fletxa): passa a ser directament l'element grid
  de 3 columnes dins `.despatx__gallery`. Sense cap altre canvi de mida,
  `aspect-ratio` o espaiat respecte a §8a.12.

## 8a.15 Correcció: recuperar totes les fotografies (petició expressa, 2026-09-19)

**Feedback rebut:** la simplificació de controls de §8a.14 anava en la
bona direcció, però va reduir per error el *contingut* de la galeria (de
8 fotografies a 4) en lloc de tocar només els *controls*. Petició
explícita: recuperar totes les fotografies originals i mantenir-les totes
accessibles, conservant l'escenari gran sense canvis, amb una navegació
"simple i discreta" — no cal recuperar la combinació sencera de
miniatures + fletxes + comptador; per exemple, fletxes discretes més un
indicador molt subtil ja compleixen l'objectiu, sempre que cap fotografia
deixi de ser accessible.

**Canvi respecte a §8a.14 (substitueix la solució, no el diagnòstic):**

- **Es recuperen les 8 fotografies reals de §8a.12** (escenari +
  `office-glass-logo.jpg`, `office-library.jpg`, `office-desk-detail-gs.jpg`,
  `office-wide-view.jpg`, `office-legal-library-flowers.jpg`,
  `office-gs-embroidery.jpg`, `office-antique-books.jpg`), totes
  accessibles de nou. Cap fotografia de la selecció tancada de §8a.12 es
  torna a eliminar.
- **Ja no hi ha graella de miniatures.** Cada fotografia (incloent-hi la
  que abans només feia d'escenari per defecte) viu com un
  `.despatx__gallery-dot`: un botó real (navegable per teclat) que conté
  la imatge a dins únicament perquè l'i18n en tradueixi l'`alt` i perquè
  `src/components/despatx-gallery.js` en llegeixi les dades — visualment
  es redueix a un punt de 6px via `::before` (opacitat 0.3 en repòs, 1 i
  `scale(1.2)` quan és l'actiu), sense mostrar mai la fotografia a mida
  visible. És l'"indicador molt subtil" demanat.
- **Fletxes discretes** (`.despatx__gallery-arrow`, recuperades amb el
  mateix llenguatge visual de §8a.12: glif sol, subratllat fi en
  hover/focus, sense caixa ni ombra) avancen/retrocedeixen un punt,
  cícliques. `.despatx__gallery-nav` torna a ser fletxa—indicador—fletxa,
  ara centrat en lloc d'ocupar tot l'ample (ja no hi ha graella que
  ompli l'espai).
- **Sense comptador numèric visible.** En lloc de "01 / 08",
  `.despatx__gallery-stage` porta `aria-live="polite"`: en canviar de
  fotografia (amb fletxa o punt), un lector de pantalla anuncia el nou
  `alt` de la imatge — informació equivalent (o més rica) que un simple
  número, sense cap element visual addicional.
- **Interacció reescrita a `src/components/despatx-gallery.js`:** ja no
  hi ha "intercanvi" (`swap`) perquè ja no hi ha miniatures fixes que
  necessitin conservar una fotografia en heretar-ne una altra. Ara és un
  model d'índex actiu senzill: cada punt/fletxa fa `render(index)`, que
  actualitza l'escenari (mateix fos de 180ms), l'atribut `aria-pressed`
  de cada punt i la classe `--active`. El swipe horitzontal a mòbil es
  mou de la fila de miniatures (que ja no existeix) a l'escenari mateix.
- **Composició resultant:** mateix escenari gran (16/10, sense cap canvi
  de mida ni `object-fit`), fila de navegació centrada amb dues fletxes i
  8 punts diminuts entremig — molt més discreta que la combinació
  miniatures+fletxes+comptador de §8a.12, però sense perdre cap
  fotografia.

## 8a.16 Fix: fotografies trencades sota GitHub Pages/`base` de Vite (petició expressa, 2026-09-19)

**Símptoma:** en desplegar-se sota un `base` de Vite no arrel (`/gloria-solsona-web/`,
vegeu `vite.config.js`, configurat en paral·lel per a GitHub Pages), la
fotografia inicial de l'escenari carregava bé però la resta de fotografies
trencaven (icona d'imatge trencada + text `alt`) en navegar amb les
fletxes o els punts, tant a `localhost` amb el servidor de Vite com un cop
publicades.

**Causa:** cada punt (`.despatx__gallery-dot`) guardava la ruta completa
de la seva fotografia en un atribut `data-full="/images/office/..."`
propi, que `src/components/despatx-gallery.js` llegia per canviar
l'escenari. Vite reescriu automàticament els atributs `src`/`href`
reconeguts (`<img src>`, `<link href>`, etc.) de l'HTML per anteposar-hi
el `base` configurat — però **no** toca atributs `data-*` arbitraris.
Per això la fotografia inicial (un `<img src>` real, sí reescrit)
carregava bé, mentre que qualsevol altra fotografia demanada via
`data-full` (mai reescrit) resolia a una URL absoluta incorrecta
(`/images/...` en lloc de `/gloria-solsona-web/images/...`) i donava 404.
Totes 8 fotografies existien igualment als fitxers del projecte
(`assets/images/office/`, noms/extensions verificats un a un) — no era un
problema d'assets absents ni de referències eliminades, només de com se
n'obtenia la URL en navegar.

**Fix (`src/components/despatx-gallery.js`, sense tocar cap `data-full` —
directament s'eliminen dels 8 botons a `index.html`, ja no calen):** en
lloc de mantenir una segona ruta pròpia, la galeria ara llegeix
`dotImg.src` (la propietat DOM de la `<img>` que ja viu dins de cada punt
per a l'i18n/dades) — una URL ja resolta pel navegador a partir de
l'atribut que Vite sí ha reescrit correctament, tant en local com sota
qualsevol `base`. Una única font de veritat per fotografia, sense cap
ruta duplicada que es pugui desincronitzar. Sense cap canvi visual, de
disseny ni de contingut: mateixos controls (fletxes discretes + punts),
mateixes 8 fotografies, mateix escenari.

## 8a.17 Reordenar: la vista àmplia passa a ser la primera fotografia (petició expressa, 2026-09-19)

**Petició:** `office-wide-view.jpg` (vista àmplia del despatx amb la
taula principal, la prestatgeria, la impressora i la llum de peu) ha de
ser la primera fotografia de la galeria i la que es mostra per defecte a
l'escenari en carregar la pàgina — no només un canvi de contingut, sinó
també de quin punt apareix actiu en primer lloc. Només ordre; cap canvi
de disseny, mides, controls ni composició.

**Canvi:** a `index.html`, `office-wide-view.jpg` passa a ser el primer
`.despatx__gallery-dot` del DOM (amb `despatx__gallery-dot--active` i
`aria-pressed="true"`) i la imatge per defecte de
`#despatx-gallery-stage-img`. `office-meeting-area.jpg` (que abans hi
era) passa a segona posició. La resta (glass-logo, library,
desk-detail-gs, legal-library-flowers, gs-embroidery, antique-books)
mantenen el seu ordre relatiu sense cap altre canvi. Com
`src/components/despatx-gallery.js` sempre arrenca amb `currentIndex = 0`
(el primer punt del DOM), reordenar els botons a l'HTML n'hi ha prou —
cap canvi al component JS ni al CSS. `es/index.html` es regenera amb
`scripts/build-i18n.py` per mantenir el mateix ordre traduït.

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

**Títol:** ~~`Envia'ns un missatge`~~ → `Envia'm un missatge` (FASE 8, vegeu
addenda més avall).

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

> **Addenda (2026-09-12, instrucció expressa) — FASE 8, refinament
> compacte:** mateixa estructura, dades, camps i integracions (cap canvi
> funcional ni de contingut factual). Objectiu: reduir l'alçada del bloc i
> suavitzar la rigidesa de les dues columnes, sense allunyar-se de la
> composició aprovada.
>
> - proporció de columnes de `.contacte__grid` ajustada a ~41/59 (abans
>   ~46,5/53,5);
> - text introductori de la columna de contacte reformulat en primera
>   persona («escriu-me o truca'm directament»), mateix registre
>   professional, sense copy comercial;
> - espais verticals reduïts a la columna de contacte (llista de dades,
>   marge sobre «Ubicació», marge sobre el mapa);
> - títol del formulari `Envia'ns un missatge` → `Envia'm un missatge`:
>   coherent amb la veu en segona persona ja utilitzada a la landing («al
>   teu servei», §5) i amb el caràcter de marca personal del lloc;
> - Correu electrònic i Telèfon passen a compartir una fila (~50/50) en
>   desktop/tablet en lloc d'apilar-se; es tornen a apilar en mòbil;
> - gap vertical entre camps del formulari reduït, i alçada inicial del
>   textarea del missatge reduïda (referència: ~144px, dins el rang
>   140–180px);
> - microinteraccions dels camps diferenciades (hover discret ≠ focus
>   visible), i àrea clicable del checkbox de privacitat més còmoda —
>   mateix text, mateix enllaç a la Política de privacitat;
> - entrada subtil (fade + petit desplaçament) de les dues columnes en
>   carregar la secció, respectant `prefers-reduced-motion`.
>
> No es toca cap altra secció de la landing. Detall visual/tècnic a
> `src/styles/components.css` (bloc «Contacte + Ubicació + Formulari») i a
> l'index.html (comentari FASE 8 sobre la secció `#contacte`).

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

## 11.2 Revisió de jerarquia (FASE 7, 2026-09-12) — aplicada i revertida

**Estat actual: revertit.** Es documenta l'intent i el motiu de la
reversió perquè no es torni a intentar la mateixa aproximació sense
revisar-ne prèviament el resultat visual.

S'havia aplicat, a petició expressa, un canvi per donar més presència de
marca al footer: en lloc de `assets/brand/logotip.png` (que porta el text
"Advocat", pendent de validar — §5.2) recolorit a blanc, el footer
componia el nom, el descriptor i el monograma amb text real i l'asset
`assets/brand/monogram-gs.png` (només el monograma), amb els enllaços
legals demotats a la línia del copyright i una mica més d'aire superior.

**Revertit (2026-09-12, petició expressa):** el resultat no funcionava
visualment i la clienta ha demanat recuperar exactament el format
anterior. El footer torna a la composició original de §11.1: logotip
complet `assets/brand/logotip.png` (72px, recolorit a blanc, amb el text
"Advocat" sense corregir — §5.2) a l'esquerra compartint línia amb els
enllaços legals a la dreta, `padding-block: var(--space-12)`, i el
copyright en línia pròpia sota `.footer__rule`. Comprovat en desktop i
mòbil després de revertir-ho. Restaurat també l'entrada
`"Glòria Solsona Martí — Advocat"` a `src/i18n/es.json` (necessària per a
l'`alt` traduït d'aquesta imatge a la versió ES), que s'havia eliminat
quan el header (no el footer) va deixar de necessitar-la (§5.2, FASE 2).

No es toca cap altra secció ni la resta de canvis fets en paral·lel a la
web (header, galeria de Glòria, El despatx, contacte, etc.).

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
