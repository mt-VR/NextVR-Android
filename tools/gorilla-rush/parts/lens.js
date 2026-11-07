// ---------- LENTES: as MESMAS do NextVR (Google Cardboard 2015) ----------
//
// O NextVR desenha os olhos lado a lado com os números da lente Cardboard 2015
// (`CARDBOARD_2015_LENS` em web/src/gorilla-tag.js): FOV 80° por olho, IPD 64 mm (32 mm para cada
// lado) e meia-ecrã por olho. O jogo original fazia a estereoscopia dele com FOV 70 — daí a imagem
// parecer "sem lente" e mais estreita que o resto do app.
//
// O QUE NÃO SE FAZ AQUI: multiplicar por `getPixelRatio()`. O three.js JÁ multiplica o viewport e o
// scissor pelo pixel ratio da sessão (`setViewport` ×  pixelRatio, dentro do renderer), então passar
// pixels de device transformava cada olho em um oitavo da tela — dois retângulos pequenos no canto
// inferior esquerdo, que é exatamente o que aparecia no aparelho. As coordenadas abaixo são as de
// CSS (as mesmas que o `renderPlay()` original usava e que funcionavam): largura/altura da janela,
// olho esquerdo na metade esquerda, olho direito na metade direita.
const NVLENS = (() => {
  const FOV = 80, IPD = 0.064;          // CARDBOARD_2015_LENS: fov 80 · ipd 0.064
  const HALF_IPD = IPD / 2;
  const eye = V3();

  return {
    /** Ligado quando o jogo está na tela de dois olhos (o modo VR Box do NextVR). */
    on() { return !!vrView && !R.xr.isPresenting; },
    render() {
      const W = innerWidth, H = innerHeight, hw = W >> 1;
      const o = cam.position.clone();
      // Os olhos ficam 32 mm para cada lado da cabeça, como as duas câmeras do NextVR.
      eye.set(1, 0, 0).applyQuaternion(cam.quaternion).multiplyScalar(HALF_IPD);
      // Cada olho vê meia tela: 80° de campo e a proporção de MEIA largura (não da tela inteira).
      cam.fov = FOV;
      cam.aspect = hw / H;
      cam.updateProjectionMatrix();
      R.setScissorTest(true);
      for (let e = 0; e < 2; e++) {
        const x = e ? hw : 0, w = e ? W - hw : hw;
        R.setViewport(x, 0, w, H);
        R.setScissor(x, 0, w, H);
        cam.position.copy(o).addScaledVector(eye, e ? 1 : -1);
        cam.updateMatrixWorld();
        R.render(S, cam);
      }
      cam.position.copy(o);
      cam.updateMatrixWorld();
      R.setScissorTest(false);
      R.setViewport(0, 0, W, H);
    },
  };
})();
