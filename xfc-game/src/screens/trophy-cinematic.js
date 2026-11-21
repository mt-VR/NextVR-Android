import {el} from '../ui/dom.js';
import {createTrophyCinematic} from '../match3d/trophy-cinematic.js';

// Tela de conquista de título. Recebe os dados do troféu (nome, clube,
// competição, cores) e mostra a cutscene 3D: estádio ao fundo, atletas de
// braços erguidos e a taça girando. O botão "Continuar" (e Escape) fecha.

const TROPHY_KINDS = {
  'uefa-champions-league': 'continental',
  'conmebol-libertadores': 'continental',
  copa: 'worldcup',
  'copa-do-mundo': 'worldcup',
  worldcup: 'worldcup'
};
function trophyKindFor(event){
  if(event.kind==='continental'||event.kind==='worldcup'||event.kind==='national')return event.kind;
  return TROPHY_KINDS[event.competitionId||event.id]||'national';
}

export function trophyCinematic(ctx, params = {}) {
  const event = params.event || {};
  const title = event.title || event.competition || 'CAMPEÃO';
  const clubName = event.clubName || event.club || '';
  const year = event.season ? `TEMPORADA ${event.season}` : (event.year ? String(event.year) : '');
  const canvas = el('canvas', { class: 'trophy-film__canvas', 'aria-label': `Comemoração do título: ${title}` });
  const status = el('p', { class: 'trophy-film__status', text: 'PREPARANDO A COMEMORAÇÃO', 'aria-live': 'polite' });
  const progress = el('progress', { max: 1, value: 0, 'aria-label': 'Progresso da comemoração' });
  let dead = false, film = null, raf = 0, last = 0, elapsed = 0, ready = false, finished = false;

  const finish = () => {
    if (dead || finished) return;
    finished = true;
    if (params.onDone) params.onDone();
    else ctx.go(params.returnTo || 'menu');
  };
  const skip = el('button', { type: 'button', class: 'trophy-film__skip', text: 'Continuar', onClick: finish });
  const node = el('section', {
    class: 'screen trophy-film',
    dataset: { ready: 'false' },
    'aria-label': `Conquista: ${title}`
  },
    el('style', { text: styles }),
    canvas,
    el('div', { class: 'trophy-film__vignette' }),
    el('header', { class: 'trophy-film__header' },
      el('span', { text: 'XFC 27 / CONQUISTA' }), skip),
    el('div', { class: 'trophy-film__title' },
      el('p', { class: 'trophy-film__eyebrow', text: 'CAMPEÃO' }),
      el('h1', { text: title }),
      clubName ? el('p', { class: 'trophy-film__club', text: `${clubName}${year ? ` · ${year}` : ''}` }) : null),
    el('footer', { class: 'trophy-film__footer' }, status, progress),
    el('button', { type: 'button', class: 'trophy-film__cta', text: 'CONTINUAR', onClick: finish })
  );

  const reducedMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const duration = reducedMotion ? 3.6 : 7.2;

  function resize() {
    if (dead || !film) return;
    const rect = node.getBoundingClientRect();
    if (rect.width && rect.height) film.resize(rect.width, rect.height);
  }

  function tick(now) {
    if (dead) return;
    if (ready && !document.hidden) {
      if (last) elapsed += Math.max(0, (now - last) / 1000);
      const frame = film.render(Math.max(0, (now - last) / 1000 || 0));
      if (frame) {
        progress.value = Math.min(1, elapsed / duration);
        // O botão de continuar só aparece quando a cena já "abriu".
        if (elapsed > 1.1) node.classList.add('is-ready');
        if (elapsed >= duration) {
          // A cena continua girando até o jogador tocar em continuar; o
          // progresso para em 1 para indicar que a comemoração está pronta.
          progress.value = 1;
          status.textContent = 'CONQUISTA CONFIRMADA';
        } else {
          status.textContent = elapsed > 3.4 ? 'COMEMORAÇÃO DA EQUIPE' : 'A TAÇA ENTRA EM CAMPO';
        }
      }
    }
    last = document.hidden ? 0 : now;
    raf = requestAnimationFrame(tick);
  }

  async function mount() {
    try {
      const created = await createTrophyCinematic(canvas, { ...event, trophy: trophyKindFor(event) }, {
        reducedMotion,
        quality: ctx.state?.profile?.graphicsQuality || 'medium'
      });
      if (dead) { created.dispose(); return; }
      film = created;
      ready = true;
      node.dataset.ready = 'true';
      resize();
      globalThis.addEventListener?.('resize', resize);
      raf = requestAnimationFrame(tick);
    } catch (error) {
      // Sem WebGL a tela ainda entrega o título (e não trava o fluxo).
      if (dead) return;
      node.dataset.fallback = 'true';
      status.textContent = 'COMEMORAÇÃO INDISPONÍVEL NESTE DISPOSITIVO';
      node.classList.add('is-ready');
    }
  }

  return {
    node,
    mount,
    unmount() {
      dead = true;
      cancelAnimationFrame(raf);
      globalThis.removeEventListener?.('resize', resize);
      film?.dispose();
    },
    onKey(event2) {
      if (event2.key === 'Escape' || event2.key === 'Enter' || event2.key === ' ') { finish(); return true; }
      return false;
    }
  };
}

