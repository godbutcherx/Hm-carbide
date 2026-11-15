#!/usr/bin/env python3
"""Generates DE-master source pages (with lang-blocks) for the knowledge hub and its articles."""
import json

import os
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(os.path.dirname(HERE), '_src')
BASE = 'https://www.hmcarbide.ch'
V = '20261117'
DATE = '2026-11-15'

GA = """    <!-- Google tag (gtag.js) + Consent Mode v2: Cookies erst nach Einwilligung -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-K6D874YGSX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      try { if (localStorage.getItem('hmc_consent') === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' }); } catch (e) {}
      gtag('js', new Date());
      gtag('config', 'G-K6D874YGSX');
    </script>"""

DATE_TXT = {'de': '15. November 2026', 'en': '15 November 2026', 'tr': '15 Kasım 2026'}
BACK = {'de': '← Alle Fachartikel', 'en': '← All articles', 'tr': '← Tüm yazılar'}
RELATED = {'de': 'Weiterlesen', 'en': 'Read on', 'tr': 'Devamını okuyun'}
BY = {'de': 'HM Carbide Swiss GmbH', 'en': 'HM Carbide Swiss GmbH', 'tr': 'HM Carbide Swiss GmbH'}
CTA_BTN = {'de': 'Anfrage senden', 'en': 'Send an inquiry', 'tr': 'Teklif isteyin'}

# ---------------------------------------------------------------- articles
ART = {}

