import {addWarmup} from './warmup.js';
// O estádio: gramado com as linhas, arquibancadas com torcida, placas de
// publicidade, traves com rede e refletores.
//
// Tudo é construído por código (geometrias simples + texturas desenhadas em
// canvas) para caber no APK e rodar bem no WebView do Android.

import { THREE, canvasTexture, disposeObject } from './engine.js';
import { PITCH, GOAL } from './constants.js';
import { STADIUMS } from './stadiums.js';
import {graphicsPreset} from './quality.js';
import { addGrassBlades } from './grass.js';
import { createGoalNet } from './goal-net.js';

const LINE = 0.12; // espessura das linhas em metros
const PX_PER_METER = 2048 / PITCH.length;

const LIGHTING_PRESETS = Object.freeze({
  day: Object.freeze({
    sky: ['#6ca7d0', '#a8cfdf', '#d9ded4', '#e7e5d9'],
    stars: 0,
    fog: 0x8eafbd,
    hemisphereSky: 0xe8f5ff,
    hemisphereGround: 0x68834d,
    hemisphereIntensity: 0.92,
    keyColor: 0xfff1dc,
    keyIntensity: 1.22,
    fillColor: 0xd8eaff,
    fillIntensity: 0.4,
    crossIntensity: 0.16,
    ambientIntensity: 0.18,
    floodlightIntensity: 0.12,
    rimColor: 0xe8f4ff,
    rimIntensity: 0.18,
    lampsOn: false
  }),
  dusk: Object.freeze({
    sky: ['#262d4a', '#82546b', '#d78b66', '#e8b67e'],
    stars: 55,
    fog: 0x392f40,
    hemisphereSky: 0xd0d8f0,
    hemisphereGround: 0x64543f,
    hemisphereIntensity: 0.85,
    keyColor: 0xffd3a0,
    keyIntensity: 1.23,
    fillColor: 0xb6d7ff,
    fillIntensity: 0.4,
    crossIntensity: 0.2,
    ambientIntensity: 0.19,
    floodlightIntensity: 0.3,
    rimColor: 0xffcfa6,
    rimIntensity: 0.32,
    lampsOn: true
  }),
  night: Object.freeze({
    sky: ['#071120', '#123049', '#1d4a5e', '#2a6270'],
    stars: 260,
    fog: 0x0a1a26,
    hemisphereSky: 0xc5dff4,
    hemisphereGround: 0x536b46,
    hemisphereIntensity: 0.98,
    keyColor: 0xf3f6ff,
    keyIntensity: 1.3,
    fillColor: 0xbdd8ff,
    fillIntensity: 0.72,
    crossIntensity: 0.23,
    ambientIntensity: 0.24,
    floodlightIntensity: 0.38,
    rimColor: 0xc7e2ff,
    rimIntensity: 0.43,
    lampsOn: true
  })
});

/** Perfil ambiental reutilizado por céu, refletores e luzes da partida. */
export function lightingProfileFor(timeOfDay = 'night') {
  const key = Object.prototype.hasOwnProperty.call(LIGHTING_PRESETS, timeOfDay)
    ? timeOfDay
    : 'night';
  return { name: key, ...LIGHTING_PRESETS[key] };
}

/** Textura da fachada das arquibancadas: cor sólida, "ribs" (mornéis verticais,
 *  como o MorumBis) ou "weave" (teia em diagonal, como a Arena da Amazônia). */
function drawFacade(context, width, height, kind, baseColor) {
  context.fillStyle = baseColor;
  context.fillRect(0, 0, width, height);
  if (kind === 'ribs') {
    const fins = 26;
    for (let fin = 0; fin < fins; fin += 1) {
      const x = (fin / fins) * width;
      const w = width / fins;
      context.fillStyle = fin % 2 === 0 ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.28)';
      context.fillRect(x, 0, w * 0.42, height);
    }
    context.fillStyle = 'rgba(255,255,255,0.08)';
    for (let row = 1; row < 14; row += 1) {
      context.fillRect(0, (row / 14) * height, width, 2);
    }
  } else if (kind === 'weave') {
    context.strokeStyle = 'rgba(255,255,255,0.2)';
    context.lineWidth = 6;
    const step = 44;
    for (let x = -height; x < width; x += step) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x + height, height);
      context.stroke();
    }
    context.strokeStyle = 'rgba(0,0,0,0.24)';
    for (let x = 0; x < width + height; x += step) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x - height, height);
      context.stroke();
    }
  } else if (kind === 'panels') {
    // Revestimento de concreto com juntas largas e variação tonal suave;
    // evita uma parede lisa sem virar faixas escuras na câmera do celular.
    const columns = 14;
    const columnWidth = width / columns;
    for (let column = 0; column < columns; column += 1) {
      context.fillStyle = column % 2 === 0
        ? 'rgba(255,255,255,0.035)'
        : 'rgba(0,0,0,0.025)';
      context.fillRect(column * columnWidth, 0, columnWidth, height);
      context.fillStyle = 'rgba(8,14,20,0.12)';
      context.fillRect(column * columnWidth, 0, 1, height);
    }
    context.fillStyle = 'rgba(255,255,255,0.075)';
    for (let row = 1; row < 7; row += 1) {
      context.fillRect(0, (row / 7) * height, width, 1.5);
    }
  }
}

/**
 * Base de gramado gerada em tempo real: variação de cor, faixas de corte,
 * manchas de uso e milhares de pequenos traços de folhas. Não depende de uma
 * imagem pronta/PNG para o campo parecer um gramado.
 */
