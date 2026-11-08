// ---------- LENTES: Google Cardboard 2015, IPD 67 mm, as mesmas do jogo de avião ----------
//
// Pedido do usuário: "bota lentes do Google cardboard 2015" e, nesta rodada, "as lentes do Google
// cardboard e 67mm e conserte as bordas, está quadrado". Então:
//   * os coeficientes são os oficiais da lente Cardboard v1 (k1 = 0,441 · k2 = 0,156), os mesmos do
//     Cockpit VR (K1/K2 em assets/ui/cockpit/game.html);
//   * o IPD passou a 67 mm (era 64 mm), que é a distância que o usuário pediu;
//   * as BORDAS deixaram de ser um quadrado e o TAMANHO passou a ser o do NextVR fora do jogo: a
//     correção usa a MESMA conta do SDK do Cardboard (`sdk/distortion_mesh.cc`,
//     `sdk/lens_distortion.cc`), na direção certa — a imagem ENCOLHE em relação à tela, sobra um
//     anel preto redondo e o mundo fica no tamanho em que o NextVR já desenha a interface dele.
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
//   3. a DIREÇÃO da correção. O SDK mapeia conteúdo da textura (tan t) para a tela em
//      `DistortInverse(t)`, então para um pixel de tela em tan s a amostra é `t = s·(1+k1·s²+k2·s⁴)`
//      — MULTIPLICA o raio, ou seja, a imagem fica MENOR que a tela e as bordas caem em preto. A
//      versão 2.6.3 dividia por (1+k1+k2): isso AMPLIAVA o centro em 1,6× e era o "as lentes estão
//      grandes demais" que o usuário viu;
//   4. o olho é DESENHADO mais aberto do que o campo que se quer entregar (renderFov), porque a
//      correção usa só a parte de dentro da textura. Sem isso, corrigir a lente encolhia o campo;
//   5. o TAMANHO: a imagem ocupa 86 % do olho (`LENS_FILL`). Em 2.6.4 esse recorte era um CÍRCULO
//      e o usuário corrigiu: "as lentes não são circulares, são assim, tipo a do WebXR". O formato
//      do NextVR é um RETÂNGULO DE CANTOS ARREDONDADOS — é a forma que o mesh de distorção do
//      Cardboard desenha (os cantos do conteúdo caem para dentro, as bordas ficam retas). Agora o
//      recorte é uma caixa arredondada do mesmo tamanho da imagem: mesmas contas, outro formato;
//   6. por construção, na borda do retângulo a amostra cai EXATAMENTE na borda da textura
//      (`0,86 · tan(40°)/0,86 = tan 40°` e `Distort(tan 40°) = tan 49,4° = tanTexture`): a imagem
//      chega até o recorte sem sobra preta no meio e sem esticar.
const NVLENS = (() => {
  const FOV = 80, IPD = 0.067;            // CARDBOARD_2015_LENS: fov 80 · ipd 0.067 (67 mm)
  const K1 = 0.441, K2 = 0.156;           // coeficientes oficiais da lente Cardboard v1
  const HALF_IPD = IPD / 2;
  const DEG = Math.PI / 180;
  const eye = V3();
  let rt = [null, null], tw = 0, th = 0;

  const quadScene = new THREE.Scene();
  const quadCam = new THREE.Camera();
  // tan(40°) = o campo que o perfil Cardboard v1 entrega por lado; tanTexture = o que a textura
  // precisa cobrir para que, depois do Distort, a imagem chegue até a borda (≈ 49,4°).
  const RAD = Math.PI / 180;
  const LENS_FILL = 0.86;                         // quanto do olho a imagem ocupa
  const LENS_CORNER = 0.26;                       // raio do canto, em fração da meia-largura
  const TAN_HALF = Math.tan((FOV / 2) * RAD);     // 40°, o campo que o perfil entrega
  const DIST = (t) => t * (1 + K1 * t * t + K2 * Math.pow(t, 4));
  const TAN_TEX = DIST(TAN_HALF);                 // ≈ 1,164 (~49,4°) — o que a textura cobre
  const TAN_EDGE = TAN_HALF / LENS_FILL;          // tan do ângulo na borda do olho
  const uniforms = {
    tex: { value: null }, k1: { value: K1 }, k2: { value: K2 }, ar: { value: 1 },
    tanEdge: { value: TAN_EDGE }, tanTexture: { value: TAN_TEX },
    fill: { value: LENS_FILL }, corner: { value: LENS_CORNER },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: [
      'varying vec2 vUv; uniform sampler2D tex; uniform float k1, k2, ar, tanEdge, tanTexture, fill, corner;',
      'void main(){',
      // p vai de -1 a 1 no olho inteiro; `ar` = altura / meia-largura (só corrige a vertical).
      '  vec2 p = vUv * 2.0 - 1.0;',
      '  float s = length(vec2(p.x, p.y * ar)) * tanEdge;',   // tan do ângulo deste pixel na tela
      '  float s2 = s * s;',
      '  float f = 1.0 + k1 * s2 + k2 * s2 * s2;',            // t = s · f  (Distort do SDK)
      '  vec2 t = p * f * (tanEdge / tanTexture);',           // -1..1 na textura
      '  vec3 c = texture2D(tex, clamp(t * 0.5 + 0.5, 0.0, 1.0)).rgb;',
      // O RECORTE é o do NextVR: retângulo de cantos arredondados, NÃO um círculo ("as lentes não
      // são circulares, são tipo a do WebXR"). `ar` põe a vertical na mesma unidade da horizontal,
      // então o canto é redondo de verdade e não uma elipse.
      '  vec2 b = vec2(fill, fill * ar);',                    // meia-largura / meia-altura da imagem
      '  float rc = min(corner, min(b.x, b.y) * 0.9);',       // o canto nunca come a imagem toda
      '  vec2 d = abs(vec2(p.x, p.y * ar)) - (b - rc);',
      '  float sd = length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - rc;',
      '  gl_FragColor = vec4(c * (1.0 - smoothstep(-0.010, 0.004, sd)), 1.0);',
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
  /** O `fov` de uma PerspectiveCamera do three é VERTICAL: deriva do horizontal que a lente define. */
  function renderFov(aspect) {
    return 2 * Math.atan(TAN_TEX / Math.max(0.01, aspect)) / DEG;
  }

  return {
    k1: K1, k2: K2, fov: FOV, ipd: IPD, fill: LENS_FILL, corner: LENS_CORNER, tanTex: TAN_TEX,
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
      cam.fov = renderFov(tw / Math.max(1, th));
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
