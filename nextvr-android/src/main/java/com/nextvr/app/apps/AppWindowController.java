package com.nextvr.app.apps;

import android.content.Context;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.util.List;

/**
 * The seam between the HTML shell and the Android app machinery.
 *
 * <p>Everything the shell can ask for is here, in one place, with JSON in and JSON out — the same
 * shape the shell already uses for its spatial frames. The shell decides where a window is and how
 * big it is (it owns the layout); this class decides what can actually run, creates the sessions,
 * keeps the display sizes in step with the windows, and reports state back. No policy is duplicated
 * on the two sides: the JS never guesses whether input works, it is told.
 */
public final class AppWindowController {
    public interface Environment {
        /** Pushes {@link #stateJson()} into the shell (bridge call on the main thread). */
        void pushState();
        /** Toast + message line in the shell. */
        void report(String message);
    }

    private static final int MAX_LIBRARY = 200;

    private final Context context;
    private final AndroidAppManager apps;
    private final ShizukuManager shizuku;
    private final AppSessionManager sessions;
    private final AppDisplayController displays;
    private final AppInputController input;
    private final Environment env;

    public AppWindowController(Context context, AndroidAppManager apps, ShizukuManager shizuku,
                               AppSessionManager sessions, AppDisplayController displays,
                               AppInputController input, Environment env) {
        this.context = context.getApplicationContext();
        this.apps = apps;
        this.shizuku = shizuku;
        this.sessions = sessions;
        this.displays = displays;
        this.input = input;
        this.env = env;
    }

    public AppSessionManager sessions() { return sessions; }

    public AppDisplayController displays() { return displays; }

    public ShizukuManager shizuku() { return shizuku; }

    public AndroidAppManager apps() { return apps; }

    // ------------------------------------------------------------------ library

    /** The installed apps, filtered and ranked, with the icon URL each tile loads. */
    public String libraryJson(String query, boolean showSystem) {
        AppLibrary.Options options = new AppLibrary.Options();
        options.query = query == null ? "" : query;
        options.showSystem = showSystem;
        options.hidden = apps.hidden();
        options.recents = apps.recents();
        options.limit = MAX_LIBRARY;
        List<AppEntry> all = apps.apps();
        List<AppEntry> selected = AppLibrary.select(all, options);
        // The grid is about to ask for these icons: render the missing ones in the background and
        // push the state again when a batch lands, so the tiles fill in without blocking the query.
        apps.scheduleIcons(selected);
        JSONObject json = new JSONObject();
        try {
            JSONArray array = new JSONArray();
            for (AppEntry app : selected) {
                AppSession session = sessions.find(app.packageName);
                File icon = apps.iconFile(app);
                JSONObject item = new JSONObject();
                item.put("pkg", app.packageName);
                item.put("label", app.label);
                item.put("system", app.system);
                item.put("component", app.component);
                item.put("icon", icon == null ? JSONObject.NULL : "/apps/" + icon.getName());
                item.put("recent", options.recents.contains(app.packageName));
                // The shape the window must take, and the app-surface pixels that go with it. The
                // shell opens the window with these, which is what makes a portrait app open in a
                // portrait window instead of being letterboxed inside a wide one.
                String shape = apps.windowShape(app.packageName);
                int[] box = AppWindowShape.box(shape);
                item.put("shape", shape);
                item.put("orient", app.orientation);
                item.put("fixed", app.fixedShape);
                JSONObject size = new JSONObject();
                size.put("w", box[0]);
                size.put("h", box[1]);
                item.put("box", size);
                item.put("state", session == null ? JSONObject.NULL : session.state.id);
                item.put("mode", session == null ? JSONObject.NULL : session.mode.id);
                item.put("input", session == null ? JSONObject.NULL : session.input.id);
                array.put(item);
            }
            json.put("apps", array);
            json.put("total", all.size());
            json.put("shown", selected.size());
            json.put("hosting", sessions.runningCount());
            json.put("capacity", AppSessionManager.DEFAULT_CAPACITY);
            json.put("query", options.query);
            json.put("showSystem", showSystem);
            json.put("icons", apps.iconEpoch());
            json.put("singleAppCapture", AppDisplayController.supportsSingleAppCapture());
        } catch (Exception error) {
            return "{\"apps\":[],\"error\":" + quote(error.getMessage()) + "}";
        }
        return json.toString();
    }

