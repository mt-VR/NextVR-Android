package com.nextvr.app;

import android.annotation.SuppressLint;
import android.app.Presentation;
import android.graphics.Color;
import android.graphics.PixelFormat;
import android.graphics.SurfaceTexture;
import android.graphics.drawable.ColorDrawable;
import android.hardware.display.DisplayManager;
import android.hardware.display.VirtualDisplay;
import android.net.Uri;
import android.os.SystemClock;
import android.view.InputDevice;
import android.view.MotionEvent;
import android.view.Surface;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.*;
import android.widget.FrameLayout;
import androidx.webkit.WebViewCompat;
import androidx.webkit.WebViewFeature;
import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.Map;

/** Hardware WebView -> private virtual display -> SurfaceTexture, as in the NextVR port. */
final class WebSurface {
    static final String ORIGIN="https://appassets.androidplatform.net";
    static final String HOME=ORIGIN+"/ui/index.html";
    final WebView web;
    final Presentation presentation;
    private final VirtualDisplay display;
    private final Surface surface;
    private final NextVrActivity owner;
    private final FrameLayout container;
    private android.view.View fullscreen;
    private WebChromeClient.CustomViewCallback fullscreenCallback;
    private long downTime;
    final int width,height;
    private final boolean shell;
    private boolean released;
    private static final String AUDIO_SCRIPT="(()=>{const contexts=[];for(const k of ['AudioContext','webkitAudioContext']){const C=window[k];if(C)window[k]=new Proxy(C,{construct(t,a){const c=Reflect.construct(t,a);contexts.push(c);return c;}});}window.__nextvrAudio=on=>{document.querySelectorAll('audio,video').forEach(e=>{if(!on){e.dataset.nextvrVolume=e.volume;e.volume=0;e.pause();}else if(e.dataset.nextvrVolume){e.volume=+e.dataset.nextvrVolume;delete e.dataset.nextvrVolume;}});contexts.forEach(c=>{try{on?c.resume():c.suspend();}catch{}});};})();";
    @SuppressLint("SetJavaScriptEnabled")
    WebSurface(NextVrActivity owner,SurfaceTexture texture,int width,int height,boolean shell,Object bridge,String url) {
        this.owner=owner; this.width=width; this.height=height; this.shell=shell;
        texture.setDefaultBufferSize(width,height); surface=new Surface(texture);
        display=owner.getSystemService(DisplayManager.class).createVirtualDisplay("NextVR "+(shell?"spatial UI":"browser"),width,height,160,surface,0);
        if(display==null) throw new IllegalStateException("Cannot create HTML virtual display");
        presentation=new Presentation(owner,display.getDisplay());
        presentation.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        presentation.getWindow().setFormat(PixelFormat.TRANSLUCENT);
        presentation.getWindow().addFlags(WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED);
        presentation.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN|WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING);
        presentation.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_DIM_BEHIND);
        web=new WebView(presentation.getContext());
        web.setBackgroundColor(shell?Color.TRANSPARENT:Color.WHITE);
        web.setInitialScale(100);
        WebSettings s=web.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true);
        s.setAllowFileAccess(false); s.setAllowContentAccess(true); // Only SAF-selected photo URIs are granted.
        s.setMediaPlaybackRequiresUserGesture(false); // Native pinch is a real user action, not WebView JS activation.
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        s.setSupportMultipleWindows(false); s.setJavaScriptCanOpenWindowsAutomatically(false);
        s.setUseWideViewPort(!shell); s.setLoadWithOverviewMode(!shell);
        if(shell)s.setCacheMode(WebSettings.LOAD_NO_CACHE); // Always pair the APK bridge with this APK's UI.
        web.setVerticalScrollBarEnabled(false); web.setHorizontalScrollBarEnabled(false);
        if(shell) web.addJavascriptInterface(bridge,"NativeXR");
        if(WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT))
            WebViewCompat.addDocumentStartJavaScript(web,AUDIO_SCRIPT,java.util.Collections.singleton("*"));
        web.setWebViewClient(new WebViewClient() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view,WebResourceRequest request) {
                Uri u=request.getUrl();
                if(ORIGIN.equals(u.getScheme()+"://"+u.getHost())) return asset(u);
                return null;
            }
            @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request) {
                if(shell) return !request.getUrl().toString().equals(HOME);
                return !isWebUrl(request.getUrl().toString());
            }
            @Override public void onPageFinished(WebView view,String address) {
                if(!WebViewFeature.isFeatureSupported(WebViewFeature.DOCUMENT_START_SCRIPT)) view.evaluateJavascript(AUDIO_SCRIPT,null);
                audio(owner.isAudioFocused());
                if(shell) owner.shellReady();
            }
            @Override public void onReceivedError(WebView view,WebResourceRequest request,WebResourceError error) {
                if(request.isForMainFrame()) owner.report("Page could not load: "+error.getDescription());
            }
            @Override public boolean onRenderProcessGone(WebView view,RenderProcessGoneDetail detail) {
                owner.report("Web renderer stopped. Reopen NextVR to restore the workspace.");
                owner.onWebRendererGone(); return true;
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override public boolean onConsoleMessage(ConsoleMessage m) {
                android.util.Log.d("NextVR-HTML",m.message()+" @"+m.lineNumber()); return true;
            }
            @Override public boolean onShowFileChooser(WebView view,ValueCallback<Uri[]> callback,FileChooserParams params) {
                owner.chooseFiles(callback,params); return true;
            }
    @Override public void onPermissionRequest(PermissionRequest request) {
      request.grant(request.getResources());
    }
            @Override public void onShowCustomView(android.view.View view,CustomViewCallback callback) {
                if(fullscreen!=null) { callback.onCustomViewHidden(); return; }
                fullscreen=view; fullscreenCallback=callback;
                container.addView(view,new FrameLayout.LayoutParams(-1,-1));
            }
            @Override public void onHideCustomView() { hideFullscreen(); }
        });
        web.setDownloadListener((address,agent,disposition,mime,length)->owner.download(address,agent,disposition,mime));
        container=new FrameLayout(presentation.getContext()); container.setBackgroundColor(Color.TRANSPARENT);
        container.addView(web,new FrameLayout.LayoutParams(-1,-1)); presentation.setContentView(container);
        presentation.show();
        presentation.getWindow().setLayout(width,height);
        web.loadUrl(url);
    }
    static boolean isWebUrl(String url) { Uri uri=Uri.parse(url); return ("https".equals(uri.getScheme()) || "http".equals(uri.getScheme())) && uri.getHost()!=null; }
    private WebResourceResponse asset(Uri uri) {
        String path=uri.getPath();
        if(path==null || path.contains("..") || !path.startsWith("/ui/")) return denied();
        try {
            String mime=path.endsWith(".html")?"text/html":path.endsWith(".js")?"application/javascript":path.endsWith(".css")?"text/css":path.endsWith(".woff2")?"font/woff2":path.endsWith(".svg")?"image/svg+xml":"application/octet-stream";
            Map<String,String> headers=new HashMap<>();
            // No remote executable code or frames can acquire the privileged NativeXR bridge.
            headers.put("Content-Security-Policy","default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' https: blob: data: content:; media-src blob:; font-src 'self'; connect-src https: blob:; worker-src blob:; frame-src 'none'; object-src 'none'; base-uri 'none'");
            headers.put("Access-Control-Allow-Origin",ORIGIN);
            headers.put("Cache-Control","no-store");
            return new WebResourceResponse(mime,"UTF-8",200,"OK",headers,owner.getAssets().open(path.substring(1)));
        } catch(Exception e) { return denied(); }
    }
    private static WebResourceResponse denied() { return new WebResourceResponse("text/plain","UTF-8",404,"Not Found",new HashMap<>(),new ByteArrayInputStream(new byte[0])); }
    void evaluate(String script) { if(!released) web.evaluateJavascript(script,null); }
    /** Injeta no WebView somente o contato espacial já validado pelo pipeline PhoneXR. */
    void dispatchHandEvent(int action,float x,float y) {
        if(released) return;
        long now=SystemClock.uptimeMillis(); if(action==MotionEvent.ACTION_DOWN) downTime=now;
        // A click is one clean tap: DOWN and UP can land in the same millisecond on a fast drain.
        // Keep the stream strictly ordered so Chromium's gesture detector never sees a zero- or
        // negative-duration touch (a tap is still a tap at 1 ms).
        else if(now<=downTime) now=downTime+1;
        MotionEvent.PointerProperties properties=new MotionEvent.PointerProperties();
        properties.id=0;
        properties.toolType=MotionEvent.TOOL_TYPE_FINGER;
        MotionEvent.PointerCoords coordinates=new MotionEvent.PointerCoords();
        coordinates.x=x; coordinates.y=y;
        coordinates.pressure=(action==MotionEvent.ACTION_UP || action==MotionEvent.ACTION_CANCEL)?0f:1f;
        coordinates.size=1f;
        // WebView/Chromium classifies a default MotionEvent.obtain() as SOURCE_UNKNOWN. Give the
        // hand-generated pointer stream a complete touch identity so WebView emits the expected
        // pointer/touch/click sequence. This method is reached only through the PhoneXR hand bridge;
        // the Activity still has no physical-screen touch listener or selection fallback.
        MotionEvent event=MotionEvent.obtain(downTime,now,action,1,
            new MotionEvent.PointerProperties[]{properties},new MotionEvent.PointerCoords[]{coordinates},
            0,0,1f,1f,0,0,InputDevice.SOURCE_TOUCHSCREEN,0);
        container.dispatchTouchEvent(event); event.recycle();
    }
    void audio(boolean on) { evaluate("window.__nextvrAudio&&window.__nextvrAudio("+on+")"); }
    void resume() { if(!released) web.onResume(); }
    void pause() { audio(false); if(!released) web.onPause(); }
    void hideFullscreen() { if(fullscreen!=null) { container.removeView(fullscreen); fullscreen=null; if(fullscreenCallback!=null) fullscreenCallback.onCustomViewHidden(); fullscreenCallback=null; } }
    void release() {
        if(released) return;
        pause(); hideFullscreen(); released=true;
        web.stopLoading(); web.loadUrl("about:blank"); container.removeAllViews(); web.removeJavascriptInterface("NativeXR"); web.destroy();
        presentation.dismiss(); display.release(); surface.release();
    }
}
