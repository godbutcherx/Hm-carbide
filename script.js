// --- DİL ÇEVİRİLERİ (HTML Entity - %100 Güvenli) ---
const translations = {
    de: { 
        nav_home: "Startseite", nav_about: "&Uuml;ber uns", nav_products: "Produkte", nav_certs: "Zertifikate", nav_contact: "Kontakt",
        nav_quick: "Schnellzugriff", footer_desc: "Ihr zuverlässiger Partner für verschleiß- und druckfeste Hartmetallprodukte.",
        hero_l1: "Schweizer Qualität.", hero_l2: "Maximale Beständigkeit.", hero_lede: "Hartmetallstäbe für die Werkzeugherstellung, geliefert aus der Schweiz in die ganze Welt.", home_cta: "Anfrage senden", home_all: "Alle Produkte ansehen", home_about: "Mehr über uns", fact1: "ISO 9001:2015 zertifiziert", fact2: "Durchmesser 1 bis 32 mm", fact3: "Lieferung weltweit", hero_title: "SCHWEIZER QUALITÄT | MAXIMALE BESTÄNDIGKEIT", hero_sub: "PRÄZISION AUS DER SCHWEIZ FÜR DIE WELT", hero_btn_contact: "KONTAKT AUFNEHMEN",
        nat_title: "Tungsten, Karbon, Kobalt... Unser Wesen ist Natur.", nat_sub: "Wir bieten die stärksten Erze der Natur mit Schweizer Präzision.", nat_desc: "Die einzigartige Haltbarkeit von Hartmetallstäben entsteht aus der Kraft der Elemente aus den Tiefen der Erde. Wir als HM Carbide wählen sorgfältig Produkte aus, die die Härte von Wolfram und die Bindekraft von Kobalt am besten widerspiegeln, und bringen sie zu Ihnen. Wir respektieren das Gleichgewicht der Natur in unseren Lieferprozessen; wir sind stolz darauf, diese Kraft, die die Industrie benötigt, mit Umweltbewusstsein und Schweizer Qualitätsstandards anzubieten.",
        about_title: "&Uuml;ber uns", about_text: "HM Carbide Swiss GmbH ist Ihr zuverlässiger Partner.", about_btn: "MEHR ERFAHREN",
        p1_desc: "Rohling für Vollhartmetall-Werkzeuge wie Bohrer, Fräser und Reibahlen.", p2_desc: "Mit innenliegenden Kühlkanälen für Hochleistungs-Bohr- und Fräswerkzeuge.", p3_desc: "Auf Länge geschnittene Rohlinge – bereit zum Schleifen.", lbl_dia: "Durchmesser", lbl_len: "Länge", lbl_grade: "Sorte", lbl_channel: "Kühlkanal", lbl_sizes: "Abmessungen", lbl_variants: "Varianten", lbl_avail: "Lieferbare Abmessungen", th_dim: "Abmessung (mm)", th_channel: "Kanal-ø (mm)", th_dist: "Abstand (mm)", note_p1: "Stirnseiten maßstabsgetreu. Klicken Sie auf einen Durchmesser, um ihn anzufragen.", note_p2: "Querschnitte maßstabsgetreu, mit Kanal-ø und Abstand in mm. Klicken Sie auf eine Größe, um sie anzufragen.", note_p3: "Seitenansicht maßstabsgetreu, ø × Länge in mm. Klicken Sie auf eine Größe, um sie anzufragen.", lbl_ch: "Kanal", lbl_dist: "Abstand", req_tpl: "Anfrage: {p}, {d} mm\nMenge: ", no_results: "Keine passende Abmessung gefunden.", lbl_avail_dia: "Lieferbare Durchmesser in mm", lbl_avail_cut: "Lieferbare Abmessungen, ø × Länge in mm", th_gradecol: "Sorte", cert_sub: "Qualität, die sich nachweisen lässt.", iso_desc: "Qualitätsmanagementsystem", contact_sub: "Schreiben Sie uns. Wir antworten auf Deutsch, Englisch und Türkisch.", country_ch: "Schweiz", lbl_message: "Nachricht", btn_quote: "Angebot anfordern", map_apple: "In Apple Karten öffnen", map_google: "In Google Maps öffnen", p1: "Hartmetallstab Voll", p2: "Stab mit Kühlkanal", p3: "Gekürzter Stab", 
        prod_subtitle: "Hochleistungs-Hartmetallstäbe",
        tech_title: "Technische Daten", th_grain: "Korngröße", th_density: "Dichte", th_hard: "Härte", th_trs: "Biegefestigkeit", search_ph: "Dimension suchen (z.B. 12x330)...",
        swiss_title: "Schweizer Qualität", swiss_desc: "Original Qualität",
        contact_info_title: "Kontaktinformationen", form_title: "Nachricht senden", form_btn: "Nachricht senden", ph_name: "Name", ph_email: "E-Mail", ph_message: "Ihre Nachricht...",
        about_content: `<h3>Die Kraft der Erfahrung, die Sicherheit von HM Carbide</h3><p>Dank unserer jahrelangen Erfahrung in der Zerspanungs- und Hartmetallindustrie kennen wir die Bedürfnisse der Fertigungswelt sehr genau. HM Carbide Swiss GmbH wurde gegründet, um dieses Wissen mit Schweizer Produktionsqualität zu verbinden und unseren Kunden die genauesten Rohstofflösungen anzubieten.</p><p>Mit unseren in der Schweiz ansässigen Operationen liefern wir nach europäischen Standards hergestellte Hartmetallstäbe zu wettbewerbsfähigen Bedingungen und mit zuverlässigem Lieferkettenmanagement an unsere Geschäftspartner. Unser Ziel ist es, die Stillstandzeiten in den Produktionslinien unserer Kunden zu minimieren und die Werkzeugstandzeiten zu maximieren.</p><p>Mit unserer Erfahrung aus der Vergangenheit und unserer Vision für die Zukunft sind wir als HM Carbide Swiss GmbH hier, um Ihrem Geschäft einen Mehrwert zu bieten.</p>`,
        alert_success: "Ihre Nachricht wurde erfolgreich gesendet!", alert_error: "Fehler beim Senden der Nachricht.",
        cookie_title: "🍪 Cookie-Einstellungen", cookie_desc: "Wir verwenden Cookies gemäß DSGVO, um Ihre Erfahrung zu verbessern.", cookie_more: "Mehr erfahren", cookie_reject: "Ablehnen", cookie_accept: "Alle akzeptieren",
        faq_title: "Häufig gestellte Fragen",
        faq_q1: "Was ist ein Hartmetallstab und wofür wird er verwendet?", faq_a1: "Hartmetallstäbe sind Rohlinge aus Wolframkarbid (WC) mit Kobaltbindung. Sie sind das Ausgangsmaterial für Vollhartmetall-Zerspanungswerkzeuge wie Bohrer, Fräser und Reibahlen, die in der CNC-Bearbeitung eingesetzt werden.",
        faq_q2: "Welche Hartmetall-Güten bietet HM Carbide an?", faq_a2: "Wir bieten HM 12Co (88% WC, 12% Co, 92,5 HRA) für zähere Anwendungen und HM 10Co (90% WC, 10% Co, 91,8 HRA) für verschleißfeste Hochleistungsanwendungen an.",
        faq_q3: "Was ist der Unterschied zwischen Vollhartmetall und Kühlkanal-Stäben?", faq_a3: "Vollhartmetallstäbe sind massive Rohlinge. Kühlkanal-Stäbe haben einen innenliegenden Kanal (Ø 0,5–2,0 mm) für Kühlmittelzufuhr direkt zur Schneidkante – ideal für Tiefbohrungen mit längerer Standzeit.",
        faq_q4: "Liefert HM Carbide international?", faq_a4: "Ja. HM Carbide Swiss GmbH liefert weltweit von der Schweiz aus mit zuverlässigem Lieferkettenmanagement nach europäischen Standards.",
        faq_q5: "Ist HM Carbide ISO-zertifiziert?", faq_a5: "Ja, wir sind ISO 9001:2015 zertifiziert. Dies garantiert ein dokumentiertes Qualitätsmanagementsystem und gleichbleibend hohe Produktqualität.",
        faq_q6: "Wie kann ich ein Angebot anfordern?", faq_a6: "Per E-Mail unter <a href='mailto:info@hmcarbide.ch'>info@hmcarbide.ch</a>, telefonisch unter <a href='tel:+41762909193'>+41 76 290 91 93</a> oder über unser <a href='contact.html'>Kontaktformular</a>. Wir antworten auf Deutsch, Englisch und Türkisch."
    },
    en: { 
        nav_home: "Home", nav_about: "About us", nav_products: "Products", nav_certs: "Certificates", nav_contact: "Contact",
        nav_quick: "Quick Links", footer_desc: "Your reliable partner for carbide products.",
        hero_l1: "Swiss quality.", hero_l2: "Maximum durability.", hero_lede: "Carbide rods for tool manufacturing, shipped from Switzerland to the whole world.", home_cta: "Send an inquiry", home_all: "View all products", home_about: "More about us", fact1: "ISO 9001:2015 certified", fact2: "Diameters from 1 to 32 mm", fact3: "Worldwide delivery", hero_title: "SWISS QUALITY | MAXIMUM DURABILITY", hero_sub: "SWISS PRECISION FOR THE WORLD", hero_btn_contact: "CONTACT US",
        nat_title: "Tungsten, Carbon, Cobalt... Our Essence is Nature.", nat_sub: "Nature's strongest ores with Swiss precision.", nat_desc: "The unique durability of carbide rods stems from the power of elements from deep within the earth. As HM Carbide, we carefully select products that best reflect the hardness of tungsten and the binding power of cobalt, bringing them to you. We respect nature's balance in our supply processes; we are proud to offer this strength required by the industry with environmental awareness and Swiss quality standards.",
        about_title: "About us", about_text: "Your reliable partner for high-quality carbide products.", about_btn: "LEARN MORE",
        p1_desc: "Blank for solid carbide tools such as drills, end mills and reamers.", p2_desc: "With internal coolant channels for high-performance drilling and milling tools.", p3_desc: "Cut-to-length blanks, ready for grinding.", lbl_dia: "Diameter", lbl_len: "Length", lbl_grade: "Grade", lbl_channel: "Coolant channel", lbl_sizes: "Dimensions", lbl_variants: "Variants", lbl_avail: "Available dimensions", th_dim: "Dimension (mm)", th_channel: "Channel ø (mm)", th_dist: "Distance (mm)", note_p1: "End faces to scale. Click a diameter to request it.", note_p2: "Cross-sections to scale, with channel ø and distance in mm. Click a size to request it.", note_p3: "Side view to scale, ø × length in mm. Click a size to request it.", lbl_ch: "Channel", lbl_dist: "Distance", req_tpl: "Inquiry: {p}, {d} mm\nQuantity: ", no_results: "No matching dimension found.", lbl_avail_dia: "Available diameters in mm", lbl_avail_cut: "Available dimensions, ø × length in mm", th_gradecol: "Grade", cert_sub: "Quality you can verify.", iso_desc: "Quality management system", contact_sub: "Write to us. We reply in German, English and Turkish.", country_ch: "Switzerland", lbl_message: "Message", btn_quote: "Request a quote", map_apple: "Open in Apple Maps", map_google: "Open in Google Maps", p1: "Solid Carbide Rod", p2: "Rod with Coolant", p3: "Cut-to-Length Rod", 
        prod_subtitle: "High Performance Carbide Rods",
        tech_title: "Technical Specs", th_grain: "Grain Size", th_density: "Density", th_hard: "Hardness", th_trs: "TRS", search_ph: "Search dimension (e.g. 12x330)...",
        swiss_title: "Swiss quality", swiss_desc: "Original quality",
        contact_info_title: "Contact details", form_title: "Send a message", form_btn: "Send message", ph_name: "Name", ph_email: "Email", ph_message: "Your Message...",
        about_content: `<h3>The Power of Experience, The Assurance of HM Carbide</h3><p>With years of experience in the machining and carbide industry, we know the needs of the manufacturing world very well. HM Carbide Swiss GmbH was founded to combine this knowledge with Swiss production quality to offer our customers the most accurate raw material solutions.</p><p>With our Swiss-based operations, we deliver carbide rods produced to European standards to our business partners with competitive conditions and reliable supply chain management. Our goal is to minimize downtime in our customers' production lines and maximize tool life.</p><p>As HM Carbide Swiss GmbH, we are here to add value to your business.</p>`,
        alert_success: "Your message has been sent successfully!", alert_error: "Error sending message.",
        cookie_title: "🍪 Cookie Settings", cookie_desc: "We use cookies in accordance with GDPR to improve your experience.", cookie_more: "Learn more", cookie_reject: "Reject", cookie_accept: "Accept all",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What is a carbide rod and what is it used for?", faq_a1: "Carbide rods are blanks made of tungsten carbide (WC) with a cobalt binder. They are the raw material for solid carbide cutting tools such as drills, end mills, and reamers used in CNC machining.",
        faq_q2: "What carbide grades does HM Carbide offer?", faq_a2: "We offer HM 12Co (88% WC, 12% Co, 92.5 HRA) for tougher interrupted-cut applications and HM 10Co (90% WC, 10% Co, 91.8 HRA) for wear-resistant high-performance applications.",
        faq_q3: "What is the difference between solid and coolant channel rods?", faq_a3: "Solid rods are standard blanks. Coolant channel rods have an internal bore (Ø 0.5–2.0 mm) that delivers coolant directly to the cutting edge — ideal for deep-hole drilling with longer tool life.",
        faq_q4: "Does HM Carbide ship internationally?", faq_a4: "Yes. HM Carbide Swiss GmbH ships worldwide from Switzerland with reliable supply chain management to European standards.",
        faq_q5: "Is HM Carbide ISO certified?", faq_a5: "Yes, we are ISO 9001:2015 certified. This ensures a documented quality management system and consistently high product quality.",
        faq_q6: "How can I request a quote?", faq_a6: "By email at <a href='mailto:info@hmcarbide.ch'>info@hmcarbide.ch</a>, by phone at <a href='tel:+41762909193'>+41 76 290 91 93</a>, or via our <a href='contact.html'>contact form</a>. We respond in German, English and Turkish."
    },
    tr: { 
        nav_home: "Anasayfa", nav_about: "Hakkımızda", nav_products: "Ürünlerimiz", nav_certs: "Sertifikalar", nav_contact: "İletişim",
        nav_quick: "Hızlı Linkler", footer_desc: "Aşınmaya ve basınca dayanıklı karbür ürünler için güvenilir ortağınız.",
        hero_l1: "İsviçre kalitesi.", hero_l2: "Maksimum dayanıklılık.", hero_lede: "Takım üretimi için karbür çubuklar; İsviçre’den tüm dünyaya.", home_cta: "Teklif isteyin", home_all: "Tüm ürünleri görün", home_about: "Hakkımızda daha fazlası", fact1: "ISO 9001:2015 sertifikalı", fact2: "1 ile 32 mm arası çaplar", fact3: "Dünya geneline teslimat", hero_title: "İSVİÇRE KALİTESİ | MAKSİMUM DAYANIKLILIK", hero_sub: "DÜNYA İÇİN İSVİÇRE HASSASİYETİ", hero_btn_contact: "İLETİŞİME GEÇİN",
        nat_title: "Tungsten, Karbon, Kobalt... Özümüz Doğa.", nat_sub: "Doğanın en güçlü cevherlerini sunuyoruz.", nat_desc: "Karbür çubukların eşsiz dayanıklılığı, yerin derinliklerinden gelen elementlerin gücünden doğar. HM Carbide olarak, tungstenin sertliğini ve kobaltın bağlayıcı gücünü en iyi yansıtan ürünleri özenle seçiyor ve size ulaştırıyoruz. Tedarik süreçlerimizde doğanın dengesine saygı duyuyor; endüstrinin ihtiyaç duyduğu bu gücü, çevre bilinci ve İsviçre kalite standartlarıyla sunmaktan gurur duyuyoruz.",
        about_title: "Hakkımızda", about_text: "Yüksek kaliteli karbür ürünleri için güvenilir ortağınız.", about_btn: "DAHA FAZLA",
        p1_desc: "Matkap, freze ve rayba gibi tam karbür takımlar için hammadde.", p2_desc: "Yüksek performanslı delme ve frezeleme takımları için iç soğutma kanallı.", p3_desc: "Boyuna kesilmiş, taşlamaya hazır rolyeler.", lbl_dia: "Çap", lbl_len: "Boy", lbl_grade: "Kalite", lbl_channel: "Soğutma kanalı", lbl_sizes: "Ölçüler", lbl_variants: "Çeşit", lbl_avail: "Mevcut ölçüler", th_dim: "Ölçü (mm)", th_channel: "Kanal ø (mm)", th_dist: "Mesafe (mm)", note_p1: "Uç yüzeyler gerçek oranlarında. Teklif istemek için bir çapa tıklayın.", note_p2: "Kesitler gerçek oranlarında; kanal çapı ve mesafe mm cinsinden. Teklif istemek için bir ölçüye tıklayın.", note_p3: "Yandan görünüş gerçek oranlarında, ø × boy (mm). Teklif istemek için bir ölçüye tıklayın.", lbl_ch: "Kanal", lbl_dist: "Mesafe", req_tpl: "Talep: {p}, {d} mm\nAdet: ", no_results: "Eşleşen ölçü bulunamadı.", lbl_avail_dia: "Mevcut çaplar (mm)", lbl_avail_cut: "Mevcut ölçüler, ø × boy (mm)", th_gradecol: "Kalite", cert_sub: "Belgelenebilir kalite.", iso_desc: "Kalite yönetim sistemi", contact_sub: "Bize yazın. Türkçe, Almanca ve İngilizce yanıt veriyoruz.", country_ch: "İsviçre", lbl_message: "Mesajınız", btn_quote: "Teklif isteyin", map_apple: "Apple Haritalar’da aç", map_google: "Google Haritalar’da aç", p1: "Karbür Çubuklar", p2: "Soğutma Kanallı Çubuk", p3: "Kesilmiş Çubuk",
        prod_subtitle: "Yüksek Performanslı Karbür Çubuklar",
        tech_title: "Teknik Özellikler", th_grain: "Tane Boyutu", th_density: "Yoğunluk", th_hard: "Sertlik", th_trs: "Kırılma Dayanımı", search_ph: "Ölçü ara (örn. 12x330)...",
        swiss_title: "İsviçre kalitesi", swiss_desc: "Orijinal kalite",
        contact_info_title: "İletişim bilgileri", form_title: "Mesaj gönderin", form_btn: "Mesajı gönder", ph_name: "Adınız", ph_email: "E-Posta", ph_message: "Mesajınız...",
        about_content: `<h3>Tecrübenin Gücü, HM Carbide Güvencesi</h3><p>Talaşlı imalat ve karbür endüstrisindeki yıllara dayanan tecrübemizle, üretim dünyasının ihtiyaçlarını çok iyi biliyoruz. HM Carbide Swiss GmbH, bu bilgi birikimini İsviçre’nin üretim kalitesiyle harmanlayarak müşterilerine en doğru hammadde çözümlerini sunmak amacıyla kurulmuştur.</p><p>İsviçre merkezli operasyonlarımızla, Avrupa standartlarında üretilen karbür çubukları, rekabetçi koşullar ve güvenilir tedarik zinciri yönetimiyle iş ortaklarımıza ulaştırıyoruz. Amacımız; müşterilerimizin üretim hattındaki duruş sürelerini en aza indirmek ve takım ömürlerini maksimize etmektir.</p><p>Geçmişten gelen deneyimimiz ve geleceğe dönük vizyonumuzla, HM Carbide Swiss GmbH olarak işinize değer katmak için buradayız.</p>`,
        alert_success: "Mesajınız başarıyla gönderildi!", alert_error: "Bir hata oluştu, lütfen tekrar deneyin.",
        cookie_title: "🍪 Çerez Ayarları", cookie_desc: "GDPR kapsamında deneyiminizi geliştirmek için çerezler kullanıyoruz.", cookie_more: "Daha fazla", cookie_reject: "Reddet", cookie_accept: "Tümünü kabul et",
        faq_title: "Sık Sorulan Sorular",
        faq_q1: "Karbür çubuk nedir ve ne için kullanılır?", faq_a1: "Karbür çubuklar, kobalt bağlayıcılı tungsten karbür (WC) rolyedir. CNC işlemede kullanılan matkap, freze ve rayba gibi tam karbür kesici takımların hammaddesidir.",
        faq_q2: "HM Carbide hangi karbür kalitelerini sunuyor?", faq_a2: "HM 12Co (%88 WC, %12 Co, 92,5 HRA) kesintili kesimler için ve HM 10Co (%90 WC, %10 Co, 91,8 HRA) aşınmaya dayanıklı yüksek performanslı uygulamalar için sunulmaktadır.",
        faq_q3: "Dolu çubuk ile soğutma kanallı çubuk arasındaki fark nedir?", faq_a3: "Dolu çubuklar standart rolyelerdir. Soğutma kanallı çubuklar, soğutma sıvısını doğrudan kesme kenarına ileten iç kanala (Ø 0,5–2,0 mm) sahiptir — derin delik delme için idealdir.",
        faq_q4: "HM Carbide uluslararası teslimat yapıyor mu?", faq_a4: "Evet. HM Carbide Swiss GmbH, İsviçre'den tüm dünyaya Avrupa standartlarında güvenilir tedarik zinciri yönetimiyle teslimat yapmaktadır.",
        faq_q5: "HM Carbide ISO sertifikalı mı?", faq_a5: "Evet, ISO 9001:2015 sertifikamız mevcuttur. Bu, belgelenmiş bir kalite yönetim sistemi ve tutarlı yüksek ürün kalitesini garanti eder.",
        faq_q6: "Nasıl teklif alabilirim?", faq_a6: "<a href='mailto:info@hmcarbide.ch'>info@hmcarbide.ch</a> e-postası, <a href='tel:+41762909193'>+41 76 290 91 93</a> telefonu veya <a href='contact.html'>iletişim formumuz</a> aracılığıyla ulaşabilirsiniz. Türkçe, Almanca ve İngilizce yanıt veriyoruz."
    }
};

