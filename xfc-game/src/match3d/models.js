// Modelo 3D real (glTF/Mixamo) do atleta, com animações mocap.
//
// O palco do jogo é um WebView offline: o pacote precisa carregar rápido e não
// pode quebrar se o modelo faltar. Por isso este módulo:
//
//   1. carrega UMA vez o esqueleto + malha (`assets/players/models/footballer.glb`)
//      e uma biblioteca de clipes (`assets/animations/<ação>/<ação>.glb`);
//   2. clona o esqueleto para cada atleta (`SkeletonUtils.clone`);
//   3. pinta o uniforme nas cores do time e liga o mixer com as camadas.
//
// A API de cada atleta é a MESMA do rig procedural (`player.js`): `update`,
// `kick`, `celebrate`, `dive`, `lookAt`, `setDynamicShadow`, `dispose` e
// `animation` (`speed`, `blend`, `trigger`, `applyMask`, `state`). Assim o
// motor (`match.js`) não sabe — nem precisa saber — qual modelo está em campo.

import { THREE, softShadowTexture } from './engine.js';
import { GLTFLoader } from '../../vendor/GLTFLoader.js';
import { clone as cloneSkeleton } from '../../vendor/SkeletonUtils.js';
import { BONE_KEYS, maskBones } from './animation.js';

const MODEL_URL = 'assets/players/models/footballer.glb';
const CLIP_URLS = Object.freeze({
  idle: 'assets/animations/idle/idle.glb',
  jog: 'assets/animations/jog/jog.glb',
  run: 'assets/animations/run/run.glb',
  kick: 'assets/animations/kick/kick.glb',
  header: 'assets/animations/header/header.glb',
  tackle: 'assets/animations/tackle/tackle.glb',
  celebrate: 'assets/animations/celebrate/celebrate.glb',
  dive: 'assets/animations/dive/dive.glb',
  'keeper-idle': 'assets/animations/keeper-idle/keeper-idle.glb',
  'throw-in': 'assets/animations/throw-in/throw-in.glb'
});

/** Nome sem o prefixo do Mixamo (o arquivo pode vir como `mixamorig:Hips`). */
function bareBone(name) {
  return String(name || '').split(':').pop().split('_').pop().replace(/^mixamorig/i, '');
}

/** Máscaras: grupos de ossos do esqueleto Mixamo. */
const MIXAMO_MASKS = Object.freeze({
  lower: ['Hips', 'LeftUpLeg', 'LeftLeg', 'LeftFoot', 'LeftToeBase', 'RightUpLeg', 'RightLeg', 'RightFoot', 'RightToeBase'],
  legs: ['LeftUpLeg', 'LeftLeg', 'LeftFoot', 'LeftToeBase', 'RightUpLeg', 'RightLeg', 'RightFoot', 'RightToeBase'],
  upper: ['Spine', 'Spine1', 'Spine2', 'LeftShoulder', 'LeftArm', 'LeftForeArm', 'LeftHand', 'RightShoulder', 'RightArm', 'RightForeArm', 'RightHand'],
  arms: ['LeftShoulder', 'LeftArm', 'LeftForeArm', 'LeftHand', 'RightShoulder', 'RightArm', 'RightForeArm', 'RightHand'],
  torso: ['Spine', 'Spine1', 'Spine2'],
  head: ['Neck', 'Head'],
  full: null
});

/** Normaliza `'upper+head'` etc. na lista de ossos Mixamo. */
export function mixamoMask(group) {
  const groups = maskBones(group).length === BONE_KEYS.length
    ? ['full']
    : String(group || 'full').toLowerCase().split(/[+|,/\s]+/).filter(Boolean);
  const bones = new Set();
  for (const raw of groups) {
    const key = raw === 'completo' ? 'full' : raw;
    const list = MIXAMO_MASKS[key] ?? MIXAMO_MASKS.full;
    if (!list) return null; // corpo inteiro
    for (const bone of list) bones.add(bone);
  }
  return bones.size ? bones : null;
}

