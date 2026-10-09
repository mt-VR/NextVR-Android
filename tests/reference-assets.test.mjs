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
  const logo=await readFile('web/assets/nextvr-n.svg','utf8');
  const nPath='M283 277 L320 388 L292 474 L213 474 Z M292 253 L370 253 L443 474 L363 474 Z M437 253 L522 253 L452 452 L413 340 Z';
  assert.ok(reference.includes(nPath) && logo.includes(nPath));
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
