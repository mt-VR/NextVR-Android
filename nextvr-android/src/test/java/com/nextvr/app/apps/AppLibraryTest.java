package com.nextvr.app.apps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;

import org.junit.Test;

/** What the dock's app grid shows, and in which order. */
public class AppLibraryTest {
    private static List<AppEntry> apps() {
        return new ArrayList<>(Arrays.asList(
                new AppEntry("com.spotify.music", "Spotify", false, "com.spotify.music/.Main", 1),
                new AppEntry("com.android.settings", "Configurações", true, "com.android.settings/.Settings", 2),
                new AppEntry("com.example.musica", "Música", false, "com.example.musica/.Main", 3),
                new AppEntry("org.mozilla.firefox", "Firefox", false, "org.mozilla.firefox/.App", 4)));
    }

    @Test public void systemAppsAreHiddenUntilTheUserAsksForThem() {
        List<AppEntry> visible = AppLibrary.select(apps(), new AppLibrary.Options());
        assertEquals(3, visible.size());
        for (AppEntry app : visible) assertFalse(app.system);

        AppLibrary.Options withSystem = new AppLibrary.Options();
        withSystem.showSystem = true;
        assertEquals(4, AppLibrary.select(apps(), withSystem).size());
    }

    @Test public void aHiddenPackageNeverComesBack() {
        AppLibrary.Options options = new AppLibrary.Options();
        options.hidden = new LinkedHashSet<>(Collections.singletonList("com.spotify.music"));
        List<AppEntry> result = AppLibrary.select(apps(), options);
        assertEquals(2, result.size());
        for (AppEntry app : result) assertFalse("com.spotify.music".equals(app.packageName));
    }

    @Test public void searchFindsTheAppWithoutTypingTheAccent() {
        AppLibrary.Options options = new AppLibrary.Options();
        options.query = "musica";
        List<AppEntry> result = AppLibrary.select(apps(), options);
        assertEquals(1, result.size());
        assertEquals("com.example.musica", result.get(0).packageName);

        options.query = "CONFIGURACOES";
        options.showSystem = true;
        assertEquals("com.android.settings", AppLibrary.select(apps(), options).get(0).packageName);

        options.query = "mozilla";
        assertEquals("org.mozilla.firefox", AppLibrary.select(apps(), options).get(0).packageName);
    }

    @Test public void recentsComeFirstInTheOrderTheyWereUsed() {
        AppLibrary.Options options = new AppLibrary.Options();
        options.recents = Arrays.asList("org.mozilla.firefox", "com.spotify.music");
        List<AppEntry> result = AppLibrary.select(apps(), options);
        assertEquals("org.mozilla.firefox", result.get(0).packageName);
        assertEquals("com.spotify.music", result.get(1).packageName);
        assertEquals("com.example.musica", result.get(2).packageName);   // the rest stays A-Z
    }

    @Test public void theListIsNeverLongerThanTheLimitAndNeverNull() {
        AppLibrary.Options options = new AppLibrary.Options();
        options.limit = 2;
        assertEquals(2, AppLibrary.select(apps(), options).size());
        assertTrue(AppLibrary.select(null, options).isEmpty());
        assertTrue(AppLibrary.select(apps(), null).size() <= 200);
    }

    @Test public void normalizeStripsTheAccentsTheVrKeyboardCannotType() {
        assertEquals("configuracoes", AppLibrary.normalize("Configurações"));
        assertEquals("acao", AppLibrary.normalize("ação"));
        assertEquals("", AppLibrary.normalize(null));
    }

    @Test public void hiddenAppsRoundTripThroughOnePreferenceString() {
        assertEquals(new LinkedHashSet<>(Arrays.asList("a.b", "c.d")), AppLibrary.parseSet(" a.b ,,, c.d , "));
        assertEquals("", AppLibrary.joinSet(Collections.emptySet()));
        assertEquals("a.b,c.d", AppLibrary.joinSet(new LinkedHashSet<>(Arrays.asList("a.b", "c.d"))));
        assertTrue(AppLibrary.parseSet(null).isEmpty());
    }

    @Test public void recentsAreBoundedAndDeduplicated() {
        List<String> recents = AppLibrary.withRecent(Arrays.asList("a", "b", "c"), "b", 3);
        assertEquals(Arrays.asList("b", "a", "c"), recents);
        assertEquals(Arrays.asList("new", "a"), AppLibrary.withRecent(Arrays.asList("a", "b"), "new", 2));
        assertEquals(Collections.singletonList("only"), AppLibrary.withRecent(Collections.emptyList(), "only", 1));
        assertTrue(AppLibrary.withRecent(null, null, 3).isEmpty());
    }
}
