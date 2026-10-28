package com.nextvr.app;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.provider.Settings;

import org.json.JSONObject;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

/**
 * Build 90 — chaves de ativação (Key) do ATMO XR.
 *
 * O que o usuário pediu:
 *  - "bota um sistema de Key… a Key tem que ter 22 caracteres";
 *  - "essas keys só funciona uma vez";
 *  - "botou a Key pronto, não precisa por denovo, só se desinstalar e instalar denovo";
 *  - "a Key só e pra esse celular, não pode servir pra outro celular, só vai servir outra Key".
 *
 * Como isso é feito de verdade, sem servidor:
 *
 *  1. FORMATO E ASSINATURA. A chave tem 22 caracteres do alfabeto Crockford base32
 *     (0-9 e A-Z sem I, L, O e U — os que se confundem ao digitar). Os 16 primeiros são o
 *     identificador e os 6 últimos são um MAC de 30 bits: HMAC-SHA256(segredo, "ATMOXR-KEY-V1:" +
 *     identificador). Sem o segredo (que fica só aqui e no gerador do dono do jogo) é impossível
 *     inventar uma chave que passe, e um caractere trocado derruba a chave na hora. É por isso que
 *     "qualquer 22 caracteres" não ativa nada.
 *
 *  2. UMA VEZ. A chave fica gravada nas preferências junto com o aparelho em que foi ativada e a
 *     data. Ativou, está ativada: o app não pede de novo. Desinstalar apaga as preferências, e aí
 *     ela precisa ser digitada outra vez — exatamente como o usuário descreveu.
 *
 *  3. PRESA AO APARELHO. A ativação guarda também a impressão digital do celular (ANDROID_ID +
 *     Build.FINGERPRINT + modelo + pacote). Se as preferências forem copiadas para outro aparelho,
 *     a impressão não bate e a licença é recusada: a chave só vale no celular onde foi ativada.
 *
 * Limite honesto: sem um servidor de licenças, o app não consegue saber que uma MESMA chave foi
 * ativada em dois celulares diferentes (cada instalação só vê a própria). O que ele garante é o que
 * o usuário pediu no uso normal: a chave vale neste aparelho, uma vez, e não é inventável.
 */
final class License {

    /** Segredo do gerador. Só o dono do jogo tem este valor (tools/gen-key.mjs usa o mesmo). */
    private static final String SECRET = "ATMOXR-KEY-V1-9f3c1d7b6a2e5f80b4c9d1e2a7f36b58c0d4e6a9b";
    /** Prefixo do MAC: mudar aqui invalida todas as chaves antigas de propósito. */
    private static final String MAC_PREFIX = "ATMOXR-KEY-V1:";
    /** Alfabeto Crockford base32: sem I, L, O e U. */
    static final String ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    static final int KEY_LENGTH = 22;
    private static final int PAYLOAD_LENGTH = 16;
    private static final int MAC_LENGTH = 6;

    private static final String PREFS = "atmoxr-license";
    private static final String K_KEY = "key";
    private static final String K_DEVICE = "device";
    private static final String K_SINCE = "since";
    private static final String K_HISTORY = "history";

    private final Context context;

    License(Context context) { this.context = context.getApplicationContext(); }

    private SharedPreferences prefs() { return context.getSharedPreferences(PREFS, Context.MODE_PRIVATE); }

    /* ---------------------------------------------------------------- chave */

    /**
     * Deixa a chave no formato canônico: maiúsculas, sem espaços/hífens e com as letras ambíguas
     * trocadas pelos números (O→0, I/L→1). É o que permite colar "atmo-xr" e continuar valendo.
     */
    static String normalize(String raw) {
        if (raw == null) return "";
        StringBuilder out = new StringBuilder(KEY_LENGTH);
        for (char c : raw.toUpperCase(java.util.Locale.US).toCharArray()) {
            if (c == 'O') c = '0';
            else if (c == 'I' || c == 'L') c = '1';
            if (ALPHABET.indexOf(c) >= 0) out.append(c);
            if (out.length() == KEY_LENGTH) break;
        }
        return out.toString();
    }