/** Nome do osso de uma trilha (`mixamorig:Hips.quaternion` → `Hips`). */
function trackBone(trackName) {
  const property = String(trackName).split('.').slice(0, -1).join('.');
  return bareBone(property);
}

const maskedCache = new Map();
/** Recorta um clipe para os ossos da máscara — é assim que a camada é isolada. */
export function maskClip(clip, mask, key = 'full') {
  if (!mask) return clip;
  const cacheKey = `${clip.uuid}|${key}`;
  if (maskedCache.has(cacheKey)) return maskedCache.get(cacheKey);
  const tracks = clip.tracks.filter(track => mask.has(trackBone(track.name)));
  const masked = new THREE.AnimationClip(`${clip.name}#${key}`, clip.duration, tracks);
  maskedCache.set(cacheKey, masked);
  return masked;
}

/** Mapa osso → rotação de repouso (pose de bind do arquivo). */
function restQuaternions(root) {
  const map = new Map();
  root.traverse(object => {
    if (object.isBone || object.type === 'Object3D' || object.isObject3D) {
      const key = bareBone(object.name);
      if (key && !map.has(key)) map.set(key, object.quaternion.clone());
    }
  });
  return map;
}

/**
 * Reencaixa um clipe de outra origem no nosso esqueleto.
 *
 * Os dois são Mixamo (mesma hierarquia e mesmos nomes de osso), mas cada
 * arquivo foi exportado com uma orientação de repouso própria — o Soldier, por
 * exemplo, tem o quadril e a coxa girados em relação ao arquivo do clipe.
 * Tocar o clipe cru deita o atleta. A correção é a clássica de retarget local:
 *
 *     q_alvo(t) = repouso_alvo · repouso_origem⁻¹ · q_origem(t)
 *
 * Como repouso_alvo · repouso_origem⁻¹ é uma constante por osso, ela pode ser
 * multiplicada em cada keyframe uma única vez, no carregamento.
 */
function retargetClip(clip, targetRest, sourceRest) {
  const tracks = [];
  for (const track of clip.tracks) {
    const isQuaternion = track.name.endsWith('.quaternion');
    const isPosition = track.name.endsWith('.position');
    const bone = trackBone(track.name);
    if (!isQuaternion && !isPosition) { tracks.push(track); continue; }
    const target = targetRest.get(bone);
    const source = sourceRest.get(bone);
    if (!target || !source) continue; // osso que não existe no nosso modelo
    // Trilhas de posição: o deslocamento do quadril do arquivo de origem está
    // em outro referencial e afunda o atleta no gramado. O corpo é posicionado
    // pelo motor (raiz do atleta), então só as rotações são aproveitadas.
    if (isPosition) continue;
    const correction = target.clone().multiply(source.clone().invert());
    const values = new Float32Array(track.values.length);
    const q = new THREE.Quaternion();
    for (let i = 0; i < track.values.length; i += 4) {
      q.set(track.values[i], track.values[i + 1], track.values[i + 2], track.values[i + 3]);
      q.premultiply(correction).normalize();
      values[i] = q.x; values[i + 1] = q.y; values[i + 2] = q.z; values[i + 3] = q.w;
    }
    tracks.push(new THREE.QuaternionKeyframeTrack(track.name, Array.from(track.times), Array.from(values)));
  }
  return new THREE.AnimationClip(`${clip.name}-xfc`, clip.duration, tracks);
}

function materialList(object) {
  if (!object.isMesh) return [];
  return Array.isArray(object.material) ? object.material : [object.material];
}

/** Pacote carregado uma única vez por partida. */
let packPromise = null;
let pack = null;

function loadGlb(url) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(url, resolve, undefined, reject);
  });
}

/**
 * Carrega malha + clipes. Exportado para os testes e para o pré-carregamento
 * das telas; chamadas repetidas reaproveitam a mesma promessa.
 */
