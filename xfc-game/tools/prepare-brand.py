"""Deriva ícones do arquivo ORIGINAL enviado; não redesenha a marca.
Executar com Pillow: python xfc-game/tools/prepare-brand.py
"""
from pathlib import Path
from PIL import Image, ImageOps
ROOT = Path(__file__).resolve().parents[2]
source = Image.open(ROOT / 'design/brand/xfc27-icon-original.png').convert('RGBA')
# Remove apenas as margens pretas externas do upload (1672 × 941).
art = source.crop((324, 8, 1348, 929))
# Mantém a proporção da arte, sem esticar o logo para um quadrado.
icon = ImageOps.pad(art, (512, 512), color=(0, 0, 0, 255), method=Image.Resampling.LANCZOS)
icon.save(ROOT / 'xfc-game/assets/brand/xfc-icon.png', optimize=True)
res = ROOT / 'xfc-game/android/app/src/main/res'
for density, size in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
    folder = res / f'mipmap-{density}'
    folder.mkdir(exist_ok=True)
    for name in ['ic_launcher.png','ic_launcher_round.png']:
        icon.resize((size,size),Image.Resampling.LANCZOS).save(folder/name,optimize=True)
    # Android adaptive: logo preservado dentro da zona segura de qualquer máscara.
    adaptive = round(size*108/48)
    foreground = Image.new('RGBA',(adaptive,adaptive),(0,0,0,0))
    safe = round(adaptive*66/108)
    tile = icon.resize((safe,safe),Image.Resampling.LANCZOS)
    foreground.alpha_composite(tile,((adaptive-safe)//2,(adaptive-safe)//2))
    foreground.save(folder/'ic_launcher_foreground.png',optimize=True)
