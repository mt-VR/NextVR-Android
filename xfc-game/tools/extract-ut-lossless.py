"""Preserva os pixels dos painéis enviados, sem recompressão JPEG ou upscale.
Uso: python extract-ut-lossless.py menus.png eventos.png (Pillow).
Os JPG originais continuam como referência e entrada dos crops derivados.
"""
import sys
from pathlib import Path
from PIL import Image
out = Path(__file__).resolve().parents[1] / 'assets/ultimate/reference'
for path, names in zip(sys.argv[1:], [('home', 'squad', 'market', 'store'), ('events', 'battles', 'walkout', 'season')]):
    source = Image.open(path).convert('RGB')
    for i, name in enumerate(names):
        if name in ('squad', 'walkout'):
            continue  # áreas variáveis já limpas nas cópias derivadas
        x, y = (i % 2) * 838, (i // 2) * 472
        source.crop((x, y, x + 834, y + 469)).save(out / f'{name}.png', optimize=True)
