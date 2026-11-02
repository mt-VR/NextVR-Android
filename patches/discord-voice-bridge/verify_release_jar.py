#!/usr/bin/env python3
"""Verify the *release* jar - the artifact users actually install.

Gradle succeeding and `include`/`implementation` lines existing in build.gradle
say nothing about the contents of build/libs/*.jar. This script inspects the
built jar the same way Fabric Loader does:

  * reads the top-level fabric.mod.json,
  * follows every entry of its "jars" array into the nested jars (recursively,
    so jar-in-jar-in-jar works),
  * reads each nested jar's own fabric.mod.json to learn its mod id and version,
  * checks that every entry in "depends" is satisfied by the mod itself, by a
    loader builtin (fabricloader/minecraft/java), or by a nested jar.

The last point is the one that matters for the "requires version 0.165.0 or
later of fabric, which is missing!" bug: the dependency id has to match the
nested mod's id exactly. Fabric API's id is "fabric-api"; there is no mod called
"fabric".

Usage:
    python3 scripts/verify_release_jar.py build/libs/discord_voice_bridge-1.0.1.jar

Exit code 0 means the jar is installable on a clean Fabric server as far as mod
metadata is concerned; 1 lists every problem found.
"""

from __future__ import annotations

import argparse
import io
import json
import re
import sys
import zipfile
from dataclasses import dataclass, field

FABRIC_MOD_JSON = "fabric.mod.json"

# Mods that Fabric Loader provides itself; they are never shipped in the jar.
BUILTIN_MOD_IDS = {"fabricloader", "minecraft", "java"}

# 1.0.0 shipped this dependency id by mistake. Fabric API is "fabric-api".
KNOWN_BAD_DEPENDENCY_IDS = {
    "fabric": (
        "there is no mod with the id 'fabric'. Fabric API's mod id is 'fabric-api'; "
        "the loader builtins are fabricloader, minecraft and java. No install can "
        "ever satisfy this dependency."
    ),
}


@dataclass
class ModInfo:
    """One mod, either the outer jar or a jar nested inside it."""

    mod_id: str
    version: str
    name: str
    source: str
    depth: int
    depends: dict = field(default_factory=dict)
    provides: list = field(default_factory=list)
    jars: list = field(default_factory=list)


@dataclass
class Problem:
    message: str


def parse_mod_json(raw: bytes, source: str, depth: int) -> ModInfo:
    data = json.loads(raw.decode("utf-8"))
    return ModInfo(
        mod_id=data.get("id", ""),
        version=data.get("version", ""),
        name=data.get("name", data.get("id", "")),
        source=source,
        depth=depth,
        depends=dict(data.get("depends") or {}),
        provides=list(data.get("provides") or []),
        jars=list(data.get("jars") or []),
    )


def read_nested_jars(outer: zipfile.ZipFile, parent: ModInfo, problems: list[Problem]) -> list[ModInfo]:
    """Open every nested jar listed in parent.jars and recurse into it."""
    found: list[ModInfo] = []

    for entry in parent.jars:
        filename = entry.get("file") if isinstance(entry, dict) else None

        if not filename:
            problems.append(
                Problem(f"{parent.source}: a \"jars\" entry has no \"file\" key: {entry!r}")
            )
            continue

        try:
            raw = outer.read(filename)
        except KeyError:
            problems.append(
                Problem(
                    f"{parent.source}: fabric.mod.json lists nested jar "
                    f"'{filename}', but that entry does not exist in the jar"
                )
            )
            continue

        try:
            nested_zip = zipfile.ZipFile(io.BytesIO(raw))
        except zipfile.BadZipFile:
            problems.append(Problem(f"{parent.source}: nested jar '{filename}' is not a valid zip"))
            continue

        with nested_zip:
            if FABRIC_MOD_JSON not in nested_zip.namelist():
                problems.append(
                    Problem(
                        f"{filename}: nested jar has no fabric.mod.json, so the loader "
                        "cannot see it as a mod"
                    )
                )
                continue

            nested = parse_mod_json(
                nested_zip.read(FABRIC_MOD_JSON),
                filename,
                parent.depth + 1,
            )

            if not nested.mod_id:
                problems.append(Problem(f"{filename}: nested fabric.mod.json has no \"id\""))
                continue

            found.append(nested)
            # Fabric API's aggregate jar nests its modules one level deeper.
            found.extend(read_nested_jars(nested_zip, nested, problems))

    if parent.depth == 0:
        on_disk = {name for name in outer.namelist() if name.startswith("META-INF/jars/")}
        listed = {
            entry.get("file")
            for entry in parent.jars
            if isinstance(entry, dict) and entry.get("file")
        }
        for extra in sorted(on_disk - listed):
            # Not fatal: the loader only reads what fabric.mod.json lists.
            print(f"note: {extra} is in the jar but not listed in \"jars\"; loader will ignore it")

    return found


