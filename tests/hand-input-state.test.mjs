import test from 'node:test';
import assert from 'node:assert/strict';
import { HandClickState } from '../web/src/hand-input.js';

test('pinch input moves through hover, press, hold and release exactly once', () => {
  const state = new HandClickState();
  assert.deepEqual(state.update('right', false), []);
  assert.equal(state.phase, 'hovering');
  assert.equal(state.down, false);

  assert.deepEqual(state.update('right', true), ['down']);
  assert.equal(state.phase, 'pressing');
  assert.equal(state.down, true);
  assert.deepEqual(state.update('right', true), []);
  assert.equal(state.phase, 'holding');
  assert.equal(state.down, true);

  assert.deepEqual(state.update('right', false), ['up']);
  assert.equal(state.phase, 'releasing');
  assert.equal(state.down, false);
  assert.deepEqual(state.update('right', false), []);
  assert.equal(state.phase, 'hovering');
});

test('tracking loss cancels a held pinch without converting it into a click', () => {
  const state = new HandClickState();
  assert.deepEqual(state.update('left', true), ['down']);
  assert.deepEqual(state.update(null, false), ['cancel']);
  assert.equal(state.phase, 'hovering');
  assert.equal(state.down, false);
  assert.deepEqual(state.update('left', false), []);
});

test('a replacement hand cancels the old owner before accepting its own press', () => {
  const state = new HandClickState();
  assert.deepEqual(state.update('left', true), ['down']);
  assert.deepEqual(state.update('right', true), ['cancel', 'down']);
  assert.equal(state.handId, 'right');
  assert.equal(state.phase, 'pressing');
  assert.deepEqual(state.update('right', false), ['up']);
});

test('slow samples do not impose an extra press or release debounce', () => {
  const state = new HandClickState();
  // Each call represents the next completed (possibly 250 ms late) hand inference.
  assert.deepEqual(state.update('right', false), []);
  assert.deepEqual(state.update('right', true), ['down']);
  assert.deepEqual(state.update('right', true), []);
  assert.deepEqual(state.update('right', false), ['up']);
});
