# Prompt per a Claude — Revisió visual amb moodboard i nova secció «El despatx»

Utilitza aquest prompt quan es vulgui revisar la landing actual sense redissenyar-la.

---

Vull que revisis la landing actual de **Glòria Solsona Martí** tenint en compte tota la documentació del projecte i, especialment:

- `CLAUDE.md`
- `docs/landing-master-spec.md`
- `docs/art-direction.md`
- `docs/landing-addendum-office.md`
- `assets/reference/landing-approved.png`
- totes les imatges de `assets/reference/` com a moodboard visual

## OBJECTIU

La landing actual ja té una direcció visual aprovada. **No la redissenyis ni canviïs la seva identitat general.**

La teva feina és:

1. analitzar l'estat visual real de la landing;
2. comparar-lo amb la direcció d'art extreta del moodboard de Glòria;
3. detectar refinaments visuals que facin la web més coherent amb el seu univers visual;
4. incorporar una nova secció **«El despatx»** entre `Trajectòria` i `Ressenyes`, seguint `docs/landing-addendum-office.md`;
5. preservar responsive, accessibilitat, rendiment i jerarquia editorial.

## DIRECCIÓ D'ART A RESPECTAR

La web ha de transmetre:

- rigor jurídic;
- serenitat;
- proximitat;
- cultura;
- identitat pròpia;
- calidesa continguda;
- elegància discreta;
- autoritat tranquil·la.

Evita que la web sembli:

- una plantilla jurídica genèrica;
- una landing SaaS;
- un despatx de luxe ostentós;
- un disseny excessivament fred o clínic;
- una web carregada d'efectes visuals.

## REVISIÓ QUE HAS DE FER

Revisa especialment:

- coherència de paleta i contrast;
- temperatura visual general;
- ús del blau marí, blancs i neutres;
- jerarquia tipogràfica;
- espaiat entre seccions;
- ritme editorial;
- ús del monograma `GS`;
- integració de fotografia real;
- sensació de proximitat i confiança;
- consistència desktop / portàtil / tablet / mòbil;
- qualsevol element que sembli massa genèric, artificial o “AI-generated”.

## NOVA SECCIÓ «EL DESPATX»

Afegeix una secció nova entre `Trajectòria` i `Ressenyes`.

No la converteixis en una galeria convencional ni en un mosaic de targetes.

Busca una composició editorial, neta i asimètrica amb:

- títol `El despatx` en català / `El despacho` en castellà;
- una línia introductòria curta;
- 1 fotografia principal amb pes visual;
- 2 o 3 fotografies secundàries;
- combinació de pla general, zona de reunió, detall de marca i detall atmosfèric;
- espai en blanc generós;
- crops naturals;
- cap ombra forta, border-radius gratuït o efecte decoratiu innecessari.

Les fotos de `assets/reference/` són referències. Si proposes utilitzar-ne alguna en producció, identifica-la i prepara una còpia en una carpeta de producció com `assets/images/office/`, amb nom descriptiu. No utilitzis automàticament totes les fotos.

## MÈTODE DE TREBALL

Abans de modificar codi:

1. revisa la implementació actual;
2. identifica què ja funciona i no s'ha de tocar;
3. enumera només els ajustos que realment aporten coherència amb `docs/art-direction.md`;
4. indica quins fitxers modificaràs;
5. evita refactoritzacions globals innecessàries.

Després implementa els canvis de manera conservadora.

## IMPORTANT

- No inventis dades professionals, legals o de contacte.
- No publiquis la web.
- No configuris domini, DNS, hosting ni serveis externs.
- No canviïs el contingut legal pendent.
- No introdueixis dades de la desenvolupadora.
- No desfacis decisions visuals aprovades per “millorar-les” segons criteri propi.
- Si el moodboard i la landing aprovada entren en conflicte, preval la decisió aprovada, excepte la nova secció `El despatx`, que sí està expressament autoritzada.

## RESULTAT ESPERAT

Vull una landing que segueixi sent clarament la mateixa web aprovada, però que se senti més pròpia de Glòria Solsona: **serena, jurídica, humana, culta i personal**, amb la nova secció del despatx integrada de manera natural dins el relat de la pàgina.
