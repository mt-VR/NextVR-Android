#!/usr/bin/env python3
"""Deriva o painel editável sem redimensionar a referência 1672×941.
Campos variáveis são preenchidos por interpolação das bordas limpas da própria
linha, com transição suave. Nenhuma IA/arte nova, escudo ou camisa inventada.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
ROOT=Path(__file__).resolve().parents[1]/'assets/ui/quick'
im=Image.open(ROOT/'reference.png').convert('RGB'); source=im.copy()
sx,sy=im.width/1568,im.height/882
for shift in [0,868]:
    mask=Image.new('L',im.size); draw=ImageDraw.Draw(mask)
    for x0,y0,x1,y1 in [(181,220,531,418),(172,418,562,466),(217,468,506,500),(277,502,450,646),(216,649,524,685)]:
        if shift and y0==418:x0,x1=153,582
        draw.rectangle((round((x0+shift)*sx),round(y0*sy),round((x1+shift)*sx),round(y1*sy)),fill=255)
    mask=mask.filter(ImageFilter.GaussianBlur(3*sx))
    plate=source.copy()
    for y in range(round(212*sy),round(695*sy)):
        left=source.getpixel((round((180+shift)*sx),y));right=source.getpixel((round(((590 if y/sy<610 else 535 if y/sy<640 else 180)+shift)*sx),y))
        for x in range(round((145+shift)*sx),round((605+shift)*sx)):
            t=max(0,min(1,(x/sx-shift-160)/430))
            plate.putpixel((x,y),tuple(round(a*(1-t)+b*t) for a,b in zip(left,right)))
    im=Image.composite(plate,im,mask)
# Settings are real DOM buttons, not fixed "Normal" printed on the backdrop.
for y0,y1 in [(420,467),(509,555)]:
    draw=ImageDraw.Draw(im)
    draw.rectangle((round(646*sx),round(y0*sy),round(923*sx),round(y1*sy)),fill=(8,14,17))
im.save(ROOT/'field.png')
