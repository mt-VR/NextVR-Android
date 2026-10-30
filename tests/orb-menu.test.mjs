// O anel de 10 apps — agora uma JANELINHA FLUTUANTE INVISÍVEL, do jeito da UI dos apps espaciais.
//
// Pedido do usuário, palavra por palavra: "Tá a mesma merda, faz ele tipo aquele ui dos apps
// spaciais, mas só quando clicar aonde era a 'antiga biblioteca de apps' faz esses apps em uma
// janelinha, porém Deixa a janelinha flutuante invisível se barrinha branca pra mover, e tira aquele
// troço da dock sumir, já sei, faz melhor, adiciona uma opção na dock que aparece 3 bolinhas em cima,
// 4 no meio, e 3 embaixo, do lado esquerdo da biblioteca de apps, sem afetar na interface gráfica, e
// quando clicarmos, a dock fica por baixo de tudo, porém o hand tracking fica por cima de tudo pra
// escolher um app, e faz IGUAL dessa screenshot, só os apps e ícones não, os apps e ícones são o do
// jogo+android".
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
  assert.match(html, /\.orb-row\{display:flex;align-items:flex-start;justify-content:center;gap:26px/);
  assert.match(html, /\.orb-label\{position:relative;max-width:118px;font-size:13\.5px/);
  // Os dois lados: apps do NextVR E apps do Android instalado.
  assert.match(orb, /ORB_ANDROID_SLOTS = 4/);
  assert.match(orb, /providers\.launchAndroid/);
  assert.match(orb, /providers\.launchOwn/);
});

