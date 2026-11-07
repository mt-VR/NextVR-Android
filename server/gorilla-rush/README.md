# Servidor do Gorilla Rush (NextVR)

O jogo do Gorilla Rush falava com o **PeerJS público** — um serviço de terceiros, que ninguém aqui
controla e que não abre sem internet. Este diretório é o **nosso** servidor: um relé de salas de
arquivo único, sem dependência nenhuma (só `node`), que roda no PC da sua casa, num Raspberry Pi ou
num VPS.

## Rodar no PC (mesma rede Wi-Fi do celular)

```bash
node server/gorilla-rush/server.mjs            # porta 8787
node server/gorilla-rush/server.mjs --port 9000
```

Ele imprime o endereço para pôr no app:

```
Gorilla Rush server ouvindo em http://0.0.0.0:8787
No NextVR, aba 4 (Gorilla Tag) → Servidor:
   ws://192.168.0.10:8787   (mesma rede Wi-Fi)
```

No celular: **Configurações → aba 4 (Gorilla Tag) → SERVIDOR** → cole `ws://192.168.0.10:8787`
(pode digitar só `192.168.0.10:8787`, o app complete o `ws://`). Depois, **ENTRAR (JOIN)**.

Quem joga sozinho não precisa de nada disso: a tile da **Biblioteca de Apps** abre o jogo offline.

## De fora de casa (internet)

O servidor é HTTP+WebSocket numa porta só, então qualquer host que rode Node serve:

* VPS: `node server/gorilla-rush/server.mjs --port 8787` atrás de um proxy com TLS e use
  `wss://seu-dominio` (o app só aceita `ws://` e `wss://` — de propósito).
* Docker: `node:22-alpine`, `CMD ["node","/app/server.mjs"]`, exponha a porta 8787.
* Plataformas que só aceitam HTTP: o WebSocket precisa estar liberado (a maioria libera).

## O que ele faz

| | |
|---|---|
| Salas | código de 5 letras (A–Z, 2–9) ou públicas `PUB1`…`PUB6` para o "entrar rápido" |
| Anfitrião | o primeiro da sala; se ele sai, o próximo é promovido e a partida continua |
| Lugares | 8 por sala (o nono ouve `full` e não entra) |
| Estado | o convidado manda `p` (posição/mãos), o servidor entrega ao anfitrião; o anfitrião manda `s` (mundo) e o servidor entrega a todos |
| Diagnóstico | `GET /health` (salas e jogadores) e `GET /rooms` (lista) |

O código do jogo e o protocolo estão documentados no cabeçalho de `server.mjs`.

## Testes

```bash
node --test tests/gorilla-rush.test.mjs
```

O teste sobe este servidor de verdade em uma porta livre e faz dois clientes jogarem: sala por
código, anfitrião/convidado, espelho do estado, promoção quando o anfitrião cai, sala cheia e
"entrar rápido" caindo numa sala pública.