    // ------------------------------------------------------------------ session state

    /** Everything the shell needs to draw the dock, the windows and the Shizuku row. */
    public String stateJson() {
        JSONObject json = new JSONObject();
        try {
            ShizukuStatus status = shizuku.status();
            JSONObject shizukuJson = status.toJson();
            String caps = shizuku.capabilities();
            shizukuJson.put("caps", caps == null ? JSONObject.NULL : new JSONObject(caps));
            shizukuJson.put("bound", shizuku.service() != null);
            shizukuJson.put("binding", shizuku.binding());
            // Which route a tap takes right now, from the same policy the tap itself uses: the menu
            // can then say "opens on its own display" or "will ask to capture the screen" before the
            // user taps, instead of surprising them.
            shizukuJson.put("route", AppHostPolicy.route(status.state).id);
            json.put("shizuku", shizukuJson);

            JSONObject inputJson = new JSONObject();
            inputJson.put("shizuku", shizuku.service() != null);
            inputJson.put("accessibility", NextVrAccessibilityService.connected());
            inputJson.put("singleAppCapture", AppDisplayController.supportsSingleAppCapture());
            json.put("input", inputJson);

            JSONArray sessionsJson = new JSONArray();
            for (AppSession session : sessions.sessions()) {
                JSONObject item = new JSONObject();
                item.put("pkg", session.packageName);
                item.put("title", session.title);
                item.put("mode", session.mode.id);
                item.put("state", session.state.id);
                item.put("input", session.input.id);
                item.put("alive", session.alive());
                item.put("displayId", session.displayId);
                JSONObject display = new JSONObject();
                display.put("w", session.width);
                display.put("h", session.height);
                display.put("dpi", session.density);
                display.put("rotation", session.rotation);
                display.put("aspect", session.visibleAspect());
                display.put("rotated", session.rotation == 90 || session.rotation == 270);
                item.put("display", display);
                item.put("shape", apps.windowShape(packageName));
                item.put("error", session.error == null ? JSONObject.NULL : session.error);
                item.put("stopReason", session.stopReason == null ? JSONObject.NULL : session.stopReason);
                item.put("frames", session.frames);
                sessionsJson.put(item);
            }
            json.put("sessions", sessionsJson);

            JSONArray recents = new JSONArray();
            for (String id : apps.recents()) recents.put(id);
            json.put("recents", recents);
            json.put("capacity", AppSessionManager.DEFAULT_CAPACITY);
            // How many times the rendered icons changed. The shell re-reads the app grid when this
            // moves, which is how a tile drawn before its icon existed gets the real one — without
            // polling and without rebuilding the menu.
            json.put("icons", apps.iconEpoch());
            json.put("sdk", AndroidAppManager.sdk());
            json.put("launch", displays.launchBackend() == null ? JSONObject.NULL : displays.launchBackend());

            // Everything needed to explain a failure without a computer: which route was taken, how
            // the shell service is doing, what `am start` answered and where the shell last saw an
            // app that never drew. The menu shows this block, copyable, when the user asks for it.
            JSONObject diagnostics = new JSONObject();
            diagnostics.put("route", displays.route().id);
            diagnostics.put("waitingForService", displays.waitingForService());
            diagnostics.put("hostedSessions", sessions.runningCount());
            diagnostics.put("launchBackend", displays.launchBackend() == null
                    ? JSONObject.NULL : displays.launchBackend());
            diagnostics.put("launchError", displays.lastLaunchError() == null
                    ? JSONObject.NULL : displays.lastLaunchError());
            diagnostics.put("displayReport", displays.lastDisplayReport() == null
                    ? JSONObject.NULL : displays.lastDisplayReport());
            // What the display really is right now: natural size, the size the apps see, rotation and
            // state. It is the answer to "the app went to the left half / lost its lower half" — the
            // platform rotated the display or letterboxed the app, and this says which.
            diagnostics.put("displayState", displays.lastDisplayState() == null
                    ? JSONObject.NULL : displays.lastDisplayState());
            diagnostics.put("serviceReason", shizuku.unavailableReason());
            diagnostics.put("bindError", shizuku.bindError() == null
                    ? JSONObject.NULL : shizuku.bindError());
            diagnostics.put("captureService", AppMirrorService.isRunning() ? "running"
                    : (AppMirrorService.failure() == null ? "not running" : AppMirrorService.failure()));
            diagnostics.put("sdk", AndroidAppManager.sdk());
            if (selfTestReport != null) {
                try {
                    diagnostics.put("selfTest", new JSONObject(selfTestReport));
                } catch (Exception error) {
                    diagnostics.put("selfTest", selfTestReport);
                }
            }
            json.put("diagnostics", diagnostics);
        } catch (Exception error) {
            return "{\"sessions\":[],\"error\":" + quote(error.getMessage()) + "}";
        }
        return json.toString();
    }

