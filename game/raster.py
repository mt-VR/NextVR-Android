#!/usr/bin/env python3
"""Rasteriza o JSON de operações canvas (build/json-recorder.mjs) em PNG.
Ferramenta de inspeção visual — não faz parte do jogo."""
import json, math, re, sys, os
from PIL import Image, ImageDraw, ImageFont

FONT_R = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
FONT_B = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
_fonts = {}


def font(size, bold):
    key = (round(size), bold)
    if key not in _fonts:
        try:
            _fonts[key] = ImageFont.truetype(FONT_B if bold else FONT_R, max(4, round(size)))
        except Exception:
            _fonts[key] = ImageFont.load_default()
    return _fonts[key]


def parse_color(c):
    """-> (r,g,b,a 0..1)"""
    if isinstance(c, dict):
        return None
    if not isinstance(c, str):
        return (0, 0, 0, 1)
    c = c.strip()
    if c.startswith('#'):
        h = c[1:]
        if len(h) == 3:
            h = ''.join(ch * 2 for ch in h)
        if len(h) == 8:
            return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), int(h[6:8], 16) / 255)
        if len(h) >= 6:
            return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), 1.0)
    m = re.match(r'rgba?\(([^)]+)\)', c)
    if m:
        parts = [p.strip() for p in m.group(1).replace('/', ' ').split(',')]
        parts = [p for p in parts if p]
        vals = []
        for p in parts[:3]:
            vals.append(float(p[:-1]) * 2.55 if p.endswith('%') else float(p))
        a = 1.0
        if len(parts) > 3:
            a = float(parts[3][:-1]) / 100 if parts[3].endswith('%') else float(parts[3])
        return (int(vals[0]), int(vals[1]), int(vals[2]), max(0.0, min(1.0, a)))
    names = {'white': (255, 255, 255, 1), 'black': (0, 0, 0, 1), 'red': (255, 0, 0, 1),
             'transparent': (0, 0, 0, 0)}
    return names.get(c, (0, 0, 0, 1))


def sub(segs):
    """converte ['M'|'L'|'Z', x, y] em lista de polígonos"""
    polys, cur, start = [], [], None
    for s in segs:
        if s[0] == 'M':
            if len(cur) > 2:
                polys.append(cur)
            cur = [(s[1], s[2])]
            start = (s[1], s[2])
        elif s[0] == 'L':
            if not cur:
                cur = [start or (s[1], s[2])]
            cur.append((s[1], s[2]))
        elif s[0] == 'Z':
            if start and cur and cur[-1] != start:
                cur.append(start)
    if len(cur) > 2:
        polys.append(cur)
    return polys


def bounds(polys):
    xs = [p[0] for poly in polys for p in poly]
    ys = [p[1] for poly in polys for p in poly]
    if not xs:
        return None
    return (min(xs), min(ys), max(xs), max(ys))


def apply_alpha(col, alpha):
    if alpha is None or alpha >= 1:
        return col
    return (col[0], col[1], col[2], col[3] * alpha)


