// O anel de 10 apps da bolinha da dock, o escurecimento do ambiente e o raio preso à mão.
//
// Pedido do usuário, palavra por palavra: "bota aquela opção de 10 apps que aparece ... o ambiente
// escurece mas ainda dá pra vê e os apps aparecem gigantes na tela, mas esse fundo que aparece
// configurações, só bugou, não é pra botar esse fundo de configurações ... não muda a bolinha, só o
// raio, e deixa ele mais preciso, e que quase não saia da mão ... tira o bug do Hand tracking se
// multiplicar do nada".
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(path, 'utf8');

test('the dock dot opens a ring of ten apps, three over four over three', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /export const ORB_LAYOUT = Object\.freeze\(\[/);
  const layout = orb.slice(orb.indexOf('ORB_LAYOUT'), orb.indexOf(']);', orb.indexOf('ORB_LAYOUT')));
  const slots = [...layout.matchAll(/\{ x: *(\d+), y: *(\d+) \}/g)].map(m => ({ x: +m[1], y: +m[2] }));
  assert.equal(slots.length, 10, 'the ring has exactly ten places');
  // 3 em cima, 4 no meio, 3 embaixo (as três faixas de y do círculo).
  const rows = slots.reduce((acc, s) => {
    const row = s.y < 33 ? 0 : s.y < 67 ? 1 : 2;
    acc[row] = (acc[row] || 0) + 1;
    return acc;
  }, []);
  assert.deepEqual(rows, [3, 4, 3]);
  // Both sides on the ring: the app's own apps AND the phone's Android apps.
  assert.match(orb, /ORB_ANDROID_SLOTS = 4/);
  assert.match(orb, /providers\.launchAndroid/);
  assert.match(orb, /providers\.launchOwn/);
  // Um ouvinte só, delegado no host: o toque da mão chega no elemento mais fundo (o nome, o ícone)
  // e precisa subir até o anel — sem depender de um handler por tile.
  assert.match(orb, /host\.onclick = event => \{/);
  assert.match(orb, /closest\('\[data-orb-app\]'\)/);
  // Se o hit-test devolve o contêiner do anel em vez do tile/"TODOS", vale o ponto tocado: sem isso
  // um toque no meio do anel não abria nada.
  assert.match(orb, /function insideRect\(el, x, y\)/);
  assert.match(orb, /byPointAll = true/);
  assert.match(orb, /byPointTile = \[\.\.\.host\.querySelectorAll\('\[data-orb-app\]'\)\]\.find/);
  assert.match(orb, /if \(all \|\| byPointAll\) \{ launchTarget\(\(\) => providers\.launchOwn\('library'\)\); return; \}/);
});

test('the ring has no settings-style backdrop behind it and the world only dims', async () => {
  const orb = await read('web/src/orb-menu.js');
  // Nenhum painel/folha de fundo: a janela do anel é transparente e ninguém pinta um "fundo".
  assert.match(orb, /chrome: false/);
  assert.doesNotMatch(orb, /background:\s*['"]#/);
  // O escurecimento é do AMBIENTE (véu próprio), nunca de uma janela/tela por trás do anel.
  assert.match(orb, /setSceneDim\(value \? ORB_DIM : 0\)/);
  assert.match(orb, /export const ORB_DIM = 0\.7/);
  // Fechar o anel por qualquer caminho desfaz o escurecimento.
  assert.match(orb, /on\('wins', \(\) => \{ if \(!orbOpen\(\)\) dim\(false\); \}\)/);

  const core = await read('web/src/core.js');
  assert.match(core, /export function setSceneDim\(amount\)/);
  // O véu fica entre o ambiente e as janelas e nunca chega a preto.
  assert.match(core, /Math\.min\(\.82, /);

  const html = await read('web/index.html');
  assert.match(html, /#scene-dim\{position:fixed;inset:0;z-index:1;pointer-events:none;background:#05070c;opacity:0/);
  assert.match(html, /\.win-shell\[data-window-id="orb-menu"\][\s\S]{0,240}background:transparent!important/);

  const windows = await read('web/src/windows.js');
  assert.match(windows, /w\.id === 'orb-menu'/);
  assert.match(windows, /w\.resizeScale = hasOpenAppWins \? 1\.44 : 1\.50/);
});

test('abrir o anel empurra as outras janelas para trás do véu', async () => {
  const orb = await read('web/src/orb-menu.js');
  // O <html> ganha o selo enquanto o anel está aberto (é o que o CSS usa) e perde ao fechar.
  assert.match(orb, /document\.documentElement\.dataset\.orbOpen = '1'/);
  assert.match(orb, /else delete document\.documentElement\.dataset\.orbOpen/);

  const html = await read('web/index.html');
  // Com o anel aberto, as OUTRAS janelas saem de cena de vez (nada de caixa preta atrás dos apps) e
  // não recebem toque; o anel nunca é afetado.
  assert.match(html, /html\[data-orb-open="1"\] \.win-shell:not\(\[data-window-id="orb-menu"\]\)\{[^}]*visibility:hidden!important/);
  assert.match(html, /html\[data-orb-open="1"\] \.win-shell:not\(\[data-window-id="orb-menu"\]\)\{[^}]*pointer-events:none!important/);
  // Os tiles se destacam no escuro: aro claro + halo colorido.
  assert.match(html, /\.orb-app\{[^}]*box-shadow:0 26px 56px rgba\(0,0,0,\.72\),0 0 0 2px rgba\(255,255,255,\.58\),0 0 42px 4px/);

  // O anel é onboarding e ficava com z-index 0 (atrás de tudo): agora sobe para a camada de cima.
  const windows = await read('web/src/windows.js');
  assert.match(windows, /export function raiseOrbLayer\(\)/);
  assert.match(windows, /orb\.shell\.style\.zIndex = '90'/);
  assert.match(windows, /export function updateWindowsDepthLayering\(activeWin = null\) \{\n  const orb = raiseOrbLayer\(\);/);
  // Perto dos olhos: um dedo acima da linha dos olhos, na frente do resto, para o anel preencher a vista.
  assert.match(windows, /w\.target\.set\(0, EYE \+ \.06, -0\.98\)/);

  // Sem capa, o tile usa a paleta forte do anel (o cinza quase preto sumia no ambiente escurecido).
  assert.match(orb, /export const ORB_PALETTE = Object\.freeze\(\[/);
  assert.match(orb, /entry\.bg \|\| ORB_PALETTE\[index % ORB_PALETTE\.length\]/);

  // A dock vira só perfil + relógio: a pílula escura sai e os apps/tools somem (e voltam ao fechar).
  assert.match(html, /html\[data-orb-open="1"\] \.dock\{\n    background:none!important/);
  assert.match(html, /html\[data-orb-open="1"\] \.dock \.dock-app,\n  html\[data-orb-open="1"\] \.dock \.dock-tool,[\s\S]{0,220}display:none!important/);
  // Fechar o anel desfaz o véu e o selo MESMO se a janela falhar ao fechar (try/finally).
  assert.match(orb, /export function closeOrbMenu\(\) \{[\s\S]{0,160}const win = winObj\(\);\n  try \{\n    if \(win\) close\(win\);\n  \} finally \{/);
});

test('the ring window fits the native atlas, so no column is cropped in the APK', async () => {
  const orb = await read('web/src/orb-menu.js');
  const atlas = await read('web/src/atlas.js');
  // 1040 x 660 é o recorte máximo que o atlas entrega para uma janela.
  assert.match(orb, /export const ORB_W = 1040/);
  assert.match(orb, /export const ORB_H = 660/);
  assert.match(atlas, /const maxW = \(kind === 'window' \|\| kind === 'slot'\) \? 1040/);
  assert.match(atlas, /const maxH = \(kind === 'dock' \? 400 : kind === 'keyboard' \? 936 : 980\) - PAD \* 2/);
});

test('the dock keeps its dot grid and only what it opens changed', async () => {
  const apps = await read('web/src/apps.js');
  // A aparência da bolinha continua a mesma grade de pontinhos do buildDock.
  const windows = await read('web/src/windows.js');
  assert.match(windows, /'<span class="dk-grid">' \+ '<i><\/i>'\.repeat\(9\) \+ '<\/span>'/);
  // A bolinha (item launcher da dock) abre o anel; com o anel desativado nas Configurações ela
  // volta a abrir a biblioteca, como era antes.
  assert.match(apps, /\{ id: 'library', win: 'library', launcher: true, label: t\('apps'\), run: openAppsDot \}/);
  assert.match(apps, /export function openAppsDot\(\) \{\n  if \(S\.orbRing === 0\) return libraryApp\(\);\n  return openOrbMenu\(\);/);
  assert.match(apps, /import \{ openOrbMenu, closeOrbMenu, installOrbMenu \} from '\.\/orb-menu\.js'/);
  assert.match(apps, /installOrbMenu\(\{[\s\S]*?refreshAndroid: \(\) => loadAndroidLibrary\(\)/);
});

test('the ray comes out of the hand and stays with it', async () => {
  const hands = await read('nextvr-android/src/main/java/com/nextvr/app/hands/PhoneXrHands.kt');
  // Sem amplificação ancorada no ombro (+25%) e sem o viés fixo de +25% no eixo Y: era isso que
  // fazia o raio "sair da mão" e mirar alto.
  assert.doesNotMatch(hands, /shoulder/);
  assert.doesNotMatch(hands, /\(by\+1f\)\*\.25f/);
  assert.match(hands, /state\.x\.filter\(bx,stamp\)/);
  assert.match(hands, /state\.y\.filter\(by,stamp\)/);

  const renderer = await read('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt');
  // O feixe nasce no meio da palma (landmark 9), não num ponto do plano da tela.
  assert.match(renderer, /originX=\(hand\.points\[9\]-\.5f\)\*2f\*sx/);
  assert.match(renderer, /b\[0\]=if\(direct\)0f else originX/);
});

test('a hand can never be drawn twice, and the ghost of a mislabelled hand is dropped', async () => {
  const hands = await read('nextvr-android/src/main/java/com/nextvr/app/hands/PhoneXrHands.kt');
  assert.match(hands, /private const val GHOST_RADIUS = \.09f/);
  assert.match(hands, /if \(duplicate\) \{ entry\.value\.consecutiveMisses = 2; continue \}/);
  // Duas mãos no mesmo resultado nunca recebem o mesmo id (uma delas é movida para o lado livre).
  assert.match(hands, /if \(!detected\.add\(left\)\) \{ left = !left; detected\.add\(left\) \}/);
});

test('o anel de 10 apps pode ser desativado e a bolinha volta a abrir a biblioteca', async () => {
  const apps = await read('web/src/apps.js');
  const core = await read('web/src/core.js');
  // Padrão: anel ligado (a configuração existe e nasce com 1).
  assert.match(core, /orbRing: 1,/);
  // Interruptor nas Configurações (Central de controle), com o texto dizendo o que volta.
  assert.match(apps, /control\('appGrid', 'Anel de 10 Apps \(bolinha da Dock\)', S\.orbRing !== 0 \? 'Ativado' : 'Desativado · biblioteca de volta'/);
  assert.match(apps, /S\.orbRing = enabled \? 1 : 0;/);
  assert.match(apps, /save\(S\);/);
  // Desligar com o anel aberto fecha o anel na hora (o véu e o selo saem junto).
  assert.match(apps, /if \(!enabled\) \{ try \{ closeOrbMenu\(\); \} catch \{\} \}/);
  // O mesmo interruptor existe nas Configurações (dentro do jogo), na seção da Dock.
  assert.match(apps, /ytRow\(icon\('appGrid'\), 'Anel de 10 Apps \(bolinha da Dock\)',\n    'Desligado: a bolinha abre a biblioteca de sempre',\n    ytToggle\('orbRing'/);
  // E a escolha é lembrada: é uma configuração salva, não um estado de sessão.
  assert.match(core, /orbRing/);
});
