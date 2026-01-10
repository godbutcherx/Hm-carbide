// --- DİL ÇEVİRİLERİ (HTML Entity - %100 Güvenli) ---
const translations = {
    de: { 
        nav_home: "Startseite", nav_about: "&Uuml;ber Uns", nav_products: "Produkte", nav_certs: "Zertifikate", nav_contact: "Kontakt",
        nav_quick: "Schnellzugriff", footer_desc: "Ihr zuverlässiger Partner für verschleiß- und druckfeste Hartmetallprodukte.",
        hero_title: "SCHWEIZER DISZIPLIN, MAXIMALE BESTÄNDIGKEIT", hero_sub: "PRÄZISION AUS DER SCHWEIZ FÜR DIE WELT", hero_btn_contact: "KONTAKT AUFNEHMEN",
        nat_title: "Tungsten, Karbon, Kobalt... Unser Wesen ist Natur.", nat_sub: "Wir bieten die stärksten Erze der Natur mit Schweizer Präzision.", nat_desc: "Die einzigartige Haltbarkeit von Hartmetallstäben entsteht aus der Kraft der Elemente aus den Tiefen der Erde. Wir als HM Carbide wählen sorgfältig Produkte aus, die die Härte von Wolfram und die Bindekraft von Kobalt am besten widerspiegeln, und bringen sie zu Ihnen. Wir respektieren das Gleichgewicht der Natur in unseren Lieferprozessen; wir sind stolz darauf, diese Kraft, die die Industrie benötigt, mit Umweltbewusstsein und Schweizer Qualitätsstandards anzubieten.",
        about_title: "&Uuml;ber Uns", about_text: "HM Carbide Swiss GmbH ist Ihr zuverlässiger Partner.", about_btn: "MEHR ERFAHREN",
        p1: "Hartmetallstab Voll", p2: "Stab mit Kühlkanal", p3: "Gekürzter Stab", 
        prod_subtitle: "Hochleistungs-Hartmetallstäbe",
        tech_title: "Technische Daten", th_grain: "Korngröße", th_density: "Dichte", th_hard: "Härte", th_trs: "Biegefestigkeit", search_ph: "Dimension suchen (z.B. 12x330)...",
        swiss_title: "SCHWEIZER QUALITÄT", swiss_desc: "Original Qualität",
        contact_info_title: "Kontaktinformationen", form_title: "Nachricht Senden", form_btn: "SENDEN", ph_name: "Name", ph_email: "E-Mail", ph_message: "Ihre Nachricht...",
        about_content: `<h3>Die Kraft der Erfahrung, die Sicherheit von HM Carbide</h3><p>Dank unserer jahrelangen Erfahrung in der Zerspanungs- und Hartmetallindustrie kennen wir die Bedürfnisse der Fertigungswelt sehr genau. HM Carbide Swiss GmbH wurde gegründet, um dieses Wissen mit Schweizer Produktionsqualität zu verbinden und unseren Kunden die genauesten Rohstofflösungen anzubieten.</p><p>Mit unseren in der Schweiz ansässigen Operationen liefern wir nach europäischen Standards hergestellte Hartmetallstäbe zu wettbewerbsfähigen Bedingungen und mit zuverlässigem Lieferkettenmanagement an unsere Geschäftspartner. Unser Ziel ist es, die Stillstandzeiten in den Produktionslinien unserer Kunden zu minimieren und die Werkzeugstandzeiten zu maximieren.</p><p>Mit unserer Erfahrung aus der Vergangenheit und unserer Vision für die Zukunft sind wir als HM Carbide Swiss GmbH hier, um Ihrem Geschäft einen Mehrwert zu bieten.</p>`,
        alert_success: "Ihre Nachricht wurde erfolgreich gesendet!", alert_error: "Fehler beim Senden der Nachricht."
    },
    en: { 
        nav_home: "Home", nav_about: "About Us", nav_products: "Products", nav_certs: "Certificates", nav_contact: "Contact",
        nav_quick: "Quick Links", footer_desc: "Your reliable partner for carbide products.",
        hero_title: "SWISS DISCIPLINE, MAXIMUM DURABILITY", hero_sub: "SWISS PRECISION FOR THE WORLD", hero_btn_contact: "CONTACT US",
        nat_title: "Tungsten, Carbon, Cobalt... Our Essence is Nature.", nat_sub: "Nature's strongest ores with Swiss precision.", nat_desc: "The unique durability of carbide rods stems from the power of elements from deep within the earth. As HM Carbide, we carefully select products that best reflect the hardness of tungsten and the binding power of cobalt, bringing them to you. We respect nature's balance in our supply processes; we are proud to offer this strength required by the industry with environmental awareness and Swiss quality standards.",
        about_title: "About Us", about_text: "Your reliable partner for high-quality carbide products.", about_btn: "LEARN MORE",
        p1: "Solid Carbide Rod", p2: "Rod with Coolant", p3: "Cut-to-Length Rod", 
        prod_subtitle: "High Performance Carbide Rods",
        tech_title: "Technical Specs", th_grain: "Grain Size", th_density: "Density", th_hard: "Hardness", th_trs: "TRS", search_ph: "Search dimension (e.g. 12x330)...",
        swiss_title: "SWISS QUALITY", swiss_desc: "Original Quality",
        contact_info_title: "Contact Info", form_title: "Send Message", form_btn: "SEND", ph_name: "Name", ph_email: "Email", ph_message: "Your Message...",
        about_content: `<h3>The Power of Experience, The Assurance of HM Carbide</h3><p>With years of experience in the machining and carbide industry, we know the needs of the manufacturing world very well. HM Carbide Swiss GmbH was founded to combine this knowledge with Swiss production quality to offer our customers the most accurate raw material solutions.</p><p>With our Swiss-based operations, we deliver carbide rods produced to European standards to our business partners with competitive conditions and reliable supply chain management. Our goal is to minimize downtime in our customers' production lines and maximize tool life.</p><p>As HM Carbide Swiss GmbH, we are here to add value to your business.</p>`,
        alert_success: "Your message has been sent successfully!", alert_error: "Error sending message."
    },
    tr: { 
        nav_home: "Anasayfa", nav_about: "Hakkımızda", nav_products: "Ürünlerimiz", nav_certs: "Sertifikalar", nav_contact: "İletişim",
        nav_quick: "Hızlı Linkler", footer_desc: "Aşınmaya ve basınca dayanıklı karbür ürünler için güvenilir ortağınız.",
        hero_title: "İSVİÇRE DİSİPLİNİ, MAKSİMUM DAYANIKLILIK", hero_sub: "DÜNYA İÇİN İSVİÇRE HASSASİYETİ", hero_btn_contact: "İLETİŞİME GEÇİN",
        nat_title: "Tungsten, Karbon, Kobalt... Özümüz Doğa.", nat_sub: "Doğanın en güçlü cevherlerini sunuyoruz.", nat_desc: "Karbür çubukların eşsiz dayanıklılığı, yerin derinliklerinden gelen elementlerin gücünden doğar. HM Carbide olarak, tungstenin sertliğini ve kobaltın bağlayıcı gücünü en iyi yansıtan ürünleri özenle seçiyor ve size ulaştırıyoruz. Tedarik süreçlerimizde doğanın dengesine saygı duyuyor; endüstrinin ihtiyaç duyduğu bu gücü, çevre bilinci ve İsviçre kalite standartlarıyla sunmaktan gurur duyuyoruz.",
        about_title: "Hakkımızda", about_text: "Yüksek kaliteli karbür ürünleri için güvenilir ortağınız.", about_btn: "DAHA FAZLA",
        p1: "Dolu Karbür Çubuk", p2: "Soğutma Kanallı Çubuk", p3: "Kesilmiş Çubuk",
        prod_subtitle: "Yüksek Performanslı Karbür Çubuklar",
        tech_title: "Teknik Özellikler", th_grain: "Tane Boyutu", th_density: "Yoğunluk", th_hard: "Sertlik", th_trs: "Kırılma Dayanımı", search_ph: "Ölçü ara (örn. 12x330)...",
        swiss_title: "İSVİÇRE KALİTESİ", swiss_desc: "ORİJİNAL KALİTE",
        contact_info_title: "İletişim Bilgileri", form_title: "Mesaj Gönderin", form_btn: "GÖNDER", ph_name: "Adınız", ph_email: "E-Posta", ph_message: "Mesajınız...",
        about_content: `<h3>Tecrübenin Gücü, HM Carbide Güvencesi</h3><p>Talaşlı imalat ve karbür endüstrisindeki yıllara dayanan tecrübemizle, üretim dünyasının ihtiyaçlarını çok iyi biliyoruz. HM Carbide Swiss GmbH, bu bilgi birikimini İsviçre’nin üretim kalitesiyle harmanlayarak müşterilerine en doğru hammadde çözümlerini sunmak amacıyla kurulmuştur.</p><p>İsviçre merkezli operasyonlarımızla, Avrupa standartlarında üretilen karbür çubukları, rekabetçi koşullar ve güvenilir tedarik zinciri yönetimiyle iş ortaklarımıza ulaştırıyoruz. Amacımız; müşterilerimizin üretim hattındaki duruş sürelerini en aza indirmek ve takım ömürlerini maksimize etmektir.</p><p>Geçmişten gelen deneyimimiz ve geleceğe dönük vizyonumuzla, HM Carbide Swiss GmbH olarak işinize değer katmak için buradayız.</p>`,
        alert_success: "Mesajınız başarıyla gönderildi!", alert_error: "Bir hata oluştu, lütfen tekrar deneyin."
    }
};

