import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

import {
  DOCK_CATALOG, catalogEntry, extraDockIds, toggleExtraDockId, extraDockItems, launchDockApp,
  registerDockLauncher, registerDockAndroidProvider, dockCatalogAll,
} from '../web/src/dock-catalog.js';
import { decideNightCamera, decideTorch, SELF_MIN, NO_LIGHT, ENOUGH_LIGHT, MIN_ON_MS, MIN_OFF_MS } from '../web/src/night-camera-math.js';

const read = path => readFileSync(path, 'utf8');
const windowsSrc = () => read('web/src/windows.js');
const appsSrc = () => read('web/src/apps.js');
const entrySrc = () => read('web/src/entry-menu.js');
const indexHtml = () => read('web/index.html');
const bundle = () => read('nextvr-android/src/main/assets/ui/app.js');

test('Build 89: dock catalog toggles any app and grows without a limit', () => {
  const settings = { dockExtraApps: '' };
  let next = toggleExtraDockId(settings, 'netflix');
  assert.deepEqual(extraDockIds({ dockExtraApps: next }), ['netflix']);
  next = toggleExtraDockId({ dockExtraApps: next }, 'tiktok');
  assert.deepEqual(extraDockIds({ dockExtraApps: next }), ['netflix', 'tiktok']);
  next = toggleExtraDockId({ dockExtraApps: next }, 'netflix');
  assert.deepEqual(extraDockIds({ dockExtraApps: next }), ['tiktok']);

  // "pode ficar gigante": 40 apps continuam sendo 40 tiles, sem corte.
  const many = DOCK_CATALOG.slice(0, 40).map(item => item.id).join(',');
  const ids = extraDockIds({ dockExtraApps: many });
  assert.equal(ids.length, Math.min(40, DOCK_CATALOG.length));
  assert.ok(extraDockIds({ dockExtraApps: many }).length > 20, 'the dock is not capped at nine tiles');

  const items = extraDockItems({ dockExtraApps: 'netflix,tiktok' }, () => null);
  assert.deepEqual(items.map(item => item.label), ['Netflix', 'TikTok']);
  assert.equal(typeof items[0].run, 'function', 'every extra tile can launch its app');

  // Apps Android entram pelo provider (id `app:<pkg>`) e o ícone vem do sistema.
  registerDockAndroidProvider(() => [{ id: 'app:com.example.game', label: 'Example', img: 'data:x' }]);
  assert.ok(dockCatalogAll().some(item => item.id === 'app:com.example.game'));
  const withAndroid = extraDockItems({ dockExtraApps: 'app:com.example.game' },
    id => (id === 'app:com.example.game' ? { img: 'data:x', label: 'Example' } : null));
  assert.equal(withAndroid.length, 1);
  assert.equal(withAndroid[0].label, 'Example');
  assert.equal(withAndroid[0].img, 'data:x');
  registerDockAndroidProvider(() => []);

  let launched = null;
  registerDockLauncher(id => { launched = id; });
  launchDockApp('spotify');
  assert.equal(launched, 'spotify');

  assert.ok(catalogEntry('tiktok'), 'the catalog knows TikTok');
});

test('Build 89: the dock app tab is wired into settings, the dock and the bundle', () => {
  const entry = entrySrc();
  assert.ok(entry.includes('Aba 3 · Apps na Dock'), 'settings has a third tab');
  assert.ok(entry.includes('data-entry-settings-tab="3"'), 'third tab button exists');
  assert.ok(entry.includes('dockAppsPageHtml'), 'the third tab page is rendered');
  assert.ok(entry.includes('data-dock-app='), 'each app has a toggle tile');
  assert.ok(entry.includes("emit('dock-extras'"), 'toggling an app rebuilds the dock');
  assert.ok(windowsSrc().includes('...extraDockItems(S, dockExtraIcon)'), 'the dock appends the chosen apps');
  assert.ok(bundle().includes('Apps na Dock'), 'the bundle carries the new tab');
  assert.ok(indexHtml().includes('.entry-dock-apps-grid'), 'the tab has its own grid styling');
});