ART['mikrowerkzeuge-ultrafeinkorn.html'] = {
 'image': f'{BASE}/images/carbide-rods-diameters.webp',
 'about': {'de': ['Mikrowerkzeuge', 'Ultrafeinkorn', 'Hartmetallstab'], 'en': ['Micro tools', 'Ultrafine grain carbide', 'Carbide rod'], 'tr': ['Mikro takımlar', 'Ultra ince taneli karbür', 'Karbür çubuk']},
 'related': ['hartmetall-ratgeber.html', 'gekuerzte-hartmetallstaebe-sonderlaengen.html'],
 'de': {
  'title': 'Ultrafeinkorn für Mikrowerkzeuge: Hartmetallstäbe ab ø 1 mm | HM Carbide',
  'desc': 'Warum Mikrobohrer und Mikrofräser Ultrafeinkorn-Hartmetall brauchen: Kantenschärfe, Gefüge, Toleranz h6 bei kleinen Durchmessern und die passende Sorte.',
  'h1': 'Mikrowerkzeuge: warum Ultrafeinkorn',
  'sub': 'Je kleiner der Durchmesser, desto mehr entscheidet das Gefüge über Schneide und Standzeit.',
  'teaser': 'Warum kleine Durchmesser ein feines Gefüge brauchen und worauf Sie bei Sorte, Toleranz und Handhabung achten sollten.',
  'body': """
            <p class="lead">Bei Mikrobohrern und Mikrofräsern ist die Schneide oft nur Bruchteile eines Millimeters lang. Auf dieser Größenordnung spielt die Korngröße des Hartmetalls eine Rolle, die bei großen Werkzeugen kaum auffällt. Für kleine Durchmesser ist Ultrafeinkorn deshalb in der Regel die erste Wahl.</p>

            <h2 id="schneide">Die Schneide ist nur so fein wie das Korn</h2>
            <p>Hartmetall besteht aus Wolframkarbid-Körnern, die in Kobalt eingebettet sind. Beim Schleifen entsteht die Schneidkante entlang dieser Körner. Je gröber das Korn, desto „körniger“ wird die Kante und desto leichter brechen einzelne Körner aus. Bei einem Fräser mit ø 20 mm fällt das kaum ins Gewicht. Bei einem Werkzeug mit ø 1 mm entscheidet es darüber, ob die Schneide scharf und stabil bleibt.</p>
            <p>Ultrafeinkorn mit 0,4 µm Korngröße erlaubt deshalb schärfere, gleichmäßigere Schneiden und kleinere Schneidkantenradien. Gleichzeitig ist es härter und verschleißfester als gröbere Sorten, was bei kleinen Werkzeugen mit wenig Material an der Schneide die Standzeit verlängert.</p>

            <h2 id="sorte">Welche Sorte?</h2>
            <p>Für Mikrowerkzeuge empfehlen wir unsere Ultrafeinkorn-Sorten:</p>
            <ul>
                <li><strong>HM 12Co:</strong> 88 % WC, 12 % Co, Korngröße 0,4 µm, Härte 92,5 ± 0,5 HRA, Biegefestigkeit &gt;3432 N/mm².</li>
                <li><strong>HM12F:</strong> Ultrafeinkorn, 0,4 µm.</li>
            </ul>
            <p>Der Kobaltanteil von 12 % gibt dem feinen Gefüge die nötige Zähigkeit. Das ist bei Mikrowerkzeugen wichtig, weil der kleine Querschnitt Biegebelastungen und Vibrationen kaum abfedert. Die vollständigen Kennwerte finden Sie im <a href="hartmetall-ratgeber.html#sorten">Sorten-Ratgeber</a>.</p>

            <h2 id="toleranz">Toleranz h6 bei kleinen Durchmessern</h2>
            <p>Unsere Stäbe sind im Durchmesser auf h6 geschliffen. Für Durchmesser von 1 bis 3 mm bedeutet das nach ISO 286 ein Abmaß von 0 bis −6 µm: Ein Stab mit ø 2 mm misst also zwischen 1,994 und 2,000 mm. Bei Mikrowerkzeugen, die oft mit sehr kleinen Rundlauftoleranzen gespannt werden, ist ein eng tolerierter Schaft die Voraussetzung für einen sauberen Rundlauf.</p>

            <h2 id="handhabung">Handhabung kleiner Durchmesser</h2>
            <p>Hartes Ultrafeinkorn verzeiht weniger als zähere Sorten. Bei dünnen Stäben lohnt sich deshalb Sorgfalt:</p>
            <ul>
                <li>Stäbe einzeln oder in Röhrchen lagern, damit sie nicht aneinanderschlagen.</li>
                <li>Beim Schleifen auf steife Spannung und geringe Auskraglänge achten, um Vibrationen zu vermeiden.</li>
                <li>Stäbe vor dem Einspannen auf Kantenausbrüche an den Stirnseiten prüfen.</li>
            </ul>

            <h2 id="lieferprogramm">Unser Lieferprogramm für kleine Durchmesser</h2>
            <p>Vollhartmetallstäbe liefern wir ab ø 1 mm in 1-mm-Schritten bis ø 30 mm sowie ø 32 mm, jeweils in 330 mm Länge. Gekürzte Stäbe gibt es ab 3 × 40 mm; andere Längen fertigen wir auf Anfrage. Alle Abmessungen finden Sie auf der <a href="products.html#p1">Produktseite</a>.</p>
""",
  'cta': '<strong>Sie fertigen Mikrowerkzeuge?</strong> Nennen Sie uns Durchmesser, Länge und Stückzahl. Wir antworten mit einem Angebot.'},
 'en': {
  'title': 'Ultrafine Grain for Micro Tools: Carbide Rods from ø 1 mm | HM Carbide',
  'desc': 'Why micro drills and micro end mills need ultrafine grain carbide: edge sharpness, microstructure, tolerance h6 on small diameters and the right grade.',
  'h1': 'Micro tools: why ultrafine grain',
  'sub': 'The smaller the diameter, the more the microstructure decides edge quality and tool life.',
  'teaser': 'Why small diameters need a fine microstructure and what to watch for in grade, tolerance and handling.',
  'body': """
            <p class="lead">On micro drills and micro end mills the cutting edge is often only a fraction of a millimetre long. At this scale the grain size of the carbide matters in a way that hardly shows on large tools. For small diameters, ultrafine grain is therefore usually the first choice.</p>

            <h2 id="schneide">The edge is only as fine as the grain</h2>
            <p>Carbide consists of tungsten carbide grains embedded in cobalt. When the tool is ground, the cutting edge forms along these grains. The coarser the grain, the more “grainy” the edge and the more easily individual grains break out. On a ø 20 mm end mill this barely matters. On a ø 1 mm tool it decides whether the edge stays sharp and stable.</p>
            <p>Ultrafine grain with a grain size of 0.4 µm therefore allows sharper, more uniform edges and smaller edge radii. It is also harder and more wear-resistant than coarser grades, which extends tool life on small tools with little material at the edge.</p>

            <h2 id="sorte">Which grade?</h2>
            <p>For micro tools we recommend our ultrafine grades:</p>
            <ul>
                <li><strong>HM 12Co:</strong> 88% WC, 12% Co, grain size 0.4 µm, hardness 92.5 ± 0.5 HRA, transverse rupture strength &gt;3432 N/mm².</li>
                <li><strong>HM12F:</strong> ultrafine grain, 0.4 µm.</li>
            </ul>
            <p>The 12% cobalt content gives the fine structure the toughness it needs. That matters for micro tools, because the small cross-section can hardly absorb bending loads and vibration. Full data is in the <a href="hartmetall-ratgeber.html#sorten">grade guide</a>.</p>

            <h2 id="toleranz">Tolerance h6 on small diameters</h2>
            <p>Our rods are ground to h6 on the diameter. For diameters from 1 to 3 mm, ISO 286 gives a deviation of 0 to −6 µm: a ø 2 mm rod measures between 1.994 and 2.000 mm. For micro tools, which are often clamped to very tight runout tolerances, a closely toleranced shank is the basis for clean runout.</p>

            <h2 id="handhabung">Handling small diameters</h2>
            <p>Hard ultrafine carbide is less forgiving than tougher grades. With thin rods, care pays off:</p>
            <ul>
                <li>Store rods individually or in tubes so they do not knock against each other.</li>
                <li>When grinding, use rigid clamping and a short overhang to avoid vibration.</li>
                <li>Check the end faces for chipped edges before clamping.</li>
            </ul>

            <h2 id="lieferprogramm">Our range for small diameters</h2>
            <p>We supply solid carbide rods from ø 1 mm in 1 mm steps up to ø 30 mm, plus ø 32 mm, each 330 mm long. Cut-to-length rods start at 3 × 40 mm; other lengths are produced on request. All sizes are on the <a href="products.html#p1">product page</a>.</p>
""",
  'cta': '<strong>Do you make micro tools?</strong> Send us diameter, length and quantity and we will reply with a quote.'},
 'tr': {
  'title': 'Mikro Takımlar için Ultra İnce Tane: ø 1 mm’den Karbür Çubuk | HM Carbide',
  'desc': 'Mikro matkap ve mikro frezeler neden ultra ince taneli karbüre ihtiyaç duyar: ağız keskinliği, yapı, küçük çaplarda h6 tolerans ve doğru kalite.',
  'h1': 'Mikro takımlarda neden ultra ince tane?',
  'sub': 'Çap küçüldükçe, kesici ağzı ve takım ömrünü malzemenin yapısı belirler.',
  'teaser': 'Küçük çapların neden ince bir yapıya ihtiyaç duyduğu; kalite, tolerans ve kullanımda nelere dikkat etmeniz gerektiği.',
  'body': """
            <p class="lead">Mikro matkap ve mikro frezelerde kesici ağız çoğu zaman bir milimetrenin küçük bir kesri kadardır. Bu ölçekte karbürün tane boyutu, büyük takımlarda neredeyse fark edilmeyen bir rol oynar. Bu yüzden küçük çaplarda ilk tercih genellikle ultra ince tanedir.</p>

            <h2 id="schneide">Ağız, tane kadar incedir</h2>
            <p>Karbür, kobalt içine gömülü tungsten karbür tanelerinden oluşur. Takım taşlanırken kesici ağız bu tanelerin boyunca oluşur. Tane ne kadar iriyse ağız o kadar “pürüzlü” olur ve tek tek taneler o kadar kolay kopar. ø 20 mm’lik bir frezede bu pek önemli değildir. ø 1 mm’lik bir takımda ise ağzın keskin ve sağlam kalıp kalmayacağını belirler.</p>
            <p>0,4 µm tane boyutundaki ultra ince tane bu yüzden daha keskin, daha düzgün ağızlar ve daha küçük ağız radyusları sağlar. Aynı zamanda daha iri kalitelerden daha sert ve aşınmaya daha dayanıklıdır; ağızda az malzeme bulunan küçük takımlarda bu, takım ömrünü uzatır.</p>

            <h2 id="sorte">Hangi kalite?</h2>
            <p>Mikro takımlar için ultra ince taneli kalitelerimizi öneriyoruz:</p>
            <ul>
                <li><strong>HM 12Co:</strong> %88 WC, %12 Co, tane boyutu 0,4 µm, sertlik 92,5 ± 0,5 HRA, eğilme dayanımı &gt;3432 N/mm².</li>
                <li><strong>HM12F:</strong> ultra ince tane, 0,4 µm.</li>
            </ul>
            <p>%12 kobalt oranı, ince yapıya ihtiyaç duyduğu tokluğu verir. Bu, mikro takımlarda önemlidir; çünkü küçük kesit eğilme yüklerini ve titreşimi neredeyse hiç sönümleyemez. Tüm değerler <a href="hartmetall-ratgeber.html#sorten">kalite rehberinde</a>.</p>

            <h2 id="toleranz">Küçük çaplarda h6 toleransı</h2>
            <p>Çubuklarımız çapta h6 toleransında taşlanır. ISO 286’ya göre 1–3 mm çaplarda bu, 0 ile −6 µm arası bir sapma demektir: ø 2 mm bir çubuk 1,994 ile 2,000 mm arasında ölçülür. Çoğu zaman çok dar salgı toleranslarıyla bağlanan mikro takımlarda, dar toleranslı bir şaft temiz bir salgının ön koşuludur.</p>

            <h2 id="handhabung">Küçük çaplı çubukların kullanımı</h2>
            <p>Sert ultra ince taneli karbür, daha tok kaliteler kadar hata affetmez. İnce çubuklarda özen göstermek işe yarar:</p>
            <ul>
                <li>Çubukları birbirine çarpmamaları için tek tek veya tüp içinde saklayın.</li>
                <li>Taşlarken titreşimi önlemek için rijit bağlama ve kısa çıkıntı boyu kullanın.</li>
                <li>Bağlamadan önce uç yüzeylerde kenar kırığı olup olmadığını kontrol edin.</li>
            </ul>

            <h2 id="lieferprogramm">Küçük çaplarda ürün yelpazemiz</h2>
            <p>Tam karbür çubukları ø 1 mm’den başlayarak 1 mm adımlarla ø 30 mm’ye kadar ve ayrıca ø 32 mm olarak, 330 mm boyunda tedarik ediyoruz. Kesilmiş çubuklar 3 × 40 mm’den başlar; diğer boylar talep üzerine üretilir. Tüm ölçüler <a href="products.html#p1">ürün sayfasında</a>.</p>
""",
  'cta': '<strong>Mikro takım mı üretiyorsunuz?</strong> Çap, boy ve adedi bize yazın, teklifle dönelim.'},
}

