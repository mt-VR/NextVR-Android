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

/** Rotação de mundo de cada osso (pose de bind ou pose animada). */
function worldQuaternions(root, out = new Map()) {
  root.updateMatrixWorld(true);
  root.traverse(object => {
    if (object.isBone) out.set(bareBone(object.name), object.getWorldQuaternion(new THREE.Quaternion()));
  });
  return out;
}

/**
 * Retarget de verdade: reescreve o clipe no espaço de MUNDO.
 *
 * A correção local (`retargetClip`) só funciona quando os dois esqueletos têm
 * a mesma orientação de repouso por osso. Quando o export gira o quadril ou a
 * coxa 180° (Soldier/Xbot), a constante por osso não dá conta e os braços
 * torcem. No espaço de mundo a conta é exata e independe do repouso:
 *
 *     A(osso)       = mundo_alvo(repouso) · mundo_origem(repouso)⁻¹
 *     mundo_alvo(t) = A(osso) · mundo_origem(t)
 *     local(t)      = mundo_alvo(pai)⁻¹ · mundo_alvo(osso)
 *
 * O `pai` é o objeto pai real (osso ou não), porque entre o Hips e a raiz do
 * modelo pode existir um nó de armadura com rotação/escala própria.
 * O clipe inteiro é assado a 30 fps uma única vez, no carregamento.
 */
