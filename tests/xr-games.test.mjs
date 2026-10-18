import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (...parts) => readFile(new URL('../' + parts.join('/'), import.meta.url), 'utf8');

const FILES = {
  xr: 'web/src/xr-games.js',
  atlas: 'web/src/atlas.js',
  windows: 'web/src/windows.js',
  apps: 'web/src/apps.js',
  core: 'web/src/core.js',
  chord: 'web/src/two-hand-chord.js',
  activity: 'nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java',
  spatial: 'nextvr-android/src/main/java/com/nextvr/app/SpatialRenderer.java',
  controller: 'nextvr-android/src/main/java/com/nextvr/app/xr/XrGameController.java',
  bridge: 'nextvr-android/src/main/java/com/nextvr/app/xr/XrHandBridge.kt',
  library: 'nextvr-android/src/main/java/com/nextvr/app/xr/XrGameLibrary.java',
  bundle: 'nextvr-android/src/main/assets/ui/app.js',
  bundleHtml: 'nextvr-android/src/main/assets/ui/index.html',
};

/* ============ the shell (web/src/xr-games.js) ============ */

test('a headset game is a window in the world, driven through the runtime, plus our menus', async () => {
  const xr = await read(FILES.xr);
  assert.match(xr, /const GAME_ID = 'nextvr-xr-game';/);
  assert.match(xr, /export function installXrGames\(\)/);
  assert.match(xr, /window\.nextvrXr = applyState;/,
    'the native side pushes the session state here (the same shape the Android apps use)');
  assert.match(xr, /window\.nextvrXrLibrary = applyLibrary;/);
  assert.match(xr, /window\.NativeXR\?\.xrCommand\?\.\(JSON\.stringify\(payload\)\)/,
    'everything the shell asks goes through the one command channel');
  assert.match(xr, /cmd: 'open'/);
  assert.match(xr, /cmd: 'close'/);
  assert.match(xr, /cmd: 'runtime'/);
  assert.match(xr, /cmd: 'library'/);
  // The game's window carries the surface id and the canvas can fit: the picture must not be
  // stretched, and the touch layer must find nothing to click into.
  assert.match(xr, /surface\.dataset\.nativeXr = game\.package;\n  const canvas = state\.canvas \|\| \{ w: 1920, h: 1080 \};\n  surface\.dataset\.aspect = String\(\(canvas\.w \/ canvas\.h\)/);
  // The workspace hides with its state preserved, exactly like the 3D sandbox, and restores in
  // reverse: windows opened during the mode leave with the mode.
  assert.match(xr, /windows: wins\.map\(w => \(\{ win: w, hidden: w\.hidden \}\)\)/);
  assert.match(xr, /classList\.add\('game-on', 'xr-on'\)/);
  assert.match(xr, /for \(const w of \[\.\.\.wins\]\) if \(!known\.has\(w\) && !w\.onboarding\) close\(w\);/,
    'windows opened during a hosted game exit with it');
});

test('pinch ownership: over our windows nothing presses into the game, on the game nothing clicks', async () => {
  const xr = await read(FILES.xr);
  assert.match(xr, /cmd: 'hands-ui', blocked \}/,
    'the shell tells the bridge whose pinch it is — on edge, not per frame');
  assert.match(xr, /const hit = active \? windowHitAt\(cursor\.x, cursor\.y\) : null;\n\s+const blocked = !!hit && hit\.win\.id !== GAME_ID && !hit\.win\.onboarding;/,
    'the game window itself is the trigger, not UI');
  const chord = await read('web/src/two-hand-chord.js');
  assert.ok(chord.includes('export class TwoHandMenuChord'));
  // The two-hand chord, held open time, painting the same ring. The pinch helper that feeds it
  // lives beside the chord now (it used to live in the removed demo-game module).
  assert.match(xr, /const chord = new TwoHandMenuChord\(\);/);
  assert.match(xr, /import \{ twoHandsPinching \} from '\.\/two-hand-chord\.js';/);
  assert.match(chord, /export function twoHandsPinching\(pinched\) \{/);
  assert.match(xr, /getElementById\('gameRing'\)/,
    'the ring is the shared game-mode element (hosted games own it now)');
});

test('the game window input never becomes a tap in some webview', async () => {
  const windows = await read(FILES.windows);
  assert.match(windows, /const xr = el\?\.closest\('\[data-native-xr\]'\);\n\s+if \(xr\) \{ nativePress = null; return; \}/,
    'a pinch on a hosted game is the runtime trigger (the bridge owns the gesture), so the shell sends nothing');
  assert.match(windows, /export const windowHitAt = hitAt;/
    , 'the XR module needs which window the cursor is on, not just whether one exists');
});

/* ============ one stereo frame: atlas emits the halves, the compositor picks per eye ============ */

test('atlas splits the hosted canvas into the left and right halves of one panel', async () => {
  const atlas = await read(FILES.atlas);
  assert.match(atlas, /for \(const g of e\.querySelectorAll\('\[data-native-xr\]'\)\)/);
  assert.match(atlas, /const id = 'xr:' \+ g\.dataset\.nativeXr;/,
    'the panel points at the same texture slot the session created');
  assert.match(atlas, /uv: \[fit\.u0, fit\.v0, fit\.uw \/ 2, fit\.vh\],\n\s+uvR: \[fit\.u0 \+ fit\.uw \/ 2, fit\.v0, fit\.uw \/ 2, fit\.vh\] \}/,
    'uv is the left view, uvR the right one');
});