    // ------------------------------------------------------------------ commands from the shell

    /**
     * Opens (or focuses) one installed app in a floating window; [boxWidth]/[boxHeight] are the body
     * the shell draws.
     *
     * <p>One decision, taken from Shizuku's permission state and not from whether a bind happens to
     * have completed (see {@link AppHostPolicy}) — this is what makes tapping a tile reproduce
     * PhoneXR's behaviour instead of redirecting the user to the phone:
     *
     * <ul>
     *   <li>Shizuku authorized (even if the user service is still starting): the app is hosted on a
     *       display of its own. No consent dialog, no app on the phone's screen, no capture.</li>
     *   <li>Shizuku alive but NextVR not authorized: the permission dialog is opened and the same
     *       hosted session waits for the service, so granting it opens the window the user asked for.
     *       If the user refuses, the window says so.</li>
     *   <li>Shizuku not reachable at all: the capture path, which is the only one left — it boots the
     *       app on the phone's screen (that is what it captures) and asks for the Android consent the
     *       platform requires for a capture. The window is labelled as a mirror.</li>
     * </ul>
     */
    public void open(String packageName, float boxWidth, float boxHeight) {
        if (packageName == null || packageName.isEmpty()) return;
        AppHostPolicy.Route route = displays.route();
        if (route == AppHostPolicy.Route.NEEDS_PERMISSION) {
            // Granting it inside the dialog is enough: the hosted session below waits for the service.
            shizuku.requestPermission();
            openHosted(packageName, boxWidth, boxHeight);
            return;
        }
        if (route == AppHostPolicy.Route.HOSTED) {
            openHosted(packageName, boxWidth, boxHeight);
            return;
        }
        openCaptured(packageName, boxWidth, boxHeight);
    }

    /** The hosted path: the app runs on its own display, created by the shell user service. */
    private void openHosted(String packageName, float boxWidth, float boxHeight) {
        AppSession existing = sessions.find(packageName);
        if (existing != null && existing.mode != AppSession.Mode.VIRTUAL_DISPLAY) {
            // The window was a capture of the phone screen; hosting the app means the capture stops
            // being about it. Closing first is what makes the window switch mechanism for real.
            sessions.close(packageName, "mode_changed");
        }
        AppSession session = sessions.open(packageName, titleOf(packageName),
                AppSession.Mode.VIRTUAL_DISPLAY, boxWidth, boxHeight, density());
        input.refreshBackend(session);
        apps.touchRecent(packageName);
        env.pushState();
    }

    /**
     * The path that needs no privileged service: the app is brought to the phone's screen with public
     * API and the capture of that screen is shown in the window. It is the same mechanism PhoneXR uses
     * to start a game, plus the window and the input forwarding that make it usable without taking the
     * phone out of the headset.
     *
     * <p>Android grants one capture at a time, so any other capture window is closed first: two tiles
     * cannot both be a live capture, and pretending otherwise would leave one window frozen on the
     * first app's last frame.
     */
    private void openCaptured(String packageName, float boxWidth, float boxHeight) {
        for (AppSession open : new ArrayList<>(sessions.sessions())) {
            if (open.packageName.equals(packageName)) {
                // A session of this app left over from the other mechanism would answer the next open
                // with the mechanism it was created with. It is closed so the window really switches.
                if (open.mode != AppSession.Mode.SCREEN_MIRROR) sessions.close(packageName, "mode_changed");
                continue;
            }
            // Android grants one capture per consent. The window that is being replaced gives its up,
            // instead of staying open and frozen on the previous app's last frame.
            if (open.mode == AppSession.Mode.SCREEN_MIRROR && open.alive()) {
                sessions.close(open.packageName, "capture_replaced");
            }
        }
        sessions.forgetStopped();
        // open() focuses a live window, wakes a minimized one and restarts a failed one — which for
        // this mode means asking for consent again, because that is what starting a capture needs.
        sessions.open(packageName, titleOf(packageName), AppSession.Mode.SCREEN_MIRROR,
                boxWidth, boxHeight, density());
        apps.touchRecent(packageName);
        env.pushState();
    }

