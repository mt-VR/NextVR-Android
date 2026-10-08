#!/usr/bin/env python3
"""Use supplied raster artwork verbatim (crop/resize only), for launcher + finger-menu icon.
Usage: python tools/prepare_branding.py /path/to/original.png
Requires Pillow. Does not generate or recreate artwork.
"""
from pathlib import Path
import shutil, sys
from PIL import Image, ImageOps
root=Path(__file__).resolve().parents[1]
source=Path(sys.argv[1]) if len(sys.argv)>1 else root/'artwork/nextvr-logo.png'
if not source.is_file():
    raise SystemExit('Missing original logo. Add artwork/nextvr-logo.png or pass its file path.')
original=Image.open(source).convert('RGBA')
# The supplied mark is silver on black: trim its large empty margin, retaining edge shading.
mask=ImageOps.grayscale(original).point(lambda x:255 if x>55 else 0)
bounds=mask.getbbox()
if not bounds: raise SystemExit('The logo image is empty.')
x0,y0,x1,y1=bounds;pad=max(8,round(max(x1-x0,y1-y0)*.08))
mark=original.crop((max(0,x0-pad),max(0,y0-pad),min(original.width,x1+pad),min(original.height,y1+pad)))
def image(size, content, transparent=False):
    canvas=Image.new('RGBA',(size,size),(0,0,0,0 if transparent else 255))
    fit=ImageOps.contain(mark,(content,content),Image.Resampling.LANCZOS)
    canvas.alpha_composite(fit,((size-fit.width)//2,(size-fit.height)//2));return canvas
art=root/'artwork';art.mkdir(exist_ok=True)
if source.resolve()!=(art/'nextvr-logo.png').resolve():shutil.copyfile(source,art/'nextvr-logo.png')
image(256,224).save(art/'finger-logo.png')
res=root/'nextvr-android/src/main/res'
for density,size in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
    directory=res/f'drawable-{density}';directory.mkdir(exist_ok=True)
    image(size,round(size*.78)).save(directory/'nextvr_ic_launcher.png')
(res/'drawable-nodpi').mkdir(exist_ok=True)
image(432,240,True).save(res/'drawable-nodpi/nextvr_icon_foreground.png')
(res/'drawable-anydpi-v26').mkdir(exist_ok=True)
(res/'drawable-anydpi-v26/nextvr_ic_launcher.xml').write_text('''<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/nextvr_icon_background" />
    <foreground android:drawable="@drawable/nextvr_icon_foreground" />
</adaptive-icon>\n''')
(res/'values/branding.xml').write_text('<resources><color name="nextvr_icon_background">#000000</color></resources>\n')
print('Prepared exact-source launcher and finger-menu artwork. Run npm run build:ui next.')
