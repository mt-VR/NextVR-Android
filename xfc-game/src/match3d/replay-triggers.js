// Classifica quais lances pedem replay automático e quanto esperar (ms) para
// o buffer circular registrar o desfecho antes de congelar e reexibir o lance.
// Puro e testável: nenhuma dependência de DOM, three.js ou do motor.
export function replayTrigger(event) {
  if (!event || typeof event.type !== 'string') return null;
  switch (event.type) {
    case 'shot':
      return event.dangerous ? { delay: 1150, label: 'CHUTE PERIGOSO' } : null;
    case 'save':
      return { delay: 720, label: 'DEFESA' };
    case 'foul':
      return (event.card === 'red' || event.dangerous || event.behind ||
        Number(event.severity) >= 0.72)
        ? { delay: 950, label: 'FALTA' }
        : null;
    case 'restart':
      // Espera a cobrança sair (o usuário pode demorar a chutar): o replay
      // só congela o jogo DEPOIS do lance, nunca durante a preparação.
      return event.kind === 'penalty'
        ? { delay: 900, label: 'PÊNALTI', awaitPlay: true }
        : null;
    default:
      return null;
  }
}
