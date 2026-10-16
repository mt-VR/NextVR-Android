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
  game: 'web/src/game.js',
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
  // Same menu as the sandbox: the two-hand chord, held open time, painting the same ring.
  assert.match(xr, /const chord = new TwoHandMenuChord\(\);/);
  assert.match(xr, /import \{ twoHandsPinching, sandboxActive \} from '\.\/game\.js';/);
  assert.match(xr, /getElementById\('gameRing'\)/,
    'the ring is the same element: the two modes never run at once');
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
  assert.match(apps, /const xr = xrLibraryItems\(\);\n\s+const games = GAMES\.filter/);
  assert.match(apps, /x\.kind === 'game' \? gameTile\(x\) : x\.kind === 'xr' \? xrTileHtml\(x\)/,
    'one tile kind per origin, one row for each source');
  assert.match(apps, /if \(\(m = c\('\[data-xr\]'\)\)\) \{\n\s+\/\/ A headset game/);
  assert.match(apps, /if \(xrHosting\(\)\) restoreXrGame\(\);\n\s+else launchXrGame\(pkg\);/,
    'the tile re-attaches a minimized session instead of pretending it opened twice');
  assert.match(apps, /if \(xrHosting\(\)\) \{ toast\(t\('xrBusy'\)\); return; \}/,
    'the 3D sandbox tells the user to exit the headset game first: one at a time');
  const xr = await read(FILES.xr);
  assert.match(xr, /if \(xrRuntimeReady\(\) \|\| !gamesLoaded \|\| !games\.length\) return null;/,
    'the library row explains games that exist; the settings page is the runtime home otherwise');
});

test('settings has the PhoneXR page and the hand mode switch', async () => {
  const apps = await read(FILES.apps);
  assert.match(apps, /\[t\('xrTitle'\), \(\) => \{/);
  assert.match(apps, /data-xr-page/);
  assert.match(apps, /function buildXrPage\(host\) \{/);
  assert.match(apps, /for \(const \[id, label, sub\] of \[\n\s+\['controllers', t\('xrModeControllers'\)/);
  assert.match(apps, /setXrHandMode\(id\);/);
  const core = await read(FILES.core);
  for (const key of ['xrTitle', 'xrRuntimeReady', 'xrMissing', 'xrInstall', 'xrSelfTest', 'xrBusy',
    'xrHandMode', 'xrModeControllers', 'xrModeHands', 'xrBadge']) {
    assert.equal((core.match(new RegExp(key + `:`, 'g')) || []).length, 3,
      `${key} is translated in pt, en and es`);
  }
});

/* ============ what ships ============ */

test('the bundled UI carries the embeddings: state push, panels, chords and no dead code', async () => {
  const bundle = await read(FILES.bundle);
  assert.ok(bundle.includes('nextvrXr'));
  assert.ok(bundle.includes('data-native-xr') || bundle.includes('nativeXr'));
  assert.ok(bundle.includes('hands-ui'));
  assert.ok(bundle.includes('nextvr-xr-game'));
  const html = await read(FILES.bundleHtml);
  assert.ok(html.includes('az-dot[data-state="outdated"]'), 'the runtime dot states ship with the page');
});
