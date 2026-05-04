// --- HEADER YÜKLEME ---
function loadHeader() {
    const path = window.location.pathname;
    const isHome = path.endsWith("index.html") || path.endsWith("/");
    const headerClass = isHome ? "" : "header-inner";

    const headerHTML = `
    <header id="main-header" class="${headerClass}">
        <a href="index.html" class="logo-container">
            <div class="logo-wrapper">
                <div class="logo-mask"></div>
                <img src="images/logo.jpg" alt="Logo" class="logo-img logo-main">
                <img src="images/gem9.png" alt="Alt Logo" class="logo-img logo-alt">
            </div>
            <div class="logo-text">
                <span class="brand-name">HM Carbide</span>
                <span class="brand-sub">Swiss GmbH</span>
            </div>
        </a>
        <nav id="navbar">
            <ul>
                <li><a href="index.html" data-i18n="nav_home">Startseite</a></li>
                <li><a href="about.html" data-i18n="nav_about">&Uuml;ber Uns</a></li>
                <li><a href="products.html" data-i18n="nav_products">Produkte</a></li>
                <li><a href="certificates.html" data-i18n="nav_certs">Zertifikate</a></li>
                <li><a href="contact.html" data-i18n="nav_contact">Kontakt</a></li>
            </ul>
        </nav>
        <div class="header-right">

            <!-- DIL SEÇİCİ — bayrak fan -->
            <div class="fan-selector" id="langFan">
                <div class="fan-active" id="langActive" onclick="toggleFan('langFan')">
                    <span class="fan-flag" id="activeLangFlag">🇩🇪</span>
                </div>
                <div class="fan-options" id="langOptions">
                    <button type="button" class="fan-option fan-lang-peer fan-lang-peer--left" data-lang="" onclick="selectLangFromPeer(this)" title="">&nbsp;</button>
                    <button type="button" class="fan-option fan-lang-peer fan-lang-peer--right" data-lang="" onclick="selectLangFromPeer(this)" title="">&nbsp;</button>
                </div>
            </div>

            <!-- TEMA SEÇİCİ — fan -->
            <div class="fan-selector" id="themeFan">
                <div class="fan-active" id="themeActive" onclick="toggleFan('themeFan')">
                    <span class="fan-theme-icon" id="activeThemeIcon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/><path d="M8 1.5 A6.5 6.5 0 0 1 8 14.5 Z" fill="currentColor"/><line x1="8" y1="1.5" x2="8" y2="14.5" stroke="currentColor" stroke-width="0.9"/></svg>
                    </span>
                </div>
                <div class="fan-options" id="themeOptions">
                    <button class="fan-option fan-option-theme" data-theme="dark" onclick="selectTheme('dark')" title="Dark">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" fill="currentColor" opacity="0.9"/></svg>
                    </button>
                    <button class="fan-option fan-option-theme" data-theme="light" onclick="selectTheme('light')" title="Light">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
                    </button>
                </div>
            </div>

            <div class="menu-toggle" onclick="toggleMenu()">☰</div>
        </div>
    </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
}

// --- FOOTER YÜKLEME ---
function loadFooter() {
    const footerHTML = `
    <a href="https://wa.me/41762909193" class="whatsapp-float" target="_blank">
        <svg style="width:35px; height:35px; fill:white;" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </a>
    <footer>
        <div class="footer-container">
            <div class="footer-col">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
                    <img src="images/logo.jpg" style="height:50px;border-radius:4px;">
                    <span style="color:white;font-weight:800;font-size:1.2rem;">HM CARBIDE<br><span style="color:var(--secondary);font-size:0.9rem;">SWISS GmbH</span></span>
                </div>
                <p data-i18n="footer_desc">Ihr zuverlässiger Partner für verschleiß- und druckfeste Hartmetallprodukte. Schweizer Präzision für die Welt.</p>
            </div>
            <div class="footer-col">
                <h4 data-i18n="nav_quick">Schnellzugriff</h4>
                <ul>
                    <li><a href="index.html" data-i18n="nav_home">Startseite</a></li>
                    <li><a href="products.html" data-i18n="nav_products">Produkte</a></li>
                    <li><a href="certificates.html" data-i18n="nav_certs">Zertifikate</a></li>
                    <li><a href="about.html" data-i18n="nav_about">&Uuml;ber Uns</a></li>
                    <li><a href="contact.html" data-i18n="nav_contact">Kontakt</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 data-i18n="nav_contact">Kontakt</h4>
                <div class="contact-row">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span>Romanshornerstrasse 122, 9322 Egnach</span>
                </div>
                <div class="contact-row">
                    <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    <a href="tel:+41762909193">+41 76 290 91 93</a>
                </div>
                <div class="contact-row">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <a href="mailto:info@hmcarbide.ch">info@hmcarbide.ch</a>
                </div>
                <a href="https://www.linkedin.com/company/hmcarbideswiss/" target="_blank" class="footer-linkedin">
                    <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    Follow on LinkedIn
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            <div>© 2026 HM Carbide Swiss GmbH. All Rights Reserved.</div>
            <div style="font-size:1rem;color:#ccc;font-weight:600;">UID: CHE-477.630.623 MWST</div>
            <div style="margin-top:10px;">
                <a href="privacy.html" style="color:#8a9099; font-size:0.8rem; text-decoration:underline; text-underline-offset:3px; transition:0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#8a9099'">Privacy Policy</a>
            </div>
        </div>
    </footer>

    <!-- COOKIE BANNER -->
    <div class="cookie-banner" id="cookieBanner">
        <div class="cookie-content">
            <div class="cookie-text">
                <p>This website uses cookies. By using this site, you agree to their use. All details can be found in our <a href="privacy.html" style="color:var(--secondary); text-decoration:underline; text-underline-offset:3px;">privacy policy.</a></p>
            </div>
            <div class="cookie-actions">
                <button class="cookie-btn cookie-accept" onclick="setCookie('accepted')">OK</button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

// --- TEMA SİSTEMİ ---
function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hmc_theme', theme);
    // icon SVG — statik kalır
}