def version_tuple(value: str):
    """Numeric version prefix, ignoring build metadata and qualifiers.

    '0.165.0+26.3' -> (0, 165, 0); '26.3' -> (26, 3, 0); '26.3-' -> (26, 3, 0).
    """
    base = value.split("+", 1)[0].strip()
    match = re.match(r"^\d+(?:\.\d+)*", base)

    if not match:
        return None

    parts = [int(part) for part in match.group(0).split(".")]
    while len(parts) < 3:
        parts.append(0)

    return tuple(parts)


def satisfies(version: str, constraint: str):
    """Return (ok, explanation) for a Fabric version predicate.

    Covers the operators used by real mods: *, x.y.z, =, >=, >, <=, <, ~, ^.
    Anything that cannot be parsed is reported as unverifiable instead of
    silently passing.
    """
    constraint = (constraint or "").strip()

    if constraint in ("", "*"):
        return True, "any version"

    operator = "="
    target = constraint

    for candidate in (">=", "<=", ">", "<", "=", "~", "^"):
        if constraint.startswith(candidate):
            operator = candidate
            target = constraint[len(candidate):].strip()
            break

    have = version_tuple(version)
    want = version_tuple(target)

    if have is None or want is None:
        return None, f"cannot compare '{version}' with '{constraint}'"

    if operator == "=":
        return have == want, f"{version} == {target}"
    if operator == ">=":
        return have >= want, f"{version} >= {target}"
    if operator == ">":
        return have > want, f"{version} > {target}"
    if operator == "<=":
        return have <= want, f"{version} <= {target}"
    if operator == "<":
        return have < want, f"{version} < {target}"

    if operator == "~":
        if len([p for p in target.split("+")[0].split(".") if p != ""]) >= 2:
            upper = (want[0], want[1] + 1, 0)
        else:
            upper = (want[0] + 1, 0, 0)

        return want <= have < upper, f"{target} <= {version} < {'.'.join(map(str, upper))}"

    if operator == "^":
        upper = (want[0] + 1, 0, 0) if want[0] > 0 else (0, want[1] + 1, 0)
        return want <= have < upper, f"{target} <= {version} < {'.'.join(map(str, upper))}"

    return None, f"unsupported predicate '{constraint}'"


def loader_style_dependency(version: str, constraint: str) -> str:
    """Render a dependency the way Fabric Loader does in its error message."""
    constraint = (constraint or "").strip()

    if constraint.startswith(">="):
        return f"version {constraint[2:].strip()} or later"

    return constraint or "any version"


