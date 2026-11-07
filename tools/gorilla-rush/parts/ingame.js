// ---------- MENU DENTRO DO JOGO (mira pelo giroscópio) ----------
//
// Dentro do VR Box não existe toque na tela: o menu do jogo original (PLAY / STYLE / SETTINGS) era
// inalcançável. Este menu é um painel de verdade NO MUNDO, pendurado 1,5 m à frente do jogador. A
// mira é o centro da visão — vira a cabeça (o giroscópio do celular) para apontar e fica 0,9 s em
// cima do botão; ele aciona. Nada depende de toque, controle ou do rastreio de mão.
//
// Abrir: segure as DUAS mãos paradas à frente da câmera por 1,2 s (o gesto que o jogo já usa para
// "mostrar as mãos"), ou toque com dois dedos na tela, ou a tecla M.
var QNICK = '', QROOM = '', QMODE = 'cas', START_MODE = 'solo', BOOTED = false, HANDSOBJ = null;

const IGW = 1024, IGH = 640, IG_DWELL = 0.9;
const ACCS = {
  g: ['', 'g_white'],
  h: ['', 'h_top', 'h_party', 'h_banana', 'h_penguin'],
  c: ['', 'c_hawaii'],
};
const ACCNAME = {
  '': 'NENHUM', g_white: 'ÓCULOS BRANCOS', h_top: 'CARTOLA', h_party: 'CHAPÉU DE FESTA',
  h_banana: 'CASCA DE BANANA', h_penguin: 'CHAPÉU DE PINGUIM', c_hawaii: 'CAMISETA HAVAiana',
};
const COLORS = ['#ffffff', '#3a2a20', '#e53935', '#1e88e5', '#43a047', '#fdd835', '#8e24aa', '#ff7043'];

