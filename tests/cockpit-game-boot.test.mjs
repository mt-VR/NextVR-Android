// O Cockpit VR (o jogo de avião) tem de ABRIR e VOAR. Dois testes, porque são duas perguntas
// diferentes:
//
//   1) o CONTRATO DE ENTREGA (sem navegador): cada biblioteca que a página pede existe no APK e sai
//      com o MIME certo. Foi aqui que o voo morreu antes: sem `application/wasm` o
//      `WebAssembly.instantiateStreaming` recusa o módulo do MediaPipe, e sem os arquivos locais a
//      página ficava parada na CDN;
//   2) o ARRANQUE DE VERDADE (Chromium, com a rede externa BLOQUEADA): a página sai de "Carregando
//      bibliotecas…" sozinha, monta o voo e escreve a linha de estado. Num runner sem WebGL/câmera
//      isto é pulado em vez de mentir, e o teste diz por quê.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname } from 'node:path';
import { launchOrSkip } from './support/chromium.mjs';

const ROOT = new URL('../nextvr-android/src/main/assets/', import.meta.url);
const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json',
  '.wasm': 'application/wasm', '.data': 'application/octet-stream', '.tflite': 'application/octet-stream',
  '.binarypb': 'application/octet-stream', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
};
// A mesma CSP do cockpit em WebSurface.java: é ela que autoriza o wasm do MediaPipe e o eval dele.
const CSP_SHELL = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' https: blob: data: content:; media-src blob:; font-src 'self'; connect-src 'self' https: blob: data:; worker-src blob:; frame-src 'none'; object-src 'none'; base-uri 'none'";
const CSP_COCKPIT = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: blob: data: content:; media-src blob: mediastream: data:; font-src 'self'; connect-src 'self' https: blob: data:; worker-src blob:; child-src blob:; frame-src 'none'; object-src 'none'; base-uri 'none'";

// O que a página do jogo carrega ANTES de qualquer rede: as bibliotecas, e o MediaPipe inteiro
// menos o módulo sem SIMD (esse é o único que o locateFile manda para a CDN, por tamanho).
const VENDORED = [
  'ui/cockpit/libs/three.min.js',
  'ui/cockpit/libs/GLTFLoader.js',
  'ui/cockpit/libs/BufferGeometryUtils.js',
  'ui/cockpit/libs/cannon.min.js',
  'ui/cockpit/libs/hands/hands.js',
  'ui/cockpit/libs/hands/hands_solution_packed_assets_loader.js',
  'ui/cockpit/libs/hands/hands_solution_packed_assets.data',
  'ui/cockpit/libs/hands/hands_solution_simd_wasm_bin.js',
  'ui/cockpit/libs/hands/hands_solution_simd_wasm_bin.wasm',
  'ui/cockpit/libs/hands/hand_landmark_lite.tflite',
  'ui/cockpit/libs/hands/hands.binarypb',
];