function drawPitchBase(context, width, height, lowPower = false) {
  let seed = 0x27f00d;
  const rand = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  context.fillStyle = '#287b35';
  context.fillRect(0, 0, width, height);

  // Faixas alternadas de corte com bordas suaves, como no gramado de jogo.
  const bands = 14;
  const bandWidth = width / bands;
  for (let band = 0; band < bands; band += 1) {
    const shade = band % 2 === 0 ? '#56a750' : '#469245';
    context.fillStyle = shade;
    context.fillRect(band * bandWidth, 0, bandWidth + 1, height);
    const edge = context.createLinearGradient(band * bandWidth, 0, (band + 1) * bandWidth, 0);
    edge.addColorStop(0, 'rgba(0,0,0,0.06)');
    edge.addColorStop(0.5, 'rgba(255,255,255,0.025)');
    edge.addColorStop(1, 'rgba(0,0,0,0.075)');
    context.fillStyle = edge;
    context.fillRect(band * bandWidth, 0, bandWidth, height);
  }

  // Desgaste suave e espaçado: as antigas manchas pequenas e de alto contraste
  // viravam pontos isolados quando a textura era filtrada pela câmera distante.
  const wearMarks = lowPower ? 260 : 900;
  for (let index = 0; index < wearMarks; index += 1) {
    const x = rand() * width;
    const y = rand() * height;
    const radius = 12 + rand() * 28;
    const alpha = 0.006 + rand() * 0.008;
    context.fillStyle = rand() < 0.55
      ? `rgba(26,86,36,${alpha})`
      : `rgba(177,204,102,${alpha})`;
    context.beginPath();
    context.ellipse(x, y, radius * (1.2 + rand()), radius * (0.24 + rand() * 0.12), rand() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }

  // Grão fino verde, sem pixels negros/escuros de contraste alto. O detalhe é
  // deliberadamente subpixel na câmera de transmissão para evitar cintilação.
  const grassStrokes = lowPower ? 3000 : 9800;
  for (let index = 0; index < grassStrokes; index += 1) {
    const x = rand() * width;
    const y = rand() * height;
    const length = 5 + rand() * 13;
    const angle = -0.36 + rand() * 0.72;
    const tint = Math.floor(rand() * 36);
    const alpha = 0.022 + rand() * 0.038;
    context.strokeStyle = rand() < 0.5
      ? `rgba(${55 + tint},${121 + tint},${43 + Math.floor(tint * 0.35)},${alpha})`
      : `rgba(${92 + Math.floor(tint * 0.4)},${151 + Math.floor(tint * 0.45)},${61 + Math.floor(tint * 0.25)},${alpha})`;
    context.lineWidth = 0.7 + rand() * 0.45;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    context.stroke();
  }

  // Luz e sombra de transmissão, mantendo contraste nas linhas brancas.
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(255,255,255,0.055)');
  gradient.addColorStop(0.48, 'rgba(0,0,0,0.015)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.14)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
}

/** Desenha o gramado com as marcações oficiais de campo. */
function drawPitch(context, width, height, lowPower = false) {
  const scale = width / PITCH.length;
  const toX = x => (x + PITCH.halfLength) * scale;
  const toZ = z => (z + PITCH.halfWidth) * scale;
  const line = LINE * scale;

  drawPitchBase(context, width, height, lowPower);

  // Serrilhado suave nas bordas das faixas (o look "mow stripes").
  const bands = 12;
  const bandWidth = width / bands;
  for (let band = 1; band < bands; band += 1) {
    context.fillStyle = 'rgba(255,255,255,0.05)';
    context.fillRect(band * bandWidth - 1.5, 0, 3, height);
  }

  // Variação suave para o gramado não ficar chapado.
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(255,255,255,0.06)');
  gradient.addColorStop(0.5, 'rgba(0,0,0,0.04)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.16)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  // Linhas.
  context.strokeStyle = 'rgba(255,255,255,0.92)';
  context.lineWidth = line;
  context.lineCap = 'butt';

  const rect = (x0, z0, x1, z1) => {
    // Normaliza: área pode vir com os cantos invertidos (gol de cada lado).
    const left = Math.min(toX(x0), toX(x1));
    const top = Math.min(toZ(z0), toZ(z1));
    context.strokeRect(left, top, Math.abs(x1 - x0) * scale, Math.abs(z1 - z0) * scale);
  };

  // contorno do campo
  rect(-PITCH.halfLength, -PITCH.halfWidth, PITCH.halfLength, PITCH.halfWidth);
  // linha do meio
  context.beginPath();
  context.moveTo(toX(0), toZ(-PITCH.halfWidth));
  context.lineTo(toX(0), toZ(PITCH.halfWidth));
  context.stroke();
  // círculo central
  context.beginPath();
  context.arc(toX(0), toZ(0), 9.15 * scale, 0, Math.PI * 2);
  context.stroke();
  // marcas do meio
  context.fillStyle = 'rgba(255,255,255,0.92)';
  context.beginPath();
  context.arc(toX(0), toZ(0), 0.35 * scale, 0, Math.PI * 2);
  context.fill();

  for (const side of [-1, 1]) {
    // grande área
    rect(side * PITCH.halfLength, -20.16, side * (PITCH.halfLength - 16.5), 20.16);
    // pequena área
    rect(side * PITCH.halfLength, -9.16, side * (PITCH.halfLength - 5.5), 9.16);
    // marca do pênalti
    context.beginPath();
    context.arc(toX(side * (PITCH.halfLength - 11)), toZ(0), 0.35 * scale, 0, Math.PI * 2);
    context.fill();
    // Meia-lua: desenha só o trecho que fica FORA da grande área.
    // A linha da área corta o círculo exatamente nos dois pontos de encontro.
    const penaltySpotX = side * (PITCH.halfLength - 11);
    const boxLineX = side * (PITCH.halfLength - 16.5);
    const relativeLine = (boxLineX - penaltySpotX) / 9.15;
    const cutAngle = Math.acos(Math.max(-1, Math.min(1, relativeLine)));
    const arcStart = side > 0 ? cutAngle : -cutAngle;
    const arcEnd = side > 0 ? Math.PI * 2 - cutAngle : cutAngle;
    context.beginPath();
    context.arc(toX(penaltySpotX), toZ(0), 9.15 * scale, arcStart, arcEnd);
    context.stroke();
    // escanteios
    for (const z of [-PITCH.halfWidth, PITCH.halfWidth]) {
      context.beginPath();
      context.arc(toX(side * PITCH.halfLength), toZ(z), 1 * scale, 0, Math.PI * 2);
      context.stroke();
    }
    // marca de gol
    const goalX = toX(side * PITCH.halfLength);
    context.fillRect(goalX - (side > 0 ? line : 0), toZ(-GOAL.width / 2), line, GOAL.width * scale);
  }
}

/** Textura da torcida: dois anéis de assentos, setores do mandante e do visitante. */
function drawCrowd(context, width, height) {
  let seed = 0xc0ffee;
  const rand = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  context.fillStyle = '#25354a';
  context.fillRect(0, 0, width, height);

  // Muro divisor entre o anel inferior e o superior.
  const tierSplit = 0.46;
  context.fillStyle = '#202c3e';
  context.fillRect(0, height * tierSplit - 7, width, 14);
  context.fillStyle = 'rgba(255,255,255,0.16)';
  context.fillRect(0, height * tierSplit - 8, width, 2);
  context.fillRect(0, height * tierSplit + 6, width, 2);

  const rows = 24;
  const rowHeight = height / rows;
  const seats = 88;
  const seatWidth = width / seats;
  const homeColors = ['#2872b8', '#4388c7', '#dfe9f2', '#1a426e', '#78add5'];
  const awayColors = ['#b92d43', '#d7434b', '#e4b94d', '#eee7d9', '#713447'];
  const skinColors = ['#f0c49c', '#d99d70', '#b77950', '#8e5e41', '#68452f'];

  // Setores: as duas pontas pertencem ao visitante (rubro/amarelo);
  // as laterais, ao mandante (azul/branco), com um miolo amarelo na cabeceira.
  const isAwaySection = u => u < 0.14 || (u > 0.43 && u < 0.57) || u > 0.86;

  for (let row = 0; row < rows; row += 1) {
    const rowY = row * rowHeight;
    context.fillStyle = row % 2 === 0 ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.14)';
    context.fillRect(0, rowY, width, rowHeight * 0.24);
    for (let seat = 0; seat < seats; seat += 1) {
      if (rand() < 0.045) continue;
      const u = (seat + 0.5) / seats;
      const away = isAwaySection(u);
      const palette = away ? awayColors : homeColors;
      const jersey = palette[Math.floor(rand() * palette.length)];
      const x = (seat + 0.5) * seatWidth + (rand() - 0.5) * 2.4;
      const y = rowY + rowHeight * 0.57;

      // Tronco, mangas e cabeça em camadas formam silhuetas de torcedores,
      // em vez dos antigos pontos de cor que viravam ruído à distância.
      context.fillStyle = 'rgba(12,19,29,0.62)';
      context.beginPath();
      context.ellipse(x, y + rowHeight * 0.2, seatWidth * 0.39, rowHeight * 0.24, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = jersey;
      context.beginPath();
      context.ellipse(x, y + rowHeight * 0.15, seatWidth * 0.34, rowHeight * 0.21, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = skinColors[Math.floor(rand() * skinColors.length)];
      context.beginPath();
      context.arc(x, y - rowHeight * 0.11, rowHeight * 0.14, 0, Math.PI * 2);
      context.fill();

      // Pequena variação de luz nas camisas sem manchas escuras de alto contraste.
      if (rand() < 0.24) {
        context.fillStyle = 'rgba(255,255,255,0.3)';
        context.fillRect(x - seatWidth * 0.24, y + rowHeight * 0.1, seatWidth * 0.48, 1);
      }
    }
  }

  // Bandeiras levantadas pela torcida: verde-amarela do Brasil e faixas XFC,
  // com a borda ondulada para quebrar a repetição dos assentos.
  const flags = [
    { x: .08, y: .23, kind: 'brazil' }, { x: .22, y: .53, kind: 'blue' },
    { x: .39, y: .29, kind: 'red' }, { x: .53, y: .69, kind: 'brazil' },
    { x: .66, y: .51, kind: 'brazil' }, { x: .78, y: .25, kind: 'blue' },
    { x: .92, y: .54, kind: 'red' }
  ];
  for (const [index, flag] of flags.entries()) {
    const x = width * flag.x;
    const y = height * flag.y;
    const fw = 64;
    const fh = 40;
    context.strokeStyle = 'rgba(240,245,255,.85)';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(x, y - 12);
    context.lineTo(x, y + fh + 13);
    context.stroke();
    context.save();
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x + fw * .46, y - 3 + (index % 2) * 5, x + fw, y + 2);
    context.lineTo(x + fw, y + fh);
    context.quadraticCurveTo(x + fw * .5, y + fh - 3 - (index % 2) * 3, x, y + fh);
    context.closePath();
    context.clip();
    if (flag.kind === 'brazil') {
      context.fillStyle = '#009b3a'; context.fillRect(x, y - 2, fw, fh + 4);
      context.fillStyle = '#ffdf00'; context.beginPath(); context.moveTo(x + fw * .5, y + 1); context.lineTo(x + fw - 2, y + fh * .5); context.lineTo(x + fw * .5, y + fh - 1); context.lineTo(x + 2, y + fh * .5); context.fill();
      context.fillStyle = '#17499a'; context.beginPath(); context.arc(x + fw * .5, y + fh * .52, 4, 0, Math.PI * 2); context.fill();
    } else if (flag.kind === 'blue') {
      context.fillStyle = '#17499a'; context.fillRect(x, y - 2, fw, fh + 4);
      context.fillStyle = '#fff'; context.fillRect(x, y + fh * .4, fw, fh * .19); context.fillRect(x + fw * .38, y - 2, fw * .2, fh + 4);
    } else {
      context.fillStyle = '#ed2549'; context.fillRect(x, y - 2, fw, fh + 4);
      context.fillStyle = '#fff'; context.fillRect(x, y + fh * .38, fw, fh * .24);
      context.fillStyle = '#164b9f'; context.fillRect(x + fw * .38, y - 2, fw * .24, fh + 4);
    }
    context.restore();
    context.strokeStyle = 'rgba(255,255,255,.42)';
    context.lineWidth = 1;
    context.strokeRect(x, y, fw, fh);
  }
}

/** Faixa azul com a marca XFC na frente das arquibancadas (como a dos estádios de verdade). */
function drawBanner(context, width, height) {
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#12466f');
  gradient.addColorStop(0.5, '#0d3355');
  gradient.addColorStop(1, '#081f36');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  // Fio de luz entre a faixa e a torcida.
  context.fillStyle = 'rgba(120,220,255,0.5)';
  context.fillRect(0, 0, width, 4);
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  // Escudo simplificado da XFC.
  const cx = width / 2;
  context.strokeStyle = 'rgba(255,255,255,0.85)';
  context.lineWidth = height * 0.05;
  context.beginPath();
  context.arc(cx, height * 0.5, height * 0.31, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = '#ffffff';
  context.font = `900 ${height * 0.42}px Inter, sans-serif`;
  context.fillText('XFC', cx, height * 0.47);
  context.fillStyle = 'rgba(255,255,255,0.62)';
  context.font = `600 ${height * 0.11}px Inter, sans-serif`;
  context.fillText('F O U N D A T I O N', cx, height * 0.78);
  // Marca d'água repetida ao longo da faixa.
  context.fillStyle = 'rgba(255,255,255,0.28)';
  context.font = `700 ${height * 0.2}px Inter, sans-serif`;
  for (const side of [-1, 1]) {
    context.fillText('XF ESPORTES', cx + side * width * 0.31, height * 0.5);
  }
}

/** Letreiro de LED na borda do telhado das arquibancadas. */
function drawLed(context, width, height) {
  context.fillStyle = '#04121f';
  context.fillRect(0, 0, width, height);
  const segments = ['XF ESPORTES', 'XFC', 'XFC FOUNDATION'];
  const colors = ['#38f0a4', '#3fd7ff', '#ffffff'];
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  const count = 4;
  const cell = width / count;
  for (let index = 0; index < count; index += 1) {
    const which = index % segments.length;
    context.fillStyle = colors[which];
    context.font = `800 ${height * 0.52}px Inter, sans-serif`;
    context.fillText(segments[which], cell * index + cell / 2, height * 0.52);
  }
}

/** Placas de publicidade XFC com quatro painéis legíveis em cada lateral. */
function drawAds(context, width, height) {
  const slots = 4;
  const cell = width / slots;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let slot = 0; slot < slots; slot += 1) {
    const x = slot * cell;
    const isFoundation = slot % 2 === 0;
    const gradient = context.createLinearGradient(0, 0, 0, height);
    if (isFoundation) {
      gradient.addColorStop(0, '#175183');
      gradient.addColorStop(0.52, '#103d66');
      gradient.addColorStop(1, '#0a2b49');
    } else {
      gradient.addColorStop(0, '#087d57');
      gradient.addColorStop(0.52, '#07583f');
      gradient.addColorStop(1, '#073c31');
    }
    context.fillStyle = gradient;
    context.fillRect(x, 0, cell, height);

    // Barra de cor e pequeno monograma dão leitura de placa física, sem
    // repetir texto comprimido ao longo de todo o campo.
    context.fillStyle = isFoundation ? '#55d5ff' : '#42f0ab';
    context.fillRect(x + 2, 2, cell - 4, Math.max(3, height * 0.08));
    context.fillStyle = isFoundation ? '#ffffff' : '#dfffee';
    context.font = `900 ${height * 0.3}px Inter, sans-serif`;
    context.fillText(
      isFoundation ? 'XFC FOUNDATION' : 'XF ESPORTES',
      x + cell / 2,
      height * 0.47,
      cell * 0.9
    );
    context.fillStyle = 'rgba(255,255,255,0.78)';
    context.font = `600 ${height * 0.17}px Inter, sans-serif`;
    context.fillText(
      isFoundation ? 'FUTEBOL PARA TODOS' : 'XF CHAMPIONS LEAGUE',
      x + cell / 2,
      height * 0.77,
      cell * 0.9
    );
    context.strokeStyle = 'rgba(255,255,255,0.3)';
    context.lineWidth = 2;
    context.strokeRect(x + 3, 3, cell - 6, height - 6);
  }
}

/** Rede do gol (alpha). */
function drawNet(context, width, height) {
  context.clearRect(0, 0, width, height);
  context.strokeStyle = 'rgba(255,255,255,0.92)';
  context.lineWidth = 3;
  const cell = 26;
  for (let x = 0; x <= width; x += cell) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y <= height; y += cell) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
}

/** Céu procedural de dia, entardecer ou noite, com estrelas determinísticas. */
function drawSky(context, width, height, timeOfDay = 'night') {
  const profile = lightingProfileFor(timeOfDay);
  const gradient = context.createLinearGradient(0, 0, 0, height);
  const stops = [0, 0.5, 0.82, 1];
  profile.sky.forEach((color, index) => gradient.addColorStop(stops[index], color));
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  let seed = profile.name === 'night' ? 0x51a7 : 0xd05c;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let star = 0; star < profile.stars; star += 1) {
    const x = random() * width;
    const y = random() * height * 0.58;
    const alpha = profile.name === 'night' ? 0.15 + random() * 0.5 : 0.08 + random() * 0.18;
    context.fillStyle = `rgba(255,255,255,${alpha})`;
    context.fillRect(x, y, profile.name === 'night' ? 1.6 : 1, profile.name === 'night' ? 1.6 : 1);
  }
}

/** Pequenos espectadores instanciados: silhuetas e roupas em cores variadas. */
function addStandCrowd(group, width, depth, height, lowPower = false) {
  const rows = lowPower ? 5 : 8;
  const columns = Math.max(16, Math.floor(width / (lowPower ? 3.8 : 2.8)));
  const count = rows * columns;
  const bodies = new THREE.InstancedMesh(
    new THREE.CapsuleGeometry(0.115, 0.23, 1, 5),
    new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x10151c }),
    count
  );
  const heads = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.105, 5, 4),
    new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x10110f }),
    count
  );
  bodies.name = 'xfc-crowd-simplified-bodies';
  heads.name = 'xfc-crowd-simplified-heads';
  bodies.castShadow = false;
  heads.castShadow = false;
  const shirts = [0xe8edf0, 0xd54b40, 0x256bd0, 0x21a982, 0xe3b944, 0x30363e, 0xf2f2e8, 0x842f75];
  const skin = [0xe4b995, 0xc98e64, 0x9e6849, 0xf0ccaa, 0x784c37, 0xd6a17b];
  const pose = new THREE.Object3D();
  const slopeAngle = Math.atan2(height-2.4,depth);
  const wallHeight = 2.4;
  const seatHeight = height - wallHeight;
  const slopeCenterY = wallHeight + Math.hypot(depth,seatHeight)*Math.sin(slopeAngle)/2 + .55/Math.cos(slopeAngle);
  const slopeCenterZ = -0.6;
  let instance = 0;
  let seed = (Math.round(width * 23) ^ Math.round(depth * 89)) >>> 0;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let row = 0; row < rows; row += 1) {
    const z = depth * 0.42 - row * (depth * .84 / (rows-1));
    const surfaceY = slopeCenterY + 0.55 * Math.cos(slopeAngle)
      - (z - slopeCenterZ) * Math.tan(slopeAngle);
    for (let column = 0; column < columns; column += 1) {
      const spacing = width / columns;
      const x = -width / 2 + (column + 0.5 + (row % 2) * 0.18) * spacing;
      pose.position.set(x, surfaceY + 0.24, z);
      pose.rotation.set(0, (random() - 0.5) * 0.24, 0);
      pose.scale.set(0.84, 0.9 + random() * 0.16, 0.76);
      pose.updateMatrix();
      bodies.setMatrixAt(instance, pose.matrix);
      bodies.setColorAt(instance, new THREE.Color(shirts[Math.floor(random() * shirts.length)]));

      pose.position.set(x, surfaceY + 0.61, z - 0.035);
      pose.rotation.set(0, 0, 0);
      pose.scale.setScalar(0.92 + random() * 0.16);
      pose.updateMatrix();
      heads.setMatrixAt(instance, pose.matrix);
      heads.setColorAt(instance, new THREE.Color(skin[Math.floor(random() * skin.length)]));
      instance += 1;
    }
  }
  bodies.instanceMatrix.needsUpdate = true;
  heads.instanceMatrix.needsUpdate = true;
  if (bodies.instanceColor) bodies.instanceColor.needsUpdate = true;
  if (heads.instanceColor) heads.instanceColor.needsUpdate = true;
  group.add(bodies, heads);
}

