#!/usr/bin/env node
// Gerador de Keys do ATMO XR (Build 90) — só o dono do jogo roda isto.
//
//   node tools/gen-key.mjs          -> 1 chave
//   node tools/gen-key.mjs 4        -> 4 chaves
//
// A chave tem 22 caracteres do alfabeto Crockford base32 (0-9 e A-Z sem I, L, O, U):
//   16 caracteres de identificador + 6 de MAC.
//   MAC = HMAC-SHA256(SEGREDO, "ATMOXR-KEY-V1:" + identificador) -> primeiros 30 bits -> 6 chars.
//
// O MESMO segredo e o MESMO prefixo estão em
// nextvr-android/src/main/java/com/nextvr/app/License.java — se mudar um, mude o outro, senão todas
// as chaves emitidas param de ativar (o que é intencional: trocar o segredo revoga o lote inteiro).
import { createHmac, randomInt } from 'node:crypto';

export const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
export const SECRET = 'ATMOXR-KEY-V1-9f3c1d7b6a2e5f80b4c9d1e2a7f36b58c0d4e6a9b';
export const MAC_PREFIX = 'ATMOXR-KEY-V1:';
export const KEY_LENGTH = 22;
const PAYLOAD_LENGTH = 16;
const MAC_LENGTH = 6;

/** Deixa a chave no formato canônico: maiúsculas, sem espaços e sem letras ambíguas. */
export function normalizeKey(raw) {
  let out = '';
  for (let c of String(raw || '').toUpperCase()) {
    if (c === 'O') c = '0';
    else if (c === 'I' || c === 'L') c = '1';
    if (ALPHABET.includes(c)) out += c;
    if (out.length === KEY_LENGTH) break;
  }
  return out;
}

export function macOf(payload) {
  const digest = createHmac('sha256', SECRET).update(MAC_PREFIX + payload).digest();
  const bits = (digest[0] << 24) | (digest[1] << 16) | (digest[2] << 8) | digest[3];
  let out = '';
  for (let i = 0; i < MAC_LENGTH; i++) out += ALPHABET[(bits >>> (25 - i * 5)) & 0x1f];
  return out;
}

export function buildKey(payload) {
  const body = normalizeKey(payload).padEnd(PAYLOAD_LENGTH, '0').slice(0, PAYLOAD_LENGTH);
  return body + macOf(body);
}

export function randomKey() {
  let payload = '';
  for (let i = 0; i < PAYLOAD_LENGTH; i++) payload += ALPHABET[randomInt(ALPHABET.length)];
  return buildKey(payload);
}

/** Validação idêntica à do app (usada nos testes). */
export function isValidKey(raw) {
  const key = normalizeKey(raw);
  if (key.length !== KEY_LENGTH) return false;
  return macOf(key.slice(0, PAYLOAD_LENGTH)) === key.slice(PAYLOAD_LENGTH);
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  const count = Math.max(1, Math.min(50, Number(process.argv[2] || 1)));
  for (let i = 0; i < count; i++) {
    const key = randomKey();
    if (!isValidKey(key)) throw new Error('gerador produziu uma chave inválida: ' + key);
    console.log(key);
  }
}