ART['gekuerzte-hartmetallstaebe-sonderlaengen.html'] = {
 'image': f'{BASE}/images/carbide-rods-cut.webp',
 'about': {'de': ['Gekürzte Hartmetallstäbe', 'Sonderlängen', 'Hartmetall-Rohling'], 'en': ['Cut-to-length carbide rods', 'Custom lengths', 'Carbide blank'], 'tr': ['Kesilmiş karbür çubuk', 'Özel boylar', 'Karbür rolye']},
 'related': ['hartmetall-ratgeber.html', 'mikrowerkzeuge-ultrafeinkorn.html'],
 'de': {
  'title': 'Gekürzte Hartmetallstäbe und Sonderlängen: wann sie sich lohnen | HM Carbide',
  'desc': 'Gekürzter Stab oder 330-mm-Stab? Wann sich auf Länge geschnittene Hartmetall-Rohlinge lohnen, welche Standardmaße es gibt und wie Sie Sonderlängen anfragen.',
  'h1': 'Gekürzte Stäbe und Sonderlängen',
  'sub': 'Wann sich auf Länge geschnittene Rohlinge lohnen und wann der 330-mm-Stab die bessere Wahl ist.',
  'teaser': 'Gekürzter Stab oder 330-mm-Stab: wann sich fertig abgelängte Rohlinge lohnen und wie Sie Sonderlängen anfragen.',
  'body': """
            <p class="lead">Hartmetallstäbe werden standardmäßig in 330 mm Länge geliefert. Wer Werkzeuge in Serie fertigt, schneidet diese Stäbe meist selbst auf die Rohlingslänge. Gekürzte Stäbe nehmen Ihnen diesen Schritt ab: Sie kommen bereits in der Länge, die Sie zum Schleifen brauchen.</p>

            <h2 id="warum">Warum Hartmetall ablängen aufwendig ist</h2>
            <p>Hartmetall lässt sich nicht wie Stahl sägen. Zum Trennen braucht es diamantbestückte Trennscheiben, eine geeignete Maschine und Kühlung. Jeder Schnitt kostet Zeit, Werkzeug und Material, denn die Trennfuge geht verloren. Bei hohen Stückzahlen summiert sich das schnell.</p>

            <h2 id="wann-gekuerzt">Wann gekürzte Stäbe die bessere Wahl sind</h2>
            <ul>
                <li><strong>Serienfertigung mit festen Längen:</strong> Wenn Sie dieselben Werkzeuge immer wieder in gleicher Länge schleifen, sparen fertig abgelängte Rohlinge einen kompletten Arbeitsgang.</li>
                <li><strong>Keine eigene Trennanlage:</strong> Ohne Diamant-Trennmaschine ist der gekürzte Stab der direkte Weg zum Schleifrohling.</li>
                <li><strong>Planbarer Materialeinsatz:</strong> Sie kaufen genau die Rohlinge, die Sie verarbeiten, ohne Reststücke.</li>
                <li><strong>Schnellerer Start:</strong> Die Rohlinge gehen direkt in die Schleifmaschine.</li>
            </ul>

            <h2 id="wann-330">Wann der 330-mm-Stab sinnvoller ist</h2>
            <ul>
                <li>Sie fertigen viele verschiedene Längen in kleinen Losen.</li>
                <li>Sie haben eine eigene Trennanlage mit freier Kapazität.</li>
                <li>Sie möchten flexibel auf kurzfristige Aufträge reagieren und Material am Lager halten.</li>
            </ul>
            <p>Vollhartmetallstäbe in 330 mm liefern wir von ø 1 bis 32 mm, Stäbe mit Kühlkanal von ø 4 bis 25 mm. Alle Maße finden Sie auf der <a href="products.html">Produktseite</a>.</p>

            <h2 id="standardmasse">Unsere Standardmaße</h2>
            <p>Gekürzte Stäbe führen wir in 13 Standardabmessungen (ø × Länge in mm):</p>
            <p class="size-list"><span>3 × 40</span> · <span>4 × 50</span> · <span>5 × 50</span> · <span>6 × 50</span> · <span>6 × 57</span> · <span>8 × 63</span> · <span>10 × 70</span> · <span>10 × 72</span> · <span>12 × 75</span> · <span>12 × 83</span> · <span>16 × 92</span> · <span>16 × 93</span> · <span>20 × 104</span></p>
            <p>Alle gekürzten Stäbe sind im Durchmesser auf h6 geschliffen.</p>

            <h2 id="sonderlaengen">Sonderlängen und Sonderabmessungen</h2>
            <p>Passt keine Standardabmessung, fertigen wir gekürzte Stäbe nach Ihren Vorgaben. Damit wir schnell ein Angebot machen können, nennen Sie uns bitte:</p>
            <ul>
                <li>Durchmesser und gewünschte Länge des Rohlings</li>
                <li>Sorte, falls bereits festgelegt (sonst den Werkzeugtyp und den zu bearbeitenden Werkstoff)</li>
                <li>Stückzahl und gewünschten Liefertermin</li>
                <li>ob der Stab einen Kühlkanal braucht</li>
            </ul>
            <p>Tipp: Planen Sie die Rohlingslänge mit Aufmaß für das Bearbeiten der Stirnseiten. Wenn Sie uns die Länge des fertigen Werkzeugs nennen, stimmen wir die Rohlingslänge gern mit Ihnen ab.</p>
""",
  'cta': '<strong>Sonderlänge gesucht?</strong> Schicken Sie uns Durchmesser, Länge und Stückzahl. Wir antworten auf Deutsch, Englisch oder Türkisch.'},
 'en': {
  'title': 'Cut-to-Length Carbide Rods and Custom Lengths: When They Pay Off | HM Carbide',
  'desc': 'Cut rod or 330 mm rod? When carbide blanks cut to length pay off, which standard sizes are available and how to request custom lengths.',
  'h1': 'Cut-to-length rods and custom lengths',
  'sub': 'When blanks cut to length pay off, and when the 330 mm rod is the better choice.',
  'teaser': 'Cut rod or 330 mm rod: when blanks cut to length pay off and how to request custom lengths.',
  'body': """
            <p class="lead">Carbide rods are supplied in 330 mm lengths as standard. Toolmakers producing in series usually cut these rods to blank length themselves. Cut-to-length rods take that step off your hands: they arrive in the length you need for grinding.</p>

            <h2 id="warum">Why cutting carbide takes effort</h2>
            <p>Carbide cannot be sawn like steel. Cutting it needs diamond cut-off wheels, a suitable machine and coolant. Every cut costs time, wheel wear and material, because the kerf is lost. At high volumes this adds up quickly.</p>

            <h2 id="wann-gekuerzt">When cut rods are the better choice</h2>
            <ul>
                <li><strong>Series production with fixed lengths:</strong> if you grind the same tools in the same length again and again, pre-cut blanks save a whole operation.</li>
                <li><strong>No cutting machine of your own:</strong> without a diamond cut-off machine, the cut rod is the direct route to a grinding blank.</li>
                <li><strong>Predictable material use:</strong> you buy exactly the blanks you process, with no offcuts.</li>
                <li><strong>Faster start:</strong> the blanks go straight into the grinding machine.</li>
            </ul>

            <h2 id="wann-330">When the 330 mm rod makes more sense</h2>
            <ul>
                <li>You make many different lengths in small batches.</li>
                <li>You have your own cutting machine with spare capacity.</li>
                <li>You want to react flexibly to short-notice orders and keep material in stock.</li>
            </ul>
            <p>We supply 330 mm solid carbide rods from ø 1 to 32 mm and coolant-channel rods from ø 4 to 25 mm. All sizes are on the <a href="products.html">product page</a>.</p>

            <h2 id="standardmasse">Our standard sizes</h2>
            <p>We stock cut-to-length rods in 13 standard sizes (ø × length in mm):</p>
            <p class="size-list"><span>3 × 40</span> · <span>4 × 50</span> · <span>5 × 50</span> · <span>6 × 50</span> · <span>6 × 57</span> · <span>8 × 63</span> · <span>10 × 70</span> · <span>10 × 72</span> · <span>12 × 75</span> · <span>12 × 83</span> · <span>16 × 92</span> · <span>16 × 93</span> · <span>20 × 104</span></p>
            <p>All cut rods are ground to h6 on the diameter.</p>

            <h2 id="sonderlaengen">Custom lengths and sizes</h2>
            <p>If no standard size fits, we produce cut rods to your specification. To quote quickly, please tell us:</p>
            <ul>
                <li>diameter and required blank length</li>
                <li>the grade, if already decided (otherwise the tool type and workpiece material)</li>
                <li>quantity and required delivery date</li>
                <li>whether the rod needs a coolant channel</li>
            </ul>
            <p>Tip: plan the blank length with an allowance for machining the end faces. If you tell us the length of the finished tool, we are happy to agree the blank length with you.</p>
""",
  'cta': '<strong>Looking for a custom length?</strong> Send us diameter, length and quantity. We reply in English, German or Turkish.'},
 'tr': {
  'title': 'Kesilmiş Karbür Çubuklar ve Özel Boylar: Ne Zaman Tercih Edilir? | HM Carbide',
  'desc': 'Kesilmiş çubuk mu, 330 mm çubuk mu? Boyuna kesilmiş karbür rolyeler ne zaman avantajlıdır, standart ölçüler nelerdir, özel boy nasıl istenir.',
  'h1': 'Kesilmiş çubuklar ve özel boylar',
  'sub': 'Boyuna kesilmiş rolyeler ne zaman avantajlı, 330 mm çubuk ne zaman daha doğru seçim?',
  'teaser': 'Kesilmiş çubuk mu, 330 mm çubuk mu: boyuna kesilmiş rolyeler ne zaman avantajlıdır ve özel boy nasıl istenir.',
  'body': """
            <p class="lead">Karbür çubuklar standart olarak 330 mm boyunda gelir. Seri üretim yapan takım üreticileri bu çubukları genellikle kendileri rolye boyuna keser. Kesilmiş çubuklar bu adımı sizin yerinize halleder: taşlama için ihtiyaç duyduğunuz boyda gelirler.</p>

            <h2 id="warum">Karbür kesmek neden zahmetlidir?</h2>
            <p>Karbür, çelik gibi testereyle kesilmez. Kesmek için elmas kesme diskleri, uygun bir makine ve soğutma gerekir. Her kesim zaman, disk aşınması ve malzeme demektir; çünkü kesme payı kaybolur. Yüksek adetlerde bu hızla birikir.</p>

            <h2 id="wann-gekuerzt">Kesilmiş çubuk ne zaman daha iyi seçimdir?</h2>
            <ul>
                <li><strong>Sabit boylarla seri üretim:</strong> Aynı takımları hep aynı boyda taşlıyorsanız, hazır kesilmiş rolyeler bir işlem adımını tamamen ortadan kaldırır.</li>
                <li><strong>Kendi kesme tezgâhınız yoksa:</strong> Elmas kesme makinesi olmadan, kesilmiş çubuk taşlama rolyesine giden en kısa yoldur.</li>
                <li><strong>Öngörülebilir malzeme kullanımı:</strong> Yalnızca işlediğiniz rolyeleri satın alırsınız, artık parça kalmaz.</li>
                <li><strong>Daha hızlı başlangıç:</strong> Rolyeler doğrudan taşlama tezgâhına gider.</li>
            </ul>

            <h2 id="wann-330">330 mm çubuk ne zaman daha mantıklı?</h2>
            <ul>
                <li>Küçük partilerde çok farklı boylar üretiyorsanız.</li>
                <li>Boş kapasitesi olan kendi kesme tezgâhınız varsa.</li>
                <li>Kısa vadeli siparişlere esnek yanıt vermek ve stok tutmak istiyorsanız.</li>
            </ul>
            <p>330 mm tam karbür çubukları ø 1–32 mm, soğutma kanallı çubukları ø 4–25 mm aralığında tedarik ediyoruz. Tüm ölçüler <a href="products.html">ürün sayfasında</a>.</p>

            <h2 id="standardmasse">Standart ölçülerimiz</h2>
            <p>Kesilmiş çubukları 13 standart ölçüde sunuyoruz (ø × boy, mm):</p>
            <p class="size-list"><span>3 × 40</span> · <span>4 × 50</span> · <span>5 × 50</span> · <span>6 × 50</span> · <span>6 × 57</span> · <span>8 × 63</span> · <span>10 × 70</span> · <span>10 × 72</span> · <span>12 × 75</span> · <span>12 × 83</span> · <span>16 × 92</span> · <span>16 × 93</span> · <span>20 × 104</span></p>
            <p>Tüm kesilmiş çubuklar çapta h6 toleransında taşlanmıştır.</p>

            <h2 id="sonderlaengen">Özel boy ve ölçüler</h2>
            <p>Standart ölçülerden hiçbiri uymuyorsa, kesilmiş çubukları isteğinize göre üretiyoruz. Hızlı teklif verebilmemiz için lütfen şunları belirtin:</p>
            <ul>
                <li>Çap ve istenen rolye boyu</li>
                <li>Belirlediyseniz kalite (belirlemediyseniz takım tipi ve işlenecek malzeme)</li>
                <li>Adet ve istenen teslim tarihi</li>
                <li>Çubukta soğutma kanalı gerekip gerekmediği</li>
            </ul>
            <p>İpucu: Rolye boyunu, uç yüzeylerin işlenmesi için pay bırakarak planlayın. Bitmiş takımın boyunu bize bildirirseniz, rolye boyunu sizinle birlikte belirleriz.</p>
""",
  'cta': '<strong>Özel boy mu arıyorsunuz?</strong> Çap, boy ve adedi bize yazın. Türkçe, Almanca veya İngilizce yanıt veriyoruz.'},
}

