#!/bin/sh
# Build no-op libGLESv2.so.2 / libEGL.so.1 stubs so the MediaPipe Tasks C library loads on a
# headless host (the CPU delegate never calls GL; the GPU delegate initialises cleanly to
# "unavailable"). Needed because libmediapipe_c.so is linked with BIND_NOW and DT_NEEDED on both
# libraries, so dlopen fails without them even for pure CPU inference.
#
# Usage: sh tools/bench/mk_gl_stubs.sh [output-dir] [path-to-libmediapipe_c.so]
#   default output-dir:  ./gl-stubs
#   default library:     the first libmediapipe_c*.so found under the current python3 site-packages
set -eu
OUT=${1:-./gl-stubs}
LIB=${2:-}
if [ -z "$LIB" ]; then
  # The python3 that HAS mediapipe (a venv, usually) knows where the Tasks C library lives.
  LIB=$(python3 -c 'import mediapipe as m, os; print(os.path.join(os.path.dirname(m.__file__), "tasks", "c", "libmediapipe.so"))' 2>/dev/null || true)
fi
if [ -z "$LIB" ] || [ ! -f "$LIB" ]; then
  LIB=$(find .venv* venv "$HOME" -maxdepth 9 -name "libmediapipe*.so" 2>/dev/null | head -1)
fi
[ -n "$LIB" ] && [ -f "$LIB" ] || { echo "libmediapipe.so not found; pass it as the second argument" >&2; exit 1; }
mkdir -p "$OUT"
nm -D --undefined-only "$LIB" | awk '{print $NF}' | grep -E '^(gl|egl)' | sort -u > "$OUT/syms.txt"
{
  echo "/* Auto-generated no-op stubs for headless MediaPipe Tasks benchmarks. */"
  while read -r s; do
    case "$s" in
      eglGetError) echo "unsigned int $s(void){return 0x3000u;}";;
      eglGetCurrentContext|eglGetCurrentDisplay|eglGetCurrentSurface|eglGetDisplay)
                   echo "void* $s(void){return (void*)0;}";;
      *)           echo "long $s(void){return 0;}";;
    esac
  done < "$OUT/syms.txt"
} > "$OUT/stubs.c"
gcc -shared -fPIC -O1 -o "$OUT/libGLESv2.so.2" -Wl,-soname,libGLESv2.so.2 "$OUT/stubs.c"
gcc -shared -fPIC -O1 -o "$OUT/libEGL.so.1"   -Wl,-soname,libEGL.so.1   "$OUT/stubs.c"
echo "stubs in $OUT - run benchmarks with LD_LIBRARY_PATH=$OUT"
