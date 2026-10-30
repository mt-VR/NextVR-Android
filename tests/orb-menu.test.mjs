// O anel de 10 apps — agora os apps SOLTOS no ambiente, cada um no seu espaço.
//
// Pedido do usuário, palavra por palavra: "Não e pra ser uma janelinha flutuanteeeeeeeeeeeeeee, tira a
// barrinha abaixo dela, aonde aparece giroscopio ativo, o negócio de aumentar e diminuir brilho e a
// barrinha branca pra mover remove, e os apps tem que ter o próprio espaço, não em dentro de uma
// janelinha flutuante".
//
// Ou seja: nada de barra de status, nada de chip de giroscópio, nada de barra de brilho, nada de
// alça branca para mover, nada de ✕. Só os dez ícones no ar, sobre o mundo escurecido.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(path, 'utf8');

test('a janelinha do anel mostra dez apps, três em cima, quatro no meio e três embaixo', async () => {
  const orb = await read('web/src/orb-menu.js');
  // As fileiras são a própria estrutura do desenho (3/4/3), não posições absolutas soltas.
  assert.match(orb, /export const ORB_ROWS = Object\.freeze\(\[/);
  const rows = orb.slice(orb.indexOf('ORB_ROWS = Object.freeze(['), orb.indexOf(']);', orb.indexOf('ORB_ROWS = Object.freeze([')));
  const sizes = [...rows.matchAll(/Object\.freeze\(\[([\d,\s]+)\]\)/g)].map(m => m[1].split(',').filter(Boolean).length);
  assert.deepEqual(sizes, [3, 4, 3]);
  assert.match(orb, /export const ORB_PAGE = 10/);
  // Cada ícone leva o NOME embaixo, como na screenshot.
  assert.match(orb, /<span class="orb-label">\$\{esc\(label\)\}<\/span>/);
  const html = await read('web/index.html');
  // "APPS MAIORES E MAIS SEPARADOS" (print do usuário): os ícones cresceram e as fileiras abriram.
  assert.match(html, /\.orb-row\{display:flex;align-items:flex-start;justify-content:center;gap:56px/);
  assert.match(html, /\.orb-app\{pointer-events:auto;position:relative;flex:none;width:150px/);
  assert.match(html, /\.orb-app::before\{content:'';position:absolute;left:0;top:0;width:150px;height:150px;border-radius:34px/);
  assert.match(html, /\.orb-label\{position:relative;max-width:158px;font-size:15px/);
  // Os dois lados: apps do NextVR E apps do Android instalado.
  assert.match(orb, /ORB_ANDROID_SLOTS = 4/);
  assert.match(orb, /providers\.launchAndroid/);
  assert.match(orb, /providers\.launchOwn/);
});

test('o raio do ícone: halo na cor do próprio app e o mesmo arredondamento do NextVR', async () => {
  const orb = await read('web/src/orb-menu.js');
  // "o raio do next" (print do usuário): o halo de cada app sai da cor dele, não de um azul genérico.
  assert.match(orb, /export function glowOf\(bg\)/);
  assert.match(orb, /const glow = entry\.android \? 'rgba\(34,197,94,\.5\)' : glowOf\(bg\)/);
  assert.match(orb, /--orb-glow:\$\{esc\(glow\)\}/);
  const html = await read('web/index.html');
  assert.match(html, /0 0 26px 4px var\(--orb-glow,rgba\(150,190,255,\.30\)\)/);
  // O quadrado do ícone usa 34 px de raio, como os ícones grandes do NextVR na loja e na biblioteca.
  assert.match(html, /\.orb-app::before\{content:'';position:absolute;left:0;top:0;width:150px;height:150px;border-radius:34px/);
});

test('os apps ficam soltos no ambiente: a superfície é invisível e nenhum controle sobra', async () => {
  const orb = await read('web/src/orb-menu.js');
  // É uma JANELA de verdade, com o mesmo vidro invisível do Spatial App.
  assert.match(orb, /export const ORB_WIN = 'orb-apps'/);
  assert.match(orb, /const win = open\(\{\n      id: ORB_WIN,/);
  assert.match(orb, /chrome: false/);
  assert.match(orb, /resizable: false/);
  // Os controles são REMOVIDOS do documento, não escondidos: o display do CSS vencia o `hidden`.
  assert.match(orb, /for \(const part of \[win\.handle, win\.resizeHandle, win\.brightnessBar, win\.cinemaBar,\n      win\.predefinedSlotsBar, win\.grabArc, win\.el\?\.querySelector\?\.\('\.win-bar'\)\]\) \{\n      try \{ part\?\.remove\(\); \} catch \{\}\n    \}/);
  assert.doesNotMatch(orb, /win\.brightnessBar\.hidden = true/, 'a barra de brilho não é mais só escondida');
  assert.doesNotMatch(orb, /document\.getElementById\('hud'\)/, 'não é mais camada da HUD');
  const html = await read('web/index.html');
  assert.match(html, /\.win-shell\[data-window-id="orb-apps"\],\n  \.win-shell\[data-window-id="orb-apps"\] \.win\{\n    background:transparent!important;border:none!important/);
  assert.match(html, /\.win-shell\[data-window-id="orb-apps"\] \.win-handle,/);
  // E o mundo só escurece — no headset quem escurece é o GL nativo.
  assert.match(orb, /export const ORB_DIM = 0\.55/);
  assert.match(orb, /setSceneDim\(value \? ORB_DIM : 0\)/);
  assert.match(orb, /window\.NativeXR\?\.setSceneDim\?\.\(value \? ORB_DIM : 0\)/);
  assert.match(orb, /export function closeOrbMenu\(\) \{[\s\S]{0,240}\} finally \{[\s\S]{0,120}dim\(false\)/);
  const core = await read('web/src/core.js');
  assert.match(core, /if \(native\) \{[\s\S]{0,200}if \(sceneDimEl\) \{ sceneDimEl\.remove\(\); sceneDimEl = null; \}/);
});

test('a dock NÃO some: ela fica por baixo, e as mãos continuam por cima para escolher', async () => {
  const html = await read('web/index.html');
  // Nenhuma regra esconde a dock (nem as janelas) com o anel aberto: ela pode escurecer junto com o
  // ambiente ("dock tem que ficar escura com o ambiente", print do usuário), mas nunca sai de cena.
  assert.doesNotMatch(html, /html\[data-orb-open="1"\] \.win-shell/);
  assert.doesNotMatch(html, /html\[data-orb-open="1"\] \.dock\{[^}]*display:\s*none/);
  assert.doesNotMatch(html, /html\[data-orb-open="1"\] \.dock\{[^}]*visibility:\s*hidden/);
  assert.match(html, /html\[data-orb-open="1"\] \.dock\{[\s\S]{0,420}filter:brightness\(\.62\)/,
    'a dock escurece junto com o ambiente, em vez de sumir');
  // O anel se marca como aberto (é o que o CSS e os testes usam), mas nada desaparece por isso.
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /document\.documentElement\.dataset\.orbOpen = '1'/);
  assert.match(orb, /else delete document\.documentElement\.dataset\.orbOpen/);
  // A janela nasce na frente da dock: é ordenada no empilhamento das janelas (a mais próxima, no topo).
  assert.match(orb, /updateWindowsDepthLayering\(win\)/);
  // As mãos são o ÚLTIMO passe do render nativo: por cima de janelas e da dock.
  const renderer = await read('nextvr-android/src/main/java/com/nextvr/app/SpatialRenderer.java');
  const draw = renderer.slice(renderer.indexOf('sorted.sort('));
  assert.ok(draw.indexOf('handRenderer.draw(') > draw.indexOf('drawPanel(p)'),
    'o passe das mãos vem depois dos painéis (janelas e dock)');
});

test('a dock ganha o botão 3-4-3 à esquerda da biblioteca, sem mexer no resto da interface', async () => {
  const apps = await read('web/src/apps.js');
  // O ícone: dez bolinhas (3 em cima, 4 no meio, 3 embaixo), desenhado no próprio app.
  assert.match(apps, /const ORB_DOTS_SVG = `<svg viewBox="0 0 24 24"/);
  const dotsStart = apps.indexOf('const ORB_DOTS_SVG');
  const dots = apps.slice(dotsStart, apps.indexOf('</svg>`', dotsStart));
  // As dez coordenadas do desenho: três em cima, quatro no meio, três embaixo.
  const ys = [...dots.matchAll(/\[(\d+(?:\.\d+)?), (\d+(?:\.\d+)?)\]/g)].map(m => Number(m[2]));
  assert.equal(ys.length, 10, 'dez bolinhas');
  assert.deepEqual([...new Set(ys)], [5.4, 12, 18.6], 'três fileiras');
  assert.deepEqual([ys.filter(y => y === 5.4).length, ys.filter(y => y === 12).length, ys.filter(y => y === 18.6).length],
    [3, 4, 3], '3 em cima, 4 no meio, 3 embaixo');
  // O botão fica imediatamente À ESQUERDA do botão da biblioteca.
  const libraryLine = "    { id: 'library', win: 'library', launcher: true, label: t('apps'), run: openAppsDot,";
  const orbLine = "    { id: 'orb-apps', win: 'orb-apps', label: t('apps'), svg: DK.orbDots, run: openAppsDot },";
  assert.ok(apps.includes(orbLine) && apps.includes(libraryLine));
  assert.ok(apps.indexOf(orbLine) < apps.indexOf(libraryLine), 'o anel vem antes da biblioteca na dock');
  // A bolinha da biblioteca também abre o anel (é "aonde era a antiga biblioteca de apps") e, tocada
  // de novo, fecha: sem ✕ no meio dos apps, o próprio botão é o liga/desliga.
  assert.match(apps, /export function openAppsDot\(\) \{\n  if \(S\.orbRing === 0\) return libraryApp\(\);\n  if \(orbOpen\(\)\) \{ closeOrbMenu\(\); return null; \}\n  return openOrbMenu\(\);/);
  // Segurar a bolinha abre a biblioteca completa, que é onde ficam os apps fora das dez casas.
  assert.match(apps, /hold: \(\) => \{ if \(orbOpen\(\)\) closeOrbMenu\(\); libraryApp\(\); \}/);
  assert.match(apps, /window\.nextvrOpenLibrary = libraryApp;/);
});

test('a rolagem passa as páginas de dez ícones, com animação', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /export function turnPage\(step = 1\)/);
  // A roda é ouvida no documento (a página recebe a roda no navegador e no headset).
  assert.match(orb, /document\.addEventListener\('wheel', onOrbWheel, \{ passive: false \}\)/);
  assert.match(orb, /function onOrbWheel\(event\) \{\n  if \(!orbOpen\(\)\) return;/);
  assert.match(orb, /Math\.abs\(dx\) > 48\) turnPage/);
  // Sem setas nem bolinhas de página: com a barra fora, a página vira pela roda e pelo arrasto.
  assert.doesNotMatch(orb, /data-orb-page=/);
  assert.doesNotMatch(orb, /class="orb-dots"/);
  // A animação é do CSS e entra na grade NOVA.
  const html = await read('web/index.html');
  assert.match(html, /@keyframes orbInNext\{/);
  assert.match(html, /@keyframes orbInPrev\{/);
  assert.match(html, /\.orb-grid\.is-next \.orb-app\{animation-name:orbInNext\}/);
  assert.match(orb, /grid\.classList\.add\('is-' \+ direction\)/);
});

test('saiu a barra de baixo: nada de TODOS, giroscópio, perfil, hora, bateria, linha branca', async () => {
  const orb = await read('web/src/orb-menu.js');
  const html = await read('web/index.html');
  for (const gone of ['data-orb-bar', 'data-orb-all', 'data-orb-gyro', 'data-orb-me', 'data-orb-clock',
    'data-orb-close', 'orb-home-line', 'orb-chip', 'orb-bar']) {
    assert.ok(!orb.includes(gone), `o anel não tem mais ${gone}`);
  }
  assert.doesNotMatch(html, /\.orb-bar\{/, 'a barra de status saiu do CSS');
  assert.doesNotMatch(html, /\.orb-home-line\{/, 'a linha branca de baixo saiu do CSS');
  assert.doesNotMatch(html, /\.orb-chip\{/, 'o chip do giroscópio saiu do CSS');
  assert.doesNotMatch(orb, /paintClock|startClock|stopClock|gyroNow|toggleGyro/, 'nada de relógio nem de chip');
  // O miolo do anel é SÓ a grade de ícones.
  const markup = orb.slice(orb.indexOf('export function orbMarkup'), orb.indexOf('function launchTarget'));
  assert.match(markup, /<div class="orb-grid" data-orb-grid="1">/);
  assert.doesNotMatch(markup, /orb-bar|orb-close|orb-home-line|orb-clock|orb-me/);
});

test('o anel de 10 apps pode ser desativado e a bolinha volta a abrir a biblioteca', async () => {
  const apps = await read('web/src/apps.js');
  const core = await read('web/src/core.js');
  assert.match(core, /orbRing: 1,/);
  assert.match(apps, /control\('appGrid', 'Anel de 10 Apps \(bolinha da Dock\)', S\.orbRing !== 0 \? 'Ativado' : 'Desativado · biblioteca de volta'/);
  assert.match(apps, /S\.orbRing = enabled \? 1 : 0;/);
  assert.match(apps, /if \(!enabled\) \{ try \{ closeOrbMenu\(\); \} catch \{\} \}/);
});

test('o toque da pinça chega no ícone (sem camada da HUD e sem barra no caminho)', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /host\.onclick = event => \{/);
  assert.match(orb, /closest\('\[data-orb-app\]'\)/);
  // Se o hit-test devolve o contêiner, vale o ponto tocado.
  assert.match(orb, /function insideRect\(el, x, y\)/);
  assert.match(orb, /const byPoint = !tile/);
  assert.match(orb, /if \(hit !== 'app'\) return;/);
  // A janela da HUD do anel não existe mais no caminho de toque.
  const windows = await read('web/src/windows.js');
  assert.doesNotMatch(windows, /getElementById\('orb-layer'\)/);
  assert.match(windows, /\[data-orb-app\],/);
  assert.doesNotMatch(windows, /\[data-orb-all\]|\[data-orb-close\]|\[data-orb-page\]|\[data-orb-gyro\]/);
});

test('a pinça tem raio, inclusive com o Toque Direto ligado ("o Next tá sem pinça com raio")', async () => {
  const renderer = await read('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt');
  // Com o Toque Direto ligado (o padrão) o ponteiro livre é desligado — e o renderer SAÍA do desenho
  // antes de qualquer feixe. A pinça de verdade passa a desenhar o raio azul no mesmo ramo.
  const gate = renderer.slice(renderer.indexOf('if(!showPointer || mrGameMode)'), renderer.indexOf('// Beam positions are predicted'));
  assert.match(gate, /target\?\.optBoolean\("pinchRay"\)==true/);
  assert.match(gate, /drawBeam\(b,true,true,false,position,fade\)/);
  // Só uma detecção viva pinta o raio: uma pose predita nunca inventa uma pinça.
  assert.match(gate, /if\(live && !hand\.predicted &&/);
  // O raio nasce na palma e o destino vem de aimPoint (o alvo real, ou a direção da mão a 1,2 m).
  assert.match(renderer, /private fun aimPoint\(hand: PhoneXrHands\.Hand, target: JSONObject\?, view: FloatArray, e: FloatArray\): Boolean/);

  const windows = await read('web/src/windows.js');
  // O alvo do raio existe mesmo quando o alvo é da HUD (o anel, a dock, o menu da mão): esses não
  // são objetos 3D, então sem isto o feixe ficava sem destino.
  assert.match(windows, /const end=hit \? hit\.point\.toArray\(\)\s*\n\s*: pinchRay \? r\.ray\.at\(1\.2, new THREE\.Vector3\(\)\)\.toArray\(\) : null;/);
  assert.match(windows, /\.\.\.\(pinchRay\?\{pinchRay:true\}:\{\}\)/);
  // Durante a pinça a mão continua visível para o raio, mesmo com o alvo já consumido pelo toque.
  assert.match(windows, /if\(!h\.pinching\)\{targets\.push\(\{id:h\.id,hidden:true,blueOutline\}\);continue;\}/);
});
