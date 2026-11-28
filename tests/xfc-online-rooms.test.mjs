import test from 'node:test';
import assert from 'node:assert/strict';
import { WebSocket } from 'ws';
import { startXfcServer } from '../xfc-game/serve.mjs';
import { resolveOnlineServerUrl, isFiveDigitRoomCode } from '../xfc-game/src/data/online-rooms.js';
import { launchOrSkip } from './support/chromium.mjs';

class RelayClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.messages = [];
    this.waiters = [];
    this.opened = new Promise((resolve, reject) => {
      this.socket.once('open', resolve);
      this.socket.once('error', reject);
    });
    this.socket.on('message', raw => {
      const message = JSON.parse(raw.toString());
      const index = this.waiters.findIndex(waiter => waiter.predicate(message));
      if (index >= 0) this.waiters.splice(index, 1)[0].resolve(message);
      else this.messages.push(message);
    });
  }

  async next(type, timeout = 3000) {
    const existing = this.messages.findIndex(message => message.type === type);
    if (existing >= 0) return this.messages.splice(existing, 1)[0];
    return new Promise((resolve, reject) => {
      const waiter = { predicate: message => message.type === type, resolve, reject };
      this.waiters.push(waiter);
      const timer = setTimeout(() => {
        this.waiters = this.waiters.filter(item => item !== waiter);
        reject(new Error(`Timed out waiting for ${type}`));
      }, timeout);
      timer.unref?.();
    });
  }

  send(message) { this.socket.send(JSON.stringify(message)); }
  async close() {
    if (this.socket.readyState === WebSocket.CLOSED) return;
    await new Promise(resolve => {
      this.socket.once('close', resolve);
      this.socket.close();
    });
  }
}

test('room relay connects two players and forwards authoritative PvP traffic', async t => {
  const { server, url } = await startXfcServer({ port: 0, host: '127.0.0.1' });
  const wsUrl = resolveOnlineServerUrl('', new URL(url));
  assert.match(wsUrl, /^ws:\/\/127\.0\.0\.1:\d+\/ws$/);
  const host = new RelayClient(wsUrl);
  const guest = new RelayClient(wsUrl);
  t.after(async () => {
    await Promise.all([host.close(), guest.close()]);
    await new Promise(resolve => server.close(resolve));
  });
  await Promise.all([host.opened, guest.opened]);

  host.send({ type: 'create-room' });
  const created = await host.next('room-created');
  assert.equal(isFiveDigitRoomCode(created.code), true);

  guest.send({ type: 'join-room', code: created.code });
  assert.deepEqual(await guest.next('joined'), { type: 'joined', code: created.code, role: 'guest' });
  await host.next('peer-joined');

  host.send({ type: 'start-match', config: {
    home: 'fc-barcelona', away: 'real-madrid', homeKit: 1, awayKit: 0,
    minutes: 3, difficulty: 'normal', stadium: 2, seed: 17001
  } });
  const accepted = await host.next('start-accepted');
  const started = await guest.next('match-start');
  assert.deepEqual(started.config, accepted.config);
  assert.equal(started.config.seed, 17001);

  guest.send({ type: 'input', seq: 8, input: { moveX: 2, moveZ: -0.4, sprint: true, shotCharge: 1.5 } });
  const input = await host.next('remote-input');
  assert.deepEqual(input, {
    type: 'remote-input', seq: 8,
    input: { moveX: 1, moveZ: -0.4, sprint: true, shotCharge: 1 }
  });

  guest.send({ type: 'action', seq: 9, name: 'pass', payload: { strength: 0.7 } });
  assert.deepEqual(await host.next('remote-action'), {
    type: 'remote-action', seq: 9, name: 'pass', payload: { strength: 0.7 }
  });

  host.send({ type: 'state', state: { version: 1, game: { score: [1, 0] }, players: [], ball: {} } });
  assert.deepEqual(await guest.next('state'), {
    type: 'state', state: { version: 1, game: { score: [1, 0] }, players: [], ball: {} }
  });
  host.send({ type: 'event', event: { type: 'goal', score: [1, 0] } });
  assert.deepEqual(await guest.next('event'), { type: 'event', event: { type: 'goal', score: [1, 0] } });
});

