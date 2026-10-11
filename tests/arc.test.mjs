import test from 'node:test';
import assert from 'node:assert/strict';
import { ARC_CAPACITY, arcAngles, arcSlots, arcLayout, arcStep, windowAngle, pickLru,
  ARC_TOP_ROW_STEP } from '../web/src/arc.js';

test('arc capacity is five apps at once', () => {
  assert.equal(ARC_CAPACITY, 5);
});

test('the first app is centered and the next ones alternate around it', () => {
  assert.deepEqual(arcAngles(0, .8), []);
  assert.deepEqual(arcAngles(1, .8), [0]);
  // Two apps: one in the CENTER, the second beside it (was [-.4, .4]: two displaced windows).
  assert.deepEqual(arcAngles(2, .8), [0, .8]);
  assert.deepEqual(arcAngles(3, .8), [0, .8, -.8]);
  // Cinco lugares: as três primeiras na fileira principal, as duas restantes numa fileira
  // superior centrada — nenhuma janela fora do yaw alcançável do workspace.
  assert.deepEqual(arcSlots(5, .8), [
    { angle: 0, row: 0 }, { angle: .8, row: 0 }, { angle: -.8, row: 0 },
    { angle: -.4, row: 1 }, { angle: .4, row: 1 }]);
  assert.deepEqual(arcSlots(4, .8), [
    { angle: 0, row: 0 }, { angle: .8, row: 0 }, { angle: -.8, row: 0 }, { angle: 0, row: 1 }]);
  assert.deepEqual(arcSlots(3, .8), [
    { angle: 0, row: 0 }, { angle: .8, row: 0 }, { angle: -.8, row: 0 }]);
  assert.equal(arcSlots(7, .8).length, ARC_CAPACITY, 'never more slots than the capacity');
  assert.equal(arcSlots(5, .8).every(s => Math.abs(s.angle) <= .8), true,
    'cinco slots ficam todos dentro do yaw alcançável');
  assert.equal(arcSlots(5, .8).filter(s => s.row === 1).length, 2);
  assert.ok(ARC_TOP_ROW_STEP > 1, 'a fileira de cima fica acima da principal, sem sobrepor');
});

test('arc layout keeps every window on the circle, facing the user', () => {
  const [one] = arcLayout(1, { step: .8, dist: 2 });
  assert.deepEqual(one, [0, -2]);
  const three = arcLayout(3, { step: .5, dist: 2 });
  assert.deepEqual(three[0], [0, -2], 'center slot straight ahead');
  for (const [x, z] of three) assert.ok(Math.abs(Math.hypot(x, z) - 2) < 1e-9, 'constant radius');
  assert.ok(three[1][0] > 0 && three[2][0] < 0, 'second right, third left');
  assert.ok(three.every(([, z]) => z < 0), 'whole arc in front of the user');
});

test('the slot step is a full window plus half a window of clearance, capped by reach', () => {
  // A window 1 m wide at 1 m: 2*atan(.5) = .9273 rad wide.
  const angle = windowAngle(1, 1);
  assert.ok(Math.abs(angle - 2 * Math.atan(.5)) < 1e-12);
  // Half a window of clearance on each side => step = 1.5 windows, when it fits in reach.
  const step = arcStep({ width: 1, dist: 1, gap: .5, outerLimit: 2 });
  assert.ok(Math.abs(step - angle * 1.5) < 1e-12);
  // The default reach limit keeps the outermost window within the workspace yaw: never beyond it.
  assert.equal(arcStep({ width: 4, dist: .5, gap: .5, outerLimit: 1.3 }), 1.3);
  assert.ok(arcStep({ width: 1, dist: 1 }) >= angle, 'never packs below one window of separation');
  // Farther arc (or a smaller window) shrinks the angular width and RESTORES the requested gap,
  // which is the relative one: at 1 m the reach cap leaves less than half a window between edges.
  const relative = (width, dist) => arcStep({ width, dist, gap: .5, outerLimit: 1.3 }) / windowAngle(width, dist) - 1;
  assert.ok(Math.abs(relative(1, 2) - .5) < 1e-9, 'the full half-window gap fits at 2 m');
  assert.ok(relative(1, 1) < .5, 'near, big windows get the gap that fits inside reach');
  assert.ok(windowAngle(1, 2) < windowAngle(1, 1));
});

test('pickLru returns the least recently focused window', () => {
  const a = { id: 'a', lastFocus: 100 }, b = { id: 'b', lastFocus: 300 }, c = { id: 'c', lastFocus: 200 };
  assert.equal(pickLru([a, b, c]).id, 'a');
  assert.equal(pickLru([b, c]).id, 'c');
  assert.equal(pickLru([]), null);
  assert.equal(pickLru([{ id: 'x' }]).id, 'x', 'missing lastFocus counts as oldest');
});