    /** The label the window title uses; the package name when the app is gone from the list. */
    private String titleOf(String packageName) {
        AppEntry app = apps.find(packageName);
        return app == null ? packageName : app.label;
    }

    public void close(String packageName) {
        sessions.close(packageName, "user");
        sessions.forgetStopped();
        env.pushState();
    }

    public void minimize(String packageName) {
        sessions.minimize(packageName);
        env.pushState();
    }

    public void restore(String packageName) {
        sessions.restore(packageName);
        env.pushState();
    }

    public void focus(String packageName) {
        AppSession session = sessions.find(packageName);
        if (session != null) session.touchFocus();
    }

    /**
     * Window geometry from the shell: {@code [{pkg, w, h, visible}]}. Missing windows are ignored —
     * the shell opens a window when it sees a running session, so "no window yet" must never close
     * anything. Closing is always explicit.
     */
    public void syncWindows(String json) {
        if (json == null || json.isEmpty()) return;
        try {
            JSONArray array = new JSONArray(json);
            for (int i = 0; i < array.length(); i++) {
                JSONObject item = array.getJSONObject(i);
                String packageName = item.optString("pkg", null);
                if (packageName == null || packageName.isEmpty()) continue;
                AppSession session = sessions.find(packageName);
                if (session == null) continue;
                float width = (float) item.optDouble("w", 0);
                float height = (float) item.optDouble("h", 0);
                if (width > 0 && height > 0) sessions.windowResized(packageName, width, height, density());
                boolean visible = item.optBoolean("visible", true);
                if (!visible && session.state == AppSession.State.RUNNING) {
                    sessions.minimize(packageName);
                } else if (visible && session.state == AppSession.State.SUSPENDED) {
                    sessions.restore(packageName);
                }
            }
        } catch (Exception error) {
            env.report("Window sync rejected: " + error.getMessage());
        }
    }

    public boolean touch(String packageName, int action, float u, float v) {
        AppSession session = sessions.find(packageName);
        if (session == null || !session.alive()) return false;
        return input.touch(session, action, u, v);
    }

    public boolean key(String packageName, String name) {
        AppSession session = sessions.find(packageName);
        if (session == null || !session.alive()) return false;
        if (AppSession.InputBackend.NONE == session.input) input.refreshBackend(session);
        return input.key(session, name);
    }

    public boolean text(String packageName, String value) {
        AppSession session = sessions.find(packageName);
        if (session == null || !session.alive()) return false;
        if (AppSession.InputBackend.NONE == session.input) input.refreshBackend(session);
        return input.text(session, value);
    }

    /** The user asked for the Shizuku permission (or for instructions when it is not running). */
    public void requestShizuku() {
        boolean handled = shizuku.requestPermission();
        if (!handled) env.report("Shizuku is not ready: " + shizuku.status().state.id);
        shizuku.bind();
        env.pushState();
    }

    /**
     * Runs the privileged path on the device and pushes the result to the shell. If there is no
     * service to run it in, the report says that instead of failing silently, because "Shizuku is
     * not bound" and "Shizuku is bound but the display was refused" are different problems with
     * different fixes.
     */
    public void selfTest() {
        String report = shizuku.selfTest();
        if (report == null) {
            report = "{\"ok\":false,\"error\":\"" + AppHostPolicy.route(shizuku.status().state).id
                    + ": no shell user service ("
                    + (shizuku.unavailableReason() == null ? "not bound" : shizuku.unavailableReason())
                    + ")\"}";
        }
        selfTestReport = report;
        env.pushState();
    }

    /**
     * Remembers the shape the user rotated an app's window to. It is stored per app, so an app that
     * Android letterboxes in one shape is fixed once instead of at every open; the shell takes the
     * new size from the library entry it already has (`box`) on the next open, and from the synced
     * app surface right now.
     */
    public void setShape(String packageName, String shape) {
        if (packageName == null || packageName.isEmpty()
                || !AppWindowShape.isShape(shape)) return;
        apps.setWindowShape(packageName, shape);
        env.pushState();
    }

