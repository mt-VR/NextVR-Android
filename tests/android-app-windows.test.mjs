import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

/*
 * The two halves of the Android app windows are written in two languages and cannot be compiled in
 * this environment (no JDK, no Android SDK), so their seam is asserted here: the names, tokens and
 * prefixes one side sends are the ones the other side reads. Everything in this file is a contract,
 * not an implementation detail — it is meant to fail loudly when one side is renamed alone.
 */

const read = path => readFile(path, 'utf8');

const JAVA = {
  activity: 'nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java',
  webSurface: 'nextvr-android/src/main/java/com/nextvr/app/WebSurface.java',
  window: 'nextvr-android/src/main/java/com/nextvr/app/apps/AppWindowController.java',
  display: 'nextvr-android/src/main/java/com/nextvr/app/apps/AppDisplayController.java',
  input: 'nextvr-android/src/main/java/com/nextvr/app/apps/AppInputController.java',
  session: 'nextvr-android/src/main/java/com/nextvr/app/apps/AppSession.java',
  spec: 'nextvr-android/src/main/java/com/nextvr/app/apps/AppDisplaySpec.java',
  shizuku: 'nextvr-android/src/main/java/com/nextvr/app/apps/ShizukuManager.java',
  service: 'nextvr-android/src/main/java/com/nextvr/app/apps/NextVrDisplayService.java',
  accessibility: 'nextvr-android/src/main/java/com/nextvr/app/apps/NextVrAccessibilityService.java',
  aidl: 'nextvr-android/src/main/aidl/com/nextvr/app/apps/IDisplayService.aidl',
  manifest: 'nextvr-android/src/main/AndroidManifest.xml',
  accessibilityXml: 'nextvr-android/src/main/res/xml/nextvr_accessibility_service.xml',
  mirrorService: 'nextvr-android/src/main/java/com/nextvr/app/apps/AppMirrorService.java',
  sessionManager: 'nextvr-android/src/main/java/com/nextvr/app/apps/AppSessionManager.java',
};
const WEB = {
  androidApps: 'web/src/android-apps.js',
  atlas: 'web/src/atlas.js',
  windows: 'web/src/windows.js',
  fit: 'web/src/display-fit.js',
  apps: 'web/src/apps.js',
};

