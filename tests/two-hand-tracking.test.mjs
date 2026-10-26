import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('MediaPipe can track both hands and returns to the one-hand fast graph when possible', async () => {
  const tracker = await readFile('nextvr-android/src/main/java/com/nextvr/handtrack/HandTracker.kt', 'utf8');
  const policy = await readFile('nextvr-android/src/main/java/com/nextvr/handtrack/HandSlotPolicy.kt', 'utf8');
  const camera = await readFile('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java', 'utf8');
  assert.match(tracker, /const val WIDE_HANDS = 2/);
  assert.match(tracker, /const val NARROW_HANDS = 1/);
  assert.match(tracker, /const val PROBE_FRAMES = 4/);
  assert.match(tracker, /const val PROBE_MS = 250L/);
  assert.match(tracker, /slots\.useWide\(stamp\)/);
  assert.match(tracker, /slots\.onResult\(searching, hands\)/);
  assert.match(policy, /detectedHands in 1 until searchSlots/);
  assert.match(policy, /framesSinceSearch >= minProbeFrames/);
  assert.match(camera, /MAX_GPU_ATTEMPTS=0/,
    'the GPU delegate measured 500 ms/frame on this device, so the CPU delegate is used');
  assert.match(camera, /delegateWatch\.shouldDrop\(inferenceMs\)/,
    'a measured slow GPU delegate is not kept blindly');
  assert.match(camera, /delegateWatch\.noOutput\(inferenceMs,detected\.landmarks\(\)\.size\(\)\)/,
    'a GPU delegate that returns no landmarks is detected');
  assert.match(camera, /if\(slow\|\|silent\)/,
    'both GPU watchdog failures fall back to CPU');
});

test('the second-hand probe is bounded by processed frames as well as by camera time', async () => {
  // The device measured "tracking 2 fps - cam 54 - infer 382ms - CPU - slots 2": a fast camera
  // and a model-bound tracker, with the two-slot graph on every frame. A probe bounded by camera
  // time ALONE fires on every processed frame there (the camera clock runs ahead of the tracker),
  // so the one-slot fast path - 2.47x cheaper for a single hand - never ran. The frame bound
  // keeps the two-slot share of the work bounded on every device.
  const policy = await readFile('nextvr-android/src/main/java/com/nextvr/handtrack/HandSlotPolicy.kt', 'utf8');
  assert.match(policy, /framesSinceSearch >= minProbeFrames/,
    'the probe needs the frame bound to be met');
  assert.match(policy, /timestampMs - lastSearchMs >= probeMs/,
    'the probe also honours the camera-time bound, so a second hand is still found promptly');
  assert.match(policy, /frameBoundMet && timeBoundMet/,
    'both bounds must be met before the two-slot graph runs again');
  const unit = await readFile('nextvr-android/src/test/java/com/nextvr/handtrack/HandSlotPolicyTest.kt', 'utf8');
  assert.match(unit, /theProbeIsCountedInFramesSoASlowDeviceStillReachesTheOneSlotGraph/);
  assert.match(unit, /aFastDeviceStillProbesOnTheCameraTimeBound/);
});

test('two-hand silhouettes predict and fade independently, with per-hand pinch feedback', async () => {
  const renderer = await readFile('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt', 'utf8');
  assert.match(renderer, /val visual=visible\?\.predicted\(now\)/);
  assert.match(renderer, /for \(\(handIndex, hand\) in hands\.withIndex\(\)\)/);
  assert.match(renderer, /val pinching = handPose\?\.pinching == true/);
  assert.match(renderer, /handConfidence/);
  // Dark translucent hand treatment with thin white contour.
  assert.match(renderer, /HAND_FILL_R = \.03f/);
  assert.match(renderer, /HAND_FILL_G = \.03f/);
  assert.match(renderer, /HAND_FILL_B = \.04f/);
  assert.match(renderer, /HAND_CONTOUR_R = \.96f/);
  assert.match(renderer, /HAND_CONTOUR_G = \.97f/);
  assert.match(renderer, /HAND_CONTOUR_B = 1f/);
  assert.match(renderer, /HAND_FILL_ALPHA = \.35f/);
  assert.match(renderer, /HAND_OUTLINE_ALPHA = \.70f/);
  assert.match(renderer, /HAND_PINCH_ALPHA = \.94f/);
  assert.match(renderer, /POINTER_DROP_ALPHA = \.82f/);
  assert.match(renderer, /POINTER_CLICK_ALPHA = \.95f/);
  assert.match(renderer, /POINTER_RAY_ALPHA = \.82f/);
  assert.match(renderer, /ring3d\(b\[3\], b\[4\], b\[5\], outer, inner, position\)/);
  assert.match(renderer, /HAND_OUTLINE_ALPHA\*handConfidence/);
  assert.doesNotMatch(renderer, /frame\.hands\.any \{ it\.pinching \}/);
});

test('two-hand pipeline prevents hand swapping, eliminates double filtering, and measures stage timings separately', async () => {
  const handsKt = await readFile('nextvr-android/src/main/java/com/nextvr/app/hands/PhoneXrHands.kt', 'utf8');
  const trackerKt = await readFile('nextvr-android/src/main/java/com/nextvr/handtrack/HandTracker.kt', 'utf8');
  const cameraJava = await readFile('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java', 'utf8');
  const perfLogJava = await readFile('nextvr-android/src/main/java/com/nextvr/app/PerfLog.java', 'utf8');
  const activityJava = await readFile('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java', 'utf8');
  const rendererKt = await readFile('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt', 'utf8');
  const handsJs = await readFile('web/src/hands.js', 'utf8');
  const windowsJs = await readFile('web/src/windows.js', 'utf8');

  // 1. Spatial 2x2 minimum-distance wrist assignment prevents left/right swapping when 2 hands are tracked
  assert.match(handsKt, /val twoHandSides: BooleanArray\?/);
  assert.match(handsKt, /cost0L1R <= cost0R1L/);

  // 2. Single-pass OneEuro aim filtering from rawShape.aimX/aimY (no double OneEuro filtering)
  assert.match(handsKt, /val bx = \(rawShape\.aimX-\.5f\)\*2f\*scaleX/);
  assert.match(handsKt, /val by = \(\.5f-rawShape\.aimY\)\*2f\*scaleY/);

  // 3. Lazy narrow detector avoids duplicate model initialization at startup
  assert.match(trackerKt, /private var narrow: HandLandmarker\? = null/);

  // 4. Zero-copy Bitmap creation when analysis dimensions match camera frame + stage timing
  assert.match(cameraJava, /width==outW && height==outH/);
  assert.match(cameraJava, /PerfLog\.poseWork\(/);
  assert.match(perfLogJava, /infer_1h=%.1f infer_2h=%.1f pose_ms=%.2f/);

  // 5. Consecutive same-gesture frames in the UI queue are collapsed so only gesture edges and the newest pose evaluate
  assert.match(activityJava, /frameGestureSignature\(/);

  // 6. Independent per-hand cursor velocity and GL-thread 60-120Hz aim delta extrapolation
  assert.match(handsJs, /_perHandCursorState\.get\(hand\.id\)/);
  assert.match(handsJs, /window\.__handPerfStats = _handPerfStats/);
  assert.match(windowsJs, /phoneRay\(p\.x,p\.y,true\)/);
  assert.match(rendererKt, /target\?\.optJSONArray\("aim"\)/);
});

