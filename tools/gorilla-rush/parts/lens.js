// ---------- LENTES DO GOOGLE CARDBOARD 2015 — do jeito que o WebXR faz ----------
//
// Pedido do usuário: "as lentes não são assim, são igual a do webXr" e, antes: "bota as lentes do
// Google cardboard 2015". Então este arquivo ficou só com o PRESET da Cardboard 2015 — 80° de campo
// por olho e 67 mm entre os olhos — e NÃO desenha mais lente nenhuma:
//
//   * no WebXR (e é assim que a página do jogo roda hoje) o aplicativo desenha cada olho uma vez, de
//     TELA CHEIA, e quem cuida da lente é o visor. Não existe passe de distorção, recorte redondo,
//     anel preto nem moldura: a imagem enche o olho inteiro;
//   * era o contrário do que este arquivo fazia até a 2.6.5. O passe de correção desenhava a imagem
//     dentro de um recorte no meio do olho, e o resultado, visto na tela ou pela lente, era aquela
//     moldura com a imagem menor no centro ("as lentes não são assim");
//   * sem o passe também sai mais barato: dois desenhos por quadro em vez de quatro (duas texturas
//     fora de tela + dois desenhos em tela cheia), que é o que fazia o quadro cair no celular.
//
// O que continua valendo é a GEOMETRIA da lente: cada olho vê meia tela, com 80° de campo
// horizontal, e as duas câmeras ficam a 33,5 mm do centro. O `fov` do three é VERTICAL, então ele sai
// do horizontal dividido pela proporção do olho.
const NVLENS = (() => {
  const FOV = 80, IPD = 0.067;            // CARDBOARD_2015_LENS: fov 80 · ipd 0.067 (67 mm)
  const K1 = 0.441, K2 = 0.156;           // coeficientes oficiais da lente Cardboard v1 (só sonda)
  const HALF_IPD = IPD / 2;
  const DEG = Math.PI / 180;
  const TAN_HALF = Math.tan((FOV / 2) * DEG);
  const eye = V3();

  /** O `fov` de uma PerspectiveCamera do three é VERTICAL: deriva do horizontal que a lente define. */
  function renderFov(aspect) {
    return 2 * Math.atan(TAN_HALF / Math.max(0.05, aspect)) / DEG;
  }

  return {
    k1: K1, k2: K2, fov: FOV, ipd: IPD, fill: 1, corner: 0, tanTex: TAN_HALF,
    /** Ligado quando o jogo está na tela de dois olhos (o modo VR Box do NextVR). */
    on() { return !!vrView && !R.xr.isPresenting; },
    render() {
      const W = innerWidth, H = innerHeight, hw = W / 2;
      const o = cam.position.clone();
      const savedFov = cam.fov, savedAspect = cam.aspect;
      const aspect = hw / Math.max(1, H);
      eye.set(1, 0, 0).applyQuaternion(cam.quaternion).multiplyScalar(HALF_IPD);
      cam.fov = renderFov(aspect);
      cam.aspect = aspect;
      cam.updateProjectionMatrix();
      /* Um desenho por olho, de tela cheia, direto no framebuffer. Nada de passe por cima: a imagem
         é a que a lente do visor vai curvar. */
      R.setScissorTest(true);
      for (let e = 0; e < 2; e++) {
        const x = e ? hw : 0, w = e ? W - hw : hw;
        cam.position.copy(o).addScaledVector(eye, e ? 1 : -1);
        cam.updateMatrixWorld(true);
        R.setViewport(x, 0, w, H);
        R.setScissor(x, 0, w, H);
        R.render(S, cam);
      }
      R.setScissorTest(false);
      R.setViewport(0, 0, W, H);
      cam.position.copy(o);
      cam.fov = savedFov;
      cam.aspect = savedAspect;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld(true);
    },
  };
})();
