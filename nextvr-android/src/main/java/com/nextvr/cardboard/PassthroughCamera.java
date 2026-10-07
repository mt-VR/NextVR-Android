package com.nextvr.cardboard;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.ImageFormat;
import android.graphics.SurfaceTexture;
import android.hardware.camera2.*;
import android.hardware.camera2.params.StreamConfigurationMap;
import android.media.Image;
import android.media.ImageReader;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.SystemClock;
import android.util.Size;
import android.view.Surface;
import com.google.mediapipe.framework.image.BitmapImageBuilder;
import com.google.mediapipe.framework.image.MPImage;
import com.google.mediapipe.tasks.core.BaseOptions;
import com.google.mediapipe.tasks.vision.core.RunningMode;
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarker;
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult;
import org.json.JSONArray;
import org.json.JSONObject;
import java.nio.ByteBuffer;
import java.util.Arrays;

/** One rear-camera owner: zero-copy preview to GL and a bounded YUV analysis stream. */
final class PassthroughCamera {
    interface Listener {
        void hands(String json);
        void geometry(float aspect, int rotation);
        void error(String message);
    }
    private final Context context;
    private final Listener listener;
    private final HandlerThread thread = new HandlerThread("NextVR camera + hands");
    private final Handler handler;
    private CameraDevice camera;
    private CameraCaptureSession session;
    private ImageReader reader;
    private Surface preview;
    private HandLandmarker detector;
    private int generation, rotation;
    private long lastAnalysis;
    volatile boolean handsEnabled = true;
    private boolean destroyed;
    PassthroughCamera(Context context, Listener listener) {
        this.context=context; this.listener=listener; thread.start(); handler=new Handler(thread.getLooper());
    }
    void start(SurfaceTexture texture, int displayRotation) {
        handler.post(() -> open(texture,displayRotation));
    }
    @SuppressLint("MissingPermission") // Activity gates this call on the runtime CAMERA grant.
    private void open(SurfaceTexture texture,int displayRotation) {
        if(destroyed) return;
        closeCamera(); final int token=++generation;
        try {
            CameraManager manager=context.getSystemService(CameraManager.class);
            String id=null; CameraCharacteristics chars=null;
            for(String candidate:manager.getCameraIdList()) {
                CameraCharacteristics c=manager.getCameraCharacteristics(candidate);
                Integer facing=c.get(CameraCharacteristics.LENS_FACING);
                if(facing!=null && facing==CameraCharacteristics.LENS_FACING_BACK) { id=candidate; chars=c; break; }
            }
            if(id==null) throw new IllegalStateException("A rear camera is required for passthrough");
            StreamConfigurationMap map=chars.get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
            if(map==null) throw new IllegalStateException("Camera has no supported output sizes");
            // Select a preview/analysis pair with IDENTICAL aspect ratio, rather than assuming 16:9.
            Size[] previews=map.getOutputSizes(SurfaceTexture.class), analyses=map.getOutputSizes(ImageFormat.YUV_420_888);
            Size selected=null, analysis=null; long best=Long.MAX_VALUE;
            for(Size p:previews) for(Size a:analyses) {
                if(p.getWidth()>1920 || a.getWidth()>640 || a.getHeight()>640) continue;
                if(p.getWidth()*a.getHeight()!=p.getHeight()*a.getWidth()) continue;
                long score=Math.abs(p.getWidth()-1280)*10L+Math.abs(a.getWidth()-640);
                if(score<best) { best=score; selected=p; analysis=a; }
            }
            if(selected==null) throw new IllegalStateException("No compatible camera preview/analysis stream pair");
            Integer sensor=chars.get(CameraCharacteristics.SENSOR_ORIENTATION);
            rotation=((sensor==null?90:sensor)-displayRotation*90+360)%360;
            float aspect=(float)selected.getWidth()/selected.getHeight();
            listener.geometry(rotation%180==0?aspect:1/aspect,rotation);
            texture.setDefaultBufferSize(selected.getWidth(),selected.getHeight());
            preview=new Surface(texture);
            reader=ImageReader.newInstance(analysis.getWidth(),analysis.getHeight(),ImageFormat.YUV_420_888,2);
            reader.setOnImageAvailableListener(this::analyze,handler);
            manager.openCamera(id,new CameraDevice.StateCallback() {
                @Override public void onOpened(CameraDevice device) {
                    if(token!=generation || destroyed) { device.close(); return; }
                    camera=device;
                    try {
                        device.createCaptureSession(Arrays.asList(preview,reader.getSurface()),new CameraCaptureSession.StateCallback() {
                            @Override public void onConfigured(CameraCaptureSession configured) {
                                if(token!=generation) { configured.close(); return; }
                                session=configured;
                                try {
                                    CaptureRequest.Builder request=device.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW);
                                    request.addTarget(preview); request.addTarget(reader.getSurface());
                                    request.set(CaptureRequest.CONTROL_AF_MODE,CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_VIDEO);
                                    session.setRepeatingRequest(request.build(),null,handler);
                                } catch(Exception e) { fail("Camera preview failed",e); }
                            }
                            @Override public void onConfigureFailed(CameraCaptureSession failed) { if(token==generation) fail("Camera stream configuration failed",null); }
                        },handler);
                    } catch(Exception e) { fail("Cannot create camera session",e); }
                }
                @Override public void onDisconnected(CameraDevice device) { device.close(); if(token==generation) fail("Camera disconnected — reopen NextVR to retry",null); }
                @Override public void onError(CameraDevice device,int error) { device.close(); if(token==generation) fail("Camera unavailable ("+error+") — reopen NextVR to retry",null); }
            },handler);
        } catch(Exception e) { fail("Cannot start passthrough",e); }
    }
    private void analyze(ImageReader source) {
        Image image=null; Bitmap bitmap=null;
        try {
            image=source.acquireLatestImage(); if(image==null) return;
            long now=SystemClock.uptimeMillis();
            if(!handsEnabled || now-lastAnalysis<68) return;
            lastAnalysis=now;
            if(detector==null) detector=HandLandmarker.createFromOptions(context,
                HandLandmarker.HandLandmarkerOptions.builder()
                    .setBaseOptions(BaseOptions.builder().setModelAssetPath("hand_landmarker.task").build())
                    .setRunningMode(RunningMode.VIDEO).setNumHands(2)
                    .setMinHandDetectionConfidence(.45f).setMinHandPresenceConfidence(.4f).setMinTrackingConfidence(.45f).build());
            bitmap=toBitmap(image);
            if(rotation!=0) {
                android.graphics.Matrix m=new android.graphics.Matrix(); m.postRotate(rotation);
                Bitmap upright=Bitmap.createBitmap(bitmap,0,0,bitmap.getWidth(),bitmap.getHeight(),m,true);
                if(upright!=bitmap) { bitmap.recycle(); bitmap=upright; }
            }
            MPImage input=new BitmapImageBuilder(bitmap).build();
            try {
                HandLandmarkerResult result=detector.detectForVideo(input,now);
                JSONArray landmarks=new JSONArray(), handedness=new JSONArray();
                // Map camera aspect-fill to the SAME 1200x800 interaction viewport used by the GL shader.
                for(int h=0;h<result.landmarks().size();h++) {
                    JSONArray points=new JSONArray();
                    for(var p:result.landmarks().get(h)) points.put(new JSONObject().put("x",p.x()).put("y",p.y()));
                    landmarks.put(points);
                    handedness.put(new JSONArray().put(new JSONObject().put("categoryName",result.handedness().get(h).get(0).categoryName())));
                }
                listener.hands(new JSONObject().put("landmarks",landmarks).put("handedness",handedness).toString());
            } finally { input.close(); }
        } catch(Exception e) {
            handsEnabled=false; listener.error("Hand tracking failed; passthrough remains active. "+e.getMessage());
            listener.hands("{\"landmarks\":[],\"handedness\":[]}");
        } finally { if(image!=null) image.close(); if(bitmap!=null) bitmap.recycle(); }
    }
    private static Bitmap toBitmap(Image image) {
        int w=image.getWidth(), h=image.getHeight(); int[] rgba=new int[w*h];
        Image.Plane[] planes=image.getPlanes();
        ByteBuffer y=planes[0].getBuffer(), u=planes[1].getBuffer(), v=planes[2].getBuffer();
        int ys=planes[0].getRowStride(), us=planes[1].getRowStride(), vs=planes[2].getRowStride();
        for(int row=0;row<h;row++) for(int col=0;col<w;col++) {
            int yy=(y.get(row*ys+col*planes[0].getPixelStride())&255)-16;
            int uu=(u.get(row/2*us+col/2*planes[1].getPixelStride())&255)-128;
            int vv=(v.get(row/2*vs+col/2*planes[2].getPixelStride())&255)-128;
            int r=(298*yy+409*vv+128)>>8, g=(298*yy-100*uu-208*vv+128)>>8, b=(298*yy+516*uu+128)>>8;
            rgba[row*w+col]=0xff000000|(clamp(r)<<16)|(clamp(g)<<8)|clamp(b);
        }
        return Bitmap.createBitmap(rgba,w,h,Bitmap.Config.ARGB_8888);
    }
    private static int clamp(int n) { return Math.max(0,Math.min(255,n)); }
    private void fail(String message,Exception e) { closeCamera(); listener.error(message+(e==null?"":": "+e.getMessage())); }
    private void closeCamera() {
        ++generation;
        if(session!=null) { session.close(); session=null; }
        if(camera!=null) { camera.close(); camera=null; }
        if(reader!=null) { reader.close(); reader=null; }
        if(preview!=null) { preview.release(); preview=null; }
    }
    void stop() { handler.post(() -> { closeCamera(); listener.hands("{\"landmarks\":[],\"handedness\":[]}"); }); }
    void destroy(Runnable afterClose) { handler.post(() -> { destroyed=true; closeCamera(); if(detector!=null) detector.close(); afterClose.run(); thread.quitSafely(); }); }
}
