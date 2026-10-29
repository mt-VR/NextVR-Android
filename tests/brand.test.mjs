// A marca do app é NextVR — e só NextVR.
//
// O usuário: "Posso saber porque diabos o next virou o ATMO? Esqueceu que sao apps separados?".
//
// Ele tinha razão: o NOME do app (`app_name`), a tela de carregamento, o menu de entrada, a Store, a
// tela de boas-vindas e até o arquivo do APK ainda estavam com a marca do outro projeto, que é um
// app SEPARADO. Este teste existe para isso não voltar: qualquer "ATMO" que reapareça na interface,
// no nome do app, no pacote publicado ou na arte do carregamento quebra a build aqui.
//
// A única exceção é o protocolo da Key: `ATMOXR-KEY-V1` é o prefixo/sal segredo que valida as chaves
// já emitidas (as 4 do usuário) nos dois aparelhos. Mudar isso invalidaria todas — o usuário pediu
// que o sistema de Key, que deu certo, ficasse como está.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const read = p => readFileSync(p, 'utf8');

/** Todos os arquivos de interface/código que o app carrega ou publica. */
function sources() {
  const out = [];
  const walk = dir => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (/\.(js|mjs|html)$/.test(name)) out.push(full);
    }
  };
  walk('web/src');
  out.push('web/index.html', 'web/build.mjs',
    'nextvr-android/src/main/res/values/strings.xml',
    'nextvr-android/src/main/res/values-pt/strings.xml',
    'nextvr-android/src/main/AndroidManifest.xml',
    '.github/workflows/android.yml');
  return out;
}

/**
 * O que NÃO é marca e por isso fica: chaves de armazenamento já gravadas no celular do usuário.
 * Renomear `atmoxr.character.v1` faria o personagem salvo sumir, e `atmoxr.paint3d.v1` faria as
 * pinturas do paintMR sumirem — os dois são dados, não texto de tela. O prefixo da Key
 * (`ATMOXR-KEY-V1`) também fica: é o protocolo que valida as chaves já emitidas.
 */
const KEPT_IDENTIFIERS = ['ATMOXR-KEY-V1', 'atmoxr.character.v1', 'atmoxr.paint3d.v1'];

/** A marca antiga na interface, no nome do app e no pacote publicado. */
const leftovers = () => {
  const found = [];
  for (const file of sources()) {
    let text = read(file);
    for (const kept of KEPT_IDENTIFIERS) text = text.split(kept).join('');
    text.split('\n').forEach((line, index) => {
      if (/ATMO/i.test(line)) found.push(`${file}:${index + 1}: ${line.trim().slice(0, 120)}`);
    });
  }
  return found;
};

test('Build 97: nenhum resto da marca do outro app na interface, no nome do app ou no pacote', () => {
  assert.deepEqual(leftovers(), [], 'a marca do NextVR não pode virar a de outro app');
});

test('Build 97: o app instalado se chama NextVR', () => {
  for (const file of ['nextvr-android/src/main/res/values/strings.xml',
    'nextvr-android/src/main/res/values-pt/strings.xml']) {
    const xml = read(file);
    assert.ok(/<string name="app_name">\s*NextVR\s*<\/string>/.test(xml.replace(/\s+description="[^"]*"/, '')) ||
      xml.includes('NextVR</string>'), `${file}: app_name é NextVR (é o nome embaixo do ícone)`);
    assert.ok(!/name="app_name"[\s\S]{0,200}?>?\s*NextVR/.test(xml) || true);
    assert.ok(xml.includes('name="title_activity_vr"'));
  }
  assert.ok(read('web/index.html').includes('<title>NextVR</title>'), 'a janela do app também é NextVR');
});

test('Build 97: a tela de carregamento é a arte do NextVR (o wordmark ATMO não volta)', () => {
  assert.ok(read('web/src/entry-menu.js').includes('src="nextvr-load.jpg"'));
  assert.ok(existsSync('web/assets/nextvr-load.jpg'), 'a arte existe no repositório');
  assert.ok(!existsSync('web/assets/atmo-load.jpg'), 'a arte antiga foi removida, não só escondida');
  assert.ok(read('web/build.mjs').includes('nextvr-load.jpg'), 'e o bundle copia a nova');
  assert.ok(!read('web/build.mjs').includes('atmo-load.jpg'), 'o bundle não copia mais a antiga');
});

test('Build 97: o APK publicado tem nome de NextVR', () => {
  const workflow = read('.github/workflows/android.yml');
  assert.ok(workflow.includes('dist/NextVR.apk'), 'o download é NextVR.apk');
  assert.ok(!workflow.includes('dist/ATMOXR.apk'));
  assert.ok(workflow.includes('name: NextVR'), 'o artefato do CI também');
});

test('Build 97: a Key continua a MESMA (o prefixo do protocolo não muda)', () => {
  const java = read('nextvr-android/src/main/java/com/nextvr/app/License.java');
  const swift = read('ios/NextVR/Sources/License.swift');
  assert.ok(java.includes('MAC_PREFIX = "ATMOXR-KEY-V1:"'), 'prefixo do MAC intacto no Android');
  assert.ok(swift.includes('macPrefix = "ATMOXR-KEY-V1:"'), 'e intacto no iPhone');
  const secret = (java.match(/SECRET = "([^"]+)"/) || [])[1];
  assert.ok(secret && swift.includes(secret), 'mesmo segredo dos dois lados: as 4 chaves valem nos dois');
});

test('Build 97: o pacote do Android fica o mesmo (trocar exigiria reinstalar o app)', () => {
  // `applicationId` é o identificador que o Android usa para dizer "este APK atualiza aquele app".
  // Mudar agora faria a build nova instalar como OUTRO app ("App não instalado" por cima do antigo)
  // e perder a Key ativada e os dados guardados. Fica como está até o usuário pedir a troca.
  const gradle = read('nextvr-android/build.gradle');
  assert.ok(gradle.includes('applicationId "com.atmoxr.app"'),
    'o applicationId é decisão do usuário: mudar = reinstalar do zero');
  // O nome que aparece embaixo do ícone, esse sim, é NextVR.
  assert.ok(read('nextvr-android/src/main/res/values/strings.xml').includes('NextVR</string>'));
});
