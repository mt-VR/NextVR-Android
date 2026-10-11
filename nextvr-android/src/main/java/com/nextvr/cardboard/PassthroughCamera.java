package com.nextvr.cardboard;

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
import com.nextvr.cardboard.hands.PhoneXrHands;
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
        void error(String message);
        void stopped();
    }
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
    private final ExecutorService tracking=Executors.newSingleThreadExecutor(r->new Thread(r,"PhoneXR OrangeHanding"));
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
    private final PhoneXrHands hands=new PhoneXrHands();
    private CameraDevice camera;
    private CameraCaptureSession session;
    private ImageReader reader;
    private boolean gpuDetector;
    /** Cleared once the GPU delegate has been dropped for measured slowness; never retried. */
    private boolean preferGpu=true;
    private boolean timestampIsRealtime;
    private HandTracker detector; // Created, used and closed on the SAME thread (GPU delegate).
    private volatile int generation;
    private int rotation;
    private volatile boolean destroyed;
    volatile boolean handsEnabled=true;
    volatile float scaleX=1.1f,scaleY=.73f;

    PassthroughCamera(Context context,Listener listener) {
        this.context=context;this.listener=listener;thread.start();handler=new Handler(thread.getLooper());
    }
    void start(int displayRotation) { handler.post(()->open(displayRotation)); }
    @SuppressLint("MissingPermission")
    private void open(int displayRotation) {
        if(destroyed)return;
        closeCamera();final int token=++generation;frameFailures.reset();   // a reopened camera starts with a clean streak
        try {
            CameraManager manager=context.getSystemService(CameraManager.class);
            String id=null;CameraCharacteristics chars=null;
            for(String candidate:manager.getCameraIdList()) {
                CameraCharacteristics c=manager.getCameraCharacteristics(candidate);
                Integer facing=c.get(CameraCharacteristics.LENS_FACING);
                if(facing!=null && facing==CameraCharacteristics.LENS_FACING_BACK){id=candidate;chars=c;break;}
            }
            if(id==null)throw new IllegalStateException("Rear camera required");
            StreamConfigurationMap map=chars.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
            if(map==null)throw new IllegalStateException("No camera output sizes");
            Size selected=null;long best=Long.MAX_VALUE;
            for(Size size:map.getOutputSizes(ImageFormat.YUV_420_888)) {
                if(size.getWidth()>1920 || size.getHeight()>1080)continue;
                long score=Math.abs(size.getWidth()-1280)*10L+Math.abs(size.getHeight()-720);
                if(score<best){best=score;selected=size;}
            }
            if(selected==null)throw new IllegalStateException("No suitable YUV stream");
            Integer sensor=chars.get(CameraCharacteristics.SENSOR_ORIENTATION);
            Integer timestampSource=chars.get(CameraCharacteristics.SENSOR_INFO_TIMESTAMP_SOURCE);
            // Capture-to-landmark latency is only meaningful when the sensor clock is the same clock
            // as SystemClock.elapsedRealtimeNanos() (REALTIME). Otherwise only acquire-to-landmark is reported.
            timestampIsRealtime=timestampSource!=null && timestampSource==CameraMetadata.SENSOR_INFO_TIMESTAMP_SOURCE_REALTIME;
            rotation=CameraGeometry.uprightRotation(sensor==null?90:sensor,displayRotation);
            android.util.Log.i("NextVR-Camera","rear="+id+" sensor="+sensor+" display="+(displayRotation*90)+" upright="+rotation+" frame="+selected+" mirror=false timestamps="+(timestampIsRealtime?"realtime":"unknown"));
            reader=ImageReader.newInstance(selected.getWidth(),selected.getHeight(),ImageFormat.YUV_420_888,2);
            reader.setOnImageAvailableListener(source->onFrame(source,token),handler);
            manager.openCamera(id,new CameraDevice.StateCallback(){
                @Override public void onOpened(CameraDevice device) {
                    if(token!=generation || destroyed){device.close();return;}
                    camera=device;
                    try {
                        device.createCaptureSession(Collections.singletonList(reader.getSurface()),new CameraCaptureSession.StateCallback(){
                            @Override public void onConfigured(CameraCaptureSession configured) {
                                if(token!=generation){configured.close();return;}session=configured;
                                try {
                                    CaptureRequest.Builder request=device.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW);
                                    request.addTarget(reader.getSurface());
                                    request.set(CaptureRequest.CONTROL_AF_MODE,CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_VIDEO);
                                    session.setRepeatingRequest(request.build(),null,handler);
                                }catch(Exception e){fail("Camera preview failed",e);}
                            }
                            @Override public void onConfigureFailed(CameraCaptureSession failed){if(token==generation)fail("Camera configuration failed",null);}
                        },handler);
                    }catch(Exception e){fail("Camera session failed",e);}
                }
                @Override public void onDisconnected(CameraDevice device){device.close();if(token==generation)fail("Camera disconnected",null);}
                @Override public void onError(CameraDevice device,int code){device.close();if(token==generation)fail("Camera error "+code,null);}
            },handler);
        }catch(Exception e){fail("Cannot start passthrough",e);}
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
            upright=Bitmap.createBitmap(cameraPixels,outW,outH,Bitmap.Config.ARGB_8888);
            if(handsEnabled) {
                // Every camera frame publishes its newest analysis copy; the tracker takes the latest one
                // when it is free. A superseded frame is released here, so nothing accumulates.
                // While an inference outruns the camera the slot still holds an unread frame younger
                // than the gate: this frame's analysis copy would be superseded without ever being
                // tracked, so it is not produced at all - the resample and its multi-megabyte bitmap
                // stay off the thread whose cost caps the tracking rate (AnalysisGate).
                TrackingFrame waiting=slot.peek();
                if(analysisGate.shouldProduce(stamp,waiting==null?-1L:waiting.stamp)) {
                    int width=budget.width(),height=Math.max(1,width*upright.getHeight()/upright.getWidth());
                    Bitmap analysis=Bitmap.createScaledBitmap(upright,width,height,true);
                    if(analysis==upright)analysis=upright.copy(Bitmap.Config.ARGB_8888,false);
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
            // The pixels are already copied out, so the HAL buffer goes back BEFORE the display
            // hand-off: holding it across the renderer's texture upload starves the camera at
            // maxImages=2, which shows up as a lower landmark rate rather than as a slow picture.
            long workMs=SystemClock.elapsedRealtime()-workStartMs;
            PerfLog.cameraWork(workMs);
            if(image!=null){image.close();image=null;}
            long handoffStart=SystemClock.elapsedRealtime();
            listener.frame(upright);upright=null;
            PerfLog.cameraHandoff(SystemClock.elapsedRealtime()-handoffStart);
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
            if(detector==null)buildDetector();
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
                    PerfLog.delegate("CPU");
                    hands.reset();
                    // Borrowed input preserves the emergency retry bitmap if CPU inference also fails.
                    detected=detector.detect(retryFrame,frame.stamp,0);
                } finally { if(!retryFrame.isRecycled())retryFrame.recycle(); }
            }
            long inferenceMs=SystemClock.elapsedRealtime()-inferenceStart;
            budget.completed(inferenceMs);
            // A GPU delegate that stays slow is not a failure: it is the tracker queueing behind the
            // display path. The measured cost of the inference is the only evidence of that available
            // here, so the delegate is judged on it and abandoned when it stops being the fast path.
            if(gpuDetector&&delegateWatch.shouldDrop(inferenceMs)) {
                android.util.Log.i("NextVR-Perf","GPU delegate held at "+String.format(java.util.Locale.US,
                    "%.1f ms mean",delegateWatch.averageMs())+"; switching the landmarker to CPU");
                try {
                    detector.close();detector=null;gpuDetector=false;
                    detector=new HandTracker(context,false,"hand_landmarker.task");
                    delegateWatch.reset();
                    preferGpu=false;
                    PerfLog.delegate("CPU (after a slow GPU)");
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
            // The processed (merged) hand count: what separates a real tracking loss from a slow
            // or skipping tracker in the perf log (see PerfLog.result).
            PerfLog.result(inferenceMs,frame.captureNs,frame.acquiredNs,completedNs,result.getHands().size());
            if(frame.token==generation && !destroyed && handsEnabled)listener.hands(result);
            trackFailures.succeeded();
        }catch(Exception e){handleTrackingFailure(e);}
    }
    /**
     * Creates (or recreates) the detector on the tracking thread and reports the delegate in use.
     * The GPU delegate is tried first; a creation failure or a measured-slow GPU (DelegateWatch)
     * falls back to CPU and is not retried.
     */
    private void buildDetector() {
        if(preferGpu) {
            try { detector=new HandTracker(context,true,"hand_landmarker.task");gpuDetector=true; }
            catch(RuntimeException gpu) { detector=new HandTracker(context,false,"hand_landmarker.task");gpuDetector=false; }
        } else {
            // The GPU delegate was already abandoned for being slow (see DelegateWatch): do not
            // pick it up again on the next creation, or a failed CPU rebuild would loop.
            detector=new HandTracker(context,false,"hand_landmarker.task");gpuDetector=false;
        }
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
        listener.hands(new PhoneXrHands.Frame(Collections.emptyList(),SystemClock.elapsedRealtimeNanos()));
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
    private void fail(String message,Throwable e){closeCamera();listener.error(message+(e==null?"":": "+e.getMessage()));}
    private void closeCamera(){
        ++generation;
        if(session!=null){session.close();session=null;}
        if(camera!=null){camera.close();camera=null;}
        if(reader!=null){reader.close();reader=null;}
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
