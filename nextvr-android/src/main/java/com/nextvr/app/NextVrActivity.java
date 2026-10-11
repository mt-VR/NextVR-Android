package com.nextvr.app;

import android.Manifest;
import android.app.DownloadManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.media.SoundPool;
import android.net.Uri;
import android.opengl.GLSurfaceView;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.JavascriptInterface;
import android.webkit.URLUtil;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.PopupMenu;
import android.widget.Toast;
import androidx.annotation.Keep;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.io.InputStream;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;
import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

/** Cardboard orientation + Camera2 passthrough + the reference's HTML spatial workspace. */
public class NextVrActivity extends AppCompatActivity implements PopupMenu.OnMenuItemClickListener {
    static { System.loadLibrary("nextvr_jni"); }
    private long nativeApp;
    private GLSurfaceView glView;
    private volatile SpatialRenderer renderer;
    private final Handler main=new Handler(Looper.getMainLooper());
    private PassthroughCamera camera;
    private WebSurface shell;
    private final Map<String,WebSurface> browsers=new HashMap<>();
    private final Map<String,String> browserUrls=new HashMap<>();
    private final Set<String> pendingBrowsers=new HashSet<>();
    private volatile boolean resumed,closed;
    private boolean ready;
    /** Preserves gesture/contact edges while coalescing only safe pose-only hand frames. */
    private final HandFrameMailbox handFrames=new HandFrameMailbox();
    private final AtomicBoolean handsPending=new AtomicBoolean();
    /** Decodifica os panoramas de ambiente fora da thread do bridge da WebView. */
    private final ExecutorService envLoader=Executors.newSingleThreadExecutor();
    /** Coalesces adjacent ACTION_MOVE events but keeps touch edges ordered for each WebView. */
    private final HandTouchEventQueue handTouchEvents=new HandTouchEventQueue();
    private final AtomicBoolean handTouchPending=new AtomicBoolean();
    private final AtomicBoolean posePending=new AtomicBoolean();
    private long lastPose;
    private ValueCallback<Uri[]> fileCallback;
    private AudioManager audio;
    private AudioFocusRequest focus;
    private SoundPool sounds;
    private int clickSound;
    private boolean soundReady,audioFocused;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        nativeApp=nativeOnCreate(getAssets());
        setContentView(R.layout.activity_vr);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setVolumeControlStream(AudioManager.STREAM_MUSIC);
        audio=getSystemService(AudioManager.class);
        AudioAttributes attributes=new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_MEDIA).setContentType(AudioAttributes.CONTENT_TYPE_MOVIE).build();
        focus=new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN).setAudioAttributes(attributes)
            .setOnAudioFocusChangeListener(change -> setAudioEnabled(change==AudioManager.AUDIOFOCUS_GAIN),main).build();
        sounds=new SoundPool.Builder().setMaxStreams(4).setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_ASSISTANCE_SONIFICATION).setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION).build()).build();
        sounds.setOnLoadCompleteListener((pool,id,status)->soundReady=status==0);
        try(var asset=getAssets().openFd("ui/click.wav")) { clickSound=sounds.load(asset,1); } catch(Exception e) { report("UI sound could not load: "+e.getMessage()); }
        camera=new PassthroughCamera(this,new PassthroughCamera.Listener() {
            @Override public void frame(android.graphics.Bitmap bitmap) {
                SpatialRenderer r=renderer;
                if(r!=null && resumed && !closed)r.camera.offer(bitmap);else bitmap.recycle();
            }
            @Override public void hands(com.nextvr.app.hands.PhoneXrHands.Frame frame) {
                SpatialRenderer r=renderer;if(r!=null)r.hands=frame;
                // Serialize on the tracking thread. A latest-only script slot can erase DOWN or UP
                // if another camera result arrives before the main-thread WebView drain runs.
                float mx=r==null?1f:r.mappingX,my=r==null?1f:r.mappingY;
                handFrames.offer(frame,"window.nextvrHands&&window.nextvrHands("+frame.json()+","+mx+","+my+")");
                scheduleHandFrameDrain();
            }
            @Override public void stopped() {
                SpatialRenderer r=renderer;if(r!=null){r.camera.clear();r.hands=null;}
                handFrames.requestReset();
                scheduleHandFrameDrain();
            }
            @Override public void error(String message) { report(message); }
        });
        glView=findViewById(R.id.surface_view);
        glView.setEGLContextClientVersion(3); glView.setPreserveEGLContextOnPause(true);
        glView.setRenderer(new GLSurfaceView.Renderer() {
            @Override public void onSurfaceCreated(GL10 gl,EGLConfig config) {
                nativeOnSurfaceCreated(nativeApp);
                SpatialRenderer previous=renderer;
                SpatialRenderer fresh=new SpatialRenderer(); renderer=fresh;
                main.post(()->{
                    if(closed || renderer!=fresh) return;
                    camera.stop(); releaseWeb();
                    if(previous!=null) {
                        previous.camera.release(); previous.atlas.surface.release(); previous.environment.release();
                        for(SpatialRenderer.Texture t:previous.browsers.values()) t.surface.release();
                    }
                    ready=false;
                    shell=new WebSurface(NextVrActivity.this,fresh.atlas.surface,SpatialRenderer.ATLAS,SpatialRenderer.ATLAS,true,new Bridge(),WebSurface.HOME);
                    startCamera();
                });
            }
            @Override public void onSurfaceChanged(GL10 gl,int w,int h) { nativeSetScreenParams(nativeApp,w,h); }
            @Override public void onDrawFrame(GL10 gl) { PerfLog.renderFrame(); SpatialRenderer r=renderer; if(r!=null) r.update(); nativeOnDrawFrame(nativeApp); }
        });
        // Não registre toque no GLSurfaceView: câmera e pose continuam ativas, mas somente os
        // resultados PhoneXR podem entrar na ponte de interação da UI espacial.
        immersive();
        if(checkSelfPermission(Manifest.permission.CAMERA)!=PackageManager.PERMISSION_GRANTED)
            requestPermissions(new String[]{Manifest.permission.CAMERA},10);
    }
    private void scheduleHandFrameDrain() {
        if(handsPending.compareAndSet(false,true))main.post(this::drainHandFrames);
    }
    private void drainHandFrames() {
        for(;;) {
            HandFrameMailbox.Batch batch=handFrames.drain();
            int stale=0;
            if(shell!=null && resumed && !closed) {
                StringBuilder scripts=new StringBuilder();
                if(batch.resetBeforeFrames())scripts.append("window.nextvrHands&&window.nextvrHands({hands:[]});");
                for(HandFrameMailbox.FrameScript pending:batch.frames()) {
                    com.nextvr.app.hands.PhoneXrHands.Frame frame=pending.frame();
                    if(frame.isFresh(SystemClock.elapsedRealtimeNanos())) {
                        scripts.append(pending.script()).append(';');
                        if(!frame.getHands().isEmpty())PerfLog.published(frame.getCompletedNs());
                    } else {
                        // A queued press that outlived its native validity must cancel, never click.
                        scripts.append("window.nextvrHands&&window.nextvrHands({hands:[]});");
                        stale++;
                    }
                }
                // One WebView evaluation guarantees the ordered frame edges run in one JS task,
                // before a later batch can overtake them on Chromium's asynchronous evaluator.
                if(scripts.length()>0)shell.evaluate(scripts.toString());
            }
            PerfLog.handDrain(batch.frames().size(),stale,batch.coalesced());
            handsPending.set(false);
            if(handFrames.isEmpty() || !handsPending.compareAndSet(false,true))return;
        }
    }
    private void scheduleHandTouchDrain() {
        if(handTouchPending.compareAndSet(false,true))main.post(this::drainHandTouchEvents);
    }
    private void drainHandTouchEvents() {
        for(;;) {
            HandTouchEventQueue.Event event=handTouchEvents.poll();
            if(event==null) {
                handTouchPending.set(false);
                if(handTouchEvents.isEmpty() || !handTouchPending.compareAndSet(false,true))return;
                continue;
            }
            WebSurface target=event.id.equals("shell")?shell:browsers.get(event.id);
            if(target==null || !resumed || closed)continue;
            target.dispatchHandEvent(event.action,event.x,event.y);
            if(event.action==MotionEvent.ACTION_UP && target!=shell)target.web.evaluateJavascript(
                "!!(document.activeElement&&(document.activeElement.matches('input,textarea')||document.activeElement.isContentEditable))",
                value->{ if("true".equals(value) && shell!=null) shell.evaluate("window.nextvrBrowserFocus&&window.nextvrBrowserFocus("+JSONObject.quote(event.id)+")"); });
        }
    }
    @Keep public void drawEye(float[] view,float[] projection) { SpatialRenderer r=renderer; if(r!=null) { r.draw(view,projection); camera.scaleX=r.spanX/2;camera.scaleY=r.spanY/2; } }
    @Keep public void headPose(float[] view) {
        long now=SystemClock.uptimeMillis();
        if(now-lastPose<30 || !posePending.compareAndSet(false,true)) return;
        lastPose=now;
        StringBuilder json=new StringBuilder("["); for(int i=0;i<16;i++) { if(i>0) json.append(','); json.append(view[i]); } json.append(']');
        main.post(()->{ try { if(shell!=null && resumed) shell.evaluate("window.nextvrPose&&window.nextvrPose("+json+")"); } finally { posePending.set(false); } });
    }
    void shellReady() {
        ready=true;
        if(shell!=null) { shell.evaluate("window.nextvrResume&&window.nextvrResume()"); shell.audio(audioFocused); }
    }
    private void startCamera() {
        if(!resumed || renderer==null || checkSelfPermission(Manifest.permission.CAMERA)!=PackageManager.PERMISSION_GRANTED) return;
        camera.start(getWindowManager().getDefaultDisplay().getRotation());
    }
    @Override public void onRequestPermissionsResult(int code,String[] permissions,int[] grants) {
        super.onRequestPermissionsResult(code,permissions,grants);
        if(code==10) {
            if(grants.length>0 && grants[0]==PackageManager.PERMISSION_GRANTED) startCamera();
            else new AlertDialog.Builder(this).setTitle("Camera passthrough requires permission")
                .setMessage("NextVR cannot show your surroundings without the rear camera. Grant Camera permission in Android settings, then reopen NextVR. Do not walk while wearing the viewer.")
                .setPositiveButton("Settings",(d,w)->startActivity(new Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS,Uri.parse("package:"+getPackageName()))))
                .setNegativeButton("Exit",(d,w)->finish()).show();
        }
    }
    @Override protected void onResume() {
        super.onResume(); resumed=true; glView.onResume(); nativeOnResume(nativeApp);
        requestAudio(); if(shell!=null) { shell.resume(); shell.evaluate("window.nextvrResume&&window.nextvrResume()"); }
        for(WebSurface b:browsers.values()) b.resume(); startCamera(); immersive();
    }
    @Override protected void onPause() {
        resumed=false; camera.stop();
        if(shell!=null) { shell.evaluate("window.nextvrSuspend&&window.nextvrSuspend()"); shell.pause(); }
        for(WebSurface b:browsers.values()) b.pause();
        setAudioEnabled(false); audio.abandonAudioFocusRequest(focus);
        nativeOnPause(nativeApp); glView.onPause(); super.onPause();
    }
    @Override protected void onDestroy() {
        closed=true; releaseWeb();
        SpatialRenderer old=renderer; renderer=null;
        camera.destroy(()->{ if(old!=null) { old.camera.release(); old.atlas.surface.release(); for(SpatialRenderer.Texture t:old.browsers.values()) t.surface.release(); } });
        if(fileCallback!=null) { fileCallback.onReceiveValue(null); fileCallback=null; }
        envLoader.shutdownNow();
        sounds.release(); nativeOnDestroy(nativeApp); nativeApp=0; super.onDestroy();
    }
    private void releaseWeb() {
        ready=false;
        for(WebSurface b:new ArrayList<>(browsers.values())) b.release();
        browsers.clear(); browserUrls.clear(); pendingBrowsers.clear();
        if(shell!=null) { shell.release(); shell=null; }
    }
    void onWebRendererGone() { main.post(()->{ releaseWeb(); finish(); }); }
    boolean isAudioFocused() { return audioFocused; }
    private void requestAudio() { setAudioEnabled(audio.requestAudioFocus(focus)==AudioManager.AUDIOFOCUS_REQUEST_GRANTED); }
    private void setAudioEnabled(boolean enabled) {
        audioFocused=enabled;
        if(shell!=null) shell.audio(enabled); for(WebSurface b:browsers.values()) b.audio(enabled);
        if(!enabled) sounds.autoPause(); else sounds.autoResume();
    }
    void report(String message) {
        android.util.Log.w("NextVR",message);
        main.post(()->{ if(closed) return; Toast.makeText(this,message,Toast.LENGTH_LONG).show();
            if(shell!=null && ready) shell.evaluate("window.nextvrMessage&&window.nextvrMessage("+JSONObject.quote(message)+")"); });
    }
    void chooseFiles(ValueCallback<Uri[]> callback,WebChromeClient.FileChooserParams params) {
        if(fileCallback!=null) fileCallback.onReceiveValue(null); fileCallback=callback;
        Intent intent=new Intent(Intent.ACTION_OPEN_DOCUMENT).addCategory(Intent.CATEGORY_OPENABLE).setType("image/*");
        intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE,params.getMode()==WebChromeClient.FileChooserParams.MODE_OPEN_MULTIPLE);
        try { startActivityForResult(intent,20); } catch(Exception e) { fileCallback.onReceiveValue(null); fileCallback=null; report("No photo picker available"); }
    }
    @Override protected void onActivityResult(int request,int result,Intent data) {
        super.onActivityResult(request,result,data);
        if(request==20 && fileCallback!=null) {
            ArrayList<Uri> values=new ArrayList<>();
            if(result==RESULT_OK && data!=null) {
                if(data.getClipData()!=null) for(int i=0;i<data.getClipData().getItemCount();i++) values.add(data.getClipData().getItemAt(i).getUri());
                else if(data.getData()!=null) values.add(data.getData());
            }
            fileCallback.onReceiveValue(values.isEmpty()?null:values.toArray(new Uri[0])); fileCallback=null;
        }
    }
    void download(String url,String agent,String disposition,String mime) {
        if(!WebSurface.isWebUrl(url)) { report("Only HTTP(S) downloads are supported"); return; }
        new AlertDialog.Builder(this).setTitle("Download file?").setMessage(URLUtil.guessFileName(url,disposition,mime))
            .setNegativeButton(android.R.string.cancel,null).setPositiveButton("Download",(d,w)->{
                try {
                    DownloadManager.Request request=new DownloadManager.Request(Uri.parse(url));
                    request.setDestinationInExternalFilesDir(this,Environment.DIRECTORY_DOWNLOADS,URLUtil.guessFileName(url,disposition,mime));
                    request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                    String cookies=CookieManager.getInstance().getCookie(url); if(cookies!=null) request.addRequestHeader("Cookie",cookies);
                    request.addRequestHeader("User-Agent",agent);
                    getSystemService(DownloadManager.class).enqueue(request); report("Download started");
                } catch(Exception e) { report("Download failed: "+e.getMessage()); }
            }).show();
    }
    private void syncBrowsers(JSONArray specs,SpatialRenderer target) throws Exception {
        if(renderer!=target || shell==null || closed) return;
        Set<String> live=new HashSet<>();
        for(int i=0;i<specs.length();i++) {
            JSONObject spec=specs.getJSONObject(i); String id=spec.getString("id"), url=spec.getString("url");
            if(!id.matches("[a-zA-Z0-9_-]{1,64}") || !WebSurface.isWebUrl(url)) continue;
            live.add(id);
            WebSurface existing=browsers.get(id);
            if(existing!=null) { if(!url.equals(browserUrls.get(id))) { browserUrls.put(id,url); existing.web.loadUrl(url); } continue; }
            if(!pendingBrowsers.add(id)) continue;
            browserUrls.put(id,url);
            int width=Math.max(100,Math.min(1600,spec.getInt("width"))), height=Math.max(100,Math.min(1200,spec.getInt("height")));
            glView.queueEvent(()->{
                if(renderer!=target) return;
                SpatialRenderer.Texture texture=new SpatialRenderer.Texture(); target.browsers.put(id,texture);
                main.post(()->{
                    if(closed || renderer!=target || !pendingBrowsers.remove(id)) return;
                    WebSurface browser=new WebSurface(this,texture.surface,width,height,false,null,browserUrls.get(id));
                    browsers.put(id,browser); browser.audio(audioFocused); if(!resumed) browser.pause();
                });
            });
        }
        Set<String> all=new HashSet<>(browserUrls.keySet());
        for(String id:all) if(!live.contains(id)) {
            pendingBrowsers.remove(id); browserUrls.remove(id);
            WebSurface old=browsers.remove(id); if(old!=null) old.release();
            glView.queueEvent(()->{ SpatialRenderer.Texture t=target.browsers.remove(id); if(t!=null) t.release(); });
        }
    }
    private final class Bridge {
        // frame() runs on the WebView bridge thread. A recreated renderer needs a full scene and
        // browser sync, even if the WebView sends exactly the same JSON as before.
        private SpatialRenderer cachedTarget;
        private String cachedScene, cachedSpecs;
        @JavascriptInterface public void frame(String scene,String browserSpecs) {
            if(scene.length()>100000 || browserSpecs.length()>20000) return;
            try {
                SpatialRenderer target=renderer; if(target==null) return;
                boolean specsChanged;
                synchronized(this) {
                    if(target!=cachedTarget) { cachedTarget=target;cachedScene=null;cachedSpecs=null; }
                    specsChanged=!browserSpecs.equals(cachedSpecs);
                }
                if(!scene.equals(cachedScene)) { target.panels=SpatialRenderer.decode(scene);cachedScene=scene; }
                if(specsChanged) {
                    JSONArray specs=new JSONArray(browserSpecs);
                    synchronized(this) { cachedSpecs=browserSpecs; }
                    // Do not queue a no-op sync every frame: it competes with hand input on main.
                    main.post(()->{ try { syncBrowsers(specs,target); }
                        catch(Exception e) {
                            synchronized(Bridge.this) {
                                if(target==cachedTarget && browserSpecs.equals(cachedSpecs))cachedSpecs=null;
                            }
                            report("Browser surface failed: "+e.getMessage());
                        } });
                }
            } catch(Exception e) { android.util.Log.w("NextVR","Invalid spatial frame",e); }
        }
        /**
         * Ambiente escolhido na interface do shell: "passthrough" mantem a camera, os demais
         * carregam o panorama 360 de assets/env/<id>.jpg (3072x1536). O bitmap aberto passa de
         * 18 MB, entao a decodificacao roda fora da thread do bridge e o resultado sobe para a
         * textura no proximo frame do renderer. O arquivo de assets/ui/env/<id>.jpg e so a
         * miniatura 480x240 que a lista de ambientes da interface mostra — usa-lo como ceu daria
         * uma imagem borrada cobrindo a tela inteira.
         */
        @JavascriptInterface public void env(String id) {
            if(id==null || !(id.equals("passthrough")||id.equals("sunset")||id.equals("night")||id.equals("space"))) return;
            try { envLoader.execute(()->loadEnvironment(id)); } catch(RejectedExecutionException e) { /* app fechando */ }
        }
        private void loadEnvironment(String environment) {
            Bitmap bitmap=null;
            try {
                if(!environment.equals("passthrough")) {
                    try(InputStream in=getAssets().open("env/"+environment+".jpg")) { bitmap=BitmapFactory.decodeStream(in); }
                }
            } catch(Exception e) { report("Environment failed: "+e.getMessage()); return; }
            SpatialRenderer target=renderer;
            if(target!=null && !closed) target.setEnvironment(environment,bitmap);
            else if(bitmap!=null) bitmap.recycle();
        }
        @JavascriptInterface public void hands(boolean enabled) { if(!closed)camera.enableHands(enabled); }
        @JavascriptInterface public void handVisuals(boolean enabled) { SpatialRenderer r=renderer;if(r!=null)r.showHands=enabled; }
        @JavascriptInterface public void handTargets(String targets) { SpatialRenderer r=renderer;if(r!=null && targets.length()<32000)r.handTargets=targets; }
        @JavascriptInterface public void click() { main.post(()->{ if(!resumed) return; if(!audioFocused) requestAudio(); if(soundReady && audioFocused) sounds.play(clickSound,.25f,.25f,1,0,1); }); }
        /** Chamado apenas pelo adaptador PhoneXR do shell privilegiado; não há ponte de touchscreen. */
        @JavascriptInterface public void handTouch(String id,int action,float x,float y) {
            if(action!=MotionEvent.ACTION_DOWN && action!=MotionEvent.ACTION_UP && action!=MotionEvent.ACTION_MOVE && action!=MotionEvent.ACTION_CANCEL) return;
            if(id==null || (!id.equals("shell") && !id.matches("[a-zA-Z0-9_-]{1,64}")) || !Float.isFinite(x)||!Float.isFinite(y)) return;
            handTouchEvents.offer(id,action,x,y);
            scheduleHandTouchDrain();
        }
        @JavascriptInterface public void key(String id,String key) {
            if(key.length()>16) return;
            main.post(()->{
                WebSurface b=browsers.get(id); if(b==null) return;
                android.view.inputmethod.InputConnection input=b.web.onCreateInputConnection(new android.view.inputmethod.EditorInfo());
                if(input==null) return;
                if(key.equals("⌫")) input.deleteSurroundingText(1,0);
                else if(key.equals("⏎")) { input.sendKeyEvent(new android.view.KeyEvent(android.view.KeyEvent.ACTION_DOWN,android.view.KeyEvent.KEYCODE_ENTER)); input.sendKeyEvent(new android.view.KeyEvent(android.view.KeyEvent.ACTION_UP,android.view.KeyEvent.KEYCODE_ENTER)); }
                else input.commitText(key,1);
            });
        }
        @JavascriptInterface public String battery() {
            Intent state=registerReceiver(null,new android.content.IntentFilter(Intent.ACTION_BATTERY_CHANGED));
            if(state==null) return "null";
            int level=state.getIntExtra("level",0), scale=state.getIntExtra("scale",100), status=state.getIntExtra("status",0);
            return "{\"level\":"+((float)level/Math.max(1,scale))+",\"charging\":"+(status==2||status==5)+"}";
        }
    }
    public void closeSample(View v) { finish(); }
    public void showSettings(View v) { PopupMenu menu=new PopupMenu(this,v); menu.getMenuInflater().inflate(R.menu.settings_menu,menu.getMenu()); menu.setOnMenuItemClickListener(this); menu.show(); }
    @Override public boolean onMenuItemClick(MenuItem item) {
        if(item.getItemId()==R.id.switch_viewer) { camera.stop(); nativeSwitchViewer(nativeApp); return true; }
        if(item.getItemId()==R.id.about_nextvr) { new AlertDialog.Builder(this).setTitle("NextVR").setMessage("Camera passthrough · Cardboard 3 DoF · Spatial HTML\nHand tracking is the only spatial UI input. Use seated. Monoscopic camera video is not depth-correct and is not safe for walking.").setPositiveButton(android.R.string.ok,null).show(); return true; }
        return false;
    }
    @Override public void onWindowFocusChanged(boolean focus) { super.onWindowFocusChanged(focus); if(focus) immersive(); }
    private void immersive() { getWindow().getDecorView().setSystemUiVisibility(5894|View.SYSTEM_UI_FLAG_LAYOUT_STABLE); }
    private native long nativeOnCreate(AssetManager assets);
    private native void nativeOnDestroy(long app);
    private native void nativeOnSurfaceCreated(long app);
    private native void nativeOnDrawFrame(long app);
    private native void nativeOnPause(long app);
    private native void nativeOnResume(long app);
    private native void nativeSetScreenParams(long app,int width,int height);
    private native void nativeSwitchViewer(long app);
}
