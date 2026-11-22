// Camada de animação do XFC.
//
// O rig de `player.js` já anima cada atleta por osso (corrida, chute,
// comemoração...). Este módulo acrescenta o que faltava para o jogo parecer
// profissional sem trocar o modelo:
//
//   • MÁSCARAS — cada camada só mexe nos ossos que lhe pertencem (perna,
//     tronco/braços, cabeça). Uma comemoração de tronco não apaga a corrida.
//   • BLEND — as camadas entram e saem com peso animado (smoothstep), então
//     não existe "snap" entre poses.
//   • BLEND TREE — o peso de cada clipe pode ser calculado pela velocidade,
//     posse de bola, etc. (`locomotion()`).
//   • EVENTOS — `trigger('kick')` dispara um clipe de uma vez só e ele se
//     dissolve sozinho ao terminar.
//   • IK — joelho resolve o contato do pé com o gramado e, quando há bola
//     perto, a perna dominante mira o contato do chute.
//   • LOD — acima de `farDistance` o atleta não avalia camadas nem IK.
//
// O módulo NÃO importa three.js: trabalha em cima de objetos com `rotation`
// e `position`, o que o torna testável no Node com ossos falsos.

/** Ossos endereçáveis pela API. Os nomes são fixos: o LLM pode usá-los. */
export const BONE_KEYS = Object.freeze([
  'body', 'head',
  'shoulderL', 'shoulderR', 'elbowL', 'elbowR',
  'hipL', 'hipR', 'kneeL', 'kneeR', 'ankleL', 'ankleR'
]);

/**
 * Grupos de máscara. `lower` cobre pernas inteiras (quadril, joelho, tornozelo);
 * `upper` cobre tronco e braços; `head` só a cabeça. Aceita combinação com
 * `+` (`upper+head`), que é como o cabeceio precisa trabalhar.
 */
export const BONE_GROUPS = Object.freeze({
  full: [...BONE_KEYS],
  lower: ['hipL', 'hipR', 'kneeL', 'kneeR', 'ankleL', 'ankleR'],
  legs: ['hipL', 'hipR', 'kneeL', 'kneeR', 'ankleL', 'ankleR'],
  upper: ['body', 'shoulderL', 'shoulderR', 'elbowL', 'elbowR'],
  arms: ['shoulderL', 'shoulderR', 'elbowL', 'elbowR'],
  torso: ['body'],
  body: ['body'],
  head: ['head']
});

/** Alias aceitos pela API (o LLM escreve em inglês e em português). */
const MASK_ALIASES = Object.freeze({
  all: 'full',
  completo: 'full',
  tudo: 'full',
  pernas: 'lower',
  inferior: 'lower',
  tronco: 'upper',
  superior: 'upper',
  bracos: 'upper',
  braços: 'upper',
  cabeca: 'head',
  cabeça: 'head',
  inferiores: 'lower'
});

const ALL_BONES = new Set(BONE_KEYS);

/**
 * Normaliza um nome de máscara em uma lista de ossos.
 * @param {string|string[]|undefined} mask
 * @returns {string[]}
 */
const BONE_BY_LOWER = new Map(BONE_KEYS.map(key => [key.toLowerCase(), key]));

/**
 * Normaliza um nome de máscara em uma lista de ossos.
 * @param {string|string[]|undefined} mask
 * @returns {string[]}
 */
export function maskBones(mask) {
  if (!mask) return [...BONE_KEYS];
  const text = Array.isArray(mask) ? mask.join(' ') : String(mask);
  const parts = text.trim().toLowerCase().split(/[+|,/\s]+/).filter(Boolean);
  if (!parts.length) return [...BONE_KEYS];
  const set = new Set();
  for (const part of parts) {
    const key = MASK_ALIASES[part] || part;
    if (key === 'full' || key === 'all') return [...BONE_KEYS];
    const bone = BONE_BY_LOWER.get(key);
    if (bone) {
      set.add(bone);
      continue;
    }
    const bones = BONE_GROUPS[key];
    if (!bones) continue;
    for (const item of bones) set.add(item);
  }
  if (!set.size) return [...BONE_KEYS];
  return BONE_KEYS.filter(bone => set.has(bone));
}

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const lerp = (a, b, t) => a + (b - a) * t;
/** Interpolação angular curta: nunca gira pelo caminho longo. */
function lerpAngle(a, b, t) {
  let delta = (b - a) % (Math.PI * 2);
  if (delta > Math.PI) delta -= Math.PI * 2;
  if (delta < -Math.PI) delta += Math.PI * 2;
  return a + delta * t;
}
const smoothstep = t => {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
};