function selectTheme(theme) {
    applyTheme(theme);
    closeFan('themeFan');
}

const LANG_PEER_ORDER = ['de', 'en', 'tr'];
const LANG_FLAGS = { de: '🇩🇪', en: '🇬🇧', tr: '🇹🇷' };

/** Aktif dil ortada; diğer iki dil doğrudan sol ve sağda (liste sırasına göre). */
function refreshLangPeers() {
    const lang = localStorage.getItem('hm_lang') || 'de';
    const others = LANG_PEER_ORDER.filter((c) => c !== lang);
    const langFan = document.getElementById('langFan');
    const af = document.getElementById('activeLangFlag');
    const leftBtn = document.querySelector('#langOptions .fan-lang-peer--left');
    const rightBtn = document.querySelector('#langOptions .fan-lang-peer--right');

    if (af) af.textContent = LANG_FLAGS[lang] || LANG_FLAGS.de;
    if (langFan) langFan.dataset.currentLang = lang;

    if (leftBtn && others[0]) {
        leftBtn.dataset.lang = others[0];
        leftBtn.textContent = LANG_FLAGS[others[0]];
        leftBtn.title = others[0].toUpperCase();
    }
    if (rightBtn && others[1]) {
        rightBtn.dataset.lang = others[1];
        rightBtn.textContent = LANG_FLAGS[others[1]];
        rightBtn.title = others[1].toUpperCase();
    }
}

function selectLang(lang) {
    changeLanguage(lang);
    localStorage.setItem('hm_lang', lang);
    refreshLangPeers();
    closeFan('langFan');
}

function selectLangFromPeer(btn) {
    const code = btn && btn.dataset.lang;
    if (code) selectLang(code);
}

function toggleFan(id) {
    const fan = document.getElementById(id);
    if (!fan) return;
    const isOpen = fan.classList.contains('open');
    // Tüm fanları kapat
    document.querySelectorAll('.fan-selector').forEach(f => f.classList.remove('open'));
    if (!isOpen) fan.classList.add('open');
}

function closeFan(id) {
    const fan = document.getElementById(id);
    if (fan) fan.classList.remove('open');
}

// Dışarı tıklayınca kapat
document.addEventListener('click', e => {
    if (!e.target.closest('.fan-selector')) {
        document.querySelectorAll('.fan-selector').forEach(f => f.classList.remove('open'));
    }
});

function initTheme() {
    const saved = localStorage.getItem('hmc_theme');
    let theme;
    if (saved) {
        theme = saved;
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme = prefersDark ? 'dark' : 'light';
    }
    applyTheme(theme);
}

function initLangFlag() {
    refreshLangPeers();
}

// --- COOKIE ---
function setCookie(val) {
    localStorage.setItem('hmc_cookie', val);
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.style.transform = 'translateY(100%)';
        banner.style.opacity = '0';
        setTimeout(() => banner.remove(), 400);
    }
}

function initCookie() {
    const consent = localStorage.getItem('hmc_cookie');
    if (!consent) {
        setTimeout(() => {
            const banner = document.getElementById('cookieBanner');
            if (banner) banner.classList.add('show');
        }, 1200);
    } else {
        const banner = document.getElementById('cookieBanner');
        if (banner) banner.remove();
    }
}

// Sayfa yüklenince
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    initTheme();
    initLangFlag();
    initCookie();
});
