import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('the light tracker keeps two hands, two sides and every field the wire format carries', async () => {
  const tracker = await readFile('nextvr-android/src/main/java/com/nextvr/lighttrack/LightHandTracker.kt', 'utf8');
  const config = await readFile('nextvr-android/src/main/java/com/nextvr/lighttrack/LightHandConfig.kt', 'utf8');
  const palm = await readFile('nextvr-android/src/main/java/com/nextvr/lighttrack/PalmFit.kt', 'utf8');
  const skeleton = await readFile('nextvr-android/src/main/java/com/nextvr/lighttrack/HandSkeleton.kt', 'utf8');
  const hand = await readFile('nextvr-android/src/main/java/com/nextvr/lighttrack/LightHand.kt', 'utf8');
  assert.match(config, /const val MAX_HANDS = 2/, 'two hands, like the web layer expects');
  assert.match(tracker, /hands\.size == 2 && hands\[0\]\.left == hands\[1\]\.left/,
    'two blobs can never be the same physical side');
  assert.match(tracker, /hand\.left = fit\.cx < width \* 0\.5f/,
    'a hand is labelled from the side of the (unmirrored, rear-camera) view it is on');
  assert.match(tracker, /SIDE_HOLD_BAND/, 'a hand over the middle of the view keeps its identity');
  assert.match(tracker, /hand\.fist = hand\.extended <= LightHandConfig\.FIST_FINGERS/,
    'a fist needs folded fingers AND a compact blob');
  assert.match(tracker, /hand\.pinchGap = if \(gapTips < CLOSE_TIPS\) min\(gapHole, gapTips\) else gapHole/,
    'pinch is the thumb-index loop; the tips can only tighten a gap that is already nearly closed');
  assert.match(tracker, /LightHandConfig\.HOLE_MIN_PIXELS/);
  // The palm is the largest inscribed disc: that is the whole hand detector.
  assert.match(palm, /fun fit\(blobs: BlobFinder, blob: SkinBlob\): Boolean/);
  assert.match(palm, /LightHandConfig\.PALM_PER_RADIUS \* radius/);
  assert.match(palm, /fun reachAt\(angle: Float\): Float/);
  // ... and the landmarks are laid out on the 21-point grid the rest of the engine speaks.
  assert.match(skeleton, /LightHandConfig\.FINGER_ANGLE/);
  assert.match(skeleton, /for \(i in 1\.\.4\)/);
  assert.match(skeleton, /out\.image\[i \* 3\] = u/);
  assert.match(hand, /val image = FloatArray\(63\)/);
  assert.match(hand, /val world = FloatArray\(63\)/);
});

test('no model, no delegate and no task file are left in the hand-tracking stack', async () => {
  const gradle = await readFile('nextvr-android/build.gradle', 'utf8');
  assert.doesNotMatch(gradle, /mediapipe|litert|protobuf/, 'the inference stack was removed with the model');
  await assert.rejects(readFile('nextvr-android/src/main/assets/hand_landmarker.task'), 'the 7.5 MB task file is gone');
  await assert.rejects(readFile('nextvr-android/src/main/java/com/nextvr/handtrack/HandTracker.kt'));
  const camera = await readFile('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java', 'utf8');
  assert.doesNotMatch(camera, /com\.nextvr\.handtrack|DelegateWatch|MAX_GPU_ATTEMPTS|detectOwned|landmarker/);
  assert.match(camera, /new LightHandTracker\(frame\.width,frame\.height\)/);
});

test('the analysis size is the light tracker budget, not an inference window', async () => {
  const budget = await readFile('nextvr-android/src/main/java/com/nextvr/app/TrackingBudget.java', 'utf8');
  assert.match(budget, /WIDTHS = \{256, 192\}/, 'the analysis frame is small because the tracker is cheap');
  assert.match(budget, /public synchronized int height\(int frameWidth, int frameHeight\)/,
    'the aspect ratio of the camera frame is kept');
  const unit = await readFile('nextvr-android/src/test/java/com/nextvr/app/TrackingBudgetTest.java', 'utf8');
  assert.match(unit, /keepsTheCameraAspectRatioForTheAnalysisFrame/);
  assert.match(unit, /assertEquals\(192, b\.width\(\)\)/);
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
  assert.match(handsKt, /val bx = \(rawShape\.aimX - \.5f\) \* 2f \* scaleX/);
  assert.match(handsKt, /val by = \(\.5f - rawShape\.aimY\) \* 2f \* scaleY/);

  // 3. The analysis frame is pooled on both threads: the camera thread fills one, the tracking
  // thread returns it, so a steady session allocates no analysis buffers at all.
  assert.match(cameraJava, /private final java\.util\.concurrent\.ConcurrentLinkedQueue<LightFrame> framePool/);
  assert.match(cameraJava, /recycleFrame\(frame\);/);

  // 4. Stage timing: the tracker's own cost, then the merge, are measured separately
  assert.match(cameraJava, /PerfLog\.lightTrack\(inferenceMs,current\.getSkinPixels\(\)/);
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

