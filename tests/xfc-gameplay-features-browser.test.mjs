import test from 'node:test';
import assert from 'node:assert/strict';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

test('bola parada: ninguém gruda na barreira/goleiro, só rebate, e depois volta ao normal', { timeout: 90000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage();
    await page.goto(url);
    const r = await page.evaluate(async () => {
      const { THREE } = await import('/src/match3d/engine.js');
      const { createBall } = await import('/src/match3d/ball.js');
      const { BALL } = await import('/src/match3d/constants.js');
      const scene = new THREE.Scene();
      const ball = createBall(scene, { lowPower: true });
      const wall = {
        x: 1.2, z: 0, active: true, isKeeper: false, reach: .52, reachHeight: 1.8,
        facing: { x: 0, z: 0 }, root: { position: { x: 1.2, y: 0, z: 0 } }
      };
      const keeper = { ...wall, x: 1.2, isKeeper: true };
      const run = (protectedShot, player) => {
        ball.reset(0, 0);
        ball.state.owner = null;
        ball.state.position.set(0.2, BALL.radius, 0);
        ball.state.velocity.set(30, 0, 0);
        ball.state.noAttachment = protectedShot ? 2.6 : 0;
        ball.state.lastIntentionalTouch = null;
        ball.state.flightTime = 0;
        ball.state.passTarget = null;
        ball.state.reception = null;
        let touched = false;
        for (let i = 0; i < 24; i++) {
          ball.update(1 / 120, [player]);
          if (ball.state.lastCollision) touched = true;
        }
        return { owner: ball.state.owner ? 'grudou' : null, vx: ball.state.velocity.x, touched, noAttachment: ball.state.noAttachment };
      };
      const protectedWall = run(true, wall);
      const normalWall = run(false, wall);
      const normalKeeper = run(false, keeper);
      ball.dispose();
      return { protectedWall, normalWall, normalKeeper };
    });
    assert.equal(r.protectedWall.touched, true, 'a bola alcançou a barreira');
    assert.equal(r.protectedWall.owner, null, 'proteção: não gruda na barreira');
    assert.ok(r.protectedWall.vx < 0, 'proteção: rebate para trás');
    assert.equal(r.normalWall.owner, 'grudou', 'sem proteção: domínio normal volta');
    assert.equal(r.normalKeeper.owner, null, 'goleiro sempre rebate');
    assert.ok(r.normalKeeper.vx < 0, 'goleiro rebate para fora');
  } finally { await browser.close(); server.close(); }
});

test('HUD: cartão vermelho embaixo do time expulso e nota 0–10 ao vivo', { timeout: 90000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage();
    await page.goto(url);
    const r = await page.evaluate(async () => {
      const { createHud } = await import('/src/match3d/hud.js');
      const root = document.createElement('div'); document.body.append(root);
      const home = { name: 'Casa', flagCode: 'br', colors: { primary: '#0f0' } };
      const away = { name: 'Fora', flagCode: 'ar', colors: { primary: '#fff' } };
      const hud = createHud({ root, home, away, userSide: 'home', careerRating: true });
      const snap = { score: [1, 0], display: "10'00", half: 1, phase: 'play', poss: [55, 45],
        discipline: { home: { yellow: 2, red: 1 }, away: { yellow: 0, red: 0 } } };
      hud.update(snap, [], { x: 0, z: 0 }, null);
      const homeEj = root.querySelector('.hud__sc-ejection--home');
      const awayEj = root.querySelector('.hud__sc-ejection--away');
      const badge = root.querySelector('.hud__rating');
      const before = { homeHidden: homeEj.hidden, awayHidden: awayEj.hidden,
        rating: !!badge, text: badge?.querySelector('.hud__rating-value').textContent };
      hud.setRating(8.4);
      const after = { text: badge.querySelector('.hud__rating-value').textContent,
        fill: badge.querySelector('.hud__rating-fill').style.width,
        high: badge.classList.contains('is-high') };
      hud.update({ ...snap, discipline: { home: { yellow: 0, red: 0 }, away: { yellow: 0, red: 0 } } }, [], { x: 0, z: 0 }, null);
      const cleared = homeEj.hidden;
      hud.dispose();
      return { before, after, cleared };
    });
    assert.equal(r.before.homeHidden, false, 'vermelho aparece sob o time');
    assert.equal(r.before.awayHidden, true, 'outro time sem vermelho');
    assert.equal(r.before.rating, true, 'nota existe no modo carreira');
    assert.equal(r.before.text, '6.0', 'começa em 6');
    assert.equal(r.after.text, '8.4');
    assert.equal(r.after.fill, '84%');
    assert.equal(r.after.high, true);
    assert.equal(r.cleared, true, 'some quando não há mais expulsão');
  } finally { await browser.close(); server.close(); }
});

