// O Cockpit VR (o jogo de avião) tem de ABRIR e VOAR. Este teste abre a página dele num Chromium
// de verdade, servida do APK com o MESMO Content-Security-Policy e os MESMOS MIME types que o
// WebSurface.java usa, e com a rede externa BLOQUEADA — porque o defeito relatado foi exatamente
// esse: a página dependia de CDN e, sem internet, ficava parada na tela de carregamento.
//
// O que ele prova (e o que não prova): prova que a página monta o voo sozinha, com as bibliotecas
// que viajam no APK, e que a linha de estado aparece. Não prova câmera/MediaPipe — a inferência de
// mão não existe num Chromium sem câmera —, e isso é dito aqui em vez de simulado.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
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
const CSP_COCKPIT = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: blob: data: content:; media-src blob: mediastream: data:; font-src 'self'; connect-src 'self' https: blob: data:; worker-src blob:; child-src blob:; frame-src 'none'; object-src 'none'; base-uri 'none'";

test('a página do Cockpit VR monta o voo sem internet (bibliotecas que viajam no APK)', { timeout: 240000 }, async (t) => {
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
      res.writeHead(200, headers); res.end(body);
    } catch { res.writeHead(404); res.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;

  let browser;
  try {
    browser = await launchOrSkip(t);
    if (!browser) return;
    const page = await browser.newPage({ viewport: { width: 1024, height: 576 } });
    // SEM INTERNET: tudo o que não for o APK é recusado. Sem o three.js e o cannon empacotados, a
    // página não sai do "Carregando bibliotecas…".
    const blocked = [];
    await page.route('**/*', route => {
      const url = route.request().url();
      if (url.startsWith(origin) || url.startsWith('data:') || url.startsWith('blob:')) return route.continue();
      blocked.push(url);
      return route.abort();
    });
    const errors = [];
    // Câmera/permissão não existem num Chromium sem câmera: isso não é defeito do jogo.
    const NOT_A_GAME_BUG = /camera|c[âa]mera|getUserMedia|NotAllowed|Permission|mediaDevices|AudioContext/i;
    page.on('pageerror', e => {
      const message = String(e.message).slice(0, 200);
      if (!NOT_A_GAME_BUG.test(message)) errors.push(message);
    });

    // O mesmo arranque que o NextVR usa: /ui/cockpit/game.html?air=…&mode=… (ver NextVrActivity).
    await page.goto(`${origin}/ui/cockpit/game.html?air=cessna&mode=mono&lq=1&snd=0&atc=0&vc=0`,
      { waitUntil: 'load', timeout: 120000 });

    // 1) O jogo tem de chegar ao ponto de poder voar: `pickAir` é a função que a página exporta
    //    quando o script do jogo inteiro já subiu.
    await page.waitForFunction(() => typeof window.pickAir === 'function', null, { timeout: 120000 });
    const libs = await page.evaluate(() => ({
      three: typeof window.THREE === 'object' && !!window.THREE.WebGLRenderer,
      cannon: typeof window.CANNON === 'object',
    }));
    assert.deepEqual(libs, { three: true, cannon: true }, 'three.js e cannon vêm do APK, não da CDN');

    // 2) A entrada direta no voo (emenda do NextVR) esconde o menu do jogo e desenha no canvas.
    await page.waitForFunction(() => {
      const start = document.getElementById('start');
      const canvas = document.querySelector('canvas');
      return !!canvas && canvas.width > 0 && !!start && start.style.display === 'none';
    }, null, { timeout: 120000 });

    // 3) A linha de estado: o que o jogo diz na tela. Sem console num aparelho, é ela que conta.
    const status = await page.evaluate(() => (document.getElementById('nvd') || {}).textContent || '');
    assert.match(status, /mãos do jogo|Jogo iniciado|Bibliotecas/, 'a linha de estado do jogo está na tela');

    assert.deepEqual(blocked, [], 'o voo não pode depender de nenhum arquivo da internet');
    assert.deepEqual(errors, [], 'nenhum erro de JavaScript na abertura do voo');
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