def build_gradient(gd, box, alpha):
    x0, y0, x1, y1 = box
    w, h = max(1, int(math.ceil(x1 - x0))), max(1, int(math.ceil(y1 - y0)))
    w, h = min(w, 900), min(h, 1900)
    stops = gd.get('stops') or [[0, '#000'], [1, '#000']]
    lut = []
    for i in range(256):
        t = i / 255
        lo, hi = stops[0], stops[-1]
        for a, b in zip(stops, stops[1:]):
            if a[0] <= t <= b[0]:
                lo, hi = a, b
                break
        if t <= stops[0][0]:
            lo = hi = stops[0]
        if t >= stops[-1][0]:
            lo = hi = stops[-1]
        span = (hi[0] - lo[0]) or 1e-6
        k = max(0.0, min(1.0, (t - lo[0]) / span))
        ca, cb = parse_color(lo[1]), parse_color(hi[1])
        ca = ca or (0, 0, 0, 1)
        cb = cb or (0, 0, 0, 1)
        lut.append((int(ca[0] + (cb[0] - ca[0]) * k), int(ca[1] + (cb[1] - ca[1]) * k),
                    int(ca[2] + (cb[2] - ca[2]) * k), (ca[3] + (cb[3] - ca[3]) * k)))
    if gd.get('g') == 'lin':
        gx0, gy0, gx1, gy1 = gd['x0'], gd['y0'], gd['x1'], gd['y1']
        dx, dy = gx1 - gx0, gy1 - gy0
        L2 = dx * dx + dy * dy or 1e-6
        img = Image.new('RGBA', (w, h))
        def col_at(t):
            c = lut[int(max(0.0, min(1.0, t)) * 255) % 256]
            return (c[0], c[1], c[2], int(round(c[3] * (alpha if alpha is not None else 1) * 255)))
        if abs(dy) >= abs(dx):
            for yy in range(h):
                wy = y0 + yy + 0.5
                t = ((wy - gy0) * dy + (x0 + 0.5 - gx0) * dx) / L2
                rowc = col_at(t)
                drow = Image.new('RGBA', (w, 1), rowc)
                img.paste(drow, (0, yy))
        else:
            for xx in range(w):
                wx = x0 + xx + 0.5
                t = ((wx - gx0) * dx + (y0 + 0.5 - gy0) * dy) / L2
                colc = col_at(t)
                dcol = Image.new('RGBA', (1, h), colc)
                img.paste(dcol, (xx, 0))
        return img
    cx, cy, r = gd['cx'], gd['cy'], max(0.5, gd['r'])
    img = Image.new('RGBA', (w, h))
    data = []
    for yy in range(h):
        wy = y0 + yy + 0.5 - cy
        for xx in range(w):
            wx = x0 + xx + 0.5 - cx
            t = max(0.0, min(1.0, math.sqrt(wx * wx + wy * wy) / r))
            c = lut[int(t * 255) % 256]
            data.append((c[0], c[1], c[2], int(round(c[3] * (alpha if alpha is not None else 1) * 255))))
    img.putdata(data)
    return img


def composite(img, layer, box):
    x0, y0, x1, y1 = box
    ix0, iy0 = max(0, int(math.floor(x0))), max(0, int(math.floor(y0)))
    ix1, iy1 = min(img.width, int(math.ceil(x1)) + 1), min(img.height, int(math.ceil(y1)) + 1)
    if ix1 <= ix0 or iy1 <= iy0:
        return
    region = img.crop((ix0, iy0, ix1, iy1))
    if layer.size != region.size:
        layer = layer.resize(region.size)
    img.paste(Image.alpha_composite(region.convert('RGBA'), layer.convert('RGBA')), (ix0, iy0))


def clip_mask(polys, box):
    x0, y0, x1, y1 = box
    w, h = max(1, int(math.ceil(x1 - x0))), max(1, int(math.ceil(y1 - y0)))
    mask = Image.new('L', (w, h), 0)
    d = ImageDraw.Draw(mask)
    for poly in polys:
        d.polygon([(px - x0, py - y0) for px, py in poly], fill=255)
    return mask, (x0, y0)


