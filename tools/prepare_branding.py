#!/usr/bin/env python3
"""Use the supplied square NextVR logo verbatim for launcher + finger-menu artwork.
Usage: python tools/prepare_branding.py [artwork/nextvr-apk-logo.png]
Requires Pillow. Does not generate or recreate artwork.
"""
from pathlib import Path
import shutil, sys
from PIL import Image, ImageOps
root=Path(__file__).resolve().parents[1]
source=Path(sys.argv[1]) if len(sys.argv)>1 else root/'artwork/nextvr-apk-logo.png'
if not source.is_file():
    raise SystemExit('Missing original logo. Add artwork/nextvr-logo.png or pass its file path.')
original=Image.open(source).convert('RGBA')
# Preserve the complete square composition, including the purple background and mark.
mark=original
def image(size, content, transparent=False):
    canvas=Image.new('RGBA',(size,size),(0,0,0,0 if transparent else 255))
    fit=ImageOps.contain(mark,(content,content),Image.Resampling.LANCZOS)
    canvas.alpha_composite(fit,((size-fit.width)//2,(size-fit.height)//2));return canvas
art=root/'artwork';art.mkdir(exist_ok=True)
if source.resolve()!=(art/'nextvr-apk-logo.png').resolve():shutil.copyfile(source,art/'nextvr-apk-logo.png')
image(256,224).save(art/'finger-logo.png')
res=root/'nextvr-android/src/main/res'
for density,size in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
    directory=res/f'drawable-{density}';directory.mkdir(exist_ok=True)
    image(size,size).save(directory/'nextvr_ic_launcher.png')
(res/'drawable-nodpi').mkdir(exist_ok=True)
image(432,240,True).save(res/'drawable-nodpi/nextvr_icon_foreground.png')
(res/'drawable-anydpi-v26').mkdir(exist_ok=True)
(res/'drawable-anydpi-v26/nextvr_ic_launcher.xml').write_text('''<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/nextvr_icon_background" />
    <foreground android:drawable="@drawable/nextvr_icon_foreground" />
</adaptive-icon>\n''')
(res/'values/branding.xml').write_text('<resources><color name="nextvr_icon_background">#000000</color></resources>\n')
print('Prepared exact-source launcher and finger-menu artwork. Run npm run build:ui next.')