function changeLanguage(lang) {
    localStorage.setItem('hm_lang', lang);
    const select = document.getElementById('langSel');
    if(select) select.value = lang;

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

    const contentArea = document.getElementById('contentArea');
    if(contentArea && translations[lang].about_content) contentArea.innerHTML = translations[lang].about_content;
}

const d1 = []; for (let i = 1; i <= 30; i++) { d1.push(i + " x 330"); } d1.push("32 x 330");
const d2_detailed = [{ dim: "4 x 330", id: "0.5", dist: "1.6" }, { dim: "6 x 330", id: "1.0", dist: "2.4" }, { dim: "8 x 330", id: "1.0", dist: "2.6" }, { dim: "10 x 330", id: "1.0", dist: "2.5" }, { dim: "12 x 330", id: "1.2", dist: "3.5" }, { dim: "14 x 330", id: "1.5", dist: "5.0" }, { dim: "16 x 330", id: "1.0", dist: "5.0" }, { dim: "18 x 330", id: "2.0", dist: "6.0" }, { dim: "20 x 330", id: "2.0", dist: "6.0" }, { dim: "25 x 330", id: "2.0", dist: "7.5" }];
const d3 = ["3 x 40", "4 x 50", "6 x 50", "8 x 63", "10 x 72", "12 x 83", "16 x 92", "20 x 104"];

