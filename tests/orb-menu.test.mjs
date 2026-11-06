// O anel de 13 apps — agora os apps SOLTOS no ambiente, cada um no seu espaço.
//
// Pedido do usuário, palavra por palavra: "Não e pra ser uma janelinha flutuanteeeeeeeeeeeeeee, tira a
// barrinha abaixo dela, aonde aparece giroscopio ativo, o negócio de aumentar e diminuir brilho e a
// barrinha branca pra mover remove, e os apps tem que ter o próprio espaço, não em dentro de uma
// janelinha flutuante".
//
// Ou seja: nada de barra de status, nada de chip de giroscópio, nada de barra de brilho, nada de
// alça branca para mover, nada de ✕. Só os treze ícones no ar, sobre o mundo escurecido.
//
// E depois disso o desenho mudou de novo, palavra por palavra: "era 4 encima, 5 no meio e 4
// embaixo" — treze lugares, com mais ar entre eles.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(path, 'utf8');

test('a janelinha do anel mostra treze apps: quatro em cima, cinco no meio e quatro embaixo', async () => {
  const orb = await read('web/src/orb-menu.js');
  // As fileiras são a própria estrutura do desenho (4/5/4), não posições absolutas soltas.
  assert.match(orb, /export const ORB_ROWS = Object\.freeze\(\[/);
  const rows = orb.slice(orb.indexOf('ORB_ROWS = Object.freeze(['), orb.indexOf(']);', orb.indexOf('ORB_ROWS = Object.freeze([')));
  const sizes = [...rows.matchAll(/Object\.freeze\(\[([\d,\s]+)\]\)/g)].map(m => m[1].split(',').filter(Boolean).length);
  assert.deepEqual(sizes, [4, 5, 4]);
  assert.match(orb, /export const ORB_PAGE = 13/);
  // Cada ícone leva o NOME embaixo, como na screenshot.
  assert.match(orb, /<span class="orb-label">\$\{esc\(label\)\}<\/span>/);
  const html = await read('web/index.html');
  // "APPS MAIORES E MAIS SEPARADOS" (print do usuário): os ícones cresceram e as fileiras abriram.
  assert.match(html, /\.orb-row\{display:flex;align-items:flex-start;justify-content:center;gap:110px/);
  // "separa mais": a fileira de cinco ganha o mesmo respiro entre os ícones sem estourar a caixa.
  assert.match(html, /\.orb-row--5\{gap:62px\}/);
  assert.match(html, /\.orb-grid\{flex:none;width:100%;display:flex;flex-direction:column;\s*\n?\s*align-items:center;justify-content:center;gap:24px\}/);
  assert.match(html, /\.orb-app\{pointer-events:auto;position:relative;flex:none;width:150px/);
  assert.match(html, /\.orb-app::before\{content:'';position:absolute;left:0;top:0;width:150px;height:150px;border-radius:34px/);
  assert.match(html, /\.orb-label\{position:relative;max-width:158px;font-size:15px/);
  // Os dois lados: apps do NextVR E apps do Android instalado.
  assert.match(orb, /ORB_ANDROID_SLOTS = 5/);
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

test('a dock ganha o botão 4-5-4 à esquerda da biblioteca, sem mexer no resto da interface', async () => {
  const apps = await read('web/src/apps.js');
  // O ícone: treze bolinhas (4 em cima, 5 no meio, 4 embaixo), desenhado no próprio app — o mesmo
  // desenho do anel, para o botão da dock não mentir sobre o que ele abre.
  assert.match(apps, /const ORB_DOTS_SVG = `<svg viewBox="0 0 24 24"/);
  const dotsStart = apps.indexOf('const ORB_DOTS_SVG');
  const dots = apps.slice(dotsStart, apps.indexOf('</svg>`', dotsStart));
  // As treze coordenadas do desenho: quatro em cima, cinco no meio, quatro embaixo.
  const ys = [...dots.matchAll(/\[(\d+(?:\.\d+)?), (\d+(?:\.\d+)?)\]/g)].map(m => Number(m[2]));
  assert.equal(ys.length, 13, 'treze bolinhas');
  assert.deepEqual([...new Set(ys)], [5.4, 12, 18.6], 'três fileiras');
  assert.deepEqual([ys.filter(y => y === 5.4).length, ys.filter(y => y === 12).length, ys.filter(y => y === 18.6).length],
    [4, 5, 4], '4 em cima, 5 no meio, 4 embaixo');
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

test('as bolinhas de página: pequenas embaixo dos apps e a de agora branca', async () => {
  const orb = await read('web/src/orb-menu.js');
  const html = await read('web/index.html');
  // Uma bolinha por página, e a da página em que estamos recebe `on`.
  assert.match(orb, /class="orb-pages" data-orb-pages/);
  assert.ok(orb.includes('pages.map((_, i) => `<i')
    && orb.includes("i === page ? ' class=\"on\"' : ''"),
  'uma bolinha por página, e a de agora sai marcada');
  assert.ok(orb.includes('data-pages="${pages.length}"'), 'o anel publica quantas páginas tem');
  // Com uma página só, nada de bolinha (não há para onde rolar).
  assert.match(orb, /const dots = pages\.length > 1/);
  // Pequenas, redondas, e a ativa é branca.
  assert.match(html, /\.orb-pages\{position:absolute;left:50%;bottom:8px;transform:translateX\(-50%\)/);
  assert.match(html, /\.orb-pages i\{width:7px;height:7px;border-radius:50%;background:rgba\(255,255,255,\.34\)/);
  assert.match(html, /\.orb-pages i\.on\{background:#fff;transform:scale\(1\.16\)/);
  // Trocar de página repinta e a bolinha acompanha.
  assert.match(orb, /page = next;\n  paintOrb\(\);/);
});

test('os apps gigantes usam a logo de verdade de cada serviço (YouTube, Twitch, Netflix…)', async () => {
  const apps = await read('web/src/apps.js');
  const build = await read('web/build.mjs');
  // O mapa de marcas: fundo na cor do serviço e a logo centrada.
  assert.match(apps, /const ORB_BRAND = \{/);
  for (const [id, slug] of [['youtube','youtube'],['twitch','twitch'],['netflix','netflix'],['discord','discord'],
    ['prime','primevideo'],['whatsapp','whatsapp'],['instagram','instagram'],['x','x'],['facebook','facebook'],
    ['spotify','spotify']]) {
    assert.match(apps, new RegExp(`${id}:\\s*\\{ bg: [^}]*logo: 'orb-${slug}'`), `a marca ${id} aponta para orb-${slug}`);
  }
  // O build gera os SVGs na tinta certa pra cada quadrado.
  assert.match(build, /icons\/orb-\$\{slug\}\.svg/);
  for (const slug of ['youtube','netflix','primevideo','twitch','discord','whatsapp','instagram','x','facebook','spotify'])
    assert.ok(build.includes(`${slug}:'`), `o build gera orb-${slug}.svg`);
  // E cada arquivo existe de verdade no pacote (nada de imagem quebrada no headset).
  for (const slug of ['youtube','netflix','primevideo','twitch','discord','whatsapp','instagram','x','facebook','spotify']) {
    const svg = await read(`nextvr-android/src/main/assets/ui/icons/orb-${slug}.svg`);
    assert.ok(svg.startsWith('<svg') && svg.includes('<path'), `orb-${slug}.svg é um vetor de verdade`);
  }
  // O tile mostra a logo CENTRADA (não esticada na borda) quando o app tem marca.
  const orb = await read('web/src/orb-menu.js');
  assert.ok(orb.includes('entry.logo') && orb.includes('class="orb-mark"'), 'a logo da marca vai centrada no quadrado');
  const html = await read('web/index.html');
  assert.match(html, /\.orb-mark img\{width:76px;height:76px;object-fit:contain/);
});

test('com os apps gigantes abertos, nenhum app da dock abre (só os do anel)', async () => {
  const windows = await read('web/src/windows.js');
  // Um lugar só decide: a dock fica travada enquanto o anel estiver na frente.
  assert.match(windows, /export const giantAppsOpen = \(\) => wins\.some\(w => w\.id === 'orb-apps'\);/);
  assert.match(windows, /if \(giantAppsOpen\(\) && it\.id !== 'orb-apps' && it\.id !== 'library'\) \{\n        toast\(t\('giantAppsLocked'\)\);\n        return;\n      \}/);
  // Segurar a bolinha (que abriria a biblioteca completa) também não fura a trava.
  assert.match(windows, /if \(giantAppsOpen\(\)\) return;\s+\/\/ a dock não abre nada com os apps gigantes na frente/);
  // As duas bolinhas continuam respondendo: são elas que abrem e fecham o anel.
  assert.match(windows, /it\.id !== 'orb-apps' && it\.id !== 'library'/);
  // A mensagem existe nos três idiomas.
  const core = await read('web/src/core.js');
  assert.equal((core.match(/giantAppsLocked:/g) || []).length, 3, 'pt, en e es');
  // E os apps do anel abrem normalmente: o lançamento fecha o anel ANTES de abrir o app, então a
  // trava não pega o caminho do próprio anel.
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /function launchTarget\(invoke\) \{[\s\S]{0,220}closeOrbMenu\(\);/);
});

test('a rolagem passa as páginas de treze ícones, com animação', async () => {
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

test('o anel de 13 apps pode ser desativado e a bolinha volta a abrir a biblioteca', async () => {
  const apps = await read('web/src/apps.js');
  const core = await read('web/src/core.js');
  assert.match(core, /orbRing: 1,/);
  assert.match(apps, /control\('appGrid', 'Anel de 13 Apps \(bolinha da Dock\)', S\.orbRing !== 0 \? 'Ativado' : 'Desativado · biblioteca de volta'/);
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
  // O feixe vai até o alvo; sem alvo, até 3 m (antes morria a 1,2 m: um toco).
  assert.match(windows, /const RAY_FAR = 3;/);
  assert.match(windows, /const end=hit \? hit\.point\.toArray\(\)\s*\n\s*: pinchRay \? r\.ray\.at\(RAY_FAR, new THREE\.Vector3\(\)\)\.toArray\(\) : null;/);
  // E no render nativo o feixe cobre quase todo o caminho da mão até o alvo, não 42%.
  assert.match(windows, /RAY_FAR = 3/);
  const renderer0 = await read('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt');
  assert.match(renderer0, /private val RAY_SHOWN=1\.06f/);
  assert.match(renderer0, /val endT = 0\.94f \* RAY_SHOWN/);
  assert.match(windows, /\.\.\.\(pinchRay\?\{pinchRay:true\}:\{\}\)/);
  // Durante a pinça a mão continua visível para o raio, mesmo com o alvo já consumido pelo toque.
  assert.match(windows, /if\(!h\.pinching\)\{targets\.push\(\{id:h\.id,hidden:true,blueOutline,\.\.\.pokeFields\}\);continue;\}/);
});

test('o anel é exclusivo: as janelinhas fecham ao abrir e nenhuma outra abre enquanto ele está na tela', async () => {
  // "fechar todas as janelinhas flutuantes que estava aberta" + "nenhuma janelinha flutuante pode
  // abrir" + "só os apps dos 13 apps que flutua".
  const orb = await read('web/src/orb-menu.js');
  // Uma lista só do que NÃO é janelinha flutuante: o próprio anel, o menu de entrada e o seletor de
  // idioma que ele abre por cima. Todo o resto fecha.
  assert.match(orb, /const ORB_KEEP_OPEN = new Set\(\[ORB_WIN, 'entry-menu', 'language'\]\);/);
  assert.match(orb, /function closeFloatingWindows\(\) \{\n  for \(const w of \[\.\.\.wins\]\) \{\n    if \(ORB_KEEP_OPEN\.has\(w\.id\)\) continue;/);
  // A limpeza é a PRIMEIRA coisa que o `openOrbMenu` faz — antes de qualquer coisa aparecer.
  const openFn = orb.slice(orb.indexOf('export function openOrbMenu()'), orb.indexOf('export function closeOrbMenu()'));
  const firstInTry = openFn.slice(openFn.indexOf('try {') + 'try {'.length)
    .split('\n').map(line => line.trim())
    .filter(line => line && !line.startsWith('//'))[0];
  assert.equal(firstInTry, 'closeFloatingWindows();',
    'as janelinhas fecham antes de o anel aparecer (não depois)');
  // E o caminho de criação de janelas barra qualquer coisa que não seja o próprio anel.
  const windows = await read('web/src/windows.js');
  assert.match(windows, /if \(spec\.id !== 'orb-apps' && document\.documentElement\.dataset\.orbOpen === '1'\) \{\n    return null;\n  \}/);
  // Quem abre janela fora do anel não pode explodir com o `null` do bloqueio.
  assert.ok(windows.includes('if (spec.id !== \'orb-apps\' && document.documentElement.dataset.orbOpen === \'1\')'),
    'a trava fica no caminho único de criação de janelas');
  const apps = await read('web/src/apps.js');
  assert.match(apps, /if \(!win\) return null;\n  win\.handle\.hidden = true;/);
  const android = await read('web/src/android-apps.js');
  assert.match(android, /if \(!win\) return;\n  \/\/ The session is kept with the window/);
});

test('o raio sai da PINÇA, não de dentro da mão (era "colado no dedão")', async () => {
  const renderer = await read('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt');
  // `points` é achatado (63 floats = 21 landmarks × 3): `points[9]`/`points[10]` são o X e o Y do
  // landmark 3 — a ponta do polegar. Era por isso que o feixe nascia dentro da mão, no dedão.
  const code = renderer.split('\n').filter(line => !/^\s*(\*|\/\/|\/\*)/.test(line)).join('\n');
  assert.ok(!/points\[9\]/.test(code) && !/points\[10\]/.test(code),
    'nenhum ponto do feixe lê landmark por índice solto no array achatado (só na explicação do conserto)');
  // A origem é o ponto da pinça: meio entre a ponta do polegar (4 → 12/13) e a do indicador (8 → 24/25).
  assert.match(renderer, /private fun beamStart\(hand: PhoneXrHands\.Hand, sx: Float, sy: Float, out: FloatArray\)/);
  const helper = renderer.slice(renderer.indexOf('private fun beamStart('), renderer.indexOf('private fun aimPoint('));
  assert.match(helper, /val thumbX = p\[12\]; val thumbY = p\[13\]/);
  assert.match(helper, /val indexX = p\[24\]; val indexY = p\[25\]/);
  assert.match(helper, /nx = \(thumbX \+ indexX\) \* \.5f/);
  // Sem as duas pontas, cai para o meio da palma (landmark 9 → 27/28), nunca para um índice solto.
  assert.match(helper, /if \(!nx\.isFinite\(\) && p\.size >= 29\) \{ nx = p\[27\]; ny = p\[28\] \}/);
  // As duas pontas do caminho do feixe (ponteiro livre e pinça com o ponteiro desligado) usam a MESMA
  // origem, e o destino continua vindo do `aimPoint`.
  assert.ok(renderer.split('beamStart(hand,sx,sy,').length - 1 === 2, 'os dois caminhos do feixe usam beamStart');
  assert.match(renderer, /b\[0\]=if\(direct\)0f else origin\[0\];b\[1\]=if\(direct\)0f else origin\[1\];b\[2\]=if\(direct\)0f else -1f/);
  // O destino tem scratch próprio: a origem não pode sobrescrever o alvo (nem o contrário).
  assert.match(renderer, /private val beamEnd=FloatArray\(3\)/);
  assert.match(renderer, /private val beamOrigin=FloatArray\(2\)/);
});

test('o feixe começa FORA da mão, não em cima dos dedos', async () => {
  const renderer = await read('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt');
  // A mão e o feixe são desenhados no mesmo plano (z = −1): um feixe que nasce no ponto da pinça
  // fica por cima dos dedos, e é isso que o usuário lê como "o raio está passando dentro da mão".
  assert.match(renderer, /private fun beamPush\(b: FloatArray, hand: PhoneXrHands\.Hand\) \{/);
  const push = renderer.slice(renderer.indexOf('private fun beamPush('),
    renderer.indexOf('private fun handReach('));
  // Só a ORIGEM anda: o destino (b[3..5], o alvo real do acerto) fica exatamente onde estava.
  assert.match(push, /b\[0\] \+= dx \* push\n\s+b\[1\] \+= dy \* push\n\s+b\[2\] \+= dz \* push/);
  assert.ok(!/b\[3\] \+=|b\[4\] \+=|b\[5\] \+=/.test(push), 'o destino do feixe não se move');
  // A folga vem do tamanho da mão vista de frente (pulso → ponta do dedo médio), não de um número
  // fixo: a mão encostada no rosto ocupa mais tela e precisa de mais folga.
  assert.match(renderer, /private fun handReach\(hand: PhoneXrHands\.Hand\): Float \{/);
  assert.match(push, /\(handReach\(hand\) \* BEAM_CLEAR\)\.coerceIn\(BEAM_CLEAR_MIN, BEAM_CLEAR_MAX\)/);
  assert.match(push, /\.coerceAtMost\(length \* \.34f\)/, 'num alvo encostado o feixe ainda alcança');
  // E os dois caminhos do feixe empurram o começo, antes de desenhar.
  assert.ok(renderer.split('beamPush(b,hand)').length - 1 === 2, 'ponteiro livre e pinça empurram o feixe');
  assert.match(renderer, /beamPush\(b,hand\)\n\s+drawBeam\(b,true,true,false,position,fade\)/);
  assert.match(renderer, /if\(!direct\) beamPush\(b,hand\)\n\s+drawBeam\(b,down,blueRay,noBeam,position,hFade\)/);
});