function changeLanguage(lang) {
    localStorage.setItem('hm_lang', lang);
    // HTML lang attribute'unu güncelle
    document.documentElement.setAttribute('lang', lang);
    const select = document.getElementById('langSel');
    if(select) select.value = lang;
    if (typeof refreshLangPeers === 'function') refreshLangPeers();
    if (typeof refreshMobileActiveStates === 'function') refreshMobileActiveStates();

    document.querySelectorAll('[data-i18n]').forEach(e => {
        const key = e.getAttribute('data-i18n');
        if(translations[lang][key]) e.innerHTML = translations[lang][key];
    });
    
    document.querySelectorAll('[data-i18n-ph]').forEach(e => {
        const key = e.getAttribute('data-i18n-ph');
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = translations[lang][key];
        e.placeholder = tempDiv.innerText;
    });

    if (document.getElementById('t2')) { fillProducts(); filterProducts(); }

    const contentArea = document.getElementById('contentArea');
    if(contentArea && translations[lang].about_content) contentArea.innerHTML = translations[lang].about_content;
}

const d1 = []; for (let i = 1; i <= 30; i++) { d1.push(i + " x 330"); } d1.push("32 x 330");
const d2_detailed = [{ dim: "4 x 330", id: "0.5", dist: "1.6" }, { dim: "6 x 330", id: "1.0", dist: "2.4" }, { dim: "8 x 330", id: "1.0", dist: "2.6" }, { dim: "10 x 330", id: "1.0", dist: "2.5" }, { dim: "12 x 330", id: "1.2", dist: "3.5" }, { dim: "14 x 330", id: "1.5", dist: "5.0" }, { dim: "16 x 330", id: "1.0", dist: "5.0" }, { dim: "18 x 330", id: "2.0", dist: "6.0" }, { dim: "20 x 330", id: "2.0", dist: "6.0" }, { dim: "25 x 330", id: "2.0", dist: "7.5" }];
const d3 = ["3 x 40", "4 x 50", "6 x 50", "8 x 63", "10 x 72", "12 x 83", "16 x 92", "20 x 104"];

