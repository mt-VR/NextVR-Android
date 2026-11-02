/* Gravador canvas 2D -> JSON de operações (coordenadas já no espaço do mundo).
   Usado só para inspeção visual fora do navegador; não faz parte do jogo. */
export function jsonRecorder(width, height) {
  const ops = [];
  let m = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  let stack = [];
  let clips = [];
  let path = [];
  let cur = [0, 0];
  let style = { fillStyle: '#000', strokeStyle: '#000', lineWidth: 1, globalAlpha: 1,
    font: '10px sans-serif', textAlign: 'start', textBaseline: 'alphabetic', lineCap: 'butt' };

  const R = (x, y) => [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f];
  const sc = () => [Math.hypot(m.a, m.b), Math.hypot(m.c, m.d)];
  const mul = (A, B) => ({ a: A.a*B.a + A.c*B.b, b: A.b*B.a + A.d*B.b, c: A.a*B.c + A.c*B.d,
    d: A.b*B.c + A.d*B.d, e: A.a*B.e + A.c*B.f + A.e, f: A.b*B.e + A.d*B.f + A.f });
  const rp = v => Math.round(v * 100) / 100;
  const bake = () => path.map(s => s[0] === 'Z' ? ['Z'] : [s[0], ...R(s[1], s[2]).map(rp)]);
  const paint = v => (typeof v === 'string' ? v : (v && v.__grad ? v.__grad() : '#000'));
  const base = op => Object.assign({ op }, style.globalAlpha !== 1 ? { alpha: rp(style.globalAlpha) } : {},
    clips.length ? { clip: clips.map(c => c.map(pt => pt.map(rp))) } : {});

  function emitPath(kind) {
    const segs = bake(); if (!segs.length) return;
    const [sx, sy] = sc();
    const o = base(kind);
    o.d = segs;
    if (kind !== 'stroke') o.fill = paint(style.fillStyle);
    if (kind !== 'fill') { o.stroke = paint(style.strokeStyle); o.lw = rp(style.lineWidth * (sx + sy) / 2); }
    ops.push(o);
  }

  function arcPts(cx, cy, rx, ry, rot, a0, a1, ccw, seg = 64) {
    let sweep = a1 - a0;
    if (ccw) { while (sweep > 0) sweep -= Math.PI * 2; } else { while (sweep < 0) sweep += Math.PI * 2; }
    if (Math.abs(Math.abs(sweep) - Math.PI * 2) < 1e-6) sweep = (ccw ? -1 : 1) * Math.PI * 2 * 0.99999;
    const co = Math.cos(rot || 0), si = Math.sin(rot || 0), pts = [];
    for (let i = 0; i <= seg; i++) {
      const a = a0 + sweep * (i / seg), x = Math.abs(rx) * Math.cos(a), y = Math.abs(ry) * Math.sin(a);
      pts.push([cx + x * co - y * si, cy + x * si + y * co]);
    }
    return pts;
  }

  const ctx = {
    canvas: { width, height },
    save() { stack.push({ m: { ...m }, style: { ...style }, nclip: clips.length }); },
    restore() { const s = stack.pop(); if (!s) return; m = s.m; style = s.style; clips.length = s.nclip; },
    translate(x, y) { m = mul(m, { a: 1, b: 0, c: 0, d: 1, e: x, f: y }); },
    scale(x, y) { m = mul(m, { a: x, b: 0, c: 0, d: y, e: 0, f: 0 }); },
    rotate(r) { const c = Math.cos(r), s = Math.sin(r); m = mul(m, { a: c, b: s, c: -s, d: c, e: 0, f: 0 }); },
    transform(a, b, c, d, e, f) { m = mul(m, { a, b, c, d, e, f }); },
    setTransform(a, b, c, d, e, f) { m = (a && typeof a === 'object') ? { ...a } : { a, b, c, d, e, f }; },
    resetTransform() { m = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }; },
    getTransform() { return { ...m }; },
    beginPath() { path = []; },
    closePath() { path.push(['Z']); },
    moveTo(x, y) { path.push(['M', x, y]); cur = [x, y]; },
    lineTo(x, y) { if (!path.length) path.push(['M', cur[0], cur[1]]); path.push(['L', x, y]); cur = [x, y]; },
    quadraticCurveTo(cx0, cy0, x, y) {
      if (!path.length) path.push(['M', cur[0], cur[1]]);
      const [x0, y0] = cur;
      for (let i = 1; i <= 14; i++) { const t = i / 14, u = 1 - t;
        path.push(['L', u*u*x0 + 2*u*t*cx0 + t*t*x, u*u*y0 + 2*u*t*cy0 + t*t*y]); }
      cur = [x, y];
    },
    bezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
      if (!path.length) path.push(['M', cur[0], cur[1]]);
      const [x0, y0] = cur;
      for (let i = 1; i <= 18; i++) { const t = i / 18, u = 1 - t;
        path.push(['L', u*u*u*x0 + 3*u*u*t*c1x + 3*u*t*t*c2x + t*t*t*x,
                       u*u*u*y0 + 3*u*u*t*c1y + 3*u*t*t*c2y + t*t*t*y]); }
      cur = [x, y];
    },
    arcTo(x1, y1, x2, y2, r) {
      if (!path.length) path.push(['M', cur[0], cur[1]]);
      const [x0, y0] = cur;
      const d0 = Math.hypot(x1 - x0, y1 - y0), d2 = Math.hypot(x2 - x1, y2 - y1);
      if (d0 < 1e-6 || d2 < 1e-6 || !(r > 0)) { path.push(['L', x1, y1]); cur = [x1, y1]; return; }
      const t0 = Math.min(r / d0, 1), t2 = Math.min(r / d2, 1);
      const p0 = [x1 + (x0 - x1) * t0, y1 + (y0 - y1) * t0];
      const p2 = [x1 + (x2 - x1) * t2, y1 + (y2 - y1) * t2];
      path.push(['L', p0[0], p0[1]]);
      for (let i = 1; i <= 8; i++) { const t = i / 8, u = 1 - t;
        path.push(['L', u*u*p0[0] + 2*u*t*x1 + t*t*p2[0], u*u*p0[1] + 2*u*t*y1 + t*t*p2[1]]); }
      cur = [p2[0], p2[1]];
    },
    rect(x, y, w, h) { path.push(['M', x, y], ['L', x + w, y], ['L', x + w, y + h], ['L', x, y + h], ['Z']); },
    roundRect(x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); },
    arc(cx, cy, r, a0, a1, ccw) { arcPts(cx, cy, r, r, 0, a0, a1 === undefined ? Math.PI * 2 : a1, ccw)
      .forEach((p, i) => path.push([i === 0 && !path.length ? 'M' : 'L', p[0], p[1]])); },
    ellipse(cx, cy, rx, ry, rot, a0, a1, ccw) { arcPts(cx, cy, rx, ry, rot, a0, a1 === undefined ? Math.PI * 2 : a1, ccw)
      .forEach((p, i) => path.push([i === 0 && !path.length ? 'M' : 'L', p[0], p[1]])); },
    fill() { emitPath('fill'); },
    stroke() { emitPath('stroke'); },
    fillRect(x, y, w, h) { ctx.beginPath(); ctx.rect(x, y, w, h); emitPath('fill'); },
    strokeRect(x, y, w, h) { ctx.beginPath(); ctx.rect(x, y, w, h); emitPath('stroke'); },
    clearRect() {},
    clip() { const segs = bake().filter(s => s[0] !== 'Z').map(s => [s[1], s[2]]); if (segs.length > 2) clips.push(segs); },
    fillText(txt, x, y) {
      if (txt === undefined || txt === null || txt === '') return;
      const size = parseFloat((/([\d.]+)px/.exec(style.font) || [0, 14])[1]) || 14;
      const [sx] = sc(); const p = R(x, y);
      ops.push(Object.assign(base('text'), { text: String(txt), x: rp(p[0]), y: rp(p[1]),
        size: rp(size * sx), bold: /bold|[6-9]00/.test(style.font), align: style.textAlign,
        baseline: style.textBaseline, fill: paint(style.fillStyle) }));
    },
    strokeText(txt, x, y) {
      if (!txt) return;
      const size = parseFloat((/([\d.]+)px/.exec(style.font) || [0, 14])[1]) || 14;
      const [sx] = sc(); const p = R(x, y);
      ops.push(Object.assign(base('stext'), { text: String(txt), x: rp(p[0]), y: rp(p[1]),
        size: rp(size * sx), bold: /bold|[6-9]00/.test(style.font), align: style.textAlign,
        baseline: style.textBaseline, stroke: paint(style.strokeStyle), lw: rp(style.lineWidth * sx) }));
    },
    measureText(txt) { const size = parseFloat((/([\d.]+)px/.exec(style.font) || [0, 14])[1]) || 14;
      return { width: String(txt).length * size * 0.55 }; },
    createLinearGradient(x0, y0, x1, y1) {
      const stops = [];
      const p0 = R(x0, y0), p1 = R(x1, y1);
      return { addColorStop(o, c) { stops.push([rp(o), c]); },
        __grad: () => ({ g: 'lin', x0: rp(p0[0]), y0: rp(p0[1]), x1: rp(p1[0]), y1: rp(p1[1]), stops }) };
    },
    createRadialGradient(x0, y0, r0, x1, y1, r1) {
      const stops = []; const c = R(x1, y1), f = R(x0, y0); const [sx, sy] = sc();
      return { addColorStop(o, col) { stops.push([rp(o), col]); },
        __grad: () => ({ g: 'rad', cx: rp(c[0]), cy: rp(c[1]), r: rp(Math.max(.5, r1 * (sx + sy) / 2)),
          fx: rp(f[0]), fy: rp(f[1]), stops }) };
    },
    createPattern() { return null; },
    getImageData(x, y, w, h) { return { data: new Uint8ClampedArray(Math.max(4, (w | 0) * (h | 0) * 4)), width: w, height: h }; },
    putImageData() {}, createImageData(w, h) { return { data: new Uint8ClampedArray(Math.max(4, (w | 0) * (h | 0) * 4)) }; },
    setLineDash() {}, getLineDash() { return []; }, drawImage() {}, isPointInPath() { return false; }
  };
  for (const k of ['fillStyle', 'strokeStyle', 'lineWidth', 'globalAlpha', 'font', 'textAlign',
    'textBaseline', 'lineCap', 'lineJoin', 'shadowBlur', 'shadowColor', 'globalCompositeOperation', 'filter']) {
    Object.defineProperty(ctx, k, { get: () => style[k], set: v => { style[k] = v; }, enumerable: true });
  }
  return { ctx, dump: () => JSON.stringify({ w: width, h: height, ops }) };
}