/** Banco técnico coberto, com assentos repetidos e estrutura metálica simples. */
function buildSidelineBench(x, z, side) {
  const group = new THREE.Group();
  group.name = 'xfc-sideline-bench';
  const frame = new THREE.MeshLambertMaterial({ color: 0x27333b });
  const seat = new THREE.MeshLambertMaterial({ color: 0x163e52, emissive: 0x07131a });
  const cushion = new THREE.MeshLambertMaterial({ color: side < 0 ? 0x28c5a4 : 0x2d89ec });
  const glass = new THREE.MeshLambertMaterial({ color: 0x9fc9d6, transparent: true, opacity: 0.32, side: THREE.DoubleSide });
  const base = new THREE.Mesh(new THREE.BoxGeometry(15.8, 0.22, 2.6), frame);
  base.position.y = 0.22;
  group.add(base);

  for (const postX of [-7.55, 7.55]) {
    for (const postZ of [-1.05, 1.05]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.13, 3.55, 0.13), frame);
      post.position.set(postX, 1.95, postZ);
      group.add(post);
    }
  }
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(16.3, 0.24, 3.2), frame);
  canopy.position.set(0, 3.78, 0);
  group.add(canopy);
  const canopyTop = new THREE.Mesh(new THREE.BoxGeometry(16.0, 0.12, 3.0), cushion);
  canopyTop.position.set(0, 3.95, 0);
  group.add(canopyTop);
  const backGlass = new THREE.Mesh(new THREE.BoxGeometry(15.4, 2.8, 0.045), glass);
  backGlass.position.set(0, 1.95, -1.18);
  group.add(backGlass);
  for (let index = 0; index < 8; index += 1) {
    const seatX = -6.65 + index * 1.9;
    const chair = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.18, 0.66), cushion);
    chair.position.set(seatX, 1.0, 0.12);
    const back = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.8, 0.15), seat);
    back.position.set(seatX, 1.42, -0.22);
    group.add(chair, back);
  }
  group.rotation.y = side < 0 ? 0 : Math.PI;
  group.position.set(x, 0, z);
  return group;
}

