import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, normalize, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TEAMS, FORMATION_433, getTeam, starSlots } from '../xfc-game/src/data/teams.js';
import { kitsOf, defaultKit, kitSvg } from '../xfc-game/src/data/kits.js';
import { attackSign, defendSign, ownGoalX, attackedGoalX, insidePenaltyAreaFor, insideGoalAreaFor } from '../xfc-game/src/match3d/sides.js';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

// O XFC é um subprojeto isolado dentro do repositório: o jogo vive em xfc-game/
// e não toca no código do app de VR. Estes testes cobrem os dados (sem browser)
// e o fluxo das telas (com o Chromium empacotado do projeto).

const GAME_ROOT = new URL('../xfc-game/', import.meta.url);

test('XFC tem dezoito clubes, com onze em campo e sete reservas em cada um', () => {
  assert.equal(TEAMS.length, 18, 'o jogo oferece dezoito clubes');
  assert.deepEqual(TEAMS.map(team => team.id), [
    'fc-barcelona', 'real-madrid', 'ibis-esporte', 'parana-clube',
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

    // Menu: lista de modos com KICK OFF liberado e os demais marcados como futuros.
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    const navLabels = await page.locator('.menu__item').allTextContents();
    assert.ok(navLabels.some(label => label.includes('KICK OFF')), 'o menu tem KICK OFF');
    assert.ok(navLabels.some(label => label.includes('ULTIMATE TEAM')), 'o menu tem os demais modos');
    assert.equal(await page.locator('.menu__item--available').count(), 2,
      'KICK OFF e PARTIDAS RÁPIDAS estão liberados nesta etapa');
    assert.equal(await page.locator('.menu__item--dim').count(), navLabels.length - 2,
      'os demais modos seguem como futuros');
    assert.ok(await page.locator('.menu__wordmark svg').isVisible(), 'o menu mostra a marca XFC');
    assert.ok((await page.locator('.menu__xp-text').textContent()).includes('3K/3K'), 'a barra de XP mostra 3K/3K');

    // Kick Off: os dois times disponíveis, com escudo, estrelas e ATT/MID/DEF.
    await page.click('.menu__cta');
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
    assert.ok((await homeName()).includes('Aston Villa'), 'os clubes do pacote também entram no carousel');
    await page.click(prevClub);
    assert.ok((await homeName()).includes('Paraná Clube'), 'a seta anterior volta um clube');
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

    // O confronto leva para a tela de preparação da partida.
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--kickoff');
    await page.click('.screen--kickoff .stadium-cta');
    await page.waitForSelector('.screen--match');
    assert.ok((await page.locator('.match__teams').textContent()).includes('FC Barcelona'), 'o confronto mostra o Barcelona');

    // Preparar a partida leva ao jogo 3D de verdade — com o HUD de transmissão,
    // o analógico fixo e o cartão do jogador controlado.
    await page.click('.stadium-cta');
    await page.waitForSelector('.screen--play', { timeout: 15000 });
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
    assert.ok(await page.locator('.hud__foe').isVisible(),
      'o adversário mais próximo aparece no canto inferior direito');
    assert.ok(await page.locator('.hud__poss').isVisible(),
      'o HUD mostra a barra de posse de bola');
    assert.equal(await page.locator('.hud__poss-fill').count(), 1,
      'a barra de posse tem o preenchimento do mandante');
    assert.equal(await page.locator('.hud__tag.is-visible').count(), 1,
      'a etiqueta do nome aparece sobre o atleta controlado');

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
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
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

    // O menu ganha o modo PARTIDAS RÁPIDAS (o jogo de futebol 3D).
    const quickItem = page.locator('.menu__item', { hasText: /RÁPIDAS/i }).first();
    assert.ok(await quickItem.count(), 'o menu lista PARTIDAS RÁPIDAS');
    await quickItem.click();
    await page.waitForSelector('.screen--quick', { timeout: 15000 });
    assert.equal(await page.locator('.quick__panel').count(), 2, 'a tela tem HOME e AWAY');
    assert.equal(await page.locator('.quick__panel--home .quick__crest').count(), 1, 'o mandante mostra o escudo');
    assert.ok(await page.locator('.quick__kit').count() >= 6, 'cada lado oferece as blusas do clube');
    assert.ok(await page.locator('.stadium-cta').count(), 'a tela oferece o estádio como botão de entrar');

    // Duração e dificuldade são ajustáveis antes de começar.
    await page.locator('.quick__option', { hasText: 'CURTA' }).first().click();
    await page.locator('.quick__option', { hasText: 'FÁCIL' }).first().click();

    await page.click('.quick__actions .stadium-cta');
    await page.waitForSelector('.screen--play', { timeout: 15000 });

    // Pré-jogo imersivo: o estádio toma a tela, com o confronto no centro.
    assert.ok(await page.locator('.showcase__chip').isVisible(), 'o pré-jogo abre com o selo da liga');
    assert.equal(await page.locator('.showcase__matchup img').count(), 2, 'o pré-jogo mostra os dois escudos');
    assert.ok(await page.locator('.showcase__enter').isVisible(), 'o pré-jogo convida a entrar em campo');
    assert.equal(await page.locator('.showcase__arrow').count(), 2, 'as setas trocam o estádio');
    await page.click('.showcase__enter');

    // Partida: HUD, radar e controles na tela.
    await page.waitForSelector('.hud.is-visible', { timeout: 15000 });
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
      match.ball.attachTo(shooter);
      match.world.command('shoot', { strength: 1, placed: false });
      return match.ball.state.lastShotKind;
    });
    assert.equal(shotKind, 'power', 'o tiro carregado sai como chute forte');

    // A defesa mergulhada do goleiro não pode derrubar a simulação.
    await page.evaluate(() => {
      const match = window.__xfcMatch;
      const keeper = match.world.members('away').find(player => player.isKeeper);
      match.world.diveKeeper(keeper, 1);
      for (let index = 0; index < 90; index += 1) match.world.tick(1 / 60);
    });

    // O jogo pausa no intervalo: o jogador volta com o botão do segundo tempo.
    await page.evaluate(async () => {
      const match = window.__xfcMatch;
      for (let index = 0; index < 60000; index += 1) {
        match.world.tick(1 / 60);
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
        if (match.phase.name === 'fulltime') break;
      }
      return match.world.snapshot();
    });
    assert.equal(finished.phase, 'fulltime', 'a partida termina');
    assert.ok(finished.display.startsWith('9'), `o relógio marca o fim do tempo: ${finished.display}`);
    await page.waitForSelector('.result__title', { timeout: 20000 });
    assert.equal((await page.locator('.result__title').textContent()).trim(), 'FIM DE JOGO');
    assert.ok(await page.locator('.result__crest').count() === 2, 'o resultado mostra os dois escudos');
    assert.ok(await page.locator('.btn:has-text("REJOGAR")').count(), 'o resultado tem REJOGAR');
    assert.ok(await page.locator('.btn:has-text("VOLTAR AO MENU")').count(), 'o resultado tem VOLTAR AO MENU');
    assert.equal(await page.locator('.result__stat').count(), 8, 'a tela de resultado traz as estatísticas da partida');

    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `a partida não deve gerar erro de console: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});
