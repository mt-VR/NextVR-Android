import test from 'node:test';
import assert from 'node:assert/strict';
import { DESIRED_GAP, EYE_HEIGHT, viewBox, boxOfWindow, separation, scorePlacement,
  spawnCandidates, chooseSpawn, resolveSlot } from '../web/src/spawn.js';

const near = (actual, expected, epsilon = 1e-6) =>
  assert.ok(Math.abs(actual - expected) <= epsilon, `${actual} ≉ ${expected}`);

/** Janela padrão do workspace: 1040×660 px a escala .75 (0,78 × 0,50 m) na distância padrão. */
const WIN = { halfWidth: .39, halfHeight: .2475 };

test('a medida é o tamanho aparente: lado a lado é a folga entre as bordas, não entre os centros', () => {
  const a = viewBox({ x: 0, y: 1.5, z: -1 }, .4, .25);
  const beside = viewBox({ x: .85, y: 1.5, z: -1 }, .4, .25);
  // Bordas a ~5 cm: a folga angular é positiva e pequena (~1,6°), nunca a distância dos centros.
  const gap = separation(a, beside);
  assert.ok(gap > 0 && gap < .05, `janelas quase encostadas continuam separadas: ${gap}`);
  // A mesma janela um pouco mais perto do centro já cobre a vizinha.
  const over = viewBox({ x: .4, y: 1.5, z: -1 }, .4, .25);
  assert.ok(separation(a, over) < 0, 'sobreposição é negativa');
  // Uma janela minúscula e distante não "colide" com uma grande e perto do usuário.
  const tiny = viewBox({ x: 2.4, y: 1.5, z: -3.4 }, .05, .05);
  assert.ok(separation(a, tiny) > 0);
});

test('a dock abaixo da janela não colide com ela (o respiro de 14 cm vira folga angular)', () => {
  const dock = viewBox({ x: 0, y: 1.33, z: -.55 }, .66, .052);
  const win = viewBox({ x: 0, y: 1.77, z: -.68 }, WIN.halfWidth, WIN.halfHeight);
  assert.ok(separation(win, dock) > DESIRED_GAP, 'janela e dock ficam fora uma da outra');
  // Duas janelas vizinhas do arco de 5 lugares também não se cobrem.
  const neighbour = viewBox({ x: Math.sin(1.3) * .68, y: 1.77, z: -Math.cos(1.3) * .68 },
    WIN.halfWidth, WIN.halfHeight);
  assert.ok(separation(win, neighbour) > DESIRED_GAP);
});

test('o retângulo angular cresce com o tamanho e encolhe com a distância', () => {
  const nearBox = viewBox({ x: 0, y: EYE_HEIGHT, z: -.5 }, .5, .3);
  const farBox = viewBox({ x: 0, y: EYE_HEIGHT, z: -1.5 }, .5, .3);
  assert.ok(nearBox.halfYaw > farBox.halfYaw && nearBox.halfPitch > farBox.halfPitch);
  near(viewBox({ x: 0, y: EYE_HEIGHT, z: -.8 }, .4, .25).yaw, 0, 1e-12);   // centro = yaw zero
  assert.ok(viewBox({ x: .8, y: EYE_HEIGHT, z: -.8 }, .4, .25).yaw < 0, 'à direita o yaw é negativo');
  for (const box of [nearBox, farBox]) for (const v of Object.values(box)) assert.ok(Number.isFinite(v));
});

test('coordenadas inválidas não produzem NaN nem um retângulo invertido', () => {
  const box = viewBox({ x: NaN, y: Infinity, z: NaN }, NaN, -3);
  for (const value of Object.values(box)) assert.ok(Number.isFinite(value));
  assert.ok(box.halfYaw >= 0 && box.halfPitch >= 0);
});

test('janela do workspace vira o retângulo da posição e da escala aplicadas', () => {
  const box = boxOfWindow({ target: { x: 0, y: 1.77, z: -.68 }, obj: { scale: { x: .0007875 } }, w: 1040, h: 660 });
  near(box.halfYaw, Math.atan2(1040 * .0007875 / 2, .68), 1e-9);
  assert.ok(box.halfPitch > 0);
});

