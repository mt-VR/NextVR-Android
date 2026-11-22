"""Recortes sem textos/dados: referências fornecidas pelo usuário, ver CREDITS."""
from PIL import Image
from pathlib import Path
p=Path(__file__).resolve().parents[1]/'assets/ui/season'
for src,name,box in [('entry.png','player-tile.png',(320,330,500,645)),('entry.png','manager-tile.png',(725,335,915,645))]:
 Image.open(p/src).crop(tuple(round(v*1672/1568) for v in box)).save(p/name)
Image.open(p.parent/'career/reference.png').crop(tuple(round(v*1672/1568) for v in (950,100,1490,790))).save(p/'neymar.png')
