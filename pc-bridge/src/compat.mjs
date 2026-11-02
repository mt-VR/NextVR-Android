/**
 * O que o PC realmente tem: SteamVR, o driver do NextVR e o runtime OpenXR.
 *
 * Este arquivo existe por causa de uma frase do pedido: "não assumir que disponibilizar Skeletal
 * Input automaticamente disponibiliza XR_EXT_hand_tracking". Ele é a resposta honesta no lugar de
 * uma suposição:
 *
 *   • SteamVR instalado/rodando: olha a pasta de instalação e o processo (`tasklist`);
 *   • driver instalado: procura `drivers/nextvr/driver.vrdrivermanifest` e a DLL;
 *   • OpenXR: roda o `nextvr-openxr-probe.exe` (compilado junto do driver) que abre o loader do
 *     OpenXR, lê as extensões de instância do runtime ATIVO e devolve JSON. Sem o probe, o campo
 *     fica `null` = "não verificado" — nunca `true` por otimismo.
 */
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const run = promisify(execFile);
const here = dirname(fileURLToPath(import.meta.url));

const STEAMVR_CANDIDATES = [
  'C:\\Program Files (x86)\\Steam\\steamapps\\common\\SteamVR',
  'C:\\Program Files\\Steam\\steamapps\\common\\SteamVR',
  'D:\\SteamLibrary\\steamapps\\common\\SteamVR',
  'E:\\SteamLibrary\\steamapps\\common\\SteamVR',
];

/** Onde o SteamVR pode estar: a lista acima + `STEAMVR_HOME` + a dica do registro. */
export async function findSteamVR(env = process.env) {
  if (env.STEAMVR_HOME && existsSync(env.STEAMVR_HOME)) return env.STEAMVR_HOME;
  for (const candidate of STEAMVR_CANDIDATES) {
    if (existsSync(join(candidate, 'bin', 'win64', 'vrserver.exe'))) return candidate;
  }
  // Registro: o SteamVR grava o caminho na chave "SteamVR" quando instalado por lá.
  if (process.platform === 'win32') {
    try {
      const { stdout } = await run('reg', ['query', 'HKCU\\Software\\Valve\\Steam', '/v', 'SteamPath']);
      const match = stdout.match(/SteamPath\s+REG_SZ\s+(.+)/i);
      if (match) {
        const path = join(match[1].trim(), 'steamapps', 'common', 'SteamVR');
        if (existsSync(join(path, 'bin', 'win64', 'vrserver.exe'))) return path;
      }
    } catch { /* sem registro: segue com "não instalado" */ }
  }
  return null;
}

export async function isProcessRunning(name) {
  if (process.platform !== 'win32') return null;
  try {
    const { stdout } = await run('tasklist', ['/FI', `IMAGENAME eq ${name}`, '/NH']);
    return stdout.toLowerCase().includes(name.toLowerCase());
  } catch {
    return null;
  }
}

/** Extensões do runtime OpenXR ativo. `null` quando não deu para perguntar. */
export async function probeOpenXR({ probePath = join(here, '..', 'bin', 'nextvr-openxr-probe.exe') } = {}) {
  if (!existsSync(probePath)) {
    return { status: 'unknown', reason: 'probe-missing', handTracking: null, extensions: [] };
  }
  try {
    const { stdout } = await run(probePath, [], { timeout: 5000, windowsHide: true });
    const value = JSON.parse(stdout.trim().split('\n').pop());
    const extensions = Array.isArray(value.extensions) ? value.extensions : [];
    return {
      status: value.ok ? 'ok' : 'error',
      reason: value.reason || null,
      runtimeName: value.runtimeName || null,
      runtimeVersion: value.runtimeVersion || null,
      extensions,
      // Só é `true` se o runtime DECLAROU a extensão. Não é dedução a partir do Skeletal Input.
      handTracking: extensions.includes('XR_EXT_hand_tracking'),
    };
  } catch (error) {
    return { status: 'error', reason: error.message.slice(0, 120), handTracking: null, extensions: [] };
  }
}

/**
 * Retrato completo. É o que vai na resposta da descoberta e no `state` do controle.
 * `warnings` são frases prontas para a interface do celular.
 */
export async function collectCompat({ steamvrHome = null, probePath } = {}) {
  const home = steamvrHome || (await findSteamVR());
  const driverManifest = home ? join(home, 'drivers', 'nextvr', 'driver.vrdrivermanifest') : null;
  const driverDll = home ? join(home, 'drivers', 'nextvr', 'bin', 'win64', 'driver_nextvr.dll') : null;
  const driverInstalled = !!(driverManifest && existsSync(driverManifest) && driverDll && existsSync(driverDll));
  const running = await isProcessRunning('vrserver.exe');
  const openxr = await probeOpenXR(probePath ? { probePath } : {});

  const warnings = [];
  if (!home) warnings.push('SteamVR não encontrado neste PC.');
  else if (running === false) warnings.push('SteamVR está instalado mas não está aberto.');
  if (home && !driverInstalled) warnings.push('O NextVR SteamVR Driver não está instalado em drivers/nextvr.');
  if (openxr.handTracking === false) {
    warnings.push('O runtime OpenXR ativo não declara XR_EXT_hand_tracking: jogos OpenXR deste PC não recebem as mãos (Skeletal Input continua funcionando).');
  }
  if (openxr.handTracking === null) {
    warnings.push('Não foi possível verificar o XR_EXT_hand_tracking neste runtime (probe indisponível).');
  }

  return {
    steamvrHome: home,
    steamvr: running === true ? 'running' : home ? 'stopped' : 'not-installed',
    driver: driverInstalled ? '1.0.0' : null,
    driverInstalled,
    openxr: openxr.runtimeVersion || null,
    openxrRuntime: openxr.runtimeName || null,
    openxrHandTracking: openxr.handTracking,
    openxrProbe: openxr.status,
    extensions: openxr.extensions,
    warnings,
  };
}