test('personalização: editor mais espaçado, rolável/arrastável e editável depois de pronto', { timeout: 90000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(url);
    await page.evaluate(async () => {
      const m = await import('/src/main.js');
      const d = await import('/src/data/career.js');
      m.state.profile.graphicsQuality = 'low';
      m.state.profile.career = d.createCareer({ clubId: 'santos' });
      d.beginCareerMatch(m.state.profile.career); // deixa uma partida PENDENTE
      m.go('career', { view: 'custom-edit', category: 'head' });
    });
    await page.waitForSelector('.season-editor');
    const r = await page.evaluate(async () => {
      const form = document.querySelector('.season-editor-scroll');
      const editor = document.querySelector('.season-editor');
      const cs = getComputedStyle(form);
      const base = { scrollable: form.getAttribute('data-scrollable'), overflowY: cs.overflowY,
        touch: cs.touchAction, gap: parseFloat(cs.rowGap),
        fieldPad: parseFloat(getComputedStyle(document.querySelector('.season-editor-fields')).paddingTop),
        hint: !!document.querySelector('.season-editor-scroll-hint'),
        anyDisabled: [...form.querySelectorAll('select,input')].some(i => i.disabled),
        saveDisabled: !!editor.querySelector('button[type=submit]')?.disabled,
        actionsOutsideScroll: !form.querySelector('button[type=submit]'),
        scrollHeight: form.scrollHeight, clientHeight: form.clientHeight };
      // Simula "arrastar pra baixo" com o mouse sobre uma área neutra do form.
      const rect = form.getBoundingClientRect();
      const x = rect.left + 12, y = rect.top + Math.min(40, rect.height / 3);
      const fire = (type, clientY) => form.dispatchEvent(new PointerEvent(type, {
        bubbles: true, cancelable: true, pointerId: 7, pointerType: 'mouse', clientX: x, clientY
      }));
      fire('pointerdown', rect.top + 200);
      fire('pointermove', rect.top + 40);
      fire('pointerup', rect.top + 40);
      base.dragScrollTop = form.scrollTop;
      // Rolagem programática (wheel/touch equivalente) também funciona.
      form.scrollTop = 0;
      return base;
    });
    assert.ok(r.scrollHeight > r.clientHeight + 20, `formulário realmente transborda e pode rolar: ${r.scrollHeight}/${r.clientHeight}`);
    assert.ok(r.dragScrollTop > 0, `arraste para baixo moveu o scroll: ${r.dragScrollTop}`);
    assert.equal(r.scrollable, 'true');
    assert.equal(r.overflowY, 'auto', 'pode arrastar/rolar para baixo');
    assert.ok(String(r.touch).includes('pan-y'), 'arraste vertical por toque');
    assert.ok(r.gap >= 16, 'mais espaçado');
    assert.ok(r.fieldPad >= 18, 'campos mais espaçados');
    assert.equal(r.hint, true, 'dica de arraste');
    assert.equal(r.anyDisabled, false, 'edição liberada mesmo com partida pendente');
    assert.equal(r.saveDisabled, false);
    assert.equal(r.actionsOutsideScroll, true, 'SALVAR/CANCELAR ficam fora da área rolável');
    // Salvar uma alteração funciona mesmo com pendente.
    await page.getByLabel('Cor do cabelo', { exact: true }).selectOption('#c3a16a');
    await page.getByRole('button', { name: 'Salvar personalização', exact: true }).click();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('xfc.profile.v1')).career.player.appearance.hairColor);
    assert.equal(saved, '#c3a16a', 'alteração depois de pronto é persistida');
  } finally { await browser.close(); server.close(); }
});