    /** Hides or shows an app in the library (system apps the user never wants in VR). */
    public void hide(String packageName, boolean hide) {
        if (packageName == null || packageName.isEmpty()) return;
        apps.setHidden(packageName, hide);
        env.pushState();
    }

    /**
     * One command from the shell, as JSON: {@code {cmd, ...}}. Everything the dock, the library and
     * the app windows do goes through this single entry point, so a new action cannot quietly grow a
     * second, incompatible path.
     */
    public void command(String json) {
        if (json == null || json.isEmpty() || json.length() > 8000) return;
        try {
            JSONObject command = new JSONObject(json);
            String name = command.optString("cmd", "");
            String packageName = command.optString("pkg", null);
            switch (name) {
                case "open":
                    open(packageName, (float) command.optDouble("w", 1040),
                            (float) command.optDouble("h", 546));
                    break;
                case "close": close(packageName); break;
                case "minimize": minimize(packageName); break;
                case "restore": restore(packageName); break;
                case "focus": focus(packageName); break;
                // The shell's app-window title bar: back / home / recents.
                case "key": key(packageName, command.optString("key", "")); break;
                // One character (or \u232b / \u23ce) typed on the VR keyboard into the app.
                case "text": text(packageName, command.optString("text", "")); break;
                case "hide": hide(packageName, command.optBoolean("hide", true)); break;
                case "sync": {
                    JSONArray windows = command.optJSONArray("windows");
                    if (windows != null) syncWindows(windows.toString());
                    break;
                }
                case "phone":
                    // A window that could not be filled is not a dead end: the app can still be opened
                    // on the phone, which needs no permission at all, and that is what the window
                    // offers when the capture was refused or the app did not draw.
                    if (packageName != null) displays.launchOnPhone(packageName);
                    break;
                case "shizuku": requestShizuku(); break;
                // The window's rotate button: remember the shape for this app and say so in the state.
                // The display follows the app surface the shell syncs, so the two never disagree.
                case "shape": setShape(packageName, command.optString("shape", "")); break;
                // Verifies the privileged path on this device, from inside the headset. It creates
                // and releases a 64x64 private display and resolves the injector — nothing on screen
                // changes — and the report is rendered by the menu.
                case "selftest": selfTest(); break;
                case "refresh": refreshLibrary(); break;
                default: break;
            }
        } catch (Exception error) {
            env.report("App command rejected");
        }
    }

    /** Re-reads the installed apps (after an install/uninstall) and refreshes the grid. */
    public void refreshLibrary() {
        apps.invalidate();
        env.pushState();
    }

    /** The last on-device self-test, or null. Converted for the state JSON without throwing. */
    private String selfTestReport;

    /** Called by the activity when Shizuku's binder or permission state changed. */
    public void onShizukuChanged() {
        ShizukuStatus status = shizuku.status();
        // "Binding" is not "gone": cancelling the bind here was the bug that made every tap fall back
        // to the capture path. Only a Shizuku that cannot host at all tears the sessions down.
        if (AppHostPolicy.hosted(status.state)) {
            shizuku.bind();
        } else {
            // Without the shell process the hosted displays are gone: the windows say so instead of
            // showing a frozen last frame.
            displays.onShizukuLost();
        }
        for (AppSession session : sessions.sessions()) input.refreshBackend(session);
        env.pushState();
    }

    /** Session list changed (started, died, minimized, evicted): the shell must be told. */
    public void onSessionsChanged() { env.pushState(); }

    /** Called when a background batch of icons finished, so the grid reloads them. */
    public void onIconBatchReady() { env.pushState(); }

    /** Called when the shell resumed: the bound service may have died while suspended. */
    public void onShellResumed() {
        if (AppHostPolicy.hosted(shizuku.status().state)) shizuku.bind();
        env.pushState();
    }

    /** Releases every session and surface; called from the activity's onDestroy. */
    public void shutdown() {
        sessions.closeAll("activity");
        displays.shutdown();
        apps.shutdown();
    }

    private int density() {
        try { return context.getResources().getDisplayMetrics().densityDpi; }
        catch (Throwable error) { return 240; }
    }

    private static String quote(String value) {
        if (value == null) return "\"\"";
        return "\"" + value.replace("\\", "\\\\").replace("\"", "\\\"") + "\"";
    }

    /** Convenience for the activity: the icon directory the WebView serves {@code /ui-apps/} from. */
    public File iconDirectory() { return AndroidAppManager.iconDirectory(context); }
}
