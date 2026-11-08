// Estádios do XFC — a seleção brasileira nas praças que a torcida reconhece.
//
// As seis artes foram geradas para o projeto (estilo transmissão, vista de
// dentro da arquibancada) e cada estádio tem um MODELO 3D próprio de
// arquibancada/cobertura no motor — não são o mesmo estádio com outra cor.
//
// A escolha acontece na tela de estádios (CONTINUAR); no pré-jogo as setas
// ainda permitem trocar a praça.

import { THREE } from './engine.js';

export const STADIUMS = [
  {
    id: 'maracana',
    name: 'Maracanã',
    shortName: 'Maracanã',
    city: 'Rio de Janeiro · RJ',
    capacity: '78.838',
    tag: 'A MAIOR CATEDRAL DO FUTEBOL',
    file: 'assets/stadiums/maracana.jpg',
    model: { roof: 'open-ring', facade: 0x8d7d5c, facadeTex: null, led: '#ffe6a8', height: 19.5, arch: null, poles: false, weave: false }
  },
  {
    id: 'morumbis',
    name: 'MorumBis',
    shortName: 'MorumBis',
    city: 'São Paulo · SP',
    capacity: '66.795',
    tag: 'O TRICAMPEÃO PAULISTA',
    file: 'assets/stadiums/morumbis.jpg',
    model: { roof: 'open', facade: 0x6f6a5d, facadeTex: 'ribs', led: '#ff5140', height: 22, arch: null, poles: false, weave: false }
  },
  {
    id: 'niltonsantos',
    name: 'Estádio Nilton Santos',
    shortName: 'Nilton Santos',
    city: 'Rio de Janeiro · RJ',
    capacity: '44.661',
    tag: 'O GIGANTE DE AÇO DO ENGENHÃO',
    file: 'assets/stadiums/nilton-santos.jpg',
    model: { roof: 'arch', facade: 0x9aa6ad, facadeTex: null, led: '#46d6ff', height: 17.5, arch: 0xf4f4f2, poles: false, weave: false }
  },
  {
    id: 'manegarrincha',
    name: 'Estádio Mané Garrincha',
    shortName: 'Mané Garrincha',
    city: 'Brasília · DF',
    capacity: '68.009',
    tag: 'O GIGANTE DA CAPITAL FEDERAL',
    file: 'assets/stadiums/mane-garrincha.jpg',
    model: { roof: 'plate', facade: 0xcfc8b4, facadeTex: null, led: '#ffb13d', height: 15, arch: null, poles: false, weave: false }
  },
  {
    id: 'arenaamazonia',
    name: 'Arena da Amazônia',
    shortName: 'Arena da Amazônia',
    city: 'Manaus · AM',
    capacity: '42.374',
    tag: 'A TEIA VERMELHA DA SELVA',
    file: 'assets/stadiums/arena-amazonia.jpg',
    model: { roof: 'open', facade: 0xb8472c, facadeTex: 'weave', led: '#ff6a3a', height: 18, arch: null, poles: false, weave: true }
  },
  {
    id: 'mineirao',
    name: 'Mineirão',
    shortName: 'Mineirão',
    city: 'Belo Horizonte · MG',
    capacity: '61.846',
    tag: 'O COLISEU MINEIRO',
    file: 'assets/stadiums/mineirao.jpg',
    model: { roof: 'masts', facade: 0x2b4a75, facadeTex: null, led: '#ffd84a', height: 21, arch: null, poles: true, weave: false }
  }
];

export const STADIUM_COUNT = STADIUMS.length;

const loader = new THREE.TextureLoader();
const cache = new Map();

/** Carrega (e cacheia) a textura de um estádio. */
function loadStadiumTexture(file) {
  if (cache.has(file)) return cache.get(file);
  const texture = loader.load(file, loaded => {
    loaded.colorSpace = THREE.SRGBColorSpace;
    loaded.anisotropy = 2;
  });
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 2;
  cache.set(file, texture);
  return texture;
}

/**
 * Anexa a cúpula fotográfica ao estádio 3D: um domo interno envolvendo todo
 * o palco, com a foto do estádio escolhido. Devolve controles para trocar
 * de estádio e desmontar no fim.
 */
export function attachStadiumDome(scene, initialIndex = 0) {
  const geometry = new THREE.SphereGeometry(290, 32, 22);
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