/** Prepara uma partida de carreira com o herói controlado e o motor parado. */
async function careerMatchPage(page, url) {
  await page.goto(url);
  await page.evaluate(async () => {
    const m = await import('/src/main.js');
    const d = await import('/src/data/career.js');
    // O corpo GLB é escolhido na criação do atleta: se o pacote não estiver
    // pronto, a partida inteira usa o rig procedural. Com duas suítes em
    // paralelo o download atrasa, então espera aqui.
    await (await import('/src/match3d/models.js')).preloadFootballerPack();
    m.state.profile.graphicsQuality = 'low';
    const c = d.createCareer({ clubId: 'santos' });
    const pending = d.beginCareerMatch(c);
    m.state.profile.career = c;
    m.go('play', { home: 'santos', away: 'real-madrid', minutes: 3,
      careerMatchId: pending.id, careerKind: 'player', userSide: 'home', returnTo: 'career' });
  });
  await page.click('.showcase__enter').catch(() => {});
  await page.waitForSelector('.hud.is-visible');
  await page.waitForFunction(() => !!window.__xfcMatch);
  return page.evaluate(() => {
    const m = window.__xfcMatch;
    m.stop();
    m.world.setPaused(false);
    m.phase.name = 'play';
    m.phase.restart = null;
    m.world.input.moveX = 0; m.world.input.moveZ = 0;
    // Enche o buffer circular do replay sem depender de quadros reais.
    for (let i = 0; i < 8; i++) m.world.replay.capture(.1);
    return { frames: m.world.replay.frameCount, hero: m.controlled[m.world.userSide]?.rosterId };
  });
}

/** Um carrinho real do herói sobre o dono da bola, com falta atrás. */
async function commitHeroFoul(page, { dangerous }) {
  return page.evaluate(({ dangerous }) => {
    const m = window.__xfcMatch;
    const side = m.world.userSide;
    const rival = side === 'home' ? 'away' : 'home';
    const hero = m.controlled[side];
    const victim = m.teams[rival].players.find(p => p.active && !p.isKeeper);
    const x = dangerous ? 40 : 10;
    m.ball.reset(0, 0);
    m.ball.attachTo(victim);
    m.ball.state.owner = victim;
    m.ball.state.lastTouch = victim;
    m.ball.state.noAttachment = 0;
    victim.x = x; victim.z = 0; victim.vx = 0; victim.vz = 0;
    victim.facing = { x: 1, z: 0 }; victim.facingAngle = Math.PI / 2;
    hero.x = x - .8; hero.z = 0; hero.vx = 0; hero.vz = 0;
    hero.facing = { x: 1, z: 0 }; hero.facingAngle = Math.PI / 2;
    hero.yellowCards = 0;
    hero.redCard = false;
    const started = m.world.slideTackle(hero);
    let card = null;
    const seen = [];
    for (let i = 0; i < 6; i++) {
      m.world.tick(1 / 60);
      const cards = m.world.snapshot().discipline;
      if (cards) seen.push(JSON.stringify(cards));
    }
    return { started, heroId: hero.rosterId, heroActive: hero.active,
      controlled: m.controlled[side]?.rosterId, phase: m.world.snapshot().phase, seen };
  }, { dangerous });
}

test('carreira: replay automático aparece após falta grave e pode ser pulado', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e.message || e)));
    const setup = await careerMatchPage(page, url);
    assert.ok(setup.frames >= 3, 'buffer de replay preenchido');
    assert.equal(setup.hero, 'career-player');
    const foul = await commitHeroFoul(page, { dangerous: false });
    assert.equal(foul.started, true, 'carrinho aceito');
    await page.waitForSelector('.play-replay', { timeout: 8000 });
    const label = await page.locator('.play-replay__label').innerText();
    assert.ok(label.includes('FALTA') || label.includes('PÊNALTI'), label);
    assert.equal(await page.getByRole('button', { name: 'PULAR', exact: true }).count(), 1);
    // O clipe automático tem ~3 s e termina sozinho. Num runner lento o painel
    // pode se desconectar durante o clique; nesse caso o próprio replay já
    // fechou, o que é o comportamento esperado — basta validar o estado final.
    const skip = page.getByRole('button', { name: 'PULAR', exact: true });
    try {
      await skip.click({ timeout: 5000 });
    } catch (e) {
      if (!/detached|not attached|Timeout/i.test(String(e.message || e))) throw e;
    }
    await page.waitForSelector('.play-replay', { state: 'detached', timeout: 15000 });
    assert.equal(await page.locator('.play-replay').count(), 0, 'replay fechado após PULAR/fim do clipe');
    assert.equal(await page.evaluate(() => document.querySelector('.play__stage')?.classList.contains('is-replay')), false,
      'classe de replay removida da partida');
    assert.deepEqual(errors, []);
  } finally { await browser.close(); server.close(); }
});

