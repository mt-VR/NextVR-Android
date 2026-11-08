// Motor 3D das partidas do XFC.
//
// O jogo é HTML + CSS + JavaScript sem build, então o three.js é servido
// localmente (`xfc-game/vendor/`): o APK roda offline e o WebView do Android
// não depende de CDN.
//
// Este módulo cuida do essencial que é comum a tudo: renderizador, cena,
// câmera, laço de animação e um ajuste automático de qualidade (pixel ratio)
// para o celular não engasgar.

import * as THREE from '../../vendor/three.module.min.js';

export { THREE };

/** Resolução de referência: o palco do jogo tem 1280x720. */
export const STAGE_WIDTH = 1280;
export const STAGE_HEIGHT = 720;

const QUALITY_STEPS = [1.5, 1.25, 1, 0.75, 0.6];

export function createEngine(canvas, options = {}) {
  const {
    fov = 44,
    near = 0.5,
    far = 600,
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5),
    background = 0x08131f
  } = options;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
    stencil: false
  });
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(STAGE_WIDTH, STAGE_HEIGHT, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = false;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(background);
  scene.fog = new THREE.Fog(0x0a1a26, 120, 340);

  const camera = new THREE.PerspectiveCamera(fov, STAGE_WIDTH / STAGE_HEIGHT, near, far);
  camera.position.set(0, 24, 42);
  camera.lookAt(0, 0, 0);

  const clock = new THREE.Clock();
  let raf = 0;
  let running = false;
  let update = null;
  const state = { fps: 60, quality: 0, frames: 0, elapsed: 0 };
  let sampleTime = 0;
  let sampleFrames = 0;

  /** Mede os quadros e baixa a resolução quando o aparelho não dá conta. */
  function sampleQuality(dt) {
    sampleTime += dt;
    sampleFrames += 1;
    if (sampleTime < 2) return;
    const fps = sampleFrames / sampleTime;
    state.fps = fps;
    sampleTime = 0;
    sampleFrames = 0;
    if (fps < 34 && state.quality < QUALITY_STEPS.length - 1) {
      state.quality += 1;
      renderer.setPixelRatio(QUALITY_STEPS[state.quality]);
    } else if (fps > 56 && state.quality > 0) {
      state.quality -= 1;
      renderer.setPixelRatio(QUALITY_STEPS[state.quality]);
    }
  }

  function frame() {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    state.elapsed += dt;
    state.frames += 1;
    sampleQuality(dt);
    update?.(dt, state);
    renderer.render(scene, camera);
  }

  return {
    renderer,
    scene,
    camera,
    state,
    clock,
    /** Liga o laço de animação. */
    start(step) {
      update = step;
      if (running) return;
      running = true;
      clock.start();
      raf = requestAnimationFrame(frame);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
    },
    get running() {
      return running;
    },
    /** Redimensiona o canvas para a caixa real (o palco é escalado por CSS). */
    resize(width, height) {
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    },
    dispose() {
      this.stop();
      renderer.dispose();
    }
  };
}

/** Descarta geometrias, materiais e texturas de um objeto e dos filhos. */
export function disposeObject(root) {
  root.traverse(node => {
    if (node.geometry) node.geometry.dispose();
    const material = node.material;
    if (!material) return;
    for (const item of Array.isArray(material) ? material : [material]) {
      for (const key of Object.keys(item)) {
        const value = item[key];
        if (value && value.isTexture) value.dispose();
      }
      item.dispose();
    }
  });
  root.parent?.remove(root);
}

/** Cria uma textura 2D a partir de um canvas (gramado, placas, rede...). */
export function canvasTexture(width, height, draw, { repeat = null, srgb = true } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  draw(context, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  if (repeat) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeat[0], repeat[1]);
  }
  texture.anisotropy = 4;
  return texture;
}