test('o anel é a janelinha invisível dos apps espaciais (sem moldura, sem barrinha branca)', async () => {
  const orb = await read('web/src/orb-menu.js');
  // É uma JANELA de verdade, com o mesmo vidro invisível do Spatial App.
  assert.match(orb, /export const ORB_WIN = 'orb-apps'/);
  assert.match(orb, /const win = open\(\{\n      id: ORB_WIN,/);
  assert.match(orb, /chrome: false/);
  assert.match(orb, /resizable: false/);
  assert.match(orb, /win\.handle\.hidden = true;/);
  assert.match(orb, /win\.resizeHandle\.hidden = true;/);
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
  // Nenhuma regra esconde a dock (nem as janelas) com o anel aberto.
  assert.doesNotMatch(html, /html\[data-orb-open="1"\] \.dock/);
  assert.doesNotMatch(html, /html\[data-orb-open="1"\] \.win-shell/);
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
  const libraryLine = "    { id: 'library', win: 'library', launcher: true, label: t('apps'), run: openAppsDot },";
  const orbLine = "    { id: 'orb-apps', win: 'orb-apps', label: t('apps'), svg: DK.orbDots, run: openAppsDot },";
  assert.ok(apps.includes(orbLine) && apps.includes(libraryLine));
  assert.ok(apps.indexOf(orbLine) < apps.indexOf(libraryLine), 'o anel vem antes da biblioteca na dock');
  // A bolinha da biblioteca também abre o anel (é "aonde era a antiga biblioteca de apps").
  assert.match(apps, /export function openAppsDot\(\) \{\n  if \(S\.orbRing === 0\) return libraryApp\(\);\n  return openOrbMenu\(\);/);
});

test('a rolagem passa as páginas de dez ícones, com animação', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /export function turnPage\(step = 1\)/);
  // A roda é ouvida no documento (a página recebe a roda no navegador e no headset).
  assert.match(orb, /document\.addEventListener\('wheel', onOrbWheel, \{ passive: false \}\)/);
  assert.match(orb, /function onOrbWheel\(event\) \{\n  if \(!orbOpen\(\)\) return;/);
  assert.match(orb, /Math\.abs\(dx\) > 48\) turnPage/);
  assert.match(orb, /data-orb-page="-1"/);
  assert.match(orb, /data-orb-page="1"/);
  // A animação é do CSS e entra na grade NOVA.
  const html = await read('web/index.html');
  assert.match(html, /@keyframes orbInNext\{/);
  assert.match(html, /@keyframes orbInPrev\{/);
  assert.match(html, /\.orb-grid\.is-next \.orb-app\{animation-name:orbInNext\}/);
  assert.match(orb, /grid\.classList\.add\('is-' \+ direction\)/);
});

test('a barra de status é a da referência: TODOS, giroscópio, perfil, hora, bateria e linha branca', async () => {
  const orb = await read('web/src/orb-menu.js');
  const html = await read('web/index.html');
  const bar = orb.slice(orb.indexOf('data-orb-bar'), orb.indexOf('${clockHtml()}', orb.indexOf('data-orb-bar')));
  for (const marker of ['data-orb-all', '${gyroChipHtml()}', '${meHtml()}']) {
    assert.ok(bar.includes(marker), `a barra tem ${marker}`);
  }
  assert.ok(bar.indexOf('data-orb-all') < bar.indexOf('${gyroChipHtml()}'), 'TODOS vem antes do giroscópio');
  assert.ok(bar.indexOf('${gyroChipHtml()}') < bar.indexOf('${meHtml()}'), 'o giroscópio fica ao lado do perfil/hora');
  // O ponto e o texto, como na screenshot, e a linha branca fina embaixo.
  assert.match(orb, /<span class="orb-dot" aria-hidden="true"><\/span>/);
  assert.match(orb, /data-orb-count/);
  assert.match(orb, /class="orb-home-line"/);
  assert.match(html, /\.orb-home-line\{position:absolute;left:50%;bottom:-2px/);
  assert.match(html, /\.orb-bar\{flex:none;width:100%;display:flex;align-items:center;gap:10px;pointer-events:auto;/);
  // Relógio de verdade, 24 h, do aparelho.
  assert.match(orb, /setInterval\(paintClock, 1000\)/);
  assert.match(orb, /on\('device-status', \(\) => \{ if \(orbOpen\(\)\) paintClock\(\); \}\)/);
  const apps = await read('web/src/apps.js');
  assert.match(apps, /profile: \(\) => \(\{/);
  assert.match(apps, /verified: isVerifiedProfileName\(S\.profileName\)/);
});

test('o giroscópio é um botão de verdade: mostra o estado e liga/desliga a orientação', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /data-orb-gyro="1"/);
  assert.match(orb, /export function gyroNow\(\)/);
  assert.match(orb, /function toggleGyro\(\)/);
  assert.match(orb, /S\.gyro = S\.gyro === 0 \? 1 : 0;/);
  assert.match(orb, /if \(target\?\.closest\('\[data-orb-gyro\]'\)\) \{ toggleGyro\(\); return; \}/);
  assert.match(orb, /on\('gyro', \(\) => \{ if \(orbOpen\(\)\) paintOrb\(\); \}\)/);
  const core = await read('web/src/core.js');
  assert.match(core, /gyro: 1,/);
  assert.match(core, /else if \(gyroLive\(\) && S\.gyro !== 0\) \{/);
  assert.match(core, /if \(S\.gyro === 0\) return;\n    poseMatrix\.fromArray\(values\)\.invert\(\);/);
});

test('o anel de 10 apps pode ser desativado e a bolinha volta a abrir a biblioteca', async () => {
  const apps = await read('web/src/apps.js');
  const core = await read('web/src/core.js');
  assert.match(core, /orbRing: 1,/);
  assert.match(apps, /control\('appGrid', 'Anel de 10 Apps \(bolinha da Dock\)', S\.orbRing !== 0 \? 'Ativado' : 'Desativado · biblioteca de volta'/);
  assert.match(apps, /S\.orbRing = enabled \? 1 : 0;/);
  assert.match(apps, /if \(!enabled\) \{ try \{ closeOrbMenu\(\); \} catch \{\} \}/);
});

test('o toque da pinça chega no ícone e no TODOS (janela normal, sem camada da HUD)', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /host\.onclick = event => \{/);
  assert.match(orb, /closest\('\[data-orb-app\]'\)/);
  // Se o hit-test devolve o contêiner, vale o ponto tocado.
  assert.match(orb, /function insideRect\(el, x, y\)/);
  assert.match(orb, /byPointAll = true/);
  assert.match(orb, /if \(all \|\| byPointAll\) \{ act\('all'\); return; \}/);
  assert.match(orb, /if \(hit === 'all'\) \{ launchTarget\(\(\) => providers\.launchOwn\('library'\)\); return; \}/);
  // A janela da HUD do anel não existe mais no caminho de toque.
  const windows = await read('web/src/windows.js');
  assert.doesNotMatch(windows, /getElementById\('orb-layer'\)/);
  assert.match(windows, /\[data-orb-all\],\[data-orb-close\],\[data-orb-page\],\[data-orb-gyro\]/);
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

test('o giroscópio é um botão de verdade: mostra o estado e liga/desliga a orientação', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /data-orb-gyro="1"/);
  assert.match(orb, /export function gyroNow\(\)/);
  assert.match(orb, /function toggleGyro\(\)/);
  assert.match(orb, /S\.gyro = S\.gyro === 0 \? 1 : 0;/);
  assert.match(orb, /if \(target\?\.closest\('\[data-orb-gyro\]'\)\) \{ toggleGyro\(\); return; \}/);
  // O chip acompanha o sensor quando ele fica vivo depois do anel aberto.
  assert.match(orb, /on\('gyro', \(\) => \{ if \(orbOpen\(\)\) paintOrb\(\); \}\)/);

  const core = await read('web/src/core.js');
  // Padrão ligado, e o laço respeita a escolha (desligado, olhar é arrasto).
  assert.match(core, /gyro: 1,/);
  assert.match(core, /else if \(gyroLive\(\) && S\.gyro !== 0\) \{/);
  // No headset a pose vem do Cardboard (nextvrPose): desligado, ela é ignorada e o mundo fica parado.
  assert.match(core, /if \(S\.gyro === 0\) return;\n    poseMatrix\.fromArray\(values\)\.invert\(\);/);

  const windows = await read('web/src/windows.js');
  // A pinça alcança o chip (a barra é HUD, não objeto 3D).
  assert.match(windows, /\[data-orb-gyro\]/);
});
