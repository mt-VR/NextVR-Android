// Build 96 — o retorno ao Next com quatro pedidos do usuário.
//
//   "volta pro next, deixa por enquanto o ipa de lado, vamos focar no next"
//   1. hand tracking mais preciso;
//   2. o do ATMO ("bem melhor, bem otimizado") aplicado no Next;
//   3. "bota o negócio da tela ficar perto e longe também igual do ATMO";
//   4. "na dock normal, consegue por uma opção em bolinha que aparece 10 bolinhas dentro dela, aí
//      quando clicar, ela abre um menu com uns apps gigantes, tipo assim, aparece, 3 encima, 4 no
//      meio e 3 embaixo, tipo um círculo, e é pra aparecer os apps do Android e do aplicativo".
//
// O que dá para provar sem um headset: a geometria do anel é a 3/4/3 pedida, os 10 lugares existem,
// a lista mistura os apps do ATMO XR com os do Android, a bolinha da Dock desenha 10 bolinhas, o
// perto/longe move janelas E dock, e os dois lados (web e nativo) têm as defesas de precisão.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { CursorStabilizer } from '../web/src/hand-input.js';

const read = p => readFileSync(p, 'utf8');
const orb = () => read('web/src/orb-menu.js');
const windows = () => read('web/src/windows.js');
const apps = () => read('web/src/apps.js');
const css = () => read('web/index.html');
const handsJs = () => read('web/src/hands.js');
const handsKt = () => read('nextvr-android/src/main/java/com/nextvr/app/hands/PhoneXrHands.kt');
const gesturesKt = () => read('nextvr-android/src/main/java/com/nextvr/app/hands/HandGestures.kt');
const gradle = () => read('nextvr-android/build.gradle');

/* ===================== o anel de 10 apps (pedido 4) ===================== */

test('Build 96: o anel tem os 10 lugares no desenho 3 em cima / 4 no meio / 3 embaixo', () => {
  const source = orb();
  const block = source.slice(source.indexOf('ORB_LAYOUT'), source.indexOf('ORB_OWN_SLOTS'));
  const slots = [...block.matchAll(/\{\s*x:\s*(-?[\d.]+),\s*y:\s*(-?[\d.]+)\s*\}/g)]
    .map(match => ({ x: Number(match[1]), y: Number(match[2]) }));
  assert.equal(slots.length, 10, 'a bolinha promete 10 apps, o anel entrega 10');
  const top = slots.filter(s => s.y < 30);
  const middle = slots.filter(s => s.y >= 30 && s.y <= 70);
  const bottom = slots.filter(s => s.y > 70);
  assert.equal(top.length, 3, '3 em cima');
  assert.equal(middle.length, 4, '4 no meio');
  assert.equal(bottom.length, 3, '3 embaixo');
  // "tipo um círculo": a linha do meio é a mais aberta, as de cima e de baixo se fecham para dentro.
  const spread = row => Math.max(...row.map(s => s.x)) - Math.min(...row.map(s => s.x));
  assert.ok(spread(middle) > spread(top), 'a linha do meio é a mais larga do círculo');
  assert.ok(spread(middle) > spread(bottom), 'a linha de baixo fecha o círculo');
  assert.ok(Math.min(...middle.map(s => s.x)) < Math.min(...top.map(s => s.x)),
    'o meio passa por fora das pontas da linha de cima');
  assert.ok(Math.max(...middle.map(s => s.x)) > Math.max(...top.map(s => s.x)),
    'idem do outro lado');
});

test('Build 96: o anel mostra apps do Android E apps do próprio aplicativo', () => {
  const source = orb();
  // O anel se monta do catálogo da Dock, que é onde os dois lados vivem (`app:<pacote>` = Android).
  assert.ok(source.includes('dockCatalogAll()'), 'o anel lê o catálogo em vez de uma lista fixa');
  assert.ok(/ORB_ANDROID_SLOTS/.test(source) && /startsWith\('app:'\)/.test(source),
    'os apps Android entram pelos ids `app:<pacote>` que o lado nativo entrega');
  assert.ok(/ORB_OWN_IDS/.test(source) && source.includes("'browser'"), 'e os apps do ATMO XR entram por id');
  // Nada de ícone inventado: o app Android aparece com o ícone real, ou não aparece.
  assert.ok(source.includes('entry.img'), 'o app Android usa o ícone real que veio do aparelho');
  const ownBlock = source.slice(source.indexOf('ORB_OWN_IDS'), source.indexOf('const isAndroidId'));
  for (const id of ['browser', 'youtube', 'store', 'gallery', 'library', 'settings']) {
    assert.ok(ownBlock.includes(`'${id}'`), `o app do ATMO XR "${id}" está na fila do anel`);
  }
  // Sem a lista do aparelho o anel não fica com buracos: os apps do app ocupam os 10 lugares.
  assert.ok(/orbEntries\(\)/.test(source) && /slice\(0, ORB_LAYOUT\.length\)/.test(source));
});

