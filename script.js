// =====================================================================
// MARKA MESAJI — slogan ve kalite vurgusu sadece buradan değiştirilir.
// (Şirket taşınırsa/slogan değişirse yalnızca bu bloğu düzenleyin.)
// =====================================================================
const BRAND = {
    claim:   { de: "Schweizer Qualität",     en: "Swiss quality",        tr: "İsviçre kalitesi" },
    slogan2: { de: "Maximale Beständigkeit", en: "Maximum durability",   tr: "Maksimum dayanıklılık" },
    sealText: "SWISS QUALITY"
};

// --- DİL ÇEVİRİLERİ (HTML Entity - %100 Güvenli) ---
const translations = {
    de: { 
        nav_home: "Startseite", nav_about: "&Uuml;ber uns", nav_products: "Produkte", nav_certs: "Zertifikate", nav_contact: "Kontakt",
        nav_quick: "Schnellzugriff", footer_desc: "Ihr zuverlässiger Partner für verschleiß- und druckfeste Hartmetallprodukte.",
        gr_title: "Die richtige Hartmetallsorte", gr_intro: "Kobaltanteil und Korngröße bestimmen das Verhältnis von Härte und Zähigkeit eines Stabes und damit, für welches Werkzeug er sich eignet.", gr_axis_hard: "Härter, verschleißfester", gr_axis_tough: "Zäher, bruchfester", gr_ask: "Sorte anfragen", g_best: "Meistverkauft", gc_uf: "Ultrafeinkorn", gc_f: "Feinkorn", gc_m: "Mittelkorn", gc_uf_d: "Hart und verschleißfest", gc_f_d: "Ausgewogen und am meisten gefragt", gc_m_d: "Zäh und bruchfest", hero_l1: "Schweizer Qualität.", hero_l2: "Maximale Beständigkeit.", hero_lede: "Hartmetallstäbe für die Werkzeugherstellung, geliefert aus der Schweiz in die ganze Welt.", home_cta: "Anfrage senden", home_all: "Alle Produkte ansehen", home_about: "Mehr über uns", fact1: "Fertigung nach ISO 9001:2015 zertifiziert", fact2: "Durchmesser 1 bis 32 mm", fact3: "Lieferung weltweit", hero_title: "SCHWEIZER QUALITÄT | MAXIMALE BESTÄNDIGKEIT", hero_sub: "PRÄZISION AUS DER SCHWEIZ FÜR DIE WELT", hero_btn_contact: "KONTAKT AUFNEHMEN",
        about_title: "&Uuml;ber uns", about_text: "HM Carbide Swiss GmbH ist Ihr zuverlässiger Partner.", about_btn: "MEHR ERFAHREN",
        p1_desc: "Rohling für Vollhartmetall-Werkzeuge wie Bohrer, Fräser und Reibahlen.", p2_desc: "Mit innenliegenden Kühlkanälen für Hochleistungs-Bohr- und Fräswerkzeuge.", p3_desc: "Auf Länge geschnittene Rohlinge – bereit zum Schleifen.", lbl_dia: "Durchmesser", lbl_len: "Länge", lbl_grade: "Sorte", lbl_channel: "Kühlkanal", lbl_sizes: "Abmessungen", lbl_variants: "Varianten", lbl_avail: "Lieferbare Abmessungen", th_dim: "Abmessung (mm)", th_channel: "Kanal-ø (mm)", th_dist: "Abstand (mm)", note_p1: "Stirnseiten maßstabsgetreu. Klicken Sie auf einen Durchmesser, um ihn anzufragen.", note_p2: "Querschnitte maßstabsgetreu, mit Kanal-ø und Abstand in mm. Klicken Sie auf eine Größe, um sie anzufragen.", note_p3: "Seitenansicht maßstabsgetreu, ø × Länge in mm. Klicken Sie auf eine Größe, um sie anzufragen.", lbl_ch: "Kanal", lbl_dist: "Abstand", req_tpl: "Anfrage: {p}, {d} mm\nMenge: ", no_results: "Keine passende Abmessung gefunden.", lbl_avail_dia: "Lieferbare Durchmesser in mm", lbl_avail_cut: "Lieferbare Abmessungen, ø × Länge in mm", th_gradecol: "Sorte", cert_sub: "Qualität, die sich nachweisen lässt.", iso_desc: "Zertifizierte Fertigung unseres Herstellers", contact_sub: "Schreiben Sie uns. Wir antworten auf Deutsch, Englisch und Türkisch.", country_ch: "Schweiz", lbl_message: "Nachricht", btn_quote: "Angebot anfordern", map_apple: "In Apple Karten öffnen", map_google: "In Google Maps öffnen", p1: "Hartmetallstab Voll", p2: "Stab mit Kühlkanal", p3: "Gekürzter Stab", 
        prod_subtitle: "Hochleistungs-Hartmetallstäbe",
        tech_title: "Technische Daten", th_grain: "Korngröße", th_density: "Dichte", th_hard: "Härte", th_trs: "Biegefestigkeit", search_ph: "Dimension suchen (z.B. 12x330)...",
        swiss_title: "Schweizer Qualität", swiss_desc: "Originalqualität",
        contact_info_title: "Kontaktinformationen", form_title: "Nachricht senden", form_btn: "Nachricht senden", ph_name: "Name", ph_email: "E-Mail", ph_message: "Ihre Nachricht...",
        about_content: `<h3>Ein Familienunternehmen, das Hartmetall kennt</h3><p>HM Carbide Swiss GmbH ist ein 2025 gegründetes Familienunternehmen. Einer unserer Inhaber bringt langjährige Erfahrung aus der Zerspanungs- und Hartmetallbranche mit. Wir wissen aus der Praxis, was Werkzeughersteller von ihrem Rohmaterial erwarten: Stäbe, die maßhaltig sind, sich in jeder Charge gleich verhalten und pünktlich ankommen.</p><p>Wir liefern Hartmetallstäbe für die Werkzeugherstellung: Vollhartmetall-, Kühlkanal- und gekürzte Stäbe von ø 1 bis 32 mm. Gefertigt werden sie in einem nach ISO 9001:2015 zertifizierten Werk.</p><p>Unser Sitz ist in Bottighofen in der Schweiz. Von hier liefern wir weltweit. Mit unseren Kunden arbeiten wir direkt, auf Deutsch, Englisch und Türkisch.</p>`,
        alert_success: "Ihre Nachricht wurde erfolgreich gesendet!", alert_error: "Fehler beim Senden der Nachricht.",
        cookie_title: "🍪 Cookie-Einstellungen", cookie_desc: "Wir verwenden Cookies gemäß DSGVO, um Ihre Erfahrung zu verbessern.", cookie_more: "Mehr erfahren", cookie_reject: "Ablehnen", cookie_accept: "Alle akzeptieren",
        faq_title: "Häufig gestellte Fragen",
        faq_q1: "Was ist ein Hartmetallstab und wofür wird er verwendet?", faq_a1: "Hartmetallstäbe sind Rohlinge aus Wolframkarbid (WC) mit Kobaltbindung. Sie sind das Ausgangsmaterial für Vollhartmetall-Zerspanungswerkzeuge wie Bohrer, Fräser und Reibahlen, die in der CNC-Bearbeitung eingesetzt werden.",
        faq_q2: "Welche Hartmetall-Güten bietet HM Carbide an?", faq_a2: "Unsere Standardsorten sind HM 12Co (88 % WC, 12 % Co, Korngröße 0,4 µm, 92,5 HRA), dank Ultrafeinkorn härter und verschleißfester, und HM 10Co (90 % WC, 10 % Co, Korngröße 0,8 µm, 91,8 HRA), zäher und bruchfester. Darüber hinaus bieten wir die Sorten HM12F (Ultrafeinkorn, 0,4 µm), HM10S (Feinkorn, 0,6 µm) und H10F (Mittelkorn, 0,8 µm) an.",
        faq_q3: "Was ist der Unterschied zwischen Vollhartmetall und Kühlkanal-Stäben?", faq_a3: "Vollhartmetallstäbe sind massive Rohlinge. Kühlkanal-Stäbe haben einen innenliegenden Kanal (Ø 0,5–2,0 mm) für Kühlmittelzufuhr direkt zur Schneidkante – ideal für Tiefbohrungen mit längerer Standzeit.",
        faq_q4: "Liefert HM Carbide international?", faq_a4: "Ja. HM Carbide Swiss GmbH liefert weltweit von der Schweiz aus.",
        faq_q5: "Sind Ihre Stäbe ISO-zertifiziert?", faq_a5: "Unsere Stäbe werden in einem nach ISO 9001:2015 zertifizierten Werk unseres Herstellers gefertigt. Das Zertifikat des Herstellers stellen wir Ihnen gerne zur Verfügung.",
        faq_q6: "Wie kann ich ein Angebot anfordern?", faq_a6: "Per E-Mail unter <a href='mailto:info@hmcarbide.ch'>info@hmcarbide.ch</a>, telefonisch unter <a href='tel:+41762909193'>+41 76 290 91 93</a> oder über unser <a href='contact.html'>Kontaktformular</a>. Wir antworten auf Deutsch, Englisch und Türkisch."
    },
    en: { 
        nav_home: "Home", nav_about: "About us", nav_products: "Products", nav_certs: "Certificates", nav_contact: "Contact",
        nav_quick: "Quick Links", footer_desc: "Your reliable partner for carbide products.",
        gr_title: "The right carbide grade", gr_intro: "Cobalt content and grain size set the balance between hardness and toughness of a rod, and with it the tools it suits.", gr_axis_hard: "Harder, more wear-resistant", gr_axis_tough: "Tougher, more fracture-resistant", gr_ask: "Ask about a grade", g_best: "Best seller", gc_uf: "Ultrafine grain", gc_f: "Fine grain", gc_m: "Medium grain", gc_uf_d: "Hard and wear-resistant", gc_f_d: "Balanced and most in demand", gc_m_d: "Tough and fracture-resistant", hero_l1: "Swiss quality.", hero_l2: "Maximum durability.", hero_lede: "Carbide rods for tool manufacturing, shipped from Switzerland to the whole world.", home_cta: "Send an inquiry", home_all: "View all products", home_about: "More about us", fact1: "ISO 9001:2015 certified production", fact2: "Diameters from 1 to 32 mm", fact3: "Worldwide delivery", hero_title: "SWISS QUALITY | MAXIMUM DURABILITY", hero_sub: "SWISS PRECISION FOR THE WORLD", hero_btn_contact: "CONTACT US",
        about_title: "About us", about_text: "Your reliable partner for high-quality carbide products.", about_btn: "LEARN MORE",
        p1_desc: "Blank for solid carbide tools such as drills, end mills and reamers.", p2_desc: "With internal coolant channels for high-performance drilling and milling tools.", p3_desc: "Cut-to-length blanks, ready for grinding.", lbl_dia: "Diameter", lbl_len: "Length", lbl_grade: "Grade", lbl_channel: "Coolant channel", lbl_sizes: "Dimensions", lbl_variants: "Variants", lbl_avail: "Available dimensions", th_dim: "Dimension (mm)", th_channel: "Channel ø (mm)", th_dist: "Distance (mm)", note_p1: "End faces to scale. Click a diameter to request it.", note_p2: "Cross-sections to scale, with channel ø and distance in mm. Click a size to request it.", note_p3: "Side view to scale, ø × length in mm. Click a size to request it.", lbl_ch: "Channel", lbl_dist: "Distance", req_tpl: "Inquiry: {p}, {d} mm\nQuantity: ", no_results: "No matching dimension found.", lbl_avail_dia: "Available diameters in mm", lbl_avail_cut: "Available dimensions, ø × length in mm", th_gradecol: "Grade", cert_sub: "Quality you can verify.", iso_desc: "Our manufacturer’s certified production", contact_sub: "Write to us. We reply in German, English and Turkish.", country_ch: "Switzerland", lbl_message: "Message", btn_quote: "Request a quote", map_apple: "Open in Apple Maps", map_google: "Open in Google Maps", p1: "Solid Carbide Rod", p2: "Rod with Coolant", p3: "Cut-to-Length Rod", 
        prod_subtitle: "High Performance Carbide Rods",
        tech_title: "Technical Specs", th_grain: "Grain Size", th_density: "Density", th_hard: "Hardness", th_trs: "TRS", search_ph: "Search dimension (e.g. 12x330)...",
        swiss_title: "Swiss quality", swiss_desc: "Original quality",
        contact_info_title: "Contact details", form_title: "Send a message", form_btn: "Send message", ph_name: "Name", ph_email: "Email", ph_message: "Your Message...",
        about_content: `<h3>A family business that knows carbide</h3><p>HM Carbide Swiss GmbH is a family business founded in 2025. One of our owners brings many years of experience in the machining and carbide industry. We know from practice what toolmakers expect from their raw material: rods that hold their dimensions, behave the same in every batch and arrive on time.</p><p>We supply carbide rods for tool manufacturing: solid carbide, coolant-channel and cut-to-length rods from ø 1 to 32 mm. They are produced in an ISO 9001:2015 certified plant.</p><p>We are based in Bottighofen, Switzerland, and deliver worldwide from here. We work with our customers directly, in German, English and Turkish.</p>`,
        alert_success: "Your message has been sent successfully!", alert_error: "Error sending message.",
        cookie_title: "🍪 Cookie Settings", cookie_desc: "We use cookies in accordance with GDPR to improve your experience.", cookie_more: "Learn more", cookie_reject: "Reject", cookie_accept: "Accept all",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What is a carbide rod and what is it used for?", faq_a1: "Carbide rods are blanks made of tungsten carbide (WC) with a cobalt binder. They are the raw material for solid carbide cutting tools such as drills, end mills, and reamers used in CNC machining.",
        faq_q2: "What carbide grades does HM Carbide offer?", faq_a2: "Our standard grades are HM 12Co (88% WC, 12% Co, 0.4 µm grain, 92.5 HRA), harder and more wear-resistant thanks to its ultrafine grain, and HM 10Co (90% WC, 10% Co, 0.8 µm grain, 91.8 HRA), tougher and more fracture-resistant. We also offer the grades HM12F (ultrafine, 0.4 µm), HM10S (fine, 0.6 µm) and H10F (medium, 0.8 µm).",
        faq_q3: "What is the difference between solid and coolant channel rods?", faq_a3: "Solid rods are standard blanks. Coolant channel rods have an internal bore (Ø 0.5–2.0 mm) that delivers coolant directly to the cutting edge — ideal for deep-hole drilling with longer tool life.",
        faq_q4: "Does HM Carbide ship internationally?", faq_a4: "Yes. HM Carbide Swiss GmbH ships worldwide from Switzerland.",
        faq_q5: "Are your rods ISO certified?", faq_a5: "Our rods are produced in our manufacturer’s ISO 9001:2015 certified plant. We are happy to provide the manufacturer’s certificate on request.",
        faq_q6: "How can I request a quote?", faq_a6: "By email at <a href='mailto:info@hmcarbide.ch'>info@hmcarbide.ch</a>, by phone at <a href='tel:+41762909193'>+41 76 290 91 93</a>, or via our <a href='contact.html'>contact form</a>. We respond in German, English and Turkish."
    },
    tr: { 
        nav_home: "Anasayfa", nav_about: "Hakkımızda", nav_products: "Ürünlerimiz", nav_certs: "Sertifikalar", nav_contact: "İletişim",
        nav_quick: "Hızlı Linkler", footer_desc: "Aşınmaya ve basınca dayanıklı karbür ürünler için güvenilir ortağınız.",
        gr_title: "Doğru karbür sınıfı", gr_intro: "Kobalt oranı ve tane boyutu, bir çubuğun sertlik ile tokluk arasındaki dengesini ve dolayısıyla hangi takıma uygun olduğunu belirler.", gr_axis_hard: "Daha sert, aşınmaya dayanıklı", gr_axis_tough: "Daha tok, kırılmaya dayanıklı", gr_ask: "Kalite sorun", g_best: "En çok satan", gc_uf: "Ultra ince tane", gc_f: "İnce tane", gc_m: "Orta tane", gc_uf_d: "Sert ve aşınmaya dayanıklı", gc_f_d: "Dengeli, en çok tercih edilen", gc_m_d: "Tok, kırılmaya dayanıklı", hero_l1: "İsviçre kalitesi.", hero_l2: "Maksimum dayanıklılık.", hero_lede: "Takım üretimi için karbür çubuklar; İsviçre’den tüm dünyaya.", home_cta: "Teklif isteyin", home_all: "Tüm ürünleri görün", home_about: "Hakkımızda daha fazlası", fact1: "ISO 9001:2015 sertifikalı üretim", fact2: "1 ile 32 mm arası çaplar", fact3: "Dünya geneline teslimat", hero_title: "İSVİÇRE KALİTESİ | MAKSİMUM DAYANIKLILIK", hero_sub: "DÜNYA İÇİN İSVİÇRE HASSASİYETİ", hero_btn_contact: "İLETİŞİME GEÇİN",
        about_title: "Hakkımızda", about_text: "Yüksek kaliteli karbür ürünleri için güvenilir ortağınız.", about_btn: "DAHA FAZLA",
        p1_desc: "Matkap, freze ve rayba gibi tam karbür takımlar için hammadde.", p2_desc: "Yüksek performanslı delme ve frezeleme takımları için iç soğutma kanallı.", p3_desc: "Boyuna kesilmiş, taşlamaya hazır rolyeler.", lbl_dia: "Çap", lbl_len: "Boy", lbl_grade: "Kalite", lbl_channel: "Soğutma kanalı", lbl_sizes: "Ölçüler", lbl_variants: "Çeşit", lbl_avail: "Mevcut ölçüler", th_dim: "Ölçü (mm)", th_channel: "Kanal ø (mm)", th_dist: "Mesafe (mm)", note_p1: "Uç yüzeyler gerçek oranlarında. Teklif istemek için bir çapa tıklayın.", note_p2: "Kesitler gerçek oranlarında; kanal çapı ve mesafe mm cinsinden. Teklif istemek için bir ölçüye tıklayın.", note_p3: "Yandan görünüş gerçek oranlarında, ø × boy (mm). Teklif istemek için bir ölçüye tıklayın.", lbl_ch: "Kanal", lbl_dist: "Mesafe", req_tpl: "Talep: {p}, {d} mm\nAdet: ", no_results: "Eşleşen ölçü bulunamadı.", lbl_avail_dia: "Mevcut çaplar (mm)", lbl_avail_cut: "Mevcut ölçüler, ø × boy (mm)", th_gradecol: "Kalite", cert_sub: "Belgelenebilir kalite.", iso_desc: "Üreticimizin sertifikalı üretimi", contact_sub: "Bize yazın. Türkçe, Almanca ve İngilizce yanıt veriyoruz.", country_ch: "İsviçre", lbl_message: "Mesajınız", btn_quote: "Teklif isteyin", map_apple: "Apple Haritalar’da aç", map_google: "Google Haritalar’da aç", p1: "Karbür Çubuklar", p2: "Soğutma Kanallı Çubuk", p3: "Kesilmiş Çubuk",
        prod_subtitle: "Yüksek Performanslı Karbür Çubuklar",
        tech_title: "Teknik Özellikler", th_grain: "Tane Boyutu", th_density: "Yoğunluk", th_hard: "Sertlik", th_trs: "Kırılma Dayanımı", search_ph: "Ölçü ara (örn. 12x330)...",
        swiss_title: "İsviçre kalitesi", swiss_desc: "Orijinal kalite",
        contact_info_title: "İletişim bilgileri", form_title: "Mesaj gönderin", form_btn: "Mesajı gönder", ph_name: "Adınız", ph_email: "E-Posta", ph_message: "Mesajınız...",
        about_content: `<h3>Karbürü bilen bir aile şirketi</h3><p>HM Carbide Swiss GmbH, 2025 yılında kurulmuş bir aile şirketidir. Ortaklarımızdan biri talaşlı imalat ve karbür sektöründe yıllara dayanan bir deneyime sahip. Takım üreticilerinin bir hammaddeden ne beklediğini sahadan biliyoruz: ölçüsü tutan, her partide aynı davranan ve zamanında gelen çubuklar.</p><p>Takım üretimi için karbür çubuk tedarik ediyoruz: tam karbür, soğutma kanallı ve boyuna kesilmiş çubuklar, ø 1–32 mm. Çubuklarımız ISO 9001:2015 sertifikalı bir tesiste üretilir.</p><p>Merkezimiz İsviçre’de, Bottighofen’de. Buradan dünyanın her yerine teslimat yapıyoruz. Müşterilerimizle Almanca, İngilizce ve Türkçe, doğrudan çalışıyoruz.</p>`,
        alert_success: "Mesajınız başarıyla gönderildi!", alert_error: "Bir hata oluştu, lütfen tekrar deneyin.",
        cookie_title: "🍪 Çerez Ayarları", cookie_desc: "GDPR kapsamında deneyiminizi geliştirmek için çerezler kullanıyoruz.", cookie_more: "Daha fazla", cookie_reject: "Reddet", cookie_accept: "Tümünü kabul et",
        faq_title: "Sık Sorulan Sorular",
        faq_q1: "Karbür çubuk nedir ve ne için kullanılır?", faq_a1: "Karbür çubuklar, kobalt bağlayıcılı tungsten karbür (WC) rolyedir. CNC işlemede kullanılan matkap, freze ve rayba gibi tam karbür kesici takımların hammaddesidir.",
        faq_q2: "HM Carbide hangi karbür kalitelerini sunuyor?", faq_a2: "Standart kalitelerimiz HM 12Co (%88 WC, %12 Co, 0,4 µm tane, 92,5 HRA) ve HM 10Co’dur (%90 WC, %10 Co, 0,8 µm tane, 91,8 HRA). HM 12Co ultra ince tanesi sayesinde daha sert ve aşınmaya dayanıklı, HM 10Co ise daha tok ve kırılmaya dayanıklıdır. Bunların yanında HM12F (ultra ince, 0,4 µm), HM10S (ince, 0,6 µm) ve H10F (orta, 0,8 µm) kalitelerini de sunuyoruz.",
        faq_q3: "Dolu çubuk ile soğutma kanallı çubuk arasındaki fark nedir?", faq_a3: "Dolu çubuklar standart rolyelerdir. Soğutma kanallı çubuklar, soğutma sıvısını doğrudan kesme kenarına ileten iç kanala (Ø 0,5–2,0 mm) sahiptir — derin delik delme için idealdir.",
        faq_q4: "HM Carbide uluslararası teslimat yapıyor mu?", faq_a4: "Evet. HM Carbide Swiss GmbH, İsviçre’den tüm dünyaya teslimat yapmaktadır.",
        faq_q5: "Çubuklarınız ISO sertifikalı mı?", faq_a5: "Çubuklarımız, üreticimizin ISO 9001:2015 sertifikalı tesisinde üretilir. Üreticinin sertifikasını talep üzerine paylaşırız.",
        faq_q6: "Nasıl teklif alabilirim?", faq_a6: "<a href='mailto:info@hmcarbide.ch'>info@hmcarbide.ch</a> e-postası, <a href='tel:+41762909193'>+41 76 290 91 93</a> telefonu veya <a href='contact.html'>iletişim formumuz</a> aracılığıyla ulaşabilirsiniz. Türkçe, Almanca ve İngilizce yanıt veriyoruz."
    }
};

