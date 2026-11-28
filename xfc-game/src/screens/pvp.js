import { el } from '../ui/dom.js';
import { isFiveDigitRoomCode, openOnlineConnection, resolveOnlineServerUrl, saveOnlineServerUrl } from '../data/online-rooms.js';
import { TEAMS } from '../data/teams.js';
import { xfc27Footer, xfc27Hotspot, xfc27Screen } from '../ui/reference-menu.js';

export function pvpScreen(ctx) {
  const node = xfc27Screen('screen--pvp', 'pvp', 'Menu PvP XFC 27');
  const buttons = [];
  let activeButton = 0;
  let overlay = null;
  let connection = null;
  let unsubscribe = null;
  let handedOff = false;
  let connecting = false;
  let role = null;
  let pendingConfig = null;

  const top = [
    ['Início', [333, 20, 129, 76], () => ctx.go('menu')],
    ['Modos', [465, 20, 139, 76], () => ctx.go('modes')],
    ['Personalizar', [607, 20, 186, 76], () => ctx.go('customise')],
    ['Configurações', [790, 20, 202, 76], () => ctx.go('customise')]
  ];
  for (const [label, rect, run] of top) node.append(xfc27Hotspot(label, rect, run, { class: 'ref-button xfc27-action' }));
  node.append(xfc27Hotspot('Perfil e configurações', [1280, 22, 310, 70], () => ctx.go('customise'), { class: 'ref-button xfc27-action' }));

  const showStatus = title => ctx.toast(`${title}: esse serviço ainda não está disponível. Use uma sala online para jogar com um amigo.`, { variant: 'warn', duration: 4200 });
  const openRoom = () => {
    close(false);
    const backdrop = el('div', { class: 'xfc27-dialog-backdrop' });
    const roomCode = el('output', { class: 'xfc27-room-code', 'aria-label': 'Código da sala online', text: '— — — — —' });
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
    const savedUrl = resolveOnlineServerUrl();
    const serverInput = el('input', {
      class: 'xfc27-room-server',
      type: 'url',
      autoComplete: 'url',
      'aria-label': 'Endereço do servidor online',
      placeholder: 'wss://seu-servidor.example/ws',
      value: savedUrl
    });
    const status = el('p', { class: 'xfc27-dialog__status', role: 'status', 'aria-live': 'polite', text: savedUrl
      ? 'Crie uma sala ou digite o código de quem já criou. Os dois jogadores precisam usar a mesma versão do XFC.'
      : 'Informe o endereço WSS do servidor online. No APK, xfc.local é apenas a origem local do jogo, não um servidor acessível pela internet.' });
    const roomLabel = el('span', { text: 'Código da sala online' });
    const createButton = el('button', {
      class: 'xfc27-dialog__action',
      type: 'button',
      onClick: () => connect('create')
    }, 'Criar sala online');
    const joinButton = el('button', {
      class: 'xfc27-dialog__action',
      type: 'button',
      onClick: () => connect('join')
    }, 'Entrar na sala');
    const startButton = el('button', {
      class: 'xfc27-dialog__action',
      type: 'button',
      disabled: true,
      onClick: startOnlineMatch
    }, 'Iniciar partida');
    const homeSelect = teamSelect('Mandante', ctx.state.selection?.home || TEAMS[0]?.id);
    const awayDefault = ctx.state.selection?.away && ctx.state.selection.away !== homeSelect.value
      ? ctx.state.selection.away : TEAMS.find(team => team.id !== homeSelect.value)?.id;
    const awaySelect = teamSelect('Visitante', awayDefault);
    const teamFields = el('div', { class: 'xfc27-room-teams' },
      el('label', { class: 'xfc27-room-label' }, 'Seu time (mandante)', homeSelect),
      el('label', { class: 'xfc27-room-label' }, 'Adversário (visitante)', awaySelect));
    overlay = el('section', { class: 'xfc27-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Conectar partida PvP' },
      el('button', { class: 'xfc27-dialog__close-icon', type: 'button', 'aria-label': 'Fechar', onClick: () => close(true) }, '×'),
      el('p', { class: 'xfc27-dialog__eyebrow', text: 'XFC 27 · PvP online' }),
      el('h2', { text: 'Conectar com um amigo' }),
      el('p', { class: 'xfc27-dialog__copy', text: 'O servidor cria um código real de cinco dígitos. Compartilhe-o; quando o outro jogador entrar, inicie a partida.' }),
      el('label', { class: 'xfc27-room-label' }, 'Servidor online (WSS)', serverInput),
      el('div', { class: 'xfc27-room-preview' }, roomLabel, roomCode),
      el('label', { class: 'xfc27-room-label' }, 'Código da sala', roomInput),
      el('div', { class: 'xfc27-room-actions' }, createButton, joinButton),
      teamFields,
      startButton,
      status,
      el('p', { class: 'xfc27-dialog__footnote', text: 'A conexão usa WebSocket seguro. O anfitrião executa a simulação e transmite o estado da partida; nenhum perfil ou senha é enviado.' }),
      el('button', { class: 'xfc27-dialog__close', type: 'button', text: 'Voltar', onClick: () => close(true) })
    );
    backdrop.append(overlay);
    node.append(backdrop);
    roomInput.focus();

    function teamSelect(label, selectedId) {
      return el('select', {
        class: 'xfc27-room-select',
        'aria-label': label,
        onChange() {
          if (homeSelect && awaySelect && homeSelect.value === awaySelect.value) {
            const alternative = TEAMS.find(team => team.id !== homeSelect.value);
            if (label === 'Mandante' && alternative) awaySelect.value = alternative.id;
            else if (alternative) homeSelect.value = alternative.id;
          }
        }
      }, ...TEAMS.map(team => el('option', {
        value: team.id,
        selected: team.id === selectedId,
        text: team.name
      })));
    }

    function setStatus(message, error = false) {
      status.textContent = message;
      status.classList.toggle('is-error', error);
    }

    function restoreActions() {
      connecting = false;
      createButton.disabled = false;
      joinButton.disabled = false;
      roomInput.disabled = false;
      serverInput.disabled = false;
    }

    async function connect(action) {
      if (connecting || connection) return;
      if (action === 'join' && !isFiveDigitRoomCode(roomInput.value)) {
        setStatus('Digite exatamente cinco números para localizar a sala.', true);
        roomInput.focus();
        return;
      }
      const url = resolveOnlineServerUrl(serverInput.value);
      if (!url) {
        setStatus('Endereço inválido. Use wss://domínio-do-servidor/ws; páginas HTTPS e o APK exigem WSS seguro.', true);
        serverInput.focus();
        return;
      }
      saveOnlineServerUrl(serverInput.value || url);
      connecting = true;
      role = action === 'create' ? 'host' : 'guest';
      createButton.disabled = true;
      joinButton.disabled = true;
      serverInput.disabled = true;
      setStatus('Conectando ao servidor online…');
      try {
        connection = openOnlineConnection(url);
        unsubscribe = connection.subscribe(onMessage);
        await connection.opened;
        if (!connection.send(action === 'create' ? { type: 'create-room' } : { type: 'join-room', code: roomInput.value })) {
          throw new Error('A conexão fechou antes de enviar o pedido.');
        }
        if (action === 'join') roomCode.textContent = roomInput.value;
        roomInput.disabled = action === 'create';
        serverInput.disabled = true;
        createButton.disabled = true;
        joinButton.disabled = true;
        connecting = false;
        setStatus(action === 'create'
          ? 'Pedido enviado. Aguarde o código da nova sala…'
          : 'Pedido enviado. Aguardando resposta do servidor…');
      } catch (error) {
        connection?.close();
        connection = null;
        unsubscribe?.();
        unsubscribe = null;
        restoreActions();
        setStatus(error.message || 'Falha ao conectar. Confira o servidor e tente novamente.', true);
      }
    }

    function onMessage(message) {
      if (!overlay || handedOff) return;
      if (message.type === 'room-created') {
        role = 'host';
        roomCode.textContent = message.code;
        roomCode.value = message.code;
        setStatus(`Sala ${message.code} criada no servidor. Compartilhe o código e aguarde o outro jogador.`);
      } else if (message.type === 'joined') {
        role = 'guest';
        roomCode.textContent = message.code;
        setStatus(`Entrou na sala ${message.code}. Aguardando o anfitrião iniciar a partida.`);
      } else if (message.type === 'peer-joined') {
        startButton.disabled = false;
        setStatus('O outro jogador entrou. Escolha os times e inicie a partida.');
      } else if (message.type === 'peer-left') {
        startButton.disabled = true;
        setStatus('O outro jogador se desconectou. A sala continua aberta para uma nova entrada.', true);
      } else if (message.type === 'start-accepted' && role === 'host') {
        launchOnlineMatch('host', message.config);
      } else if (message.type === 'match-start' && role === 'guest') {
        launchOnlineMatch('guest', message.config);
      } else if (message.type === 'room-expired') {
        setStatus('A sala expirou. Crie outra e compartilhe o novo código.', true);
        startButton.disabled = true;
      } else if (message.type === 'host-left') {
        setStatus('O anfitrião saiu da sala.', true);
        startButton.disabled = true;
      } else if (message.type === 'error') {
        if(['room-not-found','room-full','rate-limited','invalid-code'].includes(message.code)){
          const stale=connection;
          unsubscribe?.();unsubscribe=null;connection=null;role=null;
          stale?.close();
        }
        restoreActions();
        setStatus(message.message || 'O servidor recusou o pedido.', true);
      } else if (message.type === 'disconnected') {
        if (!handedOff) {
          restoreActions();
          setStatus('Conexão encerrada. Confira a rede ou o servidor e tente de novo.', true);
        }
      } else if (message.type === 'transport-error') {
        setStatus('Falha na conexão WebSocket. Verifique o endereço WSS e a disponibilidade do servidor.', true);
      }
    }

    function startOnlineMatch() {
      if (role !== 'host' || !connection?.isOpen || startButton.disabled) return;
      if (homeSelect.value === awaySelect.value) {
        setStatus('Escolha dois times diferentes.', true);
        return;
      }
      const seedBytes = new Uint32Array(1);
      if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(seedBytes);
      else seedBytes[0] = Math.floor(Math.random() * 0xffffffff);
      pendingConfig = {
        home: homeSelect.value,
        away: awaySelect.value,
        homeKit: Number(ctx.state.kits?.[homeSelect.value]) || 0,
        awayKit: Number(ctx.state.kits?.[awaySelect.value]) || 0,
        minutes: 3,
        difficulty: 'normal',
        stadium: 0,
        seed: seedBytes[0]
      };
      startButton.disabled = true;
      setStatus('Preparando a partida para os dois jogadores…');
      if (!connection.send({ type: 'start-match', config: pendingConfig })) {
        startButton.disabled = false;
        setStatus('A conexão caiu antes de iniciar. Tente novamente.', true);
      }
    }
  };

  function launchOnlineMatch(matchRole, config) {
    if (handedOff || !connection) return;
    handedOff = true;
    unsubscribe?.();
    unsubscribe = null;
    const matchConfig = config || pendingConfig;
    ctx.go('play', {
      ...matchConfig,
      userSide: matchRole === 'host' ? 'home' : 'away',
      online: { role: matchRole, connection, config: matchConfig }
    });
  }

  function close(disconnect = true) {
    overlay?.closest('.xfc27-dialog-backdrop')?.remove();
    overlay = null;
    if (disconnect && !handedOff) {
      connection?.send({ type: 'leave' });
      connection?.close();
      connection = null;
      unsubscribe?.();
      unsubscribe = null;
    }
  }

  const buttonsSpec = [
    ['Jogar Online', [46, 367, 437, 70], openRoom, 'ranked'],
    ['Amistoso Online', [47, 438, 438, 66], openRoom, 'friendly'],
    ['Ranking', [47, 505, 438, 68], () => showStatus('Ranking'), 'ranking'],
    ['Modo Ranqueado', [28, 606, 512, 149], () => showStatus('Modo Ranqueado'), 'ranked-card'],
    ['Partida Rápida PvP', [554, 606, 492, 149], openRoom, 'quick'],
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
      if (overlay && ['Escape', 'Backspace'].includes(event.key)) { close(true); return true; }
      if (overlay && event.key === 'Tab') {
        const focusable = [...overlay.querySelectorAll('button,input,select')];
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
      if ((event.key === 'Enter' || event.key === ' ') && !document.activeElement?.matches?.('button,input,select')) {
        buttons[activeButton]?.click();
        return true;
      }
      return false;
    },
    unmount() {
      if (!handedOff) close(true);
    }
  };
}
