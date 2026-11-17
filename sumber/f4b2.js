/* Sumber kandungan — Fizik KSSM Tingkatan 4, Bab 2 Daya dan Gerakan I.
   SK 2.1 Gerakan linear, 2.2 Graf gerakan linear, 2.3 Gerakan jatuh bebas, 2.4 Inersia,
   2.5 Momentum, 2.6 Daya, 2.7 Impuls dan daya impuls, 2.8 Berat
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf). g = 9.81 m s⁻². */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Garisan Mula", sk:"2.1 Gerakan linear · 2.4 Inersia · 2.8 Berat", lampiran:null,
 kadNama:"Sesaran", kadEm:"\u{1F3C1}", kadFakta:"Jarak ialah jumlah panjang lintasan (skalar). Sesaran ialah jarak terpendek dari titik mula ke titik akhir dalam arah tertentu (vektor).",
 bosKadNama:"Inersia", bosKadEm:"\u{1F6D1}", bosKadFakta:"Inersia ialah sifat objek yang menentang perubahan keadaan gerakannya. Semakin besar jisim, semakin besar inersia.",
 soalan:[
 {j:"pilih",t:"Kadar perubahan halaju dikenali sebagai:",p:["Pecutan","Laju purata","Sesaran","Momentum linear"],b:0,u:"Pecutan, a = (v − u) ÷ t, dengan unit m s⁻²."},
 {j:"pilih",t:"Kadar perubahan sesaran dikenali sebagai:",p:["Laju","Halaju","Pecutan","Impuls"],b:1,u:"Halaju = sesaran ÷ masa. Ia kuantiti vektor."},
 {j:"pilih",t:"Seorang murid berjalan 40 m ke timur, kemudian 30 m ke barat. Berapakah sesarannya?",p:["10 m ke timur","70 m ke timur","10 m ke barat","70 m ke barat"],b:0,u:"Sesaran = 40 m − 30 m = 10 m ke arah timur. Jarak yang dilalui pula ialah 70 m."},
 {j:"pilih",t:"Inersia sesuatu objek bergantung pada:",p:["Jisimnya","Halajunya","Warnanya","Ketinggiannya"],b:0,u:"Semakin besar jisim, semakin sukar objek itu digerakkan atau diberhentikan."},
 {j:"pilih",t:"Berat sesuatu objek ditakrifkan sebagai:",p:["Daya graviti ke atas objek","Kuantiti jirim di dalam sesuatu objek","Isi padu ruang yang dipenuhi objek","Ukuran inersia sesuatu objek"],b:0,u:"Berat, W = mg, ialah daya dan diukur dalam newton. Jisim pula ialah kuantiti jirim."},
 {j:"pilih",t:"Unit S.I. bagi momentum ialah:",p:["kg m s⁻¹","kg m s⁻²","N s⁻¹","J s"],b:0,u:"Momentum, p = mv, jadi unitnya kg m s⁻¹ (sama dengan N s)."},
 {j:"pilih",t:"Gerakan jatuh bebas berlaku apabila objek jatuh di bawah pengaruh:",p:["Daya graviti sahaja","Rintangan udara sahaja","Daya geseran dan graviti","Daya apungan udara"],b:0,u:"Objek jatuh bebas hanya ditindakkan oleh daya graviti. Pecutannya ialah g = 9.81 m s⁻²."},
 {j:"banyak",t:"Pilih DUA kuantiti vektor dalam gerakan linear.",p:["Halaju","Pecutan","Laju","Jarak"],b:[0,1],u:"Halaju dan pecutan mempunyai arah. Laju dan jarak ialah kuantiti skalar."}],
 bos:{j:"pilih",t:"Penumpang bas terdorong ke hadapan apabila bas berhenti secara mengejut. Fenomena ini disebabkan oleh:",p:["Inersia penumpang","Daya geseran tempat duduk","Momentum bas yang bertambah","Daya tolakan dari belakang"],b:0,u:"Badan penumpang cenderung meneruskan gerakan ke hadapan walaupun bas telah berhenti."}},

