package com.nextvr.app;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaCodecInfo;
import android.media.MediaFormat;
import android.media.MediaMuxer;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.opengl.GLES20;
import android.opengl.GLES30;
import android.os.Build;
import android.os.Environment;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.SystemClock;
import android.provider.MediaStore;
import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.ArrayBlockingQueue;

/**
 * Gravação Interna de Tela Cheia (1 Lente sem Distorção):
 * Renderiza uma visão 16:9 tela cheia (1280x720 HD) de uma única lente diretamente em um FBO
 * offscreen (sem mostrar as duas lentes e sem desativar as lentes estéreo na tela do celular)
 * e codifica em MP4 H.264 de alta qualidade salvo em Movies/NextVR na Galeria.
 */
final class InternalEyeRecorder {
    static final int REC_W = 1280;
    static final int REC_H = 720;
    private static final int FPS = 30;
    private static final int BITRATE = 9_000_000;
    private static final long FRAME_INTERVAL_NS = 1_000_000_000L / FPS;

    interface StatusListener {
        void onStateChanged(boolean recording, int elapsedSec, String message, String savedPath);
    }

    private final Context context;
    private final StatusListener listener;
    private volatile boolean recording = false;
    private volatile long startElapsedMs = 0L;
    private volatile long lastCaptureNs = 0L;
    private volatile String lastSavedPath = "";

    // GL-thread resources (offscreen 16:9 single-eye FBO + optional PBOs)
    private int fboId = 0;
    private int colorTexId = 0;
    private int depthStencilRbId = 0;
    private final int[] pboIds = new int[]{0, 0};
    private int pboIndex = 0;
    private boolean pboPrimed = false;
    private boolean usePbo = true;
    private ByteBuffer glFallbackBuffer;
    private final int[] prevFbo = new int[1];
    private final int[] prevViewport = new int[4];
    private final float[] recProjection = new float[16];

    // Background encoder resources
    private HandlerThread encoderThread;
    private Handler encoderHandler;
    private MediaCodec encoder;
    private MediaMuxer muxer;
    private int videoTrackIndex = -1;
    private boolean muxerStarted = false;
    private File tempFile;
    private long encodedFrames = 0L;
    private boolean semiPlanar = true;
    private final ArrayBlockingQueue<byte[]> freeBuffers = new ArrayBlockingQueue<>(3);
    private byte[] yuvScratch;

    InternalEyeRecorder(Context context, StatusListener listener) {
        this.context = context.getApplicationContext();
        this.listener = listener;
    }

    boolean isRecording() {
        return recording;
    }

    int elapsedSeconds() {
        if (!recording || startElapsedMs <= 0L) return 0;
        return (int) Math.max(0L, (SystemClock.elapsedRealtime() - startElapsedMs) / 1000L);
    }

    String lastSavedPath() {
        return lastSavedPath;
    }

    synchronized boolean toggle() {
        if (recording) {
            stop();
            return false;
        } else {
            return start();
        }
    }

