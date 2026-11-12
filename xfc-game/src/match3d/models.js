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

import { runningLegPose, runningArmPose, runningFlight, runningCycle, kickPose } from './football-actions.js';
import {refinePlayerMaterial} from './player-surface.js';
import { THREE, softShadowTexture } from './engine.js';
import { GLTFLoader } from '../../vendor/GLTFLoader.js';
import { clone as cloneSkeleton } from '../../vendor/SkeletonUtils.js';
import { BONE_KEYS, maskBones } from './animation.js';

import { applyCareerSurface, recolorSurface, hairstyleGeometry, shirtGeometry, jerseyTexture } from './player-surface.js';

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

// Ajuste pedido em v0.5.29: mesmo Micah, rig/topologia/UV intactos.
// Dilatação radial moderada por influência de osso, calculada UMA vez por malha.
// Não escala o comprimento dos ossos, nem infla cabeça, mãos ou tronco.
const athleticGeometryCache=new WeakMap();
function athleticLimbs(model){
  model.updateMatrixWorld(true);
  model.traverse(mesh=>{
    if(!mesh.isSkinnedMesh)return;
    const source=mesh.geometry;
    if(athleticGeometryCache.has(source)){mesh.geometry=athleticGeometryCache.get(source);return;}
    const geometry=source.clone(),position=geometry.attributes.position;
    const indices=geometry.attributes.skinIndex,weights=geometry.attributes.skinWeight;
    const inverse=mesh.matrixWorld.clone().invert();
    const axes=mesh.skeleton.bones.map(bone=>{
      const name=bareBone(bone.name);
      if(!/^(Left|Right)(Arm|ForeArm|UpLeg|Leg)$/.test(name))return null;
      const child=bone.children.find(b=>b.isBone);if(!child)return null;
      const origin=bone.getWorldPosition(new THREE.Vector3()).applyMatrix4(inverse);
      const end=child.getWorldPosition(new THREE.Vector3()).applyMatrix4(inverse);
      return {origin,axis:end.sub(origin).normalize(),gain:/Leg$/.test(name)?.09:.07};
    });
    const v=new THREE.Vector3(),radial=new THREE.Vector3(),delta=new THREE.Vector3();
    for(let i=0;i<position.count;i++){
      v.fromBufferAttribute(position,i);delta.set(0,0,0);
      for(let j=0;j<4;j++){
        const a=axes[indices.getComponent(i,j)],w=weights.getComponent(i,j);if(!a||!w)continue;
        radial.copy(v).sub(a.origin);radial.addScaledVector(a.axis,-radial.dot(a.axis));
        delta.addScaledVector(radial,a.gain*w);
      }
      v.add(delta);position.setXYZ(i,v.x,v.y,v.z);
    }
    geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
    athleticGeometryCache.set(source,geometry);mesh.geometry=geometry;
  });
}