const NVIG = (() => {
  const canvas = document.createElement('canvas');
  canvas.width = IGW; canvas.height = IGH;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter; texture.magFilter = THREE.LinearFilter; texture.generateMipmaps = false;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.6, 1.0),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false, toneMapped: false }),
  );
  mesh.visible = false; mesh.renderOrder = 999; mesh.frustumCulled = false;
  S.add(mesh);
  const ray = new THREE.Raycaster();
  const items = [];
  let open = false, hover = null, dwell = 0, hold = 0, note = '', noteAt = 0;

  const round = (x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  };

  // Cada botão se declara uma vez; o desenho e a mira usam a mesma lista.
  function button(id, label, x, y, w, h, tint) {
    const item = { id, label, x, y, w, h, tint: tint || '#3ddc84' };
    items.push(item);
    return item;
  }

  function build() {
    items.length = 0;
    // SKIN
    button('title:skin', 'SKIN', 24, 92, 476, 34, '#0b1410');
    COLORS.forEach((hex, i) => button('color:' + hex, '', 32 + i * 58, 136, 50, 50, hex));
    button('accg', 'ÓCULOS · ' + ACCNAME[myAcc.g], 24, 200, 476, 54);
    button('acch', 'CABEÇA · ' + ACCNAME[myAcc.h], 24, 262, 476, 54);
    button('accc', 'ROUPA · ' + (myAcc.c === 'c_hawaii' ? 'CAMISETA HAVAiana' : ACCNAME[myAcc.c]), 24, 324, 476, 54);
    button('title:cfg', 'GORILA · CONFIGURAÇÕES', 524, 92, 476, 34, '#0b1410');
    button('gfx', 'GRÁFICOS · ' + ['BAIXO', 'MÉDIO', 'ALTO'][gfx], 524, 136, 476, 54);
    button('screen', 'TELA · ' + (vrOn ? 'VR BOX (2 OLHOS)' : 'NORMAL (1 OLHO)'), 524, 198, 476, 54);
    button('move', 'MOVIMENTO · ' + (assist ? 'MÃOS + TOQUE' : 'SÓ MÃOS'), 524, 260, 476, 54);
    button('hands', 'RASTREIO · ' + ($('ht').value == '1' ? 'PRECISO' : 'RÁPIDO'), 524, 322, 476, 54);
    button('room', 'SALA · ' + (NET_STATE === 'online' ? (NET.code + ' ' + (NET.host ? '(ANFITRIÃO)' : '')) : 'SOZINHO'), 524, 384, 476, 54,
      NET_STATE === 'online' ? '#3ddc84' : '#8b949e');
    button('leave', NET_STATE === 'online' ? 'SAIR DA SALA' : 'SEM SALA · JOGANDO SOZINHO', 524, 446, 476, 54, '#8b949e');
    button('close', 'VOLTAR AO JOGO', 524, 524, 232, 62);
    button('exit', 'SAIR DO JOGO', 768, 524, 232, 62, '#ff7043');
  }

  function draw() {
    ctx.clearRect(0, 0, IGW, IGH);
    // Painel
    ctx.fillStyle = 'rgba(6,16,12,.94)';
    round(0, 0, IGW, IGH, 28); ctx.fill();
    ctx.strokeStyle = 'rgba(61,220,132,.85)'; ctx.lineWidth = 4;
    round(2, 2, IGW - 4, IGH - 4, 26); ctx.stroke();
    ctx.fillStyle = '#3ddc84'; ctx.font = 'bold 46px system-ui,sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('GORILLA RUSH', 24, 62);
    ctx.fillStyle = 'rgba(234,255,242,.72)'; ctx.font = '22px system-ui,sans-serif';
    ctx.fillText('MIRE COM A CABEÇA · SEGURE A MIRA 0,9 s', 360, 58);

    for (const it of items) {
      const isHover = hover === it.id;
      if (it.id.startsWith('color:')) {
        ctx.fillStyle = it.tint;
        ctx.beginPath(); ctx.arc(it.x + it.w / 2, it.y + it.h / 2, it.w / 2 - 3, 0, 7); ctx.fill();
        if (isHover) { ctx.strokeStyle = '#3ddc84'; ctx.lineWidth = 5; ctx.stroke(); }
        if (it.tint.toLowerCase() === '#' + String(color).toLowerCase().replace('#', '')) {
          ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 3; ctx.stroke();
        }
        continue;
      }
      if (it.id.startsWith('title:')) {
        ctx.fillStyle = 'rgba(61,220,132,.9)'; ctx.font = 'bold 24px system-ui,sans-serif';
        ctx.fillText(it.label, it.x, it.y + 26);
        continue;
      }
      round(it.x, it.y, it.w, it.h, 14);
      ctx.fillStyle = isHover ? 'rgba(61,220,132,.30)' : 'rgba(255,255,255,.10)';
      ctx.fill();
      ctx.strokeStyle = isHover ? '#3ddc84' : 'rgba(255,255,255,.22)';
      ctx.lineWidth = isHover ? 4 : 2; ctx.stroke();
      ctx.fillStyle = '#eafff2'; ctx.font = 'bold 24px system-ui,sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(it.label, it.x + it.w / 2, it.y + it.h / 2 + 9, it.w - 20);
      if (isHover) {
        // Barra de permanência: o botão aciona quando ela enche.
        ctx.fillStyle = 'rgba(61,220,132,.9)';
        ctx.fillRect(it.x + 6, it.y + it.h - 10, (it.w - 12) * Math.min(1, dwell / IG_DWELL), 5);
      }
    }
    if (note && performance.now() - noteAt < 2600) {
      ctx.fillStyle = 'rgba(255,176,32,.95)'; ctx.font = 'bold 22px system-ui,sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(note, IGW / 2, IGH - 14);
    }
    texture.needsUpdate = true;
  }

  function openMenu() {
    if (open) return;
    const fwd = V3(0, 0, -1).applyQuaternion(cam.quaternion);
    fwd.y = 0;
    if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, -1);
    fwd.normalize();
    mesh.position.set(cam.position.x + fwd.x * 1.5, cam.position.y - 0.05, cam.position.z + fwd.z * 1.5);
    mesh.quaternion.copy(cam.quaternion);
    mesh.visible = true;
    open = true; hover = null; dwell = 0;
    build(); draw();
    if (typeof NextVRGame !== 'undefined' && NextVRGame && NextVRGame.stage) try { NextVRGame.stage('menu'); } catch (e) {}
  }

  function closeMenu() {
    if (!open) return;
    open = false; mesh.visible = false; hover = null; dwell = 0;
  }

  function say(text) { note = text; noteAt = performance.now(); }

  function activate(id) {
    if (id.startsWith('color:')) { setColor(id.slice(6)); try { localStorage.setItem('gr_col', id.slice(6)); } catch (e) {} }
    else if (id === 'accg' || id === 'acch' || id === 'accc') {
      const key = id.slice(3);
      const list = ACCS[key];
      myAcc[key] = list[(list.indexOf(myAcc[key] || '') + 1) % list.length];
      try { localStorage.setItem('gr_acc', JSON.stringify(myAcc)); } catch (e) {}
      refreshAcc(); say('SKIN SALVA');
    } else if (id === 'gfx') {
      gfx = (gfx + 1) % 3;
      dpr = prCap(); rs(); R.shadowMap.enabled = gfx > 0; sun.castShadow = gfx > 0;
      mapMeshes.forEach(m => { m.material.needsUpdate = true; });
      try { localStorage.setItem('gr_gfx', String(gfx)); } catch (e) {}
      say('GRÁFICOS · ' + ['BAIXO', 'MÉDIO', 'ALTO'][gfx]);
    } else if (id === 'screen') {
      vrOn = !vrOn; vrView = vrOn;
      const c = $('cam'); if (c) c.classList.toggle('vr', vrOn);
      rs(); say(vrOn ? 'DOIS OLHOS (VR BOX)' : 'TELA NORMAL');
    } else if (id === 'move') {
      assist = assist ? 0 : 1;
      const m = $('mv'); if (m) m.value = String(assist);
      say(assist ? 'MÃOS + TOQUE' : 'SÓ AS MÃOS');
    } else if (id === 'hands') {
      const h = $('ht'); if (h) h.value = h.value == '1' ? '0' : '1';
      if (HANDSOBJ) try { HANDSOBJ.setOptions({ modelComplexity: +h.value }); } catch (e) {}
      say('RASTREIO · ' + (h.value == '1' ? 'PRECISO' : 'RÁPIDO'));
    } else if (id === 'leave') {
      if (NET_STATE === 'online') { nvSend({ t: 'leave' }); nvClose('você saiu da sala'); say('SAIU DA SALA'); }
      else say('VOCÊ ESTÁ SOZINHO');
    } else if (id === 'close') { closeMenu(); return; }
    else if (id === 'exit') { leaveGame(); return; }
    build(); draw();
  }

  function tick(dt) {
    // Gestos que abrem o menu (nenhum deles precisa de toque na tela).
    const now = performance.now();
    const both = slot[0].p && slot[1].p && now - slot[0].t < 320 && now - slot[1].t < 320;
    const still = both && hv[0].length() + hv[1].length() < 0.75;
    hold = still ? hold + dt : 0;
    if (!open && hold > 1.2) { hold = 0; openMenu(); }
    if (!open) return;
    // A mira é o centro do olhar: um raio da câmera encontra o painel no mundo.
    mesh.lookAt(cam.position.x, mesh.position.y, cam.position.z);
    mesh.updateMatrixWorld(true);
    ray.setFromCamera({ x: 0, y: 0 }, cam);
    const hit = ray.intersectObject(mesh, false)[0];
    const found = hit && hit.uv ? items.find(it => {
      const x = hit.uv.x * IGW, y = (1 - hit.uv.y) * IGH;
      return x >= it.x && x <= it.x + it.w && y >= it.y && y <= it.y + it.h;
    }) : null;
    if (!found || found.id.startsWith('title:')) { hover = null; dwell = 0; }
    else if (hover !== found.id) { hover = found.id; dwell = 0; }
    else {
      dwell += dt;
      if (dwell >= IG_DWELL) { dwell = 0; activate(found.id); }
    }
    draw();
  }

  return {
    tick, openMenu, closeMenu,
    get isOpen() { return open; },
    toggle() { if (open) closeMenu(); else openMenu(); },
  };
})();