// --- Ek metinler (yeni tasarım, Aşama 2–4) ---
Object.assign(translations.de, {
    skip_link: "Zum Inhalt springen", nav_impressum: "Impressum", nav_privacy: "Datenschutz",
    follow_linkedin: "Folgen Sie uns auf LinkedIn",
    cookie_text: "Wir verwenden Cookies für anonyme Nutzungsstatistiken (Google Analytics), nur mit Ihrer Einwilligung. Details in unserer", cookie_link: "Datenschutzerklärung", cookie_accept: "Akzeptieren", cookie_decline: "Ablehnen", cookie_settings: "Cookie-Einstellungen",
    prod_link: "Zum Produkt", home_about_text: "Familienunternehmen, 2025 in Bottighofen gegründet. Langjährige Erfahrung in Zerspanung und Hartmetall, Fertigung nach ISO 9001:2015 zertifiziert, Lieferung weltweit.",
    apps_title: "Anwendungen", apps_intro: "Wofür unsere Stäbe eingesetzt werden und welche Sorten sich dafür bewährt haben.", rec_grades: "Empfohlene Sorten",
    app_drill: "Bohrer", app_drill_d: "Vollhartmetallbohrer; mit Kühlkanal auch für tiefe Bohrungen.",
    app_mill: "Schaftfräser", app_mill_d: "Vom Allzweckfräser bis zum Fräser mit kleinem Durchmesser.",
    app_ream: "Reibahlen", app_ream_d: "Rohlinge für Reibahlen und Senker.",
    app_micro: "Mikro- und Uhrenwerkzeuge", app_micro_d: "Höchste Härte für kleinste Durchmesser.",
    app_med: "Medizintechnik und Gravur", app_med_d: "Feine Kanten und gleichmäßiges Gefüge.",
    app_inox: "Rostfreier Stahl und Titan", app_inox_d: "Für schwer zerspanbare Werkstoffe.",
    app_wood: "Holz und Aluminium", app_wood_d: "Zähe Sorte für weiche und klebende Werkstoffe.",
    app_heavy: "Schwere und unterbrochene Schnitte", app_heavy_d: "Hoher Kobaltanteil gegen Kantenbruch.",
    close_title: "Sorte, Abmessung, Menge: schicken Sie uns Ihre Anfrage.", close_text: "Wir antworten mit einem Angebot auf Deutsch, Englisch oder Türkisch.",
    alt_hero: "Geschliffener Hartmetallstab auf dunklem Grund", alt_p1: "Vollhartmetallstäbe in fünf Durchmessern nebeneinander", alt_p2: "Stirnseite eines Hartmetallstabs mit zwei Kühlkanälen", alt_p3: "Gekürzte Hartmetallstäbe in verschiedenen Durchmessern und Längen",
    lbl_tol: "Toleranz", lbl_custom: "Sonderlängen", t_custom: "Auf Anfrage gefertigt", p3_custom: "Sonderlängen und -abmessungen fertigen wir nach Ihren Vorgaben.", lbl_finish: "Ausführung", t_on_request: "Auf Anfrage", lbl_dims_all: "ø 1–30 mm in 1-mm-Schritten, ø 32 mm",
    dl_title: "Downloads", dl_intro: "Zertifikat und technische Datenblätter als PDF. Fehlt eine Datei, senden wir sie Ihnen auf Anfrage.",
    dl_iso: "ISO 9001:2015 Zertifikat des Herstellers", dl_ds1: "Datenblatt Vollhartmetallstab", dl_ds2: "Datenblatt Stab mit Kühlkanal", dl_ds3: "Datenblatt gekürzter Stab",
    dl_pdf: "PDF herunterladen", dl_request: "Auf Anfrage", dl_sheet: "Datenblatt (PDF)",
    imp_title: "Impressum", prod_subtitle: "Hartmetallstäbe für die Werkzeugherstellung"
});
Object.assign(translations.en, {
    skip_link: "Skip to content", nav_impressum: "Legal notice", nav_privacy: "Privacy",
    follow_linkedin: "Follow us on LinkedIn",
    cookie_text: "We use cookies for anonymous usage statistics (Google Analytics), only with your consent. Details in our", cookie_link: "privacy policy", cookie_accept: "Accept", cookie_decline: "Decline", cookie_settings: "Cookie settings",
    prod_link: "View product", home_about_text: "Family business founded in 2025 in Bottighofen. Many years of experience in machining and carbide, ISO 9001:2015 certified production, worldwide delivery.",
    apps_title: "Applications", apps_intro: "What our rods are used for and which grades have proven themselves there.", rec_grades: "Recommended grades",
    app_drill: "Drills", app_drill_d: "Solid carbide drills; with coolant channels also for deep holes.",
    app_mill: "End mills", app_mill_d: "From general-purpose to small-diameter end mills.",
    app_ream: "Reamers", app_ream_d: "Blanks for reamers and countersinks.",
    app_micro: "Micro and watchmaking tools", app_micro_d: "Maximum hardness for the smallest diameters.",
    app_med: "Medical and engraving", app_med_d: "Fine edges and a uniform structure.",
    app_inox: "Stainless steel and titanium", app_inox_d: "For difficult-to-machine materials.",
    app_wood: "Wood and aluminium", app_wood_d: "Tough grade for soft and sticky materials.",
    app_heavy: "Heavy and interrupted cuts", app_heavy_d: "High cobalt content against edge chipping.",
    close_title: "Grade, size, quantity: send us your inquiry.", close_text: "We reply with a quote in German, English or Turkish.",
    alt_hero: "Ground carbide rod on a dark background", alt_p1: "Solid carbide rods in five diameters side by side", alt_p2: "End face of a carbide rod with two coolant channels", alt_p3: "Cut-to-length carbide rods in various diameters and lengths",
    lbl_tol: "Tolerance", lbl_custom: "Custom lengths", t_custom: "Made to order", p3_custom: "Custom lengths and sizes can be produced to your specifications.", lbl_finish: "Finish", t_on_request: "On request", lbl_dims_all: "ø 1–30 mm in 1 mm steps, ø 32 mm",
    dl_title: "Downloads", dl_intro: "Certificate and technical data sheets as PDF. If a file is missing, we will send it on request.",
    dl_iso: "Manufacturer’s ISO 9001:2015 certificate", dl_ds1: "Data sheet: solid carbide rod", dl_ds2: "Data sheet: rod with coolant channels", dl_ds3: "Data sheet: cut-to-length rod",
    dl_pdf: "Download PDF", dl_request: "On request", dl_sheet: "Data sheet (PDF)",
    imp_title: "Legal notice", prod_subtitle: "Carbide rods for tool manufacturing"
});
Object.assign(translations.tr, {
    skip_link: "İçeriğe geç", nav_impressum: "Künye", nav_privacy: "Gizlilik",
    follow_linkedin: "LinkedIn’de takip edin",
    cookie_text: "Anonim kullanım istatistikleri (Google Analytics) için, yalnızca onayınızla çerez kullanıyoruz. Ayrıntılar", cookie_link: "gizlilik politikamızda", cookie_accept: "Kabul et", cookie_decline: "Reddet", cookie_settings: "Çerez ayarları",
    prod_link: "Ürüne git", home_about_text: "2025’te Bottighofen’de kurulmuş bir aile şirketi. Talaşlı imalat ve karbürde yıllara dayanan deneyim, ISO 9001:2015 sertifikalı üretim, dünya geneline teslimat.",
    apps_title: "Uygulamalar", apps_intro: "Çubuklarımızın hangi takımlarda kullanıldığı ve bu işlerde hangi kalitelerin öne çıktığı.", rec_grades: "Önerilen kaliteler",
    app_drill: "Matkaplar", app_drill_d: "Tam karbür matkaplar; soğutma kanallı çubuklarla derin delikler için de.",
    app_mill: "Parmak frezeler", app_mill_d: "Genel amaçlı frezelerden küçük çaplı frezelere.",
    app_ream: "Raybalar", app_ream_d: "Rayba ve havşa takımları için rolyeler.",
    app_micro: "Mikro ve saatçilik takımları", app_micro_d: "En küçük çaplar için en yüksek sertlik.",
    app_med: "Medikal ve gravür", app_med_d: "İnce kenarlar ve homojen yapı.",
    app_inox: "Paslanmaz çelik ve titanyum", app_inox_d: "İşlenmesi zor malzemeler için.",
    app_wood: "Ahşap ve alüminyum", app_wood_d: "Yumuşak ve yapışkan malzemeler için tok kalite.",
    app_heavy: "Ağır ve kesintili kesim", app_heavy_d: "Kenar kırılmasına karşı yüksek kobalt oranı.",
    close_title: "Kalite, ölçü, adet: talebinizi gönderin.", close_text: "Türkçe, Almanca veya İngilizce teklifle dönüyoruz.",
    alt_hero: "Koyu zemin üzerinde taşlanmış karbür çubuk", alt_p1: "Yan yana beş farklı çapta tam karbür çubuk", alt_p2: "İki soğutma kanallı karbür çubuğun uç yüzeyi", alt_p3: "Farklı çap ve boylarda kesilmiş karbür çubuklar",
    lbl_tol: "Tolerans", lbl_custom: "Özel boylar", t_custom: "Talebe göre üretilir", p3_custom: "Özel boy ve ölçüler isteğinize göre üretilebilir.", lbl_finish: "Yüzey durumu", t_on_request: "Talep üzerine", lbl_dims_all: "ø 1–30 mm, 1 mm adımlarla; ø 32 mm",
    dl_title: "İndirmeler", dl_intro: "Sertifika ve teknik veri sayfaları PDF olarak. Eksik bir dosya varsa talep üzerine gönderiyoruz.",
    dl_iso: "Üreticinin ISO 9001:2015 sertifikası", dl_ds1: "Veri sayfası: tam karbür çubuk", dl_ds2: "Veri sayfası: soğutma kanallı çubuk", dl_ds3: "Veri sayfası: kesilmiş çubuk",
    dl_pdf: "PDF indir", dl_request: "Talep üzerine", dl_sheet: "Veri sayfası (PDF)",
    imp_title: "Künye", prod_subtitle: "Takım üretimi için karbür çubuklar"
});
['de', 'en', 'tr'].forEach(l => {
    translations[l].hero_l1 = BRAND.claim[l] + '.';
    translations[l].hero_l2 = BRAND.slogan2[l] + '.';
    translations[l].swiss_title = BRAND.claim[l];
});

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
    
    document.querySelectorAll('[data-i18n-alt]').forEach(e => {
        const t = translations[lang][e.getAttribute('data-i18n-alt')];
        if (t) e.setAttribute('alt', t);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(e => {
        const t = translations[lang][e.getAttribute('data-i18n-aria')];
        if (t) e.setAttribute('aria-label', t);
    });
    document.querySelectorAll('[data-brand-seal]').forEach(e => { e.textContent = BRAND.sealText; });

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
const d3 = ["3 x 40", "4 x 50", "5 x 50", "6 x 50", "6 x 57", "8 x 63", "10 x 70", "10 x 72", "12 x 75", "12 x 83", "16 x 92", "16 x 93", "20 x 104"];

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

// toggleMenu → layout.js

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(r => {
        var windowHeight = window.innerHeight;
        var elementTop = r.getBoundingClientRect().top;
        if(elementTop < windowHeight + 100) r.classList.add('active');
    });
}
