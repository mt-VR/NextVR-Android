import test from 'node:test';
import assert from 'node:assert/strict';
import { HandClickState, ClickDragArbiter } from '../web/src/hand-input.js';

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

test('a pinched hand that stays near its anchor classifies as a click, not a drag', () => {
  const arb = new ClickDragArbiter({ decideMs: 150, dragOnPx: 18, dragOffPx: 8 });
  arb.begin('right', 600, 400, 1000);
  // Tremor inside the drag threshold, sampled through and past the decision window.
  arb.sample('right', 604, 403, 1050);
  arb.sample('right', 597, 398, 1120);
  assert.equal(arb.sample('right', 601, 402, 1200), 'click');
  assert.equal(arb.end(), 'click');
});

test('a pinch released inside the decision window is a click (a tap), never a drag', () => {
  const arb = new ClickDragArbiter({ decideMs: 150 });
  arb.begin('right', 600, 400, 1000);
  arb.sample('right', 602, 401, 1040);
  assert.equal(arb.end(), 'click');
});

test('travel beyond the drag threshold while pinched classifies as a drag', () => {
  const arb = new ClickDragArbiter({ decideMs: 150, dragOnPx: 18, sustainSamples: 2 });
  arb.begin('right', 600, 400, 1000);
  arb.sample('right', 612, 400, 1050);        // 12 px: grey zone, still undecided
  assert.equal(arb.sample('right', 625, 400, 1100), 'undecided');  // 25 px: first beyond sample
  assert.equal(arb.sample('right', 635, 400, 1150), 'drag');       // sustained sweep: drag
  assert.equal(arb.end(), 'drag');
});

test('hysteresis: one noisy sample cannot flip the classification, and drag never demotes', () => {
  const arb = new ClickDragArbiter({ decideMs: 150, dragOnPx: 18, dragOffPx: 8, sustainSamples: 2 });
  arb.begin('right', 600, 400, 1000);
  // A single spike past dragOn is not sustained: still undecided, then a click.
  arb.sample('right', 630, 400, 1050);
  assert.equal(arb.sample('right', 603, 400, 1150), 'click');
  // Once classified as drag the state sticks even if the hand returns to the anchor.
  arb.begin('right', 600, 400, 2000);
  arb.sample('right', 630, 400, 2050);
  arb.sample('right', 640, 400, 2100);
  assert.equal(arb.mode, 'drag');
  assert.equal(arb.sample('right', 601, 400, 2150), 'drag');
  assert.equal(arb.sample('right', 590, 400, 2200), 'drag');
  assert.equal(arb.end(), 'drag');
});

test('grey-zone travel between the thresholds never flaps between click and drag', () => {
  const arb = new ClickDragArbiter({ decideMs: 150, dragOnPx: 18, dragOffPx: 8, sustainSamples: 2 });
  arb.begin('right', 600, 400, 1000);
  arb.sample('right', 610, 400, 1100);   // 10 px: grey zone
  assert.equal(arb.sample('right', 605, 400, 1200), 'click');
  assert.equal(arb.sample('right', 612, 400, 1300), 'click');  // still grey: stays click
  assert.equal(arb.sample('right', 606, 400, 1400), 'click');
  assert.equal(arb.end(), 'click');
});

test('a click can still promote to a drag after the window when the sweep is deliberate', () => {
  const arb = new ClickDragArbiter({ decideMs: 150, dragOnPx: 18, sustainSamples: 2 });
  arb.begin('right', 600, 400, 1000);
  arb.sample('right', 602, 400, 1200);
  assert.equal(arb.mode, 'click');
  // Later deliberate travel past dragOn (sustained) promotes: the press was never released.
  assert.equal(arb.sample('right', 630, 400, 1400), 'click');
  assert.equal(arb.sample('right', 645, 400, 1450), 'drag');
});

test('a different hand id cannot classify the current gesture', () => {
  const arb = new ClickDragArbiter();
  arb.begin('right', 600, 400, 1000);
  assert.equal(arb.sample('left', 700, 400, 1100), 'undecided');
  assert.equal(arb.end(), 'click');
});
