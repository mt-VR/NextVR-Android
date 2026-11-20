// Estilo "low-poly de PSP" (PES 2013 / Bomba Patch).
//
// Tentativa descartada: decimar a malha da Micah (grade espacial e colapso de
// aresta). A malha tem skinning com 4 ossos por vértice e UVs compartilhadas;
// qualquer colapso rasgava o corpo e embaralhava a textura da camisa. Testado
// três vezes e reprovado — fica registrado para não repetir.
//
// O caminho que funciona é o dos jogos de PSP: uma SILHUETA própria de poucos
// lados (cilindros de 6–8 faces, esferas de 6×4 e caixas), presa diretamente
// aos OSSOS do rig. Ela corre, chuta e cai junto com a animação real porque é
// filha do esqueleto, mas tem cara de PS2: facetas grandes e material chapado.
import {THREE} from './engine.js';

// Medidas tiradas do rig da Micah (metros):
// quadril 0.946 · joelho 0.515 · tornozelo 0.112 · ombro 1.363
// cotovelo 1.181 · punho 0.96 · pescoço 1.473 · cabeça 1.569
const LENGTHS = { upperArm: .20, foreArm: .24, upperLeg: .43, lowerLeg: .41, foot: .22, neck: .13 };

/**
 * Prende a silhueta low-poly ao esqueleto.
 * @param {THREE.Object3D} root raiz do atleta
 * @param {object} bones mapa de ossos (`leftArm`, `spine2`, ...)
 * @param {object} options { kit, skinTone, hairColor, bootColor }
 */