/** Vestiário decorativo ao fundo da arena, com janelas e letreiro legível. */
function buildLockerRoom() {
  const group = new THREE.Group();
  group.name = 'xfc-locker-room';
  const wall = new THREE.MeshLambertMaterial({ color: 0x203748, emissive: 0x07121b });
  const trim = new THREE.MeshLambertMaterial({ color: 0x8aaab4 });
  const glass = new THREE.MeshPhongMaterial({ color: 0x68c4d2, emissive: 0x12333c, transparent: true, opacity: 0.72, shininess: 46 });
  const dark = new THREE.MeshLambertMaterial({ color: 0x0d1c26 });
  // Bloco de vestiários à frente da arquibancada de fundo, entre os bancos:
  // é um volume baixo o suficiente para caber no enquadramento da câmera.
  const body = new THREE.Mesh(new THREE.BoxGeometry(22, 6.2, 5.2), wall);
  body.position.y = 3.1;
  group.add(body);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(23.4, 0.5, 6.2), trim);
  roof.position.set(0, 6.45, 0);
  group.add(roof);
  const entrance = new THREE.Mesh(new THREE.BoxGeometry(2.6, 3.3, 0.16), dark);
  entrance.position.set(0, 1.65, 2.66);
  group.add(entrance);
  const doorGlass = new THREE.Mesh(new THREE.BoxGeometry(1.9, 2.7, 0.1), glass);
  doorGlass.position.set(0, 1.55, 2.76);
  group.add(doorGlass);
  for (const x of [-6.6, 6.6]) {
    const window = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.7, 0.12), glass);
    window.position.set(x, 3.25, 2.62);
    group.add(window);
    const windowFrame = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.14, 0.19), trim);
    windowFrame.position.set(x, 4.18, 2.63);
    group.add(windowFrame);
  }
  const signTexture = canvasTexture(768, 128, (context, width, height) => {
    context.fillStyle = '#0b2535';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = '#46d1b2';
    context.lineWidth = 8;
    context.strokeRect(5, 5, width - 10, height - 10);
    context.fillStyle = '#ecfffa';
    context.font = '900 56px Inter, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('VESTIÁRIOS  ·  XFC', width / 2, height / 2 + 1);
  });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 1.4), new THREE.MeshBasicMaterial({ map: signTexture }));
  sign.position.set(0, 5.5, 2.67);
  group.add(sign);
  const foundation = new THREE.Mesh(new THREE.BoxGeometry(23, 0.24, 6), dark);
  foundation.position.set(0, 0.06, 0);
  group.add(foundation);
  // Deslocado para a esquerda: o túnel (que agora tem interior habitável)
  // ocupa o centro do fundo. O bloco continua fechando a arquibancada.
  group.position.set(-17.5, 0, -(PITCH.halfWidth + 17.8));
  return group;
}

