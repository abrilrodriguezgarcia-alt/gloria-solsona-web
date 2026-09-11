# Instruccions per a Claude Code

## 1. Context del projecte

Aquest repositori conté la web professional de **Glòria Solsona Martí, advocada**.

La **direcció visual de la landing ja està aprovada**. El teu objectiu no és reinventar-la ni redissenyar-la, sinó implementar-la fidelment, amb codi net, responsive, accessible i mantenible.

## 2. Regles obligatòries abans de modificar res

1. Llegeix completament aquest fitxer i tota la documentació de `/docs` abans de tocar codi.
2. No inventis cap dada professional, fiscal, legal o de contacte.
3. Si una dada no està confirmada, utilitza un placeholder clar o deixa-la preparada per incorporar-la més endavant.
4. No introdueixis cap dada personal d'Abril Rodríguez, la desenvolupadora, en cap text legal, metadada, formulari o contingut públic.
5. No publiquis la web ni configuris domini, DNS, hosting o serveis externs sense instrucció expressa.
6. No canviïs l'estructura general, estil visual o jerarquia de la landing aprovada sense autorització expressa.
7. No facis canvis globals per resoldre un problema local si poden alterar altres seccions.
8. Abans d'implementar una modificació visual important, comprova que encaixa amb el brief i l'especificació tècnica.

## 3. Direcció visual aprovada

La web ha de transmetre:

- professionalitat jurídica;
- proximitat i confiança;
- serenitat;
- rigor;
- una imatge contemporània i humana;
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
- secció d'ubicació preparada per integrar Google Maps, sense repetir necessàriament l'adreça en text si el mapa ja la representa.

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
