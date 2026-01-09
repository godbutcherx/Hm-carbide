<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HM Carbide Swiss GmbH | Precision Tools</title>
    
    <meta property="og:title" content="HM Carbide Swiss GmbH | Schweizer Präzision">
    <meta property="og:description" content="Ihr zuverlässiger Partner für hochwertige Hartmetallprodukte. Schweizer Disziplin, Maximale Beständigkeit.">
    <meta property="og:image" content="https://www.hmcarbide.ch/images/logo.jpg"> <meta property="og:url" content="https://www.hmcarbide.ch">
    <meta property="og:type" content="website">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/jpg" href="images/logo.jpg">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="main-header">
        <a href="index.php" class="logo-container">
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
                <li><a href="index.php" data-i18n="nav_home">Startseite</a></li>
                <li><a href="about.php" data-i18n="nav_about">Über Uns</a></li>
                <li><a href="products.php" data-i18n="nav_products">Produkte</a></li>
                <li><a href="certificates.php" data-i18n="nav_certs">Zertifikate</a></li>
                <li><a href="contact.php" data-i18n="nav_contact">Kontakt</a></li>
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