import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, normalize, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TEAMS, FORMATION_433, getTeam, starSlots } from '../xfc-game/src/data/teams.js';
import { createWorldCupCampaign, campaignStandings, nextCampaignMatch, recordCampaignMatchResult, USER_NATIONAL_TEAM_ID } from '../xfc-game/src/data/worldcup.js';
import { kitsOf, defaultKit, kitSvg } from '../xfc-game/src/data/kits.js';
import { attackSign, defendSign, ownGoalX, attackedGoalX, insidePenaltyAreaFor, insideGoalAreaFor } from '../xfc-game/src/match3d/sides.js';
import { qualityStepsFor, rendererProfileFor } from '../xfc-game/src/match3d/engine.js';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

// O XFC é um subprojeto isolado dentro do repositório: o jogo vive em xfc-game/
// e não toca no código do app de VR. Estes testes cobrem os dados (sem browser)
// e o fluxo das telas (com o Chromium empacotado do projeto).

const GAME_ROOT = new URL('../xfc-game/', import.meta.url);

test('XFC tem vinte e um clubes, com onze em campo e sete reservas em cada um', () => {
  assert.equal(TEAMS.length, 21, 'o jogo oferece vinte e um clubes');
  assert.deepEqual(TEAMS.map(team => team.id), [
    'fc-barcelona', 'real-madrid', 'ibis-esporte', 'parana-clube',
    'flamengo', 'palmeiras', 'corinthians',
    'aston-villa', 'brentford', 'panathinaikos', 'river-plate', 'levante', 'huddersfield-town',
    'eintracht-frankfurt', 'queens-park-rangers', 'wrexham', 'sheffield-united',
    'northampton-town', 'rotherham-united', 'wycombe-wanderers', 'rkc-waalwijk'
  ]);
  for (const team of TEAMS) {
    assert.equal(team.players.length, 11, `${team.name} entra em campo com onze`);
    assert.equal(team.substitutes.length, 7, `${team.name} tem sete reservas`);
    assert.equal(FORMATION_433.length, 11, 'a formação 4-3-3 tem onze posições');
    assert.ok(team.crest.startsWith('assets/'), 'o escudo fica dentro de assets/');
    assert.ok(existsSync(new URL(team.crest, GAME_ROOT)), `escudo existe: ${team.crest}`);
    for (const player of [...team.players, ...team.substitutes]) {
      assert.ok(player.fullName && player.name, `${team.name}: jogador tem nome`);
      assert.ok(player.ovr > 0 && player.potential >= player.ovr, `${player.fullName} tem notas coerentes`);
      assert.equal(player.stats.pace >= 0 && player.stats.pace <= 99, true);
    }
  }
});

test('qualidade gráfica móvel fica fixa para não piscar ao redimensionar o buffer WebGL', () => {
  assert.deepEqual(qualityStepsFor(1), [1, 0.85, 0.7, 0.6],
    'desktop ainda pode descer a resolução, nunca saltar para 1,25');
  assert.deepEqual(qualityStepsFor(0.9, true), [0.9],
    'o perfil móvel mantém o mesmo buffer durante a partida');
  const mobile = rendererProfileFor({
    devicePixelRatio: 3,
    userAgent: 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36',
    pointerCoarse: true,
    hardwareConcurrency: 8,
    deviceMemory: 6
  });
  assert.equal(mobile.lowPower, true, 'o WebView Android usa o perfil econômico');
  assert.equal(mobile.initialPixelRatio, 0.6, 'o aparelho móvel começa na resolução econômica estável');
  assert.deepEqual(mobile.qualitySteps, [0.6],
    'o celular não redimensiona o buffer WebGL no meio da partida');
  const desktop = rendererProfileFor({ devicePixelRatio: 2, hardwareConcurrency: 8, deviceMemory: 8 });
  assert.equal(desktop.lowPower, false, 'desktop potente mantém o perfil de qualidade');
  assert.equal(desktop.initialPixelRatio, 1.5, 'a resolução desktop continua limitada a 1,5');
});

test('orientação do campo: a casa ataca +X, cada time defende o próprio gol', () => {
  assert.equal(attackSign('home'), 1);
  assert.equal(attackSign('away'), -1);
  assert.equal(defendSign('home'), -1);
  assert.equal(defendSign('away'), 1);
  assert.equal(ownGoalX('home'), -52.5);
  assert.equal(ownGoalX('away'), 52.5);
  assert.equal(attackedGoalX('home'), 52.5);
  assert.equal(attackedGoalX('away'), -52.5);
  // Grande área do mandante fica na borda esquerda; a do visitante, na direita.
  assert.equal(insidePenaltyAreaFor(-45, 0, 'home'), true);
  assert.equal(insidePenaltyAreaFor(45, 0, 'home'), false);
  assert.equal(insidePenaltyAreaFor(45, 0, 'away'), true);
  assert.equal(insidePenaltyAreaFor(-45, 0, 'away'), false);
  assert.equal(insidePenaltyAreaFor(-45, 25, 'home'), false, 'fora do corredor da área');
  // Pequena área alinhada ao gol defendido.
  assert.equal(insideGoalAreaFor(-50, 0, 'home'), true);
  assert.equal(insideGoalAreaFor(-46, 0, 'home'), false);
  assert.equal(insideGoalAreaFor(50, 0, 'away'), true);
  assert.equal(insideGoalAreaFor(46, 0, 'away'), false);
});

test('campanha da Copa sorteia grupos, joga três partidas e avança até a final', () => {
  const campaign = createWorldCupCampaign({ mode: '2027', seed: 314159 });
  assert.equal(campaign.groupMatches.length, 12, 'os dois grupos têm seis partidas cada');
  assert.equal(campaign.groupMatches.filter(match => match.playable).length, 3,
    'as três partidas do Brasil ficam jogáveis');
  assert.ok(campaign.groupMatches.filter(match => !match.playable).every(match => match.played),
    'os outros jogos entram como resultados simulados');

  let match = nextCampaignMatch(campaign);
  while (campaign.stage === 'group') {
    assert.ok(match, 'há uma próxima partida do Brasil na fase de grupos');
    const brazilAtHome = match.home === USER_NATIONAL_TEAM_ID;
    recordCampaignMatchResult(campaign, match.id, brazilAtHome ? 10 : 0, brazilAtHome ? 0 : 10);
    match = nextCampaignMatch(campaign);
  }
  assert.equal(campaign.stage, 'semifinal', 'três vitórias classificam o Brasil para a semifinal');
  const table = campaignStandings(campaign, campaign.groups.A.includes(USER_NATIONAL_TEAM_ID) ? 'A' : 'B');
  assert.equal(table.find(team => team.id === USER_NATIONAL_TEAM_ID).played, 3,
    'a tabela registra os três jogos disputados');

  const semifinal = nextCampaignMatch(campaign);
  assert.ok(semifinal, 'o Brasil recebe uma semifinal jogável');
  recordCampaignMatchResult(campaign, semifinal.id,
    semifinal.home === USER_NATIONAL_TEAM_ID ? 3 : 0,
    semifinal.away === USER_NATIONAL_TEAM_ID ? 3 : 0);
  assert.equal(campaign.stage, 'final', 'vencer a semifinal cria a partida final');

  const final = nextCampaignMatch(campaign);
  assert.ok(final && final.stage === 'final', 'a final fica disponível para jogar');
  recordCampaignMatchResult(campaign, final.id, 2, 0);
  assert.equal(campaign.stage, 'champion', 'o resultado final encerra a campanha como campeã');
  assert.equal(campaign.completed, true);
});

