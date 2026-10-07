package com.nextvr.cardboard;

import android.graphics.SurfaceTexture;
import android.opengl.GLES11Ext;
import android.opengl.GLES20;
import android.opengl.Matrix;
import org.json.JSONArray;
import org.json.JSONObject;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

/** GL-thread-owned compositor. HTML supplies world transforms, never head tracking. */
final class SpatialRenderer {
    static final int ATLAS = 4096;
    static final class Texture {
        final int id;
        final SurfaceTexture surface;
        final AtomicBoolean pending = new AtomicBoolean();
        final float[] transform = new float[16];
        boolean ready;
        Texture() {
            int[] ids = new int[1]; GLES20.glGenTextures(1, ids, 0); id = ids[0];
            GLES20.glBindTexture(GLES11Ext.GL_TEXTURE_EXTERNAL_OES, id);
            GLES20.glTexParameteri(GLES11Ext.GL_TEXTURE_EXTERNAL_OES, GLES20.GL_TEXTURE_MIN_FILTER, GLES20.GL_LINEAR);
            GLES20.glTexParameteri(GLES11Ext.GL_TEXTURE_EXTERNAL_OES, GLES20.GL_TEXTURE_MAG_FILTER, GLES20.GL_LINEAR);
            GLES20.glTexParameteri(GLES11Ext.GL_TEXTURE_EXTERNAL_OES, GLES20.GL_TEXTURE_WRAP_S, GLES20.GL_CLAMP_TO_EDGE);
            GLES20.glTexParameteri(GLES11Ext.GL_TEXTURE_EXTERNAL_OES, GLES20.GL_TEXTURE_WRAP_T, GLES20.GL_CLAMP_TO_EDGE);
            surface = new SurfaceTexture(id);
            surface.setOnFrameAvailableListener(s -> pending.set(true));
            Matrix.setIdentityM(transform, 0);
        }
        void update() {
            if (pending.getAndSet(false)) {
                surface.updateTexImage(); surface.getTransformMatrix(transform); ready = true;
            }
        }
        void release() {
            surface.release(); GLES20.glDeleteTextures(1, new int[]{id}, 0);
        }
    }
    static final class Panel {
        String browser;
        boolean overlay;
        final float[] matrix = new float[16], uv = new float[4];
        final float[] glass = new float[]{0,0,1,1};
    }
    final Texture camera = new Texture(), atlas = new Texture();
    final Map<String, Texture> browsers = new java.util.concurrent.ConcurrentHashMap<>();
    volatile List<Panel> panels = new ArrayList<>();
    // Shared optical mapping for camera, landmark overlay and interaction rays.
    volatile float cameraAspect = 4f / 3f;
    volatile int cameraRotation;
    volatile float mappingX = 1, mappingY = 1;
    private final float[] identity = new float[16], mv = new float[16], mvp = new float[16];
    private final FloatBuffer vertices = floats(new float[]{-.5f,-.5f,0,0, .5f,-.5f,1,0, -.5f,.5f,0,1, .5f,.5f,1,1});
    private final int program;
    private final int aPosition, aUv, uMvp, uTexture, uTransform, uRect;
    private final int cameraProgram;
    private final int[] viewport = new int[4];
    private float spanX = 2.2f, spanY = 1.5f;
    private float[] eyeProjection;
    private final FloatBuffer screen = floats(new float[]{-1,-1, 1,-1, -1,1, 1,1});
    SpatialRenderer() {
        Matrix.setIdentityM(identity, 0);
        program = link(
            "attribute vec2 aPosition; attribute vec2 aUv; uniform mat4 uMvp; uniform mat4 uTransform; uniform vec4 uRect; varying vec2 vUv; varying vec2 vLocal; void main(){vLocal=aUv;gl_Position=uMvp*vec4(aPosition,0.,1.);vUv=(uTransform*vec4(uRect.xy+aUv*uRect.zw,0.,1.)).xy;}",
            "#extension GL_OES_EGL_image_external : require\nprecision highp float; uniform samplerExternalOES uTexture; uniform samplerExternalOES uCamera; uniform mat4 uCameraTransform; uniform vec4 uViewport; uniform vec4 uProjection; uniform vec4 uGlass; uniform vec2 uSpan; uniform float uRotation; uniform bool uBackdrop; varying vec2 vUv; varying vec2 vLocal; vec3 cameraAt(vec2 p){return texture2D(uCamera,clamp(p,0.,1.)).rgb;} void main(){vec4 c=texture2D(uTexture,vUv); if(uBackdrop && c.a>.75 && c.a<.999 && all(greaterThan(vLocal,uGlass.xy)) && all(lessThan(vLocal,uGlass.xy+uGlass.zw))){vec2 ndc=(gl_FragCoord.xy-uViewport.xy)/uViewport.zw*2.-1.; vec2 uv=((ndc+uProjection.zw)/uProjection.xy)/uSpan+.5; if(uRotation>2.5)uv=vec2(uv.y,1.-uv.x);else if(uRotation>1.5)uv=1.-uv;else if(uRotation>.5)uv=vec2(1.-uv.y,uv.x); uv=(uCameraTransform*vec4(uv,0.,1.)).xy; vec2 d=vec2(.009); vec3 blurred=(cameraAt(uv)*2.+cameraAt(uv+vec2(d.x,0.))+cameraAt(uv-vec2(d.x,0.))+cameraAt(uv+vec2(0.,d.y))+cameraAt(uv-vec2(0.,d.y)))/6.; c=vec4(c.rgb+blurred*(1.-c.a),1.);} gl_FragColor=c;}");
        aPosition=GLES20.glGetAttribLocation(program,"aPosition"); aUv=GLES20.glGetAttribLocation(program,"aUv");
        uMvp=GLES20.glGetUniformLocation(program,"uMvp"); uTexture=GLES20.glGetUniformLocation(program,"uTexture");
        uTransform=GLES20.glGetUniformLocation(program,"uTransform"); uRect=GLES20.glGetUniformLocation(program,"uRect");
        // A full-screen camera pass before *any* world surfaces. Camera image is never world-locked.
        cameraProgram = link(
            "attribute vec2 aPosition; varying vec2 vNdc; void main(){vNdc=aPosition;gl_Position=vec4(aPosition,0.,1.);}",
            "#extension GL_OES_EGL_image_external : require\nprecision highp float; varying vec2 vNdc; uniform samplerExternalOES uTexture; uniform mat4 uTransform; uniform vec4 uProjection; uniform vec2 uSpan; uniform float uRotation; void main(){vec2 ray=(vNdc+uProjection.zw)/uProjection.xy; vec2 uv=clamp(ray/uSpan+.5,0.,1.); if(uRotation>2.5) uv=vec2(uv.y,1.-uv.x); else if(uRotation>1.5) uv=1.-uv; else if(uRotation>.5) uv=vec2(1.-uv.y,uv.x); gl_FragColor=vec4(texture2D(uTexture,(uTransform*vec4(uv,0.,1.)).xy).rgb,1.);}");
    }
    static List<Panel> decode(String json) throws Exception {
        JSONArray arr = new JSONArray(json);
        if(arr.length()>24) throw new IllegalArgumentException("Too many spatial surfaces");
        List<Panel> result = new ArrayList<>();
        for(int i=0;i<arr.length();i++) {
            JSONObject o=arr.getJSONObject(i); Panel p=new Panel();
            p.browser=o.optString("browser", ""); p.overlay=o.optBoolean("overlay");
            JSONArray m=o.getJSONArray("matrix"), r=o.getJSONArray("rect");
            JSONArray glass=o.optJSONArray("glass"); if(glass!=null) for(int k=0;k<4;k++) p.glass[k]=(float)glass.getDouble(k);
            for(int k=0;k<16;k++) { p.matrix[k]=(float)m.getDouble(k); if(!Float.isFinite(p.matrix[k])) throw new IllegalArgumentException("Invalid transform"); }
            float x=(float)r.getDouble(0), y=(float)r.getDouble(1), w=(float)r.getDouble(2), h=(float)r.getDouble(3);
            p.uv[0]=x/ATLAS; p.uv[1]=1-(y+h)/ATLAS; p.uv[2]=w/ATLAS; p.uv[3]=h/ATLAS;
            if(!p.browser.isEmpty()) { JSONArray uv=o.getJSONArray("uv"); for(int k=0;k<4;k++) p.uv[k]=(float)uv.getDouble(k); }
            result.add(p);
        }
        return result;
    }
    void update() { camera.update(); atlas.update(); for(Texture t:browsers.values()) t.update(); }
    void draw(float[] view, float[] projection) {
        eyeProjection=projection; GLES20.glGetIntegerv(GLES20.GL_VIEWPORT,viewport,0);
        GLES20.glDisable(GLES20.GL_CULL_FACE); GLES20.glDisable(GLES20.GL_DEPTH_TEST); GLES20.glDisable(GLES20.GL_BLEND);
        if(camera.ready) drawCamera(projection);
        GLES20.glEnable(GLES20.GL_BLEND);
        // Android's hardware surfaces are premultiplied, including CSS shadows and translucent glass.
        GLES20.glBlendFunc(GLES20.GL_ONE, GLES20.GL_ONE_MINUS_SRC_ALPHA);
        List<Panel> sorted = new ArrayList<>(panels);
        sorted.sort(Comparator.comparingDouble(p -> p.overlay ? Double.MAX_VALUE : depth(p,view)));
        for(Panel p:sorted) {
            Texture tex=p.browser.isEmpty()?atlas:browsers.get(p.browser);
            if(tex==null || !tex.ready) continue;
            Matrix.multiplyMM(mv,0,p.overlay?identity:view,0,p.matrix,0);
            Matrix.multiplyMM(mvp,0,projection,0,mv,0);
            drawTexture(tex,mvp,p);
        }
        GLES20.glDisable(GLES20.GL_BLEND);
    }
    private float depth(Panel p,float[] v) { return v[2]*p.matrix[12]+v[6]*p.matrix[13]+v[10]*p.matrix[14]+v[14]; }
    private void drawTexture(Texture tex,float[] matrix,Panel panel) {
        float[] uv=panel.uv;
        GLES20.glUseProgram(program);
        GLES20.glUniform1i(GLES20.glGetUniformLocation(program,"uBackdrop"),camera.ready && !panel.overlay && panel.browser.isEmpty()?1:0);
        GLES20.glUniform4fv(GLES20.glGetUniformLocation(program,"uGlass"),1,panel.glass,0);
        GLES20.glUniform4f(GLES20.glGetUniformLocation(program,"uViewport"),viewport[0],viewport[1],viewport[2],viewport[3]);
        GLES20.glUniform4f(GLES20.glGetUniformLocation(program,"uProjection"),eyeProjection[0],eyeProjection[5],eyeProjection[8],eyeProjection[9]);
        GLES20.glUniform2f(GLES20.glGetUniformLocation(program,"uSpan"),spanX,spanY);
        GLES20.glUniform1f(GLES20.glGetUniformLocation(program,"uRotation"),cameraRotation/90f);
        GLES20.glUniformMatrix4fv(GLES20.glGetUniformLocation(program,"uCameraTransform"),1,false,camera.transform,0);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE1); GLES20.glBindTexture(GLES11Ext.GL_TEXTURE_EXTERNAL_OES,camera.id);
        GLES20.glUniform1i(GLES20.glGetUniformLocation(program,"uCamera"),1);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0); GLES20.glBindTexture(GLES11Ext.GL_TEXTURE_EXTERNAL_OES,tex.id);
        GLES20.glUniform1i(uTexture,0); GLES20.glUniformMatrix4fv(uMvp,1,false,matrix,0);
        GLES20.glUniformMatrix4fv(uTransform,1,false,tex.transform,0); GLES20.glUniform4fv(uRect,1,uv,0);
        vertices.position(0); GLES20.glVertexAttribPointer(aPosition,2,GLES20.GL_FLOAT,false,16,vertices);
        vertices.position(2); GLES20.glVertexAttribPointer(aUv,2,GLES20.GL_FLOAT,false,16,vertices);
        GLES20.glEnableVertexAttribArray(aPosition); GLES20.glEnableVertexAttribArray(aUv);
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP,0,4);
        GLES20.glDisableVertexAttribArray(aPosition); GLES20.glDisableVertexAttribArray(aUv);
    }
    private void drawCamera(float[] p) {
        GLES20.glUseProgram(cameraProgram);
        int a=GLES20.glGetAttribLocation(cameraProgram,"aPosition");
        screen.position(0); GLES20.glVertexAttribPointer(a,2,GLES20.GL_FLOAT,false,8,screen); GLES20.glEnableVertexAttribArray(a);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0); GLES20.glBindTexture(GLES11Ext.GL_TEXTURE_EXTERNAL_OES,camera.id);
        GLES20.glUniform1i(GLES20.glGetUniformLocation(cameraProgram,"uTexture"),0);
        GLES20.glUniformMatrix4fv(GLES20.glGetUniformLocation(cameraProgram,"uTransform"),1,false,camera.transform,0);
        GLES20.glUniform4f(GLES20.glGetUniformLocation(cameraProgram,"uProjection"),p[0],p[5],p[8],p[9]);
        // Same 72-degree reference interaction viewport as the HTML prototype. Aspect-fill, no stretch.
        float referenceY=2*(float)Math.tan(Math.toRadians(36));
        float sx=2*(1+Math.abs(p[8]))/p[0], sy=2*(1+Math.abs(p[9]))/p[5];
        sx=Math.max(sx,sy*cameraAspect); sy=sx/cameraAspect;
        mappingX=sx/(referenceY*1.5f); mappingY=sy/referenceY; spanX=sx; spanY=sy;
        GLES20.glUniform2f(GLES20.glGetUniformLocation(cameraProgram,"uSpan"),sx,sy);
        GLES20.glUniform1f(GLES20.glGetUniformLocation(cameraProgram,"uRotation"),cameraRotation/90f);
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP,0,4); GLES20.glDisableVertexAttribArray(a);
    }
    private static FloatBuffer floats(float[] a) { FloatBuffer b=ByteBuffer.allocateDirect(a.length*4).order(ByteOrder.nativeOrder()).asFloatBuffer(); b.put(a).position(0); return b; }
    private static int shader(int kind,String code) {
        int id=GLES20.glCreateShader(kind); GLES20.glShaderSource(id,code); GLES20.glCompileShader(id);
        int[] ok=new int[1]; GLES20.glGetShaderiv(id,GLES20.GL_COMPILE_STATUS,ok,0);
        if(ok[0]==0) throw new IllegalStateException(GLES20.glGetShaderInfoLog(id)); return id;
    }
    private static int link(String vert,String frag) {
        int v=shader(GLES20.GL_VERTEX_SHADER,vert), f=shader(GLES20.GL_FRAGMENT_SHADER,frag), p=GLES20.glCreateProgram();
        GLES20.glAttachShader(p,v); GLES20.glAttachShader(p,f); GLES20.glLinkProgram(p);
        GLES20.glDeleteShader(v); GLES20.glDeleteShader(f);
        int[] ok=new int[1]; GLES20.glGetProgramiv(p,GLES20.GL_LINK_STATUS,ok,0);
        if(ok[0]==0) throw new IllegalStateException(GLES20.glGetProgramInfoLog(p)); return p;
    }
}
