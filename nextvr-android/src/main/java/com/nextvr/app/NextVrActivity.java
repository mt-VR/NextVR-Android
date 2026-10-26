package com.nextvr.app;

import android.Manifest;
import android.app.DownloadManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.SurfaceTexture;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.media.SoundPool;
import android.media.projection.MediaProjectionManager;
import android.net.Uri;
import android.opengl.GLSurfaceView;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.provider.Settings;
import android.view.MenuItem;
import android.view.InputDevice;
import android.view.KeyEvent;
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
import com.nextvr.app.apps.AndroidAppManager;
import com.nextvr.app.apps.AppDisplayController;
import com.nextvr.app.apps.AppInputController;
import com.nextvr.app.apps.AppSession;
import com.nextvr.app.apps.AppSessionManager;
import com.nextvr.app.apps.AppSurfaceHost;
import com.nextvr.app.apps.AppWindowController;
import com.nextvr.app.apps.ShizukuManager;
import com.nextvr.app.xr.XrGameController;
import com.nextvr.app.xr.XrHandBridge;
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
public class NextVrActivity extends AppCompatActivity implements PopupMenu.OnMenuItemClickListener, AppSurfaceHost {
    static { System.loadLibrary("nextvr_jni"); }
    private long nativeApp;
    private GLSurfaceView glView;
    private volatile SpatialRenderer renderer;
    private final Handler main=new Handler(Looper.getMainLooper());
    private PassthroughCamera camera;
    private WebSurface shell;
    private final Map<String,WebSurface> browsers=new HashMap<>();
    /** Campos que aceitam digitacao. Botoes e os controles nao textuais ficam de fora de proposito:
     * o teclado flutuante nao tem o que escrever neles, e abrir ali seria um beco sem saida. */
    private static final String EDITABLE_SELECTOR =
        "input:not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox])"
        +":not([type=radio]):not([type=range]):not([type=color]):not([type=file]),"
        +"textarea,[contenteditable]:not([contenteditable=\"false\"])";
    /** Key states the floating keyboard sends over the bridge; mirrors web/src/typing.js. */
    private static final int KEY_PHASE_UP = 3;
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
    /**
     * Android app windows: discovery, sessions, displays, input and the shell bridge. The subsystem
     * lives in {@code com.nextvr.app.apps} and only asks this activity for two things — a texture slot
     * on the GL thread, and a window to show the screen-capture consent dialog.
     */
    private AndroidAppManager androidApps;
    private ShizukuManager shizuku;
    private AppSessionManager appSessions;
    private AppInputController appInput;
    private AppDisplayController appDisplays;
    private AppWindowController appWindows;
    /**
     * PhoneXR: the OpenXR runtime, the headset games it can start, and the hand feed that drives
     * them. A hosted game runs on a display of ours like an app window does, so the whole session —
     * camera, tracking, compositor and menus — stays alive underneath it. That is what lets the same
     * pinch that selects a window select something inside a game.
     */
    private XrHandBridge xrHands;
    private XrGameController xrGames;
    /** Sessions this activity suspended because the whole VR activity was paused (not by the user). */
    private final Set<String> pausedSessions=new HashSet<>();
    private ValueCallback<Uri[]> fileCallback;
    private AudioManager audio;
    private AudioFocusRequest focus;
    private SoundPool sounds;
    private int clickSound;
    private boolean soundReady,audioFocused;
    private volatile int appBrightness=70;
    private WebView entryView;
    private volatile boolean entryVisible=true;
    private volatile long vrSessionReadyAtMs=0L;
    private String pendingVrSettingsJson;
    private android.hardware.SensorManager sensorManager;
    private boolean walkSensorsRegistered=false;
    private volatile boolean hasWalkAccel=false;
    private volatile boolean hasLinearAccel=false;
    private float gravX=Float.NaN, gravY=Float.NaN, gravZ=Float.NaN;
    private float gravMag=Float.NaN;
    private volatile float walkEnergy=0f;
    private volatile long lastWalkStepMs=0L;
    private volatile float gyroRate=0f;
    private volatile boolean sixDofEnabled=true;
    // World Lock (padrão): sem translação. Só quando o usuário desliga o lock o fluxo ótico move.
    private volatile boolean sixDofWalk=false;
    private volatile boolean sentZeroSixDof=false;
    private volatile boolean gameHandMode=false;
    private InternalEyeRecorder internalRecorder;
    private final android.hardware.SensorEventListener walkSensorListener=new android.hardware.SensorEventListener() {
        @Override public void onSensorChanged(android.hardware.SensorEvent event) {
            if(event==null || event.values==null || event.values.length<3) return;
            int type=event.sensor.getType();
            if(type==android.hardware.Sensor.TYPE_ACCELEROMETER) {
                hasWalkAccel=true;
                float ax=event.values[0], ay=event.values[1], az=event.values[2];
                float mag=(float)Math.sqrt(ax*ax+ay*ay+az*az);
                if(Float.isNaN(gravX) || Float.isNaN(gravMag)) {
                    gravX=ax; gravY=ay; gravZ=az; gravMag=mag;
                } else {
                    gravX=0.88f*gravX + 0.12f*ax;
                    gravY=0.88f*gravY + 0.12f*ay;
                    gravZ=0.88f*gravZ + 0.12f*az;
                    gravMag=0.92f*gravMag + 0.08f*mag;
                    // Usa exclusivamente o impacto escalar invariante à rotação da cabeça (|mag - gravMag|):
                    // rodar a cabeça NÃO altera a magnitude da gravidade, impedindo que o 6DoF ande sozinho para os lados ou para a frente.
                    float stepImpact=Math.abs(mag-gravMag);
                    if(stepImpact>0.10f && gyroRate<1.35f) {
                        walkEnergy=Math.min(4f, walkEnergy*0.88f + stepImpact*1.75f);
                        if(walkEnergy>0.08f) lastWalkStepMs=android.os.SystemClock.elapsedRealtime();
                    } else if(!hasLinearAccel) {
                        walkEnergy*=0.86f;
                    }
                }
            } else if(type==android.hardware.Sensor.TYPE_LINEAR_ACCELERATION) {
                hasLinearAccel=true;
                float lx=event.values[0], ly=event.values[1], lz=event.values[2];
                float lmag=(float)Math.sqrt(lx*lx+ly*ly+lz*lz);
                if(lmag>0.11f && gyroRate<1.35f) {
                    walkEnergy=Math.min(4f, walkEnergy*0.88f + lmag*1.70f);
                    if(walkEnergy>0.08f) lastWalkStepMs=android.os.SystemClock.elapsedRealtime();
                } else {
                    walkEnergy*=0.86f;
                }
            } else if(type==android.hardware.Sensor.TYPE_GYROSCOPE) {
                float gx=event.values[0], gy=event.values[1], gz=event.values[2];
                gyroRate=(float)Math.sqrt(gx*gx+gy*gy+gz*gz);
            }
        }
        @Override public void onAccuracyChanged(android.hardware.Sensor sensor, int accuracy) {}
    };

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        nativeApp=nativeOnCreate(getAssets());
        // O estado do pipeline de mãos (delegate, câmera, inferência, slots) vai para o contador da
        // shell a cada ~3 s: numa sessão em aparelho, "de onde vem a lentidão do tracking" se
        // responde olhando a tela, sem adb. O PerfLog já monta o resumo da janela; este é o mesmo
        // número, menor. Limpo no onDestroy para o listener estático não segurar a Activity.
        PerfLog.setStatusListener(status -> main.post(() -> {
            WebSurface target=shell;
            if(target!=null && resumed && !closed)target.evaluate("window.nextvrDiag&&window.nextvrDiag("+status+")");
        }));
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
        androidApps=new AndroidAppManager(this);
        shizuku=new ShizukuManager(this);
        appInput=new AppInputController(this,shizuku);
        appDisplays=new AppDisplayController(this,displayEnvironment,appInput);
        appSessions=new AppSessionManager(appDisplays);
        appDisplays.setSessions(appSessions);
        appWindows=new AppWindowController(this,androidApps,shizuku,appSessions,appDisplays,appInput,shellEnvironment);
        appSessions.setListener(appWindows::onSessionsChanged);
        androidApps.setIconBatchDone(appWindows::onIconBatchReady);
        xrHands=new XrHandBridge();
        xrGames=new XrGameController(xrEnvironment,xrShell,xrHands);
        internalRecorder=new InternalEyeRecorder(this,(rec,sec,msg,savedPath)->main.post(()->{
            if(closed) return;
            if(msg!=null && !msg.isEmpty()) Toast.makeText(NextVrActivity.this,msg,Toast.LENGTH_SHORT).show();
            try {
                JSONObject st=new JSONObject();
                st.put("recording",rec);
                st.put("seconds",sec);
                st.put("message",msg==null?"":msg);
                st.put("savedPath",savedPath==null?"":savedPath);
                String js="window.nextvrOnInternalRecordState&&window.nextvrOnInternalRecordState("+st.toString()+")";
                if(shell!=null && ready) shell.evaluate(js);
                if(entryView!=null) entryView.evaluateJavascript(js,null);
            } catch(Exception ignored) {}
        }));
        // The icons are rendered in the background anyway; starting now means the first paint of the
        // Applications menu already has them instead of filling in after the user is looking at it.
        androidApps.warmIcons();
        shizuku.start(appWindows::onShizukuChanged);
        camera=new PassthroughCamera(this,new PassthroughCamera.Listener() {
            @Override public void frame(android.graphics.Bitmap bitmap) {
                SpatialRenderer r=renderer;
                if(r!=null && resumed && !closed)r.camera.offer(bitmap);else bitmap.recycle();
            }
            @Override public void hands(com.nextvr.app.hands.PhoneXrHands.Frame frame) {
                SpatialRenderer r=renderer;
                if(entryVisible || android.os.SystemClock.elapsedRealtime()<vrSessionReadyAtMs) {
                    if(r!=null) r.hands=null;
                    return;
                }
                boolean inGame=gameHandMode;
                if(r!=null)r.hands=inGame?null:frame;
                // The newest frame also goes to the PhoneXR runtime, which turns it into two Oculus
                // Touch controllers. Offered unconditionally: the bridge drops it when nothing is
                // being driven, and gating it here would mean a second rule for the same decision.
                if(xrHands!=null) xrHands.offer(frame);
                // Serialize on the tracking thread. A latest-only script slot can erase DOWN or UP
                // if another camera result arrives before the main-thread WebView drain runs.
                float mx=r==null?1f:r.mappingX,my=r==null?1f:r.mappingY;
                String payload=inGame?frame.gameJson():frame.json();
                handFrames.offer(frame,"window.nextvrHands&&window.nextvrHands("+payload+","+mx+","+my+")");
                scheduleHandFrameDrain();
            }
            @Override public void sixDof(float sc, float gx, float gy, float mx) {
                long nowMs=android.os.SystemClock.elapsedRealtime();
                if(!sixDofEnabled || !sixDofWalk || entryVisible || nowMs<vrSessionReadyAtMs || Math.abs(sc)>0.10f) return;
                boolean zeroFlow=Math.abs(sc)<0.0045f;
                if(zeroFlow) {
                    if(sentZeroSixDof) return;
                    sentZeroSixDof=true;
                } else {
                    sentZeroSixDof=false;
                }
                // Sem acelerômetro não há confirmação de passo (antes `!hasWalkAccel` deixava passar).
                boolean accelMoving=hasWalkAccel && walkEnergy>0.14f && (nowMs-lastWalkStepMs)<850L;
                boolean moving=accelMoving && gyroRate<1.10f && Math.hypot(gx,gy)<=2.0f && Math.abs(sc)>=0.0045f;
                boolean worldLocked=!moving || zeroFlow;
                if(!moving && sentZeroSixDof) return;
                float adjSc=moving?sc:0f;
                main.post(()->{
                    if(closed || !resumed || shell==null || !ready || !sixDofEnabled) return;
                    shell.evaluate("window.nextvrSixDof&&window.nextvrSixDof({sc:"+adjSc+",gx:"+gx+",gy:"+gy+",mx:"+gx+",moving:"+moving+",worldLock:"+(!sixDofWalk)+",worldLocked:"+worldLocked+"})");
                });
            }
            @Override public void cameraDefocus(boolean defocused) {
                main.post(()->{
                    if(closed || !resumed || shell==null || !ready) return;
                    shell.evaluate("window.nextvrOnCameraDefocus&&window.nextvrOnCameraDefocus("+defocused+")");
                });
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
                if(internalRecorder!=null) internalRecorder.releaseGl();
                SpatialRenderer fresh=new SpatialRenderer();
                fresh.eyeRecorder=internalRecorder;
                renderer=fresh;
                main.post(()->{
                    if(closed || renderer!=fresh) return;
                    releaseWeb();
                    if(previous!=null) {
                        previous.camera.release(); previous.atlas.surface.release(); previous.environment.release();
                        for(SpatialRenderer.Texture t:previous.browsers.values()) t.surface.release();
                    }
                    ready=false;
                    shell=new WebSurface(NextVrActivity.this,fresh.atlas.surface,SpatialRenderer.ATLAS,SpatialRenderer.ATLAS,true,new Bridge(),WebSurface.SHELL_HOME);
                    // The previous GL context took every texture slot with it: the hosted apps keep
                    // running, their displays are simply re-pointed at the new surfaces.
                    if(appWindows!=null) appWindows.displays().rebindSurfaces();
                    if(xrGames!=null) xrGames.command("{\"cmd\":\"restore\"}");
                    startCamera();
                });
            }
            @Override public void onSurfaceChanged(GL10 gl,int w,int h) { nativeSetScreenParams(nativeApp,w,h); }
            @Override public void onDrawFrame(GL10 gl) { PerfLog.renderFrame(); SpatialRenderer r=renderer; if(r!=null) r.update(); nativeOnDrawFrame(nativeApp); }
        });
        entryView=WebSurface.createFullscreenEntryView(this,new Bridge());
        android.view.ViewParent parent=glView.getParent();
        if(parent instanceof android.view.ViewGroup) {
            ((android.view.ViewGroup)parent).addView(entryView,
                new android.widget.RelativeLayout.LayoutParams(
                    android.view.ViewGroup.LayoutParams.MATCH_PARENT,
                    android.view.ViewGroup.LayoutParams.MATCH_PARENT));
        }
        setEntryMenuVisible(true);
        // Não registre toque no GLSurfaceView: câmera e pose continuam ativas, mas somente os
        // resultados PhoneXR podem entrar na ponte de interação da UI espacial.
        immersive();
        if(checkSelfPermission(Manifest.permission.CAMERA)!=PackageManager.PERMISSION_GRANTED)
            requestPermissions(new String[]{Manifest.permission.CAMERA},10);
    }
    /** What the app-display driver may use from the activity. Never touches the GL thread directly. */
    private final AppDisplayController.Environment displayEnvironment=new AppDisplayController.Environment() {
        @Override public com.nextvr.app.apps.AppSurfaceHost surfaces(){ return NextVrActivity.this; }
        @Override public com.nextvr.app.apps.ShizukuManager shizuku(){ return shizuku; }
        @Override public com.nextvr.app.apps.AndroidAppManager apps(){ return androidApps; }
        @Override public int densityDpi(){ return getResources().getDisplayMetrics().densityDpi; }
        @Override public void report(String message){ NextVrActivity.this.report(message); }
        @Override public void sessionsChanged(){ pushAppState(); }
        @Override public void requestCaptureConsent(){ NextVrActivity.this.requestCaptureConsent(); }
    };
    private final AppWindowController.Environment shellEnvironment=new AppWindowController.Environment() {
        @Override public void pushState(){ pushAppState(); }
        @Override public void report(String message){ NextVrActivity.this.report(message); }
    };

    /**
     * What the PhoneXR session may use from the activity. It asks for the same two things an app
     * window does — a GL texture slot and the shell user service — plus this phone's screen, because
     * a hosted game's canvas is sized from it.
     */
    private final XrGameController.Environment xrEnvironment=new XrGameController.Environment() {
        @Override public android.content.Context context(){ return NextVrActivity.this; }
        @Override public com.nextvr.app.apps.AppSurfaceHost surfaces(){ return NextVrActivity.this; }
        @Override public com.nextvr.app.apps.IDisplayService display(){ return shizuku==null?null:shizuku.service(); }
        @Override public void report(String message){ NextVrActivity.this.report(message); }
        @Override public int[] phoneSize(){ return NextVrActivity.this.phoneSize(); }
        @Override public int density(){ return getResources().getDisplayMetrics().densityDpi; }
    };
    /** How the session talks to the shell WebView, from its own worker thread. */
    private final XrGameController.Shell xrShell=new XrGameController.Shell() {
        @Override public void evaluate(String script){ main.post(()->{ if(closed) return; WebSurface s=shell; if(s!=null&&ready) s.evaluate(script); }); }
    };

    /**
     * This phone's own screen, long side first.
     *
     * <p>Used as the canvas of a hosted game: a VR game asks the runtime for a side-by-side swapchain
     * and the runtime sizes it to the window, so this is what decides how many pixels each eye gets.
     * Measured from the real display rather than assumed, because the same code has to be right on a
     * 720p phone and on a 1440p one.
     */
    int[] phoneSize(){
        android.util.DisplayMetrics metrics=getResources().getDisplayMetrics();
        int w=metrics.widthPixels,h=metrics.heightPixels;
        // A windowed activity reports the app's own box, which on a foldable or in a split-screen
        // session is smaller than the panel. The display is the truth about how big a canvas there is.
        try {
            android.hardware.display.DisplayManager manager=
                (android.hardware.display.DisplayManager)getSystemService(DISPLAY_SERVICE);
            android.view.Display display=manager==null?null:manager.getDisplay(android.view.Display.DEFAULT_DISPLAY);
            if(display!=null){ android.graphics.Point size=new android.graphics.Point(); display.getRealSize(size);
                if(size.x>0&&size.y>0){ w=size.x; h=size.y; } }
        } catch(Throwable ignored) { }
        return new int[]{Math.max(w,h),Math.min(w,h)};
    }

    /**
     * Texture slots for app displays, created on the GL thread exactly like the browser surfaces.
     * The compositor needed no new texture type: an app display writes into the same
     * {@code SpatialRenderer.Texture} an HTML browser surface uses.
     */
    @Override public void acquire(String id,int width,int height,AppSurfaceHost.Callback callback) {
        final SpatialRenderer target=renderer;
        if(target==null || glView==null) { callback.failed("no renderer"); return; }
        final int bufferWidth=Math.max(2,width), bufferHeight=Math.max(2,height);
        glView.queueEvent(()->{
            if(renderer!=target) { main.post(()->callback.failed("renderer_restarted")); return; }
            SpatialRenderer.Texture texture=target.browsers.get(id);
            if(texture==null) { texture=new SpatialRenderer.Texture(); target.browsers.put(id,texture); }
            final SpatialRenderer.Texture slot=texture;
            try { slot.surface.setDefaultBufferSize(bufferWidth,bufferHeight); } catch(Throwable ignored) { }
            main.post(()->{ if(closed) return; callback.ready(slot.surface); });
        });
    }
    @Override public void release(String id) {
        final SpatialRenderer target=renderer;
        if(target==null || glView==null) return;
        glView.queueEvent(()->{
            SpatialRenderer.Texture texture=target.browsers.remove(id);
            if(texture!=null) texture.release();
        });
    }

    /** Sends the whole app-window state to the shell; safe from any thread. */
    void pushAppState() {
        main.post(()->{
            if(closed || appWindows==null) return;
            WebSurface target=shell;
            if(target==null || !ready || !resumed) return;
            target.evaluate("window.nextvrApps&&window.nextvrApps("+JSONObject.quote(appWindows.stateJson())+")");
        });
    }

    /** Opens the system screen-capture dialog for the phone-mirror window. */
    void requestCaptureConsent() {
        main.post(()->{
            if(closed) return;
            try {
                MediaProjectionManager manager=getSystemService(MediaProjectionManager.class);
                if(manager==null) { report("Screen capture is unavailable on this device"); return; }
                startActivityForResult(AppDisplayController.captureIntent(manager),AppDisplayController.REQUEST_PROJECTION);
            } catch(Throwable error) { report("Screen capture could not start: "+error.getMessage()); }
        });
    }

    private static int frameGestureSignature(com.nextvr.app.hands.PhoneXrHands.Frame frame) {
        if(frame==null) return 0;
        int sig=1;
        for(com.nextvr.app.hands.PhoneXrHands.Hand h:frame.getHands()) {
            int shift=h.getLeft()?8:0;
            int bits=4 | (h.getPinching()?1:0) | (h.getShape().getFist()?2:0);
            sig |= (bits << shift);
        }
        return sig;
    }
    private void scheduleHandFrameDrain() {
        if(handsPending.compareAndSet(false,true))main.post(this::drainHandFrames);
    }
    private void drainHandFrames() {
        for(;;) {
            HandFrameMailbox.Batch batch=handFrames.drain();
            int stale=0;
            int evaluated=0;
            int extraCoalesced=0;
            if(shell!=null && resumed && !closed) {
                StringBuilder scripts=new StringBuilder();
                if(batch.resetBeforeFrames())scripts.append("window.nextvrHands&&window.nextvrHands({hands:[]});");
                long nowNs=SystemClock.elapsedRealtimeNanos();
                java.util.List<HandFrameMailbox.FrameScript> list=batch.frames();
                if(gameHandMode && list.size()>1) {
                    HandFrameMailbox.FrameScript newest=list.get(list.size()-1);
                    extraCoalesced=list.size()-1;
                    evaluated=1;
                    com.nextvr.app.hands.PhoneXrHands.Frame frame=newest.frame();
                    if(frame.isFresh(nowNs)) {
                        scripts.append(newest.script()).append(';');
                        if(!frame.getHands().isEmpty())PerfLog.published(frame.getCompletedNs());
                    } else {
                        scripts.append("window.nextvrHands&&window.nextvrHands({hands:[]});");
                        stale++;
                    }
                } else {
                    for(int i=0,n=list.size();i<n;i++) {
                        HandFrameMailbox.FrameScript pending=list.get(i);
                        com.nextvr.app.hands.PhoneXrHands.Frame frame=pending.frame();
                        if(i+1<n && frameGestureSignature(frame)==frameGestureSignature(list.get(i+1).frame())) {
                            extraCoalesced++;
                            continue;
                        }
                        evaluated++;
                        if(frame.isFresh(nowNs)) {
                            scripts.append(pending.script()).append(';');
                            if(!frame.getHands().isEmpty())PerfLog.published(frame.getCompletedNs());
                        } else {
                            // A queued press that outlived its native validity must cancel, never click.
                            scripts.append("window.nextvrHands&&window.nextvrHands({hands:[]});");
                            stale++;
                        }
                    }
                }
                // One WebView evaluation guarantees the ordered frame edges run in one JS task,
                // before a later batch can overtake them on Chromium's asynchronous evaluator.
                if(scripts.length()>0)shell.evaluate(scripts.toString());
            } else {
                evaluated=batch.frames().size();
            }
            PerfLog.handDrain(evaluated,stale,batch.coalesced()+extraCoalesced);
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
            if(event.id.startsWith("app:")) {
                // Hosted Android app window: the same 60 Hz queue, routed to the input controller
                // instead of a WebView. Coordinates are normalized inside the app's display.
                if(appWindows!=null && resumed && !closed) {
                    appWindows.touch(event.id.substring(4),event.action,event.x,event.y);
                    // An Android app has no DOM to probe, so there is no honest way to tell that a
                    // tap landed on an editable field. The one signal there is: when the
                    // accessibility backend is connected and the app itself has an editor focused,
                    // the floating keyboard belongs on top of this window. Without accessibility the
                    // window's own keyboard button stays the way in — it is never faked.
                    if(event.action==MotionEvent.ACTION_UP && shell!=null && appWindows.editing(event.id.substring(4))) {
                        final WebSurface sh=shell;
                        sh.evaluate("window.nextvrAppFocus&&window.nextvrAppFocus("+JSONObject.quote(event.id)+")");
                    }
                }
                continue;
            }
            WebSurface target=event.id.equals("shell")?shell:browsers.get(event.id);
            if(target==null || !resumed || closed)continue;
            target.dispatchHandEvent(event.action,event.x,event.y);
            // O alvo do toque e quem decide o teclado. `activeElement` nao serve: depois que um
            // campo ganha foco ele continua apontando para ele, entao tocar fora reabriria o
            // teclado em um campo que o usuario nem tocou. O elemento sob o ponto tocado e a
            // verdade, e o foco e forcado porque paginas que interceptam o toque nunca o fariam.
            if(event.action==MotionEvent.ACTION_UP && target!=shell && shell!=null){
                final WebSurface sh=shell;
                target.web.evaluateJavascript(
                    "(function(){var t=document.elementFromPoint("+event.x+","+event.y+");"
                    +"var f=t&&t.closest?t.closest("+JSONObject.quote(EDITABLE_SELECTOR)+"):null;"
                    // O teclado reescreve o texto dentro da pagina; o campo precisa mesmo estar em
                    // foco, e trazer o cursor para a vista e o que o IME real faria ao abrir.
                    +"if(f)try{window.__nextvrTyping?window.__nextvrTyping.focus(f):f.focus()}catch(_){}"
                    // Devolve um BOOLEANO, e nao a string '1'/'0'. O valor de evaluateJavascript e a
                    // codificacao JSON do resultado, entao a string '1' voltaria como "\"1\"" e a
                    // comparacao com "1" nunca bateria: toda sondagem dizia "aqui nao ha campo" e o
                    // teclado FECHAVA em vez de abrir. Um booleano volta como "true"/"false".
                    +"return !!f})()",
                    value->{
                        android.util.Log.d("NextVR","typing probe "+event.id+" field="+value);
                        sh.evaluate("window.nextvrBrowserFocus&&window.nextvrBrowserFocus("
                            +JSONObject.quote(event.id)+","+("true".equals(value)?"true":"false")+")");
                    });
            }
        }
    }
    @Keep public void drawEye(float[] view,float[] projection) { SpatialRenderer r=renderer; if(r!=null) { r.draw(view,projection); camera.scaleX=r.spanX/2;camera.scaleY=r.spanY/2; } }
    @Keep public void headPose(float[] view) {
        long now=SystemClock.uptimeMillis();
        if(now-lastPose<6 || !posePending.compareAndSet(false,true)) return;
        lastPose=now;
        StringBuilder json=new StringBuilder(192); json.append('['); for(int i=0;i<16;i++) { if(i>0) json.append(','); json.append(view[i]); } json.append(']');
        main.post(()->{ try { if(shell!=null && resumed) shell.evaluate("window.nextvrPose&&window.nextvrPose("+json+")"); } finally { posePending.set(false); } });
    }
    private boolean batteryReceiverRegistered=false;
    private volatile Intent lastBatteryIntent=null;
    private final Runnable batterySyncTask=new Runnable() {
        @Override public void run() {
            if(closed || !resumed) return;
            pushBatteryState(null);
            main.postDelayed(this,5000L);
        }
    };
    private final android.content.BroadcastReceiver batteryReceiver=new android.content.BroadcastReceiver() {
        @Override public void onReceive(android.content.Context context,Intent intent) {
            if(intent!=null) lastBatteryIntent=intent;
            pushBatteryState(intent);
        }
    };
    String readBatteryJson(Intent state) {
        if(state!=null) lastBatteryIntent=state;
        if(state==null) {
            try { state=registerReceiver(null,new android.content.IntentFilter(Intent.ACTION_BATTERY_CHANGED)); }
            catch(Throwable ignored) {}
            if(state!=null) lastBatteryIntent=state;
            else state=lastBatteryIntent;
        }
        float ratio=-1f;
        int bmCap=-1;
        boolean charging=false;
        try {
            android.os.BatteryManager bm=getSystemService(android.os.BatteryManager.class);
            if(bm!=null) {
                int cap=bm.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);
                if(cap>0 && cap<=100) { bmCap=cap; ratio=cap/100f; }
                if(Build.VERSION.SDK_INT>=23) charging=bm.isCharging();
            }
        } catch(Throwable ignored) {}
        if(state!=null) {
            int level=state.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL,-1);
            int scale=state.getIntExtra(android.os.BatteryManager.EXTRA_SCALE,100);
            int status=state.getIntExtra(android.os.BatteryManager.EXTRA_STATUS,0);
            int plugged=state.getIntExtra(android.os.BatteryManager.EXTRA_PLUGGED,0);
            if(level>=0 && scale>0) {
                float intentRatio=Math.max(0f,Math.min(1f,(float)level/scale));
                if(bmCap<=0 || Math.abs(intentRatio*100f-bmCap)<=2f) ratio=intentRatio;
            }
            charging=charging || status==android.os.BatteryManager.BATTERY_STATUS_CHARGING
                || status==android.os.BatteryManager.BATTERY_STATUS_FULL || plugged!=0;
        }
        if(ratio<0f) return "null";
        int pct=Math.round(ratio*100f);
        return "{\"level\":"+ratio+",\"percent\":"+pct+",\"charging\":"+charging+"}";
    }
    void pushBatteryState(Intent intent) {
        final String json=readBatteryJson(intent);
        if("null".equals(json)) return;
        main.post(()->{
            if(closed) return;
            String js="window.nextvrBattery&&window.nextvrBattery("+json+")";
            if(shell!=null && ready) shell.evaluate(js);
            if(entryView!=null) entryView.evaluateJavascript(js,null);
        });
    }
    void shellReady() {
        ready=true;
        if(shell!=null) {
            shell.evaluate("window.nextvrResume&&window.nextvrResume()");
            shell.audio(audioFocused);
            pushBatteryState(null);
            if(!entryVisible) {
                String arg=pendingVrSettingsJson==null?"null":JSONObject.quote(pendingVrSettingsJson);
                shell.evaluate("window.nextvrEnterWorkspace&&window.nextvrEnterWorkspace("+arg+")");
                pendingVrSettingsJson=null;
            }
        }
        pushAppState();
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
    void setEntryMenuVisible(boolean visible) {
        entryVisible=visible;
        if(entryView!=null) {
            entryView.setVisibility(visible?View.VISIBLE:View.GONE);
            if(visible) {
                entryView.onResume();
                entryView.bringToFront();
                pushBatteryState(null);
            } else if(shell!=null && resumed) {
                shell.resume();
                shell.evaluate("window.nextvrResume&&window.nextvrResume()");
            }
        }
        int vrVisibility=visible?View.GONE:View.VISIBLE;
        View back=findViewById(R.id.ui_back_button_holder);
        View marker=findViewById(R.id.ui_alignment_marker);
        View settings=findViewById(R.id.ui_settings_button_holder);
        if(back!=null) back.setVisibility(vrVisibility);
        if(marker!=null) marker.setVisibility(vrVisibility);
        if(settings!=null) settings.setVisibility(vrVisibility);
    }

    @Override protected void onResume() {
        super.onResume(); resumed=true; glView.onResume(); nativeOnResume(nativeApp);
        if(entryView!=null && entryVisible) entryView.onResume();
        if(!walkSensorsRegistered) {
            try {
                if(sensorManager==null) sensorManager=getSystemService(android.hardware.SensorManager.class);
                if(sensorManager!=null) {
                    android.hardware.Sensor acc=sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_ACCELEROMETER);
                    android.hardware.Sensor lin=sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_LINEAR_ACCELERATION);
                    android.hardware.Sensor gyr=sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_GYROSCOPE);
                    if(acc!=null) sensorManager.registerListener(walkSensorListener,acc,android.hardware.SensorManager.SENSOR_DELAY_GAME);
                    if(lin!=null) sensorManager.registerListener(walkSensorListener,lin,android.hardware.SensorManager.SENSOR_DELAY_GAME);
                    if(gyr!=null) sensorManager.registerListener(walkSensorListener,gyr,android.hardware.SensorManager.SENSOR_DELAY_GAME);
                    walkSensorsRegistered=true;
                }
            } catch(Throwable ignored) {}
        }
        if(!batteryReceiverRegistered) {
            try {
                Intent sticky=registerReceiver(batteryReceiver,new android.content.IntentFilter(Intent.ACTION_BATTERY_CHANGED));
                batteryReceiverRegistered=true;
                pushBatteryState(sticky);
            } catch(Throwable ignored) {}
        }
        main.removeCallbacks(batterySyncTask);
        main.postDelayed(batterySyncTask,2500L);
        requestAudio(); if(shell!=null) { shell.resume(); shell.evaluate("window.nextvrResume&&window.nextvrResume()"); }
        for(WebSurface b:browsers.values()) b.resume(); startCamera(); immersive();
        if(appWindows!=null) appWindows.onShellResumed();
        // A hosted game keeps running across a pause: it is in its own task on its own display, and
        // the resume below re-attaches the same surface and restarts the hand feed — nothing has to
        // be rebuilt, and the game's task never leaves its display.
        if(xrGames!=null) xrGames.onActivityResumed();
        // Only the windows *this activity* suspended come back: a window the user minimized from the
        // dock stays minimized across a pause.
        for(String packageName:new ArrayList<>(pausedSessions)) appSessions.restore(packageName);
        pausedSessions.clear();
        pushAppState();
    }
    @Override protected void onPause() {
        resumed=false; camera.stop();
        if(walkSensorsRegistered && sensorManager!=null) {
            try { sensorManager.unregisterListener(walkSensorListener); } catch(Throwable ignored) {}
            walkSensorsRegistered=false;
        }
        if(batteryReceiverRegistered) {
            try { unregisterReceiver(batteryReceiver); } catch(Throwable ignored) {}
            batteryReceiverRegistered=false;
        }
        main.removeCallbacks(batterySyncTask);
        // The windows are not being composited while the VR activity is paused: detaching the
        // displays' output surfaces stops the frame traffic without killing the app or its task.
        if(appSessions!=null) for(AppSession session:appSessions.sessions())
            if(session.state==AppSession.State.RUNNING && appSessions.minimize(session.packageName))
                pausedSessions.add(session.packageName);
        // The hosted game follows the same rule as an app window: its display output detaches while
        // nothing composites it, and the hand feed stops with the camera (it has nothing new to
        // send — resume() restarts both, and the game's task never leaves its display).
        if(internalRecorder!=null && internalRecorder.isRecording()) internalRecorder.stop();
        if(xrGames!=null) xrGames.onActivityPaused();
        if(entryView!=null) entryView.onPause();
        if(shell!=null) { shell.evaluate("window.nextvrSuspend&&window.nextvrSuspend()"); shell.pause(); }
        for(WebSurface b:browsers.values()) b.pause();
        setAudioEnabled(false); audio.abandonAudioFocusRequest(focus);
        nativeOnPause(nativeApp); glView.onPause(); super.onPause();
    }
    @Override protected void onDestroy() {
        closed=true; PerfLog.setStatusListener(null); releaseWeb();
        if(entryView!=null) {
            entryView.stopLoading();
            entryView.removeJavascriptInterface("NativeXR");
            entryView.destroy();
            entryView=null;
        }
        SpatialRenderer old=renderer; renderer=null;
        camera.destroy(()->{ if(old!=null) { old.camera.release(); old.atlas.surface.release(); for(SpatialRenderer.Texture t:old.browsers.values()) t.surface.release(); } });
        if(fileCallback!=null) { fileCallback.onReceiveValue(null); fileCallback=null; }
        if(appWindows!=null) appWindows.shutdown();
        if(xrGames!=null) xrGames.shutdown();
        if(shizuku!=null) shizuku.stop();
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
        if(request==AppDisplayController.REQUEST_PROJECTION && appDisplays!=null) {
            appDisplays.onCaptureConsentResult(result,data);
            pushAppState();
        }
        if(request==20 && fileCallback!=null) {
            ArrayList<Uri> values=new ArrayList<>();
            if(result==RESULT_OK && data!=null) {
                if(data.getClipData()!=null) for(int i=0;i<data.getClipData().getItemCount();i++) values.add(data.getClipData().getItemAt(i).getUri());
                else if(data.getData()!=null) values.add(data.getData());
            }
            fileCallback.onReceiveValue(values.isEmpty()?null:values.toArray(new Uri[0])); fileCallback=null;
        }
        if(request==21 && result==RESULT_OK && data!=null && data.getData()!=null) {
            final Uri uri=data.getData();
            try {
                envLoader.execute(()->{
                    try(InputStream in=getContentResolver().openInputStream(uri)) {
                        if(in==null) return;
                        Bitmap src=BitmapFactory.decodeStream(in);
                        if(src==null) return;
                        int side=Math.min(src.getWidth(),src.getHeight());
                        int sx=(src.getWidth()-side)/2, sy=(src.getHeight()-side)/2;
                        Bitmap crop=Bitmap.createBitmap(src,sx,sy,side,side);
                        Bitmap scaled=Bitmap.createScaledBitmap(crop,160,160,true);
                        if(crop!=src && crop!=scaled) crop.recycle();
                        if(src!=scaled) src.recycle();
                        java.io.ByteArrayOutputStream out=new java.io.ByteArrayOutputStream();
                        scaled.compress(Bitmap.CompressFormat.JPEG,86,out);
                        scaled.recycle();
                        String dataUrl="data:image/jpeg;base64,"+android.util.Base64.encodeToString(out.toByteArray(),android.util.Base64.NO_WRAP);
                        String js="window.nextvrProfilePhoto&&window.nextvrProfilePhoto("+JSONObject.quote(dataUrl)+")";
                        main.post(()->{
                            if(closed) return;
                            if(entryView!=null) entryView.evaluateJavascript(js,null);
                            if(shell!=null && ready) shell.evaluate(js);
                        });
                    } catch(Exception e) { report("Não foi possível carregar a foto da galeria"); }
                });
            } catch(RejectedExecutionException ignored) {}
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
            if(scene.length()>180000 || browserSpecs.length()>20000) return;
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
            if(id==null || !(id.equals("passthrough")||id.equals("black")||id.equals("dark")||id.equals("lagoon")||id.equals("virtual")||id.equals("palm")
                    ||id.equals("sunset")||id.equals("dusk")||id.equals("night")||id.equals("space")
                    ||id.equals("cinema")||id.equals("tropical")||id.equals("lakeside"))) return;
            try { envLoader.execute(()->loadEnvironment(id)); } catch(RejectedExecutionException e) { /* app fechando */ }
        }
        private void loadEnvironment(String environment) {
            Bitmap bitmap=null;
            try {
                if(!environment.equals("passthrough") && !environment.equals("black")) {
                    try(InputStream in=getAssets().open("env/"+environment+".jpg")) { bitmap=BitmapFactory.decodeStream(in); }
                }
            } catch(Exception e) { report("Environment failed: "+e.getMessage()); return; }
            SpatialRenderer target=renderer;
            if(target!=null && !closed) target.setEnvironment(environment,bitmap);
            else if(bitmap!=null) bitmap.recycle();
        }
        @JavascriptInterface public void hands(boolean enabled) { if(!closed)camera.enableHands(enabled); }
        @JavascriptInterface public void handVisuals(boolean enabled) { SpatialRenderer r=renderer;if(r!=null)r.showHands=enabled; }
        @JavascriptInterface public void setGameHandMode(boolean enabled) {
            gameHandMode=enabled;
            if(!closed && camera!=null) {
                camera.gameHandMode=enabled;
                camera.mrGameMode=false;
            }
            SpatialRenderer r=renderer;
            if(r!=null) {
                r.handRenderer.gameHandMode=enabled;
                r.handRenderer.mrGameMode=false;
                if(enabled) r.hands=null;
            }
        }
        @JavascriptInterface public void setMrGameMode(boolean enabled) {
            gameHandMode=enabled;
            if(!closed && camera!=null) {
                camera.gameHandMode=enabled;
                camera.mrGameMode=enabled;
            }
            SpatialRenderer r=renderer;
            if(r!=null) {
                r.handRenderer.gameHandMode=enabled;
                r.handRenderer.mrGameMode=enabled;
                if(enabled) r.hands=null;
            }
        }
        @JavascriptInterface public void wideCamera(boolean enabled) {
            SpatialRenderer r=renderer;if(r!=null)r.wideCamera=enabled;
            if(!closed && camera!=null)camera.setWideCamera(enabled);
        }
        @JavascriptInterface public void handTargets(String targets) { SpatialRenderer r=renderer;if(r!=null && targets.length()<32000)r.handTargets=targets; }
        @JavascriptInterface public void click() { if(gameHandMode) return; main.post(()->{ if(!resumed || gameHandMode) return; if(!audioFocused) requestAudio(); if(soundReady && audioFocused) sounds.play(clickSound,.25f,.25f,1,0,1); }); }
        /** Chamado apenas pelo adaptador PhoneXR do shell privilegiado; não há ponte de touchscreen. */
        @JavascriptInterface public void handTouch(String id,int action,float x,float y) {
            if(action!=MotionEvent.ACTION_DOWN && action!=MotionEvent.ACTION_UP && action!=MotionEvent.ACTION_MOVE && action!=MotionEvent.ACTION_CANCEL) return;
            // "app:<package>" is a hosted Android app window: x/y are normalized (0..1) inside the
            // app's display. A browser/native HTML surface keeps its pixel coordinates.
            boolean app=id!=null && id.startsWith("app:") && id.length()<=100 && id.substring(4).matches("[A-Za-z0-9._]{1,80}");
            if(id==null || (!app && !id.equals("shell") && !id.matches("[a-zA-Z0-9_-]{1,64}")) || !Float.isFinite(x)||!Float.isFinite(y)) return;
            handTouchEvents.offer(id,action,x,y);
            scheduleHandTouchDrain();
        }
        /**
         * One key from the floating keyboard. `key` is a character (space included), ⌫ or ⏎; `shift`
         * says whether it is the capitalised stroke of the same key; `phase` is the key state:
         * 0 is a whole key (down then up, what a tap gives), 1 is the key going down, 2 a held
         * repeat ({@code KeyboardEvent.repeat}, what a 3D game in a browser listens to to keep
         * moving) and 3 the key coming up. Only the up stops the movement, so a held WASD has to
         * arrive as one down, many repeats and one up — not as a tap per character.
         *
         * <p>A hosted browser page is written by {@code web/src/typing.js}, the very engine the shell
         * loads for its own fields, installed in the page at document start. The previous route —
         * a hand-made {@code EditorInfo} plus {@code InputConnection.commitText} — was dead on
         * arrival: this WebView lives in a Presentation on a private virtual display and never has
         * view focus, and Chromium drops text committed on an unfocused input connection, so keys
         * arrived nowhere.
         */
        @JavascriptInterface public void key(String id,String key,boolean shift,int phase) {
            if(id==null || key==null || key.isEmpty() || key.length()>16) return;
            if(phase<0||phase>3) return;
            if(id.startsWith("app:")) {
                final String packageName=id.substring(4);
                final String typed=key;
                // An Android app window keeps its own semantics: the accessibility backend can only
                // set text, and the privileged one injects a complete key each time. A held key
                // there repeats the character, it does not hold it.
                if(phase==KEY_PHASE_UP) return;
                main.post(()->{ if(appWindows!=null && !closed) appWindows.text(packageName,typed); });
                return;
            }
            main.post(()->{
                WebSurface b=browsers.get(id); if(b==null) return;
                b.evaluate("window.__nextvrTyping&&window.__nextvrTyping.key("
                    +JSONObject.quote(key)+","+(shift?"true":"false")+","+phase+")");
            });
        }
        /** Installed Android apps for the library grid, filtered and ranked, as JSON. */
        @JavascriptInterface public String appsLibrary(String query,boolean showSystem) {
            if(appWindows==null) return "{\"apps\":[]}";
            try { return appWindows.libraryJson(query,showSystem); }
            catch(Throwable error) { return "{\"apps\":[]}"; }
        }
        /**
         * One command from the shell: open/close/minimize/restore/focus an app window, sync the
         * window geometry back, request the Shizuku permission or refresh the app list. It runs on
         * the main thread because it creates windows, sessions and (for the phone mirror) an
         * Activity result.
         */
        @JavascriptInterface public void appsCommand(String json) {
            if(json==null || json.length()>8000) return;
            main.post(()->{ if(appWindows!=null && !closed) appWindows.command(json); });
        }
        /** Navigate the Quest browser's existing WebSurface, retaining its history and focus. */
        @JavascriptInterface public void browserCmd(String id,String cmd,String url) {
            if(id==null || !id.matches("[a-zA-Z0-9_-]{1,64}") || cmd==null) return;
            if("go".equals(cmd) && (url==null || !WebSurface.isWebUrl(url))) return;
            main.post(()->{
                WebSurface b=browsers.get(id); if(b==null || closed) return;
                switch(cmd) {
                    case "go": b.go(url); break;
                    case "back": b.goBack(); break;
                    case "fwd": b.goForward(); break;
                    case "reload": b.reload(); break;
                    default: break;
                }
            });
        }
        @JavascriptInterface public int volume() {
            return audio==null ? 65 : Math.round(audio.getStreamVolume(AudioManager.STREAM_MUSIC)*100f
                / Math.max(1,audio.getStreamMaxVolume(AudioManager.STREAM_MUSIC)));
        }
        @JavascriptInterface public void setVolume(int level) {
            if(audio==null) return;
            int max=audio.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
            audio.setStreamVolume(AudioManager.STREAM_MUSIC,Math.round(Math.max(0,Math.min(100,level))*max/100f),0);
        }
        @JavascriptInterface public int brightness() { return appBrightness; }
        @JavascriptInterface public void setBrightness(int level) {
            appBrightness=Math.max(10,Math.min(100,level));
            main.post(()->{ if(closed) return; WindowManager.LayoutParams attrs=getWindow().getAttributes();
                attrs.screenBrightness=appBrightness/100f; getWindow().setAttributes(attrs); });
        }
        @JavascriptInterface public void audioEnabled(boolean enabled) {
            main.post(()->{ if(closed) return; if(enabled && resumed) requestAudio(); else setAudioEnabled(false); });
        }
        @JavascriptInterface public void systemPanel(String panel) {
            main.post(()->{
                if(closed) return;
                Intent intent;
                if("bluetooth".equals(panel)) intent=new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
                else intent=new Intent(Build.VERSION.SDK_INT>=29
                    ? Settings.Panel.ACTION_INTERNET_CONNECTIVITY : Settings.ACTION_WIFI_SETTINGS);
                try { startActivity(intent); }
                catch(Exception unavailable) {
                    try { startActivity(new Intent("bluetooth".equals(panel)
                        ? Settings.ACTION_BLUETOOTH_SETTINGS : Settings.ACTION_WIFI_SETTINGS)); }
                    catch(Exception ignored) { Toast.makeText(NextVrActivity.this,"Não foi possível abrir os controles do Android",Toast.LENGTH_SHORT).show(); }
                }
            });
        }
        @JavascriptInterface public String battery() {
            return readBatteryJson(null);
        }
        /** Current Android media-stream volume, normalized for the Quick Settings slider. */
        @JavascriptInterface public int mediaVolumePercent() {
            if(audio==null) return 50;
            int max=Math.max(1,audio.getStreamMaxVolume(AudioManager.STREAM_MUSIC));
            return Math.round(audio.getStreamVolume(AudioManager.STREAM_MUSIC)*100f/max);
        }
        @JavascriptInterface public void setMediaVolumePercent(int percent) {
            final int value=Math.max(0,Math.min(100,percent));
            main.post(()->{
                if(audio==null || closed) return;
                int max=Math.max(1,audio.getStreamMaxVolume(AudioManager.STREAM_MUSIC));
                audio.setStreamVolume(AudioManager.STREAM_MUSIC,Math.round(value*max/100f),0);
            });
        }
        /** Current window brightness (or the phone's system level while automatic brightness is active). */
        @JavascriptInterface public int brightnessPercent() {
            float value=getWindow().getAttributes().screenBrightness;
            if(value<0f) {
                try { value=Settings.System.getInt(getContentResolver(),Settings.System.SCREEN_BRIGHTNESS)/255f; }
                catch(Settings.SettingNotFoundException ignored) { value=.5f; }
            }
            return Math.max(0,Math.min(100,Math.round(value*100f)));
        }
        /** Sets this Activity's brightness only; Android restores the system setting when the window closes. */
        @JavascriptInterface public void setBrightnessPercent(int percent) {
            final float value=Math.max(.03f,Math.min(1f,Math.max(0,Math.min(100,percent))/100f));
            main.post(()->{
                if(closed) return;
                WindowManager.LayoutParams attributes=getWindow().getAttributes();
                attributes.screenBrightness=value;
                getWindow().setAttributes(attributes);
            });
        }
        /**
         * One PhoneXR command from the shell: open/close/minimize/restore a hosted game, install the
         * runtime, refresh the game list, or run the on-device self test. Posted to the controller's
         * own worker, because reading a game manifest opens its APK and installing a runtime waits on
         * {@code pm}; neither may happen on this thread.
         */
        @JavascriptInterface public void xrCommand(String json) {
            if(json==null || json.length()>8000) return;
            main.post(()->{ if(xrGames!=null && !closed) xrGames.command(json); });
        }
        /**
         * The installed headset games, as JSON. Slow — it opens every candidate APK — so the shell
         * asks for it once, off the frame path, and caches it until the user refreshes.
         */
        @JavascriptInterface public String xrLibrary() {
            if(xrGames==null) return "{\"games\":[]}";
            return xrGames.libraryJson();
        }
        /** The runtime state and the current session, as JSON. Cheap; safe to poll. */
        @JavascriptInterface public String xrState() {
            return xrGames==null?"{}":xrGames.stateJson();
        }
        /**
         * Which gestures are buttons in a game. {@code controllers} makes a pinch the trigger and a
         * fist the grip; {@code hands} moves the hand with the fingers and presses nothing.
         */
        @JavascriptInterface public void xrHandMode(String mode) {
            XrHandBridge.Mode chosen="hands".equals(mode)?XrHandBridge.Mode.HANDS:XrHandBridge.Mode.CONTROLLERS;
            main.post(()->{ if(xrGames!=null && !closed) xrGames.handMode(chosen); });
        }
        @JavascriptInterface public void setQuality(String quality) {
            SpatialRenderer target=renderer;
            if(target!=null) target.setQuality(quality);
        }
        @JavascriptInterface public void refocusCamera() {
            PassthroughCamera cam=camera;
            if(cam!=null) cam.triggerAutoFocus();
        }
        @JavascriptInterface public void setFingerTouch(boolean enabled) {
            SpatialRenderer target=renderer;
            if(target!=null) target.handRenderer.setShowPointer(!enabled);
        }
        @JavascriptInterface public void setMrDim(boolean enabled) {
            SpatialRenderer target=renderer;
            if(target!=null) target.mrDim=enabled;
        }
        @JavascriptInterface public void setBwCamera(boolean enabled) {
            SpatialRenderer target=renderer;
            if(target!=null) target.bwCamera=enabled;
        }
        @JavascriptInterface public void setSingleHandMode(String mode) {
            PassthroughCamera cam=camera;
            if(cam!=null) cam.setSingleHandMode(mode);
        }
        @JavascriptInterface public boolean startInternalRecording() {
            return internalRecorder!=null && internalRecorder.start();
        }
        @JavascriptInterface public void stopInternalRecording() {
            if(internalRecorder!=null) internalRecorder.stop();
        }
        @JavascriptInterface public boolean toggleInternalRecording() {
            return internalRecorder!=null && internalRecorder.toggle();
        }
        @JavascriptInterface public boolean isInternalRecording() {
            return internalRecorder!=null && internalRecorder.isRecording();
        }
        @JavascriptInterface public int internalRecordingSeconds() {
            return internalRecorder==null?0:internalRecorder.elapsedSeconds();
        }
        @JavascriptInterface public void sixDofOffset(float x, float y, float z) {
            SpatialRenderer target=renderer;
            if(target!=null && Float.isFinite(x) && Float.isFinite(y) && Float.isFinite(z)) {
                float cx=Math.max(-2.6f, Math.min(2.6f, x));
                float cz=Math.max(-2.6f, Math.min(2.6f, z));
                target.targetSixDofX=cx;
                target.targetSixDofZ=cz;
                if(target.sixDofX==0f && target.sixDofZ==0f) {
                    target.sixDofX=cx*0.85f;
                    target.sixDofZ=cz*0.85f;
                }
                target.sixDofY=0f;
            }
        }
        @JavascriptInterface public void setSixDofEnabled(boolean enabled) {
            sixDofEnabled=enabled;
            if(!enabled) {
                resetSixDof();
            }
        }
        /**
         * World Lock: com o mundo travado o renderer não recebe nenhuma translação do 6DoF — é o
         * que impede o desenho (e as janelas) de ir para a frente ou para os lados do nada.
         */
        @JavascriptInterface public void setWorldLock(boolean locked) {
            sixDofWalk=!locked;
            if(locked) resetSixDof();
        }
        @JavascriptInterface public void resetSixDof() {
            SpatialRenderer target=renderer;
            if(target!=null) {
                target.targetSixDofX=0f;
                target.targetSixDofZ=0f;
                target.sixDofX=0f;
                target.sixDofY=0f;
                target.sixDofZ=0f;
                target.worldLocked=true;
            }
            if(camera!=null) camera.resetSixDof();
        }
        @JavascriptInterface public void startVrSession(String settingsJson) {
            main.post(()->{
                if(closed) return;
                synchronized(Bridge.this) { cachedScene=null; cachedSpecs=null; }
                pendingVrSettingsJson=settingsJson;
                vrSessionReadyAtMs=android.os.SystemClock.elapsedRealtime()+650L;
                handFrames.requestReset();
                handFrames.drain();
                if(camera!=null) camera.resetHandsState();
                setEntryMenuVisible(false);
                SpatialRenderer target=renderer;
                if(target!=null) {
                    target.hands=null;
                    target.handRenderer.resetPresentation();
                    boolean customEnv=false;
                    if(settingsJson!=null) {
                        try {
                            JSONObject o=new JSONObject(settingsJson);
                            boolean spatial=o.optBoolean("spatialLauncher",false) || o.optInt("spatialLauncher",0)==1;
                            customEnv=!spatial && o.optBoolean("entryEnvChosen",false) && !"passthrough".equals(o.optString("env","passthrough"));
                            boolean wide=o.optBoolean("wideCamera",false) || o.optInt("wideCamera",0)==1;
                            target.wideCamera=wide;
                            if(camera!=null)camera.setWideCamera(wide);
                            if(o.has("quality")) target.setQuality(o.optString("quality","auto"));
                            if(o.has("handDraw")) {
                                boolean hd=o.optBoolean("handDraw",false) || o.optInt("handDraw",1)!=0;
                                target.showHands=hd;
                            }
                            if(o.has("fingerTouch")) {
                                boolean ft=o.optBoolean("fingerTouch",false) || o.optInt("fingerTouch",1)!=0;
                                target.handRenderer.setShowPointer(!ft);
                            }
                            if(o.has("mrDim")) {
                                target.mrDim=o.optBoolean("mrDim",false) || o.optInt("mrDim",0)!=0;
                            }
                            if(o.has("bwCamera")) {
                                target.bwCamera=o.optBoolean("bwCamera",true) || o.optInt("bwCamera",1)!=0;
                            } else {
                                target.bwCamera=true;
                            }
                            if(o.has("sixdof")) {
                                sixDofEnabled=o.optBoolean("sixdof",true) || o.optInt("sixdof",1)!=0;
                                if(!sixDofEnabled) resetSixDof();
                            }
                            sixDofWalk=!(o.optBoolean("worldLock",true) || o.optInt("worldLock",1)!=0);
                            if(!sixDofWalk) resetSixDof();
                            if(o.has("singleHandMode") && camera!=null) {
                                camera.setSingleHandMode(o.optString("singleHandMode","both"));
                            }
                        } catch(Exception ignored) {}
                    }
                    if(!customEnv) target.setEnvironment("passthrough",null);
                }
                if(shell!=null && ready) {
                    String arg=pendingVrSettingsJson==null?"null":JSONObject.quote(pendingVrSettingsJson);
                    shell.evaluate("window.nextvrEnterWorkspace&&window.nextvrEnterWorkspace("+arg+")");
                    pendingVrSettingsJson=null;
                }
                startCamera();
                immersive();
            });
        }
        @JavascriptInterface public void openEntryMenu() {
            main.post(()->{
                if(closed) return;
                handFrames.requestReset();
                handFrames.drain();
                if(camera!=null) camera.resetHandsState();
                SpatialRenderer target=renderer;
                if(target!=null) {
                    target.hands=null;
                    target.handRenderer.resetPresentation();
                }
                setEntryMenuVisible(true);
                immersive();
            });
        }
        @JavascriptInterface public void pickProfilePhoto() {
            main.post(()->{
                if(closed) return;
                try {
                    Intent pick=new Intent(Intent.ACTION_PICK,android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
                    pick.setType("image/*");
                    startActivityForResult(pick,21);
                } catch(Exception first) {
                    try {
                        Intent doc=new Intent(Intent.ACTION_GET_CONTENT).addCategory(Intent.CATEGORY_OPENABLE).setType("image/*");
                        startActivityForResult(doc,21);
                    } catch(Exception second) {
                        report("Galeria não encontrada neste aparelho");
                    }
                }
            });
        }
    }
    public void closeSample(View v) {
        if(!entryVisible && entryView!=null) { setEntryMenuVisible(true); return; }
        finish();
    }
    @Override public void onBackPressed() {
        if(!entryVisible && entryView!=null) { setEntryMenuVisible(true); return; }
        super.onBackPressed();
    }
    public void showSettings(View v) { PopupMenu menu=new PopupMenu(this,v); menu.getMenuInflater().inflate(R.menu.settings_menu,menu.getMenu()); menu.setOnMenuItemClickListener(this); menu.show(); }
    @Override public boolean onMenuItemClick(MenuItem item) {
        if(item.getItemId()==R.id.switch_viewer) { camera.stop(); nativeSwitchViewer(nativeApp); return true; }
        if(item.getItemId()==R.id.about_nextvr) { new AlertDialog.Builder(this).setTitle("NextVR").setMessage("Camera passthrough · Cardboard 3 DoF · Spatial HTML\nHand tracking is the only spatial UI input. Use seated. Monoscopic camera video is not depth-correct and is not safe for walking.").setPositiveButton(android.R.string.ok,null).show(); return true; }
        return false;
    }
    private static boolean isGamepadSource(int source) {
        return (source & InputDevice.SOURCE_GAMEPAD) == InputDevice.SOURCE_GAMEPAD
            || (source & InputDevice.SOURCE_JOYSTICK) == InputDevice.SOURCE_JOYSTICK
            || (source & InputDevice.SOURCE_DPAD) == InputDevice.SOURCE_DPAD;
    }

    /** Android's input dispatcher delivers Joy-Con buttons as gamepad keys, not touch events. */
    @Override public boolean dispatchKeyEvent(KeyEvent event) {
        int code = event.getKeyCode();
        boolean gamepad = isGamepadSource(event.getSource());
        String action = null;
        if (code == KeyEvent.KEYCODE_BUTTON_START || code == KeyEvent.KEYCODE_PLUS || code == KeyEvent.KEYCODE_EQUALS || code == KeyEvent.KEYCODE_NUMPAD_ADD) {
            action = "plus";
        } else if (code == KeyEvent.KEYCODE_BUTTON_SELECT || code == KeyEvent.KEYCODE_MINUS) {
            action = "minus";
        } else if (code == KeyEvent.KEYCODE_BUTTON_MODE || code == KeyEvent.KEYCODE_HOME) {
            action = "home";
        } else if (gamepad) {
            switch (code) {
                case KeyEvent.KEYCODE_DPAD_LEFT: action = "left"; break;
                case KeyEvent.KEYCODE_DPAD_RIGHT: action = "right"; break;
                case KeyEvent.KEYCODE_DPAD_UP: action = "up"; break;
                case KeyEvent.KEYCODE_DPAD_DOWN: action = "down"; break;
                case KeyEvent.KEYCODE_BUTTON_A: action = "accept"; break;
                case KeyEvent.KEYCODE_BUTTON_B: action = "back"; break;
                case KeyEvent.KEYCODE_BUTTON_X: action = "x"; break;
                case KeyEvent.KEYCODE_BUTTON_Y: action = "y"; break;
                case KeyEvent.KEYCODE_BUTTON_L1:
                case KeyEvent.KEYCODE_BUTTON_THUMBL: action = "l1"; break;
                case KeyEvent.KEYCODE_BUTTON_R1:
                case KeyEvent.KEYCODE_BUTTON_THUMBR: action = "r1"; break;
                case KeyEvent.KEYCODE_BUTTON_L2: action = "l2"; break;
                case KeyEvent.KEYCODE_BUTTON_R2: action = "r2"; break;
                default: break;
            }
        }
        if (action != null && (gamepad || code == KeyEvent.KEYCODE_HOME || "plus".equals(action) || "minus".equals(action))) {
            final String command = action;
            final boolean down = event.getAction() == KeyEvent.ACTION_DOWN;
            final int repeat = event.getRepeatCount();
            main.post(() -> {
                if (entryVisible && entryView != null && resumed) {
                    entryView.evaluateJavascript("window.__nextvrJoyconKey&&window.__nextvrJoyconKey("
                        + JSONObject.quote(command) + "," + down + "," + repeat + ")", null);
                    return;
                }
                WebSurface surface = shell;
                if (surface != null && ready && resumed)
                    surface.evaluate("window.__nextvrJoyconKey&&window.__nextvrJoyconKey("
                        + JSONObject.quote(command) + "," + down + "," + repeat + ")");
            });
            return true;
        }
        return super.dispatchKeyEvent(event);
    }

    /** Left/right stick and hat-switch report events arrive as generic joystick motion. */
    @Override public boolean dispatchGenericMotionEvent(MotionEvent event) {
        if (event.getAction() == MotionEvent.ACTION_MOVE && isGamepadSource(event.getSource())) {
            float x = event.getAxisValue(MotionEvent.AXIS_X);
            float y = event.getAxisValue(MotionEvent.AXIS_Y);
            float hatX = event.getAxisValue(MotionEvent.AXIS_HAT_X);
            float hatY = event.getAxisValue(MotionEvent.AXIS_HAT_Y);
            if (Math.abs(hatX) > Math.abs(x)) x = hatX;
            if (Math.abs(hatY) > Math.abs(y)) y = hatY;
            float rx = event.getAxisValue(MotionEvent.AXIS_Z);
            float ry = event.getAxisValue(MotionEvent.AXIS_RZ);
            if (Math.abs(rx) < 0.05f) rx = event.getAxisValue(MotionEvent.AXIS_RX);
            if (Math.abs(ry) < 0.05f) ry = event.getAxisValue(MotionEvent.AXIS_RY);
            float lTrig = Math.max(event.getAxisValue(MotionEvent.AXIS_LTRIGGER), event.getAxisValue(MotionEvent.AXIS_BRAKE));
            float rTrig = Math.max(event.getAxisValue(MotionEvent.AXIS_RTRIGGER), event.getAxisValue(MotionEvent.AXIS_GAS));
            final float stickX = Math.max(-1f, Math.min(1f, x));
            final float stickY = Math.max(-1f, Math.min(1f, y));
            final float rightX = Math.max(-1f, Math.min(1f, rx));
            final float rightY = Math.max(-1f, Math.min(1f, ry));
            final float lt = Math.max(0f, Math.min(1f, lTrig));
            final float rt = Math.max(0f, Math.min(1f, rTrig));
            main.post(() -> {
                if (entryVisible && entryView != null && resumed) {
                    entryView.evaluateJavascript("window.__nextvrJoyconAxes&&window.__nextvrJoyconAxes("
                        + stickX + "," + stickY + "," + rightX + "," + rightY + "," + lt + "," + rt + ")", null);
                    return;
                }
                WebSurface surface = shell;
                if (surface != null && ready && resumed)
                    surface.evaluate("window.__nextvrJoyconAxes&&window.__nextvrJoyconAxes("
                        + stickX + "," + stickY + "," + rightX + "," + rightY + "," + lt + "," + rt + ")");
            });
            return true;
        }
        return super.dispatchGenericMotionEvent(event);
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
