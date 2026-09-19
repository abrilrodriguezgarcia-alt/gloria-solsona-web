# Estat dels assets

Aquest document identifica quins recursos visuals del projecte són definitius, de referència o provisionals.

## Landing aprovada

- Fitxer: `assets/reference/landing-approved.png`
- Estat: **referència visual aprovada**.
- Ús: comparar la implementació amb la composició, jerarquia, espais i estil aprovats.
- No s'ha d'utilitzar com una única imatge de pàgina.

## Fotografia del hero

- Fitxer en ús: `assets/images/gloria-hero-provisional.jpg`.
- Estat: **PROVISIONAL** (encara no és la fotografia definitiva confirmada
  per la clienta — vegeu `docs/client-validation-checklist.md`).
- **Actualització (FASE 2, 2026-09-12, petició expressa):** la clienta ha
  afegit una captura millorada de la mateixa escena i pose a
  `assets/images/gloria hero.png` (original sense modificar, conservat tal
  qual). S'ha optimitzat per a web (PNG → JPEG, qualitat ~84) i s'ha
  substituït el contingut de `gloria-hero-provisional.jpg` per aquesta
  versió (1145×1374, abans 1170×1230 — l'enquadrament original de la
  clienta és una mica més vertical). No s'ha aplicat cap retoc addicional
  de llum/color/persona/context: només conversió de format. Historial de
  la versió anterior recuperable via git (`08d31f1`, `82f689d`).
- Ús actual: construir la primera versió funcional de la landing i preparar una demo per ensenyar-la a Glòria Solsona Martí.
- Aquesta fotografia s'haurà de substituir per la fotografia definitiva que faciliti o aprovi la clienta, si encara no ho és.

### Regles per a Claude Code

- Utilitza `assets/images/gloria-hero-provisional.jpg` mentre no existeixi una fotografia definitiva.
- No generis una fotografia substitutiva amb IA.
- No substitueixis aquesta fotografia per stock.
- No la retoquis de manera que alteri la persona, la indumentària o el context (pose, vestimenta, entorn arquitectònic).
- Es poden aplicar ajustos tècnics de presentació (`object-fit`, `object-position`, crop responsive no destructiu, optimització de pes) **i, a petició expressa de la clienta/usuària (2026-09-11), ajustos d'edició fotogràfica global i localitzada** (llum, contrast, saturació, suavitzat de textures) per millorar l'acabat editorial i la llegibilitat del menú superior sense recórrer a efectes artificials de CSS (contorns, ombres de text, degradats). Aquests ajustos no poden alterar la persona, la indumentària ni el context, només la gradació tonal de la imatge.
- Quan arribi la fotografia definitiva, la substitució de l'asset no ha de provocar un redisseny del hero aprovat.

## Fotografies de l'apartat Glòria (petició expressa 2026-09-12)

- Fitxers en ús: `assets/images/gloria/gloria-galeria-01.jpg` a
  `gloria-galeria-04.jpg`.
- Estat: **PROVISIONAL**. Retalls (4:5, ~1100×1375, JPEG optimitzat) fets
  amb PIL a partir de quatre fotografies personals fetes amb mòbil que la
  clienta ha afegit directament a `assets/images/` (originals conservats
  sense modificar: `gloria.png`, `gloria 2.png`, `Gloria 3.png`,
  `gloria 4.png`). Cap retoc de llum/color, només enquadrament i
  redimensionat.
- Ús: docs/landing-master-spec.md §7 — diapositiva amb avanç automàtic a
  `.gloria__media` perquè aquest bloc no repeteixi el retrat amb toga que
  ja s'utilitza al hero (abans hi havia el mateix `gloria-hero-provisional.jpg`
  retallat). Comportament a `src/components/gloria-slideshow.js`.
