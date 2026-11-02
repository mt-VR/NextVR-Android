#include "shared_state.h"

#include <cstdlib>
#include <cstring>

#ifdef _WIN32
#include <windows.h>
#else
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <unistd.h>
#endif

namespace nextvr {
namespace pclink {
namespace {

bool FileExists(const std::string& path) {
#ifdef _WIN32
    const DWORD attributes = GetFileAttributesA(path.c_str());
    return attributes != INVALID_FILE_ATTRIBUTES && !(attributes & FILE_ATTRIBUTE_DIRECTORY);
#else
    struct stat info {};
    return stat(path.c_str(), &info) == 0 && S_ISREG(info.st_mode);
#endif
}

}  // namespace

std::string SharedStatePath() {
    if (const char* overridePath = std::getenv("NEXTVR_PCLINK_STATE"); overridePath && *overridePath) {
        return overridePath;
    }
#ifdef _WIN32
    const char* localAppData = std::getenv("LOCALAPPDATA");
    std::string base = localAppData && *localAppData ? localAppData : "C:\\Windows\\Temp";
    return base + "\\NextVR\\pclink-state.bin";
#else
    return "/tmp/nextvr-pclink-state.bin";
#endif
}

SharedStateReader::~SharedStateReader() { Close(); }

bool SharedStateReader::Open() {
    Close();
    const std::string path = SharedStatePath();
    if (!FileExists(path)) return false;

#ifdef _WIN32
    // O arquivo é do Bridge: abrimos só para leitura e mapeamos. Sem escrita, um driver com bug não
    // corrompe o estado que o Bridge publica.
    HANDLE file = CreateFileA(path.c_str(), GENERIC_READ, FILE_SHARE_READ | FILE_SHARE_WRITE, nullptr,
                              OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, nullptr);
    if (file == INVALID_HANDLE_VALUE) return false;
    HANDLE mapping = CreateFileMappingA(file, nullptr, PAGE_READONLY, 0, sizeof(SharedState), nullptr);
    if (!mapping) {
        CloseHandle(file);
        return false;
    }
    void* view = MapViewOfFile(mapping, FILE_MAP_READ, 0, 0, sizeof(SharedState));
    if (!view) {
        CloseHandle(mapping);
        CloseHandle(file);
        return false;
    }
    file_ = file;
    mapping_ = mapping;
    data_ = static_cast<const SharedState*>(view);
#else
    name_ = path;
    const int fd = open(name_.c_str(), O_RDONLY);
    if (fd < 0) return false;
    void* view = mmap(nullptr, sizeof(SharedState), PROT_READ, MAP_SHARED, fd, 0);
    close(fd);
    if (view == MAP_FAILED) return false;
    data_ = static_cast<const SharedState*>(view);
#endif

    const SharedState& state = *data_;
    // Um arquivo que o Bridge criou mas ainda não preencheu não é "aberto".
    if (state.magic != kStateMagic || state.version != kStateVersion) {
        Close();
        return false;
    }
    lastSequence_ = state.sequence;
    lastChangeNs_ = 0;
    return true;
}

void SharedStateReader::Close() {
    if (!data_) return;
#ifdef _WIN32
    UnmapViewOfFile(data_);
    if (mapping_) CloseHandle(static_cast<HANDLE>(mapping_));
    if (file_) CloseHandle(static_cast<HANDLE>(file_));
    mapping_ = nullptr;
    file_ = nullptr;
#else
    munmap(const_cast<SharedState*>(data_), sizeof(SharedState));
#endif
    data_ = nullptr;
}

Frame SharedStateReader::Read(uint64_t nowNs, uint64_t staleMs) {
    Frame frame;
    if (!data_) return frame;

    const SharedState& state = *data_;
    if (state.magic != kStateMagic || state.version != kStateVersion) return frame;

    if (state.sequence != lastSequence_) {
        lastSequence_ = state.sequence;
        lastChangeNs_ = nowNs;
    } else if (lastChangeNs_ != 0 && nowNs > lastChangeNs_) {
        frame.stale = (nowNs - lastChangeNs_) > staleMs * 1'000'000ull;
    }

    frame.valid = true;
    frame.session = (state.flags & kFlagSession) != 0;
    frame.headValid = (state.flags & kFlagHead) != 0;
    frame.leftHand = (state.flags & kFlagLeftHand) != 0;
    frame.rightHand = (state.flags & kFlagRightHand) != 0;
    frame.sequence = state.sequence;
    frame.captureNs = state.captureNs;
    frame.headPos = {state.headPos[0], state.headPos[1], state.headPos[2]};
    frame.headRot = math::normalize({state.headQuat[0], state.headQuat[1], state.headQuat[2], state.headQuat[3]});
    frame.ipd = state.ipd;
    frame.userHeight = state.userHeight;
    frame.worldScale = state.worldScale;
    frame.displayFreq = state.displayFreq;
    for (int i = 0; i < 4; ++i) frame.projection[i] = state.projection[i];
    frame.width = state.width;
    frame.height = state.height;
    std::memcpy(frame.hands, state.hands, sizeof(frame.hands));
    return frame;
}

}  // namespace pclink
}  // namespace nextvr
