// --- DİL ÇEVİRİLERİ ---
const translations = {
    de: { 
        nav_home: "Startseite", nav_about: "Über Uns", nav_products: "Produkte", nav_certs: "Zertifikate", nav_contact: "Kontakt",
        nav_quick: "Schnellzugriff", social_label: "Soziale Medien", footer_desc: "Ihr zuverlässiger Partner für verschleiß- und druckfeste Hartmetallprodukte. Schweizer Präzision für die Welt.",
        hero_title: "SCHWEIZER DISZIPLIN, MAXIMALE BESTÄNDIGKEIT", hero_sub: "PRÄZISION AUS DER SCHWEIZ FÜR DIE WELT", hero_btn_contact: "KONTAKT AUFNEHMEN",
        nat_title: "Tungsten, Karbon, Kobalt... Unser Wesen ist Natur.", nat_sub: "Wir bieten die stärksten Erze der Natur mit Schweizer Präzision.", 
        nat_desc: "Die einzigartige Haltbarkeit von Hartmetallstäben entsteht aus der Kraft der Elemente aus den Tiefen der Erde. Wir als HM Carbide wählen sorgfältig Produkte aus, die die Härte von Wolfram und die Bindekraft von Kobalt am besten widerspiegeln, und bringen sie zu Ihnen. Wir respektieren das Gleichgewicht der Natur in unseren Lieferprozessen; wir sind stolz darauf, diese Kraft, die die Industrie benötigt, mit Umweltbewusstsein und Schweizer Qualitätsstandards anzubieten.",
        about_title: "Über Uns", about_text: "HM Carbide Swiss GmbH ist Ihr zuverlässiger Partner für hochwertige Hartmetallprodukte.", about_btn: "MEHR ERFAHREN",
        contact_info_title: "Kontaktinformationen", form_title: "Nachricht Senden", form_btn: "SENDEN", ph_name: "Name", ph_email: "E-Mail Adresse", ph_message: "Ihre Nachricht...",
        p1: "Hartmetallstab Voll", p2: "Stab mit Kühlkanal", p3: "Gekürzter Stab", 
        tech_title: "Technische Daten", th_grain: "Korngröße (μm)", th_density: "Dichte (g/cm³)", th_hard: "Härte (HRA)", th_trs: "Biegefestigkeit (kgf/mm²)", search_ph: "Dimension suchen (z.B. 12x330)...",
        swiss_title: "SCHWEIZER QUALITÄT", swiss_desc: "Original Qualität",
        about_content: "<h3>Die Kraft der Erfahrung, die Sicherheit von HM Carbide</h3><p>Dank unserer jahrelangen Erfahrung in der Zerspanungs- und Hartmetallindustrie kennen wir die Bedürfnisse der Fertigungswelt sehr genau. HM Carbide Swiss GmbH wurde gegründet, um dieses Wissen mit Schweizer Produktionsqualität zu verbinden und unseren Kunden die genauesten Rohstofflösungen anzubieten.</p><p>Mit unseren in der Schweiz ansässigen Operationen liefern wir nach europäischen Standards hergestellte Hartmetallstäbe zu wettbewerbsfähigen Bedingungen und mit zuverlässigem Lieferkettenmanagement an unsere Geschäftspartner. Unser Ziel ist es, die Stillstandzeiten in den Produktionslinien unserer Kunden zu minimieren und die Werkzeugstandzeiten zu maximieren.</p><p>Mit unserer Erfahrung aus der Vergangenheit und unserer Vision für die Zukunft sind wir als HM Carbide Swiss GmbH hier, um Ihrem Geschäft einen Mehrwert zu bieten.</p>"
    },
    en: { 
        nav_home: "Home", nav_about: "About Us", nav_products: "Products", nav_certs: "Certificates", nav_contact: "Contact",
        nav_quick: "Quick Links", social_label: "Social Media", footer_desc: "Your reliable partner for wear-resistant and pressure-resistant carbide products. Swiss precision for the world.",
        hero_title: "SWISS DISCIPLINE, MAXIMUM DURABILITY", hero_sub: "SWISS PRECISION FOR THE WORLD", hero_btn_contact: "CONTACT US",
        nat_title: "Tungsten, Carbon, Cobalt... Our Essence is Nature.", nat_sub: "We offer nature's strongest ores with Swiss precision.", 
        nat_desc: "The unique durability of carbide rods stems from the power of elements from deep within the earth. As HM Carbide, we carefully select products that best reflect the hardness of tungsten and the binding power of cobalt, bringing them to you. We respect nature's balance in our supply processes; we are proud to offer this strength required by the industry with environmental awareness and Swiss quality standards.",
        about_title: "About Us", about_text: "HM Carbide Swiss GmbH is your reliable partner for high-quality carbide products.", about_btn: "LEARN MORE",
        contact_info_title: "Contact Information", form_title: "Send Message", form_btn: "SEND", ph_name: "Name", ph_email: "Email Address", ph_message: "Your Message...",
        p1: "Solid Carbide Rod", p2: "Rod with Coolant", p3: "Cut-to-Length Rod",
        tech_title: "Technical Specifications", th_grain: "Grain Size (μm)", th_density: "Density (g/cm³)", th_hard: "Hardness (HRA)", th_trs: "TRS (kgf/mm²)", search_ph: "Search dimension (e.g. 12x330)...",
        swiss_title: "SWISS QUALITY", swiss_desc: "Original Quality",
        about_content: "<h3>The Power of Experience, The Assurance of HM Carbide</h3><p>With years of experience in the machining and carbide industry, we know the needs of the manufacturing world very well. HM Carbide Swiss GmbH was founded to combine this knowledge with Swiss production quality to offer our customers the most accurate raw material solutions.</p><p>With our Swiss-based operations, we deliver carbide rods produced to European standards to our business partners with competitive conditions and reliable supply chain management. Our goal is to minimize downtime in our customers' production lines and maximize tool life.</p><p>With our experience from the past and our vision for the future, as HM Carbide Swiss GmbH, we are here to add value to your business.</p>"
    },
    tr: { 
        nav_home: "Anasayfa", nav_about: "Hakkımızda", nav_products: "Ürünlerimiz", nav_certs: "Sertifikalar", nav_contact: "İletişim",
        nav_quick: "Hızlı Linkler", social_label: "Sosyal Medya", footer_desc: "Aşınmaya ve basınca dayanıklı karbür ürünler için güvenilir ortağınız. Dünya için İsviçre hassasiyeti.",
        hero_title: "İSVİÇRE DİSİPLİNİ, MAKSİMUM DAYANIKLILIK", hero_sub: "DÜNYA İÇİN İSVİÇRE HASSASİYETİ", hero_btn_contact: "İLETİŞİME GEÇİN",
        nat_title: "Tungsten, Karbon, Kobalt... Özümüz Doğa.", nat_sub: "Doğanın en güçlü cevherlerini İsviçre hassasiyetiyle sunuyoruz.", 
        nat_desc: "Karbür çubukların eşsiz dayanıklılığı, yerin derinliklerinden gelen elementlerin gücünden doğar. HM Carbide olarak, tungstenin sertliğini ve kobaltın bağlayıcı gücünü en iyi yansıtan ürünleri özenle seçiyor ve size ulaştırıyoruz. Tedarik süreçlerimizde doğanın dengesine saygı duyuyor; endüstrinin ihtiyaç duyduğu bu gücü, çevre bilinci ve İsviçre kalite standartlarıyla sunmaktan gurur duyuyoruz.",
        about_title: "Hakkımızda", about_text: "HM Carbide Swiss GmbH, yüksek kaliteli karbür ürünleri için güvenilir ortağınızdır.", about_btn: "DAHA FAZLA",
        contact_info_title: "İletişim Bilgileri", form_title: "Mesaj Gönderin", form_btn: "GÖNDER", ph_name: "Adınız", ph_email: "E-Posta Adresi", ph_message: "Mesajınız...",
        p1: "Dolu Karbür Çubuk", p2: "Soğutma Kanallı Çubuk", p3: "Kesilmiş Çubuk",
        tech_title: "Teknik Özellikler", th_grain: "Tane Boyutu (μm)", th_density: "Yoğunluk (g/cm³)", th_hard: "Sertlik (HRA)", th_trs: "Kırılma Dayanımı (kgf/mm²)", search_ph: "Ölçü ara (örn. 12x330)...",
        swiss_title: "İSVİÇRE KALİTESİ", swiss_desc: "ORİJİNAL KALİTE",
        about_content: "<h3>Tecrübenin Gücü, HM Carbide Güvencesi</h3><p>Talaşlı imalat ve karbür endüstrisindeki yıllara dayanan tecrübemizle, üretim dünyasının ihtiyaçlarını çok iyi biliyoruz. HM Carbide Swiss GmbH, bu bilgi birikimini İsviçre’nin üretim kalitesiyle harmanlayarak müşterilerine en doğru hammadde çözümlerini sunmak amacıyla kurulmuştur.</p><p>İsviçre merkezli operasyonlarımızla, Avrupa standartlarında üretilen karbür çubukları, rekabetçi koşullar ve güvenilir tedarik zinciri yönetimiyle iş ortaklarımıza ulaştırıyoruz. Amacımız; müşterilerimizin üretim hattındaki duruş sürelerini en aza indirmek ve takım ömürlerini maksimize etmektir.</p><p>Geçmişten gelen deneyimimiz ve geleceğe dönük vizyonumuzla, HM Carbide Swiss GmbH olarak işinize değer katmak için buradayız.</p>"
    }
};

