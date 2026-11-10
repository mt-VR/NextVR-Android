// O mundo da partida: monta o estádio, os dois times, a bola e o relógio;
// roda as regras (falta, cartão, escanteio, lateral, impedimento, pênalti,
// tiro de meta, intervalo, acréscimos e fim de jogo) e comanda a câmera.
//
// O módulo é agnóstico da interface: avisa o que aconteceu por `onEvent` e
// recebe os comandos do jogador por `world.command`.

import { createEngine, THREE } from './engine.js';
import { buildStadium } from './stadium.js';
import { createBall } from './ball.js';
import { resolveGoalCredit } from './scoring.js';
import { createPlayer3D, lookFor } from './player.js';
import { createGltfPlayer, gltfPlayersEnabled } from './models.js';
import { installAnimationApi } from './animation.js';
import { createTeamAI } from './ai.js';
import { steerPlayer, faceTowards, faceVelocity, playerSpeed, clampToPitch } from './movement.js';
import { PITCH, GOAL, BALL, FORMATION_433 } from './constants.js';
import {
  BROADCAST_CAMERA_SIDE,
  broadcastCameraPose,
  cameraRelativeMovementFromStick,
  cornerCameraPose,
  worldMovementFromStick
} from './camera.js';
import { attackSign, insidePenaltyAreaFor, ownGoalX as ownGoalXOf } from './sides.js';
import {
  goalkeeperDiveDirection,
  goalkeeperPositionTarget,
  goalkeeperSaveChance,
  predictGoalkeeperIntercept
} from './goalkeeper.js';
import {
  clampSetPiece,
  cornerTarget,
  evaluateFreeKick,
  evaluatePenalty,
  impactYFromLift,
  predictTrajectory,
  strikeFromImpact
} from './set-pieces.js';

const HUMAN_SPEED = 6.6;
const HUMAN_SPRINT = 8.4;
const GOAL_CELEBRATIONS = ['classic', 'airplane', 'point', 'knee-slide', 'fist-pump'];

