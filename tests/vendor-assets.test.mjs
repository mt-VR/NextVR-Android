import test from 'node:test';
import assert from 'node:assert/strict';
import { stat, readFile } from 'node:fs/promises';

const REQUIRED_ASSETS = [
  'app/src/main/assets/index.html',
  'app/src/main/assets/vendor/three/three.min.js',
  'app/src/main/assets/vendor/three/CSS3DRenderer.js',
  'app/src/main/assets/vendor/three/BufferGeometryUtils.js',
  'app/src/main/assets/vendor/mediapipe/camera_utils/camera_utils.js',
  'app/src/main/assets/vendor/mediapipe/hands/hands.js',
  'app/src/main/assets/vendor/mediapipe/hands/hands.binarypb',
  'app/src/main/assets/vendor/mediapipe/hands/hand_landmark_lite.tflite',
  'app/src/main/assets/vendor/mediapipe/hands/hand_landmark_full.tflite',
  'app/src/main/assets/vendor/mediapipe/hands/hands_solution_packed_assets.data',
  'app/src/main/assets/vendor/mediapipe/hands/hands_solution_packed_assets_loader.js',
  'app/src/main/assets/vendor/mediapipe/hands/hands_solution_simd_wasm_bin.js',
  'app/src/main/assets/vendor/mediapipe/hands/hands_solution_simd_wasm_bin.wasm',
  'app/src/main/assets/vendor/mediapipe/hands/hands_solution_wasm_bin.js',
  'app/src/main/assets/vendor/mediapipe/hands/hands_solution_wasm_bin.wasm',
];

test('offline Three.js r128 and MediaPipe Hands WASM/TFLite assets are bundled', async () => {
  for (const path of REQUIRED_ASSETS) {
    const info = await stat(path);
    assert.ok(info.isFile(), `Expected file: ${path}`);
    assert.ok(info.size > 0, `Expected non-empty asset: ${path}`);
  }

  const html = await readFile('web/index.html', 'utf8');
  assert.match(html, /src="\.\/vendor\/three\/three\.min\.js"/);
  assert.match(html, /src="\.\/vendor\/three\/CSS3DRenderer\.js"/);
  assert.match(html, /src="\.\/vendor\/mediapipe\/camera_utils\/camera_utils\.js"/);
  assert.match(html, /src="\.\/vendor\/mediapipe\/hands\/hands\.js"/);
  assert.match(html, /locateFile:\s*\(file\)\s*=>\s*`\.\/vendor\/mediapipe\/hands\/\$\{file\}`/);
});
