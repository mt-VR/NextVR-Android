package com.dixvr.app;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.drawable.Drawable;
import android.widget.ImageView;
import java.io.InputStream;
import android.graphics.drawable.GradientDrawable;
import android.view.Gravity;
import android.view.MotionEvent;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import java.util.function.Consumer;
import org.json.JSONArray;
import org.json.JSONObject;

/** A single composited browser surface: frame, controls and page share ONE transform and clip. */
public final class ProjectedBrowserPanel extends FrameLayout {
    private final Matrix projection = new Matrix();
    private final Matrix inverse = new Matrix();
    private final Path clip = new Path();
    private final Path rounded = new Path();
    private final LinearLayout content;
    private final TextView title;
    private final ImageView appIcon;
    private final TextView address;
    private final float density;
    private int logicalWidth;
    private int logicalHeight;
    private boolean ready;
    private boolean gestureInside;

    public ProjectedBrowserPanel(Context context, WebView page, String appId, String name, Consumer<String> action) {
        super(context);
        density = getResources().getDisplayMetrics().density;
        setClipChildren(false);
        setClipToPadding(false);
        content = new LinearLayout(context);
        content.setOrientation(LinearLayout.VERTICAL);
        content.setBackgroundColor(Color.WHITE);
        title = label(name, 16);
        title.setTextColor(Color.rgb(30, 38, 49));
        LinearLayout header = row();
        header.setBackgroundColor(Color.rgb(237, 242, 248));
        appIcon = new ImageView(context);
        appIcon.setScaleType(ImageView.ScaleType.FIT_CENTER);
        appIcon.setPadding(dp(3), dp(3), dp(3), dp(3));
        appIcon.setContentDescription(name);
        header.addView(appIcon, new LinearLayout.LayoutParams(dp(32), dp(32)));
        setAppIcon(appId);
        header.addView(title, new LinearLayout.LayoutParams(0, dp(40), 1f));
        addButton(header, "◀", "left", action);
        addButton(header, "⌖", "center", action);
        addButton(header, "▶", "right", action);
        addButton(header, "×", "close", action);
        content.addView(header, new LinearLayout.LayoutParams(-1, dp(40)));
        LinearLayout navigation = row();
        navigation.setBackgroundColor(Color.rgb(248, 250, 253));
        addButton(navigation, "‹", "back", action);
        addButton(navigation, "›", "forward", action);
        addButton(navigation, "⌂", "home", action);
        addButton(navigation, "↻", "reload", action);
        address = label("", 12);
        address.setSingleLine(true);
        navigation.addView(address, new LinearLayout.LayoutParams(0, dp(36), 1f));
        addButton(navigation, "−", "zoomOut", action);
        addButton(navigation, "+", "zoomIn", action);
        content.addView(navigation, new LinearLayout.LayoutParams(-1, dp(36)));
        content.addView(page, new LinearLayout.LayoutParams(-1, 0, 1f));
        logicalWidth = dp(800);
        logicalHeight = dp(600);
        addView(content, new FrameLayout.LayoutParams(logicalWidth, logicalHeight));
    }

