// nextvr-openxr-probe — pergunta ao runtime OpenXR ATIVO quais extensões ele declara.
//
// Por que isto existe
// -------------------
// O pedido tem uma frase específica: "não assumir que disponibilizar o Skeletal Input automaticamente
// disponibiliza o XR_EXT_hand_tracking". O Skeletal Input é OpenVR; a extensão é OpenXR. A única
// resposta honesta para "este PC tem a extensão?" é perguntar ao runtime — é o que este programa faz.
//
// Como ele pergunta, e por que sem os headers do SDK
// --------------------------------------------------
// Abre o loader do OpenXR (`openxr_loader.dll`), pega `xrGetInstanceProcAddr` e, POR ELE, as três
// funções de que precisa: `xrCreateInstance`, `xrEnumerateInstanceExtensionProperties` e
// `xrDestroyInstance`. Assim o programa compila em qualquer MSVC + Windows SDK, sem baixar o SDK do
// OpenXR e sem linkar contra uma versão específica do loader.
//
// As três estruturas que atravessam essa fronteira (XrInstanceCreateInfo, XrApplicationInfo,
// XrExtensionProperties) fazem parte do ABI 1.0 do OpenXR e estão declaradas abaixo com o layout
// exato do `openxr.h`. São as únicas: qualquer coisa além disso (nomes de runtime, propriedades) seria
// mais estrutura para errar, e o Bridge não precisa dela.
//
// Saída: UMA linha JSON, porque quem lê é o `pc-bridge/src/compat.mjs`:
//
//   {"ok":true,"runtimeManifest":"C:\\...\\steamvr\\openxr\\active_runtime.json",
//    "extensions":["XR_KHR_...","XR_EXT_hand_tracking"],"reason":null}
//
// `extensions` é a lista literal devolvida pelo runtime, sem filtro. Quem decide se
// XR_EXT_hand_tracking está lá é o Bridge (e ele só diz `true` se o nome aparecer na lista).
//
// Este arquivo NÃO foi compilado neste repositório: não há MSVC nem Windows aqui. É código escrito
// contra o ABI publicado, com um teste de compilação sintática em Linux (`tools/openxr-probe-syntax.mjs`)
// para as partes portáveis, e nada além disso foi verificado. Ver docs/PC-LINK.md, seção 7.

#ifdef _WIN32

#include <windows.h>

#include <cstdio>
#include <cstdint>
#include <string>
#include <vector>