/** Sair do jogo: pelo app quando existe a ponte; no navegador, volta para o vazio. */
function leaveGame() {
  try { if (typeof NextVRGame !== 'undefined' && NextVRGame && NextVRGame.exit) { NextVRGame.exit(); return; } } catch (e) {}
  try { if (window.NativeXR && NativeXR.exitGame) { NativeXR.exitGame(); return; } } catch (e) {}
  location.replace('about:blank');
}

// Dois dedos na tela também abrem o menu (celular sem VR Box, ou com o vidro na frente).
addEventListener('pointerdown', e => { if (ptrs.size === 2 && state == 'play') NVIG.toggle(); }, true);
addEventListener('keydown', e => { if (state == 'play' && (e.key === 'm' || e.key === 'M')) NVIG.toggle(); });

/**
 * A ponte com o app (o mesmo nome que o Cockpit VR usa): quando o Android concede a câmera DEPOIS de
 * a página abrir, o lado nativo chama isto para o rastreio de mão subir sem recarregar o jogo.
 */
window.__nvRetryHands = () => {
  // Com a ponte nativa as mãos já vêm do NextVR: abrir a câmera do jogo aqui tiraria a câmera
  // do app e o jogo ficaria sem mãos (e sem o rastreio do NextVR).
  try { if (!camOn && !NV_NATIVE_HANDS) startCam(); } catch (e) { /* segue sem mãos */ }
};
// ---------- SETA NO CHÃO: para onde o gorila vai ----------
//
// "tá bem difícil de saber pra onde o gorilla vai": em primeira pessoa, com os braços ocupando a
// parte de baixo da tela, nada no mundo dizia para onde o corpo aponta. Aqui entra uma seta discreta
// no chão, ~1 m à frente dos pés, sempre alinhada com a direção do corpo — o mesmo desenho nos dois
// olhos, sem texto nenhum na tela. Ela some fora da partida.
const NVHEAD = (() => {
  let mesh = null, mat = null;
  function build() {
    // Seta: cabo (um quadrilátero) + ponta (um triângulo), deitada no plano XZ, apontando -Z.
    const v = new Float32Array([
      -0.055, 0, -0.30, 0.055, 0, -0.30, 0.055, 0, -0.72,
      -0.055, 0, -0.30, 0.055, 0, -0.72, -0.055, 0, -0.72,
      -0.20, 0, -0.66, 0.20, 0, -0.66, 0, 0, -1.02,
    ]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(v, 3));
    g.computeBoundingSphere();
    mat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.42,
      depthWrite: false, toneMapped: false, side: THREE.DoubleSide,
    });
    mesh = new THREE.Mesh(g, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = 2;
    mesh.visible = false;
    S.add(mesh);
  }
  const fw = V3();
  return {
    tick() {
      try {
        if (!mesh) build();
        if (state != 'play') { mesh.visible = false; return; }
        fw.set(0, 0, -1).applyQuaternion(cam.quaternion);
        const h = Math.hypot(fw.x, fw.z);
        if (h < 1e-4) { mesh.visible = false; return; }
        fw.x /= h; fw.z /= h;
        mesh.visible = true;
        mesh.position.set(P.x, P.y - 1.08, P.z);
        mesh.rotation.y = Math.atan2(-fw.x, -fw.z);
      } catch (e) { /* sem seta o jogo continua */ }
    },
  };
})();