{n:2, tempat:"Bilik Graf Gerakan", sk:"2.2 Graf gerakan linear: graf s-t dan v-t", lampiran:"g1",
 kadNama:"Graf v-t", kadEm:"\u{1F4C8}", kadFakta:"Dalam graf halaju-masa, kecerunan = pecutan dan luas di bawah graf = sesaran.",
 bosKadNama:"Graf s-t", bosKadEm:"\u{1F4C9}", bosKadFakta:"Dalam graf sesaran-masa, kecerunan = halaju. Garis mengufuk bermaksud objek pegun.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah gerakan objek dari t = 0 s hingga t = 4 s?",p:["Memecut secara seragam","Bergerak dengan halaju seragam","Menyahpecut secara seragam","Pegun di satu kedudukan"],b:0,u:"Halaju bertambah secara linear dari 0 hingga 12 m s⁻¹, jadi pecutan adalah seragam."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung pecutan objek dari t = 0 s hingga t = 4 s.",b:3,tol:0.01,suf:"m s⁻²",u:"a = (12 − 0) ÷ (4 − 0) = 3 m s⁻²."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah gerakan objek dari t = 4 s hingga t = 8 s?",p:["Halaju seragam 12 m s⁻¹","Pegun pada sesaran 12 m","Memecut 12 m s⁻²","Menyahpecut ke 12 m s⁻¹"],b:0,u:"Garis mengufuk dalam graf v-t bermaksud halaju malar, iaitu pecutan sifar."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah magnitud nyahpecutan objek dari t = 8 s hingga t = 10 s?",b:6,tol:0.01,suf:"m s⁻²",u:"a = (0 − 12) ÷ (10 − 8) = −6 m s⁻². Magnitud nyahpecutan ialah 6 m s⁻²."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung jumlah sesaran objek dalam 10 s.",b:84,tol:0.1,suf:"m",u:"Luas = ½(4)(12) + (4)(12) + ½(2)(12) = 24 + 48 + 12 = 84 m."},
 {j:"pilih",t:"Kecerunan graf sesaran melawan masa mewakili:",p:["Halaju","Pecutan","Jarak","Daya"],b:0,u:"Halaju = perubahan sesaran ÷ perubahan masa = kecerunan graf s-t."},
 {j:"pilih",t:"Graf sesaran-masa sebuah kereta ialah garis mengufuk. Ini bermaksud kereta itu:",p:["Pegun","Memecut secara seragam","Bergerak dengan halaju seragam","Menyahpecut secara seragam"],b:0,u:"Sesaran tidak berubah dengan masa, jadi halaju ialah sifar."},
 {j:"pilih",t:"Graf halaju-masa sebuah objek ialah garis lurus yang menurun ke paksi masa. Objek itu:",p:["Menyahpecut secara seragam","Bergerak ke belakang dengan halaju malar","Memecut secara tidak seragam","Pegun selepas bergerak"],b:0,u:"Kecerunan negatif yang malar bermaksud nyahpecutan seragam."}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, hitung laju purata objek bagi keseluruhan perjalanan 10 s.",b:8.4,tol:0.05,suf:"m s⁻¹",u:"Laju purata = jumlah jarak ÷ jumlah masa = 84 m ÷ 10 s = 8.4 m s⁻¹."}},

