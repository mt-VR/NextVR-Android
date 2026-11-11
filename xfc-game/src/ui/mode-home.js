import { el } from './dom.js';

/** A direct route to the XFC mode selector, independent of navigation history. */
export function modeHomeButton(ctx, className = '') {
  return el('button', {
    class: `mode-home-button ${className}`.trim(),
    type: 'button',
    'aria-label': 'Voltar ao início, seleção de modos',
    title: 'Voltar diretamente à seleção de modos',
    onClick: () => ctx.go('modes')
  },
    el('span', { class: 'mode-home-button__icon', 'aria-hidden': 'true', text: '⌂' }),
    el('span', { text: 'VOLTAR AO INÍCIO' })
  );
}