// Sonda para diagnóstico (e para o app saber em que pé está o jogo sem abrir o console).
window.__nvGorilla = () => ({
  estado: state, rede: NET_STATE, sala: NET.code, anfitriao: !!NET.host,
  sozinho: SOLO, servidor: SRV_URL, erro: NET_ERR, menu: NVIG.isOpen,
  // O que a tela mostrava mal na 2.6.0: o boneco do gorila e as mãos.
  modelo: !!pl, bracos: !!(LM && LM.uL && LM.uR), maos: NV_HAND_FRAMES,
  seguradas: NV_HAND_HELD, seta: !!(NVHEAD && true),
  nativo: NV_NATIVE_HANDS, olhos: vrView, lente: NVLENS && NVLENS.k1,
  ipd: NVLENS && NVLENS.ipd, campo: NVLENS && NVLENS.fov,
  // Carregamento do boneco: quantas tentativas, por qual caminho e, se falhou, o motivo real.
  carga: typeof NV_MODEL !== 'undefined' ? { ok: NV_MODEL.ok, tentativas: NV_MODEL.tentativas, modo: NV_MODEL.modo, erro: NV_MODEL.erro } : null,
  tela: innerWidth + 'x' + innerHeight,
});

// O BONECO: um aviso só quando o carregamento FALHOU de verdade.
//
// Na 2.6.2 este aviso saía por tempo: 8 s depois do arranque, se o modelo ainda não estivesse na
// tela, o app mostrava "o modelo do gorila não carregou". Num celular que ainda está decodificando o
// mapa, 8 s não é falha — é demora — e o recado aparecia sem haver problema nenhum (era o que o
// usuário via). Agora quem decide é o carregador (`NV_MODEL`, em adapt.mjs): ele tenta três
// caminhos e, só depois de os três falharem, o motivo REAL chega ao app. Enquanto está carregando,
// o aviso é um "ainda carregando" de 30 s, e ele não acusa o jogo de estar sem boneco.
setTimeout(() => {
  if (pl) return;
  if (typeof NV_MODEL === 'undefined') { nvLog('o boneco do gorila ainda não carregou'); return; }
  if (NV_MODEL.erro) return;   // o carregador já avisou, com o motivo
  const seg = Math.round((Date.now() - NV_MODEL.desde) / 1000);
  if (NV_MODEL.ok) return;
  nvLog('o boneco do gorila ainda está carregando (' + seg + ' s, tentativa ' + NV_MODEL.tentativas + ')');
}, 30000);

