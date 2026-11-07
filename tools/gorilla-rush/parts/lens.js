// ---------- LENTES: Google Cardboard 2015, as mesmas do jogo de avião ----------
//
// Pedido do usuário: "bota lentes do Google cardboard 2015". São os coeficientes oficiais da lente
// Cardboard v1 (k1 = 0,441 · k2 = 0,156) — os MESMOS que o Cockpit VR já usa (K1/K2 em
// assets/ui/cockpit/game.html), e que na tela do aparelho já foram aprovados com o VR Box dele.
//
// Como funciona: cada olho é desenhado numa textura do tamanho de MEIA tela e um passe de tela
// cheia aplica a distorção de barril antes de mostrar. É o caminho do Cardboard SDK (e o do jogo de
// avião): a lente da caixa "desfaz" o barril e a imagem fica reta, sem as bordas esticadas.
//
// TRÊS CONTAS QUE NÃO PODEM ERRAR (cada uma já quebrou esta tela):
//   1. o recorte do passe final é em unidades de CSS — o WebGLRenderer JÁ multiplica o viewport pelo
//      pixelRatio da sessão; multiplicar de novo aqui deixava dois quadradinhos no canto;
//   2. o tamanho da textura de cada olho é em PIXELS de device (meia tela × pixelRatio), porque um
//      render target não passa por essa multiplicação;
//   3. o campo de visão por olho é o do NextVR (80°) e o IPD é 64 mm, como no resto do app.
const NVLENS = (() => {
  const FOV = 80, IPD = 0.064;            // CARDBOARD_2015_LENS: fov 80 · ipd 0.064
  const K1 = 0.441, K2 = 0.156;           // coeficientes oficiais da lente Cardboard v1
  const HALF_IPD = IPD / 2;
  const eye = V3();
  let rt = [null, null], tw = 0, th = 0;

  const quadScene = new THREE.Scene();
  const quadCam = new THREE.Camera();
  const uniforms = { tex: { value: null }, k1: { value: K1 }, k2: { value: K2 }, aspect: { value: 1 } };
  const material = new THREE.ShaderMaterial({
    uniforms,
    depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: [
      'varying vec2 vUv; uniform sampler2D tex; uniform float k1, k2, aspect;',
      'void main(){',
      // p vai de -1 a 1 na horizontal (já contando a proporção do olho) e na vertical.
      '  vec2 p = vUv * 2.0 - 1.0; p.x /= aspect;',
      '  float r2 = dot(p, p);',
      '  float f = 1.0 + k1 * r2 + k2 * r2 * r2;',
      '  vec2 q = p * f; q.x *= aspect;',
      '  vec2 uv = q * 0.5 + 0.5;',
      '  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }',
      '  gl_FragColor = texture2D(tex, uv);',
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
      eye.set(1, 0, 0).applyQuaternion(cam.quaternion).multiplyScalar(HALF_IPD);
      cam.fov = FOV;
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

      uniforms.aspect.value = tw / th;
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