test('novo sorteio da Copa não repete os mesmos grupos consecutivos', () => {
  const first = createWorldCupCampaign({ seed: 77123 });
  const second = createWorldCupCampaign({ seed: first.seed, previousGroups: first.groups });
  const normalize = groups => [groups.A, groups.B].map(ids => [...ids].sort().join(',')).sort().join('|');
  assert.notEqual(normalize(first.groups), normalize(second.groups));
});

test('todo jogador com retrato tem a imagem disponível no pacote de assets', () => {
  const missing = [];
  let semFoto = 0;
  for (const team of TEAMS) {
    for (const player of [...team.players, ...team.substitutes]) {
      // Os clubes novos entraram sem retrato: o jogo mostra as iniciais.
      if (!player.photo) {
        semFoto += 1;
        continue;
      }
      if (!existsSync(new URL(player.photo, GAME_ROOT))) missing.push(player.photo);
    }
  }
  assert.deepEqual(missing, [], `retratos ausentes: ${missing.join(', ')}`);
  assert.ok(semFoto > 0, 'os clubes sem retrato usam as iniciais');
});

test('todo clube tem escudo e três blusas no pacote', () => {
  for (const team of TEAMS) {
    assert.ok(existsSync(new URL(team.crest, GAME_ROOT)), `escudo existe: ${team.crest}`);
    const kits = kitsOf(team.id);
    assert.equal(kits.length, 3, `${team.name} tem três blusas`);
    for (const kit of kits) {
      assert.ok(kit.colors.primary && kit.colors.secondary, `${team.name}: blusa com cores`);
      assert.ok(kitSvg(kit).includes('<svg'), `${team.name}: blusa desenhada em SVG`);
    }
    assert.ok(defaultKit(team.id), `${team.name} tem blusa principal`);
  }
});

test('as blusas com foto do pacote têm o render e o recorte no disco', () => {
  const withPhoto = [];
  for (const team of TEAMS) {
    for (const kit of kitsOf(team.id)) {
      if (!kit.render) continue;
      withPhoto.push(kit);
      assert.ok(existsSync(new URL(kit.render, GAME_ROOT)), `render existe: ${kit.render}`);
      assert.ok(existsSync(new URL(kit.shirt, GAME_ROOT)), `recorte existe: ${kit.shirt}`);
    }
  }
  assert.ok(withPhoto.length >= 9, `há blusas com foto do pacote: ${withPhoto.length}`);
});

test('as estrelas do cartão de time vão de zero a cinco', () => {
  assert.deepEqual(starSlots(5), ['full', 'full', 'full', 'full', 'full']);
  assert.deepEqual(starSlots(4.5), ['full', 'full', 'full', 'full', 'half']);
  assert.deepEqual(starSlots(3.2), ['full', 'full', 'full', 'empty', 'empty']);
  assert.equal(getTeam('nao-existe'), null);
});

test('todo import estático do jogo resolve para um arquivo do pacote', async () => {
  // Regressão do bug da "tela azul": o zip e o APK eram empacotados sem o
  // vendor/three.module.min.js; sem ele o grafo de módulos não carrega e nada
  // do jogo executa. Aqui todos os imports relativos de src/ são resolvidos
  // no disco para garantir que o pacote do jogo está fechado.
  const root = fileURLToPath(new URL('..', import.meta.url));
  const gameRoot = join(root, 'xfc-game');
  const sourceFiles = [];
  const walk = async dir => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith('.js') || entry.name.endsWith('.mjs')) sourceFiles.push(full);
    }
  };
  await walk(join(gameRoot, 'src'));
  sourceFiles.push(join(gameRoot, 'serve.mjs'));

  const specifiers = /(?:import|export)[^'"]*?\bfrom\s*['"]([^'"]+)['"]|import\s*['"]([^'"]+)['"]/g;
  const missing = [];
  for (const file of sourceFiles) {
    const text = await readFile(file, 'utf8');
    for (const match of text.matchAll(specifiers)) {
      const specifier = match[1] || match[2];
      if (!specifier || !specifier.startsWith('.')) continue;
      const target = normalize(join(dirname(file), specifier));
      if (!existsSync(target)) missing.push(`${relative(gameRoot, file)} -> ${specifier}`);
    }
  }
  assert.deepEqual(missing, [], `imports sem arquivo: ${missing.join(', ')}`);

  // O three.js do vendor/ é a dependência clássica do motor 3D.
  assert.ok(existsSync(join(gameRoot, 'vendor/three.module.min.js')),
    'vendor/three.module.min.js precisa existir no repositório');

  // O empacotamento do CI não pode mais pular o vendor/ nem o bundle offline.
  const workflow = await readFile(join(root, '.github/workflows/xfc-apk.yml'), 'utf8');
  assert.ok(/zip\s+-r\s+\.\.\/xfc-game\.zip[^\n]*vendor/.test(workflow),
    'o zip do jogo precisa incluir a pasta vendor/');
  assert.ok(workflow.includes('app.bundle.js'),
    'o zip do jogo precisa incluir o app.bundle.js (suporte ao file://)');
  assert.ok(workflow.includes('assets/game/vendor/three'),
    'a checagem do APK precisa exigir o three.js dentro do pacote');
});