// ---------------------------------------------------------------------------
// Clipes procedurais
// ---------------------------------------------------------------------------
//
// Cada clipe devolve poses ABSOLUTAS por osso (`{ x, y, z }` em radianos) para
// os ossos que ele domina. A máscara da camada decide quais desses ossos
// realmente recebem a pose; o peso decide o quanto. Assim o mesmo clipe de
// comemoração pode rodar só no tronco (braços para o alto) ou no corpo inteiro.

function idleClip(t) {
  const breath = Math.sin(t * 1.9);
  return {
    body: { x: 0.02 + breath * 0.012, y: 0, z: breath * 0.01 },
    shoulderL: { x: -0.16 + breath * 0.05, y: 0, z: -0.14 },
    shoulderR: { x: -0.16 + breath * 0.05, y: 0, z: 0.14 },
    elbowL: { x: -0.28 - breath * 0.03, y: 0, z: 0 },
    elbowR: { x: -0.28 - breath * 0.03, y: 0, z: 0 },
    head: { x: -0.03 + breath * 0.02, y: Math.sin(t * 0.7) * 0.12, z: 0 }
  };
}

function locomotionClip(t, ctx) {
  const speed = clamp(Number(ctx.speed) || 0, 0, 9);
  const amplitude = clamp(0.22 + speed / 8.5, 0.22, 1.05);
  const phase = t * (4.6 + speed * 1.35);
  const wave = Math.sin(phase);
  const counter = Math.cos(phase);
  return {
    hipL: { x: wave * amplitude * 0.72, y: 0, z: 0 },
    hipR: { x: -wave * amplitude * 0.72, y: 0, z: 0 },
    kneeL: { x: Math.max(0, -wave) * amplitude * 1.1, y: 0, z: 0 },
    kneeR: { x: Math.max(0, wave) * amplitude * 1.1, y: 0, z: 0 },
    ankleL: { x: counter * amplitude * 0.16, y: 0, z: 0 },
    ankleR: { x: -counter * amplitude * 0.16, y: 0, z: 0 },
    shoulderL: { x: -wave * amplitude * 0.62, y: 0, z: -0.1 },
    shoulderR: { x: wave * amplitude * 0.62, y: 0, z: 0.1 },
    elbowL: { x: -0.34 - Math.abs(wave) * 0.2, y: 0, z: 0 },
    elbowR: { x: -0.34 - Math.abs(wave) * 0.2, y: 0, z: 0 },
    body: { x: 0.03 + amplitude * 0.06, y: 0, z: Math.sin(phase) * amplitude * 0.02 },
    head: { x: -0.04, y: 0, z: 0 }
  };
}

function kickClip(t, ctx) {
  const duration = Number(ctx.duration) || 0.42;
  const p = clamp(t / duration, 0, 1);
  // 0 → 0,32: armada (perna atrás). 0,32 → 0,58: contato. 0,58 → 1: follow-through.
  const windup = p < 0.32 ? smoothstep(p / 0.32) : 1 - smoothstep((p - 0.32) / 0.26);
  const strike = p < 0.32 ? 0 : smoothstep((p - 0.32) / 0.26);
  const follow = p < 0.58 ? 0 : smoothstep((p - 0.58) / 0.42);
  const kickLeg = ctx.kickLeg === 'L' ? 'L' : 'R';
  const hipKey = kickLeg === 'L' ? 'hipL' : 'hipR';
  const kneeKey = kickLeg === 'L' ? 'kneeL' : 'kneeR';
  const ankleKey = kickLeg === 'L' ? 'ankleL' : 'ankleR';
  const plantKey = kickLeg === 'L' ? 'hipR' : 'hipL';
  const plantKnee = kickLeg === 'L' ? 'kneeR' : 'kneeL';
  return {
    [hipKey]: { x: windup * 0.55 - strike * 0.95 - follow * 0.28, y: 0, z: 0 },
    [kneeKey]: { x: windup * 1.15 - strike * 0.72 + follow * 0.34, y: 0, z: 0 },
    [ankleKey]: { x: -strike * 0.32 + follow * 0.22, y: 0, z: 0 },
    [plantKey]: { x: -windup * 0.12, y: 0, z: 0 },
    [plantKnee]: { x: 0.1 + windup * 0.2, y: 0, z: 0 },
    body: { x: 0.06 + windup * 0.1 - strike * 0.1, y: 0, z: (kickLeg === 'L' ? 1 : -1) * strike * 0.12 },
    shoulderL: { x: -strike * 1.25 - windup * 0.3, y: 0, z: kickLeg === 'L' ? -0.4 : 0.4 },
    shoulderR: { x: -strike * 1.25 - windup * 0.3, y: 0, z: kickLeg === 'L' ? 0.4 : -0.4 },
    elbowL: { x: -0.45, y: 0, z: 0 },
    elbowR: { x: -0.45, y: 0, z: 0 },
    head: { x: -0.08, y: 0, z: 0 }
  };
}