namespace {

// ------------------------------------------------------------------ ABI mínima do OpenXR 1.0

using XrInstance = struct XrInstance_T*;
using XrResult = int32_t;
using XrVersion = uint64_t;
using XrFlags64 = uint64_t;
using XrStructureType = int32_t;

constexpr XrResult XR_SUCCESS = 0;
constexpr XrStructureType XR_TYPE_EXTENSION_PROPERTIES = 2;
constexpr XrStructureType XR_TYPE_INSTANCE_CREATE_INFO = 3;
constexpr size_t XR_MAX_APPLICATION_NAME_SIZE = 128;
constexpr size_t XR_MAX_ENGINE_NAME_SIZE = 128;
constexpr size_t XR_MAX_EXTENSION_NAME_SIZE = 128;

/** XR_MAKE_VERSION(1,0,0): o runtime aceita qualquer 1.0.x que ele conheça. */
constexpr XrVersion XR_API_VERSION_1_0 = (1ull << 48);

struct XrApplicationInfo {
    char applicationName[XR_MAX_APPLICATION_NAME_SIZE];
    uint32_t applicationVersion;
    char engineName[XR_MAX_ENGINE_NAME_SIZE];
    uint32_t engineVersion;
    XrVersion apiVersion;
};

struct XrInstanceCreateInfo {
    XrStructureType type;
    const void* next;
    XrFlags64 createFlags;
    XrApplicationInfo applicationInfo;
    uint32_t enabledApiLayerCount;
    const char* const* enabledApiLayerNames;
    uint32_t enabledExtensionCount;
    const char* const* enabledExtensionNames;
};

struct XrExtensionProperties {
    XrStructureType type;
    void* next;
    char extensionName[XR_MAX_EXTENSION_NAME_SIZE];
    uint32_t extensionVersion;
};

using PFN_xrGetInstanceProcAddr = XrResult (*)(XrInstance, const char*, void**);
using PFN_xrCreateInstance = XrResult (*)(const XrInstanceCreateInfo*, XrInstance*);
using PFN_xrDestroyInstance = XrResult (*)(XrInstance);
using PFN_xrEnumerateInstanceExtensionProperties =
    XrResult (*)(const char*, uint32_t, uint32_t*, XrExtensionProperties*);

// ------------------------------------------------------------------ utilidades

std::string jsonEscape(const std::string& text) {
    std::string out;
    out.reserve(text.size() + 8);
    for (char c : text) {
        switch (c) {
            case '"': out += "\\\""; break;
            case '\\': out += "\\\\"; break;
            case '\n': out += "\\n"; break;
            case '\r': out += "\\r"; break;
            case '\t': out += "\\t"; break;
            default:
                if (static_cast<unsigned char>(c) < 0x20) {
                    char buffer[8];
                    std::snprintf(buffer, sizeof buffer, "\\u%04x", static_cast<unsigned char>(c));
                    out += buffer;
                } else {
                    out += c;
                }
        }
    }
    return out;
}

/**
 * Caminho do runtime ativo, do registro do Khronos — o mesmo que qualquer app OpenXR consulta.
 *
 * Serve para dois fins: mostrar ao usuário QUAL runtime respondeu, e (se o loader não estiver no
 * caminho do sistema) achar o `openxr_loader.dll` que vem junto dele.
 */
std::string activeRuntimeManifest() {
    const HKEY roots[] = {HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE};
    for (HKEY root : roots) {
        HKEY key = nullptr;
        if (RegOpenKeyExW(root, L"SOFTWARE\\Khronos\\OpenXR\\1", 0, KEY_READ, &key) != ERROR_SUCCESS) continue;
        wchar_t value[2048];
        DWORD bytes = sizeof value;
        DWORD type = 0;
        const LONG got = RegQueryValueExW(key, L"ActiveRuntime", nullptr, &type,
                                          reinterpret_cast<LPBYTE>(value), &bytes);
        RegCloseKey(key);
        if (got != ERROR_SUCCESS || type != REG_SZ || bytes < sizeof(wchar_t) * 2) continue;
        value[(bytes / sizeof(wchar_t)) - 1] = L'\0';
        char utf8[4096];
        const int written = WideCharToMultiByte(CP_UTF8, 0, value, -1, utf8, sizeof utf8, nullptr, nullptr);
        if (written > 0) return std::string(utf8);
    }
    return {};
}

/** O loader: ao lado do probe, no sistema, ou na pasta do runtime ativo. */
HMODULE loadLoader(const std::string& manifest) {
    if (HMODULE local = LoadLibraryExW(L"openxr_loader.dll", nullptr, LOAD_LIBRARY_SEARCH_DEFAULT_DIRS)) {
        return local;
    }
    if (HMODULE system = LoadLibraryW(L"openxr_loader.dll")) return system;
    if (!manifest.empty()) {
        std::string directory = manifest;
        const size_t slash = directory.find_last_of("\\/");
        if (slash != std::string::npos) {
            directory.resize(slash + 1);
            directory += "openxr_loader.dll";
            std::wstring wide(directory.begin(), directory.end());
            if (HMODULE beside = LoadLibraryW(wide.c_str())) return beside;
        }
    }
    return nullptr;
}

void emit(const std::string& body) {
    std::fputs(body.c_str(), stdout);
    std::fputc('\n', stdout);
    std::fflush(stdout);
}

int fail(const std::string& reason, const std::string& manifest) {
    emit("{\"ok\":false,\"reason\":\"" + jsonEscape(reason) + "\",\"runtimeManifest\":\"" +
         jsonEscape(manifest) + "\",\"extensions\":[]}");
    return 1;
}

}  // namespace

