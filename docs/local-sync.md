# Sincronització segura del projecte local

Aquesta guia serveix per sincronitzar la carpeta local `Documentos/gloria-solsona-web` amb el repositori remot sense perdre la captura aprovada que ja hi ha al Mac.

## Objectiu

Després d'aquest procés, la carpeta local ha de contenir:

- tota la documentació del repositori;
- `CLAUDE.md`;
- la captura aprovada a `assets/reference/landing-approved.png`;
- la imatge original local, sense eliminar-la automàticament.

## Passos

Obre Terminal i executa:

```bash
cd ~/Documents/gloria-solsona-web
git status
git remote -v
git pull --ff-only origin main
bash scripts/prepare-reference.sh
git status
```

`git pull --ff-only` és intencionadament conservador: si el repositori local i el remot han divergit, s'aturarà en lloc de crear una fusió automàtica.

Si tot és correcte i `assets/reference/landing-approved.png` apareix com a fitxer nou:

```bash
git add assets/reference/landing-approved.png
git commit -m "assets: add approved landing reference"
git push origin main
```

## Si alguna ordre falla

No utilitzar `git reset --hard`, `git clean`, `git push --force` ni eliminar la carpeta per començar de zero.

Conservar la imatge original i revisar l'estat abans de fer cap canvi destructiu.

## Resultat esperat

```text
gloria-solsona-web/
├── README.md
├── CLAUDE.md
├── assets/
│   └── reference/
│       ├── README.md
│       └── landing-approved.png
├── docs/
│   ├── landing-master-spec.md
│   ├── content-status.md
│   ├── technical-spec.md
│   ├── seo-plan.md
│   ├── legal-requirements.md
│   ├── qa-checklist.md
│   └── local-sync.md
└── scripts/
    └── prepare-reference.sh
```