function headerClip(t, ctx) {
  const duration = Number(ctx.duration) || 0.4;
  const p = clamp(t / duration, 0, 1);
  const arc = Math.sin(Math.PI * p);
  return {
    body: { x: -arc * 0.2, y: 0, z: 0 },
    head: { x: arc * 0.45, y: 0, z: 0 },
    shoulderL: { x: -arc * 0.55, y: 0, z: -0.2 },
    shoulderR: { x: -arc * 0.55, y: 0, z: 0.2 },
    elbowL: { x: -0.3 - arc * 0.2, y: 0, z: 0 },
    elbowR: { x: -0.3 - arc * 0.2, y: 0, z: 0 }
  };
}

function celebrateClip(t, ctx) {
  const style = ctx.style || 'classic';
  const p = clamp(t / (Number(ctx.duration) || 2.4), 0, 1);
  const pulse = Math.sin(t * 7.2);
  const lift = smoothstep(p / 0.18) * (1 - smoothstep((p - 0.82) / 0.18));
  const jump = Math.abs(Math.sin(t * 4.4)) * 0.05 * lift;
  const armsUp = style === 'airplane' ? 1.05 : 2.55;
  const spread = style === 'airplane' ? 1.45 : 0.34;
  return {
    body: { x: -0.05 * lift + jump, y: 0, z: pulse * 0.03 * lift },
    shoulderL: { x: -armsUp * lift, y: 0, z: -(0.12 + spread) * lift },
    shoulderR: { x: -armsUp * lift, y: 0, z: (0.12 + spread) * lift },
    elbowL: { x: -0.18 - (style === 'fist-pump' ? pulse * 0.6 : 0) * lift, y: 0, z: 0 },
    elbowR: { x: -0.18 - (style === 'fist-pump' ? pulse * 0.6 : 0) * lift, y: 0, z: 0 },
    head: { x: -0.24 * lift, y: Math.sin(t * 2.2) * 0.2 * lift, z: 0 }
  };
}

function tackleClip(t, ctx) {
  const duration = Number(ctx.duration) || 0.82;
  const p = clamp(t / duration, 0, 1);
  const slide = smoothstep(p / 0.2) * (1 - smoothstep((p - 0.62) / 0.38));
  const dir = ctx.dir === -1 ? -1 : 1;
  return {
    body: { x: 0.5 * slide, y: 0, z: dir * 0.95 * slide },
    hipL: { x: (0.95 - 1.05 * slide) * slide + 0.02, y: 0, z: 0 },
    hipR: { x: (-0.8 + 0.95 * slide) * slide + 0.02, y: 0, z: 0 },
    kneeL: { x: 0.62 * slide, y: 0, z: 0 },
    kneeR: { x: 0.28 * slide, y: 0, z: 0 },
    shoulderL: { x: -1.55 * slide, y: 0, z: dir * 0.3 * slide },
    shoulderR: { x: -1.55 * slide, y: 0, z: dir * 0.3 * slide },
    elbowL: { x: -0.35 * slide, y: 0, z: 0 },
    elbowR: { x: -0.35 * slide, y: 0, z: 0 },
    head: { x: 0.2 * slide, y: dir * 0.2 * slide, z: 0 }
  };
}

function receiveClip(t, ctx) {
  const duration = Number(ctx.duration) || 0.42;
  const p = clamp(t / duration, 0, 1);
  const cushion = Math.sin(Math.PI * p);
  return {
    body: { x: 0.03 - cushion * 0.07, y: 0, z: 0 },
    shoulderL: { x: -0.28 - cushion * 0.6, y: 0, z: 0.3 },
    shoulderR: { x: -0.28 - cushion * 0.6, y: 0, z: -0.3 },
    elbowL: { x: -0.45 - cushion * 0.2, y: 0, z: 0 },
    elbowR: { x: -0.45 - cushion * 0.2, y: 0, z: 0 },
    head: { x: -0.06 - cushion * 0.12, y: 0, z: 0 }
  };
}

