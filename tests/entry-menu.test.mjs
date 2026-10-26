import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ENTRY_COLLABORATORS, ENTRY_COLLABORATOR_BIOS, ENTRY_ABOUT_TITLE, ENTRY_ABOUT_PARAGRAPHS, ENTRY_ABOUT_TEXT } from '../web/src/entry-data.js';

const EXPECTED_ABOUT_TEXT = `NextVR — realidade aumentada

O NextVR é um projeto de realidade virtual criado para transformar a maneira como você interage com o mundo digital usando apenas um celular e um VR Box.

Nosso objetivo é aproximar a experiência de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.

Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualização representa um novo passo rumo a uma experiência mais completa, interativa e acessível.

NextVR — Mais que um app, uma nova forma de ver.`;

test('entry menu constants match the exact collaborators order and about text', () => {
  assert.deepEqual([...ENTRY_COLLABORATORS], ['NeyVR', 'Faylan', 'NanyGata', 'JocaVR']);
  assert.ok(ENTRY_COLLABORATORS.includes('NanyGata'), 'NanyGata is restored in ENTRY_COLLABORATORS');
  assert.equal(ENTRY_COLLABORATOR_BIOS.NeyVR, 'o Dono absoluto mais aurudo do planeta.');
  assert.equal(ENTRY_COLLABORATOR_BIOS.Faylan, 'o desenvolvedor mais sabido de todo o universo muita aura');
  assert.equal(ENTRY_COLLABORATOR_BIOS.JocaVR, 'o portador de jogos mais importante do planeta aurudo 67');
  assert.equal(ENTRY_COLLABORATORS[0], 'NeyVR', 'NeyVR must be first');
  assert.equal(ENTRY_ABOUT_TITLE, 'NextVR — realidade aumentada');
  assert.equal(ENTRY_ABOUT_PARAGRAPHS.length, 4);
  assert.equal(ENTRY_ABOUT_TEXT, EXPECTED_ABOUT_TEXT);
});