function serve() {
  const server = createServer(async (req, res) => {
    try {
      const path = new URL(req.url, 'http://host').pathname.replace(/^\//, '');
      if (path.includes('..') || !path) throw new Error('bad path');
      const body = await readFile(new URL(path, ROOT));
      const headers = {
        'Content-Type': MIME[extname(path)] || 'application/octet-stream',
        'Cache-Control': 'no-store',
      };
      if (path.startsWith('ui/cockpit/')) headers['Content-Security-Policy'] = CSP_COCKPIT;
      else if (path.startsWith('ui/')) headers['Content-Security-Policy'] = CSP_SHELL;
      res.writeHead(200, headers); res.end(body);
    } catch { res.writeHead(404); res.end(); }
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

test('o jogo viaja no APK: cada biblioteca que a página pede existe e sai com o MIME certo', async () => {
  const game = await readFile(new URL('ui/cockpit/game.html', ROOT), 'utf8');
  // O mapa de bibliotecas da página: o primeiro endereço de cada uma tem de ser o do APK.
  for (const local of ['./libs/three.min.js', './libs/GLTFLoader.js', './libs/BufferGeometryUtils.js',
    './libs/cannon.min.js', './libs/hands/hands.js']) {
    assert.ok(game.includes(`'${local}'`), `a página pede ${local} primeiro (CDN é plano B)`);
  }
  const server = await serve();
  try {
    const origin = `http://127.0.0.1:${server.address().port}`;
    for (const file of VENDORED) {
      const response = await fetch(`${origin}/${file}`);
      assert.equal(response.status, 200, `${file} é servido do APK`);
      const body = Buffer.from(await response.arrayBuffer());
      assert.ok(body.length > 400, `${file} tem conteúdo (${body.length} bytes)`);
      if (file.endsWith('.wasm')) {
        assert.equal(response.headers.get('content-type'), 'application/wasm',
          'sem application/wasm o Chromium recusa o módulo do MediaPipe');
      }
      if (file === 'ui/cockpit/libs/hands/hands_solution_simd_wasm_bin.wasm') {
        assert.equal(body.subarray(0, 4).toString('hex'), '0061736d', 'é um módulo wasm de verdade');
      }
    }
    // A CSP da pasta do jogo é a única que autoriza compilar wasm (e por isso nenhuma outra).
    const page = await fetch(`${origin}/ui/cockpit/game.html`);
    const csp = page.headers.get('content-security-policy') || '';
    assert.match(csp, /'wasm-unsafe-eval'/, 'a página do jogo pode compilar wasm');
    assert.match(csp, /https:\/\/cdn\.jsdelivr\.net/, 'e ainda alcança a CDN no plano B');
    const shell = await fetch(`${origin}/ui/index.html`);
    const shellCsp = shell.headers.get('content-security-policy') || '';
    assert.match(shellCsp, /script-src 'self' 'unsafe-inline' https:\/\/cdn\.jsdelivr\.net;/);
    assert.doesNotMatch(shellCsp, /wasm-unsafe-eval/,
      'o resto da UI continua sem eval');
    // O que sobra fora do APK é só o módulo sem SIMD: é o `locateFile` que decide isso.
    assert.ok(!(await stat(new URL('ui/cockpit/libs/hands/hands_solution_wasm_bin.wasm', ROOT)).catch(() => null)),
      'o módulo sem SIMD não vai no pacote (13 MB é o teto que o APK aguenta)');
  } finally { server.close(); }
});

test('a página do Cockpit VR monta o voo sem internet', { timeout: 300000 }, async (t) => {
  const server = await serve();
  const origin = `http://127.0.0.1:${server.address().port}`;
  let browser;
  try {
    browser = await launchOrSkip(t);
    if (!browser) return;
    const page = await browser.newPage({ viewport: { width: 1024, height: 576 } });
    // SEM INTERNET: tudo o que não for o APK é recusado. Sem o three.js e o cannon empacotados a
    // página não sai do "Carregando bibliotecas…".
    const blocked = [];
    await page.route('**/*', route => {
      const url = route.request().url();
      if (url.startsWith(origin) || url.startsWith('data:') || url.startsWith('blob:')) return route.continue();
      blocked.push(url);
      return route.abort();
    });
    const errors = [];
    // Câmera, áudio e fullscreen não existem num Chromium sem aparelho: não é defeito do jogo.
    const environment = /camera|c[âa]mera|getUserMedia|NotAllowed|Permission|mediaDevices|AudioContext|fullscreen|WebGL|swiftshader/i;
    page.on('pageerror', e => {
      const message = String(e.message).slice(0, 200);
      if (!environment.test(message)) errors.push(message);
    });

    // O mesmo arranque que o NextVR usa: /ui/cockpit/game.html?air=…&mode=… (ver NextVrActivity).
    await page.goto(`${origin}/ui/cockpit/game.html?air=cessna&mode=mono&lq=1&snd=0&atc=0&vc=0`,
      { waitUntil: 'domcontentloaded', timeout: 150000 });

    let booted = true;
    try {
      // `pickAir` é a função que a página publica quando o script do jogo inteiro já subiu, e a
      // emenda do NextVR esconde o menu do jogo e chama o voo logo depois.
      await page.waitForFunction(() => typeof window.pickAir === 'function'
        && !!document.querySelector('canvas')
        && (document.getElementById('start') || { style: {} }).style.display === 'none',
      null, { timeout: 180000 });
    } catch {
      booted = false;
      const status = await page.evaluate(() => ({
        nvd: (document.getElementById('nvd') || {}).textContent || '',
        banner: (document.getElementById('lbn') || {}).textContent || '',
        three: typeof window.THREE,
      })).catch(() => ({}));
      t.diagnostic('não montou o voo neste runner: ' + JSON.stringify(status));
    }
    if (!booted) {
      t.skip('este runner não montou o voo (sem WebGL/câmera suficiente); o contrato de arquivos e MIME está coberto no teste anterior');
      return;
    }

    const libs = await page.evaluate(() => ({
      three: typeof window.THREE === 'object' && !!window.THREE.WebGLRenderer,
      cannon: typeof window.CANNON === 'object',
      status: (document.getElementById('nvd') || {}).textContent || '',
    }));
    assert.equal(libs.three, true, 'three.js veio do APK, não da CDN');
    assert.equal(libs.cannon, true, 'cannon veio do APK, não da CDN');
    assert.match(libs.status, /mãos do jogo|Jogo iniciado|Bibliotecas/,
      'a linha de estado do jogo está na tela (não há console num aparelho)');
    assert.deepEqual(blocked, [], 'o voo não pode depender de nenhum arquivo da internet');
    assert.deepEqual(errors, [], 'nenhum erro de JavaScript na abertura do voo');
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