function buildStand(width, depth, height, texture, options = {}) {
  const group = new THREE.Group();
  group.name = 'xfc-stadium-stand';
  const { rotation = 0, position = [0, 0, 0], model = {}, simple = false } = options;

  // O modelo do estádio (vem de STADIUMS[i].model): a cobertura e a
  // fachada mudam conforme a praça — cada estádio tem seu próprio bowl.
  const roofMode = model.roof || 'box';
  const facadeColor = model.facade ?? 0x2c3a48;
  const facadeMaterial = options.facadeMaterial || null;

  const seatMaterial = new THREE.MeshLambertMaterial({ map: texture, emissive: 0x101a26 });
  const concreteMaterial = new THREE.MeshLambertMaterial({ color: facadeColor });
  const roofMaterial = new THREE.MeshLambertMaterial({
    color: roofMode === 'arch' ? 0xf4f4f2 : 0x16212c
  });

  const wallHeight = 2.4;
  const seatHeight = height - wallHeight;
  const angle = Math.atan2(seatHeight,depth);
  const slopeLength = Math.hypot(depth, seatHeight);

  // Muro baixo na frente do gramado (não esconde a torcida).
  const wall = new THREE.Mesh(new THREE.BoxGeometry(width, wallHeight, 1), concreteMaterial);
  wall.position.set(0, wallHeight / 2, depth / 2 + 0.4);
  group.add(wall);

  // Arquibancada inclinada com a torcida.
  const slope = new THREE.Mesh(new THREE.BoxGeometry(width, 1.1, slopeLength), seatMaterial);
  const slopeCenterY=wallHeight+slopeLength*Math.sin(angle)/2+.55/Math.cos(angle);
  slope.position.set(0, slopeCenterY, -0.6);
  slope.rotation.x = angle;
  group.add(slope);
  addStandCrowd(group, width, depth, height, simple);
  // Fecha o vão entre a borda inferior inclinada e o muro: antes aparecia
  // o céu/void por baixo das cadeiras, especialmente na câmera de pênalti.
  const supportGeometry=new THREE.BufferGeometry();
  const extent=slopeLength*Math.cos(angle)/2;
  const zs=[-.6-extent,-.6+extent];
  const supportVertices=[];
  for(const x of [-width/2,width/2])for(const z of zs){
    const top=slopeCenterY-.55/Math.cos(angle)-Math.tan(angle)*(z+.6)-.06;
    supportVertices.push(x,0,z,x,top,z);
  }
  supportGeometry.setAttribute('position',new THREE.Float32BufferAttribute(supportVertices,3));
  supportGeometry.setIndex([0,2,3,0,3,1,4,5,7,4,7,6,0,1,5,0,5,4,2,6,7,2,7,3,1,3,7,1,7,5,0,4,6,0,6,2]);
  supportGeometry.computeVertexNormals();
  const fascia=new THREE.Mesh(supportGeometry,new THREE.MeshLambertMaterial({color:0x293a43}));
  fascia.name='xfc-stand-foundation';group.add(fascia);

  // Fundo da arquibancada. No celular, um atlas pequeno com nervuras mantém
  // leitura arquitetônica sem adicionar malhas ou custo de iluminação.
  const backMaterials = facadeMaterial
    ? [concreteMaterial, concreteMaterial, concreteMaterial, concreteMaterial,
      facadeMaterial, concreteMaterial]
    : concreteMaterial;
  // A platibanda não deve atravessar a arquibancada inteira: isso virava uma
  // parede maciça acima da torcida na câmera baixa do treino.
  const backHeight = Math.max(wallHeight + 0.4, height * 0.18);
  const back = new THREE.Mesh(new THREE.BoxGeometry(width, backHeight, 1), backMaterials);
  back.position.set(0, backHeight / 2, -depth / 2 - 0.6);
  group.add(back);

  if (simple) {
    group.rotation.y = rotation;
    group.position.set(position[0], position[1], position[2]);
    return group;
  }

  // Cobertura: cada modelo tem seu jeito (box, open, arch, plate).
  if (roofMode === 'box') {
    // Cobertura box (a de sempre, alinhada com o muro).
    const roof = new THREE.Mesh(new THREE.BoxGeometry(width + 2, 0.9, depth + 8), roofMaterial);
    roof.position.set(0, height + 5.4, -3.6);
    group.add(roof);
  } else if (roofMode === 'plate') {
    // Cobertura plana tipo bandeja (Mané Garrincha): slab mais baixa,
    // sustentada por torres nos cantos.
    const roof = new THREE.Mesh(new THREE.BoxGeometry(width + 3, 0.7, depth + 10), roofMaterial);
    roof.position.set(0, height + 3.2, -3.6);
    group.add(roof);
    for (const column of [-0.42, 0.42]) {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(1.2, height + 3, 1.2), concreteMaterial);
      tower.position.set(column * width, (height + 3) / 2, depth / 2 - 0.5);
      group.add(tower);
    }
  } else if (roofMode === 'arch') {
    // Arco de treliça branca (Nilton Santos): um arco parabólico de
    // sustentação sobre a arquibancada, com tirantes até o topo.
    const spans = 14;
    const points = [];
    for (let i = 0; i <= spans; i += 1) {
      const t = i / spans;
      const x = -width / 2 + t * width;
      const y = height + 7 + (1 - Math.pow(2 * t - 1, 2)) * 10;
      points.push(new THREE.Vector3(x, y, 0));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const arc = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.35, 8), roofMaterial);
    group.add(arc);
    for (let i = 1; i < spans; i += 3) {
      const t = i / spans;
      const x = -width / 2 + t * width;
      const y = height + 7 + (1 - Math.pow(2 * t - 1, 2)) * 10;
      const strut = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, y - height - 7 + (1 - Math.pow(2 * t - 1, 2)) * 10, 0.25),
        concreteMaterial
      );
      strut.position.set(x, height + (y - height) / 2 + 7, 0);
      group.add(strut);
    }
  }
  // roofMode === 'open' (MorumBis, Arena da Amazônia): sem cobertura, só
  // a borda do anel — o céu aparece por cima da arquibancada.

  for (let column = -2; column <= 2; column += 1) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.7, height + 5, 0.7), concreteMaterial);
    pillar.position.set((column / 2) * width * 0.42, (height + 5) / 2, depth / 2 + 0.2);
    group.add(pillar);
  }

  group.rotation.y = rotation;
  group.position.set(position[0], position[1], position[2]);
  return group;
}

function buildCornerFlag(x, z) {
  const group = new THREE.Group();
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.025, 0.025, 1.6, 8),
    new THREE.MeshLambertMaterial({ color: 0xf4f6f8 })
  );
  pole.position.y = 0.8;
  group.add(pole);
  const flag = new THREE.Mesh(
    new THREE.PlaneGeometry(0.4, 0.26),
    new THREE.MeshLambertMaterial({ color: 0x2ef0a8, emissive: 0x0d5a34, side: THREE.DoubleSide })
  );
  flag.position.set(0.21, 1.42, 0);
  group.add(flag);
  group.position.set(x, 0, z);
  return group;
}

