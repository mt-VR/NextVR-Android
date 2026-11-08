// Seletor de estádio: a foto do estádio vira o próprio botão de entrar.
// Nada de "INICIAR PARTIDA" — o estádio escolhido envolve a partida 3D.

import { el } from './dom.js';
import { STADIUMS } from '../match3d/stadiums.js';

export function createStadiumPicker({ onEnter, size = 'md', initialIndex = null, caption = 'TOQUE PARA ENTRAR', onChange } = {}) {
  const count = STADIUMS.length;
  let index = Number.isFinite(initialIndex)
    ? ((Math.floor(initialIndex) % count) + count) % count
    : Math.floor(Math.random() * count);

  const name = el('b', { class: 'stadium-cta__name' });
  const tag = el('span', { class: 'stadium-cta__tag' });
  const captionEl = el('span', { class: 'stadium-cta__caption', text: caption });
  const dots = el('span', { class: 'stadium-cta__dots' },
    STADIUMS.map(() => el('i', { class: 'stadium-cta__dot' })));

  const button = el('div', {
    class: `stadium-cta stadium-cta--${size}`,
    role: 'button',
    tabindex: '0',
    'aria-label': 'Entrar em campo'
  },
    el('span', { class: 'stadium-cta__shade' }),
    el('span', { class: 'stadium-cta__meta' },
      el('span', { class: 'stadium-cta__label', text: 'ESTÁDIO OFICIAL' }),
      name,
      tag,
      dots
    ),
    captionEl
  );

  function paint() {
    const stadium = STADIUMS[index];
    // A arte aparece texturizada no próprio botão (cama + cobertura).
    button.style.setProperty('--stadium-photo', `url("${stadium.file}")`);
    name.textContent = stadium.name;
    tag.textContent = stadium.tag;
    [...dots.children].forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === index);
    });
  }

  const arrow = (direction, symbol) => el('span', {
    class: `stadium-cta__arrow stadium-cta__arrow--${direction > 0 ? 'next' : 'prev'}`,
    role: 'button',
    'aria-label': direction > 0 ? 'Próximo estádio' : 'Estádio anterior',
    tabindex: '0'
  }, symbol);

  const prev = arrow(-1, '‹');
  const next = arrow(1, '›');
  button.append(prev, next);

  const step = direction => event => {
    event.preventDefault();
    event.stopPropagation();
    index = (index + direction + count) % count;
    paint();
    onChange?.(index);
  };
  prev.addEventListener('click', step(-1));
  next.addEventListener('click', step(1));
  prev.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') step(-1)(event); });
  next.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') step(1)(event); });

  button.addEventListener('click', () => onEnter?.(index));
  button.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onEnter?.(index);
    }
  });

  paint();

  return {
    node: button,
    get index() {
      return index;
    }
  };
}