test('fluxo do XFC: intro → menu → kick off → escolha de times → elenco', { timeout: 180000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });

    // As telas trocam de imagem: esperar o carregamento delas evita medir um
    // <img> ainda sem caixa (visível só depois que o arquivo chega).
    const imagesReady = async () => {
      await page.waitForFunction(
        () => Array.from(document.images).every(image => image.complete && image.naturalWidth > 0),
        null,
        { timeout: 20000 }
      );
    };

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Intro: selo da XF Esports e o logotipo XFC. A intro avança sozinha depois de
    // alguns segundos, então o teste aceita os dois desfechos: pular a intro com o
    // Enter ou esperar ela passar e seguir direto do menu.
    const intro = await page
      .waitForSelector('.screen--intro', { timeout: 15000 })
      .then(() => true)
      .catch(() => false);
    if (intro) {
      assert.ok(await page.locator('.intro__badge svg').isVisible(), 'o selo XF Esports aparece na intro');
      assert.ok(await page.locator('.intro__wordmark svg').isVisible(), 'o logotipo XFC aparece na intro');
      await page.keyboard.press('Enter');
    }

    // Tela de abertura (Neymar): "Entrar" leva ao menu principal.
    await page.waitForSelector('.screen--launch', { timeout: 15000 });
    assert.ok(await page.locator('.launch__art').isVisible(), 'a arte da tela de abertura aparece');
    assert.ok(await page.locator('.launch__enter').isVisible(), 'o botão Entrar está na tela');
    await page.click('.launch__enter');

    // Hub de futebol da referência: estádio em tela cheia, Kick Off selecionado,
    // nove atalhos verticais, progressão no topo e ação principal.
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    await imagesReady();
    const navLabels = await page.locator('.menu__item-label').allTextContents();
    assert.deepEqual(navLabels, [
      'FC NEWS', 'KICK OFF', 'THE GROUNDS', 'ULTIMATE TEAM', 'LEARN TO PLAY',
      'SEASONS', 'TOURNAMENTS', 'CO-OP SEASONS', 'ONLINE FRIENDLIES'
    ], 'o menu mantém as opções do hub em uma lista vertical');
    assert.equal(await page.locator('.menu__item.is-focused').getAttribute('data-menu-item'), 'kickoff',
      'KICK OFF aparece selecionado por padrão');
    assert.equal(await page.locator('.hub__background').getAttribute('src'), 'assets/bg/menu-hero.jpg',
      'o menu usa a imagem de estádio em tela cheia');
    assert.ok(await page.locator('.hub__wordmark svg').count() > 0, 'o menu mostra a marca XFC');
    assert.ok(await page.locator('.hub__progress').isVisible(), 'a barra de XP aparece no topo');
    assert.equal(await page.locator('.hub__xp-bar').getAttribute('role'), 'progressbar',
      'o progresso de XP expõe uma barra acessível');
    assert.equal(await page.locator('.hub__xp-bar').getAttribute('aria-valuenow'), '3000');
    assert.equal(await page.locator('.hub__cta-label').textContent(), 'Enter Kick Off',
      'a ação principal acompanha o modo selecionado');
    assert.equal(await page.locator('.menu__scene3d canvas').count(), 0,
      'o menu de referência usa arte de estádio em vez da cena 3D antiga');

    // Loja do Ultimate Team: compra de carta, desconto de moedas e coleção salva.
    const coinsBeforePurchase = Number(await page.locator('.screen--menu').getAttribute('data-coins'));
    await page.locator('.menu__item[data-menu-item="ultimate"]').click();
    await page.waitForSelector('.screen--ultimate');
    assert.ok(await page.locator('.ultimate-card__buy').count() >= 6, 'a loja mostra cartas contratáveis');
    const buyButton = page.locator('.ultimate-card__buy').first();
    const priceText = await buyButton.textContent();
    await buyButton.click();
    await page.waitForFunction(() => document.querySelectorAll('.ultimate-card__owned').length === 1);
    const coinsAfterPurchase = Number(await page.locator('.ultimate__coin-value').textContent());
    assert.ok(coinsAfterPurchase < coinsBeforePurchase, `a compra desconta moedas (${priceText})`);
    assert.equal(await page.locator('.ultimate__tab.is-active').textContent(), 'MEU ELENCO',
      'a compra leva para a coleção do jogador');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    // Configurações e personalização: grade, diálogos e edição de perfil.
    await page.locator('.hub__quick-button[data-action="settings"]').click();
    await page.waitForSelector('.screen--customise');
    assert.equal(await page.locator('.customise__tile').count(), 8, 'a tela de personalização mostra oito opções');
    await page.locator('.customise__tile[data-tile="profile"]').click();
    await page.waitForSelector('.customise__dialog[role="dialog"]');
    await page.locator('input[aria-label="Nome do perfil"]').fill('XFC Tester');
    await page.locator('.customise__dialog-save').click();
    assert.ok(await page.locator('.customise__dialog').count() === 0, 'salvar o perfil fecha o diálogo');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    // Play Modes: a Copa abre uma tela acessível e o botão Escape volta aos modos.
    await page.locator('.menu__item[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes');
    assert.equal(await page.locator('.modes__option').count(), 6, 'a tela lista os modos e o Centro de Treino');
    assert.ok(await page.locator('.modes__option[data-option="training"]').isVisible(),
      'o Centro de Treino fica acessível pelos modos de jogo');
    assert.ok((await page.locator('.modes__option').first().textContent()).includes('WORLD CUP'), 'a Copa aparece como modo');
    await page.locator('.modes__cta').click();
    await page.waitForSelector('.screen--worldcup');
    assert.ok(await page.locator('.worldcup__group').isVisible(), 'o modo Copa abre o grupo');
    assert.equal(await page.locator('.worldcup__standings-row').count(), 4, 'a tabela lista as quatro seleções do grupo');
    const firstStanding = page.locator('.worldcup__standings-row').first();
    const rankBox = await firstStanding.locator('.worldcup__standings-rank').boundingBox();
    const pointsBox = await firstStanding.locator('.worldcup__standings-points').boundingBox();
    assert.ok(rankBox && pointsBox && Math.abs(rankBox.y - pointsBox.y) < 2,
      'a posição e os pontos permanecem alinhados na mesma linha');
    assert.equal(await page.locator('.worldcup__fixture').count(), 6,
      'a fase de grupos mostra os seis jogos do grupo');
    assert.equal(await page.locator('.worldcup__play-match').count(), 1,
      'a próxima partida do Brasil pode ser iniciada');
    const campaignMatchId = await page.locator('.worldcup__play-match').getAttribute('data-match-id');
    await page.locator('.worldcup__play-match').click();
    await page.waitForSelector('.screen--play');
    await page.waitForFunction(() => window.__xfcMatch?.teams?.home?.players?.length === 11);
    const countryMatch = await page.locator('.showcase__matchup').textContent();
    assert.ok(countryMatch?.toUpperCase().includes('BRASIL'), 'a partida de campanha abre com as seleções corretas');
    assert.equal(await page.locator('.showcase__crest.team-mark--flag').count(), 2,
      'as bandeiras das duas seleções aparecem no pré-jogo');
    await page.click('.showcase__enter');
    await page.evaluate(() => {
      const match = window.__xfcMatch;
      const userIsHome = match.teams.home.info.id === 'brazil';
      match.world.setPaused(false);
      match.teams.home.score = userIsHome ? 1 : 0;
      match.teams.away.score = userIsHome ? 0 : 1;
      match.phase.name = 'play';
      match.clock.half = 2;
      match.clock.minutes = 94;
      match.clock.added = 4;
      match.world.tick(1 / 60);
    });
    await page.waitForSelector('.result__title', { timeout: 6000 });
    const persistedResult = await page.evaluate(matchId => {
      const profile = JSON.parse(localStorage.getItem('xfc.profile.v1'));
      return {
        coins: profile.coins,
        match: profile.worldCupCampaign.groupMatches.find(item => item.id === matchId)
      };
    }, campaignMatchId);
    assert.ok(persistedResult.match?.played, 'o apito final registra o jogo na campanha salva');
    assert.equal(persistedResult.match.winner, 'brazil', 'o resultado da partida conta para a classificação');
    assert.ok(persistedResult.coins > coinsAfterPurchase, 'a partida da Copa também recompensa moedas');
    await page.click('.result__actions .btn:has-text("CONTINUAR COPA")');
    await page.waitForSelector('.screen--worldcup');
    assert.equal(await page.locator('.worldcup__play-match').count(), 1,
      'a Copa libera a próxima partida depois do resultado');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--modes');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    // Kick Off continua acessível pela tela de modos.
    await page.locator('.menu__item[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes');
    await page.locator('.modes__option[data-option="worldcup-kickoff"]').click();
    await page.locator('.modes__cta').click();
    await page.waitForSelector('.screen--kickoff');
    const teamNames = await page.locator('.team-card__name').allTextContents();
    assert.ok(teamNames.includes('FC Barcelona'), 'Barcelona aparece na escolha de times');
    assert.ok(teamNames.includes('Real Madrid'), 'Real Madrid aparece na escolha de times');
    assert.equal(await page.locator('.team-card__rating b').count(), 6, 'cada time mostra ATT, MID e DEF');
    await imagesReady();
    assert.ok(await page.locator('.team-card__crest').first().isVisible(), 'os escudos aparecem');

    // As setas ao lado do escudo trocam de clube: os clubes brasileiros entram
    // na escolha de times.
    const nextClub = '.kickoff__slot[data-slot="home"] .picker-arrow--crest:last-child';
    const prevClub = '.kickoff__slot[data-slot="home"] .picker-arrow--crest:first-child';
    const homeName = () => page.locator('.team-card__name').first().textContent();
    await page.click(nextClub);
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Ibis Esporte'), 'Ibis Esporte aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Paraná Clube'), 'Paraná Clube aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Flamengo'), 'Flamengo aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Palmeiras'), 'Palmeiras aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Corinthians'), 'Corinthians aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Aston Villa'), 'os clubes do pacote também entram no carousel');
    await page.click(prevClub);
    assert.ok((await homeName()).includes('Corinthians'), 'a seta anterior volta um clube');
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    assert.ok((await homeName()).includes('FC Barcelona'),
      'a troca de clube volta para o Barcelona');

    // Tela de blusas: READY, carrossel com três uniformes e a prévia dos dois
    // jogadores (um de cada lado).
    await page.click('.btn:has-text("Blusas")');
    await page.waitForSelector('.screen--kits');
    assert.ok((await page.locator('.kits__ready').textContent()).includes('READY'), 'a tela de blusas tem READY');
    assert.equal(await page.locator('.kits__row .kits__tile').count(), 3, 'o carrossel mostra três blusas');
    assert.equal(await page.locator('.kits__preview-figure svg').count(), 2, 'os dois jogadores vestem o uniforme');
    assert.equal(await page.locator('.kits__preview-figure img').count(), 0,
      'sem foto de pacote, a prévia usa o desenho em SVG');
    await page.click('.kits__arrow:last-child');
    assert.ok((await page.locator('.kits__tile-name').nth(1).textContent()).length > 0, 'a blusa escolhida tem nome');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--kickoff');

    // Escolha do confronto e ida para o elenco.
    await page.click('.team-card:has-text("FC Barcelona")');
    await page.click('.team-card:has-text("Real Madrid")');
    await page.click('.btn:has-text("Ver elenco")');
    await page.waitForSelector('.screen--squad');
    await imagesReady();
    assert.equal(await page.locator('.pitch-player').count(), 11, 'o campo mostra onze jogadores');
    assert.equal(await page.locator('.bench__slot').count(), 7, 'o banco mostra sete reservas');
    assert.ok((await page.locator('.player-panel__name').textContent()).length > 2, 'o painel mostra o jogador selecionado');

    // CONTINUAR leva à escolha de estádios (galeria dos seis estádios).
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--kickoff');
    await page.click('.screen--kickoff .continue-btn', { noWaitAfter: true });
    await page.waitForSelector('.screen--stadiums', { timeout: 15000 });
    assert.equal(await page.locator('.stadiums__card').count(), 6, 'a galeria mostra os seis estádios');
    await page.click('.stadiums__card:first-child', { noWaitAfter: true });

    // Tocar no cartão do estádio leva ao jogo 3D de verdade — com o HUD de
    // transmissão, o analógico fixo e o cartão do jogador controlado.
    try {
      await page.waitForSelector('.screen--play', { timeout: 30000 });
    } catch (error) {
      const dump = await page.evaluate(() => {
        const node = document.querySelector('.screen--play');
        const rect = node?.getBoundingClientRect();
        return {
          exists: Boolean(node),
          className: node?.className ?? null,
          opacity: node ? getComputedStyle(node).opacity : null,
          rect: rect ? [rect.x, rect.y, rect.width, rect.height] : null,
          screens: [...document.querySelectorAll('.screen')].map(s => s.className),
          bodyText: document.body.innerText.replace(/\s+/g, ' ').slice(0, 400)
        };
      }).catch(e => ({ evaluateFailed: String(e) }));
      throw new Error(`${error.message}\nPalco:\n${JSON.stringify(dump, null, 2)}\nErros:\n${JSON.stringify(errors)}`);
    }
    await page.waitForSelector('.showcase__enter', { timeout: 30000 });
    assert.ok(await page.locator('.showcase__enter').isVisible(), 'a partida abre no pré-jogo');
    await page.click('.showcase__enter');
    await page.waitForSelector('.hud.is-visible', { timeout: 15000 });
    const boardBox = await page.locator('.hud__scoreboard').boundingBox();
    assert.ok(boardBox && boardBox.x < 40, 'o placar fica no canto superior esquerdo');
    const stickBox = await page.locator('.controls__stick').boundingBox();
    assert.ok(stickBox && stickBox.x < 320 && stickBox.y > 500,
      'o analógico fica fixo no canto inferior esquerdo');
    assert.ok((await page.locator('.hud__player .hud__player-name').textContent()).trim().length > 1,
      'o cartão mostra o nome do atleta controlado');
    const stickStyle = await page.locator('.controls__stick').evaluate(node => {
      const style = getComputedStyle(node);
      return [style.left, style.bottom];
    });
    assert.deepEqual(stickStyle, ['96px', '118px'], 'o joystick permanece na posição original');
    const passBox = await page.locator('.ctrl-btn--pass').boundingBox();
    const runBox = await page.locator('.ctrl-btn--sprint').boundingBox();
    assert.ok(passBox && runBox && passBox.width >= 96 && runBox.width >= 96,
      'PASSE e CORRER têm botões maiores');
    assert.ok(passBox.x < runBox.x && runBox.x - passBox.x < 145,
      'PASSE e CORRER trocaram de lado e ficaram próximos');
    assert.ok(await page.locator('.hud__foe').isVisible(),
      'o adversário mais próximo aparece no canto inferior direito');
    assert.ok(await page.locator('.hud__poss').isVisible(),
      'o HUD mostra a barra de posse de bola');
    assert.equal(await page.locator('.hud__poss-fill').count(), 1,
      'a barra de posse tem o preenchimento do mandante');
    assert.equal(await page.locator('.hud__tag').count(), 1,
      'a HUD mantém o elemento de etiqueta para o atleta controlado');
    assert.equal(await page.locator('.hud__cards').count(), 1,
      'o placar inclui o resumo dos cartões por equipe');
    assert.equal(await page.locator('.hud__card-chip').count(), 4,
      'o HUD identifica cartões amarelos e vermelhos para os dois times');

    const kickoffIdle = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const state = match.world.snapshot();
      return {
        phase: match.phase.name,
        side: match.phase.side,
        userSide: match.world.userSide,
        owner: match.ball.state.owner?.id || null,
        controlled: match.controlled[match.world.userSide]?.id || null,
        kickoffPositionsLegal: match.world.members(match.phase.side)
          .filter(player => player !== match.ball.state.owner)
          .every(player => match.world.attackSign(match.phase.side) * player.x <= 0)
          && match.world.members(match.world.opponentOf(match.phase.side))
            .every(player => match.world.attackSign(match.phase.side) * player.x >= 9.15),
        shots: state.stats.home.shots + state.stats.away.shots,
        passes: state.stats.home.passes + state.stats.away.passes
      };
    });
    await page.waitForTimeout(300);
    const kickoffAfterWait = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const state = match.world.snapshot();
      return {
        phase: match.phase.name,
        owner: match.ball.state.owner?.id || null,
        shots: state.stats.home.shots + state.stats.away.shots,
        passes: state.stats.home.passes + state.stats.away.passes
      };
    });
    assert.equal(kickoffIdle.phase, 'kickoff', 'a saída humana aguarda o comando do jogador');
    assert.equal(kickoffIdle.side, kickoffIdle.userSide, 'o jogador controla a equipe que cobra a saída');
    assert.equal(kickoffIdle.owner, kickoffIdle.controlled, 'o cobrador mantém a posse enquanto espera');
    assert.ok(kickoffIdle.kickoffPositionsLegal,
      'os times respeitam as metades do campo e a distância dos adversários na saída');
    assert.deepEqual(kickoffAfterWait, {
      phase: 'kickoff', owner: kickoffIdle.owner, shots: kickoffIdle.shots, passes: kickoffIdle.passes
    }, 'a simulação não dispara passe ou chute sem ação explícita');

    const shotGestures = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const button = document.querySelector('.ctrl-btn--shoot');
      const originalCommand = match.world.command;
      button.setPointerCapture = () => {};
      const kinds = [];
      match.world.command = (name, payload) => {
        if (name === 'shoot') kinds.push(payload.kind);
        originalCommand(name, payload);
      };
      const gesture = (dx, dy) => {
        const base = { pointerId: 17, pointerType: 'touch', bubbles: true, cancelable: true };
        button.dispatchEvent(new PointerEvent('pointerdown', { ...base, clientX: 100, clientY: 100 }));
        button.dispatchEvent(new PointerEvent('pointermove', { ...base, clientX: 100 + dx, clientY: 100 + dy }));
        button.dispatchEvent(new PointerEvent('pointerup', { ...base, clientX: 100 + dx, clientY: 100 + dy }));
      };
      gesture(0, -48);
      gesture(0, 48);
      gesture(-48, 0);
      match.world.command = originalCommand;
      return kinds;
    });
    assert.deepEqual(shotGestures, ['curved', 'placed', 'power'],
      'arrastar para cima curva, para baixo coloca e para trás gera o superchute');
    const controlledBefore = (await page.locator('.hud__player .hud__player-name').textContent()).trim();
    await page.locator('.ctrl-btn--switch').click();
    await page.waitForFunction(name =>
      document.querySelector('.hud__player .hud__player-name')?.textContent.trim() !== name,
    controlledBefore, { timeout: 5000 });
    assert.notEqual((await page.locator('.hud__player .hud__player-name').textContent()).trim(), controlledBefore,
      'TROCAR seleciona outro atleta controlado');

    // O favicon não é servido pelo servidor do jogo: o ruído dele não interessa.
    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `a tela não deve gerar erro de console: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});

test('partidas rápidas: escolha, pré-jogo, partida 3D e resultado', { timeout: 180000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 720 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 14; Mobile) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36'
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch', { timeout: 15000 });
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    const coinsBeforeMatch = Number(await page.locator('.screen--menu').getAttribute('data-coins'));

    // O atalho CO-OP SEASONS leva direto à preparação de uma partida rápida.
    await page.locator('.menu__item[data-menu-item="quick"]').click();
    await page.waitForSelector('.screen--quick', { timeout: 15000 });
    assert.equal(await page.locator('.quick__panel').count(), 2, 'a tela tem HOME e AWAY');
    assert.equal(await page.locator('.quick__panel--home .quick__crest').count(), 1, 'o mandante mostra o escudo');
    assert.ok(await page.locator('.quick__kit').count() >= 6, 'cada lado oferece as blusas do clube');
    assert.ok(await page.locator('.continue-btn').count(), 'a tela oferece o CONTINUAR');

    // Duração e dificuldade são ajustáveis antes de começar.
    await page.locator('.quick__option', { hasText: 'CURTA' }).first().click();
    await page.locator('.quick__option', { hasText: 'FÁCIL' }).first().click();

    await page.click('.quick__actions .continue-btn', { noWaitAfter: true });
    await page.waitForSelector('.screen--stadiums', { timeout: 15000 });
    assert.equal(await page.locator('.stadiums__card').count(), 6, 'a galeria mostra os seis estádios');
    await page.click('.stadiums__card:first-child', { noWaitAfter: true });
    try {
      await page.waitForSelector('.screen--play', { timeout: 30000 });
    } catch (error) {
      const dump = await page.evaluate(() => {
        const node = document.querySelector('.screen--play');
        const rect = node?.getBoundingClientRect();
        return {
          exists: Boolean(node),
          className: node?.className ?? null,
          opacity: node ? getComputedStyle(node).opacity : null,
          rect: rect ? [rect.x, rect.y, rect.width, rect.height] : null,
          screens: [...document.querySelectorAll('.screen')].map(s => s.className),
          bodyText: document.body.innerText.replace(/\s+/g, ' ').slice(0, 400)
        };
      }).catch(e => ({ evaluateFailed: String(e) }));
      throw new Error(`${error.message}\nPalco:\n${JSON.stringify(dump, null, 2)}\nErros:\n${JSON.stringify(errors)}`);
    }
    await page.waitForSelector('.showcase__enter', { timeout: 30000 });

    // No Android, a tela nova entra sem um fade/scale da página inteira e o
    // buffer WebGL começa no perfil fixo (sem redimensionamento em seguida).
    const mobileStartup = await page.evaluate(() => {
      const engine = window.__xfcMatch.engine;
      const screen = document.querySelector('.screen--play');
      const prompt = document.querySelector('.showcase__enter');
      return {
        lowPower: engine.lowPower,
        pixelRatio: engine.renderer.getPixelRatio(),
        qualitySteps: engine.profile.qualitySteps,
        screenTransition: getComputedStyle(screen).transitionDuration,
        screenTransform: getComputedStyle(screen).transform,
        promptAnimation: getComputedStyle(prompt).animationName
      };
    });
    assert.equal(mobileStartup.lowPower, true, 'o teste está usando o perfil Android');
    assert.equal(mobileStartup.pixelRatio, 0.6, 'o buffer WebGL começa no tamanho estável');
    assert.deepEqual(mobileStartup.qualitySteps, [0.6], 'o buffer não tem níveis que o redimensionem durante o jogo');
    assert.equal(mobileStartup.screenTransition, '0s', 'a tela inteira não ganha fade/scale no WebView touch');
    assert.equal(mobileStartup.screenTransform, 'none', 'a tela não é transformada durante a troca');
    assert.equal(mobileStartup.promptAnimation, 'none', 'a chamada para entrar em campo não pisca no celular');

    // Pré-jogo imersivo: o estádio toma a tela, com o confronto no centro.
    assert.ok(await page.locator('.showcase__chip').isVisible(), 'o pré-jogo abre com o selo da liga');
    assert.equal(await page.locator('.showcase__matchup img').count(), 2, 'o pré-jogo mostra os dois escudos');
    assert.ok(await page.locator('.showcase__enter').isVisible(), 'o pré-jogo convida a entrar em campo');
    assert.equal(await page.locator('.showcase__arrow').count(), 2, 'as setas trocam o estádio');
    await page.click('.showcase__enter');

    // Partida: HUD, radar e controles na tela.
    await page.waitForSelector('.hud.is-visible', { timeout: 15000 });
    const kickoffAccepted = await page.evaluate(() => window.__xfcMatch.world.command('pass'));
    assert.ok(kickoffAccepted, 'a saída aguarda e começa com o passe explícito do jogador');
    await page.waitForTimeout(2200); // cruza pelo menos uma janela de amostragem de FPS
    const stableBuffer = await page.evaluate(() => ({
      ratio: window.__xfcMatch.engine.renderer.getPixelRatio(),
      quality: window.__xfcMatch.engine.state.quality,
      size: [window.__xfcMatch.engine.renderer.domElement.width, window.__xfcMatch.engine.renderer.domElement.height]
    }));
    assert.deepEqual(stableBuffer, { ratio: 0.6, quality: 0, size: [768, 432] },
      'o WebView não redimensiona nem limpa o buffer durante a partida');
    assert.equal(await page.locator('.hud__crest').count(), 2, 'o placar mostra os dois escudos');
    assert.equal(await page.locator('.hud__score').count(), 2, 'o placar mostra os dois placares');
    assert.ok(await page.locator('.hud__clock').isVisible(), 'o placar mostra o relógio');
    assert.ok(await page.locator('.hud__radar').isVisible(), 'o radar aparece no HUD');
    assert.equal(await page.locator('.ctrl-btn').count(), 7, 'há os sete botões de ação');
    assert.ok(await page.locator('.controls__stick-zone').count(), 'há o analógico virtual');
    const quickStickBox = await page.locator('.controls__stick').boundingBox();
    assert.ok(quickStickBox && quickStickBox.x < 260 && quickStickBox.y > 460,
      'o analógico fica fixo no canto inferior esquerdo');
    assert.ok((await page.locator('.hud__player .hud__player-name').textContent()).trim().length > 1,
      'o cartão mostra o nome do atleta controlado');
    assert.ok(await page.locator('.hud__foe').isVisible(),
      'o adversário mais próximo aparece no canto inferior direito');
    assert.ok(await page.locator('.hud__poss').isVisible(),
      'o HUD mostra a barra de posse de bola');

    // O painel de pausa segue a referência: botão visível no topo direito,
    // placar, formação e blocos de opções.
    const pauseButton = page.locator('.play__pause-button');
    assert.ok(await pauseButton.isVisible(), 'o botão de pausa fica visível durante a partida');
    const pauseBox = await pauseButton.boundingBox();
    assert.ok(pauseBox && pauseBox.x > 1100 && pauseBox.y < 70,
      'o botão de pausa fica no canto superior direito');
    await pauseButton.click();
    await page.waitForSelector('.pause--fc');
    assert.ok(await page.locator('.pause__scoreline').isVisible(), 'a pausa mantém o placar no topo');
    assert.equal(await page.locator('.pause__lineup-player').count(), 11, 'a pausa mostra a escalação completa');
    assert.equal(await page.locator('.pause__tile').count(), 6, 'a pausa mostra as opções em blocos');
    assert.ok(!(await page.locator('.pause__detail').textContent()).includes('false'),
      'a pausa não deixa booleanos soltos no painel de detalhes');
    await page.locator('.pause__tile[data-pause-action="facts"]').click();
    assert.equal(await page.locator('.pause__detail-row').count(), 5, 'FATOS DA PARTIDA abre as estatísticas ao vivo');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.hud.is-visible');

    // A simulação realmente roda: o relógio anda, a bola se mexe e o placar
    // existe para as duas equipes.
    const running = await page.evaluate(async () => {
      const match = window.__xfcMatch;
      const before = match.world.snapshot();
      for (let index = 0; index < 600; index += 1) match.world.tick(1 / 60);
      const after = match.world.snapshot();
      return {
        before,
        after,
        ball: { x: match.ball.state.position.x, z: match.ball.state.position.z },
        players: match.world.members('home').length + match.world.members('away').length,
        keeperHome: match.world.members('home').filter(player => player.isKeeper).length
      };
    });
    assert.equal(running.players, 22, 'a partida tem onze jogadores em cada time');
    assert.equal(running.keeperHome, 1, 'cada time tem um goleiro');
    assert.ok(running.after.minutes > running.before.minutes, 'o relógio avança durante a partida');
    assert.ok(Number.isFinite(running.ball.x) && Number.isFinite(running.ball.z), 'a bola fica dentro do campo');
    assert.equal(running.after.score.length, 2, 'o placar tem os dois times');

    // Chute carregado sai como tiro forte: o analógico não influencia,
    // quem manda é o botão seguro (strength 1 => 'power').
    const shotKind = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const shooter = match.world.members('home').find(player => !player.isKeeper);
      match.controlled.home = shooter;
      match.phase.name = 'play';
      match.phase.restart = null;
      match.ball.attachTo(shooter);
      match.world.command('shoot', { strength: 1, placed: false });
      return match.ball.state.lastShotKind;
    });
    assert.equal(shotKind, 'power', 'o tiro carregado sai como chute forte');

    // A defesa mergulhada do goleiro não pode derrubar a simulação.
    const goalkeeperSave = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.world.members('home'), ...match.world.members('away')];
      const keeper = players.find(player => player.side === 'away' && player.isKeeper);
      const shooter = players.find(player => player.side === 'home' && !player.isKeeper);
      for (const player of players) player.active = player === keeper;
      match.phase.name = 'play';
      match.phase.restart = null;
      match.teams.home.score = 0;
      match.teams.away.score = 0;
      match.world.diveKeeper(keeper, 1);
      const savesBefore = match.world.snapshot().stats.away.saves;
      let saved = false;
      for (let attempt = 0; attempt < 40 && !saved; attempt += 1) {
        keeper.x = 50.5;
        keeper.z = 0;
        keeper.root.position.set(keeper.x, 0, keeper.z);
        match.ball.state.owner = null;
        match.ball.state.position.set(52.45, 0.8, 0);
        match.ball.state.velocity.set(8, 0, 0);
        match.ball.state.spin.set(0, 0, 0);
        match.ball.state.guidance = null;
        match.ball.state.lastCollision = null;
        match.ball.state.lastShotKind = 'normal';
        match.ball.state.lastTouch = shooter;
        match.world.tick(1 / 60);
        saved = match.world.snapshot().stats.away.saves > savesBefore;
        if (!saved) {
          match.teams.home.score = 0;
          match.teams.away.score = 0;
          match.phase.name = 'play';
          match.phase.timer = 0;
        }
      }
      return {
        score: match.world.snapshot().score,
        saved,
        lastTouchIsKeeper: match.ball.state.lastTouch === keeper,
        keeperX: keeper.x
      };
    });
    assert.deepEqual(goalkeeperSave.score, [0, 0], 'o goleiro segura um chute alinhado antes da linha do gol');
    assert.ok(goalkeeperSave.saved, 'o goleiro defende o chute antes de cruzar a linha');
    assert.ok(goalkeeperSave.lastTouchIsKeeper, 'a defesa registra o goleiro como último toque da bola');

    const goalAndGoalKick = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.teams.home.players, ...match.teams.away.players];
      const homeKeeper = players.find(player => player.side === 'home' && player.isKeeper);
      const awayKeeper = players.find(player => player.side === 'away' && player.isKeeper);
      const awayShooter = players.find(player => player.side === 'away' && !player.isKeeper);
      for (const player of players) player.active = false;
      match.phase.name = 'play';
      match.phase.restart = null;
      match.ball.state.owner = null;
      match.ball.state.position.set(52.45, 1.2, 0);
      match.ball.state.velocity.set(20, 0, 0);
      match.ball.state.spin.set(0, 0, 0);
      match.ball.state.lastCollision = null;
      match.ball.state.lastTouch = null;
      match.world.tick(1 / 60);
      const scored = match.world.snapshot().score;
      const noTouch = match.ball.state.lastTouch === null;

      homeKeeper.active = true;
      homeKeeper.x = -48;
      homeKeeper.z = 0;
      homeKeeper.root.position.set(homeKeeper.x, 0, homeKeeper.z);
      match.phase.name = 'play';
      match.phase.timer = 0;
      match.phase.restart = null;
      match.ball.state.owner = null;
      match.ball.state.position.set(-52.45, 0.18, 4.5);
      match.ball.state.velocity.set(-20, 0, 0);
      match.ball.state.spin.set(0, 0, 0);
      match.ball.state.lastCollision = null;
      match.ball.state.lastTouch = awayShooter;
      match.world.tick(1 / 60);
      match.world.tick(1 / 60);
      const restart = match.phase.restart;
      const shotsBeforeRestartInput = match.world.snapshot().stats.home.shots;
      for (let index = 0; index < 90; index += 1) match.world.tick(1 / 60);
      const restartWaitsForInput = match.phase.restart === restart
        && match.phase.restart?.ready
        && match.ball.state.owner === homeKeeper
        && match.world.snapshot().stats.home.shots === shotsBeforeRestartInput;
      const explicitShotAccepted = match.world.command('shoot', { strength: 0.7 });
      const result = {
        scored,
        noTouch,
        goalKick: restart?.type === 'goalkick' && restart.side === 'home',
        takerIsKeeper: restart?.taker === homeKeeper,
        restartWaitsForInput,
        explicitShotAccepted,
        restartShotReleased: match.phase.name === 'play' && match.phase.restart === null
          && match.world.snapshot().stats.home.shots === shotsBeforeRestartInput + 1
          && match.ball.state.lastShotKind === 'direct',
        awayKeeperExists: Boolean(awayKeeper),
        awayShooterExists: Boolean(awayShooter)
      };
      for (const player of players) player.active = true;
      return result;
    });
    assert.deepEqual(goalAndGoalKick.scored, [1, 0], 'a bola que cruza a linha inteira entra no gol');
    assert.ok(goalAndGoalKick.noTouch, 'a bola que entra no gol sem desvio não mantém um toque fantasma');
    assert.ok(goalAndGoalKick.goalKick && goalAndGoalKick.takerIsKeeper,
      'a bola pela linha de fundo sem toque do goleiro gera tiro de meta cobrado pelo goleiro');
    assert.ok(goalAndGoalKick.restartWaitsForInput,
      'a reposição humana fica aguardando sem passe ou chute automático');
    assert.ok(goalAndGoalKick.explicitShotAccepted && goalAndGoalKick.restartShotReleased,
      'um comando explícito de chute cobra a bola parada e retoma o jogo');
    assert.ok(goalAndGoalKick.awayKeeperExists, 'o goleiro também existe no lado visitante');

    const manualSlide = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.teams.home.players, ...match.teams.away.players];
      const tackler = match.teams.home.players.find(player => !player.isKeeper);
      const previousControl = match.controlled.home;
      const previousPosition = { x: tackler.x, z: tackler.z };
      const ballState = match.ball.state;
      const previousBall = {
        position: ballState.position.clone(),
        velocity: ballState.velocity.clone(),
        spin: ballState.spin.clone(),
        owner: ballState.owner,
        lastTouch: ballState.lastTouch,
        guidance: ballState.guidance,
        lastCollision: ballState.lastCollision,
        lastShotKind: ballState.lastShotKind
      };
      for (const player of players) player.active = player === tackler;
      tackler.x = 0;
      tackler.z = 0;
      tackler.vx = tackler.vz = 0;
      tackler.slideTackle = null;
      tackler.slideCooldownUntil = 0;
      tackler.root.position.set(0, 0, 0);
      match.controlled.home = tackler;
      match.phase.name = 'play';
      match.phase.timer = 0;
      match.phase.restart = null;
      match.ball.state.owner = null;
      match.ball.state.position.set(2.8, 0.11, 0);
      match.ball.state.velocity.set(0, 0, 0);
      match.ball.state.spin.set(0, 0, 0);
      match.ball.state.guidance = null;
      match.ball.state.lastTouch = null;
      match.ball.state.lastCollision = null;
      const started = match.world.command('tackle');
      for (let index = 0; index < 90; index += 1) match.world.tick(1 / 60);
      const result = {
        started,
        cleanAcquisition: match.ball.state.owner === tackler,
        recovered: !tackler.slideTackle,
        noFoul: match.phase.name === 'play' && match.phase.restart === null
      };
      for (const player of players) player.active = true;
      tackler.x = previousPosition.x;
      tackler.z = previousPosition.z;
      tackler.vx = tackler.vz = 0;
      tackler.root.position.set(tackler.x, 0, tackler.z);
      match.controlled.home = previousControl;
      ballState.position.copy(previousBall.position);
      ballState.velocity.copy(previousBall.velocity);
      ballState.spin.copy(previousBall.spin);
      ballState.owner = previousBall.owner;
      ballState.lastTouch = previousBall.lastTouch;
      ballState.guidance = previousBall.guidance;
      ballState.lastCollision = previousBall.lastCollision;
      ballState.lastShotKind = previousBall.lastShotKind;
      match.ball.mesh.position.copy(ballState.position);
      match.ball.shadow.position.set(ballState.position.x, 0.02, ballState.position.z);
      return result;
    });
    assert.ok(manualSlide.started, 'o botão de carrinho inicia uma ação defensiva manual');
    assert.ok(manualSlide.cleanAcquisition && manualSlide.recovered && manualSlide.noFoul,
      'o carrinho limpo alcança a bola, recupera o atleta e mantém a partida em jogo');

    const disciplinary = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.teams.home.players, ...match.teams.away.players];
      const offender = match.teams.home.players.find(player => !player.isKeeper);
      const victim = match.teams.away.players.find(player => !player.isKeeper);
      const previousControl = match.controlled.home;
      match.controlled.home = offender;
      for (const player of players) player.active = player.side === 'home' || player === victim;
      offender.x = 27; offender.z = 0; offender.root.position.set(27, 0, 0);
      victim.x = 28; victim.z = 0; victim.root.position.set(28, 0, 0);
      let firstYellowAt = null;
      let firstRestart = null;
      let dismissed = false;
      for (let attempt = 0; attempt < 120 && !dismissed; attempt += 1) {
        match.phase.name = 'play';
        match.phase.restart = null;
        match.ball.attachTo(victim);
        match.world.tackle(offender);
        if (!firstRestart && match.phase.restart) {
          firstRestart = {
            type: match.phase.restart.type,
            side: match.phase.restart.side,
            x: match.phase.restart.x,
            z: match.phase.restart.z
          };
        }
        const yellows = match.teams.home.cards[offender.id] || 0;
        if (yellows === 1 && firstYellowAt === null) firstYellowAt = attempt;
        dismissed = !offender.active;
      }
      const result = {
        yellows: match.teams.home.cards[offender.id] || 0,
        firstYellowAt,
        firstRestart,
        dismissed,
        active: offender.active,
        replacementIsActive: match.controlled.home !== offender && Boolean(match.controlled.home?.active)
      };
      for (const player of players) player.active = true;
      match.controlled.home = previousControl;
      match.phase.name = 'play';
      match.phase.restart = null;
      return result;
    });
    assert.ok(disciplinary.firstYellowAt !== null, 'a entrada perigosa recebe o primeiro amarelo');
    assert.deepEqual(disciplinary.firstRestart, { type: 'freekick', side: 'away', x: 28, z: 0 },
      'a falta fora da área reinicia para o adversário no ponto do incidente');
    assert.ok(disciplinary.dismissed && !disciplinary.active && disciplinary.yellows >= 2,
      'o segundo amarelo vira vermelho e remove o atleta de campo');
    assert.ok(disciplinary.replacementIsActive,
      'a expulsão troca o controle para um atleta ativo, nunca para o jogador removido');

    // O jogo pausa no intervalo: o jogador volta com o botão do segundo tempo.
    await page.evaluate(async () => {
      const match = window.__xfcMatch;
      for (let index = 0; index < 60000; index += 1) {
        match.world.tick(1 / 60);
        if (match.phase.name === 'kickoff' && match.phase.side === match.world.userSide) {
          match.world.command('pass');
        } else if (match.phase.name === 'restart' && match.phase.restart?.ready
          && match.phase.restart.side === match.world.userSide) {
          match.world.command('pass');
        }
        if (match.phase.name === 'halftime') break;
      }
    });
    await page.waitForSelector('.pause__title', { timeout: 20000 });
    assert.ok((await page.locator('.pause__title').textContent()).includes('INTERVALO'),
      'o intervalo aparece no meio da partida');
    await page.click('.pause .btn--primary');

    // O resultado aparece ao fim do tempo, com o placar e o botão de rejogar.
    const finished = await page.evaluate(async () => {
      const match = window.__xfcMatch;
      for (let index = 0; index < 60000; index += 1) {
        match.world.tick(1 / 60);
        if (match.phase.name === 'kickoff' && match.phase.side === match.world.userSide) {
          match.world.command('pass');
        } else if (match.phase.name === 'restart' && match.phase.restart?.ready
          && match.phase.restart.side === match.world.userSide) {
          match.world.command('pass');
        }
        if (match.phase.name === 'fulltime') break;
      }
      return match.world.snapshot();
    });
    assert.equal(finished.phase, 'fulltime', 'a partida termina');
    assert.ok(finished.display.startsWith('9'), `o relógio marca o fim do tempo: ${finished.display}`);
    const resultShown = await page.waitForSelector('.result__title', { timeout: 6000 }).then(() => true).catch(() => false);
    if (!resultShown) {
      const diagnostic = await page.evaluate(() => ({
        phase: window.__xfcMatch?.phase?.name,
        score: window.__xfcMatch?.world?.snapshot()?.score,
        overlay: document.querySelector('.play__overlay')?.innerText,
        screen: document.querySelector('.screen--play')?.className,
        profile: localStorage.getItem('xfc-profile')
      }));
      throw new Error(`resultado não apareceu: ${JSON.stringify({ diagnostic, errors })}`);
    }
    assert.equal((await page.locator('.result__title').textContent()).trim(), 'FIM DE JOGO');
    assert.ok(await page.locator('.result__crest').count() === 2, 'o resultado mostra os dois escudos');
    assert.ok(await page.locator('.btn:has-text("REJOGAR")').count(), 'o resultado tem REJOGAR');
    assert.ok(await page.locator('.btn:has-text("VOLTAR AO MENU")').count(), 'o resultado tem VOLTAR AO MENU');
    assert.equal(await page.locator('.result__stat').count(), 8, 'a tela de resultado traz as estatísticas da partida');
    assert.equal(await page.locator('.result__reward').count(), 1, 'o apito final mostra as moedas recebidas');
    const profileAfterMatch = await page.evaluate(() => JSON.parse(localStorage.getItem('xfc.profile.v1')));
    assert.ok(profileAfterMatch.coins > coinsBeforeMatch, 'a partida credita moedas para a loja');
    assert.equal(profileAfterMatch.matchesPlayed, 1, 'o perfil registra a partida concluída');
    assert.ok(profileAfterMatch.xp > 3000, 'o resultado também recompensa XP');

    // Enfiada é um passe rasteiro guiado para espaço à frente, nunca um cruzamento.
    const passBehavior = await page.evaluate(() => {
      const match = window.__xfcMatch;
      match.phase.name = 'play';
      match.phase.restart = null;
      const home = match.world.members('home');
      const passer = home.find(player => player.role === 'CM');
      const receiver = home.find(player => player.role === 'ST');
      match.world.setPaused(false);
      for (const player of home) {
        player.active = true;
        player.x = -15;
        player.z = player.role === 'LW' ? 30 : player.role === 'RW' ? -30 : 24;
        player.vx = player.vz = 0;
      }
      passer.x = 0; passer.z = 0;
      receiver.x = 8; receiver.z = 0; receiver.vx = 1.5; receiver.vz = 0;
      for (const defender of match.world.members('away')) {
        if (defender.isKeeper) continue;
        defender.x = 22;
        defender.z = 25;
      }
      match.controlled.home = passer;
      match.ball.attachTo(passer);
      match.world.kickBall(passer, receiver, { power: 17 });
      const guidedPass = Boolean(match.ball.state.guidance?.receiver === receiver)
        && !match.ball.state.guidance?.through;
      match.ball.attachTo(passer);
      const throughCommanded = match.world.command('lob');
      return {
        guidedPass,
        throughCommanded,
        throughPass: Boolean(match.ball.state.guidance?.receiver === receiver)
          && match.ball.state.guidance?.through === true,
        lift: match.ball.state.velocity.y,
        targetX: match.ball.state.guidance?.x,
        receiverX: receiver.x
      };
    });
    assert.ok(passBehavior.guidedPass, 'o passe normal recebe assistência de direção');
    assert.ok(passBehavior.throughCommanded, 'o comando ENFIADA é aceito durante o jogo');
    assert.ok(passBehavior.throughPass, 'ENFIADA aponta para um recebedor no espaço');
    assert.ok(passBehavior.lift < 2, 'a enfiada permanece rasteira, não vira cruzamento');
    assert.ok(passBehavior.targetX > passBehavior.receiverX, 'a enfiada mira à frente do atacante');

    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `a partida não deve gerar erro de console: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});

