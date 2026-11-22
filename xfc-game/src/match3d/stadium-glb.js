// Carrega o estádio .glb inteiro (gramado, arquibancada, teto, arredores).
// Se o arquivo faltar ou o loader falhar, o estádio procedural continua.

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

/** Lambert + difusa: o specular-glossiness do Sketchfab fica cinza no WebView. */
function prepareMaterials(root) {
  root.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = false;
    object.receiveShadow = true;
    const list = Array.isArray(object.material) ? object.material : [object.material];
    const next = list.map(material => {
      if (!material) return material;
      const map = material.map;
      if (map) {
        map.colorSpace = THREE.SRGBColorSpace;
        map.anisotropy = 2;
        map.needsUpdate = true;
      }
      return new THREE.MeshLambertMaterial({
        map: map || null,
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: false,
        depthWrite: true
      });
    });
    object.material = next.length === 1 ? next[0] : next;
  });
}

/**
 * Encaixa o modelo completo: o centro do gramado do GLB vai para a origem
 * do XFC, o chão senta em y=0 e a escala casa o campo interno com o PITCH.
 */
export function fitStadiumGlb(scene, pitch, fit = {}) {
  const wrap = new THREE.Group();
  wrap.name = 'xfc-glb-fit';
  wrap.add(scene);
  scene.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(scene);
  const pitchCenter = fit.pitchCenter;
  if (pitchCenter && Number.isFinite(pitchCenter.x) && Number.isFinite(pitchCenter.z)) {
    scene.position.x -= pitchCenter.x;
    scene.position.z -= pitchCenter.z;
  } else {
    const center = box.getCenter(new THREE.Vector3());
    scene.position.x -= center.x;
    scene.position.z -= center.z;
  }
  scene.position.y -= box.min.y;
  if (Number.isFinite(fit.rotateY) && fit.rotateY) wrap.rotation.y = fit.rotateY;
  const innerLength = fit.innerLength > 0 ? fit.innerLength : 105;
  const innerWidth = fit.innerWidth > 0 ? fit.innerWidth : 68;
  wrap.scale.setScalar(Math.max(pitch.length / innerLength, pitch.width / innerWidth));
  return wrap;
}

const HIDE_WHEN_GLB = [
  'xfc-procedural-bowl',
  'xfc-pitch',
  'xfc-pitch-surround',
  'xfc-stadium-foundation',
  'xfc-procedural-grass',
  'xfc-touchline',
  'xfc-goalline'
];

export function hideProceduralPitch(root) {
  root.traverse(object => {
    if (HIDE_WHEN_GLB.includes(object.name)) object.visible = false;
  });
}

/** Anexa o GLB completo. `onReady` esconde o palco procedural. */
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
    hideProceduralPitch(parent);
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
