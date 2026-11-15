#!/usr/bin/env python3
"""HM Carbide static multilingual build.
Kaynak: _src/ (DE ana sayfalar: data-i18n + lang-block, çeviriler script.js içinde)
Çıktı: repo kökü -> DE kökte, EN /en/, TR /tr/ altında
"""
import json, os, re, shutil, subprocess, sys, html
from bs4 import BeautifulSoup, NavigableString

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
SRC = os.path.join(REPO, '_src')
OUT = REPO  # derlenmiş site doğrudan repo köküne yazılır
BASE = 'https://www.hmcarbide.ch'
LANGS = ['de', 'en', 'tr']
LOCALE = {'de': 'de_CH', 'en': 'en_GB', 'tr': 'tr_TR'}
PAGES = ['index.html', 'products.html', 'wissen.html', 'hartmetall-ratgeber.html', 'mikrowerkzeuge-ultrafeinkorn.html',
         'gekuerzte-hartmetallstaebe-sonderlaengen.html', 'about.html',
         'certificates.html', 'contact.html', 'privacy.html', 'impressum.html']
ASSETS = ['style.css', 'layout.js', 'script.js', 'llms.txt', 'robots.txt', 'favicon-32.png',
          'favicon-48.png', 'apple-touch-icon.png', 'thumb.jpg', 'CNAME', 'favicon.ico']
ASSET_DIRS = ['images', 'downloads']

data = json.loads(subprocess.check_output(['node', os.path.join(HERE, 'extract.js'), f'{SRC}/script.js']))
T = data['translations']

# ---- per-language head meta (DE comes from the source file) ----
META = {
 'index.html': {
   'en': ('Carbide Rods for Toolmakers | HM Carbide Swiss GmbH',
          'Carbide rods in Swiss quality: solid carbide, coolant-channel and cut-to-length rods from an ISO 9001:2015 certified plant, delivered worldwide.'),
   'tr': ('Takım Üreticileri için Karbür Çubuk | HM Carbide Swiss GmbH',
          'İsviçre kalitesinde karbür çubuklar: ISO 9001:2015 sertifikalı tesisten tam karbür, soğutma kanallı ve kesilmiş çubuklar, dünya geneline teslimat.')},
 'products.html': {
   'en': ('Carbide Rods & Technical Data | HM Carbide Swiss GmbH',
          'Solid carbide rods ø 1–32 mm, coolant-channel rods ø 4–25 mm and cut-to-length rods, tolerance h6, grades HM 12Co and HM 10Co. Request a quote.'),
   'tr': ('Karbür Çubuklar ve Teknik Veriler | HM Carbide Swiss GmbH',
          'Tam karbür çubuk ø 1–32 mm, soğutma kanallı çubuk ø 4–25 mm ve kesilmiş çubuklar, h6 tolerans, HM 12Co ve HM 10Co kaliteleri. Teklif isteyin.')},
 'hartmetall-ratgeber.html': {
   'en': ('Carbide Grades: Grain Size, Cobalt, Tolerance h6 | HM Carbide',
          'Guide to carbide rods: how grain size and cobalt content set hardness and toughness, which grade suits which tool and what tolerance h6 means.'),
   'tr': ('Karbür Kaliteleri: Tane Boyutu, Kobalt, h6 Tolerans | HM Carbide',
          'Karbür çubuk rehberi: tane boyutu ve kobalt oranı sertliği ve tokluğu nasıl belirler, hangi takım için hangi kalite seçilir, h6 tolerans ne demektir.')},
 'about.html': {
   'en': ('About Us | HM Carbide Swiss GmbH',
          'HM Carbide Swiss GmbH in Bottighofen, Switzerland: supplier of carbide rods for toolmakers, produced in our production partner’s ISO 9001:2015 certified plant.'),
   'tr': ('Hakkımızda | HM Carbide Swiss GmbH',
          'HM Carbide Swiss GmbH, Bottighofen, İsviçre: takım üreticileri için karbür çubuk tedarikçisi; üretim, üretim ortağımızın ISO 9001:2015 sertifikalı tesisinde.')},
 'certificates.html': {
   'en': ('Certificates & Quality | HM Carbide Swiss GmbH',
          'Our rods are produced in our production partner’s ISO 9001:2015 certified plant. Certificate and technical data sheets available for download.'),
   'tr': ('Sertifikalar ve Kalite | HM Carbide Swiss GmbH',
          'Çubuklarımız, üretim ortağımızın ISO 9001:2015 sertifikalı tesisinde üretilir. Sertifika ve teknik veri sayfaları indirilebilir.')},
 'contact.html': {
   'en': ('Contact | HM Carbide Swiss GmbH',
          'Questions about carbide rods or need a quote? Contact HM Carbide Swiss GmbH in Bottighofen by phone, email or form. We reply in English, German and Turkish.'),
   'tr': ('İletişim | HM Carbide Swiss GmbH',
          'Karbür çubuklar hakkında soru ya da teklif mi? Bottighofen’deki HM Carbide Swiss GmbH’ye telefon, e-posta veya formla ulaşın. Türkçe yanıt veriyoruz.')},
 'privacy.html': {
   'en': ('Privacy Policy | HM Carbide Swiss GmbH',
          'Privacy policy of HM Carbide Swiss GmbH: which data we collect, how we use cookies and Google Analytics, and your rights.'),
   'tr': ('Gizlilik Politikası | HM Carbide Swiss GmbH',
          'HM Carbide Swiss GmbH gizlilik politikası: hangi verileri topladığımız, çerezleri ve Google Analytics’i nasıl kullandığımız ve haklarınız.')},
 'impressum.html': {
   'en': ('Legal Notice | HM Carbide Swiss GmbH',
          'Legal notice of HM Carbide Swiss GmbH, Müligässli 1, 8598 Bottighofen, Switzerland. Contact, UID number and legal information.'),
   'tr': ('Künye | HM Carbide Swiss GmbH',
          'HM Carbide Swiss GmbH künyesi, Müligässli 1, 8598 Bottighofen, İsviçre. İletişim, UID numarası ve yasal bilgiler.')},
}
ART_META = json.load(open(os.path.join(HERE, 'articles_meta.json'), encoding='utf-8'))
for _p, _m in ART_META.items():
    META[_p] = {l: (v[0], v[1]) for l, v in _m.items()}