test('Centro de Treino: câmera Pro, um atacante, goleiro e prática de drible/chute', { timeout: 90000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch');
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu');
    await page.locator('.menu__item[data-menu-item="learn"]').click();
    await page.waitForSelector('.screen--training');
    await page.waitForFunction(() => window.__xfcTrainingMatch?.world.trainingMode === true);

    const setup = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      return {
        homeActive: match.world.members('home').length,
        awayActive: match.world.members('away').length,
        camera: match.world.cameraMode,
        player: match.controlled.home?.role,
        ownsBall: match.ball.state.owner === match.controlled.home,
        keeper: match.world.members('away')[0]?.isKeeper
      };
    });
    assert.deepEqual(setup, {
      homeActive: 1,
      awayActive: 1,
      camera: 'pro',
      player: 'ST',
      ownsBall: true,
      keeper: true
    }, 'o exercício começa com um atacante e o goleiro esperando no gol em câmera Pro');
    assert.ok(await page.locator('.training__stats').isVisible(), 'o treino mostra chutes, gols e defesas');
    assert.ok((await page.locator('.training__instructions').textContent()).includes('CÂMERA PRO'),
      'as instruções identificam a câmera Pro');
    for (const selector of ['.ctrl-btn--dribble', '.ctrl-btn--shoot', '.ctrl-btn--sprint']) {
      assert.ok(await page.locator(selector).isVisible(), `${selector} fica disponível no treino`);
    }
    assert.equal(await page.locator('.ctrl-btn--pass').isVisible(), false,
      'o treino não mostra um passe sem companheiros ativos');

    await page.locator('.ctrl-btn--dribble').click();
    const movement = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      const player = match.controlled.home;
      const startX = player.x;
      match.world.input.moveX = 1;
      match.world.tick(0.05);
      match.world.input.moveX = 0;
      return { burst: player.burst, moved: player.x > startX };
    });
    assert.ok(movement.burst > 0, 'DRIBLE ativa a arrancada');
    assert.equal(movement.moved, true, 'o analógico move o jogador controlável');

    await page.locator('.ctrl-btn--shoot').click();
    const shot = await page.evaluate(() => ({
      count: window.__xfcTrainingMatch.world.trainingStats.shots,
      ballReleased: window.__xfcTrainingMatch.ball.state.owner === null
    }));
    assert.equal(shot.count, 1, 'CHUTE registra uma tentativa');
    assert.equal(shot.ballReleased, true, 'CHUTE solta a bola para o gol');
    await page.locator('.training__reset').click();
    await page.waitForFunction(() => {
      const match = window.__xfcTrainingMatch;
      return match?.ball.state.owner === match?.controlled.home;
    });
    assert.equal((await page.locator('.training__status').textContent()).includes('REINICIADO'), true,
      'o exercício pode ser recomeçado sem sair da tela');
    const outcome = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      match.engine.stop();
      match.world.command('shoot', { strength: 1 });
      for (let index = 0; index < 240; index += 1) match.world.tick(1 / 60);
      const stats = match.world.trainingStats;
      return { goals: stats.goals, saves: stats.saves, misses: stats.misses };
    });
    assert.ok(outcome.goals + outcome.saves + outcome.misses > 0,
      'o chute conclui o exercício com gol, defesa do goleiro ou tentativa para fora');

    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `o Centro de Treino não deve gerar erro: ${realErrors.join(' | ')}`);
    await page.locator('.training__exit').click();
    await page.waitForSelector('.screen--menu');
  } finally {
    await browser.close();
    server.close();
  }
});
