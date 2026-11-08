// Tela de preparação da partida: mostra o confronto escolhido.
//
// O motor de partida ainda não existe — esta tela deixa claro o que vem na
// próxima etapa do XFC, em vez de fingir que a partida já está pronta.

import { el, padButton } from '../ui/dom.js';
import { getTeam } from '../data/teams.js';

export function matchScreen(ctx, params = {}) {
  const home = getTeam(params.home) || getTeam(ctx.state.selection.home);
  const away = getTeam(params.away) || getTeam(ctx.state.selection.away);
  const venue = away ? away.stadium : 'Estádio a definir';

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
        text: 'O confronto está pronto. As partidas, os estádios e a tabela do campeonato entram na próxima etapa do XFC — por enquanto o jogo para no menu.'
      }),
      el('div', { class: 'hints' },
        el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Voltar aos times' })),
        el('button', { class: 'btn btn--primary', type: 'button', onClick: () => ctx.go('kickoff') }, 'Voltar aos times'),
        el('button', { class: 'btn', type: 'button', onClick: () => ctx.go('menu') }, 'Menu principal')
      )
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
      if (event.key === 'Escape' || event.key === 'Backspace' || event.key === 'Enter') {
        ctx.go('kickoff');
        return true;
      }
      return false;
    }
  };
}
