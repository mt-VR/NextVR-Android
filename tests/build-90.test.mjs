// Build 90 — Key de 22 caracteres, conta por e-mail, lanterna no escuro total, bolinha do teclado
// e a remoção da barra de brilho das janelinhas.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { ALPHABET, SECRET, KEY_LENGTH, buildKey, randomKey, isValidKey, normalizeKey as normalizeGen } from '../tools/gen-key.mjs';
import { normalizeKey, keyFormatProblem, formatKey, licenseMessage, KEY_ALPHABET, KEY_LENGTH as JS_KEY_LENGTH } from '../web/src/license.js';

const read = path => readFileSync(path, 'utf8');
const windowsSrc = () => read('web/src/windows.js');
const entrySrc = () => read('web/src/entry-menu.js');
const appsSrc = () => read('web/src/apps.js');
const nightSrc = () => read('web/src/night-camera.js');
const javaLicense = () => read('nextvr-android/src/main/java/com/nextvr/app/License.java');

test('Build 90: a Key has 22 characters signed with the game owner secret', () => {
  const key = randomKey();
  assert.equal(key.length, KEY_LENGTH);
  assert.equal(KEY_LENGTH, 22);
  assert.ok(isValidKey(key), 'a generated key validates');
  for (const c of key) assert.ok(ALPHABET.includes(c), `no ambiguous characters: ${c}`);

  // Um caractere trocado derruba a chave (é MAC, não um padrão).
  const broken = (key[0] === '0' ? '1' : '0') + key.slice(1);
  assert.ok(!isValidKey(broken), 'changing one character invalidates the key');

  // Qualquer 22 caracteres inventados não ativam nada.
  assert.ok(!isValidKey('ABCDEFGH12345678JKMN23'), 'random 22 characters are rejected');
  assert.ok(!isValidKey('12345'), 'short key is rejected');
  assert.ok(!isValidKey(''), 'empty key is rejected');

  // O gerador e o app precisam usar exatamente o mesmo segredo e alfabeto.
  const java = javaLicense();
  assert.ok(java.includes(SECRET), 'License.java uses the same secret as tools/gen-key.mjs');
  assert.ok(java.includes(`ALPHABET = "${ALPHABET}"`), 'same Crockford alphabet on both sides');
  assert.ok(java.includes('"ATMOXR-KEY-V1:"'), 'same MAC prefix');
  assert.ok(java.includes('HmacSHA256'), 'HMAC-SHA256, not a toy checksum');
  assert.ok(java.includes('KEY_LENGTH = 22'), 'the app enforces 22 characters');
});

test('Build 90: the key is bound to the phone and only needs typing once', () => {
  const java = javaLicense();
  assert.ok(java.includes('deviceTag()'), 'the license stores a device fingerprint');
  assert.ok(java.includes('Settings.Secure.ANDROID_ID') && java.includes('Build.FINGERPRINT'),
    'fingerprint = ANDROID_ID + Build.FINGERPRINT');
  assert.ok(java.includes('deviceTag().equals(bound)'), 'a license copied from another phone is refused');
  assert.ok(java.includes('reason", "aparelho"'), 'and says why');
  assert.ok(java.includes('K_SINCE'), 'activation date is kept');
  assert.ok(java.includes('SharedPreferences'), 'activation survives closing the app (only a reinstall clears it)');
  const activity = read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
  assert.ok(activity.includes('licenseStatus()') && activity.includes('activateKey(String key)'),
    'the shell bridge exposes the license');
});

