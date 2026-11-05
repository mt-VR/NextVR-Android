import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const names = ['google','youtube','wikipedia','reddit','github','twitch','maps','poki'];

test('all eight brand icons are real locally bundled 256px PNGs with matching provenance hashes', async () => {
  const manifest = JSON.parse(await readFile('web/icons/manifest.json','utf8'));
  assert.deepEqual(Object.keys(manifest).sort(), [...names].sort());
  for (const name of names) {
    const source = await readFile(`web/icons/${name}.png`);
    const packaged = await readFile(`app/src/main/assets/icons/${name}.png`);
    assert.deepEqual(packaged, source, `${name} packaged icon parity`);
    assert.equal(source.subarray(0,8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(source.readUInt32BE(16), 256);
    assert.equal(source.readUInt32BE(20), 256);
    assert.equal(createHash('sha256').update(source).digest('hex'), manifest[name].sha256);
  }
  const notice = await readFile('web/icons/NOTICE.md','utf8');
  assert.match(notice, /wikimedia\/portals/);
  assert.match(notice, /gilbarbara\/logos/);
  assert.match(notice, /skymen\/poki_sdkV2/);
});

test('library/store and native header use brand images rather than letter tiles or screenshot crops', async () => {
  const html = await readFile('web/index.html','utf8');
  const java = await readFile('app/src/main/java/com/dixvr/app/ProjectedBrowserPanel.java','utf8');
  const activity = await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java','utf8');
  for (const name of names) assert.ok(html.includes(`icons/${name}.png`));
  assert.match(html, /src="\$\{app.icon\}"/);
  assert.doesNotMatch(html, /\$\{app.icon\}<\/div>/);
  assert.doesNotMatch(html, /#library-google-app .store-app-icon,.*background-image/);
  assert.doesNotMatch(html, /#library-youtube-app .store-app-icon,.*background-image/);
  assert.match(java, /header.addView\(appIcon/);
  assert.match(java, /getAssets\(\).open\("icons\/" \+ id \+ ".png"\)/);
  assert.match(activity, /googlePanelView.setAppIcon\(appId\)/);
});

test('wider page viewport and normal text zoom show more content without shrinking the window', async () => {
  const java = await readFile('app/src/main/java/com/dixvr/app/ProjectedBrowserPanel.java','utf8');
  const activity = await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java','utf8');
  const html = await readFile('web/index.html','utf8');
  assert.match(activity, /if \(!isMainShell\) settings.setTextZoom\(90\)/);
  assert.match(java, /logicalWidth = dp\(800\)/);
  assert.match(java, /int width = dp\(800\)/);
  assert.match(java, /canvas.concat\(projection\)/);
  assert.match(html, /WINDOW_TOP_MAX_Y = 0.62/);
  assert.match(html, /baseScale: 0.0022, pxW: 940/);
});

test('reference-style content zoom preserves the large physical window and manual adjustment', async () => {
  const html = await readFile('web/index.html','utf8');
  const activity = await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java','utf8');
  assert.match(html, /ARC_DIST = 1.65/);
  assert.match(html, /WINDOW_TOP_MAX_Y = 0.62/);
  assert.match(html, /baseScale: 0.0022, pxW: 940/);
  assert.match(activity, /Math.max\(60, page.getSettings\(\).getTextZoom\(\) - 20\)/);
  assert.match(activity, /"zoomIn".equals\(command\)/);
  assert.match(activity, /"zoomOut".equals\(command\)/);
});
