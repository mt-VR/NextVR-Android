package com.dixvr.app;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Path;
import android.view.MotionEvent;
import android.webkit.WebView;
import org.json.JSONArray;
import org.json.JSONObject;

/** One embedded page, projected and clipped to the four corners of its CSS3D content surface. */
public final class ProjectedPanelWebView extends WebView {
    private final Matrix projection = new Matrix();
    private final Matrix inverse = new Matrix();
    private final Path clip = new Path();
    private final float[] corners = new float[8];
    private boolean projected;
    private boolean gestureInside;

    public ProjectedPanelWebView(Context context) {
        super(context);
        setHorizontalScrollBarEnabled(false);
        setVerticalScrollBarEnabled(false);
    }

    public void updateProjection(String json, PanelBounds bounds) {
        boolean wasProjected = projected;
        projected = false;
        try {
            JSONArray points = new JSONObject(json).optJSONArray("quad");
            if (points != null && points.length() == 8 && bounds.visible) {
                boolean changed = !wasProjected;
                for (int i = 0; i < 8; i++) {
                    float value = (float) points.getDouble(i);
                    value = (i % 2 == 0)
                        ? value * bounds.scaleX - bounds.leftPx
                        : value * bounds.scaleY - bounds.topPx;
                    if (Float.isNaN(value) || Float.isInfinite(value)) throw new IllegalArgumentException("Invalid quad");
                    if (Math.abs(corners[i] - value) > .15f) changed = true;
                    corners[i] = value;
                }
                float[] source = {0, 0, bounds.widthPx, 0, bounds.widthPx, bounds.heightPx, 0, bounds.heightPx};
                projected = projection.setPolyToPoly(source, 0, corners, 0, 4) && projection.invert(inverse);
                clip.reset();
                clip.moveTo(corners[0], corners[1]);
                for (int i = 2; i < 8; i += 2) clip.lineTo(corners[i], corners[i + 1]);
                clip.close();
                if (changed) invalidate();
            }
        } catch (Exception invalidGeometry) {
            projection.reset();
        }
        if (wasProjected != projected) invalidate();
    }

    @Override public void draw(Canvas canvas) {
        if (!projected) { super.draw(canvas); return; }
        int saved = canvas.save();
        canvas.clipPath(clip);
        canvas.concat(projection);
        super.draw(canvas);
        canvas.restoreToCount(saved);
    }

    @Override public boolean dispatchTouchEvent(MotionEvent event) {
        if (!projected) return super.dispatchTouchEvent(event);
        MotionEvent local = MotionEvent.obtain(event);
        local.transform(inverse);
        if (event.getActionMasked() == MotionEvent.ACTION_DOWN) {
            gestureInside = local.getX() >= 0 && local.getX() < getWidth()
                && local.getY() >= 0 && local.getY() < getHeight();
        }
        boolean handled = gestureInside && super.dispatchTouchEvent(local);
        local.recycle();
        if (event.getActionMasked() == MotionEvent.ACTION_UP || event.getActionMasked() == MotionEvent.ACTION_CANCEL) gestureInside = false;
        return handled;
    }
}