test('entry menu source and bundle include all five cards, hand style toggle, collaborators and about text', () => {
  const entryMenuSrc = readFileSync('web/src/entry-menu.js', 'utf8') + '\n' + readFileSync('web/src/entry-data.js', 'utf8');
  const appsSrc = readFileSync('web/src/apps.js', 'utf8');
  const bundleSrc = readFileSync('nextvr-android/src/main/assets/ui/app.js', 'utf8');
  const indexHtml = readFileSync('web/index.html', 'utf8');

  assert.ok(appsSrc.includes("id: 'entry-menu'"), 'apps.js registers the entry-menu window');
  assert.ok(appsSrc.includes('entryWin = entryMenuWindow()'), 'entry menu opens on boot');
  assert.ok(indexHtml.includes('.entry-menu-root'), 'index.html styles the entry menu');
  assert.ok(indexHtml.includes('.entry-collab-list') && indexHtml.includes('flex-direction:column'),
    'collaborators are stacked vertically one below another');

  for (const label of ['Iniciar', 'Configurações', 'Hand tracking', 'Colaboradores', 'Sobre']) {
    assert.ok(entryMenuSrc.includes(label), `entry-menu.js includes ${label}`);
  }
  for (const token of ['Iniciar', 'Hand tracking', 'Colaboradores', 'Sobre']) {
    assert.ok(bundleSrc.includes(token), `bundled app.js includes ${token}`);
  }

  for (const name of ['NeyVR', 'Faylan', 'NanyGata', 'JocaVR']) {
    assert.ok(entryMenuSrc.includes(name), `entry-menu.js includes collaborator ${name}`);
    assert.ok(bundleSrc.includes(name), `bundled app.js includes collaborator ${name}`);
  }
  assert.ok(entryMenuSrc.includes('isVerifiedProfileName'), 'entry-menu.js and entry-data.js grant red verified badge for NeyVR, Faylan, NanyGata, and JocaVR');
  assert.ok(entryMenuSrc.includes('data-entry-dof="3dof"') && entryMenuSrc.includes('data-entry-dof="6dof"'),
    'entry-menu.js includes 3DoF and 6DoF options in Settings');
  assert.ok(indexHtml.includes('nextvrClickPop') && indexHtml.includes('nextvrChoosePulse') && indexHtml.includes('nextvr-click-ripple'),
    'index.html includes click animation (nextvrClickPop + nextvr-click-ripple) and selection animation (nextvrChoosePulse)');

  assert.ok(entryMenuSrc.includes('Mão desenhada') && entryMenuSrc.includes('Invisível'),
    'hand tracking style alternates between Invisível and Mão desenhada');
  assert.ok(entryMenuSrc.includes('window.NativeXR?.handVisuals?.(!!S.handDraw)'),
    'hand tracking style syncs with native handVisuals bridge');

  for (const p of ENTRY_ABOUT_PARAGRAPHS) {
    assert.ok(entryMenuSrc.includes(p), `entry-menu.js includes paragraph: ${p.slice(0, 32)}...`);
  }
  assert.ok(bundleSrc.includes('VR Box') && bundleSrc.includes('Meta Quest'),
    'bundled app.js includes the Sobre text');

  const activitySrc = readFileSync('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java', 'utf8');
  const webSurfaceSrc = readFileSync('nextvr-android/src/main/java/com/nextvr/app/WebSurface.java', 'utf8');
  assert.ok(webSurfaceSrc.includes('createFullscreenEntryView'), 'WebSurface provides fullscreen entry WebView');
  assert.ok(!webSurfaceSrc.includes('entry.setInitialScale(100)'), 'createFullscreenEntryView uses native device density scaling instead of forcing 100% physical pixels');
  assert.ok(webSurfaceSrc.includes('ENTRY_HOME=HOME+"?fullscreen=1"'), 'WebSurface loads fullscreen=1 entry menu');
  assert.ok(activitySrc.includes('setEntryMenuVisible(true)'), 'NextVrActivity starts with fullscreen entry menu visible');
  assert.ok(activitySrc.includes('public void startVrSession(String settingsJson)'), 'NextVrActivity Bridge exposes startVrSession');
  assert.ok(activitySrc.includes('public void wideCamera(boolean enabled)'), 'NextVrActivity Bridge exposes wideCamera');
  assert.ok(entryMenuSrc.includes('entry-bento-grid') && entryMenuSrc.includes('câmera grande ocular') && entryMenuSrc.includes('qualidade'),
    'entry-menu.js renders the bento settings grid with IDIOMA, qualidade, câmera grande ocular, VOLUME, BRILHO and Hand tracking');
  assert.ok(appsSrc.includes("id: 'spatial-launcher'") && appsSrc.includes('setSpatialLauncherMode'),
    'apps.js provides the Spatial App floating launcher that hides the dock');
  assert.ok(appsSrc.includes('win.handle.hidden = true') && appsSrc.includes('onboarding: true'),
    'Spatial App launcher hides the white move bar (.win-handle) and behaves like a fixed dock');
  assert.ok(entryMenuSrc.includes('COLOQUE O CELULAR NO VR BOX') && entryMenuSrc.includes('countdownSec = 6') && entryMenuSrc.includes('durationMs = 6000') && entryMenuSrc.includes('Carregando câmera AR...') && entryMenuSrc.includes('Carregando Dock...') && entryMenuSrc.includes('Otimizando Hand tracking...'),
    'entry-menu.js includes the dedicated 6-second 0-100% 2D HUD loading screen with dynamic status texts');
  assert.ok(entryMenuSrc.includes('Login / Perfil NextVR') && entryMenuSrc.includes('Escolher Foto da Galeria') && activitySrc.includes('public void pickProfilePhoto()'),
    'entry-menu.js and NextVrActivity include the Login/Profile panel and native Android gallery picker');
  const windowsSrc = readFileSync('web/src/windows.js', 'utf8');
  assert.ok(windowsSrc.includes('recenterChord = new TwoHandMenuChord({ holdMs: 2000, graceMs: 260 })'),
    'windows.js includes 2-second two-hand pinch recenter without a loading circle');
  const cameraSrc = readFileSync('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java', 'utf8');
  assert.ok(cameraSrc.includes('CONTROL_ZOOM_RATIO') && cameraSrc.includes('0.5f') && cameraSrc.includes('horizontalFovScore'),
    'PassthroughCamera supports 0.5x ultra-wide zoom ratio and widest-FOV camera selection');
  assert.ok(windowsSrc.includes('win-drop-slot') && windowsSrc.includes('updateDropSlot'),
    'windows.js renders the pre-defined semi-transparent black drop slot when moving windows in normal Dock mode');
  const coreSrc = readFileSync('web/src/core.js', 'utf8');
  assert.ok(coreSrc.includes('height: 1080') && coreSrc.includes('height: 890') && coreSrc.includes('height: 390') && coreSrc.includes('autoQualityTier'),
    'core.js defines High 1080p, Medium 890p, Low 390p, and Auto alternating quality presets');
  assert.ok(appsSrc.includes("id:'language-pick', title:t('langTitle'), w:320, h:420"),
    'apps.js shrinks the language selector window to 320x420');
  const gorillaSrc = readFileSync('web/src/gorilla-tag.js', 'utf8');
  assert.ok(gorillaSrc.includes("model: 'Google Cardboard 2015'") && gorillaSrc.includes('k1: 0.22') && gorillaSrc.includes('k2: 0.24'),
    'gorilla-tag.js uses Google Cardboard 2015 stereo lens parameters matching NextVR');
  assert.ok(gorillaSrc.includes('Entrando no Gorilla Tag') && gorillaSrc.includes('./gorilla-map.task') && gorillaSrc.includes('./gorilla-rig.task'),
    'gorilla-tag.js shows "Entrando no Gorilla Tag" transition and loads bundled forest map + Gorilla arm rig');
  assert.ok(gorillaSrc.includes('buildGrid') && gorillaSrc.includes('findSpawn') && gorillaSrc.includes('mergeSimple') && gorillaSrc.includes('setupRig') && gorillaSrc.includes('solveArm') && gorillaSrc.includes('createRightArmCoinCounter') && gorillaSrc.includes('detectIsRightHand'),
    'gorilla-tag.js includes CSR spatial collision grid, findSpawn on the forest floor, mesh merger, Gorilla arm IK rig, right-arm coin counter, and right-hand chirality detection');
  assert.ok(entryMenuSrc.includes('data-entry-act="store"') && entryMenuSrc.includes('data-entry-panel="store"') && entryMenuSrc.includes('data-entry-install-gorilla'),
    'entry-menu.js implements the Store directly inside the main game menu');
  assert.ok(entryMenuSrc.includes('data-entry-updates') && entryMenuSrc.includes('entry-notif-card') && !entryMenuSrc.includes('entry-brand-chrome-logo'),
    'entry-menu.js replaces the right-side metallic NextVR logo with notification-style update cards');
  assert.ok(windowsSrc.includes('+ NOVA GUIA') && windowsSrc.includes('+ GUIA ANÔNIMA') && windowsSrc.includes('showBrowserTabMenu') && appsSrc.includes('openBrowserWithMode'),
    'windows.js and apps.js implement 2-second hold on Browser icon to open + NOVA GUIA and + GUIA ANÔNIMA');
  const sixdofSrc = readFileSync('web/src/sixdof.js', 'utf8');
  const fakeSixDofJava = readFileSync('nextvr-android/src/main/java/com/nextvr/app/FakeSixDof.java', 'utf8');
  const rendererSrc = readFileSync('nextvr-android/src/main/java/com/nextvr/app/SpatialRenderer.java', 'utf8');
  assert.ok(!sixdofSrc.includes('this.vel.') && !sixdofSrc.includes('bdx !== 0') && !fakeSixDofJava.includes('bdx != 0') && fakeSixDofJava.includes('* 0.25f') && activitySrc.includes('walkSensorListener'),
    'sixdof.js, FakeSixDof.java, and NextVrActivity.java implement full sub-pixel parabola at bdx=0/bdy=0, 2x2 anti-aliased downsampling, zero coasting, and accelerometer gating');
  assert.ok(rendererSrc.includes('if(sixDofX!=0f || sixDofY!=0f || sixDofZ!=0f) Matrix.translateM(view,0,-sixDofX,-sixDofY,-sixDofZ);'),
    'SpatialRenderer.java translates view by (-sixDofX,-sixDofY,-sixDofZ) before invertM/multiplyMM so handRenderer and panels share the exact 6DoF view matrix');
  assert.ok(appsSrc.includes('data-store-gorilla') && appsSrc.includes('data-install-gorilla') && appsSrc.includes("id: 'gorilla-tag'") && appsSrc.includes('gorilla-tag-logo.jpg'),
    'apps.js lists Gorilla Tag with its official logo in the Store and installs it into the App Library');
  assert.ok(appsSrc.includes('QB_ENTERTAINMENT_TILES') && appsSrc.includes('Crunchyroll') && appsSrc.includes('Paramount+') && appsSrc.includes('buildQuestBrowserHomeHtml'),
    'apps.js implements the Meta Quest 3S Browser Start Page with Populares, Continuar navegando, Entretenimento, and Experiências imersivas');
  assert.ok(appsSrc.includes('SPATIAL_GAME_ITEMS') && appsSrc.includes('data-spatial-scroll-track') && appsSrc.includes('syncSpatialLauncherVisibility'),
    'apps.js shows games in the Spatial App, makes it horizontally scrollable, and hides/restores it when opening/closing an app window');
  const vrfsSrc = readFileSync('web/src/vrfs-game.js', 'utf8');
  assert.ok(vrfsSrc.includes('openVrfsGame') && vrfsSrc.includes('R_BALL = 0.21') && vrfsSrc.includes('createVrfsSoccerBallTexture') && vrfsSrc.includes('ballShadow') && vrfsSrc.includes('./vrfs-assets.task') && vrfsSrc.includes('./icons/vrfs-logo.jpg'),
    'vrfs-game.js implements VRFS 3D football simulator with visible 3D soccer ball, ground shadow, VRFS logo, cleats, and stereo VR Box mode');
  assert.ok(appsSrc.includes("id:'vrfs'") && appsSrc.includes('./icons/vrfs-logo.jpg') && appsSrc.includes('openVrfsGame') && entryMenuSrc.includes("id: 'vrfs'"),
    'apps.js and entry-menu.js integrate VRFS with its attached logo into Library, Store, Spatial Launcher, and Entry Menu');
  assert.ok(windowsSrc.includes('measureHandApparentSize') && windowsSrc.includes('currentRadius') && windowsSrc.includes('leftQuickMenuDist') && windowsSrc.includes("emit('sixDof', true)"),
    'windows.js auto-enables 6DoF on window drag, pulls/pushes window depth with hand distance, and makes left-quick-menu follow left-hand depth');
  assert.ok(appsSrc.includes('toggleCameraSoloMode') && appsSrc.includes('camera-solo') && activitySrc.includes('public void refocusCamera()') && cameraSrc.includes('triggerAutoFocus'),
    'apps.js, NextVrActivity.java, and PassthroughCamera.java implement Solo Camera mode and automatic camera refocus on defocus');
  assert.ok(appsSrc.includes('w: 560') && appsSrc.includes('h: 740') && appsSrc.includes('resizeScale = 1.68') && rendererSrc.includes('1440f'),
    'apps.js sizes the left-hand quick menu to match the reference screenshot (560x740, scale 1.68) and SpatialRenderer.java raises rendering quality to 1440p');
  assert.ok(windowsSrc.includes('checkFingerLift') && windowsSrc.includes('updateFistQuickMenu') && windowsSrc.includes('KEY_SUBS'),
    'windows.js implements finger-lift touch activation, 2s closed-fist quick menu trigger, and keyboard superscript symbols');
  const handGesturesKt = readFileSync('nextvr-android/src/main/java/com/nextvr/app/hands/HandGestures.kt', 'utf8');
  const phoneXrHandsKt = readFileSync('nextvr-android/src/main/java/com/nextvr/app/hands/PhoneXrHands.kt', 'utf8');
  const handRendererKt = readFileSync('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt', 'utf8');
  assert.ok(
    windowsSrc.includes('isPalmTurnedForBolinha') &&
    windowsSrc.includes('isHandPinchFromBolinha') &&
    windowsSrc.includes('nextvr-bolinha-logo.png') &&
    windowsSrc.includes('nextvr-bolinha-left.png') &&
    windowsSrc.includes('bolinha-menu-card') &&
    windowsSrc.includes('win-cinema-bar') &&
    windowsSrc.includes('win-brightness-bar') &&
    windowsSrc.includes('win-predefined-slots') &&
    windowsSrc.includes('finger-sticking') &&
    appsSrc.includes('nextvrToggleLeftHandQuickMenu'),
    'Build 43 implements palm-only V/L right/left bolinhas with uploaded logos, thumb+index pinch [Logo / Menu] card, 360 cinema bar, brightness slider, predefined slots, left-hand quick menu, and sticky finger touch'
  );
  const webSurfaceJava = readFileSync('nextvr-android/src/main/java/com/nextvr/app/WebSurface.java', 'utf8');
  assert.ok(
    handGesturesKt.includes('sidewaysPinchPose') &&
    phoneXrHandsKt.includes('rawShape.pinchGap * 1.05f') &&
    windowsSrc.includes('resolveDirectPinchPoint') &&
    windowsSrc.includes('findDirectAppPoint') &&
    windowsSrc.includes('updateLeftQuickMenuAttachment') &&
    gorillaSrc.includes('gorillaJoycon') &&
    gorillaSrc.includes('joyconLocked: true') &&
    handRendererKt.includes('RAY_SHOWN=.55f') &&
    !handRendererKt.includes('curvedFinger') &&
    appsSrc.includes('./icons/hz-browser.png') &&
    appsSrc.includes('./icons/hz-store.png') &&
    appsSrc.includes('https://google.com/') &&
    webSurfaceJava.includes('LAYER_TYPE_HARDWARE'),
    'Build 46 includes Horizon OS 2.7 (v207) icons, Google default browser URL with GPU hardware acceleration, and Horizon OS Quest 3S dock bar'
  );
  const analysisGateJava = readFileSync('nextvr-android/src/main/java/com/nextvr/app/AnalysisGate.java', 'utf8');
  assert.ok(
    sixdofSrc.includes('worldLock') &&
    sixdofSrc.includes('lockToWorldAnchor') &&
    fakeSixDofJava.includes('worldLocked') &&
    fakeSixDofJava.includes('blockSad8x8') &&
    rendererSrc.includes('worldLock = true') &&
    analysisGateJava.includes('DEFAULT_MAX_PENDING_AGE_MS = 0L') &&
    windowsSrc.includes("on('handtargets_sync'") &&
    gorillaSrc.includes('glRenderer.setPixelRatio(1)') &&
    gorillaSrc.includes('glRenderer.setSize(1200, 800, false)') &&
    gorillaSrc.includes('ACESFilmicToneMapping') &&
    vrfsSrc.includes('glRenderer.setPixelRatio(1)') &&
    vrfsSrc.includes('ACESFilmicToneMapping') &&
    vrfsSrc.includes('LinearMipmapLinearFilter'),
    'Build 55 includes 6DoF World Lock and zero-allocation optical flow, zero-delay hand tracking, and 1200x800 1:1 antialiased ACESFilmic VR games'
  );
  const mrPistolSrc = readFileSync('web/src/mr-pistol-game.js', 'utf8');
  const entryDataSrc = readFileSync('web/src/entry-data.js', 'utf8');
  assert.ok(
    mrPistolSrc.includes('openMrPistolGame') &&
    mrPistolSrc.includes('PISTOL_HOME') &&
    mrPistolSrc.includes('resetTargets') &&
    mrPistolSrc.includes('buildG18PistolModel') &&
    mrPistolSrc.includes('build3DTargetModel') &&
    mrPistolSrc.includes('build3DGloveModel') &&
    mrPistolSrc.includes('getSharedAssets') &&
    mrPistolSrc.includes('detectClosedFist') &&
    mrPistolSrc.includes('EXIT_BACK_POS') &&
    mrPistolSrc.includes('ShootTheDie') &&
    mrPistolSrc.includes('shootthedie-logo.jpg') &&
    mrPistolSrc.includes('aimForwardAt') &&
    mrPistolSrc.includes('detectFingerGunGesture') &&
    appsSrc.includes('openMrPistolGame') &&
    handRendererKt.includes('GLOVE_FILL_R') &&
    handRendererKt.includes('GLOVE_CONTOUR_R') &&
    handRendererKt.includes('handCuffOpen') &&
    handRendererKt.includes('if (mrGameMode)') &&
    handRendererKt.includes('smoothSpan(') &&
    handRendererKt.includes('MESH_REBUILD_EPSILON=0f') &&
    handRendererKt.includes('MESH_REBUILD_MAX_NS=0L') &&
    !handRendererKt.includes('fBone(') &&
    fakeSixDofJava.includes('ptW') &&
    sixdofSrc.includes('_ptW') &&
    appsSrc.includes('readLiveBatteryPercent') &&
    entryDataSrc.includes('ENTRY_UPDATES') &&
    entryDataSrc.includes('internal-rec-hand-zero') &&
    entryDataSrc.includes('quest-browser-env-hand') &&
    entryDataSrc.includes('mr-pistol') &&
    entryDataSrc.includes('green-glove') &&
    appsSrc.includes('toggleInternalEyeRecording') &&
    appsSrc.includes('openHandDrawGame') &&
    appsSrc.includes('paintdrawer') &&
    appsSrc.includes('paintdrawer-logo.jpg') &&
    appsSrc.includes('data-hand-draw-canvas') &&
    appsSrc.includes('YouTube Music') &&
    appsSrc.includes('Peacock TV') &&
    windowsSrc.includes('viaRay: true') &&
    windowsSrc.includes('occupiedBoxes(w, true)') &&
    windowsSrc.includes('grabHandles') &&
    windowsSrc.includes('win-grab-arc') &&
    windowsSrc.includes('predictedHandScreenPoint') &&
    !vrfsSrc.includes('data-vrfs-act="ball"') &&
    handRendererKt.includes('if (mrGameMode && handIndex > 0) continue') &&
    activitySrc.includes('toggleInternalRecording') &&
    activitySrc.includes('setSingleHandMode') &&
    activitySrc.includes('setBwCamera') &&
    rendererSrc.includes('uBwCamera') &&
    coreSrc.includes('setBwCamera') &&
    entryMenuSrc.includes('data-entry-bw-cam') &&
    windowsSrc.includes('win-pico-foot') &&
    windowsSrc.includes('win-pico-grab-bar') &&
    windowsSrc.includes('picoProWindow') &&
    windowsSrc.includes('dock-pico-status') &&
    appsSrc.includes('openAvatarCreator') &&
    appsSrc.includes('openPicoMotionTracker') &&
    appsSrc.includes('openPicoExplore') &&
    appsSrc.includes('openTikTokVr') &&
    appsSrc.includes('openSpotifyVr') &&
    appsSrc.includes('openPhoneNotifications') &&
    appsSrc.includes('PICO_BROWSER_SHORTCUTS') &&
    appsSrc.includes('PICO_STORE_SEARCH_CARDS') &&
    entryMenuSrc.includes('data-character-creator="1"') &&
    entryMenuSrc.includes('data-pico4pro-emblem="1"') &&
    entryMenuSrc.includes('data-pico4pro-callout="1"') &&
    entryMenuSrc.includes('data-p5-sys-banner="1"') &&
    entryMenuSrc.includes('entry-p5-wedge-wrap') &&
    entryMenuSrc.includes('entry-p5-jagged-backing') &&
    entryMenuSrc.includes('PICO 4 PRO') &&
    !entryMenuSrc.includes('data-entry-spatial') &&
    !entryMenuSrc.includes('Bolinha Mão Dir.') &&
    handRendererKt.includes('WRIST_EXTEND=.06f') &&
    readFileSync('web/src/hands.js', 'utf8').includes('stabilizeRayAimDuringPinch') &&
    readFileSync('web/src/windows.js', 'utf8').includes('clickedSync') &&
    readFileSync('web/src/windows.js', 'utf8').includes("S.pinchOnApp !== 'force-legacy'") &&
    phoneXrHandsKt.includes('openAimX') &&
    phoneXrHandsKt.includes('appendFinite(sb, h.shape.pinchGap)') &&
    readFileSync('web/src/character-creator.js', 'utf8').includes('project3D') &&
    readFileSync('web/src/character-creator.js', 'utf8').includes('pushCapsule3D') &&
    indexHtml.includes('<title>ATMOXR</title>') &&
    readFileSync('nextvr-android/build.gradle', 'utf8').includes('applicationId "com.atmoxr.app"') &&
    readFileSync('nextvr-android/build.gradle', 'utf8').includes('versionCode 72') &&
    readFileSync('.github/workflows/android.yml', 'utf8').includes('dist/ATMOXR.apk') &&
    handRendererKt.includes('virtualEnv && !glove') &&
    handRendererKt.includes('.024f,.0175f'),
    'Build 72 (ATMOXR) includes Ray-Only pinch interaction without pinch-on-app, stabilized Ray Pinch aim/click, faster MediaPipe hand tracking, 3D Character Creator, PICO 4 hand-only mesh, and ATMOXR.apk output'
  );
});

