// Início do XFC 27: a captura fornecida é a arte integral; ações DOM acessíveis
// ficam por cima dela. Carreira, seleção e estádios continuam nas telas próprias.
import { el } from '../ui/dom.js';
import { formatXp } from '../state.js';
import { xfc27Footer, xfc27Hotspot, xfc27Screen } from '../ui/reference-menu.js';

const COIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#f4c846" stroke="#9c7621"/><path d="M14.5 8.4c-2.8-1.2-5 .2-5 2.2 0 2.8 5 2 5 4.3 0 1.8-2.2 2.8-4.8 1.4" fill="none" stroke="#725014" stroke-width="1.8" stroke-linecap="round"/></svg>';
const GEM = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l4 6-9 12L3 9z" fill="#33dc78"/><path d="M7 3 5.5 9h13L17 3z" fill="#8affad"/><path d="M12 21 5.5 9h13z" fill="#18a950"/></svg>';

function action(node, label, rect, run, { id = '', className = '', text = label } = {}) {
  const button = xfc27Hotspot(label, rect, run, {
    class: `ref-button xfc27-action${id ? ' menu__item' : ''}${className ? ` ${className}` : ''}`,
    ...(id ? { dataset: { menuItem: id } } : {})
  });
  button.replaceChildren(el('span', { class: 'ref-sr menu__item-label', text }));
  node.append(button);
  return button;
}

function liveProfile(ctx) {
  const profile = ctx.state.profile;
  const xp = Math.max(0, Number(profile.xp) || 0);
  const xpMax = Math.max(1, Number(profile.xpMax) || 100);
  const level = Math.max(1, Number(profile.level) || 1);
  const wallet = el('div', { class: 'xfc27-live-header', 'aria-label': 'Carteira e progresso do jogador' },
    el('div', { class: 'xfc27-wallet' },
      el('span', { class: 'xfc27-wallet__item', 'aria-label': `${profile.coins ?? 0} moedas` },
        el('span', { class: 'xfc27-wallet__icon', html: COIN }),
        el('b', { text: String(profile.coins ?? 0) })),
      el('span', { class: 'xfc27-wallet__item', 'aria-label': `${profile.gems ?? 0} gemas` },
        el('span', { class: 'xfc27-wallet__icon', html: GEM }),
        el('b', { text: String(profile.gems ?? 0) }))
    ),
    el('button', { class: 'xfc27-profile', type: 'button', 'aria-label': 'Abrir perfil e configurações', onClick: () => ctx.go('customise') },
      el('span', { class: 'xfc27-profile__badge', text: 'XFC' }),
      el('span', { class: 'xfc27-profile__copy' },
        el('b', { text: `Nível ${level}` }),
        el('span', { class: 'xfc27-xp' },
          el('span', { class: 'xfc27-xp__track', role: 'progressbar', 'aria-label': `${formatXp(xp)} de ${formatXp(xpMax)} XP`, 'aria-valuemin': '0', 'aria-valuemax': String(xpMax), 'aria-valuenow': String(Math.min(xp, xpMax)) },
            el('span', { class: 'xfc27-xp__fill', style: { width: `${Math.min(100, Math.round(xp / xpMax * 100))}%` } })),
          el('small', { text: `${formatXp(xp)} / ${formatXp(xpMax)} XP` }))
      )
    ),
    el('button', { class: 'xfc27-settings', type: 'button', 'aria-label': 'Configurações', onClick: () => ctx.go('customise') }, '⚙')
  );
  return wallet;
}

