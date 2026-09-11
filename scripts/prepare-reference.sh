#!/bin/bash
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [ -z "$ROOT" ]; then
  echo "Error: executa aquest script des de dins del repositori gloria-solsona-web."
  exit 1
fi

cd "$ROOT"
mkdir -p assets/reference

if [ -f "assets/reference/landing-approved.png" ]; then
  echo "OK: assets/reference/landing-approved.png ja existeix."
  exit 0
fi

mapfile_cmd=""
if command -v mapfile >/dev/null 2>&1; then
  mapfile_cmd="mapfile"
fi

# Cerca només imatges al directori arrel del projecte.
IMAGES=()
while IFS= read -r -d '' file; do
  IMAGES+=("$file")
done < <(find . -maxdepth 1 -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' \) -print0)

if [ "${#IMAGES[@]}" -eq 0 ]; then
  echo "No he trobat cap imatge al directori arrel del projecte."
  echo "Col·loca-hi la captura aprovada i torna a executar: bash scripts/prepare-reference.sh"
  exit 1
fi

if [ "${#IMAGES[@]}" -gt 1 ]; then
  echo "He trobat més d'una imatge al directori arrel. Per seguretat no n'escolliré cap automàticament:"
  printf ' - %s\n' "${IMAGES[@]}"
  echo "Deixa només la captura aprovada a l'arrel o copia-la manualment a assets/reference/landing-approved.png"
  exit 1
fi

SOURCE="${IMAGES[0]}"

if command -v sips >/dev/null 2>&1; then
  sips -s format png "$SOURCE" --out "assets/reference/landing-approved.png" >/dev/null
else
  case "${SOURCE##*.}" in
    png|PNG)
      cp "$SOURCE" "assets/reference/landing-approved.png"
      ;;
    *)
      echo "No hi ha 'sips' disponible i la imatge no és PNG. Converteix-la a PNG manualment."
      exit 1
      ;;
  esac
fi

echo "OK: captura copiada a assets/reference/landing-approved.png"
echo "L'original s'ha conservat a: $SOURCE"
echo "Següent pas: git add assets/reference/landing-approved.png && git commit -m 'assets: add approved landing reference' && git push origin main"