function fillProducts() {
    const norm = x => x.toLowerCase().replace(/\s+/g, '');
    const lang = localStorage.getItem('hm_lang') || 'de';
    const dec = v => lang === 'en' ? v : v.replace('.', ',');
    const href = (p, d) => `contact.html?p=${p}&d=${encodeURIComponent(d)}`;
    const t1 = document.getElementById('t1');
    const t2 = document.querySelector('#t2 tbody');
    const t3 = document.getElementById('t3');
    if (t1) t1.innerHTML = d1.map(x => `<a href="${href('p1', x)}" data-dim="${norm(x)}">${parseFloat(x)}</a>`).join('');
    if (t2) t2.innerHTML = d2_detailed.map(it => `<tr data-dim="${norm(it.dim)}"><td><a href="${href('p2', it.dim)}">ø ${it.dim.replace(' x ', ' × ')}</a></td><td>${dec(it.id)}</td><td>${dec(it.dist)}</td></tr>`).join('');
    if (t3) t3.innerHTML = d3.map(x => `<li data-dim="${norm(x)}"><a href="${href('p3', x)}">${x.replace(' x ', ' × ')}</a></li>`).join('');
}

function filterProducts() {
    const box = document.getElementById('productSearch');
    if (!box) return;
    const input = box.value.toLowerCase().replace(/\s+/g, '').replace(/ø/g, '').replace(/[×*]/g, 'x');
    let any = false;
    document.querySelectorAll('.pl-item').forEach(item => {
        let hit = false;
        item.querySelectorAll('[data-dim]').forEach(el => {
            const m = !input || el.dataset.dim === input || el.dataset.dim.startsWith(input + 'x') || (input.includes('x') && el.dataset.dim.includes(input));
            el.classList.toggle('is-dim', !!input && !m);
            el.classList.toggle('is-match', !!input && m);
            if (m) hit = true;
        });
        item.style.display = hit ? '' : 'none';
        if (hit) any = true;
    });
    const nr = document.getElementById('noResults');
    if (nr) nr.hidden = any;
}