LEGAL_TITLES = {
 'privacy.html': {'de': ('Datenschutz', 'Datenschutzerklärung & Cookie-Information'),
                  'en': ('Privacy policy', 'Data protection & cookie information'),
                  'tr': ('Gizlilik politikası', 'Veri koruma ve çerez bilgisi')},
 'impressum.html': {'de': ('Impressum', 'Angaben gemäss Schweizer Recht'),
                    'en': ('Legal notice', 'Information required under Swiss law'),
                    'tr': ('Künye', 'İsviçre hukukuna göre bilgiler')},
}
GUIDE_HEADLINE = {'en': 'Carbide grade guide: grain size, cobalt content and tolerance h6',
                  'tr': 'Karbür kalite rehberi: tane boyutu, kobalt oranı ve h6 toleransı'}
GUIDE_ABOUT = {'en': ['Cemented carbide', 'Tungsten carbide', 'Carbide rod', 'ISO 286 h6'],
               'tr': ['Sert metal', 'Tungsten karbür', 'Karbür çubuk', 'ISO 286 h6']}


def url(lang, page):
    p = '' if page == 'index.html' else page
    return f'{BASE}/{p}' if lang == 'de' else f'{BASE}/{lang}/{p}'


def frag(soup, markup):
    return BeautifulSoup(markup, 'html.parser')


def text_of(markup):
    return BeautifulSoup(markup, 'html.parser').get_text()


def upper(s, lang):
    if lang == 'tr':
        s = s.replace('i', 'İ')
    return s.upper()


def num(v, lang):
    return v if lang == 'en' else v.replace('.', ',')


def is_rel_asset(v):
    if not v or v.startswith(('#', 'http:', 'https:', 'mailto:', 'tel:', 'data:', '/', '../', 'javascript:')):
        return False
    path = v.split('?')[0].split('#')[0]
    return not path.endswith('.html')