    synchronized boolean start() {
        if (recording) return true;
        try {
            File dir = new File(context.getExternalFilesDir(Environment.DIRECTORY_MOVIES), "NextVR");
            if (!dir.exists()) dir.mkdirs();
            String stamp = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.US).format(new Date());
            tempFile = new File(dir, "NextVR_Fullscreen_" + stamp + ".mp4");

            MediaFormat format = MediaFormat.createVideoFormat(MediaFormat.MIMETYPE_VIDEO_AVC, REC_W, REC_H);
            format.setInteger(MediaFormat.KEY_COLOR_FORMAT, MediaCodecInfo.CodecCapabilities.COLOR_FormatYUV420Flexible);
            format.setInteger(MediaFormat.KEY_BIT_RATE, BITRATE);
            format.setInteger(MediaFormat.KEY_FRAME_RATE, FPS);
            format.setInteger(MediaFormat.KEY_I_FRAME_INTERVAL, 1);

            encoder = MediaCodec.createEncoderByType(MediaFormat.MIMETYPE_VIDEO_AVC);
            encoder.configure(format, null, null, MediaCodec.CONFIGURE_FLAG_ENCODE);
            try {
                MediaFormat inputFmt = encoder.getInputFormat();
                if (inputFmt != null && inputFmt.containsKey(MediaFormat.KEY_COLOR_FORMAT)) {
                    int cf = inputFmt.getInteger(MediaFormat.KEY_COLOR_FORMAT);
                    semiPlanar = (cf != MediaCodecInfo.CodecCapabilities.COLOR_FormatYUV420Planar
                            && cf != MediaCodecInfo.CodecCapabilities.COLOR_FormatYUV420PackedPlanar);
                }
            } catch (Throwable ignored) {
                semiPlanar = true;
            }
            encoder.start();

            muxer = new MediaMuxer(tempFile.getAbsolutePath(), MediaMuxer.OutputFormat.MUXER_OUTPUT_MPEG_4);
            videoTrackIndex = -1;
            muxerStarted = false;
            encodedFrames = 0L;

            freeBuffers.clear();
            int rgbaBytes = REC_W * REC_H * 4;
            for (int i = 0; i < 3; i++) {
                freeBuffers.offer(new byte[rgbaBytes]);
            }
            int yuvBytes = REC_W * REC_H * 3 / 2;
            if (yuvScratch == null || yuvScratch.length != yuvBytes) {
                yuvScratch = new byte[yuvBytes];
            }

            encoderThread = new HandlerThread("NextVR-EyeRecorder");
            encoderThread.start();
            encoderHandler = new Handler(encoderThread.getLooper());

            startElapsedMs = SystemClock.elapsedRealtime();
            lastCaptureNs = 0L;
            pboPrimed = false;
            recording = true;
            notifyState(true, 0, "Gravando Tela Cheia (1 Lente HD)...", "");
            return true;
        } catch (Throwable t) {
            android.util.Log.e("NextVR-Recorder", "Failed to start internal recording", t);
            cleanupEncoderQuietly();
            recording = false;
            notifyState(false, 0, "Erro ao iniciar gravação: " + t.getMessage(), "");
            return false;
        }
    }

    synchronized void stop() {
        if (!recording) return;
        recording = false;
        final int totalSec = (int) Math.max(1L, (SystemClock.elapsedRealtime() - startElapsedMs) / 1000L);
        final Handler h = encoderHandler;
        final HandlerThread ht = encoderThread;
        encoderHandler = null;
        encoderThread = null;
        if (h != null) {
            h.post(() -> {
                String saved = finishAndPublish();
                if (ht != null) ht.quitSafely();
                if (saved != null && !saved.isEmpty()) {
                    lastSavedPath = saved;
                    notifyState(false, totalSec, "Vídeo em Tela Cheia salvo na Galeria (" + totalSec + "s)", saved);
                } else {
                    notifyState(false, totalSec, "Gravação finalizada", "");
                }
            });
        } else {
            cleanupEncoderQuietly();
            notifyState(false, totalSec, "Gravação finalizada", "");
        }
    }

    boolean shouldCaptureFrame(long nowNs) {
        if (!recording) return false;
        if (nowNs - lastCaptureNs < FRAME_INTERVAL_NS) return false;
        return !freeBuffers.isEmpty();
    }

    float[] buildFullscreenProjection(float[] eyeProj) {
        System.arraycopy(eyeProj, 0, recProjection, 0, 16);
        float aspect = (float) REC_W / (float) REC_H;
        // Usa o FOV vertical da lente mas centraliza o eixo óptico (sem offset de lente estereoscópica)
        // e preenche 16:9 tela cheia sem bordas das lentes.
        float fy = Math.abs(eyeProj[5]) > 0.1f ? eyeProj[5] : 1.15f;
        recProjection[0] = fy / aspect;
        recProjection[5] = fy;
        recProjection[8] = 0f;
        recProjection[9] = 0f;
        return recProjection;
    }

    boolean beginGlPass() {
        ensureGlTargets();
        if (fboId == 0) return false;
        GLES20.glGetIntegerv(GLES20.GL_FRAMEBUFFER_BINDING, prevFbo, 0);
        GLES20.glGetIntegerv(GLES20.GL_VIEWPORT, prevViewport, 0);
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, fboId);
        GLES20.glViewport(0, 0, REC_W, REC_H);
        GLES20.glDisable(GLES20.GL_SCISSOR_TEST);
        GLES20.glClearColor(0f, 0f, 0f, 1f);
        GLES20.glClear(GLES20.GL_COLOR_BUFFER_BIT | GLES20.GL_DEPTH_BUFFER_BIT | GLES20.GL_STENCIL_BUFFER_BIT);
        return true;
    }

    void endGlPassAndCapture(long nowNs) {
        lastCaptureNs = nowNs;
        int byteCount = REC_W * REC_H * 4;
        byte[] dst = freeBuffers.poll();
        if (dst != null) {
            boolean captured = false;
            if (usePbo && pboIds[0] != 0 && pboIds[1] != 0) {
                try {
                    int writeIdx = pboIndex;
                    int readIdx = 1 - pboIndex;
                    GLES30.glBindBuffer(GLES30.GL_PIXEL_PACK_BUFFER, pboIds[writeIdx]);
                    GLES30.glReadPixels(0, 0, REC_W, REC_H, GLES20.GL_RGBA, GLES20.GL_UNSIGNED_BYTE, 0);
                    if (pboPrimed) {
                        GLES30.glBindBuffer(GLES30.GL_PIXEL_PACK_BUFFER, pboIds[readIdx]);
                        java.nio.Buffer mapped = GLES30.glMapBufferRange(
                                GLES30.GL_PIXEL_PACK_BUFFER, 0, byteCount, GLES30.GL_MAP_READ_BIT);
                        if (mapped instanceof ByteBuffer) {
                            ByteBuffer bb = (ByteBuffer) mapped;
                            bb.position(0);
                            bb.get(dst, 0, byteCount);
                            captured = true;
                        }
                        GLES30.glUnmapBuffer(GLES30.GL_PIXEL_PACK_BUFFER);
                    } else {
                        pboPrimed = true;
                    }
                    GLES30.glBindBuffer(GLES30.GL_PIXEL_PACK_BUFFER, 0);
                    pboIndex = readIdx;
                } catch (Throwable t) {
                    usePbo = false;
                    try { GLES30.glBindBuffer(GLES30.GL_PIXEL_PACK_BUFFER, 0); } catch (Throwable ignored) {}
                }
            }
            if (!captured && !usePbo) {
                if (glFallbackBuffer == null || glFallbackBuffer.capacity() < byteCount) {
                    glFallbackBuffer = ByteBuffer.allocateDirect(byteCount).order(ByteOrder.nativeOrder());
                }
                glFallbackBuffer.position(0);
                GLES20.glReadPixels(0, 0, REC_W, REC_H, GLES20.GL_RGBA, GLES20.GL_UNSIGNED_BYTE, glFallbackBuffer);
                glFallbackBuffer.position(0);
                glFallbackBuffer.get(dst, 0, byteCount);
                captured = true;
            }
            if (captured) {
                final Handler h = encoderHandler;
                if (h != null && recording) {
                    h.post(() -> encodeRgbaFrame(dst));
                } else {
                    freeBuffers.offer(dst);
                }
            } else {
                freeBuffers.offer(dst);
            }
        }
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, prevFbo[0]);
        GLES20.glViewport(prevViewport[0], prevViewport[1], prevViewport[2], prevViewport[3]);
    }

    private void ensureGlTargets() {
        if (fboId != 0) return;
        int[] ids = new int[2];
        GLES20.glGenTextures(1, ids, 0);
        colorTexId = ids[0];
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, colorTexId);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MIN_FILTER, GLES20.GL_LINEAR);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MAG_FILTER, GLES20.GL_LINEAR);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_S, GLES20.GL_CLAMP_TO_EDGE);
        GLES20.glTexParameteri(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_T, GLES20.GL_CLAMP_TO_EDGE);
        GLES20.glTexImage2D(GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGBA, REC_W, REC_H, 0,
                GLES20.GL_RGBA, GLES20.GL_UNSIGNED_BYTE, null);

        GLES20.glGenRenderbuffers(1, ids, 0);
        depthStencilRbId = ids[0];
        GLES20.glBindRenderbuffer(GLES20.GL_RENDERBUFFER, depthStencilRbId);
        GLES20.glRenderbufferStorage(GLES20.GL_RENDERBUFFER, GLES30.GL_DEPTH24_STENCIL8, REC_W, REC_H);

        GLES20.glGenFramebuffers(1, ids, 0);
        fboId = ids[0];
        GLES20.glBindFramebuffer(GLES20.GL_FRAMEBUFFER, fboId);
        GLES20.glFramebufferTexture2D(GLES20.GL_FRAMEBUFFER, GLES20.GL_COLOR_ATTACHMENT0,
                GLES20.GL_TEXTURE_2D, colorTexId, 0);
        GLES20.glFramebufferRenderbuffer(GLES20.GL_FRAMEBUFFER, GLES20.GL_DEPTH_ATTACHMENT,
                GLES20.GL_RENDERBUFFER, depthStencilRbId);
        GLES20.glFramebufferRenderbuffer(GLES20.GL_FRAMEBUFFER, GLES20.GL_STENCIL_ATTACHMENT,
                GLES20.GL_RENDERBUFFER, depthStencilRbId);

        int status = GLES20.glCheckFramebufferStatus(GLES20.GL_FRAMEBUFFER);
        if (status != GLES20.GL_FRAMEBUFFER_COMPLETE) {
            releaseGl();
            return;
        }
        try {
            GLES30.glGenBuffers(2, pboIds, 0);
            int byteCount = REC_W * REC_H * 4;
            for (int i = 0; i < 2; i++) {
                GLES30.glBindBuffer(GLES30.GL_PIXEL_PACK_BUFFER, pboIds[i]);
                GLES30.glBufferData(GLES30.GL_PIXEL_PACK_BUFFER, byteCount, null, GLES30.GL_STREAM_READ);
            }
            GLES30.glBindBuffer(GLES30.GL_PIXEL_PACK_BUFFER, 0);
            usePbo = true;
        } catch (Throwable t) {
            usePbo = false;
        }
    }

    void releaseGl() {
        if (fboId != 0) {
            GLES20.glDeleteFramebuffers(1, new int[]{fboId}, 0);
            fboId = 0;
        }
        if (colorTexId != 0) {
            GLES20.glDeleteTextures(1, new int[]{colorTexId}, 0);
            colorTexId = 0;
        }
        if (depthStencilRbId != 0) {
            GLES20.glDeleteRenderbuffers(1, new int[]{depthStencilRbId}, 0);
            depthStencilRbId = 0;
        }
        if (pboIds[0] != 0 || pboIds[1] != 0) {
            try { GLES30.glDeleteBuffers(2, pboIds, 0); } catch (Throwable ignored) {}
            pboIds[0] = pboIds[1] = 0;
        }
        pboPrimed = false;
    }

    private void encodeRgbaFrame(byte[] rgba) {
        try {
            if (encoder == null) return;
            int inIdx = encoder.dequeueInputBuffer(10_000L);
            if (inIdx >= 0) {
                ByteBuffer inBuf = encoder.getInputBuffer(inIdx);
                if (inBuf != null) {
                    rgbaToYuv420Flipped(rgba, yuvScratch, REC_W, REC_H, semiPlanar);
                    inBuf.clear();
                    int len = Math.min(inBuf.remaining(), yuvScratch.length);
                    inBuf.put(yuvScratch, 0, len);
                    long ptsUs = (encodedFrames * 1_000_000L) / FPS;
                    encodedFrames++;
                    encoder.queueInputBuffer(inIdx, 0, len, ptsUs, 0);
                }
            }
            drainOutput(false);
        } catch (Throwable t) {
            android.util.Log.w("NextVR-Recorder", "Frame encode error", t);
        } finally {
            freeBuffers.offer(rgba);
        }
    }

    private static void rgbaToYuv420Flipped(byte[] rgba, byte[] yuv, int width, int height, boolean nv12) {
        final int frameSize = width * height;
        int yIndex = 0;
        int uvIndex = frameSize;
        int uIndex = frameSize;
        int vIndex = frameSize + frameSize / 4;
        for (int j = 0; j < height; j++) {
            // Inverte verticalmente porque glReadPixels tem origem no canto inferior esquerdo.
            int srcRow = (height - 1 - j) * width * 4;
            boolean evenRow = (j & 1) == 0;
            for (int i = 0; i < width; i++) {
                int p = srcRow + (i << 2);
                int r = rgba[p] & 0xff;
                int g = rgba[p + 1] & 0xff;
                int b = rgba[p + 2] & 0xff;
                int y = ((66 * r + 129 * g + 25 * b + 128) >> 8) + 16;
                yuv[yIndex++] = (byte) (y < 0 ? 0 : (y > 255 ? 255 : y));
                if (evenRow && (i & 1) == 0) {
                    int u = ((-38 * r - 74 * g + 112 * b + 128) >> 8) + 128;
                    int v = ((112 * r - 94 * g - 18 * b + 128) >> 8) + 128;
                    byte ub = (byte) (u < 0 ? 0 : (u > 255 ? 255 : u));
                    byte vb = (byte) (v < 0 ? 0 : (v > 255 ? 255 : v));
                    if (nv12) {
                        yuv[uvIndex++] = ub;
                        yuv[uvIndex++] = vb;
                    } else {
                        yuv[uIndex++] = ub;
                        yuv[vIndex++] = vb;
                    }
                }
            }
        }
    }

    private void drainOutput(boolean endOfStream) {
        if (encoder == null) return;
        if (endOfStream) {
            try {
                int inIdx = encoder.dequeueInputBuffer(10_000L);
                if (inIdx >= 0) {
                    long ptsUs = (encodedFrames * 1_000_000L) / FPS;
                    encoder.queueInputBuffer(inIdx, 0, 0, ptsUs, MediaCodec.BUFFER_FLAG_END_OF_STREAM);
                }
            } catch (Throwable ignored) {}
        }
        MediaCodec.BufferInfo info = new MediaCodec.BufferInfo();
        for (int loops = 0; loops < 60; loops++) {
            int outIdx = encoder.dequeueOutputBuffer(info, endOfStream ? 10_000L : 0L);
            if (outIdx == MediaCodec.INFO_TRY_AGAIN_LATER) {
                if (!endOfStream) break;
            } else if (outIdx == MediaCodec.INFO_OUTPUT_FORMAT_CHANGED) {
                if (muxer != null && !muxerStarted) {
                    videoTrackIndex = muxer.addTrack(encoder.getOutputFormat());
                    muxer.start();
                    muxerStarted = true;
                }
            } else if (outIdx >= 0) {
                ByteBuffer encodedData = encoder.getOutputBuffer(outIdx);
                if ((info.flags & MediaCodec.BUFFER_FLAG_CODEC_CONFIG) != 0) {
                    info.size = 0;
                }
                if (info.size > 0 && muxer != null && muxerStarted && encodedData != null) {
                    encodedData.position(info.offset);
                    encodedData.limit(info.offset + info.size);
                    muxer.writeSampleData(videoTrackIndex, encodedData, info);
                }
                encoder.releaseOutputBuffer(outIdx, false);
                if ((info.flags & MediaCodec.BUFFER_FLAG_END_OF_STREAM) != 0) {
                    break;
                }
            }
        }
    }

    private String finishAndPublish() {
        try {
            drainOutput(true);
        } catch (Throwable ignored) {}
        cleanupEncoderQuietly();
        if (tempFile == null || !tempFile.exists() || tempFile.length() < 512L) {
            return "";
        }
        try {
            ContentResolver resolver = context.getContentResolver();
            String fileName = tempFile.getName();
            ContentValues values = new ContentValues();
            values.put(MediaStore.Video.Media.DISPLAY_NAME, fileName);
            values.put(MediaStore.Video.Media.MIME_TYPE, "video/mp4");
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                values.put(MediaStore.Video.Media.RELATIVE_PATH, Environment.DIRECTORY_MOVIES + "/NextVR");
                values.put(MediaStore.Video.Media.IS_PENDING, 1);
            }
            Uri uri = resolver.insert(MediaStore.Video.Media.EXTERNAL_CONTENT_URI, values);
            if (uri != null) {
                try (FileInputStream in = new FileInputStream(tempFile);
                     OutputStream out = resolver.openOutputStream(uri)) {
                    if (out != null) {
                        byte[] buf = new byte[65536];
                        int r;
                        while ((r = in.read(buf)) > 0) out.write(buf, 0, r);
                        out.flush();
                    }
                }
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    ContentValues done = new ContentValues();
                    done.put(MediaStore.Video.Media.IS_PENDING, 0);
                    resolver.update(uri, done, null, null);
                }
                tempFile.delete();
                return "Movies/NextVR/" + fileName;
            }
        } catch (Throwable t) {
            android.util.Log.w("NextVR-Recorder", "MediaStore publish fallback", t);
        }
        try {
            MediaScannerConnection.scanFile(context, new String[]{tempFile.getAbsolutePath()}, new String[]{"video/mp4"}, null);
        } catch (Throwable ignored) {}
        return tempFile.getAbsolutePath();
    }

    private void cleanupEncoderQuietly() {
        if (encoder != null) {
            try { encoder.stop(); } catch (Throwable ignored) {}
            try { encoder.release(); } catch (Throwable ignored) {}
            encoder = null;
        }
        if (muxer != null) {
            try { if (muxerStarted) muxer.stop(); } catch (Throwable ignored) {}
            try { muxer.release(); } catch (Throwable ignored) {}
            muxer = null;
        }
        muxerStarted = false;
        videoTrackIndex = -1;
    }

    private void notifyState(boolean rec, int sec, String msg, String path) {
        if (listener != null) {
            listener.onStateChanged(rec, sec, msg, path);
        }
    }
}