test('Build 90: the Key panel takes 22 characters and reports what went wrong', () => {
  const entry = entrySrc();
  assert.ok(entry.includes('renderLicensePanel'), 'there is a Key panel');
  assert.ok(entry.includes('data-entry-key-input'), 'with an input');
  assert.ok(entry.includes('maxlength="${KEY_LENGTH + 6}"'), 'capped at 22 (plus the visual spaces)');
  assert.ok(entry.includes('data-entry-key-activate'), 'and an activate button');
  assert.ok(entry.includes('data-entry-key-status-text'), 'shows the state');
  assert.ok(entry.includes('deviceCode()'), 'shows the device code');
  assert.ok(entry.includes('data-entry-act="license"'), 'reachable from the entry cards');
  assert.ok(entry.includes('data-entry-key-count'), 'live character counter');

  // A normalização é a mesma do app: colar com espaço/hífen e O/I/L funciona.
  // O→0 e I/L→1, o resto fica como está (o alfabeto não tem I, L, O nem U).
  assert.equal(normalizeKey('abcd-efgh ijkm'), 'ABCDEFGH1JKM');
  assert.equal(normalizeGen('abcd-efgh ijkm'), 'ABCDEFGH1JKM');
  assert.equal(normalizeKey('oil u'), '011');
  assert.equal(JS_KEY_LENGTH, 22);
  assert.equal(KEY_ALPHABET, ALPHABET);
  assert.equal(formatKey('1234567890123456789012'), '1234 5678 9012 3456 7890 12');
  assert.equal(keyFormatProblem('curta'), 'curta');
  assert.equal(keyFormatProblem(''), 'vazia');
  assert.equal(keyFormatProblem(buildKey('ABCDEFGH12345678')), null);
  assert.match(licenseMessage('aparelho'), /outro celular/i);
  assert.match(licenseMessage('invalida'), /inválida/i);
});

test('Build 90: the flashlight retries until the camera reports a flash, and dark hands are boosted', () => {
  const night = nightSrc();
  assert.ok(night.includes('if (torchAvailable) return true;'),
    'the capability check is repeated instead of cached as "no flash"');
  assert.ok(night.includes('setTorch'), 'the shell drives the flash');

  const camera = read('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java');
  assert.ok(camera.includes('gainForLuma'), 'the analysis frame gets a night gain');
  assert.ok(camera.includes('boost(analysisPixels'), 'only the hand-tracking frame is boosted');
  assert.ok(camera.includes('Math.min(3.2f'), 'bounded gain (no white blob)');
  // O ganho NÃO pode entrar no quadro do passthrough (a camera noturna já cuida dele no shader).
  assert.ok(!/boost\(cameraPixels/.test(camera), 'the passthrough pixels stay untouched');

  const math = read('web/src/night-camera-math.js');
  assert.ok(math.includes('export const NO_LIGHT = 0.16'), 'near-total darkness threshold');
});

test('Build 90: the keyboard has a small ball next to the white bar', () => {
  const src = windowsSrc();
  assert.ok(src.includes("ball.dataset.kbBall = '1'"), 'the ball is a real element');
  assert.ok(src.includes("closest?.('[data-kb-ball]')"), 'the hand ray reaches it');
  assert.ok(src.includes('kbBallTap'), 'a tap is told apart from a drag');
  assert.ok(src.includes('if (wasTap) keyboard(false);'), 'tapping the ball closes the floating keyboard');
  assert.ok(src.includes('if (kb.ball) { kbBallTap = true; startKbDrag(px, py); return; }'),
    'dragging the ball moves the keyboard like the white bar');
  assert.ok(read('web/index.html').includes('.kb-ball{'), 'the ball is styled next to the bar');
});

test('Build 90: the per-window brightness slider is gone', () => {
  const src = windowsSrc();
  assert.ok(!src.includes('class="win-bri-range"'), 'no brightness range is built any more');
  assert.ok(!src.includes('briInput.addEventListener'), 'no listener either');
  assert.ok(src.includes('win-brightness-off'), 'the old slot is kept but disabled');
  assert.ok(read('web/index.html').includes('.win-brightness-off{display:none!important}'), 'and hidden');
});

test('Build 90: the account e-mail links Discord, TikTok, Google and YouTube', () => {
  const entry = entrySrc();
  for (const id of ['discord', 'tiktok', 'google', 'youtube']) {
    assert.ok(entry.includes(`{ id: '${id}'`), `${id} is offered`);
  }
  assert.ok(entry.includes('data-account-email'), 'there is an e-mail field');
  assert.ok(entry.includes('S.accountEmail'), 'the e-mail is stored in the profile');
  assert.ok(entry.includes("emit('account-link'"), 'tapping a service opens it');
  assert.ok(appsSrc().includes("on('account-link'"), 'the shell opens the real login page');
  const core = read('web/src/core.js');
  assert.ok(core.includes("accountEmail: ''") && core.includes("accountLinks: ''"), 'settings carry the account');
});
