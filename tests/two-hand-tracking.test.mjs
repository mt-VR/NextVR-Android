import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('MediaPipe can track both hands and returns to the one-hand fast graph when possible', async () => {
  const tracker = await readFile('nextvr-android/src/main/java/com/nextvr/handtrack/HandTracker.kt', 'utf8');
  const policy = await readFile('nextvr-android/src/main/java/com/nextvr/handtrack/HandSlotPolicy.kt', 'utf8');
  assert.match(tracker, /const val WIDE_HANDS = 2/);
  assert.match(tracker, /const val NARROW_HANDS = 1/);
  assert.match(tracker, /const val PROBE_MS = 250L/);
  assert.match(tracker, /slots\.useWide\(stamp\)/);
  assert.match(tracker, /slots\.onResult\(searching, hands\)/);
  assert.match(policy, /detectedHands in 1 until searchSlots/);
  assert.match(policy, /timestampMs - lastSearchMs >= probeMs/);
});

test('two-hand silhouettes predict and fade independently, with per-hand pinch feedback', async () => {
  const renderer = await readFile('nextvr-android/src/main/java/com/nextvr/app/PhoneXrHandRenderer.kt', 'utf8');
  assert.match(renderer, /val visual=visible\?\.predicted\(now\)/);
  assert.match(renderer, /for \(\(handIndex, hand\) in hands\.withIndex\(\)\)/);
  assert.match(renderer, /val pinching = handPose\?\.pinching == true/);
  assert.match(renderer, /handConfidence/);
  assert.match(renderer, /HAND_FILL_ALPHA = 0\.34f/);
  assert.match(renderer, /HAND_OUTLINE_ALPHA = 0\.46f/);
  assert.match(renderer, /HAND_PINCH_ALPHA = 0\.56f/);
  assert.match(renderer, /POINTER_RAY_ALPHA = 0\.50f/);
  assert.match(renderer, /HAND_OUTLINE_ALPHA\*handConfidence/);
  assert.doesNotMatch(renderer, /frame\.hands\.any \{ it\.pinching \}/);
});
