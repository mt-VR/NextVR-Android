// ---------- JANELINHA ESPACIAL DE CARREGAMENTO (2.6.9) ----------
//
// Pedido: "o menu de carregando o jogo quero uma janelinha espacial".
//
// Hoje, entre o toque em JOGAR e o menu do gorila aparecer, quem está com o visor na cara vê a
// última cena do NextVR parada (ou o preto da página trocando) — sem nenhuma informação. E há uma
// segunda espera, mais longa: o mapa do jogo (4 MB de base64 + gzip) e o modelo do gorila levam
// alguns segundos para montar, e nesse tempo o menu do jogo ainda está vazio.
//
// Esta é a janela que cobre as duas. Ela é um canvas desenhado como um painel NO MUNDO, a 1,4 m à
// frente do olho, com o tamanho de uma folha A5 — não é HTML sobre a tela: no VR Box o HTML da
// página fica esticado em dois olhos e o texto sai ilegível. Desenhar no mundo resolve isso e é o
// mesmo caminho que o menu do jogo já usa (`NVIG`).
//
// Ela NÃO depende do app: aparece assim que a página carrega (a página só carrega depois que o
// NextVR abriu a tela do jogo) e se retira sozinha quando o jogo está pronto — mapa montado E modelo
// do gorila resolvido (deu certo ou falhou de vez). Se a página falhar no arranque, o app mostra a
// janela de problema dele; esta aqui simplesmente some junto com a página.
//
// Regra de honestidade: a barra avança com o que ACONTECEU (mapa pronto = 55 %, modelo = 90 %), não
// com um relógio. Parada, ela fica parada — e o texto diz o que está faltando.
(function () {
  const W = 640, H = 400;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.anisotropy = 1;

  // 1,4 m à frente, 0,62 m de largura: cabe nos dois olhos e as letras ficam legíveis nas lentes.
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.62, 0.62 * H / W),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false, toneMapped: false }),
  );
  mesh.renderOrder = 1000;
  mesh.frustumCulled = false;
  mesh.visible = false;
  S.add(mesh);

  const NV_LOADWIN = {
    ativo: false,
    desde: 0,
    /** 0..1 — o que já está pronto de verdade (ver `nvLoadProgress`). */
    progresso: 0,
    texto: 'Preparando o jogo…',
    detalhe: '',
    frames: 0,
  };
  window.__nvLoad = NV_LOADWIN;

  /** Coloca a janelinha à frente do olho, na altura dos olhos e levemente abaixo do centro. */
  function posicionar() {
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    fwd.y = 0;
    if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, -1);
    fwd.normalize();
    mesh.position.set(cam.position.x + fwd.x * 1.4, cam.position.y - 0.03, cam.position.z + fwd.z * 1.4);
    mesh.quaternion.copy(cam.quaternion);
  }

  function round(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  let lastDraw = 0;
  function desenhar(now) {
    // 12 desenhos por segundo bastam: é uma janela com uma barra, não um jogo. Cada desenho sobe
    // uma textura nova para a GPU, e fazer isso a 60 Hz só para mover uma barra era gasto puro.
    if (now - lastDraw < 80) return;
    lastDraw = now;
    ctx.clearRect(0, 0, W, H);
    // Corpo de vidro escuro, borda verde do NextVR.
    round(0, 0, W, H, 34);
    ctx.fillStyle = 'rgba(5,14,11,.92)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(61,220,132,.85)';
    ctx.lineWidth = 3;
    round(2, 2, W - 4, H - 4, 32);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#3ddc84';
    ctx.font = 'bold 22px system-ui,sans-serif';
    ctx.fillText('NEXT VR', 34, 54);
    ctx.fillStyle = 'rgba(234,255,242,.72)';
    ctx.font = '20px system-ui,sans-serif';
    ctx.fillText('GORILLA RUSH', 34, 82);

    ctx.fillStyle = '#eafff2';
    ctx.font = 'bold 30px system-ui,sans-serif';
    ctx.fillText('CARREGANDO O JOGO', 34, 150);

    // Barra: o preenchimento é o progresso REAL.
    const bx = 34, by = 186, bw = W - 68, bh = 16;
    round(bx, by, bw, bh, 8);
    ctx.fillStyle = 'rgba(255,255,255,.12)';
    ctx.fill();
    const f = Math.max(.02, Math.min(1, NV_LOADWIN.progresso));
    if (f > 0.001) {
      round(bx, by, Math.max(16, bw * f), bh, 8);
      ctx.fillStyle = '#3ddc84';
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(234,255,242,.9)';
    ctx.font = 'bold 18px system-ui,sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(f * 100) + '%', W - 34, by + bh + 30);

    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(234,255,242,.92)';
    ctx.font = '22px system-ui,sans-serif';
    ctx.fillText(NV_LOADWIN.texto, 34, by + bh + 34);
    if (NV_LOADWIN.detalhe) {
      ctx.fillStyle = 'rgba(234,255,242,.55)';
      ctx.font = '17px system-ui,sans-serif';
      const d = NV_LOADWIN.detalhe;
      ctx.fillText(d.length > 54 ? d.slice(0, 53) + '…' : d, 34, by + bh + 66);
    }
    // Rodinha: prova de que a página está viva mesmo quando o progresso não anda (mapa grande,
    // modelo compilando). Sem ela, uma janela parada em 55 % não se distingue de uma travada.
    const cx = W - 60, cy = 66, r = 16;
    ctx.strokeStyle = 'rgba(61,220,132,.28)';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    const spin = (now / 420) % (Math.PI * 2);
    ctx.strokeStyle = '#3ddc84';
    ctx.beginPath(); ctx.arc(cx, cy, r, spin, spin + 1.4); ctx.stroke();

    texture.needsUpdate = true;
  }

  /** Abre (ou reabre) a janela. `texto`/`detalhe` são do estado REAL do jogo. */
  function mostrar(texto, detalhe) {
    NV_LOADWIN.ativo = true;
    NV_LOADWIN.desde = performance.now();
    if (texto) NV_LOADWIN.texto = texto;
    if (detalhe !== undefined) NV_LOADWIN.detalhe = detalhe || '';
    mesh.visible = true;
    posicionar();
    desenhar(performance.now() + 999);
  }

  function esconder() {
    if (!NV_LOADWIN.ativo) return;
    NV_LOADWIN.ativo = false;
    mesh.visible = false;
  }

  window.__nvLoadShow = function (texto, detalhe) { try { mostrar(texto, detalhe); } catch (e) {} };
  window.__nvLoadHide = function () { try { esconder(); } catch (e) {} };
  window.__nvLoadSet = function (progresso, texto, detalhe) {
    try {
      NV_LOADWIN.progresso = Math.max(0, Math.min(1, +progresso || 0));
      if (texto) NV_LOADWIN.texto = texto;
      if (detalhe !== undefined) NV_LOADWIN.detalhe = detalhe || '';
      if (NV_LOADWIN.ativo) desenhar(performance.now() + 999);
    } catch (e) {}
  };

  /**
   * Progresso a partir do que o jogo já montou. O mapa é ~55 % do tempo de arranque (é ele que
   * descomprime 4 MB) e o modelo do gorila ~35 %; os dois prontos = 100 %.
   */
  function nvLoadProgress() {
    let p = 0;
    try { if (typeof mapDone !== 'undefined' && mapDone) p += .55; } catch (e) {}
    try {
      if (typeof NV_MODEL !== 'undefined' && NV_MODEL) {
        if (NV_MODEL.ok) p += .35;
        else if (NV_MODEL.erro) p += .20;   // falhou de vez: segue, mas sem o modelo
      }
    } catch (e) {}
    if (p >= .9) p = 1;
    return p;
  }

  /** Chamado pelo laço de quadro do jogo (`frame`), não por um timer: sem quadro não há janela. */
  window.__nvLoadTick = function (now) {
    if (!NV_LOADWIN.ativo) return;
    NV_LOADWIN.frames++;
    NV_LOADWIN.progresso = nvLoadProgress();
    if (NV_LOADWIN.progresso >= 1) {
      NV_LOADWIN.texto = 'Pronto!';
      desenhar(now);
      // Um instante para o "PRONTO" ser visto, depois a janela sai e o menu do jogo aparece.
      if (now - NV_LOADWIN.desde > 650) esconder();
      return;
    }
    if (NV_LOADWIN.progresso >= .55) { NV_LOADWIN.texto = 'Montando o gorila…'; NV_LOADWIN.detalhe = 'o mapa já está pronto'; }
    else if (NV_LOADWIN.progresso > 0) { NV_LOADWIN.texto = 'Abrindo o mapa…'; NV_LOADWIN.detalhe = ''; }
    posicionar();
    desenhar(now);
  };

  // A janela abre JÁ no arranque da página. O jogo em si (o mapa) é assíncrono: `loadMap()` só é
  // chamado no fim do script, e é aí que o laço começa a chamar `__nvLoadTick`.
  mostrar('Preparando o jogo…', 'abrindo a cena');
})();
