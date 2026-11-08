// Estádios do XFC: as artes fotográficas que você enviou viram o entorno
// 3D da partida — uma cúpula envolvente atrás da arquibancada, iluminada
// como num voo cinematográfico de transmissão. Cada estádio tem nome
// próprio e pode ser trocado no pré-jogo (setas na tela).

import { THREE } from './engine.js';

/** Os sete estádios únicos dentre as artes enviadas (as repetidas foram descartadas). */
export const STADIUMS = [
  { id: 'ouro', name: 'Coloseu Dourado', tag: 'VISTA AÉREA · GRAMADO IMPERIAL', file: 'assets/stadiums/estadio-aereo.jpg' },
  { id: 'sol', name: 'Arena do Sol', tag: 'PÔR DO SOL · TORRE E ARCO', file: 'assets/stadiums/estadio-por-do-sol.jpg' },
  { id: 'alto', name: 'Coloseu do Anoitecer', tag: 'VISTA AÉREA ALTA · ENTARDECER', file: 'assets/stadiums/estadio-aereo-alto.jpg' },
  { id: 'vila', name: 'Estádio da Vila', tag: 'ENTARDECER · ILHA DOS TORCEDORES', file: 'assets/stadiums/estadio-entardecer.jpg' },
  { id: 'rubro', name: 'Arena Rubro-Negra', tag: 'NOITE · GRANDE ARCO RUBRO', file: 'assets/stadiums/estadio-rubro-negro.jpg' },
  { id: 'vermelho', name: 'Arena Vermelha', tag: 'ANOITECER · ENVOLVENTE VERMELHA', file: 'assets/stadiums/estadio-arena-vermelha.jpg' },
  { id: 'noturno', name: 'Estádio Noturno', tag: 'NOITE DE CHUVA · TRANSMISSÃO', file: 'assets/stadiums/estadio-noturno.jpg' }
];

const loader = new THREE.TextureLoader();
const cache = new Map();

/** Carrega (e cacheia) a textura de um estádio. */
function loadStadiumTexture(file) {
  if (cache.has(file)) return cache.get(file);
  const texture = loader.load(file, loaded => {
    loaded.colorSpace = THREE.SRGBColorSpace;
    loaded.anisotropy = 4;
  });
  texture.colorSpace = THREE.SRGBColorSpace;
  cache.set(file, texture);
  return texture;
}

/**
 * Anexa a cúpula fotográfica ao estádio 3D: um domo interno envolvendo todo
 * o palco, com a foto do estádio escolhido. Devolve controles para trocar
 * de estádio e desmontar no fim.
 */
export function attachStadiumDome(scene, initialIndex = 0) {
  const geometry = new THREE.SphereGeometry(290, 40, 26);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.BackSide,
    fog: false,
    toneMapped: false
  });
  const dome = new THREE.Mesh(geometry, material);
  dome.scale.y = 0.72;
  dome.position.y = -18;
  dome.renderOrder = -10;
  // Esconde o céu procedural antigo: a foto do estádio é o horizonte agora.
  const sky = scene.getObjectByName('xfc-sky');
  if (sky) sky.visible = false;
  scene.add(dome);

  let current = -1;

  function setStadium(index) {
    const count = STADIUMS.length;
    current = ((index % count) + count) % count;
    const stadium = STADIUMS[current];
    material.map = loadStadiumTexture(stadium.file);
    material.needsUpdate = true;
    return stadium;
  }

  setStadium(initialIndex);

  return {
    mesh: dome,
    /** Troca para o estádio de índice (com wrap-around). */
    setStadium,
    /** Avança para o próximo (dir = 1) ou anterior (dir = -1). */
    cycle(dir) {
      return setStadium(current + dir);
    },
    get index() {
      return current;
    },
    dispose() {
      scene.remove(dome);
      geometry.dispose();
      material.dispose();
      if (sky) sky.visible = true;
    }
  };
}
