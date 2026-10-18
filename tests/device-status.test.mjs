import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('dock and Quick Settings share device-clock and native battery data', async () => {
  const windows = await readFile('web/src/windows.js', 'utf8');
  const apps = await readFile('web/src/apps.js', 'utf8');
  const java = await readFile('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java', 'utf8');
  assert.match(windows, /toLocaleTimeString\(\[\], \{ hour: '2-digit', minute: '2-digit' \}\)/);
  assert.match(windows, /toLocaleDateString\('pt-BR'/);
  assert.match(windows, /window\.NativeXR\.battery\(\)/);
  assert.match(windows, /setInterval\(updateBattery, 10000\)/);
  assert.match(windows, /dk-bat-percent/);
  assert.match(apps, /paintQuickSettingsStatus\(getDeviceStatus\(\)\)/);
  assert.match(apps, /data-q-battery/);
  assert.match(java, /@JavascriptInterface public String battery\(\)/);
  assert.match(java, /mediaVolumePercent\(\)/);
  assert.match(java, /setMediaVolumePercent\(int percent\)/);
  assert.match(java, /brightnessPercent\(\)/);
  assert.match(java, /setBrightnessPercent\(int percent\)/);
});

test('dock styling follows the selected dark-teal capsule concept in the Android UI bundle', async () => {
  const [html, apps, bundledHtml] = await Promise.all([
    readFile('web/index.html', 'utf8'),
    readFile('web/src/apps.js', 'utf8'),
    readFile('nextvr-android/src/main/assets/ui/index.html', 'utf8'),
  ]);
  assert.match(html, /background:linear-gradient\(180deg,rgba\(18,48,56/);
  assert.ok(html.includes('align-items:center;gap:8px;width:max-content;padding:8px 12px 9px 10px;border-radius:28px'));
  assert.match(html, /\.dock-grab::after[^}]*opacity:0/);
  assert.match(apps, /id: 'notifications', label: t\('notif'\)/);
  assert.match(apps, /id: 'recenter', label: t\('center'\)/);
  assert.match(apps, /kind: 'sep'/);
  assert.equal(bundledHtml, html, 'the APK embeds the same dock stylesheet as the web source');
});
