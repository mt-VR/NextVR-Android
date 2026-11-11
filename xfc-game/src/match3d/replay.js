// Replay VISUAL: não retrocede física, placar ou save. Buffers reutilizados,
// no máximo seis segundos a 10 Hz, sem duplicar malhas ou substituir o rig.
import { THREE } from './engine.js';

export function createVisualReplay(engine, players, ball) {
  const frames = [], capacity = 61, interval = .1, stride = 12;
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
  let nodes = null, elapsed = 0, raf = 0, restore = null, onDone = null;

  function rigNodes() {
    const result = [];
    for (const player of players) {
      result.push(player.root);
      if (player.model.bones) {
        result.push(player.model.body, ...Object.values(player.model.bones));
      } else {
        // Fallback sem glTF: guardar também os pivôs dos membros segmentados.
        player.root.traverse(node => result.push(node));
      }
    }
    return [...new Set([...result, ball.mesh, ball.shadow].filter(Boolean))];
  }

  function read(out) {
    let i = 0;
    for (const node of nodes) {
      node.position.toArray(out, i);
      node.quaternion.toArray(out, i + 3);
      node.scale.toArray(out, i + 7);
      out[i + 10] = node.visible ? 1 : 0;
      out[i + 11] = node === ball.shadow ? node.material?.opacity ?? 1 : 1;
      i += stride;
    }
    return out;
  }

  function apply(a, b = a, t = 0) {
    let i = 0;
    for (const node of nodes) {
      node.position.set(
        a[i] + (b[i] - a[i]) * t,
        a[i + 1] + (b[i + 1] - a[i + 1]) * t,
        a[i + 2] + (b[i + 2] - a[i + 2]) * t
      );
      qa.fromArray(a, i + 3); qb.fromArray(b, i + 3);
      node.quaternion.slerpQuaternions(qa, qb, t);
      node.scale.set(
        a[i + 7] + (b[i + 7] - a[i + 7]) * t,
        a[i + 8] + (b[i + 8] - a[i + 8]) * t,
        a[i + 9] + (b[i + 9] - a[i + 9]) * t
      );
      node.visible = a[i + 10] > 0;
      if (node === ball.shadow && node.material) {
        node.material.opacity = a[i + 11] + (b[i + 11] - a[i + 11]) * t;
      }
      i += stride;
    }
  }

  function stop(notify = true) {
    cancelAnimationFrame(raf); raf = 0;
    if (restore) {
      apply(restore.pose);
      engine.camera.position.copy(restore.position);
      engine.camera.quaternion.copy(restore.rotation);
      engine.camera.fov = restore.fov;
      engine.camera.updateProjectionMatrix();
      restore = null;
      engine.renderer.render(engine.scene, engine.camera);
    }
    const done = onDone; onDone = null;
    if (notify) done?.();
  }

  return {
    get available() { return frames.length > 2; },
    get active() { return Boolean(restore); },
    get frameCount() { return frames.length; },
    capture(dt) {
      if (restore) return;
      elapsed += dt;
      if (elapsed < interval) return;
      elapsed %= interval;
      nodes ||= rigNodes();
      const next = frames.length === capacity
        ? frames.shift() : new Float32Array(nodes.length * stride);
      frames.push(read(next));
    },
    start(done) {
      if (restore || frames.length < 3 || engine.running) return false;
      onDone = done;
      restore = {
        // Preservar precisão exata da pose pausada, não a quantização do buffer.
        pose: read(new Float64Array(nodes.length * stride)),
        position: engine.camera.position.clone(),
        rotation: engine.camera.quaternion.clone(), fov: engine.camera.fov
      };
      const begin = performance.now(), duration = (frames.length - 1) * interval;
      function step(now) {
        const time = Math.max(0, (now - begin) / 1000) * .65;
        if (time >= duration) { stop(); return; }
        const f = time / interval, index = Math.min(frames.length - 2, Math.floor(f));
        apply(frames[index], frames[index + 1], f - index);
        const p = ball.mesh.position;
        engine.camera.position.set(
          Math.max(-54, Math.min(54, p.x - 9)), 5.5,
          Math.max(-40, Math.min(40, p.z + 10))
        );
        engine.camera.lookAt(p.x, Math.max(.6, p.y), p.z);
        engine.camera.fov = 48;
        engine.camera.updateProjectionMatrix();
        engine.renderer.render(engine.scene, engine.camera);
        raf = requestAnimationFrame(step);
      }
      raf = requestAnimationFrame(step);
      return true;
    },
    stop,
    dispose() { stop(false); frames.length = 0; nodes = null; }
  };
}
