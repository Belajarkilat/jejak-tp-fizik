/* Sumber kandungan — Fizik KSSM Tingkatan 4, Bab 5 Gelombang.
   SK 5.1 Asas gelombang, 5.2 Pelembapan dan resonans, 5.3 Pantulan, 5.4 Pembiasan,
   5.5 Pembelauan, 5.6 Interferens, 5.7 Gelombang elektromagnet
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf). Jawapan berangka disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Pantai Gelombang", sk:"5.1 Asas gelombang · 5.7 Spektrum elektromagnet", lampiran:null,
 kadNama:"Gelombang", kadEm:"\u{1F30A}", kadFakta:"Gelombang memindahkan tenaga dari satu tempat ke tempat lain tanpa memindahkan jirim medium.",
 bosKadNama:"Spektrum EM", bosKadEm:"\u{1F308}", bosKadFakta:"Gelombang radio, mikro, inframerah, cahaya nampak, ultraungu, sinar-X dan sinar gama bergerak pada 3.0 × 10⁸ m s⁻¹ dalam vakum.",
 soalan:[
 {j:"pilih",t:"Apakah yang dipindahkan oleh gelombang dari satu tempat ke tempat lain?",p:["Tenaga","Jirim medium","Zarah air","Jisim"],b:0,u:"Zarah medium hanya bergetar di kedudukan asal. Yang bergerak ke hadapan ialah tenaga."},
 {j:"pilih",t:"Dalam gelombang melintang, zarah medium bergetar:",p:["Berserenjang dengan arah perambatan","Selari dengan arah perambatan","Dalam bulatan yang besar","Mengikut arah angin"],b:0,u:"Contoh: gelombang air dan gelombang pada tali."},
 {j:"pilih",t:"Gelombang bunyi ialah gelombang:",p:["Membujur","Melintang","Elektromagnet","Permukaan air"],b:0,u:"Zarah udara bergetar selari dengan arah perambatan, membentuk mampatan dan regangan."},
 {j:"pilih",t:"Bilangan ayunan lengkap dalam satu saat dikenali sebagai:",p:["Frekuensi","Tempoh","Amplitud","Panjang gelombang"],b:0,u:"Frekuensi, f, diukur dalam hertz (Hz). Tempoh, T = 1 ÷ f."},
 {j:"pilih",t:"Sesaran maksimum zarah dari kedudukan keseimbangan dikenali sebagai:",p:["Amplitud","Panjang gelombang","Frekuensi","Tempoh"],b:0,u:"Amplitud berkaitan dengan tenaga gelombang: amplitud lebih besar, tenaga lebih besar."},
 {j:"pilih",t:"Gelombang manakah boleh merambat melalui vakum?",p:["Cahaya","Bunyi","Gelombang air","Gelombang spring"],b:0,u:"Gelombang elektromagnet tidak memerlukan medium. Gelombang mekanik memerlukan medium."},
 {j:"pilih",t:"Gelombang elektromagnet yang mempunyai frekuensi paling tinggi ialah:",p:["Sinar gama","Gelombang radio","Inframerah","Ultraungu"],b:0,u:"Susunan frekuensi menaik: radio, mikro, inframerah, cahaya nampak, ultraungu, sinar-X, sinar gama."},
 {j:"banyak",t:"Pilih DUA contoh gelombang mekanik.",p:["Gelombang bunyi","Gelombang air","Gelombang radio","Sinar-X"],b:[0,1],u:"Gelombang mekanik memerlukan medium. Gelombang radio dan sinar-X ialah gelombang elektromagnet."}],
 bos:{j:"susun",t:"Susun gelombang elektromagnet berikut mengikut panjang gelombang, dari paling panjang ke paling pendek.",p:["Gelombang radio","Gelombang mikro","Inframerah","Ultraungu","Sinar-X"],b:[0,1,2,3,4],u:"Panjang gelombang berkurang apabila frekuensi bertambah, kerana c = fλ adalah malar."}},

{n:2, tempat:"Bilik Graf Gelombang", sk:"5.1 Ciri gelombang dan graf gelombang · 5.2 Pelembapan dan resonans", lampiran:"g1",
 kadNama:"v = fλ", kadEm:"\u{1F4CF}", kadFakta:"Laju gelombang = frekuensi × panjang gelombang. Frekuensi ditentukan oleh sumber gelombang.",
 bosKadNama:"Resonans", bosKadEm:"\u{1F3B5}", bosKadFakta:"Resonans berlaku apabila sistem dipaksa berayun pada frekuensi aslinya. Amplitud ayunan menjadi maksimum.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah amplitud gelombang itu?",b:3,tol:0.05,suf:"cm",u:"Sesaran maksimum dari paksi jarak ialah 3 cm."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah panjang gelombang itu?",b:4,tol:0.05,suf:"cm",u:"Satu gelombang lengkap berulang selepas 4 cm, contohnya dari puncak di 1 cm ke puncak di 5 cm."},
 {j:"nombor",t:"Berdasarkan Rajah 1, gelombang itu dihasilkan oleh penggetar berfrekuensi 5 Hz. Hitung laju gelombang dalam cm s⁻¹.",b:20,tol:0.1,suf:"cm s⁻¹",u:"v = fλ = 5 × 4 = 20 cm s⁻¹."},
 {j:"nombor",t:"Penggetar dalam soalan tadi berfrekuensi 5 Hz. Hitung tempoh ayunannya.",b:0.2,tol:0.005,suf:"s",u:"T = 1 ÷ f = 1 ÷ 5 = 0.2 s."},
 {j:"pilih",t:"Pelembapan berlaku apabila amplitud ayunan:",p:["Berkurang kerana kehilangan tenaga","Bertambah kerana tenaga dibekalkan","Kekal kerana tiada geseran","Berganda pada frekuensi asli"],b:0,u:"Tenaga hilang kepada persekitaran, contohnya melalui rintangan udara, jadi amplitud berkurang."},
 {j:"pilih",t:"Seorang penyanyi memecahkan gelas kaca dengan nyanyiannya. Fenomena ini disebabkan oleh:",p:["Resonans","Pelembapan","Pembiasan","Pembelauan"],b:0,u:"Frekuensi suara sama dengan frekuensi asli gelas, jadi gelas berayun dengan amplitud yang sangat besar."},
 {j:"pilih",t:"Jika frekuensi sumber digandakan dalam medium yang sama, panjang gelombang menjadi:",p:["Separuh","Dua kali ganda","Tidak berubah","Empat kali ganda"],b:0,u:"Laju dalam medium yang sama tetap. Daripada v = fλ, jika f berganda, λ menjadi separuh."},
 {j:"pilih",t:"Apakah perbezaan utama gelombang bunyi dengan gelombang cahaya?",p:["Bunyi memerlukan medium","Cahaya memerlukan medium","Bunyi bergerak lebih laju","Cahaya ialah gelombang membujur"],b:0,u:"Bunyi ialah gelombang mekanik membujur. Cahaya ialah gelombang elektromagnet melintang yang boleh merambat dalam vakum."}],
 bos:{j:"pilih",t:"Penyerap hentak pada motosikal menggunakan minyak. Apakah fungsi minyak itu?",p:["Melembapkan ayunan spring","Menghasilkan resonans","Menambah amplitud ayunan","Menambah frekuensi asli spring"],b:0,u:"Minyak menyerap tenaga ayunan supaya motosikal tidak terus terlantun selepas melalui lubang."}},

{n:3, tempat:"Tangki Riak", sk:"5.3 Pantulan · 5.4 Pembiasan · 5.5 Pembelauan gelombang", lampiran:null,
 kadNama:"Pantulan", kadEm:"\u{1F501}", kadFakta:"Selepas pantulan, frekuensi, panjang gelombang dan laju tidak berubah. Sudut tuju sama dengan sudut pantulan.",
 bosKadNama:"Pembiasan", bosKadEm:"\u{1F3D6}\u{FE0F}", bosKadFakta:"Pembiasan berlaku apabila laju gelombang berubah. Frekuensi kekal, tetapi panjang gelombang dan arah berubah.",
 soalan:[
 {j:"nombor",t:"Kapal menghantar denyut sonar dan menerima gemanya selepas 0.40 s. Laju bunyi dalam air laut ialah 1 500 m s⁻¹. Hitung kedalaman laut.",b:300,tol:0.5,suf:"m",u:"Bunyi bergerak ke dasar dan kembali: d = vt ÷ 2 = 1 500 × 0.40 ÷ 2 = 300 m."},
 {j:"nombor",t:"Gelombang air di kawasan dalam bergerak pada 0.40 m s⁻¹ dengan panjang gelombang 2.0 cm. Hitung frekuensinya.",b:20,tol:0.05,suf:"Hz",u:"f = v ÷ λ = 0.40 ÷ 0.020 = 20 Hz."},
 {j:"nombor",t:"Gelombang dalam soalan tadi memasuki kawasan cetek, dan panjang gelombangnya menjadi 1.2 cm. Hitung lajunya di kawasan cetek.",b:0.24,tol:0.005,suf:"m s⁻¹",u:"Frekuensi tidak berubah (20 Hz). v = fλ = 20 × 0.012 = 0.24 m s⁻¹."},
 {j:"pilih",t:"Apabila gelombang air bergerak dari kawasan dalam ke kawasan cetek, ia:",p:["Dibiaskan mendekati normal","Dibiaskan menjauhi normal","Bertambah laju","Bertambah panjang gelombang"],b:0,u:"Laju berkurang di kawasan cetek, jadi gelombang membengkok ke arah normal."},
 {j:"pilih",t:"Pembelauan paling ketara apabila saiz celah:",p:["Hampir sama dengan panjang gelombang","Jauh lebih besar daripada panjang gelombang","Sifar","Dua puluh kali panjang gelombang"],b:0,u:"Celah yang kecil berbanding panjang gelombang menghasilkan gelombang yang tersebar dalam bentuk bulatan."},
 {j:"pilih",t:"Mengapakah kita boleh mendengar suara orang di sebalik dinding tetapi tidak dapat melihatnya?",p:["Bunyi lebih mudah dibelaukan berbanding cahaya","Cahaya lebih mudah dibelaukan berbanding bunyi","Bunyi bergerak lebih laju daripada cahaya","Cahaya tidak boleh dipantulkan"],b:0,u:"Panjang gelombang bunyi (berskala meter) hampir dengan saiz pintu, manakala cahaya beratus nanometer sahaja."},
 {j:"pilih",t:"Ombak di pantai sentiasa tiba hampir selari dengan garis pantai. Sebabnya:",p:["Pembiasan apabila laut menjadi cetek","Pantulan daripada tebing pantai","Pembelauan melalui celah batu","Interferens dua ombak"],b:0,u:"Bahagian ombak di kawasan cetek bergerak lebih perlahan, jadi muka gelombang membengkok selari dengan pantai."},
 {j:"pilih",t:"Selepas gelombang dibelaukan melalui celah, kuantiti manakah TIDAK berubah?",p:["Panjang gelombang","Arah perambatan","Bentuk muka gelombang","Amplitud gelombang"],b:0,u:"Pembelauan mengubah arah dan bentuk muka gelombang, dan amplitud berkurang, tetapi panjang gelombang dan laju kekal."}],
 bos:{j:"pilih",t:"Pada waktu malam, bunyi dari jauh kedengaran lebih jelas. Penjelasan manakah betul?",p:["Bunyi dibiaskan ke arah bumi oleh lapisan udara","Bunyi dipantulkan oleh bulan","Bunyi bergerak lebih laju dalam udara sejuk","Pembelauan bunyi berhenti pada waktu malam"],b:0,u:"Udara dekat tanah lebih sejuk pada waktu malam. Bunyi bergerak lebih perlahan di situ, jadi ia membengkok ke arah tanah."}},

{n:4, tempat:"Makmal Interferens", sk:"5.6 Interferens gelombang: λ = ax/D", lampiran:"j1",
 kadNama:"Superposisi", kadEm:"\u{2795}", kadFakta:"Interferens membina berlaku apabila puncak bertemu puncak. Interferens memusnah berlaku apabila puncak bertemu lembangan.",
 bosKadNama:"λ = ax/D", bosKadEm:"\u{1F4CA}", bosKadFakta:"a = jarak antara dua sumber, x = jarak antara dua pinggir terang berturutan, D = jarak dari sumber ke skrin.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung jarak di antara dua pinggir terang berturutan, x, dalam mm.",b:2.4,tol:0.02,suf:"mm",u:"Jarak 10 pinggir ialah 24 mm, jadi x = 24 ÷ 10 = 2.4 mm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung panjang gelombang cahaya itu dalam nm.",b:600,tol:2,suf:"nm",u:"λ = ax ÷ D = (0.50 × 10⁻³)(2.4 × 10⁻³) ÷ 2.0 = 6.0 × 10⁻⁷ m = 600 nm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, jika skrin dialihkan sehingga D = 3.0 m, berapakah nilai x yang baharu dalam mm?",b:3.6,tol:0.02,suf:"mm",u:"x = λD ÷ a = (6.0 × 10⁻⁷)(3.0) ÷ (0.50 × 10⁻³) = 3.6 × 10⁻³ m = 3.6 mm."},
 {j:"pilih",t:"Berdasarkan Jadual 1, jika jarak antara dua celah, a, digandakan, pinggir terang akan menjadi:",p:["Lebih rapat","Lebih jauh","Tidak berubah","Hilang sepenuhnya"],b:0,u:"x = λD ÷ a. Apabila a berganda, x menjadi separuh."},
 {j:"pilih",t:"Berdasarkan Jadual 1, jika cahaya merah diganti dengan cahaya biru, pinggir terang akan menjadi:",p:["Lebih rapat","Lebih jauh","Tidak berubah","Lebih terang dan tebal"],b:0,u:"Panjang gelombang cahaya biru lebih pendek, jadi x = λD ÷ a lebih kecil."},
 {j:"nombor",t:"Dua pembesar suara 1.5 m terpisah. Pada jarak 6.0 m, jarak di antara dua kawasan bunyi kuat ialah 2.0 m. Hitung panjang gelombang bunyi.",b:0.5,tol:0.01,suf:"m",u:"λ = ax ÷ D = 1.5 × 2.0 ÷ 6.0 = 0.50 m."},
 {j:"nombor",t:"Bunyi dalam soalan tadi bergerak pada 330 m s⁻¹. Hitung frekuensinya.",b:660,tol:1,suf:"Hz",u:"f = v ÷ λ = 330 ÷ 0.50 = 660 Hz."},
 {j:"pilih",t:"Seorang murid berjalan di hadapan dua pembesar suara yang memainkan nada sama. Bunyi berubah kuat dan perlahan berulang kali. Sebabnya:",p:["Interferens membina dan memusnah","Pembiasan bunyi oleh udara","Pantulan bunyi oleh lantai","Pelembapan bunyi oleh dinding"],b:0,u:"Di sesetengah titik, gelombang tiba sefasa (kuat). Di titik lain, ia tiba berlawanan fasa (perlahan)."}],
 bos:{j:"pilih",t:"Fon kepala pembatal bunyi menghasilkan gelombang bunyi tambahan. Bagaimanakah ia mengurangkan bising?",p:["Gelombang yang berlawanan fasa menghasilkan interferens memusnah","Gelombang tambahan menyerap semua tenaga bunyi","Gelombang tambahan membiaskan bising menjauhi telinga","Gelombang tambahan mempunyai frekuensi lebih tinggi"],b:0,u:"Lembangan gelombang tambahan bertemu puncak gelombang bising, jadi amplitud paduan hampir sifar."}},

{n:5, tempat:"Menara Komunikasi", sk:"5.7 Gelombang elektromagnet · 5.2 dan 5.5 Menilai aplikasi gelombang", lampiran:null,
 kadNama:"c = fλ", kadEm:"\u{1F4F6}", kadFakta:"Semua gelombang elektromagnet bergerak pada c = 3.0 × 10⁸ m s⁻¹ dalam vakum.",
 bosKadNama:"Pilih Gelombang", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Setiap jenis gelombang elektromagnet mempunyai kegunaan dan bahayanya sendiri. Pilihan bergantung pada tujuan dan risiko.",
 soalan:[
 {j:"nombor",t:"Stesen radio FM bersiaran pada 100 MHz. Hitung panjang gelombangnya.",b:3,tol:0.01,suf:"m",u:"λ = c ÷ f = (3.0 × 10⁸) ÷ (100 × 10⁶) = 3.0 m."},
 {j:"nombor",t:"Ketuhar gelombang mikro beroperasi pada 2.4 GHz. Hitung panjang gelombangnya dalam cm.",b:12.5,tol:0.05,suf:"cm",u:"λ = (3.0 × 10⁸) ÷ (2.4 × 10⁹) = 0.125 m = 12.5 cm."},
 {j:"pilih",t:"Hospital mahu mensteril alat pembedahan tanpa haba. Gelombang manakah PALING sesuai?",p:["Ultraungu","Gelombang radio","Inframerah","Gelombang mikro"],b:0,u:"Sinaran ultraungu (dan sinar gama) membunuh mikroorganisma tanpa memanaskan alat."},
 {j:"pilih",t:"Gelombang manakah digunakan untuk komunikasi satelit kerana boleh menembusi atmosfera?",p:["Gelombang mikro","Sinar-X","Ultraungu","Sinar gama"],b:0,u:"Gelombang mikro menembusi atmosfera dan membawa banyak data, sesuai untuk satelit."},
 {j:"pilih",t:"Kamera pengimejan terma untuk mencari mangsa banjir pada waktu malam mengesan:",p:["Inframerah","Ultraungu","Gelombang radio","Sinar-X"],b:0,u:"Badan manusia memancarkan sinaran inframerah yang boleh dikesan walaupun dalam gelap."},
 {j:"pilih",t:"Sebuah jambatan gantung berayun kuat ketika askar berkawad di atasnya. Langkah manakah PALING wajar?",p:["Askar berjalan secara bebas, tidak berkawad","Askar berkawad dengan lebih laju","Tambah lebih ramai askar berkawad","Kawad pada frekuensi asli jambatan"],b:0,u:"Kawad serentak boleh menghasilkan resonans jika frekuensinya hampir sama dengan frekuensi asli jambatan."},
 {j:"pilih",t:"Pelabuhan baharu mahu air di dalamnya tenang. Reka bentuk benteng manakah PALING berkesan?",p:["Benteng dengan pembukaan sempit","Benteng tertutup di semua sisi","Benteng dengan pembukaan yang sangat lebar","Pelampung di sekeliling pelabuhan"],b:0,u:"Pembukaan sempit menyebabkan pembelauan; tenaga ombak tersebar dan amplitud di dalam pelabuhan menjadi kecil, tetapi kapal masih boleh masuk."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan bagi pekerja yang terdedah kepada sinar-X.",p:["Memakai apron plumbum","Menghadkan masa pendedahan","Memakai cermin mata hitam biasa","Berdiri lebih dekat dengan sumber"],b:[0,1],u:"Plumbum menyerap sinar-X, dan masa pendedahan yang singkat mengurangkan dos."}],
 bos:{j:"pilih",t:"Sebuah syarikat mendakwa menara telekomunikasi 5G menyebabkan kanser kerana memancarkan 'sinaran'. Penilaian manakah PALING tepat?",p:["Gelombang mikro tiada tenaga untuk merosakkan DNA","Semua sinaran elektromagnet merosakkan DNA","Gelombang mikro lebih berbahaya daripada sinar gama","Menara 5G memancarkan sinar-X"],b:0,u:"Gelombang mikro ialah sinaran tak mengion. Sinaran mengion seperti sinar-X dan gama yang berfrekuensi tinggi boleh merosakkan DNA."}},

{n:6, tempat:"Studio Reka Gelombang", sk:"5.1 hingga 5.7 Mereka cipta menggunakan pengetahuan gelombang", lampiran:null,
 kadNama:"Reka Bentuk Akustik", kadEm:"\u{1F3B6}", kadFakta:"Bilik yang baik untuk muzik mengawal pantulan bunyi supaya tiada gema berlebihan.",
 bosKadNama:"Reka Cipta Gelombang", bosKadEm:"\u{1F4A1}", bosKadFakta:"Reka cipta berasaskan gelombang menggunakan pantulan, pembiasan, pembelauan atau interferens untuk menyelesaikan masalah sebenar.",
 soalan:[
 {j:"pilih",t:"Anda mereka bilik rakaman podcast sekolah. Bahan dinding manakah PALING sesuai untuk mengurangkan gema?",p:["Panel span berlekuk","Jubin seramik licin","Kepingan kaca besar","Papan logam rata"],b:0,u:"Permukaan lembut dan berlekuk menyerap bunyi dan mengurangkan pantulan."},
 {j:"pilih",t:"Anda mereka alat sonar mudah untuk mengukur kedalaman kolam ikan. Data apakah yang PERLU diukur?",p:["Masa gema dan laju bunyi dalam air","Warna air dan suhu udara","Jisim ikan dan saiz kolam","Kekuatan arus elektrik pemancar"],b:0,u:"Kedalaman = laju bunyi × masa gema ÷ 2."},
 {j:"pilih",t:"Kampung tepi pantai anda mengalami hakisan oleh ombak besar. Reka bentuk manakah PALING berkesan?",p:["Pemecah ombak yang mengurangkan tenaga ombak","Dinding kaca nipis di sepanjang pantai","Pagar dawai di tepi jalan","Pokok kelapa di tengah kampung"],b:0,u:"Pemecah ombak memantulkan dan melembapkan ombak sebelum sampai ke pantai."},
 {j:"pilih",t:"Anda mereka menara pencakar langit di kawasan gempa bumi. Ciri manakah PALING penting?",p:["Peredam yang mengurangkan resonans","Dinding kaca yang lebih banyak","Tingkat atas yang lebih berat","Asas yang lebih cetek"],b:0,u:"Peredam jisim menyerap tenaga ayunan supaya bangunan tidak berayun dengan amplitud besar."},
 {j:"nombor",t:"Anda mereka pembesar suara untuk menghasilkan bunyi dengan panjang gelombang 0.66 m di udara (laju 330 m s⁻¹). Berapakah frekuensi yang perlu dijana?",b:500,tol:1,suf:"Hz",u:"f = v ÷ λ = 330 ÷ 0.66 = 500 Hz."},
 {j:"pilih",t:"Anda mahu Wi-Fi sekolah sampai ke kantin di sebalik bangunan. Cadangan manakah PALING munasabah?",p:["Pasang pengulang isyarat di koridor","Tambah dinding konkrit tebal","Kurangkan kuasa penghala","Letak penghala di dalam kotak logam"],b:0,u:"Gelombang mikro dilemahkan oleh dinding tebal dan logam. Pengulang isyarat memancarkan semula isyarat."},
 {j:"pilih",t:"Anda mencadangkan cara melindungi murid daripada sinaran UV semasa perhimpunan. Cadangan manakah PALING berkesan?",p:["Bina bumbung yang menghalang UV","Pakai baju berwarna gelap sahaja","Minum air sejuk sebelum perhimpunan","Lakukan perhimpunan pada tengah hari"],b:0,u:"Bumbung menghalang sinaran UV secara langsung. Waktu tengah hari ialah masa keamatan UV paling tinggi."},
 {j:"banyak",t:"Pilih DUA ciri yang perlu diuji untuk menilai reka bentuk bilik rakaman anda.",p:["Tempoh gema selepas bunyi tepukan","Tahap bunyi bising dari luar","Warna cat pada panel dinding","Jenama dan harga mikrofon"],b:[0,1],u:"Masa gema dan bunyi luar ialah ukuran utama kualiti akustik bilik."}],
 bos:{j:"buka",
  t:"Reka satu penyelesaian berasaskan gelombang bagi satu masalah di sekolah atau komuniti anda (contoh: bilik muzik yang bergema, ombak menghakis pantai, isyarat telefon lemah).",
  arahan:"Nyatakan masalah, fenomena gelombang yang digunakan (pantulan, pembiasan, pembelauan, interferens atau resonans), cara reka bentuk anda berfungsi berdasarkan fizik, bahan yang dipilih dan sebabnya, cara menguji keberkesanan, dan SATU kesan sosial atau ekonomi.",
  u:"Jawapan TP6 yang kukuh mengenal pasti fenomena gelombang yang betul, menerangkan mekanismenya (contoh: permukaan lembut menyerap bunyi dan mengurangkan pantulan; pemecah ombak melembapkan tenaga ombak), memilih bahan yang munasabah, mencadangkan ujian yang boleh diukur, dan mengambil kira kos serta manfaat kepada komuniti."}}
];

module.exports = {
  id:"f4b5", tingkatan:4, kod:"5.0 Gelombang",
  tajuk:"Riak dan Getar",
  subtajuk:"Fizik Ting. 4 · Bab 5 Gelombang",
  spi:SPI.f4b5,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis gelombang, ciri gelombang dan spektrum elektromagnet. Langkah seterusnya ialah mentafsir graf gelombang.",
   2:"{n} dapat menjelaskan ciri gelombang daripada graf, hubungan v = fλ serta konsep pelembapan dan resonans. Perlu lebih latihan tentang pantulan, pembiasan dan pembelauan.",
   3:"{n} boleh mengaplikasikan konsep pantulan, pembiasan dan pembelauan untuk menerangkan fenomena dan menyelesaikan masalah. Galakkan menganalisis corak interferens.",
   4:"{n} mampu menganalisis corak interferens menggunakan λ = ax/D. Seterusnya latih menilai penggunaan gelombang elektromagnet.",
   5:"{n} dapat menilai penggunaan dan risiko gelombang elektromagnet serta aplikasi resonans dan pembelauan. Sudah bersedia mereka bentuk penyelesaian berasaskan gelombang.",
   6:"{n} berjaya mereka bentuk penyelesaian berasaskan gelombang yang kreatif dengan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Gelombang. Cadangan: ulang hentian pertama dan hasilkan gelombang dengan tali atau spring bersama rakan."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8], setiap:2, xLabel:"Jarak (cm)", yMin:-4, yMaks:4,
     siri:[{label:"Sesaran (cm)", y:[0,2.12,3,2.12,0,-2.12,-3,-2.12,0,2.12,3,2.12,0,-2.12,-3,-2.12,0], warna:"ungu"}],
     kapsyen:"Rajah 1 · Graf sesaran melawan jarak bagi suatu gelombang",
     alt:"Graf sesaran-jarak berbentuk sinus: puncak 3 cm pada jarak 1 dan 5 cm, lembangan −3 cm pada jarak 3 dan 7 cm, memotong paksi pada 0, 2, 4, 6 dan 8 cm"},
   j1:jadual(1, "Data eksperimen dwicelah Young dengan cahaya merah",
     ["Kuantiti", "Nilai"],
     [["Jarak antara dua celah, a","0.50 mm"],["Jarak celah ke skrin, D","2.0 m"],["Jarak merentasi 10 pinggir terang","24 mm"]])
  },
  aras:ARAS
};
