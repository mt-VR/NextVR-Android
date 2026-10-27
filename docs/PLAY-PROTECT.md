# Play Protect: por que o aviso aparece e o que dá (e não dá) para fazer

## O aviso

> “Este app pode ser perigoso” / “App não verificado” / “O Play Protect bloqueou um app não
> verificado” e o pedido de desativar a verificação.

Isso não é o Android avisando que o ATMOXR faz alguma coisa: é o **Google Play Protect** avisando que
ele não conhece o app. Qualquer APK instalado fora da Play Store passa por isso, inclusive apps
legítimos. O veredito vem dos servidores do Google (reputação do pacote + do certificado + análise de
comportamento) e **não pode ser alterado por código do app**: nenhuma permissão, nenhuma API e nenhum
manifesto muda a resposta que o Google dá ao PackageInstaller.

## O que a Build 89 mudou de verdade

1. **O APK agora é release, não debug.** O APK entregue até a Build 88 saía de `assembleDebug`, com
   `android:debuggable=true` no manifesto. Build de depuração é um dos sinais que o Play Protect usa
   para tratar um APK como suspeito (e é um cheiro clássico de app repackageado). Agora o CI roda
   `assembleRelease` e publica essa variante (`nextvr-android/build.gradle`,
   `.github/workflows/android.yml`).
2. **A assinatura é a mesma de sempre**, de propósito. `signingConfigs.release` aponta para
   `signing/debug.keystore` — a chave pública do repositório que já assinava as builds anteriores.
   Trocar de certificado faria o Android recusar a instalação por cima (“App not installed”) e o
   usuário perderia perfil, personagem e configurações. Assinatura estável e igual entre versões é o
   que permite atualizar sem desinstalar.
3. **A superfície de permissões continua mínima.** O manifesto não pede `QUERY_ALL_PACKAGES`, não pede
   `REQUEST_INSTALL_PACKAGES`, não lê SMS/contatos, não grava áudio e não declara nada de
   `SYSTEM_ALERT_WINDOW`. O que existe é o necessário: câmera (passthrough + hand tracking), internet,
   sensores, captura de tela (MediaProjection, para a janela do celular) e o serviço de acessibilidade
   **opcional** que só é ativado se o usuário ligar em Ajustes do Android. Esses três últimos
   (acessibilidade, captura de tela e câmera) são justamente os recursos que deixam a análise
   heurística do Google desconfiada em qualquer app — inclusive nos apps de verdade que fazem o mesmo.
4. **Nota na interface.** Configurações → Aba 2 mostra, embaixo das opções de câmera, o texto que
   explica o aviso e o que tocar.

## O que o usuário precisa fazer (uma vez por versão)

1. Deixe o **Play Protect ligado**. Não é preciso desligar nada em Ajustes → Google → Play Protect.
2. Ao abrir o APK, toque em **“Mais detalhes”** → **“Instalar mesmo assim”** (ou “Instalar sem
   verificar”). É a única confirmação que o Android pede para app fora da loja.
3. Se aparecer “Play Protect bloqueou um app não verificado”, use **“Instalar mesmo assim”** no
   diálogo — o botão fica atrás de “Mais detalhes” em algumas versões.
4. Em aparelhos Xiaomi/HyperOS, Ajustes → Segurança → Instalação via USB/desconhecidos: permitir para
   o app que está abrindo o APK (Arquivos/Chrome). Isso não é o Play Protect.

## O que só o Google pode resolver

* O selo “verificado pelo Google” e a ausência total de aviso exigem **distribuição pela Play Store**
  (conta de desenvolvedor, ficha do app, revisão) ou uma allowlist corporativa via Android Enterprise.
  Não existe caminho técnico fora desses dois.
* Reputação de certificado cresce com o tempo e com o número de instalações do **mesmo** pacote
  (`com.atmoxr.app`) assinado com o **mesmo** certificado. Por isso a Build 89 mantém a chave e só
  troca a variante de build: cada atualização instalada “por cima” conta a favor.
* Reassinar o APK (outra chave) melhora nada e ainda quebra a atualização: é exatamente o padrão de um
  app repackageado, que o Play Protect trata pior.

Resumo honesto: o aviso de app desconhecido não desaparece por código. O que dava para fazer — sair do
build de depuração, manter a assinatura estável e reduzir a superfície de permissões — está feito, e o
“Instalar mesmo assim” é o único passo manual que sobra.
