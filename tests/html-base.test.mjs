import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const SOURCE_HTML = 'web/index.html';
const ASSET_HTML = 'app/src/main/assets/index.html';

// Padrões das marcas legadas montados por fragmentos para que nenhum nome de marca
// antigo fique literalmente gravado neste repositório.
const LEGACY_PATTERNS = [
  new RegExp(['me', 'ta', 'mr'].join('\\s*'), 'i'),
  new RegExp(['pot', 'ato', '[vb]r'].join('\\s*'), 'i'),
  new RegExp(['pot', 'ato', 'android'].join('\\s*'), 'i'),
  new RegExp(['pot', 'ato'].join('\\s*'), 'i'),
];

function assertNoLegacyBrand(content, label) {
  for (const pattern of LEGACY_PATTERNS) {
    assert.doesNotMatch(
      content,
      pattern,
      `Found legacy brand reference (${pattern.source}) in ${label}`
    );
  }
}

test('bundled APK index.html matches web/index.html byte-for-byte', async () => {
  const [src, bundled] = await Promise.all([
    readFile(SOURCE_HTML),
    readFile(ASSET_HTML),
  ]);
  assert.equal(Buffer.compare(src, bundled), 0, 'Run `npm run build:ui` to sync assets');
});

test('HTML style and script tags are balanced and JavaScript parses cleanly', async () => {
  const html = await readFile(SOURCE_HTML, 'utf8');

  const openStyles = (html.match(/<style\b[^>]*>/gi) || []).length;
  const closeStyles = (html.match(/<\/style>/gi) || []).length;
  assert.equal(openStyles, closeStyles, 'Every <style> tag must have a matching </style>');
  assert.equal(openStyles, 2, 'Expected main stylesheet and landscape lock stylesheet');

  const headEnd = html.indexOf('</head>');
  const ytRulePos = html.indexOf('.youtube-vr-panel{');
  assert.ok(ytRulePos > 0 && ytRulePos < headEnd, '.youtube-vr-panel CSS must be inside <head>');

  const inlineScriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(inlineScriptMatch, 'Main inline <script> block must exist');
  assert.doesNotThrow(
    () => new vm.Script(inlineScriptMatch[1], { filename: 'web/index.html' }),
    'Main inline script must be syntactically valid JS'
  );
});

test('complete dixVR rebrand leaves zero legacy brand occurrences behind', async () => {
  const filesToAudit = [
    'web/index.html',
    'package.json',
    'package-lock.json',
    'settings.gradle',
    'build.gradle',
    'app/build.gradle',
    'app/proguard-rules.pro',
    'app/src/main/AndroidManifest.xml',
    'app/src/main/res/values/strings.xml',
    'app/src/main/java/com/dixvr/app/DixVrActivity.java',
    'app/src/main/java/com/dixvr/app/AssetRequestRouter.java',
    'app/src/main/java/com/dixvr/app/PanelBounds.java',
    'app/src/main/java/com/dixvr/app/HandCursorOverlayView.java',
    'app/src/test/java/com/dixvr/app/PanelBoundsTest.java',
    'app/src/test/java/com/dixvr/app/AssetRequestRouterTest.java',
    'tools/check-java-refs.py',
    'README.md',
    '.github/workflows/android.yml',
  ];

  for (const path of filesToAudit) {
    assertNoLegacyBrand(await readFile(path, 'utf8'), path);
  }

  const html = await readFile(SOURCE_HTML, 'utf8');
  assert.match(html, /<title>dixVR - VR Launcher<\/title>/);
  assert.match(html, /<h2>dixVR Sistema MR<\/h2>/);
  assert.match(html, /Loja dixVR/);
  assert.match(html, /ShootTheDie · dixVR/);
});

test('embedded ShootTheDie VR FPS HTML decodes cleanly under dixVR channels', async () => {
  const html = await readFile(SOURCE_HTML, 'utf8');
  const b64Match = html.match(/SHOOT_THE_DIE_HTML_B64\s*=\s*'([^']+)'/);
  assert.ok(b64Match, 'SHOOT_THE_DIE_HTML_B64 constant must exist');

  const shootHtml = Buffer.from(b64Match[1], 'base64').toString('utf8');
  assertNoLegacyBrand(shootHtml, 'embedded ShootTheDie HTML');
  assert.match(shootHtml, /d\.type\s*===\s*'dixvr-shoot-hand'/);
  assert.match(shootHtml, /d\.type\s*===\s*'dixvr-shoot-gyro'/);

  assert.match(html, /type:\s*'dixvr-shoot-hand'/);
  assert.match(html, /type:\s*'dixvr-shoot-gyro'/);

  const shootScript = shootHtml.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(shootScript, 'ShootTheDie inline script must exist');
  assert.doesNotThrow(
    () => new vm.Script(shootScript[1], { filename: 'shoot-the-die.html' }),
    'ShootTheDie inline script must be syntactically valid JS'
  );
});

test('all core AR/VR features and dixVR persistence keys remain present', async () => {
  const html = await readFile(SOURCE_HTML, 'utf8');

  assert.match(html, /function initOpticalFlow\(\)/);
  assert.match(html, /function flowTrackPoints\(/);
  assert.match(html, /function updateOpticalFlow\(now\)/);

  assert.match(html, /Aura Neon/);
  assert.match(html, /Mão fantasma/);
  assert.match(html, /saveHandVisualStyle/);

  assert.match(html, /function enterCardboardVR\(\)/);
  assert.match(html, /function exitCardboardVR\(\)/);
  assert.match(html, /function setWorldLock\(/);
  assert.match(html, /function initBeachScene\(\)/);

  // Multitarefa: geometria medida no DOM (nada de altura fixa estimada) e slots da dock funcionais.
  for (const fn of [
    'measureEntrySize',
    'getDockMetrics',
    'computeSlotScales',
    'computeArcLayout',
    'activateDockSlotPoint',
    'getFocusedMultitaskApp',
  ]) {
    assert.match(html, new RegExp(`function ${fn}\\(`), `Missing multitask helper: ${fn}`);
  }
  assert.match(html, /new ResizeObserver\(/);

  for (const app of ['google', 'youtube', 'kitchen', 'dreamcore', 'shoot_the_die']) {
    assert.match(html, new RegExp(`dixVR_${app}_installed`));
  }
});