- **Contingut de cada fitxer** (per referència, ja que cap conté indicació
  del lloc):
  - `01`: retrat somrient a l'exterior, vora la platja (`gloria.png`).
  - `02`: asseguda, distesa, en un sofà de pell amb llibreria de fusta al
    fons — **no és el despatx real** ja fotografiat a §8a; és un espai
    diferent (`gloria 2.png`).
  - `03`: dreta davant d'una prestatgeria de biblioteca pública (llibres en
    alemany), motxilla a l'esquena (`Gloria 3.png`).
  - `04`: selfie de primer pla; s'ha retallat per excloure el logotip de
    marca (Lacoste) visible a l'espatlla de la roba original (`gloria 4.png`).
- **Advertència documentada 2026-09-12:** cap de les quatre és fotografia
  professional ni està vinculada al despatx real; són fotos personals de
  mòbil en contextos aliens a la pràctica professional (una d'elles,
  clarament de platja/vacances). Claude Code ho va senyalar abans
  d'incorporar-les (risc reputacional per a una professional real i
  identificada) i va demanar confirmació explícita; **la clienta/usuària
  va confirmar voler-les fer servir totes quatre, en seqüència
  automàtica** ("totes, jo faria que anessin canviant cada pocs segons").
  Es documenta aquí perquè quedi constància de la decisió i de l'origen
  no professional de les fotografies, de cara a una revisió de qualitat
  abans de publicació definitiva.
- **Pendent per a producció:** valorar substituir-les per fotografia
  professional dedicada si Glòria Solsona ho considera oportú un cop vegi
  el resultat.

### Reducció a 2 fotografies (petició expressa 2026-09-19)

- El carrusel es va reduir de 4 a **2 diapositives** perquè el bloc llegís
  com una selecció editorial i no com un àlbum personal:
  - `gloria-galeria-01.jpg` (platja, B/N) — es manté sense canvis.
  - `gloria-galeria-02.jpg` (sofà de pell + llibreria) — es manté a
    petició expressa, però **retallada de nou** (pla mig, des dels
    prestatges fins per sobre la falda, excloent les sabatilles i el
    peu del llum de terra que sortien a l'enquadrament original de cos
    sencer) i **convertida a blanc i negre** perquè el tractament sigui
    homogeni amb `01`. Font: mateix retall original (recuperable via
    git, commit `6da9ecf`), reprocessat amb PIL (crop + `ImageOps.grayscale`).
    Cap canvi de persona, roba o context: només enquadrament i gradació
    tonal, mateix criteri ja aplicat a la fotografia del hero.
