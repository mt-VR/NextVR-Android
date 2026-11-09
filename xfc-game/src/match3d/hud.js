// Interface durante a partida, no estilo das transmissões do FC Mobile/eFootball:
//
//   - placar compacto no canto superior esquerdo (escudo, sigla, gols e relógio);
//   - cartão do jogador controlado no canto inferior esquerdo (número, nome,
//     OVR e condição);
//   - radar tático no centro inferior;
//   - etiqueta com o nome sobre a cabeça do atleta controlado;
//   - aviso central de eventos (gol, cartão, intervalo).

import { el } from '../ui/dom.js';
import { flagSvg } from '../ui/flags.js';
import { PITCH } from './constants.js';
import { strikeFromImpact } from './set-pieces.js';

const TEAM_ABBR = {
  'FC Barcelona': 'BAR',
  'Real Madrid': 'RMA'
};

/** Sigla de três letras do clube para o placar de transmissão. */
function abbreviationOf(team) {
  if (!team) return '???';
  if (TEAM_ABBR[team.name]) return TEAM_ABBR[team.name];
  const clean = String(team.name).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z]/g, '');
  return clean.slice(0, 3).toUpperCase() || '???';
}

function teamMark(team) {
  if (team?.crest?.startsWith('assets/')) {
    return el('img', { class: 'hud__crest', src: team.crest, alt: `Escudo do ${team.name}` });
  }
  return el('span', { class: 'hud__crest hud__crest--flag', 'aria-label': `Bandeira de ${team?.name || 'seleção'}` },
    flagSvg(team?.flagCode || 'br')
  );
}

