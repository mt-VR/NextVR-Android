// Seletor de modos do XFC 27. A Copa aparece como um dos modos jogáveis,
// com Live, edição 2027 e Kick Off, e a imagem de destaque do frontend.

import { el } from '../ui/dom.js';
import { xfEsportesBadge, xfcWordmark } from '../ui/brand.js';
import { featuredPlayer } from './featured-player.js';

const MODES = [
  {
    id: 'worldcup-live',
    label: 'FIFA WORLD CUP™, LIVE',
    title: 'XFC World Cup™, Live',
    subtitle: 'A edição internacional está ao vivo. Vista a Amarelinha e represente o Brasil.',
    eyebrow: 'FIFA WORLD CUP™  •  LIVE',
    action: 'worldcup',
    mode: 'live'
  },
  {
    id: 'worldcup-2027',
    label: 'XFC WORLD CUP™ 2027',
    title: 'XFC World Cup™ 2027',
    subtitle: 'Monte sua campanha, avance pelos grupos e leve o Brasil até a final.',
    eyebrow: 'TORNEIO INTERNACIONAL  •  2027',
    action: 'worldcup',
    mode: '2027'
  },
  {
    id: 'worldcup-kickoff',
    label: 'XFC WORLD CUP™ KICK OFF',
    title: 'World Cup™ Kick Off',
    subtitle: 'Entre em campo agora para uma partida rápida com clima de Copa.',
    eyebrow: 'PARTIDA RÁPIDA  •  SELEÇÕES',
    action: 'kickoff'
  },
  {
    id: 'online',
    label: 'ONLINE TOURNAMENT',
    title: 'Online Tournament',
    subtitle: 'Encontre amigos e dispute uma partida no XFC.',
    eyebrow: 'JOGUE COM A COMUNIDADE',
    action: 'quick'
  },
  {
    id: 'customise',
    label: 'CUSTOMISE',
    title: 'Personalize seu XFC',
    subtitle: 'Ajuste seu perfil, as equipes e as preferências do jogo.',
    eyebrow: 'SEU JOGO  •  DO SEU JEITO',
    action: 'customise'
  }
];

function logoLockup() {
  return el('div', { class: 'modes__logo', 'aria-label': 'XFC 27' },
    el('span', { class: 'modes__badge', html: xfEsportesBadge({ title: 'XF Esports' }) }),
    el('span', { class: 'modes__wordmark', html: xfcWordmark() }),
    el('b', { class: 'modes__year', text: '27' })
  );
}

