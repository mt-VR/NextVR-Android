import test from 'node:test';
import assert from 'node:assert/strict';
import { WINDOW_LIMITS, clampWindowPosition, gestureDistancePx, dragGestureActivated,
  resizeGestureActivated, stepDragDelta, clampResize, maxResizeAtHeight,
  resizeFromPointer, stabilizeResize } from '../web/src/window-geometry.js';

const near=(actual,expected,epsilon=1e-6)=>assert.ok(Math.abs(actual-expected)<=epsilon,`${actual} ≉ ${expected}`);

test('floating-window bounds keep the complete window in the usable front arc',()=>{
  const eye=1.55,half=.35;
  const low=clampWindowPosition({x:-99,y:-40,z:1},half,eye);
  const radius=Math.hypot(low.x,low.z);
  near(radius,WINDOW_LIMITS.maxDistance);
  near(low.y,eye+WINDOW_LIMITS.lowerEdgeFromEye+half);
  assert.ok(Math.abs(Math.atan2(-low.x,-low.z))<=WINDOW_LIMITS.maxYaw+1e-8);
  const high=clampWindowPosition({x:0,y:99,z:-.7},half,eye);
  near(high.y,eye+WINDOW_LIMITS.upperEdgeFromEye-half);
  near(Math.hypot(high.x,high.z),.7);
  assert.ok(high.z<0,'a usable window remains in front of the workspace');
});

test('invalid coordinates cannot propagate NaN or put a window at the world origin',()=>{
  const p=clampWindowPosition({x:NaN,y:Infinity,z:NaN},.2);
  assert.ok(Object.values(p).every(Number.isFinite));
  near(Math.hypot(p.x,p.z),WINDOW_LIMITS.minDistance);
  near(p.y,1.55);
});

test('a selection-sized hand tremor never starts drag or resize',()=>{
  const start={x:.5,y:.5};
  assert.ok(gestureDistancePx(start,{x:.51,y:.503},1200,800)<WINDOW_LIMITS.dragActivationPx);
  assert.equal(dragGestureActivated(start,{x:.51,y:.503},1200,800),false);
  assert.equal(resizeGestureActivated(start,{x:.505,y:.504},1200,800),false);
  assert.equal(dragGestureActivated(start,{x:.53,y:.5},1200,800),true);
  assert.equal(resizeGestureActivated(start,{x:.52,y:.5},1200,800),true);
});

test('anchor deltas ignore resting jitter, follow motion without lag and cap a one-frame jump',()=>{
  const zero={x:0,y:0,z:0};
  // Resting jitter below the dead zone never moves the window…
  assert.deepEqual(stepDragDelta(zero,{x:.002,y:.003,z:-.001}),zero);
  // …but the offset keeps accumulating, so a very slow drag cannot deadlock below the dead zone.
  const slow=stepDragDelta(zero,{x:.008,y:0,z:0});
  assert.ok(slow.x>0 && slow.x<=.008+1e-8);
  // Normal motion applies the full relative delta in one update: zero added lag, no chasing.
  const moved=stepDragDelta(zero,{x:.1,y:-.05,z:.02});
  assert.deepEqual(moved,{x:.1,y:-.05,z:.02});
  // The same delta always maps to the same position (stable anchor) — no reference drift.
  assert.deepEqual(stepDragDelta(moved,{x:.1,y:-.05,z:.02}),moved);
  // An involuntary one-frame jump moves at most maxMotionStep.
  const jumped=stepDragDelta(zero,{x:4,y:-8,z:7});
  assert.ok(Math.hypot(jumped.x,jumped.y,jumped.z)<=WINDOW_LIMITS.maxMotionStep+1e-8);
  // A direction reversal is applied cleanly too (relative to the anchor, not the lagged position).
  const back=stepDragDelta(moved,{x:0,y:0,z:0});
  assert.deepEqual(back,{x:0,y:0,z:0});
});

test('a dragged window keeps the distance it was grabbed at (never recedes from the eye)',()=>{
  const eye=1.55,half=.35;
  // A window grabbed at 0.7 m, well off to the side and high — the worst case for the old code:
  // the cursor plane is tilted relative to the sphere, so moving sideways used to ADD depth.
  const grabbed={x:-.62,y:eye+.3,z:-.32};
  const radius=Math.hypot(grabbed.x,grabbed.z);
  near(radius,.7,.005);
  // Every step of a long sideways drag is clamped with the grabbed radius: same distance, new yaw.
  for (const point of [{x:-.95,y:eye+.35,z:-.25},{x:.3,y:eye+.2,z:-.9},{x:.9,y:eye-.1,z:-.6}]) {
    const p=clampWindowPosition(point,half,eye,radius);
    near(Math.hypot(p.x,p.z),radius,1e-6);
    assert.ok(Math.abs(Math.atan2(-p.x,-p.z))<=WINDOW_LIMITS.maxYaw+1e-8);
  }
  // The fixed radius is still bounded by the workspace limits (a grab at 5 m cannot happen, but a
  // bad value must not escape them) and the height band still applies.
  const far=clampWindowPosition({x:0,y:eye,z:-1},half,eye,99);
  near(Math.hypot(far.x,far.z),WINDOW_LIMITS.maxDistance);
  const low=clampWindowPosition({x:0,y:-99,z:-1},half,eye,radius);
  near(low.y,eye+WINDOW_LIMITS.lowerEdgeFromEye+half);
  // Without the parameter the behaviour is the old one: the radius of the point itself survives.
  const free=clampWindowPosition({x:-.62,y:eye+.3,z:-.32},half,eye);
  near(Math.hypot(free.x,free.z),radius);
});

test('resize is proportional, bounded and stops at the vertical edge without moving the center',()=>{
  near(clampResize(.1),WINDOW_LIMITS.minResize);
  near(clampResize(9),WINDOW_LIMITS.maxResize);
  near(resizeFromPointer(1,100,130,1.4),1.3);
  near(resizeFromPointer(1,100,30,1.4),WINDOW_LIMITS.minResize);
  const maxAtEye=maxResizeAtHeight(1.55,.35,1.55);
  near(maxAtEye,WINDOW_LIMITS.maxResize);
  const nearBottom=maxResizeAtHeight(1.15,.35,1.55);
  assert.ok(nearBottom>=WINDOW_LIMITS.minResize && nearBottom<WINDOW_LIMITS.maxResize);
  const smooth=stabilizeResize(1,1.4);
  assert.ok(smooth>1 && smooth<=1.07);
});
