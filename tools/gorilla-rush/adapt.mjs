#!/usr/bin/env node
// Adaptador do Gorilla Rush para o NextVR.
//
// O jogo veio como UM arquivo HTML de 4,4 MB (mapa, rig e texturas em base64 dentro dele). Este
// script pega esse arquivo e escreve o asset do APK com as mudanças que o NextVR precisa — e só
// elas, para a próxima versão do jogo poder ser adaptada de novo sem refazer nada à mão:
//
//   1. three/GLTFLoader/SkeletonUtils/MediaPipe saem da CDN e passam a vir do próprio APK
//      (as bibliotecas são as mesmas do Cockpit VR, que já viajam no pacote);
//   2. o PeerJS (serviço de terceiros) sai e entra o NOSSO servidor WebSocket;
//   3. o lobby/menu do jogo (só responde a toque) sai do caminho: o NextVR entra direto no jogo com
//      os ajustes que o usuário escolheu nas Configurações → aba 4;
//   4. entra o menu DENTRO do jogo, com mira pelo giroscópio;
//   5. os scripts do Netlify (telemetria do site original) são removidos.
//
// Uso:  node tools/gorilla-rush/adapt.mjs "caminho/LARP GORILA RUSH.html"
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const here = dirname(new URL(import.meta.url).pathname);
const root = resolve(here, '../..');
const src = process.argv[2];
if (!src) {
  console.error('uso: node tools/gorilla-rush/adapt.mjs <Gorilla Rush.html>');
  process.exit(1);
}
const outDir = resolve(root, 'nextvr-android/src/main/assets/ui/gorilla-rush');
const outFile = resolve(outDir, 'game.html');

const read = p => readFile(p, 'utf8');
const part = name => read(resolve(here, 'parts', name));
const MUST = (haystack, needle, label) => {
  if (!haystack.includes(needle)) throw new Error('âncora não encontrada: ' + label);
  return true;
};

let html = await read(src);
const before = html.length;

/* 1. Bibliotecas: do pacote, não da CDN ------------------------------------------------ */
const CDN_SCRIPTS = [
  '<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/utils/SkeletonUtils.js"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.js"></script>',
];
const LOCAL_SCRIPTS = [
  '<script src="/ui/cockpit/libs/three.min.js"></script>',
  '<script src="/ui/cockpit/libs/GLTFLoader.js"></script>',
  '<script src="/ui/gorilla-rush/libs/SkeletonUtils.js"></script>',
  '<script src="/ui/cockpit/libs/hands/hands.js"></script>',
];
// Uma por uma: o arquivo original usa CRLF e as tags não estão numa linha só previsível.
CDN_SCRIPTS.forEach((tag, i) => {
  MUST(html, tag, tag);
  html = html.replace(tag, LOCAL_SCRIPTS[i] || '');
});

/* 2. MediaPipe: modelo e wasm saem do pacote (o binário SEM SIMD fica fora do APK) --------- */
const HANDS_CDN = "const H=new Hands({locateFile:f=>'https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/'+f});";
MUST(html, HANDS_CDN, 'locateFile do MediaPipe');
html = html.replace(HANDS_CDN, [
  '/* O MediaPipe viaja no APK (libs do Cockpit VR). Só o módulo SEM SIMD, guardado fora do',
  '   pacote por tamanho, busca na CDN — e, se não houver internet, o jogo segue sem as mãos. */',
  "const H=HANDSOBJ=new Hands({locateFile:f=>/hands_solution_wasm_bin\\.(js|wasm)$/.test(f)",
  "  ?'https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/'+f",
  "  :'/ui/cockpit/libs/hands/'+f});",
].join('\n'));

/* 3. Rede: PeerJS (terceiros) -> o nosso servidor --------------------------------------- */
const netBlock = await part('net.js');
const netStart = html.indexOf('function initPeer(id){');
MUST(html, 'function initPeer(id){', 'início da rede PeerJS');
const netEndMark = ' startGame()}';
const netEnd = html.indexOf(netEndMark, netStart);
if (netEnd < 0) throw new Error('âncora não encontrada: fim da função enter()');
html = html.slice(0, netStart) + netBlock.trim() + html.slice(netEnd + netEndMark.length);