def verify(jar_path: str) -> int:
    problems: list[Problem] = []

    print(f"Verifying release jar: {jar_path}")

    try:
        outer = zipfile.ZipFile(jar_path)
    except FileNotFoundError:
        print(f"FAIL: {jar_path} does not exist - did the build produce it?", file=sys.stderr)
        return 1
    except zipfile.BadZipFile:
        print(f"FAIL: {jar_path} is not a valid jar", file=sys.stderr)
        return 1

    with outer:
        names = outer.namelist()

        if FABRIC_MOD_JSON not in names:
            print(f"FAIL: {jar_path} has no fabric.mod.json", file=sys.stderr)
            return 1

        root = parse_mod_json(outer.read(FABRIC_MOD_JSON), jar_path, 0)

        print(f"  size: {len(open(jar_path, 'rb').read()) / (1024 * 1024):.1f} MB")
        print(f"  mod:  {root.name} ({root.mod_id}) {root.version}")

        if not root.mod_id:
            problems.append(Problem("top-level fabric.mod.json has no \"id\""))

        if not any(name.startswith("com/discordvoicebridge/") and name.endswith(".class") for name in names):
            problems.append(
                Problem("no com/discordvoicebridge/*.class entries - this looks like an empty stub jar")
            )

        if "META-INF/MANIFEST.MF" in names:
            manifest = outer.read("META-INF/MANIFEST.MF").decode("utf-8", "replace")
            for line in manifest.splitlines():
                if line.lower().startswith("fabric-mapping-namespace:"):
                    print(f"  mapping namespace: {line.split(':', 1)[1].strip()}")

        nested = read_nested_jars(outer, root, problems)

        print(f"  nested jars listed in fabric.mod.json: {len(root.jars)}")
        for mod in nested:
            indent = "    " + "  " * (mod.depth - 1)
            print(f"{indent}{mod.mod_id} {mod.version}   ({mod.source})")

        known: dict[str, ModInfo] = {root.mod_id: root, **{m.mod_id: m for m in nested}}
        provided: dict[str, ModInfo] = {}
        for mod in nested:
            for alias in mod.provides:
                provided[alias] = mod

        print("  dependencies:")
        for dep_id, constraint in root.depends.items():
            if dep_id in BUILTIN_MOD_IDS:
                print(f"    {dep_id:<24} {constraint:<16} ok (loader builtin)")
                continue

            if dep_id in KNOWN_BAD_DEPENDENCY_IDS:
                problems.append(
                    Problem(
                        f"depends on '{dep_id}' ({loader_style_dependency(root.version, constraint)}), but "
                        f"{KNOWN_BAD_DEPENDENCY_IDS[dep_id]} A clean server will abort with:\n"
                        f"    Mod '{root.name}' ({root.mod_id}) {root.version} requires "
                        f"{loader_style_dependency(root.version, constraint)} of {dep_id}, which is missing!"
                    )
                )
                print(f"    {dep_id:<24} {constraint:<16} FAIL (not a real mod id)")
                continue

            candidate = known.get(dep_id) or provided.get(dep_id)

            if candidate is None:
                problems.append(
                    Problem(
                        f"depends on '{dep_id}' but nothing in this jar provides it. A clean server "
                        f"will abort with:\n"
                        f"    Mod '{root.name}' ({root.mod_id}) {root.version} requires "
                        f"{loader_style_dependency(root.version, constraint)} of {dep_id}, which is missing!"
                    )
                )
                print(f"    {dep_id:<24} {constraint:<16} FAIL (missing)")
                continue

            ok, detail = satisfies(candidate.version, constraint)

            if ok is False:
                problems.append(
                    Problem(
                        f"depends on '{dep_id}' {constraint}, but the jar ships {dep_id} "
                        f"{candidate.version} ({candidate.source}); fix the bundled version or the range"
                    )
                )
                print(f"    {dep_id:<24} {constraint:<16} FAIL ({detail})")
            elif ok is None:
                print(f"    {dep_id:<24} {constraint:<16} unverified ({detail})")
            else:
                print(f"    {dep_id:<24} {constraint:<16} ok ({detail})")

    if problems:
        print("\nFAIL: problems that make the jar uninstallable or inconsistent:", file=sys.stderr)
        for problem in problems:
            print(f"  - {problem.message}", file=sys.stderr)
        return 1

    print("\nOK: fabric.mod.json dependencies are satisfied by this jar alone.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("jar", help="path to the release jar (build/libs/discord_voice_bridge-<version>.jar)")
    args = parser.parse_args()
    return verify(args.jar)


if __name__ == "__main__":
    sys.exit(main())
