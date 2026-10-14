import test from 'node:test';
import assert from 'node:assert/strict';
import { canvasBox, surfaceBox, windowSurface, windowBox } from '../web/src/app-window-box.js';

/*
 * The two sizes of an app window, as numbers.
 *
 * This is the file that pins the bug fixed in round 6: an app window used to be sized from the
 * *window*, so the app was drawn on a screen (585x1040 / 1040x585 at density 320 = 292x520 dp) smaller
 * than the phone it was designed for (this device: 1080x2400 at 420 = 411x914 dp), and everything it
 * pins to the bottom of its layout opened cut off.
 *
 *   canvas  = this phone's screen, in the shape the app asked for. What the app lays out for.
 *   element = the canvas' shape, at the largest size the compositor's atlas can rasterize. What the
 *             user sees and resizes, and never what the app thinks its screen is.
 *
 * The same numbers are asserted on the Java side (AppWindowShapeTest, AppDisplaySpecTest).
 */

const PHONE = { w: 1080, h: 2400 };          // a 20:9 phone
const CHROME = 62 + 52 + 2;                  // .win-bar + .app-bar + the window's own border
const MAX_WINDOW = { w: 1040, h: 660 };      // atlas.js: 1360x980 cell minus the 160 px bleed

const canvasOf = (shape, canvas) => surfaceBox({ shape, display: canvas });

test('the canvas of a shape is this phone screen, turned', () => {
  assert.deepEqual(canvasOf('portrait', { w: 1080, h: 2400 }), { w: 1080, h: 2400 });
  assert.deepEqual(canvasOf('landscape', { w: 1080, h: 2400 }), { w: 2400, h: 1080 });
  // A phone held sideways when the app opens is the same phone: the display is already the landscape
  // canvas, and the same two numbers are enough to lay out the portrait window.
  assert.deepEqual(canvasOf('portrait', { w: 2400, h: 1080 }), { w: 1080, h: 2400 });
  assert.deepEqual(canvasOf('landscape', { w: 2400, h: 1080 }), { w: 2400, h: 1080 });
});

test('a rotation is the same screen swapped, and it needs no round trip', () => {
  // The tap: the session still reports the old display, the window is already the new shape. The two
  // canvases are the same physical screen, so the shell can turn it itself — the alternative is a
  // window that stays the wrong shape until the native side answers.
  const before = { shape: 'landscape', display: { w: 2400, h: 1080 } };
  const after = { shape: 'portrait', display: { w: 2400, h: 1080 } };
  const first = canvasOf(before.shape, before.display);
  const second = canvasOf(after.shape, after.display);
  assert.equal(first.w, second.h);
  assert.equal(first.h, second.w);
  assert.equal(first.w * first.h, second.w * second.h, 'the same pixels, turned');
});

test('the window element is the canvas shape, inside what the atlas can pack', () => {
  for (const canvas of [{ w: 1080, h: 2400 }, { w: 2400, h: 1080 }, { w: 1440, h: 3200 }, { w: 1080, h: 1920 }]) {
    const box = windowBox({ shape: canvas.h > canvas.w ? 'portrait' : 'landscape', display: canvas });
    assert.ok(box.w <= MAX_WINDOW.w && box.h <= MAX_WINDOW.h,
      `a ${canvas.w}x${canvas.h} canvas must fit the atlas cell: ${JSON.stringify(box)}`);
    const surface = { w: box.w - 2, h: box.h - CHROME };
    assert.ok(Math.abs(surface.w / surface.h - canvas.w / canvas.h) < 0.01,
      `the window keeps the canvas' proportions (${canvas.w}x${canvas.h} -> ${surface.w}x${surface.h})`);
  }
  // This device, concretely: 1080x2400 -> a 245x544 element (247x660 with the chrome), and 2400x1080
  // -> 1038x467 (1040x583). Both are exactly the largest box of that shape the cell holds.
  assert.deepEqual(windowBox({ shape: 'portrait', display: { w: 1080, h: 2400 } }), { w: 247, h: 660 });
  assert.deepEqual(windowBox({ shape: 'landscape', display: { w: 2400, h: 1080 } }), { w: 1040, h: 583 });
});

test('a canvas the element can already hold is never enlarged', () => {
  // A small canvas (an old phone, or the fallback before the native side answers) stays at its own
  // pixels: enlarging it would upscale the picture and lie about its size.
  assert.deepEqual(windowSurface({ w: 400, h: 300 }), { w: 400, h: 300 });
  assert.deepEqual(windowBox({ shape: 'landscape', display: { w: 400, h: 300 } }), { w: 402, h: 416 });
});

test('the fallback canvas is a phone screen, never a window', () => {
  // Before the first state arrives there is no display to ask, and the fallback is PhoneXR's own
  // pair: 1080x1920 in portrait, 1920x1080 in landscape. A window-sized fallback would reintroduce
  // the bug in the one case that has no device to check against.
  assert.deepEqual(canvasBox('portrait'), { w: 1080, h: 1920 });
  assert.deepEqual(canvasBox('landscape'), { w: 1920, h: 1080 });
  assert.deepEqual(canvasBox('sideways'), { w: 1920, h: 1080 });
  assert.deepEqual(surfaceBox({ shape: 'portrait' }), { w: 1080, h: 1920 });
  assert.deepEqual(surfaceBox(null), { w: 1920, h: 1080 });
  assert.deepEqual(surfaceBox({ shape: 'portrait', display: { w: 0, h: 0 } }), { w: 1080, h: 1920 });
});

test('the window of a phone canvas is never the size the app is drawn at', () => {
  // The one assertion that would have caught the bug, in one line: whatever the phone, the canvas is
  // bigger (in pixels) than the window element showing it — so nothing that sizes the app may come
  // from the element.
  for (const canvas of [{ w: 1080, h: 2400 }, { w: 2400, h: 1080 }, { w: 1080, h: 1920 }]) {
    const box = windowBox({ shape: 'landscape', display: canvas });
    assert.ok(canvas.h >= box.h - CHROME, 'the canvas is not a window');
    const surface = windowSurface(canvas);
    assert.ok(surface.w <= canvas.w && surface.h <= canvas.h, 'the element is a scaled-down canvas');
  }
});
