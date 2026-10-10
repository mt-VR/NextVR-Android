import test from 'node:test';
import assert from 'node:assert/strict';
import { HandOverlay, HandPoseSmoother } from '../web/src/hand-overlay.js';

const makeHand = (id, x, pinching = false) => ({
  id, pinching,
  points: Array.from({ length: 21 }, (_, i) => [x + (i % 4) * .012, .35 + Math.floor(i / 4) * .045, 0]).flat(),
});

test('hand contour starts at the detected pose, then interpolates between tracking samples', () => {
  const smoother = new HandPoseSmoother();
  smoother.update([makeHand('right', .4)], 1, 1, 0, 0);
  assert.ok(Math.abs(smoother.get('right').pose[0] - .4) < 1e-6, 'the first sample is not delayed');

  smoother.update([makeHand('right', .5)], 1, 1, 33, 33);
  assert.equal(smoother.get('right').target[0], .5);
  smoother.advance(1 / 90, 44);
  const firstDisplayStep = smoother.get('right').pose[0];
  assert.ok(firstDisplayStep > .4 && firstDisplayStep < .5, 'the visible hand glides toward the new landmark');
  assert.equal(smoother.get('right').pinching, false, 'visual interpolation never invents a pinch');

  smoother.advance(1 / 90, 55);
  assert.ok(smoother.get('right').pose[0] > firstDisplayStep, 'render-rate updates keep motion continuous');
  assert.ok(smoother.get('right').pose[0] < .54, 'look-ahead is bounded and does not fling the hand past its sample');
});

test('hand contour damps small motion and predicts only briefly at display time', () => {
  const smoother = new HandPoseSmoother();
  smoother.update([makeHand('left', .5)], 1, 1, 0, 0);
  smoother.update([makeHand('left', .502)], 1, 1, 33, 33);
  smoother.advance(1 / 60, 49);
  const stillPose = smoother.get('left').pose[0];
  assert.ok(stillPose > .5 && stillPose < .502, 'resting micro-jitter is softened');

  smoother.update([makeHand('left', .8)], 1, 1, 66, 66);
  smoother.advance(1 / 90, 82);
  const pose = smoother.get('left').pose[0];
  assert.ok(pose > stillPose && pose < .83, 'large motion remains responsive without unbounded extrapolation');
  smoother.advance(1 / 90, 400);
  assert.ok(smoother.get('left').pose[0] < .83, 'a stale hand cannot continue moving on old velocity');
});

test('brief misses fade visually, a detected partial frame removes the missing hand, and expiry clears it', () => {
  const smoother = new HandPoseSmoother();
  smoother.update([makeHand('left', .4), makeHand('right', .6)], 1, 1, 0, 0);
  assert.equal(smoother.states.size, 2);

  smoother.update([makeHand('left', .41)], 1, 1, 33, 33);
  assert.equal(smoother.states.size, 1, 'a live frame with one hand does not leave a ghost for the other');
  smoother.update([], 1, 1, 40, 40);
  smoother.advance(1 / 60, 550);
  assert.ok(smoother.get('left').opacity > 0 && smoother.get('left').opacity < 1, 'the last visible contour fades during a brief dropout');
  smoother.advance(1 / 60, 741);
  assert.equal(smoother.states.size, 0, 'retained contours expire instead of lingering');
});

test('high-refresh overlay redraws only the hand dirty region and clear resets its state', () => {
  const calls = [];
  const canvas = { width: 1200, height: 800 };
  const ctx = {
    canvas,
    clearRect: (...args) => calls.push(['clear', ...args]),
    save() {}, restore() {}, beginPath() {}, moveTo() {}, quadraticCurveTo() {}, lineTo() {},
    closePath() {}, stroke() {}, arc() {}, fill() {},
  };
  canvas.getContext = () => ctx;
  const overlay = new HandOverlay(canvas);
  overlay.update([makeHand('right', .42, true)], 1, 1, 0);
  overlay.render(1 / 60, 16);
  assert.ok(overlay.bounds.has('right'));
  assert.ok(calls.some(([name]) => name === 'clear' && calls.find(call => call[0] === 'clear')[3] < canvas.width),
    'redraw clears a local hand rectangle rather than the full camera canvas');

  overlay.update([], 1, 1, 20);
  overlay.render(1 / 60, 570);
  assert.ok(overlay.bounds.has('right'), 'short misses retain the fading silhouette');
  overlay.clear();
  assert.equal(overlay.smoother.states.size, 0);
  assert.equal(overlay.bounds.size, 0);
  assert.ok(calls.some(call => call[0] === 'clear' && call[1] === 0 && call[2] === 0 && call[3] === canvas.width && call[4] === canvas.height),
    'explicit shutdown clears the complete overlay');
});
