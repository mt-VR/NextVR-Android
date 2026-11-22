// Carrega o estádio .glb inteiro. A difusa vai num JPEG à parte: o PNG
// specular-glossiness do Sketchfab chega cinza no WebView do Android.

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

function loadAlbedo(url) {
  if (!url) return Promise.resolve(null);
  return new Promise(resolve => {
    new THREE.TextureLoader().load(url, texture => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.flipY = false;
      texture.anisotropy = 2;
      texture.needsUpdate = true;
      resolve(texture);
    }, undefined, () => resolve(null));
  });
}

function paintStadium(root, albedo) {
  root.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = false;
    object.receiveShadow = true;
    object.material = new THREE.MeshBasicMaterial({
      map: albedo,
      color: 0xffffff,
      side: THREE.DoubleSide,
      fog: true,
      depthWrite: true
    });
  });
}

/**
 * O centro do gramado do GLB vai para a origem do XFC.
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

export function mountStadiumGlb(parent, stadium, pitch, onReady) {
  const holder = new THREE.Group();
  holder.name = 'xfc-stadium-glb';
  parent.add(holder);
  let cancelled = false;
  Promise.all([loadGlb(stadium.glb), loadAlbedo(stadium.albedo)]).then(([gltf, albedo]) => {
    if (cancelled) return;
    const root = gltf.scene.clone(true);
    paintStadium(root, albedo);
    holder.add(fitStadiumGlb(root, pitch, stadium.glbFit || {}));
    parent.traverse(object => {
      if (object.name === 'xfc-procedural-bowl') object.visible = false;
    });
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
