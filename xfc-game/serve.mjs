// Servidor estático do XFC.
//
// Uso:
//   node xfc-game/serve.mjs            # abre em http://127.0.0.1:8080
//   node xfc-game/serve.mjs --port 9000
//
// O mesmo módulo é importado pelos testes para servir a pasta sem abrir porta
// fixa (porta 0 = porta livre).

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.md': 'text/markdown; charset=utf-8'
};

/** Cria o servidor que serve a pasta do jogo. */
export function createXfcServer(root = ROOT) {
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      const requested = decodeURIComponent(url.pathname);
      const relative = normalize(requested === '/' ? '/index.html' : requested).replace(/^([/\\])+/, '');
      if (relative.split(sep).includes('..')) throw new Error('forbidden');
      const file = join(root, relative);
      const info = await stat(file);
      const target = info.isDirectory() ? join(file, 'index.html') : file;
      const body = await readFile(target);
      res.writeHead(200, {
        'Content-Type': MIME[extname(target).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-store'
      });
      res.end(body);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404');
    }
  });
}

/** Sobe o servidor e devolve a URL base. */
export async function startXfcServer({ port = 0, host = '127.0.0.1' } = {}) {
  const server = createXfcServer();
  await new Promise(resolve => server.listen(port, host, resolve));
  const address = server.address();
  return { server, url: `http://${host}:${address.port}` };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const portArg = process.argv.indexOf('--port');
  const port = portArg > -1 ? Number(process.argv[portArg + 1]) : 8080;
  const hostArg = process.argv.indexOf('--host');
  const host = hostArg > -1 ? process.argv[hostArg + 1] : '0.0.0.0';
  const { url } = await startXfcServer({ port, host });
  console.log(`XFC rodando em ${url}`);
}