const styles = `
.trophy-film{position:relative;width:100%;height:100%;overflow:hidden;background:#0a121c;color:#f6f2e6;font-family:Arial,sans-serif;isolation:isolate}
.trophy-film__canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.trophy-film__vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 42%,transparent 20%,rgba(4,10,18,.55) 72%,rgba(4,10,18,.95)),linear-gradient(180deg,rgba(4,10,18,.85),transparent 30%,transparent 60%,rgba(4,10,18,.92))}
.trophy-film__header{position:absolute;top:5%;left:5%;right:5%;display:flex;align-items:center;justify-content:space-between;font-size:clamp(10px,1.2vw,15px);letter-spacing:.18em;color:#cfd9e2}
.trophy-film__skip{border:1px solid #b3c4d280;background:#101d2ccc;color:#fff;border-radius:6px;padding:12px 20px;font:inherit;letter-spacing:.05em;cursor:pointer;min-height:44px}
.trophy-film__skip:focus-visible{outline:3px solid #e6c987;outline-offset:4px}
.trophy-film__title{position:absolute;left:5%;right:5%;top:14%;text-align:center;pointer-events:none;opacity:0;transform:translateY(10px);transition:opacity .8s ease,transform .8s ease}
.trophy-film.is-ready .trophy-film__title{opacity:1;transform:translateY(0)}
.trophy-film__eyebrow{margin:0 0 6px;font-size:clamp(10px,1.2vw,14px);letter-spacing:.45em;color:#e6c987}
.trophy-film__title h1{margin:0;font-size:clamp(24px,4.2vw,58px);font-weight:800;letter-spacing:.02em;text-shadow:0 6px 30px #000a}
.trophy-film__club{margin:10px 0 0;font-size:clamp(12px,1.5vw,19px);color:#d5dee6;letter-spacing:.06em}
.trophy-film__footer{position:absolute;left:5%;right:5%;bottom:5%;display:flex;align-items:center;justify-content:space-between;gap:18px}
.trophy-film__status{margin:0;font-size:clamp(10px,1.1vw,13px);letter-spacing:.2em;color:#e6c987}
.trophy-film__footer progress{width:26%;height:3px;appearance:none;border:0;background:#ffffff2e}
.trophy-film__footer progress::-webkit-progress-bar{background:#ffffff2e}
.trophy-film__footer progress::-webkit-progress-value{background:#e6c987}
.trophy-film__cta{position:absolute;left:50%;bottom:15%;transform:translate(-50%,12px);opacity:0;pointer-events:none;transition:opacity .5s ease,transform .5s ease;
  border:0;border-radius:8px;padding:16px 38px;font:inherit;font-weight:800;letter-spacing:.2em;cursor:pointer;min-height:52px;
  background:linear-gradient(180deg,#f0dca6,#d8ab4f);color:#20180a;box-shadow:0 12px 34px #0009}
.trophy-film.is-ready .trophy-film__cta{opacity:1;transform:translate(-50%,0);pointer-events:auto}
.trophy-film__cta:focus-visible{outline:3px solid #fff;outline-offset:4px}
@media(prefers-reduced-motion:reduce){.trophy-film *{transition:none!important}}
`;