// ---------- ARRANQUE: entra direto, com o que o NextVR escolheu ----------
//
// O NextVR manda tudo na query string (nome, sala, modo, skin, gráficos, tela, servidor). Sem
// skin escolhida, o gorila entra SEM acessório nenhum — era o pedido: "vamos entrar sem skin".
(function boot() {
  if (BOOTED) return;
  BOOTED = true;
  const q = new URLSearchParams(location.search);
  const num = (v, d) => (v !== null && v !== '' && !isNaN(+v) ? +v : d);

  QNICK = (q.get('nick') || '').slice(0, 12);
  QROOM = (q.get('room') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
  QMODE = ['cas', 'tag', 'inf'].includes(q.get('mode')) ? q.get('mode') : 'cas';
  SOLO = q.get('solo') === '1';
  SRV_URL = q.get('srv') || '';
  START_MODE = q.get('quick') === '1' ? 'quick' : (QROOM ? 'join' : 'solo');

  if (QNICK) { me.nick = QNICK; const n = $('nick'); if (n) n.value = QNICK; }
  gfx = Math.max(0, Math.min(2, num(q.get('gfx'), gfx)));
  vrOn = q.get('vr') !== '0';
  assist = num(q.get('mv'), assist) ? 1 : 0;
  const ht = $('ht'); if (ht && q.get('ht') !== null) ht.value = q.get('ht') === '1' ? '1' : '0';
  const mv = $('mv'); if (mv) mv.value = String(assist);
  const gx = $('gfx'); if (gx) gx.value = String(gfx);
  const vs = $('vr'); if (vs) vs.value = vrOn ? '1' : '0';

  if (q.get('col')) setColor(q.get('col'));
  if (q.has('acc')) {
    const parts = (q.get('acc') || '').split(',').map(s => s.trim());
    myAcc.g = ACCS.g.includes(parts[0]) ? parts[0] : '';
    myAcc.h = ACCS.h.includes(parts[1]) ? parts[1] : '';
    myAcc.c = ACCS.c.includes(parts[2]) ? parts[2] : '';
    myAcc.y = num(parts[3], 0); myAcc.z = num(parts[4], 0);
    try { localStorage.setItem('gr_acc', JSON.stringify(myAcc)); } catch (e) {}
    refreshAcc();
  }
  // O menu do jogo original não aparece: o NextVR é o menu.
  const lobby = $('lobby'); if (lobby) lobby.style.display = 'none';
  const bg = $('bg'); if (bg) bg.style.display = 'none';
  const pick = $('pick'); if (pick) pick.classList.remove('on');
  document.documentElement.classList.add('nv-boot');

  try { if (typeof NextVRGame !== 'undefined' && NextVRGame && NextVRGame.stage) NextVRGame.stage('boot'); } catch (e) {}
  if (SOLO) nvFail('sem servidor · jogando sozinho');
  enter(START_MODE);
})();