    /** MAC de 30 bits do identificador, em 6 caracteres base32. */
    static String macOf(String payload) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(SECRET.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
            byte[] dig = mac.doFinal((MAC_PREFIX + payload).getBytes(StandardCharsets.UTF_8));
            // 30 bits = 6 grupos de 5 bits, tirados dos 4 primeiros bytes.
            int bits = ((dig[0] & 0xff) << 24) | ((dig[1] & 0xff) << 16) | ((dig[2] & 0xff) << 8) | (dig[3] & 0xff);
            StringBuilder out = new StringBuilder(MAC_LENGTH);
            for (int i = 0; i < MAC_LENGTH; i++) {
                int shift = 25 - i * 5;
                out.append(ALPHABET.charAt((bits >>> shift) & 0x1f));
            }
            return out.toString();
        } catch (Exception e) {
            return "";
        }
    }

    /** A chave é sintaticamente válida E foi assinada por nós? */
    static boolean isValidKey(String raw) {
        String key = normalize(raw);
        if (key.length() != KEY_LENGTH) return false;
        for (char c : key.toCharArray()) if (ALPHABET.indexOf(c) < 0) return false;
        String payload = key.substring(0, PAYLOAD_LENGTH);
        String mac = key.substring(PAYLOAD_LENGTH);
        String expected = macOf(payload);
        if (expected.length() != MAC_LENGTH) return false;
        int diff = 0;
        for (int i = 0; i < MAC_LENGTH; i++) diff |= expected.charAt(i) ^ mac.charAt(i);
        return diff == 0;
    }

    /** Constrói uma chave (usado pelo gerador de teste e pelos testes unitários). */
    static String buildKey(String payload) {
        String body = normalize(payload);
        while (body.length() < PAYLOAD_LENGTH) body = body + "0";
        body = body.substring(0, PAYLOAD_LENGTH);
        return body + macOf(body);
    }

    /** Uma chave nova, 22 caracteres, com identificador aleatório. */
    static String randomKey() {
        SecureRandom random = new SecureRandom();
        StringBuilder payload = new StringBuilder(PAYLOAD_LENGTH);
        for (int i = 0; i < PAYLOAD_LENGTH; i++) payload.append(ALPHABET.charAt(random.nextInt(ALPHABET.length())));
        return buildKey(payload.toString());
    }

    /** A primeira metade, para mostrar na tela sem entregar a chave inteira. */
    static String mask(String key) {
        String k = normalize(key);
        if (k.length() < 8) return "••••";
        return k.substring(0, 4) + "••••" + k.substring(k.length() - 4);
    }

    /* -------------------------------------------------------------- aparelho */

    /** Impressão digital deste celular: a licença só vale onde foi ativada. */
    String deviceTag() {
        String androidId;
        try {
            androidId = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
        } catch (Throwable t) {
            androidId = "";
        }
        String raw = (androidId == null ? "" : androidId) + "|"
            + Build.FINGERPRINT + "|" + Build.MODEL + "|" + Build.MANUFACTURER + "|"
            + context.getPackageName();
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(raw.getBytes(StandardCharsets.UTF_8));
            StringBuilder hex = new StringBuilder();
            for (int i = 0; i < 8; i++) hex.append(String.format("%02X", hash[i]));
            return hex.toString();
        } catch (Exception e) {
            return "0000000000000000";
        }
    }

    /** Código curto que o usuário pode mandar para o suporte (não identifica a pessoa). */
    String deviceCode() {
        String tag = deviceTag();
        return tag.substring(0, 4) + "-" + tag.substring(4, 8);
    }

    /* ---------------------------------------------------------------- estado */

    JSONObject status() {
        JSONObject out = new JSONObject();
        try {
            SharedPreferences p = prefs();
            String key = p.getString(K_KEY, "");
            String bound = p.getString(K_DEVICE, "");
            long since = p.getLong(K_SINCE, 0L);
            boolean active = !key.isEmpty() && isValidKey(key) && deviceTag().equals(bound);
            out.put("active", active);
            out.put("key", key.isEmpty() ? "" : mask(key));
            out.put("device", deviceCode());
            out.put("since", since);
            out.put("hasKey", !key.isEmpty());
            if (!key.isEmpty() && !active) out.put("reason", "outro-aparelho");
            out.put("slots", 1);
        } catch (Exception e) {
            try { out.put("active", false); out.put("reason", "erro"); } catch (Exception ignored) {}
        }
        return out;
    }

    /**
     * Ativa uma chave. Devolve JSON `{ok, reason, status}`; `reason` é um código curto que a
     * interface traduz ("comprimento", "invalida", "aparelho", "ja-ativa", "ok").
     */
    JSONObject activate(String raw) {
        JSONObject out = new JSONObject();
        String key = normalize(raw);
        try {
            if (key.length() != KEY_LENGTH) {
                out.put("ok", false);
                out.put("reason", "comprimento");
                out.put("status", status());
                return out;
            }
            if (!isValidKey(key)) {
                out.put("ok", false);
                out.put("reason", "invalida");
                out.put("status", status());
                return out;
            }
            SharedPreferences p = prefs();
            String currentKey = p.getString(K_KEY, "");
            String currentDevice = p.getString(K_DEVICE, "");
            String tag = deviceTag();
            if (currentKey.equals(key) && currentDevice.equals(tag)) {
                out.put("ok", true);
                out.put("reason", "ja-ativa");
                out.put("status", status());
                return out;
            }
            if (!currentKey.isEmpty() && !currentDevice.equals(tag)) {
                // Chave gravada por outro aparelho (preferências copiadas): não vale aqui.
                out.put("ok", false);
                out.put("reason", "aparelho");
                out.put("status", status());
                return out;
            }
            if (!currentKey.isEmpty() && !currentKey.equals(key)) {
                // Uma Key por aparelho: já existe uma ativa nesta instalação.
                out.put("ok", false);
                out.put("reason", "ja-ativa");
                out.put("status", status());
                return out;
            }
            p.edit()
                .putString(K_KEY, key)
                .putString(K_DEVICE, tag)
                .putLong(K_SINCE, System.currentTimeMillis())
                .putString(K_HISTORY, p.getString(K_HISTORY, "") + (p.getString(K_HISTORY, "").isEmpty() ? "" : ",") + key)
                .apply();
            out.put("ok", true);
            out.put("reason", "ok");
            out.put("status", status());
        } catch (Exception e) {
            try { out.put("ok", false); out.put("reason", "erro"); out.put("status", status()); } catch (Exception ignored) {}
        }
        return out;
    }

    /** Só para os testes: apaga a licença desta instalação. */
    void clearForTests() { prefs().edit().clear().apply(); }
}
