import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

/**
 * PC Link: as três pontas contam a mesma história.
 *
 * Há um driver em C++, um Bridge em JS e um app em Kotlin, e nada impede que um deles ganhe uma porta
 * nova ou mude o tamanho de um pacote sem os outros. Este teste compara o que dá para comparar sem
 * compilar: as constantes do protocolo (portas, magic, MTU, tamanho de cabeçalho) entre
 * `pclink/wire.mjs` e `nextvr-android/.../PcLinkWire.kt`, e a interface — a janela do PC Link tem que
 * falar com a ponte nativa de verdade, não com números de exemplo.
 */

const wire = readFileSync(new URL('../pclink/wire.mjs', import.meta.url), 'utf8');
const kotlin = readFileSync(
  new URL('../nextvr-android/src/main/java/com/nextvr/app/pclink/PcLinkWire.kt', import.meta.url), 'utf8');
const apps = readFileSync(new URL('../web/src/apps.js', import.meta.url), 'utf8');

const jsNumber = (source, name) => {
  const match = source.match(new RegExp(`export const ${name} = (\\d+)`));
  assert.ok(match, `pclink/wire.mjs não define ${name}`);
  return Number(match[1]);
};

const kotlinInt = (source, name) => {
  // O Kotlin escreve as constantes como conta (648 = 88 + 2 × 280), e é bom que escreva: a conta é
  // a documentação do layout. Aqui ela é resolvida com as constantes já declaradas no arquivo.
  const match = source.match(new RegExp(`const val ${name} = ([^\\n]+)`));
  assert.ok(match, `PcLinkWire.kt não define ${name}`);
  const expression = match[1]
    .replace(/\/\/.*$/, '')
    .replace(/\b([A-Z][A-Z0-9_]*)\b/g, (_, constant) => String(kotlinInt(source, constant)))
    .replace(/[^0-9+*()\s-]/g, '');
  // Só aritmética inteira: se a expressão tiver outra coisa, o teste falha em vez de adivinhar.
  assert.ok(/^[0-9+*()\s-]+$/.test(expression), `${name} não é uma conta inteira: ${match[1]}`);
  const value = Function(`"use strict";return (${expression})`)();
  assert.equal(typeof value, 'number');
  return value;
};

test('as portas são as mesmas no JS e no Kotlin', () => {
  for (const name of ['DISCOVERY_PORT', 'CONTROL_PORT', 'VIDEO_PORT', 'TRACKING_PORT']) {
    assert.equal(kotlinInt(kotlin, name), jsNumber(wire, name), `${name} divergiu entre JS e Kotlin`);
  }
});

test('o pacote de rastreamento tem o mesmo tamanho dos dois lados', () => {
  // No JS o total é calculado a partir do cabeçalho e das mãos; no Kotlin, das mesmas partes.
  const header = jsNumber(wire, 'TRACKING_HEADER_BYTES');
  // No JS essas duas são somas de outras constantes; o valor é conferido logo abaixo.
  const handFloats = Number(wire.match(/export const PALM_FLOATS = (\d+)/)[1])
    + Number(wire.match(/export const JOINT_FLOATS = JOINT_COUNT \* (\d+)/)[1]) * jsNumber(wire, 'JOINT_COUNT');
  assert.equal(handFloats, 7 + 21 * 3, 'a mão são 7 floats de palma + 21 joints');
  assert.equal(kotlinInt(kotlin, 'HEADER_BYTES'), header);
  assert.equal(kotlinInt(kotlin, 'HAND_BYTES'), handFloats * 4);
  assert.equal(kotlinInt(kotlin, 'TRACKING_BYTES'), header + 2 * handFloats * 4);
  // 648 bytes: os dois números que aparecem na documentação.
  assert.equal(kotlinInt(kotlin, 'TRACKING_BYTES'), 648);
});

test('vídeo: mesmo cabeçalho, mesmo MTU, mesmos códigos de codec', () => {
  assert.equal(kotlinInt(kotlin, 'VIDEO_HEADER_BYTES'), jsNumber(wire, 'VIDEO_HEADER_BYTES'));
  assert.equal(kotlinInt(kotlin, 'VIDEO_MTU'), jsNumber(wire, 'VIDEO_MTU'));
  assert.equal(kotlinInt(kotlin, 'CODEC_H264'), 1);
  assert.equal(kotlinInt(kotlin, 'CODEC_HEVC'), 2);
  assert.equal(kotlinInt(kotlin, 'VERSION'), 1);
  assert.match(wire, /PROTOCOL_VERSION = 1/);
});