test('the compositor samples the left half in the left eye and the right half in the right eye', async () => {
  const spatial = await read(FILES.spatial);
  assert.match(spatial, /final float\[\] uvR = new float\[4\];/);
  assert.match(spatial, /System\.arraycopy\(p\.uv, 0, p\.uvR, 0, 4\);\n\s+if\(p\.browser\.startsWith\("xr:"\)/,
    'every other surface samples the same rectangle in both eyes');
  assert.match(spatial, /uniform vec4 uRectR; uniform float uEye; .*vec4 rect=mix\(uRect,uRectR,uEye\)/);
  assert.match(spatial, /eyeUniform=viewport\[0\]==0\?0f:1f;/,
    'the viewport is the only per-eye signal the draw loop gives, and it is enough');
  assert.match(spatial, /GLES20\.glUniform4fv\(uRectR,1,panel\.uvR,0\); GLES20\.glUniform1f\(uEye,eyeUniform\);/);
});

/* ============ native side: the session, the feed and the pause ============ */

test('the controller publishes the canvas and answers the hands-ui edge', async () => {
  const controller = await read(FILES.controller);
  assert.match(controller, /root\.put\("canvas", size\);\n\s+root\.put\("game", gameJson\(\)\);/,
    'the shell sizes the window from the canvas the game is given');
  assert.match(controller, /case "hands-ui": hands\.uiBlocked\(command\.optBoolean\("blocked"\)\); break;/,
    'the shell reported a pinch over one of its windows: no buttons in the game for it');
  assert.match(controller, /public void onActivityPaused\(\) \{\n\s+if \(!hosting\(\)\) return;\n\s+hands\.stop\(\);\n\s+minimize\(\);/,
    'pause detaches the picture and stops feeding a game the last frame forever');
  assert.match(controller, /public void onActivityResumed\(\) \{\n\s+if \(!hosting\(\)\) return;\n\s+hands\.start\(handMode, true, true\);\n\s+restore\(\);/);
});

test('the activity hands the game the pause and the resume', async () => {
  const activity = await read(FILES.activity);
  assert.match(activity, /if\(xrGames!=null\) xrGames\.onActivityPaused\(\);/, 'pause detaches the game display with the sessions');
  assert.match(activity, /if\(xrGames!=null\) xrGames\.onActivityResumed\(\);/, 'resume re-attaches and restarts the feed');
});

test('the hand bridge gates presses with the shell flag and sides, not presence', async () => {
  const bridge = await read(FILES.bridge);
  assert.match(bridge, /fun uiBlocked\(blocked: Boolean\) \{\n\s+uiBlocked = blocked\n\s+\}/);
  assert.match(bridge, /val interactable = live && !uiBlocked/,
    'a predicted hand or a hand over the shell UI never presses anything');
  assert.match(bridge, /pinch = interactable && hand\.pinching,/,
    'a hand-native game fires its own click on this bit, so it follows the same gate');
  assert.match(bridge, /val left = hands\.firstOrNull \{ it\.left \}\?\.hand \?\: rest\(REST_X\)\n\s+val right = hands\.firstOrNull \{ !it\.left \}\?\.hand \?\: rest\(1f - REST_X\)/,
    'sides, not presence: the one present hand keeps its own controller');
  assert.match(bridge, /fun depth\(palmWidth: Float\): Float =\n\s+\(\(palmWidth - FAR_PALM\) \/ \(NEAR_PALM - FAR_PALM\)\)/,
    'a palm that fills the frame is a hand at the lens — near, not far');
});

/* ============ library wiring ============ */

test('headset games share the Applications menu, and the runtime rows only exist when needed', async () => {
  const apps = await read(FILES.apps);
  assert.match(apps, /import \{ installXrGames, xrLibraryItems, xrTileHtml, xrHosting, launchXrGame, phoneXrNotice,/);
  assert.match(apps, /installAndroidApps\(\);\ninstallXrGames\(\);/);
  assert.match(apps, /const xr = xrLibraryItems\(\);\n\s+const apps = LIB_APPS\.map/,
    'the Applications menu is XR games plus apps plus installed Android apps — that is the whole list');
  assert.match(apps, /x\.kind === 'xr' \? xrTileHtml\(x\)/,
    'one tile kind per origin, one row for each source');
  assert.match(apps, /if \(\(m = c\('\[data-xr\]'\)\)\) \{\n\s+\/\/ A headset game/);
  assert.match(apps, /if \(xrHosting\(\)\) restoreXrGame\(\);\n\s+else launchXrGame\(pkg\);/,
    'the tile re-attaches a minimized session instead of pretending it opened twice');
  const xr = await read(FILES.xr);
  assert.match(xr, /if \(xrRuntimeReady\(\) \|\| !gamesLoaded \|\| !games\.length\) return null;/,
    'the library row explains games that exist; the settings page is the runtime home otherwise');
});

test('the demo games are gone: PhoneXR is the games platform', async () => {
  const apps = await read(FILES.apps);
  // Minecraft VR, VRFS, Roblox and Brawl were fake demo tiles over a sandbox save; the crash the
  // user hit came from that sandbox path. None of it may silently come back as "content".
  for (const gone of ['const GAMES = [', "from './game.js'", 'startGame', 'gameTile', '[data-game]',
    'downloading', 'startDownload', 'removeGame']) {
    assert.ok(!apps.includes(gone), `apps.js dropped the demo-game piece: ${gone}`);
  }
  const xr = await read(FILES.xr);
  assert.ok(!xr.includes("from './game.js'"), 'the hosted-game module does not lean on the removed module');
  await assert.rejects(read('web/src/game.js'), { code: 'ENOENT' },
    'the 3D sandbox module is deleted, not just unrouted');
  assert.match(apps, /if \(libFilter === 'games'\) list = list\.filter\(x => x\.kind === 'xr'\);/,
    'the Games filter is the PhoneXR library itself');
  assert.match(apps, /libFilter === 'games' \? t\('libGamesEmpty'\)/,
    'the empty Games filter uses a localized explanation, not download instructions');
  // The store cannot sell what is gone: it points at the library, and games live in PhoneXR.
  assert.ok(!apps.includes("['games','Games']"), 'the store has no games tab anymore');
  assert.match(apps, /Jogos de headset \(PhoneXR\) aparecem embarcados na Biblioteca quando o runtime os encontra\./);
  // The two-hand menu survives, so only the four strings the XR menu uses remain translated.
  const core = await read(FILES.core);
  for (const key of ['game.menu', 'game.continue', 'game.settings', 'game.exit']) {
    assert.equal(core.split(`'${key}':`).length - 1, 3,
      `${key} is translated in pt, en and es (the XR game menu uses it)`);
  }
  for (const dead of ["'game.tools'", "'game.chord'", "'game.launching'", "'game.floor'",
    "'game.menuTitle'", "'game.hint'", "'xrBusy'"]) {
    assert.ok(!core.includes(dead), `core.js dropped the dead string: ${dead}`);
  }
  // The native sandbox pipeline ships nothing now: no mesh bridge, no scene renderer, no draw pass.
  const activity = await read(FILES.activity);
  for (const gone of ['gameMesh', 'gameFrame']) {
    assert.ok(!activity.includes(gone), `NextVrActivity dropped the sandbox bridge: ${gone}`);
  }
  const spatial = await read(FILES.spatial);
  assert.ok(!spatial.includes('GameSceneRenderer'), 'SpatialRenderer has no game pass');
  assert.match(spatial, /for\(renderPass=0;renderPass<2;renderPass\+\+\) \{\n\s+GLES20\.glDepthMask\(renderPass==0\);\n\s+for\(Panel p:sorted\) if\(!p\.overlay\) drawPanel\(p\);\n\s+\}/,
    'the two passes are exactly the opaque and the glass panels');
});

test('settings has the PhoneXR page and the hand mode switch', async () => {
  const apps = await read(FILES.apps);
  assert.match(apps, /\[t\('xrTitle'\), \(\) => \{/);
  assert.match(apps, /data-xr-page/);
  assert.match(apps, /function buildXrPage\(host\) \{/);
  assert.match(apps, /for \(const \[id, label, sub\] of \[\n\s+\['controllers', t\('xrModeControllers'\)/);
  assert.match(apps, /setXrHandMode\(id\);/);
  const core = await read(FILES.core);
  for (const key of ['xrTitle', 'xrRuntimeReady', 'xrMissing', 'xrInstall', 'xrSelfTest',
    'xrHandMode', 'xrModeControllers', 'xrModeHands', 'xrBadge']) {
    assert.equal((core.match(new RegExp(key + `:`, 'g')) || []).length, 3,
      `${key} is translated in pt, en and es`);
  }
});

/* ============ what ships ============ */

test('the build ships with the pinned PhoneXR runtime, so hosting is not fetch-and-pray', async () => {
  const gradle = await read('nextvr-android/build.gradle');
  assert.match(gradle, /task fetchPhoneXrRuntime \{/,
    'the runtime asset materializes itself in the build, the way extractNdk does for Cardboard');
  assert.match(gradle, /27c5bc469fb736fb0c00b7254a6dfc532fea7003/,
    'the upstream build is one pinned commit, not "latest"');
  assert.match(gradle, /56dd0f53317e1e70d240d4de39217f7553011a04b1d4cf22a637de6d1ebf7fa8/,
    'and it is verified down to the bytes: whatever the download claims, the hash decides');
  assert.match(gradle, /preBuild\.dependsOn\(extractNdk, fetchPhoneXrRuntime\)/);
  assert.match(gradle, /does not match the pinned build/,
    'a wrong download fails the build instead of silently becoming the runtime the user plays with');
  const runtime = await read('nextvr-android/src/main/java/com/nextvr/app/xr/XrRuntime.java');
  assert.match(runtime, /SYSTEM_RUNTIME_BROKER\.equals\(provider\.authority\)/,
    'the broker status counts the provider the runtime itself declares (v7+), not only the standalone package');
  const provenance = await read('docs/THIRD-PARTY.md');
  assert.ok(provenance.includes('27c5bc469fb736fb0c00b7254a6dfc532fea7003'),
    'the provenance file carries the pin and the missing-license caution, like every other binary');
});

test('the bundled UI carries the embeddings: state push, panels, chords and no dead code', async () => {
  const bundle = await read(FILES.bundle);
  assert.ok(bundle.includes('nextvrXr'));
  assert.ok(bundle.includes('data-native-xr') || bundle.includes('nativeXr'));
  assert.ok(bundle.includes('hands-ui'));
  assert.ok(bundle.includes('nextvr-xr-game'));
  for (const gone of ['gameMesh', 'gameFrame', 'startGame', 'MINECRAFT']) {
    assert.ok(!bundle.includes(gone), `the shipped bundle carries no demo-game remains: ${gone}`);
  }
  const html = await read(FILES.bundleHtml);
  assert.ok(html.includes('az-dot[data-state="outdated"]'), 'the runtime dot states ship with the page');
});
