// ---------- LENTES: Google Cardboard 2015, IPD 67 mm, as mesmas do jogo de avião ----------
//
// Pedido do usuário: "bota lentes do Google cardboard 2015" e, nesta rodada, "as lentes do Google
// cardboard e 67mm e conserte as bordas, está quadrado". Então:
//   * os coeficientes são os oficiais da lente Cardboard v1 (k1 = 0,441 · k2 = 0,156), os mesmos do
//     Cockpit VR (K1/K2 em assets/ui/cockpit/game.html);
//   * o IPD passou a 67 mm (era 64 mm), que é a distância que o usuário pediu;
//   * as BORDAS deixaram de ser um quadrado: a correção agora preenche o olho inteiro (nenhuma
//     moldura preta sobrando) e o canto arredonda, como a lente redonda da caixa.
//
// COMO FUNCIONA: cada olho é desenhado numa textura do tamanho de MEIA tela e um passe de tela cheia
// aplica a distorção de barril antes de mostrar. É o caminho do Cardboard SDK (e o do jogo de avião):
// a lente da caixa "desfaz" o barril e a imagem fica reta, sem as bordas esticadas.
//
// AS CONTAS QUE NÃO PODEM ERRAR (cada uma já quebrou esta tela):
//   1. o recorte do passe final é em unidades de CSS — o WebGLRenderer JÁ multiplica o viewport pelo
//      pixelRatio da sessão; multiplicar de novo aqui deixava dois quadradinhos no canto;
//   2. o tamanho da textura de cada olho é em PIXELS de device (meia tela × pixelRatio), porque um
//      render target não passa por essa multiplicação;
//   3. o raio da distorção é normalizado pelo CANTO do olho e multiplicado por 1/(1+k1+k2): assim o
//      canto da tela encosta exatamente na borda da textura. Com a conta antiga (raio cru) a
//      ampliação estourava, a amostra saía da textura e sobrava uma moldura preta — a imagem
//      pequena e "quadrada" no meio do olho que o usuário viu;
//   4. o olho é DESENHADO mais aberto do que o campo que se quer entregar (RENDER_FOV), porque a
//      correção usa só a parte de dentro da textura. Sem isso, corrigir a lente encolhia o campo.
const NVLENS = (() => {
  const FOV = 80, IPD = 0.067;            // CARDBOARD_2015_LENS: fov 80 · ipd 0.067 (67 mm)
  const K1 = 0.441, K2 = 0.156;           // coeficientes oficiais da lente Cardboard v1
  const HALF_IPD = IPD / 2;
  const DEG = Math.PI / 180;
  const eye = V3();
  let rt = [null, null], tw = 0, th = 0;

  const quadScene = new THREE.Scene();
  const quadCam = new THREE.Camera();
  const uniforms = { tex: { value: null }, k1: { value: K1 }, k2: { value: K2 }, ar: { value: 1 } };
  const material = new THREE.ShaderMaterial({
    uniforms,
    depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: [
      'varying vec2 vUv; uniform sampler2D tex; uniform float k1, k2, ar;',
      'void main(){',
      // p vai de -1 a 1 no olho inteiro; `ar` é altura / meia-largura, usado só para normalizar o raio.
      '  vec2 p = vUv * 2.0 - 1.0;',
      '  float rm = sqrt(1.0 + ar * ar);',
      '  float rn = min(length(p) / rm, 1.0);',
      '  float r2 = rn * rn;',
      '  float f = (1.0 + k1 * r2 + k2 * r2 * r2) / (1.0 + k1 + k2);',
      '  vec3 c = texture2D(tex, p * f * 0.5 + 0.5).rgb;',
      // Canto arredondado: a lente da caixa é redonda; com corte reto a borda ficava quadrada.
      '  gl_FragColor = vec4(c * (1.0 - smoothstep(0.90, 1.0, rn)), 1.0);',
      '}',
    ].join('\n'),
  });
  quadScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  /** Texturas dos olhos, em pixels de device (metade da tela × pixelRatio). */
  function ensure(w, h) {
    if (w === tw && h === th && rt[0] && rt[1]) return;
    tw = w; th = h;
    for (let e = 0; e < 2; e++) {
      if (rt[e]) rt[e].dispose();
      rt[e] = new THREE.WebGLRenderTarget(Math.max(2, w), Math.max(2, h), {
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
        depthBuffer: true, stencilBuffer: false,
      });
    }
  }

  /**
   * Campo que precisa ser DESENHADO para que, depois da correção, o olho entregue `FOV` no meio da
   * borda (é lá que o fator da lente é menor, e é ele que manda no enquadramento).
   */
  function renderFov(ar) {
    const rm = Math.sqrt(1 + ar * ar), rn = 1 / rm, r2 = rn * rn;
    const fe = (1 + K1 * r2 + K2 * r2 * r2) / (1 + K1 + K2);
    const t = Math.tan((FOV / 2) * DEG) / fe;
    return 2 * Math.atan(t) / DEG;
  }

  return {
    k1: K1, k2: K2, fov: FOV, ipd: IPD,
    /** Ligado quando o jogo está na tela de dois olhos (o modo VR Box do NextVR). */
    on() { return !!vrView && !R.xr.isPresenting; },
    render() {
      const W = innerWidth, H = innerHeight, hw = W / 2;
      const dpr = R.getPixelRatio() || 1;
      ensure(Math.round(hw * dpr), Math.round(H * dpr));
      const o = cam.position.clone();
      const savedFov = cam.fov, savedAspect = cam.aspect;
      const ar = th / Math.max(1, tw);
      eye.set(1, 0, 0).applyQuaternion(cam.quaternion).multiplyScalar(HALF_IPD);
      cam.fov = renderFov(ar);
      cam.aspect = tw / th;
      cam.updateProjectionMatrix();
      for (let e = 0; e < 2; e++) {
        cam.position.copy(o).addScaledVector(eye, e ? 1 : -1);
        cam.updateMatrixWorld(true);
        R.setRenderTarget(rt[e]);
        R.render(S, cam);
      }
      R.setRenderTarget(null);
      cam.position.copy(o);
      cam.fov = savedFov;
      cam.aspect = savedAspect;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld(true);

      uniforms.ar.value = ar;
      R.setScissorTest(true);
      for (let e = 0; e < 2; e++) {
        const x = e ? hw : 0, w = e ? W - hw : hw;
        // CSS: o renderer multiplica pelo pixelRatio ao falar com o canvas.
        R.setViewport(x, 0, w, H);
        R.setScissor(x, 0, w, H);
        uniforms.tex.value = rt[e].texture;
        R.render(quadScene, quadCam);
      }
      R.setScissorTest(false);
      R.setViewport(0, 0, W, H);
    },
  };
})();
