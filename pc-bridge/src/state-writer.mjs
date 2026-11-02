/**
 * Publica o estado do rastreamento no arquivo que o driver do SteamVR lê (744 bytes).
 *
 * O driver não fala rede: ele mapeia este arquivo e lê no `RunFrame`, a 90 Hz. Escrever aqui é o
 * único lugar do Bridge que roda no caminho crítico do rastreamento — por isso reaproveita o buffer,
 * não faz `fsync` (o cache de página já entrega ao leitor no mesmo instante) e nunca espera nada.
 */
import { closeSync, mkdirSync, openSync, writeSync } from 'node:fs';
import { dirname } from 'node:path';
import { STATE_BYTES, encodeState } from '../../pclink/state.mjs';

export function defaultStatePath(env = process.env) {
  if (env.NEXTVR_PCLINK_STATE) return env.NEXTVR_PCLINK_STATE;
  if (process.platform === 'win32') {
    return `${env.LOCALAPPDATA || `${env.SystemDrive || 'C:'}\\Windows\\Temp`}\\NextVR\\pclink-state.bin`;
  }
  return '/tmp/nextvr-pclink-state.bin';
}

export class StateWriter {
  constructor(path = defaultStatePath()) {
    this.path = path;
    this.buffer = Buffer.alloc(STATE_BYTES);
    this.fd = null;
    this.sequence = 0;
    this.writes = 0;
    this.failures = 0;
    this.lastError = null;
  }

  open() {
    try {
      mkdirSync(dirname(this.path), { recursive: true });
      // `w+` trunca na abertura: um arquivo de uma sessão anterior não pode ser lido como estado
      // atual pelo driver antes da primeira escrita desta sessão.
      this.fd = openSync(this.path, 'w+');
      // O driver mapeia o arquivo no tamanho do bloco; criar com o tamanho desde já evita que ele
      // mapeie 0 bytes nos primeiros milissegundos.
      writeSync(this.fd, Buffer.alloc(STATE_BYTES), 0, STATE_BYTES, 0);
      return true;
    } catch (error) {
      this.lastError = error.message;
      this.fd = null;
      return false;
    }
  }

  /** Grava o estado. Devolve `false` quando o arquivo não está disponível. */
  write(state) {
    if (this.fd === null) return false;
    try {
      const view = encodeState({ ...state, sequence: ++this.sequence }, this.buffer);
      writeSync(this.fd, view, 0, STATE_BYTES, 0);
      this.writes++;
      return true;
    } catch (error) {
      this.failures++;
      this.lastError = error.message;
      return false;
    }
  }

  close() {
    if (this.fd !== null) {
      try { closeSync(this.fd); } catch { /* já fechado */ }
      this.fd = null;
    }
  }
}
