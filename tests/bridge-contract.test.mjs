import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('Android APK has its own standalone identity separate from NextVR', async () => {
  const gradle = await readFile('app/build.gradle', 'utf8');
  const manifest = await readFile('app/src/main/AndroidManifest.xml', 'utf8');
  const settings = await readFile('settings.gradle', 'utf8');

  assert.match(settings, /include\s+':app'/);
  assert.doesNotMatch(settings, /nextvr-android|sdk/);

  assert.match(gradle, /applicationId\s+"com\.metamr\.potatovr"/);
  assert.match(gradle, /namespace\s*=\s*'com\.metamr\.potatovr'/);
  assert.doesNotMatch(gradle, /com\.nextvr\.app/);

  assert.match(manifest, /android:name="com\.metamr\.potatovr\.MetaMrActivity"/);
  assert.match(manifest, /android\.permission\.CAMERA/);
  assert.match(manifest, /android\.permission\.INTERNET/);
  assert.match(manifest, /android:screenOrientation="sensorLandscape"/);
});

test('MetaMrActivity exposes all JS bridge interfaces and methods without overload collisions', async () => {
  const activity = await readFile(
    'app/src/main/java/com/metamr/potatovr/MetaMrActivity.java',
    'utf8'
  );
  const html = await readFile('web/index.html', 'utf8');

  for (const alias of ['PotatoAndroid', 'MetaMR', 'Android']) {
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

  // Collect all @JavascriptInterface methods in MetaMrActivity and verify uniqueness (no GinJavaBridge overloads)
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

  assert.match(html, /window\.__metaMrBackPressed\s*=\s*function/);
  assert.match(activity, /window\.__metaMrBackPressed/);
});
