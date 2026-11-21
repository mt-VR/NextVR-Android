import test from 'node:test';
import assert from 'node:assert/strict';
import { UT_CATALOG } from '../xfc-game/src/data/ultimate.js';
import { readFile } from 'node:fs/promises';

test('Endrick é brasileiro no Ultimate Team, não austríaco', () => {
  const card = UT_CATALOG.find(c => /endrick/i.test(c.name) || /endrick/i.test(c.fullName || ''));
  assert.ok(card, 'Endrick está no catálogo');
  assert.equal(card.country?.flag, 'br');
  assert.match(card.country?.name || '', /Brasil/i);
});

test('Brasil é o primeiro na letra B do Kick Off', async () => {
  const src = await readFile('xfc-game/src/screens/kickoff.js', 'utf8');
  assert.match(src, /id==='brazil'/);
  assert.match(src, /L==='B'/);
});

test('chute colocado sai alto com curva', async () => {
  const src = await readFile('xfc-game/src/match3d/match.js', 'utf8');
  assert.match(src, /kind: 'placed',\s*lift: 0\.3/s);
  assert.match(src, /curve: Math\.sign\(aimZ \|\| 1\) \* 0\.62/);
});
