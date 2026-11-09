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
global.cancelAnimationFrame = timer => clearTimeout(timer);
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
check('Enter leva à tela de abertura', document.querySelector('.screen--launch'));
document.querySelector('.launch__enter').click();
// A entrada toca partículas por 460 ms antes de navegar ao menu.
await new Promise(resolve => setTimeout(resolve, 500));
check('Entrar leva ao menu principal', document.querySelector('.screen--menu'));
check('o menu clássico mostra os atalhos principais',
  document.querySelectorAll('.menu__item').length === 8);
check('o menu mantém a cena 3D original do jogador',
  Boolean(document.querySelector('.menu__scene3d canvas')) && !document.querySelector('.menu__scene3d img'));

// Configurações e personalização ficam acessíveis pelo menu principal.
document.querySelector('.menu__item[data-menu-item="customise"]').click();
check('Customise abre a tela de personalização', document.querySelector('.screen--customise'));
check('a tela de personalização mostra oito opções', document.querySelectorAll('.customise__tile').length === 8);
press('Escape');
check('Escape retorna ao menu principal', document.querySelector('.screen--menu'));

// A Copa do Mundo está disponível no seletor de modos.
document.querySelector('.menu__item[data-menu-item="tournament"]').click();
check('Torneio Online abre o seletor de modos', document.querySelector('.screen--modes'));
check('a Copa está listada como modo de jogo',
  [...document.querySelectorAll('.modes__option')].some(item => item.textContent.includes('WORLD CUP')));
document.querySelector('.modes__cta').click();
check('a opção principal abre a Copa do Mundo', document.querySelector('.screen--worldcup'));
press('Escape');
check('Escape da Copa retorna aos modos', document.querySelector('.screen--modes'));
press('Escape');
check('Escape dos modos retorna ao menu', document.querySelector('.screen--menu'));

// O seletor de modos abre o confronto rápido em 3D.
document.querySelector('.menu__item[data-menu-item="tournament"]').click();
document.querySelector('.modes__option[data-option="online"]').click();
document.querySelector('.modes__cta').click();
check('PARTIDAS RÁPIDAS abre a tela do confronto',
  Boolean(document.querySelector('.screen--quick')));
check('a tela traz HOME e AWAY com escudo e blusas',
  document.querySelectorAll('.quick__panel').length === 2 &&
  document.querySelectorAll('.quick__crest').length === 2 &&
  document.querySelectorAll('.quick__kit').length >= 6);
check('há o botão CONTINUAR para escolher o estádio',
  Boolean(document.querySelector('.quick__actions .continue-btn')));
// A partida em si roda em WebGL: quem confere isso é o teste de navegador
// (tests/xfc-game.test.mjs). Aqui só voltamos ao menu.
press('Escape');
check('VOLTAR AO MENU funciona', Boolean(document.querySelector('.screen--menu')));

document.querySelector('.menu__item[data-menu-item="tournament"]').click();
document.querySelector('.modes__option[data-option="worldcup-kickoff"]').click();
document.querySelector('.modes__cta').click();
check('World Cup Kick Off abre a escolha de times', document.querySelector('.screen--kickoff'));
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
document.querySelector('[data-slot="home"] .picker-arrow--crest:last-child').click();
document.querySelector('[data-slot="home"] .picker-arrow--crest:last-child').click();
document.querySelector('[data-slot="home"] .picker-arrow--crest:last-child').click();
check('o carousel passa pelos clubes do pacote',
  ['aston-villa', 'brentford', 'panathinaikos', 'river-plate'].includes(
    document.querySelector('[data-slot="home"] .team-card').dataset.teamId));
// Volta para o Barcelona para seguir o resto do roteiro.
for (let step = 0; step < 7; step += 1) {
  document.querySelector('[data-slot="home"] .picker-arrow--crest:first-child').click();
}
check('a seta anterior devolve o Barcelona',
  document.querySelector('[data-slot="home"] .team-card').dataset.teamId === 'fc-barcelona');

check('a tela de blusas tem o READY e o carrossel',
  Boolean(document.querySelector('.btn')?.textContent) &&
  Boolean(document.querySelector('.kickoff__badge')));

[...document.querySelectorAll('.btn')].find(button => button.textContent.includes('Ver elenco')).click();
check('o elenco abre com onze em campo e sete no banco',
  document.querySelectorAll('.pitch-player').length === 11 && document.querySelectorAll('.bench__slot').length === 7);
check('o painel mostra o jogador selecionado',
  (document.querySelector('.player-panel__name')?.textContent || '').length > 2);
check('o jogador tem atributos próprios, incluindo potência de chute',
  document.querySelectorAll('.attr').length === 7 &&
  [...document.querySelectorAll('.attr > span:first-child')].some(node => node.textContent === 'Potência'));

press('Escape');
check('Esc volta para a escolha de times', document.querySelector('.screen--kickoff'));
check('o Kick Off oferece CONTINUAR para escolher o estádio',
  Boolean(document.querySelector('.continue-btn')));
document.querySelector('.continue-btn').click();
check('CONTINUAR abre a seleção de estádios', document.querySelector('.screen--stadiums'));
check('a galeria oferece estádios para iniciar a partida',
  document.querySelectorAll('.stadiums__card').length > 0);

const failed = checks.filter(item => !item.ok);
console.log(failed.length ? `\n${failed.length} verificação(ões) falharam` : '\nTudo certo');
process.exit(failed.length ? 1 : 0);
