import { build } from 'esbuild';
import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import * as icons from 'simple-icons';
const out = new URL('../nextvr-android/src/main/assets/ui/', import.meta.url);
await mkdir(out, { recursive: true });
await build({ entryPoints: ['web/src/apps.js'], bundle: true, format: 'iife', target: 'chrome80', minify: true, outfile: new URL('app.js', out).pathname, legalComments: 'eof' });
await copyFile('web/index.html', new URL('index.html', out));
// The typing engine is deliberately NOT part of the esbuild bundle: the native side installs this
// very same file, byte for byte, as the document-start script of every hosted browser page, so a
// text field on a real website and a text field in the shell obey the same caret and key rules.
await copyFile('web/src/typing.js', new URL('typing.js', out));
await mkdir(new URL('icons/', out), { recursive: true });
// O "N" é o vetor original inline da referência mais recente, extraído sem redesenho.
// Logo do app: o N cromado fornecido pelo usuário (chrome sobre preto, recortado com alfa), no
// lugar do antigo vetor "N" da referência. O mesmo arquivo vira o ícone do APK.
await copyFile('web/assets/nextvr-n.png', new URL('icons/nextvr-n.png', out));
// Ilustração (mão com o controle) da tela de escolha de idioma.
await copyFile('web/assets/hand-controller.png', new URL('hand-controller.png', out));
await mkdir(new URL('env/', out), { recursive: true });
for (const id of ['sunset','night','space','palm','virtual'])
  await copyFile(`web/env/${id}.jpg`, new URL(`env/${id}.jpg`, out));
await writeFile(new URL('branding.json',out),JSON.stringify({
  source:'logo fornecida pelo usuário (chrome N sobre preto)',
  format:'png',asset:'icons/nextvr-n.png',icon:'res/drawable-*-xhdpi/nextvr_ic_launcher.png',
  environments:['env/sunset.jpg','env/night.jpg','env/space.jpg','env/palm.jpg','env/virtual.jpg']
})+'\n','utf8');
await mkdir(new URL('fonts/', out), { recursive: true });
let css = '';
for (const weight of [400,500,600,700,800]) {
  const name = `inter-latin-${weight}-normal.woff2`;
  await copyFile(`node_modules/@fontsource/inter/files/${name}`, new URL(`fonts/${name}`, out));
  css += `@font-face{font-family:Inter;font-style:normal;font-weight:${weight};font-display:swap;src:url('./fonts/${name}') format('woff2')}\n`;
}
await writeFile(new URL('fonts.css', out), css, 'utf8');
for (const [slug,color] of Object.entries({youtube:'FF0000',tiktok:'ffffff',discord:'ffffff',twitch:'ffffff',whatsapp:'ffffff',instagram:'ffffff',x:'ffffff',facebook:'ffffff',telegram:'ffffff',spotify:'1DB954'})) {
  const icon = Object.values(icons).find(i => i.slug === slug);
  if (!icon) throw new Error(`Missing bundled icon: ${slug}`);
  await writeFile(new URL(`icons/${slug}.svg`, out), icon.svg.replace('<svg ', `<svg fill="#${color}" `));
}
await copyFile('node_modules/three/LICENSE', new URL('THREE-LICENSE.txt', out));
await copyFile('node_modules/@fontsource/inter/LICENSE', new URL('INTER-LICENSE.txt', out));
await copyFile('node_modules/simple-icons/LICENSE.md', new URL('ICONS-LICENSE.txt', out));
// Quiet, short, real UI click. PCM WAV loads through Android SoundPool, not a browser autoplay hack.
const rate=22050, n=1323, wav=Buffer.alloc(44+n*2);
wav.write('RIFF'); wav.writeUInt32LE(36+n*2,4); wav.write('WAVEfmt ',8); wav.writeUInt32LE(16,16); wav.writeUInt16LE(1,20); wav.writeUInt16LE(1,22); wav.writeUInt32LE(rate,24); wav.writeUInt32LE(rate*2,28); wav.writeUInt16LE(2,32); wav.writeUInt16LE(16,34); wav.write('data',36); wav.writeUInt32LE(n*2,40);
for(let i=0;i<n;i++){const t=i/rate;const envelope=Math.min(1,i/60)*Math.exp(-t*95);wav.writeInt16LE(Math.round(Math.sin(2*Math.PI*920*t)*envelope*6000),44+i*2);}
await writeFile(new URL('click.wav',out),wav);
console.log('Bundled reference UI, fonts, icons and UI audio.');
