import {offsidePosition,offsideExempt} from './offside.js';
import {evaluatePassRequest} from './pass-request.js';
import {portraitFor} from '../data/asset-library.js';
import {selectShadowCasters} from './quality.js';
import {directionalPassTarget} from './directional-pass.js';
// O mundo da partida: monta o estádio, os dois times, a bola e o relógio;
// roda as regras (falta, cartão, escanteio, lateral, impedimento, pênalti,
// tiro de meta, intervalo, acréscimos e fim de jogo) e comanda a câmera.
//
// O módulo é agnóstico da interface: avisa o que aconteceu por `onEvent` e
// recebe os comandos do jogador por `world.command`.

import { penaltyTarget, choosePenaltyLane, rainbowProfile, rainbowPoint } from './football-actions.js';
import { createEngine, THREE } from './engine.js';
import { buildStadium } from './stadium.js';
import { createBall } from './ball.js';
import { resolveGoalCredit } from './scoring.js';
import { appearanceFor } from '../data/appearance.js';
import { createPlayer3D } from './player.js';
import {
  PREMATCH_TOTAL,
  TUNNEL,
  WALKOUT,
  lineupSlot,
  pathLength,
  prematchBeatAt,
  prematchCameraPose,
  refereeLineupSlot,
  refereeTunnelSlot,
  samplePath,
  smoothstep,
  tunnelSlot,
  walkoutPath
} from './prematch.js';
import { cheer } from '../audio.js';
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

  const engine = createEngine(canvas,{graphicsQuality:options.graphicsQuality});
  const stadiumMesh = buildStadium(engine.scene, {
    stadium,
    warmupTeams:[{team:home,kit:homeKit},{team:away,kit:awayKit}],
    lowPower: engine.lowPower,
    graphics:engine.graphics,
    timeOfDay: options.timeOfDay
  });
  const ball = createBall(engine.scene, { lowPower: engine.lowPower, onNetImpact: event => stadiumMesh.hitNet(event) });
  const aimGeometry=new THREE.BufferGeometry();
  aimGeometry.setAttribute('position',new THREE.Float32BufferAttribute([0,0,-.5, 2.8,0,0, 0,0,.5],3));
  const penaltyArrow=new THREE.Mesh(aimGeometry,new THREE.MeshBasicMaterial({color:0xc6ffb3,transparent:true,opacity:.4,side:THREE.DoubleSide,depthWrite:false}));
  penaltyArrow.name='xfc-penalty-aim';penaltyArrow.visible=false;engine.scene.add(penaltyArrow);
  const penaltyAim={x:0,y:0};
  function rememberPenaltyAim(){
    if(Math.hypot(input.moveX,input.moveZ)>.16){
      penaltyAim.x=input.moveX;penaltyAim.y=input.moveZ;
      if(!training.enabled)setPieceOptions.aim=penaltyAim.x;
    }
    return penaltyAim;
  }
  function updatePenaltyAim(){
    const ready=training.enabled?training.drill==='penalty'&&!training.shotActive&&phase.name==='play':phase.name==='restart'&&phase.restart?.type==='penalty'&&phase.restart.ready;
    penaltyArrow.visible=ready;if(!ready)return;
    const player=training.enabled?training.player:phase.restart.taker;
    rememberPenaltyAim();
    const target=penaltyTarget(training.enabled?penaltyAim.x:setPieceOptions.aim,penaltyAim.y,attackSign(player.side));
    penaltyArrow.position.set(ball.state.position.x,.025,ball.state.position.z);
    penaltyArrow.rotation.y=-Math.atan2(target.z-ball.state.position.z,target.x-ball.state.position.x);
    penaltyArrow.userData.target=target;
  }


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
  const trainingCones = [];
  if(training.enabled && training.drill==='dribble'){
    const geometry=new THREE.ConeGeometry(.24,.55,10),material=new THREE.MeshLambertMaterial({color:0xff7b19});
    for(let i=0;i<6;i++){
      const cone=new THREE.Mesh(geometry,material);cone.name=`xfc-training-cone-${i}`;cone.position.set(19+i*4,.275,i%2?2:-2);engine.scene.add(cone);trainingCones.push(cone);
    }
  }
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

  const input = { moveX: 0, moveZ: 0, sprint: false, shotCharge:0 };
  const controlled = { home: null, away: null };
  let penaltyRunup=null;
  let refereeDecision = null;
  const cameraTarget = new THREE.Vector3(0, 0, 0);
  let cameraReady = false;
  // 'play' (transmissão) ou 'cinematic' (volta sobre o estádio).
  let cameraMode = 'cinematic';
  let cameraZoom=1;
  // Espectador (herói expulso e o usuário escolheu assistir): câmera de
  // transmissão seguindo a bola, sem travar no atleta inativo.
  let spectator = false;
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
  // Câmera Pro da carreira: eixo suavizado que VIra para a bola (atrás/lados).
  // Também orienta o analógico para continuar coerente com a imagem.
  let careerCameraForward = null;
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
  function selectControlled(player,side=userSide){
    const locked=side===userSide&&options.playerLockId?teams[side].players.find(p=>p.rosterId===options.playerLockId):null;
    // Herói expulso não fica preso como "controlado": cai para o substituto,
    // permitindo câmera/IA de espectador seguras depois do cartão vermelho.
    controlled[side]=(locked&&locked.active!==false)?locked:player;
  }
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
      strideScale:1,
      lean: player.turnLean || 0,
      ownsBall,
      shotCharge:ownsBall&&isUserControlled(player)?input.shotCharge:0,
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
      pattern: kit?.pattern || 'solid',
      libraryFront:kit?.libraryFront,libraryBack:kit?.libraryBack,
      shorts: kit?.shorts || colors.primary,
      socks: kit?.socks || colors.primary,
      print: kit?.print || colors.trim || '#ffffff'
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

  function validatedPlan(point){
    if(!Number.isFinite(point?.x)||!Number.isFinite(point?.z))return {};
    return {x:Math.max(-48,Math.min(43,point.x)),z:Math.max(-29,Math.min(29,point.z))};
  }
  function buildTeam(team) {
    const lineup = team.info?.players || [];
    assignSlots(lineup).forEach(({ data, index, slot, slotIndex }) => {
      const role = team.info?.savedPlan ? data.pos : slot.role;
      const isKeeper = role === 'GK';
      const look = appearanceFor(data);
      const model = makePlayerModel({
        kit: kitFor(team, team.kit, isKeeper),
        appearanceSource: look.source,
        number: data.number || index + 1,
        name: data.name || data.fullName || `Jogador ${index + 1}`,
        teamName: team.info?.shortName || team.info?.name || 'XFC',
        crest: team.info?.crest || null,
        sponsor: team.kit?.sponsor ?? team.info?.sponsor ?? '',
        brand: team.kit?.brand || '',
        preferredFoot: data.foot || 'Right',
        isKeeper,
        graphics:engine.graphics,
        simplified: options.simplifiedPlayers ?? engine.lowPower,
        skinTone: look.skinTone,
        hairColor: look.hairColor,
        hairStyle: look.hairStyle,
        bootColor: look.bootColor,
        heightScale: look.heightScale,
        ...look,
        // O retrato pode enriquecer o rosto 3D; corpo e uniforme continuam em 3D.
        photo: portraitFor(data) || null
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
        rosterId:data.id||String(index),
        captain:Boolean(data.captain),
        instruction:data.instruction||'support',
        tacticalCustom:Number.isFinite(options.gamePlans?.[team.side]?.[data.id||String(index)]?.x)&&Number.isFinite(options.gamePlans?.[team.side]?.[data.id||String(index)]?.z),
        tacticalBase:{...base,...validatedPlan(options.gamePlans?.[team.side]?.[data.id||String(index)])},
        role,
        isKeeper,
        isGK: isKeeper,
        ovr: data.ovr || data.rating || null,
        pace: data.stats?.pace??70,
        dribbling: data.stats?.dribbling ?? data.dribbling ?? data.ovr ?? 70,
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
  if(options.playerLockId)selectControlled(null);
  else selectControlled(members(userSide).find(p=>!p.isKeeper)||members(userSide)[0]);

  // ------------------------------------------------------------------ ações --

  /** Passe guiado entre companheiros, com bola à frente e checagem de impedimento. */
  // Converte o analógico para uma direção de CAMPO usando o mesmo referencial
  // do movimento (Pro/Treino = relativo à câmera; transmissão = eixo fixo).
  function stickWorldDirection() {
    const pro = training.enabled || cameraMode === 'pro';
    return pro
      ? cameraRelativeMovementFromStick(
        input.moveX, input.moveZ,
        training.enabled ? (training.cameraForward?.x ?? 1) : (careerCameraForward?.x ?? attackSign(userSide)),
        training.enabled ? (training.cameraForward?.z ?? 0) : (careerCameraForward?.z ?? 0)
      )
      : worldMovementFromStick(input.moveX, input.moveZ);
  }

  // O passe obedece ao analógico: se houver companheiro na direção apontada
  // (inclusive para o lado ou para trás), a bola vai para ele. Sem direção
  // clara, mantém a escolha automática anterior como garantia.
  function humanPassTarget(player, fallback) {
    return directionalPassTarget(player, members(player.side), stickWorldDirection()) || fallback();
  }

  function kickBall(player, target, { power = 18, lob = false, through = false, targetPoint = null, curve = 0, lift = null, requested = false } = {}) {
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
    const exempt=offsideExempt(phase.name==='kickoff'?'kickoff':phase.restart?.type);
    const offsidePlayers=exempt?[]:members(player.side).filter(p=>p!==player&&isOffside(player,p)).map(p=>p.id);
    const speed = requested ? Math.max(7,Math.min(38,8+Math.sqrt(distance*5.5))) : through
      ? Math.max(11, Math.min(22, distance * 0.62 + 7))
      : lob
        ? Math.max(10, Math.min(20, distance * 0.7 + 5))
        : Math.max(7, Math.min(19, distance * 0.62 + 4 + power * 0.08));
    const guide = target.active
      ? { receiver: target, x: aimX, z: aimZ, through, follow:!through&&!targetPoint, maxTime:requested?12:2.4 }
      : null;
    // Enfiada é rasteira e firme; só os cruzamentos/escanteios usam a bola alta.
    const flightLift = lift ?? (requested ? .025 : lob ? 0.42 : through ? 0.055 : 0.11);
    ball.kick(direction, speed, flightLift, {
      guide,
      curve: clampSetPiece(curve, -1, 1)
    });
    ball.state.offside=offsidePlayers.length?{side:player.side,players:offsidePlayers}:null;
    ball.state.lastShotKind = null;
    ball.state.lastTouch = player;
    ball.state.lastIntentionalTouch = player;
    if(target.active&&target!==player)ball.state.lastPass={from:player,to:target,at:elapsedWorldTime};
    if (training.enabled && training.drill === 'team' && player.side === userSide) {
      training.lastPassFrom = player.id;
    }
    player.model.kick(lob ? 'cross' : through ? 'through' : 'pass');
    emit({ type: 'pass', team: player.side, player, target, through });
  }

  function isOffside(passer,target){
    return offsidePosition(target,ball.state.position,members(opponentOf(passer.side)),attackSign(passer.side));
  }
  function receiveBall(player,from,wasPass,offside){
    if(offside?.side===player.side&&offside.players.includes(player.id)){
      player.offsideFlagUntil=elapsedWorldTime+2;
      emit({type:'offside',team:opponentOf(player.side),player,minute:clock.minutes});
      setRestart('freekick',opponentOf(player.side),player.x,player.z,{foulKind:'offside'});
      return;
    }
    const goodPass=wasPass&&from&&from!==player&&from.side===player.side;
    if(goodPass){
      stats[player.side].passesOn++;
      // Último passe certo da posse: candidato a assistência se esta posse
      // terminar em gol de outro atleta do mesmo time.
      ball.state.assistProvider=from;
      emit({type:'pass-completed',team:player.side,from,to:player});
    }else ball.state.assistProvider=null;
    player.model.receive?.();
    if(player.side===userSide)selectControlled(player);
  }

  /**
   * Finalização. Três tipos, como nos jogos de futebol:
   *  - normal (toque): colocado no canto do gol quando o analógico aponta;
   *  - forte (segurar e carregar): mais veloz, mais difícil de defender;
   *  - colocado (arrastar para baixo no botão): carburação mínima, mira exata
   *    no ângulo — o clássico chute colocado.
   */
  function armSetPieceRebound() {
    // Bola parada de falta/pênalti: ninguém domina a bola por um instante;
    // barreira e goleiro só rebatem e depois o jogo volta ao normal.
    ball.state.noAttachment = 2.6;
  }

  /** Projeta a trajetória do chute até a linha do gol para dizer se é no alvo. */
  function shotIsOnTarget(sign) {
    const p=ball.state.position,v=ball.state.velocity;
    const goalX=sign*PITCH.halfLength;
    if(Math.abs(v.x)<0.5)return false;
    const t=(goalX-p.x)/v.x;
    if(!(t>0&&t<3.2))return false;
    const z=p.z+v.z*t;
    const y=p.y+v.y*t-4.905*t*t;
    return Math.abs(z)<GOAL.width/2+0.55 && y>-0.35 && y<GOAL.height+0.55;
  }

  function shootBall(player, { power = 22, spread = 0, target = null, kind = 'normal', lift = null, curve = 0 } = {}) {
    const contactHeight=ball.state.position.y;
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
    ball.state.offside={side:player.side,players:members(player.side).filter(p=>p!==player&&isOffside(player,p)).map(p=>p.id)};
    ball.state.lastShotKind = kind;
    if (training.enabled && player.side === userSide) {
      training.player = player;
      training.passChain = 0;
      training.shotActive = true;
      training.shotElapsed = 0;
    }
    if(contactHeight>1.5)player.model.header();else player.model.kick(contactHeight>.7?'volley':kind);
    // "Chute perigoso": trajetória que entraria no gol (no alvo). Usado pela
    // nota da carreira. Estimativa pela velocidade
    // já aplicada em ball.kick, projetada até a linha do gol.
    const dangerous = shotIsOnTarget(sign);
    emit({ type: 'shot', team: player.side, player, kind, dangerous });
    if(!training.enabled && (phase.restart?.type==='freekick'||phase.restart?.type==='penalty'))armSetPieceRebound();
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
    // Falta só em entrada realmente temerária. Antes bastava o desarme
    // falhar perto do gol ou por trás para marcar falta a cada aproximação.
    const reckless = behind && dangerous && playerSpeed(player) > 7.0;
    if (reckless && rng() < 0.42) {
      commitFoul(player, owner, {
        kind: 'challenge',
        behind,
        dangerous,
        severity: 0.62,
        // Nem toda entrada por trás é vermelho: a maioria é amarelo.
        forceYellow: false
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
              if (player.side === userSide) selectControlled(player);
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
              if (player.side === userSide) selectControlled(player);
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
    } else if (detail.forceYellow || severity >= 0.86
      || (behind && dangerous) || rng() < 0.30) {
      // Antes: QUALQUER falta por trás ou perto do gol virava cartão (e duas
      // delas, vermelho). Agora o cartão depende da gravidade da entrada,
      // com uma minoria de faltas "só de conversa" com o árbitro.
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
    // Vítima de falta fica caída de verdade no gramado e, nas entradas mais
    // duras, leva a mão ao rosto. O tempo cresce com a gravidade.
    victim.model.react?.('down', 2.1 + severity * 1.9, { handOnFace: severity >= 0.6 });
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
        selectControlled(replacement,offender.side);
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
    ball.state.offside=null;ball.state.reception=null;
    ball.state.goalPocket = 0;
    ball.state.noAttachment=0;ball.state.assistProvider=null;ball.state.lastPass=null;
    ball.state.rainbow = ball.state.recovery = null;
    if (phase.name === 'fulltime' || phase.name === 'halftime') return;
    clearSlideTackles();
    shotCamera = null;
    penaltyAim.x=penaltyAim.y=0;
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
      : members(side).filter(player => player.active && !player.isKeeper);
    let taker = null;
    let best = Infinity;
    for (const player of candidates) {
      const distance = Math.hypot(player.x - restart.x, player.z - restart.z);
      if (distance < best) {
        best = distance;
        taker = player;
      }
    }
    if(side===userSide&&options.playerLockId&&['penalty','freekick'].includes(restart.type))taker=candidates.find(p=>p.rosterId===options.playerLockId)||taker;
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
      placeX = Math.sign(restart.x) * (PITCH.halfLength - 0.4);
      placeZ = Math.sign(restart.z || 1) * (PITCH.halfWidth - 0.4);
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
      // Ninguém além do cobrador e goleiro dentro da área/arco. Os demais
      // continuam ativos e voltam ao jogo após o chute (sem apagar jogadores).
      let waiting=0;
      for(const player of allPlayers){
        if(!player.active||player===taker||player===keeper)continue;
        if(player.isKeeper){
          player.x=-sign*(PITCH.halfLength-1.2);player.z=0;player.vx=player.vz=0;
          player.root.position.set(player.x,0,player.z);continue;
        }
        player.x=sign*(PITCH.halfLength-22-(Math.floor(waiting/10)*2.2));
        player.z=((waiting%10)-4.5)*2.2;waiting++;
        player.vx=player.vz=0;player.root.position.set(player.x,0,player.z);
      }
      referee.x=sign*(PITCH.halfLength-17);referee.z=23;
      referee.vx=referee.vz=0;referee.root.position.set(referee.x,0,referee.z);
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
    if(restart.type==='penalty'){taker.x=placeX-sign*5;taker.root.position.set(taker.x,0,taker.z);}
    if (side === userSide) selectControlled(taker);
    restart.ready = true;
    const placement=['goalkick','corner','freekick','penalty'].includes(restart.type);
    if(placement){
      // Cutscene de ajuste da bola: o cobrador se abaixa e ajeita a bola no
      // ponto antes da cobrança. Falta e pênalti ganham a mesma encenação que
      // escanteio/tiro de meta, com duração maior para ler como cena.
      // Falta tem tempo de ler a cena; no pênalti a encenação é curta para
      // devolver o cobrador aos 5 m da corrida de aproximação antes de a
      // retomada ficar pronta (geometria preservada).
      const duration=restart.type==='freekick'?1.15:restart.type==='penalty'?.45:.8;
      restart.preparation={stage:'place',time:0,ballX:placeX,ballZ:placeZ,duration};
      taker.x=placeX-taker.facing.x*.46;taker.z=placeZ-taker.facing.z*.46;
      taker.root.position.set(taker.x,0,taker.z);
      ball.state.owner=null;
      ball.state.position.set(placeX,BALL.radius,placeZ);
      taker.model.placeBall?.(duration);
      emit({type:'placement',kind:restart.type,team:side,x:placeX,z:placeZ});
    }
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

  function syncRestartBall() {
    const p=phase.restart?.preparation;
    if(!p)return;
    // Não levantar a bola para o peito: a animação é só de ajuste no ponto.
    ball.state.position.set(p.ballX,BALL.radius,p.ballZ);
    ball.mesh.position.copy(ball.state.position);
    ball.shadow.position.set(p.ballX,.02,p.ballZ);
  }

  function updateRestartActors(dt) {
    const restart = phase.restart;
    if(restart?.preparation){
      const p=restart.preparation,taker=restart.taker;
      p.time+=dt;taker.vx=taker.vz=0;
      if(p.time>=p.duration){
        restart.preparation=null;phase.timer=0;
        ball.attachTo(taker);ball.state.position.set(p.ballX,BALL.radius,p.ballZ);
        // Depois de ajeitar a bola no pênalti, o cobrador recua para a
        // corrida de aproximação (o run-up continua existindo).
        if(restart.type==='penalty'){
          taker.x=p.ballX-attackSign(restart.side)*5;taker.z=0;
          taker.vx=taker.vz=0;taker.root.position.set(taker.x,0,taker.z);
        }
      }
      return;
    }
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
    if (!restart || !restart.taker || restart.preparation) return;
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
      shootPenalty(taker,{strength:.7,aiAim:aim,aiHeight:rng()*.6});
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
    if (phase.restart === restart&&!penaltyRunup) {
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

  /**
   * Onde cada atleta fica na saída de bola (sem efeito colateral). A cerimônia
   * usa a mesma tabela para levar os times da linha de apresentação até as
   * posições do apito — assim o fim da cerimônia não teletransporta ninguém.
   */
  function kickoffPlacement(side) {
    const sign = attackSign(side);
    const available = members(side).filter(player => player.active);
    const kicker = (side===userSide&&options.playerLockId?available.find(p=>p.rosterId===options.playerLockId):null)
      || available.find(player => player.role === 'ST' && !player.isKeeper)
      || available.find(player => !player.isKeeper)
      || available[0];
    if (!kicker) return null;
    const positions = new Map();
    for (const player of members(side)) {
      if (!player.active || player === kicker) continue;
      const base = player.tacticalBase || FORMATION_433[player.index] || FORMATION_433[1];
      // Os companheiros do cobrador ficam no próprio campo durante a saída.
      positions.set(player, { x: sign * Math.min(-1.2, base.x), z: base.z });
    }
    for (const player of members(opponentOf(side))) {
      if (!player.active) continue;
      const base = player.tacticalBase || FORMATION_433[player.index] || FORMATION_433[1];
      // O adversário permanece no próprio campo e fora do círculo central.
      positions.set(player, { x: sign * Math.max(9.5, Math.abs(base.x)), z: base.z });
    }
    positions.set(kicker, { x: -0.6 * sign, z: 0.4 });
    return { sign, kicker, positions };
  }

  /** Saída de bola. */
  function kickoff(side) {
    penaltyRunup=null;
    ball.state.goalPocket = 0;
    for(const player of allPlayers)player.penaltyDecision=null;
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
    const placement = kickoffPlacement(side);
    if (!placement) return;
    const { kicker, positions } = placement;
    for (const [player, target] of positions) {
      player.x = target.x;
      player.z = target.z;
      player.vx = 0;
      player.vz = 0;
      player.sprint = false;
    }
    ball.state.position.set(0, BALL.radius, 0);
    ball.state.velocity.set(0, 0, 0);
    ball.state.noAttachment=0;ball.state.assistProvider=null;ball.state.lastPass=null;
    ball.attachTo(kicker);
    ball.mesh.position.set(kicker.x - kicker.facing.x * 0.45, BALL.radius, kicker.z - kicker.facing.z * 0.45);
    ball.state.lastTouch = kicker;
    ball.state.lastIntentionalTouch = kicker;
    if (side === userSide) selectControlled(kicker);
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
    // Assistência: autor do último passe certo da posse, se o gol não for dele
    // nem contra. Usado para a nota da carreira (+1).
    const assistCandidate = ball.state.assistProvider ||
      (ball.state.lastPass && elapsedWorldTime-ball.state.lastPass.at<10 ? ball.state.lastPass.from : null);
    const goalAssist = (!credit.ownGoalBy && assistCandidate &&
      assistCandidate.side === side && assistCandidate !== goalScorer) ? assistCandidate : null;
    goalCelebrationStyle = GOAL_CELEBRATIONS[goalCelebrationIndex % GOAL_CELEBRATIONS.length];
    goalCelebrationIndex += 1;
    goalCameraReady = false;
    if (goalScorer?.side === userSide) selectControlled(goalScorer);
    ball.state.goalPocket = side === 'home' ? 1 : -1;
    ball.state.owner = null;
    ball.state.guidance = null;
    emit({
      type: 'goal',
      team: side,
      scorer: goalScorer,
      assist: goalAssist,
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
  refereeModel.root.name='xfc-referee';
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
          decision.stage = 'talk';
          decision.timer = 0;
          decision.talkDuration = decision.card === 'none' ? 1.9 : 1.5;
          // Chama o jogador com a mão: gesto de "venha aqui".
          refereeModel.callOver?.(1.0);
          // O faltoso para, vira para o árbitro e presta atenção.
          const off = decision.offender;
          if (off) {
            off.vx = 0; off.vz = 0; off.sprint = false;
            off.model.react?.('listen', decision.talkDuration + 0.4);
          }
          emit({ type: 'referee-talk', team: decision.offender?.side || null,
            player: decision.offender, card: decision.card, minute: clock.minutes });
        }
      } else if (decision.stage === 'talk') {
        // Conversa: o árbitro explica a decisão, o jogador escuta de cabeça
        // baixa. Só depois disso o cartão aparece (ou não aparece).
        decision.timer += dt;
        decision.talkTime = decision.timer;
        referee.vx *= Math.exp(-dt * 8);
        referee.vz *= Math.exp(-dt * 8);
        faceTowards(referee, subject.x, subject.z, dt, 10);
        if (subject) faceTowards(subject, referee.x, referee.z, dt, 8);
        // Gesto de conversa: mão sobe e desce enquanto fala.
        const talkWave = Math.sin(decision.timer * 6.2) * 0.5 + 0.5;
        refereeModel.callOver?.(talkWave);
        if (decision.timer > (decision.talkDuration || 1.6)) {
          decision.stage = 'show';
          decision.timer = 0;
          decision.cardPrepared = false;
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

    // Pênalti: árbitro fora da área, nunca parado entre cobrador e goleiro.
    if((phase.name==='restart'&&phase.restart?.type==='penalty')||shotCamera?.type==='penalty'){
      const sign=attackSign(phase.restart?.side||shotCamera.side);
      referee.x=sign*(PITCH.halfLength-17);referee.z=23;referee.vx=referee.vz=0;
      referee.root.position.set(referee.x,0,referee.z);refereeModel.update(dt,{speed:0});
      faceTowards(referee,ball.state.position.x,ball.state.position.z,dt,8);return;
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

  function shootPenalty(player,opts={}){
    if(penaltyRunup)return false;
    rememberPenaltyAim();
    const sign=attackSign(player.side),x=sign*(PITCH.halfLength-11);
    penaltyRunup={player,elapsed:0,duration:1.35,fromX:player.x,fromZ:player.z,ballX:x,
      lane:choosePenaltyLane(rng),opts:{...opts,aiAim:opts.aiAim??(training.enabled?penaltyAim.x:setPieceOptions.aim),aiHeight:opts.aiHeight??penaltyAim.y}};
    ball.state.owner=null;ball.state.position.set(x,BALL.radius,0);ball.state.velocity.set(0,0,0);
    return true;
  }
  function updatePenaltyRunup(dt){
    const r=penaltyRunup;if(!r)return false;
    r.elapsed+=dt;const t=Math.min(1,r.elapsed/r.duration),travel=t*t*(3-2*t);
    const sign=attackSign(r.player.side),oldX=r.player.x;
    r.player.x=r.fromX+(r.ballX-sign*.12-r.fromX)*travel;r.player.z=r.fromZ*(1-travel);
    r.player.vx=(r.player.x-oldX)/Math.max(dt,.001);r.player.vz=0;
    ball.state.position.set(r.ballX,BALL.radius,0);ball.mesh.position.copy(ball.state.position);
    for(const player of allPlayers){if(!player.active)continue;player.root.position.set(player.x,0,player.z);player.model.update(dt,modelMovementState(player));}
    updateMarker(dt);
    if(training.enabled||cameraMode==='pro')updateTrainingCamera(dt);else updateSetPieceCamera(dt);
    if(t>=1){
      penaltyRunup=null;r.player.vx=r.player.vz=0;
      releasePenalty(r.player,{...r.opts,keeperLane:r.lane});
      if(!training.enabled){phase.name='play';phase.restart=null;phase.timer=0;startSetPieceShotCamera('penalty',r.player.side,r.player);}
    }
    return true;
  }
  function releasePenalty(player,opts={}){
    const sign=attackSign(player.side);
    rememberPenaltyAim();
    const aim=opts.aiAim??(training.enabled?penaltyAim.x:setPieceOptions.aim);
    const target=penaltyTarget(aim,opts.aiHeight??penaltyAim.y,sign);
    const power=22+Math.max(0,Math.min(1,opts.strength??.65))*7;
    ball.state.position.set(sign*(PITCH.halfLength-11),BALL.radius,0);
    shootBall(player,{power,spread:0,target,kind:opts.kind==='power'?'power':'placed',lift:.1});
    // Sem dispersão aleatória nem escolha automática de canto: o analógico manda.
    const dx=target.x-ball.state.position.x,dz=target.z-ball.state.position.z,length=Math.hypot(dx,dz);
    const speed=power*1.1,time=length/speed;
    ball.state.velocity.set(dx/length*speed,(target.height-BALL.radius)/time+4.905*time,dz/length*speed);
    ball.state.spin.set(0,0,0);
    const keeper=members(opponentOf(player.side)).find(p=>p.isKeeper&&p.active);
    if(keeper){
      keeper.penaltyDecision={lane:opts.keeperLane??choosePenaltyLane(rng),flightId:ball.state.flightId,time:0,startZ:keeper.z};
      keeper.diveCooldown=-Infinity;
    }
    return true;
  }

  function updatePenaltyKeeper(keeper,dt){
    const decision=keeper.penaltyDecision;
    if(!decision||decision.flightId!==ball.state.flightId)return false;
    decision.time+=dt;
    if(decision.time>1.6){keeper.penaltyDecision=null;return false;}
    if(decision.time>.07&&!decision.launched){
      decision.launched=true;
      if(decision.lane)diveKeeper(keeper,decision.lane,decision.flightId);
      else keeper.model.catchBall?.();
    }
    const progress=Math.min(1,Math.max(0,(decision.time-.10)/.52));
    const old=keeper.z;
    keeper.z=decision.startZ+decision.lane*2.15*(progress*progress*(3-2*progress));
    keeper.vz=(keeper.z-old)/Math.max(dt,.001);keeper.vx=0;
    keeper.root.position.set(keeper.x,0,keeper.z);
    return true;
  }

  /** Finalização manual: só é chamada por um toque/tecla de chute. */
  function shootUser(player, opts = {}, direct = false) {
    const strength = Math.max(0, Math.min(1, opts.strength ?? 0.45));
    const shotKind = opts.kind || (opts.placed ? 'placed' : 'normal');
    if(opts.restartType==='penalty'||(training.enabled&&training.drill==='penalty'))return shootPenalty(player,opts);
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
        power: 43 + strength * 9,
        spread: 0.012 + strength * 0.014,
        target: { x: sign * PITCH.halfLength, z: lateral },
        kind: 'power',
        lift: 0.035
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
    if (!restart?.ready || restart.preparation || restart.side !== userSide || !taker || controlled[userSide] !== taker) return false;
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
      const mate = humanPassTarget(taker,
        () => nearbyTeammateFor(taker, { min: 1.2, max: 13 }) || bestTeammateFor(taker));
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
    if (acted&&!penaltyRunup) finishHumanRestart(restart);
    return acted;
  }

  function performHumanKickoff(name, opts, player) {
    if (phase.side !== userSide || ball.state.owner !== player) return false;
    let acted = false;
    if (name === 'shoot') {
      acted = shootUser(player, opts, false);
    } else if (name === 'pass') {
      // Na saída de bola os companheiros ficam nas posições da formação, longe
      // do cobrador (o mais próximo pode estar a 9 m). Exigir um companheiro
      // "por perto" aqui travava a partida no kickoff: nenhum passe era válido
      // e o analógico nunca começava a funcionar.
      const mate = humanPassTarget(player,
        () => nearbyTeammateFor(player, { min: 1.2, max: 18 })
          || bestTeammateFor(player, true)
          || members(player.side).find(mate => mate !== player && mate.active)
          || null);
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
    trainingDive(dir=1){
      if(!training.enabled||training.drill!=='keeper')return false;
      const keeper=training.keeper;keeper.z=Math.max(-3.6,Math.min(3.6,keeper.z+dir*.8));
      return diveKeeper(keeper,dir);
    },
    trainingCross(){
      if(!training.enabled||training.drill!=='corner')return false;
      const taker=ball.state.owner;if(!taker)return false;
      const mate=teams.home.players.find(p=>p.active&&p!==taker&&!p.isKeeper);
      if(!mate)return false;kickBall(taker,mate,{lob:true,power:18,lift:.42});controlled.home=mate;return true;
    },
    get trainingDrill() {
      return training.drill;
    },
    get trainingStats() {
      return { ...training.stats };
    },
    getGamePlan(side=userSide){return members(side).filter(p=>p.active).map(p=>({
      id:p.id,rosterId:p.rosterId,name:p.name,role:p.role,ovr:p.ovr,number:p.number,...p.tacticalBase
    }));},
    setGamePlan(playerId,point){
      if(!paused)return false;
      const player=members(userSide).find(p=>p.active&&p.id===playerId),base=validatedPlan(point);
      if(!player||!Number.isFinite(base.x))return false;
      player.tacticalBase={...player.tacticalBase,...base};player.tacticalCustom=true;return true;
    },
    setShotCharge(value){input.shotCharge=Math.max(0,Math.min(1,Number(value)||0));},
    get cameraZoom(){return cameraZoom;},
    setCameraZoom(value){if(value===1||value===1.2)cameraZoom=value;},
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
    updatePenaltyKeeper,
    get penaltyApproach(){return penaltyRunup?{elapsed:penaltyRunup.elapsed,duration:penaltyRunup.duration,playerId:penaltyRunup.player.id}:null;},
    tackle,
    slideTackle: startSlideTackle,
    isUserControlled,

    /** Nenhum passe/chute é gerado sem um comando explícito do usuário. */
    command(name, opts = {}) {
      if (paused||penaltyRunup) return false;
      const player = controlled[userSide];
      if (!player?.active) return false;

      if (phase.name === 'restart') return performHumanRestart(name, opts, phase.restart);
      if (phase.name === 'kickoff') return performHumanKickoff(name, opts, player);
      if (phase.name !== 'play') return false;

      const owner = ball.state.owner;
      if (name === 'pass') {
        if (owner !== player) return false;
        const mate = humanPassTarget(player, () => bestTeammateFor(player));
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
      if (['dribble','stepover','rainbow'].includes(name)) {
        if(training.enabled&&training.drill==='penalty')return false;
        if(owner!==player||elapsedWorldTime<(player.skillUntil||0))return false;
        player.skillUntil=elapsedWorldTime+.75;
        if(name==='rainbow'){
          const profile=rainbowProfile(player.dribbling);
          ball.kick(player.facing,2,4);ball.state.lastTouch=player;ball.state.lastIntentionalTouch=player;
          ball.state.rainbow={player,profile,time:0,x:player.x,z:player.z,fx:player.facing.x,fz:player.facing.z};
          ball.state.position.set(player.x-player.facing.x*.55,BALL.radius,player.z-player.facing.z*.55);
          ball.state.skillUntil=elapsedWorldTime+profile.duration;
          player.skillUntil=elapsedWorldTime+profile.duration+.4;
          player.model.skill?.('rainbow');
        }else{
          player.model.skill?.('stepover');player.burst=Math.max(player.burst||0,.65);
        }
        // Drible/finta concluído com a bola: conta décimo na nota da carreira.
        emit({type:'dribble',team:player.side,player,name});
        return true;
      }
      if (name === 'request-pass') return world.requestPass();
      if (name === 'switch') return world.switchPlayer();
      return false;
    },

    requestPass() {
      if(paused||phase.name!=='play'||!options.playerLockId)return false;
      const hero=controlled[userSide],owner=ball.state.owner;
      if(!hero?.active)return false;
      const decision=evaluatePassRequest({owner,receiver:hero});
      if(owner&&owner!==hero&&owner.side===userSide)hero.model.signal?.(.7);
      emit({type:'pass-request',...decision,player:hero});
      if(decision.accepted)kickBall(owner,hero,{power:decision.power,requested:true});
      return decision.accepted;
    },

    /** Troca o jogador controlado para o mais próximo da bola. */
    switchPlayer() {
      if(options.playerLockId)return world.requestPass();
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
        selectControlled(best);
        if (training.enabled && training.drill === 'team') training.player = best;
        return true;
      }
      return false;
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
      return entrance ? Math.min(1, entrance.time / PREMATCH_TOTAL) : 0;
    },
    /** Cena atual da cerimônia ('tunnel' | 'walkout' | 'anthem' | 'handoff'). */
    get entranceBeat() {
      return entrance ? prematchBeatAt(entrance.time).id : null;
    },
    /** Rótulo, legenda e índice da cena (a interface usa no painel). */
    get entranceScene() {
      if (!entrance) return null;
      const beat = prematchBeatAt(entrance.time);
      return { id: beat.id, index: beat.index, label: beat.label, caption: beat.caption, progress: beat.progress, total: beat.total };
    },

    /** Pula para o fim da cerimônia (testes e capturas; não é botão do jogo). */
    skipEntrance() {
      if (!entrance) return false;
      entrance.time = PREMATCH_TOTAL;
      return true;
    },
    /**
     * Avança a cerimônia por um passo de motor fixo (capturas e testes que
     * precisam de um instante exato). O jogo usa o relógio de parede.
     */
    advanceEntrance(step = 0, mode = 'exact') {
      if (!entrance) return false;
      if (mode === 'accumulate') entrance.extraTime = (entrance.extraTime || 0) + Math.max(0, step);
      else entrance.override = Math.max(0, step);
      return true;
    },

    /** Alterna entre a câmera de transmissão e a cinematográfica. */
    setCameraMode(mode) {
      cameraMode = spectator ? 'play' : (mode === 'play' && options.playerLockId ? 'pro' : mode);
      if (cameraMode === 'play') cameraReady = false;
      if (cameraMode === 'pro') trainingCameraReady = false;
    },

    /** Modo assistir: câmera de transmissão, sem controle do atleta. */
    setSpectator(value) {
      spectator = Boolean(value);
      if (spectator) {
        cameraMode = 'play'; cameraReady = false;
        // Nenhum comando residual do analógico/botão permanece ao assistir.
        input.moveX = input.moveZ = 0;
        input.shotCharge = 0;
      }
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
    new THREE.MeshBasicMaterial({ color: 0xef2538, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false })
  );
  markerRing.rotation.x = -Math.PI / 2;
  markerRing.position.y = 0.035;
  const markerDisc = new THREE.Mesh(
    new THREE.CircleGeometry(0.38, 26),
    new THREE.MeshBasicMaterial({ color: 0xef2538, transparent: true, opacity: 0.22, depthWrite: false })
  );
  markerDisc.rotation.x = -Math.PI / 2;
  markerDisc.position.y = 0.032;

  // Triângulo plano vermelho, sempre de frente para a tela (sem cone/giro 3D).
  const markerGeometry=new THREE.BufferGeometry();
  markerGeometry.setAttribute('position',new THREE.Float32BufferAttribute([-.16,.12,0,.16,.12,0,0,-.15,0],3));
  const markerChevron=new THREE.Mesh(markerGeometry,new THREE.MeshBasicMaterial({
    color:0xf02338,side:THREE.DoubleSide,depthTest:false,depthWrite:false,toneMapped:false
  }));
  markerChevron.name='xfc-controlled-marker-2d';markerChevron.renderOrder=1000;
  markerChevron.onBeforeRender=(_renderer,_scene,camera)=>{
    markerChevron.quaternion.copy(camera.quaternion);
    const depth=markerChevron.position.distanceTo(camera.position);
    const size=2*depth*Math.tan(camera.fov*Math.PI/360)*14/720/.27;
    markerChevron.scale.setScalar(Math.max(.25,Math.min(2.2,size)));
    markerChevron.updateMatrixWorld();
  };

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
  // Bandeirinha separada do triângulo de seleção: todos os atletas impedidos.
  const flagCanvas=document.createElement('canvas');flagCanvas.width=64;flagCanvas.height=64;
  const fc=flagCanvas.getContext('2d');fc.fillStyle='#fff';fc.fillRect(13,8,4,48);
  for(let y=0;y<2;y++)for(let x=0;x<3;x++){fc.fillStyle=(x+y)%2?'#ff7b00':'#ffe44b';fc.fillRect(17+x*13,8+y*13,13,13);}
  const flagTexture=new THREE.CanvasTexture(flagCanvas);
  const flagMaterial=new THREE.SpriteMaterial({map:flagTexture,depthTest:false,depthWrite:false,toneMapped:false});
  const offsideFlags=allPlayers.map(player=>{const flag=new THREE.Sprite(flagMaterial);flag.name=`offside-flag-${player.id}`;flag.visible=false;flag.renderOrder=90;engine.scene.add(flag);return{player,flag};});
  let markerPulse = 0;
  let markerTime = 0;
  let lastControlledId = null;
  let switchFlash = 0;

  function updateMarker(dt) {
    markerTime += dt;
    const carrier=ball.state.owner, snapshot=ball.state.offside;
    for(const {player:p,flag} of offsideFlags){
      const warned=phase.name==='play'&&(snapshot?.players.includes(p.id)||(carrier&&p!==carrier&&p.side===carrier.side&&isOffside(carrier,p)));
      flag.visible=p.active&&!training.enabled&&Boolean(warned||p.offsideFlagUntil>elapsedWorldTime);
      if(flag.visible){flag.position.set(p.x,2.65,p.z);const d=engine.camera.position.distanceTo(flag.position);flag.scale.setScalar(Math.max(.65,d*.025));}
    }
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
      markerChevron.position.set(player.x, 2.12, player.z);
      markerChevron.quaternion.copy(engine.camera.quaternion);
      markerChevron.scale.setScalar(1);
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
    penaltyRunup=null;
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
    const scenario = ['freekick','shooting'].includes(drill)
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

    const practicePlayers = ['team','corner'].includes(drill)
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
    } else if(drill==='keeper'){
      place(player,PITCH.halfLength-17,0,1);
    } else if(drill==='shooting'){
      place(player,PITCH.halfLength-scenario.distance,scenario.z,1);
    } else if(drill==='corner'){
      practicePlayers.forEach((p,i)=>place(p,43+(i%3)*2,(i-4)*1.5,1));
      place(player,PITCH.halfLength-1,PITCH.halfWidth-1,1);
    } else if(drill==='free'||drill==='dribble'){
      place(player,drill==='dribble'?14:0,0,1);
    } else if (drill === 'penalty') {
      // Bola na marca de 11 m; cobrador espera 5 m atrás até confirmar CHUTE.
      place(player, PITCH.halfLength - 16, 0, 1);
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
    controlled.home = drill==='keeper'?keeper:player;
    controlled.away = null;
    training.keeperDelay=0;training.dribbleGate=0;
    input.moveX = 0;
    input.moveZ = 0;
    penaltyAim.x=penaltyAim.y=0;
    input.sprint = false;
    training.cameraForward = { x: drill==='keeper'?-1:1, z: 0 };
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
    keeper.penaltyDecision=null;keeper.gkDiving=false;keeper.gkDiveUntil=0;
    keeper.x=PITCH.halfLength-.55;keeper.z=0;keeper.root.position.set(keeper.x,0,keeper.z);
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
    const shadowCasters=selectShadowCasters(allPlayers,hero,ball.state.position,engine.graphics);
    for (const player of allPlayers) {
      if (!player.active) continue;
      player.root.position.set(player.x, 0, player.z);
      player.model.setDynamicShadow?.(shadowCasters.has(player));
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
    let cameraForward;
    if (training.enabled) {
      // Treino: eixo fixo, sem girar o analógico (comportamento preservado).
      cameraForward = training.cameraForward || { x: 1, z: 0 };
    } else {
      // Câmera Pro da CARREIRA segue a bola: se ela estiver atrás, a câmera
      // vira para trás; se estiver dos lados, vira para o lado correspondente.
      // O eixo é suavizado e também orienta o analógico (updateHuman) para
      // o controle continuar coerente com a imagem. Perto do atleta (drible)
      // volta ao eixo de ataque, evitando tremor quando a bola está no pé.
      const ballDx = ball.state.position.x - player.x;
      const ballDz = ball.state.position.z - player.z;
      const ballDistance = Math.hypot(ballDx, ballDz);
      const baseForward = { x: attackSign(userSide), z: 0 };
      if (!careerCameraForward) careerCameraForward = { ...baseForward };
      const targetForward = ballDistance > 4.5
        ? { x: ballDx / ballDistance, z: ballDz / ballDistance }
        : baseForward;
      const turn = 1 - Math.exp(-dt * 2.4);
      careerCameraForward.x += (targetForward.x - careerCameraForward.x) * turn;
      careerCameraForward.z += (targetForward.z - careerCameraForward.z) * turn;
      const len = Math.hypot(careerCameraForward.x, careerCameraForward.z) || 1;
      cameraForward = { x: careerCameraForward.x / len, z: careerCameraForward.z / len };
    }
    const facingLength = Math.hypot(cameraForward.x, cameraForward.z) || 1;
    const forwardX = cameraForward.x / facingLength;
    const forwardZ = cameraForward.z / facingLength;
    const rightX = -forwardZ;
    const rightZ = forwardX;
    const speed = playerSpeed(player);
    const isPenalty=training.enabled&&training.drill==='penalty';
    const cameraDistance = isPenalty?6.8:9.2 + Math.min(1.2, speed * 0.1);
    const desiredX = player.x - forwardX * cameraDistance;
    // Mantém o eixo Pro; altura suficiente para ver a bola além do atleta a 5 m.
    const desiredY = isPenalty?4.8:4.7 + Math.min(0.3, speed * 0.035);
    const desiredZ = player.z - forwardZ * cameraDistance;

    const ballDx = ball.state.position.x - player.x;
    const ballDz = ball.state.position.z - player.z;
    const ballAhead = ballDx * forwardX + ballDz * forwardZ;
    const ballLateral = ballDx * rightX + ballDz * rightZ;
    // No treino o foco é fixo à frente; na carreira mira na própria bola.
    const lead = training.enabled
      ? Math.max(7.5, Math.min(13, 8.8 + ballAhead * 0.2))
      : Math.max(5.5, Math.min(13, ballAhead));
    const lateral = Math.max(-1.4, Math.min(1.4, ballLateral * 0.12));
    const targetX = player.x + forwardX * lead + rightX * lateral;
    const targetY = (isPenalty ? .25 : 1.2) + Math.min(0.45, Math.max(0, ball.state.position.y - 0.7) * 0.08);
    const targetZ = player.z + forwardZ * lead + rightZ * lateral;
    const targetFov = isPenalty?46:training.shotActive ? 56 : 52;

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
    if(result!=='goal')ball.state.velocity.set(0, 0, 0);
    else ball.state.goalPocket=1;
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
      penaltyArrow.visible=false;
      if(phase.name==='training-goal')ball.update(dt,[]);
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

    if(training.drill!=='penalty')updateHuman(dt);
    else {player.vx=player.vz=0;}
    updatePenaltyAim();
    if (training.drill === 'team') {
      ais.home.update(dt);
    }

    const [minX, maxX, maxZ] = training.drill === 'team'
      ? [5, PITCH.halfLength - 1.2, 31]
      : training.drill === 'keeper' ? [PITCH.halfLength-2,PITCH.halfLength-.3,3.6]
      : ['free','dribble','corner'].includes(training.drill) ? [-PITCH.halfLength+1,PITCH.halfLength-1,PITCH.halfWidth-1]
      : training.drill === 'penalty'
        ? [PITCH.halfLength - 17, PITCH.halfLength - 8, 4]
        : [18, PITCH.halfLength - 3.5, 28];
    player.x = Math.max(minX, Math.min(maxX, player.x));
    player.z = Math.max(-maxZ, Math.min(maxZ, player.z));
    if (Math.hypot(player.vx, player.vz) < 0.15) {
      faceTowards(player, training.drill==='keeper'?training.player.x:PITCH.halfLength, player.z * 0.2, dt, 8);
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
    const penaltyCommitted=updatePenaltyKeeper(keeper,dt);
    if (!penaltyCommitted && diveDirection && training.drill!=='keeper' && training.drill!=='penalty') diveKeeper(keeper, diveDirection, flightId);
    const keeperSpeed = prediction?.onTarget ? 7.2 : 5.8;
    if(!penaltyCommitted && training.drill!=='keeper' && training.drill!=='penalty') steerPlayer(keeper, keeperTarget.x, keeperTarget.z, dt, keeperSpeed, { arrive: 0.24, turn: 9 });
    if (!keeper.gkDiving && !faceVelocity(keeper, dt, 10)) faceTowards(keeper, ball.state.position.x, ball.state.position.z, dt, 9);
    keeper.root.position.set(keeper.x, 0, keeper.z);

    if(training.drill==='keeper'&&!training.shotActive){
      training.keeperDelay+=dt;
      if(training.keeperDelay>1.4)shootBall(training.player,{power:17,target:{x:PITCH.halfLength,z:(rng()-.5)*6},kind:'normal',lift:.05,spread:.01});
    }
    if(training.drill==='dribble' && training.dribbleGate<trainingCones.length){
      const i=training.dribbleGate,cone=trainingCones[i];
      if(Math.hypot(player.x-cone.position.x,player.z-(cone.position.z>0?-1:1))<1.7){
        training.dribbleGate++;emit({type:'training-dribble',completed:training.dribbleGate,total:trainingCones.length});
      }
    }
    const actors = allPlayers.filter(item => item.active);
    if(!updateRainbow(dt))ball.update(dt, actors);
    const position = ball.state.position;
    if (['team','corner','free','dribble','shooting'].includes(training.drill) && !training.shotActive && !ball.state.owner
      && !ball.state.rainbow && elapsedWorldTime >= (ball.state.skillUntil||0)
      && position.y < 1.8 && Math.hypot(ball.state.velocity.x, ball.state.velocity.z) < 18) {
      const receiver = teams.home.players
        .filter(item => item.active)
        .map(item => ({ player: item, distance: Math.hypot(item.x - position.x, item.z - position.z) }))
        .filter(item => item.distance < 1.18 && (Math.hypot(ball.state.velocity.x,ball.state.velocity.z)<12
          || (ball.state.passTarget===item.player&&ball.state.flightTime<2.4&&position.y<.8&&item.distance<.85)))
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

    if(training.drill==='penalty'&&!training.shotActive){
      ball.state.position.set(PITCH.halfLength-11,BALL.radius,0);ball.mesh.position.copy(ball.state.position);
    }
    updateTrainingActors(dt);
    updateMarker(dt);
    updateTrainingCamera(dt);
    markerChevron.quaternion.copy(engine.camera.quaternion);
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

  /** Os cordeiros da cerimônia: três árbitros (o principal é o `referee`). */
  let ceremonyRefs = [];

  /** Garante o grupo de árbitros da cerimônia (criado uma vez por partida). */
  function ensureCeremonyReferees() {
    if (ceremonyRefs.length) return ceremonyRefs;
    // O árbitro principal já existe no motor; os dois assistentes são
    // figurantes da cerimônia e ficam escondidos durante o jogo.
    ceremonyRefs.push({ actor: referee, model: refereeModel, main: true });
    for (let index = 0; index < 2; index += 1) {
      const model = createPlayer3D({
        kit: { primary: '#161a20', secondary: '#101319', accent: '#f5c518', pattern: 'solid' },
        number: 2 + index,
        isKeeper: false,
        simplified: options.simplifiedPlayers ?? engine.lowPower,
        skinTone: index ? '#8d5a34' : '#c98d5f',
        hairColor: '#1f1712',
        hairStyle: 'short',
        heightScale: 1.02
      });
      model.root.name = `xfc-referee-assistant-${index + 1}`;
      model.root.visible = false;
      engine.scene.add(model.root);
      ceremonyRefs.push({ actor: { x: 0, z: 0, vx: 0, vz: 0, facingAngle: 0, facing: new THREE.Vector3(0, 0, 1), root: model.root, turnLean: 0 }, model, main: false });
    }
    return ceremonyRefs;
  }

  /** Túnel: os times esperam; os árbitros ficam na frente, de costas para a luz. */
  function placeCeremonyStart() {
    ensureCeremonyReferees();
    const groups = { home: teams.home.players.slice(), away: teams.away.players.slice() };
    for (const side of ['home', 'away']) {
      groups[side].forEach((player, index) => {
        const slot = tunnelSlot(side, index);
        player.x = slot.x;
        player.z = slot.z;
        player.vx = 0;
        player.vz = 0;
        player.facingAngle = slot.angle;
        player.facing.set(Math.sin(slot.angle), 0, Math.cos(slot.angle));
        player.root.position.set(slot.x, 0, slot.z);
        player.root.rotation.y = slot.angle;
        player.entrancePath = walkoutPath(side, index);
        player.entranceLength = pathLength(player.entrancePath);
        player.entranceStart = null;
        player.anthemQueued = false;
        player.handoffFrom = null;
      });
    }
    ceremonyRefs.forEach((entry, index) => {
      const slot = refereeTunnelSlot(index);
      entry.actor.x = slot.x;
      entry.actor.z = slot.z;
      entry.actor.vx = 0;
      entry.actor.vz = 0;
      entry.actor.facingAngle = slot.angle;
      entry.actor.facing.set(Math.sin(slot.angle), 0, Math.cos(slot.angle));
      entry.model.root.position.set(slot.x, 0, slot.z);
      entry.model.root.rotation.y = slot.angle;
      entry.model.root.visible = true;
      entry.entrancePath = refereeWalkoutPath(index);
      entry.entranceStart = null;
    });
    // Bola fora de cena até o apito (os jogadores não a carregam no desfile).
    ball.state.owner = null;
    ball.state.velocity.set(0, 0, 0);
    ball.state.position.set(0, BALL.radius, 0);
    ball.mesh.position.copy(ball.state.position);
    ball.mesh.visible = false;
    if (ball.shadow) ball.shadow.visible = false;
  }

  /** Caminho dos árbitros: saem na frente, em fila pelo corredor. */
  function refereeWalkoutPath(index) {
    const start = refereeTunnelSlot(index);
    // O árbitro principal fica no meio do corredor; os assistentes abrem a fila
    // um passo à frente, um de cada lado.
    const lane = index === 2 ? 0 : (index ? 0.85 : -0.85);
    return [
      { x: start.x, z: start.z },
      { x: lane * 0.6, z: TUNNEL.throatZ + 0.4 },
      { x: lane, z: TUNNEL.mouthZ + 0.4 },
      { x: lane, z: WALKOUT.pitchZ },
      { x: -7 + index * 0.9, z: -25.4 }
    ];
  }
  function startEntrance({ duration } = {}) {
    if (entrance) return false;
    if (phase.name !== 'kickoff') return false;
    entrance = {
      time: 0,
      duration: 0,
      durationOverride: Number.isFinite(duration) && duration > 0 ? duration : 0,
      side: phase.side,
      startedAt: globalThis.performance?.now?.() ?? Date.now(),
      beat: -1,
      sung: false,
      walked: false
    };
    phase.name = 'entrance';
    phase.timer = 0;
    paused = false;
    // A bola sai de cena para o desfile e o relógio não corre na apresentação.
    ball.state.owner = null;
    placeCeremonyStart();
    // Posições do apito, calculadas antes: a cena 4 caminha até elas.
    entrance.placement = kickoffPlacement(phase.side || 'home');
    emit({ type: 'entrance-start' });
    return true;
  }

  function finishEntrance() {
    const side = entrance?.side || 'home';
    for (const player of allPlayers) {
      player.vx = 0;
      player.vz = 0;
      player.model.stopAnthem?.();
      player.entrancePath = null;
    }
    const refereeSlot = refereeLineupSlot(1);
    referee.x = refereeSlot.x;
    referee.z = refereeSlot.z;
    referee.vx = 0;
    referee.vz = 0;
    referee.root.position.set(referee.x, 0, referee.z);
    referee.facingAngle = 0;
    referee.facing.set(0, 0, 1);
    referee.root.rotation.y = 0;
    for (const entry of ceremonyRefs) {
      if (!entry.main) entry.model.root.visible = false;
    }
    ball.mesh.visible = true;
    if (ball.shadow) ball.shadow.visible = true;
    entrance = null;
    entrancePlayed = true;
    // A cerimônia termina com o jogo já armado: o time do usuário sai com a bola
    // no círculo central e o primeiro PASSE/CHUTE é do jogador, como sempre.
    kickoff(side);
    phase.side = side;
    phase.timer = 0;
    cameraMode = options.playerLockId ? 'pro' : 'play';
    cameraReady = false;
    trainingCameraReady = false;
    emit({ type: 'entrance-end', side });
  }

  function updateCeremonyActors(dt, beat) {
    const moving = beat.id === 'walkout';
    // Jogadores.
    for (const player of allPlayers) {
      const path = player.entrancePath;
      if (!path) continue;
      if (beat.id === 'tunnel') {
        const slot = tunnelSlot(player.side, player.order);
        player.x = slot.x;
        player.z = slot.z;
        player.facingAngle = slot.angle;
      } else if (moving) {
        // Os times só começam a andar depois que os árbitros abrem a fila.
        // Cada jogador tem um atraso próprio: a fila sai da sala, não em bloco.
        const startAt = 0.55 + player.order * 0.055 + (player.side === 'away' ? 0.18 : 0);
        const walk = smoothstep((beat.local - startAt) / Math.max(0.5, beat.duration - startAt - 0.45));
        // Velocidade constante na maior parte do trajeto, desacelerando só no fim.
        const eased = smoothstep(walk);
        const point = samplePath(path, eased);
        const previousX = player.x;
        const previousZ = player.z;
        player.x = point.x;
        player.z = point.z;
        const dx = player.x - previousX;
        const dz = player.z - previousZ;
        if (Math.hypot(dx, dz) > 0.0008) {
          player.facingAngle = Math.atan2(dx, dz);
          player.facing.set(Math.sin(player.facingAngle), 0, Math.cos(player.facingAngle));
        }
        player.walkSpeed = dt > 0 ? Math.hypot(dx, dz) / dt : 0;
        player.root.position.set(player.x, 0, player.z);
        player.root.rotation.y = player.facingAngle;
        player.model.update(dt, {
          moving: player.walkSpeed > 0.12,
          speed: Math.max(1.9, Math.min(3.4, player.walkSpeed * 1.35)),
          x: player.x,
          z: player.z,
          lean: 0
        });
        continue;
      } else if (beat.id === 'anthem') {
        const slot = lineupSlot(player.side, player.order);
        player.x = slot.x;
        player.z = slot.z;
        player.facingAngle = slot.angle;
        player.root.position.set(player.x, 0, player.z);
        player.root.rotation.y = player.facingAngle;
        if (!player.anthemQueued) {
          player.anthemQueued = true;
          player.model.anthem?.(beat.duration + 0.6, player.isKeeper ? 0.65 : 1);
        }
        player.entranceSinging = true;
      } else if (beat.id === 'handoff') {
        // A apresentação acaba em movimento: ninguém some da linha e aparece
        // no meio de campo. O time anda junto até as posições do apito.
        player.entranceSinging = false;
        const target = entrance.placement?.positions.get(player)
          || lineupSlot(player.side, player.order);
        if (!player.handoffFrom) player.handoffFrom = { x: player.x, z: player.z };
        const k = smoothstep(beat.local / Math.max(0.3, beat.duration * 0.94));
        const from = player.handoffFrom;
        const previousX = player.x;
        const previousZ = player.z;
        player.x = from.x + (target.x - from.x) * k;
        player.z = from.z + (target.z - from.z) * k;
        const dx = player.x - previousX;
        const dz = player.z - previousZ;
        if (Math.hypot(dx, dz) > 0.0006) {
          player.facingAngle = Math.atan2(dx, dz);
          player.facing.set(Math.sin(player.facingAngle), 0, Math.cos(player.facingAngle));
        }
        const step = dt > 0 ? Math.hypot(dx, dz) / dt : 0;
        player.walkSpeed = step;
        player.root.position.set(player.x, 0, player.z);
        player.root.rotation.y = player.facingAngle;
        player.model.update(dt, {
          moving: step > 0.15,
          speed: Math.max(1.7, Math.min(4.2, step * 1.3)),
          x: player.x,
          z: player.z
        });
        continue;
      }
      player.facing.set(Math.sin(player.facingAngle), 0, Math.cos(player.facingAngle));
      player.root.position.set(player.x, 0, player.z);
      player.root.rotation.y = player.facingAngle;
      player.model.update(dt, { moving: false, speed: 0, x: player.x, z: player.z });
      // Na cerimônia ninguém fica girando a cabeça olhando a bola: o olhar vai
      // para a câmera/mastro, como na apresentação de verdade.
      player.model.lookAt?.({ x: player.x * 0.2, y: 1.65, z: player.z + 12 });
    }

    // Árbitros.
    for (const entry of ceremonyRefs) {
      const actor = entry.actor;
      if (moving) {
        const startAt = entry.main ? 0.0 : 0.3 + (entry.main ? 0 : 0.2);
        const path = entry.entrancePath || refereeWalkoutPath(0);
        const walk = smoothstep((beat.local - startAt) / Math.max(0.4, beat.duration - startAt - 0.7));
        const point = samplePath(path, walk);
        const previousX = actor.x;
        const previousZ = actor.z;
        actor.x = point.x;
        actor.z = point.z;
        const dx = actor.x - previousX;
        const dz = actor.z - previousZ;
        const speed = dt > 0 ? Math.hypot(dx, dz) / dt : 0;
        if (Math.hypot(dx, dz) > 0.001) {
          actor.facingAngle = Math.atan2(dx, dz);
          actor.facing.set(Math.sin(actor.facingAngle), 0, Math.cos(actor.facingAngle));
        }
        entry.model.root.position.set(actor.x, 0, actor.z);
        entry.model.root.rotation.y = actor.facingAngle;
        entry.model.update(dt, { speed: Math.max(1.8, Math.min(3.2, speed * 1.3)), moving: speed > 0.15, x: actor.x, z: actor.z });
      } else if (beat.id === 'anthem' || beat.id === 'handoff') {
        // Ordem na linha: assistente, principal (no meio), assistente.
        const lineupIndex = entry.main ? 1 : (ceremonyRefs.indexOf(entry) === 0 ? 0 : 2);
        const slot = refereeLineupSlot(lineupIndex);
        actor.x = slot.x;
        actor.z = slot.z;
        actor.vx = 0;
        actor.vz = 0;
        actor.facingAngle = 0;
        actor.facing.set(0, 0, 1);
        entry.model.root.position.set(actor.x, 0, actor.z);
        entry.model.root.rotation.y = actor.facingAngle;
        entry.model.update(dt, { speed: 0, moving: false, x: actor.x, z: actor.z });
      } else {
        actor.vx = 0;
        actor.vz = 0;
        entry.model.update(dt, { speed: 0, moving: false });
      }
      entry.model.lookAt?.({ x: actor.x * 0.2, y: 1.65, z: actor.z + 12 });
    }
  }

  /** Uma câmera só para as quatro cenas: curva contínua, sem corte. */
  function updateEntranceCamera(time) {
    const pose = prematchCameraPose(time, {
      home: teams.home.players,
      away: teams.away.players,
      referees: ceremonyRefs.map(entry => entry.actor),
      broadcast: (() => {
        const hero = controlled[userSide]?.active ? controlled[userSide] : null;
        const target = hero ? { x: hero.x, z: hero.z } : { x: 0, z: 0 };
        return broadcastCameraPose({ x: target.x, y: 0, z: target.z }, cameraSide, null);
      })(),
      focus: (() => {
        const list = allPlayers.filter(player => player.active);
        if (!list.length) return null;
        return {
          x: list.reduce((total, player) => total + player.x, 0) / list.length,
          z: list.reduce((total, player) => total + player.z, 0) / list.length
        };
      })()
    });
    if (!pose) return;
    const camera = engine.camera;
    camera.position.set(pose.position.x, pose.position.y, pose.position.z);
    cameraTarget.set(pose.target.x, pose.target.y, pose.target.z);
    camera.fov = pose.fov;
    camera.updateProjectionMatrix();
    camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z);
  }
  function updateEntrance(dt) {
    // Dois relógios, um resultado: o passo do motor (que mantém os modelos
    // sincronizados e é o que `world.tick` usa nos testes) e o relógio de parede.
    // Se a página for estrangulada (rAF a 1 Hz em segundo plano), o passo vira
    // uma cena de 176 s — então o relógio de parede puxa a cerimônia de volta.
    // Quando o motor avança mais rápido que o relógio real (testes), o passo manda.
    const now = globalThis.performance?.now?.() ?? Date.now();
    const wall = Math.max(0, (now - entrance.startedAt) / 1000) + (entrance.extraTime || 0);
    // Dois relógios, cada um no seu papel:
    //  · Página normal: quem manda é o de PAREDE — a cerimônia tem tempo de
    //    leitura e um aparelho lento não pode transformar 18,4 s em um minuto.
    //  · Captura/teste (`advanceEntrance(..., 'exact')`): o instante pedido manda.
    if (entrance.override !== undefined) {
      entrance.time = entrance.override;
      entrance.override = entrance.time + Math.max(0, dt);
    } else {
      entrance.time = Math.max(entrance.time, wall);
    }
    const beat = prematchBeatAt(entrance.time);
    entrance.beat = beat.index;
    entrance.progress = beat.progress;
    if (beat.index !== entrance.lastBeat) {
      entrance.lastBeat = beat.index;
      emit({ type: 'entrance-beat', beat: beat.id, index: beat.index, label: beat.label, caption: beat.caption, total: PREMATCH_TOTAL });
    }
    updateCeremonyActors(dt, beat);
    updateEntranceCamera(entrance.time);
    if (entrance.time >= PREMATCH_TOTAL) finishEntrance();
  }

  function update(dt) {
    // Com o jogo pausado (intervalo, menu de pausa) nada anda no campo.
    if (paused) return;
    stadiumMesh.update(dt);
    if(updatePenaltyRunup(dt))return;
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
      if ((phase.side !== userSide || (options.playerLockId&&ball.state.owner?.rosterId!==options.playerLockId)) && phase.timer > 1.15) {
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
      if (phase.name !== 'restart') {
        // A corrida de aproximação pode ter acabado de executar a cobrança.
      } else if (!phase.restart?.ready) {
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
      ball.update(dt, []);
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
          if (distance < 0.66) {
            const overlap = (0.66 - distance) * 0.5;
            const nx = distance>.001?dx/distance:1;
            const nz = distance>.001?dz/distance:0;
            a.x -= nx * overlap;
            a.z -= nz * overlap;
            b.x += nx * overlap;
            b.z += nz * overlap;
          }
        }
      }

      // Só a fase em jogo atualiza física, domínio e limites do campo.
      if (phase.name === 'play') {
        if(!updateRainbow(dt))ball.update(dt, allPlayers);
        handlePossession();
        if(phase.name==='play')handleBoundaries();
      }
    }

    updateConfrontation(dt);

    // Posse para o resumo.
    const owner = ball.state.owner;
    if (owner) possession[owner.side] += dt;

    // Sincroniza os modelos 3D e mantém o expulso visível enquanto sai do campo.
    updateDismissals(dt);
    const hero = controlled[userSide];
    const shadowCasters=selectShadowCasters(allPlayers,hero,ball.state.position,engine.graphics);
    for (const player of allPlayers) {
      player.root.position.set(player.x, 0, player.z);
      player.root.visible = player.active || Boolean(player.dismissal);
      // Sombras por orçamento: até seis próximos na Alta; elenco na Ultra.
      // Baixa/Média mantêm contato leve, sem passe de shadow map.
      player.model.setDynamicShadow?.(shadowCasters.has(player));
      player.model.update(dt, modelMovementState(player));
      player.model.lookAt(ball.state.position);
    }

    syncRestartBall();

    // Árbitro acompanha a jogada, mas sai do quadro da comemoração.
    if (phase.name !== 'goal') updateReferee(dt);

    // Marcador vermelho 2D acompanha o atleta controlado; bola parada ganha prévia.
    updateMarker(dt);
    updateSetPiecePreview();
    updatePenaltyAim();

    if (phase.name === 'goal') updateGoalCamera(dt);
    else if (refereeDecision) updateRefereeCamera(dt);
    // A cutscene de ajuste da bola tem prioridade inclusive na câmera Pro da
    // carreira: falta e pênalti mostram o cobrador ajeitando a bola de perto.
    else if(phase.name==='restart'&&phase.restart?.preparation){
      const p=phase.restart.taker,fx=p.facing.x,fz=p.facing.z;
      blendCameraPose(dt,{x:p.x-fx*4.8-fz*3,y:2.8,z:p.z-fz*4.8+fx*3},
        {x:p.x,y:.85,z:p.z},46,7);
    }
    else if (cameraMode === 'pro') updateTrainingCamera(dt);
    else if (phase.name === 'restart' && phase.restart?.ready
      && ['freekick', 'penalty', 'corner'].includes(phase.restart.type)) updateSetPieceCamera(dt);
    else if (shotCamera) updateSetPieceShotCamera(dt);
    else if (cameraMode === 'cinematic') updateCinematicCamera(dt);
    else if (cameraMode === 'manual' && manualCamera) {
      engine.camera.position.set(...manualCamera.position);
      engine.camera.lookAt(...manualCamera.target);
    } else updateCamera(dt);
    markerChevron.quaternion.copy(engine.camera.quaternion);
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
    if(ball.state.rainbow?.player===player&&ball.state.rainbow.time<.62){
      player.vx=player.vz=0;player.sprint=false;return;
    }
    const bursting = (player.burst ?? 0) > 0;
    if (bursting) player.burst = Math.max(0, player.burst - dt);
    const careerPace=options.playerLockId===player.rosterId?.toString()?(.85+Math.max(30,Math.min(95,player.pace))*.0022):1;
    const speed = ((input.sprint || bursting) ? HUMAN_SPRINT * (bursting ? 1.12 : 1) : HUMAN_SPEED)*careerPace;
    const magnitude = Math.hypot(input.moveX, input.moveZ);
    if (magnitude > 0.12) {
      const movement = stickWorldDirection();
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
    if (!player.gkDiving && !faceVelocity(player, dt, 11)) faceTowards(player, ball.state.position.x, ball.state.position.z, dt, 10);
  }

  function updateRainbow(dt) {
    const flight=ball.state.rainbow;
    if(!flight)return false;
    flight.time=Math.min(flight.profile.duration,flight.time+dt);
    const p=rainbowPoint(flight.time/flight.profile.duration,flight.profile);
    ball.state.position.set(flight.x+flight.fx*p.forward,p.height,flight.z+flight.fz*p.forward);
    ball.mesh.position.copy(ball.state.position);
    ball.mesh.rotation.z+=dt*8;
    ball.shadow.position.set(ball.state.position.x,.02,ball.state.position.z);
    if(flight.time>=flight.profile.duration){
      ball.state.rainbow=null;
      ball.state.velocity.set(flight.fx*2,0,flight.fz*2);
      ball.state.recovery={player:flight.player,radius:flight.profile.recoveryRadius,until:elapsedWorldTime+.65};
    }
    return true;
  }

  /** Quem está perto da bola assume o domínio. */
  function handlePossession() {
    if(ball.state.reception){const r=ball.state.reception;ball.state.reception=null;receiveBall(r.player,r.from,r.wasPass,r.offside);if(phase.name!=='play')return;}
    if (ball.state.owner) {
      if (!ball.state.owner.active) ball.state.owner = null;
      return;
    }
    // Durante a proteção de falta/pênalti a bola só rebate: ninguém a recolhe
    // como "bola solta" até o jogo voltar ao normal.
    if(ball.state.noAttachment>0)return;
    const position = ball.state.position;
    if (position.y > 2.1 || elapsedWorldTime<(ball.state.skillUntil||0)) return;
    // Contatos rápidos já são resolvidos por varredura em ball.update.
    // Aqui recolhemos apenas bolas próximas que ainda não cruzaram o corpo.
    const speed = Math.hypot(ball.state.velocity.x, ball.state.velocity.z);
    if (speed > 18) return;

    const human = controlled[userSide];
    const candidates = [];
    if (human?.active) candidates.push(human);
    for (const player of allPlayers) {
      if (!player.active || player === human) continue;
      candidates.push(player);
    }

    let best = null;
    let bestDistance = Infinity;
    for (const player of candidates) {
      if(player===ball.state.lastIntentionalTouch&&ball.state.flightTime<.2)continue;
      const distance = Math.hypot(player.x - position.x, player.z - position.z);
      // Primeiro toque no passe dirigido: não precisa esperar a bola quase parar.
      // Chutes/interceptações continuam com o limite anterior de domínio.
      const receiving=ball.state.passTarget===player&&ball.state.flightTime<2.4
        &&position.y<.8&&distance<.85;
      if(speed>8&&!receiving)continue;
      const recovery=ball.state.recovery;
      const radius=recovery?.player===player && elapsedWorldTime<recovery.until ? recovery.radius : 1;
      if (distance < radius && distance < bestDistance) {
        bestDistance = distance;
        best = player;
      }
    }
    if (best) {
      const from=ball.state.lastIntentionalTouch,wasPass=!!ball.state.passTarget,offside=ball.state.offside;
      ball.attachTo(best);ball.state.offside=null;ball.state.lastTouch=best;
      receiveBall(best,from,wasPass,offside);
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
          ball.state.goalPocket = 0;
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
    if (Number.isFinite(keeper.diveCooldown) && now - keeper.diveCooldown < 1.35) return false;
    const direction = dir >= 0 ? 1 : -1;
    keeper.diveCooldown = now;
    keeper.gkDiving = true;
    keeper.gkDiveAt = now;
    keeper.gkDiveUntil = now + 0.95;
    keeper.gkDiveDirection = direction;
    keeper.gkDiveStartZ = keeper.z;
    keeper.gkDiveFlightId = flightId;
    keeper.reach = 1.32;
    keeper.reachHeight = GOAL.height + 0.2;
    // Na impulsão o goleiro encara o campo (não a velocidade lateral de
    // reposicionamento). Assim o eixo local X é paralelo à linha do gol.
    keeper.facingAngle=attackSign(keeper.side)*Math.PI/2;
    keeper.root.rotation.y=keeper.facingAngle;
    keeper.facing.set(attackSign(keeper.side),0,0);
    // Mundo Z → eixo lateral local; goleiros defendem gols opostos.
    const localDirection=-attackSign(keeper.side)*direction;
    keeper.model.dive?.(localDirection);
    return true;
  }

  function updateKeeperReach(keeper) {
    const diving = Number.isFinite(keeper.gkDiveUntil) && elapsedWorldTime < keeper.gkDiveUntil;
    keeper.gkDiving = diving;
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
    const decision=keeper.penaltyDecision;
    if(decision?.flightId===ball.state.flightId){
      const lane=Math.abs(position.z)<.9?0:Math.sign(position.z);
      if(lane!==decision.lane)return false;
      return Math.abs(position.z-keeper.z)<1.65 && rng()<.72;
    }
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
      position = { x: taker.x - sign * 8.2, y: 4.8, z: taker.z };
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
        { x: shotCamera.taker.x - sign * 8.2, y: 4.8, z: shotCamera.taker.z },
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
    // Cutscene do árbitro: durante a conversa com o faltoso a transmissão
    // abre um plano fechado nos dois, de lado, em vez de seguir a bola.
    if (refereeDecision && (refereeDecision.stage === 'talk' || refereeDecision.stage === 'show')) {
      const subject = refereeDecision.offender || refereeDecision.victim;
      if (subject) {
        const mx = (referee.x + subject.x) * 0.5;
        const mz = (referee.z + subject.z) * 0.5;
        // Eixo perpendicular à linha árbitro↔jogador, para ver os dois de lado.
        let dx = subject.x - referee.x, dz = subject.z - referee.z;
        const len = Math.hypot(dx, dz) || 1;
        dx /= len; dz /= len;
        const px = -dz, pz = dx;
        blendCameraPose(dt,
          { x: mx + px * 4.6, y: 1.9, z: mz + pz * 4.6 },
          { x: mx, y: 1.25, z: mz },
          38,
          5.5
        );
        return;
      }
    }
    const position = ball.state.position;
    const pose = broadcastCameraPose(position, cameraSide, ball.state.velocity);
    const desiredX = pose.position.x;
    const desiredY = pose.position.y*cameraZoom;
    const desiredZ = pose.target.z+(pose.position.z-pose.target.z)*cameraZoom;
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
    resumeRender(){engine.start(update);},
    stop() {
      engine.stop();
    },
    dispose() {
      world.dispose?.();
      if(trainingCones.length){trainingCones[0].geometry.dispose();trainingCones[0].material.dispose();}
      trainingCones.forEach(cone=>engine.scene.remove(cone));
      engine.scene.remove(refereeModel.root);
      refereeModel.dispose?.();
      engine.scene.remove(markerRing, markerDisc, markerChevron, carrierRing, previewTrajectory, previewTarget);
      previewGeometry.dispose();
      previewTrajectory.material.dispose();
      previewTarget.geometry.dispose();
      previewTarget.material.dispose();
      for(const {flag} of offsideFlags)engine.scene.remove(flag);flagTexture.dispose();flagMaterial.dispose();
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
      engine.scene.remove(penaltyArrow);penaltyArrow.geometry.dispose();penaltyArrow.material.dispose();
      stadiumMesh.dispose();
      engine.dispose();
    },
    get controlled() {
      return controlled;
    }
  };
}
