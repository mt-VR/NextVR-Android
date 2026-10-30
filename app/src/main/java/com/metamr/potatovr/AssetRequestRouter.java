package com.metamr.potatovr;

import android.content.res.AssetManager;
import android.net.Uri;
import android.webkit.WebResourceResponse;
import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * Roteia tanto a origem segura local ({@code https://appassets.androidplatform.net/assets/...})
 * quanto chamadas de CDN do Three.js r128 e MediaPipe Hands (incluindo o iframe {@code srcdoc}
 * do ShootTheDie) diretamente para os arquivos empacotados em {@code assets/}.
 */
public final class AssetRequestRouter {
    public static final String APP_HOST = "appassets.androidplatform.net";
    public static final String ENTRY_URL = "https://" + APP_HOST + "/assets/index.html";

    private static final String PREFIX_ASSETS = "/assets/";
    private static final String PREFIX_MP_HANDS = "/npm/@mediapipe/hands/";
    private static final String PREFIX_MP_CAMERA = "/npm/@mediapipe/camera_utils/";

    private AssetRequestRouter() {}

    /**
     * Resolve uma URL HTTP(S) para um caminho relativo dentro de {@code assets/},
     * ou retorna {@code null} quando a requisição deve seguir pela rede normal (ex.: Google/YouTube).
     */
    public static String resolveAssetPath(String host, String rawPath) {
        if (host == null || rawPath == null) {
            return null;
        }
        String cleanHost = host.toLowerCase(Locale.ROOT);
        String path = stripQueryAndFragment(rawPath);

        String candidate = null;
        if (APP_HOST.equals(cleanHost)) {
            if ("/".equals(path) || "/assets".equals(path) || "/assets/".equals(path)) {
                candidate = "index.html";
            } else if (path.startsWith(PREFIX_ASSETS)) {
                candidate = path.substring(PREFIX_ASSETS.length());
            }
        } else if ("cdnjs.cloudflare.com".equals(cleanHost)) {
            if ("/ajax/libs/three.js/r128/three.min.js".equals(path)) {
                candidate = "vendor/three/three.min.js";
            }
        } else if ("cdn.jsdelivr.net".equals(cleanHost)) {
            if ("/npm/three@0.128.0/examples/js/renderers/CSS3DRenderer.js".equals(path)) {
                candidate = "vendor/three/CSS3DRenderer.js";
            } else if ("/npm/three@0.128.0/build/three.min.js".equals(path)) {
                candidate = "vendor/three/three.min.js";
            } else if (path.startsWith(PREFIX_MP_HANDS)) {
                candidate = "vendor/mediapipe/hands/" + path.substring(PREFIX_MP_HANDS.length());
            } else if (path.startsWith(PREFIX_MP_CAMERA)) {
                candidate = "vendor/mediapipe/camera_utils/" + path.substring(PREFIX_MP_CAMERA.length());
            }
        }

        if (candidate == null || candidate.isEmpty()) {
            return null;
        }
        while (candidate.startsWith("/")) {
            candidate = candidate.substring(1);
        }
        if (candidate.isEmpty() || candidate.contains("..") || candidate.contains("\\")) {
            return null;
        }
        return candidate;
    }

    public static String mimeTypeFor(String assetPath) {
        if (assetPath == null) {
            return "application/octet-stream";
        }
        String lower = assetPath.toLowerCase(Locale.ROOT);
        if (lower.endsWith(".html") || lower.endsWith(".htm")) return "text/html";
        if (lower.endsWith(".js") || lower.endsWith(".mjs")) return "application/javascript";
        if (lower.endsWith(".css")) return "text/css";
        if (lower.endsWith(".json")) return "application/json";
        if (lower.endsWith(".wasm")) return "application/wasm";
        if (lower.endsWith(".svg")) return "image/svg+xml";
        if (lower.endsWith(".png")) return "image/png";
        if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
        if (lower.endsWith(".webp")) return "image/webp";
        if (lower.endsWith(".wav")) return "audio/wav";
        if (lower.endsWith(".mp3")) return "audio/mpeg";
        return "application/octet-stream";
    }

    public static String encodingForMime(String mimeType) {
        if (mimeType == null) return null;
        if (mimeType.startsWith("text/") || "application/javascript".equals(mimeType) || "application/json".equals(mimeType)) {
            return "UTF-8";
        }
        return null;
    }

    public static WebResourceResponse intercept(AssetManager assets, Uri uri) {
        if (assets == null || uri == null) {
            return null;
        }
        String scheme = uri.getScheme();
        if (scheme == null || (!"https".equalsIgnoreCase(scheme) && !"http".equalsIgnoreCase(scheme))) {
            return null;
        }
        String assetPath = resolveAssetPath(uri.getHost(), uri.getPath());
        if (assetPath == null) {
            return null;
        }
        try {
            InputStream stream;
            try {
                stream = assets.open(assetPath, AssetManager.ACCESS_STREAMING);
            } catch (FileNotFoundException emptyFallback) {
                if (assetPath.endsWith("hands_solution_simd_wasm_bin.data")) {
                    stream = new ByteArrayInputStream(new byte[0]);
                } else {
                    return null;
                }
            }
            String mime = mimeTypeFor(assetPath);
            String encoding = encodingForMime(mime);
            Map<String, String> headers = new HashMap<>();
            headers.put("Access-Control-Allow-Origin", "*");
            headers.put("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
            headers.put("Cache-Control", "public, max-age=31536000, immutable");
            return new WebResourceResponse(mime, encoding, 200, "OK", headers, stream);
        } catch (IOException ignored) {
            return null;
        }
    }

    private static String stripQueryAndFragment(String raw) {
        int q = raw.indexOf('?');
        int h = raw.indexOf('#');
        int cut = -1;
        if (q >= 0 && h >= 0) cut = Math.min(q, h);
        else if (q >= 0) cut = q;
        else if (h >= 0) cut = h;
        return cut >= 0 ? raw.substring(0, cut) : raw;
    }
}