function buildGoal(side, lowPower) {
  const group = new THREE.Group();
  const postMaterial = new THREE.MeshLambertMaterial({ color: 0xf4f6f8 });
  const halfWidth = GOAL.width / 2;

  const postGeometry = new THREE.CylinderGeometry(GOAL.postRadius, GOAL.postRadius, GOAL.height, 10);
  for (const z of [-halfWidth, halfWidth]) {
    const post = new THREE.Mesh(postGeometry, postMaterial);
    post.position.set(0, GOAL.height / 2, z);
    group.add(post);
  }
  const crossbar = new THREE.Mesh(
    new THREE.CylinderGeometry(GOAL.postRadius, GOAL.postRadius, GOAL.width + GOAL.postRadius * 2, 10),
    postMaterial
  );
  crossbar.rotation.x = Math.PI / 2;
  crossbar.position.set(0, GOAL.height, 0);
  group.add(crossbar);

  const net=createGoalNet(side,{lowPower});
  group.add(net.group);
  group.userData.net=net;

  group.position.x = side * PITCH.halfLength;
  return group;
}

function buildFloodlight(x, z, lampsOn = true) {
  const group = new THREE.Group();
  const mastMaterial = new THREE.MeshLambertMaterial({ color: 0x27333f });
  const lampMaterial = new THREE.MeshBasicMaterial({ color: lampsOn ? 0xfff1d2 : 0x9aa8b2 });

  const mast = new THREE.Mesh(new THREE.BoxGeometry(0.9, 32, 0.9), mastMaterial);
  mast.position.y = 16;
  group.add(mast);

  const rig = new THREE.Mesh(new THREE.BoxGeometry(7, 3.4, 0.7), mastMaterial);
  rig.position.y = 32.4;
  group.add(rig);

  for (let lamp = 0; lamp < 6; lamp += 1) {
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.35), lampMaterial);
    bulb.position.set((lamp % 3) * 2.1 - 2.1, 32.4 + (lamp < 3 ? 0.9 : -0.9), 0.42);
    group.add(bulb);
  }

  group.position.set(x, 0, z);
  return group;
}

/**
 * Monta o estádio completo na cena.
 * Devolve os objetos que o motor de partida precisa (gol, placas, bola).
 *
 * `options.stadium` é o índice do estádio na lista de STADIUMS: cada estádio
 * tem o seu próprio modelo 3D de arquibancada/cobertura.
 */
