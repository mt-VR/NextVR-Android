// Frame sink do Windows: textura do SteamVR → H.264/HEVC por hardware → PC Bridge.
//
// Este é o único arquivo do driver que depende de D3D11 e de Media Foundation, e é o único que este
// repositório NÃO consegue compilar fora do Windows (o CI valida o resto; aqui é preciso uma máquina
// com o SDK do Windows — ver `steamvr-driver/README.md`).
//
// O caminho de um quadro:
//
//   vrserver compõe os dois olhos
//        └─ Present(PresentInfo_t)  [thread do compositor]
//              └─ fila de 2 quadros (um a mais = latência, um a menos = engasgo)
//                    └─ thread do encoder:
//                         D3D11: textura compartilhada → textura NV12 (VideoProcessor, na GPU)
//                         Media Foundation: MFT H.264/HEVC com aceleração de hardware
//                         → NAL → TCP 127.0.0.1:44790 (cabeçalho de 24 bytes + payload)
//
// O Bridge é quem fala UDP com o celular. O driver não abre socket para a rede local: se ele errar,
// quem erra é o Bridge, e o SteamVR continua de pé.
#include <windows.h>

#include <d3d11.h>
#include <mfapi.h>
#include <mftransform.h>
#include <codecapi.h>
#include <mfidl.h>
#include <mferror.h>
#include <winsock2.h>
#include <ws2tcpip.h>

#include <atomic>
#include <chrono>
#include <condition_variable>
#include <cstdio>
#include <cstring>
#include <mutex>
#include <thread>
#include <vector>

#include "../frame_sink.h"

#pragma comment(lib, "d3d11.lib")
#pragma comment(lib, "mfplat.lib")
#pragma comment(lib, "mfuuid.lib")
#pragma comment(lib, "ws2_32.lib")

namespace nextvr {
namespace pclink {
namespace {

constexpr uint16_t kBridgeFramePort = 44790;
constexpr uint32_t kMaxFrameBytes = 8u * 1024u * 1024u;
constexpr int kFps = 90;
// O Bridge escolhe a qualidade pela interface do celular; aqui é a taxa que o encoder de hardware
// mantém. Uma sessão típica de PCVR em Wi-Fi 6 fica entre 40 e 80 Mbps para 1832×1920 por olho.
constexpr uint32_t kBitrateBps = 60u * 1000u * 1000u;

/** Cabeçalho de cada quadro enviado ao Bridge (24 bytes, little-endian). */
#pragma pack(push, 1)
struct FrameHeader {
    uint32_t magic;      // 'NVFR'
    uint32_t frameId;
    uint32_t bytes;
    uint32_t flags;      // bit 0 keyframe, bit 1 estéreo
    uint64_t captureNs;
};
#pragma pack(pop)
static_assert(sizeof(FrameHeader) == 24, "cabeçalho do frame precisa ter 24 bytes");

template <typename T>
void Release(T*& item) {
    if (item) {
        item->Release();
        item = nullptr;
    }
}

class WinFrameSink : public IFrameSink {
public:
    bool Start() override;
    void Stop() override;
    bool Submit(const DisplayFrame& frame) override;
    uint64_t FramesSent() const override { return sent_.load(); }

private:
    bool EnsureDevice(void* sharedHandle);
    bool EnsureEncoder(uint32_t width, uint32_t height);
    void Worker();
    bool EncodeAndSend(ID3D11Texture2D* texture, const DisplayFrame& frame);
    bool ConnectBridge();
    void SendAll(const void* data, size_t bytes);

    ID3D11Device* device_ = nullptr;
    ID3D11DeviceContext* context_ = nullptr;
    ID3D11Texture2D* staging_ = nullptr;       // entrada do VideoProcessor (cópia da textura do SteamVR)
    ID3D11Texture2D* nv12_ = nullptr;          // saída NV12 que o MFT consome
    ID3D11VideoDevice* videoDevice_ = nullptr;
    ID3D11VideoContext* videoContext_ = nullptr;
    ID3D11VideoProcessor* processor_ = nullptr;
    ID3D11VideoProcessorEnumerator* enumerator_ = nullptr;
    ID3D11VideoProcessorOutputView* outputView_ = nullptr;

    IMFTransform* encoder_ = nullptr;
    IMFDXGIDeviceManager* deviceManager_ = nullptr;
    UINT deviceManagerToken_ = 0;

    SOCKET socket_ = INVALID_SOCKET;
    std::vector<uint8_t> packet_;