function prefillInquiry() {
    const msg = document.getElementById('user_message');
    if (!msg) return;
    const q = new URLSearchParams(location.search);
    const p = q.get('p'), d = q.get('d');
    if (!p || !/^p[123]$/.test(p)) return;
    const lang = localStorage.getItem('hm_lang') || 'de';
    const T = translations[lang] || translations.de;
    const tmp = document.createElement('div'); tmp.innerHTML = T[p] || '';
    const dim = d && /^[0-9 .x]{1,20}$/.test(d) ? d.replace(' x ', ' × ') : '';
    let tpl = T.req_tpl.replace('{p}', tmp.textContent);
    tpl = dim ? tpl.replace('{d}', dim) : tpl.replace(', {d} mm', '');
    if (!msg.value) msg.value = tpl;
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(reveal, 100);

    // 2. EmailJS Sadece Varsa Başlat
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YZquRq4Ohz6CEdGZJ");
    }

    let lang = localStorage.getItem('hm_lang');
    if (!lang) {
        const browserLang = navigator.language || navigator.userLanguage;
        lang = browserLang.startsWith('tr') ? 'tr' : (browserLang.startsWith('en') ? 'en' : 'de');
    }
    changeLanguage(lang);
    fillProducts();
    prefillInquiry();
    
    // Header Scroll
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if(header) {
            if (window.scrollY > 50) header.classList.add("scrolled");
            else header.classList.remove("scrolled");
        }
        reveal();
    });

    // Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slideshow img');
    if(slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); 
    }

    // --- FORM GÖNDERME İŞLEMİ ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm && typeof emailjs !== 'undefined') {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Honeypot kontrolü — bot doldurmuşsa sessizce durdur
            const honeypot = document.getElementById('honeypot');
            if (honeypot && honeypot.value) return;

            // Rate limiting — son 60 saniyede gönderilmişse engelle
            const lastSent = localStorage.getItem('hmc_last_form');
            if (lastSent && Date.now() - parseInt(lastSent) < 60000) {
                const currentLang = localStorage.getItem('hm_lang') || 'de';
                const waitMsg = { de: 'Bitte warten Sie 60 Sekunden.', en: 'Please wait 60 seconds.', tr: 'Lütfen 60 saniye bekleyin.' };
                alert(waitMsg[currentLang]);
                return;
            }

            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerText;
            btn.innerText = "Senden...";
            btn.disabled = true;

            const serviceID = "gorrxcaveman@gmail.com";
            const templateID = "template_u11karb";
            const currentLang = localStorage.getItem('hm_lang') || 'de';

            emailjs.sendForm(serviceID, templateID, this)
                .then(function() {
                    localStorage.setItem('hmc_last_form', Date.now().toString());
                    alert(translations[currentLang].alert_success);
                    btn.innerText = originalText;
                    btn.disabled = false;
                    contactForm.reset();
                }, function(error) {
                    alert(translations[currentLang].alert_error + "\n" + JSON.stringify(error));
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
        });
    }
});

function toggleMenu() { document.getElementById('navbar').classList.toggle('active'); }

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(r => {
        var windowHeight = window.innerHeight;
        var elementTop = r.getBoundingClientRect().top;
        if(elementTop < windowHeight + 100) r.classList.add('active');
    });
}
