import test from 'node:test';
import assert from 'node:assert/strict';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

const boot = async p => {
  await p.evaluate(async () => {
    const m = await import('/src/main.js');
    const d = await import('/src/data/career.js');
    m.state.profile.graphicsQuality = 'low';
    m.state.profile.career = d.createCareer({clubId: 'santos', name: 'Atleta Teste', number: 9});
    m.state.profile.career.player.points = 3;
  });
};
const go = (p, view) => p.evaluate(async v => (await import('/src/main.js')).go('career', {view: v}), view);

test('escritório: arte do usuário inteira, sem esticar, com os atalhos nas posições da imagem', {timeout: 90000}, async t => {
  const {server, url} = await startXfcServer({port: 0});
  const b = await launchOrSkip(t);
  if (!b) { server.close(); return; }
  try {
    const p = await b.newPage({viewport: {width: 1280, height: 720}}), errors = [];
    p.on('pageerror', e => errors.push(e.message));
    await p.goto(url); await boot(p); await go(p, 'office');
    await p.waitForSelector('.career-reference-art');
    assert.match(await p.locator('.career-reference-art').getAttribute('src'), /assets\/ui\/season\/office\.png$/);
    const art = await p.locator('.career-reference-art').evaluate(img => {
      const r = img.getBoundingClientRect();
      return {left: r.left, top: r.top, right: r.right, bottom: r.bottom, fit: getComputedStyle(img).objectFit};
    });
    assert.equal(art.fit, 'fill');
    assert.ok(Math.abs(art.left) < 1 && Math.abs(art.top) < 1);
    assert.ok(Math.abs(art.right - 1280) < 1 && Math.abs(art.bottom - 720) < 1, 'a arte cobre a tela toda');
    // O cartão de clube da arte recebe o clube do save; nenhum elemento novo cobre a imagem.
    assert.match(await p.locator('.career-reference-office-profile').innerText(), /Santos/);
    for (const [label, target] of [['Negociação', 'transfers'], ['Calendário', 'agenda'], ['Finanças', 'stats'], ['Objetivos', 'objectives']]) {
      assert.equal(await p.getByRole('button', {name: label, exact: true}).count(), 1, `atalho ${label}`);
      await p.getByRole('button', {name: label, exact: true}).click();
      await p.waitForTimeout(150);
      assert.equal(await p.evaluate(async () => (await import('/src/main.js')).state.route?.view ?? null), null, 'rota existe');
      await go(p, 'office');
      await p.waitForTimeout(120);
    }
    await p.getByRole('button', {name: 'Negociação', exact: true}).click();
    await p.waitForSelector('.career-market');
    await go(p, 'office');
    await p.getByRole('button', {name: 'Voltar', exact: true}).click();
    assert.deepEqual(errors, []);
  } finally { await b.close(); server.close(); }
});

test('evoluir jogador: OVR e atributos vêm do save e o + gasta um ponto de verdade', {timeout: 90000}, async t => {
  const {server, url} = await startXfcServer({port: 0});
  const b = await launchOrSkip(t);
  if (!b) { server.close(); return; }
  try {
    const p = await b.newPage({viewport: {width: 1280, height: 720}}), errors = [];
    p.on('pageerror', e => errors.push(e.message));
    await p.goto(url); await boot(p); await go(p, 'evolve');
    await p.waitForSelector('.career-reference-art');
    assert.match(await p.locator('.career-reference-art').getAttribute('src'), /assets\/ui\/season\/evolve\.png$/);
    const shown = await p.evaluate(() => ({
      ovr: document.querySelector('.career-reference-evolve-ovr')?.textContent,
      points: document.querySelector('.career-reference-evolve-points')?.textContent,
      stats: [...document.querySelectorAll('.career-reference-evolve-stats')].map(n => n.textContent)
    }));
    const saved = await p.evaluate(async () => {
      const c = (await import('/src/main.js')).state.profile.career;
      return {ovr: Math.round(Object.values(c.player.stats).reduce((a, b) => a + b, 0) / 6), points: c.player.points, pace: c.player.stats.pace};
    });
    assert.equal(shown.ovr, String(saved.ovr), 'OVR do save na arte');
    assert.equal(shown.points, String(saved.points), 'pontos disponíveis do save');
    assert.equal(shown.stats[0], String(saved.pace), 'Ritmo do save na linha da arte');
    // Todos os seis + habilitados com 3 pontos e nenhum atributo no limite.
    assert.equal(await p.locator('.career-reference-evolve-up:not(:disabled)').count(), 6);
    await p.locator('.career-reference-evolve-up').first().click();
    await p.waitForTimeout(300);
    const after = await p.evaluate(async () => {
      const c = (await import('/src/main.js')).state.profile.career;
      return {points: c.player.points, pace: c.player.stats.pace};
    });
    assert.equal(after.points, saved.points - 1, 'o + custa um ponto');
    assert.equal(after.pace, saved.pace + 1, 'o atributo sobe 1');
    assert.equal(await p.evaluate(() => document.querySelector('.career-reference-evolve-points')?.textContent), String(after.points));
    // Salvar de verdade: a tela grava no perfil.
    assert.ok(await p.evaluate(() => !!localStorage.getItem('xfc.profile.v1')));
    assert.deepEqual(errors, []);
  } finally { await b.close(); server.close(); }
});

test('transferências: oito clubes, três ofertas e negociação 50% ligada ao save', {timeout: 90000}, async t => {
  const {server, url} = await startXfcServer({port: 0});
  const b = await launchOrSkip(t);
  if (!b) { server.close(); return; }
  try {
    const p = await b.newPage({viewport: {width: 1280, height: 720}}), errors = [];
    p.on('pageerror', e => errors.push(e.message));
    await p.goto(url); await boot(p); await go(p, 'transfers');
    await p.waitForSelector('.career-market');
    assert.equal(await p.locator('.career-market__club').count(), 8, 'oito clubes da Europa');
    assert.equal(await p.locator('.career-market__offer').count(), 3, 'três ofertas recebidas');
    // Negociação: força o sorteio dentro da página e confere o save.
    const result = await p.evaluate(async () => {
      const m = await import('/src/main.js');
      const {EUROPEAN_CLUBS, negotiateCareerClub} = await import('/src/data/career-market.js');
      const career = m.state.profile.career;
      const refused = negotiateCareerClub(career, 'liverpool', () => 0.9);
      const accepted = negotiateCareerClub(career, 'liverpool', () => 0.1);
      return {club: career.clubId, refused: refused.reason, accepted: accepted.ok, list: EUROPEAN_CLUBS.length};
    });
    assert.equal(result.refused, 'refused');
    assert.equal(result.accepted, true);
    assert.equal(result.club, 'liverpool', 'aceite muda o clube do save');
    assert.equal(result.list, 8);
    assert.deepEqual(errors, []);
  } finally { await b.close(); server.close(); }
});
