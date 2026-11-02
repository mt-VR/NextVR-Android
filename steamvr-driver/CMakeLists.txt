# NextVR SteamVR Driver — build (Windows x64).
#
#   cmake -S . -B build -A x64
#   cmake --build build --config Release
#
# O resultado é `build/Release/nextvr.dll`, que vira `bin/win64/driver_nextvr.dll` na instalação do
# driver (ver README). O mesmo CMakeLists também compila, em qualquer sistema, o autoteste do núcleo
# (`nextvr-core-selftest`): é o que o CI roda para verificar a matemática e a tabela de offsets sem
# precisar de Windows.
cmake_minimum_required(VERSION 3.20)
project(nextvr_pclink_driver LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_compile_options($<$<CXX_COMPILER_ID:MSVC>:/W4> $<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-Wall -Wextra>)

# ---- núcleo portátil (compila e roda em qualquer sistema) -------------------------------------
add_library(nextvr_core STATIC
    core/hand_skeleton.cpp
    src/shared_state.cpp
)
target_include_directories(nextvr_core PUBLIC core src third_party/openvr)

add_executable(nextvr-core-selftest core/selftest.cpp)
target_link_libraries(nextvr-core-selftest PRIVATE nextvr_core)

# Leitor do bloco de estado: depura no PC e prova no CI que o escritor do Node e o leitor do C++
# concordam (o teste sobe o Bridge, deixa publicar e compara com o que foi enviado).
add_executable(nextvr-state-dump core/state_dump.cpp src/shared_state.cpp)
target_include_directories(nextvr-state-dump PRIVATE core src third_party/openvr)

# ---- driver (só Windows) ----------------------------------------------------------------------
if(WIN32)
    add_library(nextvr SHARED
        src/driver.cpp
        src/hmd_device.cpp
        src/hand_device.cpp
        src/shared_state.cpp
        src/win/frame_sink_win.cpp
    )
    target_include_directories(nextvr PRIVATE core src third_party/openvr)
    target_link_libraries(nextvr PRIVATE d3d11 mfplat mfuuid ws2_32 ole32)
    target_compile_definitions(nextvr PRIVATE UNICODE _UNICODE NOMINMAX WIN32_LEAN_AND_MEAN)
    set_target_properties(nextvr PROPERTIES PREFIX "" OUTPUT_NAME "driver_nextvr")
else()
    # Fora do Windows: os fontes do driver também são checados (sintaxe) pelo CI, com um sink nulo
    # no lugar do D3D11. Isso pega erro de API do OpenVR sem precisar de uma máquina Windows.
    add_library(nextvr_syntax_check STATIC
        src/driver.cpp
        src/hmd_device.cpp
        src/hand_device.cpp
        src/frame_sink_null.cpp
    )
    target_include_directories(nextvr_syntax_check PRIVATE core src third_party/openvr)
endif()

# ---- instalação na pasta de drivers do SteamVR ------------------------------------------------
if(WIN32)
    set(STEAMVR_DRIVER_DIR "" CACHE PATH "Pasta do SteamVR drivers (ex.: C:/Program Files (x86)/Steam/steamapps/common/SteamVR/drivers)")
    if(STEAMVR_DRIVER_DIR)
        install(TARGETS nextvr RUNTIME DESTINATION "${STEAMVR_DRIVER_DIR}/nextvr/bin/win64")
        install(FILES driver.vrdrivermanifest DESTINATION "${STEAMVR_DRIVER_DIR}/nextvr")
        install(DIRECTORY resources/ DESTINATION "${STEAMVR_DRIVER_DIR}/nextvr/resources")
    endif()
endif()