/** Gerador pseudoaleatório com semente (mulberry32). */
export function makeRng(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createMatch(options = {}) {
  const {
    canvas,
    home,
    away,
    homeKit,
    awayKit,
    onEvent = () => {},
    minutes = 6,
    difficulty = 'normal',
    userSide = 'home',
    stadium = 0
  } = options;

  const engine = createEngine(canvas);
  const stadiumMesh = buildStadium(engine.scene, {
    stadium,
    lowPower: engine.lowPower,
    timeOfDay: options.timeOfDay
  });
  const ball = createBall(engine.scene, { lowPower: engine.lowPower });

  // Semente opcional: deixa a simulação reproduzível (útil nos testes).
  const rng = options.seed ? makeRng(options.seed) : Math.random;
  const aiAccuracy = difficulty === 'easy' ? 0.42 : difficulty === 'hard' ? 0.7 : 0.55;

  const teams = {
    home: { side: 'home', info: home, kit: homeKit, score: 0, players: [], cards: {} },
    away: { side: 'away', info: away, kit: awayKit, score: 0, players: [], cards: {} }
  };

  const allPlayers = [];
  const stats = {
    home: { shots: 0, corners: 0, fouls: 0, cards: 0, passes: 0, passesOn: 0, shotsOn: 0, saves: 0 },
    away: { shots: 0, corners: 0, fouls: 0, cards: 0, passes: 0, passesOn: 0, shotsOn: 0, saves: 0 }
  };
  const possession = { home: 0, away: 0 };
  const training = {
    enabled: Boolean(options.training),
    drill: options.trainingDrill || options.training?.drill || 'penalty',
    player: null,
    keeper: null,
    wallPlayers: [],
    cameraForward: null,
    shotActive: false,
    shotElapsed: 0,
    attemptIndex: 0,
    passChain: 0,
    stats: { shots: 0, goals: 0, saves: 0, misses: 0, passes: 0, completedPasses: 0, combinations: 0 }
  };
  let paused = false;

  const clock = {
    minutes: 0,
    half: 1,
    added: 0,
    timeScale: 90 / Math.max(1, minutes)
  };

  const phase = {
    name: 'kickoff',
    timer: 0,
    side: 'home',
    restart: null,
    conceding: 'away'
  };

  const input = { moveX: 0, moveZ: 0, sprint: false };
  const controlled = { home: null, away: null };
  let refereeDecision = null;
  const cameraTarget = new THREE.Vector3(0, 0, 0);
  let cameraReady = false;
  // 'play' (transmissão) ou 'cinematic' (volta sobre o estádio).
  let cameraMode = 'cinematic';
  // Entrada cinematográfica: os 22 jogadores saem do vestiário e a câmera
  // acompanha o time do usuário até o alinhamento no gramado.
  let entrance = null;
  let entrancePlayed = false;
  let cinematicAngle = 0;
  let manualCamera = null;
  let goalScorer = null;
  let goalCameraReady = false;
  let goalCelebrationStyle = 'classic';
  let goalCelebrationIndex = 0;
  let trainingCameraReady = false;
  const setPieceOptions = {
    aim: 0,
    power: 0.72,
    curve: 0,
    lift: strikeFromImpact({ x: 0, y: 0 }).lift,
    impactX: 0,
    impactY: 0,
    kind: 'placed'
  };
  let shotCamera = null;
  // O lado da transmissão é invariável durante toda a partida.
  const cameraSide = BROADCAST_CAMERA_SIDE;
  let confrontation = null;

  // ------------------------------------------------------------- utilidades --

  const members = side => teams[side].players.filter(player => player.active);
  const opponentOf = side => (side === 'home' ? 'away' : 'home');
  const isUserControlled = player => player?.side === userSide && controlled[userSide] === player;

  function modelMovementState(player) {
    const speed = playerSpeed(player);
    const ownsBall = player.active && ball.state.owner === player;
    let protecting = false;
    if (ownsBall) {
      for (const rival of allPlayers) {
        if (!rival.active || rival.side === player.side) continue;
        if (Math.hypot(rival.x - player.x, rival.z - player.z) < 1.85) {
          protecting = true;
          break;
        }
      }
    }
    // Contexto extra das camadas de animação: distância à câmera (LOD), bola
    // (IK de contato) e posição (projeção do alvo no plano do atleta).
    const camera = engine.camera?.position;
    const distance = camera ? Math.hypot(player.x - camera.x, player.z - camera.z) : 0;
    return {
      speed,
      moving: speed > 0.25,
      lean: player.turnLean || 0,
      ownsBall,
      protecting,
      distance,
      x: player.x,
      z: player.z,
      ball: ball.state.position
    };
  }

  function emit(event) {
    if (event.type === 'shot') stats[event.team].shots += 1;
    if (event.type === 'pass') stats[event.team].passes += 1;
    if (event.type === 'goal') stats[event.team].shotsOn += 1;
    if (event.type === 'save') {
      stats[event.team].saves += 1;
      stats[opponentOf(event.team)].shotsOn += 1;
    }
    if (event.type === 'restart' && event.kind === 'corner') stats[event.team].corners += 1;
    if (event.type === 'foul') stats[event.team].fouls += 1;
    if (event.type === 'card') stats[event.team].cards += 1;
    if (training.enabled) {
      if (event.type === 'shot') training.stats.shots += 1;
      if (event.type === 'training-goal') training.stats.goals += 1;
      if (event.type === 'training-save') training.stats.saves += 1;
      if (event.type === 'training-miss') training.stats.misses += 1;
      if (event.type === 'pass') training.stats.passes += 1;
    }
    onEvent(event);
  }

  /**
   * Clareza do corredor de passe entre dois pontos: 1 = livre, 0 = travado.
   * Mede a menor distância de um adversário ao segmento do passe.
   */
  function laneClearance(fromX, fromZ, toX, toZ, rivalSide) {
    const dx = toX - fromX;
    const dz = toZ - fromZ;
    const lengthSq = dx * dx + dz * dz;
    if (lengthSq < 0.01) return 1;
    let worst = 1;
    for (const rival of members(rivalSide)) {
      if (!rival.active) continue;
      const t = Math.max(0, Math.min(1, ((rival.x - fromX) * dx + (rival.z - fromZ) * dz) / lengthSq));
      const projX = fromX + t * dx;
      const projZ = fromZ + t * dz;
      const distance = Math.hypot(rival.x - projX, rival.z - projZ);
      const clearance = Math.max(0, Math.min(1, (distance - 0.9) / 2.6));
      if (clearance < worst) worst = clearance;
    }
    return worst;
  }

  function openSpace(player) {
    let closest = Infinity;
    for (const rival of members(opponentOf(player.side))) {
      if (!rival.active) continue;
      closest = Math.min(closest, Math.hypot(rival.x - player.x, rival.z - player.z));
    }
    return Math.min(closest, 12);
  }

  // A grande área do DEFENSOR (quem cometeu a falta) — antes o cálculo usava
  // o eixo do atacante e apontava a pequena área do adversário.
  function insidePenaltyArea(x, z, defendingSide) {
    return insidePenaltyAreaFor(x, z, defendingSide);
  }

  function lastTouch() {
    return ball.state.lastTouch;
  }

  // ------------------------------------------------------------------ times --

  function kitFor(team, kit, isKeeper) {
    const colors = kit?.colors || { primary: '#2ef0a8', secondary: '#0b2b3a', trim: '#ffffff' };
    if (isKeeper) {
      return {
        primary: colors.keeperPrimary || '#f2c14e',
        secondary: colors.keeperSecondary || '#22262b',
        accent: '#1b1f24',
        pattern: 'solid'
      };
    }
    return {
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.trim || colors.accent || '#ffffff',
      pattern: kit?.pattern || 'solid'
    };
  }

  /**
   * Distribui os atletas nas posições da formação 4-3-3 conforme a posição
   * real de cada um no elenco (o goleiro tem de ficar no gol).
   */
  function assignSlots(lineup) {
    const slots = FORMATION_433.map(slot => ({ ...slot, taken: false }));
    const byRole = new Map();
    for (const slot of slots) {
      if (!byRole.has(slot.role)) byRole.set(slot.role, []);
      byRole.get(slot.role).push(slot);
    }
    return lineup.slice(0, 11).map((data, index) => {
      const pos = String(data.pos || data.position || '').toUpperCase();
      const list = byRole.get(pos);
      let slot = null;
      if (list?.length) {
        const available = list.findIndex(candidate => !candidate.taken);
        if (available >= 0) slot = list.splice(available, 1)[0];
      }
      if (!slot) slot = slots.find(candidate => !candidate.taken) || slots[index];
      slot.taken = true;
      return { data, index, slot, slotIndex: slots.indexOf(slot) };
    });
  }

  /**
   * Modelo do atleta: o glTF/Mixamo quando o pacote já chegou, senão o rig
   * procedural. O contrato dos dois é o mesmo — o resto do motor não muda.
   */
  function makePlayerModel(options) {
    return (gltfPlayersEnabled() && createGltfPlayer(options)) || createPlayer3D(options);
  }

  function buildTeam(team) {
    const lineup = team.info?.players || [];
    assignSlots(lineup).forEach(({ data, index, slot, slotIndex }) => {
      const role = slot.role;
      const isKeeper = role === 'GK';
      const look = {
        ...lookFor(index + (team.side === 'away' ? 3 : 0)),
        ...(data.appearance || {})
      };
      const model = makePlayerModel({
        kit: kitFor(team, team.kit, isKeeper),
        number: data.number || index + 1,
        name: data.name || data.fullName || `Jogador ${index + 1}`,
        teamName: team.info?.shortName || team.info?.name || 'XFC',
        crest: team.info?.crest || null,
        sponsor: team.kit?.sponsor || team.info?.sponsor || 'XFC',
        brand: team.kit?.brand || 'XF',
        preferredFoot: data.foot || 'Right',
        isKeeper,
        simplified: options.simplifiedPlayers ?? engine.lowPower,
        skinTone: look.skinTone,
        hairColor: look.hairColor,
        hairStyle: look.hairStyle,
        heightScale: look.heightScale,
        // O retrato pode enriquecer o rosto 3D; corpo e uniforme continuam em 3D.
        photo: data.photo || null
      });
      engine.scene.add(model.root);

      const base = FORMATION_433[slotIndex] || slot;
      const sign = attackSign(team.side);
      const player = {
        id: `${team.side}-${data.id || index}`,
        name: data.name || `Jogador ${index + 1}`,
        fullName: data.fullName || data.name || `Jogador ${index + 1}`,
        number: data.number || index + 1,
        side: team.side,
        index: slotIndex,
        order: index,
        role,
        isKeeper,
        isGK: isKeeper,
        ovr: data.ovr || data.rating || null,
        goalkeeping: data.goalkeeping ?? data.stats?.goalkeeping ?? data.stats?.reflexes ?? data.rating ?? data.ovr ?? 70,
        shooting: data.shotPower ?? data.stats?.shooting ?? data.shooting ?? data.rating ?? data.ovr ?? 68,
        shotPower: data.shotPower ?? data.stats?.shooting ?? data.shooting ?? data.rating ?? data.ovr ?? 68,
        // O goleiro cobre mais espaço; o mergulho expande temporariamente
        // alcance e altura da colisão real da bola.
        reach: isKeeper ? 0.95 : 0.52,
        reachHeight: 1.8,
        active: true,
        x: base.x * sign,
        z: base.z,
        vx: 0,
        vz: 0,
        facing: new THREE.Vector3(sign, 0, 0),
        facingAngle: sign > 0 ? Math.PI / 2 : -Math.PI / 2,
        sprint: false,
        yellowCards: 0,
        redCard: false,
        dismissal: null,
        slideTackle: null,
        slideCooldownUntil: 0,
        root: model.root,
        model
      };
      model.root.position.set(player.x, 0, player.z);
      model.root.rotation.y = player.facingAngle;
      team.players.push(player);
      allPlayers.push(player);
    });
  }

  buildTeam(teams.home);
  buildTeam(teams.away);

  // ------------------------------------------------------------------ ações --

  /** Passe guiado entre companheiros, com bola à frente e checagem de impedimento. */
  function kickBall(player, target, { power = 18, lob = false, through = false, targetPoint = null, curve = 0, lift = null } = {}) {
    if (!target) return;
    const sign = attackSign(player.side);
    // Passe normal antecipa a corrida curta; a enfiada procura o espaço à
    // frente do atacante, em vez de levantar a bola para a linha lateral.
    const lead = through ? 0.68 : 0.4;
    const runLead = through
      ? Math.max(2.2, Math.min(6.2, 2.7 + Math.max(0, sign * (target.vx || 0)) * 0.42))
      : 0;
    const aimX = Math.max(-PITCH.halfLength + 1.4, Math.min(PITCH.halfLength - 1.4,
      targetPoint?.x ?? target.x + (target.vx || 0) * lead + sign * runLead));
    const aimZ = Math.max(-PITCH.halfWidth + 2, Math.min(PITCH.halfWidth - 2,
      targetPoint?.z ?? target.z + (target.vz || 0) * lead));
    const dx = aimX - player.x;
    const dz = aimZ - player.z;
    const distance = Math.hypot(dx, dz) || 1;
    const direction = { x: dx / distance, z: dz / distance };
    const offside = target.active ? isOffside(player, target) : false;
    const speed = through
      ? Math.max(11, Math.min(22, distance * 0.62 + 7))
      : lob
        ? Math.max(10, Math.min(20, distance * 0.7 + 5))
        : Math.max(7, Math.min(19, distance * 0.62 + 4 + power * 0.08));
    const guide = target.active
      ? { receiver: target, x: aimX, z: aimZ, through }
      : null;
    // Enfiada é rasteira e firme; só os cruzamentos/escanteios usam a bola alta.
    const flightLift = lift ?? (lob ? 0.42 : through ? 0.055 : 0.11);
    ball.kick(direction, speed, flightLift, {
      guide,
      curve: clampSetPiece(curve, -1, 1)
    });
    ball.state.lastShotKind = null;
    ball.state.lastTouch = player;
    ball.state.lastIntentionalTouch = player;
    if (training.enabled && training.drill === 'team' && player.side === userSide) {
      training.lastPassFrom = player.id;
    }
    player.model.kick(lob ? 'cross' : through ? 'through' : 'pass');
    emit({ type: 'pass', team: player.side, player, target, through });
    if (offside) {
      refereeSignal(1.3);
      emit({ type: 'offside', team: opponentOf(player.side), player: target, minute: clock.minutes });
      setRestart('freekick', opponentOf(player.side), target.x, target.z);
    }
  }

  /** Impedimento: o recebedor está à frente da bola e do último defensor. */
  function isOffside(passer, target) {
    const sign = attackSign(passer.side);
    if (sign * (target.x - passer.x) < 1.5) return false;
    const rivals = members(opponentOf(passer.side)).filter(player => player.active);
    let secondLast = -Infinity;
    for (const rival of rivals) {
      secondLast = Math.max(secondLast, sign * rival.x);
    }
    return sign * target.x > secondLast + 0.4;
  }

  /**
   * Finalização. Três tipos, como nos jogos de futebol:
   *  - normal (toque): colocado no canto do gol quando o analógico aponta;
   *  - forte (segurar e carregar): mais veloz, mais difícil de defender;
   *  - colocado (arrastar para baixo no botão): carburação mínima, mira exata
   *    no ângulo — o clássico chute colocado.
   */
  function shootBall(player, { power = 22, spread = 0, target = null, kind = 'normal', lift = null, curve = 0 } = {}) {
    const sign = attackSign(player.side);
    const goalTarget = target || { x: sign * PITCH.halfLength, z: (rng() - 0.5) * 4 };
    const dx = goalTarget.x - player.x;
    const dz = goalTarget.z - player.z;
    const distance = Math.hypot(dx, dz) || 1;
    const targetAngle = Math.atan2(dz, dx);
    let bodyError = targetAngle - (player.facingAngle - Math.PI / 2);
    while (bodyError > Math.PI) bodyError -= Math.PI * 2;
    while (bodyError < -Math.PI) bodyError += Math.PI * 2;
    const precisionRating = Math.max(30, Math.min(99,
      player.shotAccuracy ?? player.finishing ?? player.shooting ?? player.ovr ?? 68));
    const bodyPenalty = Math.min(0.075, Math.abs(bodyError) * 0.055);
    const randomSpread = (rng() - 0.5) * (Math.max(0, spread) + (100 - precisionRating) * 0.0007 + bodyPenalty);
    const angle = targetAngle + randomSpread;
    const launch = lift ?? (kind === 'placed' ? 0.085 : 0.12 + rng() * 0.1);
    // Atributo de finalização, alinhamento corporal e execução variam força
    // e precisão sem transformar cada tipo de chute numa animação idêntica.
    const shootingRating = Math.max(30, Math.min(99, player.shotPower ?? player.shooting ?? 68));
    const powerScale = (0.78 + shootingRating * 0.0045) * (1 - Math.min(0.12, Math.abs(bodyError) * 0.035));
    const effectivePower = Math.max(13, power * powerScale);
    ball.kick(
      { x: Math.cos(angle), z: Math.sin(angle) },
      effectivePower,
      launch,
      { curve: clampSetPiece(curve, -1, 1) }
    );
    ball.state.lastTouch = player;
    ball.state.lastIntentionalTouch = player;
    ball.state.lastShotKind = kind;
    if (training.enabled && player.side === userSide) {
      training.player = player;
      training.passChain = 0;
      training.shotActive = true;
      training.shotElapsed = 0;
    }
    player.model.kick();
    emit({ type: 'shot', team: player.side, player, kind });
  }

  /** Desarme em pé, usado pela IA; o carrinho fica reservado ao toque humano. */
  function tackle(player) {
    const owner = ball.state.owner;
    if (!owner || owner.side === player.side || phase.name !== 'play') return false;
    const distance = Math.hypot(owner.x - player.x, owner.z - player.z);
    if (distance > 2.4) return false;
    const dx = player.x - owner.x;
    const dz = player.z - owner.z;
    const behind = (owner.facing?.x || 0) * dx + (owner.facing?.z || 0) * dz < -0.15;
    const dangerous = Math.abs(owner.x) > PITCH.halfLength - 30;
    const resistance = (owner.burst ?? 0) > 0 ? 0.22 : 0.5;
    if (rng() < aiAccuracy * resistance) {
      ball.attachTo(player);
      ball.state.lastTouch = player;
      ball.state.lastIntentionalTouch = player;
      player.model.kick();
      emit({ type: 'tackle', team: player.side, player, kind: 'standing', clean: true });
      return true;
    }
    if (behind || dangerous || playerSpeed(player) > 7.2 || rng() < 0.28) {
      commitFoul(player, owner, {
        kind: 'challenge',
        behind,
        dangerous,
        severity: behind ? 0.82 : dangerous ? 0.68 : 0.42
      });
    }
    return false;
  }

  /** Inicia um carrinho direcional somente após comando explícito do usuário. */
  function startSlideTackle(player) {
    if (!player?.active || player.slideTackle || phase.name !== 'play'
      || elapsedWorldTime < player.slideCooldownUntil) return false;
    const owner = ball.state.owner;
    if (owner && owner.side === player.side) return false;
    if (!owner && ball.state.position.y > 1.8) return false;
    const targetX = owner
      ? owner.x + (owner.facing?.x || 0) * 0.45
      : ball.state.position.x;
    const targetZ = owner
      ? owner.z + (owner.facing?.z || 0) * 0.45
      : ball.state.position.z;
    const dx = targetX - player.x;
    const dz = targetZ - player.z;
    const distance = Math.hypot(dx, dz);
    if (distance < 0.1 || distance > 6.2) return false;

    const directionX = dx / distance;
    const directionZ = dz / distance;
    player.slideCooldownUntil = elapsedWorldTime + 1.05;
    player.slideTackle = {
      directionX,
      directionZ,
      speed: 8.6,
      timer: 0,
      duration: 0.82,
      resolved: false
    };
    player.sprint = false;
    player.model.slideTackle?.(directionZ < 0 ? -1 : 1);
    return true;
  }

  /** Avança os carrinhos, resolve o contato e recupera o jogador no gramado. */
  function updateSlideTackles(dt) {
    for (const player of allPlayers) {
      if (phase.name !== 'play') break;
      const slide = player.slideTackle;
      if (!slide || !player.active) continue;
      const progress = Math.min(1, slide.timer / slide.duration);
      const speed = slide.speed * Math.pow(Math.max(0, 1 - progress), 0.7);
      player.vx = slide.directionX * speed;
      player.vz = slide.directionZ * speed;
      player.x += player.vx * dt;
      player.z += player.vz * dt;
      clampToPitch(player, 0.6);
      slide.timer = Math.min(slide.duration, slide.timer + dt);

      if (!slide.resolved && phase.name === 'play') {
        const owner = ball.state.owner;
        if (owner && owner.side !== player.side) {
          // A bola fica à frente do pé do portador; o desarme só é limpo
          // quando o carrinho intercepta esse ponto, não por encostar no tronco.
          const ballX = owner.x + (owner.facing?.x || 0) * 0.45;
          const ballZ = owner.z + (owner.facing?.z || 0) * 0.45;
          const ballDistance = Math.hypot(ballX - player.x, ballZ - player.z);
          const bodyDistance = Math.hypot(owner.x - player.x, owner.z - player.z);
          if (ballDistance < 1.02 || bodyDistance < 0.82) {
            slide.resolved = true;
            const dx = player.x - owner.x;
            const dz = player.z - owner.z;
            const behind = (owner.facing?.x || 0) * dx + (owner.facing?.z || 0) * dz < -0.15;
            const dangerous = Math.abs(owner.x) > PITCH.halfLength - 25;
            const contactSpeed = Math.hypot(player.vx, player.vz);
            const ballFirst = ballDistance <= 0.82;
            if (ballFirst) {
              ball.attachTo(player);
              ball.state.lastTouch = player;
              ball.state.lastIntentionalTouch = player;
              player.model.kick('tackle');
              if (player.side === userSide) controlled[userSide] = player;
              if (bodyDistance < 1.05) owner.model.react?.('bump', 0.55);
              emit({ type: 'tackle', team: player.side, player, kind: 'slide', clean: true });
            } else if (bodyDistance < 0.82) {
              const severe = behind && dangerous && contactSpeed >= 8.1;
              const reckless = behind || (dangerous && contactSpeed > 7.6)
                || ((owner.burst ?? 0) > 0 && contactSpeed >= 8.1);
              if (reckless) {
                commitFoul(player, owner, {
                  kind: 'slide',
                  behind,
                  dangerous: dangerous || behind,
                  severity: severe ? 1 : behind ? 0.88 : 0.72,
                  directRed: severe
                });
              } else {
                // Desarme perdido: o atleta cai, o portador mantém a bola.
                player.model.react?.('fall', 0.68);
                owner.model.react?.('bump', 0.48);
                emit({ type: 'tackle', team: player.side, player, kind: 'slide', clean: false });
              }
            } else {
              // O carrinho passa perto sem acertar bola nem adversário.
              player.model.react?.('fall', 0.58);
              emit({ type: 'tackle', team: player.side, player, kind: 'slide', clean: false });
            }
          }
        } else if (!owner && ball.state.position.y < 1.65) {
          const ballDistance = Math.hypot(ball.state.position.x - player.x, ball.state.position.z - player.z);
          if (ballDistance < 1.02) {
            slide.resolved = true;
            if (ballDistance <= 0.82 || rng() < 0.72) {
              ball.attachTo(player);
              ball.state.lastTouch = player;
              ball.state.lastIntentionalTouch = player;
              player.model.kick('tackle');
              if (player.side === userSide) controlled[userSide] = player;
              emit({ type: 'tackle', team: player.side, player, kind: 'slide', clean: true });
            } else {
              player.model.react?.('fall', 0.58);
              emit({ type: 'tackle', team: player.side, player, kind: 'slide', clean: false });
            }
          }
        }
      }

      if (slide.timer >= slide.duration) {
        player.slideTackle = null;
        player.vx *= 0.25;
        player.vz *= 0.25;
      }
    }
  }

  /** Cancela o movimento físico de carrinhos quando a bola sai de jogo. */
  function clearSlideTackles() {
    for (const player of allPlayers) {
      if (!player.slideTackle) continue;
      player.slideTackle = null;
      player.vx = 0;
      player.vz = 0;
    }
  }

  function startConfrontation(offender, victim, severity) {
    if (severity < 0.76 || !offender || !victim) return;
    const actors = [];
    const sides = [victim.side, offender.side];
    for (const side of sides) {
      const nearby = members(side)
        .filter(player => player.active && !player.isKeeper && player !== offender && player !== victim)
        .sort((a, b) => Math.hypot(a.x - victim.x, a.z - victim.z)
          - Math.hypot(b.x - victim.x, b.z - victim.z))
        .slice(0, 2);
      nearby.forEach((player, index) => {
        const toward = side === victim.side ? 1 : -1;
        const meetX = victim.x + attackSign(side) * (0.65 + index * 0.55);
        const meetZ = victim.z + toward * (1.0 + index * 0.55);
        actors.push({
          player,
          side,
          startX: player.x,
          startZ: player.z,
          meetX: Math.max(-PITCH.halfLength + 1, Math.min(PITCH.halfLength - 1, meetX)),
          meetZ: Math.max(-PITCH.halfWidth + 1, Math.min(PITCH.halfWidth - 1, meetZ))
        });
        player.model.react?.(index === 0 ? 'protest' : 'separate', 1.65);
      });
    }
    if (actors.length >= 2) confrontation = { actors, timer: 0, duration: 2.85, victim, offender };
  }

  /** Aproxima poucos companheiros por instantes e depois os afasta do incidente. */
  function updateConfrontation(dt) {
    if (!confrontation) return;
    confrontation.timer += dt;
    const returning = confrontation.timer > 1.45;
    for (const actor of confrontation.actors) {
      if (!actor.player.active) continue;
      const targetX = returning ? actor.startX : actor.meetX;
      const targetZ = returning ? actor.startZ : actor.meetZ;
      steerPlayer(actor.player, targetX, targetZ, dt, returning ? 3.1 : 2.5, { arrive: 0.3, turn: 9 });
      const focus = returning ? ball.state.position
        : actor.side === confrontation.victim.side ? confrontation.offender : confrontation.victim;
      faceTowards(actor.player, focus.x, focus.z, dt, 8);
    }
    if (confrontation.timer >= confrontation.duration) confrontation = null;
  }

  /** Falta com vantagem disciplinar, cartão e bola parada após a decisão. */
  function commitFoul(offender, victim, detail = {}) {
    if (phase.name !== 'play' || !offender?.active || !victim?.active) return false;
    const nearGoal = Math.abs(victim.x) > PITCH.halfLength - 30;
    const dangerous = detail.dangerous ?? nearGoal;
    const behind = Boolean(detail.behind);
    const severity = Math.max(0, Math.min(1, Number(detail.severity) || 0));
    const previousYellows = offender.yellowCards ?? teams[offender.side].cards[offender.id] ?? 0;
    let card = 'none';
    let secondYellow = false;

    if (detail.directRed) {
      card = 'red';
    } else if (detail.forceYellow || dangerous || behind || severity >= 0.78 || rng() < 0.08) {
      offender.yellowCards = previousYellows + 1;
      teams[offender.side].cards[offender.id] = offender.yellowCards;
      card = offender.yellowCards >= 2 ? 'red' : 'yellow';
      secondYellow = card === 'red';
    }

    refereeDecision = {
      stage: 'approach',
      timer: 0,
      offender,
      victim,
      card,
      shown: false
    };
    victim.model.react?.('fall', severity >= 0.7 ? 1.15 : 0.82);
    if (!offender.slideTackle) offender.model.react?.('protest', 0.9);
    startConfrontation(offender, victim, severity);

    emit({
      type: 'foul',
      team: offender.side,
      player: offender,
      victim,
      kind: detail.kind || 'contact',
      severity,
      behind,
      dangerous,
      card,
      minute: clock.minutes,
      location: { x: victim.x, z: victim.z }
    });

    if (card === 'red') {
      offender.redCard = true;
      const exitZ = Math.sign(offender.z || 1) * (PITCH.halfWidth + 1.2);
      const exitDuration = Math.max(2.5, Math.abs(exitZ - offender.z) / 4.2 + 0.35);
      offender.dismissal = { timer: 0, duration: exitDuration, exitZ };
      offender.active = false;
      offender.vx = 0;
      offender.vz = 0;
      offender.model.react?.('ejected', exitDuration);
      if (controlled[offender.side] === offender) {
        const replacement = members(offender.side)
          .filter(player => player.active && !player.isKeeper)
          .sort((a, b) => Math.hypot(a.x - ball.state.position.x, a.z - ball.state.position.z)
            - Math.hypot(b.x - ball.state.position.x, b.z - ball.state.position.z))[0]
          || members(offender.side).find(player => player.active) || null;
        controlled[offender.side] = replacement;
      }
      if (secondYellow) {
        emit({ type: 'card', team: offender.side, player: offender, color: 'yellow', minute: clock.minutes });
      }
      emit({ type: 'card', team: offender.side, player: offender, color: 'red', minute: clock.minutes });
    } else if (card === 'yellow') {
      emit({ type: 'card', team: offender.side, player: offender, color: 'yellow', minute: clock.minutes });
    }

    const inBox = insidePenaltyArea(victim.x, victim.z, offender.side);
    const kind = inBox ? 'penalty' : 'freekick';
    setRestart(kind, victim.side, victim.x, victim.z, { waitForReferee: true, foulKind: detail.kind || 'contact' });
    return true;
  }

  /** Prepara uma retomada de jogo. */
  function setRestart(type, side, x, z, options = {}) {
    if (phase.name === 'fulltime' || phase.name === 'halftime') return;
    clearSlideTackles();
    shotCamera = null;
    setPieceOptions.aim = 0;
    setPieceOptions.power = 0.72;
    setPieceOptions.impactX = 0;
    setPieceOptions.impactY = 0;
    Object.assign(setPieceOptions, strikeFromImpact({ x: 0, y: 0 }));
    setPieceOptions.kind = type === 'corner' ? 'curved' : 'placed';
    phase.name = 'restart';
    phase.timer = 0;
    phase.restart = {
      type,
      side,
      x,
      z,
      taker: null,
      ready: false,
      waitForReferee: Boolean(options.waitForReferee),
      foulKind: options.foulKind || null
    };
    for (const player of allPlayers) {
      if (!player.active) continue;
      player.vx = 0;
      player.vz = 0;
      player.sprint = false;
    }
    ball.state.position.set(x, BALL.radius, z);
    ball.state.velocity.set(0, 0, 0);
    ball.state.guidance = null;
    ball.state.owner = null;
    if (!phase.restart.waitForReferee) refereeSignal(1.1);
    emit({ type: 'restart', kind: type, team: side, x, z, foulKind: phase.restart.foulKind });
  }

  /** Coloca o cobrador em posição e a bola no ponto da retomada. */
  function setupRestart(restart) {
    const side = restart.side;
    const sign = attackSign(side);
    const keepers = members(side).filter(player => player.active && player.isKeeper);
    const candidates = restart.type === 'goalkick' && keepers.length
      ? keepers
      : members(side).filter(player => player.active && (!player.isKeeper || restart.type === 'penalty'));
    let taker = null;
    let best = Infinity;
    for (const player of candidates) {
      const distance = Math.hypot(player.x - restart.x, player.z - restart.z);
      if (distance < best) {
        best = distance;
        taker = player;
      }
    }
    if (!taker) return;
    restart.taker = taker;

    let placeX = restart.x;
    let placeZ = restart.z;
    if (restart.type === 'throwin') {
      placeZ = Math.sign(restart.z || 1) * (PITCH.halfWidth - 0.6);
    } else if (restart.type === 'goalkick') {
      placeX = -sign * (PITCH.halfLength - 5.5);
      placeZ = Math.sign(restart.z || 1) * 6;
    } else if (restart.type === 'corner') {
      placeX = Math.sign(restart.x) * (PITCH.halfLength - 0.8);
      placeZ = Math.sign(restart.z || 1) * (PITCH.halfWidth - 0.8);
    } else if (restart.type === 'freekick') {
      placeX = Math.max(-PITCH.halfLength + 3, Math.min(PITCH.halfLength - 3, restart.x));
      placeZ = Math.max(-PITCH.halfWidth + 3, Math.min(PITCH.halfWidth - 3, restart.z));
    } else if (restart.type === 'penalty') {
      placeX = sign * (PITCH.halfLength - 11);
      placeZ = 0;
    }

    taker.x = placeX;
    taker.z = placeZ;
    taker.vx = 0;
    taker.vz = 0;

    // No escanteio, os atacantes se posicionam na área para o cruzamento.
    if (restart.type === 'corner') {
      const attackers = members(side)
        .filter(player => player.active && player !== taker && !player.isKeeper)
        .sort((a, b) => (sign * b.x) - (sign * a.x));
      const spots = [
        { x: sign * (PITCH.halfLength - 9), z: 0 },
        { x: sign * (PITCH.halfLength - 13), z: 5.5 },
        { x: sign * (PITCH.halfLength - 13), z: -5.5 },
        { x: sign * (PITCH.halfLength - 18), z: 2 }
      ];
      attackers.slice(0, spots.length).forEach((player, index) => {
        player.x = spots[index].x;
        player.z = spots[index].z;
        player.vx = 0;
        player.vz = 0;
      });
    } else if (restart.type === 'freekick') {
      // Três defensores montam uma barreira a 9,15 m entre a bola e o gol.
      const goalDistance = Math.abs(sign * PITCH.halfLength - placeX);
      const wallDistance = Math.min(9.15, Math.max(2.2, goalDistance - 1.8));
      const wallX = placeX + sign * wallDistance;
      const defenders = members(opponentOf(side))
        .filter(player => player.active && !player.isKeeper)
        .sort((a, b) => Math.hypot(a.x - wallX, a.z - placeZ) - Math.hypot(b.x - wallX, b.z - placeZ));
      defenders.slice(0, 3).forEach((player, index) => {
        player.x = wallX;
        player.z = Math.max(-PITCH.halfWidth + 1, Math.min(PITCH.halfWidth - 1,
          placeZ + (index - 1) * 0.82));
        player.vx = 0;
        player.vz = 0;
      });
    } else if (restart.type === 'penalty') {
      const keeper = members(opponentOf(side)).find(player => player.active && player.isKeeper);
      if (keeper) {
        keeper.x = sign * (PITCH.halfLength - 0.55);
        keeper.z = 0;
        keeper.vx = 0;
        keeper.vz = 0;
        faceTowards(keeper, placeX, placeZ, 1, 12);
      }
    }
    ball.state.position.set(placeX, BALL.radius, placeZ);
    ball.state.velocity.set(0, 0, 0);
    ball.attachTo(taker);
    ball.state.lastTouch = taker;
    ball.state.lastIntentionalTouch = taker;
    if (restart.type === 'corner') {
      const target = cornerTarget({ attackSign: sign, aim: setPieceOptions.aim });
      faceTowards(taker, target.x, target.z, 1, 12);
    } else {
      faceTowards(taker, sign * PITCH.halfLength, 0, 1, 12);
    }
    if (side === userSide) controlled[userSide] = taker;
    restart.ready = true;
  }

  function setPieceAnalysis(restart = phase.restart) {
    if (!restart?.ready || !restart.taker
      || !['freekick', 'penalty', 'corner'].includes(restart.type)) return null;
    const taker = restart.taker;
    const sign = attackSign(restart.side);
    const aim = clampSetPiece(setPieceOptions.aim, -1, 1);
    const power = clampSetPiece(setPieceOptions.power, 0.3, 1);
    const impact = strikeFromImpact({
      x: setPieceOptions.impactX ?? setPieceOptions.curve,
      y: setPieceOptions.impactY
    });
    const curve = clampSetPiece(impact.curve, -1, 1);

    if (restart.type === 'freekick') {
      const wallX = taker.x + sign * Math.min(9.15, Math.max(2.2,
        Math.abs(sign * PITCH.halfLength - taker.x) - 1.8));
      const wall = members(opponentOf(restart.side)).filter(player => player.active
        && !player.isKeeper && Math.abs(player.x - wallX) < 2.2
        && Math.abs(player.z - taker.z) < 3.4);
      return {
        ...evaluateFreeKick({
          x: taker.x,
          z: taker.z,
          attackSign: sign,
          shooting: taker.shotPower || taker.ovr || 70,
          precision: taker.shooting || taker.ovr || 70,
          aim,
          wall,
          curve,
          lift: impact.lift
        }),
        type: restart.type,
        label: 'CHANCE DE GOL',
        takerId: taker.id,
        takerName: taker.name,
        aim,
        power,
        ...impact,
        kind: setPieceOptions.kind,
        wallCount: wall.length
      };
    }

    if (restart.type === 'penalty') {
      const goalkeeper = members(opponentOf(restart.side)).find(player => player.active && player.isKeeper);
      return {
        ...evaluatePenalty({
          finishing: taker.shotPower || taker.ovr || 70,
          goalkeeper: goalkeeper?.ovr || 70,
          aim,
          attackSign: sign
        }),
        type: restart.type,
        label: 'CHANCE DE GOL',
        takerId: taker.id,
        takerName: taker.name,
        aim,
        power,
        curve,
        kind: setPieceOptions.kind,
        keeperZ: goalkeeper?.z ?? 0
      };
    }

    const target = cornerTarget({ attackSign: sign, aim });
    return {
      type: restart.type,
      label: 'PRECISÃO DO CRUZAMENTO',
      distance: Number(Math.hypot(target.x - taker.x, target.z - taker.z).toFixed(1)),
      angleDegrees: 0,
      chancePercent: Math.round(clampSetPiece(44 + (taker.ovr || 70) * 0.25 - power * 10, 15, 82)),
      precisionPercent: Math.round(clampSetPiece(62 + (taker.ovr || 70) * 0.24 - power * 12, 20, 96)),
      target,
      takerId: taker.id,
      takerName: taker.name,
      aim,
      power,
      curve,
      kind: setPieceOptions.kind
    };
  }

  function setSetPieceOptions(options = {}) {
    if (phase.name !== 'restart' || !['freekick', 'penalty', 'corner'].includes(phase.restart?.type)) return false;
    if (Number.isFinite(Number(options.aim))) setPieceOptions.aim = clampSetPiece(Number(options.aim), -1, 1);
    if (Number.isFinite(Number(options.power))) setPieceOptions.power = clampSetPiece(Number(options.power), 0.3, 1);
    let impactX = setPieceOptions.impactX;
    let impactY = setPieceOptions.impactY;
    if (Number.isFinite(Number(options.impactX))) impactX = clampSetPiece(Number(options.impactX), -1, 1);
    else if (Number.isFinite(Number(options.curve))) impactX = clampSetPiece(Number(options.curve), -1, 1);
    if (Number.isFinite(Number(options.impactY))) impactY = clampSetPiece(Number(options.impactY), -1, 1);
    else if (Number.isFinite(Number(options.lift))) impactY = impactYFromLift(Number(options.lift));
    Object.assign(setPieceOptions, strikeFromImpact({ x: impactX, y: impactY }));
    if (['placed', 'power', 'curved', 'normal'].includes(options.kind)) setPieceOptions.kind = options.kind;
    return true;
  }

  function startSetPieceShotCamera(type, side, taker = null) {
    shotCamera = { type, side, taker, timer: 0, duration: type === 'penalty' ? 2.7 : 2.25 };
  }

  function updateRestartActors(dt) {
    const restart = phase.restart;
    if (!restart?.ready || !['freekick', 'penalty', 'corner'].includes(restart.type)) return;
    const sign = attackSign(restart.side);
    const taker = restart.taker;
    if (restart.type === 'corner') {
      const target = cornerTarget({ attackSign: sign, aim: setPieceOptions.aim });
      faceTowards(taker, target.x, target.z, dt, 7);
    } else {
      faceTowards(taker, sign * PITCH.halfLength, 0, dt, 7);
    }
    if (restart.type !== 'penalty') return;

    const keeper = members(opponentOf(restart.side)).find(player => player.isKeeper && player.active);
    if (!keeper) return;
    const lineX = sign * (PITCH.halfLength - 0.55);
    const shuffle = Math.sin(elapsedWorldTime * 2.4) * 0.82;
    steerPlayer(keeper, lineX, shuffle, dt, 2.0, { arrive: 0.16, turn: 7 });
    keeper.x = lineX;
    faceTowards(keeper, taker.x, taker.z, dt, 9);
  }

  /** A IA cobra suas bolas paradas; o usuário escolhe passe ou chute direto. */
  function playRestart(dt) {
    const restart = phase.restart;
    if (!restart || !restart.taker) return;
    phase.timer += dt;
    const taker = restart.taker;
    const humanTakes = taker.side === userSide && controlled[userSide] === taker;
    if (humanTakes || phase.timer < 1.1) return;

    if (restart.type === 'penalty') {
      const sign = attackSign(taker.side);
      const aim = rng() * 1.3 - 0.65;
      const target = evaluatePenalty({
        finishing: taker.shotPower || taker.ovr || 70,
        aim,
        attackSign: sign
      }).target;
      shootBall(taker, { power: 22, target, kind: 'placed', lift: 0.09 });
      startSetPieceShotCamera('penalty', taker.side, taker);
    } else if (restart.type === 'throwin') {
      const mate = nearbyTeammateFor(taker, { min: 4, max: 14 }) || bestTeammateFor(taker);
      if (mate) kickBall(taker, mate, { power: 12 });
    } else if (restart.type === 'goalkick') {
      const mate = nearbyTeammateFor(taker, { min: 10, max: 26 }) || bestTeammateFor(taker, true) || bestTeammateFor(taker);
      if (mate) kickBall(taker, mate, { power: 16 });
      else {
        // Mesmo sem companheiro livre, o goleiro põe a bola em jogo e evita
        // que a partida fique presa numa reposição.
        ball.kick({ x: attackSign(taker.side), z: (rng() - 0.5) * 0.3 }, 17, 0.2);
        ball.state.lastShotKind = null;
        ball.state.lastTouch = taker;
        ball.state.lastIntentionalTouch = taker;
      }
    } else if (restart.type === 'corner') {
      const sign = attackSign(taker.side);
      const targetPoint = cornerTarget({ attackSign: sign, aim: rng() * 1.4 - 0.7 });
      const attackers = members(taker.side)
        .filter(player => player.active && player !== taker && !player.isKeeper)
        .sort((a, b) => Math.hypot(a.x - targetPoint.x, a.z - targetPoint.z)
          - Math.hypot(b.x - targetPoint.x, b.z - targetPoint.z));
      const mate = attackers[0] || bestTeammateFor(taker, true);
      const curve = rng() * 0.8 - 0.4;
      if (mate) kickBall(taker, mate, { lob: true, power: 17, targetPoint, curve });
      else kickBall(taker, targetPoint, { lob: true, power: 17, curve });
      startSetPieceShotCamera('corner', taker.side, taker);
    } else {
      const sign = attackSign(taker.side);
      const distanceToGoal = Math.hypot(sign * PITCH.halfLength - taker.x, taker.z);
      if (distanceToGoal < 20) {
        shootBall(taker, { power: 20, kind: 'power' });
        startSetPieceShotCamera('freekick', taker.side, taker);
      } else {
        const mate = nearbyTeammateFor(taker, { min: 6, max: 22 }) || bestTeammateFor(taker);
        if (mate) kickBall(taker, mate, { power: 14 });
      }
    }
    if (phase.restart === restart) {
      phase.name = 'play';
      phase.restart = null;
      phase.timer = 0;
    }
  }

  /** Companheiro próximo, para retomas de bola curtas. */
  function nearbyTeammateFor(player, { min = 6, max = 20 } = {}) {
    const mates = members(player.side).filter(mate => mate !== player && mate.active);
    let best = null;
    let bestScore = -Infinity;
    for (const mate of mates) {
      const distance = Math.hypot(mate.x - player.x, mate.z - player.z);
      if (distance < min || distance > max) continue;
      const score = openSpace(mate) * 2 - Math.abs(distance - (min + max) / 2);
      if (score > bestScore) {
        bestScore = score;
        best = mate;
      }
    }
    return best;
  }

  function bestTeammateFor(player, forward = false) {
    const mates = members(player.side).filter(mate => mate.active && mate !== player);
    let best = null;
    let bestScore = -Infinity;
    const sign = attackSign(player.side);
    const rivalSide = opponentOf(player.side);
    for (const mate of mates) {
      const forwardness = sign * (mate.x - player.x);
      const open = openSpace(mate);
      const distance = Math.hypot(mate.x - player.x, mate.z - player.z);
      if (distance > 45) continue;
      const lane = laneClearance(player.x, player.z, mate.x, mate.z, rivalSide);
      const offsidePenalty = isOffside(player, mate) ? 30 : 0;
      const roleBonus = ['ST', 'CF', 'CAM'].includes(mate.role) ? 1.2 : 0;
      const score = (forward ? forwardness * 1.5 : forwardness * 0.8)
        + open * 1.35 + lane * 2.4 - distance * 0.05 + roleBonus - offsidePenalty;
      if (score > bestScore) {
        bestScore = score;
        best = mate;
      }
    }
    return best;
  }

  /** Seleciona um atacante à frente e por dentro: a ENFIADA passa no chão
   *  para um corredor, nunca mira a ponta para virar cruzamento. */
  function bestThroughTarget(player) {
    const sign = attackSign(player.side);
    const rivals = opponentOf(player.side);
    let best = null;
    let bestScore = -Infinity;
    for (const mate of members(player.side)) {
      if (!mate.active || mate === player || mate.isKeeper) continue;
      const forwardness = sign * (mate.x - player.x);
      const lateral = Math.abs(mate.z - player.z);
      const distance = Math.hypot(mate.x - player.x, mate.z - player.z);
      if (forwardness < 2.2 || forwardness > 29 || lateral > 15 || distance > 34) continue;
      if (isOffside(player, mate)) continue;
      const leadX = mate.x + sign * 4.2;
      const lane = laneClearance(player.x, player.z, leadX, mate.z, rivals);
      const open = openSpace(mate);
      const roleBonus = ['ST', 'CF', 'CAM'].includes(mate.role) ? 3.2 : ['LW', 'RW'].includes(mate.role) ? 0.8 : 0;
      const score = forwardness * 0.72 + lane * 8.5 + Math.min(open, 12) * 0.38
        + roleBonus - lateral * 0.72 - distance * 0.12;
      if (score > bestScore) {
        best = mate;
        bestScore = score;
      }
    }
    if (best) return best;

    // Sem corredor perfeito disponível, não transforma ENFIADA em cruzamento:
    // procura um companheiro não impedido e conduz a bola pelo chão à frente.
    return members(player.side)
      .filter(mate => mate.active && mate !== player && !mate.isKeeper && !isOffside(player, mate))
      .sort((a, b) => {
        const score = mate => sign * (mate.x - player.x)
          - Math.abs(mate.z - player.z) * 0.35
          - Math.hypot(mate.x - player.x, mate.z - player.z) * 0.08;
        return score(b) - score(a);
      })[0] || null;
  }

  /** Saída de bola. */
  function kickoff(side) {
    clearSlideTackles();
    goalScorer = null;
    goalCameraReady = false;
    phase.name = 'kickoff';
    phase.timer = 0;
    phase.side = side;
    phase.restart = null;
    referee.x = 2.4;
    referee.z = 0.6;
    referee.vx = 0;
    referee.vz = 0;
    refereeSignal(side === 'home' ? 1.4 : 0.9);
    const sign = attackSign(side);
    const available = members(side).filter(player => player.active);
    const kicker = available.find(player => player.role === 'ST' && !player.isKeeper)
      || available.find(player => !player.isKeeper)
      || available[0];
    if (!kicker) return;
    const partners = available.filter(player => player !== kicker);
    partners.forEach(player => {
      const base = FORMATION_433[player.index] || FORMATION_433[1];
      // Os companheiros do cobrador ficam no próprio campo durante a saída.
      player.x = sign * Math.min(-1.2, base.x);
      player.z = base.z;
      player.vx = 0;
      player.vz = 0;
      player.sprint = false;
    });
    for (const player of members(opponentOf(side))) {
      if (!player.active) continue;
      const base = FORMATION_433[player.index] || FORMATION_433[1];
      // O adversário permanece no próprio campo e fora do círculo central.
      player.x = sign * Math.max(9.5, Math.abs(base.x));
      player.z = base.z;
      player.vx = 0;
      player.vz = 0;
      player.sprint = false;
    }
    kicker.x = -0.6 * sign;
    kicker.z = 0.4;
    kicker.vx = 0;
    kicker.vz = 0;
    ball.state.position.set(0, BALL.radius, 0);
    ball.state.velocity.set(0, 0, 0);
    ball.attachTo(kicker);
    ball.state.lastTouch = kicker;
    ball.state.lastIntentionalTouch = kicker;
    if (side === userSide) controlled[userSide] = kicker;
    emit({ type: 'kickoff', team: side });
  }

  /** Gol! */
  function scoreGoal(side, scorer) {
    clearSlideTackles();
    teams[side].score += 1;
    phase.name = 'goal';
    phase.timer = 0;
    phase.conceding = opponentOf(side);
    const credit = resolveGoalCredit(side, scorer || ball.state.lastTouch, ball.state.lastIntentionalTouch);
    goalScorer = credit.scorer;
    goalCelebrationStyle = GOAL_CELEBRATIONS[goalCelebrationIndex % GOAL_CELEBRATIONS.length];
    goalCelebrationIndex += 1;
    goalCameraReady = false;
    if (goalScorer?.side === userSide) controlled[userSide] = goalScorer;
    ball.state.velocity.set(0, 0, 0);
    ball.state.owner = null;
    ball.state.guidance = null;
    emit({
      type: 'goal',
      team: side,
      scorer: goalScorer,
      ownGoalBy: credit.ownGoalBy,
      celebration: goalCelebrationStyle,
      score: [teams.home.score, teams.away.score],
      minute: clock.minutes
    });
  }

  // Árbitro: uniforme preto com acentos amarelos — distinto dos dois times.
  // Ele entra em campo, acompanha a jogada de perto e apita nas paralisações
  // (retomadas, impedimentos, faltas, cartões e início/fim de jogo).
  const refereeModel = createPlayer3D({
    kit: { primary: '#161a20', secondary: '#101319', accent: '#f5c518', pattern: 'solid' },
    number: 1,
    isKeeper: false,
    simplified: options.simplifiedPlayers ?? engine.lowPower,
    skinTone: '#c98d5f',
    hairColor: '#1f1712',
    hairStyle: 'short',
    heightScale: 1.03
  });
  engine.scene.add(refereeModel.root);
  const referee = {
    x: 2.4,
    z: 0.6,
    vx: 0,
    vz: 0,
    facingAngle: Math.PI / 2,
    facing: new THREE.Vector3(1, 0, 0),
    root: refereeModel.root,
    turnLean: 0
  };
  refereeModel.root.position.set(referee.x, 0, referee.z);

  /** Ponto inteligente: aproxima-se do incidente durante a decisão; senão acompanha a bola. */
  function refereeTarget() {
    if (refereeDecision) {
      const subject = refereeDecision.offender || refereeDecision.victim;
      const side = Math.sign((refereeDecision.victim?.z ?? subject?.z ?? 0) || 1);
      const targetX = (subject?.x ?? ball.state.position.x) - 0.55;
      const targetZ = (subject?.z ?? ball.state.position.z) + side * 1.35;
      return {
        x: Math.max(-PITCH.halfLength + 1.5, Math.min(PITCH.halfLength - 1.5, targetX)),
        z: Math.max(-PITCH.halfWidth + 1.5, Math.min(PITCH.halfWidth - 1.5, targetZ))
      };
    }
    const position = ball.state.position;
    const velocity = ball.state.velocity;
    const ballSpeed = Math.hypot(velocity.x, velocity.z);
    let dirX = 0.7;
    let dirZ = 0;
    if (ballSpeed > 1.6) {
      dirX = velocity.x / ballSpeed;
      dirZ = velocity.z / ballSpeed;
    } else {
      const owner = ball.state.owner;
      if (owner) {
        dirX = attackSign(owner.side);
        dirZ = 0;
      }
    }
    // Fica atrás da linha da bola e desloca-se para o lado com mais visão.
    const flank = position.z >= 0 ? -1 : 1;
    let targetX = position.x - dirX * 3.4 - dirZ * flank * 2.4;
    let targetZ = position.z - dirZ * 3.4 + dirX * flank * 2.4;
    // Nunca em cima de um jogador: abre espaço se alguém estiver no ponto.
    for (const player of allPlayers) {
      if (!player.active) continue;
      const dx = targetX - player.x;
      const dz = targetZ - player.z;
      const distance = Math.hypot(dx, dz);
      if (distance < 1.5 && distance > 0.001) {
        const push = (1.5 - distance) / distance;
        targetX += dx * push;
        targetZ += dz * push;
      }
    }
    return {
      x: Math.max(-PITCH.halfLength + 1.5, Math.min(PITCH.halfLength - 1.5, targetX)),
      z: Math.max(-PITCH.halfWidth + 1.5, Math.min(PITCH.halfWidth - 1.5, targetZ))
    };
  }

  function updateReferee(dt) {
    if (refereeDecision) {
      const decision = refereeDecision;
      const subject = decision.offender || decision.victim;
      if (decision.stage === 'approach') {
        decision.timer += dt;
        const target = refereeTarget();
        steerPlayer(referee, target.x, target.z, dt, 5.8, { arrive: 0.45, turn: 12 });
        faceTowards(referee, subject.x, subject.z, dt, 10);
        if (Math.hypot(referee.x - target.x, referee.z - target.z) < 0.8 || decision.timer > 1.9) {
          decision.stage = 'signal';
          decision.timer = 0;
          refereeModel.signal(1.1);
        }
      } else {
        decision.timer += dt;
        referee.vx *= Math.exp(-dt * 8);
        referee.vz *= Math.exp(-dt * 8);
        faceTowards(referee, subject.x, subject.z, dt, 10);
        if (decision.card !== 'none' && !decision.cardPrepared && decision.timer > 0.2) {
          refereeModel.prepareCard?.(0.58);
          decision.cardPrepared = true;
          decision.cardPreparedAt = decision.timer;
        }
        if (decision.card !== 'none' && !decision.shown && decision.timer > 0.78) {
          refereeModel.showCard(decision.card, 1.8);
          decision.shown = true;
        }
        const decisionDuration = decision.card === 'none' ? 1.25 : 2.62;
        if (decision.timer > decisionDuration) refereeDecision = null;
      }
      refereeModel.root.position.set(referee.x, 0, referee.z);
      const speed = playerSpeed(referee);
      refereeModel.update(dt, { speed, moving: speed > 0.35, lean: referee.turnLean || 0 });
      refereeModel.lookAt(subject);
      return;
    }

    // No apito inicial e no fim ele fica junto ao círculo central.
    if (phase.name === 'kickoff' || phase.name === 'fulltime') {
      const targetX = phase.name === 'kickoff' ? 2.4 : -1.8;
      steerPlayer(referee, targetX, 0.6, dt, 4.5, { arrive: 0.3 });
      faceTowards(referee, ball.state.position.x, ball.state.position.z, dt, 8);
    } else {
      const target = refereeTarget();
      steerPlayer(referee, target.x, target.z, dt, 7.3, { arrive: 0.9, turn: 11 });
      if (!faceVelocity(referee, dt, 10)) faceTowards(referee, ball.state.position.x, ball.state.position.z, dt, 9);
    }
    refereeModel.root.position.set(referee.x, 0, referee.z);
    const speed = playerSpeed(referee);
    refereeModel.update(dt, { speed, moving: speed > 0.35, lean: referee.turnLean || 0 });
    refereeModel.lookAt(ball.state.position);
  }

  /** Apito visível do árbitro (braço para cima) nas paralisações. */
  function refereeSignal(duration = 1.15) {
    refereeModel.signal(duration);
  }

  /** Finalização manual: só é chamada por um toque/tecla de chute. */
  function shootUser(player, opts = {}, direct = false) {
    const strength = Math.max(0, Math.min(1, opts.strength ?? 0.45));
    const shotKind = opts.kind || (opts.placed ? 'placed' : 'normal');
    const stick = Math.abs(input.moveZ) > 0.25 ? Math.sign(input.moveZ) : 0;
    const sign = attackSign(player.side);

    if (direct) {
      const aim = clampSetPiece(Number(opts.aim) || 0, -1, 1);
      const targetZ = aim * (GOAL.width / 2 - 0.42);
      const distanceToGoal = Math.abs(sign * PITCH.halfLength - player.x);
      const kind = shotKind === 'placed' || shotKind === 'power' || shotKind === 'curved'
        ? shotKind
        : 'direct';
      const basePower = opts.restartType === 'penalty'
        ? 18.5
        : 22 + Math.min(6, distanceToGoal * 0.1);
      const power = basePower + strength * (kind === 'power' ? 15 : kind === 'curved' ? 8 : 10);
      const selectedCurve = Number.isFinite(Number(opts.curve))
        ? Number(opts.curve)
        : stick ? -stick : Math.sign(aim || 1) * 0.45;
      const curve = opts.restartType === 'freekick'
        ? clampSetPiece(Number.isFinite(Number(opts.curve)) ? Number(opts.curve) : 0, -1, 1)
        : kind === 'curved' ? clampSetPiece(selectedCurve, -1, 1) : 0;
      const target = { x: sign * PITCH.halfLength, z: targetZ };
      const requestedLift = Number.isFinite(Number(opts.lift)) ? Number(opts.lift) : 0.15;
      const freeKickLift = clampSetPiece(requestedLift, 0.075, 0.225);
      shootBall(player, {
        power,
        spread: kind === 'placed' ? 0.004 : kind === 'power' ? 0.018 : 0.012,
        target,
        kind,
        lift: opts.restartType === 'freekick'
          ? freeKickLift
          : kind === 'placed' ? 0.075 : kind === 'curved' ? 0.18 : kind === 'power' ? 0.11 : 0.13,
        curve
      });
      return true;
    }

    if (shotKind === 'placed' || opts.placed) {
      const sidePick = stick !== 0 ? -stick : rng() < 0.5 ? -1 : 1;
      const target = { x: sign * PITCH.halfLength, z: sidePick * (GOAL.width / 2 - 0.75) };
      shootBall(player, { power: 20.5 + strength * 2, spread: 0.008, target, kind: 'placed', lift: 0.085 });
    } else if (shotKind === 'curved') {
      const lateral = stick !== 0 ? -stick * 2.4 : (rng() < 0.5 ? -1 : 1) * 1.2;
      shootBall(player, {
        power: 18 + strength * 12,
        spread: 0.012,
        target: { x: sign * PITCH.halfLength, z: lateral },
        kind: 'curved',
        lift: 0.28 + strength * 0.18,
        curve: Number.isFinite(Number(opts.curve))
          ? clampSetPiece(Number(opts.curve), -1, 1)
          : stick ? -stick : (rng() < 0.5 ? -1 : 1)
      });
    } else if (shotKind === 'power') {
      const lateral = stick !== 0 ? -stick * 2.1 : (rng() - 0.5) * 1.4;
      shootBall(player, {
        power: 31 + strength * 7,
        spread: 0.012 + strength * 0.014,
        target: { x: sign * PITCH.halfLength, z: lateral },
        kind: 'power',
        lift: 0.14
      });
    } else {
      const lateral = stick !== 0 ? -stick * 3.1 : (rng() - 0.5) * 2.4;
      const power = 15 + strength * 16.5;
      const spread = 0.03 + strength * 0.055;
      shootBall(player, { power, spread, target: { x: sign * PITCH.halfLength, z: lateral }, kind: strength > 0.62 ? 'power' : 'normal' });
    }
    return true;
  }

  function finishHumanRestart(restart) {
    if (phase.restart !== restart) return;
    phase.name = 'play';
    phase.restart = null;
    phase.timer = 0;
  }

  function performHumanRestart(name, opts, restart) {
    const taker = restart?.taker;
    if (!restart?.ready || restart.side !== userSide || !taker || controlled[userSide] !== taker) return false;
    let acted = false;
    if (name === 'shoot') {
      const hasSetPieceTechnique = ['freekick', 'penalty', 'corner'].includes(restart.type);
      const gestureKind = opts.kind && opts.kind !== 'normal'
        ? opts.kind
        : hasSetPieceTechnique ? setPieceOptions.kind : 'direct';
      const shotOptions = {
        ...setPieceOptions,
        ...opts,
        kind: gestureKind,
        aim: setPieceOptions.aim,
        curve: setPieceOptions.curve,
        strength: Math.max(setPieceOptions.power, Number(opts.strength) || 0),
        restartType: restart.type
      };
      acted = shootUser(taker, shotOptions, true);
      if (acted) startSetPieceShotCamera(restart.type, taker.side, taker);
    } else if (name === 'pass') {
      const mate = nearbyTeammateFor(taker, { min: 1.2, max: 13 }) || bestTeammateFor(taker);
      if (mate) {
        kickBall(taker, mate, { power: restart.type === 'goalkick' ? 15 : 12 });
        acted = true;
      }
    } else if (name === 'lob') {
      if (restart.type === 'corner') {
        const targetPoint = cornerTarget({ attackSign: attackSign(taker.side), aim: setPieceOptions.aim });
        const attackers = members(taker.side)
          .filter(player => player.active && player !== taker && !player.isKeeper)
          .sort((a, b) => Math.hypot(a.x - targetPoint.x, a.z - targetPoint.z)
            - Math.hypot(b.x - targetPoint.x, b.z - targetPoint.z));
        const mate = attackers[0] || bestThroughTarget(taker) || bestTeammateFor(taker, true);
        const lift = setPieceOptions.kind === 'placed' ? 0.3 : setPieceOptions.kind === 'power' ? 0.36 : 0.46;
        if (mate) kickBall(taker, mate, {
          lob: true,
          power: 12 + setPieceOptions.power * 10,
          targetPoint,
          curve: setPieceOptions.curve,
          lift
        });
        else kickBall(taker, targetPoint, {
          lob: true,
          power: 12 + setPieceOptions.power * 10,
          curve: setPieceOptions.curve,
          lift
        });
        startSetPieceShotCamera(restart.type, taker.side);
        acted = true;
      } else {
        const mate = nearbyTeammateFor(taker, { min: 5, max: 28 })
          || bestThroughTarget(taker)
          || bestTeammateFor(taker, true);
        if (mate) {
          kickBall(taker, mate, { lob: true, power: 12 + setPieceOptions.power * 8 });
          acted = true;
        }
      }
    }
    if (acted) finishHumanRestart(restart);
    return acted;
  }

  function performHumanKickoff(name, opts, player) {
    if (phase.side !== userSide || ball.state.owner !== player) return false;
    let acted = false;
    if (name === 'shoot') {
      acted = shootUser(player, opts, false);
    } else if (name === 'pass') {
      const mate = nearbyTeammateFor(player, { min: 1.2, max: 18 }) || bestTeammateFor(player, true);
      if (mate) {
        kickBall(player, mate, { power: 14 });
        acted = true;
      }
    } else if (name === 'lob') {
      const mate = bestThroughTarget(player) || bestTeammateFor(player, true);
      if (mate) {
        kickBall(player, mate, { through: true, power: 20 });
        acted = true;
      }
    }
    if (acted && phase.name === 'kickoff') {
      phase.name = 'play';
      phase.timer = 0;
    }
    return acted;
  }

  // ------------------------------------------------------------------ mundo --

  const world = {
    ball,
    teams,
    clock,
    phase,
    input,
    rng,
    members,
    opponentOf,
    openSpace,
    attackSign,
    userSide,
    trainingMode: training.enabled,
    get trainingDrill() {
      return training.drill;
    },
    get trainingStats() {
      return { ...training.stats };
    },
    get cameraMode() {
      return cameraMode;
    },
    prepareTraining,
    /** Entrada de movimento explícita; a IA não decide ações do atleta humano. */
    hasInput() {
      return Math.hypot(input.moveX, input.moveZ) > 0.12;
    },
    kickBall,
    shootBall,
    diveKeeper: (keeper, dir, flightId) => diveKeeper(keeper, dir, flightId),
    tackle,
    slideTackle: startSlideTackle,
    isUserControlled,

    /** Nenhum passe/chute é gerado sem um comando explícito do usuário. */
    command(name, opts = {}) {
      if (paused) return false;
      const player = controlled[userSide];
      if (!player?.active) return false;

      if (phase.name === 'restart') return performHumanRestart(name, opts, phase.restart);
      if (phase.name === 'kickoff') return performHumanKickoff(name, opts, player);
      if (phase.name !== 'play') return false;

      const owner = ball.state.owner;
      if (name === 'pass') {
        if (owner !== player) return false;
        const mate = bestTeammateFor(player);
        if (!mate) return false;
        kickBall(player, mate, { power: 19 });
        return true;
      }
      if (name === 'shoot') {
        if (owner !== player) return false;
        return shootUser(player, opts, false);
      }
      if (name === 'lob') {
        if (owner !== player) return false;
        const mate = bestThroughTarget(player);
        if (!mate) return false;
        kickBall(player, mate, { through: true, power: 23 });
        return true;
      }
      if (name === 'tackle') return startSlideTackle(player);
      if (name === 'dribble') {
        if (owner !== player) return false;
        player.burst = Math.max(player.burst ?? 0, 0.75);
        return true;
      }
      if (name === 'switch') {
        world.switchPlayer();
        return true;
      }
      return false;
    },

    /** Troca o jogador controlado para o mais próximo da bola. */
    switchPlayer() {
      const list = members(userSide).filter(player => player.active && player !== controlled[userSide]);
      let best = null;
      let bestDistance = Infinity;
      const position = ball.state.position;
      for (const player of list) {
        const distance = Math.hypot(player.x - position.x, player.z - position.z);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = player;
        }
      }
      if (best) {
        controlled[userSide] = best;
        if (training.enabled && training.drill === 'team') training.player = best;
      }
    },

    /** Ajusta a mira, força e técnica da bola parada sob controle humano. */
    setPieceOptions(options) {
      return setSetPieceOptions(options);
    },

    /** Entrada cinematográfica do túnel até o alinhamento (usada no pré-jogo). */
    startEntrance(options) {
      return startEntrance(options);
    },
    get entranceActive() {
      return Boolean(entrance);
    },
    get entrancePlayed() {
      return entrancePlayed;
    },
    get entranceProgress() {
      return entrance ? Math.min(1, entrance.time / entrance.duration) : 0;
    },

    /** Alterna entre a câmera de transmissão e a cinematográfica. */
    setCameraMode(mode) {
      cameraMode = mode;
      if (mode === 'play') cameraReady = false;
      if (mode === 'pro') trainingCameraReady = false;
    },

    /** Congela a câmera num ponto (capturas de tela e testes). */
    setManualCamera(position, target) {
      manualCamera = { position, target };
      cameraMode = 'manual';
    },

    /** A bola está em jogo? (regras só valem no jogo correndo) */
    isPlayable() {
      return phase.name === 'play';
    },

    /** Avança a simulação um passo (usado pelos testes e pelo modo turbo). */
    tick(dt) {
      update(dt);
    },
    /** Pausa a simulação (intervalo, pausa do jogador) sem parar o desenho. */
    setPaused(value) {
      paused = Boolean(value);
    },
    isPaused() {
      return paused;
    },

    /** Estado para a interface (placar, relógio, fase). */
    snapshot() {
      return {
        score: [teams.home.score, teams.away.score],
        minutes: clock.minutes,
        display: formatClock(),
          half: clock.half,
        phase: phase.name,
        kickoffSide: phase.name === 'kickoff' ? phase.side : null,
        restart: phase.restart ? {
          type: phase.restart.type,
          side: phase.restart.side,
          ready: phase.restart.ready,
          takerId: phase.restart.taker?.id || null,
          takerName: phase.restart.taker?.name || null,
          x: phase.restart.x,
          z: phase.restart.z,
          analysis: setPieceAnalysis(phase.restart)
        } : null,
        discipline: {
          home: {
            yellow: teams.home.players.reduce((total, player) => total + (player.yellowCards || 0), 0),
            red: teams.home.players.filter(player => player.redCard).length
          },
          away: {
            yellow: teams.away.players.reduce((total, player) => total + (player.yellowCards || 0), 0),
            red: teams.away.players.filter(player => player.redCard).length
          }
        },
        scorer: phase.name === 'goal' && goalScorer ? {
          id: goalScorer.id,
          name: goalScorer.name,
          number: goalScorer.number,
          ovr: goalScorer.ovr,
          side: goalScorer.side
        } : null,
        poss: (() => {
          const total = possession.home + possession.away;
          return total > 1
            ? [Math.round((possession.home / total) * 100), Math.round((possession.away / total) * 100)]
            : [50, 50];
        })(),
        stats: snapshotStats()
      };
    }
  };

  const ais = {
    home: createTeamAI({ side: 'home', world }),
    away: createTeamAI({ side: 'away', world })
  };

  function formatClock() {
    const limit = clock.half === 1 ? 45 + clock.added : 90 + clock.added;
    const value = Math.min(limit, clock.minutes);
    const minutes = Math.floor(value);
    const seconds = Math.floor((value % 1) * 60);
    return `${minutes}'${String(seconds).padStart(2, '0')}`;
  }

  // Marcador azul de seleção no estilo EA Sports FC Mobile: anel luminoso sob
  // o atleta controlado + seta flutuante sobre a cabeça. O portador da bola
  // ganha um anel dourado. Trocar de jogador dispara um pulso de destaque.
  const markerRing = new THREE.Mesh(
    new THREE.RingGeometry(0.38, 0.55, 30),
    new THREE.MeshBasicMaterial({ color: 0x19c8ff, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false })
  );
  markerRing.rotation.x = -Math.PI / 2;
  markerRing.position.y = 0.035;
  const markerDisc = new THREE.Mesh(
    new THREE.CircleGeometry(0.38, 26),
    new THREE.MeshBasicMaterial({ color: 0x19c8ff, transparent: true, opacity: 0.22, depthWrite: false })
  );
  markerDisc.rotation.x = -Math.PI / 2;
  markerDisc.position.y = 0.032;

  // Seta (cone) apontando para baixo, flutuando sobre o controlado.
  const markerChevron = new THREE.Mesh(
    new THREE.ConeGeometry(0.17, 0.38, 4),
    new THREE.MeshBasicMaterial({ color: 0x2ad4ff, transparent: true, opacity: 0.96, depthWrite: false })
  );
  markerChevron.rotation.x = Math.PI;

  // Anel dourado: quem está com a posse da bola.
  const carrierRing = new THREE.Mesh(
    new THREE.RingGeometry(0.52, 0.66, 28),
    new THREE.MeshBasicMaterial({ color: 0xffd24a, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false })
  );
  carrierRing.rotation.x = -Math.PI / 2;
  carrierRing.position.y = 0.028;

  // Previsão de cobrança: uma linha fixa de baixo custo e um marcador
  // brilhante no alvo. Só ficam visíveis enquanto o usuário prepara a bola.
  const previewSegmentCount = 24;
  const previewGeometry = new THREE.BufferGeometry();
  previewGeometry.setAttribute('position', new THREE.BufferAttribute(
    new Float32Array((previewSegmentCount + 1) * 3), 3));
  const previewTrajectory = new THREE.Line(previewGeometry, new THREE.LineBasicMaterial({
    color: 0xffdf65,
    transparent: true,
    opacity: 0.86,
    depthWrite: false
  }));
  previewTrajectory.frustumCulled = false;
  const previewTarget = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.84, 28),
    new THREE.MeshBasicMaterial({
      color: 0xffdf65,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthWrite: false
    }));
  previewTarget.rotation.x = -Math.PI / 2;
  previewTarget.position.y = 0.055;
  previewTrajectory.visible = previewTarget.visible = false;

  markerRing.visible = markerDisc.visible = markerChevron.visible = carrierRing.visible = false;
  engine.scene.add(markerRing, markerDisc, markerChevron, carrierRing, previewTrajectory, previewTarget);
  let markerPulse = 0;
  let markerTime = 0;
  let lastControlledId = null;
  let switchFlash = 0;

  function updateMarker(dt) {
    markerTime += dt;
    const player = controlled[userSide];
    if (!player || !player.active) {
      markerRing.visible = markerDisc.visible = markerChevron.visible = false;
    } else {
      // Troca de jogador: pulso rápido de destaque.
      if (player.id !== lastControlledId) {
        switchFlash = 0.85;
        lastControlledId = player.id;
      }
      switchFlash = Math.max(0, switchFlash - dt);
      markerPulse += dt * 5.2;
      const pulse = 1 + Math.sin(markerPulse) * 0.07 + switchFlash * 0.65;
      markerRing.scale.setScalar(pulse);
      markerDisc.scale.setScalar(pulse);
      markerRing.material.opacity = 0.75 + switchFlash * 0.25;
      markerRing.position.set(player.x, 0.035, player.z);
      markerDisc.position.set(player.x, 0.032, player.z);
      // Seta flutuante com balanço suave.
      markerChevron.position.set(player.x, 2.62 + Math.sin(markerTime * 2.7) * 0.1 + switchFlash * 0.35, player.z);
      markerChevron.rotation.y = markerTime * 1.5;
      markerChevron.scale.setScalar(1 + switchFlash * 0.6);
      markerRing.visible = markerDisc.visible = markerChevron.visible = true;
    }
    // O anel dourado segue o dono da bola (de qualquer time).
    const owner = ball.state.owner;
    if (owner && owner.active) {
      carrierRing.position.set(owner.x, 0.028, owner.z);
      carrierRing.material.opacity = 0.72 + Math.sin(markerTime * 6) * 0.18;
      carrierRing.visible = true;
    } else {
      carrierRing.visible = false;
    }
  }

  function updateSetPiecePreview() {
    const restart = phase.restart;
    const analysis = setPieceAnalysis(restart);
    const visible = Boolean(analysis && restart.side === userSide && restart.ready);
    previewTrajectory.visible = previewTarget.visible = visible;
    if (!visible) return;

    const taker = restart.taker;
    const sign = attackSign(restart.side);
    const target = analysis.target;
    const distance = Math.hypot(target.x - ball.state.position.x, target.z - ball.state.position.z);
    const kind = analysis.kind;
    const strength = analysis.power;
    const basePower = restart.type === 'corner'
      ? 12 + strength * 10
      : restart.type === 'penalty'
        ? 18.5 + strength * 10
        : 22 + Math.min(6, distance * 0.1) + strength * (kind === 'power' ? 15 : 9);
    const shootingRating = taker.shotPower || taker.shooting || taker.ovr || 70;
    const speed = basePower * (0.78 + shootingRating * 0.0045);
    const lift = restart.type === 'corner'
      ? kind === 'placed' ? 0.3 : kind === 'power' ? 0.36 : 0.46
      : restart.type === 'freekick'
        ? analysis.lift
        : kind === 'placed' ? 0.075 : kind === 'curved' ? 0.18 : kind === 'power' ? 0.11 : 0.13;
    const curve = restart.type === 'corner'
      ? (analysis.curve || Math.sign(analysis.aim || 1) * 0.24)
      : restart.type === 'freekick'
        ? analysis.curve
        : kind === 'curved' ? (analysis.curve || Math.sign(analysis.aim || 1) * 0.45) : 0;
    const path = predictTrajectory({
      start: { x: ball.state.position.x, y: BALL.radius, z: ball.state.position.z },
      target,
      speed,
      lift,
      curve,
      segments: previewSegmentCount
    });
    const attribute = previewGeometry.getAttribute('position');
    for (let index = 0; index <= previewSegmentCount; index += 1) {
      const point = path[Math.min(index, path.length - 1)] || ball.state.position;
      attribute.setXYZ(index, point.x, point.y + 0.06, point.z);
    }
    attribute.needsUpdate = true;
    previewGeometry.setDrawRange(0, previewSegmentCount + 1);
    previewGeometry.computeBoundingSphere();
    previewTarget.position.set(target.x - sign * 0.14, 0.055, target.z);
    previewTarget.material.color.set(kind === 'power' ? 0xff9f43 : kind === 'curved' ? 0x74e7ff : 0xffdf65);
    previewTrajectory.material.color.copy(previewTarget.material.color);
  }

  function updateGoalCelebration(dt) {
    if (!goalScorer?.active) return;
    const sign = attackSign(goalScorer.side);
    if (['knee-slide', 'fist-pump'].includes(goalCelebrationStyle) && phase.timer > 0.62) {
      goalScorer.sprint = false;
      goalScorer.vx *= Math.exp(-dt * 7);
      goalScorer.vz *= Math.exp(-dt * 7);
      faceTowards(goalScorer, goalScorer.x + sign, goalScorer.z, dt, 8);
      return;
    }
    const drift = Math.sign(goalScorer.z || 1);
    const targetX = Math.max(-PITCH.halfLength + 3, Math.min(PITCH.halfLength - 3, goalScorer.x - sign * 2.8));
    const targetZ = Math.max(-PITCH.halfWidth + 4, Math.min(PITCH.halfWidth - 4, goalScorer.z + drift * 4.2));
    goalScorer.sprint = true;
    steerPlayer(goalScorer, targetX, targetZ, dt, 6.8, { arrive: 0.35, turn: 11 });
    if (!faceVelocity(goalScorer, dt, 10)) faceTowards(goalScorer, targetX, targetZ, dt, 8);
    for (const player of allPlayers) {
      if (player === goalScorer) continue;
      player.vx *= Math.max(0, 1 - dt * 5);
      player.vz *= Math.max(0, 1 - dt * 5);
    }
  }

  /** Enquadramento baixo e próximo do autor do gol, correndo para comemorar. */
  function updateGoalCamera(dt) {
    if (!goalScorer?.active) {
      updateCamera(dt);
      return;
    }
    const sign = attackSign(goalScorer.side);
    const side = Math.sign(goalScorer.z || 1);
    const desiredX = goalScorer.x - sign * 6.2;
    const desiredY = 5.2;
    const desiredZ = goalScorer.z + side * 8.6;
    const targetX = goalScorer.x + sign * 1.2;
    const targetZ = goalScorer.z + side * 0.8;
    const camera = engine.camera;
    const smoothing = Math.min(1, dt * 4.2);
    if (!goalCameraReady) {
      goalCameraReady = true;
      camera.fov = 49;
      camera.updateProjectionMatrix();
    }
    camera.position.x += (desiredX - camera.position.x) * smoothing;
    camera.position.y += (desiredY - camera.position.y) * smoothing;
    camera.position.z += (desiredZ - camera.position.z) * smoothing;
    cameraTarget.x += (targetX - cameraTarget.x) * smoothing;
    cameraTarget.z += (targetZ - cameraTarget.z) * smoothing;
    camera.lookAt(cameraTarget.x, 1.25, cameraTarget.z);
  }

  // ------------------------------------------------------------ centro treino --

  /** Prepara um exercício com participantes e posições próprias do fundamento. */
  function prepareTraining() {
    if (!training.enabled) return null;
    const player = teams.home.players.find(item => item.role === 'ST' && !item.isKeeper)
      || teams.home.players.find(item => !item.isKeeper);
    const keeper = teams.away.players.find(item => item.isKeeper);
    if (!player || !keeper) return null;

    const drill = training.drill;
    const scenarios = [
      { distance: 22, z: -2.8 },
      { distance: 25, z: 8.5 },
      { distance: 28, z: -10.5 },
      { distance: 31, z: 3.8 }
    ];
    const scenario = drill === 'freekick'
      ? scenarios[training.attemptIndex % scenarios.length]
      : null;
    if (scenario) training.attemptIndex += 1;

    training.player = player;
    training.keeper = keeper;
    training.wallPlayers = drill === 'freekick'
      ? teams.away.players.filter(item => !item.isKeeper).slice(0, 4)
      : [];
    training.shotActive = false;
    training.shotElapsed = 0;
    training.passChain = 0;
    training.lastPassFrom = null;

    const practicePlayers = drill === 'team'
      ? teams.home.players.filter(item => !item.isKeeper)
      : [player];
    const activePlayers = new Set([keeper, ...practicePlayers, ...training.wallPlayers]);
    for (const item of allPlayers) {
      item.active = activePlayers.has(item);
      item.root.visible = item.active;
      item.vx = 0;
      item.vz = 0;
      item.sprint = false;
      item.burst = 0;
      item.turnLean = 0;
      item.slideTackle = null;
    }

    const face = (item, direction) => {
      item.facingAngle = direction > 0 ? Math.PI / 2 : -Math.PI / 2;
      item.facing.set(direction, 0, 0);
      item.root.rotation.y = item.facingAngle;
    };
    const place = (item, x, z, direction = 1) => {
      item.x = x;
      item.z = z;
      item.vx = 0;
      item.vz = 0;
      face(item, direction);
      item.root.position.set(x, 0, z);
    };

    if (drill === 'freekick') {
      place(player, PITCH.halfLength - scenario.distance, scenario.z, 1);
      // A barreira fica a 9,15 m do ponto da falta, centrada na linha do chute.
      const wallX = PITCH.halfLength - 9.15;
      const ballX = player.x + 0.45;
      const wallFraction = Math.max(0.12, Math.min(0.72,
        (wallX - ballX) / Math.max(1, PITCH.halfLength - ballX)));
      const wallCenterZ = scenario.z * (1 - wallFraction);
      const wallOffsets = [-1.15, -0.38, 0.38, 1.15];
      training.wallPlayers.forEach((wallPlayer, index) => {
        place(wallPlayer, wallX, wallCenterZ + wallOffsets[index], -1);
      });
    } else if (drill === 'penalty') {
      // O ponto fica a 11 m da linha do gol; a bola presa ao pé fica à frente.
      place(player, PITCH.halfLength - 11.45, 0, 1);
    } else {
      // Pequeno campo de ataque em 4-3-3: os dez jogadores de linha ocupam
      // corredores separados e formam opções curtas, diagonais e em profundidade.
      for (const teammate of practicePlayers) {
        const base = FORMATION_433[teammate.index] || FORMATION_433[9];
        const x = 16 + (base.x + 48) * 0.32;
        const z = base.z * 0.75;
        place(teammate, x, z, 1);
      }
    }

    place(keeper, PITCH.halfLength - 1.2, 0, -1);
    controlled.home = player;
    controlled.away = null;
    input.moveX = 0;
    input.moveZ = 0;
    input.sprint = false;
    training.cameraForward = { x: 1, z: 0 };
    phase.name = 'play';
    phase.timer = 0;
    phase.restart = null;
    clock.minutes = 0;
    clock.half = 1;
    clock.added = 0;
    ball.reset(player.x, player.z);
    ball.attachTo(player);
    ball.state.lastTouch = player;
    ball.state.lastIntentionalTouch = player;
    ball.state.lastShotKind = null;
    refereeModel.root.visible = false;
    cameraMode = 'pro';
    cameraReady = false;
    trainingCameraReady = false;
    manualCamera = null;
    return {
      player,
      keeper,
      drill,
      wall: [...training.wallPlayers],
      teammates: practicePlayers.filter(item => item !== player),
      stats: { ...training.stats }
    };
  }

  function updateTrainingActors(dt) {
    const hero = controlled[userSide];
    for (const player of allPlayers) {
      if (!player.active) continue;
      player.root.position.set(player.x, 0, player.z);
      player.model.setDynamicShadow?.(player === hero);
      player.model.update(dt, modelMovementState(player));
      if (player === training.player || player.isKeeper || training.wallPlayers.includes(player)) {
        player.model.lookAt(ball.state.position);
      }
    }
  }

  function updateTrainingCamera(dt) {
    const player = controlled[userSide] || training.player;
    if (!player) return;
    const camera = engine.camera;
    const cameraForward = training.cameraForward || { x: 1, z: 0 };
    const facingLength = Math.hypot(cameraForward.x, cameraForward.z) || 1;
    const forwardX = cameraForward.x / facingLength;
    const forwardZ = cameraForward.z / facingLength;
    const rightX = -forwardZ;
    const rightZ = forwardX;
    const speed = playerSpeed(player);
    const cameraDistance = 9.2 + Math.min(1.2, speed * 0.1);
    const desiredX = player.x - forwardX * cameraDistance;
    const desiredY = 4.7 + Math.min(0.3, speed * 0.035);
    const desiredZ = player.z - forwardZ * cameraDistance;

    const ballDx = ball.state.position.x - player.x;
    const ballDz = ball.state.position.z - player.z;
    const ballAhead = ballDx * forwardX + ballDz * forwardZ;
    const ballLateral = ballDx * rightX + ballDz * rightZ;
    const lead = Math.max(7.5, Math.min(13, 8.8 + ballAhead * 0.2));
    const lateral = Math.max(-1.4, Math.min(1.4, ballLateral * 0.12));
    const targetX = player.x + forwardX * lead + rightX * lateral;
    const targetY = 1.2 + Math.min(0.45, Math.max(0, ball.state.position.y - 0.7) * 0.08);
    const targetZ = player.z + forwardZ * lead + rightZ * lateral;
    const targetFov = training.shotActive ? 56 : 52;

    if (!trainingCameraReady) {
      camera.position.set(desiredX, desiredY, desiredZ);
      cameraTarget.set(targetX, targetY, targetZ);
      camera.fov = targetFov;
      camera.updateProjectionMatrix();
      trainingCameraReady = true;
    } else {
      const positionBlend = 1 - Math.exp(-dt * 5.2);
      const focusBlend = 1 - Math.exp(-dt * 5.8);
      camera.position.x += (desiredX - camera.position.x) * positionBlend;
      camera.position.y += (desiredY - camera.position.y) * positionBlend;
      camera.position.z += (desiredZ - camera.position.z) * positionBlend;
      cameraTarget.x += (targetX - cameraTarget.x) * focusBlend;
      cameraTarget.y += (targetY - cameraTarget.y) * focusBlend;
      cameraTarget.z += (targetZ - cameraTarget.z) * focusBlend;
      const fovBlend = 1 - Math.exp(-dt * 3.2);
      camera.fov += (targetFov - camera.fov) * fovBlend;
      if (Math.abs(camera.fov - targetFov) > 0.02) camera.updateProjectionMatrix();
    }
    camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z);
  }

  function finishTrainingAttempt(result) {
    if (!training.shotActive) return;
    training.shotActive = false;
    phase.name = `training-${result}`;
    phase.timer = 0;
    ball.state.owner = null;
    ball.state.guidance = null;
    ball.state.velocity.set(0, 0, 0);
    ball.state.spin.set(0, 0, 0);
    const player = result === 'save' ? training.keeper : training.player;
    if (result === 'save') {
      emit({ type: 'training-save', team: 'away', player, kind: ball.state.lastShotKind });
    } else if (result === 'goal') {
      player?.model.celebrate?.(1.8, 'fist-pump');
      emit({ type: 'training-goal', team: 'home', player, kind: ball.state.lastShotKind });
    } else {
      emit({ type: 'training-miss', team: 'home', player, kind: ball.state.lastShotKind });
    }
  }

  function receiveTrainingBall(receiver) {
    const passFrom = training.lastPassFrom;
    if (training.drill === 'team' && passFrom && receiver.id !== passFrom) {
      training.stats.completedPasses += 1;
      training.passChain += 1;
      if (training.passChain >= 2) training.stats.combinations += 1;
      emit({ type: 'training-reception', team: 'home', player: receiver });
    } else if (training.drill === 'team') {
      training.passChain = 0;
    }
    training.lastPassFrom = null;
    ball.attachTo(receiver);
    ball.state.lastTouch = receiver;
    ball.state.lastIntentionalTouch = receiver;
    receiver.model.receive?.();
    if (receiver.side === userSide) {
      controlled[userSide] = receiver;
      training.player = receiver;
    }
  }

  function updateTraining(dt) {
    if (phase.name.startsWith('training-')) {
      elapsedWorldTime += dt;
      if (training.keeper) updateKeeperReach(training.keeper);
      phase.timer += dt;
      updateTrainingActors(dt);
      updateMarker(dt);
      updateTrainingCamera(dt);
      if (phase.timer > 1.55) prepareTraining();
      return;
    }

    elapsedWorldTime += dt;
    const player = controlled[userSide] || training.player;
    const keeper = training.keeper;
    if (!player || !keeper) return;
    updateKeeperReach(keeper);

    updateHuman(dt);
    if (training.drill === 'team') {
      ais.home.update(dt);
    }

    const [minX, maxX, maxZ] = training.drill === 'team'
      ? [5, PITCH.halfLength - 1.2, 31]
      : training.drill === 'penalty'
        ? [PITCH.halfLength - 17, PITCH.halfLength - 8, 4]
        : [18, PITCH.halfLength - 3.5, 28];
    player.x = Math.max(minX, Math.min(maxX, player.x));
    player.z = Math.max(-maxZ, Math.min(maxZ, player.z));
    if (Math.hypot(player.vx, player.vz) < 1.1) {
      faceTowards(player, PITCH.halfLength, player.z * 0.2, dt, 8);
    }

    const keeperGoalX = ownGoalXOf(keeper.side);
    const keeperAttackSign = attackSign(keeper.side);
    const prediction = training.shotActive
      ? predictGoalkeeperIntercept(ball.state, keeperGoalX)
      : null;
    const keeperTarget = goalkeeperPositionTarget(ball.state.position, keeperGoalX, keeperAttackSign, prediction);
    const flightId = ball.state.flightId ?? 0;
    const diveDirection = training.shotActive
      ? goalkeeperDiveDirection(keeper, prediction, flightId)
      : 0;
    if (diveDirection) diveKeeper(keeper, diveDirection, flightId);
    const keeperSpeed = prediction?.onTarget ? 7.2 : 5.8;
    steerPlayer(keeper, keeperTarget.x, keeperTarget.z, dt, keeperSpeed, { arrive: 0.24, turn: 9 });
    if (!faceVelocity(keeper, dt, 10)) faceTowards(keeper, ball.state.position.x, ball.state.position.z, dt, 9);
    keeper.root.position.set(keeper.x, 0, keeper.z);

    const actors = allPlayers.filter(item => item.active);
    ball.update(dt, actors);
    const position = ball.state.position;
    if (training.drill === 'team' && !training.shotActive && !ball.state.owner
      && position.y < 1.8 && Math.hypot(ball.state.velocity.x, ball.state.velocity.z) < 12) {
      const receiver = teams.home.players
        .filter(item => item.active)
        .map(item => ({ player: item, distance: Math.hypot(item.x - position.x, item.z - position.z) }))
        .filter(item => item.distance < 1.18)
        .sort((a, b) => a.distance - b.distance)[0]?.player;
      if (receiver) receiveTrainingBall(receiver);
    }

    if (training.shotActive) {
      training.shotElapsed += dt;
      if (position.x >= PITCH.halfLength) {
        const insideGoal = Math.abs(position.z) < GOAL.width / 2 && position.y < GOAL.height;
        if (insideGoal && keeperSaves(keeper, position)) {
          diveKeeper(keeper, Math.sign(position.z - keeper.z) || 1);
          finishTrainingAttempt('save');
        } else if (insideGoal) {
          finishTrainingAttempt('goal');
        } else if (position.x > PITCH.halfLength + 1.2) {
          finishTrainingAttempt('miss');
        }
      }
      if (training.shotActive && (Math.abs(position.z) > PITCH.halfWidth + 1
        || position.y > GOAL.height + 8 || training.shotElapsed > 3.8)) {
        finishTrainingAttempt('miss');
      }
    }

    updateTrainingActors(dt);
    updateMarker(dt);
    updateTrainingCamera(dt);
  }

  // ---------------------------------------------------------------- entrada --

  // A boca do túnel fica na linha lateral: os jogadores surgem de trás do
  // painel de publicidade já sobre o gramado, visíveis para a câmera.
  const ENTRANCE_GATE = { x: 0, z: -(PITCH.halfWidth - 0.4) };

  /** Posição de cada jogador no trajeto túnel → posição tática. */
  function entrancePose(player, progress) {
    const base = player.entranceBase || { x: player.x, z: player.z };
    const spreadX = (player.order - 5) * 1.05;
    const laneX = base.x * 0.45 + spreadX * 0.35;
    const start = { x: spreadX * 0.4, z: ENTRANCE_GATE.z };
    const middle = { x: laneX, z: -(PITCH.halfWidth + 1.4) };
    const inverse = 1 - progress;
    return {
      x: inverse * inverse * start.x + 2 * inverse * progress * middle.x + progress * progress * base.x,
      z: inverse * inverse * start.z + 2 * inverse * progress * middle.z + progress * progress * base.z
    };
  }

  function startEntrance({ duration = 4 } = {}) {
    if (entrance) return false;
    if (phase.name !== 'kickoff') return false;
    entrance = { time: 0, duration, side: phase.side, startedAt: globalThis.performance?.now?.() ?? Date.now() };
    for (const player of allPlayers) {
      player.entranceBase = { x: player.x, z: player.z };
    }
    phase.name = 'entrance';
    phase.timer = 0;
    paused = false;
    emit({ type: 'entrance-start' });
    return true;
  }

  function finishEntrance() {
    const side = entrance?.side || 'home';
    for (const player of allPlayers) {
      if (player.entranceBase) {
        player.x = player.entranceBase.x;
        player.z = player.entranceBase.z;
        player.entranceBase = null;
      }
      player.vx = 0;
      player.vz = 0;
      player.root.position.set(player.x, 0, player.z);
    }
    entrance = null;
    entrancePlayed = true;
    phase.name = 'kickoff';
    phase.side = side;
    phase.timer = 0;
    cameraMode = 'play';
    cameraReady = false;
    emit({ type: 'entrance-end', side });
  }

  function updateEntrance(dt) {
    // O relógio da entrada usa o tempo real: em aparelhos lentos a caminhada
    // não pode durar o dobro por causa do passo limitado da física.
    const now = globalThis.performance?.now?.() ?? Date.now();
    entrance.time = Math.max(entrance.time + dt, (now - entrance.startedAt) / 1000);
    const total = Math.min(1, entrance.time / entrance.duration);
    const stagger = 0.3;
    for (const player of allPlayers) {
      const gate = (player.order / 10) * stagger;
      const local = Math.max(0, Math.min(1, (total - gate) / (1 - stagger)));
      const eased = local * local * (3 - 2 * local);
      const pose = entrancePose(player, eased);
      const previousX = player.x;
      const previousZ = player.z;
      player.x = pose.x;
      player.z = pose.z;
      const dx = player.x - previousX;
      const dz = player.z - previousZ;
      if (Math.hypot(dx, dz) > 0.0005) {
        player.facingAngle = Math.atan2(dx, dz);
        player.facing.set(Math.sin(player.facingAngle), 0, Math.cos(player.facingAngle));
      }
      player.root.position.set(player.x, 0, player.z);
      player.root.rotation.y = player.facingAngle;
      player.model.update(dt, { moving: local > 0.02 && local < 0.98, speed: 1.7, ownsBall: false });
    }
    updateEntranceCamera(total);
    if (total >= 1) finishEntrance();
  }

  function updateEntranceCamera(progress) {
    const camera = engine.camera;
    const ease = progress * progress * (3 - 2 * progress);
    // A câmera acompanha o grupo que sai do túnel: desloca-se com o centro
    // do time, mantendo o enquadramento de transmissão até o alinhamento.
    const group = members(entrance.side).filter(player => player.active);
    const count = group.length || 1;
    const centerX = group.reduce((total, player) => total + player.x, 0) / count;
    const centerZ = group.reduce((total, player) => total + player.z, 0) / count;
    const positionX = centerX + 7 + 4 * ease;
    const positionY = 4.6 + 4.4 * ease;
    const positionZ = Math.min(centerZ + 10, -8);
    camera.position.set(positionX, positionY, positionZ);
    camera.lookAt(centerX - 1.2, 1.5 + 0.8 * ease, centerZ + 1.2);
  }

  // ----------------------------------------------------------------- update --

  function update(dt) {
    // Com o jogo pausado (intervalo, menu de pausa) nada anda no campo.
    if (paused) return;
    if (training.enabled) {
      updateTraining(dt);
      return;
    }
    elapsedWorldTime += dt;
    if (entrance) {
      // Um teste ou outro sistema que troque a fase à força cancela a entrada.
      if (phase.name !== 'entrance') {
        entrance = null;
      } else {
        updateEntrance(dt);
        return;
      }
    }
    for (const player of allPlayers) {
      if (player.isKeeper) updateKeeperReach(player);
    }
    // Relógio.
    if (phase.name === 'play') {
      // O relógio corre em minutos de jogo: o fator é por minuto real.
      clock.minutes += (dt / 60) * clock.timeScale;
      if (clock.half === 1 && clock.minutes >= 45 + clock.added) {
        clock.added = 2;
        phase.name = 'halftime';
        phase.timer = 0;
        refereeSignal(1.6);
        emit({ type: 'halftime', score: [teams.home.score, teams.away.score], stats: snapshotStats() });
      } else if (clock.half === 2 && clock.minutes >= 90 + clock.added) {
        clock.added = 4;
        phase.name = 'fulltime';
        phase.timer = 0;
        refereeSignal(1.8);
        emit({
          type: 'fulltime',
          score: [teams.home.score, teams.away.score],
          stats: snapshotStats()
        });
      }
    } else if (phase.name === 'halftime') {
      phase.timer += dt;
      if (phase.timer > 3.5) {
        clock.half = 2;
        clock.minutes = 45;
        clock.added = 0;
        kickoff('away');
      }
    } else if (phase.name === 'fulltime') {
      phase.timer += dt;
    }

    if (phase.name !== 'play') clearSlideTackles();

    // Fases. A saída do time humano é aguardada; as retomadas humanas também
    // ficam sob controle do jogador até PASSE ou CHUTE serem pressionados.
    if (phase.name === 'kickoff') {
      phase.timer += dt;
      if (phase.side !== userSide && phase.timer > 1.15) {
        const kicker = ball.state.owner;
        const mate = kicker && (nearbyTeammateFor(kicker, { min: 7, max: 18 })
          || bestTeammateFor(kicker, true)
          || bestTeammateFor(kicker));
        if (kicker && mate) kickBall(kicker, mate, { power: 14 });
        else if (kicker) ball.state.owner = null;
        if (phase.name === 'kickoff') {
          phase.name = 'play';
          phase.timer = 0;
        }
      }
    } else if (phase.name === 'restart') {
      updateRestartActors(dt);
      if (!phase.restart?.ready) {
        phase.timer += dt;
        if (!phase.restart?.waitForReferee || !refereeDecision) {
          setupRestart(phase.restart);
          phase.timer = 0;
        }
      } else {
        playRestart(dt);
      }
    } else if (phase.name === 'goal') {
      phase.timer += dt;
      if (phase.timer > 3.2) kickoff(phase.conceding);
    }

    if (phase.name === 'goal') {
      updateGoalCelebration(dt);
    } else if (phase.name === 'play') {
      updateSlideTackles(dt);
      if (phase.name === 'play') updateHuman(dt);
      if (phase.name === 'play') {
        ais.home.update(dt);
        ais.away.update(dt);
      }

      // Colisão entre jogadores, com arbitragem de cargas pelo corpo perto da bola.
      for (let index = 0; index < allPlayers.length && phase.name === 'play'; index += 1) {
        const a = allPlayers[index];
        if (!a.active) continue;
        for (let other = index + 1; other < allPlayers.length && phase.name === 'play'; other += 1) {
          const b = allPlayers[other];
          if (!b.active) continue;
          const dx = b.x - a.x;
          const dz = b.z - a.z;
          const distance = Math.hypot(dx, dz);
          if (distance > 0.001 && distance < 0.78 && detectIllegalBodyContact(a, b, distance)) break;
          if (distance > 0.001 && distance < 0.66) {
            const overlap = (0.66 - distance) * 0.5;
            const nx = dx / distance;
            const nz = dz / distance;
            a.x -= nx * overlap;
            a.z -= nz * overlap;
            b.x += nx * overlap;
            b.z += nz * overlap;
          }
        }
      }

      // Só a fase em jogo atualiza física, domínio e limites do campo.
      if (phase.name === 'play') {
        ball.update(dt, allPlayers);
        handlePossession();
        handleBoundaries();
      }
    }

    updateConfrontation(dt);

    // Posse para o resumo.
    const owner = ball.state.owner;
    if (owner) possession[owner.side] += dt;

    // Sincroniza os modelos 3D e mantém o expulso visível enquanto sai do campo.
    updateDismissals(dt);
    const hero = controlled[userSide];
    for (const player of allPlayers) {
      player.root.position.set(player.x, 0, player.z);
      player.root.visible = player.active || Boolean(player.dismissal);
      // Sombra dinâmica só no protagonista: o resto usa a sombra de contato,
      // o que mantém um único personagem pagando o custo do shadow map.
      player.model.setDynamicShadow?.(player === hero);
      player.model.update(dt, modelMovementState(player));
      player.model.lookAt(ball.state.position);
    }

    // Árbitro acompanha a jogada, mas sai do quadro da comemoração.
    if (phase.name !== 'goal') updateReferee(dt);

    // Marcador azul acompanha o atleta controlado; bola parada ganha prévia.
    updateMarker(dt);
    updateSetPiecePreview();

    if (phase.name === 'goal') updateGoalCamera(dt);
    else if (refereeDecision) updateRefereeCamera(dt);
    else if (phase.name === 'restart' && phase.restart?.ready
      && ['freekick', 'penalty', 'corner'].includes(phase.restart.type)) updateSetPieceCamera(dt);
    else if (shotCamera) updateSetPieceShotCamera(dt);
    else if (cameraMode === 'cinematic') updateCinematicCamera(dt);
    else if (cameraMode === 'manual' && manualCamera) {
      engine.camera.position.set(...manualCamera.position);
      engine.camera.lookAt(...manualCamera.target);
    } else updateCamera(dt);
  }

  /** Câmera cinematográfica: uma volta sobre o estádio. */
  function updateCinematicCamera(dt) {
    cinematicAngle += dt * 0.16;
    // Volta por cima do gramado, sem atravessar arquibancada nem telhado.
    const radius = 29;
    const camera = engine.camera;
    camera.position.set(
      Math.cos(cinematicAngle) * radius,
      22 + Math.sin(cinematicAngle * 0.7) * 3,
      Math.sin(cinematicAngle) * radius * 0.75
    );
    camera.lookAt(0, 0, 0);
  }

  /** Colisões rápidas com o portador são arbitradas como carga/empurrão. */
  function detectIllegalBodyContact(a, b, distance) {
    if (phase.name !== 'play' || a.side === b.side || distance > 0.78) return false;
    const owner = ball.state.owner;
    const offender = owner === a ? b : owner === b ? a : null;
    if (!owner || !offender || offender.slideTackle) return false;
    const speed = playerSpeed(offender);
    if (speed < 7.55) return false;
    const dx = owner.x - offender.x;
    const dz = owner.z - offender.z;
    const closing = ((offender.vx - owner.vx) * dx + (offender.vz - owner.vz) * dz) / Math.max(0.1, distance);
    if (closing < 4.8) return false;
    const behind = (owner.facing?.x || 0) * -dx + (owner.facing?.z || 0) * -dz < -0.15;
    if (!behind && speed < 8.1) return false;
    const dangerous = Math.abs(owner.x) > PITCH.halfLength - 25;
    const severity = Math.min(1, speed / 9 + (behind ? 0.18 : 0));
    return commitFoul(offender, owner, {
      kind: behind ? 'charge-from-behind' : 'charge',
      behind,
      dangerous: dangerous || behind,
      severity,
      directRed: behind && dangerous && speed >= 8.25
    });
  }

  /** O jogador expulso deixa o campo caminhando enquanto sai da lógica da partida. */
  function updateDismissals(dt) {
    for (const player of allPlayers) {
      const dismissal = player.dismissal;
      if (!dismissal) continue;
      dismissal.timer += dt;
      if (dismissal.timer >= dismissal.duration) {
        player.dismissal = null;
        player.vx = 0;
        player.vz = 0;
        continue;
      }
      steerPlayer(player, player.x, dismissal.exitZ, dt, 4.2, { arrive: 0.2, turn: 8 });
      if (!faceVelocity(player, dt, 8)) faceTowards(player, player.x, dismissal.exitZ, dt, 8);
    }
  }

  /** O jogador controlado responde ao analógico sem acelerações bruscas. */
  function updateHuman(dt) {
    const player = controlled[userSide];
    if (!player?.active || player.slideTackle) return;
    const bursting = (player.burst ?? 0) > 0;
    if (bursting) player.burst = Math.max(0, player.burst - dt);
    const speed = (input.sprint || bursting) ? HUMAN_SPRINT * (bursting ? 1.12 : 1) : HUMAN_SPEED;
    const magnitude = Math.hypot(input.moveX, input.moveZ);
    if (magnitude > 0.12) {
      const movement = training.enabled
        ? cameraRelativeMovementFromStick(
          input.moveX,
          input.moveZ,
          training.cameraForward?.x ?? 1,
          training.cameraForward?.z ?? 0
        )
        : worldMovementFromStick(input.moveX, input.moveZ);
      const targetX = player.x + movement.x * 6;
      const targetZ = player.z + movement.z * 6;
      steerPlayer(player, targetX, targetZ, dt, speed * Math.min(1, magnitude), { arrive: 0.2, turn: 10 });
    } else {
      const damping = Math.exp(-dt * 8.5);
      player.vx *= damping;
      player.vz *= damping;
      player.x += player.vx * dt;
      player.z += player.vz * dt;
      clampToPitch(player, 1.2);
      if (Math.hypot(player.vx, player.vz) < 0.035) player.vx = player.vz = 0;
    }
    player.sprint = Boolean(input.sprint && magnitude > 0.12);
    if (!faceVelocity(player, dt, 11)) faceTowards(player, ball.state.position.x, ball.state.position.z, dt, 10);
  }

  /** Quem está perto da bola assume o domínio. */
  function handlePossession() {
    if (ball.state.owner) {
      if (!ball.state.owner.active) ball.state.owner = null;
      return;
    }
    const position = ball.state.position;
    if (position.y > 2.1) return;
    // Uma bola rápida não é "dominada": ela voa até parar ou até o gol.
    const speed = Math.hypot(ball.state.velocity.x, ball.state.velocity.z);
    if (speed > 8) return;

    const human = controlled[userSide];
    const candidates = [];
    if (human?.active) candidates.push(human);
    for (const player of allPlayers) {
      if (!player.active || player === human) continue;
      candidates.push(player);
    }

    let best = null;
    let bestDistance = 1.0;
    for (const player of candidates) {
      const distance = Math.hypot(player.x - position.x, player.z - position.z);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = player;
      }
    }
    if (best) {
      // Passe certo: o recebedor domina a bola do próprio time.
      const last = ball.state.lastTouch;
      if (last && last !== best && last.side === best.side) stats[best.side].passesOn += 1;
      ball.attachTo(best);
      ball.state.lastTouch = best;
      ball.state.lastIntentionalTouch = best;
      best.model.receive?.();
      if (best.side === userSide) controlled[userSide] = best;
    }
  }

  /** Fora de campo: gol, escanteio, tiro de meta e lateral. */
  function handleBoundaries() {
    if (phase.name !== 'play') return;
    const position = ball.state.position;

    const touch = lastTouch();
    const touchSide = touch ? touch.side : 'home';

    // Linha de fundo.
    if (Math.abs(position.x) > PITCH.halfLength) {
      const side = Math.sign(position.x); // +1: gol do visitante (quem defende em +X).
      const scoringSide = side > 0 ? 'home' : 'away';
      const insideGoal = Math.abs(position.z) < GOAL.width / 2 && position.y < GOAL.height;
      if (insideGoal) {
        // O goleiro ainda pode defender: quanto mais perto do chute, mais
        // chance de chegar na bola.
        const keeper = members(opponentOf(scoringSide)).find(player => player.isKeeper && player.active);
        if (keeper && keeperSaves(keeper, position)) {
          diveKeeper(keeper, Math.sign(position.z - keeper.z) || (position.z >= 0 ? 1 : -1));
          ball.state.position.x = side * (PITCH.halfLength - 0.5);
          ball.state.velocity.set(-side * 5.5, 4.8, Math.sign(position.z || 1) * 6.5);
          ball.state.owner = null;
          ball.state.lastTouch = keeper;
          emit({ type: 'save', team: keeper.side, player: keeper, minute: clock.minutes, kind: ball.state.lastShotKind || 'normal' });
        } else {
          scoreGoal(scoringSide, touch);
        }
        return;
      }
      // Se a bola saiu sem toque do goleiro/defensor, cobra o time que
      // defende esse gol; toque defensivo por último dá escanteio ao ataque.
      if (touchSide === opponentOf(scoringSide)) {
        setRestart('corner', scoringSide, side * PITCH.halfLength, Math.sign(position.z || 1) * PITCH.halfWidth);
      } else {
        setRestart('goalkick', opponentOf(scoringSide), side * PITCH.halfLength, position.z);
      }
      return;
    }

    // Lateral (a bola pode cruzar o chão de qualquer altura baixa).
    if (Math.abs(position.z) > PITCH.halfWidth && position.y < 3) {
      setRestart('throwin', opponentOf(touchSide), position.x, Math.sign(position.z) * PITCH.halfWidth);
    }
  }

  /** Mergulho do goleiro: animação e alcance físico associados a um voo. */
  function diveKeeper(keeper, dir = 1, flightId = ball.state.flightId ?? 0) {
    if (!keeper?.model) return false;
    const now = state_time();
    if (Number.isFinite(keeper.diveCooldown) && now - keeper.diveCooldown < 0.75) return false;
    const direction = dir >= 0 ? 1 : -1;
    keeper.diveCooldown = now;
    keeper.gkDiveAt = now;
    keeper.gkDiveUntil = now + 0.95;
    keeper.gkDiveDirection = direction;
    keeper.gkDiveStartZ = keeper.z;
    keeper.gkDiveFlightId = flightId;
    keeper.reach = 1.32;
    keeper.reachHeight = GOAL.height + 0.2;
    keeper.model.dive?.(direction);
    return true;
  }

  function updateKeeperReach(keeper) {
    const diving = Number.isFinite(keeper.gkDiveUntil) && elapsedWorldTime < keeper.gkDiveUntil;
    keeper.reach = diving ? 1.32 : 0.95;
    keeper.reachHeight = diving ? GOAL.height + 0.2 : 1.8;
  }

  // Relógio simples para recargas de animação (segundos de partida).
  let elapsedWorldTime = 0;
  function state_time() {
    return elapsedWorldTime;
  }

  /** O goleiro alcança a bola? Considera atributo, colocação e mergulho a tempo. */
  function keeperSaves(keeper, position) {
    const chance = goalkeeperSaveChance({
      keeper,
      position,
      flightId: ball.state.flightId ?? 0,
      now: elapsedWorldTime,
      kind: ball.state.lastShotKind || 'normal'
    });
    return chance > 0 && rng() < chance;
  }

  function blendCameraPose(dt, position, target, fov, rate = 4.4) {
    const camera = engine.camera;
    const blend = 1 - Math.exp(-rate * dt);
    camera.position.x += (position.x - camera.position.x) * blend;
    camera.position.y += (position.y - camera.position.y) * blend;
    camera.position.z += (position.z - camera.position.z) * blend;
    cameraTarget.x += (target.x - cameraTarget.x) * blend;
    cameraTarget.y += (target.y - cameraTarget.y) * blend;
    cameraTarget.z += (target.z - cameraTarget.z) * blend;
    camera.fov += (fov - camera.fov) * Math.min(1, dt * 3.1);
    camera.updateProjectionMatrix();
    camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z);
  }

  /** Câmera curta que acompanha o árbitro e o jogador antes da decisão. */
  function updateRefereeCamera(dt) {
    const decision = refereeDecision;
    const subject = decision?.offender || decision?.victim;
    if (!subject) return updateCamera(dt);
    const centerX = (referee.x + subject.x) * 0.5;
    const centerZ = (referee.z + subject.z) * 0.5;
    const side = Math.sign(referee.z - subject.z) || cameraSide;
    blendCameraPose(dt,
      { x: centerX - 3.2, y: 4.9, z: centerZ + side * 8.8 },
      { x: centerX, y: 1.05, z: centerZ },
      50,
      4.8
    );
  }

  /** Câmera próxima para falta, pênalti e escanteio antes da batida. */
  function updateSetPieceCamera(dt) {
    const restart = phase.restart;
    if (!restart?.ready || !restart.taker) return updateCamera(dt);
    const taker = restart.taker;
    const sign = attackSign(restart.side);
    const side = Math.sign(taker.z) || cameraSide;
    const analysis = setPieceAnalysis(restart);
    let position;
    let target;
    let fov;

    if (restart.type === 'penalty') {
      // Eixo central atrás do batedor: batedor, goleiro e gol ficam alinhados.
      position = { x: taker.x - sign * 8.2, y: 3.05, z: taker.z };
      target = { x: sign * (PITCH.halfLength - 1.1), y: 1.08, z: 0 };
      fov = 43;
    } else if (restart.type === 'corner') {
      const aim = analysis?.target || cornerTarget({ attackSign: sign, aim: setPieceOptions.aim });
      const pose = cornerCameraPose(taker, sign, aim);
      position = pose.position;
      target = pose.target;
      fov = pose.fov;
    } else {
      // Ângulo lateral moderado mostra a barreira e mantém o cobrador no quadro.
      position = { x: taker.x - sign * 7.6, y: 4.55, z: taker.z + side * 5.6 };
      target = { x: sign * (PITCH.halfLength - 2.4), y: 1.55, z: (analysis?.target.z || 0) * 0.34 };
      fov = 49;
    }
    blendCameraPose(dt, position, target, fov, restart.type === 'penalty' ? 4.8 : 4.1);
  }

  /** Câmera segue a bola na primeira fase do chute/cruzamento da bola parada. */
  function updateSetPieceShotCamera(dt) {
    if (!shotCamera || phase.name !== 'play') {
      shotCamera = null;
      return updateCamera(dt);
    }
    shotCamera.timer += dt;
    if (shotCamera.timer > shotCamera.duration) {
      shotCamera = null;
      return updateCamera(dt);
    }
    const position = ball.state.position;
    const velocity = ball.state.velocity;
    const speed = Math.hypot(velocity.x, velocity.z);
    const dirX = speed > 0.2 ? velocity.x / speed : attackSign(shotCamera.side);
    const dirZ = speed > 0.2 ? velocity.z / speed : 0;
    const flank = Math.sign(position.z) || cameraSide;
    if (shotCamera.type === 'penalty' && shotCamera.taker) {
      const sign = attackSign(shotCamera.side);
      blendCameraPose(dt,
        { x: shotCamera.taker.x - sign * 8.2, y: 3.05, z: shotCamera.taker.z },
        {
          x: position.x + dirX * 2.6,
          y: Math.max(0.95, position.y * 0.55),
          z: position.z + dirZ * 2.6
        },
        43,
        5.2
      );
      return;
    }
    blendCameraPose(dt,
      {
        x: position.x - dirX * 7.2 - dirZ * 1.8,
        y: Math.max(3.4, position.y + 3.4),
        z: position.z - dirZ * 6.4 + flank * 2.2
      },
      {
        x: position.x + dirX * 3.6,
        y: Math.max(0.7, position.y * 0.5),
        z: position.z + dirZ * 3.6
      },
      50,
      6.2
    );
  }

  /**
   * Câmera de transmissão aérea inclinada, no estilo EA Sports FC Mobile, com
   * zoom dinâmico: quando a jogada se aproxima da lateral inferior da tela
   * (a mais próxima da câmera), a câmera recua, sobe e abre a objetiva para
   * enquadrar a bola, os jogadores e todo o gramado — nunca deixa a partida
   * sair pela parte de baixo do quadro. Nos extremos do comprimento, leve
   * recuo para abarcar mais campo.
   */
  function updateCamera(dt) {
    const position = ball.state.position;
    const pose = broadcastCameraPose(position, cameraSide);
    const desiredX = pose.position.x;
    const desiredY = pose.position.y;
    const desiredZ = pose.position.z;
    const desiredFov = pose.fov;
    const camera = engine.camera;

    if (!cameraReady) {
      camera.position.set(desiredX, desiredY, desiredZ);
      cameraTarget.set(pose.target.x, pose.target.y, pose.target.z);
      camera.fov = desiredFov;
      camera.updateProjectionMatrix();
      cameraReady = true;
    }

    // A posição e o referencial não atravessam o campo; o enquadramento segue
    // a bola com amortecimento e zoom gradual, sem inverter cima/baixo no stick.
    const smoothing = 1 - Math.pow(0.0016, dt);
    camera.position.x += (desiredX - camera.position.x) * smoothing;
    camera.position.y += (desiredY - camera.position.y) * smoothing;
    camera.position.z += (desiredZ - camera.position.z) * smoothing;
    if (Math.abs(camera.fov - desiredFov) > 0.05) {
      camera.fov += (desiredFov - camera.fov) * Math.min(1, 3.2 * dt);
      camera.updateProjectionMatrix();
    }

    cameraTarget.x += (pose.target.x - cameraTarget.x) * smoothing;
    cameraTarget.y += (pose.target.y - cameraTarget.y) * smoothing;
    cameraTarget.z += (pose.target.z - cameraTarget.z) * smoothing;
    camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z);
  }

  function snapshotStats() {
    const total = possession.home + possession.away;
    return {
      home: { ...stats.home, possession: total ? Math.round((possession.home / total) * 100) : 50 },
      away: { ...stats.away, possession: total ? Math.round((possession.away / total) * 100) : 50 }
    };
  }

  // API de animação para o LLM: aprende/experimenta no protagonista em tempo
  // real (`window.__xfcAnim`). Os controles do jogador não passam por aqui.
  if (typeof window !== 'undefined') {
    installAnimationApi(window, () => controlled[userSide]?.model || null);
  }

  return {
    engine,
    world,
    teams,
    ball,
    clock,
    phase,
    start() {
      kickoff('home');
      engine.start(update);
    },
    stop() {
      engine.stop();
    },
    dispose() {
      world.dispose?.();
      engine.scene.remove(refereeModel.root);
      refereeModel.dispose?.();
      engine.scene.remove(markerRing, markerDisc, markerChevron, carrierRing, previewTrajectory, previewTarget);
      previewGeometry.dispose();
      previewTrajectory.material.dispose();
      previewTarget.geometry.dispose();
      previewTarget.material.dispose();
      markerRing.geometry.dispose();
      markerRing.material.dispose();
      markerDisc.geometry.dispose();
      markerDisc.material.dispose();
      markerChevron.geometry.dispose();
      markerChevron.material.dispose();
      carrierRing.geometry.dispose();
      carrierRing.material.dispose();
      engine.stop();
      for (const player of allPlayers) player.model.dispose();
      ball.dispose();
      stadiumMesh.dispose();
      engine.dispose();
    },
    get controlled() {
      return controlled;
    }
  };
}
