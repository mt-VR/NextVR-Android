// ---------- O BONECO: carregar o modelo do gorila de três jeitos e dizer o motivo se falhar ----------
//
// Na 2.6.2 o modelo era carregado com uma linha só (`loader.parse(base64, '', build, aviso)`) e, se
// aquela tentativa falhasse, o jogo ficava sem boneco com o erro escrito num elemento que o CSS
// esconde (`#st`) — e o app só repetia "o modelo do gorila não carregou", sem motivo nenhum.
//
// Aqui são TRÊS CAMINHOS, do mais compatível para o mais pobrezinho, e o motivo real de cada um
// fica em `NV_MODEL`, que a sonda `__nvGorilla()` mostra:
//
//   1. BORDAS POR <img> (`TextureLoader`). O `GLTFLoader` do three prefere `ImageBitmapLoader`, que
//      baixa a textura embutida por `fetch()` de uma URL `blob:`. Navegador de celular e WebView
//      recusam esse fetch mais vezes do que se imagina, e aí o modelo inteiro é rejeitado por causa
//      da textura. Com o `<img>` clássico a imagem embutida carrega em qualquer lugar — é o caminho
//      que este código usa primeiro. (`createImageBitmap` é escondido só durante o parse.)
//   2. PADRÃO do three (com `ImageBitmap`), para o caso oposto: aparelho onde o `fetch` de blob
//      funciona e o `<img>` não.
//   3. SEM TEXTURAS: o GLB é remontado sem as imagens (o BIN e os bufferViews continuam os mesmos),
//      então o corpo, o esqueleto e os braços aparecem em branco em vez de não aparecer nada.
//
// O aviso ao app só sai quando os TRÊS falharam, e vai com o motivo. Demora não é falha: quem avisa
// de demora é o relógio de 30 s de `parts/ingame.js`, com outra mensagem.
const NV_MODEL = { ok: false, tentativas: 0, modo: '', erro: '', desde: Date.now() };
window.__nvModelo = NV_MODEL;

const NV_MODOS = ['bordas por <img>', 'padrao do three', 'sem texturas'];

/** JSON do GLB (cabeçalho de 12 bytes + chunks), sem depender do loader. */
function nvGlbJson(buf) {
  const dv = new DataView(buf);
  if (dv.getUint32(0, true) !== 0x46546c67) return null;            // 'glTF'
  if (dv.getUint32(16, true) !== 0x4e4f534a) return null;           // 'JSON'
  const len = dv.getUint32(12, true);
  return JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(buf, 20, len)));
}

/** O mesmo GLB, sem imagens/texturas: corpo e braços aparecem, mesmo sem cor. */
function nvSemTexturas(buf) {
  let dv, json;
  try { dv = new DataView(buf); json = nvGlbJson(buf); } catch (e) { return buf; }
  if (!json) return buf;
  delete json.images; delete json.textures; delete json.samplers;
  (json.materials || []).forEach((m) => {
    delete m.normalTexture; delete m.occlusionTexture; delete m.emissiveTexture;
    if (m.pbrMetallicRoughness) {
      delete m.pbrMetallicRoughness.baseColorTexture;
      delete m.pbrMetallicRoughness.metallicRoughnessTexture;
    }
  });
  const cab = new TextEncoder().encode(JSON.stringify(json));
  const sobra = (4 - (cab.length % 4)) % 4;
  const binOff = 20 + dv.getUint32(12, true);
  const resto = new Uint8Array(buf, binOff);                        // o BIN, byte a byte
  const out = new Uint8Array(20 + cab.length + sobra + resto.length);
  const o = new DataView(out.buffer);
  o.setUint32(0, 0x46546c67, true); o.setUint32(4, 2, true); o.setUint32(8, out.length, true);
  o.setUint32(12, cab.length + sobra, true); o.setUint32(16, 0x4e4f534a, true);
  out.set(cab, 20);
  for (let i = 0; i < sobra; i++) out[20 + cab.length + i] = 0x20;  // preenchimento com espaço
  out.set(resto, 20 + cab.length + sobra);
  return out.buffer;
}

function nvParseModelo(modo) {
  NV_MODEL.tentativas++;
  NV_MODEL.modo = NV_MODOS[modo] || '';
  let guardado = null;
  // Caminho 1: esconde `createImageBitmap` durante o parse para o three usar `TextureLoader`.
  if (modo === 0) {
    try { guardado = window.createImageBitmap; if (guardado) delete window.createImageBitmap; } catch (e) {}
  }
  const soltar = () => {
    if (guardado) { try { window.createImageBitmap = guardado; } catch (e) {} guardado = null; }
  };
  const falhou = (err) => {
    soltar();
    const motivo = String((err && err.message) || err || 'erro desconhecido');
    NV_MODEL.erro = motivo;
    if (modo < 2) { setTimeout(() => nvParseModelo(modo + 1), 350); return; }
    nvLog('o modelo do gorila não carregou depois de ' + NV_MODEL.tentativas + ' tentativas: ' + motivo);
  };
  try {
    let buf = Uint8Array.from(atob(PLAYER_B64), (c) => c.charCodeAt(0)).buffer;
    if (modo === 2) buf = nvSemTexturas(buf);
    loader.parse(buf, '', (g) => {
      soltar();
      if (!g || !g.scene) { falhou('modelo vazio'); return; }
      try {
        build(g);
        NV_MODEL.ok = !!pl;
        NV_MODEL.erro = '';
      } catch (e) {
        NV_MODEL.erro = 'montagem: ' + ((e && e.message) || e);
        nvLog('o modelo do gorila chegou, mas não montou: ' + NV_MODEL.erro);
      }
    }, falhou);
  } catch (e) {
    falhou(e);
  }
}

nvParseModelo(0);