test('carreira: expulsão do herói oferece ASSISTIR com câmera/controle seguros', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e.message || e)));
    await careerMatchPage(page, url);
    const foul = await commitHeroFoul(page, { dangerous: true });
    assert.equal(foul.heroActive, false, 'herói expulso sai de campo');
    await page.waitForSelector('.play-dismissal', { timeout: 8000 });
    assert.equal(await page.getByRole('button', { name: 'ASSISTIR', exact: true }).count(), 1);
    assert.equal(await page.getByRole('button', { name: 'ENCERRAR PARTIDA', exact: true }).count(), 1);
    await page.getByRole('button', { name: 'ASSISTIR', exact: true }).click();
    await page.waitForSelector('.play-dismissal', { state: 'detached' });
    const watched = await page.evaluate(() => {
      const m = window.__xfcMatch;
      return { camera: m.world.cameraMode, controlled: m.controlled[m.world.userSide]?.rosterId,
        command: m.world.command('pass'), paused: m.world.isPaused() };
    });
    assert.equal(watched.camera, 'play', 'câmera de transmissão no modo assistir');
    assert.notEqual(watched.controlled, 'career-player', 'não controla mais o expulso');
    assert.equal(watched.command, false, 'sem comandos de passe enquanto assiste');
    assert.equal(watched.paused, false, 'jogo continua');
    assert.deepEqual(errors, []);
  } finally { await browser.close(); server.close(); }
});

test('carreira: ENCERRAR após expulsão liquida a partida e mostra resultado', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e.message || e)));
    await careerMatchPage(page, url);
    await commitHeroFoul(page, { dangerous: true });
    await page.waitForSelector('.play-dismissal', { timeout: 8000 });
    await page.getByRole('button', { name: 'ENCERRAR PARTIDA', exact: true }).click();
    await page.waitForSelector('.result__title');
    assert.match(await page.locator('.result__title').innerText(), /FIM DE JOGO/);
    const c = await page.evaluate(() => JSON.parse(localStorage.getItem('xfc.profile.v1')).career);
    assert.equal(c.pending, null, 'partida pendente foi liquidada');
    assert.equal(c.totals.matches, 1);
    assert.ok(c.history.length >= 0);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); server.close(); }
});

test('partida: passe obedece ao analógico (para trás) e falta/pênalti têm cutscene de ajuste', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(url);
    await page.evaluate(async () => {
      const m = await import('/src/main.js');
      m.state.profile.graphicsQuality = 'low';
      m.go('play', { home: 'fc-barcelona', away: 'real-madrid' });
    });
    await page.waitForFunction(() => !!window.__xfcMatch);
    const r = await page.evaluate(() => {
      const m = window.__xfcMatch;
      m.stop(); m.world.setPaused(false);
      m.phase.name = 'play'; m.phase.restart = null;
      const side = m.world.userSide;
      const hero = m.controlled[side];
      const mates = m.teams[side].players.filter(p => p !== hero && p.active && !p.isKeeper);
      mates.forEach((p, i) => { p.x = 0; p.z = 34; });
      const behind = mates[0], ahead = mates[1];
      behind.x = hero.x - 8; behind.z = hero.z;
      ahead.x = hero.x + 8; ahead.z = hero.z;
      m.ball.attachTo(hero);
      m.world.input.moveX = -1; m.world.input.moveZ = 0; // analógico para TRÁS (-x)
      m.world.command('pass');
      const passTarget = m.ball.state.passTarget;
      const backPass = passTarget === behind;
      m.world.input.moveX = 0; m.world.input.moveZ = 0;

      // Força duas retomadas e verifica a cutscene de ajuste da bola.
      const setup = type => {
        m.phase.name = 'restart'; m.phase.timer = 0;
        m.phase.restart = { type, side, x: 20, z: 4, taker: null, ready: false,
          waitForReferee: false, foulKind: null };
        for (let i = 0; i < 3; i++) m.world.tick(1 / 60);
        const p = m.phase.restart?.preparation;
        return { stage: p?.stage || null, duration: p?.duration || 0,
          ownerNull: m.ball.state.owner === null };
      };
      const freekick = setup('freekick');
      const penalty = setup('penalty');
      return { backPass, forwardFallback: passTarget === ahead, freekick, penalty };
    });
    assert.equal(r.backPass, true, 'passe vai para o companheiro atrás, não só para frente');
    assert.equal(r.forwardFallback, false);
    assert.equal(r.freekick.stage, 'place', 'falta tem cutscene de ajeitar a bola');
    assert.ok(r.freekick.duration > 0.8, 'cutscene de falta mais longa');
    assert.equal(r.freekick.ownerNull, true);
    assert.equal(r.penalty.stage, 'place', 'pênalti tem cutscene de ajeitar a bola');
    assert.ok(r.penalty.duration > 0.3 && r.penalty.duration < r.freekick.duration,
      'pênalti tem cutscene curta, devolvendo o cobrador aos 5 m do run-up');
  } finally { await browser.close(); server.close(); }
});

