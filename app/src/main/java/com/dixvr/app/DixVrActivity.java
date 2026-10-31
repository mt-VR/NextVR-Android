package com.dixvr.app;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.JavascriptInterface;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import androidx.activity.OnBackPressedCallback;
import androidx.annotation.Keep;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/**
 * Host Android nativo do dixVR.
 *
 * <p>Executa o workspace AR/VR HTML5 + Three.js CSS3D + MediaPipe Hands + Fluxo Óptico + Aura Neon
 * + Multitarefa de 3 janelas em arco acima da dock em contexto seguro
 * ({@code https://appassets.androidplatform.net}), com bibliotecas empacotadas localmente para
 * funcionamento offline, permissão automática de câmera traseira e ponte nativa
 * {@code window.DixVR} / {@code window.dixVR} / {@code window.Android} para painéis simultâneos
 * Google/YouTube e abertura de apps externos.
 */
public class DixVrActivity extends AppCompatActivity {
    private static final int REQ_CAMERA = 1001;
    private static final String GOOGLE_HOME_URL = "https://www.google.com/";
    private static final String YOUTUBE_HOME_URL = "https://www.youtube.com/";

    private final Handler mainHandler = new Handler(Looper.getMainLooper());
    private FrameLayout rootLayout;
    private WebView mainWebView;
    private WebView googleWebView;
    private WebView youtubeWebView;
    private HandCursorOverlayView cursorOverlay;
    private NativeStereoMirrorView stereoMirror;

    private PanelBounds lastGoogleBounds;
    private PanelBounds lastYouTubeBounds;
    private boolean googlePanelActive;
    private boolean youtubePanelActive;

