import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = join(root, 'app/src/main/assets');

const HANDS_FILES = [
  'hands.js',
  'hands.binarypb',
  'hand_landmark_lite.tflite',
  'hand_landmark_full.tflite',
  'hands_solution_packed_assets.data',
  'hands_solution_packed_assets_loader.js',
  'hands_solution_simd_wasm_bin.data',
  'hands_solution_simd_wasm_bin.js',
  'hands_solution_simd_wasm_bin.wasm',
  'hands_solution_wasm_bin.js',
  'hands_solution_wasm_bin.wasm',
];

await mkdir(join(assetsDir, 'vendor/three'), { recursive: true });
await mkdir(join(assetsDir, 'vendor/mediapipe/camera_utils'), { recursive: true });
await mkdir(join(assetsDir, 'vendor/mediapipe/hands'), { recursive: true });

await copyFile(join(root, 'web/index.html'), join(assetsDir, 'index.html'));
await copyFile(
  join(root, 'node_modules/three/build/three.min.js'),
  join(assetsDir, 'vendor/three/three.min.js')
);
await copyFile(
  join(root, 'node_modules/three/examples/js/renderers/CSS3DRenderer.js'),
  join(assetsDir, 'vendor/three/CSS3DRenderer.js')
);
await copyFile(
  join(root, 'node_modules/@mediapipe/camera_utils/camera_utils.js'),
  join(assetsDir, 'vendor/mediapipe/camera_utils/camera_utils.js')
);

for (const file of HANDS_FILES) {
  await copyFile(
    join(root, 'node_modules/@mediapipe/hands', file),
    join(assetsDir, 'vendor/mediapipe/hands', file)
  );
}

console.log('Assets empacotados em app/src/main/assets/ (index.html + vendor offline).');
