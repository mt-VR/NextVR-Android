// Chaves de ativação do ATMO XR (Build 90) — lado web.
//
// A verificação de verdade é nativa (License.java): o segredo do MAC mora só lá, então o JavaScript
// não consegue "inventar" uma chave válida nem ser enganado por uma. Aqui ficam só três coisas:
//   * o formato (22 caracteres, alfabeto Crockford) para dar resposta imediata enquanto se digita;
//   * a chamada para ativar;
//   * o estado em cache para o menu desenhar a tela.
//
// Regras que o usuário pediu e que são aplicadas pelo lado nativo:
//   - 22 caracteres;
//   - funciona uma vez (fica gravada; não pede de novo);
//   - presa a este celular (a ativação guarda a impressão digital do aparelho);
//   - só volta a ser pedida se desinstalar e instalar de novo.

export const KEY_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
export const KEY_LENGTH = 22;

/** Mesma normalização do License.java: maiúsculas, sem espaços e com O→0, I/L→1. */
export function normalizeKey(raw) {
  let out = '';
  for (let c of String(raw || '').toUpperCase()) {
    if (c === 'O') c = '0';
    else if (c === 'I' || c === 'L') c = '1';
    if (KEY_ALPHABET.includes(c)) out += c;
    if (out.length === KEY_LENGTH) break;
  }
  return out;
}

/** Só o formato: comprimento e alfabeto. A assinatura é conferida no lado nativo. */
export function keyFormatProblem(raw) {
  const clean = String(raw || '').replace(/[\s-]/g, '');
  if (!clean) return 'vazia';
  const key = normalizeKey(clean);
  if (key.length < KEY_LENGTH) return 'curta';
  for (const c of key) if (!KEY_ALPHABET.includes(c)) return 'caractere';
  return null;
}

/** Mostra a chave em 4 grupos de 4 + 1 de 6, só para caber na tela; o valor continua o mesmo. */
export const formatKey = raw => normalizeKey(raw).replace(/(.{4})/g, '$1 ').trim();

const EMPTY = Object.freeze({ active: false, key: '', device: '', since: 0, hasKey: false });

let cached = { ...EMPTY };

const parse = raw => {
  if (!raw) return null;
  try { return typeof raw === 'string' ? JSON.parse(raw) : raw; } catch { return null; }
};

/** Estado da licença (do lado nativo quando existe; senão, "não ativada"). */
export function licenseStatus(refresh = false) {
  if (!refresh && cached !== EMPTY && cached.loaded) return cached;
  const parsed = parse(window.NativeXR?.licenseStatus?.());
  cached = { ...EMPTY, ...(parsed || {}), loaded: true };
  return cached;
}

/** Ativa uma Key. Devolve { ok, reason, status }. */
export function activateKey(raw) {
  const key = normalizeKey(raw);
  const problem = keyFormatProblem(key);
  if (problem) return { ok: false, reason: problem, status: licenseStatus(true) };
  const parsed = parse(window.NativeXR?.activateKey?.(key));
  if (!parsed) return { ok: false, reason: 'indisponivel', status: licenseStatus(true) };
  cached = { ...EMPTY, ...(parsed.status || {}), loaded: true };
  return { ok: !!parsed.ok, reason: parsed.reason || '', status: cached };
}

/** Código curto deste aparelho (para suporte). */
export function deviceCode() {
  try {
    return String(window.NativeXR?.deviceCode?.() || licenseStatus().device || '—');
  } catch {
    return '—';
  }
}

/** Mensagens em português para cada motivo devolvido pelo lado nativo. */
export const LICENSE_MESSAGES = Object.freeze({
  ok: 'Key ativada! Este celular está liberado e não precisa digitar de novo.',
  'ja-ativa': 'Esta Key já está ativa neste aparelho.',
  comprimento: 'A Key precisa ter exatamente 22 caracteres.',
  curta: 'A Key precisa ter exatamente 22 caracteres.',
  vazia: 'Digite a sua Key de 22 caracteres.',
  caractere: 'A Key só usa letras e números (sem I, L, O e U).',
  invalida: 'Key inválida: confira os 22 caracteres (ela é única e não pode ser inventada).',
  aparelho: 'Esta Key foi ativada em outro celular. Cada Key vale em um aparelho só.',
  indisponivel: 'A ativação não está disponível neste aparelho.',
  erro: 'Não foi possível ativar agora. Tente outra vez.',
  'outro-aparelho': 'A Key gravada é de outro celular.',
});

export const licenseMessage = reason => LICENSE_MESSAGES[reason] || 'Não foi possível ativar esta Key.';