    private PermissionRequest pendingWebPermission;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode =
                WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }
        applyImmersiveFullscreen();

        rootLayout = new FrameLayout(this);
        rootLayout.setBackgroundColor(Color.BLACK);

        mainWebView = createConfiguredWebView(true);
        rootLayout.addView(
            mainWebView,
            new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        );

        stereoMirror = new NativeStereoMirrorView(this, getWindow());
        stereoMirror.setStereo(false);
        rootLayout.addView(stereoMirror, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        cursorOverlay = new HandCursorOverlayView(this);
        rootLayout.addView(
            cursorOverlay,
            new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
        );

        setContentView(rootLayout);

        NativeBridge bridge = new NativeBridge();
        mainWebView.addJavascriptInterface(bridge, "DixVR");
        mainWebView.addJavascriptInterface(bridge, "dixVR");
        mainWebView.addJavascriptInterface(bridge, "Android");

        setupBackNavigation();

        if (!hasCameraPermission()) {
            ActivityCompat.requestPermissions(
                this,
                new String[] {Manifest.permission.CAMERA},
                REQ_CAMERA
            );
        }

        mainWebView.loadUrl(AssetRequestRouter.ENTRY_URL);
    }

    @SuppressLint("SetJavaScriptEnabled")
    private WebView createConfiguredWebView(boolean isMainShell) {
        WebView webView = new WebView(this);
        webView.setBackgroundColor(isMainShell ? Color.BLACK : Color.WHITE);
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        if (!isMainShell) settings.setTextZoom(120);
        settings.setDatabaseEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);

        CookieManager cookies = CookieManager.getInstance();
        cookies.setAcceptCookie(true);
        cookies.setAcceptThirdPartyCookies(webView, true);

        if (isMainShell) {
            webView.setWebViewClient(new ShellWebViewClient());
            webView.setWebChromeClient(new ShellChromeClient());
        } else {
            settings.setBuiltInZoomControls(false);
            settings.setDisplayZoomControls(false);
            webView.setWebViewClient(new EmbeddedPanelWebViewClient());
            webView.setWebChromeClient(new WebChromeClient());
        }

        return webView;
    }

    private void setupBackNavigation() {
        getOnBackPressedDispatcher().addCallback(
            this,
            new OnBackPressedCallback(true) {
                @Override
                public void handleOnBackPressed() {
                    if (googlePanelActive && googleWebView != null && googleWebView.canGoBack()) {
                        googleWebView.goBack();
                        return;
                    }
                    if (youtubePanelActive && youtubeWebView != null && youtubeWebView.canGoBack()) {
                        youtubeWebView.goBack();
                        return;
                    }
                    if (mainWebView != null) {
                        mainWebView.evaluateJavascript(
                            "(function(){return !!(window.__dixVrBackPressed && window.__dixVrBackPressed());})()",
                            result -> {
                                if (!"true".equals(result)) {
                                    setEnabled(false);
                                    getOnBackPressedDispatcher().onBackPressed();
                                    setEnabled(true);
                                }
                            }
                        );
                    } else {
                        finish();
                    }
                }
            }
        );
    }

    private boolean hasCameraPermission() {
        return ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
            == PackageManager.PERMISSION_GRANTED;
    }

    private void grantVideoCapturePermission(PermissionRequest request) {
        String[] requested = request.getResources();
        List<String> granted = new ArrayList<>();
        if (requested != null) {
            for (String res : requested) {
                if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(res)
                    || PermissionRequest.RESOURCE_PROTECTED_MEDIA_ID.equals(res)) {
                    granted.add(res);
                }
            }
        }
        if (!granted.isEmpty()) {
            request.grant(granted.toArray(new String[0]));
        } else {
            request.deny();
        }
    }

    @Override
    public void onRequestPermissionsResult(
        int requestCode,
        @NonNull String[] permissions,
        @NonNull int[] grantResults
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == REQ_CAMERA && pendingWebPermission != null) {
            PermissionRequest req = pendingWebPermission;
            pendingWebPermission = null;
            if (hasCameraPermission()) {
                grantVideoCapturePermission(req);
            } else {
                req.deny();
            }
        }
    }

    private boolean handleExternalNavigation(String url) {
        if (url == null || url.isEmpty()) {
            return false;
        }
        if (url.startsWith("http://") || url.startsWith("https://")) {
            if (url.startsWith("https://play.google.com/store/apps/details")) {
                try {
                    Intent market = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    market.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(market);
                    return true;
                } catch (ActivityNotFoundException ignored) {
                    return false;
                }
            }
            return false;
        }

        if (url.startsWith("intent:")) {
            try {
                Intent parsed = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
                parsed.addCategory(Intent.CATEGORY_BROWSABLE);
                parsed.setComponent(null);
                parsed.setSelector(null);
                if (parsed.getPackage() != null) {
                    Intent launch = getPackageManager().getLaunchIntentForPackage(parsed.getPackage());
                    if (launch != null) {
                        launch.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(launch);
                        return true;
                    }
                }
                parsed.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(parsed);
                return true;
            } catch (Exception e) {
                return true;
            }
        }

        try {
            Intent customScheme = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            customScheme.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(customScheme);
        } catch (Exception ignored) {
            // Ignora esquemas externos sem app instalado para não quebrar a WebView.
        }
        return true;
    }

    private boolean launchInstalledOrStore(String packageName) {
        if (packageName == null || packageName.isEmpty()) {
            return false;
        }
        try {
            Intent launch = getPackageManager().getLaunchIntentForPackage(packageName);
            if (launch != null) {
                launch.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(launch);
                return true;
            }
        } catch (Exception ignored) {
        }
        try {
            Intent store = new Intent(
                Intent.ACTION_VIEW,
                Uri.parse("market://details?id=" + packageName)
            );
            store.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(store);
            return true;
        } catch (Exception ignored) {
            try {
                Intent webStore = new Intent(
                    Intent.ACTION_VIEW,
                    Uri.parse("https://play.google.com/store/apps/details?id=" + packageName)
                );
                webStore.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(webStore);
                return true;
            } catch (Exception ignoredAgain) {
                return false;
            }
        }
    }

    private WebView ensureGoogleWebView() {
        if (googleWebView == null) {
            googleWebView = createConfiguredWebView(false);
            int overlayIndex = rootLayout.indexOfChild(cursorOverlay);
            FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(1, 1, Gravity.TOP | Gravity.LEFT);
            if (overlayIndex >= 0) {
                rootLayout.addView(googleWebView, overlayIndex, params);
            } else {
                rootLayout.addView(googleWebView, params);
            }
            stereoMirror.addSource(googleWebView);
            googleWebView.loadUrl(GOOGLE_HOME_URL);
        }
        return googleWebView;
    }

    private WebView ensureYouTubeWebView() {
        if (youtubeWebView == null) {
            youtubeWebView = createConfiguredWebView(false);
            int overlayIndex = rootLayout.indexOfChild(cursorOverlay);
            FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(1, 1, Gravity.TOP | Gravity.LEFT);
            if (overlayIndex >= 0) {
                rootLayout.addView(youtubeWebView, overlayIndex, params);
            } else {
                rootLayout.addView(youtubeWebView, params);
            }
            stereoMirror.addSource(youtubeWebView);
            youtubeWebView.loadUrl(YOUTUBE_HOME_URL);
        }
        return youtubeWebView;
    }

    private PanelBounds applyPanelBounds(WebView panelView, String boundsJson) {
        if (panelView == null || mainWebView == null) {
            return null;
        }
        float density = getResources().getDisplayMetrics().density;
        PanelBounds bounds = PanelBounds.fromJson(
            boundsJson,
            mainWebView.getWidth(),
            mainWebView.getHeight(),
            density
        );
        if (!bounds.visible) {
            panelView.setVisibility(View.INVISIBLE);
            return bounds;
        }
        ViewGroup.LayoutParams rawParams = panelView.getLayoutParams();
        FrameLayout.LayoutParams lp = (rawParams instanceof FrameLayout.LayoutParams)
            ? (FrameLayout.LayoutParams) rawParams
            : new FrameLayout.LayoutParams(bounds.widthPx, bounds.heightPx, Gravity.TOP | Gravity.LEFT);
        if (lp.leftMargin != bounds.leftPx
            || lp.topMargin != bounds.topPx
            || lp.width != bounds.widthPx
            || lp.height != bounds.heightPx) {
            lp.gravity = Gravity.TOP | Gravity.LEFT;
            lp.leftMargin = bounds.leftPx;
            lp.topMargin = bounds.topPx;
            lp.width = bounds.widthPx;
            lp.height = bounds.heightPx;
            panelView.setLayoutParams(lp);
        }
        if (panelView.getVisibility() != View.VISIBLE) {
            panelView.setVisibility(View.VISIBLE);
        }
        return bounds;
    }

    private void dispatchSyntheticTap(WebView target, PanelBounds bounds, double cssLocalX, double cssLocalY) {
        if (target == null || target.getVisibility() != View.VISIBLE) {
            return;
        }
        float density = getResources().getDisplayMetrics().density;
        float x = bounds != null ? bounds.toViewLocalX(cssLocalX) : (float) (cssLocalX * density);
        float y = bounds != null ? bounds.toViewLocalY(cssLocalY) : (float) (cssLocalY * density);
        long downTime = SystemClock.uptimeMillis();
        MotionEvent down = MotionEvent.obtain(downTime, downTime, MotionEvent.ACTION_DOWN, x, y, 0);
        MotionEvent up = MotionEvent.obtain(downTime, downTime + 35L, MotionEvent.ACTION_UP, x, y, 0);
        target.dispatchTouchEvent(down);
        target.dispatchTouchEvent(up);
        down.recycle();
        up.recycle();
    }

    private void applyImmersiveFullscreen() {
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        WindowInsetsControllerCompat controller =
            WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        if (controller != null) {
            controller.setSystemBarsBehavior(
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
            );
            controller.hide(WindowInsetsCompat.Type.systemBars());
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            applyImmersiveFullscreen();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (stereoMirror != null) stereoMirror.setRunning(true);
        applyImmersiveFullscreen();
        if (mainWebView != null) {
            mainWebView.onResume();
            mainWebView.resumeTimers();
        }
        if (googleWebView != null && googlePanelActive) {
            googleWebView.onResume();
        }
        if (youtubeWebView != null && youtubePanelActive) {
            youtubeWebView.onResume();
        }
    }

    @Override
    protected void onPause() {
        if (stereoMirror != null) stereoMirror.setRunning(false);
        if (googleWebView != null) {
            googleWebView.onPause();
        }
        if (youtubeWebView != null) {
            youtubeWebView.onPause();
        }
        if (mainWebView != null) {
            mainWebView.onPause();
        }
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (stereoMirror != null) stereoMirror.release();
        if (googleWebView != null) {
            rootLayout.removeView(googleWebView);
            googleWebView.destroy();
            googleWebView = null;
        }
        if (youtubeWebView != null) {
            rootLayout.removeView(youtubeWebView);
            youtubeWebView.destroy();
            youtubeWebView = null;
        }
        if (mainWebView != null) {
            rootLayout.removeView(mainWebView);
            mainWebView.destroy();
            mainWebView = null;
        }
        super.onDestroy();
    }

    private final class ShellWebViewClient extends WebViewClient {
        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            WebResourceResponse intercepted =
                AssetRequestRouter.intercept(getAssets(), request.getUrl());
            if (intercepted != null) {
                return intercepted;
            }
            return super.shouldInterceptRequest(view, request);
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if (uri == null) {
                return false;
            }
            if (AssetRequestRouter.APP_HOST.equalsIgnoreCase(uri.getHost())) {
                return false;
            }
            return handleExternalNavigation(uri.toString());
        }
    }

    private final class EmbeddedPanelWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if (uri == null) {
                return false;
            }
            String scheme = uri.getScheme();
            if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) {
                return false;
            }
            return handleExternalNavigation(uri.toString());
        }
    }

    private final class ShellChromeClient extends WebChromeClient {
        @Override
        public void onPermissionRequest(final PermissionRequest request) {
            mainHandler.post(() -> {
                if (hasCameraPermission()) {
                    grantVideoCapturePermission(request);
                } else {
                    pendingWebPermission = request;
                    ActivityCompat.requestPermissions(
                        DixVrActivity.this,
                        new String[] {Manifest.permission.CAMERA},
                        REQ_CAMERA
                    );
                }
            });
        }
    }

    /**
     * Ponte JavaScript exposta como {@code window.DixVR}, {@code window.dixVR} e {@code window.Android}.
     * Suporta multitarefa real: Google e YouTube podem permanecer visíveis simultaneamente lado a lado.
     */
    @Keep
    public final class NativeBridge {
        @JavascriptInterface
        public void showGooglePanel(String boundsJson) {
            mainHandler.post(() -> {
                googlePanelActive = true;
                WebView view = ensureGoogleWebView();
                lastGoogleBounds = applyPanelBounds(view, boundsJson);
            });
        }

        @JavascriptInterface
        public void setStereoMode(boolean enabled) {
            mainHandler.post(() -> { if (stereoMirror != null) stereoMirror.setStereo(enabled); });
        }

        @JavascriptInterface
        public void hideGooglePanel() {
            mainHandler.post(() -> {
                googlePanelActive = false;
                if (googleWebView != null) {
                    googleWebView.setVisibility(View.GONE);
                }
                if (!youtubePanelActive && cursorOverlay != null) {
                    cursorOverlay.updateCursor(0f, 0f, 0f, false);
                }
            });
        }

        @JavascriptInterface
        public void updateGooglePanelBounds(String boundsJson) {
            mainHandler.post(() -> {
                if (!googlePanelActive || googleWebView == null) {
                    return;
                }
                lastGoogleBounds = applyPanelBounds(googleWebView, boundsJson);
            });
        }

        @JavascriptInterface
        public void searchGoogle(String query) {
            mainHandler.post(() -> {
                if (query == null || query.trim().isEmpty()) {
                    return;
                }
                WebView view = ensureGoogleWebView();
                try {
                    String encoded = URLEncoder.encode(query.trim(), "UTF-8");
                    view.loadUrl("https://www.google.com/search?q=" + encoded);
                } catch (UnsupportedEncodingException ignored) {
                }
            });
        }

        @JavascriptInterface
        public void homeGoogle() {
            mainHandler.post(() -> {
                if (googleWebView != null) {
                    googleWebView.loadUrl(GOOGLE_HOME_URL);
                }
            });
        }

        @JavascriptInterface
        public void backGoogle() {
            mainHandler.post(() -> {
                if (googleWebView != null && googleWebView.canGoBack()) {
                    googleWebView.goBack();
                }
            });
        }

        @JavascriptInterface
        public void forwardGoogle() {
            mainHandler.post(() -> {
                if (googleWebView != null && googleWebView.canGoForward()) {
                    googleWebView.goForward();
                }
            });
        }

        @JavascriptInterface
        public void reloadGoogle() {
            mainHandler.post(() -> {
                if (googleWebView != null) {
                    googleWebView.reload();
                }
            });
        }

        @JavascriptInterface
        public void scrollGoogle(double amount) {
            mainHandler.post(() -> {
                if (googleWebView != null && googlePanelActive) {
                    float d = getResources().getDisplayMetrics().density;
                    googleWebView.scrollBy(0, (int) Math.round(amount * d));
                }
            });
        }

        @JavascriptInterface
        public void clickGoogleAt(double localX, double localY) {
            mainHandler.post(() -> {
                if (googlePanelActive && googleWebView != null) {
                    dispatchSyntheticTap(googleWebView, lastGoogleBounds, localX, localY);
                }
            });
        }

        @JavascriptInterface
        public void showYouTubePanel(String boundsJson) {
            mainHandler.post(() -> {
                youtubePanelActive = true;
                WebView view = ensureYouTubeWebView();
                lastYouTubeBounds = applyPanelBounds(view, boundsJson);
            });
        }

        @JavascriptInterface
        public void hideYouTubePanel() {
            mainHandler.post(() -> {
                youtubePanelActive = false;
                if (youtubeWebView != null) {
                    youtubeWebView.setVisibility(View.GONE);
                }
                if (!googlePanelActive && cursorOverlay != null) {
                    cursorOverlay.updateCursor(0f, 0f, 0f, false);
                }
            });
        }

        @JavascriptInterface
        public void updateYouTubePanelBounds(String boundsJson) {
            mainHandler.post(() -> {
                if (!youtubePanelActive || youtubeWebView == null) {
                    return;
                }
                lastYouTubeBounds = applyPanelBounds(youtubeWebView, boundsJson);
            });
        }

        @JavascriptInterface
        public void homeYouTube() {
            mainHandler.post(() -> {
                if (youtubeWebView != null) {
                    youtubeWebView.loadUrl(YOUTUBE_HOME_URL);
                }
            });
        }

        @JavascriptInterface
        public void backYouTube() {
            mainHandler.post(() -> {
                if (youtubeWebView != null && youtubeWebView.canGoBack()) {
                    youtubeWebView.goBack();
                }
            });
        }

        @JavascriptInterface
        public void forwardYouTube() {
            mainHandler.post(() -> {
                if (youtubeWebView != null && youtubeWebView.canGoForward()) {
                    youtubeWebView.goForward();
                }
            });
        }

        @JavascriptInterface
        public void reloadYouTube() {
            mainHandler.post(() -> {
                if (youtubeWebView != null) {
                    youtubeWebView.reload();
                }
            });
        }

        @JavascriptInterface
        public void scrollYouTube(double amount) {
            mainHandler.post(() -> {
                if (youtubeWebView != null && youtubePanelActive) {
                    float d = getResources().getDisplayMetrics().density;
                    youtubeWebView.scrollBy(0, (int) Math.round(amount * d));
                }
            });
        }

        @JavascriptInterface
        public void clickYouTubeAt(double localX, double localY) {
            mainHandler.post(() -> {
                if (youtubePanelActive && youtubeWebView != null) {
                    dispatchSyntheticTap(youtubeWebView, lastYouTubeBounds, localX, localY);
                }
            });
        }

        @JavascriptInterface
        public void updateHandCursor(
            double cssX,
            double cssY,
            double progress,
            double vw,
            double vh,
            boolean visible
        ) {
            mainHandler.post(() -> {
                if (cursorOverlay == null || mainWebView == null) {
                    return;
                }
                if (!visible || (!googlePanelActive && !youtubePanelActive)) {
                    cursorOverlay.updateCursor(0f, 0f, 0f, false);
                    return;
                }
                int hostW = mainWebView.getWidth();
                int hostH = mainWebView.getHeight();
                float sx = (vw > 1.0 && hostW > 0)
                    ? (float) (hostW / vw)
                    : getResources().getDisplayMetrics().density;
                float sy = (vh > 1.0 && hostH > 0)
                    ? (float) (hostH / vh)
                    : getResources().getDisplayMetrics().density;
                cursorOverlay.updateCursor(
                    (float) (cssX * sx),
                    (float) (cssY * sy),
                    (float) progress,
                    true
                );
            });
        }

        @JavascriptInterface
        public void launchMinecraftVR() {
            mainHandler.post(() -> launchInstalledOrStore("com.mojang.minecraftpe"));
        }

        @JavascriptInterface
        public boolean launchPackage(String packageName) {
            mainHandler.post(() -> launchInstalledOrStore(packageName));
            return true;
        }

        @JavascriptInterface
        public String getAppVersion() {
            return "1.0.0";
        }
    }
}