test('relay refuses an Origin outside its same-origin policy', async t => {
  const { server, url } = await startXfcServer({ port: 0, host: '127.0.0.1' });
  const wsUrl = resolveOnlineServerUrl('', new URL(url));
  const client = new WebSocket(wsUrl, { origin: 'https://evil.example' });
  client.on('error', () => {});
  t.after(() => new Promise(resolve => server.close(resolve)));
  const [code] = await new Promise(resolve => client.once('unexpected-response', (_request, response) => {
    response.resume();
    resolve([response.statusCode]);
  }));
  assert.equal(code, 403);
});

test('two browser clients play the same live PvP match through the relay', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0, host: '127.0.0.1' });
  const browser = await launchOrSkip(t);
  if (!browser) { await new Promise(resolve => server.close(resolve)); return; }
  const errors = [];
  const openPvp = async page => {
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => {
      localStorage.setItem('xfc.profile.v1', JSON.stringify({ graphicsQuality: 'low' }));
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch');
    await page.locator('.launch__enter').click();
    await page.waitForSelector('.screen--menu');
    await page.locator('[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes');
    await page.locator('.modes__option[data-option="pvp"]').click();
    await page.waitForSelector('.screen--pvp');
    await page.locator('.pvp__option[data-option="custom-room"]').click();
  };
  const host = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const guest = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  try {
    await Promise.all([openPvp(host), openPvp(guest)]);
    await host.getByRole('button', { name: 'Criar sala online', exact: true }).click();
    await host.waitForFunction(() => /^\d{5}$/.test(document.querySelector('.xfc27-room-code')?.textContent || ''), null, { timeout: 10000 });
    const code = await host.locator('.xfc27-room-code').textContent();
    await guest.getByLabel('Código da sala · 5 dígitos').fill(code);
    await guest.getByRole('button', { name: 'Entrar na sala', exact: true }).click();
    await host.waitForFunction(() => document.querySelector('.xfc27-dialog__status')?.textContent.includes('O outro jogador entrou'), null, { timeout: 10000 });
    await host.getByRole('button', { name: 'Iniciar partida', exact: true }).click();

    await Promise.all([
      host.waitForSelector('.screen--play'),
      guest.waitForSelector('.screen--play'),
      host.waitForFunction(() => window.__xfcMatch?.teams?.home?.players?.length === 11, null, { timeout: 60000 }),
      guest.waitForFunction(() => window.__xfcMatch?.teams?.away?.players?.length === 11, null, { timeout: 60000 })
    ]);
    await host.waitForSelector('.showcase__enter', { timeout: 60000 });
    await guest.waitForFunction(() => window.__xfcMatch?.engine?.running === true, null, { timeout: 60000 });
    await host.locator('.showcase__enter').click();
    await host.waitForSelector('.hud.is-visible', { timeout: 60000 });
    await host.waitForFunction(() => window.__xfcMatch.phase.name === 'kickoff', null, { timeout: 15000 });
    assert.equal(await host.evaluate(() => window.__xfcMatch.world.command('pass')), true, 'o anfitrião inicia a saída');

    const before = await host.evaluate(() => {
      const match = window.__xfcMatch;
      const player = match.controlled.away;
      return { id: player.id, x: player.x, z: player.z };
    });
    await guest.keyboard.down('KeyW');
    await guest.waitForTimeout(750);
    await guest.keyboard.up('KeyW');
    await host.waitForFunction(({ id, x, z }) => {
      const player = window.__xfcMatch.teams.away.players.find(item => item.id === id);
      return player && Math.hypot(player.x - x, player.z - z) > 0.6;
    }, before, { timeout: 6000 });
    const hostPosition = await host.evaluate(id => {
      const player = window.__xfcMatch.teams.away.players.find(item => item.id === id);
      return { x: player.x, z: player.z };
    }, before.id);
    const guestPosition = await guest.evaluate(id => {
      const player = window.__xfcMatch.teams.away.players.find(item => item.id === id);
      return { x: player.x, z: player.z };
    }, before.id);
    assert.ok(Math.hypot(hostPosition.x - guestPosition.x, hostPosition.z - guestPosition.z) < 2,
      'the host simulation snapshot is visible on the guest device');
    assert.deepEqual(errors, []);
  } finally {
    await Promise.all([host.close(), guest.close(), browser.close()]);
    await new Promise(resolve => server.close(resolve));
  }
});
