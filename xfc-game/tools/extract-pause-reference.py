#!/usr/bin/env python3
"""Recorta só a UI da referência fornecida; nunca inclui o campo de fundo.
Uso: python3 tools/extract-pause-reference.py referencia.png
Requer Pillow. Origem/créditos: assets/ui/pause/CREDITS.md.
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw

source = Image.open(sys.argv[1]).convert('RGB').resize((1280, 720), Image.Resampling.LANCZOS)
output = Path(__file__).resolve().parents[1] / 'assets/ui/pause'
output.mkdir(parents=True, exist_ok=True)
boxes = {
    'brand': (66, 48, 274, 88), 'restart': (66, 242, 350, 278),
    'settings': (66, 303, 334, 344), 'facts': (66, 369, 300, 405),
    'end': (66, 429, 336, 468), 'select': (66, 653, 169, 680),
    'back': (189, 653, 266, 680),
}
for name, box in boxes.items():
    image = source.crop(box).convert('RGBA')
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b, _ = pixels[x, y]
            maximum, minimum = max(r, g, b), min(r, g, b)
            if name == 'brand':
                alpha = max(0, min(255, (maximum - 35) * 255 // 220))
                pixels[x, y] = tuple(min(255, c * 255 // max(1, maximum)) for c in (r, g, b)) + (alpha,)
            else:
                # Letras/ícones neutros: rejeita o verde sob o degradê.
                alpha = max(0, min(255, (int((r + g + b) / 3) - 25) * 255 // 230)) if maximum - minimum < 35 else 0
                pixels[x, y] = (255, 255, 255, alpha)
    image.save(output / f'{name}.png', optimize=True)
image = source.crop((27, 157, 406, 220)).convert('RGBA')
mask = Image.new('L', image.size)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, 378, 62), radius=9, fill=255)
image.putalpha(mask)
image.save(output / 'resume.png', optimize=True)
