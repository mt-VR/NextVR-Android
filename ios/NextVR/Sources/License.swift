import Foundation
import CryptoKit
import UIKit

/**
 * Build 95 — a Key do NextVR no iPhone.
 *
 * Porte fiel de `nextvr-android/.../License.java`: mesmo alfabeto Crockford base32 (sem I, L, O e U),
 * 22 caracteres (16 de identificador + 6 de MAC), mesmo prefixo (`ATMOXR-KEY-V1:`) e mesmo segredo —
 * ou seja, **as mesmas 4 Keys que liberam no Android liberam no iPhone**. A assinatura é
 * HMAC-SHA256 com os 4 primeiros bytes lidos como 30 bits (6 grupos de 5).
 *
 * O que muda em relação ao Android é só de onde vem a impressão digital do aparelho: lá é
 * ANDROID_ID + Build.FINGERPRINT; aqui é `identifierForVendor` + modelo + versão do sistema. A regra
 * pedida pelo dono do jogo continua: a Key vale uma vez, fica presa a este aparelho e só volta a ser
 * pedida se o app for desinstalado.
 */
final class License {

    static let alphabet = Array("0123456789ABCDEFGHJKMNPQRSTVWXYZ")
    static let keyLength = 22
    static let payloadLength = 16
    static let macLength = 6
    static let secret = "ATMOXR-KEY-V1-9f3c1d7b6a2e5f80b4c9d1e2a7f36b58c0d4e6a9b"
    static let macPrefix = "ATMOXR-KEY-V1:"

    private let defaults: UserDefaults
    private static let kKey = "key"
    private static let kDevice = "device"
    private static let kSince = "since"

    init(defaults: UserDefaults = UserDefaults.standard) {
        self.defaults = defaults
    }

    /* ------------------------------------------------------------------ chave */

    /// Maiúsculas, sem espaços/hífens e com O→0, I/L→1: colar "atmo-xr" continua valendo.
    static func normalize(_ raw: String?) -> String {
        guard let raw = raw else { return "" }
        var out = ""
        for character in raw.uppercased() {
            var value = character
            if value == "O" { value = "0" }
            else if value == "I" || value == "L" { value = "1" }
            if alphabet.contains(value) { out.append(value) }
            if out.count == keyLength { break }
        }
        return out
    }

    /// MAC de 30 bits do identificador, em 6 caracteres base32.
    static func mac(of payload: String) -> String {
        let key = SymmetricKey(data: Data(secret.utf8))
        let signature = HMAC<SHA256>.authenticationCode(for: Data((macPrefix + payload).utf8), using: key)
        let bytes = Array(signature)
        guard bytes.count >= 4 else { return "" }
        let bits = (UInt32(bytes[0]) << 24) | (UInt32(bytes[1]) << 16) | (UInt32(bytes[2]) << 8) | UInt32(bytes[3])
        var out = ""
        for index in 0..<macLength {
            let shift = UInt32(25 - index * 5)
            out.append(alphabet[Int((bits >> shift) & 0x1f)])
        }
        return out
    }

    /// A chave é sintaticamente válida E foi assinada por nós?
    static func isValidKey(_ raw: String?) -> Bool {
        let key = normalize(raw)
        guard key.count == keyLength else { return false }
        for character in key where !alphabet.contains(character) { return false }
        let payload = String(key.prefix(payloadLength))
        let mac = String(key.suffix(macLength))
        let expected = self.mac(of: payload)
        guard expected.count == macLength else { return false }
        return expected == mac
    }

    /// Primeira e última metade, para mostrar na tela sem entregar a chave inteira.
    static func mask(_ key: String) -> String {
        let clean = normalize(key)
        guard clean.count >= 8 else { return "••••" }
        return String(clean.prefix(4)) + "••••" + String(clean.suffix(4))
    }

    /* --------------------------------------------------------------- aparelho */

    /// Impressão digital deste iPhone: a licença só vale onde foi ativada.
    func deviceTag() -> String {
        let vendor = UIDevice.current.identifierForVendor?.uuidString ?? ""
        let raw = vendor + "|" + UIDevice.current.model + "|" + UIDevice.current.systemVersion + "|"
            + (Bundle.main.bundleIdentifier ?? "com.nextvr.atmoxr") + "|ios"
        let digest = SHA256.hash(data: Data(raw.utf8))
        return digest.prefix(8).map { String(format: "%02X", $0) }.joined()
    }

    /// Código curto que o usuário pode mandar para o suporte (não identifica a pessoa).
    func deviceCode() -> String {
        let tag = deviceTag()
        guard tag.count >= 8 else { return "0000-0000" }
        let middle = tag.index(tag.startIndex, offsetBy: 4)
        let end = tag.index(tag.startIndex, offsetBy: 8)
        return String(tag[tag.startIndex..<middle]) + "-" + String(tag[middle..<end])
    }

    /* ----------------------------------------------------------------- estado */

    func status() -> [String: Any] {
        let key = defaults.string(forKey: License.kKey) ?? ""
        let bound = defaults.string(forKey: License.kDevice) ?? ""
        let since = defaults.double(forKey: License.kSince)
        let active = !key.isEmpty && License.isValidKey(key) && deviceTag() == bound
        var out: [String: Any] = [
            "active": active,
            "key": key.isEmpty ? "" : License.mask(key),
            "device": deviceCode(),
            "since": Int(since * 1000),
            "hasKey": !key.isEmpty,
            "slots": 1
        ]
        if !key.isEmpty && !active { out["reason"] = "outro-aparelho" }
        return out
    }

    /// Ativa uma Key. Devolve `{ok, reason, status}`; `reason` é um código que a interface traduz.
    func activate(_ raw: String?) -> [String: Any] {
        let key = License.normalize(raw)
        if key.count != License.keyLength {
            return ["ok": false, "reason": "comprimento", "status": status()]
        }
        if !License.isValidKey(key) {
            return ["ok": false, "reason": "invalida", "status": status()]
        }
        let currentKey = defaults.string(forKey: License.kKey) ?? ""
        let currentDevice = defaults.string(forKey: License.kDevice) ?? ""
        let tag = deviceTag()
        if currentKey == key && currentDevice == tag {
            return ["ok": true, "reason": "ja-ativa", "status": status()]
        }
        if !currentKey.isEmpty && currentDevice != tag {
            // Chave gravada por outro aparelho: não vale aqui.
            return ["ok": false, "reason": "aparelho", "status": status()]
        }
        if !currentKey.isEmpty && currentKey != key {
            // Uma Key por aparelho: já existe uma ativa nesta instalação.
            return ["ok": false, "reason": "ja-ativa", "status": status()]
        }
        defaults.set(key, forKey: License.kKey)
        defaults.set(tag, forKey: License.kDevice)
        defaults.set(Date().timeIntervalSince1970, forKey: License.kSince)
        return ["ok": true, "reason": "ok", "status": status()]
    }
}