// O anfitrião deixa de falar com N conexões e passa a falar com o servidor (que distribui).
const HOST_SEND = 'for(const k in NET.conns)try{NET.conns[k].send(m)}catch(x){}';
MUST(html, HOST_SEND, 'broadcast do anfitrião');
html = html.replace(HOST_SEND, 'nvSend(m)');
const MEMBER_SEND = 'else if(NET.hc&&NET.hc.open)NET.hc.send(Object.assign({t:\'p\'},self))';
MUST(html, MEMBER_SEND, 'envio do convidado');
html = html.replace(MEMBER_SEND, 'else nvSend(Object.assign({t:\'p\'},self))');

/* 3b. A partida começou: a página avisa o app (é a etapa que o Watchdog espera) ------------- */
MUST(html, 'function startGame(){', 'início de startGame()');
html = html.replace('function startGame(){',
  "function startGame(){try{if(typeof NextVRGame!=='undefined'&&NextVRGame&&NextVRGame.stage)NextVRGame.stage('play')}catch(e){}");

/* 4. Menu dentro do jogo, no laço de quadro ---------------------------------------------- */
const LOOK_LINE = "if(state!='play')return;mapG&&(mapG.visible=true);dome.visible=true;S.fog=FOG;look();";
MUST(html, LOOK_LINE, 'laço de quadro (look)');
html = html.replace(LOOK_LINE, LOOK_LINE + 'NVIG.tick(dt);');

/* 5. CSS e elementos nossos -------------------------------------------------------------- */
const css = await part('game.css');
MUST(html, '</style>', 'fim do CSS do jogo');
html = html.replace('</style>', css + '\n</style>');
const frag = (await part('game.html.frag')).trim();
MUST(html, '<div id="hud"></div>', 'HUD do jogo');
html = html.replace('<div id="hud"></div>', '<div id="hud"></div>\n' + frag);

/* 6. Arranque: o menu do jogo sai do caminho, entra o nosso ------------------------------- */
const ingame = await part('ingame.js');
const BOOT_MARK = 'requestAnimationFrame(frame);loadMap();';
MUST(html, BOOT_MARK, 'arranque do jogo');
html = html.replace(BOOT_MARK, ingame.trim() + '\n' + BOOT_MARK);

/* 7. Fora a telemetria do Netlify -------------------------------------------------------- */
html = html.replace(/<script async src="\/\.netlify\/scripts\/[^"]*"[^>]*><\/script>\s*/g, '');
if (/netlify/i.test(html)) throw new Error('sobrou referência ao Netlify no HTML');

/* 8. Título e aviso de origem ------------------------------------------------------------ */
html = html.replace('<title>Gorilla Rush</title>', '<title>Gorilla Rush · NextVR</title>');
html = html.replace('<!doctype html>',
  '<!doctype html>\n<!-- Gorilla Rush dentro do NextVR. Arquivo GERADO por tools/gorilla-rush/adapt.mjs:\n'
  + '     não editar à mão. As mudanças estão listadas no cabeçalho daquele script. -->');

await mkdir(resolve(outDir, 'libs'), { recursive: true });
await writeFile(outFile, html, 'utf8');

// SkeletonUtils é o único pedaço de three que o Cockpit não traz; vem de node_modules (0.128).
const skeleton = resolve(here, 'vendor/SkeletonUtils-0.128.js');
try {
  await copyFile(skeleton, resolve(outDir, 'libs/SkeletonUtils.js'));
} catch (error) {
  console.warn('aviso: SkeletonUtils.js não copiado (' + error.message + ')');
}

/* 9. Checagem de sintaxe do script do jogo ----------------------------------------------- */
const scriptStart = html.lastIndexOf('<script>');
const scriptEnd = html.indexOf('</script>', scriptStart);
const js = html.slice(scriptStart + '<script>'.length, scriptEnd);
try {
  new Function(js);
} catch (error) {
  throw new Error('o script do jogo não compila: ' + error.message);
}
console.log(`ok: ${outFile}`);
console.log(`   ${(before / 1048576).toFixed(2)} MB -> ${(html.length / 1048576).toFixed(2)} MB`);
