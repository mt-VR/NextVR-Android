import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { STADIUMS, FEATURED_STADIUMS } from '../xfc-game/src/match3d/stadiums.js';

test('Eden Arena usa a arquibancada do XFC, sem o quarteirão GLB', async () => {
  const eden = STADIUMS.find(stadium => stadium.id === 'eden-arena');
  assert.ok(eden);
  assert.equal(eden.glb, undefined);
  assert.equal(FEATURED_STADIUMS[0], STADIUMS.indexOf(eden));
  const menu = await readFile(`xfc-game/${eden.file}`);
  assert.equal(menu.readUInt16BE(0), 0xffd8);
  const glb = await stat('xfc-game/assets/stadiums/eden_arena.glb');
  assert.ok(glb.size > 1e6 && glb.size < 8e6, `tamanho ${glb.size}`);
});
