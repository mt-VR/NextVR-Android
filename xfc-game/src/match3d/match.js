// O mundo da partida: monta o estádio, os dois times, a bola e o relógio;
// roda as regras (falta, cartão, escanteio, lateral, impedimento, pênalti,
// tiro de meta, intervalo, acréscimos e fim de jogo) e comanda a câmera.
//
// O módulo é agnóstico da interface: avisa o que aconteceu por `onEvent` e
// recebe os comandos do jogador por `world.command`.

import { createEngine, THREE } from './engine.js';
import { buildStadium } from './stadium.js';
import { createBall } from './ball.js';
import { createPlayer3D, lookFor } from './player.js';
import { createTeamAI } from './ai.js';
import { steerPlayer, faceTowards, playerSpeed } from './movement.js';
import { PITCH, GOAL, BALL, FORMATION_433 } from './constants.js';

const HUMAN_SPEED = 6.6;
const HUMAN_SPRINT = 8.4;

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
    userSide = 'home'
  } = options;

  const engine = createEngine(canvas);
  const stadium = buildStadium(engine.scene);
  const ball = createBall(engine.scene);

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
    restart: null,
    conceding: 'away'
  };

  const input = { moveX: 0, moveZ: 0, sprint: false };
  const controlled = { home: null, away: null };
  const cameraTarget = new THREE.Vector3(0, 0, 0);
  let cameraReady = false;
  // 'play' (transmissão) ou 'cinematic' (volta sobre o estádio).
  let cameraMode = 'cinematic';
  let cinematicAngle = 0;
  let manualCamera = null;

  // ------------------------------------------------------------- utilidades --

  const members = side => teams[side].players.filter(player => player.active);
  const opponentOf = side => (side === 'home' ? 'away' : 'home');
  const attackSign = side => (side === 'home' ? 1 : -1);
  const ownGoalX = side => (side === 'home' ? -PITCH.halfLength : PITCH.halfLength);
  const isUserControlled = player => player?.side === userSide && controlled[userSide] === player;

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
    onEvent(event);
  }

  function openSpace(player) {
    let closest = Infinity;
    for (const rival of members(opponentOf(player.side))) {
      closest = Math.min(closest, Math.hypot(rival.x - player.x, rival.z - player.z));
    }
    return Math.min(closest, 12);
  }

  function insidePenaltyArea(x, z, defendingSide) {
    const sign = attackSign(defendingSide);
    return sign * x > PITCH.halfLength - 16.5 && Math.abs(z) < 20.16;
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
      const pos = String(data.pos || '').toUpperCase();
      const list = byRole.get(pos);
      let slot = null;
      if (list && list.length) {
        slot = list.shift();
      } else {
        slot = slots.find(candidate => !candidate.taken) || slots[index];
      }
      slot.taken = true;
      return { data, index, slot, slotIndex: slots.indexOf(slot) };
    });
  }

  function buildTeam(team) {
    const lineup = team.info?.players || [];
    assignSlots(lineup).forEach(({ data, index, slot, slotIndex }) => {
      const role = slot.role;
      const isKeeper = role === 'GK';
      const look = lookFor(index + (team.side === 'away' ? 3 : 0));
      const model = createPlayer3D({
        kit: kitFor(team, team.kit, isKeeper),
        number: data.number || index + 1,
        isKeeper,
        skinTone: look.skinTone,
        hairColor: look.hairColor,
        // O retrato real do atleta vira o rosto do boneco.
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
        ovr: data.ovr || null,
        // O goleiro cobre mais espaço que um jogador de linha.
        reach: isKeeper ? 0.95 : 0.52,
        active: true,
        x: base.x * sign,
        z: base.z,
        vx: 0,
        vz: 0,
        facing: new THREE.Vector3(sign, 0, 0),
        facingAngle: sign > 0 ? Math.PI / 2 : -Math.PI / 2,
        sprint: false,
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

  /** Passe entre dois jogadores (com verificação de impedimento). */
  function kickBall(player, target, { power = 18, lob = false } = {}) {
    if (!target) return;
    const dx = target.x - player.x;
    const dz = target.z - player.z;
    const distance = Math.hypot(dx, dz) || 1;
    const direction = { x: dx / distance, z: dz / distance };
    const offside = isOffside(player, target);
    // A velocidade do passe acompanha a distância: passes curtos ficam no
    // pé, passes longos saem forte (sem virar um tiro de meta).
    const speed = lob
      ? Math.max(10, Math.min(20, distance * 0.7 + 5))
      : Math.max(6, Math.min(18, distance * 0.62 + 3.5 + power * 0.08));
    ball.kick(direction, speed, lob ? 0.42 : 0.16);
    ball.state.lastTouch = player;
    player.model.kick();
    emit({ type: 'pass', team: player.side, player, target });
    if (offside) {
      emit({ type: 'offside', team: opponentOf(player.side), player: target, minute: clock.minutes });
      setRestart('freekick', opponentOf(player.side), target.x, target.z);
    }
  }

  /** Impedimento: o recebedor está à frente da bola e do último defensor. */
  function isOffside(passer, target) {
    const sign = attackSign(passer.side);
    if (sign * (target.x - passer.x) < 1.5) return false;
    const rivals = members(opponentOf(passer.side)).filter(player => !player.isKeeper);
    let secondLast = -Infinity;
    for (const rival of rivals) {
      secondLast = Math.max(secondLast, sign * rival.x);
    }
    return sign * target.x > secondLast + 0.4;
  }

  /** Finalização. */
  function shootBall(player, { power = 22, spread = 0, target = null } = {}) {
    const sign = attackSign(player.side);
    const goalTarget = target || { x: sign * PITCH.halfLength, z: (rng() - 0.5) * 4 };
    const dx = goalTarget.x - player.x;
    const dz = goalTarget.z - player.z;
    const distance = Math.hypot(dx, dz) || 1;
    const angle = Math.atan2(dz, dx) + spread;
    ball.kick({ x: Math.cos(angle), z: Math.sin(angle) }, Math.max(14, power), 0.12 + rng() * 0.1);
    ball.state.lastTouch = player;
    player.model.kick();
    emit({ type: 'shot', team: player.side, player });
  }

  /** Desarme: tenta tomar a bola; se falhar, é falta. */
  function tackle(player) {
    const owner = ball.state.owner;
    if (!owner || owner.side === player.side) return;
    const distance = Math.hypot(owner.x - player.x, owner.z - player.z);
    if (distance > 2.4) return;
    // Portador em arrancada de drible resiste muito mais ao desarme.
    const resistance = (owner.burst ?? 0) > 0 ? 0.22 : 0.5;
    if (rng() < aiAccuracy * resistance) {
      ball.attachTo(player);
      ball.state.lastTouch = player;
      player.model.kick();
      emit({ type: 'tackle', team: player.side, player });
    } else if (rng() < 0.45) {
      // Desarme errado: às vezes é só um bote, às vezes é falta.
      commitFoul(player, owner);
    }
  }

  /** Falta: cartão, pênalti ou tiro livre. */
  function commitFoul(offender, victim) {
    // Só há falta com a bola em jogo (nada de pênalti em cima de tiro livre).
    if (phase.name !== 'play') return;
    const dangerous = Math.abs(victim.x) > PITCH.halfLength - 30;
    let card = 'none';
    if (dangerous ? rng() < 0.45 : rng() < 0.16) card = 'yellow';

    if (card === 'yellow') {
      teams[offender.side].cards[offender.id] = (teams[offender.side].cards[offender.id] || 0) + 1;
      if (teams[offender.side].cards[offender.id] >= 2) card = 'red';
    }

    emit({
      type: 'foul',
      team: offender.side,
      player: offender,
      victim,
      card,
      minute: clock.minutes
    });

    if (card === 'red') {
      offender.active = false;
      emit({ type: 'card', team: offender.side, player: offender, color: 'red', minute: clock.minutes });
      if (controlled[offender.side] === offender) controlled[offender.side] = null;
    } else if (card === 'yellow') {
      emit({ type: 'card', team: offender.side, player: offender, color: 'yellow', minute: clock.minutes });
    }

    const inBox = insidePenaltyArea(victim.x, victim.z, offender.side);
    if (inBox && card !== 'red') setRestart('penalty', victim.side, victim.x, victim.z);
    else setRestart('freekick', victim.side, victim.x, victim.z);
  }

  /** Prepara uma retomada de jogo. */
  function setRestart(type, side, x, z) {
    // Nada de retomadas depois do fim do jogo.
    if (phase.name === 'fulltime' || phase.name === 'halftime') return;
    phase.name = 'restart';
    phase.timer = 0;
    phase.restart = { type, side, x, z, taker: null, ready: false };
    emit({ type: 'restart', kind: type, team: side });
  }

  /** Coloca o cobrador em posição e a bola no ponto da retomada. */
  function setupRestart(restart) {
    const side = restart.side;
    const sign = attackSign(side);
    const candidates = members(side).filter(player => !player.isKeeper || restart.type === 'penalty');
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
      const sign = attackSign(side);
      const attackers = members(side)
        .filter(player => player !== taker && !player.isKeeper)
        // Os mais adiantados no ataque entram primeiro na área.
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
    }
    ball.state.position.set(placeX, BALL.radius, placeZ);
    ball.state.velocity.set(0, 0, 0);
    ball.attachTo(taker);
    ball.state.lastTouch = taker;
    if (side === userSide) controlled[userSide] = taker;
    restart.ready = true;
  }

  /** Executa a retomada de jogo (automática ou pelo jogador). */
  function playRestart(dt) {
    const restart = phase.restart;
    if (!restart || !restart.taker) return;
    phase.timer += dt;
    const taker = restart.taker;
    const humanTakes = taker.side === userSide && controlled[userSide] === taker;
    // O jogador humano decide a retomada; depois de alguns segundos o jogo
    // executa sozinho para a partida nunca travar.
    if (humanTakes && phase.timer < 4.5) return;
    if (phase.timer < 1.1) return;

    if (restart.type === 'penalty') {
      const sign = attackSign(taker.side);
      shootBall(taker, { power: 21, target: { x: sign * PITCH.halfLength, z: (rng() - 0.5) * 5 } });
    } else if (restart.type === 'throwin') {
      const mate = nearbyTeammateFor(taker, { min: 4, max: 14 }) || bestTeammateFor(taker);
      if (mate) kickBall(taker, mate, { power: 12 });
    } else if (restart.type === 'goalkick') {
      const mate = nearbyTeammateFor(taker, { min: 10, max: 26 }) || bestTeammateFor(taker, true);
      if (mate) kickBall(taker, mate, { power: 16 });
    } else if (restart.type === 'corner') {
      const sign = attackSign(taker.side);
      const box = { x: sign * (PITCH.halfLength - 10), z: (rng() - 0.5) * 8 };
      const mate = nearbyTeammateFor(taker, { min: 6, max: 34 })
        || bestTeammateFor(taker, true);
      if (mate) kickBall(taker, mate, { lob: true, power: 16 });
      else kickBall(taker, box, { lob: true, power: 16 });
    } else {
      const sign = attackSign(taker.side);
      const distanceToGoal = Math.hypot(sign * PITCH.halfLength - taker.x, taker.z);
      if (distanceToGoal < 20) shootBall(taker, { power: 20 });
      else {
        const mate = nearbyTeammateFor(taker, { min: 6, max: 22 }) || bestTeammateFor(taker);
        if (mate) kickBall(taker, mate, { power: 14 });
      }
    }
    phase.name = 'play';
    phase.restart = null;
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
    const mates = members(player.side).filter(mate => mate !== player);
    let best = null;
    let bestScore = -Infinity;
    const sign = attackSign(player.side);
    for (const mate of mates) {
      const forwardness = sign * (mate.x - player.x);
      const open = openSpace(mate);
      const distance = Math.hypot(mate.x - player.x, mate.z - player.z);
      if (distance > 45) continue;
      const score = (forward ? forwardness * 1.5 : forwardness * 0.8) + open * 1.5 - distance * 0.05;
      if (score > bestScore) {
        bestScore = score;
        best = mate;
      }
    }
    return best;
  }

  /** Saída de bola. */
  function kickoff(side) {
    phase.name = 'kickoff';
    phase.timer = 0;
    phase.restart = null;
    const sign = attackSign(side);
    const team = teams[side];
    const kicker = team.players.find(player => player.role === 'ST') || team.players[9];
    const partners = team.players.filter(player => player !== kicker);
    partners.forEach(player => {
      const base = FORMATION_433[player.index] || FORMATION_433[1];
      player.x = base.x * sign;
      player.z = base.z;
      player.vx = 0;
      player.vz = 0;
    });
    kicker.x = -0.6 * sign;
    kicker.z = 0.4;
    kicker.vx = 0;
    kicker.vz = 0;
    ball.state.position.set(0, BALL.radius, 0);
    ball.state.velocity.set(0, 0, 0);
    ball.attachTo(kicker);
    ball.state.lastTouch = kicker;
    if (side === userSide) controlled[userSide] = kicker;
    emit({ type: 'kickoff', team: side });
  }

  /** Gol! */
  function scoreGoal(side, scorer) {
    teams[side].score += 1;
    phase.name = 'goal';
    phase.timer = 0;
    phase.conceding = opponentOf(side);
    ball.state.velocity.set(0, 0, 0);
    ball.state.owner = null;
    emit({
      type: 'goal',
      team: side,
      scorer,
      score: [teams.home.score, teams.away.score],
      minute: clock.minutes
    });
  }

  // Árbitro: boneco de preto com camisa acentuada em amarelo. Aparece no
  // apito inicial e no apito final — como na transmissão.
  const refereeModel = createPlayer3D({
    kit: { primary: '#161a20', secondary: '#161a20', accent: '#f5c518', pattern: 'solid' },
    number: 1,
    isKeeper: false,
    skinTone: '#c98d5f',
    hairColor: '#1f1712'
  });
  refereeModel.root.visible = false;
  engine.scene.add(refereeModel.root);

  function updateReferee() {
    const show = phase.name === 'kickoff' || phase.name === 'fulltime';
    refereeModel.root.visible = show;
    if (!show) return;
    if (phase.name === 'kickoff') refereeModel.root.position.set(1.9, 0, 0.4);
    else refereeModel.root.position.set(-1.6, 0, 0.4);
    refereeModel.update(0.016, { speed: 0, moving: false });
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
    /** Há comando do jogador? (se não, a IA cuida do jogador controlado) */
    hasInput() {
      return Math.hypot(input.moveX, input.moveZ) > 0.12;
    },
    kickBall,
    shootBall,
    tackle,
    isUserControlled,

    /** Comando do jogador (vindo dos controles ou do teclado). */
    command(name) {
      const player = controlled[userSide];
      if (!player || !player.active) return;
      const owner = ball.state.owner;
      const sign = attackSign(userSide);

      if (name === 'pass') {
        if (owner === player) {
          const mate = bestTeammateFor(player);
          if (mate) kickBall(player, mate, { power: 19 });
        } else {
          runToBall(player);
        }
      } else if (name === 'shoot') {
        if (owner === player) {
          const target = { x: sign * PITCH.halfLength, z: input.moveX * sign * 6 };
          shootBall(player, { power: 24, target });
        } else {
          runToBall(player);
        }
      } else if (name === 'lob') {
        if (owner === player) {
          const mate = bestTeammateFor(player, true);
          if (mate) kickBall(player, mate, { lob: true, power: 25 });
        } else {
          runToBall(player);
        }
      } else if (name === 'tackle') {
        if (owner && owner.side !== userSide) tackle(player);
        else runToBall(player);
      } else if (name === 'dribble') {
        // Arrancada: 0,75s de velocidade extra e muito mais difícil de ser
        // desarmado — o clássico "passa pelo marcador".
        player.burst = Math.max(player.burst ?? 0, 0.75);
      } else if (name === 'switch') {
        switchPlayer();
      }
    },

    /** Troca o jogador controlado para o mais próximo da bola. */
    switchPlayer() {
      const list = members(userSide).filter(player => player !== controlled[userSide]);
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
      if (best) controlled[userSide] = best;
    },

    /** Alterna entre a câmera de transmissão e a cinematográfica. */
    setCameraMode(mode) {
      cameraMode = mode;
      if (mode === 'play') cameraReady = false;
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
        phase: phase.name
      };
    }
  };

  const ais = {
    home: createTeamAI({ side: 'home', world }),
    away: createTeamAI({ side: 'away', world })
  };

  function runToBall(player) {
    const target = ball.state.position;
    steerPlayer(player, target.x, target.z, 0.016, HUMAN_SPEED);
  }

  function formatClock() {
    const limit = clock.half === 1 ? 45 + clock.added : 90 + clock.added;
    const value = Math.min(limit, clock.minutes);
    const minutes = Math.floor(value);
    const seconds = Math.floor((value % 1) * 60);
    return `${minutes}'${String(seconds).padStart(2, '0')}`;
  }

  // Marcador azul de seleção: um anel luminoso sob o atleta controlado,
  // como no EA Sports FC Mobile.
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
  markerRing.visible = markerDisc.visible = false;
  engine.scene.add(markerRing, markerDisc);
  let markerPulse = 0;

  function updateMarker(dt) {
    const player = controlled[userSide];
    if (!player || !player.active) {
      markerRing.visible = markerDisc.visible = false;
      return;
    }
    markerPulse += dt * 5.2;
    const pulse = 1 + Math.sin(markerPulse) * 0.07;
    markerRing.scale.setScalar(pulse);
    markerDisc.scale.setScalar(pulse);
    markerRing.position.set(player.x, 0.035, player.z);
    markerDisc.position.set(player.x, 0.032, player.z);
    markerRing.visible = markerDisc.visible = true;
  }

  // ----------------------------------------------------------------- update --

  function update(dt) {
    // Com o jogo pausado (intervalo, menu de pausa) nada anda no campo.
    if (paused) return;
    // Relógio.
    if (phase.name === 'play') {
      // O relógio corre em minutos de jogo: o fator é por minuto real.
      clock.minutes += (dt / 60) * clock.timeScale;
      if (clock.half === 1 && clock.minutes >= 45 + clock.added) {
        clock.added = 2;
        phase.name = 'halftime';
        phase.timer = 0;
        emit({ type: 'halftime', score: [teams.home.score, teams.away.score], stats: snapshotStats() });
      } else if (clock.half === 2 && clock.minutes >= 90 + clock.added) {
        clock.added = 4;
        phase.name = 'fulltime';
        phase.timer = 0;
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

    // Fases.
    if (phase.name === 'kickoff') {
      phase.timer += dt;
      const kicker = ball.state.owner;
      if (phase.timer > 1.6) {
        phase.name = 'play';
        phase.timer = 0;
        if (kicker) {
          const mate = nearbyTeammateFor(kicker, { min: 7, max: 18 })
            || bestTeammateFor(kicker, true)
            || bestTeammateFor(kicker);
          if (mate) kickBall(kicker, mate, { power: 14 });
          else ball.state.owner = null;
        }
      }
    } else if (phase.name === 'restart') {
      if (!phase.restart?.ready) setupRestart(phase.restart);
      else playRestart(dt);
    } else if (phase.name === 'goal') {
      phase.timer += dt;
      if (phase.timer > 3.2) kickoff(phase.conceding);
    }

    // Comandos do jogador.
    updateHuman(dt);

    // IA dos dois times.
    ais.home.update(dt);
    ais.away.update(dt);

    // Física e domínio de bola.
    ball.update(dt, allPlayers);
    handlePossession();
    handleBoundaries();

    // Posse para o resumo.
    const owner = ball.state.owner;
    if (owner) possession[owner.side] += dt;

    // Sincroniza os modelos 3D.
    for (const player of allPlayers) {
      player.root.position.set(player.x, 0, player.z);
      player.root.visible = player.active;
      const speed = playerSpeed(player);
      player.model.update(dt, { speed, moving: speed > 0.25 });
      player.model.lookAt(ball.state.position);
    }

    // Árbitro em cena nas retomadas importantes.
    updateReferee();

    // Marcador azul acompanha o atleta controlado.
    updateMarker(dt);

    if (cameraMode === 'cinematic') updateCinematicCamera(dt);
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

  /** O jogador controlado responde ao analógico. */
  function updateHuman(dt) {
    const player = controlled[userSide];
    if (!player || !player.active) return;
    const bursting = (player.burst ?? 0) > 0;
    if (bursting) player.burst = Math.max(0, (player.burst ?? 0) - dt);
    const speed = (input.sprint || bursting) ? HUMAN_SPRINT * (bursting ? 1.12 : 1) : HUMAN_SPEED;
    const sign = attackSign(userSide);
    const magnitude = Math.hypot(input.moveX, input.moveZ);
    if (magnitude > 0.12) {
      // O analógico é relativo ao ataque: "para cima" vai para o gol adversário.
      const worldDx = input.moveZ * sign;
      const worldDz = input.moveX * sign;
      const targetX = player.x + worldDx * 6;
      const targetZ = player.z + worldDz * 6;
      steerPlayer(player, targetX, targetZ, dt, speed, { arrive: 0.2, turn: 14 });
    }
    // Sem comando do jogador, a IA comanda este atleta (ele não trava).
    player.sprint = input.sprint || (player.sprint && !world.hasInput());
    faceTowards(player, ball.state.position.x, ball.state.position.z, dt, 10);
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
          ball.state.position.x = side * (PITCH.halfLength - 0.5);
          ball.state.velocity.set(-side * 5, 4.5, Math.sign(position.z || 1) * 6);
          ball.state.owner = null;
          emit({ type: 'save', team: keeper.side, player: keeper, minute: clock.minutes });
        } else {
          scoreGoal(scoringSide, touch);
        }
        return;
      }
      if (touchSide === scoringSide) {
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

  /** O goleiro alcança a bola? */
  function keeperSaves(keeper, position) {
    const reach = 2.3;
    const distance = Math.abs(position.z - keeper.z);
    if (distance > reach) return false;
    const chance = 0.3 + 0.35 * (1 - distance / reach);
    return rng() < chance;
  }

  /**
   * Câmera de transmissão aérea inclinada, no estilo EA Sports FC Mobile:
   * vista lateral alta do campo (lado maior), objetiva longa que abraça
   * grande parte do gramado, acompanhando a bola com suavidade.
   */
  function updateCamera(dt) {
    const position = ball.state.position;
    const desiredX = Math.max(-34, Math.min(34, position.x * 0.72));
    const desiredZ = 36.2;
    const desiredY = 25.5 + Math.min(2.5, Math.abs(position.x) * 0.03);

    const camera = engine.camera;
    if (!cameraReady) {
      camera.position.set(desiredX, desiredY, desiredZ);
      cameraTarget.set(position.x, 0, 0);
      cameraReady = true;
    }
    const smoothing = 1 - Math.pow(0.0016, dt);
    camera.position.x += (desiredX - camera.position.x) * smoothing;
    camera.position.y += (desiredY - camera.position.y) * smoothing;
    camera.position.z += (desiredZ - camera.position.z) * smoothing;

    cameraTarget.x += (Math.max(-40, Math.min(40, position.x * 0.82)) - cameraTarget.x) * smoothing;
    cameraTarget.z += (position.z * 0.35 - cameraTarget.z) * smoothing;
    camera.lookAt(cameraTarget.x, 0, cameraTarget.z);
  }

  function snapshotStats() {
    const total = possession.home + possession.away;
    return {
      home: { ...stats.home, possession: total ? Math.round((possession.home / total) * 100) : 50 },
      away: { ...stats.away, possession: total ? Math.round((possession.away / total) * 100) : 50 }
    };
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
      engine.scene.remove(markerRing, markerDisc);
      markerRing.geometry.dispose();
      markerRing.material.dispose();
      markerDisc.geometry.dispose();
      markerDisc.material.dispose();
      engine.stop();
      for (const player of allPlayers) player.model.dispose();
      ball.dispose();
      stadium.dispose();
      engine.dispose();
    },
    get controlled() {
      return controlled;
    }
  };
}