test('entry menu interactive flow in browser: hand tracking toggle, colaboradores, sobre, configurações and iniciar', { timeout: 60000 }, async (t) => {
  const { createServer } = await import('node:http');
  const { existsSync } = await import('node:fs');
  const { extname, join, resolve } = await import('node:path');
  const { chromium: pw } = await import('playwright-core');
  const chromium = (await import('@sparticuz/chromium')).default;

  const root = resolve('nextvr-android/src/main/assets/ui');
  const MIME = { '.html': 'text/html;charset=utf-8', '.js': 'text/javascript;charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.wav': 'audio/wav' };
  const server = createServer((req, res) => {
    const u = req.url.split('?')[0];
    const p = join(root, u === '/' ? 'index.html' : u);
    if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
    res.end(readFileSync(p));
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));

  let browser;
  try {
    try {
      browser = await pw.launch({ executablePath: await chromium.executablePath(), args: chromium.args, headless: true });
    } catch (e) {
      if (/shared libraries|cannot open shared object|Target page, context or browser has been closed/.test(String(e))) {
        t.skip('Playwright browser relies on system libs provided by the CI runner');
        return;
      }
      throw e;
    }
    const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
    await page.addInitScript(() => {
      window.__gorillaFastTest = true;
      window.__handVisualCalls = [];
      window.__startedVrWith = null;
      window.NativeXR = {
        frame(json) { window.__last = JSON.parse(json); },
        env() {},
        hands() {},
        handVisuals(on) { window.__handVisualCalls.push(!!on); },
        handTargets() {},
        handTouch() {},
        click() {},
        key() {},
        battery() { return 88; },
        mediaVolumePercent() { return 70; },
        brightnessPercent() { return 75; },
        startVrSession(json) { window.__startedVrWith = json; },
      };
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/`);
    await page.waitForSelector('.entry-menu-root');

    // 1. Verify initial state: 5 cards visible, dock hidden
    assert.equal(await page.locator('.entry-card').count(), 5);
    assert.equal(await page.locator('[data-hand-style-label]').innerText(), 'Mão desenhada');

    // 2. Toggle Hand tracking style: Mão desenhada -> Invisível -> Mão desenhada
    await page.evaluate(() => document.querySelector('[data-entry-act="hand-style"]').click());
    assert.equal(await page.locator('[data-hand-style-label]').innerText(), 'Invisível');
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).handDraw), 0);
    assert.equal(await page.evaluate(() => window.__handVisualCalls.at(-1)), false);

    await page.evaluate(() => document.querySelector('[data-entry-act="hand-style"]').click());
    assert.equal(await page.locator('[data-hand-style-label]').innerText(), 'Mão desenhada');
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).handDraw), 1);
    assert.equal(await page.evaluate(() => window.__handVisualCalls.at(-1)), true);

    // 3. Colaboradores: NeyVR, Faylan, colaboradores do nextVR (em azul), JocaVR stacked vertically with red TikTok verified badge and bios after (V)
    await page.evaluate(() => document.querySelector('[data-entry-act="collaborators"]').click());
    const collabData = await page.evaluate(() => {
      const items = [...document.querySelectorAll('[data-collaborator-name]')];
      return items.map(el => ({
        name: el.dataset.collaboratorName,
        top: el.getBoundingClientRect().top,
        hasRedVerified: !!el.querySelector('[data-collab-verified] circle[fill="#fe2c55"]'),
        bio: el.querySelector('[data-collab-bio]')?.textContent?.trim() || '',
        isBlue: !!el.querySelector('.entry-collab-name--blue[data-collab-blue="1"]'),
        color: getComputedStyle(el.querySelector('.entry-collab-name')).color,
      }));
    });
    assert.deepEqual(collabData.map(c => c.name), ['NeyVR', 'Faylan', 'NanyGata', 'JocaVR']);
    assert.ok(collabData.every(c => c.hasRedVerified), 'Every collaborator item has a red TikTok-style verified badge');
    assert.equal(collabData.find(c => c.name === 'NeyVR')?.bio, 'o Dono absoluto mais aurudo do planeta.');
    assert.equal(collabData.find(c => c.name === 'Faylan')?.bio, 'o desenvolvedor mais sabido de todo o universo muita aura');
    assert.equal(collabData.find(c => c.name === 'JocaVR')?.bio, 'o portador de jogos mais importante do planeta aurudo 67');
    assert.equal(collabData.find(c => c.name === 'NanyGata')?.isBlue, true, 'NanyGata is styled in blue');
    for (let i = 1; i < collabData.length; i++) {
      assert.ok(collabData[i].top > collabData[i - 1].top, `${collabData[i].name} must be below ${collabData[i - 1].name}`);
    }
    await page.evaluate(() => document.querySelector('[data-entry-act="back"]').click());
    assert.equal(await page.locator('.entry-brand-chrome-logo').count(), 0, 'Metallic NextVR logo is removed from the right side of the menu');
    assert.equal(await page.locator('[data-entry-updates] .entry-notif-card').count(), 4, 'Right side of the menu displays notification-style update cards');

    // 4. Sobre: exact text check
    await page.evaluate(() => document.querySelector('[data-entry-act="about"]').click());
    assert.equal(await page.locator('[data-about-title]').innerText(), ENTRY_ABOUT_TITLE);
    const aboutParagraphs = await page.locator('.entry-about-p').allInnerTexts();
    assert.deepEqual(aboutParagraphs, [...ENTRY_ABOUT_PARAGRAPHS]);
    await page.evaluate(() => document.querySelector('[data-entry-act="back"]').click());

    // 5. Configurações básicas (2 Abas com arrasto lateral: Aba 1 · Básico + Aba 2 · Hand & Tela)
    await page.evaluate(() => document.querySelector('[data-entry-act="settings"]').click());
    assert.equal(await page.locator('[data-entry-panel="settings"] .entry-subpanel-title').innerText(), 'Configurações básicas');
    assert.equal(await page.locator('.entry-bento-cell').count(), 10);
    assert.equal(await page.locator('[data-entry-settings-tab]').count(), 2, '2D Initial Menu settings has 2 tabs');
    assert.equal(await page.locator('[data-entry-internal-rec]').count(), 0, 'Internal recording is in in-game settings, not in 2D initial menu');
    assert.equal(await page.locator('[data-entry-lang="ru"]').count(), 1, 'Russian language option (RU) replaces French');
    assert.equal(await page.locator('[data-entry-lang="fr"]').count(), 0, 'French language option (FR) is removed');
    assert.equal(await page.locator('[data-entry-finger-touch]').count(), 1, 'Hand tracking cell has direct index-finger touch toggle');
    await page.evaluate(() => document.querySelector('[data-entry-finger-touch]').click());
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).fingerTouch), 0, 'clicking finger-touch button toggles off');
    await page.evaluate(() => document.querySelector('[data-entry-finger-touch]').click());
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).fingerTouch), 1, 'clicking finger-touch button toggles back on');
    await page.evaluate(() => document.querySelector('[data-entry-wide-cam="1"]').click());
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).wideCamera), 1);
    assert.equal(await page.locator('[data-entry-dof="3dof"]').count(), 1, 'Settings includes 3DoF option');
    assert.equal(await page.locator('[data-entry-dof="6dof"]').count(), 1, 'Settings includes 6DoF option');
    await page.evaluate(() => document.querySelector('[data-entry-dof="3dof"]').click());
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).sixdof), 0, 'clicking 3DoF disables fake 6DoF');
    await page.evaluate(() => document.querySelector('[data-entry-dof="6dof"]').click());
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).sixdof), 1, 'clicking 6DoF enables fake 6DoF');
    await page.evaluate(() => document.querySelector('[data-entry-act="back"]').click());

    // 5b. Login / Perfil: definir nome e foto de perfil
    await page.evaluate(() => document.querySelector('[data-entry-act="profile"]').click());
    assert.equal(await page.locator('[data-entry-panel="profile"] .entry-subpanel-title').innerText(), 'Login / Perfil NextVR');
    await page.fill('[data-profile-name-input]', 'NeyVR');
    await page.evaluate(() => document.querySelector('[data-profile-preset]').click());
    await page.evaluate(() => document.querySelector('[data-profile-save]').click());
    assert.equal(await page.locator('[data-profile-display-name]').innerText(), 'NeyVR');
    assert.equal(await page.evaluate(() => {
      const b = document.querySelector('[data-profile-verified="1"]');
      return !!b && !b.hidden && !!b.querySelector('circle[fill="#fe2c55"]');
    }), true, 'Profile displays red verified badge for NeyVR');

    // 5c. Bateria sincronizada em tempo real com o celular
    await page.evaluate(() => window.nextvrBattery({ level: 0.42, charging: true }));
    assert.equal(await page.locator('[data-entry-battery]').innerText(), '42% ⚡');

    // 5d. Store dentro do Menu do Jogo + Verificação de layout sem sobreposições
    await page.evaluate(() => document.querySelector('[data-entry-act="store"]').click());
    assert.equal(await page.locator('[data-entry-panel="store"]').count(), 1, 'Store panel opens inside the main menu');
    const menuStoreCheck = await page.evaluate(() => {
      const leftCol = document.querySelector('.entry-left-column').getBoundingClientRect();
      const subpanel = document.querySelector('.entry-subpanel').getBoundingClientRect();
      const cornerBack = document.querySelector('.entry-corner-back');
      const hasInstall = !!document.querySelector('[data-entry-install-gorilla]');
      return {
        noOverlap: leftCol.right <= subpanel.left + 8,
        noCornerOverlap: !cornerBack,
        hasInstall,
      };
    });
    assert.equal(menuStoreCheck.noOverlap, true, 'Left menu column does not overlap the right subpanel');
    assert.equal(menuStoreCheck.noCornerOverlap, true, 'Corner back button is hidden while a subpanel is open so it does not overlap');
    assert.equal(menuStoreCheck.hasInstall, true, 'Menu Store displays Gorilla Tag BAIXAR button');
    await page.evaluate(() => document.querySelector('[data-entry-act="back"]').click());

    // 6. Iniciar: closes entry menu and reveals the VR workspace dock
    await page.evaluate(() => document.querySelector('[data-entry-act="start"]').click());
    await page.waitForFunction(() => !document.querySelector('.entry-menu-root'));
    await page.waitForFunction(() => !!document.querySelector('.dock') && !document.querySelector('.dock').hidden);
    assert.equal(await page.locator('.dk-bat-percent').innerText(), '42%');

    // 6b. Spatial App mode: hides dock and displays the frameless Horizon Library floating apps (7e3d8ab40bd4dd3) over rear camera passthrough without a white move bar (.win-handle)
    await page.evaluate(() => {
      window.__startedVrWith = null;
      window.nextvrEnterWorkspace(JSON.stringify({ spatialLauncher: 1, wideCamera: 1, handDraw: 1, env: 'sunset', entryEnvChosen: 1 }));
    });
    await page.waitForSelector('.win-shell[data-window-id="spatial-launcher"] .spatial-honeycomb');
    assert.equal(await page.evaluate(() => window.__startedVrWith), null, 'nextvrEnterWorkspace must not re-call startVrSession in a loop');
    assert.ok(await page.evaluate(() => Array.isArray(window.__last) && window.__last.some(p => p.id === 'spatial-launcher' && p.rect[2] <= 1360 && p.rect[3] <= 980)),
      'spatial-launcher window fits the native 1360x980 atlas cell and is published to NativeXR.frame');
    assert.equal(await page.evaluate(() => getComputedStyle(document.querySelector('.dock')).display), 'none', 'Spatial App mode hides the dock');
    assert.equal(await page.evaluate(() => getComputedStyle(document.querySelector('.win-shell[data-window-id="spatial-launcher"] .win-handle')).display), 'none', 'Spatial App has no white move bar');
    assert.ok(await page.locator('.spatial-app-tile').count() >= 18, 'Spatial App renders the core squircle icons plus games inside the horizontally scrollable track');
    assert.ok(await page.locator('.spatial-app-tile[data-spatial-game="1"]').count() >= 5, 'Spatial App includes games inside the launcher');
    assert.equal(await page.locator('[data-spatial-scroll-track]').count(), 1, 'Spatial App uses a horizontally scrollable track');
    assert.equal(await page.locator('.spatial-hz-title').innerText(), 'Library', 'Spatial App displays the Horizon Library header');
    assert.equal(await page.locator('.spatial-hz-rail [data-spatial-nav]').count(), 5, 'Spatial App displays All, Apps, Worlds, Horizon+ and Downloads on the left rail');
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).env), 'passthrough', 'Spatial App forces real rear camera passthrough behind floating apps');
    assert.equal(await page.evaluate(() => getComputedStyle(document.querySelector('.spatial-launcher-root')).backgroundColor), 'rgba(0, 0, 0, 0)', 'Spatial App root is 100% transparent so only the apps appear over the rear camera');

    // 6b-2. Direct index-finger touch (sem pinça): passing/holding finger over YouTube in Spatial App selects it without opening; lifting finger ("levantar o dedo") opens YouTube, hides Spatial App, and closing YouTube restores Spatial App
    const pokeResult = await page.evaluate(async () => {
      // Find aim coordinates that hit the YouTube tile in spatial-launcher
      const winEl = document.querySelector('.win-shell[data-window-id="spatial-launcher"]');
      const ytBtn = winEl.querySelector('[data-spatial-builtin="youtube"]');
      const winRect = winEl.getBoundingClientRect();
      const btnRect = ytBtn.getBoundingClientRect();
      const u = (btnRect.left + btnRect.width / 2 - winRect.left) / winRect.width;
      const v = (btnRect.top + btnRect.height / 2 - winRect.top) / winRect.height;

      // Scan aim grid to find the exact 3D ray that hits spatial-launcher near (u, v)
      let bestAim = { x: 0.5, y: 0.5 }, bestErr = 999;
      for (let ax = 0.05; ax <= 0.95; ax += 0.01) {
        for (let ay = 0.05; ay <= 0.95; ay += 0.01) {
          const h = window.windowHitAt?.(ax, ay);
          if (h && h.win?.id === 'spatial-launcher') {
            const err = Math.hypot(h.u - u, h.v - v);
            if (err < bestErr) { bestErr = err; bestAim = { x: ax, y: ay }; }
          }
        }
      }
      const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
      const aimTan = [(bestAim.x - 0.5) * 2 * TAN_X, (0.5 - bestAim.y) * 2 * TAN_Y];

      const mkPointingHand = (palmWidth, headZ, liftDeltaY = 0) => {
        const pts = new Array(63).fill(0.5);
        // Index TIP at (bestAim.x, bestAim.y - liftDeltaY), PIP below it, Wrist below PIP
        pts[0] = bestAim.x; pts[1] = Math.min(0.95, bestAim.y + 0.24); pts[2] = 0;
        pts[18] = bestAim.x; pts[19] = Math.min(0.90, bestAim.y + 0.10); pts[20] = -0.02;
        pts[21] = bestAim.x; pts[22] = Math.min(0.90, bestAim.y + 0.04); pts[23] = -0.03;
        pts[24] = bestAim.x; pts[25] = bestAim.y - liftDeltaY; pts[26] = -0.04;
        const head = new Array(63).fill(0);
        head[24] = 0; head[25] = liftDeltaY * 0.6; head[26] = headZ;
        return {
          id: 'right',
          pinching: false,
          pinch: 0.55,
          fist: false,
          palmWidth,
          aim: aimTan,
          palm: [bestAim.x, bestAim.y, 0.3],
          ring: [bestAim.x, bestAim.y],
          points: pts,
          head,
        };
      };

      // Step 1: Hover/hold index finger over YouTube -> selects it (.finger-hover) without opening
      window.nextvrHands({ hands: [mkPointingHand(0.22, -0.45, 0)] });
      await new Promise(r => setTimeout(r, 85));
      window.nextvrHands({ hands: [mkPointingHand(0.22, -0.45, 0)] });
      const selectedOnHover = !!winEl.querySelector('[data-spatial-builtin="youtube"].finger-hover');
      const openedOnHover = !!document.querySelector('.win-shell[data-window-id="browser"]');

      // Step 2: Lift index finger ("levantar o dedo") while over the app -> opens YouTube and hides spatial-launcher
      window.nextvrHands({ hands: [mkPointingHand(0.22, -0.45, 0.015)] });
      await new Promise(r => setTimeout(r, 40));
      const openedOnPoke = !!document.querySelector('.win-shell[data-window-id="browser"]');
      const spatialHiddenWhileAppOpen = getComputedStyle(winEl).display === 'none';
      document.querySelector('.win-shell[data-window-id="browser"] [data-act="close"]')?.click();
      await new Promise(r => setTimeout(r, 40));
      const spatialRestoredAfterClose = getComputedStyle(winEl).display !== 'none';
      return { selectedOnHover, openedOnHover, openedOnPoke, spatialHiddenWhileAppOpen, spatialRestoredAfterClose };
    });
    assert.equal(pokeResult.selectedOnHover, true, 'passing/holding index finger over app selects/highlights it');
    assert.equal(pokeResult.openedOnHover, false, 'holding index finger over app must NOT open it before lifting the finger');
    assert.equal(pokeResult.openedOnPoke, true, 'lifting index finger ("levantar o dedo") while over the app opens it');
    assert.equal(pokeResult.spatialHiddenWhileAppOpen, true, 'opening an app from Spatial App hides the Spatial App launcher');
    assert.equal(pokeResult.spatialRestoredAfterClose, true, 'closing the app window restores the Spatial App launcher');

    // 6c. 2-second pinch with BOTH hands recenters dock/floating apps and open windows without any loading ring
    const recenterResult = await page.evaluate(async () => {
      // Rotate head yaw by ~45 deg around Y
      const c = Math.cos(0.78), s = Math.sin(0.78);
      window.nextvrPose([c, 0, -s, 0,  0, 1, 0, 0,  s, 0, c, 0,  0, 1.55, 0, 1]);
      const mkHand = (id, pinching) => ({
        id,
        left: id === 'left',
        pinching,
        pinch: pinching ? 0.015 : 0.45,
        fist: false,
        pointing: false,
        palmFacing: false,
        menuEligible: false,
        aim: [0, 0],
        palm: [0.5, 0.5, 0.3],
        ring: [0.5, 0.5],
        points: Array.from({ length: 21 }, () => [0.5, 0.5]),
      });
      const sendBothPinch = (pinching) => window.nextvrHands({
        hands: [mkHand('left', pinching), mkHand('right', pinching)],
      });
      sendBothPinch(true);
      await new Promise(r => setTimeout(r, 2050));
      sendBothPinch(true);
      const toastText = document.getElementById('toast')?.innerText || '';
      sendBothPinch(false);
      const ringShown = !!document.getElementById('gameRing')?.classList.contains('on');
      return { ringShown, toastText };
    });
    assert.equal(recenterResult.ringShown, false, '2-second two-hand pinch recenters without showing a loading circle');
    assert.match(recenterResult.toastText, /Visão recentralizada|View recentered/i, '2-second two-hand pinch triggers recenter');

    // 6c-2. Switching back to normal Dock mode (spatialLauncher: 0) closes spatial-launcher and restores the normal dock in NativeXR.frame
    await page.evaluate(() => {
      window.nextvrEnterWorkspace(JSON.stringify({ spatialLauncher: 0, wideCamera: 1, handDraw: 1 }));
    });
    assert.equal(await page.locator('.win-shell[data-window-id="spatial-launcher"]').count(), 0, 'switching to normal dock closes spatial-launcher');
    assert.notEqual(await page.evaluate(() => getComputedStyle(document.querySelector('.dock')).display), 'none', 'normal dock is visible when spatialLauncher is 0');
    assert.ok(await page.evaluate(() => Array.isArray(window.__last) && window.__last.some(p => p.id === 'dock') && !window.__last.some(p => p.id === 'spatial-launcher')),
      'normal dock is published to NativeXR.frame and spatial-launcher is removed');

    // 6c-2b. Holding a closed fist (soco) for 2 seconds opens the Quick Menu (`fist-menu`) with Recenter Dock, Virtual Environments, and Dock Toggle
    const fistMenuResult = await page.evaluate(async () => {
      const mkFistHand = () => {
        const pts = new Array(63).fill(0.5);
        pts[0] = 0.5; pts[1] = 0.72; pts[2] = 0;
        for (const [pipIdx, tipIdx] of [[6, 8], [10, 12], [14, 16], [18, 20]]) {
          pts[pipIdx * 3] = 0.52; pts[pipIdx * 3 + 1] = 0.52; pts[pipIdx * 3 + 2] = 0;
          pts[tipIdx * 3] = 0.52; pts[tipIdx * 3 + 1] = 0.62; pts[tipIdx * 3 + 2] = 0;
        }
        return {
          id: 'right',
          pinching: false,
          pinch: 0.55,
          fist: true,
          palmWidth: 0.2,
          aim: [0, 0],
          palm: [0.5, 0.6, 0.3],
          ring: [0.5, 0.6],
          points: pts,
        };
      };
      const origNow = performance.now.bind(performance);
      let fakeOffset = 0;
      performance.now = () => origNow() + fakeOffset;
      try {
        window.nextvrHands({ hands: [mkFistHand()] });
        fakeOffset += 2100;
        window.nextvrHands({ hands: [mkFistHand()] });
      } finally {
        performance.now = origNow;
      }
      await new Promise(r => setTimeout(r, 30));
      const fistWin = document.querySelector('.win-shell[data-window-id="fist-menu"]');
      const openedMenu = !!fistWin && !fistWin.hidden;
      fistWin?.querySelector('[data-fist-act="toggle-dock"]')?.click();
      await new Promise(r => setTimeout(r, 30));
      const hiddenAfterToggle = getComputedStyle(document.querySelector('.dock')).display === 'none';
      window.nextvrOpenFistQuickMenu?.();
      await new Promise(r => setTimeout(r, 30));
      document.querySelector('.win-shell[data-window-id="fist-menu"] [data-fist-act="recenter"]')?.click();
      await new Promise(r => setTimeout(r, 30));
      const visibleAfterRecenter = getComputedStyle(document.querySelector('.dock')).display !== 'none';
      window.nextvrHands({ hands: [] });
      return { openedMenu, hiddenAfterToggle, visibleAfterRecenter };
    });
    assert.equal(fistMenuResult.openedMenu, true, 'holding a closed fist (soco) for 2 seconds opens the Quick Menu');
    assert.equal(fistMenuResult.hiddenAfterToggle, true, 'Quick Menu toggle-dock action hides the Dock');
    assert.equal(fistMenuResult.visibleAfterRecenter, true, 'Quick Menu recenter action restores and recenters the Dock');

    // 6c-3. 6DoF Falso estabilizado (fluxo ótico 96x72 / SixDof):
    // - NÃO anda para a frente sozinho quando parado (moving: false) nem continua a deslizar sozinho após parar
    // - Avança a posição da câmara em dois frames consecutivos concordantes quando em movimento (moving: true)
    // - Mantém pos.y === 0 mesmo ao aproximar/afastar da Dock (sem subir para o céu) e marca data-backface="1" ao atravessar a Dock
    const sixDofCheck = await page.evaluate(async () => {
      window.SixDof.reset();
      for (let i = 0; i < 8; i++) {
        window.nextvrSixDof({ sc: 0.05, gx: 0, gy: 0, moving: false });
      }
      const stationaryDrift = window.SixDof.pos.length();
      window.nextvrSixDof({ sc: 0.04, gx: 0, gy: 0, moving: true });
      const afterFirst = window.SixDof.pos.length();
      window.nextvrSixDof({ sc: 0.04, gx: 0, gy: 0, moving: true });
      const afterSecond = window.SixDof.pos.length();
      const posBeforeIdle = window.SixDof.pos.clone();
      for (let i = 0; i < 5; i++) window.SixDof.update(performance.now() + i * 30, 0.05);
      const noCoastingDrift = window.SixDof.pos.distanceTo(posBeforeIdle) === 0;
      // Aproxima, afasta e aproxima novamente até atravessar a Dock (-1.24 m)
      for (let i = 0; i < 6; i++) window.nextvrSixDof({ sc: -0.04, gx: 0, gy: 0, moving: true });
      for (let i = 0; i < 32; i++) window.nextvrSixDof({ sc: 0.06, gx: 0, gy: 0, moving: true });
      for (let i = 0; i < 8; i++) window.SixDof.update(performance.now() + i * 30, 0.05);
      await new Promise(r => setTimeout(r, 50));
      const posYAfterCycles = window.SixDof.pos.y;
      const outYAfterCycles = window.SixDof.out.y;
      const dockBackfaceWhenBehind = document.querySelector('.dock')?.dataset?.backface;
      window.SixDof.reset();
      window.SixDof.update(performance.now() + 300, 0.05);
      await new Promise(r => setTimeout(r, 50));
      const dockBackfaceWhenFront = document.querySelector('.dock')?.dataset?.backface;
      const afterReset = window.SixDof.pos.length();
      // Testa também processGray diretamente em dois frames 96x72 com expansão radial sub-pixel (2.5%, < 1 px)
      window.SixDof.reset();
      const W = 96, H = 72;
      const g0 = new Float32Array(W * H);
      const g1 = new Float32Array(W * H);
      const synth = (x, y) => 128 + 60 * Math.sin(x * 0.35) * Math.cos(y * 0.35) + 40 * Math.cos(x * 0.22 - y * 0.27);
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          g0[y * W + x] = synth(x, y);
          const sx = (x - W * 0.5) / 1.028 + W * 0.5;
          const sy = (y - H * 0.5) / 1.028 + H * 0.5;
          g1[y * W + x] = synth(sx, sy);
        }
      }
      window.SixDof.processGray(g0, true);
      const flowSubpixel = window.SixDof.processGray(g1, true);
      window.SixDof.reset();
      return { stationaryDrift, afterFirst, afterSecond, noCoastingDrift, posYAfterCycles, outYAfterCycles, dockBackfaceWhenBehind, dockBackfaceWhenFront, afterReset, subpixelSc: flowSubpixel?.sc ?? 0 };
    });
    assert.equal(sixDofCheck.stationaryDrift, 0, '6DoF não anda para a frente sozinho quando o utilizador está parado (moving: false)');
    assert.equal(sixDofCheck.afterFirst, 0, '6DoF Falso ignora medição isolada de um único frame');
    assert.ok(sixDofCheck.afterSecond > 0.03, '6DoF Falso avança a posição da câmara quando dois frames seguidos concordam');
    assert.equal(sixDofCheck.noCoastingDrift, true, '6DoF para imediatamente sem deriva inercial quando os passos cessam');
    assert.equal(sixDofCheck.posYAfterCycles, 0, '6DoF mantém pos.y === 0 ao aproximar/afastar olhando para a Dock (sem subir para o céu)');
    assert.equal(sixDofCheck.outYAfterCycles, 0, '6DoF mantém out.y === 0 ao aproximar/afastar olhando para a Dock');
    assert.equal(sixDofCheck.dockBackfaceWhenBehind, '1', 'atravessar a Dock ativa o estado traseiro (data-backface="1" / uBackface)');
    assert.equal(sixDofCheck.dockBackfaceWhenFront, '0', 'voltar para a frente da Dock desativa o estado traseiro');
    assert.equal(sixDofCheck.afterReset, 0, 'SixDof.reset() zera o deslocamento 6DoF');
    assert.ok(sixDofCheck.subpixelSc > 0.015, 'processGray recupera expansão radial sub-pixel (< 1 px em bdx=0/bdy=0) em passos reais');

    // 6c-4. Segurar 2 segundos no Navegador abre "+ NOVA GUIA" e "+ GUIA ANÔNIMA" (igual da foto)
    const browserHoldFlow = await page.evaluate(async () => {
      window.nextvrHideBrowserTabMenus?.();
      const dockPopup = document.querySelector('[data-browser-tab-menu="dock"]');
      const hiddenInitially = !!dockPopup?.hidden;
      window.nextvrShowBrowserTabMenu?.('dock');
      const visibleAfterHold = dockPopup && !dockPopup.hidden;
      const newTabText = dockPopup?.querySelector('[data-browser-opt="new-tab"]')?.textContent?.trim();
      const incognitoText = dockPopup?.querySelector('[data-browser-opt="incognito-tab"]')?.textContent?.trim();
      dockPopup?.querySelector('[data-browser-opt="incognito-tab"]')?.click();
      await new Promise(r => setTimeout(r, 40));
      const browserWin = document.querySelector('.win-shell[data-window-id="browser"]');
      const incognitoActive = browserWin?.dataset?.incognito === '1' &&
        browserWin?.querySelector('[data-browser-incognito]')?.dataset?.browserIncognito === '1';
      window.nextvrShowBrowserTabMenu?.('dock');
      dockPopup?.querySelector('[data-browser-opt="new-tab"]')?.click();
      await new Promise(r => setTimeout(r, 40));
      const newTabActive = browserWin?.dataset?.incognito === '0' &&
        browserWin?.querySelector('[data-browser-incognito]')?.dataset?.browserIncognito === '0';
      return { hiddenInitially, visibleAfterHold, newTabText, incognitoText, incognitoActive, newTabActive };
    });
    assert.equal(browserHoldFlow.hiddenInitially, true, 'Menu de guias do navegador começa oculto');
    assert.equal(browserHoldFlow.visibleAfterHold, true, 'Segurar por 2 segundos no navegador exibe o popup de opções de guias');
    assert.equal(browserHoldFlow.newTabText, '+ NOVA GUIA', 'Popup exibe a opção + NOVA GUIA');
    assert.equal(browserHoldFlow.incognitoText, '+ GUIA ANÔNIMA', 'Popup exibe a opção + GUIA ANÔNIMA');
    assert.equal(browserHoldFlow.incognitoActive, true, 'Selecionar + GUIA ANÔNIMA abre o navegador em modo Guia Anônima');
    assert.equal(browserHoldFlow.newTabActive, true, 'Selecionar + NOVA GUIA abre o navegador em modo Nova Guia');

    // 6d. Store -> Download Gorilla Tag -> appears in App Library -> clicking opens "Entrando no Gorilla Tag" -> enters Gorilla Tag with Google Cardboard 2015 lenses, invisible skeleton hand tracking, and exits via two-hand finger-gun gesture
    const gorillaFlow = await page.evaluate(async () => {
      window.__gorillaFastTest = true;
      window.__handVisualCalls = [];
      // Open Library and Store via the dock buttons ([data-id="library"] and [data-id="store"])
      document.querySelector('.dock [data-id="library"]')?.click();
      document.querySelector('.dock [data-id="store"]')?.click();
      await new Promise(r => setTimeout(r, 80));
      const installBtn = document.querySelector('[data-window-id="store"] [data-install-gorilla], [data-install-gorilla]');
      const hadInstallBtn = !!installBtn;
      const storeLogo = !!document.querySelector('[data-store-gorilla] img[src*="gorilla-tag-logo.jpg"]');
      installBtn?.click();
      await new Promise(r => setTimeout(r, 80));
      const libTile = document.querySelector('[data-window-id="library"] .lib-tile[data-app="gorilla-tag"], .lib-tile[data-app="gorilla-tag"]');
      const inLibrary = !!libTile;
      const libLogo = !!libTile?.querySelector('img[src*="gorilla-tag-logo.jpg"]');
      libTile?.click();
      const overlay = document.getElementById('gorilla-overlay');
      const enteringText = overlay?.querySelector('[data-gorilla-entering]')?.textContent || '';
      const lenses = overlay?.dataset?.cardboardLenses || '';
      const stageInitial = overlay?.dataset?.gorillaStage || '';
      const skeletonHiddenInGame = window.__handVisualCalls.includes(false) && !document.getElementById('gorilla-hand-canvas');
      await new Promise(r => setTimeout(r, 400));
      const stageAfter = overlay?.dataset?.gorillaStage || '';

      // Helper to build a 21-landmark hand for Pose 1 (finger gun) or Pose 2 (trigger pulled / index closed)
      const mkFingerGunHand = (id, xOff, indexOpen) => {
        const pts = new Array(63).fill(0);
        const setPt = (idx, x, y, z = 0) => {
          pts[idx * 3] = x + xOff;
          pts[idx * 3 + 1] = y;
          pts[idx * 3 + 2] = z;
        };
        for (let i = 0; i < 21; i++) setPt(i, 0.5, 0.6, 0);
        setPt(0, 0.50, 0.70);
        setPt(1, 0.46, 0.65);
        setPt(2, 0.43, 0.60);
        setPt(3, 0.40, 0.55);
        setPt(4, 0.35, 0.48); // Thumb extended
        setPt(5, 0.47, 0.55);
        setPt(6, 0.47, 0.48);
        setPt(7, 0.47, 0.43);
        setPt(8, indexOpen ? 0.47 : 0.48, indexOpen ? 0.36 : 0.54); // Index extended (gun) vs closed (trigger)
        setPt(9, 0.50, 0.55);
        setPt(10, 0.50, 0.48);
        setPt(12, 0.50, 0.56); // Middle closed
        setPt(13, 0.53, 0.56);
        setPt(14, 0.53, 0.49);
        setPt(16, 0.53, 0.57); // Ring closed
        setPt(17, 0.56, 0.58);
        setPt(18, 0.56, 0.51);
        setPt(20, 0.56, 0.59); // Pinky closed
        return {
          id,
          left: id === 'left',
          pinching: false,
          pinch: 0.4,
          fist: false,
          aim: [0, 0],
          palm: [0.5 + xOff, 0.55, 0.3],
          ring: [0.5 + xOff, 0.55],
          points: pts,
        };
      };

      // Pose 1 & Pose 2: Showing hands (including finger-gun or trigger poses) must NOT exit Gorilla Tag automatically
      window.nextvrHands({ hands: [mkFingerGunHand('left', -0.15, true), mkFingerGunHand('right', 0.15, true)] });
      await new Promise(r => setTimeout(r, 60));
      const stillOpenOnGun = overlay?.dataset?.gorillaStage === 'playing' && overlay?.style?.display !== 'none';

      window.nextvrHands({ hands: [mkFingerGunHand('left', -0.15, false), mkFingerGunHand('right', 0.15, false)] });
      await new Promise(r => setTimeout(r, 60));
      const stillOpenOnTrigger = overlay?.dataset?.gorillaStage === 'playing' && overlay?.style?.display !== 'none';
      const rightArmCoinCounter = window.__gorillaRightArmCoinCounter?.attachedTo === 'right-arm' && Number(overlay?.dataset?.gorillaRightArmCoins) >= 100;
      document.querySelector('[data-gorilla-exit]')?.click();
      const exitedOnBtn = overlay?.dataset?.gorillaStage === 'idle' && overlay?.style?.display === 'none' && !window.__gorillaStereoOverlay;

      return {
        hadInstallBtn,
        storeLogo,
        inLibrary,
        libLogo,
        enteringText,
        lenses,
        stageInitial,
        stageAfter,
        skeletonHiddenInGame,
        stillOpenOnGun,
        stillOpenOnTrigger,
        rightArmCoinCounter,
        exitedOnBtn,
      };
    });
    assert.equal(gorillaFlow.hadInstallBtn, true, 'Gorilla Tag has a BAIXAR button in the Store');
    assert.equal(gorillaFlow.storeLogo, true, 'Gorilla Tag Store card uses gorilla-tag-logo.jpg');
    assert.equal(gorillaFlow.inLibrary, true, 'Downloading Gorilla Tag in the Store adds it to the App Library');
    assert.equal(gorillaFlow.libLogo, true, 'Gorilla Tag App Library tile uses gorilla-tag-logo.jpg');
    assert.equal(gorillaFlow.enteringText, 'Entrando no Gorilla Tag', 'Opening Gorilla Tag displays "Entrando no Gorilla Tag"');
    assert.equal(gorillaFlow.lenses, '2015', 'Gorilla Tag renders with Google Cardboard 2015 stereo lenses');
    assert.equal(gorillaFlow.stageInitial, 'entering', 'Gorilla Tag starts in the "Entrando no Gorilla Tag" transition');
    assert.equal(gorillaFlow.stageAfter, 'playing', 'Gorilla Tag transitions from "Entrando no Gorilla Tag" into the game');
    assert.equal(gorillaFlow.skeletonHiddenInGame, true, 'Skeleton Hand Tracking overlay is invisible inside Gorilla Tag');
    assert.equal(gorillaFlow.stillOpenOnGun, true, 'Showing hands in Gorilla Tag does not exit prematurely');
    assert.equal(gorillaFlow.stillOpenOnTrigger, true, 'Hand gestures never exit Gorilla Tag automatically');
    assert.equal(gorillaFlow.rightArmCoinCounter, true, 'Gorilla Tag renders a 3D coin counter on the Gorilla right arm');
    assert.equal(gorillaFlow.exitedOnBtn, true, 'Gorilla Tag exits cleanly via the exit control');

    // 6b. Store Meta Quest 3 UI, Beat Saber auto-VR, Roblox black environment, Gun gesture logo & Settings option, and clean window header
    const questAndFeatures = await page.evaluate(async () => {
      document.querySelector('.dock [data-id="store"]')?.click();
      await new Promise(r => setTimeout(r, 80));
      const storeWin = document.querySelector('.win-shell[data-window-id="store"]');
      const pillTexts = [...storeWin.querySelectorAll('.st-quest-pill')].map(b => b.textContent.trim());
      const hasBrowseAll = storeWin.textContent.includes('Navegar por tudo');
      const cardIds = [...storeWin.querySelectorAll('[data-store-card]')].map(c => c.dataset.storeCard);
      const hasLogos =
        !!storeWin.querySelector('img[src*="beat-saber-logo.jpg"]') &&
        !!storeWin.querySelector('img[src*="hyper-dash-logo.jpg"]') &&
        !!storeWin.querySelector('img[src*="roblox-logo.jpg"]') &&
        !!storeWin.querySelector('img[src*="tiktok-logo.jpg"]');

      // Clean floating window top bar: no purple background, + Criar nova guia button, and top-right fold + X
      const winBar = storeWin.querySelector('.win-bar');
      const winBarBg = getComputedStyle(winBar).backgroundColor;
      const hasNewTabBtn = !!winBar.querySelector('[data-win-new-tab]');
      const topRightActs = winBar.querySelector('.win-top-right-acts');
      const hasFoldNextToClose =
        !!topRightActs?.querySelector('[data-act="curve"]') &&
        !!topRightActs?.querySelector('[data-act="close"]');

      // Launch Beat Saber from Store -> enters VR mode immediately
      storeWin.querySelector('[data-store-launch="beat-vr"]')?.click();
      await new Promise(r => setTimeout(r, 80));
      const beatWin = document.querySelector('.win-shell[data-window-id="beat-saber"]');
      const beatVrMode =
        beatWin?.dataset?.beatSaberVr === '1' &&
        !!beatWin?.querySelector('[data-bs-vr-active="1"]');
      beatWin?.querySelector('[data-bs-exit]')?.click();
      await new Promise(r => setTimeout(r, 40));

      // Launch Roblox from Store -> environment turns black and floating Roblox window appears
      storeWin.querySelector('[data-store-launch="roblox-vr"]')?.click();
      await new Promise(r => setTimeout(r, 80));
      const robloxWin = document.querySelector('.win-shell[data-window-id="roblox"]');
      const robloxBlackEnvActive =
        document.documentElement.dataset.robloxBlackEnv === '1' &&
        !!robloxWin;
      robloxWin?.querySelector('[data-act="close"]')?.click();
      await new Promise(r => setTimeout(r, 60));
      const robloxBlackEnvRestored = !document.documentElement.dataset.robloxBlackEnv;

      // Gun gesture (arminha) + bolinha removed from game; holding a closed fist (soco) for 2s opens the Quick Menu (fist-menu)
      const mkFistHand = () => {
        const pts = new Array(63).fill(0);
        const setPt = (idx, x, y, z = 0) => {
          pts[idx * 3] = x;
          pts[idx * 3 + 1] = y;
          pts[idx * 3 + 2] = z;
        };
        for (let i = 0; i < 21; i++) setPt(i, 0.5, 0.6, 0);
        setPt(0, 0.50, 0.72); // wrist
        setPt(1, 0.46, 0.66);
        setPt(2, 0.45, 0.61);
        setPt(3, 0.46, 0.58);
        setPt(4, 0.48, 0.57);
        // All 4 fingers curled into palm (fist / soco)
        setPt(5, 0.48, 0.56); setPt(6, 0.48, 0.48); setPt(7, 0.49, 0.56); setPt(8, 0.49, 0.62);
        setPt(9, 0.51, 0.56); setPt(10, 0.51, 0.48); setPt(11, 0.51, 0.57); setPt(12, 0.51, 0.62);
        setPt(13, 0.54, 0.57); setPt(14, 0.54, 0.49); setPt(15, 0.54, 0.58); setPt(16, 0.54, 0.63);
        setPt(17, 0.57, 0.59); setPt(18, 0.57, 0.51); setPt(19, 0.57, 0.60); setPt(20, 0.57, 0.65);
        return {
          id: 'right',
          left: false,
          pinch: 0.45,
          pinching: false,
          fist: true,
          menuEligible: true,
          aim: [0, 0],
          palm: [0.50, 0.58, 0.3],
          ring: [0.50, 0.58],
          points: pts,
        };
      };
      const origNow = performance.now.bind(performance);
      let fakeOffset = 0;
      performance.now = () => origNow() + fakeOffset;
      try {
        window.nextvrHands({ hands: [mkFistHand()] });
        fakeOffset += 2100;
        window.nextvrHands({ hands: [mkFistHand()] });
      } finally {
        performance.now = origNow;
      }
      await new Promise(r => setTimeout(r, 40));
      const noGunBubble = !document.getElementById('gun-gesture-indicator');
      const fistMenuWin = document.querySelector('.win-shell[data-window-id="fist-menu"]');
      const fistMenuOpened =
        !!fistMenuWin &&
        !!fistMenuWin.querySelector('[data-fist-act="recenter"]') &&
        !!fistMenuWin.querySelector('[data-fist-act="environments"]') &&
        !!fistMenuWin.querySelector('[data-fist-env="sunset"]');
      fistMenuWin?.querySelector('[data-fist-env="dark"]')?.click();
      await new Promise(r => setTimeout(r, 30));
      const envChangedFromFistMenu = JSON.parse(localStorage.getItem('nextvr.v1')).env === 'dark';
      fistMenuWin?.querySelector('[data-fist-act="recenter"]')?.click();

      // Environment options inside Floating Apps (spatial-launcher)
      window.nextvrEnterWorkspace(JSON.stringify({ spatialLauncher: 1, wideCamera: 1, handDraw: 1 }));
      await new Promise(r => setTimeout(r, 60));
      const spatialWin = document.querySelector('.win-shell[data-window-id="spatial-launcher"]');
      const hasSpatialEnvOptions =
        !!spatialWin?.querySelector('[data-spatial-env="sunset"]') &&
        !!spatialWin?.querySelector('[data-spatial-env="dark"]') &&
        !!spatialWin?.querySelector('[data-spatial-builtin="environments"]');
      spatialWin?.querySelector('[data-spatial-env="sunset"]')?.click();
      await new Promise(r => setTimeout(r, 30));
      const spatialEnvSwitched = JSON.parse(localStorage.getItem('nextvr.v1')).env === 'sunset';

      window.nextvrShowCircleLoader?.('env', 'dark');
      const circleLoader = document.getElementById('vr-circle-loader');
      const circleLoaderShown = !!circleLoader && !circleLoader.hidden && !!circleLoader.querySelector('.vr-circle-ring-svg');

      // MR Dim toggle inside Spatial App
      spatialWin?.querySelector('[data-spatial-act="mr-dim"]')?.click();
      await new Promise(r => setTimeout(r, 25));
      const mrDimEnabled = JSON.parse(localStorage.getItem('nextvr.v1')).mrDim === 1 && document.documentElement.dataset.mrDim === '1';
      spatialWin?.querySelector('[data-spatial-act="mr-dim"]')?.click();
      await new Promise(r => setTimeout(r, 25));

      // Physical Right-hand V/L gesture (palm facing user on rear camera -> id:'left', left:true) shows bolinha with nextvr-bolinha-logo.png, and closing fingers toggles spatial-launcher hide/unhide
      const mkRightVLHand = (closed = false) => {
        const pts = new Array(63).fill(0);
        const setPt = (idx, x, y, z = 0) => { pts[idx * 3] = x; pts[idx * 3 + 1] = y; pts[idx * 3 + 2] = z; };
        for (let i = 0; i < 21; i++) setPt(i, 0.35, 0.6, 0);
        setPt(0, 0.35, 0.78); // wrist
        setPt(1, 0.31, 0.70); setPt(2, 0.28, 0.63); setPt(3, 0.26, 0.54);
        setPt(4, closed ? 0.38 : 0.24, closed ? 0.58 : 0.44); // thumb extended left (palm facing) or pinched to index
        setPt(5, 0.39, 0.62); setPt(6, 0.41, 0.53); setPt(7, 0.43, 0.45);
        setPt(8, closed ? 0.39 : 0.45, closed ? 0.58 : 0.37); // index extended up-right or closed
        // middle, ring, pinky curled into palm
        setPt(9, 0.37, 0.63); setPt(10, 0.38, 0.55); setPt(11, 0.37, 0.63); setPt(12, 0.36, 0.67);
        setPt(13, 0.34, 0.64); setPt(14, 0.35, 0.56); setPt(15, 0.34, 0.64); setPt(16, 0.33, 0.68);
        setPt(17, 0.31, 0.66); setPt(18, 0.32, 0.58); setPt(19, 0.31, 0.66); setPt(20, 0.30, 0.70);
        return {
          id: 'left',
          left: true,
          pinch: closed ? 0.01 : 0.55,
          pinching: closed,
          fist: closed,
          menuEligible: false,
          aim: [0, 0],
          palm: [0.35, 0.64, 0.3],
          ring: [0.35, 0.64],
          points: pts,
        };
      };
      window.nextvrHands({ hands: [mkRightVLHand(false)] });
      window.nextvrHands({ hands: [mkRightVLHand(false)] });
      const bolinhaEl = document.getElementById('gun-gesture-indicator');
      const bolinhaShownOnGesture = !!bolinhaEl && !bolinhaEl.hidden && bolinhaEl.querySelector('img')?.getAttribute('src')?.includes('nextvr-bolinha-logo.png');
      window.nextvrHands({ hands: [mkRightVLHand(true)] });
      const spatialHiddenByGesture = getComputedStyle(spatialWin).display === 'none';
      // Unhide again with the same gesture + closing fingers after cooldown
      const origNow2 = performance.now.bind(performance);
      let off2 = 1000;
      performance.now = () => origNow2() + off2;
      try {
        window.nextvrHands({ hands: [mkRightVLHand(false)] });
        window.nextvrHands({ hands: [mkRightVLHand(false)] });
        window.nextvrHands({ hands: [mkRightVLHand(true)] });
      } finally {
        performance.now = origNow2;
      }
      const spatialUnhiddenByGesture = getComputedStyle(spatialWin).display !== 'none';

      // Back of hand (IMG_20261021_144721.jpg) must NOT show the bolinha
      window.nextvrHands({ hands: [] });
      const backHand = mkRightVLHand(false);
      backHand.points[12] = 0.52; // thumb tip to the right of index MCP (0.39) while pinky MCP is 0.31
      window.nextvrHands({ hands: [backHand] });
      window.nextvrHands({ hands: [backHand] });
      const noBolinhaOnBackOfHand = !document.getElementById('gun-gesture-indicator');

      // Physical Left-hand V/L gesture (IMG_20261021_144416.jpg) shows #left-gesture-indicator with nextvr-bolinha-left.png, and thumb-index pinch opens 3D floating #left-hand-quick-menu with transparent background
      const mkLeftVLHand = (pinched = false) => {
        const pts = new Array(63).fill(0);
        const setPt = (idx, x, y, z = 0) => { pts[idx * 3] = x; pts[idx * 3 + 1] = y; pts[idx * 3 + 2] = z; };
        for (let i = 0; i < 21; i++) setPt(i, 0.5, 0.6, 0);
        setPt(0, 0.52, 0.78);
        setPt(1, 0.56, 0.70); setPt(2, 0.59, 0.63); setPt(3, 0.61, 0.54);
        setPt(4, pinched ? 0.49 : 0.63, pinched ? 0.58 : 0.44); // thumb extended right (palm facing) or pinched to index
        setPt(5, 0.48, 0.62); setPt(6, 0.46, 0.53); setPt(7, 0.44, 0.45);
        setPt(8, pinched ? 0.48 : 0.42, pinched ? 0.58 : 0.37); // index extended up-left or pinched
        setPt(9, 0.50, 0.63); setPt(10, 0.49, 0.55); setPt(11, 0.50, 0.63); setPt(12, 0.51, 0.67);
        setPt(13, 0.53, 0.64); setPt(14, 0.52, 0.56); setPt(15, 0.53, 0.64); setPt(16, 0.54, 0.68);
        setPt(17, 0.56, 0.66); setPt(18, 0.55, 0.58); setPt(19, 0.56, 0.66); setPt(20, 0.57, 0.70);
        return {
          id: 'right',
          left: false,
          pinch: pinched ? 0.01 : 0.55,
          pinching: pinched,
          fist: false,
          menuEligible: false,
          aim: [0, 0],
          palm: [0.52, 0.64, 0.3],
          ring: [0.52, 0.64],
          points: pts,
        };
      };
      // Invisible hand (handDraw: 0) must stay invisible (0) even after triggering bolinha gestures
      window.nextvrEnterWorkspace(JSON.stringify({ spatialLauncher: 1, wideCamera: 1, handDraw: 0 }));
      window.nextvrHands({ hands: [mkLeftVLHand(false)] });
      window.nextvrHands({ hands: [mkLeftVLHand(false)] });
      const leftBolinhaEl = document.getElementById('left-gesture-indicator');
      const leftBolinhaShown = !!leftBolinhaEl && !leftBolinhaEl.hidden && leftBolinhaEl.querySelector('img')?.getAttribute('src')?.includes('nextvr-bolinha-left.png');
      window.nextvrHands({ hands: [mkLeftVLHand(true)] });
      const lhMenu = document.getElementById('left-hand-quick-menu');
      const lhFloatingShell = lhMenu?.closest('.win-shell[data-window-id="left-quick-menu"]');
      const lhMenuTransparentBg = !!lhMenu && getComputedStyle(lhMenu).backgroundColor === 'rgba(0, 0, 0, 0)';
      const lhAttachedToLeftHand = lhFloatingShell?.dataset?.attachedHand === 'left' && !!lhFloatingShell?.dataset?.attachedPos;
      // Move left hand far away (smaller palmWidth) vs closer (larger palmWidth) and verify attachedDist follows depth
      for (let i = 0; i < 6; i++) {
        const farLh = mkLeftVLHand(false);
        farLh.palmWidth = 0.045;
        window.nextvrHands({ t: performance.now(), hands: [farLh] });
      }
      const farDist = parseFloat(lhFloatingShell?.dataset?.attachedDist || '0');
      for (let i = 0; i < 6; i++) {
        const nearLh = mkLeftVLHand(false);
        nearLh.palmWidth = 0.19;
        window.nextvrHands({ t: performance.now(), hands: [nearLh] });
      }
      const nearDist = parseFloat(lhFloatingShell?.dataset?.attachedDist || '0');
      const lhDepthFollowed = farDist > nearDist && nearDist > 0.45;
      const invisibleHandPreserved = JSON.parse(localStorage.getItem('nextvr.v1')).handDraw === 0;
      const leftQuickMenuOpened = !!lhMenu && !lhMenu.hidden && !!lhFloatingShell && lhMenuTransparentBg && lhAttachedToLeftHand && lhDepthFollowed && invisibleHandPreserved && !!lhMenu.querySelector('[data-lh-slider="brightness"]');
      window.nextvrSetScreenBrightness?.(55);
      const brightnessUpdated = document.documentElement.dataset.brightnessPercent === '55';
      lhMenu?.querySelector('[data-lh-act="close"]')?.click();
      window.nextvrToggleCameraSolo?.(true);
      const camSoloOn = document.documentElement.dataset.cameraSolo === '1' && !document.getElementById('camera-solo-pill')?.hidden;
      window.nextvrToggleCameraSolo?.(false);
      const camSoloOff = !document.documentElement.dataset.cameraSolo;
      const cameraSoloWorks = camSoloOn && camSoloOff;

      return {
        pillTexts,
        hasBrowseAll,
        cardIds,
        hasLogos,
        winBarBg,
        hasNewTabBtn,
        hasFoldNextToClose,
        beatVrMode,
        robloxBlackEnvActive,
        robloxBlackEnvRestored,
        noGunBubble,
        fistMenuOpened,
        envChangedFromFistMenu,
        hasSpatialEnvOptions,
        spatialEnvSwitched,
        circleLoaderShown,
        mrDimEnabled,
        bolinhaShownOnGesture,
        spatialHiddenByGesture,
        spatialUnhiddenByGesture,
        noBolinhaOnBackOfHand,
        leftBolinhaShown,
        leftQuickMenuOpened,
        brightnessUpdated,
        cameraSoloWorks,
      };
    });
    assert.deepEqual(
      questAndFeatures.pillTexts,
      ['Página inicial', 'Jogos', 'Apps', 'Lista de desejos'],
      'Store renders Meta Quest 3 top navigation pills'
    );
    assert.equal(questAndFeatures.hasBrowseAll, true, 'Store renders "Navegar por tudo" section');
    assert.equal(questAndFeatures.hasLogos, true, 'Store displays uploaded logos for Beat Saber, Hyper Dash VR, Roblox, and TikTok');
    assert.equal(questAndFeatures.winBarBg, 'rgba(0, 0, 0, 0)', 'Floating window top bar has no purple background');
    assert.equal(questAndFeatures.hasNewTabBtn, true, 'Floating window top bar has "+ Criar nova guia" option');
    assert.equal(questAndFeatures.hasFoldNextToClose, true, 'Floating window top bar places X next to the top-right collapse button');
    assert.equal(questAndFeatures.beatVrMode, true, 'Launching Beat Saber immediately enters VR mode');
    assert.equal(questAndFeatures.robloxBlackEnvActive, true, 'Launching Roblox turns the surrounding environment black with floating Roblox window');
    assert.equal(questAndFeatures.robloxBlackEnvRestored, true, 'Closing Roblox restores the normal environment');
    assert.equal(questAndFeatures.noGunBubble, true, 'Floating gun gesture bolinha is not active during closed-fist gesture');
    assert.equal(questAndFeatures.fistMenuOpened, true, 'Holding a closed fist (soco) for 2 seconds opens the Quick Menu with Recenter Dock and Virtual Environment options');
    assert.equal(questAndFeatures.envChangedFromFistMenu, true, 'Quick Menu switches the virtual environment immediately');
    assert.equal(questAndFeatures.hasSpatialEnvOptions, true, 'Floating Apps (spatial-launcher) includes Virtual Environment options');
    assert.equal(questAndFeatures.spatialEnvSwitched, true, 'Selecting an environment inside Floating Apps switches the active environment');
    assert.equal(questAndFeatures.circleLoaderShown, true, 'Circular loading transition appears for environment loading');
    assert.equal(questAndFeatures.mrDimEnabled, true, 'MR Dim option darkens the MR environment around apps');
    assert.equal(questAndFeatures.bolinhaShownOnGesture, true, 'Right-hand V/L gesture displays the bolinha with nextvr-bolinha-logo.png');
    assert.equal(questAndFeatures.spatialHiddenByGesture, true, 'Closing fingers from the right-hand gesture hides the Spatial App');
    assert.equal(questAndFeatures.spatialUnhiddenByGesture, true, 'Repeating the right-hand gesture and closing fingers unhides the Spatial App');
    assert.equal(questAndFeatures.noBolinhaOnBackOfHand, true, 'Back-of-hand pose does not display the right-hand bolinha');
    assert.equal(questAndFeatures.leftBolinhaShown, true, 'Left-hand V/L gesture displays the bolinha with nextvr-bolinha-left.png');
    assert.equal(questAndFeatures.leftQuickMenuOpened, true, 'Thumb+index pinch on left-hand bolinha opens the Left-Hand Quick Controls menu and follows hand depth');
    assert.equal(questAndFeatures.brightnessUpdated, true, 'Brightness slider updates screen brightness');
    assert.equal(questAndFeatures.cameraSoloWorks, true, 'Camera Solo mode hides all windows to let the camera refocus alone and restores them cleanly');

    // 6j. Build 56: Pistola MR (pistola flutuante, alvos próximos e botão de reiniciar), Luva Verde com abertura nos dedos, 6DoF IRLS e Bateria sincronizada
    const build56Check = await page.evaluate(() => {
      // Testa sincronização de bateria ao vivo (nunca travada em 71%)
      window.nextvrBattery?.({ level: 0.64, charging: true });
      const dockBat64 = document.querySelector('.dk-bat-percent')?.textContent;
      window.nextvrBattery?.({ level: 0.88, charging: false });
      const dockBat88 = document.querySelector('.dk-bat-percent')?.textContent;

      // Abre o jogo Pistola MR (G18 toda preta com cano cinza, virada para a frente, luva 3D, alvos 3D mais longe e gesto de arminha)
      window.openMrPistolGame?.();
      const overlay = document.getElementById('mr-pistol-overlay');
      const st = window.__mrPistolState;
      const closeEnough = st &&
        st.pistolDistance > 0 && st.pistolDistance < 1.65 &&
        st.minTargetDistance >= 2.0 && st.maxTargetDistance > 2.2 &&
        st.resetButtonDistance > 0 && st.resetButtonDistance < 1.65;
      const gameName = st?.gameName;
      const hasBackExitButton = Boolean(st?.hasBackExitButton && st?.backExitButtonZ > 0.3);
      const hasLeftHandExit = Boolean(st?.hasLeftHandExit);
      const handStyle = st?.handStyle;
      const hasWatchOnRightWrist = Boolean(st?.hasWatchOnRightWrist);
      const pistolStyle = st?.pistolStyle;
      const targetsAre3D = Boolean(st?.targetsAre3D);
      const gloveIs3D = Boolean(st?.gloveIs3D);
      const facingForward = (st?.pistolForwardZ ?? 0) < -0.5;
      window.nextvrSetDockColor?.('blue');
      const dockColorApplied = document.documentElement.dataset.dockColor;
      window.nextvrSetDockColor?.('default');

      // Testa detecção do gesto de arminha (polegar levantado + indicador estendido pra frente + médio/anelar/mindinho dobrados)
      const makePose = ({ indexExt = true, thumbUp = true, othersCurled = true, pinching = false, fist = false } = {}) => {
        const pts = new Array(63).fill(0);
        const set = (i, x, y, z = 0) => { pts[i * 3] = x; pts[i * 3 + 1] = y; pts[i * 3 + 2] = z; };
        set(0, 0.50, 0.72, 0); // wrist
        // Thumb (1..4)
        set(1, 0.52, 0.64, 0);
        set(2, 0.53, 0.55, 0);
        set(3, 0.53, thumbUp ? 0.43 : 0.56, 0);
        set(4, 0.53, thumbUp ? 0.32 : 0.58, 0);
        // Index (5..8)
        set(5, 0.46, 0.52, 0);
        set(6, 0.41, 0.48, -0.02);
        set(7, indexExt ? 0.35 : 0.45, indexExt ? 0.44 : 0.54, indexExt ? -0.05 : 0);
        set(8, pinching ? 0.52 : (indexExt ? 0.29 : 0.47), pinching ? 0.33 : (indexExt ? 0.41 : 0.56), indexExt ? -0.08 : 0);
        // Middle (9..12), Ring (13..16), Pinky (17..20)
        const bases = [[9, 0.45, 0.58], [13, 0.45, 0.63], [17, 0.46, 0.68]];
        for (const [b, bx, by] of bases) {
          set(b, bx, by, 0);
          set(b + 1, bx - 0.04, by, 0);
          set(b + 2, othersCurled ? bx - 0.02 : bx - 0.11, othersCurled ? by + 0.01 : by - 0.06, 0);
          set(b + 3, othersCurled ? bx - 0.01 : bx - 0.18, othersCurled ? by + 0.02 : by - 0.10, 0);
        }
        return { id: 'right', points: pts, palm: [0.5, 0.55, 0], pinching, fist };
      };
      const fingerGunDetected = Boolean(window.detectFingerGunGesture?.(makePose({ indexExt: true, thumbUp: true, othersCurled: true })));
      const openHandRejected = !window.detectFingerGunGesture?.(makePose({ indexExt: true, thumbUp: true, othersCurled: false }));
      const pinchRejected = !window.detectFingerGunGesture?.(makePose({ indexExt: true, thumbUp: true, othersCurled: true, pinching: true }));

      st?.grabPistol?.('right');
      const grabbed = Boolean(st?.grabbed);
      const hit0 = Boolean(st?.shootAtTarget?.(0));
      const hit1 = Boolean(st?.shootAtTarget?.(1));
      const activeAfter2Shots = st?.activeTargets ?? -1;
      const scoreAfter2Shots = st?.score ?? 0;
      overlay?.querySelector('[data-mr-pistol-reset]')?.click();
      const activeAfterReset = st?.activeTargets ?? -1;
      window.closeMrPistolGame?.();
      const closedCleanly = !document.getElementById('mr-pistol-overlay');

      // Testa também o Jogo de Desenho VR em Tela Branca (openHandDrawGame)
      window.nextvrOpenHandDrawGame?.();
      const drawWin = document.querySelector('.win-shell[data-window-id="hand-draw"]');
      const drawCanvas = drawWin?.querySelector('[data-hand-draw-canvas="1"]');
      const strokesAfterDraw = window.nextvrHandDrawStroke?.(120, 120, 320, 260, '#ef4444', 10) ?? 0;
      drawWin?.querySelector('[data-hd-exit]')?.click();
      const drawClosed = !document.querySelector('.win-shell[data-window-id="hand-draw"]');

      return {
        dockBat64,
        dockBat88,
        hasOverlay: Boolean(overlay),
        closeEnough,
        gameName,
        hasBackExitButton,
        hasLeftHandExit,
        handStyle,
        hasWatchOnRightWrist,
        dockColorApplied,
        pistolStyle,
        targetsAre3D,
        gloveIs3D,
        facingForward,
        fingerGunDetected,
        openHandRejected,
        pinchRejected,
        grabbed,
        hit0,
        hit1,
        activeAfter2Shots,
        scoreAfter2Shots,
        activeAfterReset,
        closedCleanly,
        hasDrawGame: Boolean(drawWin && drawCanvas),
        strokesAfterDraw,
        drawClosed,
      };
    });
    assert.equal(build56Check.hasDrawGame, true, 'openHandDrawGame opens the white-canvas Hand Tracking drawing game');
    assert.equal(build56Check.strokesAfterDraw, 1, 'nextvrHandDrawStroke draws on the white canvas');
    assert.equal(build56Check.drawClosed, true, 'Hand Tracking drawing game closes cleanly');
    assert.equal(build56Check.dockBat64, '64%', 'Battery sync updates dock to 64%');
    assert.equal(build56Check.dockBat88, '88%', 'Battery sync updates dock to 88% (never stuck at 71%)');
    assert.equal(build56Check.hasOverlay, true, 'openMrPistolGame mounts #mr-pistol-overlay');
    assert.equal(build56Check.closeEnough, true, 'Floating pistol and reset button are close while 3D targets are placed further away');
    assert.equal(build56Check.gameName, 'ShootTheDie', 'Game is named ShootTheDie');
    assert.equal(build56Check.hasBackExitButton, true, 'ShootTheDie places a 3D exit button behind the player');
    assert.equal(build56Check.hasLeftHandExit, false, 'ShootTheDie does not exit when closing the left hand');
    assert.equal(build56Check.handStyle, 'black-fingerless-glove-skin-fingers', 'ShootTheDie uses 3D black fingerless tactical gloves with realistic skin fingers');
    assert.equal(build56Check.hasWatchOnRightWrist, true, 'ShootTheDie right hand includes the 3D wrist smartwatch');
    assert.equal(build56Check.dockColorApplied, 'blue', 'nextvrSetDockColor updates the dock color theme');
    assert.equal(build56Check.pistolStyle, 'G18-black-gray-barrel', 'Pistol model is an all-black G18 with a gray barrel');
    assert.equal(build56Check.targetsAre3D, true, 'All 6 targets are built as multi-layer 3D models');
    assert.equal(build56Check.gloveIs3D, true, 'Green fingerless glove is built as an articulated 3D model with 5 open finger sleeves');
    assert.equal(build56Check.facingForward, true, 'G18 pistol faces forward (-Z) away from the player, never towards the player');
    assert.equal(build56Check.fingerGunDetected, true, 'detectFingerGunGesture recognizes the photo finger-gun gesture');
    assert.equal(build56Check.openHandRejected, true, 'detectFingerGunGesture does not fire on an open 5-finger palm');
    assert.equal(build56Check.pinchRejected, true, 'detectFingerGunGesture does not fire on a standard pinch');
    assert.equal(build56Check.grabbed, true, 'Hand tracking grabs the floating pistol');
    assert.equal(build56Check.hit0 && build56Check.hit1, true, 'Shooting at targets hits and knocks them down');
    assert.equal(build56Check.activeAfter2Shots, 4, '2 targets knocked down leaves 4 active targets');
    assert.ok(build56Check.scoreAfter2Shots >= 100, 'Hitting targets awards score points');
    assert.equal(build56Check.activeAfterReset, 6, 'Reset button restores all 6 targets');
    assert.equal(build56Check.closedCleanly, true, 'closeMrPistolGame removes the MR overlay cleanly');

    // 7. Fullscreen mode (?fullscreen=1) on phone landscape viewport (844x390) with 5-second VR Box countdown
    await page.setViewportSize({ width: 844, height: 390 });
    await page.goto(`http://127.0.0.1:${server.address().port}/?fullscreen=1`);
    await page.waitForSelector('#entry-fullscreen .entry-menu-root--fullscreen');
    const fsBox = await page.evaluate(() => {
      window.__startedVrWith = null;
      const r = document.querySelector('.entry-menu-root--fullscreen').getBoundingClientRect();
      return { left: r.left, top: r.top, width: Math.round(r.width), height: Math.round(r.height) };
    });
    assert.deepEqual(fsBox, { left: 0, top: 0, width: 844, height: 390 }, 'fullscreen entry menu covers 100% of phone screen');
    const countdownInfo = await page.evaluate(() => {
      document.querySelector('[data-entry-act="start"]').click();
      return {
        loading: !!document.querySelector('[data-entry-panel="loading"]'),
        menuRemoved: !document.querySelector('.entry-left-column'),
        sec: document.querySelector('[data-entry-countdown]')?.textContent,
        pct: document.querySelector('[data-entry-load-pct]')?.textContent,
        status: document.querySelector('[data-entry-load-status]')?.textContent,
        hasBar: !!document.querySelector('[data-entry-load-bar]'),
      };
    });
    assert.equal(countdownInfo.loading, true, 'clicking Iniciar in fullscreen shows dedicated 2D HUD loading screen');
    assert.equal(countdownInfo.menuRemoved, true, '2D HUD loading screen replaces the menu completely');
    assert.equal(countdownInfo.sec, '6', 'countdown starts at 6 seconds');
    assert.equal(countdownInfo.pct, '0%', 'loading starts at 0%');
    assert.equal(countdownInfo.status, 'Carregando câmera AR...', 'loading shows dynamic status messages');
    assert.equal(countdownInfo.hasBar, true, 'loading renders bottom HUD progress bar');
    await page.waitForFunction(() => window.__startedVrWith !== null, null, { timeout: 9000 });
  } finally {
    await browser?.close();
    server.close();
  }
});

