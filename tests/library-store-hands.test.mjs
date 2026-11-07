// Biblioteca de apps + todos os jogos na Loja + as mãos voltando depois de qualquer tela cheia.
//
// Três pedidos do usuário que andam juntos:
//   * "traz de volta a biblioteca de apps" — o botão da biblioteca da dock abria o ANEL, então só
//     sobravam os apps grandes do anel e a grade de apps tinha sumido;
//   * "todos os jogos na Loja" — a vitrine da Loja ganha uma seção de JOGOS com todos eles, e o
//     filtro Jogos da biblioteca é a MESMA lista (derivada de QUEST_STORE_ITEMS);
//   * "ajeita o Hand tracking" — ao devolver a câmera ao NextVR, o renderizador sai do modo de mão de
//     jogo, a pose velha é descartada e a abertura da câmera é tentada de novo (o WebView do jogo
//     solta a Camera2 alguns quadros depois de morrer).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const FILES = {
  apps: 'web/src/apps.js',
  entry: 'web/src/entry-menu.js',
  activity: 'nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java',
  updates: 'web/src/entry-data.js',
};
const read = path => readFile(path, 'utf8');

test('a biblioteca de apps volta a abrir pelo botão dela, e não o anel', async () => {
  const apps = await read(FILES.apps);
  // O botão da dock: ANEL abre o anel, BIBLIOTECA abre a biblioteca.
  assert.match(apps, /\{ id: 'orb-apps', win: 'orb-apps', label: t\('apps'\), svg: DK\.orbDots, run: openAppsDot \},/);
  // O botão da biblioteca abre a GRADE de apps, e derruba o anel antes (com o anel aberto `open()`
  // devolve null e a janela sumia sem aviso).
  assert.match(apps, /\{ id: 'library', win: 'library', launcher: true, label: t\('apps'\),\n\s+run: \(\) => \{ if \(orbOpen\(\)\) closeOrbMenu\(\); libraryApp\(\); \},/,
    'the library button opens the app library again');
  // Pedir a biblioteca com o anel aberto fecha o anel e insiste: nenhum caminho perde a janela.
  assert.match(apps, /function libraryApp\(attempt = 0\) \{/);
  assert.match(apps, /if \(orbOpen\(\)\) closeOrbMenu\(\);\n  const body = el\('div'\);/);
  assert.match(apps, /if \(!win\) \{\n    if \(attempt < 3\) setTimeout\(\(\) => libraryApp\(attempt \+ 1\), 180\);/,
    'a janela bloqueada é pedida de novo, em vez de sumir sem aviso');
  // E continua alcançável pelos outros caminhos que já existiam.
  assert.match(apps, /window\.nextvrOpenLibrary = libraryApp;/);
  assert.match(apps, /if \(q\('\[data-openlib\]'\)\) \{ libraryApp\(\); return; \}/);
});

test('a Loja tem uma seção com TODOS os jogos do NextVR', async () => {
  const apps = await read(FILES.apps);
  assert.match(apps, /const gameCards = cardsHtml\.filter\(\(_, i\) => filteredItems\[i\]\.cat === 'games'\);/,
    'os cards de jogo saem da mesma lista de itens da Loja');
  assert.match(apps, /const appCards = cardsHtml\.filter\(\(_, i\) => filteredItems\[i\]\.cat !== 'games'\);/);
  assert.match(apps, /<h3 class="st-quest-section-title">Jogos do NextVR · todos aqui<\/h3>/,
    'a seção de jogos é explícita na vitrine');
  assert.match(apps, /<div class="st-quest-grid st-quest-grid-games">\n        \$\{gameCards\.join\(''\)\}/,
    'os jogos aparecem antes dos apps, na própria vitrine');

  // Todo jogo precisa de card E de ação: card sem ação era o "jogo que não abre".
  const store = apps.slice(apps.indexOf('const QUEST_STORE_ITEMS'), apps.indexOf('function buildStore()'));
  const gameIds = [...store.matchAll(/\{ id: '([a-z0-9-]+)',[^}]*cat: 'games'/g)].map(m => m[1]);
  const actions = apps.slice(apps.indexOf('const LIB_ACTIONS = {'), apps.indexOf('/* ============ o anel de 10 apps'));
  for (const id of gameIds) {
    // `vrfs` é a única chave sem aspas no objeto; o resto vem com hífen.
    assert.ok(actions.includes(`'${id}':`) || new RegExp(`\\b${id}:`).test(actions),
      `o jogo ${id} da Loja tem ação para abrir`);
  }
  // Os jogos do NextVR que já vêm no pacote, todos na Loja.
  for (const id of ['vrfs', 'mr-pistol', 'hand-draw', 'gorilla-tag', 'beat-vr', 'hyper-vr', 'roblox-vr', 'cockpit-vr', 'taxi-driver']) {
    assert.ok(gameIds.includes(id), `o jogo ${id} tem card na Loja`);
  }

  // O carrossel da Loja na tela de entrada também lista todos os jogos.
  const entry = await read(FILES.entry);
  const carousel = entry.slice(entry.indexOf('const MENU_STORE_APPS'), entry.indexOf('];', entry.indexOf('const MENU_STORE_APPS')));
  for (const id of ['cockpit-vr', 'beat-vr', 'hyper-vr', 'roblox-vr', 'vrfs', 'mr-pistol', 'hand-draw', 'taxi-driver']) {
    assert.ok(carousel.includes(`id: '${id}'`), `a Loja da tela de entrada mostra ${id}`);
  }
});

test('a biblioteca mostra os jogos que já vêm no pacote e o filtro Jogos é a lista da Loja', async () => {
  const apps = await read(FILES.apps);
  assert.match(apps, /const BUILT_IN_GAME_IDS = \['beat-vr', 'hyper-vr', 'roblox-vr'\];/);
  assert.match(apps, /const GAME_IDS = new Set\(QUEST_STORE_ITEMS\.filter\(item => item\.cat === 'games'\)\.map\(item => item\.id\)\);/);
  assert.match(apps, /\.\.\.builtInGameTiles\(\),/);
  assert.match(apps, /if \(libFilter === 'games'\) filtered = filtered\.filter\(x => x\.kind === 'xr' \|\| GAME_IDS\.has\(x\.id\)\);/,
    'nenhum jogo existe na Loja e falta na biblioteca');
});

test('as mãos do NextVR voltam limpas depois de qualquer tela cheia', async () => {
  const activity = await read(FILES.activity);
  const restart = activity.slice(activity.indexOf('private void restartTracking()'));
  // O renderizador sai do modo de mão de jogo (que troca silhueta e ponteiro) e a pose velha cai.
  assert.match(restart, /r\.handRenderer\.gameHandMode=false;/, 'o modo de mão de jogo é desarmado');
  assert.match(restart, /r\.handRenderer\.mrGameMode=false;/);
  assert.match(restart, /r\.handRenderer\.resetPresentation\(\);/, 'a pose antiga não fica pendurada');
  assert.match(restart, /r\.hands=null;/);
  // A câmera é reaberta, e tentada de novo quando o WebView do jogo ainda a segura.
  assert.match(restart, /camera\.enableHands\(true\);/);
  assert.match(restart, /camera\.resetHandsState\(\);/);
  assert.match(restart, /startCamera\(\);\n\s+\/\/[^\n]*\n\s+\/\/[^\n]*\n\s+main\.postDelayed\(this::startCamera,1200\);/,
    'a segunda tentativa é o que devolve as mãos quando o Camera2 ainda está com o jogo');
  // Toda volta ao primeiro plano rearma o rastreio — exceto com o jogo HTML na frente, ou a caminho
  // (`cockpitPending`: o diálogo de permissão pausa a activity e a câmera não pode ser tomada do jogo).
  assert.match(activity, /if\(cockpitView==null && !cockpitPending\) camera\.enableHands\(true\);/,
    'voltar ao app rearma o rastreio de mão, sem reiniciar o NextVR');
  // Entrar no jogo também descarta a pose que estava na tela.
  assert.match(activity, /if\(r!=null\) \{ r\.hands=null; r\.handRenderer\.resetPresentation\(\); \}/);
});

test('a rodada tem entrada no feed de Atualizações', async () => {
  const updates = await read(FILES.updates);
  assert.match(updates, /id: 'library-store-games-hands'/, 'o feed ganha a entrada desta rodada');
});
