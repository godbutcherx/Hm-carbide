# HM Carbide Swiss GmbH — web sitesi (www.hmcarbide.ch)

Bu dosya Claude Code için proje hafızasıdır. Kullanıcı (Oliver, şirket ortağı) Türkçe yazar; yanıtlar Türkçe olmalı.
Yanıt tarzı: selamlama/önsöz yok, doğrudan cevap, iş bitince dur.

## Şirket ve içerik kuralları
- HM Carbide Swiss GmbH, Müligässli 1, 8598 Bottighofen, İsviçre. UID CHE-477.630.623 MWST. Tel +41 76 290 91 93, info@hmcarbide.ch. 2025'te kuruldu.
- Temsile yetkili: Yakup Mersin (Geschäftsführer). Thurgau ticaret sicili.
- HM Carbide **tedarikçidir, üretici değildir.** Çubuklar üretim ortağının ISO 9001:2015 sertifikalı tesisinde üretilir. Sertifika üretim ortağının adınadır. Ortağın adı/ülkesi sitede geçmez.
  - DE: "im nach ISO 9001:2015 zertifizierten Werk unseres Produktionspartners"
  - EN: "in our production partner's ISO 9001:2015 certified plant"
  - TR: "üretim ortağımızın ISO 9001:2015 sertifikalı tesisinde"
