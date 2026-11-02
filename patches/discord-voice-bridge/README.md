# Discord Voice Bridge — Fabric API dependency fix (1.0.1)

This folder is **not part of the NextVR Android app**. It stores a ready-to-apply patch for the
separate repository [`gabrielbosse1/discord-voice-bridge`](https://github.com/gabrielbosse1/discord-voice-bridge),
because this session's Git credentials could not push to that repository (see "Why a patch" below).

## Root cause (not a packaging problem)

`src/main/resources/fabric.mod.json` declared:

```json
"depends": { "fabricloader": ">=0.20.1", "fabric": ">=0.165.0", "minecraft": "~26.3", "java": ">=25" }
```

There is **no mod with the id `fabric`**. Fabric API's mod id is `fabric-api`
(`FabricMC/fabric`, branch `26.3`: `src/main/resources/fabric.mod.json` → `"id": "fabric-api"`,
`"version": "${version}"` → `0.165.0+26.3`). The only Loader builtins are `fabricloader`,
`minecraft` and `java` (`FabricLoaderImpl.MOD_ID = "fabricloader"`, builtin `java` mod in
`ModDiscoverer`, builtin `minecraft` mod in the game provider).

Fabric Loader renders that as, verbatim from `loader/Messages.properties`:

```
resolution.depends.missing={0} {1} requires {3} of {2}, which is missing!
resolution.version.greaterEqual=version {0} or later
→ Mod 'Discord Voice Bridge' (discord_voice_bridge) 1.0.0 requires version 0.165.0 or later of fabric, which is missing!
```

`{2}` is the dependency id from *our* file. So the message proves the id was wrong, not that the
nested jar was absent.

Why PR #1 did not help:

* `include` **did** work. Loom wires the `include` configuration into `remapJar`
  (`IncludeConfigurations.nestJars` ← `RemapTaskConfiguration`), and `JarNester` writes the jar to
  `META-INF/jars/<file>` **and** appends it to the release jar's `jars` array. CI artifact size went
  from 17,842,593 B (before PR #1) to 19,616,856 B (after), consistent with the ~1.7 MB Fabric API
  jar being nested.
* Even a perfectly nested Fabric API can only satisfy `fabric-api`. A dependency on `fabric` is
  unsatisfiable **no matter what the user installs**, including a manual Fabric API jar in `mods/`.
  That is why the report survived the "fix".

## What the patch changes

| File | Change |
|---|---|
| `src/main/resources/fabric.mod.json` | `"fabric": ">=0.165.0"` → `"fabric-api": ">=0.165.0"` (the actual fix) |
| `build.gradle` | version `1.0.0` → `1.0.1`; comment documenting why the id matters |
| `DiscordVoiceBridgeMod.java` | tick handler no longer dereferences a null SVC plugin when SVC is absent |
| `scripts/verify_release_jar.py` | **new**: inspects the built jar, follows nested jars recursively, checks every `depends` entry against the ids/versions actually present |
| `.github/workflows/ci.yml` | runs the verifier on the real artifact before uploading; uploads the 1.0.1 jar |
| `.github/workflows/loader-smoke.yml` | **new**, manual: boots a real Fabric 26.3 server with only this jar and fails on `which is missing!` |
| `README.md` / `AGENTS.md` / `CONTRIBUTING.md` | exact supported versions (Minecraft 26.3, Loader 0.20.1+, Java 25, SVC 2.6.27+26.3, Fabric API bundled), install steps, troubleshooting table |

## Verification performed here

`verify_release_jar.py` was run against constructed jars that mirror the expected release layout:

* **1.0.0 layout** (`fabric` dependency + nested `fabric-api`) → exit 1 and prints the user's exact
  Loader message. See `evidence/1.0.0-jar-fails.log`.
* **fixed layout** (same nesting, `fabric-api >=0.165.0`) → exit 0. See `evidence/1.0.1-jar-passes.log`.
* Jars with the right id but no nested API, or a `jars` entry pointing at a missing file, also fail.

Not verified here: no JDK and no network access to Maven/Fabric/Modrinth in the agent sandbox, so
Gradle could not be run and the real `build/libs/discord_voice_bridge-1.0.1.jar` could not be
produced or booted. Run `./gradlew clean build` plus the verifier, or trigger the **Loader smoke
test** workflow, on GitHub to get the artifact-level confirmation.

## Apply it

```bash
git clone https://github.com/gabrielbosse1/discord-voice-bridge.git
cd discord-voice-bridge
git checkout -b fix/fabric-api-dependency-id
git am /path/to/fix-fabric-api-dependency-id.patch
./gradlew downloadSvc && ./gradlew clean build
python3 scripts/verify_release_jar.py build/libs/discord_voice_bridge-1.0.1.jar
```

## Why a patch

The sandbox's GitHub token is a read-only integration: `git push` returns
`403 ... denied to gabrielbosse1` and the API returns
`403 Resource not accessible by integration` when creating a ref. The patch is the complete,
committed change set (`git am` reproduces commit `e2bde93`); pushing it needs a GitHub connection
with write access to `gabrielbosse1/discord-voice-bridge`.
