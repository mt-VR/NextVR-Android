// Classifica quais lances pedem replay automático e quanto esperar (ms) para
// o buffer circular registrar o desfecho antes de congelar e reexibir o lance.
// Puro e testável: nenhuma dependência de DOM, three.js ou do motor.
//
// A v0.5.41 só repercutia chute perigoso, defesa, falta grave e pênalti — na
// prática, quase sempre um chute isolado que terminava em tiro de meta ou
// lateral (o "só passa quando a bola sai"). Agora qualquer finalização,
// defesa difícil, desarme limpo, drible concluído, gol, escanteio, impedimento
// e bola parada de ataque têm clipe próprio.
export function replayTrigger(event) {
  if (!event || typeof event.type !== 'string') return null;
  switch (event.type) {
    case 'shot':
      return event.dangerous
        ? { delay: 1150, label: 'CHUTE PERIGOSO', importance: 3 }
        : { delay: 1000, label: 'FINALIZAÇÃO', importance: 2 };
    case 'save':
      return { delay: 720, label: 'DEFESA', importance: 3 };
    case 'goal':
      return { delay: 700, label: 'GOL', importance: 4, afterGoal: true };
    case 'foul':
      return (event.card === 'red' || event.dangerous || event.behind ||
        Number(event.severity) >= 0.72)
        ? { delay: 950, label: 'FALTA', importance: 3 }
        : { delay: 950, label: 'FALTA', importance: 1 };
    case 'tackle':
      return event.clean
        ? { delay: 850, label: 'DESARME', importance: 2 }
        : null;
    case 'dribble':
      return { delay: 900, label: 'DRIBLE', importance: 1 };
    case 'restart':
      if (event.kind === 'penalty') {
        // Espera a cobrança sair (o usuário pode demorar a chutar): o replay
        // só congela o jogo DEPOIS do lance, nunca durante a preparação.
        return { delay: 900, label: 'PÊNALTI', awaitPlay: true, importance: 4 };
      }
      if (event.kind === 'corner') return { delay: 900, label: 'ESCANTEIO', importance: 1 };
      return null;
    case 'offside':
      return { delay: 900, label: 'IMPEDIMENTO', importance: 1 };
    case 'pass-completed':
      return event.through
        ? { delay: 900, label: 'PASSE EM PROFUNDIDADE', importance: 1 }
        : null;
    default:
      return null;
  }
}
