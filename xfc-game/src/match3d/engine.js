// Motor 3D das partidas do XFC.
//
// O jogo é HTML + CSS + JavaScript sem build, então o three.js é servido
// localmente (`xfc-game/vendor/`): o APK roda offline e o WebView do Android
// não depende de CDN.
//
// Este módulo cuida do essencial que é comum a tudo: renderizador, cena,
// câmera, laço de animação e um ajuste automático de qualidade (pixel ratio)
// para o celular não engasgar.

import {graphicsPreset,createDetailGovernor} from './quality.js';
import * as THREE from '../../vendor/three.module.min.js';

export { THREE };

/** Resolução de referência: o palco do jogo tem 1280x720. */
export const STAGE_WIDTH = 1280;
export const STAGE_HEIGHT = 720;

const MAX_FRAME_DELTA = 0.1;
const LOW_POWER_PIXEL_RATIO = 0.6;
const QUALITY_STEPS = [1.5, 1.25, 1, 0.85, 0.7, 0.6];
let sharedSoftShadowTexture = null;

/**
 * Perfil inicial para o WebView: aparelhos móveis começam com uma resolução
 * fixa e sem MSAA/sombras. Redimensionar o buffer WebGL durante a partida
 * pode provocar quadros brancos/piscadas em alguns WebViews Android, então o
 * perfil móvel não troca de pixel ratio depois que o campo aparece.
 */
export function rendererProfileFor({
  devicePixelRatio = 1,
  userAgent = '',
  pointerCoarse = false,
  hardwareConcurrency = 0,
  deviceMemory = 0
} = {}) {
  const smallDevice = (Number(hardwareConcurrency) > 0 && Number(hardwareConcurrency) <= 4)
    || (Number(deviceMemory) > 0 && Number(deviceMemory) <= 4);
  const lowPower = Boolean(pointerCoarse || smallDevice || /Android|iPhone|iPad|iPod/i.test(userAgent));
  // O celular entra direto no perfil econômico final. Assim o WebGL cria seu
  // buffer uma vez, sem a sequência de redimensionamentos que causava piscadas.
  const cap = lowPower ? LOW_POWER_PIXEL_RATIO : 1.5;
  const initialPixelRatio = Math.max(0.5, Math.min(Number(devicePixelRatio) || 1, cap));
  return {
    lowPower,
    initialPixelRatio,
    qualitySteps: qualityStepsFor(initialPixelRatio, lowPower)
  };
}

/** Cria níveis descendentes; o perfil móvel fica fixo para não recriar o buffer. */
export function qualityStepsFor(initialPixelRatio, lowPower = false) {
  const initial = Math.max(0.5, Math.min(Number(initialPixelRatio) || 1, 1.5));
  if (lowPower) return [initial];
  return [initial, ...QUALITY_STEPS.filter(step => step < initial - 0.001)];
}