function fillProducts() {
    const t1 = document.querySelector('#t1 tbody');
    const t2 = document.querySelector('#t2 tbody');
    const t3 = document.querySelector('#t3 tbody');
    if(t1) t1.innerHTML = d1.map(x => `<tr><td>ø ${x} mm</td></tr>`).join('');
    if(t2) t2.innerHTML = d2_detailed.map(item => `<tr><td>${item.dim}</td><td>${item.id}</td><td>${item.dist}</td></tr>`).join('');
    if(t3) t3.innerHTML = d3.map(x => `<tr><td>ø ${x} mm</td></tr>`).join('');
}

function filterProducts() {
    const input = document.getElementById('productSearch').value.toLowerCase().replace(/\s+/g, '');
    ['t1', 't2', 't3'].forEach(id => {
        const table = document.getElementById(id);
        if(!table) return;
        const rows = table.querySelector('tbody').getElementsByTagName('tr');
        let hasVisible = false;
        for(let i=0; i<rows.length; i++){
            const txt = rows[i].textContent.toLowerCase().replace(/\s+/g, '');
            if(txt.includes(input)) { rows[i].style.display = ""; hasVisible = true; }
            else rows[i].style.display = "none";
        }
        table.closest('.card').style.display = hasVisible ? "" : "none";
    });
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
    // Eğer form varsa VE emailjs yüklüyse çalıştır
    if (contactForm && typeof emailjs !== 'undefined') {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerText;
            btn.innerText = "Senden..."; 

            const serviceID = "gorrxcaveman@gmail.com"; 
            const templateID = "template_u11karb";

            // GÖNDERME ANINDAKİ DİLİ AL (DÜZELTME BURADA YAPILDI)
            const currentLang = localStorage.getItem('hm_lang') || 'de';

            emailjs.sendForm(serviceID, templateID, this)
                .then(function() {
                    alert(translations[currentLang].alert_success); // ŞİMDİ DOĞRU DİLDE GELECEK
                    btn.innerText = originalText;
                    contactForm.reset();
                }, function(error) {
                    alert(translations[currentLang].alert_error + "\n" + JSON.stringify(error));
                    btn.innerText = originalText;
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
