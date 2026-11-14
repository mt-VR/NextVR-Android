// Cerimônia pré-jogo do XFC — a ORDEM das quatro cenas é o contrato.
//
// 1. túnel → 2. entrada no gramado → 3. hino → 4. apito/transmissão.
//
// A ordem é verificada por duas vias:
//  • no módulo puro (`prematch.js`), sem navegador: tempos, posições e a curva
//    contínua da câmera (nenhum salto entre quadros, nenhuma câmera no chão);
//  • no navegador: o motor percorre as cenas na ordem e o painel da tela marca
//    cada capítulo, com o hino abrindo a boca do modelo (GLB) de verdade.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PREMATCH_BEATS,
  PREMATCH_ENDS,
  PREMATCH_STARTS,
  PREMATCH_TOTAL,
  anthemMouth,
  anthemSway,
  lineupSlot,
  pathLength,
  prematchBeatAt,
  prematchCameraPose,
  refereeTunnelSlot,
  samplePath,
  tunnelSlot,
  walkoutPath
} from '../xfc-game/src/match3d/prematch.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

test('cerimônia tem exatamente quatro cenas, nesta ordem, sem buraco no tempo', () => {
  assert.deepEqual(PREMATCH_BEATS.map(beat => beat.id), ['tunnel', 'walkout', 'anthem', 'handoff']);
  assert.equal(PREMATCH_STARTS[0], 0);
  assert.equal(PREMATCH_ENDS[3], PREMATCH_TOTAL);
  for (let index = 1; index < PREMATCH_BEATS.length; index += 1) {
    assert.equal(PREMATCH_STARTS[index], PREMATCH_ENDS[index - 1], 'nenhuma cena começa antes da anterior terminar');
    assert.ok(PREMATCH_BEATS[index].duration > 1.5, 'cada cena tem tempo de ser lida');
  }
  assert.equal(prematchBeatAt(0).id, 'tunnel');
  assert.equal(prematchBeatAt(PREMATCH_STARTS[1]).id, 'walkout');
  assert.equal(prematchBeatAt(PREMATCH_STARTS[2]).id, 'anthem');
  assert.equal(prematchBeatAt(PREMATCH_STARTS[3]).id, 'handoff');
  // A cena é monotônica: o índice nunca volta dentro da cerimônia.
  let previous = -1;
  for (let time = 0; time <= PREMATCH_TOTAL; time += 0.05) {
    const beat = prematchBeatAt(time);
    assert.ok(beat.index >= previous, 'a cerimônia não volta de cena');
    previous = beat.index;
  }
});

test('câmera da cerimônia é uma curva só: sem corte e sem mergulhar no gramado', () => {
  const broadcast = { position: { x: 0, y: 21.5, z: 30 }, target: { x: 0, y: 0, z: 0 }, fov: 48 };
  let previous = null;
  let largestStep = 0;
  let largestFovStep = 0;
  for (let time = 0; time <= PREMATCH_TOTAL; time += 1 / 60) {
    const pose = prematchCameraPose(time, { broadcast });
    assert.ok(Number.isFinite(pose.position.x) && Number.isFinite(pose.position.y), 'pose finita');
    assert.ok(pose.position.y > 0.5, `câmera abaixo do gramado em ${time.toFixed(2)}s`);
    if (previous) {
      const step = Math.hypot(
        pose.position.x - previous.position.x,
        pose.position.y - previous.position.y,
        pose.position.z - previous.position.z
      );
      largestStep = Math.max(largestStep, step);
      largestFovStep = Math.max(largestFovStep, Math.abs(pose.fov - previous.fov));
    }
    previous = pose;
  }
  // Um passo de 1/60 s nunca pode pular o enquadramento: acima disso a cena
  // vira um corte, que é justamente o que o pedido proíbe.
  assert.ok(largestStep < 0.6, `maior salto de câmera: ${largestStep.toFixed(2)} m por quadro`);
  assert.ok(largestFovStep < 4, `maior salto de lente: ${largestFovStep.toFixed(2)}°`);
  // O fim da cerimônia entrega a câmera oficial da partida.
  const end = prematchCameraPose(PREMATCH_TOTAL, { broadcast });
  assert.ok(Math.abs(end.position.y - broadcast.position.y) < 0.5, 'termina na altura da transmissão');
  assert.ok(Math.abs(end.position.z - broadcast.position.z) < 0.5, 'termina na câmera de transmissão');
});

