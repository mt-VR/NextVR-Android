// Confere o fluxo do XFC sem browser: monta as telas em um DOM de teste e
// verifica que cada passo aparece (intro → menu → kick off → elenco → partida).
//
//   node xfc-game/tools/smoke.mjs
//
// O script usa o jsdom instalado fora do repositório (não vira dependência do
// projeto); serve para pegar erros de JavaScript rápido durante o
// desenvolvimento. A conferência visual é feita pelo navegador.

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// O jsdom fica FORA do repositório (é só uma ferramenta de desenvolvimento):
//   npm install --prefix /tmp/jsdomtest jsdom
const jsdomPath = process.env.JSDOM_PATH || '/tmp/jsdomtest/node_modules/jsdom';
let JSDOM;
try {
  ({ JSDOM } = require(jsdomPath));
} catch {
  console.log(`jsdom não encontrado em ${jsdomPath} — pulei a conferência.`);
  console.log('Para instalar: npm install --prefix /tmp/jsdomtest jsdom');
  process.exit(0);
}

const dom = new JSDOM('<!doctype html><html><body><div id="screen"></div><div id="toasts"></div></body></html>', {
  url: 'http://localhost/',
  pretendToBeVisual: true
});

global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.Node = dom.window.Node;
global.requestAnimationFrame = callback => setTimeout(callback, 0);
global.localStorage = {
  store: new Map(),
  getItem(key) { return this.store.get(key) ?? null; },
  setItem(key, value) { this.store.set(key, String(value)); }
};

const checks = [];
const check = (label, condition) => {
  checks.push({ label, ok: Boolean(condition) });
  console.log(`${condition ? 'ok  ' : 'FALHA'} ${label}`);
};

const press = key => {
  const event = new dom.window.KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
  dom.window.dispatchEvent(event);
};

const { go } = await import('../src/main.js');

check('a intro é a primeira tela', document.querySelector('.screen--intro'));
check('a intro mostra a marca XF Esportes e o XFC',
  document.querySelector('.intro__badge svg') && document.querySelector('.intro__wordmark svg'));

press('Enter');
check('Enter leva ao menu', document.querySelector('.screen--menu'));
check('o menu lista KICK OFF e os outros modos',
  document.querySelectorAll('.menu__item').length === 9);
check('apenas KICK OFF está liberado',
  document.querySelectorAll('.menu__item--available').length === 1);
check('a barra de XP mostra 3K/3K', document.querySelector('.menu__xp-text')?.textContent.includes('3K/3K'));

document.querySelector('.menu__cta').click();
check('o botão leva ao Kick Off', document.querySelector('.screen--kickoff'));
const names = [...document.querySelectorAll('.team-card__name')].map(node => node.textContent);
check('a escolha de times mostra Barcelona e Real Madrid',
  names.includes('FC Barcelona') && names.includes('Real Madrid'));
check('cada time traz ATT, MID e DEF', document.querySelectorAll('.team-card__rating b').length === 6);

document.querySelector('.team-card').click();
check('o clique no time marca a seleção',
  document.querySelector('.team-card').classList.contains('is-focus'));

const homeTeam = document.querySelector('[data-slot="home"] .team-card').dataset.teamId;
document.querySelector('[data-slot="home"] .picker-arrow--crest:last-child').click();
check('as setas do escudo trocam de clube',
  document.querySelector('[data-slot="home"] .team-card').dataset.teamId !== homeTeam);
document.querySelector('[data-slot="home"] .picker-arrow--crest:last-child').click();
document.querySelector('[data-slot="home"] .picker-arrow--crest:last-child').click();
document.querySelector('[data-slot="home"] .picker-arrow--crest:last-child').click();

check('a tela de blusas tem o READY e o carrossel',
  Boolean(document.querySelector('.btn')?.textContent) &&
  Boolean(document.querySelector('.kickoff__badge')));

[...document.querySelectorAll('.btn')].find(button => button.textContent.includes('Ver elenco')).click();
check('o elenco abre com onze em campo e sete no banco',
  document.querySelectorAll('.pitch-player').length === 11 && document.querySelectorAll('.bench__slot').length === 7);
check('o painel mostra o jogador selecionado',
  (document.querySelector('.player-panel__name')?.textContent || '').length > 2);
check('os atributos do jogador são listados',
  document.querySelectorAll('.attr').length === 6);

press('Escape');
check('Esc volta para a escolha de times', document.querySelector('.screen--kickoff'));
[...document.querySelectorAll('.btn')].find(button => button.textContent.includes('Iniciar partida')).click();
check('a partida mostra o confronto',
  (document.querySelector('.match__teams')?.textContent || '').includes('FC Barcelona'));

const failed = checks.filter(item => !item.ok);
console.log(failed.length ? `\n${failed.length} verificação(ões) falharam` : '\nTudo certo');
process.exit(failed.length ? 1 : 0);