test('Build 96: a bolinha da Dock desenha as mesmas 10 bolinhas (3/4/3)', () => {
  const source = windows();
  const block = source.slice(source.indexOf("it.kind === 'orb'"), source.indexOf("} else if (it.kind === 'tool')"));
  assert.ok(block.includes('dock-orb'), 'a Dock conhece o tipo `orb`');
  const rows = [...block.matchAll(/<b>((?:<i><\/i>)+)<\/b>/g)].map(match => (match[1].match(/<i>/g) || []).length);
  assert.deepEqual(rows, [3, 4, 3], 'a bolinha mostra 3 em cima, 4 no meio e 3 embaixo');
  assert.equal(rows.reduce((a, b) => a + b, 0), 10, '10 bolinhas dentro da bolinha');
  assert.ok(css().includes('.dock-orb-dots'), 'e o CSS desenha essas linhas');
  assert.ok(css().includes('.orb-app-bubble'), 'assim como as bolhas dos apps gigantes do anel');
});

test('Build 96: a opção em bolinha está na Dock normal e abre o anel', () => {
  const source = apps();
  const at = source.indexOf('buildDock([');
  assert.ok(at > 0, 'a Dock normal é montada num lugar só');
  const block = source.slice(at, at + 2500);
  assert.ok(/kind: 'orb'/.test(block), 'a Dock normal ganha a bolinha');
  assert.ok(/run: openOrbMenu/.test(block), 'tocar nela abre o anel');
  assert.ok(source.includes("from './orb-menu.js'"), 'o anel é um módulo próprio');
  // A janela do anel: sem chrome, grande, e focada em vez de duplicada.
  const orbSource = orb();
  assert.ok(/open\(\{[^}]*id: ORB_WIN[^}]*chrome: false/s.test(orbSource) || orbSource.includes('chrome: false'),
    'o anel ocupa a janela inteira (o desenho já é o assunto)');
  assert.ok(orbSource.includes('focus(existing)'), 'tocar de novo traz o anel para a frente em vez de abrir outro');
});

/* ===================== tela perto / longe (pedido 3) ===================== */

test('Build 96: o perto/longe move a tela inteira — janelas E dock', () => {
  const source = windows();
  const block = source.slice(source.indexOf('export function screenDepth('), source.indexOf('export function screenDepthLimits'));
  assert.ok(block.includes('S.winDist'), 'as janelas vêm para perto');
  assert.ok(block.includes('S.dockDist'), 'a dock vem junto — é a mesma tela');
  assert.ok(block.includes('save(S)'), 'o lugar novo é lembrado');
  assert.ok(block.includes('requestAnimationFrame'), 'a tela desliza em vez de pular');
  assert.ok(/clampNum/.test(source), 'e nunca sai dos limites dos controles de Ajustes');
  // Os limites são os mesmos dos sliders: o botão não tem como levar a tela a um lugar proibido.
  const appsSource = apps();
  assert.ok(appsSource.includes("ytRange('winDist'"), 'o slider de distância continua sendo a fonte do limite');
  // O anel e a Dock usam o mesmo gancho.
  assert.ok(appsSource.includes('window.nextvrScreenDepth'), 'a interface publica o gancho do perto/longe');
  assert.ok(orb().includes('screenDepth(dir)'), 'o anel chama o perto/longe de verdade');
  // A animação reinicia de onde está: dois toques seguidos não voltam ao começo.
  assert.ok(/cancelAnimationFrame\(screenDepthAnim\)/.test(block), 'um toque novo continua de onde a tela está');
});

test('Build 96: o perto/longe não muda o TAMANHO das coisas', () => {
  const block = windows().slice(windows().indexOf('export function screenDepth('),
    windows().indexOf('export function screenDepthLimits'));
  assert.ok(!/winScale\s*=/.test(block), 'perto/longe é profundidade: o tamanho aparente fica igual');
  assert.ok(!/resizeScale\s*=/.test(block));
});

/* ===================== precisão do ponteiro (pedidos 1 e 2) ===================== */

