# Instruccions per a Claude Code

## 0. Fonts de veritat del projecte

Abans de tocar codi, llegeix en aquest ordre:

1. `CLAUDE.md`
2. `docs/landing-master-spec.md`
3. `docs/landing-addendum-office.md`
4. `docs/art-direction.md`
5. la imatge aprovada a `assets/reference/landing-approved.png`
6. `assets/reference/README.md`
7. la resta d'imatges de `assets/reference/`, que funcionen com a moodboard visual facilitat per Glòria Solsona
8. la resta de documentació de `/docs`

La **imatge aprovada + `docs/landing-master-spec.md`** defineixen la base de la landing. Les decisions aprovades posteriorment, com la nova secció **`El despatx`**, estan documentades a `docs/landing-addendum-office.md` i tenen prioritat sobre l'estructura original només en allò que modifiquen expressament.

`docs/art-direction.md` defineix els criteris de direcció d'art derivats del moodboard i s'ha d'utilitzar per afinar i validar el disseny, no per iniciar un redisseny global.

Les altres imatges de `assets/reference/` **no són assets finals de producció ni substitueixen la landing aprovada**. Serveixen per entendre millor els gustos, l'atmosfera i la sensibilitat visual de Glòria Solsona i per validar refinaments visuals compatibles amb la direcció ja aprovada.

Si detectes una contradicció entre documents, no la resolguis silenciosament: identifica-la i prioritza la decisió més recent confirmada al projecte.

## 1. Context del projecte

Aquest repositori conté la web professional de **Glòria Solsona Martí, advocada**.

La **direcció visual de la landing ja està aprovada**. El teu objectiu no és reinventar-la ni redissenyar-la, sinó implementar-la fidelment, amb codi net, responsive, accessible i mantenible.

## 2. Regles obligatòries abans de modificar res

1. Llegeix completament aquest fitxer i tota la documentació de `/docs` abans de tocar codi.
2. No inventis cap dada professional, fiscal, legal o de contacte.
3. Si una dada no està confirmada, utilitza un placeholder clar o deixa-la preparada per incorporar-la més endavant.
4. No introdueixis cap dada personal d'Abril Rodríguez, la desenvolupadora, en cap text legal, metadada, formulari o contingut públic.
5. No publiquis la web ni configuris domini, DNS, hosting o serveis externs sense instrucció expressa.
6. No canviïs l'estructura general, estil visual o jerarquia de la landing aprovada sense autorització expressa. La incorporació de la secció `El despatx` entre `Trajectòria` i `Ressenyes` sí està expressament autoritzada i definida a `docs/landing-addendum-office.md`.
7. No facis canvis globals per resoldre un problema local si poden alterar altres seccions.
8. Abans d'implementar una modificació visual important, comprova que encaixa amb `docs/landing-master-spec.md`, `docs/landing-addendum-office.md`, `docs/art-direction.md`, el brief, l'especificació tècnica i, quan sigui pertinent, amb els patrons visuals detectats al moodboard de `assets/reference/`.
9. No substitueixis fotografies aprovades per stock o imatges generades.
10. No converteixis la captura de referència en una sola imatge: la web s'ha de construir amb HTML, CSS i assets reals.
11. No utilitzis automàticament cap imatge de `assets/reference/` al frontend. Per defecte, tracta-les com a referències visuals, excepte si un fitxer està identificat explícitament com a asset aprovat per a producció.
12. No copiïs literalment una composició, una fotografia o una identitat visual de les referències. Extreu-ne criteris i patrons generals, no rèpliques.

## 3. Direcció visual aprovada

La web ha de transmetre:

- professionalitat jurídica;
- proximitat i confiança;
- serenitat;
- rigor;
- cultura i ofici;
- calidesa continguda;
- una imatge contemporània i humana;
- elegància discreta;
- absència d'estètica genèrica de plantilla o d'"AI-generated website".

S'han de conservar les decisions visuals aprovades de la landing, incloent:

- ús d'espais amplis entre seccions;
- franges grises de separació allà on estan previstes;
- jerarquia editorial neta;
- bloc de contacte airejat;
- frase «El dret al servei de les persones» amb la posició definida en la proposta aprovada;
- ressenyes de Google amb cinc estrelles visibles;
- targetes de ressenyes visualment consistents;
- navegació del carrusel discreta i ben integrada;
- secció d'ubicació preparada per integrar Google Maps, sense repetir necessàriament l'adreça en text si el mapa ja la representa;
- nova secció `El despatx`, integrada entre `Trajectòria` i `Ressenyes`, amb fotografia real de l'espai i composició editorial segons `docs/landing-addendum-office.md`.

