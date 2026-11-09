// Menu inicial XFC 27, inspirado na apresentação de estádio das referências.
// O jogador em destaque é uma imagem estática; a partida mantém atletas 3D.

import { el, svg, ICONS } from '../ui/dom.js';
import { xfEsportesBadge, xfcWordmark } from '../ui/brand.js';
import { featuredPlayer } from './featured-player.js';

const HOME_TABS = [
  { id: 'training', label: 'TRAINING CENTRE', icon: 'ball', title: 'TRAINING CENTRE', sub: 'Aprenda os fundamentos e aprimore suas habilidades.', action: 'Treinar agora' },
  { id: 'ultimate', label: 'ULTIMATE TEAM', icon: 'hub', title: 'ULTIMATE TEAM', sub: 'Monte seu time e entre em campo.', target: 'quick', action: 'Jogar partida' },
  { id: 'modes', label: 'PLAY MODES', icon: 'play', title: 'PLAY MODES', sub: 'Copa do Mundo, XFC World Cup e outros modos.', target: 'modes', action: 'Ver modos' },
  { id: 'settings', label: 'SETTINGS', icon: 'gear', title: 'SETTINGS', sub: 'Ajuste seu perfil, elenco e preferências.', target: 'customise', action: 'Abrir configurações' },
  { id: 'accessibility', label: 'ACCESSIBILITY', icon: 'accessibility', title: 'ACCESSIBILITY', sub: 'Personalize a experiência para jogar do seu jeito.', target: 'customise', params: { panel: 'accessibility' }, action: 'Acessibilidade' }
];

const HOME_ICONS = {
  ...ICONS,
  play: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 2a22 22 0 1 0 0 44 22 22 0 0 0 0-44Zm0 3a19 19 0 1 1 0 38 19 19 0 0 1 0-38Zm-4.6 8.5v21l17-10.5-17-10.5Z"/></svg>'
};

function controllerSvg() {
  return `<svg viewBox="0 0 300 190" role="img" aria-label="Controle de videogame">
    <defs><linearGradient id="pad-body" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#b9c8e5"/></linearGradient><linearGradient id="pad-glass" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#25354f"/><stop offset="1" stop-color="#08101d"/></linearGradient></defs>
    <path d="M55 42 Q70 27 98 29 L202 29 Q230 27 245 42 L279 130 Q285 151 270 161 Q256 170 242 154 L213 116 Q206 108 195 108 H105 Q94 108 87 116 L58 154 Q44 170 30 161 Q15 151 21 130Z" fill="url(#pad-body)" stroke="#edf4ff" stroke-width="4"/>
    <path d="M103 31h94q10 0 11 10l4 41q1 10-11 10h-96q-12 0-11-10l4-41q1-10 11-10Z" fill="#dbe6fb" stroke="#9daecc" stroke-width="3"/>
    <path d="M74 57v35M56.5 74.5h35" stroke="#788ba9" stroke-width="8" stroke-linecap="round"/>
    <circle cx="108" cy="116" r="21" fill="url(#pad-glass)" stroke="#39465b" stroke-width="4"/><circle cx="194" cy="116" r="21" fill="url(#pad-glass)" stroke="#39465b" stroke-width="4"/>
    <circle cx="228" cy="56" r="8" fill="#dfeaff" stroke="#8290a7" stroke-width="2"/><circle cx="249" cy="75" r="8" fill="#dfeaff" stroke="#8290a7" stroke-width="2"/><circle cx="207" cy="75" r="8" fill="#dfeaff" stroke="#8290a7" stroke-width="2"/><circle cx="228" cy="94" r="8" fill="#dfeaff" stroke="#8290a7" stroke-width="2"/>
    <path d="M141 105h18M150 96v18" stroke="#8290a7" stroke-width="3" stroke-linecap="round"/><path d="M135 130q15-9 30 0" fill="none" stroke="#080d16" stroke-width="3"/>
  </svg>`;
}

function starSvg() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 2.9 6 6.6.9-4.8 4.7 1.1 6.7L12 17.2l-5.8 3.1 1.1-6.7L2.5 9l6.6-.9L12 2Z"/></svg>';
}

