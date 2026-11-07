// O frame sink fora do Windows.
//
// O driver em si compila e passa nos testes em qualquer sistema (é assim que o CI verifica a
// matemática do esqueleto e a tabela de offsets), mas o caminho de vídeo depende de D3D11 e de Media
// Foundation, que só existem no Windows. Aqui o sink existe, não trava e diz a verdade no log: nenhum
// quadro é entregue, e o Bridge publica "vídeo indisponível" em vez de fingir uma transmissão.
#include "../src/frame_sink.h"

#ifndef _WIN32

#include <cstdio>

namespace nextvr {
namespace pclink {
namespace {

class NullFrameSink : public IFrameSink {
public:
    bool Start() override {
        std::fprintf(stderr, "[nextvr] frame sink: sem D3D11/Media Foundation fora do Windows\n");
        return false;
    }
    void Stop() override {}
    bool Submit(const DisplayFrame&) override { return false; }
    uint64_t FramesSent() const override { return 0; }
};

}  // namespace

IFrameSink* CreateFrameSink() {
    static NullFrameSink sink;
    return &sink;
}

}  // namespace pclink
}  // namespace nextvr

#endif  // !_WIN32