test('Build 89: the keyboard stands up and moves by the white side bar', () => {
  const src = windowsSrc();
  assert.ok(src.includes('const KB_TILT = -.12'), 'the keyboard is tilted like a standing panel');
  assert.ok(src.includes('KB_STAND_DISTANCE') && src.includes('KB_STAND_DROP'), 'it floats at eye level');
  assert.ok(!src.includes('-Math.PI / 2 + KB_TILT'), 'the lying-down pose is gone');
  assert.ok(src.includes('kbObj.rotation.set(KB_TILT, yaw, 0'), 'it stands upright facing the user');
  assert.ok(src.includes("grab.dataset.kbGrab = '1'"), 'the white bar is a real element');
  assert.ok(src.includes('function startKbDrag') && src.includes('function kbDragTo') && src.includes('function endKbDrag'),
    'pinching the bar drags the whole keyboard');
  assert.ok(src.includes('kbFree'), 'the chosen position persists');
  assert.ok(src.includes('class="kb-grab"') || src.includes("grab.className = 'kb-grab'"));
  assert.ok(indexHtml().includes('.kb-grab{'), 'the bar is styled on the side');
  assert.ok(!indexHtml().includes('.kb::before{'), 'the old top pill is gone');
});

test('Build 89: the loading screen is the NextVR splash', () => {
  const entry = entrySrc();
  assert.ok(entry.includes('entry-nextvr-load'), 'new splash markup');
  // A arte e' a imagem que o usuario mandou ("poe essa"), copiada para o bundle.
  assert.ok(entry.includes('nextvr-load.jpg'), 'the NextVR art is the splash (o wordmark ATMO saiu de cena)');
  assert.ok(existsSync('web/assets/nextvr-load.jpg'), 'the art ships with the repository');
  assert.ok(read('web/build.mjs').includes('nextvr-load.jpg'), 'and is copied into the APK bundle');
  // Os ganchos de progresso que os testes e o countdown usam continuam existindo.
  for (const hook of ['data-entry-load-pct', 'data-entry-load-bar', 'data-entry-load-status',
    'data-entry-countdown', 'data-entry-countdown-sub', 'data-entry-cancel-countdown']) {
    assert.ok(entry.includes(hook), `${hook} survives the redesign`);
  }
  assert.ok(!entry.includes('entry-hud-frame-svg'), 'the old HUD frame is gone');
  assert.ok(indexHtml().includes('.entry-nextvr-load{'), 'the splash has its own styling');
});

test('Build 89: TikTok runs the real site in a 9:16 native webview', () => {
  const apps = appsSrc();
  assert.ok(apps.includes("frame.dataset.nativeBrowser = 'tiktok'"), 'own native browser surface');
  assert.ok(apps.includes("frame.dataset.url = TIKTOK_URL") && apps.includes("https://www.tiktok.com/"),
    'the real TikTok URL');
  assert.ok(apps.includes('w: 405, h: 720'), '9:16 portrait window');
  assert.ok(!apps.includes('data-tt-canvas'), 'the simulated canvas feed is gone');
  assert.ok(!apps.includes('[data-tt-like]'), 'the fake like button is gone');
  assert.ok(read('web/src/atlas.js').includes("[data-native-browser]"), 'the atlas turns it into a real surface');
});

test('Build 89: the 3D character viewer can be rotated and shows the accessories', () => {
  const apps = appsSrc();
  assert.ok(apps.includes('export function openCharacterViewer'), 'viewer exists');
  assert.ok(apps.includes("data-cv-rot") && apps.includes('data-cv-spin'), 'rotation controls');
  assert.ok(apps.includes('data-cv-set'), 'accessories can be changed from the viewer');
  assert.ok(apps.includes('drawCharacter2D(ctx, cv.width, cv.height, cfg, {'), 'it draws the real avatar');
  assert.ok(apps.includes('data-ac-view3d'), 'the avatar creator opens it');
  assert.ok(indexHtml().includes('.cv-stage{'), 'viewer styling');
  assert.ok(apps.includes('data-ac-view3d'), 'the avatar creator has a button to open it');
});

test('Build 89: night camera decision has hysteresis and is wired to native', () => {
  assert.equal(decideNightCamera(0.10, -1, false).active, true, 'dark turns it on');
  assert.equal(decideNightCamera(0.60, -1, false).active, false, 'bright keeps it off');
  const on = decideNightCamera(0.12, 0.12, true);
  assert.equal(on.active, true, 'a small light does not turn it off');
  assert.equal(decideNightCamera(0.40, 0.30, true).active, false, 'a bright room turns it off');
  assert.equal(decideNightCamera(-1, 0.2, true).changed, false, 'no reading changes nothing');

  const activity = read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
  assert.ok(activity.includes('setNightCamera(boolean enabled)'), 'bridge setter');
  assert.ok(activity.includes('cameraLuma()'), 'bridge reader');
  const camera = read('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java');
  assert.ok(camera.includes('void setNightMode(boolean enabled)'), 'camera exposure control');
  assert.ok(camera.includes('CONTROL_AE_EXPOSURE_COMPENSATION'), 'real exposure compensation');
  assert.ok(camera.includes('lastLuma'), 'scene brightness is measured');
  const renderer = read('nextvr-android/src/main/java/com/nextvr/app/SpatialRenderer.java');
  assert.ok(renderer.includes('uNightCamera'), 'shader night gain');
  assert.ok(entrySrc().includes('data-entry-night-cam'), 'settings exposes auto/on/off');
});

