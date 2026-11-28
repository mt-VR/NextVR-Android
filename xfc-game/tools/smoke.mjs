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
check('a intro usa o GIF suavizado de reprodução única',
  document.querySelector('.intro-reference__art')?.getAttribute('src') === 'assets/brand/xfc-intro-smooth-once.gif');

press('Enter');
check('Enter leva à tela de abertura', document.querySelector('.screen--launch'));
document.querySelector('.launch__enter').click();
// A entrada toca partículas por 460 ms antes de navegar ao menu.
await new Promise(resolve => setTimeout(resolve, 500));
check('Entrar leva ao menu principal', document.querySelector('.screen--menu'));
check('home usa a arte XFC 27 fornecida em tela cheia',
  document.querySelector('.ref-art')?.getAttribute('src') === 'assets/menus/xfc27/home.png');
check('carteira/XP dinâmicos e os atalhos principais continuam no DOM',
  Boolean(document.querySelector('.xfc27-live-header')) &&
  Boolean(document.querySelector('[data-menu-item="career"]')) &&
  Boolean(document.querySelector('[data-menu-item="events"]')));

// Personalização continua disponível pelo cabeçalho do screenshot.
document.querySelector('.xfc27-settings').click();
check('Personalizar abre a tela de configurações', document.querySelector('.screen--customise'));
check('a tela de personalização mostra oito opções', document.querySelectorAll('.customise__tile').length === 8);
press('Escape');
check('Escape retorna ao menu inicial XFC 27', document.querySelector('.screen--menu'));

// Os quatro screenshots são usados nos seus fluxos específicos.
document.querySelector('[data-menu-item="tournament"]').click();
check('Modos abre a referência fornecida',
  document.querySelector('.screen--modes') && document.querySelector('.ref-art')?.getAttribute('src') === 'assets/menus/xfc27/modes.png');
document.querySelector('.screen--modes .xfc27-footer-action[aria-label="Selecionar"]').click();
check('PvP abre o screenshot dedicado',
  document.querySelector('.screen--pvp') && document.querySelector('.ref-art')?.getAttribute('src') === 'assets/menus/xfc27/pvp.png');
document.querySelector('.pvp__option[data-option="custom-room"]').click();
const roomInput = document.querySelector('.xfc27-room-input');
roomInput.value = '1a2-345';
roomInput.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
check('a sala aceita apenas cinco algarismos', roomInput.value === '12345');
document.querySelector('.xfc27-dialog__action').click();
check('o código gerado continua explicitamente local',
  /^\d{5}$/.test(document.querySelector('.xfc27-room-code').textContent) &&
  /não é publicado em um servidor/.test(document.querySelector('.xfc27-dialog__status').textContent));
press('Escape');
check('Escape fecha primeiro a sala', document.querySelector('.screen--pvp') && !document.querySelector('.xfc27-dialog'));
press('Escape');
check('Escape do PvP retorna a Modos', document.querySelector('.screen--modes'));
press('Escape');
check('Escape de Modos retorna ao home', document.querySelector('.screen--menu'));
document.querySelector('[data-menu-item="events"]').click();
check('Eventos ao Vivo abre a referência de Competições',
  document.querySelector('.screen--competitions') && document.querySelector('.ref-art')?.getAttribute('src') === 'assets/menus/xfc27/competitions.png');
document.querySelector('.competitions__option[data-competition="uefa-europa-league"]').click();
check('Europa League abre uma competição local funcional',
  document.querySelector('.screen--competition[data-competition="uefa-europa-league"]'));
press('Escape');
check('Escape retorna ao seletor de competições', document.querySelector('.screen--competitions'));
press('Escape');
check('Escape de Competições retorna ao home', document.querySelector('.screen--menu'));

// Jogo rápido e Kick Off mantêm seus seletores existentes.
document.querySelector('.menu__item[data-menu-item="quick"]').click();
check('Jogo Rápido abre a seleção de confronto', Boolean(document.querySelector('.screen--quick')));
check('a tela traz HOME e AWAY, escudos e acesso às blusas',
  document.querySelectorAll('.quick__panel').length === 2 &&
  document.querySelectorAll('.quick__crest').length === 2 &&
  document.querySelectorAll('.selection-shirt').length === 2);
check('há o botão CONTINUAR para escolher o estádio', Boolean(document.querySelector('.quick__actions .continue-btn')));
document.querySelector('.selection-shirt').click();
check('a escolha de uniforme abre a coleção de blusas',
  document.querySelector('[role="dialog"] .quick__kit'));
press('Escape');
press('Escape');
check('VOLTAR AO MENU funciona', Boolean(document.querySelector('.screen--menu')));
document.querySelector('.menu__item[data-menu-item="kickoff"]').click();
check('Clubes abre a seleção de times preservada',
  document.querySelectorAll('.screen--kickoff .kickoff-column').length === 2 &&
  document.querySelectorAll('.screen--kickoff .team-card__name').length === 2 &&
  document.querySelectorAll('.screen--kickoff .kickoff-ratings').length === 2);
const teamPanels = [...document.querySelectorAll('.screen--kickoff .kickoff-column')];
check('a escolha de times mantém um mandante e um visitante', teamPanels.length === 2);
check('cada time mostra as avaliações ATT, MID e DEF',
  document.querySelectorAll('.screen--kickoff .kickoff-ratings > span').length === 6);
const originalHomeId = teamPanels[0]?.dataset.teamId;
teamPanels[0]?.querySelector('[aria-label="Próximo time (mandante)"]')?.click();
check('o carrossel altera o time mandante', teamPanels[0]?.dataset.teamId !== originalHomeId);
check('cada lado mantém filtros de país e acesso ao elenco',
  document.querySelectorAll('.screen--kickoff select[aria-label^="País do"]').length === 2 &&
  document.querySelectorAll('.screen--kickoff button').length > 4);
check('o fluxo mantém a etapa de uniformes e as opções de partida',
  Boolean(document.querySelector('.screen--kickoff .continue-btn')) &&
  Boolean(document.querySelector('.screen--kickoff .kickoff-options')));

const failed = checks.filter(item => !item.ok);
console.log(failed.length ? `\n${failed.length} verificação(ões) falharam` : '\nTudo certo');
process.exit(failed.length ? 1 : 0);
