import asyncio
from playwright.async_api import async_playwright
from pypdf import PdfReader, PdfWriter
import os
HERE=os.path.dirname(os.path.abspath(__file__))
OUT=os.path.join(os.path.dirname(HERE),'downloads')
DS=os.path.join(HERE,'datasheets')
DOCS={
 'p1':('hartmetallstab-vollhartmetall-datenblatt.pdf','Datenblatt Vollhartmetallstab ø 1–32 mm, h6 | Solid carbide rod data sheet','Vollhartmetallstab, Hartmetallstab, Solid carbide rod, Wolframkarbid, HM 12Co, HM 10Co, h6, 330 mm'),
 'p2':('hartmetallstab-kuehlkanal-datenblatt.pdf','Datenblatt Hartmetallstab mit Kühlkanal ø 4–25 mm | Carbide rod with coolant channels data sheet','Hartmetallstab Kühlkanal, coolant channel carbide rod, Wolframkarbid, h6, 330 mm'),
 'p3':('hartmetallstab-gekuerzt-datenblatt.pdf','Datenblatt gekürzter Hartmetallstab 3×40 – 20×104 mm | Cut-to-length carbide rod data sheet','gekürzter Hartmetallstab, cut-to-length carbide rod, Hartmetall Rohling, h6, Sonderlängen'),
}
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page()
        for k,(name,title,kw) in DOCS.items():
            await pg.goto('file://'+os.path.join(DS,f'{k}.html')); await pg.wait_for_timeout(300)
            tmp=os.path.join(DS,f'{k}.tmp.pdf')
            await pg.pdf(path=tmp,format='A4',print_background=True,prefer_css_page_size=True)
            r=PdfReader(tmp); w=PdfWriter()
            for page in r.pages: w.add_page(page)
            w.add_metadata({'/Title':title,'/Author':'HM Carbide Swiss GmbH','/Subject':title,'/Keywords':kw,'/Creator':'HM Carbide Swiss GmbH, www.hmcarbide.ch'})
            w._root_object.update({__import__('pypdf').generic.NameObject('/Lang'):__import__('pypdf').generic.TextStringObject('de-CH')})
            with open(f'{OUT}/{name}','wb') as f: w.write(f)
            os.remove(tmp)
        await b.close()
asyncio.run(main())
