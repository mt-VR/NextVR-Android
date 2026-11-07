// Lê o bloco de estado que o Bridge publica e imprime o que o driver veria.
//
// Serve a dois propósitos: depurar uma sessão em um PC ("o Bridge está escrevendo? a cabeça está
// chegando?") e provar no CI que o escritor do Node e o leitor do C++ concordam — o teste executa o
// Bridge de verdade, deixa ele publicar, e compara o que este programa imprime com o que foi enviado.
//
//   nextvr-state-dump [caminho-do-estado]
//
// Sem `ok: true`, o driver não tem pose nenhuma para publicar.
#include <cstdio>
#include <string>

#include "shared_state.h"

int main(int argc, char** argv) {
    nextvr::pclink::SharedStateReader reader;
    if (!reader.Open()) {
        std::printf("{\"ok\":false,\"reason\":\"state file missing or not initialised\",\"path\":\"%s\"}\n",
                    nextvr::pclink::SharedStatePath().c_str());
        return 1;
    }
    const nextvr::pclink::Frame frame = reader.Read(0, 60'000);
    std::printf(
        "{\"ok\":true,\"sequence\":%u,\"session\":%s,\"headValid\":%s,\"leftHand\":%s,\"rightHand\":%s,"
        "\"head\":{\"x\":%.4f,\"y\":%.4f,\"z\":%.4f,\"qx\":%.4f,\"qy\":%.4f,\"qz\":%.4f,\"qw\":%.4f},"
        "\"ipd\":%.4f,\"width\":%u,\"height\":%u,\"displayFreq\":%.1f,"
        "\"hands\":[{\"present\":%s,\"confidence\":%.3f,\"pinch\":%.0f,\"fist\":%.0f,"
        "\"palm\":[%.4f,%.4f,%.4f],\"joint8\":[%.4f,%.4f,%.4f]},"
        "{\"present\":%s,\"confidence\":%.3f,\"pinch\":%.0f,\"fist\":%.0f,"
        "\"palm\":[%.4f,%.4f,%.4f],\"joint8\":[%.4f,%.4f,%.4f]}]}\n",
        frame.sequence, frame.session ? "true" : "false", frame.headValid ? "true" : "false",
        frame.leftHand ? "true" : "false", frame.rightHand ? "true" : "false",
        frame.headPos.x, frame.headPos.y, frame.headPos.z, frame.headRot.x, frame.headRot.y,
        frame.headRot.z, frame.headRot.w, frame.ipd, frame.width, frame.height, frame.displayFreq,
        frame.hands[0].confidence > 0.0f ? "true" : "false", frame.hands[0].confidence,
        frame.hands[0].pinch, frame.hands[0].fist, frame.hands[0].pos[0], frame.hands[0].pos[1],
        frame.hands[0].pos[2], frame.hands[0].joints[8][0], frame.hands[0].joints[8][1],
        frame.hands[0].joints[8][2],
        frame.hands[1].confidence > 0.0f ? "true" : "false", frame.hands[1].confidence,
        frame.hands[1].pinch, frame.hands[1].fist, frame.hands[1].pos[0], frame.hands[1].pos[1],
        frame.hands[1].pos[2], frame.hands[1].joints[8][0], frame.hands[1].joints[8][1],
        frame.hands[1].joints[8][2]);
    return 0;
}
