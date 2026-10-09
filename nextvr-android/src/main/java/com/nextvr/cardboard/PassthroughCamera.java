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
import com.samrat.orangehanding.FusionHands;
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
    private int[] cameraPixels;
    private final PhoneXrHands hands=new PhoneXrHands();
    private CameraDevice camera;
    private CameraCaptureSession session;
    private ImageReader reader;
    private boolean gpuDetector;
    private boolean timestampIsRealtime;
    private FusionHands detector; // Created, used and closed on the SAME thread (GPU delegate).
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
        closeCamera();final int token=++generation;
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
    private void onFrame(ImageReader source,int token) {
        Image image=null;Bitmap upright=null;
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
            nativeYuvToArgb(cameraPixels,p[0].getBuffer().slice(),p[1].getBuffer().slice(),p[2].getBuffer().slice(),
                image.getWidth(),image.getHeight(),p[0].getRowStride(),p[1].getRowStride(),p[2].getRowStride(),
                p[0].getPixelStride(),p[1].getPixelStride(),p[2].getPixelStride());
            upright=Bitmap.createBitmap(cameraPixels,image.getWidth(),image.getHeight(),Bitmap.Config.ARGB_8888);
            if(rotation!=0) {
                Matrix matrix=new Matrix();matrix.postRotate(rotation);
                Bitmap rotated=Bitmap.createBitmap(upright,0,0,upright.getWidth(),upright.getHeight(),matrix,true);
                if(rotated!=upright){upright.recycle();upright=rotated;}
            }
            if(handsEnabled) {
                // Every camera frame publishes its newest analysis copy; the tracker takes the latest one
                // when it is free. A superseded frame is released here, so nothing accumulates.
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
            }
            listener.frame(upright);upright=null;
        }catch(Exception e){fail("Camera frame failed",e);}
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
            finally { frame.release(); }
        }
    }
    private void track(TrackingFrame frame) {
        try {
            if(frame.token!=generation || destroyed || !handsEnabled)return;
            if(detector==null) {
                try { detector=new FusionHands(context,true,"hand_landmarker.task",500L);gpuDetector=true; }
                catch(RuntimeException gpu) { detector=new FusionHands(context,false,"hand_landmarker.task",750L);gpuDetector=false; }
                PerfLog.delegate(gpuDetector?"GPU":"CPU");
                if(!detector.getFused())listener.error("YOLO wrist recovery unavailable; see PhoneXR logs");
            }
            long inferenceStart=SystemClock.elapsedRealtime();
            com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult detected;
            try { detected=detector.detectOwned(frame.bitmap,frame.stamp,0); }
            catch(RuntimeException inferenceFailure) {
                FusionHands.RetryableInferenceException retryable = inferenceFailure instanceof FusionHands.RetryableInferenceException
                    ? (FusionHands.RetryableInferenceException)inferenceFailure : null;
                if(!gpuDetector || retryable==null) {
                    if(retryable!=null && !retryable.getRetryBitmap().isRecycled())retryable.getRetryBitmap().recycle();
                    throw inferenceFailure;
                }
                android.util.Log.w("NextVR-Hands","GPU inference failed; switching to CPU",inferenceFailure);
                Bitmap retryFrame=retryable.getRetryBitmap();
                try {
                    detector.close();detector=null;gpuDetector=false;
                    detector=new FusionHands(context,false,"hand_landmarker.task",750L);
                    PerfLog.delegate("CPU");
                    hands.reset();
                    // Borrowed input preserves the emergency retry bitmap if CPU inference also fails.
                    detected=detector.detect(retryFrame,frame.stamp,0);
                } finally { if(!retryFrame.isRecycled())retryFrame.recycle(); }
            }
            long inferenceMs=SystemClock.elapsedRealtime()-inferenceStart;
            budget.completed(inferenceMs);
            long completedNs=SystemClock.elapsedRealtimeNanos();
            long frameAgeNs=Math.max(0L,completedNs-frame.acquiredNs);
            PhoneXrHands.Frame result=hands.process(detected,frame.scaleX,frame.scaleY,completedNs,frameAgeNs);
            PerfLog.result(inferenceMs,frame.captureNs,frame.acquiredNs,completedNs);
            if(frame.token==generation && !destroyed && handsEnabled)listener.hands(result);
        }catch(Exception e){handsEnabled=false;listener.error("PhoneXR hand tracking failed: "+e.getMessage());clearHands();}
    }
    private void clearHands() { hands.reset();listener.hands(new PhoneXrHands.Frame(Collections.emptyList(),SystemClock.elapsedRealtimeNanos())); }
    void enableHands(boolean enabled) {
        handsEnabled=enabled;
        if(!enabled) {
            TrackingFrame waiting=slot.clear();
            if(waiting!=null)waiting.release();
            tracking.execute(this::clearHands);
        }
    }
    private void fail(String message,Exception e){closeCamera();listener.error(message+(e==null?"":": "+e.getMessage()));}
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
    private static native void nativeYuvToArgb(int[] output,ByteBuffer y,ByteBuffer u,ByteBuffer v,int w,int h,int ys,int us,int vs,int yp,int up,int vp);
}
