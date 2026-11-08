// Gera `xfc-game/app.bundle.js`: um único arquivo clássico (IIFE) com todo o
// jogo, incluindo o three.js do vendor/.
//
// Por quê: navegadores bloqueiam módulos ES (`<script type="module">`) no
// `file://`, então quem dezipoava o zip e dava duplo clique no index.html via
// só o fundo azul. O index.html tem um "watchdog" inline que, se o módulo
// principal não marcar `window.__xfcBooted`, injeta este bundle — que por ser
// um script clássico roda em qualquer origem, inclusive no disco.
//
//   node xfc-game/tools/build-bundle.mjs
//
// O arquivo gerado não é commitado (ver .gitignore); o CI o produz antes de
// empacotar o zip.

import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';

const entry = fileURLToPath(new URL('../src/main.js', import.meta.url));
const outfile = fileURLToPath(new URL('../app.bundle.js', import.meta.url));

await build({
  entryPoints: [entry],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: true,
  // Mantém os avisos de licença (MIT do three.js, etc.) no fim do arquivo.
  legalComments: 'eof',
  logLevel: 'info',
  outfile
});

console.log(`Bundle do XFC gerado em ${outfile}`);