test('túnel: um time de cada lado, árbitros na frente e caminho até o gramado', () => {
  for (let index = 0; index < 11; index += 1) {
    const home = tunnelSlot('home', index);
    const away = tunnelSlot('away', index);
    assert.ok(home.x < 0 && away.x > 0, 'um elenco de cada lado do corredor');
    assert.equal(home.angle, 0, 'todos olham para a boca do túnel');
    assert.ok(home.z < -48 && home.z > -53.5, 'dentro da sala do túnel');
    const referee = refereeTunnelSlot(index % 3);
    assert.ok(referee.z > home.z, 'árbitros à frente das equipes');
    assert.equal(referee.angle, Math.PI, 'árbitros de frente para os times');
  }
  const path = walkoutPath('home', 0);
  const start = samplePath(path, 0);
  const end = samplePath(path, 1);
  const target = lineupSlot('home', 0);
  assert.ok(start.z < -49, 'o desfile começa dentro do túnel');
  assert.ok(Math.abs(end.x - target.x) < 0.01 && Math.abs(end.z - target.z) < 0.01, 'termina na linha de apresentação');
  assert.ok(pathLength(path) > 40, 'o trajeto atravessa o túnel e o gramado');
  // A linha de apresentação: casa de um lado, visitante do outro, todos de frente.
  assert.ok(lineupSlot('home', 5).x < 0 && lineupSlot('away', 5).x > 0);
});

test('hino: a boca abre e fecha em sílabas (não é um seno único) e o corpo balança', () => {
  let low = 1;
  let high = 0;
  // Conta as aberturas (subidas acima de 0,5): cada verso tem várias sílabas,
  // então a boca não pode ficar num único vaivém lento.
  let peaks = 0;
  let wasOpen = false;
  for (let time = 0; time < 6; time += 0.02) {
    const value = anthemMouth(time, 0.37);
    low = Math.min(low, value);
    high = Math.max(high, value);
    const open = value > 0.5;
    if (open && !wasOpen) peaks += 1;
    wasOpen = open;
  }
  assert.ok(high > 0.8, 'canta de boca aberta');
  assert.ok(low < 0.1, 'fecha entre as frases (respiração)');
  assert.ok(peaks >= 6, `sílabas em 6 s: ${peaks}`);
  const sway = anthemSway(1.2, 0.5);
  assert.ok(Math.abs(sway.side) < 0.1 && sway.lift >= 0 && sway.lift <= 1, 'balanço discreto');
});