export function modesScreen(ctx) {
  let focusIndex = 0;
  const player = featuredPlayer({ className: 'modes__player', name: 'Jogador em destaque no XFC' });

  const breadcrumb = el('div', { class: 'modes__breadcrumb' },
    el('span', { text: 'HOME' }),
    el('i', { text: '›' }),
    el('span', { text: 'PLAY MODES' }),
    el('i', { text: '›' }),
    el('b', { class: 'modes__crumb-current', text: 'XFC WORLD CUP™, LIVE' })
  );

  const header = el('header', { class: 'modes__topbar' }, logoLockup(), breadcrumb);
  const heroEyebrow = el('p', { class: 'modes__eyebrow', text: MODES[0].eyebrow });
  const heroTitle = el('h1', { class: 'modes__hero-title', text: MODES[0].title });
  const heroSub = el('p', { class: 'modes__hero-sub', text: MODES[0].subtitle });
  const detailTitle = el('span', { class: 'modes__event-title', text: 'XFC WORLD CUP™ 2027' });
  const detailGroup = el('span', { class: 'modes__event-group', text: 'GROUP A' });
  const cta = el('button', { class: 'modes__cta', type: 'button', onClick() { openSelected(); } },
    el('span', { class: 'modes__cta-icon', text: '✕' }),
    el('span', { text: 'TAKE ME THERE' }),
    el('span', { class: 'modes__cta-arrow', text: '→' })
  );

  const hero = el('section', { class: 'modes__hero-card' },
    heroEyebrow,
    heroTitle,
    el('div', { class: 'modes__matchup' },
      el('div', { class: 'modes__brazil-crest', 'aria-label': 'Seleção Brasileira' },
        el('span', { class: 'modes__brazil-stars', text: '★★★★★' }),
        el('span', { class: 'modes__brazil-flag', text: '🇧🇷' }),
        el('b', { text: 'BRASIL' })
      ),
      el('div', { class: 'modes__event-meta' },
        detailTitle,
        el('b', { class: 'modes__versus', text: 'V' }),
        detailGroup
      )
    ),
    heroSub,
    cta
  );

  const poster = el('aside', { class: 'modes__poster' },
    el('span', { class: 'modes__poster-glow' }),
    el('span', { class: 'modes__poster-brand', html: xfcWordmark({ title: 'XFC' }) }),
    el('span', { class: 'modes__poster-caption', text: 'THE WORLD IS YOURS' })
  );

  const optionButtons = MODES.map((item, index) => el('button', {
    class: `modes__option${index === focusIndex ? ' is-active' : ''}`,
    type: 'button',
    dataset: { option: item.id },
    'aria-pressed': index === focusIndex ? 'true' : 'false',
    onClick() { select(index); }
  },
    el('span', { class: 'modes__option-label', text: item.label }),
    el('span', { class: 'modes__option-mark', text: item.id.startsWith('worldcup') ? '♜' : item.id === 'customise' ? '⚙' : '↗' })
  ));
  const tabs = el('nav', { class: 'modes__options', 'aria-label': 'Modos de jogo' }, ...optionButtons);

  const footer = el('footer', { class: 'modes__footer' },
    el('div', { class: 'modes__footer-left' },
      el('span', { class: 'modes__pad', text: '✕' }),
      el('span', { text: 'Select' }),
      el('span', { class: 'modes__pad modes__pad--back', text: '○' }),
      el('span', { text: 'Back' }),
      el('span', { class: 'modes__mini-touch', text: '▤' }),
      el('span', { text: 'Training Centre' })
    ),
    el('div', { class: 'modes__online' }, el('span', { class: 'modes__r2', text: 'R2' }), el('span', { text: '♟  4' }))
  );

  const node = el('div', { class: 'screen screen--modes' },
    el('div', { class: 'xfc-stadium-lights xfc-stadium-lights--red', 'aria-hidden': 'true' }),
    player.node,
    header,
    hero,
    poster,
    tabs,
    footer
  );


  function select(index) {
    focusIndex = (index + MODES.length) % MODES.length;
    const item = MODES[focusIndex];
    optionButtons.forEach((button, i) => {
      const active = i === focusIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    heroEyebrow.textContent = item.eyebrow;
    heroTitle.textContent = item.title;
    heroSub.textContent = item.subtitle;
    detailTitle.textContent = item.id.startsWith('worldcup') ? 'XFC WORLD CUP™ 2027' : item.label;
    detailGroup.textContent = item.id.startsWith('worldcup') ? 'GROUP A' : 'XFC 27';
    cta.querySelector('span:nth-child(2)').textContent = item.action === 'customise' ? 'CUSTOMISE' : item.action === 'quick' ? 'PLAY ONLINE' : item.action === 'kickoff' ? 'KICK OFF' : 'TAKE ME THERE';
    breadcrumb.lastElementChild.textContent = item.label;
  }

  function openSelected() {
    const item = MODES[focusIndex];
    if (item.action === 'worldcup') ctx.go('worldcup', { mode: item.mode });
    else if (item.action === 'kickoff') ctx.go('kickoff');
    else if (item.action === 'quick') ctx.go('quick');
    else ctx.go('customise');
  }

  function onKey(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'j') {
      select(focusIndex + 1);
      return true;
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'k') {
      select(focusIndex - 1);
      return true;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      openSelected();
      return true;
    }
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go('menu');
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
