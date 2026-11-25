// Abertura do XFC: usa a animação enviada pelo usuário, sem redesenhar a arte.
import { el } from '../ui/dom.js';

const VIDEO_SRC = 'assets/brand/xfc-intro.mp4';
const POSTER_SRC = 'assets/brand/xfc-intro-poster.jpg';
const END_HOLD_MS = 850;
const PLAYBACK_FAILSAFE_MS = 6200;

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

  const onEnded = () => {
    clearTimeout(advanceTimer);
    advanceTimer = setTimeout(advance, END_HOLD_MS);
  };

  const onError = () => {
    clearTimeout(advanceTimer);
    advanceTimer = setTimeout(advance, 4200);
  };

  const video = el('video', {
    class: 'intro-reference__video',
    src: VIDEO_SRC,
    poster: POSTER_SRC,
    autoplay: true,
    muted: true,
    playsinline: true,
    preload: 'auto',
    'aria-hidden': 'true',
    onEnded,
    onError
  });

  const node = el('div', {
    class: 'screen screen--intro intro-reference',
    role: 'button',
    tabindex: '0',
    'aria-label': 'Continuar para o XFC',
    onClick: advance
  }, video);

  return {
    node,
    mount() {
      // autoplay + muted iniciam o vídeo no WebView sem bloquear a inicialização.
      failsafeTimer = setTimeout(advance, PLAYBACK_FAILSAFE_MS);
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
