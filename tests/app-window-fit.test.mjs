import test from 'node:test';
import assert from 'node:assert/strict';
import { fitDisplay, appHostPoint, boxAspect } from '../web/src/display-fit.js';

// The same numbers are asserted by nextvr-android/src/test/java/com/nextvr/app/apps/
// AppInputGeometryTest.java. The shader samples the fitted rectangle and the touch is normalized
// against it: if these two implementations ever disagree, the picture and the finger disagree too.

test('there is no clamped aspect any more: the canvas is the app\'s own screen', () => {
  // It used to be clamped to 3:5..2.34 so that a window-shaped canvas stayed "renderable", which is
  // how a tall phone app ended up on a screen shorter than the one it was designed for. The canvas is
  // now this phone's screen and the window takes its shape, so nothing is clamped anywhere.
  assert.equal(boxAspect(1080, 2400), 1080 / 2400);
  assert.equal(boxAspect(2400, 1080), 2400 / 1080);
  assert.equal(boxAspect(0, 0), 16 / 9);
  assert.equal(boxAspect(NaN, 100), 16 / 9);
});

test('a display with the window shape fills the window', () => {
  assert.deepEqual(fitDisplay(1040, 616, 1040 / 616),
    { x: 0, y: 0, w: 1040, h: 616, u0: 0, v0: 0, uw: 1, vh: 1 });
});

test('a 16:9 display letterboxes inside a 1040x616 window', () => {
  const fit = fitDisplay(1040, 616, 16 / 9);
  assert.deepEqual([fit.x, fit.y, fit.w, fit.h], [0, 16, 1040, 585]);
  assert.equal(fit.u0, 0);
  assert.equal(fit.uw, 1);
  assert.ok(fit.vh < 1, 'the sampled band is shorter than the window body');
});

test('a tall display pillarboxes inside a wide window', () => {
  const fit = fitDisplay(1040, 616, 0.6);
  assert.deepEqual([fit.x, fit.y, fit.w, fit.h], [335, 0, 370, 616]);
  assert.equal(fit.v0, 0);
  assert.equal(fit.vh, 1);
  assert.ok(fit.uw < 1);
});

test('a tall phone canvas fills a window of its own shape', () => {
  // A 20:9 phone canvas (0.45) in the window element its own shape produces (the shell scales the
  // canvas down to the largest box the atlas packs, aspect included): the whole picture, no bars.
  const canvas = { w: 1080, h: 2400 };
  const width = Math.round(544 * canvas.w / canvas.h);   // 544 = the tallest element the atlas holds
  const fit = fitDisplay(width, 544, canvas.w / canvas.h);
  assert.deepEqual([fit.x, fit.y, fit.w, fit.h], [0, 0, width, 544]);
  assert.deepEqual([fit.u0, fit.v0, fit.uw, fit.vh], [0, 0, 1, 1]);
});

test('a missing aspect falls back to the window shape instead of stretching', () => {
  const fit = fitDisplay(1040, 616, 0);
  assert.deepEqual([fit.x, fit.y, fit.w, fit.h], [0, 0, 1040, 616]);
});

test('the fitted rectangle never leaves the window body', () => {
  for (const [w, h, aspect] of [[1040, 616, 16 / 9], [616, 1040, 0.6], [800, 500, 2.2], [800, 500, 0.7], [320, 240, 1.5]]) {
    const fit = fitDisplay(w, h, aspect);
    assert.ok(fit.x >= 0 && fit.y >= 0, `origin inside for ${w}x${h}@${aspect}`);
    assert.ok(fit.x + fit.w <= w && fit.y + fit.h <= h, `inside the body for ${w}x${h}@${aspect}`);
    assert.ok(fit.w > 0 && fit.h > 0);
  }
});

test('the sampled crop matches the fitted rectangle', () => {
  const fit = fitDisplay(1000, 500, 16 / 9);
  assert.equal(fit.u0, fit.x / 1000);
  assert.equal(fit.v0, fit.y / 500);
  assert.equal(fit.uw, fit.w / 1000);
  assert.equal(fit.vh, fit.h / 500);
});

test('a point on a letterbox bar is dropped, never forwarded to the app', () => {
  // 16:9 inside 1040x616: the bars are the top and bottom 16 px bands.
  assert.equal(appHostPoint(1040, 616, 16 / 9, 500, 4), null);
  assert.equal(appHostPoint(1040, 616, 16 / 9, 500, 613), null);
  const middle = appHostPoint(1040, 616, 16 / 9, 520, 16 + 292.5);
  assert.ok(middle);
  assert.deepEqual([+middle.u.toFixed(3), +middle.v.toFixed(3)], [0.5, 0.5]);
});

test('the corners of the picture are the corners of the display', () => {
  const fit = fitDisplay(616, 1040, 0.6);
  const topLeft = appHostPoint(616, 1040, 0.6, fit.x, fit.y);
  const bottomRight = appHostPoint(616, 1040, 0.6, fit.x + fit.w, fit.y + fit.h);
  assert.deepEqual([topLeft.u, topLeft.v], [0, 0]);
  assert.deepEqual([bottomRight.u, bottomRight.v], [1, 1]);
});

test('a touch outside the window body itself is still rejected', () => {
  assert.equal(appHostPoint(1000, 500, 16 / 9, -5, 100), null);
  assert.equal(appHostPoint(1000, 500, 16 / 9, 100, 900), null);
});
