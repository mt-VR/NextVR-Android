from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]/'assets/ultimate/reference'
for panel,name,box in [('market','neymar-portrait',(365,84,470,217)),('walkout','vinicius-portrait',(305,51,444,195))]:
 im=Image.open(root/f'{panel}.jpg');w,h=im.size
 im.crop(tuple(round(n*(w/700 if i%2==0 else h/394)) for i,n in enumerate(box))).save(root/f'{name}.jpg',quality=95)
