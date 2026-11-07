import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

/**
 * A sonda do OpenXR e o CMake do driver.
 *
 * A sonda é o único arquivo deste repositório que responde uma pergunta que o pedido fez
 * explicitamente ("não assumir que Skeletal Input implica XR_EXT_hand_tracking") — e ela é código
 * Windows. Aqui ela é compilada em Linux contra um `<windows.h>` mínimo: pega erro de digitação e de
 * tipo, não substitui o MSVC. O que este teste garante é que a sonda não fica órfã: compila, está no
 * CMake, e o Bridge continua procurando o executável pelo nome certo.
 */

const probe = readFileSync(
  new URL('../steamvr-driver/tools/openxr_probe.cpp', import.meta.url), 'utf8');
const cmake = readFileSync(new URL('../steamvr-driver/CMakeLists.txt', import.meta.url), 'utf8');
const compat = readFileSync(new URL('../pc-bridge/src/compat.mjs', import.meta.url), 'utf8');

test('a sonda compila (sintaxe, ramo Windows, com um windows.h mínimo)', () => {
  const script = fileURLToPath(new URL('../tools/openxr-probe-syntax.mjs', import.meta.url));
  // `g++` pode não existir em toda máquina que roda a suíte; nesse caso o teste avisa e passa — o
  // build de verdade é o CMake no Windows, e um teste que falha por falta de compilador é ruído.
  let output = '';
  try {
    output = execFileSync(process.execPath, [script], { encoding: 'utf8', stdio: 'pipe' });
  } catch (error) {
    if (/ENOENT|spawn g\+\+/i.test(String(error.stderr || error.message)) || error.status === 127) {
      output = 'sem compilador: checagem de sintaxe ignorada';
    } else {
      assert.fail(`a sonda não compila:\n${error.stdout || ''}${error.stderr || ''}`);
    }
  }
  assert.match(output, /sintaxe OK|ignorada/);
});

test('a sonda pergunta ao runtime ativo, sem incluir o SDK do OpenXR', () => {
  // A pergunta é feita pelo loader do sistema: nada de link estático contra uma versão do runtime.
  assert.match(probe, /openxr_loader\.dll/);
  assert.match(probe, /SOFTWARE\\\\Khronos\\\\OpenXR\\\\1/, 'lê o ActiveRuntime do registro do Khronos');
  assert.match(probe, /xrEnumerateInstanceExtensionProperties/);
  // A saída é uma linha JSON, que é o que `pc-bridge/src/compat.mjs` faz o parse.
  assert.match(probe, /"ok":true/);
  assert.ok(!/#include <openxr\/openxr\.h>/.test(probe), 'não pode depender do SDK do OpenXR');
});

test('a sonda é compilada pelo CMake e procurada pelo Bridge com o mesmo nome', () => {
  assert.match(cmake, /add_executable\(nextvr-openxr-probe tools\/openxr_probe\.cpp\)/);
  assert.match(compat, /nextvr-openxr-probe\.exe/);
  // E o Bridge não transforma ausência em "não suportado": sem a sonda o campo é null.
  assert.match(compat, /handTracking: null, extensions: \[\]/);
});
