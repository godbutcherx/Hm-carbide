// --- DİL ÇEVİRİLERİ (HTML Entity Kodları ile güvenli hale getirildi) ---
const translations = {
    de: { 
        nav_home: "Startseite", nav_about: "&Uuml;ber Uns", nav_products: "Produkte", nav_certs: "Zertifikate", nav_contact: "Kontakt",
        nav_quick: "Schnellzugriff", footer_desc: "Ihr zuverlässiger Partner für verschleiß- und druckfeste Hartmetallprodukte.",
        hero_title: "SCHWEIZER DISZIPLIN, MAXIMALE BESTÄNDIGKEIT", hero_sub: "PRÄZISION AUS DER SCHWEIZ FÜR DIE WELT", hero_btn_contact: "KONTAKT AUFNEHMEN",
        nat_title: "Tungsten, Karbon, Kobalt... Unser Wesen ist Natur.", nat_sub: "Wir bieten die stärksten Erze der Natur mit Schweizer Präzision.",
        about_title: "&Uuml;ber Uns", about_text: "HM Carbide Swiss GmbH ist Ihr zuverlässiger Partner.", about_btn: "MEHR ERFAHREN",
        p1: "Hartmetallstab Voll", p2: "Stab mit Kühlkanal", p3: "Gekürzter Stab", 
        tech_title: "Technische Daten", th_grain: "Korngröße", th_density: "Dichte", th_hard: "Härte", th_trs: "Biegefestigkeit",
        swiss_title: "SCHWEIZER QUALITÄT", swiss_desc: "Original Qualität",
        contact_info_title: "Kontaktinformationen", form_title: "Nachricht Senden", form_btn: "SENDEN", ph_name: "Name", ph_email: "E-Mail", ph_message: "Nachricht...",
        about_content: "<h3>Die Kraft der Erfahrung...</h3><p>Dank unserer jahrelangen Erfahrung...</p>"
    },
    en: { 
        nav_home: "Home", nav_about: "About Us", nav_products: "Products", nav_certs: "Certificates", nav_contact: "Contact",
        nav_quick: "Quick Links", footer_desc: "Your reliable partner for carbide products.",
        hero_title: "SWISS DISCIPLINE, MAXIMUM DURABILITY", hero_sub: "SWISS PRECISION FOR THE WORLD", hero_btn_contact: "CONTACT US",
        nat_title: "Our Essence is Nature.", nat_sub: "Nature's strongest ores with Swiss precision.",
        about_title: "About Us", about_text: "Your reliable partner for high-quality carbide products.", about_btn: "LEARN MORE",
        p1: "Solid Rod", p2: "Rod with Coolant", p3: "Cut-to-Length", 
        tech_title: "Technical Specs", th_grain: "Grain Size", th_density: "Density", th_hard: "Hardness", th_trs: "TRS",
        swiss_title: "SWISS QUALITY", swiss_desc: "Original Quality",
        contact_info_title: "Contact Info", form_title: "Send Message", form_btn: "SEND", ph_name: "Name", ph_email: "Email", ph_message: "Message...",
        about_content: "<h3>The Power of Experience...</h3><p>With years of experience...</p>"
    },
    tr: { 
        nav_home: "Anasayfa", 
        nav_about: "Hakk&#305;m&#305;zda", 
        nav_products: "&Uuml;r&uuml;nlerimiz", 
        nav_certs: "Sertifikalar", 
        nav_contact: "&#304;leti&#351;im",
        nav_quick: "H&#305;zl&#305; Linkler", 
        footer_desc: "A&#351;&#305;nmaya ve bas&#305;nca dayan&#305;kl&#305; karb&uuml;r &uuml;r&uuml;nler i&#231;in g&uuml;venilir orta&#287;&#305;n&#305;z.",
        hero_title: "&#304;SV&#304;&#199;RE D&#304;S&#304;PL&#304;N&#304;, MAKS&#304;MUM DAYANIKLILIK", 
        hero_sub: "D&Uuml;NYA &#304;&#199;&#304;N &#304;SV&#304;&#199;RE HASSAS&#304;YET&#304;", 
        hero_btn_contact: "&#304;LET&#304;&#350;&#304;ME GE&#199;&#304;N",
        nat_title: "Tungsten, Karbon, Kobalt... &Ouml;z&uuml;m&uuml;z Do&#287;a.", 
        nat_sub: "Do&#287;an&#305;n en g&uuml;&#231;l&uuml; cevherlerini sunuyoruz.",
        about_title: "Hakk&#305;m&#305;zda", about_text: "Y&uuml;ksek kaliteli karb&uuml;r &uuml;r&uuml;nleri i&#231;in g&uuml;venilir orta&#287;&#305;n&#305;z.", about_btn: "DAHA FAZLA",
        p1: "Dolu Karb&uuml;r &#199;ubuk", p2: "So&#287;utma Kanall&#305; &#199;ubuk", p3: "Kesilmi&#351; &#199;ubuk",
        tech_title: "Teknik &Ouml;zellikler", th_grain: "Tane Boyutu", th_density: "Yo&#287;unluk", th_hard: "Sertlik", th_trs: "K&#305;r&#305;lma Dayan&#305;m&#305;",
        swiss_title: "&#304;SV&#304;&#199;RE KAL&#304;TES&#304;", swiss_desc: "OR&#304;J&#304;NAL KAL&#304;TE",
        contact_info_title: "&#304;leti&#351;im Bilgileri", form_title: "Mesaj G&ouml;nderin", form_btn: "G&Ouml;NDER", ph_name: "Ad&#305;n&#305;z", ph_email: "E-Posta", ph_message: "Mesaj&#305;n&#305;z...",
        about_content: "<h3>Tecr&uuml;benin G&uuml;c&uuml;...</h3><p>Tala&#351;l&#305; imalat ve karb&uuml;r end&uuml;strisindeki...</p>"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('hm_lang', lang);
    const select = document.getElementById('langSel');
    if(select) select.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(e => {
        const key = e.getAttribute('data-i18n');
        if(translations[lang][key]) e.innerHTML = translations[lang][key]; // innerText yerine innerHTML
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(e => {
        const key = e.getAttribute('data-i18n-ph');
        if(translations[lang][key]) e.placeholder = translations[lang][key];
    });
    const contentArea = document.getElementById('contentArea');
    if(contentArea && translations[lang].about_content) contentArea.innerHTML = translations[lang].about_content;
}

// --- ÜRÜN TABLO VERİLERİ ---
const d1 = []; for (let i = 1; i <= 30; i++) { d1.push(i + " x 330"); } d1.push("32 x 330");
const d2_detailed = [
    { dim: "4 x 330", id: "0.5", dist: "1.6" }, { dim: "6 x 330", id: "1.0", dist: "2.4" },
    { dim: "8 x 330", id: "1.0", dist: "2.6" }, { dim: "10 x 330", id: "1.0", dist: "2.5" },
    { dim: "12 x 330", id: "1.2", dist: "3.5" }, { dim: "14 x 330", id: "1.5", dist: "5.0" },
    { dim: "16 x 330", id: "1.0", dist: "5.0" }, { dim: "18 x 330", id: "2.0", dist: "6.0" },
    { dim: "20 x 330", id: "2.0", dist: "6.0" }, { dim: "25 x 330", id: "2.0", dist: "7.5" }
];
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

// --- INIT (BAŞLATMA) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal'ı HEMEN çalıştır (Scroll beklemeden)
    setTimeout(reveal, 100); 

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
});

function toggleMenu() { document.getElementById('navbar').classList.toggle('active'); }

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(r => {
        var windowHeight = window.innerHeight;
        var elementTop = r.getBoundingClientRect().top;
        // Eğer element ekranın içindeyse veya ekranın biraz altındaysa göster
        if(elementTop < windowHeight + 50) { 
            r.classList.add('active');
        }
    });
}