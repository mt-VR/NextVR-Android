import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('external-page address bar uses a compact toolbar without removing navigation', async () => {
  const [apps, html, bundledApps, bundledHtml] = await Promise.all([
    read('web/src/apps.js'),
    read('web/index.html'),
    read('nextvr-android/src/main/assets/ui/app.js'),
    read('nextvr-android/src/main/assets/ui/index.html'),
  ]);

  assert.match(apps, /const bar = el\('div', 'row browser-bar'\)/,
    'web pages use a dedicated compact address-bar style');
  assert.match(apps, /bar\.append\(fld, go, out\)/,
    'the URL field and its navigation actions remain available');

  const address = html.match(/\.browser-bar\s*\{([^}]+)\}/)?.[1] || '';
  const field = html.match(/\.browser-bar \.fld\s*\{([^}]+)\}/)?.[1] || '';
  const button = html.match(/\.browser-bar \.go\s*\{([^}]+)\}/)?.[1] || '';
  assert.match(address, /padding:\s*5px 8px/);
  assert.match(field, /height:\s*42px/);
  assert.match(field, /font-size:\s*16px/);
  assert.match(button, /height:\s*42px/);

  const bottomRail = html.match(/\.web-page-window \.win-bar\s*\{([^}]+)\}/)?.[1] || '';
  const pageBody = html.match(/\.web-page-window \.win-body\s*\{([^}]+)\}/)?.[1] || '';
  assert.match(apps, /win\.shell\.classList\.add\('web-page-window'\)/,
    'external pages opt into the bottom-rail layout');
  assert.match(bottomRail, /order:\s*2/);
  assert.match(bottomRail, /height:\s*38px/);
  assert.match(pageBody, /order:\s*1/);

  assert.match(bundledApps, /browser-bar/,
    'the compact toolbar class is included in the Android UI bundle');
  assert.match(bundledApps, /web-page-window/,
    'the external-page bottom-rail class is included in the Android UI bundle');
  assert.match(bundledHtml, /\.browser-bar \.fld/,
    'the compact field sizing is shipped with the Android UI');
  assert.match(bundledHtml, /\.web-page-window \.win-bar/,
    'the slim bottom title/control rail is shipped with the Android UI');
});
