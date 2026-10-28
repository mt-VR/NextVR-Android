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
import { decideNightCamera, decideTorch } from './night-camera-math.js';

// Reexportados para quem ja' conhecia as funcoes por este modulo (e para os testes).
export { decideNightCamera, decideTorch };

const POLL_MS = 1200;

let installed = false;
let timer = 0;
let smooth = -1;          // -1 = ainda sem leitura
let active = false;
let lastLevel = -1;
/* Lanterna (Build 89). O estado e os contadores vivem aqui; quem acende de verdade e' o lado
 * nativo (NativeXR.setTorch). Ver `decideTorch` em night-camera-math.js para as travas anti-pisca. */
let torchOn = false;
// Estado completo da decisão (inclui a calibração da luz da própria lanterna — Build 91).
let torchTimes = { onSince: -1, offSince: -1, dark: 0, bright: 0, baseline: -1, selfGain: -1, cycles: 0, parkUntil: -1 };

let torchAmbient = null;
let torchReason = '';
// Leitura própria da lanterna, com suavização mais rápida que a do modo noturno: a decisão do
// flash precisa reagir em poucos segundos, não em dezenas.
let torchSmooth = -1;
const torchIdle = () => ({ onSince: -1, offSince: -1, dark: 0, bright: 0, baseline: -1, selfGain: -1, cycles: 0, parkUntil: -1 });
const resetTorchState = () => {
  torchTimes = torchIdle();
  torchSmooth = -1;
  torchAmbient = null;
  torchReason = '';
};

const mode = () => (S.nightCamera === 'on' || S.nightCamera === 'off') ? S.nightCamera : 'auto';

/**
 * O aparelho tem lanterna? Sem camera (preview de desktop) o resultado nunca importa.
 *
 * Importante (Build 90): a resposta so' fica boa DEPOIS que a camera abriu — antes disso o lado
 * nativo ainda nao leu `FLASH_INFO_AVAILABLE`. A versao anterior perguntava uma vez no boot e
 * guardava "nao tem flash" para sempre, e era por isso que a lanterna nao acendia no escuro.
 * Agora a pergunta e' repetida enquanto a resposta for "nao".
 */
let torchAvailable = false;
function detectTorch() {
  if (torchAvailable) return true;
  try {
    const has = window.NativeXR?.torchAvailable?.();
    torchAvailable = has === true || has === 'true';
  } catch { torchAvailable = false; }
  return torchAvailable;
}

/** Acende/apaga a lanterna no lado nativo (uma vez por mudanca de estado). */
function setTorch(next) {
  const value = !!next;
  if (value === torchOn) return;
  torchOn = value;
  try { window.NativeXR?.setTorch?.(value); } catch {}
  if (typeof document !== 'undefined') {
    if (value) document.documentElement.dataset.torch = '1';
    else delete document.documentElement.dataset.torch;
  }
  emit('night-camera', nightCameraState());
}

/** Estado atual, para o menu de configuracoes e para os testes. */
export const nightCameraState = () => ({
  mode: mode(),
  active,
  level: lastLevel,
  smooth: smooth < 0 ? null : smooth,
  torch: torchOn,
  torchAuto: S.torchAuto !== 0,
  torchAvailable,
  // Build 91: luz do ambiente já descontando a luz da própria lanterna, e o motivo da última decisão.
  torchAmbient,
  torchReason,
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
  if (wanted === 'off') {
    apply(false);
    setTorch(false);
    resetTorchState();
    return;
  }
  const level = readLevel();
  if (level >= 0) lastLevel = level;

  if (wanted === 'on') {
    apply(true);
  } else if (level >= 0) {
    // Modo automatico da camera noturna (ganho do passthrough), com histerese.
    const result = decideNightCamera(level, smooth, active);
    smooth = result.smooth;
    // Build 91: com a lanterna acesa a leitura alta é da PRÓPRIA lanterna. Se o modo noturno
    // reagisse a ela, ele desligaria o +EV, o escuro voltaria e os dois ficariam brigando (mais
    // um motivo de piscada). Então, enquanto o flash estiver aceso, o modo noturno fica travado
    // onde estava e só volta a decidir quando o flash apagar.
    if (result.changed && !torchOn) apply(result.active);
  }

  // Build 91: com a lanterna acesa o ganho noturno sai de cena. Somar +EV ao flash estoura a
  // imagem, atrapalha o hand tracking e — pior — cega a própria medição que decide se a luz do
  // ambiente voltou. A luz, ali, já vem do flash.
  if (torchOn && active && wanted === 'auto') apply(false);

  // Lanterna: independe do ganho do passthrough. So' acende quando nao ha luz nenhuma e apaga
  // quando a luz volta — com as travas de tempo do `decideTorch` para nunca piscar.
  if (S.torchAuto === 0) { setTorch(false); resetTorchState(); return; }
  if (level < 0) return;                       // sem leitura: nao mexe no flash
  if (!detectTorch()) { setTorch(false); resetTorchState(); return; }
  const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
  torchSmooth = torchSmooth < 0 ? level : torchSmooth * 0.5 + level * 0.5;
  const decision = decideTorch(torchSmooth, torchOn, torchTimes, now);
  // Guarda TODO o estado: sem `baseline`/`selfGain`/`cycles` a calibração e o anti-pisca por
  // histórico se perderiam a cada leitura.
  torchTimes = {
    onSince: decision.onSince,
    offSince: decision.offSince,
    dark: decision.dark,
    bright: decision.bright,
    baseline: decision.baseline,
    selfGain: decision.selfGain,
    cycles: decision.cycles,
    parkUntil: decision.parkUntil,
  };
  torchAmbient = decision.ambient;
  torchReason = decision.reason;
  if (decision.changed) setTorch(decision.torchOn);
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
  detectTorch();
  on('night-camera-mode', () => {
    smooth = -1;
    lastLevel = -1;
    resetTorchState();
    sample();
    if (mode() === 'off') { apply(false); setTorch(false); }
  });
  // Desligar a lanterna automatica apaga o flash na hora.
  on('torch-auto', () => { if (S.torchAuto === 0) setTorch(false); sample(); });
  return timer;
}

export function setNightCameraMode(next) {
  const value = (next === 'on' || next === 'off') ? next : 'auto';
  S.nightCamera = value;
  save(S);
  emit('night-camera-mode', value);
  return value;
}

/** Liga/desliga a lanterna automatica (o controle fica nas configuracoes). */
export function setTorchAuto(next) {
  S.torchAuto = next ? 1 : 0;
  save(S);
  emit('torch-auto', S.torchAuto);
  return S.torchAuto;
}

if (typeof window !== 'undefined') {
  window.nextvrNightCameraState = nightCameraState;
  window.nextvrSetNightCameraMode = setNightCameraMode;
  window.nextvrSetTorchAuto = setTorchAuto;
  window.nextvrSetTorch = enabled => { setTorch(enabled); return torchOn; };
}
