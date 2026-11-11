import {libraryProfileIcon} from '../data/asset-library.js';
// Menu inicial do XFC 27, seguindo a referência do hub de futebol:
// estádio em tela cheia, navegação vertical à esquerda e destaque de Kick Off.

import { el, svg, ICONS } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { formatXp } from '../state.js';

const MENU_ITEMS = [
  {id:'friendly',label:'JOGO RÁPIDO',headline:'Entre direto em campo',subtitle:'O menu clássico do Jogo Rápido.',action:'Jogar',target:'friendly'},
  {
    id: 'news',
    label: 'FC NEWS',
    headline: 'The latest from XFC',
    subtitle: 'News, updates and stories from around the game.',
    action: 'Open FC News',
    notice: 'FC News is coming soon.'
  },
  {
    id: 'kickoff',
    label: 'KICK OFF',
    headline: 'Dive straight into the action',
    subtitle: 'Quick matches  ·  Couch Co-op  ·  Customise settings',
    action: 'Enter Kick Off',
    target: 'kickoff'
  },
  {
    id: 'grounds',
    label: 'THE GROUNDS',
    headline: 'Find your home ground',
    subtitle: 'Choose the stadium that sets the scene.',
    action: 'Explore The Grounds',
    target: 'stadiums',
    params: { returnTo: 'menu' }
  },
  {
    id: 'ultimate',
    label: 'ULTIMATE TEAM',
    headline: 'Build your Ultimate Team',
    subtitle: 'Sign players, shape your squad and take it onto the pitch.',
    action: 'Enter Ultimate Team',
    target: 'ultimate'
  },
  {
    id: 'learn',
    label: 'LEARN TO PLAY',
    headline: 'Make every touch count',
    subtitle: 'Pratique faltas, pênaltis, passes e jogadas coletivas no Centro de Treino.',
    action: 'Choose Training',
    target: 'training',
    params: { returnTo: 'menu' }
  },
  {
    id: 'seasons',
    label: 'SEASONS',
    headline: 'Your season starts now',
    subtitle: 'Lead Brazil through the World Cup campaign.',
    action: 'Enter Seasons',
    target: 'worldcup',
    params: { returnTo: 'menu' }
  },
  {
    id: 'tournament',
    label: 'TOURNAMENTS',
    headline: 'Compete for the trophy',
    subtitle: 'Choose a competition and make your run to the final.',
    action: 'Browse Tournaments',
    target: 'modes'
  },
  {
    id: 'quick',
    label: 'TIME ALEATÓRIO',
    headline: 'Um novo confronto a cada sorteio',
    subtitle: 'Sorteie dois clubes, escolha o uniforme e entre em campo.',
    action: 'Sortear times',
    target: 'quick'
  },
  {
    id: 'online-friendlies',
    label: 'ONLINE FRIENDLIES',
    headline: 'Challenge a friend',
    subtitle: 'Set up a friendly and settle it on the pitch.',
    action: 'Find a Match',
    target: 'quick'
  }
];

const QUICK_ACTIONS = [
  { id: 'settings', label: 'Settings', icon: 'gear', target: 'customise' },
  { id: 'accessibility', label: 'Accessibility', icon: 'accessibility', target: 'customise', params: { panel: 'accessibility' } },
  { id: 'online', label: 'Online', icon: 'friends', target: 'modes' }
];

