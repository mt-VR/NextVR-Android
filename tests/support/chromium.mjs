// Um Chromium só, para toda a suíte.
//
// `node --test` roda cada arquivo em um processo próprio, e `@sparticuz/chromium` descompacta o
// binário no MESMO caminho (/tmp/chromium). Sem serializar a descompactação, um processo executa o
// arquivo enquanto outro ainda escreve nele: o resultado é `ETXTBSY`, o `launch` falha e o arquivo
// inteiro de testes é pulado em silêncio — uma suíte verde que não testou nada. Aqui a
// descompactação passa por um lock (mkdir atômico) e o launch repete enquanto o erro for de arquivo
// em uso.
import { mkdir, rm } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';

const LOCK = `${process.env.TMPDIR || '/tmp'}/nextvr-chromium-extract.lock`;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function withExtractionLock(run) {
  let owned = false;
  for (let attempt = 0; attempt < 1200; attempt++) {
    try { await mkdir(LOCK); owned = true; break; }
    catch (err) {
      if (err.code !== 'EEXIST') break;
      // Um dono que morreu não pode travar a suíte para sempre.
      if (attempt === 900) await rm(LOCK, { recursive: true, force: true }).catch(() => {});
      await sleep(50);
    }
  }
  try { return await run(); }
  finally { if (owned) await rm(LOCK, { recursive: true, force: true }).catch(() => {}); }
}

let executablePromise = null;
/** Caminho do Chromium empacotado, com a descompactação serializada entre os processos. */
export function chromiumExecutable() {
  executablePromise ||= withExtractionLock(() => bundledChromium.executablePath());
  return executablePromise;
}

const RETRY = /ETXTBSY|EBUSY|EAGAIN|Text file busy/i;
// Falta de biblioteca do sistema é definitiva: depois da primeira, os outros testes do arquivo não
// precisam pagar o timeout do Playwright de novo.
const ENVIRONMENTAL = /shared libraries|cannot open shared object|libnss|libnspr|libatk|libgbm|No such file or directory/i;
let environmentFailure = null;

/** Abre o Chromium empacotado repetindo os erros transitórios de arquivo em uso. */
export async function launchChromium({ attempts = 5, ...options } = {}) {
  if (environmentFailure) throw environmentFailure;
  const executablePath = await chromiumExecutable();
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      return await chromium.launch({ executablePath, args: bundledChromium.args, headless: true, ...options });
    } catch (err) {
      lastError = err;
      const message = String(err?.message || err);
      if (!RETRY.test(message)) {
        if (ENVIRONMENTAL.test(message)) environmentFailure = err;
        break;
      }
      await sleep(200 * (attempt + 1));
    }
  }
  throw lastError;
}

/** Abre o Chromium ou pula o teste quando a máquina realmente não tem como rodá-lo. */
export async function launchOrSkip(t, options) {
  try {
    return await launchChromium(options);
  } catch (err) {
    t.skip('Chromium unavailable: ' + String(err?.message || err).slice(0, 120));
    return null;
  }
}
