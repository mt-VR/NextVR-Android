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
import java.util.concurrent.atomic.AtomicBoolean;

/** PhoneXR's upright-bitmap pipeline with Camera2 ownership and bounded latest-frame queues.
 * One frame is oriented ONCE, then used for both the GL camera texture and OrangeHanding.
 * No OES camera preview / SurfaceTexture matrix / second shader rotation can flip it again.
 */
final class PassthroughCamera {
    interface Listener {
        /** Ownership of this upright bitmap transfers to the renderer. */
        void frame(Bitmap upright);
        void hands(PhoneXrHands.Frame frame);
        void error(String message);
        void stopped();
    }
    private final Context context;
    private final Listener listener;
    private final HandlerThread thread=new HandlerThread("NextVR Camera2");
    private final Handler handler;
    private final ExecutorService tracking=Executors.newSingleThreadExecutor(r->new Thread(r,"PhoneXR OrangeHanding"));
    private final AtomicBoolean busy=new AtomicBoolean();
    private final TrackingBudget budget=new TrackingBudget();
    private int[] cameraPixels;
    private Bitmap analysisBitmap;
    private Canvas analysisCanvas;
    private final Paint analysisPaint=new Paint(Paint.FILTER_BITMAP_FLAG);
    private final Rect analysisRect=new Rect();
    private final PhoneXrHands hands=new PhoneXrHands();
    private CameraDevice camera;
    private CameraCaptureSession session;
    private ImageReader reader;
    private boolean gpuDetector;
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
            rotation=CameraGeometry.uprightRotation(sensor==null?90:sensor,displayRotation);
            android.util.Log.i("NextVR-Camera","rear="+id+" sensor="+sensor+" display="+(displayRotation*90)+" upright="+rotation+" frame="+selected+" mirror=false");
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
        Image image=null;Bitmap upright=null;boolean admitted=false,queued=false;
        try {
            image=source.acquireLatestImage();if(image==null || token!=generation)return;
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
            // Reuse one bounded analysis bitmap; the atomic busy flag owns it until inference finishes.
            if(handsEnabled && budget.ready(SystemClock.elapsedRealtime()) && busy.compareAndSet(false,true)) {
                admitted=true;
                int width=budget.width(),height=width*upright.getHeight()/upright.getWidth();
                if(analysisBitmap==null || analysisBitmap.getWidth()!=width || analysisBitmap.getHeight()!=height) {
                    if(analysisBitmap!=null)analysisBitmap.recycle();
                    analysisBitmap=Bitmap.createBitmap(width,height,Bitmap.Config.ARGB_8888);
                    analysisCanvas=new Canvas(analysisBitmap);analysisRect.set(0,0,width,height);
                }
                Bitmap small=analysisBitmap;
                analysisCanvas.drawBitmap(upright,null,analysisRect,analysisPaint);
                budget.started(SystemClock.elapsedRealtime());
                long stamp=SystemClock.elapsedRealtime();float sx=scaleX,sy=scaleY;
                tracking.execute(()->{
                    try {
                        if(token!=generation || destroyed || !handsEnabled)return;
                        if(detector==null) {
                            try { detector=new FusionHands(context,true,"hand_landmarker.task",500L);gpuDetector=true; }
                            catch(RuntimeException gpu) { detector=new FusionHands(context,false,"hand_landmarker.task",750L);gpuDetector=false; }
                            if(!detector.getFused())listener.error("YOLO wrist recovery unavailable; see PhoneXR logs");
                        }
                        long inferenceStart=SystemClock.elapsedRealtime();
                        com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult detected;
                        try { detected=detector.detect(small,stamp,0); }
                        catch(RuntimeException gpuFailure) {
                            // Some drivers accept delegate creation but fail on the first inference.
                            if(!gpuDetector)throw gpuFailure;
                            android.util.Log.w("NextVR-Hands","GPU inference failed; switching to CPU",gpuFailure);
                            detector.close();detector=null;gpuDetector=false;
                            detector=new FusionHands(context,false,"hand_landmarker.task",750L);
                            hands.reset();detected=detector.detect(small,stamp,0);
                        }
                        budget.completed(SystemClock.elapsedRealtime(),SystemClock.elapsedRealtime()-inferenceStart);
                        PhoneXrHands.Frame result=hands.process(detected,sx,sy,SystemClock.elapsedRealtimeNanos());
                        if(token==generation && !destroyed && handsEnabled)listener.hands(result);
                    }catch(Exception e){handsEnabled=false;listener.error("PhoneXR hand tracking failed: "+e.getMessage());clearHands();}
                    finally{busy.set(false);}
                });queued=true;
            }
            listener.frame(upright);upright=null;
        }catch(Exception e){fail("Camera frame failed",e);}
        finally{if(admitted&&!queued)busy.set(false);if(image!=null)image.close();if(upright!=null)upright.recycle();}
    }
    private void clearHands() { hands.reset();listener.hands(new PhoneXrHands.Frame(Collections.emptyList(),SystemClock.elapsedRealtimeNanos())); }
    void enableHands(boolean enabled) {
        handsEnabled=enabled;
        if(!enabled)tracking.execute(this::clearHands);
    }
    private void fail(String message,Exception e){closeCamera();listener.error(message+(e==null?"":": "+e.getMessage()));}
    private void closeCamera(){
        ++generation;
        if(session!=null){session.close();session=null;}
        if(camera!=null){camera.close();camera=null;}
        if(reader!=null){reader.close();reader=null;}
        listener.stopped();
    }
    void stop(){handler.post(()->{closeCamera();tracking.execute(this::clearHands);});}
    void destroy(Runnable afterClose){
        handler.post(()->{destroyed=true;closeCamera();tracking.execute(()->{if(detector!=null)detector.close();if(analysisBitmap!=null){analysisBitmap.recycle();analysisBitmap=null;}clearHands();});tracking.shutdown();afterClose.run();thread.quitSafely();});
    }
    private static native void nativeYuvToArgb(int[] output,ByteBuffer y,ByteBuffer u,ByteBuffer v,int w,int h,int ys,int us,int vs,int yp,int up,int vp);
}