export function createEngine(canvas, options = {}) {
  const {
    fov = 44,
    near = 0.5,
    far = 600,
    pixelRatio,
    background = 0x08131f
  } = options;

  const device = globalThis.navigator || {};
  const pointerCoarse = Boolean(window.matchMedia?.('(pointer: coarse)')?.matches);
  const profile = rendererProfileFor({
    devicePixelRatio: window.devicePixelRatio || 1,
    userAgent: device.userAgent || '',
    pointerCoarse,
    hardwareConcurrency: device.hardwareConcurrency || 0,
    deviceMemory: device.deviceMemory || 0
  });
  const graphics=graphicsPreset(options.graphicsQuality,options.lowPower??profile.lowPower);
  const explicitQuality=['low','medium','high','ultra'].includes(options.graphicsQuality);
  const lowPower = explicitQuality?graphics.id==='low':options.lowPower ?? profile.lowPower;
  const ratioCap = explicitQuality?graphics.pixelRatio:lowPower ? LOW_POWER_PIXEL_RATIO : 1.5;
  const initialPixelRatio = Math.max(0.5, Math.min(pixelRatio ?? (explicitQuality?graphics.pixelRatio:profile.initialPixelRatio), ratioCap));
  const qualitySteps = explicitQuality?[initialPixelRatio]:qualityStepsFor(initialPixelRatio, lowPower);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: options.antialias ?? (explicitQuality?graphics.antialias:!lowPower),
    alpha: false,
    powerPreference: 'high-performance',
    stencil: false
  });
  renderer.setPixelRatio(initialPixelRatio);
  renderer.setSize(STAGE_WIDTH, STAGE_HEIGHT, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = options.shadows ?? (explicitQuality?graphics.shadows:!lowPower);
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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
  const state = { fps: 60, quality: 0, frames: 0, elapsed: 0, pixelRatio: initialPixelRatio };
  let sampleTime = 0;
  let sampleFrames = 0;
  let recoverySamples = 0;
  const detailGovernor=createDetailGovernor(graphics);
  let shadowElapsed=1;
  if(graphics.id==='ultra'){renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;}

  function applyQuality(index) {
    const nextRatio = qualitySteps[index];
    if (Math.abs(renderer.getPixelRatio() - nextRatio) > 0.001) {
      renderer.setPixelRatio(nextRatio);
    }
    if (options.shadows === undefined) {
      // Ao perder desempenho, a primeira degradação também remove o passe de
      // sombra (que custa caro no WebView). Só reativa após recuperação estável.
      renderer.shadowMap.enabled = graphics.shadows && index === 0;
    }
    state.quality = index;
    state.pixelRatio = nextRatio;
  }

  /** Mede os quadros e baixa a resolução quando o aparelho não dá conta. */
  function sampleQuality(realFrameTime) {
    sampleTime += realFrameTime;
    sampleFrames += 1;
    if (sampleTime < 2) return;
    const fps = sampleFrames / sampleTime;
    state.fps = fps;
    if(detailGovernor.sample(fps)){
      const grass=scene.getObjectByName('xfc-procedural-grass');
      if(grass)grass.count=Math.min(graphics.grass,grass.instanceMatrix.count);
      renderer.shadowMap.needsUpdate=true;
    }
    state.detailLevel=detailGovernor.level;
    sampleTime = 0;
    sampleFrames = 0;
    if (fps < 34 && state.quality < qualitySteps.length - 1) {
      recoverySamples = 0;
      applyQuality(state.quality + 1);
    } else if (fps > 56 && state.quality > 0) {
      recoverySamples += 1;
      if (recoverySamples >= 3) {
        recoverySamples = 0;
        applyQuality(state.quality - 1);
      }
    } else {
      recoverySamples = 0;
    }
  }

  function frame() {
    raf = requestAnimationFrame(frame);
    const realFrameTime = Math.max(0, clock.getDelta() || 0);
    // Um passo maior permite que a partida continue avançando em aparelhos
    // que oscilam abaixo de 20 FPS, sem deixar a física saltar quadros longos.
    const dt = Math.min(realFrameTime, MAX_FRAME_DELTA);
    state.elapsed += realFrameTime;
    state.frames += 1;
    // Use o tempo real aqui: limitar dt para a física mascarava quadros muito
    // lentos (4 FPS eram medidos como ~20), impedindo a queda de qualidade.
    sampleQuality(realFrameTime);
    update?.(dt, state);
    if(graphics.id==='ultra'){
      shadowElapsed+=realFrameTime;
      if(shadowElapsed>=1/Math.max(1,graphics.shadowHz)){
        renderer.shadowMap.needsUpdate=true;shadowElapsed=0;
      }
    }
    renderer.render(scene, camera);
  }

  return {
    renderer,
    scene,
    camera,
    state,
    clock,
    lowPower,
    graphics,
    profile: { lowPower, initialPixelRatio, qualitySteps: [...qualitySteps] },
    /** Liga o laço de animação (retoma com o update já registrado). */
    start(step) {
      if (step) update = step;
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
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  root.traverse(node => {
    if (node.geometry && !geometries.has(node.geometry)) {
      geometries.add(node.geometry);
      node.geometry.dispose();
    }
    const list = Array.isArray(node.material)
      ? node.material
      : node.material ? [node.material] : [];
    for (const material of list) {
      if (!material || materials.has(material)) continue;
      materials.add(material);
      for (const key of Object.keys(material)) {
        const value = material[key];
        if (value?.isTexture && !value.userData?.shared && !textures.has(value)) {
          textures.add(value);
          value.dispose();
        }
      }
      material.dispose();
    }
  });
  root.parent?.remove(root);
}

/** Textura radial reutilizável para sombras suaves de jogadores e bola. */
export function softShadowTexture() {
  if (sharedSoftShadowTexture) return sharedSoftShadowTexture;
  sharedSoftShadowTexture = canvasTexture(128, 128, (context, width, height) => {
    const gradient = context.createRadialGradient(
      width / 2, height / 2, width * 0.06,
      width / 2, height / 2, width * 0.48
    );
    gradient.addColorStop(0, 'rgba(4, 10, 13, 0.34)');
    gradient.addColorStop(0.42, 'rgba(4, 10, 13, 0.18)');
    gradient.addColorStop(0.76, 'rgba(4, 10, 13, 0.055)');
    gradient.addColorStop(1, 'rgba(4, 10, 13, 0)');
    context.clearRect(0, 0, width, height);
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  }, { srgb: false });
  sharedSoftShadowTexture.name = 'xfc-shared-soft-shadow';
  sharedSoftShadowTexture.userData.shared = true;
  return sharedSoftShadowTexture;
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
