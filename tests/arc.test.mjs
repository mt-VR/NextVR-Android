import test from 'node:test';
import assert from 'node:assert/strict';
import { ARC_CAPACITY, arcAngles, arcLayout, pickLru } from '../web/src/arc.js';

test('arc capacity is three apps at once', () => {
  assert.equal(ARC_CAPACITY, 3);
});

test('arc angles are centered and symmetric, capped at capacity', () => {
  assert.deepEqual(arcAngles(0, .8), []);
  assert.deepEqual(arcAngles(1, .8), [0]);
  assert.deepEqual(arcAngles(2, .8), [-.4, .4]);
  assert.deepEqual(arcAngles(3, .8), [-.8, 0, .8]);
  assert.deepEqual(arcAngles(5, .8), [-.8, 0, .8], 'never more slots than the capacity');
});

test('arc layout keeps every window on the circle, facing the user', () => {
  const [one] = arcLayout(1, { step: .8, dist: 2 });
  assert.deepEqual(one, [0, -2]);
  const three = arcLayout(3, { step: .5, dist: 2 });
  assert.deepEqual(three[1], [0, -2], 'center slot straight ahead');
  for (const [x, z] of three) assert.ok(Math.abs(Math.hypot(x, z) - 2) < 1e-9, 'constant radius');
  assert.ok(three[0][0] < 0 && three[2][0] > 0, 'symmetric left/right');
  assert.ok(three.every(([, z]) => z < 0), 'whole arc in front of the user');
});

test('pickLru returns the least recently focused window', () => {
  const a = { id: 'a', lastFocus: 100 }, b = { id: 'b', lastFocus: 300 }, c = { id: 'c', lastFocus: 200 };
  assert.equal(pickLru([a, b, c]).id, 'a');
  assert.equal(pickLru([b, c]).id, 'c');
  assert.equal(pickLru([]), null);
  assert.equal(pickLru([{ id: 'x' }]).id, 'x', 'missing lastFocus counts as oldest');
});