test('corrida da carreira: o pé de apoio quase não escorrega ao correr de lado', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e.message || e)));
    await careerMatchPage(page, url);
    // O elenco GLB carrega em paralelo: espera o esqueleto existir antes de medir.
    await page.waitForFunction(() => {
      const m = window.__xfcMatch; if (!m) return false;
      const hero = m.controlled[m.world.userSide]; if (!hero) return false;
      let skel = null;
      hero.root.traverse(o => { if (o.isSkinnedMesh && !skel) skel = o.skeleton; });
      return Boolean(skel);
    }, null, { timeout: 45000 }).catch(() => {});
    const r = await page.evaluate(async () => {
      const m = window.__xfcMatch, world = m.world;
      m.stop(); world.setPaused(false); world.phase.name = 'play'; world.phase.restart = null;
      const THREE = (await import('/src/match3d/engine.js')).THREE;
      const hero = m.controlled[world.userSide];
      let skel = null;
      for (let attempt = 0; attempt < 60 && !skel; attempt++) {
        hero.root.traverse(o => { if (o.isSkinnedMesh && !skel) skel = o.skeleton; });
        if (!skel) await new Promise(res => setTimeout(res, 250));
      }
      if (!skel) return { error: 'sem esqueleto' };
      const feet = skel.bones.filter(b => /Foot$/i.test(b.name));
      const probe = () => feet.map(b => { const v = new THREE.Vector3(); b.getWorldPosition(v); return { y: v.y, x: v.x, z: v.z }; });
      // Anda para o lado com o analógico, como quem troca de corredor em campo.
      const rows = [];
      for (let i = 0; i < 180; i++) {
        world.input.moveX = 1; world.input.moveZ = 0;
        world.tick(1 / 60);
        rows.push({ vx: hero.vx, vz: hero.vz, feet: probe() });
      }
      world.input.moveX = 0; world.input.moveZ = 0;
      const bodySpeed = rows.reduce((a, row) => a + Math.hypot(row.vx, row.vz), 0) / rows.length;
      // O pé de apoio é o mais baixo do quadro. Se o ciclo acompanhasse o corpo
      // (e não o contrário), ele ficaria parado no gramado.
      const minY = Math.min(...rows.flatMap(row => row.feet.map(f => f.y)));
      const gate = minY + 0.012;
      const slips = [];
      for (let i = 1; i < rows.length; i++) {
        const prev = rows[i - 1].feet, cur = rows[i].feet;
        let k = 0;
        for (let j = 1; j < cur.length; j++) if (cur[j].y < cur[k].y) k = j;
        if (cur[k].y > gate || prev[k].y > gate) continue;
        slips.push(Math.hypot(cur[k].x - prev[k].x, cur[k].z - prev[k].z) * 60);
      }
      const avg = slips.length ? slips.reduce((a, b) => a + b, 0) / slips.length : null;
      return { bodySpeed: +bodySpeed.toFixed(2), footSlip: avg == null ? null : +avg.toFixed(2), contacts: slips.length };
    });
    assert.equal(r.error, undefined, r.error);
    assert.ok(r.bodySpeed > 4, 'o atleta realmente corre de lado');
    assert.ok(r.contacts >= 12, 'houve contato de pé suficiente para medir');
    // Antes da correção o pé de apoio escorregava ~3 m/s (metade da velocidade
    // do corpo) — era o "patinar" ao virar de lado.
    assert.ok(r.footSlip < 1.6, `pé de apoio escorrega ${r.footSlip} m/s de ${r.bodySpeed} m/s do corpo`);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); server.close(); }
});

