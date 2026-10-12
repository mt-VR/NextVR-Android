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
  const implemented = new Set([...switchBody.matchAll(/case "([a-z]+)":/g)].map(m => m[1]));
  assert.ok(implemented.size >= 8, `expected the full command list, got ${[...implemented]}`);

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

test('the app icons are served by the shell from the same directory that writes them', async () => {
  const window = await read(JAVA.window);
  assert.match(window, /"\/apps\/" \+ icon\.getName\(\)/);
  const surface = await read(JAVA.webSurface);
  assert.match(surface, /\/apps\//, 'the asset host serves app icons and nothing else');
  const apps = await read(WEB.androidApps);
  assert.match(apps, /img\.src = app\.icon/, 'the tile uses the icon URL the native side handed over');
  const bundle = await read('nextvr-android/src/main/assets/ui/app.js');
  assert.ok(bundle.includes('appsCommand'), 'the shipped bundle carries the app command channel');
  assert.ok(bundle.includes('nextvrApps'), 'the shipped bundle receives the app state');
});
