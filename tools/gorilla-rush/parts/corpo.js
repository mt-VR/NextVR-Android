// ---------- CORPO RESERVA: o gorila NUNCA fica sem boneco ----------
//
// "Ainda tá sem modelo de gorilla." O modelo grande (PLAYER_B64) é um GLB de 238 KB com duas
// texturas embutidas, carregado por `loader.parse`. Se qualquer etapa dele falhar no aparelho
// (textura, blob:, memória, driver), o jogo ficava SEM corpo e SEM braços — e o único aviso ao
// usuário era a janela de problema, que ele já não queria ver.
//
// Aqui o corpo existe desde o primeiro quadro, montado com primitivas (tronco, cabeça, olhos,
// braços e mãos), com o MESMO esqueleto por nome que o modelo real: `upper_arm_L`, `forearm_L`,
// `hand_L`, `head`, `body_01` e os ossos da mão (`palm_02_L`, `f_index_01_L`, `f_middle_01_L`).
// Como os nomes são os mesmos, `rig()`, `arm2()`, `handPose()`, `faceCam()`, `placeLab()`,
// `setBlob()` e a IK das mãos funcionam sem uma linha de mudança — o boneco responde às mãos do
// NextVR igual ao modelo original.
//
// Quando o GLB termina de carregar, `build()` chama `nvCorpoSai()` e o modelo de verdade entra no
// lugar (a reserva é descartada). Ou seja: ou é o gorila original, ou é este — nunca o vazio.
const NV_CORPO = { ativo: false, saida: false };

function nvCorpoSai() {
  NV_CORPO.saida = true;
  if (!NV_CORPO.ativo) return;
  const raiz = NV_CORPO.raiz;
  NV_CORPO.ativo = false;
  if (!raiz) return;
  try { if (raiz.parent) raiz.parent.remove(raiz); } catch (e) {}
  try {
    raiz.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material && o.material.dispose) o.material.dispose();
    });
  } catch (e) {}
}

/** Monta o corpo reserva e devolve o `LM` que o resto do jogo espera. */
function nvCorpoReserva() {
  if (pl || LM) return false;
  const R = 0.42, R2 = 0.40;                  // braço e antebraço, como o Gorilla Tag
  const escuro = new THREE.MeshLambertMaterial({ color: 0x3b3b40 }); escuro.name = 'darkfur';
  const claro = new THREE.MeshLambertMaterial({ color: 0x9a9aa2 }); claro.name = 'lightfur';
  const pele = new THREE.MeshLambertMaterial({ color: 0x2a2a2e });
  const branco = new THREE.MeshBasicMaterial({ color: 0xf2f2ea });
  const preto = new THREE.MeshBasicMaterial({ color: 0x101014 });

  const raiz = new THREE.Group();             // é o `pl`: o corpo inteiro, na origem do jogador
  const esqueleto = new THREE.Bone(); esqueleto.name = 'body_01';

  // Tronco: um cilindro achatado descendo do peito para os quadris.
  const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.245, 0.52, 16), escuro);
  tronco.position.set(0, -0.10, 0);
  tronco.castShadow = true;
  esqueleto.add(tronco);

  // Cabeça: esfera levemente achatada, focinho e dois olhos (é o que dá a leitura de "gorila").
  const cabeca = new THREE.Bone(); cabeca.name = 'head_02'; cabeca.position.set(0, 0.30, 0.01);
  const cranio = new THREE.Mesh(new THREE.SphereGeometry(0.165, 18, 14), escuro);
  cranio.scale.set(1, 0.94, 1.04); cranio.castShadow = true;
  const focinho = new THREE.Mesh(new THREE.SphereGeometry(0.095, 14, 10), claro);
  focinho.position.set(0, -0.045, 0.115); focinho.scale.set(1.15, 0.8, 1);
  const olho = (x) => {
    const o = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 8), branco);
    o.position.set(x, 0.035, 0.135);
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.016, 8, 6), preto);
    p.position.set(0, 0, 0.022); o.add(p);
    return o;
  };
  const orelha = (x) => {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), pele);
    e.position.set(x, 0.01, -0.02); e.scale.set(0.6, 1, 0.8);
    return e;
  };
  cabeca.add(cranio, focinho, olho(-0.058), olho(0.058), orelha(-0.16), orelha(0.16));
  esqueleto.add(cabeca);

  // Braços: cada osso carrega o pedaço que ele move. O osso do antebraço fica na ponta do braço e
  // o da mão na ponta do antebraço — é a geometria que `arm2()` espera para apontar com a IK.
  function braco(lado) {
    const sinal = lado === 'L' ? -1 : 1;
    const ombro = new THREE.Bone(); ombro.name = 'shoulder_' + lado + '_03';
    ombro.position.set(sinal * 0.195, 0.235, 0);
    const bracoB = new THREE.Bone(); bracoB.name = 'upper_arm_' + lado + '_04';
    const ante = new THREE.Bone(); ante.name = 'forearm_' + lado + '_06'; ante.position.set(0, -R, 0);
    const mao = new THREE.Bone(); mao.name = 'hand_' + lado + '_05'; mao.position.set(0, -R2, 0);

    const mBraco = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.052, R, 12), escuro);
    mBraco.position.set(0, -R / 2, 0); mBraco.castShadow = true;
    const mAnte = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.046, R2, 12), escuro);
    mAnte.position.set(0, -R2 / 2, 0); mAnte.castShadow = true;
    const mPunho = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), pele);
    mPunho.position.set(0, -0.03, 0); mPunho.scale.set(1, 1.1, 0.85); mPunho.castShadow = true;

    bracoB.add(mBraco); ante.add(mAnte); mao.add(mPunho);
    ombro.add(bracoB); bracoB.add(ante); ante.add(mao);

    // Ossos da mão que `handPose()` procura (mesmos nomes do GLB; sem malha, só orientação).
    const palma = new THREE.Bone(); palma.name = 'palm_02_' + lado + '_014'; palma.position.set(0, -0.055, 0.02);
    const indice = new THREE.Bone(); indice.name = 'f_index_01_' + lado + '_008'; indice.position.set(-0.03, -0.10, 0.04);
    const medio = new THREE.Bone(); medio.name = 'f_middle_01_' + lado + '_015'; medio.position.set(0.005, -0.10, 0.04);
    mao.add(palma, indice, medio);

    esqueleto.add(ombro);
    return { u: bracoB, f: ante, h: mao, pm: palma, ix: indice, md: medio };
  }
  const esq = braco('L'), dir = braco('R');

  raiz.add(esqueleto);
  pg.add(raiz);
  raiz.updateMatrixWorld(true);

  const M = {
    uL: esq.u, fL: esq.f, hL: esq.h, uR: dir.u, fR: dir.f, hR: dir.h,
    pmL: esq.pm, ixL: esq.ix, mdL: esq.md, pmR: dir.pm, ixR: dir.ix, mdR: dir.md,
    head: cabeca,
  };
  pl = raiz;
  mats.length = 0; mats.push(escuro, claro);
  L1 = R; L2 = R2; ARM = (L1 + L2) * 0.98;
  LM = Object.assign(M, { g: pg, o: raiz, m: mats, reserva: true });
  LM.hs = LM.head.scale.clone();
  LM.lab = mkLabel('Gorilla');
  pg.add(LM.lab);
  placeLab(LM, pg);
  LM.blob = mkBlob();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { LM.nk = null; });
  NV_CORPO.ativo = true;
  NV_CORPO.raiz = raiz;
  chk();
  return true;
}

nvCorpoReserva();
