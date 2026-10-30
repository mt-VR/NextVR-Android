import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

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
  assert.doesNotMatch(gradle, /com\.nextvr\.app|com\.metamr/);

  assert.match(strings, /<string name="app_name">dixVR<\/string>/);
  assert.match(manifest, /android:name="com\.dixvr\.app\.DixVrActivity"/);
  assert.match(manifest, /android\.permission\.CAMERA/);
  assert.match(manifest, /android\.permission\.INTERNET/);
  assert.match(manifest, /android:screenOrientation="sensorLandscape"/);
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