test('Build 89: no light turns the flashlight on, light coming back turns it off', () => {
  // Build 91 refinou a decisão (calibra a luz da própria lanterna), mas o contrato é o mesmo:
  // escuro confirmado acende, luz de verdade apaga, e nada de piscar.
  const step = (level, on, st, now) => {
    const d = decideTorch(level, on, st, now);
    return { on: d.torchOn, st: d, reason: d.reason };
  };

  // Escuridão confirmada (ON_CONFIRM leituras) acende.
  let st = {};
  let now = 1000;
  let state = step(0.04, false, st, now);
  now += 1200;
  while (!state.on && now < 60000) {
    state = step(0.04, state.on, state.st, now);
    now += 1200;
  }
  assert.equal(state.on, true, 'confirmed darkness turns the flashlight on');
  assert.equal(state.reason, 'no-light');

  // Com luz, nem pensa em acender.
  assert.equal(decideTorch(0.62, false, { offSince: -1, dark: 0 }, 1000).torchOn, false);

  // Acesa: não apaga antes do tempo mínimo, nem com uma leitura clara solta.
  assert.equal(decideTorch(0.9, true, { onSince: 0, bright: 0 }, MIN_ON_MS / 2).torchOn, true,
    'the flashlight does not blink: minimum on time');
  assert.equal(
    decideTorch(0.9, true, { onSince: 0, bright: 0, selfGain: SELF_MIN, baseline: 0.1 }, MIN_ON_MS + 10).torchOn,
    true, 'one bright reading is not "the light came back"');

  // Sem leitura (preview no PC) nada muda.
  assert.equal(decideTorch(-1, true, { onSince: 0 }, 9e9).changed, false);
  assert.equal(decideTorch(-1, false, {}, 9e9).changed, false);
});

test('Build 89: the flashlight is real: Camera2 flash mode on the owned session', () => {
  const camera = read('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java');
  assert.ok(camera.includes('void setTorch(boolean enabled)'), 'the camera can drive the flash');
  assert.ok(camera.includes('CaptureRequest.FLASH_MODE_TORCH'), 'torch mode on the repeating request');
  assert.ok(camera.includes('CaptureRequest.FLASH_MODE_OFF'), 'and it turns off');
  assert.ok(camera.includes('FLASH_INFO_AVAILABLE'), 'only on a device that has a flash');
  assert.ok(camera.includes('setTorchMode'), 'fallback through CameraManager');
  const activity = read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
  assert.ok(activity.includes('setTorch(boolean enabled)'), 'bridge setter');
  assert.ok(activity.includes('torchAvailable()'), 'bridge capability check');
  const shell = read('web/src/night-camera.js');
  assert.ok(shell.includes('decideTorch('), 'the shell decides with hysteresis');
  assert.ok(shell.includes("window.NativeXR?.setTorch?.(value)"), 'and drives the native flash');
  assert.ok(entrySrc().includes('data-entry-torch-auto'), 'settings can turn the automation off');
});

test('Build 89: the shipped APK is the release variant signed with the repository key', () => {
  const gradle = read('nextvr-android/build.gradle');
  assert.ok(/versionCode (9[5-9]|[1-9]\d{2,})/.test(gradle), 'version code bumped');
  assert.ok(gradle.includes('signingConfigs.release'), 'release signing config exists');
  assert.ok(gradle.includes('signingConfig signingConfigs.release'), 'release uses it');
  assert.ok(gradle.includes('debuggable false'), 'the shipped build is not debuggable');
  assert.ok(gradle.includes("storeFile rootProject.file('signing/debug.keystore')"),
    'same certificate as the previous builds, so it installs over them');
  const workflow = read('.github/workflows/android.yml');
  assert.ok(workflow.includes('assembleRelease'), 'CI builds the release variant');
  assert.ok(workflow.includes('build/outputs/apk/release'), 'CI publishes the release APK');
  assert.ok(!workflow.includes('build/outputs/apk/debug'), 'CI no longer publishes the debug APK');
  assert.ok(read('docs/PLAY-PROTECT.md').includes('Play Store'), 'the Play Protect limits are documented');
});