function bakeRetarget(clipGltf, clip, targetRoot, targetRest) {
  const scene = clipGltf.scene;
  const sourceRest = worldQuaternions(scene);
  const align = new Map();
  for (const [bone, rest] of targetRest) {
    const source = sourceRest.get(bone);
    if (source) align.set(bone, rest.clone().multiply(source.clone().invert()));
  }
  if (!align.size) return clip;

  const mixer = new THREE.AnimationMixer(scene);
  mixer.clipAction(clip).play();
  const fps = 30;
  const frames = Math.max(2, Math.round(clip.duration * fps) + 1);

  const order = [];
  targetRoot.traverse(object => {
    if (object.isBone && align.has(bareBone(object.name))) order.push(object);
  });
  if (!order.length) { mixer.stopAllAction(); return clip; }

  const values = new Map(order.map(bone => [bone, new Float32Array(frames * 4)]));
  const source = new Map();
  const targetWorld = new Map();
  const local = new THREE.Quaternion();
  const parentWorld = new THREE.Quaternion();
  const inverse = new THREE.Quaternion();

  for (let frame = 0; frame < frames; frame += 1) {
    mixer.setTime(Math.min(clip.duration, frame / fps));
    scene.updateMatrixWorld(true);
    source.clear();
    worldQuaternions(scene, source);
    targetWorld.clear();
    for (const bone of order) {
      const key = bareBone(bone.name);
      const sourceWorld = source.get(key);
      if (sourceWorld) targetWorld.set(bone, align.get(key).clone().multiply(sourceWorld));
    }
    for (const bone of order) {
      const world = targetWorld.get(bone);
      if (!world) continue;
      const parent = bone.parent;
      let base = null;
      if (parent && targetWorld.has(parent)) base = targetWorld.get(parent);
      else if (parent) base = parent.getWorldQuaternion(parentWorld);
      local.copy(world);
      if (base) local.premultiply(inverse.copy(base).invert());
      local.normalize();
      const track = values.get(bone);
      track[frame * 4] = local.x;
      track[frame * 4 + 1] = local.y;
      track[frame * 4 + 2] = local.z;
      track[frame * 4 + 3] = local.w;
    }
  }
  mixer.stopAllAction();
  mixer.uncacheRoot(scene);

  const times = Array.from({ length: frames }, (_, index) => index / fps);
  const tracks = [];
  for (const [bone, track] of values) {
    tracks.push(new THREE.QuaternionKeyframeTrack(`${bone.name}.quaternion`, times, Array.from(track)));
  }
  return new THREE.AnimationClip(`${clip.name}-xfc`, times[times.length - 1], tracks);
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
    const targetRestWorld = worldQuaternions(gltf.scene);
    const targetRestLocal = restQuaternions(gltf.scene);
    const library = new Map();
    // Clipes que vêm DENTRO do modelo (Idle/Run/Walk do próprio Mixamo) rodam
    // sem retarget: são do mesmo esqueleto, sempre perfeitos. Eles substituem
    // a biblioteca externa nos nomes equivalentes.
    const OWN_CLIPS = { idle: ['idle', 'idle_01', 'stand'], jog: ['walk', 'jog'], run: ['run', 'sprint'] };
    for (const animation of gltf.animations || []) {
      const slug = String(animation.name || '').toLowerCase().trim();
      for (const [name, aliases] of Object.entries(OWN_CLIPS)) {
        if (!aliases.includes(slug)) continue;
        library.set(name, new THREE.AnimationClip(`${name}-own`, animation.duration,
          animation.tracks.filter(track => !track.name.endsWith('.position'))));
      }
    }
    for (const [name, clipGltf] of clips) {
      if (library.has(name)) continue;
      const raw = clipGltf?.animations?.[0];
      if (!raw) continue;
      try {
        library.set(name, bakeRetarget(clipGltf, raw, gltf.scene, targetRestWorld));
      } catch (error) {
        console.warn('[xfc] retarget de mundo falhou, usando delta local', name, error?.message || error);
        library.set(name, retargetClip(raw, targetRestLocal, restQuaternions(clipGltf.scene)));
      }
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
 * Atletas glTF ligados por padrão: é o corpo humano de verdade do jogo.
 *
 * O rig procedural continua como reserva — se o `.glb` faltar, falhar ou o
 * aparelho pedir o modo leve (`?models=2d|none|procedural` ou
 * `window.__XFC_GLTF = false`), `createGltfPlayer` devolve `null` e a partida
 * usa `createPlayer3D`.
 */
export function gltfPlayersEnabled() {
  if (typeof window === 'undefined') return false;
  if (window.__XFC_GLTF === false) return false;
  if (window.__XFC_GLTF === true) return true;
  return !/(?:^|[?&])models=(?:2d|none|procedural)(?:&|$)/.test(String(window.location?.search || ''));
}

/** Caixa do modelo na pose de bind (o Box3 do SkinnedMesh não serve). */
function bindPoseBounds(object) {
  const box = new THREE.Box3();
  const point = new THREE.Vector3();
  object.updateMatrixWorld(true);
  object.traverse(mesh => {
    if (!mesh.isMesh || !mesh.geometry?.attributes?.position) return;
    const position = mesh.geometry.attributes.position;
    const skinned = mesh.isSkinnedMesh && typeof mesh.applyBoneTransform === 'function';
    for (let index = 0; index < position.count; index += 1) {
      point.fromBufferAttribute(position, index);
      // `applyBoneTransform` devolve o vértice já na pose de bind com os pesos
      // das juntas — é o único jeito de medir modelos cujo bind embute escala
      // (Michelle/MakeHuman vem em centímetros e com bindMatrix escalado).
      if (skinned) mesh.applyBoneTransform(index, point);
      point.applyMatrix4(mesh.matrixWorld);
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

  // ---------------------------------------------------------------------
  // Gestos por bone (camada aditiva)
  //
  // Os clipes de futebol do repositório foram exportados com outro repouso e
  // torcem os braços deste esqueleto. Em vez de depender deles para os gestos,
  // o gesto é escrito direto nos ossos (rotações locais somadas à pose do
  // mixer), com entrada/saída suaves. Assim o andar/correr continua vindo dos
  // clipes nativos do modelo e o chute/comemoração são previsíveis.
  // ---------------------------------------------------------------------
  const gesture = { name: null, time: 0, duration: 0, dir: 1 };
  const gEuler = new THREE.Euler();
  const gQuat = new THREE.Quaternion();
  const gBlend = new THREE.Quaternion();

  function addBoneRotation(bone, x, y, z, weight) {
    if (!bone || weight <= 0.001) return;
    gQuat.setFromEuler(gEuler.set(x, y, z, 'XYZ'));
    gBlend.identity().slerp(gQuat, Math.min(1, weight));
    bone.quaternion.multiply(gBlend);
  }

  const GESTURES = {
    kick: 0.46,
    header: 0.5,
    celebrate: 2.2,
    dive: 0.9,
    tackle: 0.8,
    react: 0.55,
    signal: 0.9
  };

  function startGesture(name, duration) {
    if (!GESTURES[name]) return null;
    gesture.name = name;
    gesture.time = 0;
    gesture.duration = Number.isFinite(duration) ? duration : GESTURES[name];
    return name;
  }

  /** Peso da camada de gesto: entra rápido, segura e sai antes do fim. */
  function gestureEnvelope() {
    const t = gesture.time;
    const total = gesture.duration;
    const fadeIn = Math.min(0.1, total * 0.25);
    const fadeOut = Math.min(0.18, total * 0.3);
    const rise = fadeIn > 0 ? Math.min(1, t / fadeIn) : 1;
    const fall = fadeOut > 0 ? Math.min(1, Math.max(0, (total - t) / fadeOut)) : 1;
    const smooth = value => value * value * (3 - 2 * value);
    return smooth(Math.min(rise, fall));
  }

  function applyGesture(step) {
    if (!gesture.name) return;
    gesture.time += step;
    if (gesture.time >= gesture.duration) {
      gesture.name = null;
      return;
    }
    const p = gesture.time / gesture.duration;
    const w = gestureEnvelope();
    const dir = gesture.dir >= 0 ? 1 : -1;
    const wave = Math.sin(Math.PI * p);
    switch (gesture.name) {
      case 'kick': {
        // Pernada: recua, chuta e volta. Joelho abre antes do contato.
        const swing = p < 0.3 ? -0.9 * (p / 0.3) : 1.3 * Math.sin(((p - 0.3) / 0.7) * Math.PI);
        const knee = p < 0.45 ? 1.0 * Math.sin(Math.PI * Math.min(1, p / 0.45)) : 0.15;
        addBoneRotation(bones.rightUpLeg, swing, 0, 0, w);
        addBoneRotation(bones.rightLeg, -knee, 0, 0, w);
        addBoneRotation(bones.rightFoot, knee * 0.4, 0, 0, w);
        addBoneRotation(bones.leftUpLeg, -swing * 0.18, 0, 0, w);
        addBoneRotation(bones.spine2, -0.22 * wave, 0.12 * wave, 0, w);
        addBoneRotation(bones.leftArm, 0, 0, 0.55 * wave, w);
        addBoneRotation(bones.rightArm, 0, 0, -0.35 * wave, w);
        break;
      }
      case 'header': {
        addBoneRotation(bones.spine2, 0.35 * wave, 0, 0, w);
        addBoneRotation(bones.neck, -0.5 * wave, 0, 0, w);
        addBoneRotation(bones.head, -0.4 * wave, 0, 0, w);
        addBoneRotation(bones.leftUpLeg, -0.25 * wave, 0, 0, w);
        addBoneRotation(bones.rightUpLeg, 0.25 * wave, 0, 0, w);
        break;
      }
      case 'celebrate': {
        const lift = Math.sin(Math.PI * Math.min(1, p * 1.4));
        addBoneRotation(bones.leftArm, -2.2 * lift, 0, 0, w);
        addBoneRotation(bones.rightArm, -2.2 * lift, 0, 0, w);
        addBoneRotation(bones.leftForeArm, -0.3 * lift, 0, 0, w);
        addBoneRotation(bones.rightForeArm, -0.3 * lift, 0, 0, w);
        addBoneRotation(bones.spine2, -0.12 * lift, 0, 0, w);
        addBoneRotation(bones.head, -0.2 * lift, 0, 0, w);
        break;
      }
      case 'dive': {
        addBoneRotation(bones.spine2, -0.5 * wave, 0, 0, w);
        addBoneRotation(bones.hips, 0, 0, -0.35 * wave * dir, w);
        addBoneRotation(bones.leftArm, 0, 0, 1.5 * wave, w);
        addBoneRotation(bones.rightArm, 0, 0, -1.5 * wave, w);
        addBoneRotation(bones.leftUpLeg, -0.5 * wave, 0, 0, w);
        addBoneRotation(bones.rightUpLeg, 0.4 * wave, 0, 0, w);
        break;
      }
      case 'tackle': {
        // Carrinho: agacha, estica a perna da frente e inclina o tronco.
        const slide = Math.sin(Math.PI * Math.min(1, p * 1.2));
        addBoneRotation(bones.leftUpLeg, 1.1 * slide, 0, 0, w);
        addBoneRotation(bones.leftLeg, -0.5 * slide, 0, 0, w);
        addBoneRotation(bones.rightUpLeg, -0.4 * slide, 0, 0, w);
        addBoneRotation(bones.rightLeg, -1.2 * slide, 0, 0, w);
        addBoneRotation(bones.spine2, 0.3 * slide, 0, 0, w);
        addBoneRotation(bones.leftArm, 0, 0, 0.8 * slide, w);
        break;
      }
      case 'react': {
        addBoneRotation(bones.spine2, 0.25 * wave, 0, 0, w);
        addBoneRotation(bones.leftArm, 0, 0, 1.1 * wave, w);
        addBoneRotation(bones.rightArm, 0, 0, -1.1 * wave, w);
        break;
      }
      case 'signal': {
        addBoneRotation(bones.rightArm, 0, 0, -2.2 * wave, w);
        addBoneRotation(bones.rightForeArm, 0, 0, -0.4 * wave, w);
        addBoneRotation(bones.spine2, 0, 0.2 * wave, 0, w);
        break;
      }
      default:
        break;
    }
  }

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
      return startGesture('kick');
    },
    pass(kind = 'pass') {
      return startGesture('kick', 0.34);
    },
    header(duration = 0.4) {
      return startGesture('header', duration);
    },
    celebrate(duration = 2.6) {
      return startGesture('celebrate', duration);
    },
    receive() {
      return startGesture('signal', 0.6);
    },
    dive(dir = 1) {
      gesture.dir = dir;
      return startGesture('dive');
    },
    slideTackle(dir = 1, duration = 0.82) {
      gesture.dir = dir;
      return startGesture('tackle', duration);
    },
    react() {
      return startGesture('react');
    },
    signal(duration = 1.1) {
      return startGesture('signal', duration);
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
      applyGesture(step);
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
    },
    /** Alias exigido pela API de animação compartilhada (`animation.js`). */
    stats() {
      return api.animation.state();
    }
  };

  return api;
}