- Slogan: "Schweizer Qualität / Swiss quality / İsviçre kalitesi" — tek yerden değişir: `_src/script.js` başındaki `BRAND`.
- "Aile şirketi" ifadesi ana sayfada yok (yalnızca Hakkımızda'da).
- Türkçede büyük harf İ ile (CARBİDE, SWİSS). Sertifika mührü her dilde sayfa diline göre büyük harf.
- Teknik veriler (uydurma yok, yeni değer gerekirse kullanıcıya sor):
  - HM 12Co: 88 % WC, 12 % Co, 0,4 µm, 14,25 ± 0,1 g/cm³, 92,5 ± 0,5 HRA, TRS >3432 N/mm²
  - HM 10Co: 90 % WC, 10 % Co, 0,8 µm, 14,4 ± 0,1 g/cm³, 91,8 ± 0,5 HRA, TRS >3432 N/mm²
  - Tane sınıfları: HM12F 0,4 µm (ultra ince), HM10S 0,6 µm (ince, en çok satan), H10F 0,8 µm (orta)
  - Tolerans h6. Vollhartmetall ø 1–30 mm (1 mm adım) + ø 32, 330 mm. Kühlkanal ø 4–25 mm, kanal ø 0,5–2,0 mm.
  - Kesilmiş: 3×40, 4×50, 5×50, 6×50, 6×57, 8×63, 10×70, 10×72, 12×75, 12×83, 16×92, 16×93, 20×104; özel boy talebe göre üretilir.
- Logolar dışarıda tasarlanıyor; şimdiki yazı logosu (layout.js `LOGO_VARIANT='a'`) geçici.
- Almanya'ya taşınma/yeniden markalaşma ayrı bir konu; kullanıcı istemedikçe siteye karıştırma.

## Çalışma kuralları
- Her değişiklik **üç dilde birden** (DE/EN/TR).
- SEO/GEO kurulumunu bozma: JSON-LD, hreflang, sitemap, llms.txt, FAQ.
- Değiştirdikten sonra derle ve tarayıcıda (Playwright) masaüstü + mobil kontrol et: konsol hatası, 404, yatay taşma.
- CSS/JS değişince HTML'deki `?v=YYYYMMDD` sürümünü artır (şu an 20261118).

## Mimari
Statik site, GitHub Pages (repo `godbutcherx/Hm-carbide`, CNAME www.hmcarbide.ch). Derleyici yok; Python ile önceden üretilmiş çok dilli sayfalar.

- `_src/` → **düzenlenecek kaynak.** Almanca ana sayfalar:
  - Ortak metinler `data-i18n="anahtar"` ile; çeviriler `_src/script.js` içindeki `translations` (de/en/tr) nesnesinde.
  - Uzun sayfaya özel metinler (gizlilik, künye, rehber, yazılar) `<div class="lang-block" data-lang="de|en|tr">` blokları içinde.
  - `layout.js` header/footer/dil menüsü/çerez bannerını enjekte eder. `style.css` tüm tasarım.
- `_build/build.py` → `_src`'den repo köküne derler:
  - DE kökte (`/products.html`), EN `/en/`, TR `/tr/` altında.
  - data-i18n metinlerini, ürün ölçü listelerini, about_content'i HTML'e önceden yazar; eşleşmeyen lang-block'ları siler.
  - Her dil için title/description/canonical/og/hreflang (de, en, tr, x-default=de) ve JSON-LD (FAQ dil bazında) üretir.
  - EN/TR meta metinleri `build.py` içindeki `META` sözlüğünde; yazıların metası `_build/articles_meta.json`.
  - `sitemap.xml`'i yeniden yazar (tüm sayfalar × 3 dil + downloads/*.pdf).
- `_build/articles.py` → Bilgi merkezi (`wissen.html`) ve yazı sayfalarını `_src`'ye üretir. Yeni yazı = `ART` sözlüğüne ekle, `order` listesine ekle, `build.py` `PAGES` ve `prio`'ya ekle.
- `_build/pdfs.py` → `_build/datasheets/p1-3.html`'den veri sayfası PDF'lerini (`downloads/`) Playwright ile üretir, PDF metadata ekler.
- `_build/extract.js` → script.js'teki çevirileri Node ile okur (build.py kullanır).
- Kökteki `*.html`, `en/`, `tr/`, `sitemap.xml`, `style.css`, `layout.js`, `script.js`, `llms.txt`, `robots.txt` **üretilmiş dosyalardır; elle düzenleme, `_src`'yi düzenleyip derle.**
- Görseller (`images/`), PDF'ler (`downloads/`), favicon, `thumb.jpg`, `CNAME` yalnızca kökte durur.
- Jekyll `_` ile başlayan klasörleri yayınlamaz; `_config.yml` CLAUDE.md'yi de hariç tutar.

### Derleme
```bash
pip install beautifulsoup4 pypdf playwright   # node da gerekli
python3 _build/articles.py    # yalnızca yazılar değiştiyse
python3 _build/build.py
python3 _build/pdfs.py        # yalnızca veri sayfaları değiştiyse
python3 -m http.server 8765   # kontrol: http://localhost:8765/ , /en/ , /tr/
```

### JS davranışı
- Dil `<html lang>`'dan okunur (`currentLang()` / `pageLang()`). Dil menüsü `<a href>` ile karşılık gelen URL'ye gider (`langUrl()`), tercih `localStorage.hm_lang`.
- Yalnızca kök ana sayfada (`/`), dışarıdan gelen ve bot olmayan ziyaretçi için: kayıtlı tercih veya tarayıcı dili TR/EN ise `/tr/` veya `/en/`'ye yönlendirir.
- İletişim formu: EmailJS (`emailjs.init("YZquRq4Ohz6CEdGZJ")`, service "gorrxcaveman@gmail.com", template "template_u11karb"), honeypot + 60 sn sınırı. `contact.html?p=p1&d=…` mesajı önceden doldurur.
- Google Analytics G-K6D874YGSX, her sayfanın head'inde, Consent Mode v2 (varsayılan reddedilmiş; `setConsent`).
- `a[data-optional-file]`: dosya sunucuda yoksa link iletişim formuna döner (ISO PDF için).

## Açık işler
- ISO sertifikası PDF'i yüklenmedi. Yüklenirse adı `downloads/iso-9001-2015-zertifikat.pdf`; sonra derle (sitemap'e otomatik girer).
- GitHub Pages kesinti riski: Cloudflare Pages'e taşıma önerildi, kullanıcı "sonra" dedi.
- Blog konusu adayları: "Kühlkanal oder Vollstab", "Paslanmaz çelik ve titanyum için rolye seçimi", "Teslim alırken kontrol listesi".
