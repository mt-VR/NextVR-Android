#!/usr/bin/env bash
# Build 95 — copia a interface do ATMO XR para dentro do app do iPhone.
#
# A página é UMA só: a mesma que o Android empacota em
# nextvr-android/src/main/assets/ui. Este script garante que o pacote do iOS tenha exatamente aquele
# conteúdo (nada de segunda cópia editada à mão, que envelheceria em silêncio).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SRC="$ROOT/nextvr-android/src/main/assets/ui"
DST="$ROOT/ios/ATMOXR/Resources/ui"

if [ ! -f "$SRC/index.html" ]; then
  echo "ios: a interface ainda não foi montada; rodando npm run build:ui"
  ( cd "$ROOT" && npm run build:ui )
fi

test -f "$SRC/index.html"

rm -rf "$DST"
mkdir -p "$DST"
# cp -R do conteúdo (não da pasta) para o pacote ficar em ui/ e não ui/ui/.
cp -R "$SRC/." "$DST/"

test -f "$DST/index.html"
test -f "$DST/app.js"
test -f "$DST/env/sunset.jpg"

echo "ios: interface copiada para ios/ATMOXR/Resources/ui ($(find "$DST" -type f | wc -l | tr -d ' ') arquivos)"