export function menuScreen(ctx) {
  let focusIndex = 0;
  const state = ctx.state;
  const player = featuredPlayer({ className: 'menu__scene3d', name: 'Jogador em destaque no XFC' });

  const logo = el('div', { class: 'menu__logo-xfc', 'aria-label': 'XFC 27' },
    el('span', { class: 'menu__logo-badge', html: xfEsportesBadge({ title: 'XF Esports' }) }),
    el('span', { class: 'menu__logo-word', html: xfcWordmark() }),
    el('span', { class: 'xfc-27-badge' }, '27')
  );

  const profile = el('button', {
    class: 'menu__profile', type: 'button', 'aria-label': 'Abrir perfil',
    onClick() { ctx.go('customise', { focus: 'profile' }); }
  },
    el('span', { class: 'menu__profile-avatar', text: (state.profile.name || 'X').slice(0, 1).toUpperCase() }),
    el('span', { class: 'menu__profile-name', text: state.profile.name || 'XFC Player' }),
    el('span', { class: 'menu__profile-chevron', text: '⌄' })
  );

  const topbar = el('header', { class: 'menu__topbar' },
    logo,
    el('div', { class: 'menu__topbar-right' },
      el('div', { class: 'menu__coins' }, svg(starSvg()), el('span', { text: `${state.profile.coins || 0}` })),
      profile
    )
  );

  const featureAction = el('button', {
    class: 'home__feature-action', type: 'button',
    onClick() { activate(focusIndex); }
  },
    el('span', { class: 'home__action-key', text: '✕' }),
    el('span', { class: 'home__action-label', text: HOME_TABS[0].action })
  );

  const featureCard = el('section', { class: 'home__feature-card', 'aria-label': 'XFC Training Centre' },
    el('div', { class: 'home__feature-copy' },
      el('span', { class: 'home__eyebrow', text: 'XFC 27  /  TREINO' }),
      el('h1', { class: 'menu__hero-title', text: HOME_TABS[0].title }),
      el('p', { class: 'home__feature-description', text: 'Learn the gameplay fundamentals and receive personalised feedback from your trainer to improve your skills on the pitch.' }),
      el('p', { class: 'home__feature-instruction', text: 'Press the “Touchpad” to enter the Training Centre.' }),
      featureAction
    ),
    el('div', { class: 'home__controller' },
      el('span', { class: 'home__controller-flame', text: '✦' }),
      el('span', { class: 'home__controller-arrow', text: '↓' }),
      svg(controllerSvg())
    )
  );

  const cupPromo = el('button', {
    class: 'home__cup-promo', type: 'button',
    onClick() { ctx.go('modes'); }
  },
    el('span', { class: 'home__cup-kicker', text: 'XFC 27 • MODO DE JOGO' }),
    el('span', { class: 'home__cup-title', text: 'WORLD CUP 2027' }),
    el('span', { class: 'home__cup-crest', 'aria-hidden': 'true' },
      el('span', { text: '🇧🇷' }),
      el('b', { text: 'CBF' })
    ),
    el('span', { class: 'home__cup-copy', text: 'Leve o Brasil ao topo do mundo.' }),
    el('span', { class: 'home__cup-cta' }, 'EXPLORAR  →')
  );

  const nav = el('nav', { class: 'menu__nav', 'aria-label': 'Menu principal' });
  const navButtons = HOME_TABS.map((tab, index) => {
    const button = el('button', {
      class: `menu__item${index === focusIndex ? ' is-focused' : ''}`,
      type: 'button',
      dataset: { tab: tab.id },
      'aria-label': tab.label,
      'aria-pressed': index === focusIndex ? 'true' : 'false',
      onClick() { activate(index); }
    },
      el('span', { class: 'menu__item-label' }, tab.label),
      el('span', { class: 'menu__item-icon', html: HOME_ICONS[tab.icon] || ICONS.ball })
    );
    nav.appendChild(button);
    return button;
  });

  const footer = el('footer', { class: 'menu__footer' },
    el('div', { class: 'menu__footer-context' },
      el('span', { class: 'home__pad-x', text: '✕' }),
      el('span', { class: 'menu__footer-text', text: 'Select' }),
      el('span', { class: 'home__controller-mini', text: '▤' }),
      el('span', { class: 'menu__footer-text', text: 'Training Centre' })
    ),
    el('div', { class: 'menu__footer-online' },
      el('span', { class: 'menu__online-key', text: 'R2' }),
      svg(ICONS.friends),
      el('span', { text: '4' })
    )
  );

  const node = el('div', { class: 'screen screen--menu screen--xfc-home' },
    el('div', { class: 'xfc-stadium-lights', 'aria-hidden': 'true' }),
    player.node,
    topbar,
    featureCard,
    cupPromo,
    nav,
    footer
  );

  function updateFocus() {
    navButtons.forEach((button, index) => {
      const selected = index === focusIndex;
      button.classList.toggle('is-focused', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
  }

  function activate(index) {
    focusIndex = (index + HOME_TABS.length) % HOME_TABS.length;
    updateFocus();
    const tab = HOME_TABS[focusIndex];
    if (tab.target) {
      ctx.go(tab.target, tab.params || {});
      return;
    }
    ctx.toast('O Training Centre está sendo preparado. Explore os modos do XFC enquanto isso.');
  }

  function onKey(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'j') {
      focusIndex = (focusIndex + 1) % HOME_TABS.length;
      updateFocus();
      return true;
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'k') {
      focusIndex = (focusIndex - 1 + HOME_TABS.length) % HOME_TABS.length;
      updateFocus();
      return true;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      activate(focusIndex);
      return true;
    }
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go('launch');
      return true;
    }
    return false;
  }

  return {
    node,
    onKey,
    mount() { player.mount(); },
    unmount() { player.unmount(); }
  };
}
