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
  assert.match(orb, /if \(all \|\| byPointAll\) \{ act\('all'\); return; \}/);
  assert.match(orb, /if \(hit === 'all'\) \{ launchTarget\(\(\) => providers\.launchOwn\('library'\)\); return; \}/);
});

test('o anel não tem fundo/vidro atrás e o mundo só escurece', async () => {
  const orb = await read('web/src/orb-menu.js');
  // Não existe janela: nada de `open(...)`, de chrome de janela ou de painel pintado atrás dos apps.
  assert.doesNotMatch(orb, /from '\.\/windows\.js'/g.test(orb) ? /chrome: false/ : /$^/);
  assert.doesNotMatch(orb, /chrome: false/);
  assert.doesNotMatch(orb, /background:\s*['"]#/);
  // A camada nasce na HUD (#hud), que é o que o nativo desenha por cima e sem vidro.
  assert.match(orb, /document\.getElementById\('hud'\)/);
  assert.match(orb, /layer\.className = 'orb-layer'/);
  // O escurecimento vai para a WebView E para o GL nativo (é o GL que desenha o mundo no headset).
  assert.match(orb, /export const ORB_DIM = 0\.7/);
  assert.match(orb, /setSceneDim\(value \? ORB_DIM : 0\)/);
  assert.match(orb, /window\.NativeXR\?\.setSceneDim\?\.\(value \? ORB_DIM : 0\)/);
  // Fechar o anel por qualquer caminho desfaz o escurecimento (mesmo se a remoção falhar).
  assert.match(orb, /export function closeOrbMenu\(\) \{[\s\S]{0,220}\} finally \{[\s\S]{0,120}dim\(false\)/);

  const core = await read('web/src/core.js');
  assert.match(core, /export function setSceneDim\(amount\)/);
  assert.match(core, /Math\.min\(\.82, /);
  // No aparelho NÃO existe véu do DOM: o retângulo inteiro da WebView é capturado como HUD e
  // desenhado por cima de tudo, então um div escuro virava a caixa preta vista no headset.
  assert.match(core, /if \(native\) \{[\s\S]{0,240}sceneDimEl\.remove\(\); sceneDimEl = null;/);
  assert.match(core, /window\.NativeXR\?\.setSceneDim\?\.\(a\)/);

  // E o nativo escurece o mundo de verdade: câmera e panorama multiplicados, apps intocados.
  const renderer = await read('nextvr-android/src/main/java/com/nextvr/app/SpatialRenderer.java');
  assert.match(renderer, /public volatile float sceneDim = 0f/);
  assert.match(renderer, /uniform float uSceneDim/);
  assert.match(renderer, /glUniform1f\(camUSceneDim,sceneDim\)/);
  assert.match(renderer, /glUniform1f\(envUSceneDim,sceneDim\)/);
  const activity = await read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
  assert.match(activity, /public void setSceneDim\(float amount\)/);

  const html = await read('web/index.html');
  assert.match(html, /#scene-dim\{position:fixed;inset:0;z-index:1;pointer-events:none;background:#05070c;opacity:0/);
  // Ninguém pinta o painel da janela antiga: o anel não é janela.
  assert.doesNotMatch(html, /\.win-shell\[data-window-id="orb-menu"\]/);
});

test('o anel manda na tela: dock some, janelas saem de cena, e a camada fica por cima', async () => {
  const orb = await read('web/src/orb-menu.js');
  // O <html> ganha o selo enquanto o anel está aberto (é o que o CSS usa) e perde ao fechar.
  assert.match(orb, /document\.documentElement\.dataset\.orbOpen = '1'/);
  assert.match(orb, /else delete document\.documentElement\.dataset\.orbOpen/);

  const html = await read('web/index.html');
  // A dock DESAPARECE com o anel aberto (o rodapé do anel mostra perfil e hora no lugar dela).
  assert.match(html, /html\[data-orb-open="1"\] \.dock\{display:none!important\}/);
  // E nenhuma janela fica como caixa preta na frente/atrás dos ícones.
  assert.match(html, /html\[data-orb-open="1"\] \.win-shell\{opacity:0!important;visibility:hidden!important/);
  // A camada do anel é a última coisa desenhada na HUD.
  assert.match(html, /\.orb-layer\{position:fixed;left:50%;top:50%;transform:translate\(-50%,-50%\);/);
  // Os tiles se destacam no escuro: aro claro + halo colorido.
  assert.match(html, /\.orb-app\{[^}]*box-shadow:0 18px 40px rgba\(0,0,0,\.7\),0 0 0 2px rgba\(255,255,255,\.55\),0 0 30px 3px/);

  // Sem capa, o tile usa a paleta forte do anel (o cinza quase preto sumia no ambiente escurecido).
  assert.match(orb, /export const ORB_PALETTE = Object\.freeze\(\[/);
  assert.match(orb, /entry\.bg \|\| ORB_PALETTE\[index % ORB_PALETTE\.length\]/);

  // O toque da mão chega no anel: a HUD é uma superfície real e o hit-test procura as peças dele.
  const windows = await read('web/src/windows.js');
  assert.match(windows, /\[data-orb-app\],\[data-orb-all\],\[data-orb-close\],\[data-orb-page\]/);
  assert.match(windows, /const orb = document\.getElementById\('orb-layer'\)/);
});

test('a rolagem passa as páginas de dez ícones, com animação', async () => {
  const orb = await read('web/src/orb-menu.js');
  // Dez por página ("só aparece 10 ícones") e mais páginas quando há mais apps.
  assert.match(orb, /export const ORB_PAGE = 10/);
  assert.match(orb, /export function orbPages\(entries = orbEntries\(\)\)/);
  assert.match(orb, /export function turnPage\(step = 1\)/);
  // A roda é ouvida no documento (a camada é pointer-events:none, então ela não recebe a roda).
  assert.match(orb, /document\.addEventListener\('wheel', onOrbWheel, \{ passive: false \}\)/);
  assert.match(orb, /function onOrbWheel\(event\) \{\n  if \(!orbOpen\(\)\) return;/);
  assert.match(orb, /Math\.abs\(dx\) > 48\) turnPage/);
  assert.match(orb, /data-orb-page="1"/);
  // A animação de rolagem é do CSS (o quadro de entrada de cada ícone).
  const html = await read('web/index.html');
  assert.match(html, /@keyframes orbInNext\{/);
  assert.match(html, /@keyframes orbInPrev\{/);
  assert.match(html, /\.orb-ring\.is-next \.orb-app\{animation-name:orbInNext\}/);
  // E a classe entra na página NOVA (senão a animação nasce no elemento que já foi trocado).
  assert.match(orb, /ring\.classList\.add\('is-' \+ direction\)/);
});

test('o rodapé do anel mostra o perfil e a hora do jogador', async () => {
  const orb = await read('web/src/orb-menu.js');
  assert.match(orb, /import \{ getDeviceStatus \} from '\.\/windows\.js'/);
  assert.match(orb, /data-orb-me="1"/);
  assert.match(orb, /data-orb-clock="1"/);
  assert.match(orb, /setInterval\(paintClock, 1000\)/);
  assert.match(orb, /on\('device-status', \(\) => \{ if \(orbOpen\(\)\) paintClock\(\); \}\)/);
  // Perfil de verdade (nome, avatar e selo de verificado), vindo do apps.js.
  const apps = await read('web/src/apps.js');
  assert.match(apps, /profile: \(\) => \(\{/);
  assert.match(apps, /verified: isVerifiedProfileName\(S\.profileName\)/);
});

test('dez ícones cabem na tela: 3+4+3 e nada é cortado por um recorte de janela', async () => {
  const orb = await read('web/src/orb-menu.js');
  const html = await read('web/index.html');
  // O anel não passa pelo atlas de texturas (não é janela), então não existe recorte que corte coluna.
  assert.match(orb, /export const ORB_W = 1040/);
  assert.match(html, /\.orb-app\{[^}]*width:clamp\(104px,15\.2%,196px\)/);
  assert.match(html, /\.orb-page--prev\{left:2px\}/);
  assert.match(html, /\.orb-page--next\{right:2px\}/);
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