// --- DİL DEĞİŞTİRME FONKSİYONU ---
function changeLanguage(lang) {
    localStorage.setItem('hm_lang', lang);
    const select = document.getElementById('langSel');
    if(select) select.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(e => {
        const key = e.getAttribute('data-i18n');
        if(translations[lang][key]) e.innerText = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(e => {
        const key = e.getAttribute('data-i18n-ph');
        if(translations[lang][key]) e.placeholder = translations[lang][key];
    });
    const contentArea = document.getElementById('contentArea');
    if(contentArea) contentArea.innerHTML = translations[lang].about_content;
}

// --- ÜRÜN TABLOLARI ---
const d1 = []; for (let i = 1; i <= 30; i++) { d1.push(i + " x 330"); } d1.push("32 x 330");
const d2_detailed = [
    { dim: "4 x 330", id: "0.5", dist: "1.6" }, { dim: "4 x 330", id: "0.8", dist: "1.7" },
    { dim: "6 x 330", id: "1.0", dist: "2.4" }, { dim: "6 x 330", id: "1.0", dist: "3.0" },
    { dim: "8 x 330", id: "1.0", dist: "2.6" }, { dim: "8 x 330", id: "1.0", dist: "3.9" },
    { dim: "10 x 330", id: "1.0", dist: "2.5" }, { dim: "10 x 330", id: "1.4", dist: "4.9" },
    { dim: "12 x 330", id: "1.2", dist: "3.5" }, { dim: "12 x 330", id: "1.8", dist: "5.0" },
    { dim: "14 x 330", id: "1.5", dist: "5.0" }, { dim: "14 x 330", id: "1.8", dist: "5.8" },
    { dim: "16 x 330", id: "1.0", dist: "5.0" }, { dim: "16 x 330", id: "2.0", dist: "7.8" },
    { dim: "18 x 330", id: "2.0", dist: "6.0" }, { dim: "18 x 330", id: "2.0", dist: "8.8" },
    { dim: "20 x 330", id: "2.0", dist: "6.0" }, { dim: "20 x 330", id: "2.5", dist: "9.8" },
    { dim: "22 x 330", id: "2.0", dist: "6.0" }, { dim: "22 x 330", id: "2.5", dist: "10.8" },
    { dim: "23 x 330", id: "2.0", dist: "7.5" }, { dim: "24 x 330", id: "2.0", dist: "7.5" },
    { dim: "24 x 330", id: "3.0", dist: "11.8" }, { dim: "25 x 330", id: "2.0", dist: "7.5" }, { dim: "25 x 330", id: "3.0", dist: "11.8" }
];
const d3 = ["3 x 40", "3 x 50", "4 x 40", "4 x 50", "5 x 50", "6 x 50", "6 x 57", "6 x 60", "8 x 58", "8 x 63", "10 x 66", "10 x 72", "12 x 73", "12 x 83", "14 x 75", "14 x 83", "16 x 82", "16 x 92", "18 x 92", "20 x 104"];

function fillProducts() {
    const t1 = document.querySelector('#t1 tbody');
    const t2 = document.querySelector('#t2 tbody');
    const t3 = document.querySelector('#t3 tbody');

    if(t1) t1.innerHTML = d1.map(x => `<tr><td>ø ${x} mm</td></tr>`).join('');
    if(t2) t2.innerHTML = d2_detailed.map(item => `<tr><td>${item.dim}</td><td>${item.id}</td><td>${item.dist}</td></tr>`).join('');
    if(t3) t3.innerHTML = d3.map(x => `<tr><td>ø ${x} mm</td></tr>`).join('');
}

// --- FİLTRELEME ---
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

// --- INIT (BAŞLATMA) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dili Ayarla
    let lang = localStorage.getItem('hm_lang');
    if (!lang) {
        const browserLang = navigator.language || navigator.userLanguage;
        lang = browserLang.startsWith('tr') ? 'tr' : (browserLang.startsWith('en') ? 'en' : 'de');
    }
    changeLanguage(lang);
    
    // 2. Ürünleri Doldur
    fillProducts();
    
    // 3. Header Scroll
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if(header) {
            if (window.scrollY > 50) header.classList.add("scrolled");
            else header.classList.remove("scrolled");
        }
        reveal();
    });

    // 4. Slider Döngüsü (Sadece Anasayfa)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slideshow img');
    if(slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); 
    }
});

function toggleMenu() { document.getElementById('navbar').classList.toggle('active'); }

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(r => {
        if(r.getBoundingClientRect().top < window.innerHeight - 50) r.classList.add('active');
    });
}