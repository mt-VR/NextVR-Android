// Cutscene do prêmio individual: Bola de Ouro e Puskás.
//
// A apresentação de transferência usa o modelo 3D do atleta; o prêmio não pode
// depender disso (o modelo carrega assíncrono e às vezes falha no aparelho).
// Aqui a cena é desenhada em CSS/SVG com a taça, o nome do prêmio, o ano a
// camisa e a nota — o atleta aparece com a foto/avatar que o jogo já usa.
import {el} from '../ui/dom.js';
import {getTeam} from '../data/teams.js';
import {completeAwardCinematic, careerAwardCase} from '../data/career-competitions.js';

export function awardTrophy(trophy) {
  if (trophy === 'ballon-dor') {
    // Bola dourada sobre pedestal, com reflexo e gomos — desenho próprio, sem
    // nenhum asset de jogo de futebol.
    return `<svg viewBox="0 0 120 170" class="career-award__trophy" aria-hidden="true">
      <defs>
        <radialGradient id="bd" cx="36%" cy="28%" r="72%">
          <stop offset="0" stop-color="#fff3c4"/><stop offset=".45" stop-color="#e8bf55"/>
          <stop offset=".8" stop-color="#b9862a"/><stop offset="1" stop-color="#7d5511"/>
        </radialGradient>
        <linearGradient id="bdPed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e0b04a"/><stop offset="1" stop-color="#7a5210"/>
        </linearGradient>
      </defs>
      <path d="M52 129h16v15H52z" fill="url(#bdPed)"/>
      <path d="M36 144h48a4 4 0 0 1 4 4v10H32v-10a4 4 0 0 1 4-4z" fill="url(#bdPed)"/>
      <circle cx="60" cy="76" r="52" fill="url(#bd)" stroke="#f6dd93" stroke-width="1.5"/>
      <path d="M60 30l15 15-6 19H51l-6-19z" fill="#fdf0bd" opacity=".85"/>
      <path d="M18 68l18-6 12 12-8 17-20-3z" fill="#fdf0bd" opacity=".55"/>
      <path d="M102 68l-18-6-12 12 8 17 20-3z" fill="#fdf0bd" opacity=".55"/>
      <path d="M44 108l16-8 16 8-4 16H48z" fill="#fdf0bd" opacity=".45"/>
      <ellipse cx="44" cy="58" rx="13" ry="9" fill="#fff8dc" opacity=".55" transform="rotate(-28 44 58)"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 120 170" class="career-award__trophy" aria-hidden="true">
    <defs>
      <linearGradient id="pk" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#cddced"/>
        <stop offset="1" stop-color="#7e91a8"/>
      </linearGradient>
      <linearGradient id="pkPed" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#c9d8e8"/><stop offset="1" stop-color="#5c6b7e"/>
      </linearGradient>
    </defs>
    <path d="M54 126h12v16H54z" fill="url(#pkPed)"/>
    <path d="M40 142h40a5 5 0 0 1 5 5v9H35v-9a5 5 0 0 1 5-5z" fill="url(#pkPed)"/>
    <path d="M60 14l14 25 28 5-20 21 6 29-28-15-28 15 6-29L18 44l28-5z" fill="url(#pk)" stroke="#f2f8ff" stroke-width="2"/>
    <path d="M60 14l14 25-14 12-14-12z" fill="#eaf3fc" opacity=".75"/>
    <circle cx="60" cy="72" r="11" fill="#25313f"/>
    <circle cx="60" cy="72" r="5" fill="#8fb3d6"/>
  </svg>`;
}

export function careerAward(ctx, {career, award, persist, go, back}) {
  const club = getTeam(award.clubId || career.clubId);
  const isBallon = award.id === 'ballon-dor';
  const title = isBallon ? 'BOLA DE OURO' : 'PRÊMIO PUSKÁS';
  const subtitle = isBallon
    ? `${award.ovr || '—'} de overall · ${award.goals || 0} gols na temporada ${award.season}`
    : `O gol mais bonito da temporada ${award.season}`;
  const finish = () => {
    completeAwardCinematic(career, award.id);
    if (!persist()) return;
    back();
  };
  const node = el('section', {class: `screen career-award${isBallon ? ' is-ballon' : ' is-puskas'}`,
    dataset: {award: award.id}, 'aria-label': title},
    el('style', {text: styles}),
    el('div', {class: 'career-award__glow', 'aria-hidden': 'true'}),
    el('header', {class: 'career-award__header'},
      el('span', {text: `XFC 27 / ${career.player.nationality.toUpperCase()} / TEMPORADA ${award.season}`}),
      el('button', {type: 'button', class: 'career-award__skip', text: 'Continuar', onClick: finish})),
    el('div', {class: 'career-award__stage'},
      el('div', {class: 'career-award__trophy-wrap', html: awardTrophy(award.trophy)}),
      el('div', {class: 'career-award__copy'},
        el('span', {class: 'career-award__kicker', text: isBallon ? 'FRANCE FOOTBALL · XFC 27' : 'FIFA · XFC 27'}),
        el('h1', {class: 'career-award__title', text: title}),
        el('p', {class: 'career-award__player', text: career.player.name}),
        el('p', {class: 'career-award__detail', text: subtitle}),
        club && el('div', {class: 'career-award__club'},
          el('img', {src: club.crest, alt: '', draggable: 'false'}),
          el('span', {text: `${club.name} · ${isBallon ? 'melhor jogador do mundo' : award.description || ''}`})))),
    el('footer', {class: 'career-award__footer'},
      el('span', {text: `PRÊMIOS NA CARREIRA: ${careerAwardCase(career).length}`}),
      el('button', {type: 'button', class: 'career-award__cta', text: 'LEVANTAR A TAÇA', onClick: finish})));
  return {node, onKey(event) { if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') { finish(); return true; } return false; }};
}

const styles = `
.career-award{position:relative;width:100%;height:100%;overflow:hidden;background:radial-gradient(120% 90% at 62% 34%,#213651 0%,#0c1522 55%,#05090f 100%);color:#f5f4ef;font-family:Arial,Helvetica,sans-serif;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(18px,3vw,42px);isolation:isolate}
.career-award.is-ballon{background:radial-gradient(120% 90% at 62% 34%,#3a2c10 0%,#170f04 55%,#05090f 100%)}
.career-award.is-puskas{background:radial-gradient(120% 90% at 62% 34%,#163040 0%,#0a1722 55%,#05090f 100%)}
.career-award__glow{position:absolute;inset:0;pointer-events:none;background:radial-gradient(46% 52% at 62% 44%,#f0c96a44,transparent 65%);filter:blur(2px)}
.career-award__header{display:flex;align-items:center;justify-content:space-between;font-size:clamp(10px,1.2vw,14px);letter-spacing:.18em;color:#cbd7e2;z-index:2}
.career-award__skip{border:1px solid #b3c4d280;background:#101d2ccc;color:#fff;border-radius:5px;padding:12px 20px;font:inherit;letter-spacing:0;cursor:pointer;min-height:44px}
.career-award__stage{display:grid;grid-template-columns:minmax(0,0.85fr) minmax(0,1.15fr);align-items:center;gap:clamp(18px,4vw,64px);z-index:2;flex:1}
.career-award__trophy-wrap{display:flex;justify-content:center;align-items:center}
.career-award__trophy{width:clamp(150px,26vw,300px);height:auto;filter:drop-shadow(0 18px 40px #000a) drop-shadow(0 0 32px #f0c96a66);animation:award-rise 2.6s ease-out both}
.career-award.is-puskas .career-award__trophy{filter:drop-shadow(0 18px 40px #000a) drop-shadow(0 0 30px #9fd6ff66)}
@keyframes award-rise{from{transform:translateY(26px) scale(.94);opacity:.2}to{transform:none;opacity:1}}
.career-award__copy{display:flex;flex-direction:column;gap:10px;min-width:0}
.career-award__kicker{font-size:clamp(10px,1.1vw,13px);letter-spacing:.31em;color:#e2c789}
.career-award__title{font-size:clamp(34px,6.4vw,86px);line-height:.94;margin:2px 0 4px;font-weight:900;letter-spacing:.01em;text-transform:uppercase}
.career-award.is-puskas .career-award__title{color:#dceeff}
.career-award__player{font-size:clamp(20px,3vw,40px);margin:0;font-weight:700;color:#fff}
.career-award__detail{margin:0;font-size:clamp(12px,1.5vw,19px);color:#c9d6e3}
.career-award__club{display:flex;align-items:center;gap:12px;margin-top:10px;font-size:clamp(12px,1.4vw,17px);color:#e8eef5}
.career-award__club img{width:44px;height:50px;object-fit:contain;filter:drop-shadow(0 3px 9px #0009)}
.career-award__footer{display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:clamp(10px,1.1vw,13px);letter-spacing:.16em;color:#c5d2df;z-index:2}
.career-award__cta{border:0;border-radius:6px;background:#f0c96a;color:#231703;font-weight:800;letter-spacing:.1em;padding:14px 26px;font:inherit;font-weight:800;min-height:48px;cursor:pointer}
.career-award__cta:focus-visible,.career-award__skip:focus-visible{outline:3px solid #fff;outline-offset:4px}
@media (max-width:760px){.career-award__stage{grid-template-columns:1fr}.career-award__trophy{width:min(52vw,210px)}}
`;

export const awardStyles = styles;
