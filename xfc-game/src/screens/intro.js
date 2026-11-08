// Intro do XFC: selo da XF Esports + logotipo do jogo, com a barra de
// carregamento que antecede o menu principal.

import { el } from '../ui/dom.js';
import { xfEsportesBadge, xfcWordmark } from '../ui/brand.js';

export function introScreen(ctx) {
  let timer = null;

  const node = el('div', { class: 'screen screen--intro' },
    el('div', { class: 'intro__sweep' }),
    el('div', { class: 'intro__vignette' }),
    el('div', { class: 'intro__content' },
      el('div', { class: 'intro__lockup' },
        el('div', { class: 'intro__badge', html: xfEsportesBadge() }),
        el('div', { class: 'intro__wordmark', html: xfcWordmark() })
      ),
      el('p', { class: 'intro__tagline', text: 'XF Esports' }),
      el('div', { class: 'intro__loading' }, el('span')),
      el('div', { class: 'intro__hint', text: 'Pressione Enter para continuar' })
    )
  );

  const advance = () => {
    if (timer) clearTimeout(timer);
    timer = null;
    ctx.go('menu');
  };

  return {
    node,
    mount() {
      timer = setTimeout(advance, 4200);
    },
    unmount() {
      if (timer) clearTimeout(timer);
      timer = null;
    },
    onKey(event) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
        advance();
        return true;
      }
      return false;
    }
  };
}
