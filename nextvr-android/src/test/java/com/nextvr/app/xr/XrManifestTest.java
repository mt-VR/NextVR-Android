package com.nextvr.app.xr;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import org.junit.Test;

/**
 * The manifest is inside a binary Android XML the public API never parses for us, so these tests
 * build that binary by hand (small enough to keep honest) and pin what the reader answers:
 * targetSdk, whether a game can find the runtime by itself, and the marker vocabulary the headset
 * guess is made from.
 */
public class XrManifestTest {

    /* ============================ a tiny binary AXML builder ============================ */

    private static final String[] STRINGS = {
        "uses-sdk", "provider", "package", "uses-permission", "category",
        "name", "targetSdkVersion",
        "org.khronos.openxr.runtime_broker",
        "org.freedesktop.monado.openxr_runtime.out_of_process",
        "android.permission.INTERNET",
        "org.khronos.openxr.intent.category.IMMERSIVE_HMD",
    };

    private static int poolOffset(String value) {
        for (int i = 0; i < STRINGS.length; i++) if (STRINGS[i].equals(value)) return i;
        throw new IllegalArgumentException(value);
    }

    private static byte[] file(byte[]... chunks) {
        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            out.write(new byte[8]); // the file header the parser skips
            for (byte[] chunk : chunks) out.write(chunk);
            return out.toByteArray();
        } catch (Exception error) {
            throw new AssertionError(error);
        }
    }

    private static byte[] stringPool(String[] strings) {
        int offsetsSize = 4 * strings.length;
        int after = 28 + offsetsSize;             // the string data begins right after the offsets
        byte[][] encoded = new byte[strings.length][];
        int[] offsets = new int[strings.length];
        int stringsSize = 0;
        for (int i = 0; i < strings.length; i++) {
            String value = strings[i];
            ByteBuffer encodedOne = ByteBuffer
                .allocate(2 + value.length() * 2 + 2).order(ByteOrder.LITTLE_ENDIAN);
            encodedOne.putShort((short) value.length());
            for (int c = 0; c < value.length(); c++) encodedOne.putShort((short) value.charAt(c));
            encodedOne.putShort((short) 0);       // the null terminator readStrings counts on
            encoded[i] = encodedOne.array();
            offsets[i] = stringsSize;
            stringsSize += encoded[i].length;
        }
        int size = after + stringsSize;
        ByteBuffer buffer = ByteBuffer.wrap(new byte[size]).order(ByteOrder.LITTLE_ENDIAN);
        buffer.putShort(0, (short) 0x0001);       // chunk type: string pool
        buffer.putShort(2, (short) 28);           // header size
        buffer.putInt(4, size);
        buffer.putInt(8, strings.length);
        buffer.putInt(12, 0);                     // style count
        buffer.putInt(16, 0);                     // flags: UTF-16
        buffer.putInt(20, after);                 // strings start at
        buffer.putInt(24, 0);                     // styles start at
        for (int i = 0; i < strings.length; i++) {
            buffer.putInt(28 + 4 * i, offsets[i]);
            System.arraycopy(encoded[i], 0, buffer.array(), after + offsets[i], encoded[i].length);
        }
        return buffer.array();
    }

    /** A start element: tag plus attributes ("name" as a string, "targetSdkVersion" as an int). */
    private static byte[] element(String tag, String name, String nameValue, int targetSdk) {
        int count = (nameValue != null ? 1 : 0) + (targetSdk > 0 ? 1 : 0);
        int bodySize = 36 + 20 * count;
        ByteBuffer buffer = ByteBuffer.wrap(new byte[bodySize]).order(ByteOrder.LITTLE_ENDIAN);
        buffer.putShort(0, (short) 0x0102);       // chunk type: start element
        buffer.putShort(2, (short) bodySize);
        buffer.putInt(4, bodySize);
        buffer.putInt(8, 3);                      // line number
        buffer.putInt(12, 0xffffffff);            // comment
        buffer.putInt(16, 0xffffffff);            // namespace
        buffer.putInt(20, poolOffset(tag));       // element name
        buffer.putShort(24, (short) 20);          // attribute start (from the element head)
        buffer.putShort(26, (short) 20);          // attribute size
        buffer.putShort(28, (short) count);
        buffer.putShort(30, (short) 0xffff);
        buffer.putShort(32, (short) 0xffff);
        buffer.putShort(34, (short) 0xffff);
        int at = 36;
        if (nameValue != null) {
            buffer.putInt(at, 0xffffffff);        // attribute ns
            buffer.putInt(at + 4, poolOffset("name"));
            buffer.putInt(at + 8, 0xffffffff);    // raw value
            buffer.putShort(at + 12, (short) 8);  // typed value size
            buffer.put(at + 14, (byte) 0);
            buffer.put(at + 15, (byte) 0x03);     // TYPE_STRING
            buffer.putInt(at + 16, poolOffset(nameValue));
            at += 20;
        }
        if (targetSdk > 0) {
            buffer.putInt(at, 0xffffffff);
            buffer.putInt(at + 4, poolOffset("targetSdkVersion"));
            buffer.putInt(at + 8, 0);
            buffer.putShort(at + 12, (short) 8);
            buffer.put(at + 14, (byte) 0);
            buffer.put(at + 15, (byte) 0x10);     // TYPE_INT_DEC
            buffer.putInt(at + 16, targetSdk);
        }
        return buffer.array();
    }

    /* ============================ the tests ============================ */

    /** A modern launch that also ports the broker provider in: the common case for a recompile. */
    private static final byte[] MODERN_GAME = file(
        stringPool(STRINGS),
        element("uses-sdk", null, null, 34),
        element("provider", "name", "org.khronos.openxr.runtime_broker", 0),
        element("category", "name", "org.khronos.openxr.intent.category.IMMERSIVE_HMD", 0),
        element("uses-permission", "name", "android.permission.INTERNET", 0));

    @Test
    public void modernGameThatNamesTheBrokerCanFindTheRuntime() {
        XrManifest manifest = XrManifest.parse(MODERN_GAME);
        assertEquals(34, manifest.targetSdk());
        assertTrue("a manifest that names a broker provider hides nothing", manifest.findsRuntime());
        assertTrue(manifest.hasCategory("org.khronos.openxr.intent.category.IMMERSIVE_HMD"));
        assertTrue(manifest.usesPermission("android.permission.INTERNET"));
        assertTrue(manifest.markers()
            .contains("org.khronos.openxr.intent.category.IMMERSIVE_HMD"));
        assertFalse("permissions are not markers: the vocabulary is features, meta-data, categories",
            manifest.markers().contains("android.permission.INTERNET"));
    }

    @Test
    public void anOldGameDoesNotNeedAQueriesBlock() {
        XrManifest manifest = XrManifest.parse(file(stringPool(STRINGS),
            element("uses-sdk", null, null, 29)));
        assertTrue("targetSdk 30 and below is before the package visibility lockdown",
            manifest.findsRuntime());
        assertEquals(29, manifest.targetSdk());
        assertTrue(manifest.markers().isEmpty());
    }

    @Test
    public void aModernStoreGameWithoutQueriesCannotFindTheRuntime() {
        XrManifest manifest = XrManifest.parse(file(stringPool(STRINGS),
            element("uses-sdk", null, null, 34)));
        assertFalse("and so it may not be launched directly here", manifest.findsRuntime());
    }

    @Test
    public void anEarlierPortWithTheQueriesBlockCanFindTheRuntime() {
        XrManifest mine = XrManifest.parse(file(stringPool(STRINGS),
            element("uses-sdk", null, null, 34),
            element("package", "name", "org.freedesktop.monado.openxr_runtime.out_of_process", 0)));
        assertTrue("the <queries> entry names the runtime itself", mine.findsRuntime());
    }

    @Test
    public void bytesThatAreNotAManifestAreEmptyAndSilent() {
        XrManifest truncated = XrManifest.parse(new byte[]{1, 2, 3});
        assertEquals(0, truncated.targetSdk());
        assertTrue(truncated.empty().markers().isEmpty());
        XrManifest text = XrManifest.parse("<?xml version=\"1.0\"?>".getBytes());
        assertEquals(0, text.targetSdk());
        assertFalse(text.hasCategory("anything"));
        // An element chunk before the string pool (or a pool after elements) parses without dying.
        XrManifest reversed = XrManifest.parse(file(
            element("uses-sdk", null, null, 33), stringPool(STRINGS)));
        assertEquals("without strings first, no element is readable", 0, reversed.targetSdk());
    }
}
