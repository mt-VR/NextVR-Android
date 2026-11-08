import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { TEAMS, FORMATION_433, getTeam, starSlots } from '../xfc-game/src/data/teams.js';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

// O XFC é um subprojeto isolado dentro do repositório: o jogo vive em xfc-game/
// e não toca no código do app de VR. Estes testes cobrem os dados (sem browser)
// e o fluxo das telas (com o Chromium empacotado do projeto).

const GAME_ROOT = new URL('../xfc-game/', import.meta.url);

test('XFC tem apenas Barcelona e Real Madrid, com onze em campo e sete reservas', () => {
  assert.deepEqual(TEAMS.map(team => team.id), ['fc-barcelona', 'real-madrid']);
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

test('todo jogador tem retrato disponível no pacote de assets', () => {
  const missing = [];
  for (const team of TEAMS) {
    for (const player of [...team.players, ...team.substitutes]) {
      if (!existsSync(new URL(player.photo, GAME_ROOT))) missing.push(player.photo);
    }
  }
  assert.deepEqual(missing, [], `retratos ausentes: ${missing.join(', ')}`);
});

test('as estrelas do cartão de time vão de zero a cinco', () => {
  assert.deepEqual(starSlots(5), ['full', 'full', 'full', 'full', 'full']);
  assert.deepEqual(starSlots(4.5), ['full', 'full', 'full', 'full', 'half']);
  assert.deepEqual(starSlots(3.2), ['full', 'full', 'full', 'empty', 'empty']);
  assert.equal(getTeam('nao-existe'), null);
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
      if (message.type() === 'error') errors.push(message.text());
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

    // Menu: lista de modos com KICK OFF liberado e os demais marcados como futuros.
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    const navLabels = await page.locator('.menu__item').allTextContents();
    assert.ok(navLabels.some(label => label.includes('KICK OFF')), 'o menu tem KICK OFF');
    assert.ok(navLabels.some(label => label.includes('ULTIMATE TEAM')), 'o menu tem os demais modos');
    assert.equal(await page.locator('.menu__item--dim').count(), navLabels.length - 1,
      'apenas o KICK OFF está liberado nesta etapa');
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
    await page.click('.btn:has-text("Iniciar partida")');
    await page.waitForSelector('.screen--match');
    assert.ok((await page.locator('.match__teams').textContent()).includes('FC Barcelona'), 'o confronto mostra o Barcelona');

    // O favicon não é servido pelo servidor do jogo: o ruído dele não interessa.
    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `a tela não deve gerar erro de console: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});
