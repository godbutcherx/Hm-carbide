<?php include 'header.php'; ?>

    <div class="page-header-section">
        <h1 class="page-title reveal" data-i18n="nav_contact">KONTAKT</h1>
    </div>

    <div class="contact-wrap reveal">
        <div class="left-panel">
            <div class="info-box">
                <h3 style="margin-bottom:20px; color:var(--primary);" data-i18n="contact_info_title">Kontaktinformationen</h3>
                <div class="info-item"><p><strong>HM Carbide Swiss GmbH</strong></p><p>📍 Romanshornerstrasse 122, 9322 Egnach, Switzerland</p></div>
                <div class="info-item"><p>📞 <a href="tel:+41762909193" class="phone-link">+41 76 290 91 93</a></p></div>
                <div class="info-item"><p>✉️ <a href="mailto:info@hmcarbide.ch" style="color:#d93025;">info@hmcarbide.ch</a></p></div>
                <div class="info-item" style="border-bottom: none;">
                    <p style="margin-bottom: 5px; font-size: 0.9rem; color: #888;" data-i18n="social_label">Soziale Medien</p>
                    <a href="https://www.linkedin.com/company/hmcarbideswiss/" target="_blank" class="linkedin-link">
                        <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        HM Carbide Swiss GmbH
                    </a>
                </div>
            </div>
            <div class="map-box"><iframe src="https://maps.google.com/maps?q=Romanshornerstrasse%20122,%209322%20Egnach&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe></div>
        </div>
        
        <div class="form-box">
            <h2 style="color:#1a252f; margin-bottom:20px;" data-i18n="form_title">Nachricht Senden</h2>
            <form action="https://formspree.io/f/xqajeedj" method="POST" class="contact-form">
                <input type="text" name="name" placeholder="Name" required data-i18n-ph="ph_name">
                <input type="email" name="email" placeholder="E-Mail" required data-i18n-ph="ph_email">
                <textarea name="message" rows="5" placeholder="Ihre Nachricht..." required data-i18n-ph="ph_message"></textarea>
                <button type="submit" class="btn-submit" data-i18n="form_btn">SENDEN</button>
            </form>
        </div>
    </div>

<?php include 'footer.php'; ?>