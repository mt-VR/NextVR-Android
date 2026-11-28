import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { COMPETITIONS, createTournament } from '../xfc-game/src/data/tournament.js';
import { createFiveDigitRoomCode, isFiveDigitRoomCode } from '../xfc-game/src/data/online-rooms.js';
import { startXfcServer } from '../xfc-game/serve.mjs';
import { launchOrSkip } from './support/chromium.mjs';

const REFERENCE_FILES = ['home', 'modes', 'pvp', 'competitions'];

test('XFC 27 menu references are packaged at native dimensions', async () => {
  for (const name of REFERENCE_FILES) {
    const image = await readFile(`xfc-game/assets/menus/xfc27/${name}.png`);
    assert.equal(image.readUInt32BE(0), 0x89504e47, `${name} is a PNG`);
    assert.equal(image.readUInt32BE(16), 1672, `${name} keeps the supplied width`);
    assert.equal(image.readUInt32BE(20), 941, `${name} keeps the supplied height`);
  }
});

test('room-code helper only creates and accepts exactly five decimal digits', () => {
  assert.equal(isFiveDigitRoomCode('01234'), true);
  for (const invalid of ['', '1234', '123456', '12a45', 12345]) assert.equal(isFiveDigitRoomCode(invalid), false);
  assert.equal(createFiveDigitRoomCode(() => 0), '10000');
  assert.equal(createFiveDigitRoomCode(() => .5), '55000');
  assert.equal(createFiveDigitRoomCode(() => 1), '99999');
});

test('featured Europa League and Sudamericana tournaments have runnable local draws', () => {
  assert.ok(COMPETITIONS.some(item => item.id === 'uefa-europa-league'));
  assert.ok(COMPETITIONS.some(item => item.id === 'conmebol-sudamericana'));
  for (const id of ['uefa-europa-league', 'conmebol-sudamericana']) {
    const tournament = createTournament(id, { random: () => .37 });
    assert.ok(tournament.fixtures.length > 0, `${id} has fixtures`);
    assert.ok(tournament.groups.A.includes(tournament.userTeamId), `${id} puts the selected team in group A`);
    assert.ok(Object.values(tournament.groups).every(group => group.length >= 3), `${id} groups are playable`);
  }
});

test('home, modes, PvP, competitions references and career exception route correctly', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch');
    await page.locator('.launch__enter').click();
    await page.waitForSelector('.screen--menu');
    assert.equal(await page.locator('.ref-art').getAttribute('src'), 'assets/menus/xfc27/home.png');
    assert.equal(await page.locator('.screen--menu').getAttribute('data-coins'), '1250');

    await page.locator('[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes');
    assert.equal(await page.locator('.ref-art').getAttribute('src'), 'assets/menus/xfc27/modes.png');
    assert.equal(await page.locator('.screen--modes .xfc27-footer-action').count(), 2,
      'Selecionar e Voltar são áreas separadas no rodapé da referência');
    assert.deepEqual(await page.locator('.modes__option').evaluateAll(items => items.map(item => item.dataset.option)),
      ['pvp', 'missions', 'women', 'challenge']);
    await page.locator('.modes__option[data-option="pvp"]').click();
    await page.waitForSelector('.screen--pvp');
    assert.equal(await page.locator('.ref-art').getAttribute('src'), 'assets/menus/xfc27/pvp.png');
    assert.equal(await page.locator('.screen--pvp .xfc27-footer-action').count(), 2);
    await page.locator('.pvp__option[data-option="custom-room"]').click();
    const input = page.getByLabel('Código da sala · 5 dígitos');
    await input.fill('12a34');
    assert.equal(await input.inputValue(), '1234', 'non-digit characters are rejected at input');
    await input.fill('1234');
    await page.getByRole('button', { name: 'Entrar na sala', exact: true }).click();
    assert.match(await page.locator('.xfc27-dialog__status').textContent(), /exatamente cinco números/);
    await page.getByRole('button', { name: 'Criar sala online', exact: true }).click();
    await page.waitForFunction(() => /^\d{5}$/.test(document.querySelector('.xfc27-room-code')?.textContent || ''), null, { timeout: 10000 });
    assert.match(await page.locator('.xfc27-dialog__status').textContent(), /criada no servidor/);
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--modes');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    await page.locator('[data-menu-item="events"]').click();
    await page.waitForSelector('.screen--competitions');
    assert.equal(await page.locator('.ref-art').getAttribute('src'), 'assets/menus/xfc27/competitions.png');
    assert.equal(await page.locator('.competitions__option').count(), 6);
    assert.equal(await page.locator('.screen--competitions .xfc27-footer-action').count(), 2);
    await page.locator('.competitions__option[data-competition="uefa-europa-league"]').click();
    await page.waitForSelector('.screen--competition[data-competition="uefa-europa-league"]');
    assert.equal(await page.locator('.comp__art').count(), 1);
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--competitions');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    // A entrada de carreira continua usando sua própria tela, não a referência de menu.
    await page.locator('[data-menu-item="career"]').click();
    await page.waitForSelector('.screen--career');
    assert.equal(await page.locator('.ref-art[src="assets/menus/xfc27/home.png"]').count(), 0);
    assert.equal(await page.locator('.career-reference-art').count(), 1);
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
    server.close();
  }
});