export function createGltfPlayer(options = {}) {
  if (!pack) return null;
  const {
    kit = { primary: '#2ef0a8', secondary: '#0b2b3a', accent: '#ffffff' },
    number = 10,
    isKeeper = false,
    simplified = false,
    preferredFoot = 'Right',
    skinTone, hairColor = '#251a12', hairStyle = 'short', bootColor = null
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
  athleticLimbs(model);

  // Normaliza a altura: o arquivo importado usa metros, mas cada arquivo pode
  // variar. A escala final precisa ser 1,75 m para o campo continuar correto.
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
  const targetHeight = options.height ? Math.max(1.6,Math.min(2,options.height/100)) : 1.75;
  root.userData.targetHeight=targetHeight;
  root.userData.limbRadialGain={arms:1.07,legs:1.09};
  const scale = size.y > 0.01 ? targetHeight / size.y : 1;
  model.scale.setScalar(scale);
  if(options.body){const width=({lean:.96,normal:1,strong:1.04}[options.body]||1)*Math.max(.95,Math.min(1.07,1+((options.weight||68)-68)*.002));model.scale.x*=width;model.scale.z*=width;}
  model.position.y = -box.min.y * scale;

  const primary = new THREE.Color(isKeeper ? (kit.keeperPrimary || '#f5c518') : kit.primary);
  const secondary = new THREE.Color(isKeeper ? (kit.keeperSecondary || '#1a1a1a') : kit.secondary);
  root.userData.appearance = { skinTone, hairColor, hairStyle, bootColor, source: options.appearanceSource, ...Object.fromEntries(['height','weight','body','face','beard','moustache','brows','socks','gloves','wristband','celebration'].map(k=>[k,options[k]])) };
  const ownedTextures = [];
  const shadowMeshes = [];
  const materials = [];
  model.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = true;
    object.receiveShadow=Boolean(options.graphics?.shadows);
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
      if(name === 'Micah | anatomical body.shoes06' && bootColor) clone.map=recolorSurface(material.map,bootColor,.08);
      if(name === 'Athletic socks | ribbed white knit' && kit.socks) clone.color.set(kit.socks);
      if (name === 'Micah | bottom') clone.color.set(kit.shorts || secondary);
      applyCareerSurface(clone,options);
      refinePlayerMaterial(clone,{surface:options.graphics?.surface??!simplified});
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
      color:0x07110a,
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
    leftHand: findBone(model, 'LeftHand'),
    rightArm: findBone(model, 'RightArm'),
    rightForeArm: findBone(model, 'RightForeArm'),
    rightHand: findBone(model, 'RightHand'),
    leftUpLeg: findBone(model, 'LeftUpLeg'),
    leftLeg: findBone(model, 'LeftLeg'),
    leftFoot: findBone(model, 'LeftFoot'),
    rightUpLeg: findBone(model, 'RightUpLeg'),
    rightLeg: findBone(model, 'RightLeg'),
    rightFoot: findBone(model, 'RightFoot')
  };

  if(bones.head&&options.face)bones.head.scale.x*=({slim:.95,broad:1.05,natural:1}[options.face]||1);
  const gloveGeometries=[];
  if(isKeeper||options.gloves&&options.gloves!=='none'){
    // Luva acompanha os dedos da MALHA importada: capa de látex no shader,
    // com espessura pequena. Evita uma esfera solta deixando dedos de fora.
    model.traverse(mesh=>{
      if(!mesh.isSkinnedMesh||!materialList(mesh).some(m=>m.name==='Micah | anatomical body.body'))return;
      const geometry=mesh.geometry.clone(),indices=geometry.attributes.skinIndex,weights=geometry.attributes.skinWeight;
      const mask=new Float32Array(indices.count);
      for(let i=0;i<indices.count;i++){
        let influence=0;
        for(let j=0;j<4;j++)if(/Hand$/.test(mesh.skeleton.bones[indices.getComponent(i,j)]?.name||''))influence+=weights.getComponent(i,j);
        mask[i]=influence>.5?1:0;
      }
      geometry.setAttribute('gloveMask',new THREE.BufferAttribute(mask,1));mesh.geometry=geometry;gloveGeometries.push(geometry);
      for(const material of materialList(mesh)){
        if(material.name!=='Micah | anatomical body.body')continue;
        const surfaceCompile=material.onBeforeCompile,surfaceKey=material.customProgramCacheKey();
        material.onBeforeCompile=shader=>{
          surfaceCompile(shader);
          shader.vertexShader='attribute float gloveMask; varying float vGloveMask;\n'+shader.vertexShader;
          shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvGloveMask=gloveMask; transformed+=normal*.006*gloveMask;');
          shader.fragmentShader='varying float vGloveMask;\n'+shader.fragmentShader;
          const color=options.gloves==='black'?'vec3(.025,.03,.035)':'vec3(.88,.93,.94)';
          shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>\ndiffuseColor.rgb=mix(diffuseColor.rgb,${color},vGloveMask);`);
        };
        material.customProgramCacheKey=()=> 'xfc-keeper-latex-v2:'+surfaceKey+':'+(options.gloves||'keeper');
      }
    });
    const cuffMaterial=new THREE.MeshLambertMaterial({color:0x16bdb6});
    const cuffGeometry=new THREE.BoxGeometry(.085,.04,.07);
    materials.push(cuffMaterial);gloveGeometries.push(cuffGeometry);
    for(const side of ['Left','Right']){
      const hand=findBone(model,side+'Hand');if(!hand)continue;
      const cuff=new THREE.Mesh(cuffGeometry,cuffMaterial);cuff.name='xfc-keeper-glove-'+side;
      cuff.position.set(0,.04,.018);hand.add(cuff);
    }
  }
  if(options.wristband&&options.wristband!=='none'){
    const geometry=new THREE.BoxGeometry(.075,.038,.065),material=new THREE.MeshLambertMaterial({color:options.wristband==='black'?'#17191b':'#eeeede'});
    gloveGeometries.push(geometry);materials.push(material);
    const band=new THREE.Mesh(geometry,material);band.name='xfc-career-wristband';band.position.set(0,.05,0);bones.leftHand?.add(band);
  }
  const mixer = new THREE.AnimationMixer(model);
  mixer.timeScale = 1;

  // ---------------------------------------------------------------------
  // Gestos por bone (camada aditiva)
  //
  // Os clipes de futebol do repositório foram exportados com outro repouso e
  // torcem os braços deste esqueleto. Em vez de depender deles para os gestos,
  // o gesto é escrito direto nos ossos (rotações locais somadas à pose do
  // mixer), com entrada/saída suaves. A passada e o contrabalanço substituem
  // as curvas de locomoção antigas; gestos permanecem sobre essa base.
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

  function poseBoneRotation(bone,x,y,z,weight){
    if(!bone || (gesture.mask&&!gesture.mask.has(bareBone(bone.name))))return;
    gQuat.setFromEuler(gEuler.set(x,y,z,'XYZ'));
    bone.quaternion.slerp(gQuat,Math.min(1,weight*gesture.weight));
  }

  const GESTURES = {
    kick: 0.46,
    receive:.46,
    volley:.6,
    header: 0.5,
    celebrate: 2.2,
    dive: 1.35,
    tackle: 0.8,
    react: 0.55,
    fall: 0.95,
    signal: 0.9,
    'throw-in': 1.0,
    'carry-ball': .8,
    'place-ball': .9,
    'pick-ball': .9,
    stepover: .6,
    rainbow: .55,
    catch: .8
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
      case 'catch': {
        for(const side of ['left','right']){
          addBoneRotation(bones[side+'Arm'],-.95*wave,0,0,w);
          addBoneRotation(bones[side+'ForeArm'],-.8*wave,0,0,w);
          addBoneRotation(bones[side+'UpLeg'],-.18*wave,0,0,w);
          addBoneRotation(bones[side+'Leg'],.3*wave,0,0,w);
        }
        break;
      }
      case 'carry-ball': {
        for(const [side,sign] of [['left',1],['right',-1]]){
          poseBoneRotation(bones[side+'Arm'],-.65,0,-.5*sign,w);
          poseBoneRotation(bones[side+'ForeArm'],-.7,0,-.22*sign,w);
        }
        break;
      }
      case 'pick-ball':
      case 'place-ball': {
        const bend=Math.sin(Math.PI*p);
        bones.hips.position.y-=.45*bend*w;
        addBoneRotation(bones.spine,.9*bend,0,0,w);
        addBoneRotation(bones.spine2,.65*bend,0,0,w);
        for(const side of ['left','right']){
          addBoneRotation(bones[side+'UpLeg'],-1.15*bend,0,0,w);
          addBoneRotation(bones[side+'Leg'],2.15*bend,0,0,w);
          poseBoneRotation(bones[side+'Arm'],-.65-.55*bend,0,side==='left'?-.5:.5,w);
          poseBoneRotation(bones[side+'ForeArm'],-.7*(1-bend),0,side==='left'?-.22:.22,w);
        }
        break;
      }
      case 'stepover': {
        const circle=p*Math.PI*4;
        addBoneRotation(bones.rightUpLeg,-.48*Math.sin(Math.PI*p),.36*Math.sin(circle),.32*Math.cos(circle)*wave,w);
        addBoneRotation(bones.rightLeg,.48*wave,0,0,w);
        addBoneRotation(bones.spine2,0,.12*Math.sin(circle),-.12*Math.sin(circle),w);
        break;
      }
      case 'rainbow': {
        addBoneRotation(bones.rightUpLeg,-.8*wave,0,.12*wave,w);
        addBoneRotation(bones.rightLeg,.7*wave,0,0,w);
        addBoneRotation(bones.leftUpLeg,.15*wave,0,0,w);
        break;
      }
      case 'receive': {
        const side=preferredFoot==='Left'?'left':'right',sign=side==='left'?1:-1;
        poseBoneRotation(bones[side+'UpLeg'],-.22*wave,sign*.28*wave,0,w);
        poseBoneRotation(bones[side+'Leg'],.38*wave,0,0,w);
        poseBoneRotation(bones[side+'Foot'],-.1*wave,sign*.24*wave,0,w);
        addBoneRotation(bones.spine2,.07*wave,-sign*.06*wave,0,w);
        break;
      }
      case 'volley': {
        const side=preferredFoot==='Left'?'left':'right';
        poseBoneRotation(bones[side+'UpLeg'],-1.15*wave,0,.08*wave,w);
        poseBoneRotation(bones[side+'Leg'],.6*(1-wave),0,0,w);
        addBoneRotation(bones.spine2,-.13*wave,.14*wave,0,w);
        addBoneRotation(bones.leftArm,-.3*wave,0,.55*wave,w);
        addBoneRotation(bones.rightArm,-.2*wave,0,-.55*wave,w);
        break;
      }
      case 'kick': {
        const pose=kickPose(p,gesture.kind),side=preferredFoot==='Left'?'left':'right',other=side==='left'?'right':'left',sign=side==='left'?1:-1;
        poseBoneRotation(bones[side+'UpLeg'],pose.hip,sign*pose.opening,0,w);
        poseBoneRotation(bones[side+'Leg'],pose.knee,0,0,w);
        poseBoneRotation(bones[side+'Foot'],-.12,sign*pose.opening,0,w);
        addBoneRotation(bones[other+'Leg'],.12*wave,0,0,w);
        addBoneRotation(bones.spine2,pose.torso,-sign*.16*wave,0,w);
        addBoneRotation(bones.leftArm,-.15*wave,0,.45*wave,w);
        addBoneRotation(bones.rightArm,-.1*wave,0,-.45*wave,w);
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
        const lift=Math.sin(Math.PI*Math.min(1,p*1.25)),style=({arms:0,fist:1,wide:2}[options.celebration]??Number(number)%3);
        addBoneRotation(bones.leftArm,style===1?-.5*lift:-1.9*lift,0,style===2?.85*lift:0,w);
        addBoneRotation(bones.rightArm,-1.9*lift,0,style===2?-.85*lift:0,w);
        addBoneRotation(bones.leftForeArm,-.45*lift,0,0,w);
        addBoneRotation(bones.rightForeArm,style===1?-1.0*lift:-.3*lift,0,0,w);
        addBoneRotation(bones.spine2,-.07*lift,.05*Math.sin(p*Math.PI*2),0,w);
        addBoneRotation(bones.head,-.13*lift,0,0,w);break;
      }
      case 'dive': {
        // Carrega a perna de apoio → impulsão → voo → contato lateral → levanta.
        // Arco do quadril acompanha o deslocamento horizontal do goleiro.
        const push=ease(.09,.30), land=ease(.42,.64), recover=ease(.78,1);
        const extension=push*(1-recover), grounded=land*(1-recover);
        const preload=ease(0,.08)*(1-ease(.12,.28));
        const crouch=Math.sin(Math.PI*Math.min(1,p/.24))*.12;
        const flight=.25*Math.sin(Math.PI*Math.max(0,Math.min(1,(p-.09)/.50)));
        bones.hips.position.y=bindHipY+(flight-crouch-.18*extension-.46*grounded)*w;
        addBoneRotation(bones.hips,.08*extension,0,-1.35*extension*dir,w);
        addBoneRotation(bones.spine2,.16*grounded,0,.10*grounded*dir,w);
        for(const [side,sign] of [['left',1],['right',-1]]){
          const leading=sign===dir;
          poseBoneRotation(bones[side+'Arm'],-(leading?3.02:2.92)*extension+.5*grounded,0,-sign*.16*extension,w);
          poseBoneRotation(bones[side+'ForeArm'],-(leading?.05:.12)*extension-.45*grounded,0,0,w);
          addBoneRotation(bones[side+'UpLeg'],-(leading?.18:.42)*extension-.28*preload,0,sign*.13*extension,w);
          addBoneRotation(bones[side+'Leg'],(leading?.28:.75)*extension+.20*grounded+.55*preload,0,0,w);
        }
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
  let gaitGroundOffset=0,previousX=null,previousZ=null,previousSpeed=0,gaitAcceleration=0;
  let gaitStride=.65,shieldWeight=0,breathing=0,effort=0;
  function updateLocomotion(speed, dt, movement) {
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
    const cycle=runningCycle(state.locomotionWeights.run,model.scale.y,number);
    const strideScale=Math.max(.3,Math.min(1,Number(movement.strideScale)||1));
    gaitStride=cycle.stride*strideScale;
    cycle.distance*=strideScale;
    let travel=value*dt;
    if(Number.isFinite(movement.x)&&Number.isFinite(movement.z)){
      travel=previousX===null?0:Math.hypot(movement.x-previousX,movement.z-previousZ);
      previousX=movement.x;previousZ=movement.z;
      if(travel>Math.max(1.5,value*dt*3))travel=0; // reposições/teleportes não animam passos
    }
    gaitPhase=(gaitPhase+travel/cycle.distance*state.speed)%1;
    const acceleration=dt>0?(value-previousSpeed)/dt:0;
    gaitAcceleration+=(Math.max(-4,Math.min(8,acceleration))-gaitAcceleration)*(1-Math.exp(-dt*6));
    previousSpeed=value;
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

    catchBall(){return startGesture('catch');},
    carryBall(duration=.8){return startGesture('carry-ball',duration,{mask:'upper'});},
    pickBall(duration=.9){return startGesture('pick-ball',duration);},
    placeBall(duration=.9){return startGesture('place-ball',duration);},
    skill(name='stepover'){return startGesture(name==='rainbow'?'rainbow':'stepover');},
    kick(type = 'shot') {
      gesture.kind=type;
      const result=startGesture(type==='volley'?'volley':'kick');
      // A física solta a bola no comando: o contato visual começa aqui também.
      if(type!=='volley')gesture.time=gesture.duration*.32;
      return result;
    },
    pass(kind = 'pass') {
      return api.kick(kind);
    },
    header(duration = 0.4) {
      return startGesture('header', duration);
    },
    celebrate(duration = 2.6) {
      return startGesture('celebrate', duration);
    },
    receive() {
      return startGesture('receive', .46);
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
      const delta = Math.atan2(dx, dz) - root.rotation.y;
      const angle = Math.atan2(Math.sin(delta),Math.cos(delta));
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
      updateLocomotion(speed, step, movement);
      mixer.update(step);
      // Substitui as curvas ruins dos joelhos do clipe antigo por trajetórias
      // de pés com apoio no solo. Gestos continuam sobre essa base.
      const gaitWeight=(state.locomotionWeights.jog+state.locomotionWeights.run)
        * (['dive','tackle','fall','place-ball','pick-ball','stepover'].includes(gesture.name)?1-gestureEnvelope():1);
      if(gaitWeight>.001){
        for(const [side,offset]of [['left',0],['right',.5]]){
          const pose=runningLegPose(gaitPhase+offset,gaitStride,state.locomotionWeights.run);
          for(const [part,angle]of [['UpLeg',pose.hip],['Leg',pose.knee],['Foot',pose.ankle]]){
            const bone=bones[side+part];
            gQuat.setFromEuler(gEuler.set(angle,0,0));
            bone.quaternion.identity().slerp(gQuat,gaitWeight);
          }
        }
        bones.hips.position.y=bindHipY;
        // Ombros alternam frente/trás; cotovelo abre quando o braço vai para trás.
        for(const [side,offset] of [['left',0],['right',.5]]){
          const arm=runningArmPose(gaitPhase+offset,state.locomotionWeights.run);
          for(const [part,x,z] of [['Arm',arm.shoulder,side==='left'?-.035:.035],['ForeArm',arm.elbow,0]]){
            gQuat.setFromEuler(gEuler.set(x,0,z));
            bones[side+part].quaternion.identity().slerp(gQuat,gaitWeight);
          }
          addBoneRotation(bones[side+'Hand'],0,arm.twist,0,gaitWeight);
        }
      }
      if(!['dive','tackle','fall'].includes(gesture.name)){
        const running=state.locomotionWeights.run;
        bones.hips.position.y+=.018*running*(1-Math.cos(gaitPhase*Math.PI*4));
        // Tronco ereto no andar; inclinação pequena e única ao correr.
        bones.spine.rotation.x=.055*running+Math.max(0,gaitAcceleration)*.009*gaitWeight;
        const twist=Math.sin(gaitPhase*Math.PI*2)*gaitWeight;
        bones.hips.rotation.y=-.035*twist;
        bones.spine.rotation.y=.06*twist;
        bones.head.rotation.y=-.025*twist;
        bones.head.rotation.x=-.02*running;
        bones.spine2.rotation.x=0;
      }
      addBoneRotation(bones.spine2, 0, 0, Number(movement.lean) || 0, 1);
      if(gaitWeight>.5&&!gesture.name){
        root.updateMatrixWorld(true);
        const feet=[bones.leftFoot,bones.rightFoot];let min=Infinity;
        for(const foot of feet)min=Math.min(min,foot.getWorldPosition(floorPoint).y-root.position.y);
        if(!runningFlight(gaitPhase,state.locomotionWeights.run)){
          const targetOffset=(.13*model.scale.y-min)/model.scale.y;
          gaitGroundOffset+=(targetOffset-gaitGroundOffset)*(1-Math.exp(-step*22));
        }
        // Não prender os pés ao chão na fase aérea: isso transformava corrida
        // em caminhada acelerada mesmo com joelhos e braços animados.
        bones.hips.position.y+=gaitGroundOffset;
      }
      // Proteção e preparação são camadas contextuais, sem mexer no controle.
      shieldWeight+=((movement.protecting?.7:0)-shieldWeight)*(1-Math.exp(-step*8));
      effort+=((speed>5?1:0)-effort)*(1-Math.exp(-step*.18));breathing+=step*(1.3+effort*.6);
      if(!gesture.name){
        addBoneRotation(bones.spine2,.035*effort*Math.sin(breathing*Math.PI*2),shieldWeight*.1,0,1);
        addBoneRotation(bones.leftArm,-.16,0,.32,shieldWeight);
        addBoneRotation(bones.rightArm,-.12,0,-.32,shieldWeight);
        if(movement.shotCharge>0){
          const side=preferredFoot==='Left'?'left':'right',w=Math.min(.8,movement.shotCharge);
          addBoneRotation(bones[side+'UpLeg'],.34,0,0,w);
          addBoneRotation(bones[side+'Leg'],.7,0,0,w);
          addBoneRotation(bones.spine2,.06,0,0,w);
        }
      }
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
      for(const geometry of gloveGeometries)geometry.dispose();
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
        gaitPhase,gaitStride,gaitAcceleration,
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