export function preloadFootballerPack() {
  if (packPromise) return packPromise;
  packPromise = (async () => {
    const [gltf, ...clips] = await Promise.all([
      loadGlb(MODEL_URL),
      ...Object.entries(CLIP_URLS).map(async ([name, url]) => {
        try {
          const clipGltf = await loadGlb(url);
          return [name, clipGltf];
        } catch (error) {
          console.warn('[xfc] clipe indisponível', name, error?.message || error);
          return [name, null];
        }
      })
    ]);
    const targetRest = restQuaternions(gltf.scene);
    const library = new Map();
    for (const [name, clipGltf] of clips) {
      const raw = clipGltf?.animations?.[0];
      if (!raw) continue;
      library.set(name, retargetClip(raw, targetRest, restQuaternions(clipGltf.scene)));
    }
    if (!library.size) throw new Error('nenhum clipe Mixamo carregou');
    pack = { scene: gltf.scene, clips: library };
    return pack;
  })().catch(error => {
    console.warn('[xfc] modelo glTF indisponível, usando o rig procedural', error?.message || error);
    packPromise = null;
    return null;
  });
  return packPromise;
}

export function footballerPackReady() {
  return Boolean(pack);
}

/**
 * Atletas glTF entram por opt-in: `?models=glb` na URL ou `window.__XFC_GLTF`.
 *
 * Por que não é o padrão: o único corpo humano rigado que dá para baixar aqui
 * (o "Soldier" do three.js, Mixamo Vanguard) tem a orientação de repouso dos
 * ossos diferente da dos clipes de futebol do Mixamo. As pernas e o tronco
 * reencaixam com a correção de `retargetClip()`, mas os braços torcem — golpe
 * de futebol com braço cruzado não passa. O elenco desenhado por código
 * continua sendo o atleta do jogo até chegar um modelo cujas animações venham
 * junto com ele (ex.: "Man Player" do Sketchfab, CC-BY, 20 clipes).
 */
export function gltfPlayersEnabled() {
  if (typeof window === 'undefined') return false;
  if (window.__XFC_GLTF === true) return true;
  if (window.__XFC_GLTF === false) return false;
  return /(?:^|[?&])models=glb(?:&|$)/.test(String(window.location?.search || ''));
}

/** Caixa do modelo na pose de bind (o Box3 do SkinnedMesh não serve). */
function bindPoseBounds(object) {
  const box = new THREE.Box3();
  const point = new THREE.Vector3();
  object.updateMatrixWorld(true);
  object.traverse(mesh => {
    if (!mesh.isMesh || !mesh.geometry?.attributes?.position) return;
    const position = mesh.geometry.attributes.position;
    for (let index = 0; index < position.count; index += 1) {
      point.fromBufferAttribute(position, index).applyMatrix4(mesh.matrixWorld);
      box.expandByPoint(point);
    }
  });
  return box;
}

function findBone(root, name) {
  let found = null;
  root.traverse(object => {
    if (!found && object.isBone && bareBone(object.name) === name) found = object;
  });
  return found;
}

/**
 * Atleta glTF com o mesmo contrato do rig procedural.
 * @returns {object|null} `null` quando o pacote ainda não chegou.
 */
