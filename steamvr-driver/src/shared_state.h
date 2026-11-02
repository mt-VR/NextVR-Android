// Leitura do bloco de estado que o PC Bridge escreve (744 bytes, `core/state_layout.h`).
//
// Memória mapeada e não socket: o `RunFrame` do driver roda a 90 Hz dentro do vrserver e não pode
// esperar por nada. Ler um bloco mapeado é uma cópia de 744 bytes — microssegundos — e nunca bloqueia,
// mesmo que o Bridge tenha morrido (aí o `sequence` para de mudar, e o driver declara o rastreamento
// inválido em vez de repetir a última pose para sempre).
//
// O bloco é um ARQUIVO mapeado, não uma seção nomeada: o Bridge é Node.js e Node não cria seções de
// memória nomeadas sem um addon nativo. Um arquivo de 744 bytes escrito 72 vezes por segundo é
// ~50 KB/s (o cache de página do sistema cuida do resto) e ainda tem a vantagem de ser inspecionável
// quando alguém precisa depurar por que a cabeça não mexe.
#pragma once

#include <cstdint>
#include <string>

#include "state_layout.h"
#include "vecmath.h"

namespace nextvr {
namespace pclink {

/** Um retrato do estado, copiado do bloco mapeado. */
struct Frame {
    bool valid = false;
    bool session = false;
    bool headValid = false;
    bool leftHand = false;
    bool rightHand = false;
    bool stale = false;            // o Bridge parou de publicar
    uint32_t sequence = 0;
    uint64_t captureNs = 0;
    math::Vec3 headPos;
    math::Quat headRot;
    float ipd = 0.063f;
    float userHeight = 1.75f;
    float worldScale = 1.0f;
    float displayFreq = 72.0f;
    float projection[4] = {-1.2f, 1.2f, 1.1f, -1.1f};
    uint32_t width = 1832;
    uint32_t height = 1920;
    HandState hands[kHandCount] = {};
};

class SharedStateReader {
public:
    SharedStateReader() = default;
    ~SharedStateReader();

    SharedStateReader(const SharedStateReader&) = delete;
    SharedStateReader& operator=(const SharedStateReader&) = delete;

    /** Abre (ou cria, do lado Windows, com o mesmo nome) o bloco. Falso quando não há Bridge. */
    bool Open();
    void Close();
    bool is_open() const { return data_ != nullptr; }

    /** Copia o estado atual. `stale` quando o `sequence` não muda há `staleMs`. */
    Frame Read(uint64_t nowNs, uint64_t staleMs = 500);

private:
    const SharedState* data_ = nullptr;
    uint32_t lastSequence_ = 0;
    uint64_t lastChangeNs_ = 0;
#ifdef _WIN32
    void* mapping_ = nullptr;
    void* file_ = nullptr;
#else
    std::string name_;
#endif
};

/**
 * Caminho do bloco. Ordem: `NEXTVR_PCLINK_STATE` (variável de ambiente), depois
 * `%LOCALAPPDATA%\NextVR\pclink-state.bin` no Windows e `/tmp/nextvr-pclink-state.bin` no Linux.
 */
std::string SharedStatePath();

}  // namespace pclink
}  // namespace nextvr