def build(page, lang):
    raw = open(f'{SRC}/{page}', encoding='utf-8').read()
    soup = BeautifulSoup(raw, 'html.parser')
    L = T[lang]
    soup.html['lang'] = lang

    # i18n text
    for el in soup.select('[data-i18n]'):
        k = el['data-i18n']
        if L.get(k):
            el.clear()
            el.append(frag(soup, L[k]))
    for attr, target in (('data-i18n-alt', 'alt'), ('data-i18n-aria', 'aria-label')):
        for el in soup.select(f'[{attr}]'):
            if L.get(el[attr]):
                el[target] = L[el[attr]]
    for el in soup.select('[data-i18n-ph]'):
        if L.get(el['data-i18n-ph']):
            el['placeholder'] = text_of(L[el['data-i18n-ph']])
    for el in soup.select('[data-brand-seal]'):
        el.string = upper(data['BRAND']['claim'][lang], lang)
    for el in soup.select('[data-brand-name]'):
        el.string = upper(data['BRAND']['company'], lang)
    for el in soup.select('[data-num]'):
        el.string = num(el['data-num'], lang)

    # prerendered dynamic content
    ca = soup.find(id='contentArea')
    if ca is not None and L.get('about_content'):
        ca.clear(); ca.append(frag(soup, L['about_content']))
    norm = lambda x: x.lower().replace(' ', '')
    href = lambda p, d: f'contact.html?p={p}&amp;d={d.replace(" ", "%20")}'
    t1 = soup.find(id='t1')
    if t1 is not None:
        t1.clear(); t1.append(frag(soup, ''.join(
            f'<a href="{href("p1", x)}" data-dim="{norm(x)}">{int(float(x.split(" ")[0])) if float(x.split(" ")[0]).is_integer() else x.split(" ")[0]}</a>' for x in data['d1'])))
    t2 = soup.select_one('#t2 tbody')
    if t2 is not None:
        t2.clear(); t2.append(frag(soup, ''.join(
            f'<tr data-dim="{norm(it["dim"])}"><td><a href="{href("p2", it["dim"])}">ø {it["dim"].replace(" x ", " × ")}</a></td><td>{num(it["id"], lang)}</td><td>{num(it["dist"], lang)}</td></tr>' for it in data['d2_detailed'])))
    t3 = soup.find(id='t3')
    if t3 is not None:
        t3.clear(); t3.append(frag(soup, ''.join(
            f'<li data-dim="{norm(x)}"><a href="{href("p3", x)}">{x.replace(" x ", " × ")}</a></li>' for x in data['d3'])))

    # language blocks: keep only the matching one
    for b in soup.select('.lang-block[data-lang]'):
        if b['data-lang'] != lang:
            b.decompose()
        else:
            if b.has_attr('style'):
                del b['style']
            b['lang'] = lang
    # legal page titles + drop the old runtime switcher script
    if page in LEGAL_TITLES:
        t, sub = LEGAL_TITLES[page][lang]
        soup.find(id='pageTitle').string = t
        soup.find(id='pageSubtitle').string = sub
    for s in soup.find_all('script'):
        if s.string and 'pageTitles' in s.string:
            s.decompose()

    # head meta
    head = soup.head
    if lang != 'de':
        title, desc = META[page][lang]
        head.title.string = title
        for sel, val in (('meta[name="description"]', desc), ('meta[property="og:description"]', desc),
                         ('meta[itemprop="description"]', desc), ('meta[property="og:title"]', title)):
            for m in head.select(sel):
                m['content'] = val
    u = url(lang, page)
    head.select_one('link[rel="canonical"]')['href'] = u
    for m in head.select('meta[property="og:url"]'):
        m['content'] = u
    loc = head.select_one('meta[property="og:locale"]')
    if loc is None:
        loc = soup.new_tag('meta', attrs={'property': 'og:locale'})
        head.select_one('link[rel="canonical"]').insert_after(loc)
    loc['content'] = LOCALE[lang]
    for m in head.select('meta[property="og:locale:alternate"]'):
        m.decompose()
    anchor = loc
    for alt in LANGS:
        if alt != lang:
            t = soup.new_tag('meta', attrs={'property': 'og:locale:alternate', 'content': LOCALE[alt]})
            anchor.insert_after(t); anchor = t
    for l in head.select('link[rel="alternate"][hreflang]'):
        l.decompose()
    anchor = head.select_one('link[rel="canonical"]')
    for alt in LANGS + ['x-default']:
        t = soup.new_tag('link', attrs={'rel': 'alternate', 'hreflang': alt, 'href': url('de' if alt == 'x-default' else alt, page)})
        anchor.insert_after(t); anchor = t

    # JSON-LD per language
    for s in soup.find_all('script', attrs={'type': 'application/ld+json'}):
        j = json.loads(s.string)
        nodes = j.get('@graph', [j])
        keep = []
        for n in nodes:
            ty = n.get('@type')
            if ty == 'FAQPage':
                qs = []
                i = 1
                while L.get(f'faq_q{i}'):
                    qs.append({'@type': 'Question', 'name': text_of(L[f'faq_q{i}']),
                               'acceptedAnswer': {'@type': 'Answer', 'text': text_of(L[f'faq_a{i}'])}})
                    i += 1
                n['mainEntity'] = qs
                n['inLanguage'] = lang
            if ty in ('WebPage', 'AboutPage', 'CollectionPage', 'ContactPage', 'FAQPage', 'TechArticle'):
                for k in ('url',):
                    if k in n: n[k] = u
                if '@id' in n and '#' in n['@id']:
                    n['@id'] = u + '#' + n['@id'].split('#', 1)[1]
                n['inLanguage'] = lang
            if ty == 'TechArticle' and lang != 'de':
                if page in ART_META:
                    n['headline'] = ART_META[page][lang][2]; n['about'] = ART_META[page][lang][3]
                else:
                    n['headline'] = GUIDE_HEADLINE[lang]; n['about'] = GUIDE_ABOUT[lang]
                n['description'] = META[page][lang][1]
            if ty == 'CollectionPage' and page == 'wissen.html' and lang != 'de':
                n['name'] = ART_META[page][lang][2]; n['description'] = META[page][lang][1]
            for ref in ([n['isPartOf']] if isinstance(n.get('isPartOf'), dict) else []) + (n.get('hasPart') or []):
                for k in ('@id', 'url'):
                    if k in ref:
                        tail = ref[k][len(BASE) + 1:]
                        pg, _, frag_ = tail.partition('#')
                        ref[k] = url(lang, pg) + ('#' + frag_ if frag_ else '')
            keep.append(n)
        if '@graph' in j:
            j['@graph'] = keep
        else:
            j = keep[0]
        s.string = '\n' + json.dumps(j, ensure_ascii=False, indent=2) + '\n    '

    # asset paths in subfolders
    if lang != 'de':
        for el in soup.find_all(True):
            for attr in ('src', 'href'):
                if el.has_attr(attr) and is_rel_asset(el[attr]):
                    el[attr] = '../' + el[attr]
            for sa in ('srcset', 'imagesrcset'):
                if el.has_attr(sa):
                    el[sa] = ', '.join(('../' + p.strip()) if is_rel_asset(p.strip()) else p.strip() for p in el[sa].split(','))
            if False:
                el['srcset'] = ', '.join(('../' + p.strip()) if is_rel_asset(p.strip()) else p.strip() for p in el['srcset'].split(','))

    out = str(soup)
    out = out.replace('&amp;amp;', '&amp;')
    if not out.lstrip().lower().startswith('<!doctype'):
        out = '<!DOCTYPE html>\n' + out
    d = OUT if lang == 'de' else f'{OUT}/{lang}'
    os.makedirs(d, exist_ok=True)
    open(f'{d}/{page}', 'w', encoding='utf-8').write(out)


