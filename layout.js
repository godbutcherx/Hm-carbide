// =====================================================================
// HM Carbide — ortak header, footer, dil menüsü, cookie banner
// Logo varyantı: 'a' (yazı + İsviçre işareti), 'b' (HM monogram), 'c' (çubuk kesiti)
// =====================================================================
const LOGO_VARIANT = 'a';

// Google Analytics: etiket her sayfanın <head> bölümünde (G-K6D874YGSX, Consent Mode v2).
// Analiz çerezleri yalnızca ziyaretçi onay verince açılır (setConsent).

const LANG_ORDER = ['de', 'en', 'tr'];
const LANG_FLAGS = { de: '🇩🇪', en: '🇬🇧', tr: '🇹🇷' };
const LANG_NAMES = { de: 'Deutsch', en: 'English', tr: 'Türkçe' };

function logoMarkup(variant) {
    const cross = '<svg class="wm-cross" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="3"/><path d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z" fill="#fff"/></svg>';
    if (variant === 'b') {
        return `<span class="wordmark wordmark--b"><span class="wm-mono">HM</span><span class="wm-stack"><span class="wm-name">Carbide</span><span class="wm-sub">Swiss GmbH</span></span></span>`;
    }
    if (variant === 'c') {
        return `<span class="wordmark wordmark--c"><svg class="wm-rod" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18"/><circle cx="20" cy="20" r="13.5"/><circle cx="14.5" cy="20" r="2.2"/><circle cx="25.5" cy="20" r="2.2"/></svg><span class="wm-stack"><span class="wm-name">HM Carbide</span><span class="wm-sub">Swiss GmbH</span></span></span>`;
    }
    return `<span class="wordmark wordmark--a"><span class="wm-name">HM Carbide</span><span class="wm-sub">${cross}Swiss GmbH</span></span>`;
}

function langMenuMarkup(id) {
    const items = LANG_ORDER.map(l =>
        `<li><button type="button" role="menuitemradio" data-lang="${l}" onclick="selectLang('${l}')"><span class="lang-flag">${LANG_FLAGS[l]}</span>${LANG_NAMES[l]}</button></li>`
    ).join('');
    return `
        <div class="lang" id="${id}">
            <button type="button" class="lang-btn" aria-haspopup="true" aria-expanded="false" onclick="toggleLangMenu(event, '${id}')">
                <span class="lang-flag" data-lang-flag>🇩🇪</span><span class="lang-code" data-lang-code>DE</span>
                <svg class="lang-chev" viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <ul class="lang-menu" role="menu">${items}</ul>
        </div>`;
}

