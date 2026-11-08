// Efeitos sonoros do XFC sintetizados com WebAudio — nada de arquivos, nada
// de rede: assobio do árbitro, festa da torcida, batida da bola e clique de UI.
//
// O áudio só destrava depois de um gesto do usuário (política dos navegadores
// e do WebView do Android): o primeiro toque/clique/tecla destrava o contexto.

let context = null;
let unlocked = false;

function ac() {
  if (typeof window === 'undefined') return null;
  if (!context) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    context = new AudioContext();
  }
  if (context.state === 'suspended') context.resume();
  return context;
}

/** Desbloqueia o áudio no primeiro gesto do usuário. */
export function unlockAudio() {
  if (unlocked) return;
  const audio = ac();
  if (audio) {
    unlocked = true;
    // Um toque silencioso para garantir o destravamento no Android.
    const gain = audio.createGain();
    gain.gain.value = 0.0001;
    gain.connect(audio.destination);
    const osc = audio.createOscillator();
    osc.frequency.value = 440;
    osc.connect(gain);
    osc.start();
    osc.stop(audio.currentTime + 0.02);
  }
}

function envGain(audio, { attack = 0.01, decay = 0.2, peak = 0.5 } = {}) {
  const gain = audio.createGain();
  const now = audio.currentTime;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(peak, now + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay);
  gain.connect(audio.destination);
  return gain;
}

/** Apito do árbitro. type: 'short' | 'long' | 'double' | 'triple'. */
export function whistle(type = 'short') {
  const audio = ac();
  if (!audio) return;
  const blasts = type === 'long' ? [[0, 1.15]]
    : type === 'double' ? [[0, 0.16], [0.22, 0.16]]
    : type === 'triple' ? [[0, 0.14], [0.19, 0.14], [0.38, 0.34]]
    : [[0, 0.32]];
  for (const [offset, duration] of blasts) {
    const now = audio.currentTime + offset;
    const osc = audio.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(2350, now);
    osc.frequency.linearRampToValueAtTime(2100, now + duration);
    // Vibrato de apito de verdade.
    const vibrato = audio.createOscillator();
    vibrato.frequency.value = 42;
    const vibratoGain = audio.createGain();
    vibratoGain.gain.value = 90;
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);
    const band = audio.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 2400;
    band.Q.value = 6;
    const gain = audio.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.015);
    gain.gain.setValueAtTime(0.22, now + duration - 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(band);
    band.connect(gain);
    gain.connect(audio.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
    vibrato.start(now);
    vibrato.stop(now + duration + 0.02);
  }
}

/** Festa da torcida: ruído em rajada com corpo grave, como a arquibancada vibrando. */
export function cheer({ duration = 2.4, peak = 0.5 } = {}) {
  const audio = ac();
  if (!audio) return;
  const now = audio.currentTime;
  const bufferSize = audio.sampleRate * duration;
  const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize * 0.55);
  }
  const noise = audio.createBufferSource();
  noise.buffer = buffer;

  const band = audio.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.setValueAtTime(500, now);
  band.frequency.exponentialRampToValueAtTime(950, now + 0.35);
  band.frequency.exponentialRampToValueAtTime(350, now + duration);
  band.Q.value = 0.9;

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(peak, now + 0.22);
  gain.gain.setValueAtTime(peak, now + duration * 0.55);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  noise.connect(band);
  band.connect(gain);
  gain.connect(audio.destination);
  noise.start(now);
  noise.stop(now + duration);

  // Pompas rítmicas de "olé" por cima da massa.
  for (let thump = 0; thump < 6; thump += 1) {
    const at = now + 0.3 + thump * (duration / 6.5) + Math.random() * 0.12;
    const osc = audio.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(90 + Math.random() * 40, at);
    const thumpGain = audio.createGain();
    thumpGain.gain.setValueAtTime(0.0001, at);
    thumpGain.gain.exponentialRampToValueAtTime(0.16, at + 0.02);
    thumpGain.gain.exponentialRampToValueAtTime(0.0001, at + 0.22);
    osc.connect(thumpGain);
    thumpGain.connect(audio.destination);
    osc.start(at);
    osc.stop(at + 0.25);
  }
}

/** Batida seca da bola (chute/passe). strength: 0..1 */
export function kickSound(strength = 0.6) {
  const audio = ac();
  if (!audio) return;
  const now = audio.currentTime;
  const osc = audio.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150 + strength * 60, now);
  osc.frequency.exponentialRampToValueAtTime(52, now + 0.11);
  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.18 + strength * 0.35, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start(now);
  osc.stop(now + 0.18);
}

/** Clique curto de interface. */
export function uiClick() {
  const audio = ac();
  if (!audio) return;
  const osc = audio.createOscillator();
  osc.type = 'triangle';
  osc.frequency.value = 1250;
  const gain = envGain(audio, { attack: 0.004, decay: 0.06, peak: 0.08 });
  osc.connect(gain);
  osc.start();
  osc.stop(audio.currentTime + 0.08);
}

/** Aplauso curto (fim de jogo, prêmio). */
export function applause() {
  cheer({ duration: 3.2, peak: 0.35 });
}

/** Assovio de desaprovação (falta dura/cartão). */
export function boo() {
  const audio = ac();
  if (!audio) return;
  const now = audio.currentTime;
  const bufferSize = audio.sampleRate * 1.6;
  const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) data[i] = Math.random() * 2 - 1;
  const noise = audio.createBufferSource();
  noise.buffer = buffer;
  const band = audio.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.value = 480;
  band.Q.value = 2.5;
  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.22, now + 0.2);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
  noise.connect(band);
  band.connect(gain);
  gain.connect(audio.destination);
  noise.start(now);
  noise.stop(now + 1.6);
}