test('os candidatos ficam na frente do usuário, dentro do yaw alcançável, do centro para fora', () => {
  const list = spawnCandidates({ distance: .68, rows: 2, rings: 3, step: .8, outerLimit: 1.3 });
  assert.equal(list.length, 18, '3 yaw × 3 anéis × 2 fileiras');
  assert.deepEqual(list[0], { x: 0, y: EYE_HEIGHT, z: -.68, angle: 0, row: 0, radius: .68 });
  for (const c of list) {
    assert.ok(c.z < 0, 'nada nasce atrás do usuário');
    assert.ok(Math.abs(c.angle) <= 1.3 + 1e-9);
    assert.ok(Number.isFinite(c.x) && Number.isFinite(c.y) && Number.isFinite(c.z));
  }
  assert.ok(list.some(c => c.row === 1), 'a fileira de cima existe');
  assert.ok(list.every(c => c.radius >= .68 && c.radius <= .68 + 2 * .16 + 1e-9));
});

test('com o lugar livre o lugar desejado é mantido; ocupado, a janela nova procura outro', () => {
  const desired = { x: 0, y: 1.77, z: -.68 };
  const dock = viewBox({ x: 0, y: 1.33, z: -.55 }, .66, .052);
  const free = chooseSpawn({ occupied: [dock], desired, distance: .68, lift: 1.77, rows: 1, ...WIN });
  assert.equal(free.desired, true, 'nada no caminho: o layout de sempre não muda');
  near(free.x, 0); near(free.z, -.68);

  const blocker = viewBox(desired, WIN.halfWidth, WIN.halfHeight);
  const moved = chooseSpawn({ occupied: [blocker, dock], desired, distance: .68, lift: 1.77,
    rows: 2, rings: 4, ...WIN });
  assert.ok(Math.hypot(moved.x, moved.z) > .68 - 1e-9, 'continua na frente do usuário');
  assert.ok(moved.score < scorePlacement({ ...desired, box: blocker }, [blocker, dock],
    { desiredDistance: .68, lift: 1.77 }).score, 'o lugar escolhido é melhor que o lugar coberto');
});

test('slot do arco: sem colisão devolve intacto; coberto por uma janela solta, desliza no arco', () => {
  const desired = { x: 0, y: 1.77, z: -.68 };
  const dock = viewBox({ x: 0, y: 1.33, z: -.55 }, .66, .052);
  const kept = resolveSlot({ desired, occupied: [dock], distance: .68, step: .6,
    outerLimit: 1.24, ...WIN });
  assert.equal(kept.moved, false);
  near(kept.x, 0); near(kept.y, 1.77); near(kept.z, -.68);

  const blocker = viewBox(desired, WIN.halfWidth, WIN.halfHeight);
  const moved = resolveSlot({ desired, occupied: [blocker, dock], distance: .68, step: .6,
    outerLimit: 1.24, maxShift: 4, ...WIN });
  assert.equal(moved.moved, true, 'a janela presa sai de baixo da janela solta');
  near(Math.hypot(moved.x, moved.z), .68, 1e-9);      // mesmo arco: só o yaw muda
  near(moved.y, 1.77);
  assert.equal(moved.overlap, 0, 'o lugar novo não cobre nada');
  assert.ok(Math.abs(Math.atan2(-moved.x, -moved.z)) <= 1.24 + 1e-9, 'dentro do yaw alcançável');
});

test('a nota piora com sobreposição, com falta de folga e com distância do centro', () => {
  const desired = { x: 0, y: 1.77, z: -.68 };
  const box = viewBox(desired, WIN.halfWidth, WIN.halfHeight);
  const empty = scorePlacement({ ...desired, box }, [], { desiredDistance: .68, lift: 1.77 });
  const covered = scorePlacement({ ...desired, box }, [box], { desiredDistance: .68, lift: 1.77 });
  const side = viewBox({ x: .42, y: 1.77, z: -.68 }, WIN.halfWidth, WIN.halfHeight);
  const close = scorePlacement({ ...desired, box }, [side], { desiredDistance: .68, lift: 1.77 });
  const offCenter = viewBox({ x: .5, y: 1.77, z: -.46 }, WIN.halfWidth, WIN.halfHeight);
  const angled = scorePlacement({ x: .5, y: 1.77, z: -.46, box: offCenter }, [],
    { desiredDistance: .68, lift: 1.77 });
  assert.ok(empty.overlap === 0 && empty.score < close.score, 'cobrir de raspão já custa');
  assert.ok(close.score < covered.score, 'sobreposição total é o pior caso');
  assert.ok(angled.score > empty.score, 'fora do centro custa');
});
