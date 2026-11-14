// Offline adaptation only: simplify the imported mesh, never generate a body.
// Run after rig-footballer.py, then update the output hash in the manifest.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const path = process.argv[2];
if (!path) throw new Error('usage: node tools/optimize-footballer.mjs model.glb');
const doc = await io.read(path);
await doc.transform(prune(), dedup(), weld(), simplify({ simplifier: MeshoptSimplifier, ratio: 0.42, error: 0.001 }), prune());
await io.write(path, doc);
