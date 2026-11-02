/* Gera o arquivo único distribuível: HTML + CSS + JS inline, sem dependências externas. */
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const shell = fs.readFileSync('game/shell.html', 'utf8');
const js = fs.readFileSync('game/titans-game.js', 'utf8');

// valida a sintaxe antes de embutir (pega erros que só apareceriam no celular)
execFileSync(process.execPath, ['--check', 'game/titans-game.js'], { stdio: 'inherit' });
for (const bad of ['$$', '</script']) {
  if (js.includes(bad)) throw new Error(`JS contém "${bad}" — inválido/perigoso para inline`);
}

if (js.includes('</script')) throw new Error('JS contém </script — precisa escapar');

const out = shell.replace(
  /<script src="titans-clinic-mobile\.js"><\/script>/,
  '<script>\n' + js + '\n</script>'
);
if (out === shell) throw new Error('marcador <script src> não encontrado');

fs.writeFileSync('titans-clinic.html', out);
// cópia empacotada dentro do APK (WebView carrega de assets/)
fs.mkdirSync('titans-clinic-apk/src/main/assets', { recursive: true });
fs.writeFileSync('titans-clinic-apk/src/main/assets/titans-clinic.html', out);
console.log('titans-clinic.html', (fs.statSync('titans-clinic.html').size / 1024).toFixed(1) + ' kB',
  '(+ assets do APK)');
