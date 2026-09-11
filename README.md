# Glòria Solsona Martí — Web professional

Repositori del projecte web de Glòria Solsona Martí, advocada.

## Estat actual

El projecte es troba en fase de preparació prèvia al desenvolupament. La direcció visual de la landing està aprovada, però encara queden algunes dades professionals i legals pendents de validació amb la clienta.

Per aquest motiu, de moment:

- no es publica la web;
- no es compra ni es configura domini o hosting;
- no s'inventen dades pendents;
- no es redacten textos legals definitius amb informació incompleta;
- no s'introdueix cap dada personal de la desenvolupadora;
- qualsevol prova s'ha de fer localment o en previsualització privada.

## Font principal de la landing

La landing aprovada queda documentada a:

- `docs/landing-master-spec.md` — document mestre secció per secció;
- `assets/reference/landing-approved.png` — captura visual aprovada que s'ha de conservar dins del projecte.

La imatge i el document mestre són la referència principal per al desenvolupament. No s'ha de redissenyar la proposta.

## Documentació del projecte

Abans de començar a programar, cal llegir:

- `CLAUDE.md`
- `docs/landing-master-spec.md`
- `docs/project-brief.md`
- `docs/content-status.md`
- `docs/technical-spec.md`
- `docs/seo-plan.md`
- `docs/legal-requirements.md`
- `docs/qa-checklist.md`

Per sincronitzar de manera segura la carpeta local del Mac amb aquest repositori:

- `docs/local-sync.md`
- `scripts/prepare-reference.sh`

## Principi de treball

La landing aprovada és la referència visual del projecte. El desenvolupament ha de reproduir-la amb fidelitat i millorar només aspectes tècnics, d'accessibilitat, responsive, rendiment i mantenibilitat sense redissenyar-la.

## Desenvolupament local

Stack: Vite + HTML + CSS + JavaScript (docs/implementation-plan.md).

```bash
npm install
npm run dev
```

Estat actual: base tècnica del projecte (fase 1). Encara no hi ha header, hero
ni cap secció de contingut implementada — vegeu `docs/implementation-plan.md`
per a l'ordre de fases previst.