export function createGltfPlayer(options = {}) {
  if (!pack) return null;
  const {
    kit = { primary: '#2ef0a8', secondary: '#0b2b3a', accent: '#ffffff' },
    number = 10,
    isKeeper = false,
    heightScale = 1,
    simplified = false,
    preferredFoot = 'Right'
  } = options;

  const root = new THREE.Group();
  root.name = 'xfc-footballer-glb';
  root.userData.modelId = 'xfc-footballer-glb';
  root.userData.detailLevel = simplified ? 'mobile' : 'full';

  const model = cloneSkeleton(pack.scene);
  model.name = 'xfc-footballer-glb-body';
  root.add(model);

  // Normaliza a altura: o Mixamo exporta em metros, mas cada arquivo pode
  // variar. A escala final precisa ser 1,8 m para o campo continuar correto.
  // Alguns exports vêm com Z para cima (3ds Max/Mixamo antigos). Detecta pela
  // caixa da pose de bind e gira para o Y do jogo antes de medir a altura.
  let box = bindPoseBounds(model);
  let size = box.getSize(new THREE.Vector3());
  if (size.z > size.y * 1.25) {
    model.rotation.x = -Math.PI / 2;
    model.updateMatrixWorld(true);
    box = bindPoseBounds(model);
    size = box.getSize(new THREE.Vector3());
  }
  const targetHeight = 1.82 * (Number(heightScale) || 1);
  const scale = size.y > 0.01 ? targetHeight / size.y : 1;
  model.scale.setScalar(scale);
  model.position.y = -box.min.y * scale;

  const primary = new THREE.Color(isKeeper ? (kit.keeperPrimary || '#f5c518') : kit.primary);
  const secondary = new THREE.Color(isKeeper ? (kit.keeperSecondary || '#1a1a1a') : kit.secondary);
  const shadowMeshes = [];
  const materials = [];
  model.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = true;
    object.frustumCulled = false;
    shadowMeshes.push(object);
    const list = materialList(object).map(material => {
      const clone = material.clone();
      const name = String(material.name || '');
      // O modelo vem com atlas de textura (armadura/tecido/pele no mesmo mapa).
      // Em vez de jogar a cor por cima — o que apagaria a textura e deixaria a
      // pele amarela — misturamos só parte da cor do time, mantendo o desenho.
      const tint = /visor|glass|eye/i.test(name) ? secondary : primary;
      const strength = /visor|glass/i.test(name) ? 0.75 : 0.55;
      clone.color = clone.color.copy(new THREE.Color(1, 1, 1)).lerp(tint, strength);
      clone.roughness = Math.min(1, (clone.roughness ?? 0.8) + 0.1);
      clone.metalness = 0;
      materials.push(clone);
      return clone;
    });
    object.material = Array.isArray(object.material) ? list : list[0];
  });

  // Sombra de contato (a mesma do rig procedural): barata e sempre presente.
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.92, 0.72),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture(),
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      toneMapped: false
    })
  );
  shadow.name = 'xfc-player-shadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  shadow.castShadow = false;
  root.add(shadow);

  const bones = {
    hips: findBone(model, 'Hips'),
    spine2: findBone(model, 'Spine2'),
    neck: findBone(model, 'Neck'),
    head: findBone(model, 'Head'),
    leftArm: findBone(model, 'LeftArm'),
    leftForeArm: findBone(model, 'LeftForeArm'),
    rightArm: findBone(model, 'RightArm'),
    rightForeArm: findBone(model, 'RightForeArm'),
    leftUpLeg: findBone(model, 'LeftUpLeg'),
    leftLeg: findBone(model, 'LeftLeg'),
    leftFoot: findBone(model, 'LeftFoot'),
    rightUpLeg: findBone(model, 'RightUpLeg'),
    rightLeg: findBone(model, 'RightLeg'),
    rightFoot: findBone(model, 'RightFoot')
  };

  const mixer = new THREE.AnimationMixer(model);
  mixer.timeScale = 1;

  /** Ações vivas por clipe+máscara. */
  const actions = new Map();
  const gestureTimers = [];

  function actionFor(clipName, mask, key) {
    const source = pack.clips.get(clipName) || null;
    if (!source) return null;
    const cacheKey = `${clipName}|${key}`;
    if (actions.has(cacheKey)) return actions.get(cacheKey);
    const clip = maskClip(source, mask, key);
    if (!clip.tracks.length) return null;
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.enabled = true;
    action.setEffectiveWeight(0);
    action.play();
    actions.set(cacheKey, action);
    return action;
  }

  const state = {
    speed: 1,
    mask: 'full',
    locomotion: 'idle',
    locomotionWeights: { idle: 1, jog: 0, run: 0 },
    gestures: new Map(),
    lastDistance: 0,
    shadowEnabled: true
  };

  function fadeAction(clipName, weight, opts = {}) {
    const mask = mixamoMask(opts.mask || state.mask);
    const key = opts.mask || state.mask || 'full';
    const action = actionFor(clipName, mask, key);
    if (!action) return null;
    const fade = Number.isFinite(opts.fade) ? Math.max(0.02, opts.fade) : 0.18;
    const target = Math.max(0, Math.min(1, weight));
    action.setEffectiveWeight(target);
    if (target <= 0.001) action.stop();
    if (opts.once) {
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.reset();
      action.setEffectiveWeight(target);
      action.play();
    }
    action.userData = { fade, target };
    return action;
  }

  /** Locomoção: mistura idle/jog/run pela velocidade (blend tree). */
  function updateLocomotion(speed) {
    const value = Math.max(0, Number(speed) || 0);
    let idle = 0;
    let jog = 0;
    let run = 0;
    if (value < 0.35) {
      idle = 1;
    } else if (value < 2.6) {
      const t = (value - 0.35) / 2.25;
      idle = 1 - t;
      jog = t;
    } else {
      const t = Math.min(1, (value - 2.6) / 3.4);
      jog = 1 - t;
      run = t;
    }
    state.locomotionWeights = { idle, jog, run };
    for (const [name, weight] of Object.entries(state.locomotionWeights)) {
      const action = actionFor(name, null, 'full');
      if (!action) continue;
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.setEffectiveWeight(weight);
      if (weight > 0 && !action.isRunning()) action.play();
      if (weight <= 0.001) action.stop();
    }
    // O clipe de "run" avança mais rápido proporcionalmente à corrida.
    const runAction = actions.get('run|full');
    if (runAction) runAction.setEffectiveTimeScale(0.85 + Math.min(1.1, value / 7));
  }

  const api = {
    root,
    body: model,
    head: bones.head,
    bones,
    arms: [
      { shoulder: bones.leftArm, forearm: bones.leftForeArm },
      { shoulder: bones.rightArm, forearm: bones.rightForeArm }
    ],
    legs: [
      { hip: bones.leftUpLeg, knee: bones.leftLeg, foot: bones.leftFoot },
      { hip: bones.rightUpLeg, knee: bones.rightLeg, foot: bones.rightFoot }
    ],
    mixer,
    isGltf: true,

    kick(type = 'shot') {
      api.animation.trigger('kick', { mask: 'lower', weight: 1, fade: 0.08 });
    },
    pass(kind = 'pass') {
      api.animation.trigger(kind === 'cross' ? 'kick' : 'kick', { mask: 'lower', duration: 0.34, fade: 0.07 });
    },
    header(duration = 0.4) {
      api.animation.trigger('header', { mask: 'upper+head', duration, fade: 0.08 });
    },
    celebrate(duration = 2.6) {
      api.animation.trigger('celebrate', { mask: 'full', duration, fade: 0.12 });
    },
    receive() {
      api.animation.trigger('throw-in', { mask: 'upper', duration: 0.6, fade: 0.1 });
    },
    dive(dir = 1) {
      api.animation.trigger('dive', { mask: 'full', duration: 0.95, fade: 0.06 });
    },
    slideTackle(dir = 1, duration = 0.82) {
      api.animation.trigger('tackle', { mask: 'full', duration, fade: 0.1 });
    },
    react() {
      api.animation.trigger('tackle', { mask: 'lower', duration: 0.6, fade: 0.1 });
    },
    signal(duration = 1.1) {
      api.animation.trigger('throw-in', { mask: 'upper+head', duration, fade: 0.12 });
    },
    prepareCard() {},
    showCard() {},
    lookAt(target) {
      if (!target || !bones.head) return;
      const dx = target.x - root.position.x;
      const dz = target.z - root.position.z;
      const angle = Math.atan2(dx, dz) - root.rotation.y;
      const yaw = Math.max(-0.9, Math.min(0.9, angle));
      bones.neck.rotation.y += yaw * 0.35;
      bones.head.rotation.y += yaw * 0.5;
      const pitch = Math.max(-0.35, Math.min(0.35, -(target.y || 0) * 0.12));
      bones.head.rotation.x += pitch;
    },

    setDynamicShadow(enabled) {
      const next = Boolean(enabled);
      if (next === state.shadowEnabled) return next;
      state.shadowEnabled = next;
      for (const mesh of shadowMeshes) mesh.castShadow = next;
      return next;
    },
    get castsDynamicShadow() {
      return state.shadowEnabled;
    },

    update(dt, movement = {}) {
      const step = Number.isFinite(dt) ? Math.min(0.1, Math.max(0, dt)) : 0;
      const distance = Number.isFinite(movement.distance) ? movement.distance : state.lastDistance;
      state.lastDistance = distance;
      const speed = Math.max(0, Number(movement.speed) || 0);
      if (distance > 62) return; // longe demais: nada de mixer
      mixer.timeScale = state.speed;
      if (distance > 34 && step > 0) {
        // LOD: atletas distantes animam a metade da taxa.
        mixer.update(step * 0.5);
        return;
      }
      updateLocomotion(speed);
      mixer.update(step);
      // Gestos com prazo: quando o clipe acaba, o peso volta a zero.
      for (let index = gestureTimers.length - 1; index >= 0; index -= 1) {
        const timer = gestureTimers[index];
        timer.remaining -= step;
        if (timer.remaining <= 0) {
          timer.action.setEffectiveWeight(0);
          timer.action.stop();
          gestureTimers.splice(index, 1);
        }
      }
    },

    dispose() {
      mixer.stopAllAction();
      mixer.uncacheRoot(model);
      for (const material of materials) material.dispose();
      shadow.geometry.dispose();
      shadow.material.dispose();
      root.traverse(object => { object.userData.disposed = true; });
    }
  };

  /** Camadas de animação para esta malha (mesma API de `animation.js`). */
  api.animation = {
    get speed() {
      return state.speed;
    },
    set speed(value) {
      const next = Number(value);
      if (Number.isFinite(next)) state.speed = Math.max(0, Math.min(4, next));
    },
    get mask() {
      return state.mask;
    },
    applyMask(group) {
      state.mask = group || 'full';
      return state.mask;
    },
    blend(clipName, weight = 1, opts = {}) {
      const action = fadeAction(clipName, weight, opts);
      return action ? `${clipName}|${opts.mask || state.mask || 'full'}` : null;
    },
    trigger(clipName, opts = {}) {
      const duration = Number.isFinite(opts.duration)
        ? opts.duration
        : (pack.clips.get(clipName)?.duration || 0.6);
      const action = fadeAction(clipName, opts.weight ?? 1, { ...opts, once: true, fade: 0.08 });
      if (!action) return null;
      gestureTimers.push({ action, remaining: Math.max(0.12, duration) });
      return `${clipName}|${opts.mask || state.mask || 'full'}`;
    },
    stop(clipName) {
      let stopped = 0;
      for (const [key, action] of actions) {
        if (clipName && !key.startsWith(String(clipName))) continue;
        action.setEffectiveWeight(0);
        action.stop();
        actions.delete(key);
        stopped += 1;
      }
      return stopped;
    },
    state() {
      return {
        model: 'glb',
        speed: state.speed,
        mask: state.mask,
        weights: { ...state.locomotionWeights },
        layers: [...actions.entries()]
          .filter(([, action]) => action.isRunning() && action.getEffectiveWeight() > 0.001)
          .map(([key, action]) => ({
            clip: key.split('|')[0],
            mask: key.split('|')[1],
            weight: Number(action.getEffectiveWeight().toFixed(3))
          })),
        distance: state.lastDistance
      };
    }
  };

  return api;
}
