// Tela de preparação da partida ("Classic Match"): mostra o confronto
// escolhido no Kick Off e abre o mesmo jogo 3D usado pelas Partidas Rápidas.

import { el, padButton } from '../ui/dom.js';
import { getTeam } from '../data/teams.js';
import { createStadiumPicker } from '../ui/stadiumcta.js';

export function matchScreen(ctx, params = {}) {
  const home = getTeam(params.home) || getTeam(ctx.state.selection.home);
  const away = getTeam(params.away) || getTeam(ctx.state.selection.away);
  const venue = away ? away.stadium : 'Estádio a definir';

  function startMatch(stadium) {
    if (!home || !away || home.id === away.id) {
      ctx.go('kickoff');
      return;
    }
    ctx.go('play', {
      home: home.id,
      away: away.id,
      homeKit: ctx.state.kits[home.id] ?? 0,
      awayKit: ctx.state.kits[away.id] ?? 0,
      minutes: 6,
      difficulty: 'normal',
      stadium
    });
  }

  const stadiumPicker = createStadiumPicker({
    size: 'lg',
    initialIndex: ctx.state?.settings?.stadium ?? null,
    onChange(stadium) {
      if (ctx.state?.settings) ctx.state.settings.stadium = stadium;
    },
    onEnter: startMatch
  });

  const node = el('div', { class: 'screen screen--match' },
    el('header', { class: 'topbar' },
      el('span', { class: 'topbar__title', text: 'Classic Match' }),
      el('span', { class: 'topbar__sep', text: '|' }),
      el('span', { class: 'topbar__subtitle', text: 'Match Details' })
    ),
    el('div', { class: 'match__stage' },
      el('div', { class: 'match__teams' },
        el('div', { class: 'match__team' },
          el('img', { class: 'match__crest', src: home?.crest, alt: `Escudo do ${home?.name}` }),
          el('b', { text: home?.name || '—' }),
          el('span', { text: 'Home' })
        ),
        el('span', { class: 'match__vs', text: 'VS' }),
        el('div', { class: 'match__team' },
          el('img', { class: 'match__crest', src: away?.crest, alt: `Escudo do ${away?.name}` }),
          el('b', { text: away?.name || '—' }),
          el('span', { text: 'Away' })
        )
      ),
      el('span', { class: 'match__venue', text: venue }),
      el('p', {
        class: 'match__note',
        text: 'Uniformes definidos, bola rolando: a mesma experiência 3D das Partidas Rápidas aguarda — controle um atleta por vez e leve a decisão para o apito final.'
      }),
      stadiumPicker.node,
      el('button', { class: 'match__back', type: 'button', onClick: () => ctx.go('kickoff') }, '‹ VOLTAR AOS TIMES')
    ),
    el('footer', { class: 'footer' },
      el('div', { class: 'hints' },
        el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' }))
      )
    )
  );

  return {
    node,
    onKey(event) {
      if (event.key === 'Enter') {
        startMatch(stadiumPicker.index);
        return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go('kickoff');
        return true;
      }
      return false;
    }
  };
}