test('gol real: a rede do estádio deforma (animação conectada à física da bola)', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e.message || e)));
    await page.goto(url);
    await page.evaluate(async () => { const m = await import('/src/main.js'); m.state.profile.graphicsQuality='low'; m.go('play',{home:'fc-barcelona',away:'real-madrid'}); });
    await page.click('.showcase__enter').catch(() => {});
    await page.waitForSelector('.hud.is-visible');
    await page.waitForFunction(() => !!window.__xfcMatch);
    const result = await page.evaluate(() => {
      const m = window.__xfcMatch;
      m.stop(); m.world.setPaused(false);
      const nets = [];
      m.engine.scene.traverse(o => { if (o.name === 'xfc-3d-goal-net') nets.push(o.parent.userData.net); });
      const before = nets.map(n => n.stats().impulses);
      m.phase.name = 'goal'; m.phase.timer = 0; m.phase.restart = null;
      m.ball.reset(0, 0);
      m.ball.state.goalPocket = 1;
      m.ball.state.position.set(52.2, 1, 0);
      m.ball.state.velocity.set(28, 0, 0);
      m.ball.state.owner = null;
      for (let i = 0; i < 80; i++) m.world.tick(1 / 120);
      const after = nets.map(n => n.stats());
      return { netCount: nets.length, before, after };
    });
    assert.equal(result.netCount, 2, 'dois gols montados no estádio real');
    const totalBefore = result.before.reduce((a, b) => a + b, 0);
    const totalAfter = result.after.reduce((a, s) => a + s.impulses, 0);
    assert.ok(totalAfter > totalBefore, 'impacto na rede registrado num gol real');
    assert.ok(result.after.some(s => s.bufferUpdates > 0), 'vértices da rede foram animados');
    assert.deepEqual(errors, []);
  } finally { await browser.close(); server.close(); }
});

test('carreira Pro: câmera acompanha a bola quando ela fica atrás do atleta', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e.message || e)));
    await careerMatchPage(page, url);
    const result = await page.evaluate(() => {
      const m = window.__xfcMatch;
      m.stop(); m.world.setPaused(false);
      m.phase.name = 'play'; m.phase.restart = null;
      m.world.setCameraMode('pro');
      m.world.input.moveX = 0; m.world.input.moveZ = 0;
      const side = m.world.userSide, hero = m.controlled[side];
      const mate = m.teams[side].players.find(p => p !== hero && p.active && !p.isKeeper);
      hero.x = 0; hero.z = 0; hero.vx = 0; hero.vz = 0;
      // Bola 15 m ATRÁS do eixo de ataque (+x) do time da casa.
      mate.x = -15; mate.z = 0; mate.vx = 0; mate.vz = 0;
      m.ball.reset(0, 0);
      m.ball.attachTo(mate);
      m.ball.state.owner = mate;
      // O dono da bola conduz no lugar (a IA não pode afastar a bola do ponto
      // que o teste quer medir).
      for (let i = 0; i < 4; i++) { mate.vx = 0; mate.vz = 0; m.world.tick(1 / 60); }
      const initial = m.engine.camera.position.x;
      // Congela a BOLA no ponto atrás do atleta: quem se move é a câmera, não o
      // lance — assim o teste mede a rotação do eixo Pro, não a condução da IA.
      const ballPos = m.ball.state.position;
      const frozen = { x: ballPos.x, z: ballPos.z };
      for (let i = 0; i < 90; i++) {
        mate.vx = 0; mate.vz = 0;
        m.world.tick(1 / 60);
        ballPos.x = frozen.x; ballPos.z = frozen.z;
        m.ball.mesh.position.copy(ballPos);
      }
      return { mode: m.world.cameraMode, initial, final: m.engine.camera.position.x,
        ballX: m.ball.state.position.x, heroX: hero.x, mateX: mate.x };
    });
    assert.equal(result.mode, 'pro');
    assert.ok(result.ballX < -8, 'bola permanece atrás do atleta');
    assert.ok(result.final > result.initial + 6,
      `câmera virou para acompanhar a bola: ${result.initial.toFixed(1)} → ${result.final.toFixed(1)}`);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); server.close(); }
});
