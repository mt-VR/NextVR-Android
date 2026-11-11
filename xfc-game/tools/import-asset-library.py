"""Extrai JSON do HTML enviado sem executar scripts. Preserva bytes JPEG e IDs.
Uso: python import-asset-library.py biblioteca_assets_xfc27_corrigida.html
"""
import base64, hashlib, io, json, sys
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
source=Path(sys.argv[1]);text=source.read_text()
items=json.JSONDecoder().raw_decode(text.split('const assets = ',1)[1])[0]
out=root/'assets/library';out.mkdir(exist_ok=True)
# Apenas classificação visual de tipo. Nenhuma identidade facial inferida.
kit_ids={2,406,417,605,606,607,608,614,616,617,618,619,620,621,622,623}
icons={1230,1231,1232,1233,1234,1235,1236,1238,1279,1280,1281,1282,1283,1286,1308,1309,1310,1311,1312,1321,1322,1953,1954,1955,1956,1957,1958,1960,1961,1963,1970,1971,1972}
def category(a):
 i=a['id']
 if i in kit_ids:return 'kits'
 if i in icons:return 'icons'
 if (626<=i<=664 or 669<=i<=677 or 1324<=i<=1846 or 1881<=i<=1933 or i in [7,8,9,10,11,12,13,1942,1943,1949,1950,1964]):
  return 'faces' if a['w']/a['h']<1.55 and a['h']>=65 else 'other'
 if 3<=i<=591 or 678<=i<=1175 or 1847<=i<=1877 or i==668:return 'marks'
 return 'other'
manifest=[];seen={}
for a in items:
 raw=base64.b64decode(a['data'].split(',',1)[1],validate=True);im=Image.open(io.BytesIO(raw));im.verify()
 digest=hashlib.sha256(raw).hexdigest();filename=seen.setdefault(digest,f"{a['id']:04}.jpg")
 (out/filename).write_bytes(raw)
 manifest.append(dict(id=a['id'],source=int(a['source'].split()[-1]),w=a['w'],h=a['h'],category=category(a),file=f'assets/library/{filename}'))
(root/'src/data/asset-library-catalog.js').write_text('// Gerado por tools/import-asset-library.py; sem identidades faciais inferidas.\nexport const ASSET_LIBRARY = '+json.dumps(manifest,separators=(',',':'))+';\n')
(out/'source.json').write_text(json.dumps(dict(file=source.name,sha256=hashlib.sha256(source.read_bytes()).hexdigest(),items=len(items),uniqueFiles=len(seen)),indent=2))
# Atlas de uniforme: só exemplares completos revisados; frente/costas extraídas.
# As peças não têm nome de clube, portanto são variantes personalizadas numeradas.
kits=[]
for i,colors in [(2,['#9d1426','#194597','#ffffff']),(406,['#a71821','#ffffff','#ffffff']),(417,['#dc8b2c','#1c1c22','#111111'])]:
 a=next(x for x in items if x['id']==i);im=Image.open(io.BytesIO(base64.b64decode(a['data'].split(',')[1]))).convert('RGB');w,h=im.size
 # Troncos centrais superior/inferior do atlas de uniforme (sem shorts/meiões).
 for name,box in [('front',(.32,.04,.66,.40)),('back',(.32,.42,.66,.70))]:
  im.crop(tuple(round(v*(w if n%2==0 else h)) for n,v in enumerate(box))).save(out/f'kit-{i}-{name}.png')
 kits.append(dict(id=i,name=f'Uniforme enviado #{i}',front=f'assets/library/kit-{i}-front.png',back=f'assets/library/kit-{i}-back.png',colors=dict(zip(['primary','secondary','trim'],colors))))
(root/'src/data/asset-library-kits.js').write_text('// Atlas enviados, adaptação de superfície; não uniformes oficiais identificados.\nexport const LIBRARY_KITS = '+json.dumps(kits,separators=(',',':'))+';\n')
print(len(manifest),'entradas;',len(seen),'arquivos únicos')
