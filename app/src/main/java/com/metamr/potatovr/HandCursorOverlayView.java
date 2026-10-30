package com.metamr.potatovr;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.view.MotionEvent;
import android.view.View;

/**
 * Camada transparente de topo que desenha o cursor da mão (Aura Neon / indicador + anel de dwell)
 * quando uma sub-WebView nativa (Google ou YouTube) está visível acima da WebView principal.
 * Não intercepta eventos de toque.
 */
public final class HandCursorOverlayView extends View {
    private final Paint glowPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint ringPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint arcPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint dotPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final RectF arcBounds = new RectF();

    private float cursorX;
    private float cursorY;
    private float dwellProgress;
    private boolean cursorVisible;

    public HandCursorOverlayView(Context context) {
        super(context);
        setClickable(false);
        setFocusable(false);
        setImportantForAccessibility(IMPORTANT_FOR_ACCESSIBILITY_NO);

        float d = context.getResources().getDisplayMetrics().density;

        glowPaint.setStyle(Paint.Style.FILL);
        glowPaint.setColor(Color.argb(68, 0, 240, 255));

        ringPaint.setStyle(Paint.Style.STROKE);
        ringPaint.setStrokeWidth(2f * d);
        ringPaint.setColor(Color.argb(215, 0, 240, 255));

        arcPaint.setStyle(Paint.Style.STROKE);
        arcPaint.setStrokeCap(Paint.Cap.ROUND);
        arcPaint.setStrokeWidth(3.2f * d);
        arcPaint.setColor(Color.argb(255, 124, 77, 255));

        dotPaint.setStyle(Paint.Style.FILL);
        dotPaint.setColor(Color.WHITE);
    }

    public void updateCursor(float viewX, float viewY, float progress, boolean visible) {
        boolean changed =
            this.cursorVisible != visible
                || Math.abs(this.cursorX - viewX) > 0.5f
                || Math.abs(this.cursorY - viewY) > 0.5f
                || Math.abs(this.dwellProgress - progress) > 0.01f;
        this.cursorX = viewX;
        this.cursorY = viewY;
        this.dwellProgress = Math.max(0f, Math.min(1f, progress));
        this.cursorVisible = visible;
        if (changed) {
            postInvalidateOnAnimation();
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        return false;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (!cursorVisible) {
            return;
        }
        float d = getResources().getDisplayMetrics().density;
        float glowRadius = 15f * d;
        float ringRadius = 10f * d;
        float dotRadius = 3.2f * d;

        canvas.drawCircle(cursorX, cursorY, glowRadius, glowPaint);
        canvas.drawCircle(cursorX, cursorY, ringRadius, ringPaint);
        if (dwellProgress > 0.02f) {
            float arcRadius = 13.5f * d;
            arcBounds.set(
                cursorX - arcRadius,
                cursorY - arcRadius,
                cursorX + arcRadius,
                cursorY + arcRadius
            );
            canvas.drawArc(arcBounds, -90f, 360f * dwellProgress, false, arcPaint);
        }
        canvas.drawCircle(cursorX, cursorY, dotRadius, dotPaint);
    }
}
