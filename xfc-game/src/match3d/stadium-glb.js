// Carrega um estádio .glb (Sketchfab / glTF) e encaixa no gramado do XFC.
// Se o arquivo faltar ou o loader falhar, a arquibancada procedural continua.

import { THREE } from './engine.js';
import { GLTFLoader } from '../../vendor/GLTFLoader.js';

const cache = new Map();

function loadGlb(url) {
  if (cache.has(url)) return cache.get(url);
  const promise = new Promise((resolve, reject) => {
    new GLTFLoader().load(url, resolve, undefined, reject);
  }).catch(error => {
    cache.delete(url);
    throw error;
  });
  cache.set(url, promise);
  return promise;
}

function prepareMaterials(root) {
  root.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = false;
    object.receiveShadow = true;
    object.renderOrder = -1;
    const list = Array.isArray(object.material) ? object.material : [object.material];
    for (const material of list) {
      if (!material) continue;
      // Sketchfab exporta BLEND + doubleSide; no campo isso vira sorting errado.
      material.transparent = false;
      material.opacity = 1;
      material.depthWrite = true;
      material.polygonOffset = true;
      material.polygonOffsetFactor = 2;
      material.polygonOffsetUnits = 2;
      material.side = THREE.DoubleSide;
      material.needsUpdate = true;
    }
  });
}

/**
 * Centra o modelo, senta no chão e escala o gramado interno para o PITCH do XFC.
 * `fit.innerLength` / `innerWidth` são o campo do modelo, em metros.
 */
export function fitStadiumGlb(scene, pitch, fit = {}) {
  const wrap = new THREE.Group();
  wrap.name = 'xfc-glb-fit';
  wrap.add(scene);
  scene.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  scene.position.x -= center.x;
  scene.position.y -= box.min.y;
  scene.position.z -= center.z;
  if (Number.isFinite(fit.rotateY) && fit.rotateY) wrap.rotation.y = fit.rotateY;
  const innerLength = fit.innerLength > 0 ? fit.innerLength : 105;
  const innerWidth = fit.innerWidth > 0 ? fit.innerWidth : 68;
  wrap.scale.setScalar(Math.max(pitch.length / innerLength, pitch.width / innerWidth));
  // O GLB traz o próprio piso (cinza). Afunda o modelo para o gramado do XFC
  // ficar por cima e as arquibancadas ainda aparecerem em volta.
  const sink = Number.isFinite(fit.sink) && fit.sink >= 0 ? fit.sink : 1.6;
  wrap.position.y -= sink;
  return wrap;
}

/** Anexa o GLB ao grupo do estádio. `onReady` esconde o bowl procedural. */
export function mountStadiumGlb(parent, stadium, pitch, onReady) {
  const holder = new THREE.Group();
  holder.name = 'xfc-stadium-glb';
  parent.add(holder);
  let cancelled = false;
  loadGlb(stadium.glb).then(gltf => {
    if (cancelled) return;
    const root = gltf.scene.clone(true);
    prepareMaterials(root);
    holder.add(fitStadiumGlb(root, pitch, stadium.glbFit || {}));
    onReady?.(holder);
  }).catch(error => {
    console.warn('[xfc] estádio glTF indisponível', stadium.glb, error?.message || error);
  });
  return {
    group: holder,
    dispose() {
      cancelled = true;
      parent.remove(holder);
    }
  };
}
