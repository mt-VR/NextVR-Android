// ---------- LENTES: as MESMAS do NextVR (Google Cardboard 2015) ----------
//
// O NextVR desenha os olhos lado a lado com os números da lente Cardboard 2015
// (`CARDBOARD_2015_LENS` em web/src/gorilla-tag.js): FOV 80° por olho, IPD 64 mm (32 mm para cada
// lado), meio-ecrã por olho e nada de pré-distorção — a correção é a própria lente do VR Box, que
// fica na frente do vidro. O jogo original fazia a estereoscopia dele com FOV 70 e com os olhos
// calculados sobre a largura CHEIA do canvas sem contar o pixel ratio: no aparelho com dpr > 1 o
// olho direito saía fora de lugar e a imagem ficava "sem lente".
//
// Por isso o desenho do jogo passa a sair por aqui: mesmos 80°/64 mm do NextVR e recorte por olho
// medido no buffer de verdade (`R.getPixelRatio()`), que é o que a shell faz com as duas câmeras.
const NVLENS = (() => {
  const FOV = 80, IPD = 0.064;          // CARDBOARD_2015_LENS: fov 80 · ipd 0.064
  const HALF_IPD = IPD / 2;
  const eye = V3();

  return {
    /** Ligado quando o jogo está na tela de dois olhos (o modo VR Box do NextVR). */
    on() { return !!vrView && !R.xr.isPresenting; },
    render() {
      const W = innerWidth, H = innerHeight, hw = W / 2;
      const dpr = R.getPixelRatio() || 1;
      const fullW = Math.round(W * dpr), fullH = Math.round(H * dpr);
      const o = cam.position.clone();
      eye.set(1, 0, 0).applyQuaternion(cam.quaternion).multiplyScalar(HALF_IPD);
      cam.fov = FOV;
      cam.aspect = hw / H;
      cam.updateProjectionMatrix();
      R.setScissorTest(true);
      for (let e = 0; e < 2; e++) {
        const x = Math.round(e * hw * dpr);
        const w = Math.round((e ? W - hw : hw) * dpr);
        R.setViewport(x, 0, w, fullH);
        R.setScissor(x, 0, w, fullH);
        cam.position.copy(o).addScaledVector(eye, e ? 1 : -1);
        cam.updateMatrixWorld();
        R.render(S, cam);
      }
      cam.position.copy(o);
      cam.updateMatrixWorld();
      R.setScissorTest(false);
      R.setViewport(0, 0, fullW, fullH);
    },
  };
})();
