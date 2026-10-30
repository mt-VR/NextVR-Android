package com.nextvr.app;

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
            GLES20.glTexParameterf(GLES11Ext.GL_TEXTURE_EXTERNAL_OES, 0x84FE, 4.0f);
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
        String id = "";
        String browser;
        boolean overlay;
        boolean homeOverlay;
        final float[] matrix = new float[16], uv = new float[4];
        /**
         * The RIGHT eye's sampling rect of a hosted headset game (PhoneXR): the runtime presents its
         * stereo picture side by side inside one canvas, so the left pass samples the left half of
         * the game and the right pass the right half — `uv` minus the other half's width. Identical
         * to {@code uv} for every other surface, which is how the shader stays one program.
         */
        final float[] uvR = new float[4];
        final float[] glass = new float[]{0,0,1,1};
        /** Curvatura 360 da janela (radianos de meia-abertura; 0 = plana). */
        float curve;
        /** Matriz do painel sem a escala: a dobra do cilindro e feita em metros. */
        final float[] flat = new float[16];
        float scaleX = 1, scaleY = 1, scaleZ = 1;
        /** Raio do cilindro em metros (0 = sem curvatura). */
        float curveRadius;
    }
    static final class CameraTexture {
        final int id;
        private android.graphics.Bitmap pending;
        private boolean closed;
        volatile boolean active, ready;
        int width, height;
        CameraTexture() {
            int[] ids=new int[1];GLES20.glGenTextures(1,ids,0);id=ids[0];
            GLES20.glBindTexture(GLES20.GL_TEXTURE_2D,id);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_MIN_FILTER,GLES20.GL_LINEAR);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_MAG_FILTER,GLES20.GL_LINEAR);
            GLES20.glTexParameterf(GLES20.GL_TEXTURE_2D,0x84FE,4.0f);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_WRAP_S,GLES20.GL_CLAMP_TO_EDGE);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_WRAP_T,GLES20.GL_CLAMP_TO_EDGE);
        }
        synchronized void offer(android.graphics.Bitmap bitmap) {
            if(closed){bitmap.recycle();return;}
            if(pending!=null)pending.recycle();pending=bitmap;active=true;
        }
        synchronized void clear() { active=ready=false;if(pending!=null){pending.recycle();pending=null;} }
        synchronized void release() { closed=true;clear(); }
        /**
         * Take the frame under the monitor, then upload OUTSIDE it. The camera thread calls offer()
         * for every frame; if the 3.6 MB texSubImage2D is issued while the monitor is held, a busy
         * GL thread (rasterizing an open app) makes the camera callback wait on the display path -
         * and the camera callback is the only producer of tracking input, so the landmark rate drops
         * with the picture still looking perfectly smooth.
         */
        void update() {
            android.graphics.Bitmap bitmap;
            synchronized(this) {
                bitmap=pending;pending=null;
                if(bitmap==null)return;
            }
            GLES20.glActiveTexture(GLES20.GL_TEXTURE0);GLES20.glBindTexture(GLES20.GL_TEXTURE_2D,id);
            if(width==bitmap.getWidth() && height==bitmap.getHeight()) android.opengl.GLUtils.texSubImage2D(GLES20.GL_TEXTURE_2D,0,0,0,bitmap);
            else { android.opengl.GLUtils.texImage2D(GLES20.GL_TEXTURE_2D,0,bitmap,0);width=bitmap.getWidth();height=bitmap.getHeight(); }
            bitmap.recycle();
            synchronized(this) { ready=active; }
        }
    }
    /**
     * Ambiente panoramico 360: o bitmap e decodificado fora da GL thread (a interface pede pelo
     * bridge) e sobe para a textura no proximo frame, igual ao caminho da camera.
     *
     * O wrap e CLAMP_TO_EDGE de proposito, nos dois eixos: a textura tem 3072x1536 (nao e potencia
     * de dois) e, num contexto GLES2 estrito, wrap REPEAT/filtro com mipmap em textura NPOT da
     * textura INCOMPLETA — e textura incompleta amostra preto, ou seja, o ceu sumiria. A costura em
     * +-180 graus perde a interpolacao de uma coluna, o que nao se ve num fundo desfocado; um ceu
     * preto se veria. Sem mipmap tambem: o panorama tem ~8,5 px por grau e a tela amplia no centro,
     * entao nao ha minificacao a corrigir.
     */
    static final class EnvTexture {
        final int id;
        volatile boolean ready;
        private android.graphics.Bitmap pending;
        private boolean closed;
        EnvTexture() {
            int[] ids=new int[1];GLES20.glGenTextures(1,ids,0);id=ids[0];
            GLES20.glBindTexture(GLES20.GL_TEXTURE_2D,id);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_MIN_FILTER,GLES20.GL_LINEAR);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_MAG_FILTER,GLES20.GL_LINEAR);
            GLES20.glTexParameterf(GLES20.GL_TEXTURE_2D,0x84FE,4.0f);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_WRAP_S,GLES20.GL_CLAMP_TO_EDGE);
            GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D,GLES20.GL_TEXTURE_WRAP_T,GLES20.GL_CLAMP_TO_EDGE);
        }
        synchronized void offer(android.graphics.Bitmap bitmap) {
            if(closed){bitmap.recycle();return;}
            if(pending!=null)pending.recycle();pending=bitmap;
        }
        synchronized void clear() { ready=false;if(pending!=null){pending.recycle();pending=null;} }
        synchronized void release() { closed=true;clear(); }
        void update() {
            android.graphics.Bitmap bitmap;
            synchronized(this) { bitmap=pending;pending=null;if(bitmap==null)return; }
            GLES20.glBindTexture(GLES20.GL_TEXTURE_2D,id);
            android.opengl.GLUtils.texImage2D(GLES20.GL_TEXTURE_2D,0,bitmap,0);
            bitmap.recycle();
            ready=true;
        }
    }
    final CameraTexture camera = new CameraTexture();
    final EnvTexture environment = new EnvTexture();
    volatile String environmentId = "passthrough";
    final Texture atlas = new Texture();
    final PhoneXrHandRenderer handRenderer = new PhoneXrHandRenderer();
    volatile InternalEyeRecorder eyeRecorder;
    volatile com.nextvr.app.hands.PhoneXrHands.Frame hands;
    volatile String handTargets = "[]";
    volatile boolean showHands = true;
    final Map<String, Texture> browsers = new java.util.concurrent.ConcurrentHashMap<>();
    volatile List<Panel> panels = new ArrayList<>();
    // Shared optical mapping for camera, landmark overlay and interaction rays.
    volatile float cameraAspect = 4f / 3f;
    volatile float mappingX = 1, mappingY = 1;
    volatile boolean wideCamera = false;
    volatile boolean mrDim = false;
    volatile float sixDofX = 0f, sixDofY = 0f, sixDofZ = 0f;
    volatile float targetSixDofX = 0f, targetSixDofZ = 0f;
    volatile boolean worldLock = true;
    volatile boolean worldLocked = true;
    /** Target vertical resolution: High = 1440p, Medium = 1280p, Low = 1080p (never pixelates below 1080p). */
    volatile float qualityHeight = 1280f;
    void setQuality(String q) {
        if("high".equals(q)) qualityHeight = 1440f;
        else if("low".equals(q)) qualityHeight = 1080f;
        else qualityHeight = 1280f;
    }
    private final float[] identity = new float[16];
    private boolean sphere;
    private final FloatBuffer vertices = floats(new float[]{-.5f,-.5f,0,0, .5f,-.5f,1,0, -.5f,.5f,0,1, .5f,.5f,1,1});
    /** Malha dos paineis: 48 colunas, senao a dobra 360 tem so 2 vertices para curvar. */
    private static final int PANEL_COLUMNS = 48;
    private final FloatBuffer panelMesh = panelMesh();
    private static FloatBuffer panelMesh() {
        float[] v=new float[(PANEL_COLUMNS+1)*8];
        int i=0;
        for(int c=0;c<=PANEL_COLUMNS;c++) {
            float x=-.5f+c/(float)PANEL_COLUMNS, u=c/(float)PANEL_COLUMNS;
            v[i++]=x; v[i++]=-.5f; v[i++]=u; v[i++]=0f;
            v[i++]=x; v[i++]=.5f; v[i++]=u; v[i++]=1f;
        }
        return floats(v);
    }
    private final int program;
    private final int aPosition, aUv, uTexture, uTransform, uRect;
    private final int uViewProj, uFlat, uScale, uCurveR, uViewInv, uEnvSphere;
    private final int uRectR, uEye;
    private final int uPass, uBackface, uBackdrop, uGlass, uViewport, uProjection, uSpan, uCamera, uCamDim;
    private final int cameraProgram;
    private final int camAPos, camUTex, camUProj, camUSpan, camUQual, camUDim, camUSceneDim;
    /* 0 = mundo normal, 1 = quase preto. Quem mexe é o anel de 10 apps (NativeXR.setSceneDim):
     * o mundo escurece e os apps continuam com o brilho normal, dentro do headset. */
    public volatile float sceneDim = 0f;
    private final int envProgram;
    private final int envAPos, envUTex, envUProj, envUViewInv, envUQual, envUReveal, envUSceneDim;
    private volatile long envTransitionStartMs = 0L;
    private final List<Panel> sorted = new ArrayList<>(24);
    private final float[] viewInv = new float[16], viewProj = new float[16];
    private final int[] viewport = new int[4];
    volatile float spanX = 2.2f, spanY = 1.5f;
    /** Which eye this draw() belongs to: the GL viewport is the only per-eye tell there is. */
    private float eyeUniform;
    private float[] eyeProjection;
    private int renderPass;
    private final FloatBuffer screen = floats(new float[]{-1,-1, 1,-1, -1,1, 1,1});
    SpatialRenderer() {
        Matrix.setIdentityM(identity, 0);
        program = link(
            "attribute vec2 aPosition; attribute vec2 aUv; uniform mat4 uViewProj; uniform mat4 uFlat; uniform vec3 uScale; uniform float uCurveR; uniform mat4 uTransform; uniform vec4 uRect; uniform vec4 uRectR; uniform float uEye; varying vec2 vUv; varying vec2 vLocal; void main(){vLocal=aUv;vec4 rect=mix(uRect,uRectR,uEye);vUv=(uTransform*vec4(rect.xy+aUv*rect.zw,0.,1.)).xy;vec3 p=vec3(aPosition.x*uScale.x,aPosition.y*uScale.y,0.);if(uCurveR>0.){float rest=uCurveR*uCurveR-p.x*p.x;p.z=uCurveR-sqrt(max(rest,0.));}gl_Position=uViewProj*uFlat*vec4(p,1.);}",
            "#extension GL_OES_EGL_image_external : require\nprecision highp float; uniform samplerExternalOES uTexture; uniform sampler2D uCamera; uniform vec4 uViewport; uniform vec4 uProjection; uniform vec4 uGlass; uniform vec2 uSpan; uniform bool uBackdrop; uniform bool uEnvSphere; uniform mat4 uViewInv; uniform float uPass; uniform float uBackface; uniform float uCamDimDrop; varying vec2 vUv; varying vec2 vLocal; vec3 cameraAt(vec2 p){return texture2D(uCamera,clamp(p,0.,1.)).rgb*(1.-uCamDimDrop);} vec3 envAt(vec2 ndc){vec2 tangent=(ndc+uProjection.zw)/uProjection.xy; if(uEnvSphere){vec3 d=normalize(vec3(tangent.x,tangent.y,-1.)); vec3 w=(uViewInv*vec4(d,0.)).xyz; float lon=atan(w.x,-w.z); float lat=asin(clamp(w.y,-1.,1.)); return texture2D(uCamera,vec2(.5+lon*.15915494,.5-lat*.31830989)).rgb;} return cameraAt(vec2(.5+tangent.x/uSpan.x,.5-tangent.y/uSpan.y));} void main(){vec4 c=texture2D(uTexture,vUv); c.rgb=min(c.rgb,vec3(c.a)); if(uBackface>.5){bool inG=all(greaterThan(vLocal,uGlass.xy)) && all(lessThan(vLocal,uGlass.xy+uGlass.zw)); float ba=inG?max(c.a,.78):c.a*.78; vec2 ndc=(gl_FragCoord.xy-uViewport.xy)/uViewport.zw*2.-1.; vec3 bg=uBackdrop?(envAt(ndc)*2.+envAt(ndc+vec2(.009,0.))+envAt(ndc-vec2(.009,0.))+envAt(ndc+vec2(0.,.009))+envAt(ndc-vec2(0.,.009)))/6.:vec3(.92,.95,.99); vec3 frost=mix(bg,vec3(.94,.96,.99),.76); c=vec4(frost*ba,ba);} else if(uBackface<-.5 && c.a>.001){vec3 rgb=c.rgb/c.a; rgb=rgb*(.91/(1.+rgb*.09)); float lm=dot(rgb,vec3(.2126,.7152,.0722)); rgb=mix(vec3(lm),rgb,.88); c.rgb=rgb*c.a;} else if(uBackdrop && c.a>.75 && c.a<.999 && all(greaterThan(vLocal,uGlass.xy)) && all(lessThan(vLocal,uGlass.xy+uGlass.zw))){vec2 ndc=(gl_FragCoord.xy-uViewport.xy)/uViewport.zw*2.-1.; vec3 blurred=(envAt(ndc)*2.+envAt(ndc+vec2(.008,0.))+envAt(ndc-vec2(.008,0.))+envAt(ndc+vec2(0.,.008))+envAt(ndc-vec2(0.,.008)))/6.; c=vec4(min(vec3(1.),c.rgb+blurred*(1.-c.a)*.52),1.);} if(uPass<.5 && c.a<.999)discard; if(uPass>.5 && uPass<1.5 && c.a>=.999)discard; gl_FragColor=c;}");
        aPosition=GLES20.glGetAttribLocation(program,"aPosition"); aUv=GLES20.glGetAttribLocation(program,"aUv");
        uTexture=GLES20.glGetUniformLocation(program,"uTexture");
        uTransform=GLES20.glGetUniformLocation(program,"uTransform"); uRect=GLES20.glGetUniformLocation(program,"uRect");
        uViewProj=GLES20.glGetUniformLocation(program,"uViewProj"); uFlat=GLES20.glGetUniformLocation(program,"uFlat");
        uScale=GLES20.glGetUniformLocation(program,"uScale"); uCurveR=GLES20.glGetUniformLocation(program,"uCurveR");
        uRectR=GLES20.glGetUniformLocation(program,"uRectR"); uEye=GLES20.glGetUniformLocation(program,"uEye");
        uViewInv=GLES20.glGetUniformLocation(program,"uViewInv"); uEnvSphere=GLES20.glGetUniformLocation(program,"uEnvSphere");
        uPass=GLES20.glGetUniformLocation(program,"uPass"); uBackface=GLES20.glGetUniformLocation(program,"uBackface");
        uBackdrop=GLES20.glGetUniformLocation(program,"uBackdrop"); uGlass=GLES20.glGetUniformLocation(program,"uGlass");
        uViewport=GLES20.glGetUniformLocation(program,"uViewport"); uProjection=GLES20.glGetUniformLocation(program,"uProjection");
        uSpan=GLES20.glGetUniformLocation(program,"uSpan"); uCamera=GLES20.glGetUniformLocation(program,"uCamera");
        uCamDim=GLES20.glGetUniformLocation(program,"uCamDimDrop");
        // A full-screen camera pass before *any* world surfaces. Camera image is never world-locked.
        cameraProgram = link(
            "attribute vec2 aPosition; varying vec2 vNdc; void main(){vNdc=aPosition;gl_Position=vec4(aPosition,0.,1.);}",
            "precision highp float; varying vec2 vNdc; uniform sampler2D uTexture; uniform vec4 uProjection; uniform vec2 uSpan; uniform float uQualityHeight; uniform float uDimDrop; uniform float uSceneDim; void main(){vec2 ray=(vNdc+uProjection.zw)/uProjection.xy; vec2 uv=vec2(.5+ray.x/uSpan.x,.5-ray.y/uSpan.y); if(uQualityHeight>100. && uQualityHeight<1000.){vec2 grid=vec2(uQualityHeight*1.7778,uQualityHeight); uv=(floor(uv*grid)+.5)/grid;} gl_FragColor=vec4(texture2D(uTexture,clamp(uv,0.,1.)).rgb*(1.-uDimDrop)*(1.-uSceneDim),1.);}");
        camAPos=GLES20.glGetAttribLocation(cameraProgram,"aPosition");
        camUTex=GLES20.glGetUniformLocation(cameraProgram,"uTexture");
        camUProj=GLES20.glGetUniformLocation(cameraProgram,"uProjection");
        camUSpan=GLES20.glGetUniformLocation(cameraProgram,"uSpan");
        camUQual=GLES20.glGetUniformLocation(cameraProgram,"uQualityHeight");
        camUDim=GLES20.glGetUniformLocation(cameraProgram,"uDimDrop");
        camUSceneDim=GLES20.glGetUniformLocation(cameraProgram,"uSceneDim");
        // Fundo panoramico 360: a direcao do olhar sai da projecao do olho e e girada para o mundo
        // pelo inverso da view, entao o panorama gira com a cabeca. Sem uSpan: nada de aspect-fill.
        envProgram = link(
            "attribute vec2 aPosition; varying vec2 vNdc; void main(){vNdc=aPosition;gl_Position=vec4(aPosition,0.,1.);}",
            "precision highp float; varying vec2 vNdc; uniform sampler2D uTexture; uniform vec4 uProjection; uniform mat4 uViewInv; uniform float uQualityHeight; uniform float uReveal; uniform float uSceneDim; const float PI=3.14159265; void main(){vec2 t=(vNdc+uProjection.zw)/uProjection.xy; vec3 d=normalize(vec3(t.x,t.y,-1.)); vec3 w=(uViewInv*vec4(d,0.)).xyz; float lon=atan(w.x,-w.z); float lat=asin(clamp(w.y,-1.,1.)); vec2 uv=vec2(.5+lon/(2.*PI),.5-lat/PI); if(uQualityHeight>100. && uQualityHeight<1000.){vec2 grid=vec2(uQualityHeight*2.,uQualityHeight); uv=(floor(uv*grid)+.5)/grid;} vec3 envCol=texture2D(uTexture,uv).rgb*(1.-uSceneDim); if(uReveal>=.999){gl_FragColor=vec4(envCol,1.);return;} float normH=lat/PI+.5; float wave=sin(lon*5.+uReveal*8.)*.028+cos(lon*11.-uReveal*6.)*.016; float edge=uReveal*1.32-.12+wave; float alpha=1.-smoothstep(edge-.02,edge+.16,normH); float smoke=smoothstep(edge-.18,edge,normH)*(1.-smoothstep(edge,edge+.16,normH)); vec3 col=mix(envCol,vec3(.88,.91,.96),smoke*.82); gl_FragColor=vec4(col*(1.-uSceneDim)*alpha,alpha);}");
        envAPos=GLES20.glGetAttribLocation(envProgram,"aPosition");
        envUTex=GLES20.glGetUniformLocation(envProgram,"uTexture");
        envUProj=GLES20.glGetUniformLocation(envProgram,"uProjection");
        envUViewInv=GLES20.glGetUniformLocation(envProgram,"uViewInv");
        envUQual=GLES20.glGetUniformLocation(envProgram,"uQualityHeight");
        envUReveal=GLES20.glGetUniformLocation(envProgram,"uReveal");
        envUSceneDim=GLES20.glGetUniformLocation(envProgram,"uSceneDim");
    }
    static List<Panel> decode(String json) throws Exception {
        JSONArray arr = new JSONArray(json);
        if(arr.length()>24) throw new IllegalArgumentException("Too many spatial surfaces");
        List<Panel> result = new ArrayList<>();
        for(int i=0;i<arr.length();i++) {
            JSONObject o=arr.getJSONObject(i); Panel p=new Panel();
            p.id=o.optString("id", "");
            p.browser=o.optString("browser", ""); p.overlay=o.optBoolean("overlay"); p.homeOverlay=o.optBoolean("homeOverlay");
            JSONArray m=o.getJSONArray("matrix"), r=o.getJSONArray("rect");
            JSONArray glass=o.optJSONArray("glass"); if(glass!=null) for(int k=0;k<4;k++) p.glass[k]=(float)glass.getDouble(k);
            for(int k=0;k<16;k++) { p.matrix[k]=(float)m.getDouble(k); if(!Float.isFinite(p.matrix[k])) throw new IllegalArgumentException("Invalid transform"); }
            float x=(float)r.getDouble(0), y=(float)r.getDouble(1), w=(float)r.getDouble(2), h=(float)r.getDouble(3);
            p.uv[0]=x/ATLAS; p.uv[1]=1-(y+h)/ATLAS; p.uv[2]=w/ATLAS; p.uv[3]=h/ATLAS;
            if(!p.browser.isEmpty()) { JSONArray uv=o.getJSONArray("uv"); for(int k=0;k<4;k++) p.uv[k]=(float)uv.getDouble(k); }
            System.arraycopy(p.uv, 0, p.uvR, 0, 4);
            if(p.browser.startsWith("xr:")) { JSONArray uvR=o.optJSONArray("uvR");
                if(uvR!=null) for(int k=0;k<4;k++) p.uvR[k]=(float)uvR.getDouble(k); }
            else if(o.has("uvR")) { JSONArray uvR=o.optJSONArray("uvR");
                if(uvR!=null) for(int k=0;k<4;k++) p.uvR[k]=(float)uvR.getDouble(k); }
            p.curve=(float)Math.max(0,Math.min(1.2,o.optDouble("curve",0)));
            decompose(p);
            result.add(p);
        }
        return result;
    }
    /**
     * Separa a escala da rotacao na matriz do painel. A dobra 360 e feita em metros, e o raio do
     * cilindro sai da LARGURA DE CONTEUDO (nao da textura com margem): a janela mantem a mesma
     * largura na tela e so o meio recua.
     */
    private static void decompose(Panel p) {
        float sx=length(p.matrix[0],p.matrix[1],p.matrix[2]);
        float sy=length(p.matrix[4],p.matrix[5],p.matrix[6]);
        float sz=length(p.matrix[8],p.matrix[9],p.matrix[10]);
        p.scaleX=sx>1e-6f?sx:1f; p.scaleY=sy>1e-6f?sy:1f; p.scaleZ=sz>1e-6f?sz:1f;
        System.arraycopy(p.matrix,0,p.flat,0,16);
        for(int r=0;r<3;r++) { p.flat[r]/=p.scaleX; p.flat[4+r]/=p.scaleY; p.flat[8+r]/=p.scaleZ; }
        p.curveRadius=p.curve>1e-4f?(p.scaleX*Math.max(.05f,p.glass[2])*.5f)/(float)Math.sin(p.curve):0f;
    }
    private static float length(float x,float y,float z) { return (float)Math.sqrt(x*x+y*y+z*z); }
    /**
     * Ambiente escolhido na interface: um panorama 360 substitui a imagem da camera no FUNDO. A
     * camera continua rodando (o rastreamento das maos depende dela); so o passe de fundo muda.
     */
    void setEnvironment(String id, android.graphics.Bitmap bitmap) {
        envTransitionStartMs = android.os.SystemClock.uptimeMillis();
        if("black".equals(id)) { environmentId="black"; environment.clear(); return; }
        if(bitmap==null || "passthrough".equals(id)) { environmentId="passthrough"; environment.clear(); return; }
        environmentId=id; environment.offer(bitmap);
    }
    void update() { camera.update(); environment.update(); atlas.update(); for(Texture t:browsers.values()) t.update(); }
    void draw(float[] view, float[] projection) {
        eyeProjection=projection; GLES20.glGetIntegerv(GLES20.GL_VIEWPORT,viewport,0);
        // Cardboard draws this same patch of gl code once per eye against its own viewport; the
        // viewport is the signal that tells us which eye is next. That's why a headset game panel
        // samples the left view's rect in the first pass and the right view's rect in the second
        // one — the two half-images won't be split per-pass otherwise.
        eyeUniform=viewport[0]==0?0f:1f;
        if(viewport[0]==0) {
            float dx = targetSixDofX - sixDofX;
            float dz = targetSixDofZ - sixDofZ;
            float distSq = dx*dx + dz*dz;
            if(worldLock && distSq < 0.0022f*0.0022f) {
                sixDofX = targetSixDofX;
                sixDofZ = targetSixDofZ;
                worldLocked = true;
            } else {
                float alpha = Math.min(0.72f, Math.max(0.54f, 0.50f + (float)Math.sqrt(distSq) * 1.6f));
                sixDofX += dx * alpha;
                sixDofZ += dz * alpha;
                worldLocked = false;
            }
            if(Math.abs(sixDofX)<1e-4f && targetSixDofX==0f) sixDofX=0f;
            if(Math.abs(sixDofZ)<1e-4f && targetSixDofZ==0f) sixDofZ=0f;
        }
        if(sixDofX!=0f || sixDofY!=0f || sixDofZ!=0f) Matrix.translateM(view,0,-sixDofX,-sixDofY,-sixDofZ);
        Matrix.invertM(viewInv,0,view,0);
        Matrix.multiplyMM(viewProj,0,projection,0,view,0);
        boolean blackEnv="black".equals(environmentId);
        sphere=!blackEnv && environment.ready && !"passthrough".equals(environmentId);
        GLES20.glDisable(GLES20.GL_CULL_FACE); GLES20.glDisable(GLES20.GL_DEPTH_TEST); GLES20.glDisable(GLES20.GL_BLEND);
        // O mapeamento optico (span) sai da camera mesmo com panorama: e ele que poe os landmarks
        // das maos na tela, e o rastreamento continua na camera.
        if(camera.ready) mapping(projection,(float)camera.width/camera.height);
        float envReveal = 1f;
        long elapsedEnv = android.os.SystemClock.uptimeMillis() - envTransitionStartMs;
        if(elapsedEnv >= 0L && elapsedEnv < 1200L) {
            float tEnv = elapsedEnv / 1200f;
            envReveal = 1f - (1f - tEnv) * (1f - tEnv) * (1f - tEnv);
        }
        if(!blackEnv && (!handRenderer.gameHandMode || handRenderer.mrGameMode)) {
            if(sphere && envReveal >= 0.999f) {
                drawEnvironment(projection, 1f);
            } else {
                if(camera.ready) drawCamera(projection);
                if(sphere) {
                    GLES20.glEnable(GLES20.GL_BLEND);
                    GLES20.glBlendFunc(GLES20.GL_ONE, GLES20.GL_ONE_MINUS_SRC_ALPHA);
                    drawEnvironment(projection, envReveal);
                    GLES20.glDisable(GLES20.GL_BLEND);
                }
            }
        }
        GLES20.glEnable(GLES20.GL_BLEND);
        // Android's hardware surfaces are premultiplied, including CSS shadows and translucent glass.
        GLES20.glBlendFunc(GLES20.GL_ONE, GLES20.GL_ONE_MINUS_SRC_ALPHA);
        sorted.clear();
        sorted.addAll(panels);
        sorted.sort(Comparator.comparingDouble(p -> p.overlay ? Double.MAX_VALUE : depth(p,view)));
        // Opaque pixels establish depth before translucent borders/shadows. Unlike a single
        // painter pass, this also handles intersecting/detached windows without solid alpha halos.
        GLES20.glEnable(GLES20.GL_DEPTH_TEST); GLES20.glDepthFunc(GLES20.GL_LEQUAL);
        for(renderPass=0;renderPass<2;renderPass++) {
            GLES20.glDepthMask(renderPass==0);
            for(Panel p:sorted) if(!p.overlay) drawPanel(p);
        }
        GLES20.glDisable(GLES20.GL_DEPTH_TEST); GLES20.glDepthMask(true);
        com.nextvr.app.hands.PhoneXrHands.Frame handFrame=hands;
        handRenderer.virtualEnv=sphere || blackEnv;
        // The ray target is in world space; the hand pass transforms it for each eye before
        // projection, keeping the pointer over the same icon in both Cardboard lenses.
        if(handFrame!=null) handRenderer.draw(handFrame,spanX/2,spanY/2,projection,view,handTargets,showHands);
        GLES20.glBlendFunc(GLES20.GL_ONE,GLES20.GL_ONE_MINUS_SRC_ALPHA);
        renderPass=2;
        for(Panel p:sorted) if(p.overlay) drawPanel(p);
        GLES20.glDisable(GLES20.GL_BLEND);
        if(eyeUniform == 0f) {
            InternalEyeRecorder rec = eyeRecorder;
            if(rec != null) {
                long nowNs = android.os.SystemClock.elapsedRealtimeNanos();
                if(rec.shouldCaptureFrame(nowNs) && rec.beginGlPass()) {
                    float[] recProj = rec.buildFullscreenProjection(projection);
                    drawFullscreenEyePass(view, recProj, blackEnv, envReveal, handFrame);
                    rec.endGlPassAndCapture(nowNs);
                    eyeProjection = projection;
                    GLES20.glGetIntegerv(GLES20.GL_VIEWPORT, viewport, 0);
                    Matrix.multiplyMM(viewProj, 0, projection, 0, view, 0);
                }
            }
        }
    }
    private void drawFullscreenEyePass(float[] view, float[] recProj, boolean blackEnv, float envReveal,
            com.nextvr.app.hands.PhoneXrHands.Frame handFrame) {
        eyeProjection = recProj;
        GLES20.glGetIntegerv(GLES20.GL_VIEWPORT, viewport, 0);
        eyeUniform = 0f;
        Matrix.multiplyMM(viewProj, 0, recProj, 0, view, 0);
        GLES20.glDisable(GLES20.GL_CULL_FACE); GLES20.glDisable(GLES20.GL_DEPTH_TEST); GLES20.glDisable(GLES20.GL_BLEND);
        if(!blackEnv && (!handRenderer.gameHandMode || handRenderer.mrGameMode)) {
            if(sphere && envReveal >= 0.999f) {
                drawEnvironment(recProj, 1f);
            } else {
                if(camera.ready) drawCamera(recProj);
                if(sphere) {
                    GLES20.glEnable(GLES20.GL_BLEND);
                    GLES20.glBlendFunc(GLES20.GL_ONE, GLES20.GL_ONE_MINUS_SRC_ALPHA);
                    drawEnvironment(recProj, envReveal);
                    GLES20.glDisable(GLES20.GL_BLEND);
                }
            }
        }
        GLES20.glEnable(GLES20.GL_BLEND);
        GLES20.glBlendFunc(GLES20.GL_ONE, GLES20.GL_ONE_MINUS_SRC_ALPHA);
        GLES20.glEnable(GLES20.GL_DEPTH_TEST); GLES20.glDepthFunc(GLES20.GL_LEQUAL);
        for(renderPass=0;renderPass<2;renderPass++) {
            GLES20.glDepthMask(renderPass==0);
            for(Panel p:sorted) if(!p.overlay) drawPanel(p);
        }
        GLES20.glDisable(GLES20.GL_DEPTH_TEST); GLES20.glDepthMask(true);
        if(handFrame!=null) handRenderer.draw(handFrame,spanX/2,spanY/2,recProj,view,handTargets,showHands);
        GLES20.glBlendFunc(GLES20.GL_ONE,GLES20.GL_ONE_MINUS_SRC_ALPHA);
        renderPass=2;
        for(Panel p:sorted) if(p.overlay) drawPanel(p);
        GLES20.glDisable(GLES20.GL_BLEND);
    }
    private void drawPanel(Panel p) {
        if(!p.browser.isEmpty()) {
            if(p.homeOverlay) return;
            float facing = (viewInv[12] - p.flat[12]) * p.flat[8] + (viewInv[14] - p.flat[14]) * p.flat[10];
            if(!p.overlay && facing < 0f) return;
        }
        Texture tex=p.browser.isEmpty()?atlas:browsers.get(p.browser);
        if(tex==null || !tex.ready) return;
        // A matriz combinada saiu de cena: o shader aplica uViewProj*uFlat e dobra a superficie.
        drawTexture(tex,p);
    }
    private float depth(Panel p,float[] v) { return v[2]*p.matrix[12]+v[6]*p.matrix[13]+v[10]*p.matrix[14]+v[14]; }
    private void drawTexture(Texture tex,Panel panel) {
        float[] uv=panel.uv;
        GLES20.glUseProgram(program);
        GLES20.glUniform1f(uPass,renderPass);
        float ex = viewInv[12], ez = viewInv[14];
        float facing = (ex - panel.flat[12]) * panel.flat[8] + (ez - panel.flat[14]) * panel.flat[10];
        GLES20.glUniform1f(uBackface, !panel.overlay && facing < 0f ? 1f : (!panel.browser.isEmpty() ? -1f : 0f));
        GLES20.glUniform1i(uBackdrop,!"black".equals(environmentId) && (camera.ready||sphere) && qualityHeight>500f && !panel.overlay && panel.browser.isEmpty() && !"spatial-launcher".equals(panel.id) && !"left-quick-menu".equals(panel.id)?1:0);
        GLES20.glUniform1i(uEnvSphere,sphere?1:0);
        GLES20.glUniform1f(uCamDim,mrDim?0.68f:0.0f);
        GLES20.glUniformMatrix4fv(uViewInv,1,false,viewInv,0);
        GLES20.glUniform4fv(uGlass,1,panel.glass,0);
        GLES20.glUniform4f(uViewport,viewport[0],viewport[1],viewport[2],viewport[3]);
        GLES20.glUniform4f(uProjection,eyeProjection[0],eyeProjection[5],eyeProjection[8],eyeProjection[9]);
        GLES20.glUniform2f(uSpan,spanX,spanY);
        // O fundo atras do vidro e o panorama quando ele esta ativo; senao, a imagem da camera.
        GLES20.glActiveTexture(GLES20.GL_TEXTURE1); GLES20.glBindTexture(GLES20.GL_TEXTURE_2D,sphere?environment.id:camera.id);
        GLES20.glUniform1i(uCamera,1);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0); GLES20.glBindTexture(GLES11Ext.GL_TEXTURE_EXTERNAL_OES,tex.id);
        GLES20.glUniform1i(uTexture,0);
        GLES20.glUniformMatrix4fv(uFlat,1,false,panel.flat,0);
        GLES20.glUniform3f(uScale,panel.scaleX,panel.scaleY,panel.scaleZ);
        GLES20.glUniform1f(uCurveR,panel.curveRadius);
        // O #hud e preso na cabeca (era desenhado com a view identidade): projecao pura, sem view.
        GLES20.glUniformMatrix4fv(uViewProj,1,false,panel.overlay?eyeProjection:viewProj,0);
        GLES20.glUniformMatrix4fv(uTransform,1,false,tex.transform,0); GLES20.glUniform4fv(uRect,1,uv,0);
        GLES20.glUniform4fv(uRectR,1,panel.uvR,0); GLES20.glUniform1f(uEye,eyeUniform);
        // Malha de 48 colunas em vez de um quad: a curvatura 360 dobra a superficie no shader.
        panelMesh.position(0); GLES20.glVertexAttribPointer(aPosition,2,GLES20.GL_FLOAT,false,16,panelMesh);
        panelMesh.position(2); GLES20.glVertexAttribPointer(aUv,2,GLES20.GL_FLOAT,false,16,panelMesh);
        GLES20.glEnableVertexAttribArray(aPosition); GLES20.glEnableVertexAttribArray(aUv);
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP,0,(PANEL_COLUMNS+1)*2);
        GLES20.glDisableVertexAttribArray(aPosition); GLES20.glDisableVertexAttribArray(aUv);
    }
    /** Same 72-degree reference interaction viewport as the HTML prototype. Aspect-fill, no stretch. */
    private void mapping(float[] p,float aspect) {
        cameraAspect=aspect;
        float referenceY=2*(float)Math.tan(Math.toRadians(36));
        float viewW=2*(1+Math.abs(p[8]))/p[0], viewH=2*(1+Math.abs(p[9]))/p[5];
        float base=Math.max(viewW,viewH*cameraAspect);
        float sx, sy;
        if(wideCamera) {
            // 0.5x Câmera Grande Ocular: campo de visão amplo sem ultrapassar [0,1] nas bordas da lente (elimina o blur/esticamento nas bordas e mantém proporção 1:1 com a mão real).
            sx=base*1.02f; sy=sx/cameraAspect;
        } else {
            // 1.0x Câmera Normal: distância focal padrão (~1.7x mais aproximada que o modo 0.5x grande ocular).
            sx=base*1.72f; sy=sx/cameraAspect;
        }
        mappingX=sx/(referenceY*1.5f); mappingY=sy/referenceY; spanX=sx; spanY=sy;
    }
    private void drawScreenQuad(int a) {
        screen.position(0); GLES20.glVertexAttribPointer(a,2,GLES20.GL_FLOAT,false,8,screen); GLES20.glEnableVertexAttribArray(a);
        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP,0,4); GLES20.glDisableVertexAttribArray(a);
    }
    private void drawCamera(float[] p) {
        GLES20.glUseProgram(cameraProgram);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0); GLES20.glBindTexture(GLES20.GL_TEXTURE_2D,camera.id);
        GLES20.glUniform1i(camUTex,0);
        GLES20.glUniform4f(camUProj,p[0],p[5],p[8],p[9]);
        GLES20.glUniform2f(camUSpan,spanX,spanY);
        GLES20.glUniform1f(camUQual,qualityHeight);
        GLES20.glUniform1f(camUDim,mrDim?0.68f:0.0f);
        GLES20.glUniform1f(camUSceneDim,sceneDim);
        drawScreenQuad(camAPos);
    }
    /** Fundo panoramico 360: esfera inteira em volta do usuario, presa ao mundo (gira com a cabeca). */
    private void drawEnvironment(float[] p, float reveal) {
        GLES20.glUseProgram(envProgram);
        GLES20.glActiveTexture(GLES20.GL_TEXTURE0); GLES20.glBindTexture(GLES20.GL_TEXTURE_2D,environment.id);
        GLES20.glUniform1i(envUTex,0);
        GLES20.glUniform4f(envUProj,p[0],p[5],p[8],p[9]);
        GLES20.glUniformMatrix4fv(envUViewInv,1,false,viewInv,0);
        GLES20.glUniform1f(envUQual,qualityHeight);
        GLES20.glUniform1f(envUReveal,reveal);
        GLES20.glUniform1f(envUSceneDim,sceneDim);
        drawScreenQuad(envAPos);
    }
    private static FloatBuffer floats(float[] a) { FloatBuffer b=ByteBuffer.allocateDirect(a.length*4).order(ByteOrder.nativeOrder()).asFloatBuffer(); b.put(a).position(0); return b; }
    private static int shader(int kind,String code) {
        int id=GLES20.glCreateShader(kind); GLES20.glShaderSource(id,code); GLES20.glCompileShader(id);
        int[] ok=new int[1]; GLES20.glGetShaderiv(id,GLES20.GL_COMPILE_STATUS,ok,0);
        if(ok[0]==0) throw new IllegalStateException(GLES20.glGetShaderInfoLog(id)); return id;
    }
    static int link(String vert,String frag) {
        int v=shader(GLES20.GL_VERTEX_SHADER,vert), f=shader(GLES20.GL_FRAGMENT_SHADER,frag), p=GLES20.glCreateProgram();
        GLES20.glAttachShader(p,v); GLES20.glAttachShader(p,f); GLES20.glLinkProgram(p);
        GLES20.glDeleteShader(v); GLES20.glDeleteShader(f);
        int[] ok=new int[1]; GLES20.glGetProgramiv(p,GLES20.GL_LINK_STATUS,ok,0);
        if(ok[0]==0) throw new IllegalStateException(GLES20.glGetProgramInfoLog(p)); return p;
    }
}
