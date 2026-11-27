// Tela Modos usa integralmente a captura XFC 27 fornecida.
import { xfc27Footer, xfc27Hotspot, xfc27Screen } from '../ui/reference-menu.js';

function card(node, label, rect, action, option) {
  const button = xfc27Hotspot(label, rect, action, {
    class: 'ref-button modes__option xfc27-action',
    dataset: { option }
  });
  node.append(button);
  return button;
}

export function modesScreen(ctx) {
  const node = xfc27Screen('screen--modes', 'modes', 'Menu de modos XFC 27');
  const cards = [];
  let activeCard = 0;
  const back = () => ctx.go('menu');
  const select = () => cards[activeCard]?.click();

  // Cabeçalho do screenshot: manter a navegação no próprio fluxo XFC.
  node.append(
    xfc27Hotspot('Início', [333, 20, 129, 76], back, { class: 'ref-button xfc27-action' }),
    xfc27Hotspot('Modos', [465, 20, 139, 76], () => {}, { class: 'ref-button xfc27-action' }),
    xfc27Hotspot('Personalizar', [607, 20, 186, 76], () => ctx.go('customise'), { class: 'ref-button xfc27-action' }),
    xfc27Hotspot('Configurações', [790, 20, 202, 76], () => ctx.go('customise'), { class: 'ref-button xfc27-action' }),
    xfc27Hotspot('Perfil e configurações', [1280, 22, 310, 70], () => ctx.go('customise'), { class: 'ref-button xfc27-action' })
  );

  cards.push(card(node, 'PvP · jogar contra outras pessoas', [46, 167, 730, 298], () => ctx.go('pvp'), 'pvp'));
  cards.push(card(node, 'Missões · objetivos do Ultimate Team', [793, 167, 732, 298], () => ctx.go('ultimate', { section: 'objectives' }), 'missions'));
  cards.push(card(node, 'Futebol feminino', [46, 485, 730, 290], () => ctx.toast('O modo de futebol feminino ainda não está disponível.'), 'women'));
  cards.push(card(node, 'Desafio · Centro de Treino', [793, 485, 732, 290], () => ctx.go('training', { returnTo: 'modes' }), 'challenge'));
  cards.forEach((button, index) => button.addEventListener('focus', () => { activeCard = index; }));
  xfc27Footer(node, { select, back });

  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') { back(); return true; }
      const delta = { ArrowRight: 1, ArrowDown: 2, ArrowLeft: -1, ArrowUp: -2 }[event.key];
      if (delta) {
        const focused = cards.indexOf(document.activeElement);
        activeCard = ((focused >= 0 ? focused : activeCard) + delta + cards.length) % cards.length;
        cards[activeCard]?.focus();
        return true;
      }
      if ((event.key === 'Enter' || event.key === ' ') && !document.activeElement?.matches?.('button')) {
        select();
        return true;
      }
      return false;
    }
  };
}