{n:3, tempat:"Menara Jatuh Bebas", sk:"2.1 Persamaan gerakan linear · 2.3 Gerakan jatuh bebas", lampiran:null,
 kadNama:"Persamaan Gerakan", kadEm:"\u{1F9EE}", kadFakta:"v = u + at · s = ut + ½at² · v² = u² + 2as · s = ½(u + v)t. Hanya sah bagi pecutan seragam.",
 bosKadNama:"Pecutan Graviti", bosKadEm:"\u{1F30D}", bosKadFakta:"Di permukaan Bumi, semua objek yang jatuh bebas memecut pada g = 9.81 m s⁻², tanpa mengira jisimnya.",
 soalan:[
 {j:"nombor",t:"Sebuah kereta bermula dari rehat dan memecut seragam 2 m s⁻² selama 5 s. Hitung halaju akhirnya.",b:10,tol:0.01,suf:"m s⁻¹",u:"v = u + at = 0 + (2)(5) = 10 m s⁻¹."},
 {j:"nombor",t:"Kereta yang sama (dari rehat, a = 2 m s⁻², t = 5 s). Hitung jarak yang dilaluinya.",b:25,tol:0.01,suf:"m",u:"s = ut + ½at² = 0 + ½(2)(5²) = 25 m."},
 {j:"nombor",t:"Sebuah motosikal bergerak pada 20 m s⁻¹ dan dibrek seragam sehingga berhenti dalam jarak 40 m. Hitung magnitud nyahpecutannya.",b:5,tol:0.01,suf:"m s⁻²",u:"v² = u² + 2as → 0 = 400 + 2a(40) → a = −5 m s⁻²."},
 {j:"nombor",t:"Sebiji batu dijatuhkan dari rehat dari puncak menara. Hitung halajunya selepas 2.0 s. Beri jawapan kepada 2 tempat perpuluhan.",b:19.62,tol:0.05,suf:"m s⁻¹",u:"v = u + gt = 0 + (9.81)(2.0) = 19.62 m s⁻¹."},
 {j:"nombor",t:"Sebiji batu lain jatuh bebas dari rehat selama 3.0 s sebelum mencecah tanah. Hitung tinggi jatuhannya. Beri jawapan kepada 1 tempat perpuluhan.",b:44.1,tol:0.1,suf:"m",u:"s = ½gt² = ½(9.81)(3.0²) = 44.1 m."},
 {j:"nombor",t:"Sebiji bola dilontar tegak ke atas dengan halaju 14.7 m s⁻¹. Berapakah masa untuk sampai ke tinggi maksimum? Beri jawapan kepada 2 tempat perpuluhan.",b:1.5,tol:0.01,suf:"s",u:"Di tinggi maksimum, v = 0. t = (0 − 14.7) ÷ (−9.81) = 1.50 s."},
 {j:"pilih",t:"Sehelai bulu ayam dan sebiji syiling dilepaskan serentak di dalam tiub vakum. Apakah yang berlaku?",p:["Kedua-duanya sampai ke dasar serentak","Syiling sampai dahulu kerana lebih berat","Bulu ayam terapung di dalam tiub","Bulu ayam jatuh lebih laju"],b:0,u:"Tanpa rintangan udara, semua objek jatuh dengan pecutan yang sama, g."},
 {j:"pilih",t:"Persamaan manakah sesuai untuk mencari jarak jika u, v dan t diketahui tetapi a tidak diketahui?",p:["s = ½(u + v)t","v = u + at","v² = u² + 2as","s = ut + ½at²"],b:0,u:"s = ½(u + v)t tidak memerlukan nilai pecutan."}],
 bos:{j:"nombor",t:"Bola dalam soalan tadi dilontar ke atas pada 14.7 m s⁻¹. Hitung tinggi maksimum yang dicapai. Beri jawapan kepada 1 tempat perpuluhan.",b:11,tol:0.1,suf:"m",u:"v² = u² − 2gs → 0 = 14.7² − 2(9.81)s → s = 216.09 ÷ 19.62 = 11.0 m."}},