export function createHud({ root, home, away, userSide = 'home', onSetPieceChange = () => {} }) {
  const homeCrest = teamMark(home);
  const awayCrest = teamMark(away);
  const homeScore = el('b', { class: 'hud__score', text: '0' });
  const awayScore = el('b', { class: 'hud__score', text: '0' });
  const clock = el('span', { class: 'hud__clock', text: "0'00" });
  const halfLabel = el('span', { class: 'hud__half', text: '1º TEMPO' });
  // Barra de posse: mandante preenche a partir da esquerda, visitante o resto.
  const possHomePct = el('b', { class: 'hud__poss-pct', text: '50%' });
  const possFill = el('i', { class: 'hud__poss-fill' });
  const possTrack = el('div', { class: 'hud__poss-track' }, possFill);
  const possAwayPct = el('b', { class: 'hud__poss-pct hud__poss-pct--away', text: '50%' });
  const possessionBar = el('div', { class: 'hud__poss', role: 'img', 'aria-label': 'Posse de bola' },
    possHomePct,
    possTrack,
    possAwayPct
  );
  const homeYellowCards = el('b', { text: '0' });
  const homeRedCards = el('b', { text: '0' });
  const awayYellowCards = el('b', { text: '0' });
  const awayRedCards = el('b', { text: '0' });
  const teamCards = (team, yellow, red, side) => el('span', { class: `hud__cards-team hud__cards-team--${side}` },
    el('strong', { text: abbreviationOf(team) }),
    el('i', { class: 'hud__card-chip hud__card-chip--yellow', 'aria-label': 'Amarelos' }), yellow,
    el('i', { class: 'hud__card-chip hud__card-chip--red', 'aria-label': 'Vermelhos' }), red
  );
  const discipline = el('div', { class: 'hud__cards', 'aria-label': 'Cartões da partida' },
    teamCards(home, homeYellowCards, homeRedCards, 'home'),
    teamCards(away, awayYellowCards, awayRedCards, 'away')
  );

  // Placar estilo transmissão: SIGLA gols – gols SIGLA, com o relógio embaixo.
  const scoreboard = el('div', { class: 'hud__scoreboard' },
    el('div', { class: 'hud__sc-main' },
      homeCrest,
      el('span', { class: 'hud__team', text: abbreviationOf(home) }),
      homeScore,
      el('span', { class: 'hud__dash', text: '–' }),
      awayScore,
      el('span', { class: 'hud__team', text: abbreviationOf(away) }),
      awayCrest
    ),
    el('div', { class: 'hud__sc-foot' },
      el('span', { class: 'hud__live', text: 'AO VIVO' }),
      clock,
      halfLabel
    ),
    possessionBar,
    discipline,
    el('div', { class: 'hud__sc-bar' })
  );

  // Cartão do jogador controlado (número, nome, OVR e condição).
  // Adversário mais próximo da bola (o segundo nome dos prints).
  // Classes próprias: o cartão do atleta controlado já usa .hud__player-*.
  const foeNumber = el('b', { class: 'hud__foe-no', text: '—' });
  const foeName = el('span', { class: 'hud__foe-name', text: '—' });
  const foeOvr = el('b', { text: '—' });
  const foeBarFill = el('i');
  const foeChip = el('div', { class: 'hud__foe' },
    el('div', { class: 'hud__foe-meta' },
      foeName,
      el('div', { class: 'hud__foe-sub' },
        el('span', { class: 'hud__foe-ovr' }, foeOvr, el('em', { text: 'OVR' })),
        el('span', { class: 'hud__foe-bar' }, foeBarFill)
      )
    ),
    foeNumber
  );

  const chipNumber = el('b', { class: 'hud__player-no', text: '10' });
  const chipName = el('span', { class: 'hud__player-name', text: 'ATLETA' });
  const chipOvr = el('b', { text: '—' });
  const chipBarFill = el('i');
  const playerChip = el('div', { class: 'hud__player' },
    chipNumber,
    el('div', { class: 'hud__player-meta' },
      chipName,
      el('div', { class: 'hud__player-sub' },
        el('span', { class: 'hud__player-ovr' }, chipOvr, el('em', { text: 'OVR' })),
        el('span', { class: 'hud__player-bar' }, chipBarFill)
      )
    )
  );

  const tagName = el('span', { class: 'hud__tag-name', text: '' });
  const tag = el('div', { class: 'hud__tag' },
    el('span', { class: 'hud__tag-bar' }),
    tagName
  );

  // Etiquetas de nome sobre a cabeça de TODOS os jogadores (não só o controlado).
  const nameTagsLayer = el('div', { class: 'hud__tags-layer' });

  const radarCanvas = el('canvas', { class: 'hud__radar', width: 208, height: 132 });
  const radar = el('div', { class: 'hud__radar-wrap' }, radarCanvas);
  const feed = el('div', { class: 'hud__feed' });
  const banner = el('div', { class: 'hud__banner' });

  const setPieceState = { aim: 0, power: 0.72, curve: 0, lift: 0.15, impactX: 0, impactY: 0, kind: 'placed' };
  const setPieceTitle = el('b', { class: 'hud__setpiece-title', text: 'BOLA PARADA' });
  const setPieceChanceLabel = el('span', { class: 'hud__setpiece-chance-label', text: 'CHANCE DE GOL' });
  const setPieceChance = el('b', { class: 'hud__setpiece-chance', text: '—%' });
  const setPiecePrecision = el('b', { class: 'hud__setpiece-precision', text: '—%' });
  const setPiecePrecisionBar = el('i', { class: 'hud__setpiece-precision-fill' });
  const setPieceDistance = el('span', { class: 'hud__setpiece-distance', text: '— m' });
  const setPieceWall = el('span', { class: 'hud__setpiece-wall', text: '' });
  const setPieceAimValue = el('b', { text: 'CENTRO' });
  const setPiecePowerValue = el('b', { text: '72%' });
  const setPieceCurveValue = el('b', { text: '0% —' });
  const setPieceImpactCursor = el('i', { class: 'hud__setpiece-impact-cursor', 'aria-hidden': 'true' });
  const setPieceImpactReadout = el('b', {
    class: 'hud__setpiece-impact-readout',
    id: 'hud-setpiece-impact-readout',
    'aria-live': 'polite',
    text: 'RETO · MEIA ALTURA'
  });
  let impactPointerId = null;
  const setPieceImpactPad = el('div', {
    class: 'hud__setpiece-impact-pad',
    role: 'group',
    tabindex: '0',
    'aria-label': 'Ponto de contato na bola. Arraste o quadrado ou use as setas.',
    'aria-describedby': 'hud-setpiece-impact-readout',
    onPointerDown: event => {
      if (event.button !== undefined && event.button !== 0) return;
      impactPointerId = event.pointerId;
      event.currentTarget.setPointerCapture?.(event.pointerId);
      changeImpactFromPointer(event);
      event.preventDefault();
    },
    onPointerMove: event => {
      if (impactPointerId === event.pointerId) changeImpactFromPointer(event);
    },
    onPointerUp: event => {
      if (impactPointerId !== event.pointerId) return;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
      impactPointerId = null;
    },
    onPointerCancel: () => { impactPointerId = null; },
    onKeyDown: event => {
      const step = event.shiftKey ? 0.25 : 0.1;
      let x = setPieceState.impactX;
      let y = setPieceState.impactY;
      if (event.key === 'ArrowLeft') x -= step;
      else if (event.key === 'ArrowRight') x += step;
      else if (event.key === 'ArrowUp') y -= step;
      else if (event.key === 'ArrowDown') y += step;
      else return;
      event.preventDefault();
      event.stopPropagation();
      setImpactPoint(x, y);
    }
  },
    el('span', { class: 'hud__setpiece-impact-ball', 'aria-hidden': 'true' },
      el('i', { class: 'hud__setpiece-impact-seam' })
    ),
    el('i', { class: 'hud__setpiece-impact-crosshair hud__setpiece-impact-crosshair--horizontal', 'aria-hidden': 'true' }),
    el('i', { class: 'hud__setpiece-impact-crosshair hud__setpiece-impact-crosshair--vertical', 'aria-hidden': 'true' }),
    setPieceImpactCursor
  );
  const setPieceAim = el('input', {
    class: 'hud__setpiece-range hud__setpiece-range--aim',
    type: 'range', min: '-100', max: '100', step: '1', value: '0',
    'aria-label': 'Direção da cobrança',
    onInput: event => {
      setPieceState.aim = Number(event.currentTarget.value) / 100;
      setPieceAimValue.textContent = setPieceState.aim === 0
        ? 'CENTRO' : setPieceState.aim < 0 ? 'ESQUERDA' : 'DIREITA';
      onSetPieceChange({ ...setPieceState });
    }
  });
  const setPiecePower = el('input', {
    class: 'hud__setpiece-range hud__setpiece-range--power',
    type: 'range', min: '30', max: '100', step: '1', value: '72',
    'aria-label': 'Força da cobrança',
    onInput: event => {
      setPieceState.power = Number(event.currentTarget.value) / 100;
      setPiecePowerValue.textContent = `${event.currentTarget.value}%`;
      onSetPieceChange({ ...setPieceState });
    }
  });
  const setPieceCurve = el('input', {
    class: 'hud__setpiece-range hud__setpiece-range--curve',
    type: 'range', min: '-100', max: '100', step: '1', value: '0',
    'aria-label': 'Curva da bola',
    onInput: event => {
      setImpactPoint(Number(event.currentTarget.value) / 100, setPieceState.impactY);
    }
  });
  function impactDescription() {
    const curve = setPieceState.impactX < -0.08 ? 'EFEITO À ESQUERDA'
      : setPieceState.impactX > 0.08 ? 'EFEITO À DIREITA' : 'RETO';
    const height = setPieceState.impactY < -0.36 ? 'RASTEIRO'
      : setPieceState.impactY > 0.36 ? 'ALTO' : 'MEIA ALTURA';
    return `${curve} · ${height}`;
  }
  function updateImpactPresentation() {
    setPieceImpactCursor.style.left = `${50 + setPieceState.impactX * 35}%`;
    setPieceImpactCursor.style.top = `${50 + setPieceState.impactY * 35}%`;
    setPieceImpactReadout.textContent = impactDescription();
    setPieceCurve.value = String(Math.round(setPieceState.curve * 100));
    setPieceCurveValue.textContent = `${Math.round(Math.abs(setPieceState.curve) * 100)}% ${setPieceState.curve < 0 ? '←' : setPieceState.curve > 0 ? '→' : '—'}`;
  }
  function setImpactPoint(x, y, notify = true) {
    const impact = strikeFromImpact({ x, y });
    Object.assign(setPieceState, impact);
    updateImpactPresentation();
    if (notify) onSetPieceChange({ ...setPieceState });
  }
  function changeImpactFromPointer(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / Math.max(1, bounds.width)) * 2 - 1;
    const y = ((event.clientY - bounds.top) / Math.max(1, bounds.height)) * 2 - 1;
    setImpactPoint(x, y);
  }
  const setPieceKinds = ['placed', 'power', 'curved'].map((kind, index) => el('button', {
    class: `hud__setpiece-kind${kind === 'placed' ? ' is-selected' : ''}`,
    type: 'button',
    dataset: { kind },
    'aria-pressed': kind === 'placed' ? 'true' : 'false',
    onClick: () => {
      setPieceState.kind = kind;
      for (const button of setPieceKinds) {
        const selected = button.dataset.kind === kind;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      }
      onSetPieceChange({ ...setPieceState });
    }
  }, ['COLOCADA', 'FORTE', 'CURVADA'][index]));
  const setPiecePanel = el('section', { class: 'hud__setpiece', 'aria-label': 'Ajustes de bola parada' },
    el('div', { class: 'hud__setpiece-head' },
      el('div', { class: 'hud__setpiece-heading' },
        el('span', { text: 'XFC · SET PIECE' }),
        setPieceTitle
      ),
      el('div', { class: 'hud__setpiece-chance-box' }, setPieceChanceLabel, setPieceChance)
    ),
    el('div', { class: 'hud__setpiece-meta' }, setPieceDistance, setPieceWall),
    el('div', { class: 'hud__setpiece-precision-row' },
      el('span', { text: 'PRECISÃO' }),
      el('span', { class: 'hud__setpiece-precision-meter' }, setPiecePrecisionBar),
      setPiecePrecision
    ),
    el('div', { class: 'hud__setpiece-kinds', role: 'group', 'aria-label': 'Técnica de cobrança' }, setPieceKinds),
    el('div', { class: 'hud__setpiece-impact-row' },
      el('div', { class: 'hud__setpiece-impact-stage' },
        setPieceImpactPad,
        el('small', { class: 'hud__setpiece-impact-height hud__setpiece-impact-height--top', text: 'BAIXA' }),
        el('small', { class: 'hud__setpiece-impact-height hud__setpiece-impact-height--bottom', text: 'ALTA' })
      ),
      el('div', { class: 'hud__setpiece-impact-copy' },
        el('span', { text: 'PONTO DE CONTATO' }),
        setPieceImpactReadout,
        el('small', { text: 'Lados dão efeito; toque embaixo da bola para levantar a trajetória.' })
      )
    ),
    el('label', { class: 'hud__setpiece-control' },
      el('span', { text: 'MIRA' }), setPieceAim, setPieceAimValue),
    el('label', { class: 'hud__setpiece-control' },
      el('span', { text: 'FORÇA' }), setPiecePower, setPiecePowerValue),
    el('label', { class: 'hud__setpiece-control' },
      el('span', { text: 'CURVA' }), setPieceCurve, setPieceCurveValue),
    el('small', { class: 'hud__setpiece-hint', text: 'Lados dão curva; embaixo levanta a trajetória. A linha no campo é a prévia.' })
  );

  const node = el('div', { class: 'hud' },
    scoreboard,
    playerChip,
    foeChip,
    tag,
    nameTagsLayer,
    feed,
    radar,
    banner,
    setPiecePanel
  );
  root.appendChild(node);

  const context = radarCanvas.getContext('2d');
  let lastChipId = null;
  let lastFoeId = null;
  const nameTagEls = new Map(); // player.id → { el, x, y }

  function drawRadar(players, ball, controlled) {
    const width = radarCanvas.width;
    const height = radarCanvas.height;
    const padding = 6;
    const scaleX = (width - padding * 2) / PITCH.length;
    const scaleZ = (height - padding * 2) / PITCH.width;
    const toX = x => padding + (x + PITCH.halfLength) * scaleX;
    const toZ = z => padding + (z + PITCH.halfWidth) * scaleZ;

    context.clearRect(0, 0, width, height);
    context.fillStyle = 'rgba(5,28,21,0.78)';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'rgba(255,255,255,0.34)';
    context.lineWidth = 1;
    context.strokeRect(padding, padding, width - padding * 2, height - padding * 2);
    context.beginPath();
    context.moveTo(width / 2, padding);
    context.lineTo(width / 2, height - padding);
    context.stroke();
    context.beginPath();
    context.arc(width / 2, height / 2, 9, 0, Math.PI * 2);
    context.stroke();

    for (const player of players || []) {
      if (!player.active) continue;
      const isControlled = controlled && player === controlled;
      const cx = toX(player.x);
      const cz = toZ(player.z);
      if (isControlled) {
        // O atleta controlado ganha um anel verde, como no FC Mobile.
        context.strokeStyle = '#2ef0a8';
        context.lineWidth = 1.8;
        context.beginPath();
        context.arc(cx, cz, 5.5, 0, Math.PI * 2);
        context.stroke();
        context.fillStyle = '#2ef0a8';
        context.beginPath();
        context.arc(cx, cz, 2.6, 0, Math.PI * 2);
        context.fill();
        continue;
      }
      // Adversários são triângulos (como nos prints de referência);
      // goleiros em círculos dourados.
      context.fillStyle = player.isKeeper ? '#ffd24a' : player.side === 'home' ? '#2ef0a8' : '#3fd7ff';
      context.beginPath();
      if (player.isKeeper) {
        context.arc(cx, cz, 3.2, 0, Math.PI * 2);
      } else if (player.side === 'home') {
        // Home: quadrado (diferenciação visual)
        context.rect(cx - 2.8, cz - 2.8, 5.6, 5.6);
      } else {
        // Away: losango
        context.moveTo(cx, cz - 3.4);
        context.lineTo(cx + 3, cz);
        context.lineTo(cx, cz + 3.4);
        context.lineTo(cx - 3, cz);
      }
      context.closePath();
      context.fill();
    }
    if (ball) {
      // Bola em amarelo para destoar do verde/azul dos times.
      context.fillStyle = '#ffd84a';
      context.beginPath();
      context.arc(toX(ball.x), toZ(ball.z), 2.2, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = 'rgba(0,0,0,0.35)';
      context.lineWidth = 0.8;
      context.stroke();
    }
  }

  function paintFoe(foe) {
    if (!foe) return;
    const id = `${foe.side}-${foe.number}-${foe.name}`;
    if (id === lastFoeId) return;
    lastFoeId = id;
    foeNumber.textContent = String(foe.number);
    foeName.textContent = String(foe.name).toUpperCase();
    const ovr = foe.ovr || 0;
    foeOvr.textContent = ovr ? String(ovr) : '—';
    foeBarFill.style.width = `${Math.min(100, Math.max(6, (ovr / 99) * 100))}%`;
  }

  function nearestOpponent(players, ball, controlledPlayer) {
    if (!ball) return null;
    let best = null;
    let bestDistance = Infinity;
    for (const player of players || []) {
      if (!player.active) continue;
      if (controlledPlayer && player.side === controlledPlayer.side) continue;
      const distance = Math.hypot(player.x - ball.x, player.z - ball.z);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = player;
      }
    }
    return best;
  }

  function paintChip(player) {
    if (!player) return;
    const id = `${player.side}-${player.number}-${player.name}`;
    if (id === lastChipId) return;
    lastChipId = id;
    chipNumber.textContent = String(player.number);
    chipName.textContent = String(player.name).toUpperCase();
    const ovr = player.ovr || 0;
    chipOvr.textContent = ovr ? String(ovr) : '—';
    chipBarFill.style.width = `${Math.min(100, Math.max(6, (ovr / 99) * 100))}%`;
  }

  let bannerTimer = 0;

  return {
    node,
    /** Atualiza placar, relógio, radar, cartão e a etiqueta do jogador. */
    update(snapshot, players, ball, controlled) {
      homeScore.textContent = String(snapshot.score[0]);
      awayScore.textContent = String(snapshot.score[1]);
      clock.textContent = snapshot.display;
      const half = snapshot.half === 1 ? '1º TEMPO' : snapshot.half === 2 ? '2º TEMPO' : '';
      const halfText = snapshot.phase === 'halftime' ? 'INTERVALO' : snapshot.phase === 'fulltime' ? 'FIM DE JOGO' : half;
      if (halfLabel.textContent !== halfText) halfLabel.textContent = halfText;
      const poss = Array.isArray(snapshot.poss) ? snapshot.poss : [50, 50];
      possFill.style.width = `${Math.max(0, Math.min(100, poss[0]))}%`;
      possHomePct.textContent = `${poss[0]}%`;
      possAwayPct.textContent = `${poss[1]}%`;
      const cards = snapshot.discipline || {};
      homeYellowCards.textContent = String(cards.home?.yellow ?? 0);
      homeRedCards.textContent = String(cards.home?.red ?? 0);
      awayYellowCards.textContent = String(cards.away?.yellow ?? 0);
      awayRedCards.textContent = String(cards.away?.red ?? 0);

      const restart = snapshot.restart;
      const analysis = restart?.analysis;
      const setPieceVisible = Boolean(restart?.ready && restart.side === userSide && analysis
        && ['freekick', 'penalty', 'corner'].includes(restart.type));
      setPiecePanel.classList.toggle('is-visible', setPieceVisible);
      setPiecePanel.classList.toggle('is-freekick', setPieceVisible && restart.type === 'freekick');
      if (setPieceVisible) {
        const title = restart.type === 'freekick' ? 'FALTA DIRETA'
          : restart.type === 'penalty' ? 'PÊNALTI' : 'ESCANTEIO';
        setPieceTitle.textContent = title;
        setPieceChanceLabel.textContent = analysis.label || 'CHANCE DE GOL';
        setPieceChance.textContent = `${analysis.chancePercent}%`;
        setPieceDistance.textContent = `${Number(analysis.distance).toFixed(1)} m${restart.type === 'corner' ? ' · ÁREA' : ` · ${Math.round(analysis.angleDegrees || 0)}°`}`;
        setPieceWall.textContent = restart.type === 'freekick' ? `BARREIRA ${analysis.wallCount ?? 0}` : '';
        setPiecePrecision.textContent = `${analysis.precisionPercent}%`;
        setPiecePrecisionBar.style.width = `${analysis.precisionPercent}%`;
        setPieceState.aim = analysis.aim ?? 0;
        setPieceState.power = analysis.power ?? 0.72;
        setPieceState.curve = analysis.curve ?? 0;
        setPieceState.lift = analysis.lift ?? 0.15;
        setPieceState.impactX = analysis.impactX ?? setPieceState.curve;
        setPieceState.impactY = analysis.impactY ?? 0;
        setPieceState.kind = analysis.kind || 'placed';
        if (document.activeElement !== setPieceAim) setPieceAim.value = String(Math.round(setPieceState.aim * 100));
        if (document.activeElement !== setPiecePower) setPiecePower.value = String(Math.round(setPieceState.power * 100));
        if (document.activeElement !== setPieceCurve && document.activeElement !== setPieceImpactPad) {
          updateImpactPresentation();
        }
        setPieceAimValue.textContent = setPieceState.aim === 0
          ? 'CENTRO' : setPieceState.aim < 0 ? 'ESQUERDA' : 'DIREITA';
        setPiecePowerValue.textContent = `${Math.round(setPieceState.power * 100)}%`;
        for (const button of setPieceKinds) {
          const selected = button.dataset.kind === setPieceState.kind;
          button.classList.toggle('is-selected', selected);
          button.setAttribute('aria-pressed', String(selected));
        }
      }

      const player = controlled?.player || null;
      const goalScorer = snapshot.phase === 'goal' ? snapshot.scorer : null;
      const focusPlayer = goalScorer || player;
      drawRadar(players, ball, player);
      paintChip(focusPlayer);
      paintFoe(nearestOpponent(players, ball, player));

      // Tags de nome para TODOS os jogadores ativos
      for (const p of players || []) {
        if (!p.active) continue;
        if (!p.visible) {
          const existing = nameTagEls.get(p.id);
          if (existing) {
            existing.el.classList.remove('is-visible');
          }
          continue;
        }
        let entry = nameTagEls.get(p.id);
        if (!entry) {
          const tagEl = el('div', { class: 'hud__nametag' },
            el('span', { class: 'hud__nametag-num', text: String(p.number) }),
            el('span', { class: 'hud__nametag-name', text: String(p.name).toUpperCase() })
          );
          entry = { el: tagEl, x: 0, y: 0 };
          nameTagEls.set(p.id, entry);
          nameTagsLayer.appendChild(tagEl);
        }
        const isControlled = controlled?.player && p.id === controlled.player.id;
        const isScorer = goalScorer && p.id === goalScorer.id;
        entry.el.classList.toggle('is-controlled', !!isControlled);
        entry.el.classList.toggle('is-scorer', !!isScorer);
        entry.el.classList.add('is-visible');
        entry.el.style.left = `${p.x}px`;
        entry.el.style.top = `${p.y}px`;
      }
      // Remove tags de jogadores inativos
      for (const [id, entry] of nameTagEls) {
        const stillActive = (players || []).some(p => p.id === id && p.active && p.visible);
        if (!stillActive) {
          entry.el.remove();
          nameTagEls.delete(id);
        }
      }

      // Tag sob a cabeça do controlado; durante o gol acompanha o autor.
      const focusProjected = goalScorer
        ? (players || []).find(item => item.id === goalScorer.id)
        : controlled;
      if (focusProjected?.visible && focusPlayer) {
        tagName.textContent = String(focusPlayer.name).toUpperCase();
        tag.style.left = `${focusProjected.x}px`;
        tag.style.top = `${focusProjected.y}px`;
        tag.classList.toggle('is-goal-focus', Boolean(goalScorer));
        tag.classList.add('is-visible');
      } else {
        tag.classList.remove('is-visible', 'is-goal-focus');
      }
    },
    /** Mostra um aviso grande (gol, cartão, intervalo). */
    showBanner(text, kind = 'info', duration = 2200) {
      banner.textContent = text;
      banner.className = `hud__banner is-visible hud__banner--${kind}`;
      clearTimeout(bannerTimer);
      bannerTimer = setTimeout(() => {
        banner.className = 'hud__banner';
      }, duration);
    },
    /** Acrescenta uma linha no feed de eventos. */
    pushEvent(text, kind = 'info') {
      const line = el('div', { class: `hud__event hud__event--${kind}`, text });
      feed.appendChild(line);
      setTimeout(() => line.classList.add('is-out'), 3200);
      setTimeout(() => line.remove(), 3800);
    },
    dispose() {
      node.remove();
    }
  };
}
