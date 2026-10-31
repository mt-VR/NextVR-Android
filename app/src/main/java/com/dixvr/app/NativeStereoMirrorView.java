package com.dixvr.app;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.os.Handler;
import android.os.Looper;
import android.view.PixelCopy;
import android.view.View;
import android.view.Window;
import java.util.ArrayList;
import java.util.List;

/** Visual-only right-eye copies of embedded WebViews; never starts a second page or audio player. */
public final class NativeStereoMirrorView extends View {
    private final Window window;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private final Paint paint = new Paint(Paint.FILTER_BITMAP_FLAG);
    private final List<Frame> frames = new ArrayList<>();
    private boolean stereo;
    private boolean running;
    private boolean pending;
    private int generation;

    private static final class Frame {
        final View source;
        Bitmap front;
        Bitmap back;
        final Rect destination = new Rect();
        boolean visible;
        Frame(View source) { this.source = source; }
    }

    public NativeStereoMirrorView(Context context, Window window) {
        super(context);
        this.window = window;
        setWillNotDraw(false);
        setClickable(false);
        setImportantForAccessibility(IMPORTANT_FOR_ACCESSIBILITY_NO);
    }

    public void addSource(View source) { frames.add(new Frame(source)); }

    public void setStereo(boolean enabled) {
        stereo = enabled;
        generation++;
        setVisibility(enabled ? VISIBLE : GONE);
        schedule();
    }

    public void setRunning(boolean enabled) {
        running = enabled;
        generation++;
        handler.removeCallbacks(tick);
        schedule();
    }

    private void schedule() {
        handler.removeCallbacks(tick);
        if (stereo && running && !pending) handler.postDelayed(tick, 33L);
    }

    private final Runnable tick = new Runnable() {
        @Override public void run() {
            if (!stereo || !running || pending || getWidth() <= 0) return;
            for (Frame frame : frames) frame.visible = false;
            capture(0, generation);
        }
    };

    private void capture(int index, int token) {
        if (token != generation || !running || !stereo || index >= frames.size()) {
            pending = false;
            invalidate();
            schedule();
            return;
        }
        Frame frame = frames.get(index);
        View source = frame.source;
        if (!source.isShown() || source.getWidth() < 1 || source.getHeight() < 1) {
            capture(index + 1, token);
            return;
        }
        int[] location = new int[2];
        int[] origin = new int[2];
        source.getLocationInWindow(location);
        getLocationInWindow(origin);
        Rect crop = new Rect(location[0], location[1], location[0] + source.getWidth(), location[1] + source.getHeight());
        // Capture only the left eye: avoids recursively capturing our own right-eye copy.
        if (!crop.intersect(origin[0], origin[1], origin[0] + getWidth() / 2, origin[1] + getHeight())) {
            capture(index + 1, token);
            return;
        }
        float ratio = Math.min(1f, 896f / Math.max(crop.width(), crop.height()));
        int width = Math.max(1, Math.round(crop.width() * ratio));
        int height = Math.max(1, Math.round(crop.height() * ratio));
        if (frame.back == null || frame.back.getWidth() != width || frame.back.getHeight() != height) {
            frame.back = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
        }
        pending = true;
        try {
            PixelCopy.request(window, crop, frame.back, result -> {
                if (result == PixelCopy.SUCCESS && token == generation) {
                    Bitmap old = frame.front;
                    frame.front = frame.back;
                    frame.back = old;
                    frame.destination.set(crop);
                    frame.destination.offset(getWidth() / 2 - origin[0], -origin[1]);
                    frame.visible = true;
                }
                capture(index + 1, token);
            }, handler);
        } catch (IllegalArgumentException unavailableSurface) {
            capture(index + 1, token);
        }
    }

    @Override protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (!stereo || !running) return;
        canvas.save();
        canvas.clipRect(getWidth() / 2, 0, getWidth(), getHeight());
        for (Frame frame : frames) {
            if (frame.visible && frame.source.isShown() && frame.front != null) {
                canvas.drawBitmap(frame.front, null, frame.destination, paint);
            }
        }
        canvas.restore();
    }

    public void release() {
        setRunning(false);
        frames.clear();
    }
}