GUIDE = {
 'de': ('Hartmetall-Sorten-Ratgeber', 'Wie Korngröße und Kobaltanteil Härte und Zähigkeit bestimmen, welche Sorte zu welchem Werkzeug passt und was Toleranz h6 bedeutet.'),
 'en': ('Carbide grade guide', 'How grain size and cobalt content set hardness and toughness, which grade suits which tool and what tolerance h6 means.'),
 'tr': ('Karbür kalite rehberi', 'Tane boyutu ve kobalt oranı sertliği ve tokluğu nasıl belirler, hangi takım için hangi kalite seçilir, h6 tolerans ne demektir.'),
}
HUB = {
 'de': {'title': 'Fachwissen Hartmetall: Ratgeber und Fachartikel | HM Carbide', 'desc': 'Fachartikel zu Hartmetallstäben: Sortenwahl, Korngröße, Toleranz h6, Mikrowerkzeuge, gekürzte Stäbe und Sonderlängen.',
        'h1': 'Fachwissen', 'sub': 'Ratgeber und Fachartikel rund um Hartmetallstäbe für die Werkzeugherstellung.', 'more': 'Weiterlesen'},
 'en': {'title': 'Carbide Know-how: Guide and Articles | HM Carbide', 'desc': 'Articles on carbide rods: grade selection, grain size, tolerance h6, micro tools, cut-to-length rods and custom lengths.',
        'h1': 'Know-how', 'sub': 'Guide and articles on carbide rods for tool manufacturing.', 'more': 'Read more'},
 'tr': {'title': 'Karbür Bilgi Merkezi: Rehber ve Yazılar | HM Carbide', 'desc': 'Karbür çubuklar hakkında yazılar: kalite seçimi, tane boyutu, h6 tolerans, mikro takımlar, kesilmiş çubuklar ve özel boylar.',
        'h1': 'Bilgi merkezi', 'sub': 'Takım üretimi için karbür çubuklar hakkında rehber ve yazılar.', 'more': 'Devamını okuyun'},
}
LANGS = ['de', 'en', 'tr']