export function menuScreen(ctx) {
  const { profile } = ctx.state;
  let focusIndex = MENU_ITEMS.findIndex(item=>item.id==='kickoff');
  const xp = Math.max(0, Number(profile.xp) || 0);
  const xpMax = Math.max(1, Number(profile.xpMax) || 3000);
  const xpPercent = Math.min(100, Math.round((xp / xpMax) * 100));

  const brand = el('div', { class: 'hub__brand', 'aria-label': 'XF Esportes XFC' },
    el('span', { class: 'hub__esports-mark' },
      el('b', { text: 'XF' }),
      el('small', { text: 'ESPORTES' })
    ),
    el('span', { class: 'hub__brand-divider', 'aria-hidden': 'true' }),
    el('span', { class: 'hub__wordmark', html: xfcWordmark({ title: 'XFC' }) })
  );

  const topProgress = el('div', { class: 'hub__progress' },
    el('div', {
      class: 'hub__xp-bar',
      role: 'progressbar',
      'aria-label': `${formatXp(xp)} of ${formatXp(xpMax)} XP`,
      'aria-valuemin': '0',
      'aria-valuemax': String(xpMax),
      'aria-valuenow': String(Math.min(xp, xpMax))
    },
      el('span', { class: 'hub__xp-fill', style: { width: `${xpPercent}%` } })
    ),
    el('span', { class: 'hub__level', text: `LVL ${profile.level || 6}` }),
    el('span', { class: 'hub__xp-badge', 'aria-label': 'Experience points', text: 'XP' }),
    el('span', { class: 'hub__xp-value', text: `${formatXp(xp)}/${formatXp(xpMax)}` })
  );

  const topbar = el('header', { class: 'hub__topbar' }, brand, topProgress);

  const quickRail = el('nav', { class: 'hub__quick-rail', 'aria-label': 'Quick settings' },
    el('div', { class: 'hub__quick-stack' }, ...QUICK_ACTIONS.map(action =>
      el('button', {
        class: 'hub__quick-button',
        type: 'button',
        dataset: { action: action.id },
        'aria-label': action.label,
        title: action.label,
        onClick() { ctx.go(action.target, action.params || {}); }
      }, svg(ICONS[action.icon] || ICONS.gear))
    )),
    el('button', {
      class: 'hub__quick-button hub__quick-button--single',
      type: 'button',
      dataset: { action: 'profile' },
      'aria-label': 'Open profile and kits',
      title: 'Profile and kits',
      onClick() { ctx.go('kits'); }
    }, libraryProfileIcon()?el('img',{src:libraryProfileIcon(),alt:'Ícone do perfil',style:{width:'32px',height:'32px',objectFit:'contain'}}):svg(ICONS.profile))
  );

  const featureTitle = el('h1', { class: 'hub__headline', text: MENU_ITEMS[focusIndex].headline });
  const featureSubtitle = el('p', { class: 'hub__subtitle', text: MENU_ITEMS[focusIndex].subtitle });
  const actionLabel = el('span', { class: 'hub__cta-label', text: MENU_ITEMS[focusIndex].action });
  const featureAction = el('button', {
    class: 'hub__cta',
    type: 'button',
    onClick() { openSelected(); }
  },
    el('span', { class: 'hub__cta-key', 'aria-hidden': 'true' }, '×'),
    actionLabel
  );
  const feature = el('section', { class: 'hub__feature', 'aria-live': 'polite' },
    featureTitle,
    featureSubtitle,
    featureAction
  );

  const nav = el('nav', { class: 'menu__nav hub__menu', 'aria-label': 'Main menu' });
  const navButtons = MENU_ITEMS.map((item, index) => {
    const button = el('button', {
      class: `menu__item${index === focusIndex ? ' is-focused' : ''}`,
      type: 'button',
      dataset: { menuItem: item.id },
      'aria-pressed': index === focusIndex ? 'true' : 'false',
      onMouseMove() { setSelection(index); },
      onFocus() { setSelection(index); },
      onClick() { activate(index); }
    }, el('span', { class: 'menu__item-label', text: item.label }));
    nav.appendChild(button);
    return button;
  });

  const objective = el('button', {
    class: 'hub__objective',
    type: 'button',
    onClick() { ctx.toast('Season Pass objectives are coming soon.'); }
  },
    el('span', { class: 'hub__objective-icon', 'aria-hidden': 'true' }, svg(ICONS.camera)),
    el('span', { text: 'Check out the Season Pass Objectives!' })
  );

  const footer = el('footer', { class: 'hub__footer' },
    el('div', { class: 'hub__footer-hints' },
      el('span', { class: 'hub__pad hub__pad--x', 'aria-hidden': 'true' }, '×'),
      el('span', { text: 'Select' }),
      el('span', { class: 'hub__pad hub__pad--circle', 'aria-hidden': 'true' }, '○'),
      el('span', { text: 'Back' })
    ),
    el('div', { class: 'hub__footer-social' },
      el('span', { class: 'hub__fc-hub' }, svg(ICONS.hub), el('span', { text: 'FC HUB' })),
      el('span', { class: 'hub__footer-icon hub__r2', text: 'R2' }),
      el('span', { class: 'hub__footer-icon hub__speaker', 'aria-label': 'Audio', text: '◖' }),
      el('b', { class: 'hub__online-count', text: '1' }),
      el('span', { class: 'hub__friends', 'aria-label': 'Friends online' }, svg(ICONS.friends), el('span', { text: '1' }))
    )
  );

  const node = el('div', {
    class: 'screen screen--menu screen--xfc-home',
    'data-coins': String(profile.coins || 0)
  },
    el('img', {
      class: 'hub__background',
      src: 'assets/bg/menu-hero.jpg',
      alt: 'Jogador em campo diante de um estádio cheio'
    }),
    el('button',{type:'button',class:'career-entry',text:'CARREIRA DE JOGADOR',onClick:()=>ctx.go('career')}),
    topbar,
    quickRail,
    nav,
    feature,
    objective,
    footer
  );

  function setSelection(index) {
    focusIndex = (index + MENU_ITEMS.length) % MENU_ITEMS.length;
    const item = MENU_ITEMS[focusIndex];
    navButtons.forEach((button, buttonIndex) => {
      const selected = buttonIndex === focusIndex;
      button.classList.toggle('is-focused', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    featureTitle.textContent = item.headline;
    featureSubtitle.textContent = item.subtitle;
    actionLabel.textContent = item.action;
  }

  function openSelected() {
    const item = MENU_ITEMS[focusIndex];
    if (item.target) {
      ctx.go(item.target, item.params || {});
    } else {
      ctx.toast(item.notice || 'This mode is coming soon.');
    }
  }

  function activate(index) {
    setSelection(index);
    openSelected();
  }

  function onKey(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'j') {
      setSelection(focusIndex + 1);
      return true;
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'k') {
      setSelection(focusIndex - 1);
      return true;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      openSelected();
      return true;
    }
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go('launch');
      return true;
    }
    return false;
  }

  return { node, onKey };
}
