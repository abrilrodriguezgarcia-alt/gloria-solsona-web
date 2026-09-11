# Addenda de landing — Secció «El despatx»

> Decisió aprovada el 2026-09-11: la landing incorpora una nova secció dedicada al despatx per mostrar fotografies reals de l'espai i reforçar la proximitat i la identitat pròpia de Glòria Solsona.

Aquesta addenda és posterior a `docs/landing-master-spec.md` i, només pel que fa a la incorporació d'aquesta nova secció i al nou ordre de blocs, **té prioritat sobre l'estructura original**.

## 1. Nou ordre de seccions

Ordre actualitzat:

1. Header integrat al hero.
2. Hero.
3. Àrees de pràctica.
4. Presentació de Glòria Solsona Martí.
5. Trajectòria.
6. **El despatx.**
7. Ressenyes.
8. Contacte + Ubicació.
9. Footer.

La ubicació entre `Trajectòria` i `Ressenyes` és intencionada: després de presentar l'experiència professional, la web mostra l'espai real on s'atén les persones; després venen la prova social i el contacte.

## 2. Nom de la secció

Català: `El despatx`

Castellà: `El despacho`

No utilitzar noms genèrics com `Galeria`, `Espais` o `Instal·lacions` si no hi ha una raó clara. `El despatx` és més humà, directe i coherent amb una professional independent.

## 3. Objectiu

La secció no és una galeria decorativa. Ha de servir per:

- mostrar un espai real i recognoscible;
- reforçar confiança i proximitat;
- donar continuïtat al to humà de la marca;
- aportar textura, calidesa i autenticitat a una landing molt editorial;
- fer visible la identitat `GS` en el seu context físic quan aparegui de manera natural.

## 4. Direcció visual

La secció ha de seguir `docs/art-direction.md`.

Evitar:

- mosaics tipus Pinterest;
- carrusels massa comercials;
- targetes amb ombres;
- fotos amb marcs gruixuts;
- efectes parallax intensos;
- overlays foscos innecessaris;
- captions constants sobre totes les fotos.

Ha de semblar una extensió editorial de la landing aprovada.

## 5. Composició recomanada

### Desktop

Composició asimètrica i molt neta:

- columna o franja introductòria amb títol `El despatx` i una línia editorial curta;
- una fotografia principal ampla o vertical amb pes visual;
- 2 o 3 fotografies secundàries de proporcions diferents;
- espai en blanc suficient entre imatges;
- sense convertir cada foto en una targeta.

La composició pot funcionar com una petita seqüència editorial, no com un grid rígid de miniatures iguals.

### Mòbil

- una columna;
- fotografia principal primer;
- 2 o 3 imatges secundàries després;
- no crear un carrusel obligatori si l'apilat funciona millor;
- mantenir crops naturals i evitar tallar elements identificatius del despatx.

## 6. Quantitat d'imatges

Recomanació inicial: **4 o 5 fotografies màxim**.

La secció ha de combinar:

1. un pla general del despatx;
2. un segon pla que mostri una altra zona o l'àrea de reunió;
3. un detall de marca o arquitectura — per exemple el `GS` al vidre;
4. un detall atmosfèric — escriptori, llum, llibres o papereria;
5. opcionalment, un altre pla general si aporta una perspectiva clarament diferent.

No mostrar totes les fotos disponibles només perquè existeixen.

## 7. Referències candidates del moodboard

Les fotografies pujades a `assets/reference/` inclouen diverses imatges reals del despatx. Per a la selecció final, prioritzar les que mostren:

- el despatx en pla general;
- la zona de butaques/reunió;
- l'escriptori amb context;
- el vidre amb el monograma `GS`;
- algun detall càlid que complementi, però no substitueixi, els plans generals.

**Important:** `assets/reference/` continua sent carpeta de referència. Quan es decideixi quines fotografies es publicaran realment, copiar-les o moure-les a una carpeta de producció, per exemple `assets/images/office/`, amb noms descriptius i optimitzats.

## 8. Text

No cal carregar aquesta secció de copy.

Proposta base en català:

**Títol:** `El despatx`

**Text curt:** `Un espai proper, serè i pensat per atendre cada consulta amb la discreció que requereix.`

Proposta base en castellà:

**Título:** `El despacho`

**Texto corto:** `Un espacio cercano, sereno y pensado para atender cada consulta con la discreción que requiere.`

Aquest text és de posicionament, no una afirmació tècnica. Si Glòria prefereix una redacció pròpia, prevaldrà la seva versió.

## 9. Accessibilitat i rendiment

- `alt` descriptius i específics per a les fotografies informatives;
- `alt=""` només si una imatge és estrictament decorativa;
- dimensions `width` i `height` o `aspect-ratio` per evitar layout shift;
- `loading="lazy"` per a imatges fora del primer viewport;
- formats optimitzats quan sigui possible;
- `srcset`/mides responsives si la implementació ho permet sense complicació innecessària.

## 10. Navegació

No és obligatori afegir `El despatx` al menú principal si això sobrecarrega el header actual.

Primer s'ha d'avaluar si els ítems existents (`Àrees`, `Glòria`, `Ressenyes`, `Contacte`) mantenen millor la simplicitat del menú. La secció pot existir perfectament dins l'scroll sense anchor visible al header.

Si s'incorpora al menú, fer-ho només si continua sent llegible en desktop i no perjudica la versió portàtil.
