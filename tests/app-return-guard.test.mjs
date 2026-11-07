// "arruma o bug de quando eu abrir a bíbloteca de apps, as vezes o app volta ao menu principal
//  do nada" — o app não pode devolver o usuário ao menu inicial (nem à grade inicial) por um toque
//  acidental ou por uma janela fechando sozinha.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(path, 'utf8');

test('o botão voltar do Android fecha a janela em foco antes de voltar ao menu inicial', async () => {
  const activity = await read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
  const back = activity.slice(activity.indexOf('@Override public void onBackPressed()'));
  // O PRIMEIRO voltar manda a sessão fechar o que está na frente; só o segundo (até 2,5 s depois)
  // volta ao menu inicial. Antes, um toque acidental na tela do celular (que encosta no plástico do
  // VR Box) derrubava a biblioteca de apps e a sessão inteira para o menu.
  assert.match(back, /window\.nextvrBack&&window\.nextvrBack\(\)/);
  assert.match(back, /now-lastBackAt<=2500L/);
  assert.match(back, /lastBackAt=0L; setEntryMenuVisible\(true\); return;/);

  const apps = await read('web/src/apps.js');
  assert.match(apps, /window\.nextvrBack = \(\) => \{/);
  // Ordem do voltar: anel aberto fecha o anel, depois o menu da mão, depois a janela em foco.
  assert.match(apps, /if \(orbOpen\(\)\) \{ closeOrbMenu\(\); return true; \}/);
  assert.match(apps, /if \(focused && !focused\.onboarding\) \{ close\(focused\); return true; \}/);
});

test('a biblioteca de apps nunca é descartada para abrir outro app', async () => {
  const windows = await read('web/src/windows.js');
  // Multitarefa em arco: com o arco cheio, o menos recente sai. A biblioteca é o hub do usuário e
  // fica de fora dessa escolha (era ela que sumia, e a grade inicial reaparecia no lugar).
  assert.match(windows, /const lru = pickLru\(apps\.filter\(w => w\.id !== 'library'\)\);/);

  const apps = await read('web/src/apps.js');
  assert.match(apps, /if \(oldWin !== newest && oldWin\.id !== 'library'\) close\(oldWin\);/);
  // Abrir a biblioteca já aberta não reconstrói o conteúdo (era o "volta ao começo" dentro dela).
  assert.match(apps, /if \(w\.hidden\) \{ w\.setHidden\(false\); paintLibrary\(\); \}/);
});
