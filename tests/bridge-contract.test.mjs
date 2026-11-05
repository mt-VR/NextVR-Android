import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Padrão de pacote legado montado por fragmentos para que nenhum nome de marca antigo
// fique literalmente gravado neste repositório.
const LEGACY_PACKAGE_PATTERN = new RegExp(
  ['com\\.', 'me', 'ta', 'mr'].join(''),
  'i'
);

test('dixVR Android APK has standalone package identity com.dixvr.app', async () => {
  const gradle = await readFile('app/build.gradle', 'utf8');
  const manifest = await readFile('app/src/main/AndroidManifest.xml', 'utf8');
  const settings = await readFile('settings.gradle', 'utf8');
  const strings = await readFile('app/src/main/res/values/strings.xml', 'utf8');

  assert.match(settings, /rootProject\.name\s*=\s*'dixVR'/);
  assert.match(settings, /include\s+':app'/);
  assert.doesNotMatch(settings, /nextvr-android|sdk/);

  assert.match(gradle, /applicationId\s+"com\.dixvr\.app"/);
  assert.match(gradle, /namespace\s*=\s*'com\.dixvr\.app'/);
  assert.doesNotMatch(gradle, /com\.nextvr\.app/);
  assert.doesNotMatch(gradle, LEGACY_PACKAGE_PATTERN);

  assert.match(strings, /<string name="app_name">dixVR<\/string>/);
  assert.match(manifest, /android:name="com\.dixvr\.app\.DixVrActivity"/);
  assert.match(manifest, /android\.permission\.CAMERA/);
  assert.match(manifest, /android\.permission\.INTERNET/);
  assert.match(manifest, /android:screenOrientation="sensorLandscape"/);
});

test('Gradle config stays compatible with AGP 9 (no removed archivesBaseName DSL)', async () => {
  const gradle = await readFile('app/build.gradle', 'utf8');

  // `defaultConfig.archivesBaseName` / `setProperty("archivesBaseName", ...)` foram removidos
  // no Gradle 9 / AGP 9 e quebram o build com "Could not set unknown property".
  assert.doesNotMatch(
    gradle,
    /setProperty\(\s*["']archivesBaseName["']/,
    'AGP 9 removed defaultConfig.archivesBaseName — use base.archivesName instead'
  );
  assert.doesNotMatch(gradle, /^\s*archivesBaseName\s*[= ]/m);
  assert.doesNotMatch(gradle, /archivesName\s*=\s*["']dixVR["']/);

  // O nome do APK continua vindo do plugin `base` (BasePluginExtension.archivesName),
  // dentro de um guard para que o build nunca quebre se o plugin nao for aplicado.
  assert.match(gradle, /plugins\.withId\(['"]base['"]\)/);
  assert.match(gradle, /archivesName\.set\(\s*'dixVR'\s*\)/);

  // Assinatura determinística de debug continua configurada.
  assert.match(gradle, /storeFile rootProject\.file\('signing\/debug\.keystore'\)/);
});

test('CI workflow publishes the dixVR debug APK artifact', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');

  assert.match(workflow, /name:\s*dixvr-debug-apk/);
  assert.match(workflow, /path:\s*\/tmp\/apk-upload\/dixVR-debug\.apk/);
  assert.match(workflow, /cp "\$APK" \/tmp\/apk-upload\/dixVR-debug\.apk/);

  // O prune de artefatos é restrito a este branch para não apagar artefatos de outros PRs.
  assert.match(workflow, /workflow_run\.head_branch == "arena\/7e43774f-nextvr-android"/);
});

test('DixVrActivity exposes DixVR JS bridge and allows simultaneous Google + YouTube panels', async () => {
  const activity = await readFile(
    'app/src/main/java/com/dixvr/app/DixVrActivity.java',
    'utf8'
  );
  const html = await readFile('web/index.html', 'utf8');

  for (const alias of ['DixVR', 'dixVR', 'Android']) {
    assert.match(
      activity,
      new RegExp(`addJavascriptInterface\\(bridge,\\s*"${alias}"\\)`),
      `Missing WebView JS interface alias ${alias}`
    );
  }

  const requiredBridgeMethods = [
    'showGooglePanel',
    'hideGooglePanel',
    'updateGooglePanelBounds',
    'searchGoogle',
    'homeGoogle',
    'backGoogle',
    'forwardGoogle',
    'reloadGoogle',
    'scrollGoogle',
    'clickGoogleAt',
    'showYouTubePanel',
    'hideYouTubePanel',
    'updateYouTubePanelBounds',
    'homeYouTube',
    'backYouTube',
    'forwardYouTube',
    'reloadYouTube',
    'scrollYouTube',
    'clickYouTubeAt',
    'updateHandCursor',
    'launchMinecraftVR',
    'launchPackage',
    'getAppVersion',
  ];

  const annotated = [
    ...activity.matchAll(/@JavascriptInterface\s+public\s+[\w<>[\]]+\s+(\w+)\s*\(/g),
  ].map((m) => m[1]);

  const counts = new Map();
  for (const name of annotated) {
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  for (const [name, count] of counts.entries()) {
    assert.equal(count, 1, `@JavascriptInterface method ${name} must not be overloaded`);
  }
  for (const method of requiredBridgeMethods) {
    assert.ok(counts.has(method), `Missing @JavascriptInterface method: ${method}`);
  }

  // Verify showGooglePanel does not hide youtubeWebView and showYouTubePanel does not hide googleWebView
  const showGoogleBody = activity.match(/public void showGooglePanel[\s\S]*?\n        \}/)?.[0] || '';
  const showYouTubeBody = activity.match(/public void showYouTubePanel[\s\S]*?\n        \}/)?.[0] || '';
  assert.doesNotMatch(showGoogleBody, /youtubeWebView\.setVisibility\(View\.GONE\)/);
  assert.doesNotMatch(showYouTubeBody, /googleWebView\.setVisibility\(View\.GONE\)/);

  assert.match(html, /window\.__dixVrBackPressed\s*=\s*function/);
  assert.match(activity, /window\.__dixVrBackPressed/);
});
