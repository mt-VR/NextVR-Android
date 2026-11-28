import test from 'node:test';
import assert from 'node:assert/strict';
import { WebSocket } from 'ws';
import { startXfcServer } from '../xfc-game/serve.mjs';
import { resolveOnlineServerUrl, isValidRoomPassword } from '../xfc-game/src/data/online-rooms.js';
import { launchOrSkip } from './support/chromium.mjs';

class RelayClient {
  constructor(url, options = {}) {
    this.socket = new WebSocket(url, options);
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

  const password = 'XFC-primo-online-2026';
  host.send({ type: 'create-room', password });
  const created = await host.next('room-created');
  assert.deepEqual(created, { type: 'room-created' }, 'the relay never returns the password or a room code');

  guest.send({ type: 'join-room', password });
  assert.deepEqual(await guest.next('joined'), { type: 'joined', role: 'guest' });
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

test('room passwords are validated, hashed as room keys and required to join', async t => {
  assert.equal(isValidRoomPassword('1234567'), false);
  assert.equal(isValidRoomPassword('  XFC-primo-2026  '), true);
  assert.equal(isValidRoomPassword(''), false);
  assert.equal(isValidRoomPassword('x'.repeat(65)), false);

  const { server, url } = await startXfcServer({ port: 0, host: '127.0.0.1' });
  const wsUrl = resolveOnlineServerUrl('', new URL(url));
  const host = new RelayClient(wsUrl);
  const duplicate = new RelayClient(wsUrl);
  const guest = new RelayClient(wsUrl);
  t.after(async () => {
    await Promise.all([host.close(), duplicate.close(), guest.close()]);
    await new Promise(resolve => server.close(resolve));
  });
  await Promise.all([host.opened, duplicate.opened, guest.opened]);

  const password = 'XFC-primo-2026';
  host.send({ type: 'create-room', password: 'short' });
  assert.equal((await host.next('error')).code, 'invalid-password');
  host.send({ type: 'create-room', password });
  assert.deepEqual(await host.next('room-created'), { type: 'room-created' });
  duplicate.send({ type: 'create-room', password });
  assert.equal((await duplicate.next('error')).code, 'room-exists');
  guest.send({ type: 'join-room', password: 'senha-errada' });
  assert.equal((await guest.next('error')).code, 'room-not-found');
  guest.send({ type: 'join-room', password });
  assert.deepEqual(await guest.next('joined'), { type: 'joined', role: 'guest' });
  await host.next('peer-joined');
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

test('same-origin WebSocket works behind a reverse proxy using X-Forwarded-Host', async t => {
  const { server, url } = await startXfcServer({ port: 0, host: '127.0.0.1' });
  const wsUrl = resolveOnlineServerUrl('', new URL(url));
  const client = new RelayClient(wsUrl, {
    origin: 'https://xfc-public.example',
    headers: { 'x-forwarded-host': 'xfc-public.example' }
  });
  t.after(async () => {
    await client.close();
    await new Promise(resolve => server.close(resolve));
  });
  await client.opened;
  client.send({ type: 'create-room', password: 'XFC-primo-2026' });
  assert.deepEqual(await client.next('room-created'), { type: 'room-created' });
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
    const password = 'XFC-primo-online-2026';
    await host.getByLabel('Senha da sala (8 a 64 caracteres)').fill(password);
    await host.getByRole('button', { name: 'Criar sala com senha', exact: true }).click();
    await host.waitForFunction(() => document.querySelector('.xfc27-room-status')?.textContent === 'Sala protegida', null, { timeout: 10000 });
    await guest.getByLabel('Senha da sala (8 a 64 caracteres)').fill(password);
    await guest.getByRole('button', { name: 'Entrar com senha', exact: true }).click();
    await host.waitForFunction(() => document.querySelector('.xfc27-dialog__status')?.textContent.includes('Seu amigo entrou'), null, { timeout: 10000 });
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