// --- HEADER ---
function loadHeader() {
    const file = (window.location.pathname.split('/').pop() || 'index.html');
    const cur = f => (file === f || (f === 'index.html' && file === '')) ? ' aria-current="page"' : '';
    const headerHTML = `
    <a class="skip-link" href="#main" data-i18n="skip_link">Zum Inhalt springen</a>
    <header id="main-header" class="site-header">
        <div class="header-inner">
            <a href="index.html" class="logo-container" aria-label="HM Carbide Swiss GmbH">${logoMarkup(LOGO_VARIANT)}</a>
            <nav id="navbar" aria-label="Hauptnavigation">
                <ul>
                    <li><a href="index.html"${cur('index.html')} data-i18n="nav_home">Startseite</a></li>
                    <li><a href="products.html"${cur('products.html')} data-i18n="nav_products">Produkte</a></li>
                    <li><a href="about.html"${cur('about.html')} data-i18n="nav_about">Über uns</a></li>
                    <li><a href="certificates.html"${cur('certificates.html')} data-i18n="nav_certs">Zertifikate</a></li>
                    <li><a href="contact.html"${cur('contact.html')} data-i18n="nav_contact">Kontakt</a></li>
                </ul>
            </nav>
            <div class="header-right">
                ${langMenuMarkup('langMenu')}
                <a href="contact.html" class="btn btn--sm header-cta" data-i18n="home_cta">Anfrage senden</a>
                <button type="button" class="menu-toggle" aria-label="Menü" aria-expanded="false" aria-controls="navbar" onclick="toggleMenu()">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </header>`;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// --- FOOTER ---
function loadFooter() {
    const year = new Date().getFullYear();
    const footerHTML = `
    <a href="https://wa.me/41762909193" class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </a>
    <footer class="site-footer">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="index.html" class="logo-container" aria-label="HM Carbide Swiss GmbH">${logoMarkup(LOGO_VARIANT)}</a>
                <p data-i18n="footer_desc">Ihr zuverlässiger Partner für Hartmetallstäbe.</p>
            </div>
            <div>
                <h2 class="footer-h" data-i18n="nav_quick">Schnellzugriff</h2>
                <ul class="footer-links">
                    <li><a href="products.html" data-i18n="nav_products">Produkte</a></li>
                    <li><a href="about.html" data-i18n="nav_about">Über uns</a></li>
                    <li><a href="certificates.html" data-i18n="nav_certs">Zertifikate</a></li>
                    <li><a href="certificates.html#downloads" data-i18n="dl_title">Downloads</a></li>
                    <li><a href="contact.html" data-i18n="nav_contact">Kontakt</a></li>
                </ul>
            </div>
            <div>
                <h2 class="footer-h" data-i18n="nav_contact">Kontakt</h2>
                <address class="footer-address">
                    HM Carbide Swiss GmbH<br>
                    Müligässli 1, 8598 Bottighofen<br>
                    <span data-i18n="country_ch">Schweiz</span><br>
                    <a href="tel:+41762909193">+41 76 290 91 93</a><br>
                    <a href="mailto:info@hmcarbide.ch">info@hmcarbide.ch</a>
                </address>
                <a href="https://www.linkedin.com/company/hmcarbideswiss/" target="_blank" rel="noopener" class="footer-linkedin">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span data-i18n="follow_linkedin">Folgen Sie uns auf LinkedIn</span>
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            <span>© ${year} HM Carbide Swiss GmbH</span>
            <span>UID CHE-477.630.623 MWST</span>
            <span class="footer-legal">
                <a href="impressum.html" data-i18n="nav_impressum">Impressum</a>
                <a href="privacy.html" data-i18n="nav_privacy">Datenschutz</a>
                <button type="button" class="footer-cookie-btn" onclick="openConsent()" data-i18n="cookie_settings">Cookie-Einstellungen</button>
            </span>
        </div>
    </footer>
    <div class="cookie-banner" id="cookieBanner" role="dialog" aria-live="polite" aria-labelledby="cookieText">
        <p id="cookieText"><span data-i18n="cookie_text">Wir verwenden Cookies für anonyme Nutzungsstatistiken (Google Analytics), nur mit Ihrer Einwilligung. Details in unserer</span> <a href="privacy.html" data-i18n="cookie_link">Datenschutzerklärung</a>.</p>
        <div class="cookie-actions">
            <button type="button" class="btn btn--sm" onclick="setConsent('granted')" data-i18n="cookie_accept">Akzeptieren</button>
            <button type="button" class="btn btn--sm btn--ghost-light" onclick="setConsent('denied')" data-i18n="cookie_decline">Ablehnen</button>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// --- DİL MENÜSÜ ---
function refreshLangPeers() {
    const lang = localStorage.getItem('hm_lang') || 'de';
    document.querySelectorAll('[data-lang-flag]').forEach(el => el.textContent = LANG_FLAGS[lang] || LANG_FLAGS.de);
    document.querySelectorAll('[data-lang-code]').forEach(el => el.textContent = lang.toUpperCase());
    document.querySelectorAll('.lang-menu button').forEach(b => {
        const on = b.dataset.lang === lang;
        b.classList.toggle('active', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
    });
}
function refreshMobileActiveStates() { refreshLangPeers(); closeLangMenus(); }

function toggleLangMenu(e, id) {
    if (e) e.stopPropagation();
    const box = document.getElementById(id);
    if (!box) return;
    const open = !box.classList.contains('open');
    closeLangMenus();
    box.classList.toggle('open', open);
    const btn = box.querySelector('.lang-btn');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeLangMenus() {
    document.querySelectorAll('.lang.open').forEach(b => {
        b.classList.remove('open');
        const btn = b.querySelector('.lang-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });
}
function selectLang(lang) {
    changeLanguage(lang);
    refreshLangPeers();
    closeLangMenus();
}
document.addEventListener('click', e => { if (!e.target.closest('.lang')) closeLangMenus(); });
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeLangMenus();
        const nav = document.getElementById('navbar');
        if (nav && nav.classList.contains('active')) toggleMenu();
    }
});

// --- MOBİL MENÜ ---
function toggleMenu() {
    const nav = document.getElementById('navbar');
    const btn = document.querySelector('.menu-toggle');
    if (!nav) return;
    const open = !nav.classList.contains('active');
    nav.classList.toggle('active', open);
    document.body.classList.toggle('nav-open', open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// --- ÇEREZ ONAYI + GOOGLE ANALYTICS ---
function getConsent() { try { return localStorage.getItem('hmc_consent'); } catch (e) { return null; } }
function setConsent(val) {
    try { localStorage.setItem('hmc_consent', val); localStorage.removeItem('hmc_cookie'); } catch (e) {}
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.remove('show');
    if (typeof gtag === 'function') gtag('consent', 'update', { analytics_storage: val === 'granted' ? 'granted' : 'denied' });
}
function openConsent() {
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.add('show');
}
function initCookie() {
    const c = getConsent();
    if (c === 'granted' || c === 'denied') return;
    setTimeout(openConsent, 1200);
}

// --- İNDİRİLEBİLİR DOSYALAR ---
// data-optional-file taşıyan bağlantılar: dosya sunucuda yoksa "auf Anfrage" durumuna geçer.
function checkOptionalFiles() {
    document.querySelectorAll('a[data-optional-file]').forEach(a => {
        fetch(a.getAttribute('href'), { method: 'HEAD' })
            .then(r => { if (!r.ok) throw 0; a.classList.add('is-available'); })
            .catch(() => {
                a.classList.add('is-missing');
                a.setAttribute('href', 'contact.html?p=' + (a.dataset.optionalFile || ''));
                a.removeAttribute('download');
                const lbl = a.querySelector('[data-file-state]');
                if (lbl) { lbl.setAttribute('data-i18n', 'dl_request'); const l = localStorage.getItem('hm_lang') || 'de'; if (typeof translations !== 'undefined' && translations[l]) lbl.textContent = translations[l].dl_request; }
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    try { localStorage.removeItem('hmc_theme'); } catch (e) {}
    loadHeader();
    loadFooter();
    refreshLangPeers();
    initCookie();
    checkOptionalFiles();
});
