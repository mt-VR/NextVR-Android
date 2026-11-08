package com.xfesports.xfc;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Casca do XFC: abre o jogo (que mora em assets/game) em um WebView.
 *
 * Os arquivos são servidos por um interceptador com a origem virtual
 * https://xfc.local/ — módulos ES exigem uma origem real, então servir por
 * file:// não funciona.
 */
public class MainActivity extends Activity {

    private static final String ORIGIN = "https://xfc.local/";
    private static final String ASSET_ROOT = "game";

    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            getWindow().getAttributes().layoutInDisplayCutoutMode =
                    WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
        }

        webView = new WebView(this);
        webView.setBackgroundColor(Color.BLACK);
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setMediaPlaybackRequiresUserGesture(true);

        webView.setWebViewClient(new AssetClient(getAssets()));
        setContentView(webView);
        hideSystemBars();
        webView.loadUrl(ORIGIN + "index.html");
    }

    private void hideSystemBars() {
        View decor = getWindow().getDecorView();
        decor.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            hideSystemBars();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webView != null) {
            webView.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) {
            webView.onResume();
        }
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        // O botão "voltar" do celular vira o Esc do XFC: volta uma tela do
        // jogo; na intro ou no menu principal, fecha o app.
        if (keyCode == KeyEvent.KEYCODE_BACK && webView != null) {
            webView.evaluateJavascript(
                    "(function(){window.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));"
                            + "return document.body.dataset.screen||'';})()",
                    value -> {
                        if (value == null || value.contains("menu") || value.contains("intro")) {
                            finish();
                        }
                    });
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    /** Serve os arquivos do jogo (assets/game) sob a origem virtual do XFC. */
    private static final class AssetClient extends WebViewClient {

        private final AssetManager assets;

        AssetClient(AssetManager assets) {
            this.assets = assets;
        }

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            String url = request.getUrl().toString();
            if (!url.startsWith(ORIGIN)) {
                return null;
            }
            String path = url.substring(ORIGIN.length());
            int query = path.indexOf('?');
            if (query >= 0) {
                path = path.substring(0, query);
            }
            if (path.isEmpty() || path.endsWith("/")) {
                path = path + "index.html";
            }
            String assetPath = ASSET_ROOT + "/" + path;
            try {
                InputStream stream = assets.open(assetPath);
                Map<String, String> headers = new HashMap<>();
                headers.put("Cache-Control", "no-store");
                return new WebResourceResponse(mimeTypeOf(path), "utf-8", stream, headers);
            } catch (IOException error) {
                return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found",
                        new HashMap<String, String>(), null);
            }
        }

        private static String mimeTypeOf(String path) {
            if (path.endsWith(".html")) return "text/html";
            if (path.endsWith(".js")) return "text/javascript";
            if (path.endsWith(".css")) return "text/css";
            if (path.endsWith(".json")) return "application/json";
            if (path.endsWith(".svg")) return "image/svg+xml";
            if (path.endsWith(".png")) return "image/png";
            if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
            if (path.endsWith(".webp")) return "image/webp";
            if (path.endsWith(".woff2")) return "font/woff2";
            if (path.endsWith(".ico")) return "image/x-icon";
            if (path.endsWith(".md")) return "text/markdown";
            return "application/octet-stream";
        }
    }
}
