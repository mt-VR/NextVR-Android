import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { ICON_PATHS } from '../web/src/reference-icons.js';

test('latest supplied archive is the provenance for restored vectors',async()=>{
  const archive=await readFile('new_references.zip');
  assert.equal(createHash('sha256').update(archive).digest('hex'),'268ee731352e5385e1b9ea111dac7f0fe6611627959459f3dd110412b73cf42d');
  const reference=execFileSync('unzip',['-p','new_references.zip','index.html'],{encoding:'utf8'});
  for(const name of ['crosshair','x','move','camera','wifi','volume','settings']) {
    assert.ok(ICON_PATHS[name],`${name} is bundled`);
    assert.ok(reference.includes(ICON_PATHS[name]),`${name} keeps the original new-reference path`);
  }
  // O launcher e a interface usam o logo roxo quadrado fornecido pelo usuário, sem recriar a marca.
  const logo=await readFile('web/assets/nextvr-n.png');
  assert.equal(logo.subarray(1,4).toString('latin1'),'PNG','o logo do app é o PNG fornecido pelo usuário');
  assert.ok(logo.length>20000,'o logo entregue é a arte grande, não um marcador');
  await assert.rejects(readFile('web/assets/nextvr-n.svg'),'o vetor "N" antigo saiu de cena');
  const launcher = await readFile('artwork/nextvr-apk-logo.png');
  assert.equal(launcher.subarray(1,4).toString('latin1'),'PNG','a fonte do ícone é a imagem roxa recebida');
  for (const density of ['mdpi','hdpi','xhdpi','xxhdpi','xxxhdpi']) {
    const icon = await readFile(`nextvr-android/src/main/res/drawable-${density}/nextvr_ic_launcher.png`);
    assert.equal(icon.subarray(1,4).toString('latin1'),'PNG',`${density} launcher icon exists`);
  }
});

test('every literal UI icon name resolves to a bundled vector', async () => {
  for (const file of ['apps.js', 'windows.js', 'android-apps.js', 'xr-games.js']) {
    const source = await readFile(`web/src/${file}`, 'utf8');
    // Helpers forward their first argument to icon(); object properties supply library/keyboard icons.
    const names = /\b(?:icon|iconText|systemTile|control)\(['"]([^'"]+)['"]\)|\bicon:\s*['"]([^'"]+)['"]/g;
    for (const [, call, property] of source.matchAll(names)) {
      const name = call || property;
      assert.ok(ICON_PATHS[name], `${file}: missing local vector for ${name}`);
    }
  }
});

test('the two supplied panoramas are selectable environments and ship in the APK',async()=>{
  const core=await readFile('web/src/core.js','utf8');
  const java=await readFile('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java','utf8');
  for(const id of ['tropical','lakeside']) {
    assert.match(core,new RegExp(`id: '${id}'.*env\\/${id}\\.jpg`));
    assert.ok(java.includes(`id.equals("${id}")`),`${id} is accepted by the native environment bridge`);
    for(const file of [`web/env/${id}.jpg`,`nextvr-android/src/main/assets/env/${id}.jpg`,
      `nextvr-android/src/main/assets/ui/env/${id}.jpg`]) {
      const image=await readFile(file);
      assert.equal(image.subarray(0,2).toString('hex'),'ffd8',`${file} is a JPEG panorama`);
    }
  }
});

test('all current floating windows receive move, resize, repin and close controls',async()=>{
  const windows=await readFile('web/src/windows.js','utf8');
  assert.match(windows,/resizeHandle\.className = 'win-resize'/);
  assert.match(windows,/this\.resizeHit = plane/);
  assert.match(windows,/icon\('crosshair'\)/);
  assert.match(windows,/icon\('x'\)/);
  assert.match(windows,/icon\('move'\)/);
  const html=await readFile('web/index.html','utf8');
  assert.match(html,/\.win-resize\{/);
  assert.match(html,/\.win-shell\.resizing/);
});
