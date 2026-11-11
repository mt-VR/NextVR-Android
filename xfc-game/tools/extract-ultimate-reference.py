#!/usr/bin/env python3
"""Recorta as duas colagens fornecidas: python script.py menus.png eventos.png.
Requer Pillow. Cabeçalhos, saldo e controles dos prints nunca viram dados do jogo.
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw
OUT=Path(__file__).resolve().parents[1]/'assets/ultimate/reference'
OUT.mkdir(parents=True,exist_ok=True)
for path,names in zip(sys.argv[1:],[['home','squad','market','store'],['events','battles','walkout','season']]):
    im=Image.open(path).convert('RGB')
    for i,name in enumerate(names):
        x=0 if i%2==0 else 838; y=0 if i<2 else 472
        im.crop((x,y,x+834,y+469)).save(OUT/f'{name}.jpg',quality=91)
def crop(name,box,target):
    im=Image.open(OUT/f'{name}.jpg');w,h=im.size
    im.crop(tuple(round(n*(w/700 if i%2==0 else h/394)) for i,n in enumerate(box))).save(OUT/f'{target}.jpg',quality=92)
for name,box,target in [('home',(260,90,699,349),'home-art'),('store',(239,69,699,348),'store-art'),('market',(240,68,698,346),'market-art'),('events',(365,75,699,346),'events-art'),('battles',(501,157,669,305),'reward-art'),('battles',(59,210,195,337),'battles-badge'),('season',(298,70,454,225),'season-badge'),('squad',(22,14,207,66),'brand')]:crop(name,box,target)
# Limpar valor fixo do medalhão: o nível é texto DOM do perfil.
im=Image.open(OUT/'season-badge.jpg');d=ImageDraw.Draw(im);w,h=im.size
d.polygon([(w*.29,h*.23),(w*.84,h*.23),(w*.84,h*.71),(w*.565,h*.91),(w*.29,h*.71)],fill='#21103e');im.save(OUT/'season-badge.jpg',quality=92)

root=OUT
def polygon_patch(im,points,kind):
 w,h=im.size;mask=Image.new('L',(w,h));p=[(x/700*w,y/394*h) for x,y in points];ImageDraw.Draw(mask).polygon(p,fill=255)
 layer=Image.new('RGB',(w,h));px=layer.load()
 for y in range(h):
  for x in range(w):
   if kind=='grass':
    v=7 if int(y/32)%2 else 0;px[x,y]=(22+v,65+int(y/h*32)+v,29+v)
   else:
    v=(x/w+y/h)*.5;px[x,y]=(int(190+45*v),int(140+55*v),int(43+45*v))
 im.paste(layer,(0,0),mask)
im=Image.open(root/'squad.jpg').convert('RGB');polygon_patch(im,[(252,60),(568,60),(710,379),(111,379)],'grass');d=ImageDraw.Draw(im)
w,h=im.size
p=lambda x,y:(x/700*w,y/394*h)
d.line([p(259,76),p(560,76),p(684,370),p(130,370),p(259,76)],fill='#77966c',width=2);d.line([p(208,219),p(621,219)],fill='#77966c',width=2);d.ellipse([p(350,192),p(474,247)],outline='#77966c',width=2)
im.save(root/'squad-field.jpg',quality=92)
im=Image.open(root/'walkout.jpg').convert('RGB')
for poly in [[(225,20),(493,20),(493,342),(225,342)],[(42,118),(192,92),(191,343),(42,343)],[(519,118),(660,84),(669,343),(519,343)]]:polygon_patch(im,poly,'gold')
im.save(root/'walkout-stage.jpg',quality=92)
