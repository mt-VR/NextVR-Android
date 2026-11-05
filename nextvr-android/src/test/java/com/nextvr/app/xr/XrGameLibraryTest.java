package com.nextvr.app.xr;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.Test;

/**
 * Como um APK instalado é classificado, e o que cada classe de jogo custa ao usuário.
 *
 * <p>As regras que importam aqui são as que decidem <em>onde o jogo abre</em>: um jogo OpenXR/VrApi é
 * hospedado dentro do nosso frame; um Cardboard/Daydream já traz a correção de lente do VR Box na
 * própria imagem e recebe a tela inteira. Confundir os dois dá imagem borrada (duas correções
 * empilhadas) ou jogo preto (loader sem runtime).
 *
 * <p>O caso que motivou isto é um build Unity de Cardboard — o Táxi Driver, pacote
 * {@code com.manerai.taxidriver.cardboard}, versão {@code 1.0-cardboard-vr-v7} — que não declara
 * categoria de VR nenhuma e não traz nenhuma biblioteca nativa de VR: sem as pistas abaixo ele nem
 * apareceria na biblioteca.
 */
public class XrGameLibraryTest {

    private static List<String> libs(String... names) {
        return Arrays.asList(names);
    }

    /* ============================ a ordem das regras ============================ */

    @Test
    public void anOpenXrLoaderWinsOverEverythingElse() {
        // Um build com o loader de verdade é cliente de runtime: pode ser hospedado, então é ele que manda.
        assertEquals(XrGameLibrary.Kind.OPENXR,
            XrGameLibrary.kindOf(libs("lib/arm64-v8a/libopenxr_loader.so"), true, true, true, true, true, true, true));
        assertEquals(XrGameLibrary.Kind.OPENXR_ORIGINAL,
            XrGameLibrary.kindOf(libs(), false, true, false, false, false, false, false));
    }

    @Test
    public void cardboardIsItsOwnKind() {
        assertEquals(XrGameLibrary.Kind.CARDBOARD,
            XrGameLibrary.kindOf(libs(), true, false, false, false, true, false, false));
        // Uma build que declara a categoria Cardboard não pode cair no ramo do OpenXR: ela não tem
        // loader nenhum e apareceria como "jogo de loja não patchado", que nunca abre.
        assertEquals(XrGameLibrary.Kind.CARDBOARD,
            XrGameLibrary.kindOf(libs(), false, false, true, false, false, true, false));
        // E o Cardboard ganha do "declarou alguma categoria de VR", que é o sinal mais fraco de todos.
        assertEquals(XrGameLibrary.Kind.CARDBOARD,
            XrGameLibrary.kindOf(libs(), false, false, true, false, true, true, false));
    }

    @Test
    public void daydreamIsGoogleVrToo() {
        assertEquals(XrGameLibrary.Kind.DAYDREAM,
            XrGameLibrary.kindOf(libs(), true, false, false, true, false, false, false));
        assertEquals(XrGameLibrary.Kind.DAYDREAM,
            XrGameLibrary.kindOf(libs(), true, false, true, false, false, false, true));
    }

    @Test
    public void aBareVrCategoryIsAnUnpatchedOpenXrGame() {
        assertEquals(XrGameLibrary.Kind.OPENXR,
            XrGameLibrary.kindOf(libs(), true, false, true, false, false, false, false));
        assertEquals(XrGameLibrary.Kind.OPENXR_ORIGINAL,
            XrGameLibrary.kindOf(libs(), false, false, true, false, false, false, false));
    }

    @Test
    public void nothingAtAllIsNotAVrGame() {
        assertNull(XrGameLibrary.kindOf(libs("lib/arm64-v8a/libunity.so"), true, false, false, false, false, false, false));
    }

    /* ============================ o que cada classe faz ============================ */

    @Test
    public void googleVrIsHandedTheScreenInsteadOfBeingHosted() {
        for (XrGameLibrary.Kind kind : new XrGameLibrary.Kind[]{
                XrGameLibrary.Kind.CARDBOARD, XrGameLibrary.Kind.DAYDREAM}) {
            XrGameLibrary.Game game = game(kind);
            assertTrue(kind.name() + " desenha o próprio estéreo", game.fullScreen());
            assertFalse(kind.name() + " não é hospedado (a correção de lente seria aplicada duas vezes)",
                game.hostable());
        }
    }

