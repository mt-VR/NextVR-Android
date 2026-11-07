import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { ICON_PATHS } from '../web/src/reference-icons.js';

/** Largura e altura de um JPEG, lendo o SOF — sem dependência nova para um teste de asset. */
function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xFF) { i++; continue; }
    const m = buf[i + 1];
    if (m === 0xD8 || m === 0xD9 || m === 0x01 || (m >= 0xD0 && m <= 0xD7)) { i += 2; continue; }
    const len = buf.readUInt16BE(i + 2);
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC)
      return { w: buf.readUInt16BE(i + 7), h: buf.readUInt16BE(i + 5) };
    i += 2 + len;
  }
  return { w: 0, h: 0 };
}

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

test('the sixteen supplied panoramas are selectable environments and ship in the APK',async()=>{
  const core=await readFile('web/src/core.js','utf8');
  const java=await readFile('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java','utf8');
  // A lista é a mesma no shell, no bridge nativo e nos dois diretórios de assets (o céu grande e a
  // miniatura da lista). Os seis últimos chegaram juntos: estádio, Tron, avenida cyberpunk, a casa
  // de vidro na floresta, a fábrica de carros e a cityline ao entardecer.
  for(const id of ['sunset','dusk','night','cinema','space','dark','neon','street','aether','studio',
    'stadium','tron','cyber','spa','factory','skyline']) {
    assert.match(core,new RegExp(`id: '${id}'.*env\\/${id}\\.jpg`));
    assert.ok(java.includes(`id.equals("${id}")`),`${id} is accepted by the native environment bridge`);
    for(const file of [`web/env/${id}.jpg`,`nextvr-android/src/main/assets/env/${id}.jpg`,
      `nextvr-android/src/main/assets/ui/env/${id}.jpg`]) {
      const image=await readFile(file);
      assert.equal(image.subarray(0,2).toString('hex'),'ffd8',`${file} is a JPEG panorama`);
    }
    // O céu grande tem que ser um panorama completo (3072x1536), senão ele aparece esticado e
    // borrado no headset; a miniatura da lista é menor de propósito.
    const full=await readFile(`nextvr-android/src/main/assets/env/${id}.jpg`);
    const size=jpegSize(full);
    assert.deepEqual([size.w,size.h],[3072,1536],`${id} ships as a full 3072x1536 panorama`);
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
