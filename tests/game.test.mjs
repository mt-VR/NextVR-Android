import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (...parts) => readFile(new URL('../' + parts.join('/'), import.meta.url), 'utf8');

test('o mundo 3D é renderizado nativamente — nada de WebXR', async () => {
  const [game, activity, spatial, renderer, bundle] = await Promise.all([
    read('web/src/game.js'), read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java'),
    read('nextvr-android/src/main/java/com/nextvr/app/SpatialRenderer.java'),
    read('nextvr-android/src/main/java/com/nextvr/app/GameSceneRenderer.kt'),
    read('nextvr-android/src/main/assets/ui/app.js'),
  ]);
  // A casca manda geometria e transforms; quem rasteriza é o passe GLES2 do Cardboard.
  assert.match(game, /window\.NativeXR\.gameMesh\(kind, b64bytes\(g\.attributes\.position\.array\)/);
  assert.match(game, /window\.NativeXR\.gameFrame\(json\)/);
  assert.match(activity, /@JavascriptInterface public void gameMesh\(String kind,String positions,String normals,String indices\)/);
  assert.match(activity, /@JavascriptInterface public void gameFrame\(String json\)/);
  assert.match(activity, /target\.game\.offerMesh\(/, 'a cena volta para um renderer recriado');
  assert.match(spatial, /final GameSceneRenderer game = new GameSceneRenderer\(\)/);
  assert.match(spatial, /if\(renderPass==0\) game\.draw\(view,projection\)/,
    'os objetos entram entre o passe opaco e o vidro das janelas');
  assert.match(renderer, /GLES20\.glDrawElements\(GLES20\.GL_TRIANGLES/);
  assert.match(renderer, /GLES20\.glEnable\(GLES20\.GL_DEPTH_TEST\)/, 'profundidade real contra as janelas');
  assert.match(renderer, /Base64\.decode\(/, 'a geometria chega em base64 do three.js');
  // WebXR não é o caminho: a fonte do jogo não toca em nenhum símbolo de sessão XR.
  assert.ok(!/navigator\.xr|requestSession|XRWebGLLayer|isSessionSupported/.test(game),
    'game.js não abre sessão WebXR');
  // O bundle carrega o three inteiro, que traz o WebXRManager próprio (a string XRWebGLLayer já
  // estava lá antes do mundo 3D). O que importa é que nada abre sessão: nenhum navigator.xr.
  assert.ok(!/navigator\.xr|requestSession|isSessionSupported/.test(bundle),
    'o APK não abre sessão WebXR');
});

test('entrar no jogo esconde tudo preservando o estado; sair devolve exatamente igual', async () => {
  const [game, windows] = await Promise.all([read('web/src/game.js'), read('web/src/windows.js')]);
  // O retrato é tirado ANTES de esconder, e guarda o que estava visível, a dock, o teclado e o foco.
  assert.match(game, /snapshot = \{\s*windows: wins\.map\(w => \(\{ win: w, hidden: w\.hidden \}\)\),\s*dockHidden: dockHiddenNow\(\),\s*keyboard: keyboardShown\(\),\s*focus: focusedWin\(\)\?\.id \|\| null,/);
  assert.match(game, /for \(const w of wins\) w\.setHidden\(true\);/);
  assert.match(game, /setKeyboardHidden\(true\);/);
  assert.match(game, /setDockHidden\(true\);/);
  // Esconder é só visibilidade: posição, tamanho, curvatura e conteúdo não são tocados.
  const setHidden = windows.match(/setHidden\(hidden\) \{[\s\S]*?\n  \}/)[0];
  assert.match(setHidden, /this\.shell\.hidden = value;/);
  assert.match(setHidden, /this\.obj\.visible = !value;/);
  assert.match(setHidden, /this\.hit\.visible = !value;/);
  for (const forbidden of ['target', 'resizeScale', 'setCurve', 'position.copy', 'innerHTML', 'curve =']) {
    assert.ok(!setHidden.includes(forbidden), `setHidden não mexe em ${forbidden}`);
  }
  // Janela escondida sai do arco, do hit-test e da conta de apps — mas nunca é descartada.
  assert.match(windows, /wins\.filter\(w => w\.pinned && !w\.onboarding && !w\.hidden\)/);
  assert.match(windows, /wins\.filter\(w => !w\.onboarding && !w\.hidden\)/,
    'o arco cheio não descarta uma janela escondida pelo jogo');
  assert.match(windows, /for \(const w of wins\) \{ if\(w\.hidden\)continue;/);
  assert.match(windows, /wins\.filter\(w=>!w\.hidden\)\.flatMap\(w=>\[w\.resizeHit,w\.grab,w\.hit\]\)/);
  // A saída devolve cada janela ao estado anterior, mais dock, teclado e foco.
  assert.match(game, /for \(const \{ win, hidden \} of snap\.windows\) if \(wins\.includes\(win\)\) win\.setHidden\(hidden\);/);
  assert.match(game, /setDockHidden\(snap\.dockHidden\);/);
  assert.match(game, /if \(snap\.keyboard\) setKeyboardHidden\(false\);/);
  assert.match(game, /const back = wins\.find\(w => w\.id === snap\.focus\);\s*if \(back\) focusWindow\(back\);/);
  assert.match(game, /for \(const w of \[\.\.\.wins\]\) if \(!known\.has\(w\) && !w\.onboarding\) close\(w\);/,
    'o que foi aberto durante o jogo não fica por cima do workspace restaurado');
  assert.match(game, /document\.documentElement\.classList\.remove\('game-on'\)/);
});

test('o menu do jogo é plano, de duas mãos e com as três ações do SteamVR', async () => {
  const [game, chord, html] = await Promise.all([
    read('web/src/game.js'), read('web/src/two-hand-chord.js'), read('web/index.html'),
  ]);
  assert.match(game, /const chord = new TwoHandMenuChord\(\);/);
  assert.match(chord, /armMs: 2000/, 'segurar ~2 s');
  assert.match(game, /export function twoHandsPinching\(pinched\) \{[\s\S]*?pinched\.some\(h => h\.left === true\)[\s\S]*?pinched\.some\(h => h\.left === false\)/);
  assert.match(game, /const state = chord\.update\(now, \{ left: both, right: both \}\);/);
  assert.match(game, /if \(state\.opened\) \{[\s\S]*?if \(active\) openMenu\(\);[\s\S]*?else toggleQuickMenu\(\);[\s\S]*?\}/);
  // Fora do jogo o acorde abre o menu rápido (Ocultar UI / Ambientes / Recentrar / Teclado).
  assert.match(game, /import[\s\S]*toggleQuickMenu[\s\S]*from '\.\/windows\.js'/);
  assert.match(game, /on\('phonehands', packet => \{ updateHands\(packet, performance\.now\(\)\); \}\);/);
  // O anel continua mostrando o progresso do acorde e some quando fecha, mesmo fora do jogo.
  assert.match(game, /if \(state\.closed && !menuOpen\(\) && !quickMenuOpen\(\)\) paintRing\(0\);/);
  // Plano: o menu nasce com curvatura zero e a casca nunca curva essa janela.
  const menu = game.match(/function openMenu\(\) \{[\s\S]*?\n\}/)[0];
  assert.match(menu, /win\?\.setCurve\(0\);/, 'o menu é plano, nunca curvo');
  assert.match(menu, /id: GAME_MENU_ID, title: t\('game\.menu'\)[\s\S]*?w: 560, h: 470,\s*free: true/);
  assert.match(menu, /data-act="continue"/);
  assert.match(menu, /data-act="settings"/);
  assert.match(menu, /data-act="exit"/);
  assert.match(html, /\.game-menu\{[\s\S]*?\.gm-btn\{/);
  assert.match(html, /#gameRing\{/, 'o anel de espera do acorde existe no HUD');
});

test('o mundo é jogável pela pinça: colocar, mover, girar, escalar, editar e remover', async () => {
  const game = await read('web/src/game.js');
  for (const fn of ['addObject', 'removeObject', 'setKind', 'setColor', 'setScale', 'setRotation',
    'startGame', 'endGame', 'persist']) {
    assert.match(game, new RegExp(`export function ${fn}\\(`), `${fn} faz parte da API do mundo`);
  }
  assert.match(game, /export const KINDS = \['box', 'sphere', 'cylinder', 'cone', 'plate'\]/);
  // A pinça é a única entrada espacial: o caminho de ponteiro só existe no preview desktop.
  const preview = game.match(/if \(!native\) \{\s*let preview = null;[\s\S]*?\n\}/)[0];
  assert.match(preview, /addEventListener\('pointerdown'/);
  assert.match(game, /on\('phonehands', packet => \{ updateHands\(packet, performance\.now\(\)\); \}\)/);
  assert.match(game, /if \(windowUnder\(aim\.x, aim\.y\)\) \{ grips\.delete\(h\.id\); continue; \}/,
    'uma janela na frente é dona do gesto');
  assert.match(game, /g\.mode === 'rotate'/);
  assert.match(game, /g\.mode === 'scale'/);
  assert.match(game, /function twoHandTransform\(a, b, o\)/, 'duas mãos no objeto: gira e escala');
  assert.match(game, /tool === 'place'/, 'colocar objeto onde o raio encontra o chão');
  // O raio da mão vive no mundo; a posição dos objetos vive no contentRoot (que o recenter gira).
  assert.match(game, /const toLocal = point => contentRoot\.worldToLocal\(point\.clone\(\)\);/);
  assert.match(game, /o\.proxy\.getWorldPosition\(new THREE\.Vector3\(\)\)/);
  assert.match(game, /const grab = hit \? toLocal\(hit\) : o\.position\.clone\(\);/);
  assert.match(game, /o\.position\.copy\(toLocal\(hit\)\.add\(g\.offset\)\);/);
  assert.match(game, /const at = toLocal\(world\);/, 'o objeto colocado também entra no espaço do mundo');
  assert.match(game, /localStorage\.setItem\(KEY\(gameId\)/, 'a cena fica salva no aparelho');
  // Sem rota de touchscreen no APK: a ponte continua só de mão.
  assert.ok(!/NativeXR\.touch\(|setOnTouchListener/.test(game));
});

test('janelas nascem onde há espaço e podem ficar coladas quando o usuário escolhe', async () => {
  const [windows, spawn] = await Promise.all([read('web/src/windows.js'), read('web/src/spawn.js')]);
  assert.match(windows, /import \{ boxFromMesh, boxOfWindow, chooseSpawn, resolveSlot \} from '\.\/spawn\.js';/);
  assert.match(windows, /const spot = resolveSlot\(\{[\s\S]*?occupied: occupiedBoxes\(w\)/,
    'o slot do arco evita o que o usuário colocou na frente');
  assert.match(windows, /function placeFree\(w, at = null\) \{[\s\S]*?chooseSpawn\(\{/);
  assert.match(windows, /function occupiedBoxes\(except = null\) \{[\s\S]*?boxOfWindow\(w\)[\s\S]*?boxFromMesh\(dockHit\)[\s\S]*?boxFromMesh\(kbHit\)/,
    'dock e teclado também ocupam lugar');
  // Nenhuma separação mínima forçada: a resolução só age quando há sobreposição real.
  assert.match(spawn, /if \(base\.overlap <= 0\) \{\s*return \{ x: desired\.x, y: desired\.y, z: desired\.z, score: base\.score, moved: false, overlap: 0 \};/);
  assert.match(spawn, /export const DESIRED_GAP = \.03;/, 'a folga desejada é um respiro, não um muro');
  assert.match(spawn, /sem Math\.random|determinístico/);
});

test('os textos do mundo 3D existem nos três idiomas', async () => {
  const core = await read('web/src/core.js');
  const tables = core.split(/\n  (pt|en|es): \{/).slice(1);
  const keys = ['game.tools', 'game.place', 'game.edit', 'game.duplicate', 'game.remove',
    'game.reset', 'game.exit', 'game.continue', 'game.settings', 'game.menu', 'game.floor',
    'tool.move', 'tool.rotate', 'tool.scale', 'kind.box', 'kind.sphere', 'kind.cylinder',
    'kind.cone', 'kind.plate'];
  const bodies = [...core.matchAll(/\n  (pt|en|es): \{([\s\S]*?)\n  \},/g)];
  assert.equal(bodies.length, 3, 'três tabelas de idioma');
  for (const [, lang, body] of bodies) {
    for (const key of keys) assert.ok(body.includes(`'${key}':`), `${lang} tem ${key}`);
  }
  assert.ok(tables.length === 6, 'as tabelas continuam pt/en/es');
});