test('cerimônia no navegador: cenas na ordem, hino com boca e controle só no fim', {timeout: 180000}, async t => {
  const { server, url } = await startXfcServer();
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url);
    await page.evaluate(async () => {
      const main = await import('/src/main.js');
      main.state.profile.graphicsQuality = 'low';
      main.go('play', { home: 'fc-barcelona', away: 'real-madrid', stadium: 0 });
    });
    await page.waitForSelector('.showcase__enter', { timeout: 40000 });
    await page.click('.showcase__enter');

    // O painel da cerimônia mostra os quatro capítulos e começa no túnel.
    await page.waitForSelector('.entrance__steps', { timeout: 20000 });
    assert.equal(await page.locator('.entrance__step').count(), 4, 'quatro capítulos no painel');
    // A cena corrente é lida do relógio da cerimônia, que avança com o tempo
    // real: numa máquina de CI carregada a abertura (4 s de túnel) pode ter
    // passado antes desta linha. O que importa aqui é que o painel está numa
    // das cenas da abertura e que a ordem completa aparece no laço abaixo.
    const currentBeat = await page.locator('.entrance__step.is-current').first().getAttribute('data-beat');
    assert.ok(['tunnel', 'walkout'].includes(currentBeat),
      `a cerimônia começa na abertura (túnel/saída), não em ${currentBeat}`);

    // Percorre a cerimônia pelo motor, registrando a ordem das cenas.
    const order = await page.evaluate(async () => {
      const match = window.__xfcMatch;
      match.stop();
      const seen = [];
      let guard = 0;
      // Passo fixo: a cerimônia avança por pedido do teste, não pelo relógio
      // de parede (numa máquina de CI lenta a cena inteira passaria de uma vez).
      while (match.world.entranceActive && guard < 4000) {
        const beat = match.world.entranceBeat;
        if (beat && seen[seen.length - 1] !== beat) seen.push(beat);
        match.world.advanceEntrance(1 / 60, 'accumulate');
        match.world.tick(1 / 60);
        guard += 1;
      }
      return {
        seen,
        played: match.world.entrancePlayed,
        phase: match.phase.name,
        ballOwner: match.ball.state.owner?.side || null,
        players: match.teams.home.players.length,
        onPitch: match.teams.home.players.filter(p => Math.abs(p.x) < 52 && Math.abs(p.z) < 34).length
      };
    });
    assert.deepEqual(order.seen, ['tunnel', 'walkout', 'anthem', 'handoff'], 'as quatro cenas, nesta ordem');
    assert.equal(order.played, true, 'a cerimônia é marcada como cumprida');
    assert.equal(order.phase, 'kickoff', 'o jogo para na saída de bola do jogador');
    assert.ok(order.onPitch === order.players, 'todos os atletas ficam no gramado para o apito');

    // O hino abre a boca do modelo GLB de verdade: a malha existe e sai da
    // posição fechada quando o atleta canta.
    const mouth = await page.evaluate(async () => {
      const match = window.__xfcMatch;
      const player = match.teams.home.players.find(entry => !entry.isKeeper);
      const glb = player.model.root.getObjectByName('xfc-glb-mouth');
      const classic = player.model.root.getObjectByName('xfc-player-mouth');
      if (!glb && !classic) return { rig: null };
      // O GLB abre uma peça escura entre os lábios; o rig clássico estica a boca
      // existente. Nos dois casos a medida é a abertura vertical.
      const measure = () => (glb ? glb.scale.y : classic.scale.y);
      const closedBase = measure();
      player.model.anthem(6, 1);
      let open = 0;
      for (let step = 0; step < 200; step += 1) {
        player.model.update(1 / 60, { speed: 0 });
        open = Math.max(open, measure());
      }
      player.model.stopAnthem();
      player.model.update(1 / 60, { speed: 0 });
      return {
        rig: glb ? 'glb' : 'classic',
        closedBase,
        open,
        closedHidden: glb ? !glb.visible : measure() <= closedBase * 1.2
      };
    });
    assert.ok(mouth.rig, 'o atleta usado no jogo tem boca articulada');
    assert.ok(mouth.open > mouth.closedBase * 2.5, `a boca abre no canto (${mouth.rig})`);
    assert.equal(mouth.closedHidden, true, 'a peça da boca some quando ninguém canta');

    // O HUD só aparece quando o controle é liberado — e a saída aceita o passe.
    await page.waitForSelector('.hud.is-visible', { timeout: 30000 });
    assert.equal(await page.locator('.entrance').count(), 0, 'o painel da cerimônia sai de cena');
    const pass = await page.evaluate(() => window.__xfcMatch.world.command('pass'));
    assert.ok(pass, 'o primeiro PASSE é do jogador, como sempre');
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
    server.close();
  }
});