def sitemap():
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    prio = {'index.html': '1.0', 'products.html': '0.9', 'hartmetall-ratgeber.html': '0.8', 'wissen.html': '0.7',
            'mikrowerkzeuge-ultrafeinkorn.html': '0.7', 'gekuerzte-hartmetallstaebe-sonderlaengen.html': '0.7', 'about.html': '0.7',
            'certificates.html': '0.7', 'contact.html': '0.8', 'privacy.html': '0.2', 'impressum.html': '0.2'}
    lastmod = '2026-11-15'
    for page in PAGES:
        for lang in LANGS:
            lines.append('  <url>')
            lines.append(f'    <loc>{url(lang, page)}</loc>')
            lines.append(f'    <lastmod>{lastmod}</lastmod>')
            lines.append(f'    <priority>{prio[page]}</priority>')
            for alt in LANGS:
                lines.append(f'    <xhtml:link rel="alternate" hreflang="{alt}" href="{url(alt, page)}"/>')
            lines.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{url("de", page)}"/>')
            lines.append('  </url>')
    for f in sorted(os.listdir(f'{OUT}/downloads')):
        if f.endswith('.pdf'):
            lines += ['  <url>', f'    <loc>{BASE}/downloads/{f}</loc>', f'    <lastmod>{lastmod}</lastmod>', '    <priority>0.5</priority>', '  </url>']
    lines.append('</urlset>')
    open(f'{OUT}/sitemap.xml', 'w', encoding='utf-8').write('\n'.join(lines) + '\n')


if __name__ == '__main__':
    # Metin dosyaları _src'den köke kopyalanır; görseller, PDF'ler, favicon, CNAME zaten kökte durur.
    for a in ['style.css', 'layout.js', 'script.js', 'llms.txt', 'robots.txt']:
        shutil.copy2(f'{SRC}/{a}', f'{OUT}/{a}')
    for lang in ('en', 'tr'):
        if os.path.exists(f'{OUT}/{lang}'):
            shutil.rmtree(f'{OUT}/{lang}')
    for page in PAGES:
        for lang in LANGS:
            build(page, lang)
    sitemap()
    print('built', OUT)