test('Build 96: o ponteiro da mão para de tremer em cima do alvo sem atrasar o movimento', () => {
  const stabilizer = new CursorStabilizer();
  stabilizer.update(.5, .5, { nowMs: 0 });
  // Mão parada, ruído de ±0.0012 por quadro (o tremor que fazia o alvo de 34 px escapar):
  let moves = 0;
  for (let frame = 1; frame <= 10; frame++) {
    const out = stabilizer.update(.5 + (frame % 2 ? .0012 : -.0012), .5, { nowMs: frame * 16 });
    if (!out.held) moves++;
    assert.ok(Math.abs(out.x - .5) <= .002, 'com a mão parada o ponteiro não anda mais que o ruído');
  }
  assert.ok(moves <= 2, `o ruído não pode arrastar o ponteiro (andou ${moves}/10 quadros)`);
  // Movimento rápido passa direto: nada de atraso em quem está com pressa.
  const fast = stabilizer.update(.62, .5, { nowMs: 400, speed: 2.4 });
  assert.equal(fast.held, false);
  assert.ok(Math.abs(fast.x - .62) < .01, 'movimento rápido chega no mesmo quadro');
});

test('Build 96: clique segurado não vira arrasto por ruído', () => {
  const stabilizer = new CursorStabilizer();
  stabilizer.update(.4, .4, { nowMs: 0 });
  // Pinça fechada + tremor: a zona morta cresce, então o candidato de arrasto não aparece.
  const pressed = stabilizer.update(.4025, .4, { nowMs: 16, pressing: true, speed: .1 });
  assert.equal(pressed.held, true, 'com a pinça fechada o clique fica onde apertou');
  // Mas a zona morta não é um ímã: passado o tempo máximo ela libera.
  const later = stabilizer.update(.4025, .4, { nowMs: 200, pressing: true, speed: .1 });
  assert.equal(later.held, false, 'mão que realmente anda é seguida mesmo durante o clique');
});

test('Build 96: a web aplica o estabilizador no ponteiro e mede o clique no ponto publicado', () => {
  const source = handsJs();
  assert.ok(source.includes('new CursorStabilizer()'), 'o adaptador web usa o estabilizador');
  assert.ok(source.includes('pointerStabilizer.update(point.x, point.y'), 'ele filtra o ponto do ponteiro');
  assert.ok(source.includes('pressArbiter.begin(chosen.id,cursor.x*viewport.width'),
    'o arrasto é medido no ponto que o DOM recebeu, não no que o filtro descartou');
  assert.ok(source.includes('pointerStabilizer.reset()'), 'perder a mão não deixa estado velho no filtro');
  // A velocidade da extrapolação é medida no ponto CRU da mão: medir contra o ponto segurado faria
  // um tremor de 2 px parecer um swipe e a previsão dispararia.
  assert.ok(/cursorRaw\.x/.test(source) && /point\.x - cursorRaw\.x/.test(source),
    'a velocidade usa o ponto cru, não o publicado');
});

test('Build 96: o nativo escala as zonas mortas pelo tamanho da mão', () => {
  const source = handsKt();
  assert.ok(source.includes('setLandmarkDeadZone'), 'os landmarks têm zona morta por quadro');
  assert.ok(source.includes('setAimDeadZone'), 'o ponteiro também');
  assert.ok(/palmLen \* \.014f/.test(source) || /palmLen\s*\*\s*\.014f/.test(source),
    'a zona morta dos landmarks sai do tamanho da palma');
  // O One Euro precisa aceitar a zona morta mudar: é o que permite escalar por distância.
  assert.ok(/var deadZone/.test(gesturesKt()), 'a zona morta do filtro é ajustável em tempo real');
});

test('Build 96: um glitch de um quadro não cruza a tela, mas um movimento real chega', () => {
  const source = handsKt();
  assert.ok(source.includes('fun stableAim('), 'o ponteiro tem rejeição de salto de um quadro');
  assert.ok(/pendingAimX/.test(source), 'o salto fica pendente até o quadro seguinte confirmar');
  assert.ok(/coerceIn\(\.12f, \.35f\)/.test(source),
    'o limite de salto é palma-relativo mas nunca passa de 35 % da tela num quadro');
  // A previsão entre detecções também não pode disparar com uma velocidade mal medida.
  assert.ok(/hand\.shape\.palmWidth \* 4f/.test(source), 'a previsão é limitada pelo tamanho da mão');
});

/* ===================== build ===================== */

test('Build 96: o APK é a versão 96', () => {
  const source = gradle();
  assert.ok(/versionCode\s+96/.test(source), 'versionCode 96');
});
