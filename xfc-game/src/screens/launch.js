// Tela de abertura do XFC: arte principal e animação de partículas ao entrar.

import { el } from '../ui/dom.js';

export function launchScreen(ctx) {
  let entered = false;
  let timer = null;
  let node = null;

  const enter = () => {
    if (entered) return;
    entered = true;
    node?.classList.add('is-entering');
    const burst = el('span', { class: 'launch__particles', 'aria-hidden': 'true' });
    for (let index = 0; index < 28; index += 1) {
      const angle = (Math.PI * 2 * index) / 28 + Math.random() * 0.18;
      const distance = 62 + Math.random() * 188;
      const particle = el('i', { class: 'launch__particle' });
      particle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
      particle.style.setProperty('--delay', `${Math.random() * 90}ms`);
      burst.appendChild(particle);
    }
    node?.appendChild(burst);
    timer = setTimeout(() => ctx.go('menu'), 460);
  };

  node = el('div', { class: 'screen screen--launch' },
    el('img', {
      class: 'launch__art',
      src: 'assets/brand/launch-xfc27.png',
      alt: 'XF Esportes · XFC 27 · Entrar — arte original fornecida pelo usuário'
    }),
    el('button', {
      class: 'launch__enter',
      type: 'button',
      'aria-label': 'Entrar no XFC',
      onClick: enter
    }),
    el('span', { class: 'launch__sr', text: 'Pressione Enter para entrar' })
  );

  return {
    node,
    onKey(event) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
        enter();
        return true;
      }
      return false;
    },
    unmount() {
      if (timer) clearTimeout(timer);
    }
  };
}
