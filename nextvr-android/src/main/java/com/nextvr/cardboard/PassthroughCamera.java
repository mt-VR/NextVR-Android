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
    private final PhoneXrHands hands=new PhoneXrHands();
    private CameraDevice camera;
    private CameraCaptureSession session;
    private ImageReader reader;
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
        Image image=null;Bitmap upright=null;
        try {
            image=source.acquireLatestImage();if(image==null || token!=generation)return;
            Image.Plane[] p=image.getPlanes();
            int[] pixels=nativeYuvToArgb(p[0].getBuffer().slice(),p[1].getBuffer().slice(),p[2].getBuffer().slice(),
                image.getWidth(),image.getHeight(),p[0].getRowStride(),p[1].getRowStride(),p[2].getRowStride(),
                p[0].getPixelStride(),p[1].getPixelStride(),p[2].getPixelStride());
            upright=Bitmap.createBitmap(pixels,image.getWidth(),image.getHeight(),Bitmap.Config.ARGB_8888);
            if(rotation!=0) {
                Matrix matrix=new Matrix();matrix.postRotate(rotation);
                Bitmap rotated=Bitmap.createBitmap(upright,0,0,upright.getWidth(),upright.getHeight(),matrix,true);
                if(rotated!=upright){upright.recycle();upright=rotated;}
            }
            // As in the fork: detect on a 640px copy, never on the bitmap the GL thread owns.
            if(handsEnabled && busy.compareAndSet(false,true)) {
                Bitmap small=Bitmap.createBitmap(640,640*upright.getHeight()/upright.getWidth(),Bitmap.Config.ARGB_8888);
                new Canvas(small).drawBitmap(upright,null,new Rect(0,0,small.getWidth(),small.getHeight()),new Paint(Paint.FILTER_BITMAP_FLAG));
                long stamp=SystemClock.elapsedRealtime();float sx=scaleX,sy=scaleY;
                tracking.execute(()->{
                    try {
                        if(token!=generation || destroyed || !handsEnabled)return;
                        if(detector==null) {
                            try { detector=new FusionHands(context,true,"hand_landmarker.task",250L); }
                            catch(RuntimeException gpu) { detector=new FusionHands(context,false,"hand_landmarker.task",250L); }
                            if(!detector.getFused())listener.error("YOLO wrist recovery unavailable; see PhoneXR logs");
                        }
                        PhoneXrHands.Frame result=hands.process(detector.detect(small,stamp,0),sx,sy);
                        if(token==generation && !destroyed && handsEnabled)listener.hands(result);
                    }catch(Exception e){handsEnabled=false;listener.error("PhoneXR hand tracking failed: "+e.getMessage());clearHands();}
                    finally{small.recycle();busy.set(false);}
                });
            }
            listener.frame(upright);upright=null;
        }catch(Exception e){fail("Camera frame failed",e);}
        finally{if(image!=null)image.close();if(upright!=null)upright.recycle();}
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
        handler.post(()->{destroyed=true;closeCamera();tracking.execute(()->{if(detector!=null)detector.close();clearHands();});tracking.shutdown();afterClose.run();thread.quitSafely();});
    }
    private static native int[] nativeYuvToArgb(ByteBuffer y,ByteBuffer u,ByteBuffer v,int w,int h,int ys,int us,int vs,int yp,int up,int vp);
}
