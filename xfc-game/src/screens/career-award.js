// Cerimônia de prêmio: a arte do usuário em tela cheia.
// Bola de Ouro, Puskás e Chuteira de Ouro. Sem SVG, sem caixa extra —
// a foto já tem o texto e o Continuar; o botão transparente fica em cima.

import {el} from '../ui/dom.js';
import {completeAwardCinematic} from '../data/career-competitions.js';

const AWARD_ART = {
  'ballon-dor': {file: 'assets/awards/ballon-dor.jpg', label: 'Bola de Ouro'},
  'puskas': {file: 'assets/awards/puskas.jpg', label: 'Prêmio Puskás'},
  'golden-boot': {file: 'assets/awards/golden-boot.jpg', label: 'Chuteira de Ouro'}
};

export function awardArt(id) {
  return AWARD_ART[id] || AWARD_ART['ballon-dor'];
}

export function careerAward(ctx, {career, award, persist, back}) {
  const art = awardArt(award.id);
  const finish = () => {
    completeAwardCinematic(career, award.id);
    if (!persist()) return;
    back();
  };
  const node = el('section', {
    class: 'screen career-award',
    dataset: {award: award.id},
    'aria-label': art.label,
    onClick: event => {
      if (event.target.closest('button')) return;
      finish();
    }
  },
    el('style', {text: styles}),
    el('img', {
      class: 'career-award__art',
      src: art.file,
      alt: art.label,
      draggable: 'false'
    }),
    el('button', {
      type: 'button',
      class: 'career-award__continue',
      'aria-label': 'Continuar',
      onClick: event => {
        event.stopPropagation();
        finish();
      }
    }));
  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        finish();
        return true;
      }
      return false;
    }
  };
}

const styles = `
.career-award{position:relative;width:100%;height:100%;overflow:hidden;background:#05080d;margin:0;padding:0}
.career-award__art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;pointer-events:none;user-select:none}
.career-award__continue{position:absolute;left:54%;right:8%;top:70%;bottom:14%;border:0;padding:0;margin:0;background:transparent;cursor:pointer;z-index:2}
.career-award__continue:focus-visible{outline:3px solid #f0c96a;outline-offset:4px}
@media (max-width:760px){
  .career-award__art{object-fit:cover;object-position:center 40%}
  .career-award__continue{left:48%;right:6%;top:72%;bottom:10%}
}
`;

export const awardStyles = styles;
