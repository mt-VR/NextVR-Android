import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const SOURCE_HTML = 'web/index.html';
const ASSET_HTML = 'app/src/main/assets/index.html';

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

  // Ensure .youtube-vr-panel lives inside <head> styles rather than leaking into body text
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

test('embedded ShootTheDie VR FPS HTML decodes and uses matching postMessage channels', async () => {
  const html = await readFile(SOURCE_HTML, 'utf8');
  const b64Match = html.match(/SHOOT_THE_DIE_HTML_B64\s*=\s*'([^']+)'/);
  assert.ok(b64Match, 'SHOOT_THE_DIE_HTML_B64 constant must exist');

  const shootHtml = Buffer.from(b64Match[1], 'base64').toString('utf8');
  assert.match(shootHtml, /d\.type\s*===\s*'potatovr-shoot-hand'/);
  assert.match(shootHtml, /d\.type\s*===\s*'potatovr-shoot-gyro'/);

  // Host HTML must never send mismatched MetaMR-shoot-hand
  assert.doesNotMatch(html, /type:\s*'MetaMR-shoot-hand'/);
  assert.match(html, /type:\s*'potatovr-shoot-hand'/);
  assert.match(html, /type:\s*'potatovr-shoot-gyro'/);

  const shootScript = shootHtml.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(shootScript, 'ShootTheDie inline script must exist');
  assert.doesNotThrow(
    () => new vm.Script(shootScript[1], { filename: 'shoot-the-die.html' }),
    'ShootTheDie inline script must be syntactically valid JS'
  );
});

test('all core features of the PotatoVR / MetaMR base remain present', async () => {
  const html = await readFile(SOURCE_HTML, 'utf8');

  // Optical flow 6DoF approximation (FLUXO-OPTICO)
  assert.match(html, /function initOpticalFlow\(\)/);
  assert.match(html, /function flowTrackPoints\(/);
  assert.match(html, /function updateOpticalFlow\(now\)/);

  // Configurable hand styles including Aura Neon, Ghost, 3D, Original
  assert.match(html, /Aura Neon/);
  assert.match(html, /Mão fantasma/);
  assert.match(html, /saveHandVisualStyle/);

  // Stereo Cardboard split mode & World Lock & 3D Beach island
  assert.match(html, /function enterCardboardVR\(\)/);
  assert.match(html, /function exitCardboardVR\(\)/);
  assert.match(html, /function setWorldLock\(/);
  assert.match(html, /function initBeachScene\(\)/);

  // Built-in experiences & persistence across restarts
  for (const app of ['google', 'youtube', 'kitchen', 'dreamcore', 'shoot_the_die']) {
    assert.match(html, new RegExp(`MetaMR_${app}_installed`));
    assert.match(html, new RegExp(`potatovr_${app}_installed`));
  }
});
