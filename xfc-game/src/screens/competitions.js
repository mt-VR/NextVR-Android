// Seletor de competições: arte XFC 27 fornecida, hotspots com navegação real.
import { el } from '../ui/dom.js';
import { COMPETITIONS } from '../data/tournament.js';
import { xfc27Footer, xfc27Hotspot, xfc27Screen } from '../ui/reference-menu.js';

const FEATURED = [
  ['uefa-champions-league', 'UEFA Champions League', [45, 250, 535, 180]],
  ['conmebol-libertadores', 'CONMEBOL Libertadores', [594, 250, 553, 180]],
  ['uefa-europa-league', 'UEFA Europa League', [45, 440, 535, 168]],
  ['conmebol-sudamericana', 'CONMEBOL Sudamericana', [594, 440, 553, 168]],
  ['copa-do-brasil', 'Copa do Brasil', [45, 620, 535, 154]],
  ['world-cup', 'Copa do Mundo', [594, 620, 553, 154]]
];

export function competitionsScreen(ctx) {
  const node = xfc27Screen('screen--competitions', 'competitions', 'Menu de competições XFC 27');
  const buttons = [];
  let activeButton = 0;
  const open = id => ctx.go('competition', { competitionId: id, returnTo: 'competitions' });

  node.append(xfc27Hotspot('Início', [333, 20, 129, 76], () => ctx.go('menu'), { class: 'ref-button xfc27-action' }));
  node.append(xfc27Hotspot('Modos', [465, 20, 139, 76], () => ctx.go('modes'), { class: 'ref-button xfc27-action' }));
  node.append(xfc27Hotspot('Personalizar', [607, 20, 186, 76], () => ctx.go('customise'), { class: 'ref-button xfc27-action' }));
  node.append(xfc27Hotspot('Competições', [790, 20, 202, 76], () => {}, { class: 'ref-button xfc27-action' }));
  node.append(xfc27Hotspot('Perfil e configurações', [1280, 22, 310, 70], () => ctx.go('customise'), { class: 'ref-button xfc27-action' }));

  for (const [id, label, rect] of FEATURED) {
    if (!COMPETITIONS.some(item => item.id === id)) continue;
    const button = xfc27Hotspot(label, rect, () => open(id), {
      class: 'ref-button xfc27-action competitions__option',
      dataset: { competition: id }
    });
    node.append(button);
    buttons.push(button);
    button.addEventListener('focus', () => { activeButton = buttons.length - 1; });
  }
  xfc27Footer(node, {
    select: () => buttons[activeButton]?.click(),
    back: () => ctx.go('menu')
  });

  // A arte destaca seis torneios; os dois modos locais já existentes continuam
  // disponíveis em “Outras competições” para não perder conteúdo do catálogo.
  const extras = el('button', {
    class: 'ref-button xfc27-action competitions__extras',
    type: 'button',
    'aria-label': 'Outras competições: Copa América e Brasileirão',
    title: 'Outras competições',
    style: { left: '77.5%', top: '87.4%', width: '19.8%', height: '9.2%' },
    onClick: () => showExtras()
  }, el('span', { class: 'ref-sr', text: 'Outras competições' }));
  node.append(extras);

  let dialog = null;
  function showExtras() {
    dialog?.remove();
    const overlay = el('div', { class: 'xfc27-dialog-backdrop' });
    dialog = el('section', { class: 'xfc27-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Outras competições' },
      el('h2', { text: 'Outras competições' }),
      el('p', { text: 'As competições adicionais do catálogo XFC continuam disponíveis.' }),
      ...[['copa-america', 'Copa América'], ['brasileirao', 'Brasileirão']].map(([id, label]) =>
        el('button', { type: 'button', class: 'xfc27-dialog__action', text: label, onClick: () => open(id) })),
      el('button', { type: 'button', class: 'xfc27-dialog__close', text: 'Voltar', onClick: () => { overlay.remove(); dialog = null; extras.focus(); } })
    );
    overlay.append(dialog);
    node.append(overlay);
    dialog.querySelector('button')?.focus();
  }

  return {
    node,
    onKey(event) {
      if (dialog && ['Escape', 'Backspace'].includes(event.key)) {
        dialog.closest('.xfc27-dialog-backdrop')?.remove();
        dialog = null;
        extras.focus();
        return true;
      }
      if (dialog && event.key === 'Tab') {
        const focusable = [...dialog.querySelectorAll('button')];
        const current = focusable.indexOf(document.activeElement);
        const next = (current + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length;
        focusable[next]?.focus();
        return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') { ctx.go('menu'); return true; }
      const delta = { ArrowRight: 1, ArrowDown: 2, ArrowLeft: -1, ArrowUp: -2 }[event.key];
      if (delta) {
        const focused = buttons.indexOf(document.activeElement);
        activeButton = ((focused >= 0 ? focused : activeButton) + delta + buttons.length) % buttons.length;
        buttons[activeButton]?.focus();
        return true;
      }
      if ((event.key === 'Enter' || event.key === ' ') && !document.activeElement?.matches?.('button')) {
        buttons[0]?.click();
        return true;
      }
      return false;
    }
  };
}
