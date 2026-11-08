// Interface durante a partida, no estilo das transmissões do FC Mobile/eFootball:
//
//   - placar compacto no canto superior esquerdo (escudo, sigla, gols e relógio);
//   - cartão do jogador controlado no canto inferior esquerdo (número, nome,
//     OVR e condição);
//   - radar tático no centro inferior;
//   - etiqueta com o nome sobre a cabeça do atleta controlado;
//   - aviso central de eventos (gol, cartão, intervalo).

import { el } from '../ui/dom.js';
import { PITCH } from './constants.js';

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

export function createHud({ root, home, away }) {
  const homeCrest = el('img', { class: 'hud__crest', src: home?.crest, alt: `Escudo do ${home?.name}` });
  const awayCrest = el('img', { class: 'hud__crest', src: away?.crest, alt: `Escudo do ${away?.name}` });
  const homeScore = el('b', { class: 'hud__score', text: '0' });
  const awayScore = el('b', { class: 'hud__score', text: '0' });
  const clock = el('span', { class: 'hud__clock', text: "0'00" });
  const halfLabel = el('span', { class: 'hud__half', text: '1º TEMPO' });

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

  const radarCanvas = el('canvas', { class: 'hud__radar', width: 208, height: 132 });
  const radar = el('div', { class: 'hud__radar-wrap' }, radarCanvas);
  const feed = el('div', { class: 'hud__feed' });
  const banner = el('div', { class: 'hud__banner' });

  const node = el('div', { class: 'hud' },
    scoreboard,
    playerChip,
    foeChip,
    tag,
    feed,
    radar,
    banner
  );
  root.appendChild(node);

  const context = radarCanvas.getContext('2d');
  let lastChipId = null;
  let lastFoeId = null;

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
      context.fillStyle = player.side === 'home' ? '#2ef0a8' : '#3fd7ff';
      context.beginPath();
      context.arc(toX(player.x), toZ(player.z), player.isKeeper ? 2.4 : 3, 0, Math.PI * 2);
      context.fill();
      if (isControlled) {
        context.strokeStyle = '#ffffff';
        context.lineWidth = 1.6;
        context.beginPath();
        context.arc(toX(player.x), toZ(player.z), 5, 0, Math.PI * 2);
        context.stroke();
      }
    }
    if (ball) {
      context.fillStyle = '#ffffff';
      context.beginPath();
      context.arc(toX(ball.x), toZ(ball.z), 2.2, 0, Math.PI * 2);
      context.fill();
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
      const half = snapshot.half === 1 ? '1º TEMPO' : '2º TEMPO';
      if (halfLabel.textContent !== half) halfLabel.textContent = half;
      const player = controlled?.player || null;
      drawRadar(players, ball, player);
      paintChip(player);
      paintFoe(nearestOpponent(players, ball, player));
      if (controlled?.visible && player) {
        tagName.textContent = String(player.name).toUpperCase();
        tag.style.left = `${controlled.x}px`;
        tag.style.top = `${controlled.y}px`;
        tag.classList.add('is-visible');
      } else {
        tag.classList.remove('is-visible');
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