La descripció detallada, secció per secció, és a `docs/landing-master-spec.md` i a les addendes posteriors.

### 3.1. Moodboard de Glòria Solsona

La carpeta `assets/reference/` pot contenir fotografies i referències visuals facilitades per Glòria Solsona per mostrar quin tipus d'estètica, atmosfera i sensibilitat visual li agraden.

Aquest material s'ha d'analitzar **com un conjunt**, no com una llista d'imatges independents. Quan sigui útil per a una decisió de disseny, identifica patrons recurrents com ara:

- paleta i temperatura del color;
- llum, contrast i tractament fotogràfic;
- composició i enquadraments;
- ús de l'espai negatiu;
- nivell de minimalisme o densitat visual;
- textures i materials;
- estil editorial i sofisticació;
- sensació de proximitat, serenitat, autoritat o calidesa;
- tipus de tipografia i jerarquia que suggereixen les referències;
- grau de formalitat i to general.

L'objectiu és utilitzar aquests patrons per **afinar i validar** la web ja aprovada, no per iniciar un nou redisseny.

Jerarquia de decisió visual:

1. decisions explícitament aprovades per la clienta;
2. decisions posteriors documentades en addendes, inclosa `docs/landing-addendum-office.md`;
3. `docs/landing-master-spec.md` i `landing-approved.png`;
4. `docs/art-direction.md`;
5. patrons generals extrets del moodboard de `assets/reference/`;
6. criteri propi de disseny.

Si el moodboard suggereix una direcció incompatible amb una decisió ja aprovada, no canviïs la web silenciosament: documenta la discrepància i conserva la decisió aprovada fins que s'indiqui el contrari.

## 4. Desenvolupament

Prioritats:

1. fidelitat visual;
2. responsive real;
3. accessibilitat;
4. rendiment;
5. SEO tècnic;
6. simplicitat de manteniment.

Evita dependències innecessàries. No incorporis frameworks, llibreries o serveis externs només per resoldre funcionalitats simples.

## 5. Responsive

La web s'ha de revisar com a mínim en:

- desktop gran;
- portàtil/Mac de mida mitjana;
- tablet;
- mòbil.

No s'accepten:

- textos tallats;
- overflow horitzontal;
- elements solapats;
- espais desproporcionats;
- CTA fora de pantalla;
- carrusels que depenguin del hover;
- tipografia il·legible en mòbil.

## 6. Accessibilitat

Aplicar criteris WCAG 2.2 AA quan siguin pertinents:

- contrast suficient;
- jerarquia semàntica correcta;
- focus visible;
- navegació per teclat;
- `alt` adequats;
- labels en formularis;
- objectius tàctils suficients;
- respecte per `prefers-reduced-motion`;
- evitar animacions que dificultin la lectura.

## 7. SEO

Segueix `docs/seo-plan.md`.

No inventis metadades locals o professionals si encara no estan confirmades.

## 8. Legal i privacitat

Segueix `docs/legal-requirements.md`.

Cap política legal es considerarà definitiva fins que les dades necessàries hagin estat confirmades per la clienta.

## 9. Integracions

### Google Maps

La integració és viable. Preferència inicial: embed oficial senzill i responsive, evitant una API amb clau si no és necessària.

### WhatsApp

Només s'incorporarà si la clienta confirma que vol utilitzar-lo i facilita el número/canal correcte.

### Formulari de contacte

No inventar destinataris ni serveis. Cal deixar l'arquitectura preparada perquè el mètode d'enviament es pugui decidir posteriorment.

## 10. Flux de treball amb Git

- No treballar directament sobre `main` per canvis grans quan el projecte ja estigui en desenvolupament actiu.
- Crear branques descriptives quan sigui convenient.
- Fer commits petits i clars.
- No eliminar fitxers ni sobreescriure treball existent sense verificar abans el seu ús.
- Abans d'una refactorització, comprovar l'estat de Git.

## 11. Definició de "fet"

Una tasca no està acabada només perquè visualment sembli correcta. Ha de complir també:

- fidelitat amb `docs/landing-master-spec.md`, les addendes vigents i la imatge aprovada;
- coherència amb `docs/art-direction.md` i amb els patrons del moodboard quan aquests siguin rellevants i no contradiguin decisions aprovades;
- responsive verificat;
- sense errors de consola rellevants;
- navegació amb teclat funcional;
- contingut sense placeholders accidentals;
- enllaços revisats;
- metadades coherents;
- cap dada inventada;
- cap dada privada de la desenvolupadora;
- qualitat visual coherent amb la landing aprovada.

Quan existeixi algun dubte entre «millorar» i «respectar el disseny aprovat», prioritza **respectar el disseny aprovat** i documenta la proposta abans de canviar-lo.
