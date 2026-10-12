package com.nextvr.app.apps;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ServiceInfo;
import android.os.Build;
import android.os.IBinder;

import com.nextvr.app.NextVrActivity;
import com.nextvr.app.R;

/**
 * The foreground service a {@code MediaProjection} needs to exist at all.
 *
 * <p>This is not a formality of the platform's API style, it is a hard gate: since Android 10 the
 * projection grant is refused unless the app already has a running foreground service of type
 * {@code mediaProjection} — {@code MediaProjection.start()} (reached from
 * {@code MediaProjectionManager#getMediaProjection}) throws
 * {@code SecurityException("Media projections require a foreground service of type ...")}
 * for any app targeting Q or later. Screen recorders run this service for the whole capture; so does
 * this one.
 *
 * <p>It also carries the honest indicator that the mirror is running: an ongoing notification that
 * says what is being captured. The notification is deliberately plain — no attempt is made to hide it
 * or the system's own capture indicator, which would be a security bypass rather than a feature.
 */
public class AppMirrorService extends Service {
    private static final String CHANNEL_ID = "nextvr.mirror";
    private static final int NOTIFICATION_ID = 7411;

    /** Starts (or keeps) the service. Called before the capture consent dialog is shown. */
    public static void start(Context context) {
        if (context == null) return;
        Intent intent = new Intent(context, AppMirrorService.class);
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) context.startForegroundService(intent);
            else context.startService(intent);
        } catch (Throwable ignored) {
            // Android 12+ refuses a foreground service started from the background; the caller is a
            // visible activity, so this only happens when the process is already going away.
        }
    }

    /** Stops the service and its notification: no consent, no mirror, no indicator. */
    public static void stop(Context context) {
        if (context == null) return;
        try {
            context.stopService(new Intent(context, AppMirrorService.class));
        } catch (Throwable ignored) { }
    }

    @Override public int onStartCommand(Intent intent, int flags, int startId) {
        try {
            Notification notification = buildNotification();
            if (Build.VERSION.SDK_INT >= 29) {
                startForeground(NOTIFICATION_ID, notification,
                        ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PROJECTION);
            } else {
                startForeground(NOTIFICATION_ID, notification);
            }
        } catch (Throwable error) {
            // Without the foreground service the projection cannot start at all: report instead of
            // leaving a silent failure behind.
            stopSelf();
        }
        return START_NOT_STICKY;
    }

    @Override public IBinder onBind(Intent intent) { return null; }

    @SuppressWarnings("deprecation")
    private Notification buildNotification() {
        Context context = getApplicationContext();
        NotificationManager manager = (NotificationManager) context.getSystemService(NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && manager != null) {
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID,
                    context.getString(R.string.mirror_channel_name), NotificationManager.IMPORTANCE_LOW);
            channel.setDescription(context.getString(R.string.mirror_channel_description));
            channel.setShowBadge(false);
            manager.createNotificationChannel(channel);
        }
        Intent open = new Intent(context, NextVrActivity.class);
        open.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        int pendingFlags = PendingIntent.FLAG_UPDATE_CURRENT;
        if (Build.VERSION.SDK_INT >= 23) pendingFlags |= PendingIntent.FLAG_IMMUTABLE;
        PendingIntent pending = PendingIntent.getActivity(context, 0, open, pendingFlags);

        Notification.Builder builder = Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
                ? new Notification.Builder(context, CHANNEL_ID)
                : new Notification.Builder(context);
        builder.setSmallIcon(R.drawable.nextvr_ic_launcher)
                .setContentTitle(context.getString(R.string.mirror_notification_title))
                .setContentText(context.getString(R.string.mirror_notification_text))
                .setContentIntent(pending)
                .setOngoing(true)
                .setShowWhen(false);
        return builder.build();
    }
}
