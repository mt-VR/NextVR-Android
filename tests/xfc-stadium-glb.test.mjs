import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { STADIUMS, FEATURED_STADIUMS } from '../xfc-game/src/match3d/stadiums.js';

test('Eden Arena entra como GLB leve na galeria, com cartão JPEG', async () => {
  const eden = STADIUMS.find(stadium => stadium.id === 'eden-arena');
  assert.ok(eden);
  assert.equal(eden.glb, 'assets/stadiums/eden_arena.glb');
  assert.ok(eden.glbFit.innerLength > 0 && eden.glbFit.innerWidth > 0);
  assert.ok(Number.isFinite(eden.glbFit.pitchCenter.x));
  assert.equal(eden.glbFit.sink, undefined);
  assert.equal(FEATURED_STADIUMS[0], STADIUMS.indexOf(eden));
  const glb = await stat(`xfc-game/${eden.glb}`);
  assert.ok(glb.size > 1e6 && glb.size < 8e6, `tamanho ${glb.size}`);
  const header = await readFile(`xfc-game/${eden.glb}`);
  assert.equal(header.subarray(0, 4).toString(), 'glTF');
  const menu = await readFile(`xfc-game/${eden.file}`);
  assert.equal(menu.readUInt16BE(0), 0xffd8);
});