test('os flags do cabeçalho são os mesmos bits', () => {
  // Só os que o Kotlin usa para escrever: presença de cada mão, predição e confiança.
  const expected = {
    FLAG_HEAD: 0, FLAG_LEFT_PRESENT: 1, FLAG_RIGHT_PRESENT: 2,
    FLAG_LEFT_PREDICTED: 3, FLAG_RIGHT_PREDICTED: 4,
    FLAG_LEFT_CONFIDENT: 5, FLAG_RIGHT_CONFIDENT: 6,
  };
  for (const [name, bit] of Object.entries(expected)) {
    const kt = kotlin.match(new RegExp(`const val ${name} = 1 shl (\\d+)`));
    assert.ok(kt, `PcLinkWire.kt não define ${name}`);
    assert.equal(Number(kt[1]), bit);
    assert.ok(wire.includes(`export const ${name} = 1 << ${bit}`), `wire.mjs não usa o bit ${bit} em ${name}`);
  }
});

test('a janela do PC Link fala com a ponte nativa, sem número de fachada', () => {
  const start = apps.indexOf('/* ============================ PC Link');
  assert.ok(start > 0, 'a janela do PC Link não existe em apps.js');
  const section = apps.slice(start, apps.indexOf('function persistPcLinkHost'));

  // O estado vem da ponte (sockets, decodificador, último state do PC)...
  assert.ok(section.includes('pcLinkState?.()'), 'a janela não lê NativeXR.pcLinkState');
  assert.ok(/pcLinkCommand\?\.\([^)]*\)/.test(section), 'a janela não manda comandos para o nativo');
  assert.ok(section.includes('pcLinkVideo?.(on, w, h)'), 'a janela não liga o passe de olho do vídeo');
  // ...e a sessão só existe de verdade depois de pedida.
  assert.ok(section.includes("action: 'session'"), 'a janela não inicia/para sessão');
  assert.ok(section.includes("action: 'calibrate'"), 'a janela não manda a calibração');

  // Nada de valores de exemplo: FPS, latência e mãos saem do estado, não de constantes.
  assert.ok(!/fps\s*[:=]\s*\d/.test(section), 'a janela do PC Link tem um FPS fixo escrito à mão');
  assert.ok(!/latencyMs\s*[:=]\s*\d/.test(section), 'a janela do PC Link tem uma latência fixa escrita à mão');
});

test('a dock e o anel continuam com a mesma forma, e o PC Link caberia nela', () => {
  // A dock é 3/4/3 do anel e a biblioteca continuam intactas; o PC Link é um app do NextVR como
  // outro qualquer, então ele aparece no anel pela mesma tabela (ORB_OWN_APPS → LIB_ACTIONS).
  assert.ok(apps.includes('const ORB_OWN_APPS = LIB_APPS'));
  assert.ok(apps.includes("own: () => ORB_OWN_APPS"));
});

test('o PC Link está no catálogo, na dock e nas ações da biblioteca', () => {
  assert.ok(apps.includes("id:'pclink'"), 'o PC Link não está no catálogo da biblioteca');
  assert.ok(apps.includes('pclink:   () => pcLinkApp()'), 'a ação pclink não abre a janela');
  assert.ok(apps.includes("id: 'pclink', win: 'pclink'"), 'o PC Link não está na dock');
});

test('o README e a documentação dizem o que ainda NÃO está pronto', () => {
  const doc = readFileSync(new URL('../docs/PC-LINK.md', import.meta.url), 'utf8');
  // As três verdades que não podem sair do documento sem alguém decidir que saem.
  assert.match(doc, /XR_EXT_hand_tracking/);
  assert.match(doc, /adb forward/);
  assert.match(doc, /não foi (rodado|testado|verificado)|nada foi executado/i);
  assert.match(doc, /44701/);
  assert.match(doc, /31 ossos/);
});
