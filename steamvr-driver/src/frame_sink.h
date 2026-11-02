// Para onde vai o quadro que o SteamVR compôs.
//
// O `Present()` do virtual display entrega um identificador de textura D3D11 compartilhada. Quem
// converte isso em H.264/HEVC é o `frame_sink` do Windows (`win/frame_sink_win.cpp`), em uma thread
// própria, e quem entrega o resultado ao celular é o PC Bridge, por TCP de loopback (porta 44790).
//
// O receptor é separado do driver de propósito: o driver roda dentro do vrserver, onde uma trava a
// mais é um SteamVR travado. Ele só deposita o quadro em um anel e continua.
#pragma once

#include <cstdint>

#include "state_layout.h"

namespace nextvr {
namespace pclink {

struct DisplayFrame {
    // Handle de `vr::SharedTextureHandle_t` (um HANDLE do D3D11 no Windows).
    void* texture = nullptr;
    uint32_t width = 0;
    uint32_t height = 0;
    uint32_t frameId = 0;
    uint64_t captureNs = 0;
};

class IFrameSink {
public:
    virtual ~IFrameSink() = default;

    /** Abre o canal com o Bridge. Falso quando ele não está rodando (não é um erro fatal). */
    virtual bool Start() = 0;
    virtual void Stop() = 0;

    /**
     * Recebe um quadro. Retorna `false` quando não há para onde mandá-lo; o driver segue, porque um
     * SteamVR que continua rodando sem imagem é melhor que um SteamVR que trava sem imagem.
     */
    virtual bool Submit(const DisplayFrame& frame) = 0;

    /** Quantos quadros foram entregues ao Bridge desde o início. */
    virtual uint64_t FramesSent() const = 0;
};

/** Cria o sink da plataforma (Windows: D3D11 + Media Foundation; demais: um sink nulo). */
IFrameSink* CreateFrameSink();

}  // namespace pclink
}  // namespace nextvr