export function buildStadium(scene, options = {}) {
  const group = new THREE.Group();
  const lowPower = Boolean(options.lowPower);
  scene.add(group);

  // Modelo do estádio: cobertura, fachada, altura, ambiente e LED mudam por praça.
  const model = STADIUMS[options.stadium]?.model || {};
  const standHeight = Math.max(25,(model.height || 17)*1.45);
  const standDepth=36,standOffset=38;
  const timeOfDay = options.timeOfDay || model.timeOfDay || 'night';
  const lighting = lightingProfileFor(timeOfDay);
  const graphics=options.graphics||graphicsPreset(null,lowPower);
  scene.fog?.color.setHex(lighting.fog);
  if (scene.background?.isColor) scene.background.setHex(lighting.fog);

  // Céu.
  const skyTexture = canvasTexture(1024, 512,
    (context, width, height) => drawSky(context, width, height, lighting.name));
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(320, 24, 16),
    new THREE.MeshBasicMaterial({ map: skyTexture, side: THREE.BackSide, depthWrite: false })
  );
  sky.position.y = -40;
  sky.name = 'xfc-sky';
  group.add(sky);

  // Gramado. Em WebViews econômicos, a textura e as lâminas usam menos
  // detalhe: o campo continua marcado, sem gastar CPU/GPU em pixels invisíveis.
  const pitchCanvas = document.createElement('canvas');
  const pitchWidth = lowPower ? 1536 : 2048;
  const pitchHeight = lowPower ? 996 : 1328;
  pitchCanvas.width = pitchWidth;
  pitchCanvas.height = pitchHeight;
  const pitchContext = pitchCanvas.getContext('2d');
  drawPitch(pitchContext, pitchWidth, pitchHeight, lowPower);
  const pitchTexture = new THREE.CanvasTexture(pitchCanvas);
  pitchTexture.colorSpace = THREE.SRGBColorSpace;
  pitchTexture.anisotropy = graphics.anisotropy;
  const pitchMaterial = lowPower
    ? new THREE.MeshLambertMaterial({ map: pitchTexture })
    : new THREE.MeshStandardMaterial({map:pitchTexture,roughness:.94,metalness:0});
  // Detalhe real licenciado (CREDITS), uma amostra extra no MESMO draw.
  // Mipmaps/aniso filtram as folhas ao longe; sem displacement, bloom ou passe extra.
  const turfDetail=new THREE.TextureLoader().load('assets/textures/turf-detail.jpg');
  turfDetail.wrapS=turfDetail.wrapT=THREE.RepeatWrapping;
  turfDetail.anisotropy=graphics.anisotropy;
  if(graphics.surface){
    const relief=turfDetail.clone();relief.repeat.set(26.25,17);relief.needsUpdate=true;
    pitchMaterial.bumpMap=relief;pitchMaterial.bumpScale=.018;
  }
  pitchMaterial.onBeforeCompile=shader=>{
    shader.uniforms.turfDetail={value:turfDetail};
    shader.fragmentShader='uniform sampler2D turfDetail;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`
      #include <map_fragment>
      float turf=dot(texture2D(turfDetail,vMapUv*vec2(26.25,17.0)).rgb,vec3(.299,.587,.114));
      float paint=smoothstep(.46,.8,max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b)));
      diffuseColor.rgb*=mix(clamp(.72+turf*.65,.78,1.2),1.0,paint);
    `);
  };
  pitchMaterial.customProgramCacheKey=()=> 'xfc-turf-detail-v1';
  const pitch = new THREE.Mesh(
    new THREE.PlaneGeometry(PITCH.length, PITCH.width),
    pitchMaterial
  );
  pitch.name='xfc-pitch';
  pitch.userData.turfDetail=turfDetail;
  pitch.rotation.x = -Math.PI / 2;
  pitch.receiveShadow = true;
  group.add(pitch);
  // No perfil Android, a relva procedural já está na textura do campo. As
  // lâminas subpixel piscavam como pontos escuros na câmera de transmissão.
  if(graphics.grass) addGrassBlades(group,graphics.grass);

  // Piso contínuo sob TODAS as arquibancadas e cantos, sem ver o vazio.
  const foundation=new THREE.Mesh(new THREE.BoxGeometry(240,.7,190),new THREE.MeshLambertMaterial({color:0x384b3b}));
  foundation.name='xfc-stadium-foundation';foundation.position.y=-.42;group.add(foundation);
  // Faixa de grama fora das linhas.
  const surround = new THREE.Mesh(
    new THREE.PlaneGeometry(PITCH.length + 44, PITCH.width + 44),
    new THREE.MeshLambertMaterial({ color: 0x1f5c28 })
  );
  surround.rotation.x = -Math.PI / 2;
  surround.position.y = -0.02;
  group.add(surround);

  // Arquibancadas.
  const crowdTexture = canvasTexture(1024, 512, drawCrowd);
  crowdTexture.wrapS = THREE.RepeatWrapping;
  crowdTexture.wrapT = THREE.RepeatWrapping;
  crowdTexture.repeat.set(3.2, 1.15);
  const facadeBase = `#${new THREE.Color(model.facade ?? 0x2c3a48).getHexString()}`;
  const facadeMaterial = new THREE.MeshLambertMaterial({
    map: canvasTexture(512, 256, (context, width, height) =>
      drawFacade(context, width, height, model.facadeTex || 'panels', facadeBase)),
    emissive: 0x080d13
  });

  const standOptions = [
    { width: PITCH.length + 76, depth: standDepth, height: standHeight, rotation: 0, position: [0, 0, -(PITCH.halfWidth + standOffset)] },
    { width: PITCH.length + 76, depth: standDepth, height: standHeight, rotation: Math.PI, position: [0, 0, PITCH.halfWidth + standOffset] },
    { width: PITCH.width + 76, depth: standDepth, height: standHeight, rotation: Math.PI / 2, position: [-(PITCH.halfLength + standOffset), 0, 0] },
    { width: PITCH.width + 76, depth: standDepth, height: standHeight, rotation: -Math.PI / 2, position: [PITCH.halfLength + standOffset, 0, 0] }
  ];
  for (const option of standOptions) {
    group.add(buildStand(option.width, option.depth, option.height, crowdTexture, {
      ...option,
      model,
      simple: lowPower,
      facadeMaterial
    }));
  }

  // Estruturas fora do gramado: vestiário ao fundo e bancos técnicos cobertos
  // ao longo das duas laterais, sem alterar colisões nem regras da partida.
  group.add(buildLockerRoom());
  for (const side of [-1, 1]) {
    for (const x of [-18, 18]) {
      group.add(buildSidelineBench(x, side * (PITCH.halfWidth + 13.2), side));
    }
  }

  // Corredor livre (rotas em ±61/±42), bancos em ±47.2 e arquibancada
  // começando a ~20 m das linhas. Túnel e áreas técnicas fora da rota.
  // Túnel com INTERIOR de verdade: a boca continua a do jogo, mas o corredor
  // agora desce para uma sala fechada atrás da arquibancada. É lá que a
  // cerimônia pré-jogo começa (cena 1) — os dois times lado a lado, os
  // árbitros na frente — e de lá os jogadores saem andando para o gramado.
  const tunnel=new THREE.Group();tunnel.name='xfc-player-tunnel';
  const tunnelMat=new THREE.MeshLambertMaterial({color:0x263441,emissive:0x0b141b});
  const tunnelInner=new THREE.MeshLambertMaterial({color:0x1b2833,side:THREE.BackSide});
  const tunnelFloorMat=new THREE.MeshLambertMaterial({color:0x2b3a30});
  const tunnelLightMat=new THREE.MeshBasicMaterial({color:0xfff2c8});
  for(const x of [-1.8,1.8]){const wall=new THREE.Mesh(new THREE.BoxGeometry(.18,3.2,6),tunnelMat);wall.position.set(x,1.6,-48.2);tunnel.add(wall);}
  const roof=new THREE.Mesh(new THREE.BoxGeometry(3.8,.18,6),tunnelMat);roof.position.set(0,3.2,-48.2);tunnel.add(roof);
  // Sala do túnel (cena do vestiário): 7,2 m de largura, 5,4 m de fundo.
  const hall=new THREE.Group();hall.name='xfc-tunnel-hall';
  const hallWalls=[];
  const hallBack=new THREE.Mesh(new THREE.BoxGeometry(7.6,4.2,.2),tunnelMat);hallBack.position.set(0,2.05,-53.02);hallWalls.push(hallBack);
  for(const side of [-1,1]){
    const wall=new THREE.Mesh(new THREE.BoxGeometry(.2,4.2,6.0),tunnelMat);
    wall.position.set(side*3.75,2.05,-50.3);hallWalls.push(wall);
  }
  const hallCeiling=new THREE.Mesh(new THREE.BoxGeometry(7.7,.2,6.0),tunnelMat);hallCeiling.position.set(0,4.15,-50.3);hallWalls.push(hallCeiling);
  // Corredor de ligação entre a sala e a boca do túnel.
  for(const side of [-1,1]){
    const wall=new THREE.Mesh(new THREE.BoxGeometry(.16,3.4,2.2),tunnelMat);
    wall.position.set(side*1.85,1.7,-46.2);hallWalls.push(wall);
  }
  const connectorRoof=new THREE.Mesh(new THREE.BoxGeometry(3.9,.16,2.2),tunnelMat);connectorRoof.position.set(0,3.4,-46.2);hallWalls.push(connectorRoof);
  const hallFloor=new THREE.Mesh(new THREE.BoxGeometry(7.7,.1,6.1),new THREE.MeshLambertMaterial({color:0x39463a,emissive:0x0a0f0b}));hallFloor.position.set(0,.01,-50.3);hallWalls.push(hallFloor);
  // Parede de fundo iluminada (placa do túnel): dá profundidade ao plano aberto
  // sem depender de luz que a arquibancada bloqueia.
  const hallSignTexture=canvasTexture(512,256,(context,width,height)=>{
    const gradient=context.createLinearGradient(0,0,0,height);
    gradient.addColorStop(0,'#12222e');gradient.addColorStop(1,'#0a141c');
    context.fillStyle=gradient;context.fillRect(0,0,width,height);
    context.strokeStyle='rgba(70,209,178,.55)';context.lineWidth=6;context.strokeRect(14,14,width-28,height-28);
    context.fillStyle='#ecfffa';context.textAlign='center';context.textBaseline='middle';
    context.font='900 54px Inter, sans-serif';context.fillText('XFC',width/2,height*.42);
    context.font='900 22px Inter, sans-serif';context.fillStyle='rgba(214,236,255,.7)';
    context.fillText('TÚNEL DOS VESTIÁRIOS',width/2,height*.66);
  });
  const hallSign=new THREE.Mesh(new THREE.PlaneGeometry(6.2,3.1),new THREE.MeshBasicMaterial({map:hallSignTexture}));
  hallSign.position.set(0,2.0,-52.9);hallWalls.push(hallSign);
  // Luz das lâmpadas do túnel: só brilho (sem custo de sombra) e o suficiente
  // para os rostos aparecerem nos closes.
  for(const z of [-47.6,-49.4,-51.2,-52.8]){
    const lamp=new THREE.Mesh(new THREE.BoxGeometry(1.6,.06,.24),tunnelLightMat);
    lamp.position.set(0,4.02,z);hallWalls.push(lamp);
  }
  const tunnelGlow=new THREE.PointLight(0xffeec2, lowPower?9:16, 18, 2);
  tunnelGlow.position.set(0,3.55,-50.0);hallWalls.push(tunnelGlow);
  const tunnelFill=new THREE.PointLight(0xcfe6ff, lowPower?4:7, 14, 2);
  tunnelFill.position.set(0,2.4,-48.2);hallWalls.push(tunnelFill);
  for(const mesh of hallWalls)tunnel.add(mesh);
  group.add(tunnel);
  const technicalMat=new THREE.LineBasicMaterial({color:0xf1f1e4});
  for(const side of [-1,1])for(const x of [-18,18]){const points=[[-9,9.9],[9,9.9],[9,6.9],[-9,6.9],[-9,9.9]].map(([dx,dz])=>new THREE.Vector3(x+dx,.025,side*(PITCH.halfWidth+dz)));const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),technicalMat);line.name='xfc-technical-area';group.add(line);}
  const warmup=addWarmup(group,options.warmupTeams||[],lowPower||graphics.id==='low');

  // Cobertura de anel (Maracanã): coroa inclinada sobre as
  // arquibancadas, sem cobrir o gramado.
  if (!lowPower && model.roof === 'ring') {
    const ring = new THREE.Mesh(
      new THREE.CylinderGeometry(110, 91, 7, 40, 1, true),
      new THREE.MeshLambertMaterial({ color: 0xe2e0d8, side: THREE.DoubleSide })
    );
    ring.scale.z = 0.80;
    ring.position.set(0, standHeight + 8.5, 0);
    ring.rotation.x = 0.1;
    group.add(ring);
  }

  // Anel de mastros brancos inclinados (Mineirão): postes em volta da
  // arquibancada sustentando um cabo de anel no topo.
  if (!lowPower && model.poles) {
    const poleMaterial = new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
    const radius = 100;
    const poleTop = standHeight + 9;
    for (let i = 0; i < 16; i += 1) {
      const angle = (i / 16) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius * 0.72;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 9, 8), poleMaterial);
      pole.position.set(x, (standHeight + poleTop) / 2, z);
      pole.rotation.z = -Math.cos(angle) * 0.14;
      pole.rotation.x = Math.sin(angle) * 0.14;
      group.add(pole);
    }
    const cable = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.12, 8, 32),
      new THREE.MeshLambertMaterial({ color: 0xd8d8d8 })
    );
    cable.rotation.x = Math.PI / 2;
    cable.scale.z = 0.72;
    cable.position.y = poleTop;
    group.add(cable);
  }

  // Placas de publicidade.
  const adTexture = canvasTexture(1024, 128, drawAds);
  const adMaterial = new THREE.MeshLambertMaterial({ map: adTexture, emissive: 0x07140d });
  const adHeight = 1.1;
  const ads = [
    { size: [PITCH.length, adHeight], position: [0, adHeight / 2, -(PITCH.halfWidth + 1.9)] },
    { size: [PITCH.length, adHeight], position: [0, adHeight / 2, PITCH.halfWidth + 1.9] },
    { size: [PITCH.width, adHeight], position: [-(PITCH.halfLength + 2.35), adHeight / 2, 0] },
    { size: [PITCH.width, adHeight], position: [PITCH.halfLength + 2.35, adHeight / 2, 0] }
  ];
  for (const ad of ads) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(ad.size[0], ad.size[1]), adMaterial);
    mesh.position.set(ad.position[0], ad.position[1], ad.position[2]);
    if (Math.abs(ad.position[0]) > 1) mesh.rotation.y = ad.position[0] > 0 ? -Math.PI / 2 : Math.PI / 2;
    else mesh.rotation.y = ad.position[2] > 0 ? Math.PI : 0;
    group.add(mesh);
  }

  // Faixa azul da XFC aplicada na face do muro das arquibancadas.
  const bannerTexture = canvasTexture(2048, 200, drawBanner);
  const bannerMaterial = new THREE.MeshLambertMaterial({ map: bannerTexture, emissive: 0x071722 });
  // Letreiro de LED correndo no topo do muro.
  const ledTexture = canvasTexture(2048, 64, drawLed);
  ledTexture.wrapS = THREE.RepeatWrapping;
  ledTexture.repeat.set(2, 1);
  const ledMaterial = new THREE.MeshBasicMaterial({
    map: ledTexture,
    color: model.led ? new THREE.Color(model.led) : 0xffffff
  });
  for (const side of [-1, 1]) {
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(PITCH.length + 20, 2.3), bannerMaterial);
    banner.position.set(0, 1.18, side * (PITCH.halfWidth + 2.55));
    if (side > 0) banner.rotation.y = Math.PI;
    group.add(banner);
    const led = new THREE.Mesh(new THREE.PlaneGeometry(PITCH.length + 20, 0.66), ledMaterial);
    led.position.set(0, 2.78, side * (PITCH.halfWidth + 2.5));
    if (side > 0) led.rotation.y = Math.PI;
    group.add(led);
  }
  for (const side of [-1, 1]) {
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(PITCH.width + 20, 2.3), bannerMaterial);
    banner.position.set(side * (PITCH.halfLength + 3.55), 1.18, 0);
    banner.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    group.add(banner);
    const led = new THREE.Mesh(new THREE.PlaneGeometry(PITCH.width + 20, 0.66), ledMaterial);
    led.position.set(side * (PITCH.halfLength + 3.5), 2.78, 0);
    led.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    group.add(led);
  }

  // Gols.
  const goals = { home: buildGoal(-1,lowPower), away: buildGoal(1,lowPower) };
  group.add(goals.home, goals.away);

  // Elementos completos da arena também permanecem no perfil econômico; suas
  // geometrias são simples e não alteram as regras nem o campo de jogo.
  for (const x of [-PITCH.halfLength, PITCH.halfLength]) {
    for (const z of [-PITCH.halfWidth, PITCH.halfWidth]) {
      group.add(buildCornerFlag(x, z));
    }
  }
  const floodlightPositions = [];
  for (const x of [-(PITCH.halfLength + 47), PITCH.halfLength + 47]) {
    for (const z of [-(PITCH.halfWidth + 47), PITCH.halfWidth + 47]) {
      group.add(buildFloodlight(x, z, lighting.lampsOn));
      floodlightPositions.push([x, z]);
    }
  }

  // Iluminação de transmissão com variação natural por horário: luz quente de
  // chave, preenchimento frio moderado e sombras dinâmicas somente no PC.
  const hemisphere = new THREE.HemisphereLight(
    lighting.hemisphereSky,
    lighting.hemisphereGround,
    lighting.hemisphereIntensity
  );
  group.add(hemisphere);
  const key = new THREE.DirectionalLight(lighting.keyColor, lighting.keyIntensity);
  key.position.set(...(timeOfDay==='dusk'?[-65,35,20]:timeOfDay==='day'?[-42,72,34]:[-32,58,28]));
  key.castShadow = graphics.shadows;
  key.shadow.mapSize.set(graphics.shadowSize,graphics.shadowSize);
  key.shadow.radius=2;
  key.shadow.camera.left = -75;
  key.shadow.camera.right = 75;
  key.shadow.camera.top = 60;
  key.shadow.camera.bottom = -60;
  key.shadow.camera.near = 10;
  key.shadow.camera.far = 220;
  // Viés moderado: um deslocamento grande destaca a sombra do gramado e
  // cria manchas escuras soltas perto dos atletas.
  key.shadow.bias = -0.00018;
  key.shadow.normalBias = 0.04;
  group.add(key);
  const fill = new THREE.DirectionalLight(lighting.fillColor, lighting.fillIntensity);
  fill.position.set(48, 46, -42);
  group.add(fill);
  const crossFill = new THREE.DirectionalLight(0xeaf4ff, lighting.crossIntensity);
  crossFill.position.set(-8, 58, -54);
  group.add(crossFill);
  // Rim light: uma luz fraca vinda de trás recorta a silhueta dos atletas
  // contra a arquibancada. Sem sombra e com intensidade baixa, custa quase
  // nada e resolve a leitura do jogador no meio do gramado.
  const rim = new THREE.DirectionalLight(lighting.rimColor || 0xc7e2ff, lighting.rimIntensity ?? 0.34);
  rim.position.set(34, 26, -56);
  rim.castShadow = false;
  rim.name = 'xfc-rim-light';
  group.add(rim);
  const ambient = new THREE.AmbientLight(0xf5f8ff, lighting.ambientIntensity);
  group.add(ambient);

  // Refletores físicos sem shadow map: dois no Android para conter custo de
  // iluminação por pixel, quatro em telas grandes para cobrir o campo inteiro.
  const activeFloodlights = (lowPower || graphics.mobile)
    ? floodlightPositions.filter((_, index) => index === 0 || index === 3)
    : floodlightPositions;
  for (const [x, z] of activeFloodlights) {
    const floodlight = new THREE.SpotLight(
      lighting.keyColor,
      lighting.floodlightIntensity,
      150,
      Math.PI / 4.4,
      0.62,
      1.6
    );
    floodlight.position.set(x, 31.5, z);
    floodlight.target.position.set(0, 0, 0);
    floodlight.castShadow = false;
    group.add(floodlight, floodlight.target);
  }

  return {
    group,
    goals,
    warmup,
    dimensions:{standHeight,standDepth,standOffset,pitch:PITCH,goal:GOAL},
    hitNet(event){goals[event.side>0?'away':'home'].userData.net.impact(event);},
    update(dt){warmup.update(dt);goals.home.userData.net.update(dt);goals.away.userData.net.update(dt);},
    /** O gol que o time da casa defende fica em -X. */
    dispose() {
      warmup.dispose();
      turfDetail.dispose();
      disposeObject(group);
    }
  };
}
