// ---------- O ESQUELETO: os nomes de osso do gorila do HTML antigo ----------
//
// Pedido do usuário: "entra no HTML antigo, pega o modelo do gorilla e põe no jogo, o nosso
// personagem é o gorilla, e mexemos o braço dele com o Hand".
//
// O modelo é o do HTML antigo (`gorilla-tag-mapa-gorila-handtracking.html`, a constante `RIG_GZ`):
// "Customizable Gorilla Tag Monkey Model", de YouthfulPat501 (Sketchfab, CC-BY-4.0). Ele é 30 % menor
// que o modelo anterior (332 KB contra 238 KB — mas com as texturas juntas no mesmo arquivo, sem
// nenhuma imagem solta), tem 15 ossos e os nomes em inglês com espaço: `Upper Arm R_6`, `Lower Arm
// R_5`, `Wrist R_4`, `Main_13`, `Head_0`.
//
// O jogo inteiro — `rig()`, `arm2()`, `handPose()`, `faceCam()`, `placeLab()`, `mkModel()` e o corpo
// reserva de `corpo.js` — procura os nomes do modelo ANTIGO (`upper_arm_L_04`, `palm_02_L_014`, …).
// Em vez de reescrever a IK (que funciona), este arquivo TRADUZ o esqueleto na chegada: renomeia os
// ossos para os nomes que o jogo já usa e cria o osso da palma, que este modelo não tem. Nada mais
// muda — e a mão do NextVR continua movendo o braço pelo mesmo caminho de sempre.
//
// Os nomes são comparados por uma chave sem dígitos e sem símbolos (`Upper Arm R_6` → `upperarmr`),
// então rodar isto duas vezes não estraga nada, e o modelo anterior (se algum dia voltar) passa
// intacto: os nomes dele já são os de destino.

const NV_OSSOS = {
  // modelo do HTML antigo (YouthfulPat501)  →  nome que o jogo procura
  main: 'body_01',
  head: 'head_02',
  upperarmr: 'upper_arm_R_04',
  lowerarmr: 'forearm_R_06',
  wristr: 'hand_R_05',
  pointerfr: 'f_index_01_R_008',   // o indicador vira o "f_index" do jogo
  pinkyfr: 'f_middle_01_R_015',    // o mindinho faz o papel do dedo do meio no giro da mão
  thumbr: 'thumb_01_R_009',
  upperarml: 'upper_arm_L_04',
  lowerarml: 'forearm_L_06',
  wristl: 'hand_L_05',
  pointerl: 'f_index_01_L_008',
  pinkyfl: 'f_middle_01_L_015',
  thumbl: 'thumb_01_L_009',
};

/** A palma que o modelo antigo não tem: um osso filho do pulso, apontando para os dedos. */
const NV_PALMA = { L: 'palm_02_L_014', R: 'palm_02_R_028' };

const NV_ESQ = { trocados: 0, palmas: 0, modelo: '' };

function nvRenomeia(raiz) {
  if (!raiz) return NV_ESQ;
  const chave = (n) => String(n || '').toLowerCase().replace(/[^a-z]/g, '');
  const ossos = [];
  raiz.traverse((o) => { if (o.isBone) ossos.push(o); });
  if (!ossos.length) return NV_ESQ;                       // sem esqueleto: não há o que traduzir

  ossos.forEach((b) => {
    const alvo = NV_OSSOS[chave(b.name)];
    if (alvo && b.name !== alvo) { b.name = alvo; NV_ESQ.trocados++; }
  });

  // Palma: média das posições dos dedos, no espaço local do pulso. Com ela, `handPose()` gira a mão
  // para a direção que a mão de verdade aponta.
  ['L', 'R'].forEach((k) => {
    const pulso = ossos.find((b) => b.name === 'hand_' + k + '_05');
    if (!pulso) return;
    if (pulso.getObjectByName(NV_PALMA[k])) return;        // já existe (modelo anterior)
    const dedos = ['f_index_01_' + k + '_008', 'f_middle_01_' + k + '_015']
      .map((n) => pulso.getObjectByName(n)).filter(Boolean);
    if (!dedos.length) return;                            // sem dedos, sem referência de palma
    const media = new THREE.Vector3();
    dedos.forEach((f) => media.add(f.position));
    media.multiplyScalar(1 / dedos.length);
    const palma = new THREE.Bone();
    palma.name = NV_PALMA[k];
    palma.position.copy(media);                            // no pulso, apontando para os dedos
    pulso.add(palma);
    NV_ESQ.palmas++;
  });

  // O material do corpo: o `paint()` do jogo colore o que se chama `darkfur`. O deste modelo vem
  // como "Material.004" (o do tronco/braços, o único mesh grande); os outros dois são olho e boca e
  // ficam como estão, com a textura original.
  raiz.traverse((o) => {
    if (!o.isMesh || !o.geometry || !o.geometry.attributes.position) return;
    const mat = Array.isArray(o.material) ? o.material[0] : o.material;
    if (!mat || o.geometry.attributes.position.count < 500) return;
    if (mat.name !== 'darkfur' && /^Material\.\d+$/.test(String(mat.name))) mat.name = 'darkfur';
  });

  NV_ESQ.modelo = ossos.map((b) => b.name).slice(0, 3).join(',');
  return NV_ESQ;
}

/**
 * O GORILA VISTO DE DENTRO: só as faces da frente.
 *
 * Em primeira pessoa a câmera fica DENTRO do peito do gorila (o corpo dele vai de 1,3 m abaixo dos
 * olhos a 0,4 m acima, e o peito fica 30 cm à frente do rosto). Com o material `doubleSided` que vem
 * no GLB, a câmera via o LADO DE DENTRO do próprio corpo — uma parede de pelo escuro, ou, dependendo
 * do driver, nada. Era mais um jeito de "o gorila não aparecer". Descartando as faces de trás, o
 * corpo do jogador deixa de existir quando olhado de dentro e os braços (que estão fora dele)
 * aparecem normalmente. Para os outros jogadores nada muda: eles são vistos de fora.
 */
function nvFrenteSo(raiz) {
  if (!raiz) return 0;
  let n = 0;
  raiz.traverse((o) => {
    if (!o.isMesh) return;
    const lista = Array.isArray(o.material) ? o.material : [o.material];
    lista.forEach((m) => {
      if (m && m.side !== THREE.FrontSide) { m.side = THREE.FrontSide; m.needsUpdate = true; n++; }
    });
  });
  return n;
}