function jumpClip(t, ctx) {
  const duration = Number(ctx.duration) || 0.62;
  const p = clamp(t / duration, 0, 1);
  const air = Math.sin(Math.PI * p);
  return {
    body: { x: -0.05 * air, y: 0, z: 0 },
    hipL: { x: -0.45 * air, y: 0, z: 0 },
    hipR: { x: -0.35 * air, y: 0, z: 0 },
    kneeL: { x: 0.85 * air, y: 0, z: 0 },
    kneeR: { x: 0.95 * air, y: 0, z: 0 },
    ankleL: { x: -0.25 * air, y: 0, z: 0 },
    ankleR: { x: -0.25 * air, y: 0, z: 0 },
    shoulderL: { x: -1.6 * air, y: 0, z: -0.28 },
    shoulderR: { x: -1.6 * air, y: 0, z: 0.28 },
    head: { x: -0.12 * air, y: 0, z: 0 }
  };
}

function signalClip(t, ctx) {
  const duration = Number(ctx.duration) || 1.1;
  const reach = smoothstep(clamp(t / (duration * 0.35), 0, 1));
  return {
    shoulderR: { x: -2.7 * reach, y: 0, z: -0.35 * reach },
    elbowR: { x: 0.4 * reach, y: 0, z: 0 },
    shoulderL: { x: -0.9 * reach, y: 0, z: 0.16 * reach },
    elbowL: { x: 0.75 * reach, y: 0, z: 0 },
    head: { x: -0.28 * reach, y: 0, z: 0 },
    body: { x: 0.02, y: 0, z: 0 }
  };
}

/**
 * Biblioteca de clipes. `mask` é a máscara padrão do clipe, `duration` a
 * duração do disparo one-shot (0 = loop) e `additive` indica se a pose soma
 * ao movimento base em vez de substituí-lo.
 */
export const CLIPS = Object.freeze({
  idle: { mask: 'upper+head', loop: true, additive: true, duration: 0, evaluate: idleClip },
  run: { mask: 'full', loop: true, duration: 0, evaluate: locomotionClip },
  jog: { mask: 'full', loop: true, duration: 0, evaluate: locomotionClip },
  kick: { mask: 'full', loop: false, duration: 0.42, evaluate: kickClip },
  shot: { mask: 'full', loop: false, duration: 0.42, evaluate: kickClip },
  pass: { mask: 'full', loop: false, duration: 0.34, evaluate: kickClip },
  cross: { mask: 'full', loop: false, duration: 0.5, evaluate: kickClip },
  header: { mask: 'upper+head', loop: false, duration: 0.4, evaluate: headerClip },
  celebrate: { mask: 'full', loop: false, duration: 2.4, evaluate: celebrateClip },
  tackle: { mask: 'full', loop: false, duration: 0.82, evaluate: tackleClip },
  receive: { mask: 'upper', loop: false, duration: 0.42, evaluate: receiveClip },
  jump: { mask: 'full', loop: false, duration: 0.62, evaluate: jumpClip },
  signal: { mask: 'upper+head', loop: false, duration: 1.1, evaluate: signalClip }
});

export const CLIP_NAMES = Object.freeze(Object.keys(CLIPS));

/**
 * Liga o controlador ao rig do jogador. O rig é um dicionário de ossos; o
 * `player.js` monta esse dicionário a partir dos grupos de `arms`/`legs`.
 */
export function rigFromModel(model) {
  const arms = model.arms || [];
  const legs = model.legs || [];
  return {
    body: model.body,
    head: model.head,
    shoulderL: arms[0]?.shoulder,
    elbowL: arms[0]?.forearm,
    shoulderR: arms[1]?.shoulder,
    elbowR: arms[1]?.forearm,
    hipL: legs[0]?.hip,
    kneeL: legs[0]?.knee,
    ankleL: legs[0]?.foot,
    hipR: legs[1]?.hip,
    kneeR: legs[1]?.knee,
    ankleR: legs[1]?.foot,
    legs: [
      { hip: legs[0]?.hip, knee: legs[0]?.knee, ankle: legs[0]?.foot, side: 'L' },
      { hip: legs[1]?.hip, knee: legs[1]?.knee, ankle: legs[1]?.foot, side: 'R' }
    ]
  };
}

const THIGH = 0.405;
const SHIN = 0.32;
const LEG_LENGTH = THIGH + SHIN;
const ANKLE_REST = 0.072;