export function attachLowPolySilhouette(root, bones, options = {}) {
  const kit = options.kit || {};
  const make = (color, extra = {}) => new THREE.MeshStandardMaterial({
    color, roughness: 1, metalness: 0, flatShading: true, ...extra
  });
  const skin = make(options.skinTone || '#96613f');
  // A camisa usa cor por faceta: o padrão do uniforme (listras, quadros, faixa)
  // vira faixas chapadas de triângulo, sem textura — é o visual de PS2. A cor
  // vem do `kit`, então cada time continua com seu uniforme.
  const shirt = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 1, metalness: 0, flatShading: true
  });
  // Mangas usam a cor primária chapada: listra em volume pequeno vira ruído.
  const shirtSolid = make(kit.primary || '#2ef0a8');
  const shorts = make(kit.shorts || kit.secondary || '#0b2b3a');
  const socks = make(kit.socks || kit.secondary || '#0b2b3a');
  const bootMat = make(options.bootColor || '#171b20', { roughness: .85 });
  const hairMat = make(options.hairColor || '#251a12');
  const eyeMat = make('#1b1310', { roughness: .55 });
  const trimMat = make(kit.accent || '#ffffff');
  const materials = [skin, shirt, shirtSolid, shorts, socks, bootMat, hairMat, eyeMat, trimMat];
  const primary = new THREE.Color(kit.primary || '#2ef0a8');
  const secondary = new THREE.Color(kit.secondary || '#0b2b3a');
  const pattern = String(kit.pattern || '').toLowerCase();
  // Cor de cada faceta conforme o padrão do uniforme.
  const facetColor = (x, y) => {
    if (pattern === 'stripes') return Math.floor((x + 10) / 0.058) % 2 ? secondary : primary;
    if (pattern === 'halves') return x < 0 ? secondary : primary;
    if (pattern === 'hoops') return Math.floor((y + 10) / 0.085) % 2 ? secondary : primary;
    if (pattern === 'sash') return Math.abs(x * 0.8 + (1.32 - y)) < 0.07 ? secondary : primary;
    return primary;
  };
  // Pinta triângulo a triângulo (geometria não indexada → faceta na cor certa,
  // sem degradê entre as faixas).
  const paint = geometry => {
    const flat = geometry.index ? geometry.toNonIndexed() : geometry;
    const position = flat.attributes.position;
    const colors = new Float32Array(position.count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < position.count; i += 3) {
      const x = (position.getX(i) + position.getX(i + 1) + position.getX(i + 2)) / 3;
      const y = (position.getY(i) + position.getY(i + 1) + position.getY(i + 2)) / 3;
      color.copy(facetColor(x, y));
      for (let k = 0; k < 3; k++) color.toArray(colors, (i + k) * 3);
    }
    flat.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return flat;
  };

  // Esconder a malha densa ANTES de montar a silhueta: feito depois, o laço
  // encontraria as próprias peças novas e apagaria o corpo inteiro.
  root.traverse(object => {
    if (object.isMesh && !/shadow/i.test(object.name || '')) object.visible = false;
  });

  const group = new THREE.Group();
  group.name = 'xfc-lowpoly-silhouette';
  const meshes = [];
  // Cada volume nasce já filho do osso certo: nada de reparentar por ordem.
  const add = (bone, geometry, material, position = [0, 0, 0], rotation = null) => {
    if (!bone) return null;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = 'xfc-lowpoly-part';
    mesh.position.set(...position);
    if (rotation) mesh.rotation.set(...rotation);
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    mesh.frustumCulled = false;
    bone.add(mesh);
    meshes.push(mesh);
    return mesh;
  };
  // Tubo facetado. Os ossos dos membros crescem para baixo (filho em y
  // negativo), então o volume fica centrado em −comprimento/2. `depth`
  // achata o eixo Z para o corpo não virar um cano.
  const tube = (top, bottom, length, sides = 6, depth = 1) => {
    const geometry = new THREE.CylinderGeometry(top, bottom, length, sides, 1);
    if (depth !== 1) geometry.scale(1, 1, depth);
    return geometry;
  };
  const ball = (radius, widthSegments = 6, heightSegments = 4) =>
    new THREE.SphereGeometry(radius, widthSegments, heightSegments);

  // ---------------------------------------------------------------- tronco --
  // Peito (camisa): mais largo em cima, achatado em Z, com as ombreiras.
  add(bones.spine2, paint(tube(.182, .154, .30, 8, .62)), shirt, [0, .03, 0]);
  // Abdômen (camisa): comprido de propósito, para sobrepor o peito e a cintura
  // (os dois ossos ficam a 1.339 e 1.07 — sem sobreposição aparece um vão).
  add(bones.spine, paint(tube(.155, .150, .30, 8, .64)), shirt, [0, .03, 0]);
  // Cintura/quadril (short).
  add(bones.hips, tube(.163, .152, .20, 8, .66), shorts, [0, .00, 0]);
  // Gola: anel de camisa que fecha o vão entre pescoço e peito.
  add(bones.spine2, tube(.092, .072, .06, 8, .9), trimMat, [0, .163, 0]);

  // ------------------------------------------------------- pescoço e cabeça --
  // O osso do pescoço fica em 1.473 e o da cabeça em 1.569.
  //
  // CORREÇÃO DO QUEIXO: antes a cabeça era uma esfera deslocada (+0,10) mais
  // um tubo de queixo próprio (+0,014). Os dois giravam em torno do pivô do
  // osso com raios diferentes, então ao inclinar a cabeça a esfera ia para um
  // lado e o tubo ficava para trás — "o queixo quebra para um lado".
  //
  // Agora a cabeça é UM volume: a esfera fica centrada no pivô (0, +0,055) e
  // recebe uma única transformação. O queixo é a própria metade inferior da
  // esfera — forma contínua, girando em bloco com o resto do crânio. O pescoço
  // é mais alto para entrar por dentro dela: a junta não abre nem no limite
  // do curso da cabeça.
  add(bones.neck, tube(.056, .062, .14, 6), skin, [0, .052, 0]);
  const head = add(bones.head, ball(.100, 7, 5), skin, [0, .055, .004]);
  head.scale.set(.95, 1.20, 1.00);
  // Nariz: uma cunha pequena, o suficiente para o perfil não ser uma bola.
  add(bones.head, new THREE.ConeGeometry(.021, .048, 4), skin, [0, .075, .099], [Math.PI / 2, 0, 0]);
  // Olhos: dois quadradinhos escuros — em PSP não havia íris, só mancha.
  for (const side of [-1, 1]) {
    add(bones.head, new THREE.BoxGeometry(.032, .017, .012), eyeMat,
      [side * .034, .112, .091], [0, side * .12, 0]);
  }
  // Cabelo: calota facetada por cima da cabeça, com a risca do penteado.
  const hair = add(bones.head, ball(.106, 7, 4), hairMat, [0, .118, -.006]);
  hair.scale.set(1.0, .64, 1.01);

  // ------------------------------------------------------------ braços -----
  for (const side of ['left', 'right']) {
    // Ombreira: esfera no osso do braço fecha o vão com o peito.
    add(bones[side + 'Arm'], ball(.062, 6, 3), shirtSolid, [0, .02, 0]);
    // Manga curta (camisa) sobre a parte de cima do braço.
    add(bones[side + 'Arm'], tube(.064, .058, .10, 6), shirtSolid, [0, -.06, 0]);
    // Braço e antebraço nus.
    add(bones[side + 'Arm'], tube(.063, .054, LENGTHS.upperArm, 6), skin, [0, -.10, 0]);
    add(bones[side + 'ForeArm'], tube(.053, .043, LENGTHS.foreArm, 6), skin, [0, -.12, 0]);
    // Mão fechada.
    const hand = add(bones[side + 'Hand'], ball(.045, 5, 3), skin, [0, -.045, 0]);
    hand.scale.set(.8, 1.15, .7);
    // Munhequeira/faixa (não é detalhe de PS2, mas evita o pulo do antebraço).
    add(bones[side + 'Hand'], tube(.043, .041, .05, 6), skin, [0, .02, 0]);
  }

  // ------------------------------------------------------------ pernas -----
  for (const side of ['left', 'right']) {
    // Coxa (short até a metade).
    add(bones[side + 'UpLeg'], tube(.124, .113, .20, 6), shorts, [0, -.10, 0]);
    // Coxa nua, do fim do short até o joelho.
    add(bones[side + 'UpLeg'], tube(.109, .092, .26, 6), skin, [0, -.30, 0]);
    // Joelho: esfera pequena para a dobra não abrir vão.
    add(bones[side + 'Leg'], ball(.082, 6, 3), skin, [0, .005, 0]);
    // Meião até abaixo do joelho.
    add(bones[side + 'Leg'], tube(.088, .062, LENGTHS.lowerLeg, 6), socks, [0, -.205, 0]);
    // Chuteira: caixa achatada, bico para frente (+Z é o lado do pé).
    add(bones[side + 'Foot'], new THREE.BoxGeometry(.094, .074, LENGTHS.foot), bootMat, [0, -.015, .055]);
  }

  // O modelo original continua montado (é o reserva se a silhueta for desligada).
  root.add(group);
  return { group, materials, meshes, triangles: countTriangles(meshes) };
}

function countTriangles(meshes) {
  let total = 0;
  for (const mesh of meshes) {
    const index = mesh.geometry.index;
    total += index ? index.count / 3 : mesh.geometry.attributes.position.count / 3;
  }
  return total;
}