def draw_op(img, o):
    from PIL import ImageChops
    alpha = o.get('alpha')
    clips = o.get('clip')
    if o['op'] in ('fill', 'stroke'):
        polys = sub(o.get('d') or [])
        if not polys:
            return
        bb = bounds(polys)
        lw = o.get('lw') or 1
        pad = lw * 1.6 + 2
        box = (bb[0] - pad, bb[1] - pad, bb[2] + pad, bb[3] + pad)
        layer = Image.new('RGBA', (max(1, int(math.ceil(box[2] - box[0]))),
                                   max(1, int(math.ceil(box[3] - box[1])))), (0, 0, 0, 0))
        d = ImageDraw.Draw(layer)
        shift = lambda poly: [(px - box[0], py - box[1]) for px, py in poly]
        if 'fill' in o and o['op'] != 'stroke':
            paint = o.get('fill')
            mask = Image.new('L', layer.size, 0)
            md = ImageDraw.Draw(mask)
            for poly in polys:
                md.polygon(shift(poly), fill=255)
            if isinstance(paint, dict):
                absx0, absy0 = int(math.floor(box[0])), int(math.floor(box[1]))
                gw = absx0 + layer.width + 2
                gh = absy0 + layer.height + 2
                gfull = build_gradient(paint, (0, 0, gw, gh), None)
                crop = gfull.crop((absx0, absy0, absx0 + layer.width, absy0 + layer.height))
                layer.paste(crop, (0, 0))
                layer.putalpha(ImageChops.multiply(layer.getchannel('A'), mask))
            else:
                col = apply_alpha(parse_color(paint) or (0, 0, 0, 1), alpha)
                rgba8 = (col[0], col[1], col[2], int(round(col[3] * 255)))
                layer = Image.new('RGBA', layer.size, (0, 0, 0, 0))
                d = ImageDraw.Draw(layer)
                for poly in polys:
                    d.polygon(shift(poly), fill=rgba8)
        if o['op'] == 'stroke':
            col = apply_alpha(parse_color(o.get('stroke')) or (0, 0, 0, 1), alpha)
            rgba8 = (col[0], col[1], col[2], int(round(col[3] * 255)))
            width = max(1, int(round(lw)))
            for poly in polys:
                pts = shift(poly)
                if len(pts) > 1:
                    d.line(pts, fill=rgba8, width=width, joint='curve')
        if clips:
            a = layer.getchannel('A')
            for cpol in clips:
                keep = Image.new('L', layer.size, 0)
                kd = ImageDraw.Draw(keep)
                kd.polygon([(px - box[0], py - box[1]) for px, py in cpol], fill=255)
                a = ImageChops.multiply(a, keep)
            layer.putalpha(a)
        composite(img, layer, box)
    elif o['op'] in ('text', 'stext'):
        txt = o.get('text') or ''
        if not txt.strip():
            return
        f = font(o.get('size') or 14, o.get('bold'))
        work = Image.new('RGBA', img.size, (0, 0, 0, 0))
        d = ImageDraw.Draw(work)
        bbx = d.textbbox((0, 0), txt, font=f)
        wpx = bbx[2] - bbx[0]
        x = o['x'] - bbx[0]
        if o.get('align') == 'center':
            x -= wpx / 2
        elif o.get('align') in ('right', 'end'):
            x -= wpx
        y = o['y']
        bl = o.get('baseline')
        if bl == 'middle':
            y = o['y'] - (bbx[3] + bbx[1]) / 2
        elif bl == 'top':
            y = o['y'] - bbx[1]
        elif bl == 'bottom':
            y = o['y'] - bbx[3]
        col = apply_alpha(parse_color(o.get('fill') or o.get('stroke')) or (255, 255, 255, 1), alpha)
        rgba8 = (col[0], col[1], col[2], int(round(col[3] * 255)))
        if o['op'] == 'stext':
            lw2 = max(1, int(round(o.get('lw') or 2)))
            d.text((x, y), txt, font=f, fill=rgba8, stroke_width=lw2, stroke_fill=rgba8)
        else:
            d.text((x, y), txt, font=f, fill=rgba8)
        if clips:
            a = work.getchannel('A')
            for cpol in clips:
                keep = Image.new('L', work.size, 0)
                ImageDraw.Draw(keep).polygon(cpol, fill=255)
                a = ImageChops.multiply(a, keep)
            work.putalpha(a)
        img.alpha_composite(work)


def render(js, out):
    data = js
    if isinstance(js, (str, bytes)):
        data = json.loads(js) if not os.path.exists(js) else json.load(open(js, encoding='utf-8'))
    W, H = int(data['w']), int(data['h'])
    img = Image.new('RGBA', (W, H), (11, 11, 30, 255))
    for o in data['ops']:
        try:
            draw_op(img, o)
        except Exception as e:
            print('  op ignorado:', o.get('op'), type(e).__name__, e)
    img.convert('RGB').save(out)
    return out


if __name__ == '__main__':
    src = sys.argv[1]
    if os.path.isdir(src):
        for f in sorted(os.listdir(src)):
            if f.endswith('.json'):
                render(os.path.join(src, f), os.path.join(src, f[:-5] + '.png'))
                print('ok', f)
    else:
        render(src, sys.argv[2] if len(sys.argv) > 2 else src[:-5] + '.png')
        print('ok', src)
