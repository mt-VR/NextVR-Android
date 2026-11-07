/**
 * Descoberta do PC na rede local (UDP 44700).
 *
 * O celular manda `NVRD1 ?` em broadcast; o Bridge responde em unicast com o que o celular precisa
 * para decidir se conecta: portas, estado do SteamVR, versão do driver e se o runtime OpenXR
 * declara `XR_EXT_hand_tracking`.
 *
 * A resposta é MEDIDA, não decorada: quem preenche `openxrHandTracking` é o `compat.mjs`, que
 * pergunta ao runtime. Se ninguém conseguiu perguntar, o campo vai `null` — "não verificado" — e a
 * interface do celular mostra isso, em vez de um "sim" que ninguém checou.
 */
import { createSocket } from 'node:dgram';
import { DISCOVERY_MAGIC, discoveryReply, isDiscoveryRequest } from '../../pclink/wire.mjs';

export class DiscoveryResponder {
  constructor({ port, info, onProblem = () => {} } = {}) {
    this.port = port;
    this.info = info;
    this.onProblem = onProblem;
    this.socket = null;
    this.requests = 0;
  }

  async start() {
    this.socket = createSocket({ type: 'udp4', reuseAddr: true });
    this.socket.on('error', error => this.onProblem('discovery-socket', error.message));
    this.socket.on('message', (message, rinfo) => {
      if (!isDiscoveryRequest(message)) return;
      this.requests++;
      const reply = discoveryReply(typeof this.info === 'function' ? this.info() : this.info);
      try {
        this.socket.send(reply, rinfo.port, rinfo.address);
      } catch (error) {
        this.onProblem('discovery-reply', error.message);
      }
    });
    await new Promise((resolve, reject) => {
      const fail = error => reject(error);
      this.socket.once('error', fail);
      this.socket.bind(this.port, '0.0.0.0', () => {
        this.socket.off('error', fail);
        this.port = this.socket.address().port;
        // Broadcast na rede local: é como o celular acha o PC sem o usuário digitar IP nenhum.
        try { this.socket.setBroadcast(true); } catch { /* alguns sistemas não deixam; não é fatal */ }
        resolve();
      });
    });
    return this;
  }

  close() {
    if (!this.socket) return;
    try { this.socket.close(); } catch { /* já fechado */ }
    this.socket = null;
  }

  /** Identificador do protocolo, para o log do Bridge. */
  static get magic() { return `${DISCOVERY_MAGIC}1`; }
}
