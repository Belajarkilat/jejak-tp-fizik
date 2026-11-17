/* Sumber kandungan — Fizik KSSM Tingkatan 4, Bab 3 Kegravitian.
   SK 3.1 Hukum Kegravitian Semesta Newton, 3.2 Hukum Kepler, 3.3 Satelit buatan manusia
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   Pemalar: G = 6.67 × 10⁻¹¹ N m² kg⁻², M Bumi = 5.97 × 10²⁴ kg, R Bumi = 6.37 × 10⁶ m.
   Semua jawapan berangka disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Balai Cerap Newton", sk:"3.1 Hukum Kegravitian Semesta Newton · 3.2 Hukum Kepler", lampiran:null,
 kadNama:"Daya Graviti", kadEm:"\u{1F34E}", kadFakta:"F = Gm₁m₂ ÷ r². Daya graviti antara dua jasad berkadar terus dengan hasil darab jisim dan berkadar songsang dengan kuasa dua jarak di antara pusatnya.",
 bosKadNama:"Hukum Kepler", bosKadEm:"\u{1FA90}", bosKadFakta:"Orbit planet berbentuk elips; garis planet-Matahari mencakupi luas yang sama dalam masa yang sama; T² ∝ r³.",
 soalan:[
 {j:"pilih",t:"Daya graviti antara dua jasad sentiasa bersifat:",p:["Tarikan","Tolakan","Tarikan atau tolakan","Bergantung pada cas"],b:0,u:"Daya graviti sentiasa daya tarikan, tidak seperti daya elektrik."},
 {j:"pilih",t:"Menurut Hukum Kegravitian Semesta Newton, daya graviti berkadar songsang dengan:",p:["Kuasa dua jarak antara pusat","Jarak di antara permukaan jasad","Hasil darab jisim kedua-dua jasad","Isi padu kedua-dua jasad"],b:0,u:"F ∝ 1/r², dengan r ialah jarak di antara pusat dua jasad."},
 {j:"pilih",t:"Nilai pemalar kegravitian semesta, G, ialah:",p:["6.67 × 10⁻¹¹ N m² kg⁻²","6.67 × 10¹¹ N m² kg⁻²","9.81 × 10⁻¹¹ N m² kg⁻²","6.67 × 10⁻¹¹ N m kg⁻¹"],b:0,u:"G sangat kecil, sebab itu daya graviti antara objek harian tidak terasa."},
 {j:"pilih",t:"Daya memusat ialah daya yang bertindak:",p:["Ke arah pusat bulatan","Keluar dari pusat bulatan","Pada tangen bulatan","Selari dengan halaju"],b:0,u:"Daya memusat menukar arah halaju objek supaya ia kekal dalam gerakan membulat."},
 {j:"pilih",t:"Hukum Kepler Pertama menyatakan bahawa orbit setiap planet berbentuk:",p:["Elips, Matahari di satu fokus","Bulatan dengan Matahari di pusat","Elips dengan Matahari di pusat","Parabola di sekeliling Matahari"],b:0,u:"Orbit planet ialah elips, dan Matahari berada di salah satu daripada dua fokusnya."},
 {j:"pilih",t:"Hukum Kepler Ketiga menyatakan hubungan:",p:["T² ∝ r³","T ∝ r","T³ ∝ r²","T ∝ r²"],b:0,u:"Kuasa dua tempoh orbit berkadar terus dengan kuasa tiga jejari orbit."},
 {j:"pilih",t:"Satelit geopegun mengorbit Bumi dengan tempoh:",p:["24 jam","12 jam","90 minit","27.3 hari"],b:0,u:"Tempohnya sama dengan putaran Bumi, jadi satelit kelihatan pegun di atas satu kedudukan."},
 {j:"banyak",t:"Pilih DUA faktor yang mempengaruhi magnitud daya graviti antara dua jasad.",p:["Jisim jasad","Jarak di antara pusat","Warna permukaan jasad","Suhu jasad"],b:[0,1],u:"F = Gm₁m₂ ÷ r² bergantung pada jisim dan jarak sahaja."}],
 bos:{j:"pilih",t:"Halaju lepas ialah halaju minimum yang diperlukan oleh objek di permukaan planet untuk:",p:["Terlepas daripada tarikan graviti","Mengorbit planet pada altitud rendah","Mencapai halaju bunyi di udara","Kekal pegun di atas permukaan"],b:0,u:"Halaju lepas Bumi kira-kira 11.2 km s⁻¹."}},

{n:2, tempat:"Jalur Orbit Kepler", sk:"3.2 Hukum Kepler · 3.1 Daya memusat · 3.3 Jenis satelit", lampiran:null,
 kadNama:"Luas Sama", kadEm:"\u{1F4D0}", kadFakta:"Hukum Kepler Kedua: planet bergerak paling laju apabila paling dekat dengan Matahari dan paling perlahan apabila paling jauh.",
 bosKadNama:"Geopegun", bosKadEm:"\u{1F4E1}", bosKadFakta:"Satelit geopegun berada di atas khatulistiwa, kira-kira 36 000 km dari permukaan Bumi, dan bergerak searah putaran Bumi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Hukum Kepler Kedua, bilakah Bumi bergerak paling laju dalam orbitnya?",p:["Paling dekat dengan Matahari","Ketika paling jauh dari Matahari","Laju sama di seluruh orbit","Ketika berada di tengah elips"],b:0,u:"Garis Bumi-Matahari mesti mencakupi luas yang sama dalam masa yang sama, jadi Bumi bergerak lebih laju apabila jaraknya pendek."},
 {j:"pilih",t:"Daya yang menyediakan daya memusat bagi Bulan yang mengorbit Bumi ialah:",p:["Daya graviti Bumi","Daya geseran udara","Daya apungan angkasa","Daya magnet Matahari"],b:0,u:"Tarikan graviti Bumi ke atas Bulan bertindak ke arah pusat orbit."},
 {j:"pilih",t:"Jika jarak di antara dua jasad digandakan, daya graviti di antara mereka menjadi:",p:["Satu per empat","Separuh","Dua kali ganda","Empat kali ganda"],b:0,u:"F ∝ 1/r². Jika r menjadi 2r, F menjadi F ÷ 4."},
 {j:"pilih",t:"Jika jisim kedua-dua jasad digandakan dan jarak tidak berubah, daya graviti menjadi:",p:["Empat kali ganda","Dua kali ganda","Separuh","Tidak berubah"],b:0,u:"F ∝ m₁m₂. (2m₁)(2m₂) = 4m₁m₂."},
 {j:"pilih",t:"Planet yang lebih jauh dari Matahari mempunyai tempoh orbit yang:",p:["Lebih panjang","Lebih pendek","Sama dengan Bumi","Tidak dapat ditentukan"],b:0,u:"T² ∝ r³: jejari orbit lebih besar memberi tempoh lebih panjang."},
 {j:"pilih",t:"Satelit TiungSAT-1 mengorbit Bumi pada altitud rendah dengan tempoh kira-kira 100 minit. Ia ialah satelit:",p:["Bukan geopegun","Geopegun","Pegun di atas Malaysia","Mengorbit Matahari"],b:0,u:"Tempohnya jauh lebih pendek daripada 24 jam, jadi ia bukan satelit geopegun."},
 {j:"pilih",t:"Mengapakah satelit tidak jatuh ke Bumi walaupun ditarik oleh graviti?",p:["Halaju tangennya cukup tinggi","Tiada graviti di angkasa lepas","Satelit lebih ringan daripada udara","Enjin satelit menolaknya ke atas setiap masa"],b:0,u:"Graviti bertindak sebagai daya memusat. Satelit sentiasa jatuh ke arah Bumi tetapi bergerak cukup laju untuk kekal dalam orbit."},
 {j:"pilih",t:"Pecutan graviti di permukaan sesuatu planet bergantung pada:",p:["Jisim dan jejari planet","Jisim objek yang jatuh","Ketumpatan udara di permukaan","Halaju putaran planet itu"],b:0,u:"g = GM ÷ R². Ia tidak bergantung pada jisim objek yang jatuh."}],
 bos:{j:"susun",t:"Susun jasad berikut mengikut tempoh orbit mengelilingi Bumi, dari paling pendek ke paling panjang.",p:["Stesen Angkasa Antarabangsa (400 km)","Satelit GPS (20 200 km)","Satelit geopegun MEASAT (36 000 km)","Bulan (384 000 km)"],b:[0,1,2,3],u:"T² ∝ r³: semakin jauh orbit, semakin panjang tempohnya (ISS ≈ 92 min, GPS ≈ 12 jam, MEASAT 24 jam, Bulan ≈ 27.3 hari)."}},

{n:3, tempat:"Pelantar Pengiraan", sk:"3.1 Mengaplikasikan F = Gm₁m₂/r², g = GM/r² dan daya memusat", lampiran:null,
 kadNama:"g = GM/r²", kadEm:"\u{1F30D}", kadFakta:"Pada altitud h, r = R + h. Semakin tinggi dari permukaan, semakin kecil pecutan graviti.",
 bosKadNama:"Daya Memusat", bosKadEm:"\u{1F3CE}\u{FE0F}", bosKadFakta:"F = mv² ÷ r. Kereta yang membelok perlukan daya memusat daripada geseran tayar.",
 soalan:[
 {j:"nombor",t:"Hitung daya graviti antara dua murid berjisim 50 kg dan 60 kg yang berada 1.0 m di antara pusat mereka. Beri jawapan dalam unit × 10⁻⁷ N.",b:2,tol:0.02,suf:"× 10⁻⁷ N",u:"F = (6.67 × 10⁻¹¹)(50)(60) ÷ 1.0² = 2.0 × 10⁻⁷ N. Sangat kecil, sebab itu tidak terasa."},
 {j:"nombor",t:"Hitung pecutan graviti di permukaan Bumi menggunakan g = GM ÷ R². Beri jawapan kepada 2 tempat perpuluhan.",b:9.81,tol:0.02,suf:"m s⁻²",u:"g = (6.67 × 10⁻¹¹)(5.97 × 10²⁴) ÷ (6.37 × 10⁶)² = 9.81 m s⁻²."},
 {j:"nombor",t:"Sebuah satelit berada pada altitud yang sama dengan jejari Bumi (r = 2R). Hitung pecutan graviti di situ. Beri jawapan kepada 2 tempat perpuluhan.",b:2.45,tol:0.02,suf:"m s⁻²",u:"g berkadar dengan 1/r². Pada r = 2R, g = 9.81 ÷ 4 = 2.45 m s⁻²."},
 {j:"nombor",t:"Sebuah kereta 1 000 kg membelok pada selekoh berjejari 50 m dengan laju 20 m s⁻¹. Hitung daya memusat yang diperlukan.",b:8000,tol:1,suf:"N",u:"F = mv² ÷ r = 1 000 × 20² ÷ 50 = 8 000 N."},
 {j:"nombor",t:"Kereta yang sama membelok pada 10 m s⁻¹ di selekoh yang sama. Hitung daya memusat yang baharu.",b:2000,tol:1,suf:"N",u:"F = 1 000 × 10² ÷ 50 = 2 000 N. Laju separuh, daya menjadi satu per empat."},
 {j:"nombor",t:"Hitung laju sebuah satelit yang mengorbit pada altitud 400 km (r = 6.77 × 10⁶ m) menggunakan v = √(GM ÷ r). Beri jawapan dalam km s⁻¹ kepada 2 tempat perpuluhan.",b:7.67,tol:0.02,suf:"km s⁻¹",u:"v = √(3.98 × 10¹⁴ ÷ 6.77 × 10⁶) = 7 669 m s⁻¹ ≈ 7.67 km s⁻¹."},
 {j:"pilih",t:"Mengapakah lori yang laju lebih mudah tergelincir keluar dari selekoh tajam?",p:["Geseran tidak mencukupi","Inersia lori berkurang semasa membelok","Berat lori bertambah ketika membelok","Daya graviti menolak lori ke luar"],b:0,u:"F = mv²/r: laju tinggi dan jejari kecil memerlukan daya memusat besar. Jika geseran tidak cukup, lori tergelincir."},
 {j:"pilih",t:"Seorang angkasawan bergerak dari permukaan Bumi ke altitud 400 km. Apakah yang berlaku kepada jisimnya?",p:["Tidak berubah","Berkurang sedikit","Bertambah sedikit","Menjadi sifar"],b:0,u:"Jisim ialah kuantiti jirim dan tidak berubah. Yang berubah ialah beratnya kerana g berkurang."}],
 bos:{j:"pilih",t:"Pecutan graviti di Marikh ialah 3.7 m s⁻². Mengapakah pengetahuan ini penting sebelum menghantar kenderaan penjelajah ke sana?",p:["Untuk mereka bentuk sistem pendaratan","Untuk menentukan warna cat kenderaan","Untuk mengira jisim kenderaan di Marikh","Untuk memastikan kenderaan lebih berat di Marikh"],b:0,u:"Nilai g menentukan daya pendaratan, berat kenderaan dan bahan api yang diperlukan. Jisim kenderaan tidak berubah."}},

{n:4, tempat:"Bilik Data Planet", sk:"3.2 Menganalisis Hukum Kepler Ketiga · 3.1 Menentukan jisim Bumi dan Matahari", lampiran:"j1",
 kadNama:"T² ∝ r³", kadEm:"\u{1F52D}", kadFakta:"Bagi semua planet yang mengorbit Matahari, nisbah T² ÷ r³ adalah malar.",
 bosKadNama:"Menimbang Bumi", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Daripada GMm/r² = mv²/r dan v = 2πr/T, jisim jasad pusat M = 4π²r³ ÷ (GT²).",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung tempoh orbit Marikh dalam tahun Bumi. Beri jawapan kepada 2 tempat perpuluhan.",b:1.87,tol:0.02,suf:"tahun",u:"T² = r³ (dalam unit tahun dan AU). T = 1.52^1.5 = 1.87 tahun."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung nilai T² ÷ r³ bagi Musytari. Beri jawapan kepada 2 tempat perpuluhan.",b:1,tol:0.02,suf:"tahun² AU⁻³",u:"11.86² ÷ 5.20³ = 140.7 ÷ 140.6 = 1.00, sama seperti Bumi."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah kesimpulan daripada nilai T² ÷ r³ bagi Bumi dan Musytari?",p:["Nisbah itu malar bagi semua planet","Planet besar mempunyai nisbah yang lebih besar","Nisbah itu bergantung pada jisim planet","Hukum Kepler hanya sah bagi Bumi"],b:0,u:"Nisbah yang sama membuktikan Hukum Kepler Ketiga."},
 {j:"nombor",t:"Sebuah planet rekaan mengorbit Matahari pada jejari 4.0 AU. Berapakah tempoh orbitnya?",b:8,tol:0.02,suf:"tahun",u:"T = r^1.5 = 4.0^1.5 = 8.0 tahun."},
 {j:"nombor",t:"Bulan mengorbit Bumi pada r = 3.84 × 10⁸ m dengan tempoh 27.3 hari (2.36 × 10⁶ s). Hitung jisim Bumi menggunakan M = 4π²r³ ÷ (GT²). Beri jawapan dalam unit × 10²⁴ kg kepada 1 tempat perpuluhan.",b:6,tol:0.1,suf:"× 10²⁴ kg",u:"M = 4π²(3.84 × 10⁸)³ ÷ [(6.67 × 10⁻¹¹)(2.36 × 10⁶)²] = 6.0 × 10²⁴ kg, hampir dengan nilai sebenar 5.97 × 10²⁴ kg."},
 {j:"pilih",t:"Untuk menentukan jisim Matahari dengan formula M = 4π²r³ ÷ (GT²), data apakah yang diperlukan?",p:["Jejari dan tempoh orbit sebuah planet","Jisim dan jejari sebuah planet","Suhu dan diameter Matahari","Jisim planet dan halajunya"],b:0,u:"Jisim planet terbatal dalam terbitan, jadi hanya r dan T orbitnya diperlukan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, satelit buatan manusia di sekeliling Bumi TIDAK boleh menggunakan nilai T² ÷ r³ = 1.00 tahun² AU⁻³. Mengapa?",p:["Satelit itu mengorbit Bumi, bukan Matahari","Satelit lebih kecil daripada planet","Satelit bergerak lebih laju daripada planet","Satelit tidak mematuhi Hukum Kepler"],b:0,u:"Pemalar T²/r³ bergantung pada jisim jasad pusat. Bagi orbit Bumi, pemalarnya berbeza."},
 {j:"nombor",t:"Satelit A mengorbit Bumi dengan tempoh 2 jam. Satelit B mengorbit pada jejari 4 kali jejari A. Hitung tempoh satelit B.",b:16,tol:0.05,suf:"jam",u:"T(B) = T(A) × 4^1.5 = 2 × 8 = 16 jam."}],
 bos:{j:"pilih",t:"Seorang murid mendakwa Musytari mempunyai tempoh orbit panjang kerana jisimnya besar. Penilaian manakah betul?",p:["Salah, tempoh bergantung pada jejari orbit","Betul, jisim besar memperlahankan planet","Betul, jisim besar menambah daya memusat","Salah, Musytari tidak mematuhi Hukum Kepler"],b:0,u:"Jisim planet terbatal dalam GMm/r² = mv²/r. Tempoh orbit bergantung pada jejari orbit dan jisim Matahari."}},

{n:5, tempat:"Pusat Kawalan Satelit", sk:"3.3 Menilai jenis satelit dan halaju lepas", lampiran:null,
 kadNama:"Halaju Lepas", kadEm:"\u{1F680}", kadFakta:"v = √(2GM ÷ R). Bagi Bumi, v ≈ 11.2 km s⁻¹. Ia tidak bergantung pada jisim objek yang dilancarkan.",
 bosKadNama:"Pilih Orbit", bosKadEm:"\u{1F6F0}\u{FE0F}", bosKadFakta:"Orbit geopegun sesuai untuk komunikasi dan siaran. Orbit rendah sesuai untuk pengimejan permukaan Bumi kerana dekat dengan permukaan.",
 soalan:[
 {j:"nombor",t:"Hitung halaju lepas dari permukaan Bumi menggunakan v = √(2GM ÷ R). Beri jawapan dalam km s⁻¹ kepada 1 tempat perpuluhan.",b:11.2,tol:0.1,suf:"km s⁻¹",u:"v = √(2 × 3.98 × 10¹⁴ ÷ 6.37 × 10⁶) = 11 181 m s⁻¹ ≈ 11.2 km s⁻¹."},
 {j:"nombor",t:"Jisim Bulan 7.35 × 10²² kg dan jejarinya 1.74 × 10⁶ m. Hitung halaju lepas dari permukaan Bulan dalam km s⁻¹. Beri jawapan kepada 1 tempat perpuluhan.",b:2.4,tol:0.1,suf:"km s⁻¹",u:"v = √(2 × 6.67 × 10⁻¹¹ × 7.35 × 10²² ÷ 1.74 × 10⁶) = 2 374 m s⁻¹ ≈ 2.4 km s⁻¹."},
 {j:"pilih",t:"Mengapakah kapal terbang tidak boleh terlepas ke angkasa lepas?",p:["Lajunya jauh lebih rendah daripada halaju lepas","Kapal terbang terlalu berat untuk terbang tinggi","Graviti tidak bertindak pada kapal terbang","Udara menolak kapal terbang ke bawah"],b:0,u:"Kapal terbang penumpang terbang sekitar 0.25 km s⁻¹, jauh di bawah 11.2 km s⁻¹."},
 {j:"pilih",t:"Syarikat penyiaran TV mahu satelit yang sentiasa berada di atas Malaysia. Pilihan manakah PALING sesuai?",p:["Satelit geopegun","Satelit orbit rendah 400 km","Satelit orbit kutub 800 km","Satelit yang mengorbit Bulan"],b:0,u:"Satelit geopegun kelihatan pegun dari Bumi, jadi antena di rumah tidak perlu dilaras."},
 {j:"pilih",t:"Agensi pemetaan mahu gambar banjir yang terperinci. Satelit jenis manakah PALING sesuai?",p:["Satelit orbit rendah","Satelit geopegun","Satelit di Titik Lagrange","Satelit yang mengorbit Marikh"],b:0,u:"Satelit orbit rendah lebih dekat dengan permukaan, jadi imejnya lebih terperinci, dan ia melintasi banyak kawasan."},
 {j:"pilih",t:"Satelit orbit rendah mempunyai jangka hayat lebih pendek berbanding satelit geopegun. Sebab utamanya ialah:",p:["Geseran atmosfera nipis memperlahankannya","Ia menerima lebih sedikit cahaya Matahari","Graviti di orbit rendah lebih lemah","Ia bergerak lebih perlahan daripada geopegun"],b:0,u:"Pada altitud rendah masih ada atmosfera nipis, jadi satelit hilang tenaga dan altitudnya menurun."},
 {j:"pilih",t:"Dua roket berlainan jisim dilancarkan dari Bumi. Apakah halaju lepas yang diperlukan oleh roket yang lebih berat?",p:["Sama dengan roket ringan","Lebih tinggi daripada roket ringan","Lebih rendah daripada roket ringan","Dua kali roket ringan"],b:0,u:"v = √(2GM ÷ R) tidak bergantung pada jisim roket. Roket berat cuma memerlukan lebih banyak tenaga."},
 {j:"banyak",t:"Pilih DUA kelebihan satelit geopegun untuk komunikasi.",p:["Liputan berterusan bagi satu kawasan","Antena di Bumi tidak perlu menjejak","Imej permukaan yang sangat terperinci","Kos pelancaran yang sangat rendah"],b:[0,1],u:"Satelit geopegun kekal di atas kawasan yang sama. Kosnya tinggi dan imejnya kurang terperinci kerana jauh."}],
 bos:{j:"pilih",t:"Sebuah negara mahu memantau kebakaran hutan setiap hari dan menyiarkan amaran ke telefon serentak. Cadangan manakah PALING wajar?",p:["Orbit rendah untuk imej, geopegun untuk siaran","Satu satelit geopegun untuk imej dan siaran","Satu satelit orbit rendah untuk imej dan siaran","Belon udara panas untuk imej dan juga siaran"],b:0,u:"Setiap jenis orbit mempunyai kekuatan sendiri: orbit rendah untuk imej terperinci, geopegun untuk liputan komunikasi berterusan."}},

{n:6, tempat:"Studio Misi Angkasa", sk:"3.1 hingga 3.3 Mereka cipta menggunakan pengetahuan kegravitian", lampiran:null,
 kadNama:"Reka Misi", kadEm:"\u{1F6F8}", kadFakta:"Misi angkasa direka berdasarkan tujuan, jenis orbit, tenaga pelancaran, kos dan jangka hayat.",
 bosKadNama:"Reka Cipta Angkasa", bosKadEm:"\u{1F4A1}", bosKadFakta:"Satelit kecil (CubeSat) membolehkan universiti dan sekolah menjalankan misi angkasa dengan kos rendah.",
 soalan:[
 {j:"pilih",t:"Anda mereka satelit kecil untuk memantau paras air sungai di Malaysia setiap hari. Orbit manakah PALING sesuai?",p:["Orbit rendah yang melintasi Malaysia","Orbit geopegun di atas Lautan Pasifik","Orbit mengelilingi Bulan","Orbit di luar sistem suria"],b:0,u:"Orbit rendah memberi imej terperinci dan boleh melintasi Malaysia beberapa kali sehari."},
 {j:"pilih",t:"Tapak pelancaran roket berhampiran khatulistiwa lebih menjimatkan bahan api kerana:",p:["Putaran Bumi menambah laju roket","Graviti di khatulistiwa adalah sifar","Udara di khatulistiwa paling tebal","Jarak ke Bulan paling dekat dari sana"],b:0,u:"Roket yang dilancar ke timur di khatulistiwa mendapat tambahan laju kira-kira 0.46 km s⁻¹ daripada putaran Bumi."},
 {j:"pilih",t:"Anda mereka simulasi orbit menggunakan bola yang diikat tali dan diputar. Apakah yang diwakili oleh tegangan tali?",p:["Daya graviti sebagai daya memusat","Halaju lepas satelit dari Bumi","Rintangan atmosfera ke atas satelit","Jisim satelit yang sedang mengorbit"],b:0,u:"Tegangan tali menarik bola ke pusat, sama seperti graviti menarik satelit."},
 {j:"pilih",t:"Dalam simulasi bola bertali anda, tali tiba-tiba putus. Apakah yang berlaku kepada bola?",p:["Bergerak lurus pada tangen bulatan","Bergerak terus ke pusat bulatan","Terus berpusing di tempat yang sama","Bergerak keluar secara jejarian"],b:0,u:"Tanpa daya memusat, bola meneruskan gerakan pada arah halajunya, iaitu tangen bulatan."},
 {j:"pilih",t:"Anda merancang stesen penyelidikan di Bulan. Faktor manakah PALING penting berkaitan graviti rendah di sana?",p:["Kesan graviti rendah pada tulang","Warna bangunan di permukaan Bulan","Bilangan tingkap pada bangunan","Jarak stesen dari khatulistiwa Bumi"],b:0,u:"Graviti Bulan kira-kira 1/6 graviti Bumi; angkasawan perlu bersenam untuk mengelakkan kehilangan ketumpatan tulang dan otot."},
 {j:"nombor",t:"Anda mereka satelit yang perlu mengorbit Bumi dua kali lebih lama daripada satelit X. Berapa kali ganda jejari orbit satelit X yang diperlukan? Beri jawapan kepada 2 tempat perpuluhan.",b:1.59,tol:0.02,suf:"kali",u:"T² ∝ r³ → r ∝ T^(2/3). r = 2^(2/3) = 1.59 kali."},
 {j:"pilih",t:"Pasukan anda ingin mengurangkan sampah angkasa daripada satelit yang sudah rosak. Cadangan manakah PALING bertanggungjawab?",p:["Turunkan orbitnya supaya terbakar di atmosfera","Biarkan satelit terapung selama-lamanya","Lancarkan lebih banyak satelit di orbit yang sama","Tolak satelit ke orbit yang lebih rendah tanpa kawalan"],b:0,u:"Penurunan orbit terkawal menyebabkan satelit terbakar di atmosfera dan tidak menjadi sampah angkasa."},
 {j:"banyak",t:"Pilih DUA data yang PERLU dalam cadangan misi satelit anda.",p:["Altitud dan tempoh orbit","Tujuan dan jenis data yang dikumpul","Warna logo pada badan satelit","Nama jurutera pembina"],b:[0,1],u:"Tujuan misi menentukan orbit, dan orbit menentukan tempoh, liputan serta jangka hayat."}],
 bos:{j:"buka",
  t:"Reka satu misi satelit kecil untuk membantu Malaysia (contoh: amaran banjir, pemantauan jerebu, internet di kawasan pedalaman).",
  arahan:"Nyatakan tujuan misi, jenis orbit (geopegun atau bukan geopegun) beserta justifikasi, anggaran altitud dan tempoh orbit, hukum fizik yang digunakan (contoh: daya memusat, Hukum Kepler Ketiga), SATU cabaran (kos, sampah angkasa atau jangka hayat) dan cara mengatasinya, serta manfaat kepada masyarakat.",
  u:"Jawapan TP6 yang kukuh memadankan tujuan dengan jenis orbit (orbit rendah untuk imej, geopegun untuk komunikasi berterusan), memberi altitud dan tempoh yang munasabah, menerangkan bahawa graviti menyediakan daya memusat dan T² ∝ r³, mengenal pasti cabaran nyata seperti kos atau sampah angkasa, dan mengaitkan misi dengan manfaat sosial atau ekonomi."}}
];

module.exports = {
  id:"f4b3", tingkatan:4, kod:"3.0 Kegravitian",
  tajuk:"Tarikan Semesta",
  subtajuk:"Fizik Ting. 4 · Bab 3 Kegravitian",
  spi:SPI.f4b3,
  ulasan:{
   1:"{n} dapat mengingat kembali Hukum Kegravitian Semesta Newton, daya memusat dan Hukum Kepler. Langkah seterusnya ialah menjelaskan gerakan planet dan satelit.",
   2:"{n} dapat menjelaskan Hukum Kepler, daya memusat dan perbezaan satelit geopegun dengan bukan geopegun. Perlu lebih latihan pengiraan daya graviti.",
   3:"{n} boleh mengaplikasikan F = Gm₁m₂/r², g = GM/r² dan daya memusat untuk menyelesaikan masalah. Galakkan menganalisis data orbit planet.",
   4:"{n} mampu menganalisis data orbit menggunakan Hukum Kepler Ketiga dan menentukan jisim Bumi. Seterusnya latih menilai pilihan orbit satelit.",
   5:"{n} dapat menilai jenis satelit dan halaju lepas untuk membuat keputusan misi yang wajar. Sudah bersedia mereka bentuk misi sendiri.",
   6:"{n} berjaya mereka bentuk misi satelit yang munasabah dengan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kegravitian. Cadangan: ulang hentian pertama dan buat model orbit dengan bola bertali bersama rakan."
  },
  lampiran:{
   j1:jadual(1, "Data orbit beberapa planet (1 AU = jarak purata Bumi-Matahari)",
     ["Planet", "Jejari orbit, r (AU)", "Tempoh orbit, T (tahun)"],
     [["Bumi","1.00","1.00"],["Marikh","1.52","?"],["Musytari","5.20","11.86"]])
  },
  aras:ARAS
};
