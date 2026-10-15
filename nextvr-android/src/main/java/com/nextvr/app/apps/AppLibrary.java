package com.nextvr.app.apps;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

/**
 * Which apps the library shows, and in which order.
 *
 * <p>A phone has between thirty and two hundred launchable apps and most of them are not interesting
 * in VR (wallpapers, carrier tools, the setup wizard). The library therefore hides system apps by
 * default, keeps recents in front, and searches accent-insensitively so "musica" finds "Música".
 * All of it is pure Java and unit-tested, because getting the ordering wrong is the difference
 * between a dock that feels curated and one that feels like a package dump.
 */
public final class AppLibrary {
    /** Options the shell sends from the library window. */
    public static final class Options {
        public String query = "";
        public boolean showSystem = false;
        public Set<String> hidden = Collections.emptySet();
        public List<String> recents = Collections.emptyList();
        public int limit = 200;

        public Options() { }

        public Options(String query, boolean showSystem, Set<String> hidden, List<String> recents, int limit) {
            this.query = query == null ? "" : query;
            this.showSystem = showSystem;
            if (hidden != null) this.hidden = hidden;
            if (recents != null) this.recents = recents;
            this.limit = limit <= 0 ? 200 : limit;
        }
    }

    private AppLibrary() { }

    /** Filtered and ranked list; never null, never longer than {@link Options#limit}. */
    public static List<AppEntry> select(List<AppEntry> apps, Options options) {
        List<AppEntry> result = new ArrayList<>();
        if (apps == null || apps.isEmpty()) return result;
        String query = normalize(options == null ? "" : options.query);
        boolean showSystem = options != null && options.showSystem;
        Set<String> hidden = options == null ? Collections.emptySet() : options.hidden;
        List<String> recents = options == null ? Collections.emptyList() : options.recents;
        int limit = options == null ? 200 : Math.max(1, options.limit);

        for (AppEntry app : apps) {
            if (app == null || app.packageName == null) continue;
            if (!showSystem && app.system) continue;
            if (hidden.contains(app.packageName)) continue;
            if (!query.isEmpty() && !normalize(app.label).contains(query)
                    && !app.packageName.toLowerCase(Locale.ROOT).contains(query)) continue;
            result.add(app);
        }
        final List<String> order = recents;
        Collections.sort(result, (a, b) -> {
            int ra = order.indexOf(a.packageName);
            int rb = order.indexOf(b.packageName);
            if (ra >= 0 || rb >= 0) {
                if (ra < 0) return 1;
                if (rb < 0) return -1;
                return Integer.compare(ra, rb);
            }
            return a.label.compareToIgnoreCase(b.label);
        });
        return result.size() > limit ? new ArrayList<>(result.subList(0, limit)) : result;
    }

    /** Moves [packageName] to the front of [recents], keeping the list bounded. */
    public static List<String> withRecent(List<String> recents, String packageName, int capacity) {
        List<String> result = new ArrayList<>();
        if (packageName != null && !packageName.isEmpty()) result.add(packageName);
        if (recents != null)
            for (String item : recents)
                if (item != null && !item.equals(packageName) && !result.contains(item)) result.add(item);
        int max = Math.max(1, capacity);
        return result.size() > max ? new ArrayList<>(result.subList(0, max)) : result;
    }

    /** Parses the comma-separated preference the hidden-apps list is stored as. */
    public static Set<String> parseSet(String raw) {
        Set<String> result = new LinkedHashSet<>();
        if (raw == null) return result;
        for (String part : raw.split(",")) {
            String item = part.trim();
            if (!item.isEmpty()) result.add(item);
        }
        return result;
    }

    public static String joinSet(Set<String> values) {
        if (values == null || values.isEmpty()) return "";
        StringBuilder text = new StringBuilder();
        for (String value : values) {
            if (text.length() > 0) text.append(',');
            text.append(value);
        }
        return text.toString();
    }

    /**
     * Lowercased and stripped of accents, so the search box finds "Configurações" typed as
     * "configuracoes" — the accent-free spelling is what a VR keyboard produces first.
     */
    public static String normalize(String value) {
        if (value == null) return "";
        String lower = value.toLowerCase(Locale.ROOT).trim();
        StringBuilder out = new StringBuilder(lower.length());
        for (int i = 0; i < lower.length(); i++) {
            char c = lower.charAt(i);
            switch (c) {
                case 'á': case 'à': case 'â': case 'ã': case 'ä': case 'å': out.append('a'); break;
                case 'é': case 'è': case 'ê': case 'ë': out.append('e'); break;
                case 'í': case 'ì': case 'î': case 'ï': out.append('i'); break;
                case 'ó': case 'ò': case 'ô': case 'õ': case 'ö': out.append('o'); break;
                case 'ú': case 'ù': case 'û': case 'ü': out.append('u'); break;
                case 'ç': out.append('c'); break;
                case 'ñ': out.append('n'); break;
                default: out.append(c); break;
            }
        }
        return out.toString();
    }
}