    std::thread worker_;
    std::mutex mutex_;
    std::condition_variable ready_;
    DisplayFrame pending_{};
    bool hasPending_ = false;
    std::atomic<bool> running_{false};
    std::atomic<bool> started_{false};
    std::atomic<uint64_t> sent_{0};
    uint32_t width_ = 0;
    uint32_t height_ = 0;
    uint32_t frameCounter_ = 0;
    uint64_t lastConnectAttempt_ = 0;
};

bool WinFrameSink::Start() {
    if (started_.exchange(true)) return true;

    WSADATA wsa{};
    if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0) {
        started_ = false;
        return false;
    }
    if (FAILED(MFStartup(MF_VERSION, MFSTARTUP_LITE))) {
        WSACleanup();
        started_ = false;
        return false;
    }
    if (!ConnectBridge()) {
        // Sem Bridge o driver segue: o SteamVR tem um HMD, e o usuário vê "aguardando o celular".
        // A thread tenta reconectar uma vez por segundo.
        vr::VRDriverLog()->Log("[nextvr] bridge offline; tentando reconectar");
    }
    running_ = true;
    worker_ = std::thread(&WinFrameSink::Worker, this);
    return true;
}

void WinFrameSink::Stop() {
    if (!started_.exchange(false)) return;
    running_ = false;
    ready_.notify_all();
    if (worker_.joinable()) worker_.join();

    if (socket_ != INVALID_SOCKET) {
        closesocket(socket_);
        socket_ = INVALID_SOCKET;
    }
    Release(encoder_);
    Release(outputView_);
    Release(enumerator_);
    Release(processor_);
    Release(videoContext_);
    Release(videoDevice_);
    Release(nv12_);
    Release(staging_);
    Release(context_);
    Release(device_);
    if (deviceManager_) {
        deviceManager_->Release();
        deviceManager_ = nullptr;
    }
    MFShutdown();
    WSACleanup();
}

bool WinFrameSink::ConnectBridge() {
    const uint64_t now = static_cast<uint64_t>(std::chrono::duration_cast<std::chrono::milliseconds>(
        std::chrono::steady_clock::now().time_since_epoch()).count());
    if (now - lastConnectAttempt_ < 1000) return socket_ != INVALID_SOCKET;
    lastConnectAttempt_ = now;

    if (socket_ != INVALID_SOCKET) {
        closesocket(socket_);
        socket_ = INVALID_SOCKET;
    }
    SOCKET sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (sock == INVALID_SOCKET) return false;

    sockaddr_in address{};
    address.sin_family = AF_INET;
    address.sin_port = htons(kBridgeFramePort);
    inet_pton(AF_INET, "127.0.0.1", &address.sin_addr);
    if (connect(sock, reinterpret_cast<sockaddr*>(&address), sizeof(address)) != 0) {
        closesocket(sock);
        return false;
    }
    // Nagle desligado: o cabeçalho e o payload saem juntos, sem esperar 40 ms do algoritmo de Nagle.
    BOOL noDelay = TRUE;
    setsockopt(sock, IPPROTO_TCP, TCP_NODELAY, reinterpret_cast<const char*>(&noDelay), sizeof(noDelay));
    socket_ = sock;
    return true;
}

bool WinFrameSink::EnsureDevice(void* sharedHandle) {
    if (device_) return true;
    UINT flags = D3D11_CREATE_DEVICE_VIDEO_SUPPORT;
    D3D_FEATURE_LEVEL levels[] = {D3D_FEATURE_LEVEL_11_1, D3D_FEATURE_LEVEL_11_0};
    if (FAILED(D3D11CreateDevice(nullptr, D3D_DRIVER_TYPE_HARDWARE, nullptr, flags, levels, 2,
                                 D3D11_SDK_VERSION, &device_, nullptr, &context_))) {
        return false;
    }
    if (FAILED(device_->QueryInterface(__uuidof(ID3D11VideoDevice), reinterpret_cast<void**>(&videoDevice_))) ||
        FAILED(context_->QueryInterface(__uuidof(ID3D11VideoContext), reinterpret_cast<void**>(&videoContext_)))) {
        return false;
    }
    (void)sharedHandle;  // o handle é aberto a cada quadro (o SteamVR troca de textura entre eles)
    return true;
}

bool WinFrameSink::EnsureEncoder(uint32_t width, uint32_t height) {
    if (encoder_ && width_ == width && height_ == height) return true;

    Release(outputView_);
    Release(enumerator_);
    Release(processor_);
    Release(nv12_);
    Release(staging_);
    Release(encoder_);
    width_ = width;
    height_ = height;

    // Textura de entrada: cópia da textura do SteamVR (a original é do compositor e não é nossa).
    D3D11_TEXTURE2D_DESC input{};
    input.Width = width;
    input.Height = height;
    input.MipLevels = 1;
    input.ArraySize = 1;
    input.Format = DXGI_FORMAT_B8G8R8A8_UNORM;
    input.SampleDesc.Count = 1;
    input.Usage = D3D11_USAGE_DEFAULT;
    input.BindFlags = D3D11_BIND_SHADER_RESOURCE | D3D11_BIND_RENDER_TARGET;
    if (FAILED(device_->CreateTexture2D(&input, nullptr, &staging_))) return false;

    D3D11_TEXTURE2D_DESC outputDesc = input;
    outputDesc.Format = DXGI_FORMAT_NV12;
    outputDesc.BindFlags = D3D11_BIND_RENDER_TARGET;
    if (FAILED(device_->CreateTexture2D(&outputDesc, nullptr, &nv12_))) return false;

    D3D11_VIDEO_PROCESSOR_CONTENT_DESC content{};
    content.InputFrameFormat = D3D11_VIDEO_FRAME_FORMAT_PROGRESSIVE;
    content.InputWidth = width;
    content.InputHeight = height;
    content.OutputWidth = width;
    content.OutputHeight = height;
    content.Usage = D3D11_VIDEO_USAGE_PLAYBACK_NORMAL;
    if (FAILED(videoDevice_->CreateVideoProcessorEnumerator(&content, &enumerator_)) ||
        FAILED(videoDevice_->CreateVideoProcessor(enumerator_, 0, &processor_))) {
        return false;
    }
    D3D11_VIDEO_PROCESSOR_OUTPUT_VIEW_DESC outputViewDesc{};
    outputViewDesc.ViewDimension = D3D11_VPOV_DIMENSION_TEXTURE2D;
    if (FAILED(videoDevice_->CreateVideoProcessorOutputView(nv12_, enumerator_, &outputViewDesc, &outputView_))) {
        return false;
    }

    // MFT H.264 com aceleração de hardware (NVENC/AMF/QSV aparecem como MFTs de hardware).
    MFT_REGISTER_TYPE_INFO outputType{MFMediaType_Video, MFVideoFormat_H264};
    IMFActivate** activates = nullptr;
    UINT32 count = 0;
    if (FAILED(MFTEnumEx(MFT_CATEGORY_VIDEO_ENCODER,
                         MFT_ENUM_FLAG_HARDWARE | MFT_ENUM_FLAG_SORTANDFILTER,
                         nullptr, &outputType, &activates, &count)) || count == 0) {
        vr::VRDriverLog()->Log("[nextvr] nenhum encoder H.264 de hardware encontrado");
        if (activates) CoTaskMemFree(activates);
        return false;
    }
    activates[0]->ActivateObject(__uuidof(IMFTransform), reinterpret_cast<void**>(&encoder_));
    for (UINT32 i = 0; i < count; ++i) activates[i]->Release();
    CoTaskMemFree(activates);
    if (!encoder_) return false;

    // Habilita o modo assíncrono: o compositor do SteamVR não pode esperar o hardware.
    IMFAttributes* attributes = nullptr;
    if (SUCCEEDED(encoder_->GetAttributes(&attributes)) && attributes) {
        UINT32 async = 0;
        if (attributes->GetUINT32(MF_TRANSFORM_ASYNC, &async) == S_OK && async) {
            attributes->SetUINT32(MF_TRANSFORM_ASYNC_UNLOCK, TRUE);
        }
        attributes->Release();
    }

    UINT32 token = 0;
    MFCreateDXGIDeviceManager(&token, &deviceManager_);
    if (deviceManager_) {
        deviceManager_->ResetDevice(device_, token);
        deviceManagerToken_ = token;
        encoder_->ProcessMessage(MFT_MESSAGE_SET_D3D_MANAGER, reinterpret_cast<ULONG_PTR>(deviceManager_));
    }

    // Perfil baixo atraso: sem B-frames, sem look-ahead, taxa constante e um quadro por chamada.
    if (ICodecAPI* codec = nullptr; SUCCEEDED(encoder_->QueryInterface(__uuidof(ICodecAPI), reinterpret_cast<void**>(&codec)))) {
        VARIANT value;
        VariantInit(&value);
        value.vt = VT_UI4;
        value.ulVal = 0;                                    // sem B-frames
        codec->SetValue(&CODECAPI_AVEncMPVDefaultBPictureCount, &value);
        value.ulVal = eAVEncCommonRateControlMode_CBR;
        codec->SetValue(&CODECAPI_AVEncCommonRateControlMode, &value);
        value.vt = VT_BOOL;
        value.boolVal = VARIANT_TRUE;
        codec->SetValue(&CODECAPI_AVLowLatencyMode, &value);
        codec->Release();
    }

    // Tipos de entrada e saída. NV12 na entrada (o VideoProcessor já converteu na GPU) e H.264 na
    // saída, progressivo, taxa constante — o que qualquer MediaCodec do Android decodifica.
    IMFMediaType* outputType = nullptr;
    if (SUCCEEDED(MFCreateMediaType(&outputType)) && outputType) {
        outputType->SetGUID(MF_MT_MAJOR_TYPE, MFMediaType_Video);
        outputType->SetGUID(MF_MT_SUBTYPE, MFVideoFormat_H264);
        outputType->SetUINT32(MF_MT_AVG_BITRATE, kBitrateBps);
        outputType->SetUINT32(MF_MT_INTERLACE_MODE, MFVideoInterlace_Progressive);
        MFSetAttributeSize(outputType, MF_MT_FRAME_SIZE, width, height);
        MFSetAttributeRatio(outputType, MF_MT_FRAME_RATE, kFps, 1);
        MFSetAttributeRatio(outputType, MF_MT_PIXEL_ASPECT_RATIO, 1, 1);
        const HRESULT setOutput = encoder_->SetOutputType(0, outputType, 0);
        outputType->Release();
        if (FAILED(setOutput)) {
            vr::VRDriverLog()->Log("[nextvr] o encoder recusou a saida H.264");
            return false;
        }
    }

    IMFMediaType* inputMediaType = nullptr;
    if (SUCCEEDED(MFCreateMediaType(&inputMediaType)) && inputMediaType) {
        inputMediaType->SetGUID(MF_MT_MAJOR_TYPE, MFMediaType_Video);
        inputMediaType->SetGUID(MF_MT_SUBTYPE, MFVideoFormat_NV12);
        inputMediaType->SetUINT32(MF_MT_INTERLACE_MODE, MFVideoInterlace_Progressive);
        MFSetAttributeSize(inputMediaType, MF_MT_FRAME_SIZE, width, height);
        MFSetAttributeRatio(inputMediaType, MF_MT_FRAME_RATE, kFps, 1);
        MFSetAttributeRatio(inputMediaType, MF_MT_PIXEL_ASPECT_RATIO, 1, 1);
        const HRESULT setInput = encoder_->SetInputType(0, inputMediaType, 0);
        inputMediaType->Release();
        if (FAILED(setInput)) {
            vr::VRDriverLog()->Log("[nextvr] o encoder recusou a entrada NV12");
            return false;
        }
    }

    encoder_->ProcessMessage(MFT_MESSAGE_COMMAND_FLUSH, 0);
    encoder_->ProcessMessage(MFT_MESSAGE_NOTIFY_BEGIN_STREAMING, 0);
    encoder_->ProcessMessage(MFT_MESSAGE_NOTIFY_START_OF_STREAM, 0);
    return true;
}

bool WinFrameSink::EncodeAndSend(ID3D11Texture2D* texture, const DisplayFrame& frame) {
    if (!texture) return false;
    context_->CopyResource(staging_, texture);

    D3D11_VIDEO_PROCESSOR_INPUT_VIEW_DESC inputViewDesc{};
    inputViewDesc.FourCC = 0;
    inputViewDesc.ViewDimension = D3D11_VPIV_DIMENSION_TEXTURE2D;
    ID3D11VideoProcessorInputView* inputView = nullptr;
    if (FAILED(videoDevice_->CreateVideoProcessorInputView(staging_, enumerator_, &inputViewDesc, &inputView))) {
        return false;
    }
    D3D11_VIDEO_PROCESSOR_STREAM stream{};
    stream.Enable = TRUE;
    stream.pInputSurface = inputView;
    const HRESULT processed = videoContext_->VideoProcessorBlt(processor_, outputView_, 0, 1, &stream);
    inputView->Release();
    if (FAILED(processed)) return false;

    // Entrega o NV12 ao MFT e recolhe o NAL.
    IMFMediaBuffer* buffer = nullptr;
    if (FAILED(MFCreateDXGISurfaceBuffer(__uuidof(ID3D11Texture2D), nv12_, 0, FALSE, &buffer))) return false;
    IMFSample* sample = nullptr;
    MFCreateSample(&sample);
    sample->AddBuffer(buffer);
    sample->SetSampleTime(static_cast<LONGLONG>(frame.captureNs / 100));
    buffer->Release();

    const HRESULT fed = encoder_->ProcessInput(0, sample, 0);
    sample->Release();
    if (FAILED(fed)) return false;

    bool keyframe = false;
    for (;;) {
        MFT_OUTPUT_DATA_BUFFER out{};
        out.dwStreamID = 0;
        DWORD status = 0;
        const HRESULT got = encoder_->ProcessOutput(0, 1, &out, &status);
        if (got == MF_E_TRANSFORM_NEED_MORE_INPUT) break;
        if (FAILED(got)) break;
        if (out.pSample) {
            IMFMediaBuffer* encoded = nullptr;
            if (SUCCEEDED(out.pSample->ConvertToContiguousBuffer(&encoded)) && encoded) {
                BYTE* data = nullptr;
                DWORD length = 0;
                if (SUCCEEDED(encoded->Lock(&data, nullptr, &length)) && length > 0 && length <= kMaxFrameBytes) {
                    // Annex-B: o MFT pode entregar em AVCC; o decodificador do Android aceita os dois
                    // quando o `csd` é enviado, e MediaCodec em modo de baixo atraso prefere Annex-B.
                    FrameHeader header{};
                    header.magic = 0x5246564Eu;   // 'NVFR'
                    header.frameId = frame.frameId ? frame.frameId : ++frameCounter_;
                    header.bytes = length;
                    header.flags = 0x2;           // estéreo lado a lado
                    header.captureNs = frame.captureNs;
                    SendAll(&header, sizeof(header));
                    SendAll(data, length);
                    ++sent_;
                    keyframe = keyframe || (data[4] & 0x1F) == 5;   // IDR no NAL
                }
                encoded->Unlock();
                encoded->Release();
            }
            out.pSample->Release();
        }
        if (out.pEvents) out.pEvents->Release();
    }
    (void)keyframe;
    return true;
}

void WinFrameSink::SendAll(const void* data, size_t bytes) {
    if (socket_ == INVALID_SOCKET) return;
    const char* cursor = static_cast<const char*>(data);
    size_t remaining = bytes;
    while (remaining > 0) {
        const int chunk = send(socket_, cursor, static_cast<int>(remaining), 0);
        if (chunk <= 0) {
            // Bridge caiu: fecha e deixa a thread reconectar. O quadro atual é perdido de propósito.
            closesocket(socket_);
            socket_ = INVALID_SOCKET;
            return;
        }
        cursor += chunk;
        remaining -= static_cast<size_t>(chunk);
    }
}

bool WinFrameSink::Submit(const DisplayFrame& frame) {
    if (!started_ || !frame.texture) return false;
    {
        std::lock_guard<std::mutex> lock(mutex_);
        pending_ = frame;
        hasPending_ = true;
    }
    ready_.notify_one();
    return true;
}

void WinFrameSink::Worker() {
    CoInitializeEx(nullptr, COINIT_MULTITHREADED);
    while (running_) {
        DisplayFrame frame;
        {
            std::unique_lock<std::mutex> lock(mutex_);
            ready_.wait_for(lock, std::chrono::milliseconds(100), [this] { return hasPending_ || !running_; });
            if (!running_) break;
            if (!hasPending_) continue;
            frame = pending_;
            hasPending_ = false;
        }
        if (socket_ == INVALID_SOCKET && !ConnectBridge()) continue;
        if (!EnsureDevice(frame.texture) || !EnsureEncoder(frame.width, frame.height)) continue;

        ID3D11Texture2D* shared = nullptr;
        if (FAILED(device_->OpenSharedResource(reinterpret_cast<HANDLE>(frame.texture),
                                               __uuidof(ID3D11Texture2D),
                                               reinterpret_cast<void**>(&shared)))) {
            continue;
        }
        D3D11_TEXTURE2D_DESC desc{};
        shared->GetDesc(&desc);
        if (desc.Width != frame.width || desc.Height != frame.height) {
            shared->Release();
            continue;
        }
        EncodeAndSend(shared, frame);
        shared->Release();
    }
    CoUninitialize();
}

}  // namespace

IFrameSink* CreateFrameSink() {
    static WinFrameSink sink;
    return &sink;
}

}  // namespace pclink
}  // namespace nextvr
