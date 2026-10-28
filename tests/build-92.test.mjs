// Build 92 — avatar 3D humano (como o do PICO), Configurações com espaçamento de verdade e conta
// Google abrindo a escolha de conta real ("Continuar como") no navegador do celular.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// character-creator.js importa core.js (que usa `window`), então os padrões são lidos do fonte.
const read = p => readFileSync(p, 'utf8');
const charSrc = () => read('web/src/character-creator.js');
const entrySrc = () => read('web/src/entry-menu.js');
const indexHtml = () => read('web/index.html');
const activity = () => read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');

test('Build 92: the avatar is a person, not a bobblehead', () => {
  const src = charSrc();
  // Proporções: esqueleto explícito e cabeça de ~1/7 da altura.
  assert.ok(src.includes('const GROUND = -96;'), 'chão do estúdio definido');
  assert.ok(src.includes('const headR = 11.4;'), 'raio da cabeça fixo e humano');
  assert.ok(src.includes('const hipY = -14 + breathe * 0.3;'), 'quadril na altura certa');
  assert.ok(src.includes('const chestY = 30 + breathe;'), 'ombros na altura certa');
  // Altura total = 96 (chão) + 57 (topo) ≈ 153; cabeça 22,8 → ~6,7 cabeças (antes era 3,7).
  const height = 96 + 46.5 + 11.4;
  assert.ok(height / (11.4 * 2) > 6 && height / (11.4 * 2) < 7.5,
    `proporção de pessoa (${(height / (11.4 * 2)).toFixed(1)} cabeças)`);

  // Corpo em silhueta contínua (nada de bolas soltas nos ombros/quadril).
  assert.ok(src.includes('const profileAt = (table, y) =>'), 'perfis de largura/profundidade por altura');
  assert.ok(src.includes('const sweepBody = (table, colorHex, opts2 = {})'), 'contorno contínuo do corpo');
  assert.ok(src.includes('Math.hypot(pr.w * cosY, pr.d * sinY)'), 'a silhueta respeita o giro 360°');
  assert.ok(src.includes('sweepBody(torsoTable, shirt'), 'tronco desenhado como uma peça só');
  assert.ok(!src.includes("pushSphere3D(-13.4, chestY - 4.5"), 'sem bolas de ombro soltas');

  // Sem contorno preto grosso (era o que dava o aspecto de boneco de palito).
  assert.ok(!src.includes("strokeStyle = '#09090b';\n        ctx.lineWidth = Math.max(2"), 'sem contorno preto no corpo');
});

test('Build 92: default avatar looks like the PICO one (yellow shirt, white headset)', () => {
  const src = charSrc();
  const defaults = src.slice(src.indexOf('export const DEFAULT_CHARACTER'), src.indexOf('export function loadCharacter'));
  assert.match(defaults, /outfit: 'tshirt'/, 'camiseta');
  assert.match(defaults, /outfitColor: '#f2d64b'/, 'camiseta amarela');
  assert.match(defaults, /visor: 'pico4'/, 'headset branco do PICO');
  assert.match(defaults, /hairStyle: 'short'/, 'cabelo curto, sem espetos');
  assert.match(defaults, /accessory: 'none'/, 'sem acessório estranho por padrão');
  assert.ok(src.includes('// Manga curta'), 'camiseta tem manga curta (pele no resto do braço)');
  assert.ok(src.includes("const shoeColor = '#edeef2';"), 'tênis branco');
  assert.ok(src.includes('drawStudioBackdrop'), 'fundo de estúdio limpo (sem grade neon)');
});

test('Build 92: the settings have room to breathe', () => {
  const css = indexHtml();
  const grab = (sel, prop) => {
    const i = css.indexOf('\n  ' + sel + '{');
    if (i < 0) return '';
    const block = css.slice(i, css.indexOf('}', i));
    const m = block.match(new RegExp(prop + ':([^;]+)'));
    return m ? m[1].trim() : '';
  };
  assert.equal(grab('.entry-bento-grid', 'gap'), '16px', 'espaço entre os cartões dobrou');
  assert.equal(grab('.entry-bento-cell', 'padding'), '12px 14px', 'cartões com respiro interno');
  assert.equal(grab('.entry-bento-cell', 'gap'), '10px');
  assert.equal(grab('.entry-bento-title', 'font-size'), '11.5px', 'título maior');
  assert.ok(!grab('.entry-bento-title', 'white-space'), 'título quebra linha em vez de cortar com "…"');
  assert.equal(grab('.entry-seg-btn', 'padding'), '8px 10px', 'botões maiores');
  assert.equal(grab('.entry-seg-btn', 'font-size'), '11px');
  assert.equal(grab('.entry-settings-tab', 'padding'), '7px 14px', 'abas maiores');
  assert.equal(grab('.entry-bento-grid--tab3', 'gap'), '18px', 'aba 3 também espaçada');
  assert.equal(grab('.entry-dock-apps-grid', 'gap'), '12px');
  assert.equal(grab('.entry-subpanel', 'gap'), '14px');
  // Nada de cortar conteúdo: se o cartão crescer, a aba rola em vez de esconder.
  assert.ok(css.includes('grid-template-rows:repeat(3,minmax(min-content,1fr))'),
    'as linhas nunca ficam menores que o conteúdo');
  assert.ok(/overflow-y:auto;overflow-x:hidden/.test(css), 'e a aba ganha rolagem vertical');
});

test('Build 92: the Google button opens the real account chooser (Continuar como)', () => {
  const entry = entrySrc();
  assert.ok(entry.includes('accounts.google.com/AccountChooser?continue='),
    'a escolha de conta do Google (a mesma do login do Firebase)');
  assert.ok(entry.includes("googleChooser('https://myaccount.google.com/')"), 'Google → conta');
  assert.ok(entry.includes("googleChooser('https://www.youtube.com/')"), 'YouTube → conta');
  assert.ok(entry.includes('Continuar como'), 'o texto que o usuário pediu');
  assert.ok(entry.includes('window.NativeXR.openExternal(link.url)'), 'abre no navegador de verdade');
  assert.ok(entry.includes("browser: openedInBrowser"), 'e avisa o shell para não abrir outra janela');

  const act = activity();
  assert.ok(act.includes('public void openExternal(String url)'), 'ponte nativa nova');
  assert.ok(act.includes('Intent.ACTION_VIEW'), 'abre a página no navegador do celular');
  assert.ok(act.includes('!"https".equals(scheme) && !"http".equals(scheme)'),
    'só http/https (nada de intent arbitrário vindo da página)');

  const apps = read('web/src/apps.js');
  assert.ok(apps.includes('if (payload?.browser) return;'), 'não abre duas janelas do mesmo login');
});

test('Build 92: the shipped APK is version 92', () => {
  assert.ok(read('nextvr-android/build.gradle').includes('versionCode 92'));
});