/**
 * Controlador de camadas.
 *
 * @param {object} options
 * @param {object} options.rig dicionário de ossos (`rigFromModel`)
 * @param {string} [options.mask='full'] máscara padrão dos novos disparos
 * @param {number} [options.farDistance=55] distância em metros para desligar o rig
 * @param {number} [options.ikDistance=26] distância em metros para desligar o IK
 * @param {number} [options.lodBias=0] soma às duas distâncias. É como o
 *   controlador acompanha a câmera: numa transmissão elevada todos os
 *   atletas ficam a mais de 100 m da lente, e sem esse deslocamento o
 *   LOD desligaria animação e IK de todo mundo.
 * @param {boolean} [options.ik=true] IK de pés no gramado
 */
export function createAnimationController(options = {}) {
  const rig = options.rig || {};
  const state = {
    speed: 1,
    mask: maskBones(options.mask || 'full'),
    maskExplicit: Boolean(options.mask),
    layers: [],
    serial: 0,
    elapsed: 0,
    ik: {
      enabled: options.ik !== false,
      ground: options.groundIK !== false,
      ball: options.ballIK !== false,
      weight: Number.isFinite(options.ikWeight) ? options.ikWeight : 0.85,
      ballWeight: Number.isFinite(options.ballIKWeight) ? options.ballIKWeight : 0.9,
      maxPerFrame: Number.isFinite(options.ikMaxStep) ? options.ikMaxStep : 0.35,
      lastGround: 0,
      lastBall: 0
    },
    lod: {
      farDistance: Number.isFinite(options.farDistance) ? options.farDistance : 55,
      ikDistance: Number.isFinite(options.ikDistance) ? options.ikDistance : 26,
      // Deslocamento somado às duas distâncias (ver `setLodBias`).
      bias: Number.isFinite(options.lodBias) ? options.lodBias : 0
    },
    lastDistance: 0
  };

  const bones = BONE_KEYS.map(key => [key, rig[key] || null]).filter(([, bone]) => bone && bone.rotation);
  const boneMap = new Map(bones);

  function readPose() {
    const pose = {};
    for (const [key, bone] of bones) {
      pose[key] = { x: bone.rotation.x, y: bone.rotation.y, z: bone.rotation.z };
    }
    return pose;
  }

  function writePose(pose) {
    for (const [key, bone] of bones) {
      const target = pose[key];
      if (!target) continue;
      bone.rotation.x = Number.isFinite(target.x) ? target.x : bone.rotation.x;
      bone.rotation.y = Number.isFinite(target.y) ? target.y : bone.rotation.y;
      bone.rotation.z = Number.isFinite(target.z) ? target.z : bone.rotation.z;
    }
  }

  function updateLayerWeights(dt) {
    for (let index = state.layers.length - 1; index >= 0; index -= 1) {
      const layer = state.layers[index];
      const fade = Math.max(0.0001, layer.fade);
      // 3 constantes de tempo: o peso chega ao alvo em ~3·fade sem salto.
      const rate = 1 - Math.exp((-3 * dt) / fade);
      layer.weight += (layer.target - layer.weight) * rate;
      if (Math.abs(layer.target - layer.weight) < 0.0015) layer.weight = layer.target;
      if (layer.loop) {
        layer.time += dt * state.speed * (layer.rate || 1);
      } else {
        layer.time += dt * state.speed;
        if (!layer.hold && layer.time >= layer.duration) layer.target = 0;
        if (layer.time >= layer.duration) layer.time = layer.duration;
      }
      if (layer.weight <= 0.0015 && layer.target === 0 && !layer.persistent) {
        state.layers.splice(index, 1);
      }
    }
  }

  function applyLayers(pose, ctx) {
    for (const layer of state.layers) {
      if (layer.weight <= 0.002) continue;
      const clip = CLIPS[layer.clip];
      if (!clip) continue;
      const evaluated = clip.evaluate(layer.time, { ...ctx, ...layer.params });
      if (!evaluated) continue;
      const weight = clamp(layer.weight, 0, 1);
      for (const [key, target] of Object.entries(evaluated)) {
        if (!layer.mask.includes(key)) continue;
        if (!ALL_BONES.has(key) || !pose[key]) continue;
        if (layer.additive || clip.additive) {
          pose[key].x += target.x * weight;
          pose[key].y += (target.y || 0) * weight;
          pose[key].z += (target.z || 0) * weight;
        } else {
          pose[key].x = lerpAngle(pose[key].x, target.x, weight);
          pose[key].y = lerpAngle(pose[key].y, target.y || 0, weight);
          pose[key].z = lerpAngle(pose[key].z, target.z || 0, weight);
        }
      }
    }
  }

  /**
   * IK de contato: o joelho "encurta" a perna para o pé não afundar no
   * gramado. Só mexe no joelho, então nunca briga com o quadril do ciclo base.
   */
  function solveGroundIK(pose, ctx) {
    if (!state.ik.enabled || !state.ik.ground) return;
    if (ctx.inAir) return;
    const bodyY = Number(rig.body?.position?.y) || 0;
    const ground = Number.isFinite(ctx.groundOffset) ? ctx.groundOffset : 0;
    for (const leg of rig.legs || []) {
      if (!leg?.hip) continue;
      const hipKey = leg.side === 'L' ? 'hipL' : 'hipR';
      const kneeKey = leg.side === 'L' ? 'kneeL' : 'kneeR';
      const ankleKey = leg.side === 'L' ? 'ankleL' : 'ankleR';
      if (!pose[hipKey] || !pose[kneeKey] || !pose[ankleKey]) continue;
      const hipY = Number(leg.hip.position?.y) || 0.795;
      const thetaHip = pose[hipKey].x;
      const thetaKnee = pose[kneeKey].x;
      const ankleY = hipY - THIGH * Math.cos(thetaHip) - SHIN * Math.cos(thetaHip + thetaKnee) + bodyY + ground;
      if (ankleY >= ANKLE_REST || !Number.isFinite(ankleY)) continue;
      // cos(θh+θk) que devolve o tornozelo à altura de apoio.
      const desired = ANKLE_REST - hipY - bodyY - ground;
      const cosSum = (desired + THIGH * Math.cos(thetaHip)) / -SHIN;
      if (!Number.isFinite(cosSum)) continue;
      const magnitude = Math.acos(clamp(cosSum, -1, 1));
      const currentSum = thetaHip + thetaKnee;
      // O joelho dobra para frente; só aceita a solução "para trás" se o ciclo
      // base já estiver claramente atrás (perna de trás no passo).
      const sum = currentSum >= -0.02 ? magnitude : -magnitude;
      let kneeTarget = sum - thetaHip;
      if (Math.abs(kneeTarget - thetaKnee) > state.ik.maxPerFrame) {
        kneeTarget = thetaKnee + Math.sign(kneeTarget - thetaKnee) * state.ik.maxPerFrame;
      }
      pose[kneeKey].x = lerp(thetaKnee, kneeTarget, state.ik.weight);
      // O pé acompanha a inclinação da perna para manter a sola apoiada.
      pose[ankleKey].x = lerpAngle(pose[ankleKey].x, -(thetaHip + pose[kneeKey].x) * 0.55, state.ik.weight * 0.6);
      state.ik.lastGround = ankleY;
    }
  }

  /**
   * IK de contato com a bola: a perna que chuta mira a bola quando ela está ao
   * alcance. Resolve a cadeia de dois ossos no plano sagital do atleta.
   */
  function solveBallIK(pose, ctx) {
    if (!state.ik.enabled || !state.ik.ball) return;
    const ball = ctx.ball;
    if (!ball || !ctx.ownsBall || !Array.isArray(rig.legs)) return;
    const px = Number(ctx.x) || 0;
    const pz = Number(ctx.z) || 0;
    const planar = Math.hypot(Number(ball.x) - px, Number(ball.z) - pz);
    if (!Number.isFinite(planar) || planar > 1.25) return;
    const side = ctx.kickLeg === 'L' ? 'L' : 'R';
    const leg = rig.legs.find(item => item.side === side);
    if (!leg?.hip) return;
    const hipKey = `hip${side}`;
    const kneeKey = `knee${side}`;
    if (!pose[hipKey] || !pose[kneeKey]) return;
    const hipY = Number(leg.hip.position?.y) || 0.795;
    // Profundidade (frente/trás) e altura do contato em relação ao quadril.
    const forward = Number(ctx.facingAngle) || 0;
    const dx = Number(ball.x) - px;
    const dz = Number(ball.z) - pz;
    const depth = dx * Math.sin(forward) + dz * Math.cos(forward);
    const targetY = (Number(ball.y) || 0.11) - hipY;
    let reach = Math.hypot(depth, targetY);
    if (!Number.isFinite(reach) || reach < 0.22) return;
    // Fora do alcance natural a perna só estica até o limite: nunca "puxa" o
    // quadril para um ponto impossível.
    reach = Math.min(reach, LEG_LENGTH - 0.02);
    const gamma = Math.atan2(-depth, -targetY);
    const cosKnee = (reach * reach - THIGH * THIGH - SHIN * SHIN) / (2 * THIGH * SHIN);
    const kneeBend = Math.acos(clamp(cosKnee, -1, 1));
    const hipTarget = gamma - Math.atan2(SHIN * Math.sin(kneeBend), THIGH + SHIN * Math.cos(kneeBend));
    const weight = state.ik.ballWeight * clamp((1.25 - planar) / 0.6, 0, 1);
    pose[hipKey].x = lerpAngle(pose[hipKey].x, clamp(hipTarget, -1.75, 1.2), weight);
    pose[kneeKey].x = lerp(pose[kneeKey].x, kneeBend, weight);
    state.ik.lastBall = planar;
  }

  const controller = {
    rig,
    /** Velocidade global das camadas (1 = tempo real). */
    get speed() {
      return state.speed;
    },
    set speed(value) {
      const next = Number(value);
      if (!Number.isFinite(next)) return;
      state.speed = clamp(next, 0, 4);
    },
    /** Máscara padrão dos próximos disparos. */
    get mask() {
      return [...state.mask];
    },
    get layerCount() {
      return state.layers.length;
    },

    /**
     * Aplica (ou ajusta) uma máscara de ossos.
     * @param {string} group `lower`, `upper`, `head`, `upper+head`, `full`...
     */
    applyMask(group) {
      state.mask = maskBones(group);
      state.maskExplicit = true;
      return [...state.mask];
    },

    /**
     * Mistura um clipe sobre o movimento base.
     * @param {string} target nome do clipe
     * @param {number} [weight=1] 0..1
     * @param {object} [options] `{ mask, fade, params, loop }`
     */
    blend(target, weight = 1, options = {}) {
      const name = String(target || '').toLowerCase();
      const clip = CLIPS[name];
      if (!clip) return null;
      const desired = clamp(Number(weight) || 0, 0, 1);
      const fade = Number.isFinite(options.fade) ? Math.max(0.01, options.fade) : 0.18;
      // Máscara: a do chamado > a que o usuário aplicou > a padrão do clipe.
      const mask = maskBones(options.mask || (state.maskExplicit ? state.mask : null)
        || clip.mask || state.mask);
      let layer = state.layers.find(item => item.clip === name && item.persistent && item.blend);
      if (desired <= 0) {
        if (layer) {
          layer.target = 0;
          layer.persistent = false;
        }
        return layer ? layer.id : null;
      }
      if (!layer) {
        state.serial += 1;
        layer = {
          id: `layer-${state.serial}`,
          clip: name,
          time: 0,
          weight: 0,
          target: desired,
          fade,
          mask,
          loop: options.loop ?? clip.loop,
          duration: Number.isFinite(options.duration) ? options.duration : clip.duration || 1,
          persistent: true,
          blend: true,
          additive: options.additive ?? clip.additive ?? false,
          params: { ...(options.params || {}) }
        };
        state.layers.push(layer);
      } else {
        layer.target = desired;
        layer.fade = fade;
        layer.mask = mask;
        layer.params = { ...layer.params, ...(options.params || {}) };
      }
      return layer.id;
    },

    /**
     * Dispara um clipe de uma vez. Ele entra com fade, segura o tempo do clipe
     * e se dissolve sozinho — é o caminho para "chute", "comemoração" etc.
     */
    trigger(eventName, options = {}) {
      const name = String(eventName || '').toLowerCase();
      const clip = CLIPS[name];
      if (!clip) return null;
      state.serial += 1;
      const duration = Number.isFinite(options.duration) ? options.duration : clip.duration || 0.4;
      const layer = {
        id: `event-${state.serial}`,
        clip: name,
        time: 0,
        weight: 0,
        target: clamp(options.weight ?? 1, 0, 1),
        fade: Number.isFinite(options.fade) ? Math.max(0.01, options.fade) : 0.1,
        mask: maskBones(options.mask || (state.maskExplicit ? state.mask : null)
          || clip.mask || state.mask),
        loop: false,
        duration,
        hold: Boolean(options.hold),
        persistent: false,
        blend: false,
        additive: options.additive ?? clip.additive ?? false,
        params: { ...(options.params || {}) }
      };
      state.layers.push(layer);
      return layer.id;
    },

    /** Remove um clipe (ou todos, sem argumento). */
    stop(target) {
      if (!target) {
        for (const layer of state.layers) {
          layer.target = 0;
          layer.persistent = false;
        }
        const count = state.layers.length;
        state.layers = state.layers.filter(layer => layer.weight > 0.002);
        return count;
      }
      const name = String(target).toLowerCase();
      let removed = 0;
      for (const layer of state.layers) {
        if (layer.clip !== name && layer.id !== name) continue;
        layer.target = 0;
        layer.persistent = false;
        removed += 1;
      }
      return removed;
    },

    /** Árvore de mistura de locomoção: peso de cada clipe pela velocidade. */
    locomotion(speed, options = {}) {
      const value = clamp(Number(speed) || 0, 0, 9);
      if (value < 0.4) {
        this.blend('run', 0, options);
        this.blend('idle', clamp(1 - value / 0.4, 0, 1) * 0.6, { ...options, mask: 'upper+head' });
      } else if (value < 2.4) {
        this.blend('idle', 0, options);
        this.blend('run', clamp((value - 0.4) / 2, 0, 1) * 0.45, options);
      } else {
        this.blend('idle', 0, options);
        this.blend('run', clamp(0.45 + (value - 2.4) / 6.6 * 0.5, 0, 1), options);
      }
      return value;
    },

    /** Distância do atleta para a câmera (LOD de animação/IK). */
    setDistance(distance) {
      state.lastDistance = Number(distance) || 0;
      return state.lastDistance;
    },

    /**
     * Desloca os limites de LOD. Usado quando a câmera de transmissão fica
     * muito afastada: os limites fixos de 55 m/26 m passariam a desligar
     * animação e IK de todo o elenco, e os atletas ficariam patinando.
     */
    setLodBias(bias) {
      state.lod.bias = Number.isFinite(bias) ? Math.max(0, bias) : 0;
      return state.lod.bias;
    },

    /** Um quadro de animação: base pronta → camadas → IK → ossos. */
    update(dt, context = {}) {
      const step = Number.isFinite(dt) ? clamp(dt, 0, 0.1) : 0;
      if (!bones.length || step <= 0) return controller;
      const distance = Number.isFinite(context.distance) ? context.distance : state.lastDistance;
      state.lastDistance = distance;
      state.elapsed += step * state.speed;

      const layersActive = state.layers.length > 0;
      const ikDistance = state.lod.ikDistance + state.lod.bias;
      const farDistance = state.lod.farDistance + state.lod.bias;
      const ikActive = state.ik.enabled && distance <= ikDistance;
      // Longe demais: nem lê a pose; o rig base já está animado.
      if (distance > farDistance) return controller;
      if (!layersActive && !ikActive) return controller;

      updateLayerWeights(step);
      const pose = readPose();
      if (layersActive) applyLayers(pose, { ...context, speed: Number(context.speed) || 0 });
      if (ikActive) {
        solveGroundIK(pose, context);
        solveBallIK(pose, context);
      }
      writePose(pose);
      return controller;
    },

    /** Estado serializável (usado pela API do LLM e pelos testes). */
    stats() {
      return {
        speed: state.speed,
        mask: [...state.mask],
        distance: state.lastDistance,
        layers: state.layers.map(layer => ({
          id: layer.id,
          clip: layer.clip,
          weight: Number(layer.weight.toFixed(3)),
          target: layer.target,
          mask: [...layer.mask],
          time: Number(layer.time.toFixed(3))
        })),
        ik: {
          enabled: state.ik.enabled,
          ground: state.ik.ground,
          ball: state.ik.ball,
          lastGround: Number(state.ik.lastGround.toFixed ? state.ik.lastGround.toFixed(3) : state.ik.lastGround),
          lastBall: Number(state.ik.lastBall.toFixed ? state.ik.lastBall.toFixed(3) : state.ik.lastBall)
        },
        lod: { ...state.lod }
      };
    }
  };

  return controller;
}

/**
 * API pública de animação para o LLM: `window.__xfcAnim`.
 * Recebe o modelo do atleta em foco (o protagonista) e devolve atalhos.
 */
export function installAnimationApi(target, getModel) {
  const api = {
    get model() {
      return getModel();
    },
    get animation() {
      return getModel()?.animation || null;
    },
    get clips() {
      return [...CLIP_NAMES];
    },
    get masks() {
      return Object.keys(BONE_GROUPS);
    },
    setSpeed(value) {
      const animation = api.animation;
      if (animation) animation.speed = value;
      return animation?.speed ?? null;
    },
    setMask(group) {
      return api.animation?.applyMask(group) || null;
    },
    blend(clip, weight = 1, options = {}) {
      return api.animation?.blend(clip, weight, options) || null;
    },
    trigger(event, options = {}) {
      return api.animation?.trigger(event, options) || null;
    },
    stop(clip) {
      return api.animation?.stop(clip) ?? 0;
    },
    state() {
      return api.animation?.stats() || null;
    }
  };
  if (target && typeof target === 'object') target.__xfcAnim = api;
  return api;
}
