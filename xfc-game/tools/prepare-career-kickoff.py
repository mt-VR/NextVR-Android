"""Deriva fundos das três referências fornecidas pelo usuário; sem gerar outra arte.
PYTHONPATH=/tmp/xfc-python python xfc-game/tools/prepare-career-kickoff.py
Dependências: Pillow, opencv-python-headless. Originais preservados em assets/ui.
"""
from pathlib import Path
import cv2
import numpy as np
ROOT = Path(__file__).resolve().parents[1] / 'assets/ui/kickoff'
for source, target, rects in [
    ('reference-teams.jpg', 'teams.jpg', [(326,140,416,196),(340,251,393,307),(12,388,180,414),(645,388,738,414)]),
    ('reference-kits.jpg', 'kits.jpg', [(72,74,191,386),(572,73,739,389),(235,129,551,255),(12,388,180,414),(575,388,738,414)])
]:
    image=cv2.imread(str(ROOT/source));mask=np.zeros(image.shape[:2],np.uint8)
    for x1,y1,x2,y2 in rects: mask[y1:y2,x1:x2]=255
    # Interpolação local remove somente textos/atletas fixos que serão DOM/modelos reais.
    result=cv2.inpaint(image, mask, 5, cv2.INPAINT_TELEA)
    if target=='kits.jpg':
        # A mão original cruza a coluna AWAY. Recuperar a moldura limpa da
        # referência de times evita espalhar letras brancas no fundo removido.
        teams=cv2.imread(str(ROOT/'reference-teams.jpg'))
        result[:380,685:]=teams[:380,685:]
    cv2.imwrite(str(ROOT/target), result, [cv2.IMWRITE_JPEG_QUALITY,94])
