package com.nextvr.app;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.*;
import android.hardware.camera2.*;
import android.hardware.camera2.params.StreamConfigurationMap;
import android.media.Image;
import android.media.ImageReader;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.SystemClock;
import android.util.Size;
import com.nextvr.app.hands.PhoneXrHands;
import com.nextvr.handtrack.HandTracker;
import com.nextvr.handtrack.RetryableInferenceException;
import java.nio.ByteBuffer;
import java.util.Collections;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicBoolean;

/** PhoneXR's upright-bitmap pipeline with Camera2 ownership and bounded latest-frame queues.
 * One frame is oriented ONCE, then used for both the GL camera texture and OrangeHanding.
 * No OES camera preview / SurfaceTexture matrix / second shader rotation can flip it again.
 *
 * Hand tracking hand-off: every camera callback publishes its newest analysis frame into a
 * one-slot [LatestFrameSlot]; the tracking thread drains the slot as soon as it is free. The
 * tracker is therefore never throttled to the camera callback cadence (see LatestFrameSlot).
 */
final class PassthroughCamera {
    interface Listener {
        /** Ownership of this upright bitmap transfers to the renderer. */
        void frame(Bitmap upright);
        void hands(PhoneXrHands.Frame frame);
        default void sixDof(float sc, float gx, float gy, float mx) {}
        default void cameraDefocus(boolean defocused) {}
        void error(String message);
        void stopped();
    }
    /**
     * GPU landmarkers this process may build. Zero: the GPU delegate was measured at 500 ms per
     * frame on this device (PR #29), against 85-100 ms for the CPU delegate, so it is not a
     * fallback worth spending a frame on. The watchdog that judges a delegate (DelegateWatch) and
     * the CPU fallback path stay in place for when that measurement changes.
     */
    private static final int MAX_GPU_ATTEMPTS=0;
    /** A scaled analysis frame waiting for, or being processed by, hand tracking. */
    private static final class TrackingFrame {
        final Bitmap bitmap;
        final long stamp;       // camera timestamp in ms: MediaPipe and One Euro time base
        final long captureNs;   // sensor capture on the elapsedRealtime clock, or -1 if not comparable
        final long acquiredNs;  // when the callback took the frame from the camera
        final int token;        // camera generation the frame belongs to
        final float scaleX, scaleY;
        TrackingFrame(Bitmap bitmap,long stamp,long captureNs,long acquiredNs,int token,float scaleX,float scaleY) {
            this.bitmap=bitmap;this.stamp=stamp;this.captureNs=captureNs;this.acquiredNs=acquiredNs;
            this.token=token;this.scaleX=scaleX;this.scaleY=scaleY;
        }
        void release() { if(bitmap!=null && !bitmap.isRecycled())bitmap.recycle(); }
    }
    private final Context context;
    private final Listener listener;
    private final HandlerThread thread=new HandlerThread("NextVR Camera2");
    private final Handler handler;
    private final ExecutorService tracking=Executors.newSingleThreadExecutor(r-> {
        Thread t=new Thread(()->{
            try { android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_URGENT_DISPLAY); }
            catch(Throwable ignored) {}
            r.run();
        },"PhoneXR OrangeHanding");
        // The tracking thread owns the MediaPipe inference; keep it above the UI/GC threads so a
        // WebView reflow does not steal the core the landmarker is running on.
        t.setPriority(Thread.MAX_PRIORITY);
        return t;
    });
    /** Newest frame not yet taken by the tracker. Replaced, never queued. */
    private final LatestFrameSlot<TrackingFrame> slot=new LatestFrameSlot<>();
    /** True while a drain task is queued or running on the tracking thread. */
    private final AtomicBoolean scheduled=new AtomicBoolean();
    private final TrackingBudget budget=new TrackingBudget();
    /** Skips analysis copies that would supersede an unread, still-fresh pending frame. */
    private final AnalysisGate analysisGate=new AnalysisGate(AnalysisGate.DEFAULT_MAX_PENDING_AGE_MS);
    /** Judges the GPU delegate on measured inference cost, not on whether it threw (see DelegateWatch). */
    private final DelegateWatch delegateWatch=new DelegateWatch();
    /** Tolerates a failed camera frame instead of tearing the camera down on the first one. */
    private final TrackingFailureGuard frameFailures=new TrackingFailureGuard();
    /** Tolerates a failed inference instead of ending hand tracking for the whole session. */
    private final TrackingFailureGuard trackFailures=new TrackingFailureGuard();
    private int[] cameraPixels;
    private int[] analysisPixels;
    private final PhoneXrHands hands=new PhoneXrHands();
    private final FakeSixDof fakeSixDof=new FakeSixDof();
    private volatile PhoneXrHands.Frame latestHandsFrame;
    private CameraDevice camera;
    private CameraCaptureSession session;
    private CaptureRequest.Builder activeRequestBuilder;
    private volatile long lastAfTriggerMs = 0L;
    private volatile boolean cameraCurrentlyDefocused = false;
    private final CameraCaptureSession.CaptureCallback afCallback = new CameraCaptureSession.CaptureCallback() {
        @Override public void onCaptureCompleted(CameraCaptureSession s, CaptureRequest req, android.hardware.camera2.TotalCaptureResult result) {
            // Automatic focus hunting & defocus solo-camera trigger disabled per user request.
        }
    };
    private ImageReader reader;
    private boolean gpuDetector;
    /**
     * Whether the next detector should be created on the GPU delegate. Cleared when the GPU is
     * dropped for measured slowness or for producing no output, and re-armed once by a reopened
     * camera: a GPU abandoned while the WebView was still rasterizing the boot page is not the same
     * GPU as the one that runs a steady session, and [MAX_GPU_ATTEMPTS] bounds the re-tries.
     */
    private volatile boolean preferGpu=true;
    /** GPU landmarkers built in this process, so "try the GPU again" can never become a loop. */
    private int gpuAttempts;
    /** Landmarker graphs the current detector has built; a change re-arms the delegate's warm-up. */
    private int seenGraphs;
    private boolean timestampIsRealtime;
    private HandTracker detector; // Created, used and closed on the SAME thread (GPU delegate).
    private volatile int generation;
    private int rotation;
    private int activeDisplayRotation=-1;
    private boolean opening;
    private boolean closing;
    private boolean pendingOpen;
    private int pendingDisplayRotation;
    private int openRetries;
    private int sessionFrames;
    private volatile boolean destroyed;
    volatile boolean handsEnabled=true;
    volatile boolean gameHandMode=false;
    volatile boolean mrGameMode=false;
    volatile boolean wideCamera=false;
    /** Camera noturna (Build 89): +EV e reducao de ruido de alta qualidade quando escurece. */
    volatile boolean nightMode=false;
    /** Luminosidade media do ultimo quadro medido (0..1), ou -1 enquanto nao houver leitura. */
    private volatile float lastLuma=-1f;
    private volatile android.util.Range<Integer> aeCompensationRange;
    volatile String singleHandMode="both";
    volatile float scaleX=1.1f,scaleY=.73f;

    void setSingleHandMode(String mode) {
        String normalized = (mode != null && (mode.equals("right") || mode.equals("left") || mode.equals("one"))) ? mode : "both";
        singleHandMode = normalized;
        hands.singleHandMode = normalized;
        HandTracker det = detector;
        if (det != null) {
            det.singleHandOnly = !"both".equals(normalized);
        }
    }

    PassthroughCamera(Context context,Listener listener) {
        this.context=context;this.listener=listener;thread.start();
        // Give the camera callback thread (and the GL passthrough hand-off that follows it) top
        // priority: competing with the WebView's rasterizer for the same frames is what stalls it
        // before inference even begins. This is the cheapest latency win available here.
        thread.setPriority(Thread.MAX_PRIORITY);
        handler=new Handler(thread.getLooper());
        handler.post(()->{
            try { android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_URGENT_DISPLAY); }
            catch(Throwable ignored) {}
        });
    }
    void triggerAutoFocus() {
        handler.post(()->{
            if(destroyed || session==null || activeRequestBuilder==null) return;
            try {
                activeRequestBuilder.set(CaptureRequest.CONTROL_AF_MODE,CaptureRequest.CONTROL_AF_MODE_AUTO);
                activeRequestBuilder.set(CaptureRequest.CONTROL_AF_TRIGGER,CaptureRequest.CONTROL_AF_TRIGGER_START);
                session.capture(activeRequestBuilder.build(),afCallback,handler);
                activeRequestBuilder.set(CaptureRequest.CONTROL_AF_TRIGGER,CaptureRequest.CONTROL_AF_TRIGGER_IDLE);
                activeRequestBuilder.set(CaptureRequest.CONTROL_AF_MODE,CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_VIDEO);
                session.setRepeatingRequest(activeRequestBuilder.build(),afCallback,handler);
            } catch(Throwable ignored) {}
        });
    }
    void setWideCamera(boolean enabled) {
        if(wideCamera==enabled) return;
        wideCamera=enabled;
        handler.post(()->{
            if(destroyed || activeDisplayRotation<0) return;
            int rot=activeDisplayRotation;
            activeDisplayRotation=-1;
            open(rot);
        });
    }
    private static double horizontalFovScore(CameraCharacteristics c) {
        android.util.SizeF sensor=c.get(CameraCharacteristics.SENSOR_INFO_PHYSICAL_SIZE);
        float[] focals=c.get(CameraCharacteristics.LENS_INFO_AVAILABLE_FOCAL_LENGTHS);
        if(sensor!=null && focals!=null && focals.length>0 && focals[0]>0f) {
            return sensor.getWidth()/focals[0];
        }
        if(focals!=null && focals.length>0 && focals[0]>0f) {
            return 1.0/focals[0];
        }
        return 0.0;
    }
    void resetSixDof() { fakeSixDof.reset(); }

    /**
     * Camera noturna (Build 89). Duas coisas reais, nao um filtro:
     *  - exposicao: +EV no maximo que o sensor aceita (a cena escura clareia de verdade);
     *  - ruido: NOISE_REDUCTION_MODE_HIGH_QUALITY no escuro (troca latencia por menos granulado) e
     *    FAST de novo quando ha' luz.
     * Quem decide e' o shell (web/src/night-camera.js), que compara `luma()` com dois limiares.
     */
    void setNightMode(boolean enabled) {
        if(nightMode==enabled) return;
        nightMode=enabled;
        handler.post(()->{
            if(destroyed || session==null || activeRequestBuilder==null) return;
            try {
                android.util.Range<Integer> range=aeCompensationRange;
                if(range!=null) {
                    int ev=enabled ? range.getUpper() : Math.min(0,range.getUpper());
                    activeRequestBuilder.set(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION,ev);
                }
                activeRequestBuilder.set(CaptureRequest.NOISE_REDUCTION_MODE,
                    enabled ? CaptureRequest.NOISE_REDUCTION_MODE_HIGH_QUALITY : CaptureRequest.NOISE_REDUCTION_MODE_FAST);
                session.setRepeatingRequest(activeRequestBuilder.build(),afCallback,handler);
                android.util.Log.i("NextVR-Camera","night camera "+(enabled?"on":"off"));
            } catch(Throwable ignored) {}
        });
    }

    /** Luminosidade media (0..1) do ultimo quadro medido, ou -1 antes da primeira medida. */
    float luma() { return lastLuma; }

    /**
     * Mede a luz da cena nos pixels ja' convertidos (ARGB upright). Uma amostragem em passos
     * (~512 pontos) custa quase nada e roda so' de 15 em 15 quadros, para nao competir com o
     * hand tracking.
     */
    private void measureLuma(int[] pixels,int count) {
        if(pixels==null || count<=0) return;
        int step=Math.max(1,count/512);
        float sum=0f; int n=0;
        for(int i=0;i<count;i+=step) {
            int c=pixels[i];
            int r=(c>>16)&0xff, g=(c>>8)&0xff, b=c&0xff;
            sum+=(0.2126f*r+0.7152f*g+0.0722f*b)/255f;
            n++;
        }
        if(n>0) lastLuma=Math.max(0f,Math.min(1f,sum/n));
    }

    void start(int displayRotation) { handler.post(()->open(displayRotation)); }
    @SuppressLint("MissingPermission")
    private void open(int displayRotation) {
        if(destroyed)return;
        if((camera!=null && session!=null && reader!=null && !closing && activeDisplayRotation==displayRotation)
                || (opening && activeDisplayRotation==displayRotation)) {
            pendingOpen=false;
            return;
        }
        if(opening || closing) {
            pendingOpen=true;
            pendingDisplayRotation=displayRotation;
            return;
        }
        if(camera!=null || session!=null) {
            pendingOpen=true;
            pendingDisplayRotation=displayRotation;
            closeCameraResources();
            return;
        }
        closeCameraResources();
        activeDisplayRotation=displayRotation;
        opening=true;
        sessionFrames=0;
        final int token=++generation;frameFailures.reset();   // a reopened camera starts with a clean streak
        // A reopened camera is a new session for the delegate too. The GPU is tried again while an
        // attempt is left (see MAX_GPU_ATTEMPTS): the previous session may have been the boot page
        // rasterizing, or a first-run install compiling the WebView's shaders, and the tracker paid
        // for it on the CPU for the rest of the process. The attempt budget is what keeps this from
        // becoming a loop on a device whose GPU delegate really is the slow one.
        if(gpuAttempts<MAX_GPU_ATTEMPTS)preferGpu=true;
        try {
            CameraManager manager=context.getSystemService(CameraManager.class);
            String id=null;CameraCharacteristics chars=null;
            double bestFov=-1.0;
            for(String candidate:manager.getCameraIdList()) {
                CameraCharacteristics c=manager.getCameraCharacteristics(candidate);
                Integer facing=c.get(CameraCharacteristics.LENS_FACING);
                if(facing!=null && facing==CameraCharacteristics.LENS_FACING_BACK){
                    if(!wideCamera) { id=candidate;chars=c;break; }
                    double fov=horizontalFovScore(c);
                    if(id==null || fov>bestFov) { id=candidate;chars=c;bestFov=fov; }
                }
            }
            if(id==null)throw new IllegalStateException("Rear camera required");
            final CameraCharacteristics selectedChars=chars;
            StreamConfigurationMap map=chars.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
            if(map==null)throw new IllegalStateException("No camera output sizes");
            Size selected=null;long best=Long.MAX_VALUE;
            for(Size size:map.getOutputSizes(ImageFormat.YUV_420_888)) {
                if(size.getWidth()>1920 || size.getHeight()>1080)continue;
                long score=Math.abs(size.getWidth()-640)*10L+Math.abs(size.getHeight()-480);
                if(score<best){best=score;selected=size;}
            }
            if(selected==null)throw new IllegalStateException("No suitable YUV stream");
            Integer sensor=chars.get(CameraCharacteristics.SENSOR_ORIENTATION);
            Integer timestampSource=chars.get(CameraCharacteristics.SENSOR_INFO_TIMESTAMP_SOURCE);
            // Capture-to-landmark latency is only meaningful when the sensor clock is the same clock
            // as SystemClock.elapsedRealtimeNanos() (REALTIME). Otherwise only acquire-to-landmark is reported.
            timestampIsRealtime=timestampSource!=null && timestampSource==CameraMetadata.SENSOR_INFO_TIMESTAMP_SOURCE_REALTIME;
            rotation=CameraGeometry.uprightRotation(sensor==null?90:sensor,displayRotation);
            // Faixa de +EV disponivel neste sensor (usada pela camera noturna).
            try { aeCompensationRange=chars.get(CameraCharacteristics.CONTROL_AE_COMPENSATION_RANGE); }
            catch(Throwable ignored) { aeCompensationRange=null; }
            android.util.Log.i("NextVR-Camera","rear="+id+" wide="+wideCamera+" sensor="+sensor+" display="+(displayRotation*90)+" upright="+rotation+" frame="+selected+" mirror=false timestamps="+(timestampIsRealtime?"realtime":"unknown"));
            if(handsEnabled) {
                try {
                    tracking.execute(()->{
                        if(detector==null && !destroyed) {
                            try { buildDetector(); } catch(Throwable ignored) {}
                        }
                    });
                } catch(Throwable ignored) {}
            }
            reader=ImageReader.newInstance(selected.getWidth(),selected.getHeight(),ImageFormat.YUV_420_888,4);
            reader.setOnImageAvailableListener(source->onFrame(source,token),handler);
            manager.openCamera(id,new CameraDevice.StateCallback(){
                @Override public void onOpened(CameraDevice device) {
                    opening=false;
                    if(token!=generation || destroyed){
                        closing=true;
                        device.close();
                        return;
                    }
                    camera=device;
                    if(pendingOpen && pendingDisplayRotation!=displayRotation) {
                        closeCameraResources();
                        return;
                    }
                    try {
                        device.createCaptureSession(Collections.singletonList(reader.getSurface()),new CameraCaptureSession.StateCallback(){
                            @Override public void onConfigured(CameraCaptureSession configured) {
                                if(token!=generation || destroyed){configured.close();return;}
                                session=configured;openRetries=0;
                                try {
                                    CaptureRequest.Builder request=device.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW);
                                    request.addTarget(reader.getSurface());
                                    request.set(CaptureRequest.CONTROL_AF_MODE,CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_VIDEO);
                                    try {
                                        request.set(CaptureRequest.EDGE_MODE,CaptureRequest.EDGE_MODE_FAST);
                                        request.set(CaptureRequest.NOISE_REDUCTION_MODE,CaptureRequest.NOISE_REDUCTION_MODE_FAST);
                                        if(android.os.Build.VERSION.SDK_INT>=28) {
                                            request.set(CaptureRequest.DISTORTION_CORRECTION_MODE,CaptureRequest.DISTORTION_CORRECTION_MODE_FAST);
                                        }
                                    } catch(Throwable ignored) {}
                                    // Keep camera exposure at 30-60 FPS even indoors so Hand Tracking never drops to 15 FPS.
                                    android.util.Range<Integer>[] fpsRanges=selectedChars.get(CameraCharacteristics.CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES);
                                    if(fpsRanges!=null && fpsRanges.length>0) {
                                        android.util.Range<Integer> bestRange=null;
                                        for(android.util.Range<Integer> r:fpsRanges) {
                                            if(r.getUpper()<24 || r.getUpper()>60) continue;
                                            if(bestRange==null || r.getLower()>bestRange.getLower()
                                                    || (r.getLower().equals(bestRange.getLower()) && r.getUpper()>bestRange.getUpper())) {
                                                bestRange=r;
                                            }
                                        }
                                        if(bestRange!=null) request.set(CaptureRequest.CONTROL_AE_TARGET_FPS_RANGE,bestRange);
                                    }
                                    // Apply 0.5x ultra-wide zoom ratio when supported by Android 11+ logical camera.
                                    boolean zoomApplied=false;
                                    if(android.os.Build.VERSION.SDK_INT>=30) {
                                        try {
                                            android.util.Range<Float> zoomRange=selectedChars.get(CameraCharacteristics.CONTROL_ZOOM_RATIO_RANGE);
                                            if(zoomRange!=null) {
                                                float targetZoom=wideCamera?Math.max(zoomRange.getLower(),0.5f):1.0f;
                                                request.set(CaptureRequest.CONTROL_ZOOM_RATIO,targetZoom);
                                                zoomApplied=true;
                                            }
                                        } catch(Throwable ignored) {}
                                    }
                                    if(!zoomApplied) {
                                        try {
                                            Rect activeRect=selectedChars.get(CameraCharacteristics.SENSOR_INFO_ACTIVE_ARRAY_SIZE);
                                            if(activeRect!=null && wideCamera) {
                                                request.set(CaptureRequest.SCALER_CROP_REGION,activeRect);
                                            }
                                        } catch(Throwable ignored) {}
                                    }
                                    activeRequestBuilder=request;
                                    // Uma camera reaberta (troca de rotacao, 0.5x, watchdog) nasce com o
                                    // request padrao: reaplica a camera noturna se ela estava ligada.
                                    if(nightMode) {
                                        try {
                                            android.util.Range<Integer> evRange=aeCompensationRange;
                                            if(evRange!=null) request.set(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION,evRange.getUpper());
                                            request.set(CaptureRequest.NOISE_REDUCTION_MODE,CaptureRequest.NOISE_REDUCTION_MODE_HIGH_QUALITY);
                                        } catch(Throwable ignored) {}
                                    }
                                    session.setRepeatingRequest(request.build(),afCallback,handler);
                                    scheduleRuntimeWatchdog(token,displayRotation,0);
                                }catch(Exception e){retryOrFail("Camera preview failed",e,displayRotation,token);}
                            }
                            @Override public void onConfigureFailed(CameraCaptureSession failed){
                                retryOrFail("Camera configuration failed",null,displayRotation,token);
                            }
                        },handler);
                    }catch(Exception e){retryOrFail("Camera session failed",e,displayRotation,token);}
                }
                @Override public void onClosed(CameraDevice device) {
                    closing=false;
                    if(pendingOpen && !destroyed) {
                        pendingOpen=false;
                        int rot=pendingDisplayRotation;
                        handler.postDelayed(()->open(rot),60);
                    }
                }
                @Override public void onDisconnected(CameraDevice device){
                    opening=false;closing=true;device.close();
                    retryOrFail("Camera disconnected",null,displayRotation,token);
                }
                @Override public void onError(CameraDevice device,int code){
                    opening=false;closing=true;device.close();
                    retryOrFail("Camera error "+code,null,displayRotation,token);
                }
            },handler);
        }catch(Exception e){
            opening=false;
            retryOrFail("Cannot start passthrough",e,displayRotation,token);
        }
    }
    private void scheduleRuntimeWatchdog(int token,int displayRotation,int prevFrames) {
        handler.postDelayed(()->{
            if(token!=generation || destroyed) return;
            if(session!=null && !opening && !closing && sessionFrames==prevFrames) {
                android.util.Log.w("NextVR-Camera","Watchdog: camera stream stalled at "+sessionFrames+" frames, reopening camera");
                if(sessionFrames>0) openRetries=0;
                if(openRetries<4) {
                    openRetries++;
                    pendingOpen=true;
                    pendingDisplayRotation=displayRotation;
                    closeCameraResources();
                }
                return;
            }
            if(sessionFrames>prevFrames) openRetries=0;
            scheduleRuntimeWatchdog(token,displayRotation,sessionFrames);
        },prevFrames==0?1500L:2200L);
    }
    private void retryOrFail(String message,Throwable e,int displayRotation,int token) {
        if(token!=generation || destroyed) return;
        if(openRetries<3) {
            openRetries++;
            pendingOpen=true;
            pendingDisplayRotation=displayRotation;
            closeCameraResources();
            if(!closing) {
                pendingOpen=false;
                handler.postDelayed(()->open(displayRotation),250);
            }
        } else {
            fail(message,e);
        }
    }
    /**
     * Camera callback: the ONE place the pixels of a frame are read, and the thread that both the
     * passthrough texture and the tracking input are produced on. Its per-frame cost is therefore
     * also the ceiling on the landmark rate, so the work here is kept minimal and the HAL buffer is
     * returned as soon as the pixels are copied out (an ImageReader with maxImages=2 starves the
     * camera if a callback holds a buffer through a texture upload).
     */
    private void onFrame(ImageReader source,int token) {
        Image image=null;Bitmap upright=null;
        long workStartMs=SystemClock.elapsedRealtime();
        try {
            image=source.acquireLatestImage();if(image==null || token!=generation)return;
            sessionFrames++;
            PerfLog.cameraFrame();
            long acquiredNs=SystemClock.elapsedRealtimeNanos();
            long sensorNs=image.getTimestamp();
            // MediaPipe and the One Euro filters use the camera's own frame time: processing time after
            // conversion/rotation varies under load and would inject timing jitter.
            long stamp=sensorNs/1_000_000L;
            Image.Plane[] p=image.getPlanes();
            int pixelCount=image.getWidth()*image.getHeight();
            if(cameraPixels==null || cameraPixels.length!=pixelCount)cameraPixels=new int[pixelCount];
            // One native pass fills the upright pixels; the quarter-turn rotation is fused into
            // the conversion (write-index remapping, pixel-exact), so no Java-side rotate
            // resample exists anymore.
            boolean quarter=rotation==90||rotation==270;
            int outW=quarter?image.getHeight():image.getWidth(),outH=quarter?image.getWidth():image.getHeight();
            nativeYuvToArgb(cameraPixels,p[0].getBuffer().slice(),p[1].getBuffer().slice(),p[2].getBuffer().slice(),
                image.getWidth(),image.getHeight(),p[0].getRowStride(),p[1].getRowStride(),p[2].getRowStride(),
                p[0].getPixelStride(),p[1].getPixelStride(),p[2].getPixelStride(),rotation);
            // Return the HAL camera buffer immediately after YUV conversion so the sensor never stalls.
            image.close();image=null;
            // Uma medida de luz a cada 15 quadros (~2x/s a 30 fps): e' o que a camera noturna le'.
            if((sessionFrames % 15)==0) measureLuma(cameraPixels,outW*outH);
            if(handsEnabled) {
                // Every camera frame publishes its newest analysis copy; the tracker takes the latest one
                // when it is free. A superseded frame is released here, so nothing accumulates.
                TrackingFrame waiting=slot.peek();
                if(analysisGate.shouldProduce(stamp,waiting==null?-1L:waiting.stamp)) {
                    int width=Math.min(outW,budget.width());
                    int height=Math.max(1,width*outH/outW);
                    Bitmap analysis;
                    if(width==outW && height==outH) {
                        // Zero redundant Java resample/copy when the upright camera frame already matches budget width.
                        analysis=Bitmap.createBitmap(cameraPixels,outW,outH,Bitmap.Config.ARGB_8888);
                    } else {
                        int analysisLen=width*height;
                        if(analysisPixels==null || analysisPixels.length!=analysisLen)analysisPixels=new int[analysisLen];
                        int dstIdx=0;
                        int stepX=(outW<<16)/Math.max(1,width);
                        int stepY=(outH<<16)/Math.max(1,height);
                        int sy=0;
                        for(int y=0;y<height;y++) {
                            int srcRow=(sy>>>16)*outW;
                            sy+=stepY;
                            int sx=0;
                            for(int x=0;x<width;x++) {
                                analysisPixels[dstIdx++]=cameraPixels[srcRow+(sx>>>16)];
                                sx+=stepX;
                            }
                        }
                        analysis=Bitmap.createBitmap(analysisPixels,width,height,Bitmap.Config.ARGB_8888);
                    }
                    if(analysis!=null) {
                        long captureNs=timestampIsRealtime?sensorNs:-1L;
                        TrackingFrame frame=new TrackingFrame(analysis,stamp,captureNs,acquiredNs,token,scaleX,scaleY);
                        TrackingFrame superseded=slot.offer(frame);
                        if(superseded!=null){superseded.release();PerfLog.droppedFrame();}
                        requestTracking();
                    }
                } else {
                    PerfLog.analysisSkipped();
                }
            }
            long workMs=SystemClock.elapsedRealtime()-workStartMs;
            PerfLog.cameraWork(workMs);
            PhoneXrHands.Frame curHands=latestHandsFrame;
            int activeHandCount=curHands==null?0:curHands.getHands().size();
            int flowMask=activeHandCount>=2?1:0;
            if((!gameHandMode || mrGameMode) && (sessionFrames & flowMask) == 0) {
                float[] flow=fakeSixDof.onCameraFrame(cameraPixels,outW,outH,curHands,stamp);
                if(flow!=null)listener.sixDof(flow[0],flow[1],flow[2],flow.length>3?flow[3]:flow[1]);
            }
            if(!gameHandMode || mrGameMode || sessionFrames<=2) {
                upright=Bitmap.createBitmap(cameraPixels,outW,outH,Bitmap.Config.ARGB_8888);
                long handoffStart=SystemClock.elapsedRealtime();
                listener.frame(upright);upright=null;
                PerfLog.cameraHandoff(SystemClock.elapsedRealtime()-handoffStart);
            }
            frameFailures.succeeded();
        }catch(Throwable e){
            // A frame that fails once is not an outage: the next camera frame arrives in ~33 ms and
            // carries the same scene, and the work that can throw here (the native conversion, the
            // resample's allocation) is exactly the kind that succeeds on a retry. The camera is only
            // torn down when the failure repeats on consecutive frames. Throwable, not Exception: an
            // Error here would kill the camera looper and freeze the passthrough with no report.
            if(frameFailures.failed())fail("Camera frame failed",e);
            else {
                PerfLog.cameraRetry();
                if(frameFailures.consecutive()==1)android.util.Log.w("NextVR-Camera","frame failed; retrying on the next frame",e);
            }
        }
        finally{
            if(image!=null)image.close();
            if(upright!=null)upright.recycle();
        }
    }
    /** Starts a drain on the tracking thread unless one is already queued or running. */
    private void requestTracking() {
        if(!scheduled.compareAndSet(false,true))return;
        try { tracking.execute(this::drainTracking); }
        catch(RejectedExecutionException shutdown) {
            scheduled.set(false);
            TrackingFrame frame=slot.clear();
            if(frame!=null)frame.release();
        }
    }
    /** Tracking thread: process the newest waiting frame, then the next one, until the slot is empty. */
    private void drainTracking() {
        for(;;) {
            TrackingFrame frame=slot.poll();
            if(frame==null) {
                scheduled.set(false);
                // A frame may have been offered between poll() and the flag reset; take it here.
                if(slot.isEmpty() || !scheduled.compareAndSet(false,true))return;
                continue;
            }
            try { track(frame); }
            catch(Throwable unexpected) {
                // track() already counts every Exception. An Error takes a different door: it would
                // escape the executor task, kill the worker and leave `scheduled` stuck at true, so
                // every later frame would be dropped with no error and no recovery. The realistic
                // case here is an OutOfMemoryError from a bitmap allocation under memory pressure -
                // a per-frame failure like any other, which the guard retries and eventually reports.
                handleTrackingFailure(unexpected);
            }
            finally { frame.release(); }
        }
    }
    private void track(TrackingFrame frame) {
        try {
            if(frame.token!=generation || destroyed || !handsEnabled)return;
            try { android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_URGENT_DISPLAY); } catch(Throwable ignored) {}
            // The detector lives on this thread and is (re)built here: on first use, and when a
            // reopened camera left a GPU attempt unspent (see open() and MAX_GPU_ATTEMPTS).
            if(detector==null || (preferGpu && !gpuDetector && gpuAttempts<MAX_GPU_ATTEMPTS))buildDetector();
            long inferenceStart=SystemClock.elapsedRealtime();
            com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult detected;
            try { detected=detector.detectOwned(frame.bitmap,frame.stamp,0); }
            catch(RuntimeException inferenceFailure) {
                RetryableInferenceException retryable = inferenceFailure instanceof RetryableInferenceException
                    ? (RetryableInferenceException)inferenceFailure : null;
                if(!gpuDetector || retryable==null) {
                    if(retryable!=null && !retryable.getRetryBitmap().isRecycled())retryable.getRetryBitmap().recycle();
                    throw inferenceFailure;
                }
                android.util.Log.w("NextVR-Hands","GPU inference failed; switching to CPU",inferenceFailure);
                Bitmap retryFrame=retryable.getRetryBitmap();
                try {
                    detector.close();detector=null;gpuDetector=false;
                    detector=new HandTracker(context,false,"hand_landmarker.task");
                    seenGraphs=detector.graphGenerations();
                    // The GPU has failed once in this session: it is not picked up again until a
                    // reopened camera re-arms it (see preferGpu and MAX_GPU_ATTEMPTS), never on the
                    // next frame - that would rebuild a GPU graph per frame while failing.
                    preferGpu=false;
                    PerfLog.delegate("CPU");
                    hands.reset();
                    // Borrowed input preserves the emergency retry bitmap if CPU inference also fails.
                    detected=detector.detect(retryFrame,frame.stamp,0);
                } finally { if(!retryFrame.isRecycled())retryFrame.recycle(); }
            }
            long inferenceMs=SystemClock.elapsedRealtime()-inferenceStart;
            budget.completed(inferenceMs);
            // Which graph did the work: the one-slot tracking graph is the cheap path, and a log
            // that cannot show whether it is being used cannot show whether the engine is paying two
            // hand slots on every frame.
            PerfLog.handGraph(detector.narrowFrame());
            // The one-slot graph is built lazily, mid-session, so a new graph can appear at any
            // frame: its first results are the delegate compiling shaders (hundreds of milliseconds
            // for a GPU graph), and letting one into the timing mean makes a healthy delegate look
            // contended for the next ten results. Every graph build restarts the delegate's window.
            if(seenGraphs!=detector.graphGenerations()) {
                seenGraphs=detector.graphGenerations();
                delegateWatch.rebuilt();
            }
            // A GPU delegate that stays slow is not a failure: it is the tracker queueing behind the
            // display path, and the measured cost of the inference is the only evidence of that
            // available here. A GPU delegate that answers in a couple of milliseconds and never
            // produces a hand is not slow at all - it is not running the graph (see DelegateWatch).
            // Both verdicts come from what was measured, and both end on the CPU.
            boolean slow=gpuDetector&&delegateWatch.shouldDrop(inferenceMs);
            boolean silent=gpuDetector&&delegateWatch.noOutput(inferenceMs,detected.landmarks().size());
            if(slow||silent) {
                android.util.Log.i("NextVR-Perf",silent
                    ? "GPU delegate returned "+delegateWatch.emptyRun()+" hands-less results of "+String.format(
                        java.util.Locale.US,"%.1f ms mean",delegateWatch.emptyMeanMs())
                        +" without ever producing a hand; switching the landmarker to CPU"
                    : "GPU delegate held at "+String.format(java.util.Locale.US,"%.1f ms mean",delegateWatch.averageMs())
                        +"; switching the landmarker to CPU");
                try {
                    detector.close();detector=null;gpuDetector=false;
                    detector=new HandTracker(context,false,"hand_landmarker.task");
                    seenGraphs=detector.graphGenerations();
                    delegateWatch.rebuilt();
                    preferGpu=false;
                    PerfLog.delegate(silent?"CPU (after a silent GPU)":"CPU (after a slow GPU)");
                    // The new graphs have no region-of-interest history, so the filters start fresh.
                    hands.reset();budget.reset();
                }catch(RuntimeException failure) {
                    android.util.Log.w("NextVR-Hands","CPU fallback after a slow GPU delegate failed",failure);
                    detector=null;   // rebuilt on the next frame; hands stay on the old path till then
                }
            }
            long completedNs=SystemClock.elapsedRealtimeNanos();
            long frameAgeNs=Math.max(0L,completedNs-frame.acquiredNs);
            PhoneXrHands.Frame result=hands.process(detected,frame.scaleX,frame.scaleY,completedNs,frameAgeNs);
            long afterPoseNs=SystemClock.elapsedRealtimeNanos();
            PerfLog.poseWork((afterPoseNs-completedNs)/1e6);
            latestHandsFrame=result;
            // The processed (merged) hand count: what separates a real tracking loss from a slow
            // or skipping tracker in the perf log (see PerfLog.result).
            PerfLog.result(inferenceMs,frame.captureNs,frame.acquiredNs,completedNs,result.getHands().size());
            if(frame.token==generation && !destroyed && handsEnabled)listener.hands(result);
            trackFailures.succeeded();
        }catch(Exception e){handleTrackingFailure(e);}
    }
    /**
     * Creates (or recreates) the detector on the tracking thread and reports the delegate in use.
     * The GPU delegate is tried first, while an attempt is left in this process ([MAX_GPU_ATTEMPTS]);
     * a creation failure, a measured-slow GPU or a GPU that produces no output (DelegateWatch)
     * falls back to CPU. Closes whatever detector it replaces - the caller must not use the old one
     * afterwards.
     */
    private void buildDetector() {
        if(detector!=null) { detector.close(); detector=null; }
        if(preferGpu && gpuAttempts<MAX_GPU_ATTEMPTS) {
            gpuAttempts++;
            try { detector=new HandTracker(context,true,"hand_landmarker.task");gpuDetector=true; }
            catch(RuntimeException gpu) {
                android.util.Log.w("NextVR-Hands","GPU landmarker could not be created; using CPU",gpu);
                detector=new HandTracker(context,false,"hand_landmarker.task");gpuDetector=false;preferGpu=false;
            }
        } else {
            // The GPU delegate was already abandoned, or its attempts are spent (see DelegateWatch):
            // do not pick it up again on the next creation, or a failed CPU rebuild would loop.
            detector=new HandTracker(context,false,"hand_landmarker.task");gpuDetector=false;
        }
        // The brand-new graphs are about to face the delegate's warm-up, and the previous verdict
        // about a previous graph does not apply to them (see DelegateWatch.rebuilt).
        detector.singleHandOnly = !"both".equals(singleHandMode);
        hands.singleHandMode = singleHandMode;
        seenGraphs=detector.graphGenerations();
        delegateWatch.rebuilt();
        PerfLog.delegate(gpuDetector?"GPU":"CPU");
    }

    /**
     * The one place a failed tracking frame is judged: a single failure (a bitmap the delegate
     * rejected, a transient allocation failure while a WebView was rasterizing) must not end hand
     * tracking for the rest of the session - the next frame arrives in ~33 ms and carries the same
     * hand. Only a failure that repeats on consecutive frames is an outage, and that still stops the
     * hands and reports it, instead of retrying forever behind a frozen cursor.
     */
    private void handleTrackingFailure(Throwable failure) {
        if(!trackFailures.failed()) {
            PerfLog.handRetry();
            if(trackFailures.consecutive()==1)android.util.Log.w("NextVR-Hands","frame failed; retrying on the next frame",failure);
            return;
        }
        android.util.Log.e("NextVR-Hands","hand tracking stopped after "+trackFailures.consecutive()+" consecutive failures",failure);
        handsEnabled=false;listener.error("PhoneXR hand tracking failed: "+failure.getMessage());clearHands();
    }
    /**
     * Runs on the tracking thread, which is also the thread that owns the landmarker. Hands are gone,
     * so the narrow/wide decision made against the frames that just expired is forgotten too: the next
     * session searches both slots again until one hand proves the second slot idle.
     */
    private void clearHands() {
        hands.reset();
        latestHandsFrame=null;
        listener.hands(new PhoneXrHands.Frame(Collections.emptyList(),SystemClock.elapsedRealtimeNanos()));
    }
    void resetHandsState() {
        discardWaitingFrame();
        latestHandsFrame=null;
        tracking.execute(this::clearHands);
    }
    void enableHands(boolean enabled) {
        handsEnabled=enabled;
        // Re-enabling after an outage is a fresh start: the streak that stopped the session must not
        // count against the new one, or the very first hiccup would stop it again immediately.
        if(enabled)trackFailures.reset();
        else {
            TrackingFrame waiting=slot.clear();
            if(waiting!=null)waiting.release();
            tracking.execute(this::clearHands);
        }
    }
    private void fail(String message,Throwable e){pendingOpen=false;closeCamera();listener.error(message+(e==null?"":": "+e.getMessage()));}
    private void closeCameraResources(){
        ++generation;
        if(session!=null){try{session.close();}catch(Exception ignored){} session=null;}
        if(camera!=null){
            closing=true;
            try{camera.close();}catch(Exception ignored){closing=false;}
            camera=null;
            final int closeGen=generation;
            handler.postDelayed(()->{
                if(closing && generation==closeGen) {
                    closing=false;
                    if(pendingOpen && !destroyed) {
                        pendingOpen=false;
                        open(pendingDisplayRotation);
                    }
                }
            },350);
        }
        if(reader!=null){try{reader.close();}catch(Exception ignored){} reader=null;}
    }
    private void closeCamera(){
        pendingOpen=false;
        closeCameraResources();
        activeDisplayRotation=-1;
        listener.stopped();
    }
    void stop(){handler.post(()->{closeCamera();discardWaitingFrame();tracking.execute(this::clearHands);});}
    private void discardWaitingFrame() {
        TrackingFrame waiting=slot.clear();
        if(waiting!=null)waiting.release();
    }
    void destroy(Runnable afterClose){
        handler.post(()->{
            destroyed=true;closeCamera();discardWaitingFrame();
            tracking.execute(()->{if(detector!=null)detector.close();clearHands();});
            tracking.shutdown();afterClose.run();thread.quitSafely();
        });
    }
    private static native void nativeYuvToArgb(int[] output,ByteBuffer y,ByteBuffer u,ByteBuffer v,int w,int h,int ys,int us,int vs,int yp,int up,int vp,int rotation);
}
