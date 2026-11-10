import { THREE } from './engine.js';
import { GOAL, PITCH } from './constants.js';
import { createNetPanel } from './net-physics.js';

/** Quatro superfícies, quatro draws; nenhuma textura/normal recalculada por frame. */
export function createGoalNet(side, { lowPower = false } = {}) {
  const group = new THREE.Group();
  group.name = 'xfc-3d-goal-net';
  const material = new THREE.LineBasicMaterial({
    color: 0xf1f2e9,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
    toneMapped: false
  });
  const panels = new Map();
  const cell = lowPower ? 0.28 : 0.21;
  const specs = [
    [
      'back',
      GOAL.width,
      GOAL.height,
      (u, v, d) => [
        side * (GOAL.depth + d),
        v * GOAL.height,
        (u - 0.5) * GOAL.width
      ]
    ],
    [
      'left',
      GOAL.depth,
      GOAL.height,
      (u, v, d) => [side * u * GOAL.depth, v * GOAL.height, -GOAL.width / 2 - d]
    ],
    [
      'right',
      GOAL.depth,
      GOAL.height,
      (u, v, d) => [side * u * GOAL.depth, v * GOAL.height, GOAL.width / 2 + d]
    ],
    [
      'top',
      GOAL.depth,
      GOAL.width,
      (u, v, d) => [
        side * u * GOAL.depth,
        GOAL.height + d,
        (v - 0.5) * GOAL.width
      ]
    ]
  ];
  for (const [name, width, height, point] of specs) {
    const solver = createNetPanel({
      width,
      height,
      columns: Math.ceil(width / cell),
      rows: Math.ceil(height / cell)
    });
    const { columns, rows } = solver,
      positions = new Float32Array((columns + 1) * (rows + 1) * 3),
      indices = [];
    for (let y = 0; y <= rows; y++)
      for (let x = 0; x <= columns; x++) {
        const i = y * (columns + 1) + x;
        positions.set(point(x / columns, y / rows, 0), i * 3);
        if (x < columns) indices.push(i, i + 1);
        if (y < rows) indices.push(i, i + columns + 1);
      }
    const rest = positions.slice(),
      geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    geometry.setIndex(indices);
    const mesh = new THREE.LineSegments(geometry, material);
    mesh.name = `xfc-net-${side}-${name}`;
    // Limite pequeno e conhecido; a rede deformada não some no frustum.
    geometry.computeBoundingSphere();
    geometry.boundingSphere.radius += 0.75;
    group.add(mesh);
    panels.set(name, { solver, geometry, rest, positions });
  }
  let impulses = 0,
    bufferUpdates = 0;
  function impact(event) {
    if (event.side !== side) return;
    const panel = panels.get(event.surface);
    if (!panel) return;
    const depth = (Math.abs(event.point.x) - PITCH.halfLength) / GOAL.depth;
    const across = event.point.z / GOAL.width + 0.5,
      up = event.point.y / GOAL.height;
    const u = event.surface === 'back' ? across : depth,
      v = event.surface === 'top' ? across : up;
    if (panel.solver.impact(u, v, event.speed)) impulses++;
  }
  function update(dt) {
    for (const [name, p] of panels) {
      if (!p.solver.update(dt)) continue;
      const axis = name === 'back' ? 0 : name === 'top' ? 1 : 2,
        sign = name === 'back' ? side : name === 'left' ? -1 : 1;
      for (let i = 0; i < p.solver.displacement.length; i++)
        p.positions[i * 3 + axis] =
          p.rest[i * 3 + axis] + sign * p.solver.displacement[i];
      p.geometry.attributes.position.needsUpdate = true;
      bufferUpdates++;
    }
  }
  return {
    group,
    impact,
    update,
    stats() {
      return {
        impulses,
        bufferUpdates,
        activePanels: [...panels.values()].filter((p) => p.solver.active)
          .length,
        nodes: [...panels.values()].reduce(
          (n, p) => n + p.solver.displacement.length,
          0
        )
      };
    }
  };
}