    private int dp(float value) { return Math.max(1, Math.round(value * density)); }
    private LinearLayout row() {
        LinearLayout row = new LinearLayout(getContext());
        row.setOrientation(LinearLayout.HORIZONTAL);
        row.setGravity(Gravity.CENTER_VERTICAL);
        return row;
    }
    private TextView label(String text, int size) {
        TextView view = new TextView(getContext());
        view.setText(text);
        view.setTextSize(size);
        view.setGravity(Gravity.CENTER_VERTICAL);
        view.setPadding(dp(8), 0, dp(4), 0);
        view.setTextColor(Color.rgb(54, 66, 82));
        return view;
    }
    private void addButton(LinearLayout row, String text, String command, Consumer<String> action) {
        Button button = new Button(getContext());
        button.setText(text);
        button.setTextSize(18);
        button.setTextColor(Color.rgb(38, 52, 72));
        button.setContentDescription(command);
        button.setPadding(0, 0, 0, 0);
        button.setMinWidth(0);
        button.setMinimumWidth(0);
        GradientDrawable background = new GradientDrawable();
        background.setColor(Color.TRANSPARENT);
        button.setBackground(background);
        button.setOnClickListener(view -> action.accept(command));
        row.addView(button, new LinearLayout.LayoutParams(dp(36), -1));
    }
    public void setLocation(String url) { address.setText(url); }
    public void setTitle(String text) { title.setText(text); appIcon.setContentDescription(text); }
    public void setAppIcon(String id) {
        if (!id.matches("google|youtube|wikipedia|reddit|github|twitch|maps|poki")) return;
        try (InputStream stream = getContext().getAssets().open("icons/" + id + ".png")) {
            appIcon.setImageDrawable(Drawable.createFromStream(stream, id));
        } catch (java.io.IOException unavailableIcon) {
            appIcon.setImageDrawable(null);
        }
    }

    public void updateProjection(String json, PanelBounds bounds) {
        ready = false;
        try {
            JSONObject data = new JSONObject(json);
            JSONArray points = data.optJSONArray("quad");
            if (points == null || points.length() != 8 || !bounds.visible) { invalidate(); return; }
            // Stable page viewport: turning the head must not reflow/resize the website.
            int width = dp(800);
            double ratio = data.optDouble("surfaceHeight", 600) / Math.max(1, data.optDouble("surfaceWidth", 800));
            int height = Math.max(dp(200), Math.min(dp(800), (int) Math.round(width * ratio)));
            if (width != logicalWidth || height != logicalHeight) {
                logicalWidth = width;
                logicalHeight = height;
                content.setLayoutParams(new FrameLayout.LayoutParams(width, height));
            }
            float[] corners = new float[8];
            for (int i = 0; i < 8; i++) {
                float value = (float) points.getDouble(i);
                corners[i] = (i % 2 == 0)
                    ? value * bounds.scaleX - bounds.leftPx
                    : value * bounds.scaleY - bounds.topPx;
                if (Float.isNaN(corners[i]) || Float.isInfinite(corners[i])) throw new IllegalArgumentException("Invalid quad");
            }
            float[] source = {0, 0, logicalWidth, 0, logicalWidth, logicalHeight, 0, logicalHeight};
            ready = projection.setPolyToPoly(source, 0, corners, 0, 4) && projection.invert(inverse);
            clip.reset();
            clip.moveTo(corners[0], corners[1]);
            for (int i = 2; i < 8; i += 2) clip.lineTo(corners[i], corners[i + 1]);
            clip.close();
            rounded.reset();
            rounded.addRoundRect(0, 0, logicalWidth, logicalHeight, dp(12), dp(12), Path.Direction.CW);
        } catch (Exception invalidGeometry) {
            ready = false;
        }
        invalidate();
    }

    @Override protected void dispatchDraw(Canvas canvas) {
        // Never fall back to an unanchored, unprojected page while geometry is unavailable.
        if (!ready) return;
        int saved = canvas.save();
        canvas.clipPath(clip);
        canvas.concat(projection);
        canvas.clipPath(rounded);
        super.dispatchDraw(canvas);
        canvas.restoreToCount(saved);
    }

    @Override public boolean dispatchTouchEvent(MotionEvent event) {
        if (!ready) return false;
        MotionEvent local = MotionEvent.obtain(event);
        local.transform(inverse);
        if (event.getActionMasked() == MotionEvent.ACTION_DOWN) {
            gestureInside = local.getX() >= 0 && local.getX() < logicalWidth
                && local.getY() >= 0 && local.getY() < logicalHeight;
        }
        boolean handled = gestureInside && content.dispatchTouchEvent(local);
        local.recycle();
        if (event.getActionMasked() == MotionEvent.ACTION_UP || event.getActionMasked() == MotionEvent.ACTION_CANCEL) gestureInside = false;
        return handled;
    }
}
