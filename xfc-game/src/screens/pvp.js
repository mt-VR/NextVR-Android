// PvP reference screen. Room-code controls are a UI prototype until a trusted
// signalling/match server is configured; they never claim to start an online match.
import { el } from '../ui/dom.js';
import { createFiveDigitRoomCode, isFiveDigitRoomCode } from '../data/online-rooms.js';
import { xfc27Footer, xfc27Hotspot, xfc27Screen } from '../ui/reference-menu.js';

export function pvpScreen(ctx) {
  const node = xfc27Screen('screen--pvp', 'pvp', 'Menu PvP XFC 27');
  const buttons = [];
  let activeButton = 0;
  let overlay = null;

  const top = [
    ['Início', [333, 20, 129, 76], () => ctx.go('menu')],
    ['Modos', [465, 20, 139, 76], () => ctx.go('modes')],
    ['Personalizar', [607, 20, 186, 76], () => ctx.go('customise')],
    ['Configurações', [790, 20, 202, 76], () => ctx.go('customise')]
  ];
  for (const [label, rect, run] of top) node.append(xfc27Hotspot(label, rect, run, { class: 'ref-button xfc27-action' }));
  node.append(xfc27Hotspot('Perfil e configurações', [1280, 22, 310, 70], () => ctx.go('customise'), { class: 'ref-button xfc27-action' }));

  const showStatus = title => ctx.toast(`${title}: o serviço de partidas online ainda não está conectado.`, { variant: 'warn', duration: 4200 });
  const openRoom = () => {
    close();
    const backdrop = el('div', { class: 'xfc27-dialog-backdrop' });
    const roomCode = el('output', { class: 'xfc27-room-code', 'aria-label': 'Código de sala de demonstração', text: '— — — — —' });
    const roomInput = el('input', {
      class: 'xfc27-room-input',
      type: 'text',
      inputMode: 'numeric',
      autoComplete: 'off',
      maxLength: 5,
      pattern: '[0-9]{5}',
      'aria-label': 'Código da sala · 5 dígitos',
      placeholder: '12345',
      onInput(event) { event.target.value = event.target.value.replace(/\D/g, '').slice(0, 5); }
    });
    const status = el('p', { class: 'xfc27-dialog__status', role: 'status', 'aria-live': 'polite', text: 'A interface aceita códigos de 5 dígitos. A conexão entre dispositivos requer um serviço online, que ainda não está configurado.' });
    const createButton = el('button', {
      class: 'xfc27-dialog__action',
      type: 'button',
      onClick() {
        roomCode.value = createFiveDigitRoomCode();
        roomCode.textContent = roomCode.value;
        roomCode.dataset.localPreview = 'true';
        status.textContent = `Código de demonstração ${roomCode.value}. Ele não é publicado em um servidor e outro jogador não consegue entrar ainda.`;
      }
    }, 'Gerar código de demonstração');
    const joinButton = el('button', {
      class: 'xfc27-dialog__action',
      type: 'button',
      onClick() {
        if (!isFiveDigitRoomCode(roomInput.value)) {
          status.textContent = 'Digite exatamente cinco números para validar o formato do código.';
          roomInput.focus();
          return;
        }
        status.textContent = `O código ${roomInput.value} tem o formato correto, mas não foi enviado: não há serviço de pareamento conectado.`;
      }
    }, 'Validar e entrar');
    overlay = el('section', { class: 'xfc27-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Sala personalizada PvP' },
      el('button', { class: 'xfc27-dialog__close-icon', type: 'button', 'aria-label': 'Fechar', onClick: close }, '×'),
      el('p', { class: 'xfc27-dialog__eyebrow', text: 'XFC 27 · PvP' }),
      el('h2', { text: 'Sala personalizada' }),
      el('p', { class: 'xfc27-dialog__copy', text: 'Crie ou informe um código de sala com cinco dígitos.' }),
      el('div', { class: 'xfc27-room-preview' }, el('span', { text: 'Código local de demonstração' }), roomCode),
      createButton,
      el('label', { class: 'xfc27-room-label' }, 'Código da sala', roomInput),
      joinButton,
      status,
      el('button', { class: 'xfc27-dialog__close', type: 'button', text: 'Voltar', onClick: close })
    );
    backdrop.append(overlay);
    node.append(backdrop);
    roomInput.focus();
  };
  function close() {
    overlay?.closest('.xfc27-dialog-backdrop')?.remove();
    overlay = null;
  }

  const buttonsSpec = [
    ['Jogar Online', [46, 367, 437, 70], () => showStatus('Jogar Online'), 'ranked'],
    ['Amistoso Online', [47, 438, 438, 66], openRoom, 'friendly'],
    ['Ranking', [47, 505, 438, 68], () => showStatus('Ranking'), 'ranking'],
    ['Modo Ranqueado', [28, 606, 512, 149], () => showStatus('Modo Ranqueado'), 'ranked-card'],
    ['Partida Rápida PvP', [554, 606, 492, 149], () => showStatus('Partida Rápida PvP'), 'quick'],
    ['Sala Personalizada', [1053, 606, 478, 149], openRoom, 'custom-room']
  ];
  for (const [label, rect, run, option] of buttonsSpec) {
    const button = xfc27Hotspot(label, rect, run, { class: 'ref-button xfc27-action pvp__option', dataset: { option } });
    node.append(button);
    buttons.push(button);
    button.addEventListener('focus', () => { activeButton = buttons.length - 1; });
  }
  xfc27Footer(node, {
    select: () => buttons[activeButton]?.click(),
    back: () => ctx.go('modes')
  });

  return {
    node,
    onKey(event) {
      if (overlay && ['Escape', 'Backspace'].includes(event.key)) { close(); return true; }
      if (overlay && event.key === 'Tab') {
        const focusable = [...overlay.querySelectorAll('button,input')];
        const current = focusable.indexOf(document.activeElement);
        const next = (current + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length;
        focusable[next]?.focus();
        return true;
      }
      if (event.key === 'Escape' || event.key === 'Backspace') { ctx.go('modes'); return true; }
      const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (delta) {
        const focused = buttons.indexOf(document.activeElement);
        activeButton = ((focused >= 0 ? focused : activeButton) + delta + buttons.length) % buttons.length;
        buttons[activeButton]?.focus();
        return true;
      }
      if ((event.key === 'Enter' || event.key === ' ') && !document.activeElement?.matches?.('button')) {
        buttons[activeButton]?.click();
        return true;
      }
      return false;
    }
  };
}