- **Descartades del carrusel** (es mantenen als fitxers, sense ús, per si
  calen en el futur — no s'esborren):
  - `gloria-galeria-03.jpg`: biblioteca pública amb motxilla — to massa
    casual/turístic per a l'apartat.
  - `gloria-galeria-04.jpg`: selfie de primer pla en un aparador — enquadrament
    i qualitat no coherents amb la resta.
- **Estructura preparada per a substitució futura:** n'hi ha prou amb
  canviar `src`/`alt`/`width`/`height` de les dues `<img class="gloria__slide">`
  a `index.html` (i tornar a generar `es/index.html` amb
  `python3 scripts/build-i18n.py` després d'actualitzar `src/i18n/es.json`
  si canvia el text). `src/components/gloria-slideshow.js` no depèn del
  nombre de diapositives; només cal mantenir el mateix nombre de punts
  (`.gloria__slideshow-dot`) que d'imatges i actualitzar l'etiqueta "de N".
- **Pendent per a producció:** aquesta selecció és provisional amb el
  material disponible. Quan Glòria Solsona validi fotografia professional
  definitiva, substituir aquestes dues imatges sense redissenyar el bloc.

## Fotografies d'«El despatx» (secció afegida 2026-09-11, ampliada i reorganitzada diverses vegades — vegeu §8a.9/§8a.11/§8a.12/§8a.14)

- **Fitxers en ús (§8a.14, controls de galeria simplificats — 1 principal +
  3 miniatures fixes, sense fletxes):** `office-meeting-area.jpg`,
  `office-glass-logo.jpg`, `office-library.jpg`, `office-desk-detail-gs.jpg`.
- **`office-wide-view.jpg`, `office-legal-library-flowers.jpg`,
  `office-gs-embroidery.jpg` i `office-antique-books.jpg`: sense ús des de
  §8a.14** — formaven part de la reserva de 7 accessible amb fletxes a
  §8a.12, però la simplificació dels controls (petició expressa,
  2026-09-19: la combinació de miniatures + fletxes + comptador donava
  massa protagonisme a la secció) elimina el mecanisme de finestra/reserva.
  Es mantenen com a assets vàlids i documentats aquí (no s'esborren) per si
  es volen recuperar en el futur.
- Estat: **PROVISIONAL**. Fotografies reals fetes amb mòbil, seleccionades
  del moodboard de `assets/reference/` (o ja copiades directament a
  `assets/images/office/` per la clienta) a petició expressa, no
  fotografia professional específica per a la web.
- **Noves a §8a.12** (petició expressa, ordre i contingut exactes donats
  per la clienta):
  - `office-desk-detail-gs.jpg`: retall de `assets/reference/WhatsApp
    Image 2026-09-11 at 20.34.37.jpeg` — taula de vidre, llum de peu i
    els quadres de ploma/llapis, amb la peça GS sobre la calaixera. Sense
    problemes de privacitat.
  - `office-wide-view.jpg`: retall de `assets/images/office/WhatsApp
    Image 2026-09-11 at 20.34.26.jpeg` — vista àmplia amb taula
    principal, prestatgeria, impressora i llum de peu. Té un
    diploma/certificat emmarcat de fons; revisat de prop i **no** mostra
    cap fotografia ni dada personal identificable (a diferència del
    marc amb fotografia familiar de `...20.41.09.jpeg`, descartat a
    §8a.9).
  - `office-legal-library-flowers.jpg`: retall de `assets/images/office/
    WhatsApp Image 2026-09-11 at 20.41.13.jpeg` — taula de reunions amb
    flors, davant prestatgeries de fons jurídic (volums "Revista
    Jurídica"). Els documents visibles sobre la taula no són llegibles a
    la mida de la fotografia (revisat de prop); sense dades identificables.
  - `office-antique-books.jpg`: retall de `assets/images/office/WhatsApp
    Image 2026-09-11 at 20.41.14.jpeg` — paret de llibres antics, sense
    cap element de marca ni text superposat. Sense problemes de
    privacitat.
- **`office-stationery-art.jpg` i `office-detail-lamp.jpg`: sense ús des
  de §8a.12** (la clienta va donar una selecció tancada de 8 fotografies
  que no les inclou). Es mantenen com a assets vàlids i documentats aquí
  (no s'esborren) per si es volen recuperar en el futur.
- `office-meeting-area.jpg` és un **retall** de
  `assets/reference/WhatsApp Image 2026-09-11 at 20.41.09 (1).jpeg`: s'ha
  exclòs la meitat dreta de l'enquadrament original perquè hi apareixia
  una fotografia familiar personal (persones identificables, alienes al
  contingut públic de la web) sobre l'escriptori. L'original de referència
  no s'ha modificat.
- `office-detail-lamp.jpg` (retall de `...20.32.52.jpeg`, amb la franja
  inferior de la imatge original retallada perquè s'hi veia una targeta de
  visita amb telèfon/fax no confirmats) es va preparar en una passada
  anterior i ara s'utilitza (§8a.7 del landing-master-spec).
- `office-gs-embroidery.jpg` (nou, 2026-09-12): retall de
  `assets/reference/WhatsApp Image 2026-09-11 at 20.41.08 (2).jpeg`
  (monograma `GS` brodat en un aro de fusta). Sense problemes de
  privacitat: només mostra l'objecte decoratiu.
- **Descartades en aquesta ampliació** (revisades però no incorporades):
  la resta d'imatges de `assets/reference/` o bé són mockups de marca
  (targetes de visita, llibretes, carpetes, papereria — no fotografia real
  del despatx) o bé són il·lustracions personals de la clienta sense
  relació amb l'espai físic; i una fotografia panoràmica addicional del
  despatx (`...20.41.09.jpeg`) es va descartar perquè mostra, en una
  prestatgeria de fons, un marc amb fotografies familiars identificables
  (mateix tipus de problema de privacitat que ja va motivar el retall de
  `office-meeting-area.jpg`) que no s'ha resolt en aquesta passada.
- Quan hi hagi fotografia professional definitiva del despatx, substituir
  aquests fitxers sense redissenyar la secció (mateixes relacions
  d'aspecte a `.despatx__photo--*` / `.despatx__detail-photo--*`,
  `src/styles/components.css`).

## Recurs gràfic «màquina d'escriure» — SUPERSEDIT (§8a.10), sense ús

- Fitxer: `assets/images/brand/typewriter-line-navy.png`. **Sense ús des
  de 2026-09-12 (§8a.10)** — substituït per `typewriter-line-navy-card.png`
  (vegeu la secció d'«El despatx» més amunt), que mostra la mateixa
  il·lustració però amb la targeta també visible, a petició expressa. Es
  manté al repositori sense esborrar, mateix criteri que
  `typewriter-detail.jpg`.
- **Substituït 2026-09-12** (petició expressa): abans era un retall
  fotogràfic d'una pintura real (`typewriter-detail.jpg`, es manté al
  repositori sense ús). Ara és una il·lustració de línia extreta de
  `assets/reference/WhatsApp Image 2026-09-11 at 20.41.03.jpeg` — un
  mockup de marca (paper de carta/plafó de tipografia) amb fons pla navy
  `rgb(23,28,48)`, el mateix material i mètode que
  `trajectoria-emblem.png` (chroma-key a transparència real via PIL, sense
  retocar ni redibuixar el traç).
- **El full de la il·lustració original mostra "Advocat Glòria Solsona
  Martí"** (la web usa "Advocada"). El retall final (`typewriter-line-navy.png`,
  1535×954) exclou completament el full/text però conserva la **màquina
  sencera**: carro, orelles/palanques de la cinta a banda i banda, teclat
  i placa "ROYAL". (Un primer retall, 2026-09-12, tallava per l'alçada
  d'aquestes orelles/palanques deixant-les truncades — corregit el mateix
  dia a petició expressa: "posa la màquina sencera".) No s'ha editat ni
  generat cap text nou. **Pendent de validar amb la clienta:** si es vol
  recuperar el full amb el monograma en el futur, caldrà retallar de nou
  el fitxer origen (no editar aquest PNG).
- El símbol balança/espasa/llorer localitzat al moodboard (mateix univers
  gràfic que el monograma GS) no té versió vectorial neta pròpia: la
  còpia més neta trobada és una il·lustració de mostra sobre fons pla
  navy (`assets/reference/WhatsApp Image 2026-09-11 at 20.41.03
  (1).jpeg`), no necessàriament el disseny final de marca de la clienta.
  Vegeu ús a la secció Trajectòria, més avall.

## Il·lustració «targeta + màquina d'escriure» a la galeria (§8a.9) — SUPERSEDIDA, sense ús (§8a.10)

- Fitxer: `assets/images/brand/typewriter-card-mockup.jpg`.
- Estat: **sense ús des de 2026-09-12 (§8a.10).** Es manté al repositori
  sense esborrar (mateix criteri que `typewriter-detail.jpg`), documentat
  aquí per referència.
- Es va usar breument (§8a.9) com a imatge per defecte de l'escenari de la
  galeria d'«El despatx» i com a miniatura. Retall net de `assets/
  reference/WhatsApp Image 2026-09-11 at 20.41.00.jpeg` (mockup en fons
  blanc), sencer, amb telèfon/fax/mòbil/email i el text "Advocat"
  (masculí) visibles.
- **Petició expressa (§8a.10):** la il·lustració no havia de ser mai una
  "foto de galeria" — havia de continuar sent l'accent de la placa navy.
  Substituïda per `typewriter-line-navy-card.png` (vegeu més avall), que
  ni conté aquestes dades de contacte ni surt a la galeria.

## ⚠️ Il·lustració «targeta + màquina d'escriure» a la placa navy d'«El despatx» (§8a.5, revisada §8a.10) — dada pendent de validar

- Fitxer: `assets/images/brand/typewriter-line-navy-card.png`.
- Estat: **PROVISIONAL — conté una dada encara no confirmada per la
  clienta**, però ja no dades de contacte. Retall + chroma-key a
  transparència real (mètode PIL: llindar de distància de color respecte
  al fons pla navy `rgb(23,28,48)`, mateix mètode que
  `typewriter-line-navy.png` i `trajectoria-emblem.png`) de `assets/
  reference/WhatsApp Image 2026-09-11 at 20.41.03.jpeg` — **no** la
  mateixa foto de referència que `typewriter-card-mockup.jpg`
  (`20.41.00.jpeg`, mockup en fons blanc, amb telèfon/fax/mòbil/email):
  aquesta és una altra fotografia del mateix mockup de marca, ja en línia
  blanca sobre fons navy, amb la targeta "Gs Advocat / Glòria Solsona
  Martí" integrada al mateix traç — **sense telèfon, fax, mòbil ni
  email**.
- **Ús (2026-09-12, petició expressa §8a.10):** substitueix
  `typewriter-line-navy.png` (que excloïa la targeta) com a accent de la
  placa navy d'«El despatx» (`.despatx__accent`) — mai a la galeria.
  "Més completa, millor integrada, amb la targeta ben visible", tal com
  es va demanar.
- **Pendent de validar amb la clienta (hereta el conflicte de §8a.5, ja
  reduït):** el text "Advocat" hi surt en masculí; la resta de la web fa
  servir "Advocada". Ja no hi ha telèfon/fax/mòbil/email en aquesta
  versió, així que el risc de dades de contacte no confirmades queda
  resolt — només queda pendent el gènere del càrrec.
- **Pendent crític abans de publicació real:** confirmar amb Glòria
  Solsona Martí si "Advocat" s'ha de corregir a "Advocada" en aquest
  material de marca (mateix pendent que `typewriter-line-navy.png` i el
  logotip oficial — vegeu `docs/client-validation-checklist.md`).

## Recurs gràfic «emblema balança/espasa/llorer» (Trajectòria)

- Fitxer: `assets/images/brand/trajectoria-emblem.png`.
- Estat: **PROVISIONAL / d'extracció**, no un asset vectorial oficial.
  Generat retallant la il·lustració de `assets/reference/WhatsApp Image
  2026-09-11 at 20.41.03 (1).jpeg` (fons pla navy `rgb(23,28,48)`) i
  convertint-la a PNG amb transparència: el color de fons s'ha extret per
  diferència de color (chroma key) i el traç s'ha recolorat a
  `--color-navy` (#0d2c4a), seguint la mateixa convenció que
  `assets/brand/monogram-gs.png` (opacitat aplicada per CSS, no
  incrustada al fitxer).
- Ús: docs/landing-master-spec.md §8.3 — fons editorial molt subtil
  (`opacity: 0.05` + `blur` de presentació) darrere de `25+` a la secció
  Trajectòria. Mai a mida completa ni com a icona independent.
- **Pendent per a producció:** demanar a la clienta l'arxiu original
  d'aquest emblema en SVG o PNG transparent d'alta resolució (el disseny
  sembla formar part del seu sistema de marca institucional, més enllà
  d'aquesta il·lustració de mostra). Quan existeixi, substituir aquest
  fitxer sense canviar la implementació CSS (mateixa relació d'aspecte
  aproximada, ~1074×963).

## Assets encara pendents

Abans de producció cal confirmar o incorporar, si existeixen:

- logo oficial en format vectorial;
- versió clara del logo per al footer;
- monograma `GS` separat si forma part del sistema de marca;
- fotografia definitiva del hero;
- fotografia/retrat definitiu del bloc de presentació si és diferent de la del hero;
- favicon i altres formats de marca necessaris.
