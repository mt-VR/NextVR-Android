import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { STADIUMS, FEATURED_STADIUMS } from '../xfc-game/src/match3d/stadiums.js';

test('Eden Arena usa a arquibancada texturizada do modelo, sem o quarteirão', async () => {
  const eden = STADIUMS.find(stadium => stadium.id === 'eden-arena');
  assert.ok(eden);
  assert.equal(eden.glb, undefined);
  assert.equal(eden.seats, 'assets/stadiums/eden_seats.jpg');
  assert.equal(FEATURED_STADIUMS[0], STADIUMS.indexOf(eden));
  const menu = await readFile(`xfc-game/${eden.file}`);
  assert.equal(menu.readUInt16BE(0), 0xffd8);
  const seats = await readFile(`xfc-game/${eden.seats}`);
  assert.equal(seats.readUInt16BE(0), 0xffd8);
});