export function menuScreen(ctx) {
  const node = xfc27Screen('screen--menu', 'home', 'Menu inicial XFC 27');
  node.dataset.coins = String(ctx.state.profile.coins ?? 0);
  node.append(liveProfile(ctx));

  const actions = el('nav', { class: 'xfc27-home-actions hub__menu', 'aria-label': 'Menu inicial' });
  node.append(actions);
  const targets = [];

  // Navegação superior da referência.
  targets.push(action(actions, 'Início', [333, 20, 129, 76], () => ctx.go('menu'), { className: 'xfc27-nav-action', text: 'HOME' }));
  targets.push(action(actions, 'Modos', [465, 20, 139, 76], () => ctx.go('modes'), { id: 'tournament', className: 'xfc27-nav-action', text: 'TOURNAMENTS' }));
  targets.push(action(actions, 'Personalizar', [607, 20, 186, 76], () => ctx.go('customise'), { className: 'xfc27-nav-action', text: 'CUSTOMISE' }));
  targets.push(action(actions, 'Configurações', [790, 20, 202, 76], () => ctx.go('customise'), { className: 'xfc27-nav-action', text: 'SETTINGS' }));

  // Os dois destaques de carreira chegam à entrada original de Carreira; ela
  // continua sendo renderizada por careerScreen, sem arte de referência nova.
  const manager = action(actions, 'Carreira de time · Entrar', [39, 150, 737, 339], () => ctx.go('career', { kind: 'manager' }), { id: 'career', className: 'xfc27-feature xfc27-feature--manager', text: 'CARREIRA DE JOGADOR' });
  manager.append(el('span', { class: 'hub__cta-label ref-sr', text: 'Entrar na carreira' }));
  targets.push(manager);
  targets.push(action(actions, 'CARREIRA DE JOGADOR', [788, 163, 425, 324], () => ctx.go('career', { kind: 'player' }), { className: 'xfc27-feature xfc27-feature--legend', text: 'CARREIRA DE JOGADOR' }));

  // O cartão Amistoso abre a seleção normal; o ícone à direita mantém o atalho
  // de Jogo Rápido aleatório que já existia no menu anterior.
  targets.push(action(actions, 'Amistoso · escolher times', [47, 501, 286, 162], () => ctx.go('friendly', { returnTo: 'menu' }), { id: 'friendly', className: 'xfc27-tile-action', text: 'JOGO RÁPIDO' }));
  targets.push(action(actions, 'Jogo rápido aleatório', [333, 501, 101, 162], () => ctx.go('quick', { returnTo: 'menu' }), { id: 'quick', className: 'xfc27-tile-action', text: 'TIME ALEATÓRIO' }));
  targets.push(action(actions, 'Loja do Ultimate Team', [447, 501, 376, 162], () => ctx.go('ultimate', { section: 'store' }), { id: 'ultimate', className: 'xfc27-tile-action', text: 'ULTIMATE TEAM' }));
  targets.push(action(actions, 'Missões', [836, 501, 376, 162], () => ctx.go('ultimate', { section: 'objectives' }), { id: 'news', className: 'xfc27-tile-action', text: 'FC NEWS' }));

  // Atalhos inferiores da referência. Os nomes visíveis são parte da imagem;
  // os botões seguem alinhados às mesmas áreas do screenshot.
  targets.push(action(actions, 'Clubes · seleção de times', [28, 688, 218, 119], () => ctx.go('kickoff'), { id: 'kickoff', className: 'xfc27-bottom-action', text: 'KICK OFF' }));
  targets.push(action(actions, 'Seleções · Copa do Mundo', [252, 688, 235, 119], () => ctx.go('worldcup', { returnTo: 'menu' }), { id: 'seasons', className: 'xfc27-bottom-action', text: 'SEASONS' }));
  targets.push(action(actions, 'Desafios · Centro de Treino', [493, 688, 259, 119], () => ctx.go('training', { returnTo: 'menu' }), { id: 'learn', className: 'xfc27-bottom-action', text: 'LEARN TO PLAY' }));
  targets.push(action(actions, 'Futebol feminino', [764, 688, 210, 119], () => ctx.toast('O modo de futebol feminino ainda não está disponível.'), { className: 'xfc27-bottom-action', text: 'FUTEBOL FEMININO' }));
  targets.push(action(actions, 'PvP', [983, 688, 208, 119], () => ctx.go('pvp'), { id: 'online-friendlies', className: 'xfc27-bottom-action', text: 'ONLINE FRIENDLIES' }));
  targets.push(action(actions, 'Eventos ao vivo · competições', [1191, 688, 350, 119], () => ctx.go('competitions'), { id: 'events', className: 'xfc27-bottom-action', text: 'TOURNAMENTS' }));

  xfc27Footer(node, {
    select: () => manager.click(),
    back: () => ctx.go('launch')
  });

  function onKey(event) {
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go('launch');
      return true;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      const active = document.activeElement;
      if (active?.matches?.('.xfc27-action')) { active.click(); return true; }
      targets[0]?.focus();
      return true;
    }
    const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (delta) {
      const active = document.activeElement;
      const index = targets.indexOf(active);
      targets[(index + delta + targets.length) % targets.length]?.focus();
      return true;
    }
    return false;
  }
  return { node, onKey };
}