int main() {
    const std::string manifest = activeRuntimeManifest();
    HMODULE loader = loadLoader(manifest);
    if (!loader) return fail("openxr_loader.dll não encontrado", manifest);

    auto getProcAddr = reinterpret_cast<PFN_xrGetInstanceProcAddr>(
        GetProcAddress(loader, "xrGetInstanceProcAddr"));
    if (!getProcAddr) return fail("openxr_loader.dll sem xrGetInstanceProcAddr", manifest);

    void* symbol = nullptr;
    auto createInstance = PFN_xrCreateInstance{};
    auto destroyInstance = PFN_xrDestroyInstance{};
    auto enumerate = PFN_xrEnumerateInstanceExtensionProperties{};
    if (getProcAddr(nullptr, "xrCreateInstance", &symbol) != XR_SUCCESS || !symbol) {
        return fail("xrCreateInstance indisponível", manifest);
    }
    createInstance = reinterpret_cast<PFN_xrCreateInstance>(symbol);
    symbol = nullptr;
    if (getProcAddr(nullptr, "xrDestroyInstance", &symbol) != XR_SUCCESS || !symbol) {
        return fail("xrDestroyInstance indisponível", manifest);
    }
    destroyInstance = reinterpret_cast<PFN_xrDestroyInstance>(symbol);
    symbol = nullptr;
    if (getProcAddr(nullptr, "xrEnumerateInstanceExtensionProperties", &symbol) != XR_SUCCESS || !symbol) {
        return fail("xrEnumerateInstanceExtensionProperties indisponível", manifest);
    }
    enumerate = reinterpret_cast<PFN_xrEnumerateInstanceExtensionProperties>(symbol);

    // Nenhuma camada API e nenhuma extensão habilitada: a lista de extensões de INSTÂNCIA que o
    // runtime declara não depende do que o app pediu, e pedir nada é a pergunta mais neutra possível.
    XrInstanceCreateInfo info{};
    info.type = XR_TYPE_INSTANCE_CREATE_INFO;
    std::snprintf(info.applicationInfo.applicationName, sizeof info.applicationInfo.applicationName,
                  "%s", "NextVR OpenXR Probe");
    std::snprintf(info.applicationInfo.engineName, sizeof info.applicationInfo.engineName, "%s", "NextVR");
    info.applicationInfo.apiVersion = XR_API_VERSION_1_0;

    XrInstance instance = nullptr;
    const XrResult created = createInstance(&info, &instance);
    if (created != XR_SUCCESS || !instance) {
        char reason[96];
        std::snprintf(reason, sizeof reason, "xrCreateInstance falhou (XrResult %d)", created);
        return fail(reason, manifest);
    }

    uint32_t count = 0;
    std::vector<XrExtensionProperties> extensions;
    XrResult enumerated = enumerate(nullptr, 0, &count, nullptr);
    if (enumerated == XR_SUCCESS && count > 0) {
        extensions.resize(count);
        for (auto& entry : extensions) {
            entry.type = XR_TYPE_EXTENSION_PROPERTIES;
            entry.next = nullptr;
        }
        enumerated = enumerate(nullptr, count, &count, extensions.data());
    }

    std::string list;
    if (enumerated == XR_SUCCESS) {
        for (uint32_t i = 0; i < count && i < extensions.size(); ++i) {
            // O runtime garante o terminador, mas um nome sem NUL só truncaria — nunca leria além.
            const std::string name(extensions[i].extensionName,
                                   strnlen_s(extensions[i].extensionName, XR_MAX_EXTENSION_NAME_SIZE));
            if (i > 0) list += ',';
            list += '"' + jsonEscape(name) + '"';
        }
    }
    destroyInstance(instance);
    FreeLibrary(loader);

    if (enumerated != XR_SUCCESS) {
        char reason[96];
        std::snprintf(reason, sizeof reason, "xrEnumerateInstanceExtensionProperties falhou (XrResult %d)",
                      enumerated);
        return fail(reason, manifest);
    }
    emit("{\"ok\":true,\"reason\":null,\"runtimeManifest\":\"" + jsonEscape(manifest) +
         "\",\"extensions\":[" + list + "]}");
    return 0;
}

#else

// Fora do Windows este arquivo só existe para o teste de sintaxe (`tools/openxr-probe-syntax.mjs`),
// que compila o texto acima com um <windows.h> mínimo: assim um erro de digitação aparece no CI em
// Linux, e não na máquina do usuário.
#include <cstdio>
int main() {
    std::puts("{\"ok\":false,\"reason\":\"probe is a Windows program\",\"extensions\":[]}");
    return 1;
}

#endif
