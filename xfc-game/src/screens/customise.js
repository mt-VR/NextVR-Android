// Menu Customise do XFC 27: grade 4 × 2 de configurações, perfil, equipes,
// elenco, criação de jogador e trilha sonora, no visual azul das referências.

import { el } from '../ui/dom.js';
import { xfEsportesBadge, xfcWordmark } from '../ui/brand.js';
import { saveProfile } from '../state.js';

const TILES = [
  { id: 'settings', title: 'SETTINGS', icon: 'settings', description: 'Som, imagem, controles e idioma.' },
  { id: 'profile', title: 'PROFILE', icon: 'profile', description: 'Seu nome, progresso e identidade XFC.' },
  { id: 'online', title: 'ONLINE\nSETTINGS', icon: 'online', description: 'Privacidade, conexão e jogo entre plataformas.' },
  { id: 'playtime', title: 'PLAYTIME', icon: 'playtime', description: 'Resumo do seu tempo de jogo.' },
  { id: 'edit-teams', title: 'EDIT\nTEAMS', icon: 'edit', description: 'Escolha as equipes e os times disponíveis.' },
  { id: 'team-sheets', title: 'TEAM\nSHEETS', icon: 'sheet', description: 'Veja a formação e os jogadores.' },
  { id: 'create-player', title: 'CREATE\nPLAYER', icon: 'create', description: 'Crie um atleta para o seu perfil.' },
  { id: 'trax', title: 'EA SPORTS™\nTRAX', icon: 'music', description: 'Controle a trilha sonora do XFC.' }
];

const ICONS = {
  settings: '<svg viewBox="0 0 64 64"><path d="M27 3h10l2 8a22 22 0 0 1 5 2l7-4 7 8-5 6a22 22 0 0 1 1 6l8 4v10l-8 2a22 22 0 0 1-2 5l4 7-8 7-6-5a22 22 0 0 1-6 1l-4 8H22l-2-8a22 22 0 0 1-5-2l-7 4-7-8 5-6a22 22 0 0 1-1-6l-8-4V28l8-2a22 22 0 0 1 2-5l-4-7 8-7 6 5a22 22 0 0 1 6-1z" transform="translate(3 0) scale(.9)"/><circle cx="32" cy="33" r="10" fill="#102d62"/></svg>',
  profile: '<svg viewBox="0 0 64 64"><rect x="11" y="5" width="42" height="54" rx="3"/><circle cx="32" cy="23" r="8" fill="#102d62"/><path d="M21 47h22M22 53h20" stroke="#102d62" stroke-width="4" stroke-linecap="round"/></svg>',
  online: '<svg viewBox="0 0 64 64"><circle cx="38" cy="28" r="22" fill="none" stroke="currentColor" stroke-width="6"/><path d="M17 29h42M38 6c-8 9-11 17-11 23s3 15 11 21m0-44c8 9 11 17 11 23s-3 15-11 21" fill="none" stroke="currentColor" stroke-width="4"/><path d="M7 48a17 17 0 0 1 25-15l-3 8 10-1-2 10a17 17 0 0 1-30-2Z"/></svg>',
  playtime: '<svg viewBox="0 0 64 64"><path d="M12 4h40v7L40 25v14l12 14v7H12v-7l12-14V25L12 11z"/><path d="M22 13h20M22 51h20" stroke="#102d62" stroke-width="4"/></svg>',
  edit: '<svg viewBox="0 0 64 64"><path d="M8 9h48v46H8z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M32 10v44M9 32h46M32 26a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="m37 49 16-16 7 7-16 16-9 2z"/></svg>',
  sheet: '<svg viewBox="0 0 64 64"><path d="M8 8h48v48H8z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M32 9v46M9 32h46M32 26a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" fill="none" stroke="currentColor" stroke-width="4"/></svg>',
  create: '<svg viewBox="0 0 64 64"><circle cx="25" cy="18" r="11"/><path d="M4 56c0-13 9-22 21-22s20 9 20 22"/><circle cx="49" cy="46" r="13"/><path d="M49 39v14M42 46h14" stroke="#102d62" stroke-width="4" stroke-linecap="round"/></svg>',
  music: '<svg viewBox="0 0 64 64"><path d="M37 10v35a10 10 0 1 1-6-9V17l26-7v35a10 10 0 1 1-6-9V7z"/><path d="M37 20l20-6" stroke="#102d62" stroke-width="4"/></svg>'
};

function logoLockup() {
  return el('div', { class: 'customise__brand', 'aria-label': 'XFC 27' },
    el('span', { class: 'customise__badge', html: xfEsportesBadge({ title: 'XF Esports' }) }),
    el('span', { class: 'customise__wordmark', html: xfcWordmark() }),
    el('b', { class: 'customise__year', text: '27' })
  );
}

