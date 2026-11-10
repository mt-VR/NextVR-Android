// Modelo externo Innerscene/Micah CC0, vestido e texturizado na origem.
//
// O palco do jogo é um WebView offline: o pacote precisa carregar rápido e não
// pode quebrar se o modelo faltar. Por isso este módulo:
//
//   1. carrega UMA vez o esqueleto + malha (`assets/players/models/footballer.glb`)
//      com o rig e os clipes adaptados offline em tools/rig-footballer.py;
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

import { recolorSurface, hairstyleGeometry, shirtGeometry, jerseyTexture } from './player-surface.js';

const MODEL_URL = 'assets/players/models/footballer.glb';
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
 * Carrega a malha com seus clipes embutidos. Exportado para os testes e para o pré-carregamento
 * das telas; chamadas repetidas reaproveitam a mesma promessa.
 */
export function preloadFootballerPack() {
  if (packPromise) return packPromise;
  packPromise = (async () => {
    const gltf = await loadGlb(MODEL_URL);
    const library = new Map();
    const aliases = { idle: 'idle', walk: 'jog', jog: 'jog', run: 'run' };
    for (const animation of gltf.animations || []) {
      const name = aliases[animation.name.toLowerCase()] || animation.name;
      library.set(name, animation);
    }
    if (!library.size) throw new Error('nenhum clipe do atleta carregou');
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

export function createGltfPlayer(options = {}) {
  if (!pack) return null;
  const {
    kit = { primary: '#2ef0a8', secondary: '#0b2b3a', accent: '#ffffff' },
    number = 10,
    isKeeper = false,
    heightScale = 1,
    simplified = false,
    preferredFoot = 'Right',
    skinTone, hairColor = '#251a12', hairStyle = 'short'
  } = options;

  const root = new THREE.Group();
  root.name = 'xfc-footballer-glb';
  root.userData.modelId = 'xfc-footballer-glb';
  root.userData.detailLevel = simplified ? 'mobile' : 'full';

  const model = cloneSkeleton(pack.scene);
  model.name = 'xfc-footballer-glb-body';
  // Verified on the imported mesh: eyes and boot toes face +Z already.
  // Root yaw = atan2(vx, vz). A blind PI rotation reverses every runner.
  model.rotation.y = 0;
  root.userData.frontAxis = '+Z';
  root.add(model);

  // Normaliza a altura: o arquivo importado usa metros, mas cada arquivo pode
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
  root.userData.appearance = { skinTone, hairColor, hairStyle, source: options.appearanceSource };
  const ownedTextures = [];
  const shadowMeshes = [];
  const materials = [];
  model.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = true;
    object.frustumCulled = false;
    shadowMeshes.push(object);
    if (object.name === 'short01') object.geometry = hairstyleGeometry(object, hairStyle);
    if (materialList(object).some(m => m.name === 'Micah | top') && (options.crest || options.name)) object.geometry = shirtGeometry(object);
    const list = materialList(object).map(material => {
      const clone = material.clone();
      const name = String(material.name || '');
      // Recolour only the existing cloth materials. Never tint skin/face/hair.
      if (name === 'Micah | top') {
        clone.color.copy(primary);
        if(options.crest || options.name){
          clone.map = jerseyTexture({...options, kit:{...kit,primary:'#'+primary.getHexString()},number});
          clone.color.set('#ffffff');clone.normalMap=null;ownedTextures.push(clone.map);
        }
      }
      if(name === 'Micah | anatomical body.body' && skinTone) clone.map=recolorSurface(material.map,skinTone);
      if(name === 'Micah | anatomical body.short01') clone.map=recolorSurface(material.map,hairColor,.08);
      if(name === 'Athletic socks | ribbed white knit' && kit.socks) clone.color.set(kit.socks);
      if (name === 'Micah | bottom') clone.color.set(kit.shorts || secondary);
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
    spine: findBone(model, 'Spine'),
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
  const rigBones = [];
  model.traverse(object => { if (object.isBone) rigBones.push(object); });
  const bindHipY = bones.hips.position.y;
  const floorJoints = rigBones.filter(bone => /Foot|ToeBase|Hand|Leg$/.test(bone.name));
  const floorPoint = new THREE.Vector3();
  const gesture = { name: null, time: 0, duration: 0, dir: 1, mask: null, maskName: 'full', weight: 1 };
  let applyingGesture = false;
  const gEuler = new THREE.Euler();
  const gQuat = new THREE.Quaternion();
  const gBlend = new THREE.Quaternion();

  function addBoneRotation(bone, x, y, z, weight) {
    if (!bone || weight <= 0.001) return;
    if (applyingGesture) {
      if (gesture.mask && !gesture.mask.has(bareBone(bone.name))) return;
      weight *= gesture.weight;
    }
    gQuat.setFromEuler(gEuler.set(x, y, z, 'XYZ'));
    gBlend.identity().slerp(gQuat, Math.min(1, weight));
    bone.quaternion.multiply(gBlend);
  }

  const GESTURES = {
    kick: 0.46,
    header: 0.5,
    celebrate: 2.2,
    dive: 0.95,
    tackle: 0.8,
    react: 0.55,
    fall: 0.95,
    signal: 0.9,
    'throw-in': 1.0
  };

  function startGesture(name, duration, opts = {}) {
    if (!GESTURES[name]) return null;
    gesture.name = name;
    gesture.maskName = opts.mask || 'full';
    gesture.mask = mixamoMask(gesture.maskName);
    gesture.weight = Math.max(0, Math.min(1, opts.weight ?? 1));
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
    applyingGesture = true;
    const p = gesture.time / gesture.duration;
    const w = gestureEnvelope();
    const dir = gesture.dir >= 0 ? 1 : -1;
    const wave = Math.sin(Math.PI * p);
    const ease=(a,b)=>{const t=Math.max(0,Math.min(1,(p-a)/(b-a)));return t*t*(3-2*t);};
    switch (gesture.name) {
      case 'kick': {
        // Pernada: recua, chuta e volta. Joelho abre antes do contato.
        const swing = p < 0.3 ? -0.9 * (p / 0.3) : 1.3 * Math.sin(((p - 0.3) / 0.7) * Math.PI);
        const knee = p < 0.45 ? 1.0 * Math.sin(Math.PI * Math.min(1, p / 0.45)) : 0.15;
        addBoneRotation(bones.rightUpLeg, -swing, 0, 0, w);
        addBoneRotation(bones.rightLeg, knee, 0, 0, w);
        addBoneRotation(bones.rightFoot, knee * 0.4, 0, 0, w);
        addBoneRotation(bones.leftUpLeg, swing * 0.18, 0, 0, w);
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
        // Impulsão → extensão das duas mãos → contato lateral → recuperação.
        const launch=ease(.06,.3),recover=ease(.7,1),pose=launch*(1-recover);
        const land=ease(.42,.68)*(1-recover);
        const crouch=Math.sin(Math.PI*Math.min(1,p/.25))*.16;
        bones.hips.position.y=bindHipY-(gesture.mask&&!gesture.mask.has('Hips')?0:gesture.weight)*(crouch+.28*pose+.35*land)*w;
        addBoneRotation(bones.hips, .1*pose, 0, -1.32*pose*dir,w);
        addBoneRotation(bones.spine2,-.12*pose, .1*dir*pose,0,w);
        // No espaço local, ambas as mãos apontam acima da cabeça; o giro
        // do quadril leva esse alcance ao lado certo do gol.
        addBoneRotation(bones.leftArm,-.2*pose,0,2.9*pose,w);
        addBoneRotation(bones.rightArm,-.2*pose,0,-2.9*pose,w);
        addBoneRotation(bones.leftForeArm,-.22*pose,0,0,w);
        addBoneRotation(bones.rightForeArm,-.22*pose,0,0,w);
        addBoneRotation(bones.leftUpLeg,-.25*pose,0,.12*dir*pose,w);
        addBoneRotation(bones.rightUpLeg,.18*pose,0,-.12*dir*pose,w);
        addBoneRotation(bones.leftLeg,.45*land,0,0,w);
        addBoneRotation(bones.rightLeg,.6*land,0,0,w);
        break;
      }
      case 'tackle': {
        // Uma perna estendida, outra recolhida. Segura o contato até o fim
        // do deslizamento, depois apoia o braço e recupera sem levantar cedo.
        const enter=ease(0,.22),recover=ease(.65,1),slide=enter*(1-recover);
        const push=ease(.58,.78)*(1-ease(.78,1));
        bones.hips.position.y=bindHipY-(gesture.mask&&!gesture.mask.has('Hips')?0:gesture.weight)*.72*slide*w;
        addBoneRotation(bones.hips,-.18*slide,0,-.23*slide*dir,w);
        addBoneRotation(bones.leftUpLeg,-1.48*slide,0,.12*slide,w);
        addBoneRotation(bones.leftLeg,.13*slide+.45*push,0,0,w);
        addBoneRotation(bones.leftFoot,.2*slide,0,0,w);
        addBoneRotation(bones.rightUpLeg,-1.8*slide,0,-.18*slide,w);
        addBoneRotation(bones.rightLeg,2.6*slide,0,0,w);
        addBoneRotation(bones.rightFoot,-.65*slide,0,0,w);
        addBoneRotation(bones.spine2,.32*slide+.2*push,0,0,w);
        addBoneRotation(bones.leftArm,.35*slide,0,.7*slide,w);
        addBoneRotation(bones.rightArm,.2*slide,0,-.65*slide,w);
        break;
      }
      case 'fall': {
        bones.hips.position.y = bindHipY - (gesture.mask && !gesture.mask.has('Hips') ? 0 : gesture.weight) * 0.64 * wave * w;
        addBoneRotation(bones.hips, 1.15 * wave, 0, 0.25 * wave * dir, w);
        addBoneRotation(bones.leftUpLeg, -0.6 * wave, 0, 0, w);
        addBoneRotation(bones.rightLeg, 0.9 * wave, 0, 0, w);
        addBoneRotation(bones.leftArm, -1.2 * wave, 0, 0.2 * wave, w);
        addBoneRotation(bones.rightArm, -1.2 * wave, 0, -0.2 * wave, w);
        break;
      }
      case 'react': {
        addBoneRotation(bones.spine2, 0.25 * wave, 0, 0, w);
        addBoneRotation(bones.leftArm, 0, 0, 1.1 * wave, w);
        addBoneRotation(bones.rightArm, 0, 0, -1.1 * wave, w);
        break;
      }
      case 'throw-in':
      case 'signal': {
        addBoneRotation(bones.rightArm, 0, 0, -2.2 * wave, w);
        addBoneRotation(bones.rightForeArm, 0, 0, -0.4 * wave, w);
        addBoneRotation(bones.spine2, 0, 0.2 * wave, 0, w);
        break;
      }
      default:
        break;
    }
    applyingGesture = false;
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
  let gaitPhase=0;
  function updateLocomotion(speed, dt) {
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
    const blend=1-Math.exp(-dt*12);
    const targets={idle,jog,run};
    const lowPose=['dive','tackle','fall'].includes(gesture.name) && gesture.maskName==='full';
    const locomotionGain=lowPose?1-gestureEnvelope()*gesture.weight:1;
    // Fase compartilhada evita pernas opostas ao misturar trote e corrida.
    const cadence=Math.max(.65,Math.min(1.85,value/4.5));
    gaitPhase=(gaitPhase+dt*cadence*state.speed)%1;
    for(const name of ['idle','jog','run']) {
      const weight=state.locomotionWeights[name]+(targets[name]-state.locomotionWeights[name])*blend;
      state.locomotionWeights[name]=weight;
      const action=actionFor(name,null,'full');if(!action)continue;
      action.setLoop(THREE.LoopRepeat,Infinity);
      action.setEffectiveWeight(weight*locomotionGain);
      // Não parar/resetar a cada transição: preserva a continuidade dos pés.
      if(!action.isRunning())action.play();
      if(name!=='idle'){
        action.setEffectiveTimeScale(0);
        action.time=gaitPhase*action.getClip().duration;
      }
    }
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
    react(kind = 'bump', duration) {
      return startGesture(kind === 'fall' ? 'fall' : 'react', duration);
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
      mixer.timeScale = state.speed;
      bones.hips.position.y = bindHipY;
      for (const bone of rigBones) bone.quaternion.identity();
      updateLocomotion(speed, step);
      mixer.update(step);
      if(!['dive','tackle','fall'].includes(gesture.name)){
        const running=state.locomotionWeights.run;
        bones.hips.position.y+=.018*running*(1-Math.cos(gaitPhase*Math.PI*4));
        addBoneRotation(bones.spine,Math.min(.12,speed*.016)*running,0,0,1);
      }
      addBoneRotation(bones.spine2, 0, 0, Number(movement.lean) || 0, 1);
      applyGesture(step);
      if (['dive', 'tackle', 'fall'].includes(gesture.name)) {
        // Keep contact landmarks above the turf during low poses.
        root.updateMatrixWorld(true);
        let minY = Infinity;
        for (const joint of floorJoints) minY = Math.min(minY, joint.getWorldPosition(floorPoint).y - root.position.y);
        if (minY < 0.065) bones.hips.position.y += (0.065 - minY) / model.scale.y;
      }
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
      for (const texture of ownedTextures) texture.dispose();
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
      if (GESTURES[clipName]) return weight > 0 ? startGesture(clipName, opts.duration, { ...opts, mask: opts.mask || state.mask }) : api.animation.stop(clipName);
      const action = fadeAction(clipName, weight, opts);
      return action ? `${clipName}|${opts.mask || state.mask || 'full'}` : null;
    },
    trigger(clipName, opts = {}) {
      if (GESTURES[clipName]) return startGesture(clipName, opts.duration, { ...opts, mask: opts.mask || state.mask });
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
      if (!clipName || clipName === gesture.name) { gesture.name = null; stopped++; }
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
          })).concat(gesture.name ? [{ clip: gesture.name, mask: gesture.maskName, weight: gestureEnvelope() * gesture.weight }] : []),
        gesture: gesture.name,
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
