#!/usr/bin/env node
/**
 * Compila `steamvr-driver/tools/openxr_probe.cpp` com um `<windows.h>` mínimo.
 *
 * Não é o build do Windows: é o que dá para fazer em Linux — e pega a classe de erro que aparece
 * justamente quando ninguém tem MSVC à mão (nome trocado, chave faltando, `std::` esquecido, uma
 * variável usada antes de existir). O que NÃO está coberto: as regras do MSVC, os tipos reais do
 * `windows.h`, nem o ABI do OpenXR em tempo de execução. Isso só na máquina do usuário.
 *
 *   node tools/openxr-probe-syntax.mjs          # sai 0 quando compila
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, '..', 'steamvr-driver', 'tools', 'openxr_probe.cpp');
const work = mkdtempSync(join(tmpdir(), 'nextvr-probe-'));

/**
 * O mínimo que o probe usa de `windows.h`: só o que ele realmente chama. Se o probe passar a usar
 * outra coisa, este arquivo deixa de compilar — e é assim que a falta de um stub aparece.
 */
const WINDOWS_STUB = `
#pragma once
#include <cstdint>
#include <cstddef>
typedef int32_t BOOL;
typedef unsigned long DWORD;
typedef long LONG;
typedef unsigned int UINT;
typedef const wchar_t* LPCWSTR;
typedef void* HANDLE;
typedef HANDLE HKEY;
typedef void* HMODULE;
typedef unsigned char BYTE;
typedef BYTE* LPBYTE;
typedef wchar_t WCHAR;
struct HINSTANCE__ { int unused; };
#define WINAPI
#define ERROR_SUCCESS 0L
#define REG_SZ 1
#define KEY_READ 0x20019
#define CP_UTF8 65001
#define LOAD_LIBRARY_SEARCH_DEFAULT_DIRS 0x00001000
enum { HKEY_CURRENT_USER_ = 1 };
static HKEY HKEY_CURRENT_USER = (HKEY)1;
static HKEY HKEY_LOCAL_MACHINE = (HKEY)2;
LONG RegOpenKeyExW(HKEY, LPCWSTR, DWORD, DWORD, HKEY*);
LONG RegQueryValueExW(HKEY, LPCWSTR, DWORD*, DWORD*, LPBYTE, DWORD*);
LONG RegCloseKey(HKEY);
int WideCharToMultiByte(UINT, DWORD, LPCWSTR, int, char*, int, const char*, BOOL*);
HMODULE LoadLibraryExW(LPCWSTR, HANDLE, DWORD);
HMODULE LoadLibraryW(LPCWSTR);
void* GetProcAddress(HMODULE, const char*);
BOOL FreeLibrary(HMODULE);
size_t strnlen_s(const char*, size_t);
`;

let failed = false;
try {
  writeFileSync(join(work, 'windows.h'), WINDOWS_STUB);
  const out = join(work, 'probe' + (process.platform === 'win32' ? '.exe' : '.bin'));
  const args = [
    // `_WIN32` de propósito: sem ele o probe compila o ramo Linux (que é só um stub) e o teste não
    // veria uma linha do código que vai rodar no PC.
    '-std=c++17', '-fsyntax-only', '-D_WIN32', '-Wall', '-Wextra', '-Wno-unused-parameter',
    '-I', work, '-x', 'c++', source,
  ];
  execFileSync(process.env.CXX || 'g++', args, { stdio: 'pipe' });
  console.log(`openxr probe: sintaxe OK (${source})`);
} catch (error) {
  failed = true;
  const detail = [error.stdout, error.stderr].filter(Boolean).map(b => b.toString()).join('\n');
  console.error('openxr probe: a sintaxe não fecha\n' + (detail || error.message));
} finally {
  rmSync(work, { recursive: true, force: true });
}
process.exit(failed ? 1 : 0);
