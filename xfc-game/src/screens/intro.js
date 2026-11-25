// Usa diretamente o GIF enviado pelo usuário, sem redesenhar nem converter a arte.
import { el } from '../ui/dom.js';

const GIF_SRC = 'assets/brand/xfc-intro-source.gif';
const GIF_LOOP_MS = 3500;
const LOAD_FAILSAFE_MS = 8000;

export function introScreen(ctx) {
  let advanceTimer = null;
  let failsafeTimer = null;
  let advanced = false;

  const advance = () => {
    if (advanced) return;
    advanced = true;
    clearTimeout(advanceTimer);
    clearTimeout(failsafeTimer);
    ctx.go('launch');
  };

  const scheduleAdvance = () => {
    if (advanced || advanceTimer) return;
    clearTimeout(failsafeTimer);
    // O GIF tem nove quadros de 350 ms; deixa uma volta terminar antes de seguir.
    advanceTimer = setTimeout(advance, GIF_LOOP_MS);
  };

  const onImageError = () => {
    clearTimeout(failsafeTimer);
    if (!advanceTimer) advanceTimer = setTimeout(advance, 4200);
  };

  const art = el('img', {
    class: 'intro-reference__art',
    src: GIF_SRC,
    alt: 'XFC 27 · animação de abertura',
    draggable: 'false',
    decoding: 'sync',
    fetchpriority: 'high',
    onLoad: scheduleAdvance,
    onError: onImageError
  });

  const node = el('div', {
    class: 'screen screen--intro intro-reference',
    role: 'button',
    tabindex: '0',
    'aria-label': 'Continuar para o XFC',
    onClick: advance
  }, art);

  return {
    node,
    mount() {
      // Se a imagem já tiver carregado fora da árvore, complete cobre o load perdido.
      failsafeTimer = setTimeout(advance, LOAD_FAILSAFE_MS);
      if (art.complete && art.naturalWidth > 0) scheduleAdvance();
    },
    unmount() {
      clearTimeout(advanceTimer);
      clearTimeout(failsafeTimer);
    },
    onKey(event) {
      if (['Enter', ' ', 'Escape'].includes(event.key)) {
        advance();
        return true;
      }
      return false;
    }
  };
}
