// --- HEADER YÜKLEME ---
function loadHeader() {
    const headerHTML = `
    <header id="main-header">
        <a href="index.html" class="logo-container">
            <div class="logo-wrapper">
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
                <li><a href="about.html" data-i18n="nav_about">Über Uns</a></li>
                <li><a href="products.html" data-i18n="nav_products">Produkte</a></li>
                <li><a href="certificates.html" data-i18n="nav_certs">Zertifikate</a></li>
                <li><a href="contact.html" data-i18n="nav_contact">Kontakt</a></li>
            </ul>
        </nav>
        <div class="header-right">
            <div class="lang-switch">
                <select onchange="changeLanguage(this.value)" id="langSel">
                    <option value="de">DE</option>
                    <option value="en">EN</option>
                    <option value="tr">TR</option>
                </select>
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
        <svg style="width:35px; height:35px; fill:white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
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
                    <li><a href="about.html" data-i18n="nav_about">Über Uns</a></li>
                    <li><a href="contact.html" data-i18n="nav_contact">Kontakt</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 data-i18n="nav_contact">Kontakt</h4>
                <div class="contact-row">
                    <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span>Romanshornerstrasse 122, 9322 Egnach</span>
                </div>
                <div class="contact-row">
                    <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    <a href="tel:+41762909193">+41 76 290 91 93</a>
                </div>
                <div class="contact-row">
                    <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <a href="mailto:info@hmcarbide.ch">info@hmcarbide.ch</a>
                </div>
                <a href="https://www.linkedin.com/company/hmcarbideswiss/" target="_blank" class="footer-linkedin">
                    <svg style="width:16px; height:16px; fill:white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    Follow on LinkedIn
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            <div>© 2025 HM Carbide Swiss GmbH. All Rights Reserved.</div>
            <div style="font-size:1rem;color:#ccc;font-weight:600;">UID: CHE-477.630.623 MWST</div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

// Sayfa yüklenince Header ve Footer'ı getir
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    // Diğer scriptler (script.js) buradan sonra çalışacak
});