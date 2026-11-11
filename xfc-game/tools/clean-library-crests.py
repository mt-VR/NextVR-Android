"""PNG transparente dos escudos revisados, preservando os JPEGs e logos originais.
Remove somente preto conectado às bordas; não faz chroma key global (há preto
no desenho dos escudos). Não processa bandeiras, rostos, atlas ou grupos.
Uso: python xfc-game/tools/clean-library-crests.py (Pillow).
"""
from collections import deque
from pathlib import Path
import json
from PIL import Image, ImageFilter
ROOT=Path(__file__).resolve().parents[1]
# Recortes individuais de escudos revisados visualmente. Novos IDs exigem revisão.
IDS=[5,6,14,15,16,17,18,21,22,25,26,27,28,29,30,31,32,33,36,
     203,205,206,207,208,209,210,211,212,213,214,394,395,397,400,401,402,403,
     405,407,408,409,410,414,415,416,418,419,420,421,423,424,428,429,430,432,433,434,
     435,438,440,507,508,509,510,511,512,513,514,515,668,692,695,696,708,715,716,717,718,719,766,767,768]
def remove_matte(image,trim=()):
    image=image.convert('RGB');w,h=image.size;rgb=image.load()
    seen=set();queue=deque()
    def dark(x,y):
        p=rgb[x,y]
        return max(p)<=28 and max(p)-min(p)<=18
    def visit(x,y):
        if 0<=x<w and 0<=y<h and (x,y) not in seen and dark(x,y):
            seen.add((x,y));queue.append((x,y))
    for x in range(w):visit(x,0);visit(x,h-1)
    for y in range(h):visit(0,y);visit(w-1,y)
    while queue:
        x,y=queue.popleft()
        for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]:visit(x+dx,y+dy)
    mask=Image.new('L',(w,h),255);alpha=mask.load()
    for point in seen:alpha[point]=0
    # Alguns crops trazem linhas de outros sprites nas bordas. Remover ilhas
    # pequenas periféricas, preservando estrelas/coroas acima do corpo central.
    remaining={(x,y) for y in range(h) for x in range(w) if (x,y) not in seen}
    components=[]
    while remaining:
        start=remaining.pop();component={start};queue=deque([start])
        while queue:
            x,y=queue.popleft()
            for point in [(x+1,y),(x-1,y),(x,y+1),(x,y-1)]:
                if point in remaining:remaining.remove(point);component.add(point);queue.append(point)
        components.append(component)
    if components:
        main=max(components,key=len);xs,ys=zip(*main);left,right,top,bottom=min(xs),max(xs),min(ys),max(ys)
        for component in components:
            if len(component)>=len(main)*.12:continue
            xs,ys=zip(*component);x0,x1,y0,y1=min(xs),max(xs),min(ys),max(ys)
            touches=x0==0 or y0==0 or x1==w-1 or y1==h-1
            far=x1<left-3 or x0>right+3 or y1<top-3 or y0>bottom+3
            crown=(y1<top and left+(right-left)*.2<(x0+x1)/2<left+(right-left)*.8
                   and (x1-x0+1)/(y1-y0+1)<3)
            if (touches or far) and not crown:
                for point in component:alpha[point]=0
                seen.update(component)
    # Suaviza apenas a transição, não o desenho interno. Sem inventar detalhes.
    soft=mask.filter(ImageFilter.GaussianBlur(.35));out=Image.new('RGBA',(w,h));pixels=out.load()
    for y in range(h):
        for x in range(w):
            a=soft.getpixel((x,y))
            if (x,y) in seen:a=0
            channels=rgb[x,y]
            if 0<a<255:channels=tuple(min(255,round(c*255/a)) for c in channels)
            pixels[x,y]=(*channels,a)
    # Sobras conectadas ao contorno em dois crops: caixas revisadas na fonte,
    # fora do escudo, sem tocar coroa/cruz do próprio emblema.
    for x0,y0,x1,y1 in trim:
        for y in range(y0,min(y1,h)):
            for x in range(x0,min(x1,w)):pixels[x,y]=(*rgb[x,y],0)
    # Reamostragem para tamanho de exibição, não uma nova fonte de alta resolução.
    return out.resize((w*2,h*2),Image.Resampling.LANCZOS)
if __name__=='__main__':
    out=ROOT/'assets/library/clean';out.mkdir(exist_ok=True)
    for id in IDS:
        image=Image.open(ROOT/f'assets/library/{id:04}.jpg')
        trim={211:[(0,0,102,7)],416:[(0,0,47,15)]}.get(id,[])
        remove_matte(image,trim).save(out/f'{id:04}.png',optimize=True)
    (ROOT/'src/data/asset-library-clean.js').write_text('// Gerado por tools/clean-library-crests.py; só escudos revisados.\nexport const CLEAN_CRESTS = '+json.dumps({id:f'assets/library/clean/{id:04}.png' for id in IDS},separators=(',',':'))+';\n')
    print(len(IDS),'escudos com cópia PNG transparente; originais preservados')
