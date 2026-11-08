// Interface durante a partida: placar no topo (escudo, placar e cronômetro),
// radar com a posição de todos os jogadores e o aviso de eventos (gols,
// cartões, faltas e retomadas).

import { el } from '../ui/dom.js';
import { PITCH } from './constants.js';

export function createHud({ root, home, away }) {
  const homeCrest = el('img', { class: 'hud__crest', src: home?.crest, alt: `Escudo do ${home?.name}` });
  const awayCrest = el('img', { class: 'hud__crest', src: away?.crest, alt: `Escudo do ${away?.name}` });
  const homeScore = el('b', { class: 'hud__score', text: '0' });
  const awayScore = el('b', { class: 'hud__score', text: '0' });
  const clock = el('span', { class: 'hud__clock', text: "0'00" });

  const scoreboard = el('div', { class: 'hud__scoreboard' },
    el('div', { class: 'hud__side hud__side--home' },
      homeCrest,
      el('span', { class: 'hud__team', text: home?.shortName || home?.name || 'CASA' }),
      homeScore
    ),
    el('div', { class: 'hud__time' },
      clock,
      el('span', { class: 'hud__half', text: '1º TEMPO' })
    ),
    el('div', { class: 'hud__side hud__side--away' },
      awayScore,
      el('span', { class: 'hud__team', text: away?.shortName || away?.name || 'VISITA' }),
      awayCrest
    )
  );

  const radarCanvas = el('canvas', { class: 'hud__radar', width: 208, height: 132 });
  const radar = el('div', { class: 'hud__radar-wrap' }, radarCanvas);
  const feed = el('div', { class: 'hud__feed' });
  const banner = el('div', { class: 'hud__banner' });

  const node = el('div', { class: 'hud' },
    scoreboard,
    feed,
    radar,
    banner
  );
  root.appendChild(node);

  const context = radarCanvas.getContext('2d');

  function drawRadar(players, ball) {
    const width = radarCanvas.width;
    const height = radarCanvas.height;
    const padding = 6;
    const scaleX = (width - padding * 2) / PITCH.length;
    const scaleZ = (height - padding * 2) / PITCH.width;
    const toX = x => padding + (x + PITCH.halfLength) * scaleX;
    const toZ = z => padding + (z + PITCH.halfWidth) * scaleZ;

    context.clearRect(0, 0, width, height);
    context.fillStyle = 'rgba(6,32,24,0.82)';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'rgba(255,255,255,0.32)';
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
      context.fillStyle = player.side === 'home' ? '#2ef0a8' : '#3fd7ff';
      context.beginPath();
      context.arc(toX(player.x), toZ(player.z), player.isKeeper ? 2.4 : 3, 0, Math.PI * 2);
      context.fill();
    }
    if (ball) {
      context.fillStyle = '#ffffff';
      context.beginPath();
      context.arc(toX(ball.x), toZ(ball.z), 2.2, 0, Math.PI * 2);
      context.fill();
    }
  }

  let bannerTimer = 0;

  return {
    node,
    /** Atualiza placar, relógio e radar. */
    update(snapshot, players, ball) {
      homeScore.textContent = String(snapshot.score[0]);
      awayScore.textContent = String(snapshot.score[1]);
      clock.textContent = snapshot.display;
      const half = snapshot.half === 1 ? '1º TEMPO' : '2º TEMPO';
      const label = clock.parentElement.querySelector('.hud__half');
      if (label && label.textContent !== half) label.textContent = half;
      drawRadar(players, ball);
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
