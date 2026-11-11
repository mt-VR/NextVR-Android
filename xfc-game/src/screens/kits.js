// Tela "Classic Match | Select Kits": a escolha da blusa dos dois times.
//
// O desenho segue a referência do FC: um jogador de cada lado com o uniforme
// escolhido, o texto READY no centro e, ao lado, o carrossel (anterior,
// atual e próxima) com o nome da blusa. As setas trocam a blusa do time em
// foco e o Tab alterna entre HOME e AWAY.

import { el, svg, ICONS, padButton } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { getTeam } from '../data/teams.js';
import { kitsOf, kitSvg, kitFigureSvg, kitRender, kitShirt } from '../data/kits.js';

export function kitsScreen(ctx, params = {}) {
  const state = ctx.state;
  const home = getTeam(params.home) || getTeam(state.selection.home);
  const away = getTeam(params.away) || getTeam(state.selection.away);
  const homeKits = kitsOf(home?.id);
  const awayKits = kitsOf(away?.id);

  if (home) state.kits[home.id] ??= 0;
  if (away) state.kits[away.id] ??= 0;

  let focusSide = params.focus === 'away' ? 'away' : 'home';

  function kitsFor(side) {
    return side === 'away' ? awayKits : homeKits;
  }

  function teamFor(side) {
    return side === 'away' ? away : home;
  }

  function indexFor(side) {
    const list = kitsFor(side);
    const team = teamFor(side);
    const current = state.kits[team?.id] ?? 0;
    return Math.max(0, Math.min(list.length - 1, current));
  }

  function carousel() {
    const side = focusSide;
    const list = kitsFor(side);
    const index = indexFor(side);
    const previous = list[(index - 1 + list.length) % list.length];
    const current = list[index];
    const next = list[(index + 1) % list.length];

    // O carrossel mostra a foto da camisa quando o clube tem (o resto é SVG).
    const tile = (kit, kind) => el('div', { class: `kits__tile kits__tile--${kind}` },
      el('div', { class: 'kits__shirt' },
        kitShirt(kit)
          ? el('img', { class: 'kits__shirt-photo', src: kitShirt(kit), alt: `Blusa ${kit.name}` })
          : el('span', { class: 'kits__shirt-svg', html: kitSvg(kit) })
      ),
      el('span', { class: 'kits__tile-name', text: kit.name })
    );

    return el('div', { class: 'kits__carousel' },
      el('button', {
        class: 'kits__arrow', type: 'button', 'aria-label': 'Blusa anterior',
        onClick() {
          step(-1);
        }
      }, svg(ICONS.chevronLeft)),
      el('div', { class: 'kits__row' },
        tile(previous, 'side'),
        tile(current, 'main'),
        tile(next, 'side')
      ),
      el('button', {
        class: 'kits__arrow', type: 'button', 'aria-label': 'Próxima blusa',
        onClick() {
          step(1);
        }
      }, svg(ICONS.chevronRight))
    );
  }

  function step(delta) {
    const list = kitsFor(focusSide);
    const team = teamFor(focusSide);
    if (!team || !list.length) return;
    const next = (indexFor(focusSide) + delta + list.length) % list.length;
    state.kits[team.id] = next;
    paint();
  }

  function preview(side) {
    const team = teamFor(side);
    const list = kitsFor(side);
    const kit = list[indexFor(side)];
    // Com a foto do jogador no pacote de imagens, o preview é o próprio jogador
    // de corpo inteiro vestindo a blusa; sem foto, o boneco desenhado em SVG.
    const render = kitRender(kit) || kitShirt(kit);
    return el('div', { class: `kits__preview kits__preview--${side}` },
      el('div', { class: 'kits__preview-figure' },
        render
          ? el('img', { class: 'kits__preview-render', src: render, alt: `Uniforme ${kit?.name} do ${team?.name}` })
          : el('span', { class: 'kits__preview-svg', html: kitFigureSvg(kit, { width: 260 }) })
      ),
      el('div', { class: 'kits__preview-team' },
        el('img', { class: 'kits__preview-crest', src: team?.crest, alt: `Escudo do ${team?.name}` }),
        el('b', { text: team?.name || '—' })
      )
    );
  }

  const ready = el('button', {
    class: 'kits__ready', type: 'button',
    onClick() {
      ctx.go('kickoff');
    }
  }, 'READY');

  const footer = el('footer', { class: 'footer' },
    el('div', { class: 'hints' },
      el('span', { class: 'hint' }, padButton('cross', 'Select'), el('span', { text: 'Select' })),
      el('span', { class: 'hint' }, padButton('circle', 'Back'), el('span', { text: 'Back' }))
    ),
    el('div', { class: 'hints' },
      el('span', { class: 'hint hint--muted' }, el('span', { class: 'hint__key', text: 'Hold' }), el('span', { text: 'L1' })),
      el('span', { class: 'hint hint--muted' }, svg(ICONS.info), el('span', { text: '1' })),
      el('span', { class: 'hint hint--muted' }, svg(ICONS.friends), el('span', { text: '1' }))
    )
  );

  const sideLabel = el('span', { class: 'kits__side-label', text: 'HOME' });

  const node = el('div', { class: 'screen screen--kits' },
    el('header', { class: 'topbar' },
      el('span', { class: 'topbar__mark', html: xfcWordmark() }),
      el('span', { class: 'topbar__title', text: 'Classic Match' }),
      el('span', { class: 'topbar__sep', text: '|' }),
      el('span', { class: 'topbar__subtitle', text: 'Select Kits' })
    ),
    el('div', { class: 'kits__stage' },
      el('span', { class: 'kits__edge kits__edge--home', text: 'HOME' }),
      preview('home'),
      el('div', { class: 'kits__center' },
        ready,
        sideLabel,
        carousel()
      ),
      preview('away'),
      el('span', { class: 'kits__edge kits__edge--away', text: 'AWAY' })
    ),
    footer
  );

  function paint() {
    const box = node.querySelector('.kits__carousel');
    if (box) box.replaceWith(carousel());
    for (const side of ['home', 'away']) {
      const show = node.querySelector(`.kits__preview--${side}`);
      if (show) show.replaceWith(preview(side));
    }
    const label = node.querySelector('.kits__side-label');
    if (label) label.textContent = focusSide === 'away' ? 'AWAY' : 'HOME';
    node.dataset.focus = focusSide;
    node.dataset.side = focusSide;
  }

  paint();

  return {
    node,
    onKey(event) {
      if (event.key === 'ArrowLeft') {
        step(-1);
        return true;
      }
      if (event.key === 'ArrowRight') {
        step(1);
        return true;
      }
      if (event.key === 'Tab' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        focusSide = focusSide === 'home' ? 'away' : 'home';
        paint();
        return true;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        ctx.go('kickoff');
        return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go('kickoff');
        return true;
      }
      return false;
    }
  };
}