export function customiseScreen(ctx, params = {}) {
  let focusIndex = Math.max(0, TILES.findIndex(tile => tile.id === params.focus));
  let dialog = null;

  const header = el('header', { class: 'customise__header' },
    logoLockup(),
    el('div', { class: 'customise__breadcrumb' },
      el('button', { type: 'button', onClick() { ctx.go('menu'); } }, 'HOME'),
      el('span', { text: '›' }),
      el('b', { text: 'CUSTOMISE' })
    )
  );

  const grid = el('div', { class: 'customise__grid', role: 'grid', 'aria-label': 'Opções de personalização' });
  const buttons = TILES.map((tile, index) => {
    const button = el('button', {
      class: `customise__tile${index === focusIndex ? ' is-active' : ''}`,
      type: 'button',
      role: 'gridcell',
      dataset: { tile: tile.id },
      'aria-label': `${tile.title.replace('\n', ' ')}. ${tile.description}`,
      'aria-pressed': index === focusIndex ? 'true' : 'false',
      onClick() { activate(index); }
    },
      el('span', { class: 'customise__tile-title', text: tile.title }),
      el('span', { class: 'customise__tile-icon', html: ICONS[tile.icon] })
    );
    grid.appendChild(button);
    return button;
  });

  const footer = el('footer', { class: 'customise__footer' },
    el('div', { class: 'customise__footer-hints' },
      el('span', { class: 'customise__pad', text: '✕' }), el('span', { text: 'Select' }),
      el('span', { class: 'customise__pad customise__pad--back', text: '○' }), el('span', { text: 'Back' }),
      el('span', { class: 'customise__touch', text: '▤' }), el('span', { text: 'Training Centre' })
    ),
    el('span', { class: 'customise__version', text: 'XFC 27  •  XF ESPORTS' })
  );

  const node = el('div', { class: 'screen screen--customise' },
    el('div', { class: 'xfc-stadium-lights', 'aria-hidden': 'true' }),
    header,
    grid,
    footer
  );

  function updateFocus() {
    buttons.forEach((button, index) => {
      const active = index === focusIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function closeDialog() {
    dialog?.remove();
    dialog = null;
  }

  function openDialog(tile) {
    closeDialog();
    const title = tile.id === 'accessibility' ? 'ACCESSIBILITY' : tile.title.replace('\n', ' ');
    const copy = tile.id === 'accessibility'
      ? 'Personalize a leitura e os controles para jogar com conforto.'
      : tile.description;
    const body = el('div', { class: 'customise__dialog-body' });
    let saveAction = () => closeDialog();

    if (tile.id === 'settings') {
      const volume = el('input', { type: 'range', min: '0', max: '100', value: String(ctx.state.settings.volume ?? 78), 'aria-label': 'Volume geral' });
      volume.addEventListener('input', () => { ctx.state.settings.volume = Number(volume.value); });
      const brightness = el('input', { type: 'range', min: '50', max: '130', value: String(ctx.state.settings.brightness ?? 100), 'aria-label': 'Brilho' });
      brightness.addEventListener('input', () => { ctx.state.settings.brightness = Number(brightness.value); });
      body.append(
        el('label', { class: 'customise__setting-row' }, el('span', { text: 'Volume geral' }), volume),
        el('label', { class: 'customise__setting-row' }, el('span', { text: 'Brilho da tela' }), brightness),
        el('p', { class: 'customise__note', text: 'Idioma: Português (Brasil)  •  Controles: Clássico' })
      );
    } else if (tile.id === 'profile') {
      const name = el('input', { class: 'customise__text-input', type: 'text', maxlength: '24', value: ctx.state.profile.name || 'XFC Player', 'aria-label': 'Nome do perfil' });
      body.append(el('label', { class: 'customise__field' }, el('span', { text: 'Nome do jogador' }), name));
      saveAction = () => {
        ctx.state.profile.name = name.value.trim() || 'XFC Player';
        saveProfile(ctx.state);
        ctx.toast('Perfil atualizado.');
        closeDialog();
      };
    } else if (tile.id === 'online') {
      body.append(
        toggleRow('Status online', ctx.state.settings.online !== false, value => { ctx.state.settings.online = value; }),
        toggleRow('Jogo entre plataformas', ctx.state.settings.crossplay !== false, value => { ctx.state.settings.crossplay = value; }),
        el('p', { class: 'customise__note', text: 'As preferências ficam salvas neste aparelho.' })
      );
    } else if (tile.id === 'playtime') {
      const matches = Number(ctx.state.profile.matchesPlayed || 0);
      body.append(
        el('div', { class: 'customise__stats' },
          el('div', {}, el('b', { text: String(matches) }), el('span', { text: 'PARTIDAS' })),
          el('div', {}, el('b', { text: matches ? `${Math.max(1, Math.round(matches * 0.2))}h` : '0h' }), el('span', { text: 'TEMPO DE JOGO' }))
        ),
        el('p', { class: 'customise__note', text: 'Continue jogando para atualizar suas estatísticas.' })
      );
    } else if (tile.id === 'create-player') {
      const name = el('input', { class: 'customise__text-input', type: 'text', maxlength: '20', placeholder: 'Nome do atleta', 'aria-label': 'Nome do atleta' });
      const number = el('input', { class: 'customise__text-input customise__text-input--number', type: 'number', min: '1', max: '99', value: '10', 'aria-label': 'Número da camisa' });
      body.append(
        el('label', { class: 'customise__field' }, el('span', { text: 'Nome do atleta' }), name),
        el('label', { class: 'customise__field' }, el('span', { text: 'Número' }), number)
      );
      saveAction = () => {
        const playerName = name.value.trim();
        if (!playerName) {
          name.focus();
          return;
        }
        ctx.state.profile.createdPlayer = { name: playerName, number: Number(number.value) || 10 };
        saveProfile(ctx.state);
        ctx.toast(`${playerName} foi criado.`);
        closeDialog();
      };
    } else if (tile.id === 'trax') {
      body.append(
        toggleRow('Trilha sonora', ctx.state.settings.trax !== false, value => { ctx.state.settings.trax = value; }),
        el('p', { class: 'customise__note', text: 'Ative ou silencie a música do XFC.' })
      );
    } else if (tile.id === 'accessibility') {
      body.append(
        toggleRow('Texto ampliado', Boolean(ctx.state.settings.largeText), value => { ctx.state.settings.largeText = value; }),
        toggleRow('Alto contraste', Boolean(ctx.state.settings.highContrast), value => { ctx.state.settings.highContrast = value; }),
        toggleRow('Vibração', ctx.state.settings.vibration !== false, value => { ctx.state.settings.vibration = value; })
      );
    }

    const close = () => closeDialog();
    const panel = el('section', { class: 'customise__dialog', role: 'dialog', 'aria-modal': 'true', 'aria-label': title },
      el('button', { class: 'customise__dialog-close', type: 'button', 'aria-label': 'Fechar', onClick: close }, '×'),
      el('span', { class: 'customise__dialog-kicker', text: 'XFC 27  /  CUSTOMISE' }),
      el('h2', { class: 'customise__dialog-title', text: title }),
      el('p', { class: 'customise__dialog-copy', text: copy }),
      body,
      el('button', { class: 'customise__dialog-save', type: 'button', onClick: () => saveAction() }, tile.id === 'profile' || tile.id === 'create-player' ? 'SALVAR' : 'CONCLUÍDO')
    );
    dialog = el('div', { class: 'customise__scrim', onClick(event) { if (event.target === dialog) close(); } }, panel);
    node.appendChild(dialog);
    panel.querySelector('input')?.focus();
  }

  function toggleRow(label, initial, onChange) {
    const input = el('input', { type: 'checkbox', checked: initial ? 'checked' : null, 'aria-label': label });
    input.addEventListener('change', () => onChange(input.checked));
    return el('label', { class: 'customise__toggle-row' }, el('span', { text: label }), el('span', { class: 'customise__toggle' }, input, el('i')));
  }

  function activate(index) {
    focusIndex = (index + TILES.length) % TILES.length;
    updateFocus();
    const tile = TILES[focusIndex];
    if (tile.id === 'edit-teams') {
      ctx.go('kickoff');
    } else if (tile.id === 'team-sheets') {
      ctx.go('squad', { teamId: ctx.state.selection.home || 'fc-barcelona' });
    } else {
      openDialog(tile);
    }
  }

  if (params.panel === 'accessibility') {
    openDialog({ id: 'accessibility', title: 'ACCESSIBILITY', description: 'Ajuste a leitura e os controles.' });
  }

  return {
    node,
    onKey(event) {
      if (dialog) {
        if (event.key === 'Escape' || event.key === 'Backspace') {
          closeDialog();
          return true;
        }
        return false;
      }
      if (event.key === 'ArrowRight') { focusIndex = (focusIndex % 4) + (Math.floor(focusIndex / 4) * 4); focusIndex = Math.min(TILES.length - 1, focusIndex + 1); updateFocus(); return true; }
      if (event.key === 'ArrowLeft') { focusIndex = Math.max(0, focusIndex - 1); updateFocus(); return true; }
      if (event.key === 'ArrowDown') { focusIndex = Math.min(TILES.length - 1, focusIndex + 4); updateFocus(); return true; }
      if (event.key === 'ArrowUp') { focusIndex = Math.max(0, focusIndex - 4); updateFocus(); return true; }
      if (event.key === 'Enter' || event.key === ' ') { activate(focusIndex); return true; }
      if (event.key === 'Escape' || event.key === 'Backspace') { ctx.go(params.returnTo || 'menu',params.returnParams || {}); return true; }
      return false;
    }
  };
}