    @Test
    public void runtimeGamesAreHostedAndNeverHandedToTheScreen() {
        for (XrGameLibrary.Kind kind : new XrGameLibrary.Kind[]{
                XrGameLibrary.Kind.OPENXR, XrGameLibrary.Kind.VRAPI_READY}) {
            XrGameLibrary.Game game = game(kind);
            assertTrue(kind.name() + " é hospedado", game.hostable());
            assertFalse(kind.name() + " não é tela cheia", game.fullScreen());
        }
        // Um jogo de loja não patchado também não é tela cheia: ele é aberto pelo launcher do runtime.
        assertFalse(game(XrGameLibrary.Kind.OPENXR_ORIGINAL).fullScreen());
        assertFalse(game(XrGameLibrary.Kind.VRAPI_ORIGINAL).fullScreen());
    }

    @Test
    public void aCardboardGameSaysWhatItIsInTheLibrary() {
        String described = game(XrGameLibrary.Kind.CARDBOARD).describe();
        assertTrue(described, described.contains("Cardboard"));
        assertTrue(described, described.contains("tela cheia"));
        assertTrue(game(XrGameLibrary.Kind.DAYDREAM).describe().contains("tela cheia"));
    }

    /* ============================ as pistas dentro do APK ============================ */

    @Test
    public void theTaxiDriverBuildIsRecognisedByItsNames() {
        // O pacote e a versão do Táxi Driver, como estão no manifesto dele.
        assertTrue(XrGameLibrary.looksCardboard("com.manerai.taxidriver.cardboard"));
        assertTrue(XrGameLibrary.looksCardboard("1.0-cardboard-vr-v7"));
        assertFalse(XrGameLibrary.looksCardboard("com.nextvr.app"));
        assertFalse(XrGameLibrary.looksCardboard(null));
    }

    @Test
    public void aUnityGameIsOnlyProbedWhenItHasUnitysLibrary() {
        assertTrue(XrGameLibrary.hasUnityLib(libs("lib/arm64-v8a/libunity.so", "lib/arm64-v8a/libil2cpp.so")));
        assertFalse(XrGameLibrary.hasUnityLib(libs("lib/arm64-v8a/libopenxr_loader.so")));
    }

    @Test
    public void theDexProbeFindsCardboardClassesAndNothingElse() {
        byte[] dex = ("dex\n035\0  Lcom/google/cardboard/CardboardView;  Lcom/google/vr/sdk/extra/DeviceParams;")
            .getBytes(StandardCharsets.US_ASCII);
        assertTrue(XrGameLibrary.containsAscii(dex, "com/google/cardboard".getBytes(StandardCharsets.US_ASCII)));
        assertTrue(XrGameLibrary.containsAscii(dex, "com/google/vr/sdk".getBytes(StandardCharsets.US_ASCII)));
        assertFalse(XrGameLibrary.containsAscii(dex, "com/oculus".getBytes(StandardCharsets.US_ASCII)));
        // Entradas vazias nunca casam com tudo — e nunca explodem.
        assertFalse(XrGameLibrary.containsAscii(new byte[0], "x".getBytes(StandardCharsets.US_ASCII)));
        assertFalse(XrGameLibrary.containsAscii(dex, new byte[0]));
        assertFalse(XrGameLibrary.containsAscii(null, "x".getBytes(StandardCharsets.US_ASCII)));
    }

    private static XrGameLibrary.Game game(XrGameLibrary.Kind kind) {
        return new XrGameLibrary.Game("com.example.game", "Example", kind, XrGameLibrary.Headset.UNKNOWN,
            false, false, "/data/app/base.apk", false);
    }

    @Test
    public void theGameListKeepsItsShape() {
        // A shell lê estes campos pelo JSON do controlador; o construtor é o contrato.
        XrGameLibrary.Game game = game(XrGameLibrary.Kind.CARDBOARD);
        assertEquals("com.example.game", game.packageName);
        assertEquals("Example", game.label);
        assertFalse(game.checksPurchase);
        assertFalse(game.ownHandTracking);
        assertFalse(Collections.singletonList(game).isEmpty());
    }
}
