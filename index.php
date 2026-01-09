<?php include 'header.php'; ?>

    <section class="hero">
        <div class="hero-slideshow">
            <img src="images/gem1.png" class="active" alt="Slide 1">
            <img src="images/gem2.png" alt="Slide 2">
            <img src="images/gem4.png" alt="Slide 3">
            <img src="images/gem5.png" alt="Slide 4">
            <img src="images/gem6.png" alt="Slide 5">
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 data-i18n="hero_title">SCHWEIZER DISZIPLIN, MAXIMALE BESTÄNDIGKEIT</h1>
            <p data-i18n="hero_sub">PRÄZISION AUS DER SCHWEIZ FÜR DIE WELT</p>
            <a href="contact.php" class="btn" data-i18n="hero_btn_contact">KONTAKT AUFNEHMEN</a>
        </div>
    </section>

    <section class="nature-section reveal" style="padding:100px 5%; background: linear-gradient(135deg, #141e26 0%, #1a252f 100%); color:white;">
        <div style="display:flex; align-items:center; gap:80px; max-width:1300px; margin:0 auto; flex-wrap:wrap;">
            <div style="flex:1; min-width:300px;">
                <img src="images/gem10.png" alt="Nature" style="width:100%; filter:drop-shadow(0 30px 60px rgba(0,0,0,0.4));">
            </div>
            <div style="flex:1; min-width:300px;">
                <h2 style="font-size:2.5rem; font-weight:800; margin-bottom:15px;" data-i18n="nat_title">Tungsten, Karbon, Kobalt... Unser Wesen ist Natur.</h2>
                <h4 style="color:var(--secondary); margin-bottom:30px;" data-i18n="nat_sub">Wir bieten die stärksten Erze der Natur mit Schweizer Präzision.</h4>
                <p style="line-height:1.8; opacity:0.9;" data-i18n="nat_desc">HM Carbide Text...</p>
            </div>
        </div>
    </section>

    <section class="about-preview reveal" style="padding:100px 5%; display:flex; align-items:center; gap:60px; background:white;">
        <div style="flex:1;">
            <h2 style="font-size:2.5rem; color:var(--primary); margin-bottom:20px;" data-i18n="about_title">Über Uns</h2>
            <p style="color:#777; margin-bottom:30px;" data-i18n="about_text">HM Carbide Swiss GmbH...</p>
            <a href="about.php" class="btn" style="background:transparent; border:2px solid var(--primary); color:var(--primary);" data-i18n="about_btn">MEHR ERFAHREN</a>
        </div>
        <div style="flex:1; height:400px; border-radius:12px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.1);">
            <img src="images/prod1.jpg" style="width:100%; height:100%; object-fit:cover;">
        </div>
    </section>

<?php include 'footer.php'; ?>
