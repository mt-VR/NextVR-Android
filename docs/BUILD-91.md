# Build 91 — a lanterna automática parou de piscar

Correção do bug: *“a lanterna fica piscando, ela ativa e desativa do nada”*. Nada mais do app mudou —
o sistema de Key, a conta por e-mail, a bolinha do teclado e as janelas continuam iguais à Build 90.

APK: `https://github.com/mt-VR/NextVR-Android/raw/apk-dist/dist/NextVR.apk` (versionCode **91**).

## Por que piscava

A câmera mede a luz **que ela vê**. Com o flash aceso, o que ela vê é o flash iluminando o quarto.
O ciclo era sempre o mesmo:

1. escuro → a lanterna acende;
2. a luz dela sobe a leitura acima do limiar de “tem luz”;
3. o app acha que a luz voltou → apaga;
4. o quarto volta a ficar escuro → acende outra vez… para sempre, a cada poucos segundos.

Piorava porque o **modo noturno** também sobe o `+EV` no escuro, o que empurra a mesma leitura para
cima e alimentava o ciclo.

## O que foi feito (`web/src/night-camera-math.js`)

| Peça | O que faz |
| --- | --- |
| **Calibração da luz própria** (`selfGain`) | Depois que a lanterna acende, o app espera o AE e o LED estabilizarem (`SETTLE_MS` = 1,5 s) e mede **quanto a leitura subiu em relação ao escuro de antes** (`baseline`). Esse valor é descontado de todas as leituras seguintes: `ambiente = leitura − selfGain`. A luz da própria lanterna deixa de contar como luz do ambiente. |
| **Acompanhamento lento** | `selfGain` segue as mudanças (AE, parede mais perto) a 10% por leitura, com piso `SELF_MIN` e teto `SELF_MAX` — nunca zera a conta nem engole uma luz de verdade. |
| **Apagar só com luz de verdade** | `ambiente ≥ 0.42` por `OFF_CONFIRM` = 5 leituras seguidas (6 s) **e** depois de `MIN_ON_MS` = 6 s ligada. Cena saturada (`≥ 0.92`) só conta junto com ambiente estimado `≥ 0.30`, porque a própria lanterna pode saturar a imagem. |
| **Acender só no breu** | Escuridão `≤ 0.16` por 3 leituras seguidas, depois de `MIN_OFF_MS` = 6 s apagada. |
| **Anti-pisca por histórico** | Se a lanterna apagou “cedo” (ficou menos de 20 s ligada), a próxima vez exige mais confirmação. Depois de **3 ciclos curtos** ela **estaciona por 2 minutos** em vez de continuar piscando. É a garantia final: no pior caso, alguns ciclos e silêncio. |
| **Fim da briga com o modo noturno** | Com a lanterna acesa, o modo noturno **não** muda mais de estado (antes ele desligava o `+EV` por causa da luz da lanterna, o escuro voltava e os dois ficavam se alternando). |
| **Leitura própria, mais rápida** | A decisão do flash usa uma média exponencial 50/50 por leitura, em vez da média lenta do modo noturno. |
| **Sem `+EV` somado ao flash** | Com a lanterna acesa, o modo noturno sai de cena: `+EV` em cima do flash estoura a imagem, atrapalha o hand tracking e cega justamente a medição que decide se a luz voltou. O modo `Sempre ligada` que o usuário escolhe é respeitado. |

## O que aparece na tela

Configurações → Aba 2 → Câmera noturna mostra agora a **luz do ambiente já sem a luz da lanterna**
(`ambiente 8% (já sem a luz da lanterna)`) além do estado do flash — é esse número que decide, não a
leitura crua.

## Como foi testado (`tests/build-91.test.mjs`)

A decisão é simulada com leitura a cada 1,2 s, reproduzindo o que a câmera vê (ambiente + luz da
lanterna):

* quarto escuro por 3 minutos → **um único** evento: acendeu e ficou ligada;
* lanterna extremamente forte (leitura vai a 0,95) → continua ligada;
* luz do quarto volta → apaga **uma vez** e fica apagada;
* luz instável (4 s clara / 4 s escura por 10 minutos) → no máximo alguns ciclos, depois silêncio;
* 3 ciclos curtos → estaciona e fica apagada mesmo no escuro, voltando depois do descanso.

O caso real do usuário (quarto escuro, flash refletindo na parede) é exatamente o primeiro teste.