def item(page, lang):
    if page == 'hartmetall-ratgeber.html':
        return GUIDE[lang]
    a = ART[page][lang]
    return (a['h1'], a['teaser'])


def head(title, desc, page, ogtype, ld):
    return f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
{GA}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <meta name="description" content="{desc}">
    <link rel="canonical" href="{BASE}/{page}">
    <meta property="og:type" content="{ogtype}">
    <meta property="og:url" content="{BASE}/{page}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:image" content="{BASE}/thumb.jpg">
    <meta property="og:locale" content="de_CH">
    <link rel="stylesheet" href="style.css?v={V}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="favicon-48.png">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=2)}
    </script>
</head>
<body class="inner">
<main id="main">
"""


FOOT = f"""</main>

    <script src="layout.js?v={V}"></script>
    <script src="script.js?v={V}"></script>
</body>
</html>
"""

ORG = {"@type": "Organization", "@id": f"{BASE}/#organization", "name": "HM Carbide Swiss GmbH", "url": f"{BASE}/"}

for page, A in ART.items():
    d = A['de']
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "TechArticle", "@id": f"{BASE}/{page}#article", "url": f"{BASE}/{page}", "headline": d['h1'],
         "description": d['desc'], "inLanguage": "de", "datePublished": DATE, "dateModified": DATE,
         "author": {"@id": f"{BASE}/#organization"}, "publisher": {"@id": f"{BASE}/#organization"},
         "about": A['about']['de'], "image": A['image'],
         "isPartOf": {"@type": "CollectionPage", "@id": f"{BASE}/wissen.html#webpage"}}, ORG]}
    out = head(d['title'], d['desc'], page, 'article', ld)
    out += '    <div class="page-header-section">\n        <div class="wrap">\n'
    for l in LANGS:
        a = A[l]; hide = '' if l == 'de' else ' style="display:none;"'
        out += f'            <div class="lang-block" data-lang="{l}"{hide}>\n                <p class="post-back"><a href="wissen.html">{BACK[l]}</a></p>\n                <h1 class="page-title page-title--post">{a["h1"]}</h1>\n                <p class="page-subtitle">{a["sub"]}</p>\n                <p class="post-meta"><time datetime="{DATE}">{DATE_TXT[l]}</time> · {BY[l]}</p>\n            </div>\n'
    out += '        </div>\n    </div>\n\n    <section class="section">\n    <div class="wrap prose">\n'
    for l in LANGS:
        a = A[l]; hide = '' if l == 'de' else ' style="display:none;"'
        rel = ''.join(f'<li><a href="{p}"><strong>{item(p, l)[0]}</strong><span>{item(p, l)[1]}</span></a></li>' for p in A['related'])
        out += f'''        <div class="lang-block" data-lang="{l}"{hide}>
{a["body"]}
            <div class="guide-cta">
                <p>{a["cta"]}</p>
                <a href="contact.html" class="btn">{CTA_BTN[l]}</a>
            </div>
            <aside class="related">
                <h2>{RELATED[l]}</h2>
                <ul>{rel}</ul>
            </aside>
        </div>
'''
    out += '    </div>\n    </section>\n' + FOOT
    open(f'{SRC}/{page}', 'w', encoding='utf-8').write(out)

# ---------------------------------------------------------------- hub
order = ['hartmetall-ratgeber.html', 'mikrowerkzeuge-ultrafeinkorn.html', 'gekuerzte-hartmetallstaebe-sonderlaengen.html']
h = HUB['de']
ld = {"@context": "https://schema.org", "@graph": [
    {"@type": "CollectionPage", "@id": f"{BASE}/wissen.html#webpage", "url": f"{BASE}/wissen.html", "name": h['h1'],
     "description": h['desc'], "inLanguage": "de", "publisher": {"@id": f"{BASE}/#organization"},
     "hasPart": [{"@type": "TechArticle", "@id": f"{BASE}/{p}#article", "url": f"{BASE}/{p}"} for p in order]}, ORG]}
out = head(h['title'], h['desc'], 'wissen.html', 'website', ld)
out += '    <div class="page-header-section">\n        <div class="wrap">\n'
for l in LANGS:
    hide = '' if l == 'de' else ' style="display:none;"'
    out += f'            <div class="lang-block" data-lang="{l}"{hide}>\n                <h1 class="page-title">{HUB[l]["h1"]}</h1>\n                <p class="page-subtitle">{HUB[l]["sub"]}</p>\n            </div>\n'
out += '        </div>\n    </div>\n\n    <section class="section">\n    <div class="wrap">\n'
for l in LANGS:
    hide = '' if l == 'de' else ' style="display:none;"'
    cards = ''
    for p in order:
        t, s = item(p, l)
        cards += f'''
                <article class="kb-card">
                    <h2><a href="{p}">{t}</a></h2>
                    <p>{s}</p>
                    <a href="{p}" class="text-link" aria-hidden="true" tabindex="-1">{HUB[l]["more"]}</a>
                </article>'''
    out += f'        <div class="lang-block" data-lang="{l}"{hide}>\n            <div class="kb-list">{cards}\n            </div>\n        </div>\n'
out += '    </div>\n    </section>\n' + FOOT
open(f'{SRC}/wissen.html', 'w', encoding='utf-8').write(out)

# meta for build.py
meta = {}
for page, A in ART.items():
    meta[page] = {l: (A[l]['title'], A[l]['desc'], A[l]['h1'], A['about'][l]) for l in ('en', 'tr')}
meta['wissen.html'] = {l: (HUB[l]['title'], HUB[l]['desc'], HUB[l]['h1'], []) for l in ('en', 'tr')}
json.dump(meta, open(os.path.join(HERE, 'articles_meta.json'), 'w'), ensure_ascii=False, indent=1)
print('ok')
