/*
 * Camera noturna (Build 89).
 *
 * O usuario pediu: "ve se quando estiver escuro, o jogo meio que ativa uma camera noturna".
 *
 * Quem mede a luz e' o lado nativo: a cada quadro da camera o PassthroughCamera calcula a
 * luminosidade media (0..1) e o shell le esse numero por `NativeXR.cameraLuma()`. Aqui esse valor
 * e' suavizado (o passthrough treme e uma luz acesa nao pode desligar o modo) e comparado com dois
 * limiares, com histerese: liga abaixo de 0.20, desliga acima de 0.30. Ligar significa duas coisas:
 * `NativeXR.setNightCamera(true)`, que levanta o ganho no shader do passthrough E manda +EV /
 * noise reduction HIGH_QUALITY para o Camera2.
 *
 * Modos (`S.nightCamera`): 'auto' (padrao), 'on' e 'off'.
 */
import { settings as S, save, on, emit, native } from './core.js';
import { decideNightCamera } from './night-camera-math.js';

// Reexportado para quem ja' conhecia a funcao por este modulo (e para os testes).
export { decideNightCamera };

const POLL_MS = 1200;

let installed = false;
let timer = 0;
let smooth = -1;          // -1 = ainda sem leitura
let active = false;
let lastLevel = -1;

const mode = () => (S.nightCamera === 'on' || S.nightCamera === 'off') ? S.nightCamera : 'auto';

/** Estado atual, para o menu de configuracoes e para os testes. */
export const nightCameraState = () => ({
  mode: mode(),
  active,
  level: lastLevel,
  smooth: smooth < 0 ? null : smooth,
});

function apply(next) {
  if (next === active) return;
  active = next;
  try {
    if (native) window.NativeXR?.setNightCamera?.(next);
  } catch {}
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    if (next) root.dataset.nightCamera = '1';
    else delete root.dataset.nightCamera;
  }
  emit('night-camera', nightCameraState());
}

function readLevel() {
  try {
    const raw = window.NativeXR?.cameraLuma?.();
    const value = typeof raw === 'string' ? Number(raw) : raw;
    if (!Number.isFinite(value) || value < 0) return -1;
    return Math.max(0, Math.min(1, value));
  } catch {
    return -1;
  }
}

function sample() {
  const wanted = mode();
  if (wanted === 'off') { apply(false); return; }
  if (wanted === 'on') { apply(true); return; }
  const level = readLevel();
  if (level < 0) return;                 // sem camera (preview de desktop): nao ha o que medir
  lastLevel = level;
  const result = decideNightCamera(level, smooth, active);
  smooth = result.smooth;
  if (result.changed) apply(result.active);
}

/** Liga a vigilancia da luz. Idempotente: o app pode chamar mais de uma vez sem duplicar timers. */
export function installNightCamera() {
  if (installed) return;
  installed = true;
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    if (S.nightCamera === 'on') root.dataset.nightCamera = '1';
  }
  sample();
  timer = setInterval(sample, POLL_MS);
  // Trocar o modo nas configuracoes vale na hora, sem esperar a proxima leitura.
  on('night-camera-mode', () => {
    smooth = -1;
    lastLevel = -1;
    sample();
    if (mode() === 'off') apply(false);
  });
  return timer;
}

export function setNightCameraMode(next) {
  const value = (next === 'on' || next === 'off') ? next : 'auto';
  S.nightCamera = value;
  save(S);
  emit('night-camera-mode', value);
  return value;
}

if (typeof window !== 'undefined') {
  window.nextvrNightCameraState = nightCameraState;
  window.nextvrSetNightCameraMode = setNightCameraMode;
}
