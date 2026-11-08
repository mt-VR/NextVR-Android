// Menu principal do XFC: marca no canto superior esquerdo, barra de XP à
// direita, lista de modos na coluna esquerda, destaque do KICK OFF no centro
// com a arte do jogador à direita e as dicas de controle no rodapé.
//
// Só o Kick Off está liberado nesta etapa — os outros modos avisam que chegam
// na próxima fase.

import { el, svg, ICONS, padButton, padIcon } from '../ui/dom.js';
import { xfEsportesBadge, xfcWordmark } from '../ui/brand.js';
import { formatXp } from '../state.js';

const MENU_ITEMS = [
  { id: 'news', label: 'FC NEWS' },
  { id: 'kickoff', label: 'KICK OFF', available: true },
  { id: 'grounds', label: 'THE GROUNDS' },
  { id: 'ultimate', label: 'ULTIMATE TEAM' },
  { id: 'learn', label: 'LEARN TO PLAY' },
  { id: 'seasons', label: 'SEASONS' },
  { id: 'tournaments', label: 'TOURNAMENTS' },
  { id: 'coop', label: 'CO-OP SEASONS' },
  { id: 'friendlies', label: 'ONLINE FRIENDLIES' }
];

export function menuScreen(ctx) {
  let focusIndex = MENU_ITEMS.findIndex(item => item.available);

  const navButtons = MENU_ITEMS.map((item, index) => {
    const button = el('button', {
      class: `menu__item${item.available ? ' menu__item--available' : ' menu__item--dim'}`,
      type: 'button',
      dataset: { menuId: item.id },
      onClick() {
        focusIndex = index;
        paint();
        activate(item);
      }
    }, el('span', { text: item.label }));
    return button;
  });

  const nav = el('nav', { class: 'menu__nav', 'aria-label': 'Modos de jogo' }, navButtons);

  const rail = el('div', { class: 'menu__rail' },
    el('button', { class: 'icon-btn', type: 'button', title: 'Configurações', onClick: () => ctx.toast('Configurações chegam na próxima etapa.') }, svg(ICONS.gear)),
    el('button', { class: 'icon-btn', type: 'button', title: 'Acessibilidade', onClick: () => ctx.toast('Acessibilidade chega na próxima etapa.') }, svg(ICONS.accessibility)),
    el('button', { class: 'icon-btn icon-btn--active', type: 'button', title: 'Jogar', onClick: () => ctx.go('kickoff') }, svg(ICONS.ball)),
    el('button', { class: 'icon-btn', type: 'button', title: 'Perfil', onClick: () => ctx.toast(`Perfil: ${ctx.state.profile.name}`) }, svg(ICONS.profile))
  );

  const hero = el('section', { class: 'menu__hero' },
    el('h1', { class: 'menu__headline', text: 'Dive straight into the action' }),
    el('div', { class: 'menu__sub' },
      el('button', { type: 'button', text: 'Quick matches', onClick: () => ctx.go('kickoff') }),
      el('span', { text: '•' }),
      el('button', { type: 'button', text: 'Couch Co-op', onClick: () => ctx.toast('Couch Co-op chega na próxima etapa.') }),
      el('span', { text: '•' }),
      el('button', { type: 'button', text: 'Customise settings', onClick: () => ctx.go('kickoff') })
    ),
    el('button', {
      class: 'menu__cta',
      type: 'button',
      onClick: () => ctx.go('kickoff')
    }, padIcon('cross'), el('span', { text: 'Enter Kick Off' }))
  );

  const xpFill = el('div', {
    class: 'menu__xp-fill',
    style: { width: `${Math.round((ctx.state.profile.xp / ctx.state.profile.xpMax) * 100)}%` }
  });

  const topbar = el('header', { class: 'menu__topbar' },
    el('div', { class: 'menu__brand' },
      el('div', { class: 'menu__badge', html: xfEsportesBadge() }),
      el('span', { class: 'menu__divider' }),
      el('div', { class: 'menu__wordmark', html: xfcWordmark() })
    ),
    el('div', { class: 'menu__xp' },
      el('div', { class: 'menu__xp-track' }, xpFill),
      el('span', { class: 'menu__xp-level', text: `LVL ${ctx.state.profile.level}` }),
      el('div', { class: 'menu__xp-chip' },
        el('span', { class: 'menu__xp-badge', text: 'XP' }),
        el('span', { class: 'menu__xp-text', text: `${formatXp(ctx.state.profile.xp)}/${formatXp(ctx.state.profile.xpMax)}` })
      )
    )
  );

  const footer = el('footer', { class: 'menu__footer' },
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, padButton('cross', 'Select'), el('span', { text: 'Select' })),
      el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' }))
    ),
    el('div', { class: 'menu__hub' },
      el('span', { class: 'menu__hub-item' }, svg(ICONS.camera), el('span', { text: 'FC HUB' })),
      el('span', { class: 'menu__hub-item' }, el('span', { class: 'menu__hub-badge', text: 'R2' })),
      el('span', { class: 'menu__hub-item' }, svg(ICONS.info), el('span', { class: 'menu__hub-badge menu__hub-badge--accent', text: '1' })),
      el('span', { class: 'menu__hub-item' }, svg(ICONS.friends), el('span', { class: 'menu__hub-badge', text: '1' }))
    )
  );

  const node = el('div', { class: 'screen screen--menu' },
    topbar,
    el('div', { class: 'menu__body' },
      rail,
      nav,
      hero
    ),
    footer
  );

  function activate(item) {
    if (item.available) {
      ctx.go('kickoff');
      return;
    }
    ctx.toast(`${item.label} chega na próxima etapa do XFC.`, { variant: 'warn' });
  }

  function paint() {
    navButtons.forEach((button, index) => button.classList.toggle('is-focused', index === focusIndex));
  }

  paint();

  return {
    node,
    onKey(event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const step = event.key === 'ArrowDown' ? 1 : -1;
        focusIndex = (focusIndex + step + MENU_ITEMS.length) % MENU_ITEMS.length;
        paint();
        return true;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        activate(MENU_ITEMS[focusIndex]);
        return true;
      }
      return false;
    }
  };
}