test('the shell bridge exposes the app library and the app command channel', async () => {
  const activity = await read(JAVA.activity);
  assert.match(activity, /@JavascriptInterface public String appsLibrary\(/);
  assert.match(activity, /@JavascriptInterface public void appsCommand\(/);
  assert.match(activity, /window\.nextvrApps/);
  assert.match(activity, /public class NextVrActivity[^{]*implements[^{]*AppSurfaceHost/,
    'the activity is the GL-side surface host for app windows');
  assert.match(activity, /appWindows\.touch\(/);
  assert.match(activity, /appWindows\.text\(/);
  assert.match(activity, /REQUEST_PROJECTION|appDisplays\.onCaptureConsentResult/,
    'the MediaProjection consent result is routed back into the display controller');

  const web = await read(WEB.androidApps);
  assert.match(web, /window\.nextvrApps = applyState/);
  assert.match(web, /window\.NativeXR\?\.appsLibrary\?\./);
  assert.match(web, /window\.NativeXR\?\.appsCommand\?\./);
  assert.match(web, /dataset\.nativeApp = session\.pkg/);
});

test('the web sends exactly the commands the native side implements', async () => {
  const java = await read(JAVA.window);
  const switchBody = java.slice(java.indexOf('public void command(String json)'));
  const labels = [...switchBody.matchAll(/case "([a-z]+)":/g)].map(m => m[1]);
  const implemented = new Set(labels);
  assert.ok(implemented.size >= 8, `expected the full command list, got ${[...implemented]}`);
  // javac stops on a duplicate case label, and this environment has no javac: the list is checked
  // here so a copy-paste of a case cannot cost a CI round trip again.
  assert.equal(labels.length, implemented.size,
    `a case label is repeated: ${labels.filter((c, i) => labels.indexOf(c) !== i)}`);

  const web = await read(WEB.androidApps);
  const sent = new Set([...web.matchAll(/cmd: '([a-z]+)'/g)].map(m => m[1]));
  sent.add('hide');            // hideApp() builds its payload in one line, not as a literal
  for (const command of sent) assert.ok(implemented.has(command), `${command} is sent but not implemented`);
  for (const command of ['open', 'close', 'minimize', 'restore', 'focus', 'hide', 'sync', 'shizuku', 'refresh'])
    assert.ok(implemented.has(command), `${command} disappeared from the native switch`);
});

test('the state a session reports is one the shell knows how to draw', async () => {
  const session = await read(JAVA.session);
  const block = session.slice(session.indexOf('public enum State'), session.indexOf('public enum InputBackend'));
  const ids = [...block.matchAll(/\(\"([a-z_]+)\"\)/g)].map(m => m[1]);
  assert.deepEqual(ids, ['requested', 'creating', 'launching', 'running', 'suspended', 'stopped', 'failed']);

  const web = await read(WEB.androidApps);
  for (const id of ids) assert.ok(web.includes(`${id}: `) || web.includes(`'${id}'`), `${id} is handled by the shell`);
  assert.match(web, /s\.state === 'suspended'/, 'a minimized window leaves the arc but keeps its session');
  assert.match(web, /s\.state === 'stopped'/);
  assert.match(web, /states\[session\.state\]/);
  assert.match(web, /failed: session\.error \? sessionError\(session\)/, 'a failure shows the reason, never a blank window');
  assert.match(web, /app_not_running|shizuku_unavailable/, 'the reasons the native side reports are translated');
});

test('both sides agree the display surface of an app is "app:<package>"', async () => {
  const display = await read(JAVA.display);
  assert.match(display, /surfaceId\(String packageName\) \{ return "app:" \+ packageName; \}/);
  const atlas = await read(WEB.atlas);
  assert.match(atlas, /browser: 'app:' \+ a\.dataset\.nativeApp/);
  const windows = await read(WEB.windows);
  assert.match(windows, /const id = 'app:' \+ app\.dataset\.nativeApp;/);
  assert.match(windows, /el\?\.closest\('\[data-native-app\]'\)/);
  assert.ok(!windows.includes('clickThrough(app'),
    'an app window must never take the synthetic DOM-event path reserved for shell UI');
});

test('the app picture is fitted and the touch is normalized against the same rectangle', async () => {
  const atlas = await read(WEB.atlas);
  assert.match(atlas, /const fit = fitDisplay\(box\.width, box\.height, aspect\)/);
  assert.match(atlas, /uv: \[fit\.u0, fit\.v0, fit\.uw, fit\.vh\]/);
  const windows = await read(WEB.windows);
  assert.match(windows, /appHostPoint\(app\.offsetWidth, app\.offsetHeight,/);
  const web = await read(WEB.androidApps);
  assert.match(web, /entry\.surface\.dataset\.aspect = /,
    'the shell tells the compositor the shape of the app display');
  assert.match(atlas, /a\.dataset\.uv = crop/,
    'the compositor publishes the crop it sampled, so the touch can be checked against it');
  assert.match(atlas, /if \(a\.dataset\.uv !== crop\)/,
    'publishing the crop inside the frame loop must not touch the DOM every frame');
  const java = await read(JAVA.input);
  assert.match(java, /AppInputGeometry\.toDisplayX\(/);
  assert.match(java, /AppInputGeometry\.forRotation\(/,
    'a rotated app display needs the point mapped back through the same rotation');
});

test('the display size and its clamp come from one place on each side', async () => {
  const spec = await read(JAVA.spec);
  const number = (name) => {
    const match = spec.match(new RegExp(`${name} = ([0-9.]+)f?;`));
    assert.ok(match, `${name} is declared`);
    return Number(match[1]);
  };
  assert.equal(number('MIN_ASPECT'), 0.6);
  assert.equal(number('MAX_ASPECT'), 2.34);
  assert.equal(number('MIN_HEIGHT'), 480);
  assert.equal(number('MAX_HEIGHT'), 1080);
  assert.equal(number('DEFAULT_HEIGHT'), 720);


  const fit = await read(WEB.fit);
  assert.match(fit, /export const MIN_ASPECT = 0\.6;/);
  assert.match(fit, /export const MAX_ASPECT = 2\.34;/);
});

test('the Shizuku path is bound as a user service and documented as optional', async () => {
  const shizuku = await read(JAVA.shizuku);
  assert.match(shizuku, /Shizuku\.pingBinder\(\)/);
  assert.match(shizuku, /Shizuku\.checkSelfPermission\(\)/);
  assert.match(shizuku, /Shizuku\.requestPermission\(/);
  assert.match(shizuku, /Shizuku\.bindUserService\(/);
  assert.match(shizuku, /new Shizuku\.UserServiceArgs\(/);
  assert.match(shizuku, /NextVrDisplayService\.SERVICE_VERSION/);

  const service = await read(JAVA.service);
  assert.match(service, /public static final int SERVICE_VERSION = \d+;/);
  assert.match(service, /extends IDisplayService\.Stub/);
  assert.match(service, /public boolean processAlive\(String packageName\)/);
  assert.ok(!/public boolean alive\(String/.test(service), 'the AIDL method is processAlive, not alive');

  const aidl = await read(JAVA.aidl);
  assert.match(aidl, /void destroy\(\) = 16777114;/);
  assert.match(aidl, /boolean processAlive\(String packageName\) = 8;/);
  assert.match(aidl, /String displayReport\(String packageName\) = 10;/,
    'the shell is asked where it last saw an app that did not draw');
  assert.ok(!/^\s*boolean alive\(/m.test(aidl));

  const manifest = await read(JAVA.manifest);
  assert.match(manifest, /moe\.shizuku\.manager\.permission\.API_V23/);
  assert.match(manifest, /android:name="rikka\.shizuku\.ShizukuProvider"/);
  assert.match(manifest, /android:authorities="\$\{applicationId\}\.shizuku"/);
  assert.match(manifest, /android:name="moe\.shizuku\.client\.V3_SUPPORT"/);
  assert.match(manifest, /<package android:name="moe\.shizuku\.manager" \/>/,
    'package visibility is needed to tell "not installed" from "not running"');
});

test('the no-Shizuku input path is an accessibility gesture, declared and gated', async () => {
  const accessibility = await read(JAVA.accessibility);
  assert.match(accessibility, /dispatchGesture\(/);
  const xml = await read(JAVA.accessibilityXml);
  assert.match(xml, /canPerformGestures="true"/);
  const manifest = await read(JAVA.manifest);
  assert.match(manifest, /android:name="com\.nextvr\.app\.apps\.NextVrAccessibilityService"/);
  assert.match(manifest, /android:permission="android\.permission\.BIND_ACCESSIBILITY_SERVICE"/);
  assert.match(manifest, /android:resource="@xml\/nextvr_accessibility_service"/);
});

/*
 * The icons are the part of this feature the user sees first, and they have three ways of going
 * missing, all of them real: the native side renders them asynchronously (a tile drawn before the
 * file existed kept its placeholder forever), the WebView can fail to load one, and the URL can be
 * pointing at the wrong origin. Each one is pinned here.
 */
test('the app icons are served by the shell from the same directory that writes them', async () => {
  const window = await read(JAVA.window);
  assert.match(window, /"\/apps\/" \+ icon\.getName\(\)/);
  const surface = await read(JAVA.webSurface);
  assert.match(surface, /\/apps\//, 'the asset host serves app icons and nothing else');
  assert.match(surface, /ORIGIN="https:\/\/appassets\.androidplatform\.net"/,
    'the shell origin is https, so serving an icon is never blocked as cleartext');
  assert.ok(!surface.includes('http://'), 'nothing in the asset host hands out an http URL');
  const apps = await read(WEB.androidApps);
  assert.match(apps, /src="\$\{esc\(app\.icon\)\}"/, 'the tile uses the icon URL the native side handed over');
  assert.match(apps, /class="lib-app-icon"/, 'the icon is drawn at the size the grid allocates for it');
  assert.match(apps, /onerror="this\.remove\(\);this\.parentNode\.parentNode\.classList\.add\('noicon'\)"/,
    'an icon that fails to decode falls back to the app initials instead of a broken image');
  assert.match(apps, /slice\(0, 2\)/, 'that fallback is the app initials');
  const bundle = await read('nextvr-android/src/main/assets/ui/app.js');
  assert.ok(bundle.includes('appsCommand'), 'the shipped bundle carries the app command channel');
  assert.ok(bundle.includes('nextvrApps'), 'the shipped bundle receives the app state');
});

/*
 * The icons are rendered after the grid is already on screen, so the shell has to be told. The native
 * side publishes a revision number; the shell re-reads the library when it moves. Without this the
 * tiles keep the letter placeholders until the app is restarted — the "icons never appear" report.
 */
test('a batch of finished icons makes the shell read the grid again', async () => {
  const manager = await read('nextvr-android/src/main/java/com/nextvr/app/apps/AndroidAppManager.java');
  assert.match(manager, /public int iconEpoch\(\)/);
  assert.match(manager, /private void notifyIcons\(\) \{\s*iconBatches\.incrementAndGet\(\);/,
    'a batch that landed moves the counter');
  assert.match(manager, /private static final int ICON_PX = 144;/, 'one size covers grid, dock and title');
  assert.match(manager, /public void warmIcons\(\)/,
    'the icons are rendered before the menu is opened, not while the user is looking at it');
  assert.match(manager, /getActivityIcon\(component\)/,
    'one direct call per app instead of a package query per app');
  const activity = await read(JAVA.activity);
  assert.match(activity, /androidApps\.warmIcons\(\)/, 'and the shell starts that at boot');

  const window = await read(JAVA.window);
  assert.match(window, /json\.put\("icons", apps\.iconEpoch\(\)\)/,
    'the counter travels in the state the shell already polls');
  const library = window.slice(window.indexOf('public String libraryJson'));
  assert.ok(library.includes('item.put("icon", icon == null ? JSONObject.NULL : "/apps/" + icon.getName())'),
    'and each entry carries the icon URL, or null while it is still being rendered');

  const surface = await read(JAVA.webSurface);
  assert.match(surface, /Cache-Control","no-store, must-revalidate"/,
    'a file that is not there yet is not cached: the next paint has to see it');

  const web = await read(WEB.androidApps);
  assert.match(web, /if \(next\.icons != null && next\.icons !== library\.icons\)/);
  assert.match(web, /library\.loaded = false;/, 'the cached grid is dropped, so the icons are re-read');
  assert.match(web, /library\.icons = data\.icons \|\| library\.icons;/);
  assert.match(web, /state\.launch = next\.launch \|\| null;/);

  const appsJs = await read(WEB.apps);
  assert.match(appsJs, /loadAndroidLibrary\(false\)/, 'the grid asks for the installed apps when it paints');
  assert.match(appsJs, /if \(winBody\('library'\)\) paintLibrary\(\);/,
    'and it repaints whenever it is open, not only while it has the focus');
});

test('the default app window asks for the body the app picture really occupies', async () => {
  const apps = await read(WEB.androidApps);
  const window = await read('web/src/windows.js');
  // windows.js opens every window at 1040x660 with a 62 px bar; the app's own bar takes 52 px of the
  // body, so the picture is 1040x546. Asking the display for that exact shape is what keeps the app
  // from being letterboxed inside its own window.
  const outer = Number(window.match(/constructor\(\{ id, title, node, w = (\d+), h = (\d+)/)[2]);
  const appBar = Number((await read('web/index.html')).match(/\.app-bar\{height:(\d+)px/)[1]);
  const surface = Number(apps.match(/const DEFAULT_H = (\d+);/)[1]);
  assert.equal(surface, outer - 62 - appBar, `the default box is the surface, not the window: ${surface}`);
  assert.match(apps, /export const ANDROID_BOX = \{ w: DEFAULT_W, h: DEFAULT_H \};/);
  const appsJs = await read(WEB.apps);
  assert.match(appsJs, /openApp\(pkg, ANDROID_BOX\)/,
    'tapping a tile in the Applications menu opens the window at that size, and nothing else');
});

/*
 * The mirror is the path a device without Shizuku has, and it has two hard platform requirements
 * that are invisible in a unit test and only show up on a phone:
 *   1. Android 10+ refuses to even construct a MediaProjection unless a foreground service of type
 *      "mediaProjection" is already running (MediaProjection.start() throws SecurityException for
 *      every app targeting Q or later). Without it the mirror simply cannot start on any modern
 *      Android — the failure was found by reading AOSP, not by a test.
 *   2. A foreground service has to be declared, with its type, in the manifest.
 */
test('the screen mirror starts the foreground service Android requires for a MediaProjection', async () => {
  const manifest = await read(JAVA.manifest);
  assert.match(manifest, /<uses-permission android:name="android\.permission\.FOREGROUND_SERVICE" \/>/);
  assert.match(manifest,
    /<uses-permission android:name="android\.permission\.FOREGROUND_SERVICE_MEDIA_PROJECTION" \/>/,
    'the type-specific permission is required from Android 14 on');
  assert.match(manifest,
    /<service[^>]*android:name="com\.nextvr\.app\.apps\.AppMirrorService"[\s\S]{0,220}?android:foregroundServiceType="mediaProjection"/,
    'the service declares the mediaProjection type');

  const service = await read(JAVA.mirrorService);
  assert.match(service, /FOREGROUND_SERVICE_TYPE_MEDIA_PROJECTION/);
  assert.match(service, /startForeground\(/);
  assert.match(service, /START_NOT_STICKY/, 'the mirror is never restarted behind the user');

  const display = await read(JAVA.display);
  const request = display.slice(display.indexOf('public void requestCapture(String focusPackage)'),
    display.indexOf('public void onCaptureConsentResult'));
  assert.ok(request.indexOf('launchOnPhone(focusPackage)') < request.indexOf('AppMirrorService.start(context)'),
    'the app is brought to the screen before consent: the user authorizes the app they asked for');
  assert.ok(request.indexOf('AppMirrorService.start(context)') < request.indexOf('env.requestCaptureConsent()'),
    'the service runs before the consent dialog: consenting to a capture that cannot start would be a lie');
  assert.match(display, /requestCapture\(packageName\);/, 'opening a capture window goes through it');
  assert.match(display, /if \(!AppMirrorService\.isRunning\(\)\) \{/,
    'the capture service state is checked before getMediaProjection, so the user gets a sentence '
    + 'instead of the platform SecurityException text');
  const result = display.slice(display.indexOf('public void onCaptureConsentResult'));
  assert.ok(result.indexOf('manager.getMediaProjection(') < result.indexOf('projection.registerCallback('),
    'the callback is registered after the projection exists and before the first display is created');
  for (const teardown of ['consent_denied', 'projection_failed', 'mirror_failed', 'mirror_refused']) {
    const at = display.indexOf(teardown);
    assert.ok(at > 0, `${teardown} is still a reported outcome`);
  }
  // A projection left holding one consent would make the next attempt skip the dialog and fail again.
  assert.equal((display.match(/\bstopMirror\(\);/g) || []).length >= 5, true,
    'every failed capture tears the whole projection down, not just the notification');
  const mirrorStop = display.slice(display.indexOf('private void stopMirror()'));
  const serviceStop = mirrorStop.indexOf('AppMirrorService.stop(context)');
  assert.ok(serviceStop >= 0 && serviceStop < mirrorStop.indexOf('current.stop()'),
    'closing the window ends the capture and its notification together');
});

/*
 * The app library is the one thing that works on every Android version, and it is also the one that
 * silently broke on Android 11+ on real phones: without the launcher intent in <queries>,
 * queryIntentActivities() returns a handful of system packages and the grid looks empty.
 */
test('the app library declares the launcher query package visibility needs', async () => {
  const manifest = await read(JAVA.manifest);
  const queries = manifest.slice(manifest.indexOf('<queries>'), manifest.indexOf('</queries>'));
  assert.match(queries, /<action android:name="android\.intent\.action\.MAIN" \/>/);
  assert.match(queries, /<category android:name="android\.intent\.category\.LAUNCHER" \/>/,
    'Android 11+ filters queryIntentActivities to the declared intents');
  assert.match(queries, /<package android:name="moe\.shizuku\.manager" \/>/);
});

/*
 * Why this is not an app that messes with other apps: it asks for nothing that would let it hook,
 * overlay or instrument them. These permissions are the ones that would make the feature (and the
 * app) look like spyware to a store reviewer, to Play Protect or to a game's anti-cheat, and none of
 * them is needed by either architecture. The check is here so that a future change cannot add one
 * quietly.
 */
test('the app declares no permission that would let it hook or overlay another app', async () => {
  const manifest = await read(JAVA.manifest);
  const forbidden = ['QUERY_ALL_PACKAGES', 'SYSTEM_ALERT_WINDOW', 'READ_LOGS', 'PACKAGE_USAGE_STATS',
    'REQUEST_INSTALL_PACKAGES', 'INJECT_EVENTS', 'DUMP', 'READ_FRAME_BUFFER', 'WRITE_SECURE_SETTINGS',
    'MANAGE_ACTIVITY_TASKS', 'GET_TASKS', 'REORDER_TASKS'];
  for (const permission of forbidden) {
    assert.ok(!manifest.includes(`android.permission.${permission}`),
      `${permission} is not needed: hosting an app is a display, not an overlay or a hook`);
  }
  // What it does ask for, and why each one is unavoidable:
  assert.match(manifest, /android\.permission\.CAMERA/, 'hand tracking and passthrough');
  assert.match(manifest, /moe\.shizuku\.manager\.permission\.API_V23/,
    'the Shizuku permission the user grants explicitly, in Shizuku');
  assert.match(manifest, /android\.permission\.BIND_ACCESSIBILITY_SERVICE/,
    'declared as the service permission Android requires; the user enables it in Settings');
  assert.ok(!/uses-permission[^>]*INTERACT_ACROSS_USERS/.test(manifest),
    'INTERACT_ACROSS_USERS_FULL is the provider permission Shizuku requires, not an app permission');
});

/*
 * Resizing must not break the app. Two rules make that true, and both are about the window never
 * claiming a size the display does not have.
 */
test('a resize is only believed once the display confirms it', async () => {
  const aidl = await read(JAVA.aidl);
  assert.match(aidl, /String resizeDisplay\(int displayId, int width, int height, int dpi\) = 2;/,
    'the service answers the resize instead of returning nothing');
  assert.match(aidl, /void destroy\(\) = 16777114;/, 'destroy stays first (Shizuku fixes its id)');

  const service = await read(JAVA.service);
  const resize = service.slice(service.indexOf('public String resizeDisplay'));
  assert.ok(resize.indexOf('no such display') < resize.indexOf('display.resize('),
    'a released display is reported instead of throwing inside the platform');
  assert.match(resize, /return null;/, 'null means the display took the new size');

  const manager = await read(JAVA.sessionManager);
  const requested = manager.slice(manager.indexOf('public synchronized void windowResized'));
  const body = requested.slice(0, requested.indexOf('public synchronized void resizeApplied'));
  assert.ok(!/session\.width = /.test(body),
    'the session keeps the display\'s real size while the resize is in flight');
  assert.match(manager, /public synchronized void resizeApplied\(String packageName\)/);
  assert.match(manager, /public synchronized void resizeFailed\(String packageName\)/);
  assert.match(body, /session\.resizeRefused/, 'a display that refused is not asked again');

  const session = await read(JAVA.session);
  assert.match(session, /volatile AppDisplaySpec pendingResize/);
  assert.match(session, /volatile boolean resizeRefused/);
});

/*
 * The no-Shizuku path, end to end, and the rule that makes it honest: the tile asks for the app, the
 * native side decides how to show it, and the window says which mechanism it got. The user must never
 * be told that an app they can open on the phone cannot be opened at all.
 */
/*
 * The reported bug, as a contract: tapping an installed app on a device where Shizuku is authorized
 * must open a hosted window and never boot the app on the phone's screen or ask for a capture. The
 * decision is AppHostPolicy's, and it is taken from the permission state — not from whether a bind
 * has finished, which is what used to send the user to the phone.
 */
test('tapping an app hosts it instead of redirecting to the phone when Shizuku is authorized', async () => {
  const policy = await read('nextvr-android/src/main/java/com/nextvr/app/apps/AppHostPolicy.java');
  assert.match(policy, /case READY:\s*\n\s*case SERVICE_DOWN:/,
    'both "bound" and "about to be bound" host');
  assert.match(policy, /return Route\.NEEDS_PERMISSION;/);

  const display = await read(JAVA.display);
  assert.match(display, /public AppHostPolicy\.Route route\(\)/);
  assert.ok(!display.includes('public boolean canHost()'),
    'the transient "is it bound right now?" question is gone');
  assert.match(display, /service = shizuku\.awaitService\(wait\)/,
    'the window waits for the shell service instead of falling back to the capture');
  assert.ok(!display.includes('setLaunchDisplayId'),
    'startActivity could land the app on the phone without telling anyone: it is not a fallback');
  assert.match(display, /for \(int attempt = 1; attempt <= LAUNCH_ATTEMPTS; attempt\+\+\)/,
    'a fresh display can refuse the first start; the launch is retried and the error kept');
  assert.match(display, /lastLaunchError = error;/,
    'the verbatim `am start` output is kept for the diagnostics panel');
  assert.match(display, /service\.displayReport\(session\.packageName\)/,
    'a blank hosted window asks the shell where the app actually went');

  const manager = await read(JAVA.shizuku);
  assert.match(manager, /public IDisplayService awaitService\(long timeoutMs\)/);
  assert.match(manager, /if \(Looper\.myLooper\(\) == Looper\.getMainLooper\(\)\) doBind\(\);/,
    'the bind can be requested from the display worker thread');
  assert.match(manager, /onNullBinding\(ComponentName name\)/,
    'a service that could not be created is a reported failure, not an endless spinner');
  assert.match(manager, /state == ShizukuStatus\.State\.READY && service == null && !binding/,
    'only a bind that is NOT in flight can be reported as a broken service');
  assert.match(manager, /installed \|\| alive/,
    'a live binder is an installation even when the manager package is unknown (Sui)');
  assert.match(manager, /public String unavailableReason\(\)/);

  const window = await read(JAVA.window);
  assert.match(window, /AppHostPolicy\.Route route = displays\.route\(\);/);
  assert.match(window, /shizuku\.requestPermission\(\);/,
    'asking for the Shizuku permission is the only dialog this route opens');
  assert.match(window, /if \(AppHostPolicy\.hosted\(status\.state\)\) \{\s*\n\s*shizuku\.bind\(\);/,
    'a state change must not cancel the bind that is restoring the service');
  assert.ok(!window.includes('shizuku.unbind();'),
    'unbinding on a transient state was what cancelled the bind and forced the capture route');

  const web = await read(WEB.androidApps);
  assert.match(web, /routeHosted|routeOf/, 'the menu says which route a tap will take');
  assert.match(web, /if \(route === 'hosted' && \(sh\.ready \|\| sh\.binding\)\) return null;/,
    'the healthy hosted route has no warning row at all');
});

test('an app that cannot be hosted opens in a window that names its mechanism', async () => {
  const web = await read(WEB.androidApps);
  assert.match(web, /export function openApp\(pkg, box\)/);
  assert.match(web, /command\(\{ cmd: 'open', pkg, w: \(box && box\.w\) \|\| DEFAULT_W,/,
    'the command carries the app, never a pseudo-package and never a chosen mechanism');
  assert.match(web, /session\.mode === 'mirror' \? t\('appMirrorBadge'\) : t\('appWindowBadge'\)/,
    'the badge follows the mode, never the wish');
  assert.match(web, /const RECOVERABLE = new Set\(/);
  assert.match(web, /t\('appOpenOnPhone'\)/, 'a window that could not be filled offers the one path that needs no privilege');

  const window = await read(JAVA.window);
  assert.match(window, /if \(route == AppHostPolicy\.Route\.HOSTED\) \{/,
    'the native side chooses the mechanism once, before anything is opened');
  assert.match(window, /openCaptured\(packageName, boxWidth, boxHeight\);/);
  assert.match(window, /sessions\.close\(open\.packageName, "capture_replaced"\)/,
    'Android grants one capture per consent: the replaced window gives its up');
  assert.ok(!window.includes('MIRROR_PACKAGE') && !window.includes('optString("focus"'),
    'the pseudo-package and the focus field are gone with the mirror button');

  const display = await read(JAVA.display);
  const routing = display.slice(display.indexOf('public AppHostPolicy.Route route()'));
  assert.match(routing.slice(0, 600), /ShizukuManager shizuku = env\.shizuku\(\);/,
    'the answer comes from the object that owns the service, not from the shell guessing');
  assert.match(display, /sessions\.settle\(session\.packageName, false, "display_empty"\)/,
    'a hosted window that never draws is reported instead of staying blank');
  assert.match(display, /frameTexture\.getTimestamp\(\)/, 'and that verdict comes from the real texture');

  assert.match(display, /lastLaunchBackend = error == null \? "am start --display" : null;/,
    'the backend used is recorded for the diagnostics panel');

  const launchPhone = display.slice(display.indexOf('public boolean launchOnPhone'));
  assert.match(launchPhone, /getLaunchIntentForPackage/, 'public API: the same call tapping the icon makes');
  assert.match(launchPhone, /FLAG_ACTIVITY_NEW_TASK/);
  assert.ok(!/Shizuku|IDisplayService/.test(launchPhone), 'this path needs no privileged service');

  const bundle = await read('nextvr-android/src/main/assets/ui/app.js');
  assert.ok(bundle.includes('lib-app-icon'), 'the shell that ships draws the real app icons');
  const html = await read('web/index.html');
  assert.ok(html.includes('.lib-tile.android'), 'and the tile style is the one the menu uses');
  for (const gone of ['az-mirror', 'app-android-page']) {
    assert.ok(!html.includes(gone), `${gone} is gone from the stylesheet`);
    assert.ok(!bundle.includes(gone), `${gone} is gone from the shell`);
  }
});

/*
 * Round 3 removed the separate Android page: the installed apps live in the Applications menu that
 * already existed, are listed by the same grid, searched by the same box and opened by the same tap.
 * This checks the integration points, because that page was reachable from the dock and from a rail
 * button, and leaving either behind would leave a dead end in the interface.
 */
test('the whole privileged path can be verified on the device itself', async () => {
  const aidl = await read(JAVA.aidl);
  assert.match(aidl, /String selfTest\(\) = 11;/, 'the shell service exposes the on-device test');
  const service = await read(JAVA.service);
  assert.match(service, /@Override public String selfTest\(\) \{/);
  assert.match(service, /createVirtualDisplay\("NextVR self-test", 64, 64, 160, null, 0\)/,
    'the test creates a real display and releases it');
  assert.match(service, /probe\.release\(\)/, 'and gives it back');
  assert.match(service, /report\.put\("identity", runForOutput\("id"\)\)/,
    'the shell identity is read the way `adb shell id` reads it');
  assert.match(service, /report\.put\("setDisplayId", setDisplayId != null\)/);

  const manager = await read(JAVA.shizuku);
  assert.match(manager, /public String selfTest\(\) \{/);
  assert.match(manager, /awaitService\(SELFTEST_WAIT_MS\)/);

  const window = await read(JAVA.window);
  assert.match(window, /case "selftest": selfTest\(\); break;/);
  assert.match(window, /shizuku\.selfTest\(\)/);

  const web = await read(WEB.androidApps);
  assert.match(web, /t\('appSelfTest'\)/, 'the menu offers the button');
  assert.match(web, /shizuku_denied: t\('appShizukuDenied'\)/,
    'refusing the dialog has its own instruction, not "Shizuku is not installed"');
  assert.match(await read(JAVA.display),
    /asked \? "shizuku_denied" : \(blocked \? "shizuku_blocked" : "shizuku_unavailable"\)/);
  assert.match(await read(JAVA.shizuku), /public boolean needsPermission\(\)/);
  const display = await read(JAVA.display);
  assert.match(display, /long wait = shizuku\.waitsForPermission\(\) \? PERMISSION_WAIT_MS : SERVICE_WAIT_MS;/,
    'while the dialog is up the wait is the user\'s, not the service\'s');
  assert.match(display, /PERMISSION_WAIT_MS = 60_000;/);
  assert.match(await read(JAVA.shizuku), /public boolean waitsForPermission\(\)/);
  assert.match(web, /cmd: 'selftest'/);
  const bundle = await read('nextvr-android/src/main/assets/ui/app.js');
  assert.ok(bundle.includes('device self-test:'), 'and the report can be copied out');
});

test('a mirror window says it is the phone screen and needs consent', async () => {
  const web = await read(WEB.androidApps);
  assert.match(web, /if \(session\.mode === 'mirror' && session\.state !== 'running'/);
  const core = await read('web/src/core.js');
  // The wording exists in each of the three languages, so no window is ever left unexplained.
  assert.equal((core.match(/appMirrorStarting:/g) || []).length, 3,
    'appMirrorStarting is translated in pt, en and es');
});

test('the diagnostics panel carries the answers a bug report needs', async () => {
  const window = await read(JAVA.window);
  assert.match(window, /json\.put\("diagnostics", diagnostics\)/);
  for (const field of ['launchError', 'displayReport', 'serviceReason', 'bindError', 'captureService']) {
    assert.ok(window.includes(`diagnostics.put("${field}"`), `${field} is in the diagnostics block`);
  }
  const web = await read(WEB.androidApps);
  assert.match(web, /export function diagnosticsText\(\)/);
  assert.match(web, /shizuku reason:/);
  const bundle = await read('nextvr-android/src/main/assets/ui/app.js');
  assert.ok(bundle.includes('launch backend:'), 'the shell that ships can produce it');
  assert.ok(bundle.includes('shizuku reason:'), 'and the Shizuku reason with it');
});

test('the installed apps live inside the existing Applications menu', async () => {
  const appsJs = await read(WEB.apps);
  assert.ok(!appsJs.includes('androidLibraryPage'), 'no separate page is mounted');
  assert.ok(!appsJs.includes('data-nav="android"') && !appsJs.includes("navButton('android'"),
    'no rail entry leads to it');
  assert.ok(!appsJs.includes('data-id="android"'), 'no dock tile leads to it');
  assert.match(appsJs, /const android = androidApps\(\)\.map\(a => \(\{ kind: 'android'/,
    'the installed apps are one more kind of item in the same list');
  assert.match(appsJs, /x\.kind === 'android' \? androidTileHtml\(x\.app\) : appTile\(x\)/,
    'and the same grid draws them');
  assert.match(appsJs, /c\('\[data-android\]'\)/, 'a tap is handled by the same delegator');
  assert.match(appsJs, /openApp\(pkg, ANDROID_BOX\);\s*focusAppWindow\(pkg\);/,
    'the tap is one action: the native side decides, the shell only brings an open window forward');
  assert.ok(!/static final String MIRROR_PACKAGE/.test(await read(JAVA.display)),
    'there is no pseudo-package for the capture any more: it belongs to the app');
  assert.match(appsJs, /androidRecent\(x\.pkg\)/, 'the native recent list feeds the Recentes filter');
  assert.match(appsJs, /const notice = shizukuNotice\(\);/,
    'the only Android-specific row is the one that explains the current mechanism');
  assert.match(appsJs, /if \(notice\) root\.querySelector\('\.lib-scroll'\)\?\.prepend\(notice\)/);
  assert.match(appsJs, /function paintWindowBadge\(\)/);
  assert.ok(!appsJs.includes('runningBadge'), 'the old badge of the removed page is gone');

  const web = await read(WEB.androidApps);
  assert.ok(!web.includes('export function openPhoneMirror'), 'the mirror button entry point is gone');
  assert.ok(!web.includes('export const MIRROR'), 'and so is the pseudo-package');
  assert.ok(!web.includes('az-tile') && !web.includes('az-mirror'), 'no page-specific markup is left');
  assert.match(web, /export function androidTileHtml\(app\)/);
  assert.match(web, /export function shizukuNotice\(\)/);
  assert.match(web, /if \(route === 'hosted' && \(sh\.ready \|\| sh\.binding\)\) return null;/,
    'going to work: no row, no warning, nothing to dismiss');
});