{n:4, tempat:"Gelanggang Momentum", sk:"2.5 Momentum: prinsip keabadian momentum", lampiran:"j1",
 kadNama:"Keabadian Momentum", kadEm:"\u{1F3B1}", kadFakta:"Jumlah momentum sebelum perlanggaran atau letupan sama dengan jumlah momentum selepasnya, jika tiada daya luar bertindak.",
 bosKadNama:"Letupan", bosKadEm:"\u{1F680}", bosKadFakta:"Dalam letupan, jumlah momentum awal ialah sifar. Bahagian yang terpisah bergerak dalam arah bertentangan dengan momentum yang sama magnitud.",
 soalan:[
 {j:"nombor",t:"Sebuah kereta berjisim 1 500 kg bergerak pada 20 m s⁻¹. Hitung momentumnya.",b:30000,tol:1,suf:"kg m s⁻¹",u:"p = mv = 1 500 × 20 = 30 000 kg m s⁻¹."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung jumlah momentum sebelum perlanggaran II. (Arah ke kanan positif.)",b:4.5,tol:0.01,suf:"kg m s⁻¹",u:"(2.0)(3.0) + (1.0)(−1.5) = 6.0 − 1.5 = 4.5 kg m s⁻¹."},
 {j:"nombor",t:"Berdasarkan Jadual 1, troli R dan S melekat selepas perlanggaran II. Hitung halaju sepunya mereka.",b:1.5,tol:0.01,suf:"m s⁻¹",u:"v = 4.5 ÷ (2.0 + 1.0) = 1.5 m s⁻¹ ke kanan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, perlanggaran I ialah perlanggaran kenyal kerana:",p:["Jumlah tenaga kinetik diabadikan","Kedua-dua troli melekat bersama","Jumlah momentum bertambah","Troli P bergerak lebih laju selepasnya"],b:0,u:"Tenaga kinetik sebelum = ½(1.0)(4.0²) = 8 J, dan selepas = ½(1.0)(4.0²) = 8 J."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah yang hilang dalam perlanggaran II walaupun momentum diabadikan?",p:["Sebahagian tenaga kinetik","Sebahagian jisim troli","Sebahagian momentum","Daya graviti troli"],b:0,u:"Perlanggaran tidak kenyal menukar sebahagian tenaga kinetik kepada haba dan bunyi."},
 {j:"nombor",t:"Sepucuk senapang berjisim 4.0 kg menembak peluru 0.020 kg pada 400 m s⁻¹. Hitung laju sentakan senapang.",b:2,tol:0.01,suf:"m s⁻¹",u:"0 = (0.020)(400) + (4.0)v → v = −2.0 m s⁻¹. Lajunya 2.0 m s⁻¹ ke belakang."},
 {j:"pilih",t:"Roket boleh memecut di angkasa lepas yang tiada udara kerana:",p:["Gas ekzos ditolak ke belakang, roket bergerak ke hadapan","Udara di belakang roket menolaknya ke hadapan","Graviti Bumi menarik roket ke atas","Jisim roket bertambah semasa terbang"],b:0,u:"Momentum gas ke belakang sama magnitud dengan momentum roket ke hadapan."},
 {j:"banyak",t:"Pilih DUA situasi yang menunjukkan prinsip keabadian momentum.",p:["Sotong memancut air untuk bergerak","Senapang tersentak ke belakang","Bola bergolek menuruni bukit yang curam","Buah kelapa jatuh dari pokok yang tinggi"],b:[0,1],u:"Kedua-duanya letupan atau pancutan: momentum ke belakang menghasilkan momentum ke hadapan."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, jika troli R dan S dalam perlanggaran II melantun berasingan, apakah yang PASTI masih benar?",p:["Jumlah momentum selepas ialah 4.5 kg m s⁻¹","Kedua-dua troli berhenti selepas perlanggaran","Jumlah tenaga kinetik bertambah","Troli S bergerak ke kiri selepasnya"],b:0,u:"Tanpa daya luar, jumlah momentum sentiasa diabadikan dalam apa-apa jenis perlanggaran."}},

{n:5, tempat:"Pusat Keselamatan Jalan", sk:"2.6 Daya · 2.7 Impuls dan daya impuls", lampiran:null,
 kadNama:"F = ma", kadEm:"\u{1F4AA}", kadFakta:"Daya paduan = jisim × pecutan. Daya 1 N menghasilkan pecutan 1 m s⁻² pada jisim 1 kg.",
 bosKadNama:"Daya Impuls", bosKadEm:"\u{1F4A5}", bosKadFakta:"Daya impuls, F = Δp ÷ t. Memanjangkan masa hentaman mengurangkan daya impuls.",
 soalan:[
 {j:"nombor",t:"Sebuah kereta berjisim 1 200 kg memecut pada 2.5 m s⁻². Hitung daya paduan yang bertindak.",b:3000,tol:1,suf:"N",u:"F = ma = 1 200 × 2.5 = 3 000 N."},
 {j:"nombor",t:"Sebiji bola 0.45 kg pegun ditendang dan meninggalkan kaki pada 20 m s⁻¹. Masa sentuhan ialah 0.05 s. Hitung daya impuls purata.",b:180,tol:0.5,suf:"N",u:"F = (mv − mu) ÷ t = (0.45 × 20 − 0) ÷ 0.05 = 180 N."},
 {j:"pilih",t:"Beg udara kereta mengurangkan kecederaan kerana ia:",p:["Memanjangkan masa hentaman","Mengurangkan jisim pemandu","Menambah halaju pemandu","Memendekkan masa hentaman"],b:0,u:"Perubahan momentum yang sama berlaku dalam masa lebih panjang, jadi daya impuls berkurang."},
 {j:"pilih",t:"Zon remuk pada bahagian depan kereta direka supaya:",p:["Remuk perlahan-lahan untuk memanjangkan masa perlanggaran","Kekal tegar tanpa sebarang perubahan bentuk","Menambah jisim kereta supaya lebih stabil","Memantulkan kereta lain ke belakang dengan kuat"],b:0,u:"Bahagian yang remuk memanjangkan masa perlanggaran dan menyerap tenaga, jadi daya ke atas penumpang berkurang."},
 {j:"pilih",t:"Pemain kriket menggerakkan tangannya ke belakang semasa menangkap bola laju. Tujuannya ialah:",p:["Mengurangkan daya impuls pada tangan","Menambah momentum bola","Memendekkan masa tangkapan","Menambah halaju bola"],b:0,u:"Tangan yang bergerak ke belakang memanjangkan masa, jadi daya impuls pada tangan lebih kecil."},
 {j:"pilih",t:"Sebiji tukul besi digunakan untuk memaku. Mengapakah kepala tukul diperbuat daripada besi yang keras?",p:["Memendekkan masa hentaman supaya daya impuls besar","Memanjangkan masa hentaman supaya daya kecil","Mengurangkan momentum tukul semasa hentaman","Supaya tukul lebih ringan dan mudah diangkat"],b:0,u:"Permukaan keras berhenti dalam masa sangat singkat, jadi daya impuls besar untuk memacu paku."},
 {j:"nombor",t:"Seorang angkasawan berjisim 60 kg berada di Bulan (g = 1.62 N kg⁻¹). Hitung beratnya di Bulan.",b:97.2,tol:0.1,suf:"N",u:"W = mg = 60 × 1.62 = 97.2 N. Jisimnya kekal 60 kg."},
 {j:"banyak",t:"Pilih DUA ciri keselamatan yang berfungsi dengan memanjangkan masa hentaman.",p:["Tilam tebal di tapak lompat tinggi","Topi keledar berlapik polistirena","Sistem brek antikunci (ABS) pada roda","Cermin sisi kereta yang boleh dilaras"],b:[0,1],u:"Tilam dan lapisan polistirena memanjangkan masa hentaman. ABS membantu stereng dan cermin membantu penglihatan."}],
 bos:{j:"pilih",t:"Dua reka bentuk topi keledar diuji. Reka bentuk X: daya hentaman purata 4 000 N selama 0.004 s. Reka bentuk Y: daya purata 1 600 N selama 0.010 s. Pilihan manakah PALING wajar?",p:["Y, kerana daya ke atas kepala lebih kecil","X, kerana masa hentaman lebih singkat","X, kerana impulsnya lebih besar","Y, kerana impulsnya lebih kecil"],b:0,u:"Kedua-duanya mempunyai impuls yang sama (16 N s). Y memanjangkan masa, jadi daya ke atas kepala lebih kecil dan lebih selamat."}},

{n:6, tempat:"Studio Reka Selamat", sk:"2.1 hingga 2.8 Mereka cipta menggunakan pengetahuan daya dan gerakan", lampiran:null,
 kadNama:"Reka Bentuk Selamat", kadEm:"\u{1F95A}", kadFakta:"Reka bentuk yang melindungi objek rapuh memanjangkan masa hentaman dan mengagihkan daya ke kawasan yang luas.",
 bosKadNama:"Reka Cipta Gerakan", bosKadEm:"\u{1F4A1}", bosKadFakta:"Reka cipta yang baik diuji, diukur dan ditambah baik berdasarkan data, bukan tekaan.",
 soalan:[
 {j:"nombor",t:"Anda mereka beg udara. Pemandu 70 kg bergerak pada 15 m s⁻¹ dan daya maksimum selamat ialah 7 000 N. Berapakah masa hentaman minimum yang perlu disediakan?",b:0.15,tol:0.005,suf:"s",u:"t = Δp ÷ F = (70 × 15) ÷ 7 000 = 1 050 ÷ 7 000 = 0.15 s."},
 {j:"pilih",t:"Anda mereka bekas untuk menjatuhkan telur dari tingkat tiga tanpa pecah. Bahan manakah PALING sesuai sebagai pelapik?",p:["Span lembut yang tebal","Kepingan kayu yang keras","Plat logam yang nipis","Batu kerikil yang kecil"],b:0,u:"Span mampat perlahan-lahan, memanjangkan masa hentaman dan mengurangkan daya impuls."},
 {j:"pilih",t:"Untuk memperlahankan bekas telur semasa jatuh, ciri tambahan manakah PALING berkesan?",p:["Payung terjun daripada beg plastik","Pemberat batu di dasar bekas","Bentuk bekas yang tajam di hujung","Lapisan cat licin di luar bekas"],b:0,u:"Payung terjun menambah rintangan udara, jadi halaju sebelum hentaman lebih kecil."},
 {j:"pilih",t:"Anda mereka bampar kereta mainan untuk eksperimen perlanggaran. Bagaimanakah anda membandingkan keberkesanan dua bampar secara adil?",p:["Lepaskan kereta dari ketinggian landasan yang sama","Lepaskan kereta dari ketinggian berbeza","Gunakan jisim kereta yang berbeza","Uji setiap bampar sekali sahaja"],b:0,u:"Halaju hentaman yang sama (ketinggian sama) dan jisim yang sama menjadikan perbandingan adil."},
 {j:"pilih",t:"Sekolah anda mahu tilam baharu untuk acara lompat tinggi. Kriteria manakah PALING penting?",p:["Tebal dan mampat perlahan","Nipis dan sangat keras","Ringan tetapi licin","Berwarna terang dan menarik"],b:0,u:"Tilam tebal yang mampat perlahan memanjangkan masa hentaman, jadi daya pada atlet berkurang."},
 {j:"pilih",t:"Anda mencadangkan cara mengurangkan kecederaan penumpang bas sekolah semasa brek mengejut. Cadangan manakah PALING berkesan?",p:["Pasang tali pinggang keledar","Tambah lebih banyak tempat berdiri","Kurangkan bilangan kerusi dalam bas","Gunakan kerusi plastik yang lebih ringan"],b:0,u:"Tali pinggang menahan penumpang daripada terdorong ke hadapan kerana inersia."},
 {j:"pilih",t:"Kereta mainan roket belon anda bergerak terlalu perlahan. Pengubahsuaian manakah PALING wajar?",p:["Kurangkan jisim kereta","Gunakan belon yang lebih kecil","Tambah pemberat pada kereta","Tambah geseran pada gandar roda"],b:0,u:"Bagi daya tujahan yang sama, jisim lebih kecil menghasilkan pecutan lebih besar (a = F ÷ m)."},
 {j:"banyak",t:"Pilih DUA data yang perlu direkod untuk menilai reka bentuk bekas telur anda.",p:["Ketinggian jatuhan","Keadaan telur selepas jatuh","Warna cat pada kotak bekas","Nama jenama telur yang dibeli"],b:[0,1],u:"Ketinggian menentukan halaju hentaman, dan keadaan telur menunjukkan keberkesanan reka bentuk."}],
 bos:{j:"buka",
  t:"Reka satu alat pelindung (contoh: bekas telur, pelapik lutut atau bampar troli) yang mengurangkan daya impuls semasa hentaman.",
  arahan:"Nyatakan bahan yang dipilih dan sebabnya, prinsip fizik yang digunakan (impuls dan daya impuls, F = Δp ÷ t), cara anda menguji reka bentuk secara adil, data yang direkod, SATU penambahbaikan selepas ujian, dan SATU pertimbangan kos atau keselamatan.",
  u:"Jawapan TP6 yang kukuh memilih bahan yang mampat atau kenyal untuk memanjangkan masa hentaman, menerangkan bahawa Δp yang sama dalam masa lebih panjang menghasilkan daya lebih kecil, menguji dari ketinggian sama dengan jisim sama, merekod data, mencadangkan penambahbaikan berdasarkan keputusan, dan mengambil kira kos serta keselamatan bahan."}}
];

module.exports = {
  id:"f4b2", tingkatan:4, kod:"2.0 Daya dan Gerakan I",
  tajuk:"Lintasan Laju",
  subtajuk:"Fizik Ting. 4 · Bab 2 Daya dan Gerakan I",
  spi:SPI.f4b2,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep jarak, sesaran, laju, halaju, pecutan, inersia dan berat. Langkah seterusnya ialah mentafsir graf gerakan.",
   2:"{n} dapat menjelaskan gerakan linear melalui graf sesaran-masa dan halaju-masa. Perlu lebih latihan menggunakan persamaan gerakan linear.",
   3:"{n} boleh mengaplikasikan persamaan gerakan linear dan gerakan jatuh bebas untuk menyelesaikan masalah. Galakkan menganalisis perlanggaran dan letupan.",
   4:"{n} mampu menganalisis perlanggaran dan letupan menggunakan prinsip keabadian momentum. Seterusnya latih menilai ciri keselamatan berasaskan impuls.",
   5:"{n} dapat menilai ciri keselamatan menggunakan konsep daya, impuls dan daya impuls. Sudah bersedia mereka bentuk alat pelindung.",
   6:"{n} berjaya mereka bentuk alat yang mengurangkan daya impuls dan mengujinya secara adil. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Daya dan Gerakan I. Cadangan: ulang hentian pertama dan lakar graf halaju-masa bagi perjalanan ke sekolah."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,2,4,6,8,10], xLabel:"Masa (s)", titik:true, yMin:0, yMaks:12, grid:6,
     siri:[{label:"Halaju (m s⁻¹)", y:[0,6,12,12,12,0], warna:"ungu"}],
     kapsyen:"Rajah 1 · Graf halaju melawan masa sebuah objek",
     alt:"Graf halaju-masa: halaju naik secara linear dari 0 ke 12 meter sesaat dalam 4 saat, malar 12 dari saat 4 hingga 8, kemudian turun ke 0 pada saat 10"},
   j1:jadual(1, "Data dua perlanggaran troli di atas landasan licin",
     ["Perlanggaran", "Sebelum", "Selepas"],
     [["I","P: 1.0 kg, 4.0 m s^{-1} ke kanan; Q: 1.0 kg, pegun","P: pegun; Q: 4.0 m s^{-1} ke kanan"],
      ["II","R: 2.0 kg, 3.0 m s^{-1} ke kanan; S: 1.0 kg, 1.5 m s^{-1} ke kiri","R dan S melekat bersama"]])
  },
  aras:ARAS
};
