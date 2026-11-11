# CHANGELOG_PROMPT — melhorias propostas para o system prompt

Documento vivo: cada item descreve **o que mudar no prompt do agente**, **por
que** e **qual foi o sintoma real** que motivou o pedido. Nada aqui altera o
jogo; é o "backlog" de instruções para as próximas execuções.

---

## 1. Nunca encerrar o turno no meio de uma tarefa longa

**Mudar:** incluir a regra "continue trabalhando até o entregável estar validado
(testes verdes + captura de tela) e só então responda".

**Por quê:** o cliente reclamou três vezes ("Por que cê tá parando donada?",
"PQ TU PAROU DENOVO?"). O sintoma é um turno que termina com "vou continuar
agora" — para quem está do outro lado, parece que o trabalho travou.

**Sintoma real:** refino dos menus de competição precisou de várias rodadas
porque cada resposta devolvia status em vez de resultado.

---

## 2. Um palco de 1280×720 é a régua de layout; meça a horizontal em %

**Mudar:** documentar de saída que o jogo desenha num palco de altura fixa
(`fitStage`) e que medidas horizontais em px quebram em telas largas.

**Por quê:** os menus "ficaram pequenos no meio" exatamente porque a arte estava
posicionada em px numa caixa central. A correção (arte esticada + medidas em
`%` com base 1280) só apareceu depois de duas rodadas de captura.

**Regra derivada:** qualquer arte enviada pelo cliente vira **layout**, não
imagem de fundo; elementos de UI são DOM por cima da arte, e as áreas cobertas
pela UI são desfocadas na imagem para não duplicar conteúdo.

---

## 3. O sandbox não alcança Mixamo, Sketchfab, Kenney nem Poly Pizza

**Mudar:** declarar no prompt a lista de hosts liberados **antes** de prometer
download de assets 3D.

**Por quê:** o pedido do pacote 3D autorizava baixar modelos "compatíveis" — sem
essa informação o agente tenta, falha e queima o turno. O caminho real é: asset
entra por commit no repositório ou por pacote npm (ex.: `three` já vendorizado).

**Consequência prática:** quando o asset externo não é alcançável, entregue a
**infraestrutura** (rig, camadas, máscaras, IK, API) e documente o encaixe do
futuro `.glb` — é o que foi feito em `animation.js`.

---

## 4. Validar com captura de tela, não com "deve estar certo"

**Mudar:** exigir um screenshot (ou medição numérica) em toda tarefa visual, com
o caminho do arquivo no relatório final.

**Por quê:** a primeira versão do menu em tela cheia duplicava a carteira e o
menu do JPEG por baixo do DOM — invisível no código, óbvio na captura. Só a
imagem mostrou o problema.

**Receita que funcionou:** Playwright com `--single-process`, páginas abertas
(nunca `page.close()` no laço), `LD_LIBRARY_PATH=/tmp/al2023/lib`, e
`world.setPaused(true)` para congelar a cena 3D antes do clique.

---

## 5. Testes de browser são longos: use processo em segundo plano

**Mudar:** instruir explicitamente a rodar `npm test` via processo em background
com log em arquivo quando a suíte passa de ~3 min.

**Por quê:** a suíte completa leva ~6 min; em foreground o comando estoura o
timeout da ferramenta e o resultado é perdido, o que gera reexecução (e minutos
desperdiçados).

---

## 6. Separe "pose base" de "camadas" ao pedir animação em camadas

**Mudar:** no prompt, exigir que a animação por máscara seja **aditiva sobre uma
pose base reescrita a cada quadro**, com um teste que prove que a camada não
acumula offset entre quadros.

**Por quê:** a primeira versão do controlador lia a rotação atual do osso como
base; como o rig real reescreve a pose a cada quadro, funcionava no jogo — mas
qualquer caminho que *não* reescrevesse todos os ossos acumulava (dedos,
pescoço). A correção foi `resetRigPose()` no começo de `updateBase()` e um teste
com rig falso que reseta entre quadros.

---

## 7. Sombra dinâmica é orçamento de performance, não detalhe

**Mudar:** incluir a regra "só o protagonista e a bola entram no shadow map; o
resto usa sombra de contato" como critério de aceite de performance.

**Por quê:** 22 atletas com `castShadow = true` significam ~22× mais desenho no
shadow map. O LOD (`setDynamicShadow`) é o que faz os 60 FPS em mid-range serem
plausíveis, e é barato de implementar (liga/desliga `castShadow` de uma lista de
malhas já coletada).

---

## 8. Peça o "gancho de LLM" desde o começo

**Mudar:** todo sistema de jogo deve expor uma API viva em `window.__…` com
estado serializável (`state()`), além das ações.

**Por quê:** sem `state()` não há como verificar pela automação o que a camada
de animação está fazendo — o teste vira "não deu erro". Com estado, o teste
afirma peso, máscara e clipe ativos.

**Contrato atual:** `window.__xfcAnim.{setSpeed,setMask,blend,trigger,stop,state}`
e `window.__xfcMatch` (motor). Novos sistemas devem seguir o mesmo padrão.

---

## 9. Release: branch `arena/…` + `[publish-apk]` + bump de versão

**Mudar:** deixar no prompt a receita de publicação (commit com `[publish-apk]`,
bump em `android/app/build.gradle` e tag no workflow) e o aviso de **não
republicar tag existente**.

**Por quê:** o workflow só publica de branch `arena/...` e recusa tag repetida;
tentar de novo com a mesma versão gera run vermelho e retrabalho.

---

## 10. Português no produto, inglês na API

**Mudar:** registrar a convenção: código/comentários/UI em **pt-BR**, nomes de
API e clipes em **inglês** (`kick`, `celebrate`, `applyMask`).

**Por quê:** o cliente escreve em português e lê a UI; o LLM consome a API e o
resto do ecossistema 3D é em inglês. Misturar os dois já causou retrabalho em
nomes de máscara (foi preciso aceitar `pernas`/`lower` como aliases).
