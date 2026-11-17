/* Sumber kandungan — Fizik KSSM Tingkatan 5, Bab 7 Fizik Kuantum.
   SK 7.1 Teori kuantum cahaya, 7.2 Kesan fotoelektrik, 7.3 Teori fotoelektrik Einstein
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   h = 6.63 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m s⁻¹, e = 1.6 × 10⁻¹⁹ C. Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Foton", sk:"7.1 Teori kuantum · 7.2 Kesan fotoelektrik · 7.3 Persamaan Einstein", lampiran:null,
 kadNama:"Foton", kadEm:"\u{1F4A1}", kadFakta:"Foton ialah paket tenaga cahaya yang diskret. Tenaga satu foton, E = hf.",
 bosKadNama:"Dualiti", bosKadEm:"\u{1F30A}", bosKadFakta:"Cahaya dan elektron bersifat gelombang dan zarah. Panjang gelombang de Broglie, λ = h ÷ p.",
 soalan:[
 {j:"pilih",t:"Kuantum tenaga ialah:",p:["Paket tenaga yang diskret","Tenaga yang mengalir secara selanjar","Jisim sebiji elektron","Jumlah tenaga Matahari"],b:0,u:"Planck mencadangkan tenaga dipancarkan dalam kuantiti diskret, E = hf."},
 {j:"pilih",t:"Pemalar h dalam E = hf dikenali sebagai:",p:["Pemalar Planck","Pemalar spring","Pemalar graviti","Pemalar Avogadro"],b:0,u:"h = 6.63 × 10⁻³⁴ J s."},
 {j:"pilih",t:"Kesan fotoelektrik ialah:",p:["Pancaran elektron oleh cahaya","Pancaran cahaya apabila logam dipanaskan","Pantulan cahaya oleh permukaan logam","Pembiasan cahaya dalam kaca"],b:0,u:"Elektron yang dipancarkan dipanggil fotoelektron."},
 {j:"pilih",t:"Fungsi kerja, W, sesuatu logam ialah:",p:["Tenaga minimum membebaskan elektron","Tenaga kinetik maksimum elektron","Tenaga satu foton cahaya merah","Kuasa sumber cahaya"],b:0,u:"Setiap logam mempunyai fungsi kerja tersendiri."},
 {j:"pilih",t:"Frekuensi ambang, f₀, ialah:",p:["Frekuensi minimum fotoelektron","Frekuensi maksimum cahaya nampak","Frekuensi arus ulang-alik","Frekuensi bunyi tertinggi"],b:0,u:"W = hf₀. Cahaya di bawah f₀ tidak memancarkan elektron walau seterang mana pun."},
 {j:"pilih",t:"Persamaan fotoelektrik Einstein ialah:",p:["hf = W + ½mv²ₘₐₖₛ","E = mc² + ½mv²","V = IR + hf","F = ma + hf"],b:0,u:"Tenaga foton digunakan untuk mengatasi fungsi kerja, dan bakinya menjadi tenaga kinetik maksimum."},
 {j:"pilih",t:"Pembelauan elektron oleh kristal menunjukkan bahawa elektron:",p:["Bersifat gelombang","Tidak mempunyai jisim","Bercas positif","Bergerak lebih laju daripada cahaya"],b:0,u:"Pembelauan ialah sifat gelombang, jadi zarah juga bersifat gelombang (dualiti gelombang-zarah)."},
 {j:"banyak",t:"Pilih DUA bukti bahawa cahaya bersifat zarah.",p:["Kesan fotoelektrik","Spektrum garis yang diskret","Interferens cahaya dua celah","Pembelauan cahaya melalui celah"],b:[0,1],u:"Kesan fotoelektrik dan spektrum garis menunjukkan tenaga diskret. Interferens dan pembelauan ialah sifat gelombang."}],
 bos:{j:"pilih",t:"Masalah 'bencana ultraungu' dalam sinaran jasad hitam diselesaikan oleh:",p:["Teori kuantum Planck","Hukum Newton","Prinsip Archimedes","Hukum Ohm"],b:0,u:"Planck mencadangkan tenaga dikuantumkan, dan ramalan teori sepadan dengan pemerhatian."}},

{n:2, tempat:"Makmal Fotosel", sk:"7.2 Ciri kesan fotoelektrik · 7.3 Fotosel", lampiran:null,
 kadNama:"Empat Ciri", kadEm:"\u{1F4CB}", kadFakta:"Fotoelektron dipancar serta-merta; hanya jika f ≥ f₀; tenaga kinetik maksimum bergantung pada f; bilangan elektron bergantung pada keamatan.",
 bosKadNama:"Fotosel", bosKadEm:"\u{1F50B}", bosKadFakta:"Fotosel menukar cahaya kepada arus elektrik. Arus bertambah dengan keamatan cahaya.",
 soalan:[
 {j:"pilih",t:"Keamatan cahaya yang menyinari logam ditambah (frekuensi tetap, melebihi f₀). Apakah kesannya?",p:["Fotoelektron bertambah","Tenaga kinetik maksimum bertambah","Fungsi kerja berkurang","Tiada fotoelektron dipancarkan"],b:0,u:"Keamatan menentukan bilangan foton, jadi bilangan fotoelektron bertambah."},
 {j:"pilih",t:"Frekuensi cahaya ditambah (keamatan tetap, melebihi f₀). Apakah kesannya?",p:["Tenaga kinetik maksimum bertambah","Bilangan fotoelektron berganda","Fungsi kerja bertambah","Fotoelektron berhenti"],b:0,u:"Tenaga foton hf bertambah, jadi baki tenaga selepas W lebih besar."},
 {j:"pilih",t:"Cahaya merah yang sangat terang tidak memancarkan fotoelektron daripada sesuatu logam. Penjelasan yang betul ialah:",p:["Frekuensinya di bawah f₀","Cahaya merah terlalu malap","Logam terlalu sejuk","Cahaya merah tiada tenaga"],b:0,u:"Satu foton mesti mempunyai tenaga ≥ W. Keamatan tinggi hanya menambah bilangan foton bertenaga rendah."},
 {j:"pilih",t:"Mengapakah teori gelombang klasik tidak dapat menerangkan pancaran fotoelektron yang serta-merta?",p:["Ia meramalkan ada kelewatan","Ia meramalkan tiada elektron","Ia meramalkan elektron positif","Ia tiada kaitan dengan cahaya"],b:0,u:"Menurut teori gelombang, elektron perlu masa untuk menyerap tenaga yang cukup daripada cahaya malap."},
 {j:"pilih",t:"Dalam litar fotosel, katod disinari cahaya. Elektron bergerak dari katod ke:",p:["Anod","Bateri sahaja","Bumi","Katod lain"],b:0,u:"Fotoelektron ditarik ke anod yang positif, menghasilkan arus fotoelektrik."},
 {j:"pilih",t:"Sinar ultraungu memancarkan fotoelektron dari zink, tetapi cahaya nampak tidak. Ini kerana:",p:["Foton ultraungu bertenaga tinggi","Ultraungu lebih terang","Zink menyerap semua cahaya nampak","Cahaya nampak bergerak lebih perlahan"],b:0,u:"Fungsi kerja zink tinggi (kira-kira 4.3 eV), jadi hanya foton ultraungu cukup bertenaga."},
 {j:"pilih",t:"Antara berikut, manakah aplikasi kesan fotoelektrik?",p:["Panel suria","Transformer","Spring penimbang","Termometer merkuri"],b:0,u:"Sel suria menukar tenaga cahaya kepada tenaga elektrik."},
 {j:"banyak",t:"Pilih DUA ciri kesan fotoelektrik yang TIDAK dapat diterangkan oleh teori gelombang.",p:["Wujudnya frekuensi ambang","Tenaga kinetik ikut frekuensi","Cahaya boleh dibiaskan oleh kaca","Cahaya boleh dipantulkan cermin"],b:[0,1],u:"Teori gelombang meramalkan cahaya terang mana-mana frekuensi boleh memancarkan elektron."}],
 bos:{j:"pilih",t:"Pintu automatik pasar raya menggunakan pancaran cahaya ke fotosel. Pintu terbuka apabila:",p:["Pancaran cahaya dihalang","Pancaran bertambah terang","Arus fotosel bertambah","Fotosel menjadi panas"],b:0,u:"Orang yang lalu menghalang cahaya, arus berhenti, dan litar kawalan membuka pintu."}},

{n:3, tempat:"Bilik Pengiraan Kuantum", sk:"7.1 E = hf dan λ = h/p · 7.3 Persamaan Einstein", lampiran:null,
 kadNama:"E = hc/λ", kadEm:"\u{1F9EE}", kadFakta:"1 eV = 1.6 × 10⁻¹⁹ J. Foton cahaya nampak bertenaga kira-kira 1.8 hingga 3.1 eV.",
 bosKadNama:"de Broglie", bosKadEm:"\u{269B}\u{FE0F}", bosKadFakta:"λ = h ÷ mv. Elektron yang laju mempunyai panjang gelombang yang sangat pendek, digunakan dalam mikroskop elektron.",
 soalan:[
 {j:"nombor",t:"Hitung tenaga satu foton cahaya hijau berpanjang gelombang 500 nm. Beri jawapan dalam unit 10⁻¹⁹ J kepada 2 tempat perpuluhan.",b:3.98,tol:0.01,suf:"× 10⁻¹⁹ J",u:"E = hc ÷ λ = 6.63 × 10⁻³⁴ × 3.0 × 10⁸ ÷ 500 × 10⁻⁹ = 3.98 × 10⁻¹⁹ J."},
 {j:"nombor",t:"Tukarkan tenaga foton dalam soalan tadi kepada eV. Beri jawapan kepada 2 tempat perpuluhan.",b:2.49,tol:0.01,suf:"eV",u:"3.98 × 10⁻¹⁹ ÷ 1.6 × 10⁻¹⁹ = 2.49 eV."},
 {j:"nombor",t:"Fungsi kerja natrium ialah 2.3 eV. Hitung frekuensi ambangnya. Beri jawapan dalam unit 10¹⁴ Hz kepada 2 tempat perpuluhan.",b:5.55,tol:0.01,suf:"× 10¹⁴ Hz",u:"f₀ = W ÷ h = 2.3 × 1.6 × 10⁻¹⁹ ÷ 6.63 × 10⁻³⁴ = 5.55 × 10¹⁴ Hz."},
 {j:"nombor",t:"Cahaya ungu 400 nm menyinari natrium (W = 2.3 eV). Hitung tenaga kinetik maksimum fotoelektron dalam eV. Beri jawapan kepada 2 tempat perpuluhan.",b:0.81,tol:0.01,suf:"eV",u:"hf = 6.63 × 10⁻³⁴ × 3.0 × 10⁸ ÷ 400 × 10⁻⁹ = 4.97 × 10⁻¹⁹ J = 3.11 eV. K = 3.11 − 2.3 = 0.81 eV."},
 {j:"pilih",t:"Cahaya merah 700 nm (1.78 eV) menyinari natrium (W = 2.3 eV). Apakah yang berlaku?",p:["Tiada fotoelektron dipancarkan","Fotoelektron dipancarkan perlahan","Fotoelektron dipancarkan dengan 0.52 eV","Natrium menjadi panas dan meletup"],b:0,u:"Tenaga foton 1.78 eV kurang daripada fungsi kerja 2.3 eV."},
 {j:"nombor",t:"Elektron bergerak pada 1.0 × 10⁶ m s⁻¹ (mₑ = 9.11 × 10⁻³¹ kg). Hitung panjang gelombang de Broglie dalam unit 10⁻¹⁰ m. Beri jawapan kepada 2 tempat perpuluhan.",b:7.28,tol:0.02,suf:"× 10⁻¹⁰ m",u:"λ = h ÷ mv = 6.63 × 10⁻³⁴ ÷ (9.11 × 10⁻³¹ × 1.0 × 10⁶) = 7.28 × 10⁻¹⁰ m."},
 {j:"nombor",t:"Laser 2.0 mW memancarkan cahaya 500 nm. Hitung bilangan foton yang dipancarkan sesaat. Beri jawapan dalam unit 10¹⁵ kepada 2 tempat perpuluhan.",b:5.03,tol:0.02,suf:"× 10¹⁵",u:"Tenaga satu foton = 3.98 × 10⁻¹⁹ J. N = 2.0 × 10⁻³ ÷ 3.98 × 10⁻¹⁹ = 5.03 × 10¹⁵ foton per saat."},
 {j:"pilih",t:"Halaju elektron digandakan. Panjang gelombang de Broglienya menjadi:",p:["Separuh","Dua kali ganda","Empat kali ganda","Tidak berubah"],b:0,u:"λ = h ÷ mv berkadar songsang dengan v."}],
 bos:{j:"nombor",t:"Cahaya berfrekuensi 6.0 × 10¹⁴ Hz menyinari logam berfungsi kerja 2.0 eV. Hitung tenaga kinetik maksimum fotoelektron dalam eV. Beri jawapan kepada 2 tempat perpuluhan.",b:0.49,tol:0.01,suf:"eV",u:"hf = 6.63 × 10⁻³⁴ × 6.0 × 10¹⁴ = 3.98 × 10⁻¹⁹ J = 2.49 eV. K = 2.49 − 2.0 = 0.49 eV."}},

{n:4, tempat:"Makmal Graf Einstein", sk:"7.3 Menganalisis graf tenaga kinetik maksimum melawan frekuensi", lampiran:"g1",
 kadNama:"Graf K-f", kadEm:"\u{1F4C8}", kadFakta:"Graf tenaga kinetik maksimum melawan frekuensi ialah garis lurus. Kecerunan = h; pintasan-f = f₀.",
 bosKadNama:"Logam Berbeza", bosKadEm:"\u{1F947}", bosKadFakta:"Logam berbeza memberi garis selari dengan kecerunan sama (h) tetapi pintasan berbeza (f₀ berbeza).",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung kecerunan graf dalam eV per 10¹⁴ Hz. Beri jawapan kepada 1 tempat perpuluhan.",b:0.4,tol:0.01,suf:"eV per 10¹⁴ Hz",u:"Kecerunan = (2.0 − 0.4) ÷ (10 − 6) = 1.6 ÷ 4 = 0.4 eV per 10¹⁴ Hz."},
 {j:"nombor",t:"Berdasarkan Rajah 1 dan soalan tadi, tukarkan kecerunan kepada pemalar Planck dalam unit 10⁻³⁴ J s. Beri jawapan kepada 1 tempat perpuluhan.",b:6.4,tol:0.03,suf:"× 10⁻³⁴ J s",u:"h = 0.4 × 1.6 × 10⁻¹⁹ ÷ 10¹⁴ = 6.4 × 10⁻³⁴ J s, hampir dengan nilai sebenar 6.63 × 10⁻³⁴ J s (data eksperimen sekolah)."},
 {j:"nombor",t:"Berdasarkan Rajah 1, anggarkan frekuensi ambang dengan mengekstrapolasi graf ke K = 0. Beri jawapan dalam unit 10¹⁴ Hz kepada 1 tempat perpuluhan.",b:5,tol:0.1,suf:"× 10¹⁴ Hz",u:"f₀ = 6 − 0.4 ÷ 0.4 = 5.0 × 10¹⁴ Hz."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung fungsi kerja logam dalam eV. Beri jawapan kepada 1 tempat perpuluhan.",b:2,tol:0.05,suf:"eV",u:"W = hf₀ = 0.4 × 5.0 = 2.0 eV (atau pintasan-K yang diekstrapolasi = −2.0 eV)."},
 {j:"pilih",t:"Cahaya 4.0 × 10¹⁴ Hz juga diuji tetapi tiada bacaan dicatat dalam Rajah 1. Mengapakah?",p:["Frekuensi di bawah f₀","Alat pengukur rosak","Cahaya terlalu terang","Tenaga kinetik negatif dicatat"],b:0,u:"Frekuensi 4.0 × 10¹⁴ Hz di bawah f₀, jadi tiada elektron dipancarkan."},
 {j:"pilih",t:"Eksperimen Rajah 1 diulang dengan cahaya yang lebih terang pada frekuensi yang sama. Graf baharu akan:",p:["Bertindih dengan graf asal","Lebih curam daripada asal","Beralih ke kiri sedikit","Beralih ke atas sedikit"],b:0,u:"Keamatan tidak mempengaruhi tenaga kinetik maksimum, hanya bilangan elektron."},
 {j:"pilih",t:"Eksperimen Rajah 1 diulang dengan logam yang fungsi kerjanya lebih besar. Graf baharu akan:",p:["Selari, beralih ke kanan","Lebih curam daripada asal","Selari, beralih ke kiri","Bertindih dengan asal"],b:0,u:"Kecerunan tetap h, tetapi f₀ lebih besar, jadi garis beralih ke kanan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kecerunan graf yang sama bagi semua logam menunjukkan bahawa:",p:["h ialah pemalar sejagat","Semua logam sama fungsi kerja","Cahaya tiada tenaga","Elektron tiada jisim"],b:0,u:"Pemalar Planck tidak bergantung pada bahan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, cahaya 7.0 × 10¹⁴ Hz digunakan. Berapakah voltan henti yang diperlukan untuk menghentikan fotoelektron terlaju?",p:["0.80 V","2.0 V","7.0 V","0.40 V"],b:0,u:"eV(henti) = K(maks) = 0.80 eV, jadi voltan henti = 0.80 V."}},

{n:5, tempat:"Pusat Teknologi Cahaya", sk:"7.1 hingga 7.3 Menilai aplikasi fizik kuantum", lampiran:"j1",
 kadNama:"Pilih Bahan", kadEm:"\u{1F9EA}", kadFakta:"Bahan fotosel dipilih supaya fungsi kerjanya lebih rendah daripada tenaga foton cahaya yang hendak dikesan.",
 bosKadNama:"Tenaga Suria", bosKadEm:"\u{2600}\u{FE0F}", bosKadFakta:"Sel suria fotovolta menukar tenaga foton terus kepada tenaga elektrik tanpa bahagian bergerak.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, satu logam memancarkan fotoelektron apabila disinari cahaya hijau (2.2 eV). Logam manakah itu?",p:["Sesium","Natrium","Zink","Kuprum"],b:0,u:"Hanya fungsi kerja sesium (2.1 eV) kurang daripada 2.2 eV."},
 {j:"pilih",t:"Berdasarkan Jadual 1, logam manakah memancarkan fotoelektron dengan cahaya biru (2.8 eV)?",p:["Sesium dan natrium","Zink dan kuprum","Semua empat logam","Tiada logam"],b:0,u:"Fungsi kerja sesium (2.1 eV) dan natrium (2.3 eV) kurang daripada 2.8 eV."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah zink tidak sesuai untuk fotosel cahaya nampak?",p:["Fungsi kerjanya terlalu tinggi","Zink terlalu mahal","Zink tidak mengalirkan elektrik","Zink terlalu berat"],b:0,u:"Fungsi kerja 4.3 eV melebihi tenaga foton nampak maksimum, kira-kira 3.1 eV."},
 {j:"pilih",t:"Berdasarkan Jadual 1, logam manakah sesuai untuk pengesan ultraungu yang TIDAK peka kepada cahaya nampak?",p:["Zink","Sesium","Natrium","Sesium dan natrium"],b:0,u:"Zink hanya bertindak balas kepada foton ultraungu bertenaga tinggi."},
 {j:"pilih",t:"Mikroskop elektron dapat melihat butiran lebih halus daripada mikroskop cahaya kerana:",p:["Panjang gelombang lebih pendek","Elektron lebih terang","Elektron berwarna","Kanta kaca lebih besar"],b:0,u:"Resolusi lebih baik bagi panjang gelombang yang lebih pendek."},
 {j:"pilih",t:"Sebuah sekolah mempertimbangkan panel suria di atas bumbung. Penilaian manakah PALING seimbang?",p:["Kos awal tinggi, bil kemudian rendah","Murah dipasang, bil kemudian tinggi","Kurang berkesan di negara tropika","Lebih cekap pada waktu malam"],b:0,u:"Malaysia menerima cahaya Matahari yang banyak. Kos pemasangan dipulangkan melalui penjimatan bil."},
 {j:"pilih",t:"Sensor kamera digital menggunakan prinsip:",p:["Kesan fotoelektrik","Aruhan elektromagnet","Prinsip Pascal","Pengembangan terma"],b:0,u:"Piksel menukar foton kepada cas elektrik yang diukur."},
 {j:"banyak",t:"Pilih DUA aplikasi fizik kuantum dalam teknologi harian.",p:["Laser pengimbas kod bar","LED pada lampu isyarat","Tuil pembuka tin","Spring tilam"],b:[0,1],u:"Laser dan LED bergantung pada peralihan tenaga elektron yang dikuantumkan."}],
 bos:{j:"pilih",t:"Sebuah fotosel natrium tidak bertindak balas kepada lampu hijau 2.2 eV. Berdasarkan Jadual 1, penyelesaian manakah PALING tepat?",p:["Tukar katod kepada sesium","Tambah keamatan lampu hijau","Tukar katod kepada zink","Panaskan katod natrium"],b:0,u:"Tenaga foton 2.2 eV kurang daripada W natrium (2.3 eV). Menambah keamatan hanya menambah bilangan foton. Sesium (2.1 eV) berfungsi."}},

{n:6, tempat:"Studio Reka Kuantum", sk:"7.1 hingga 7.3 Mereka cipta menggunakan pengetahuan fizik kuantum", lampiran:null,
 kadNama:"Reka Pengesan", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Pengesan cahaya memerlukan bahan peka, litar penguat dan paparan atau penggera.",
 bosKadNama:"Reka Cipta Kuantum", bosKadEm:"\u{1F4A1}", bosKadFakta:"Sistem pengira pelawat boleh dibina dengan pancaran laser dan fotosel di pintu masuk.",
 soalan:[
 {j:"pilih",t:"Anda mereka pengira bilangan murid yang masuk ke perpustakaan. Susunan manakah PALING sesuai?",p:["Laser dan fotosel di pintu","Mikrofon di atas meja","Termometer di pintu","Spring di bawah karpet"],b:0,u:"Setiap kali pancaran dihalang, arus fotosel jatuh dan pembilang bertambah satu."},
 {j:"pilih",t:"Anda mahu fotosel anda mengesan cahaya inframerah (1.2 eV). Bahan manakah perlu dipilih?",p:["W di bawah 1.2 eV","W sebesar 4.3 eV","Bahan yang tidak mengalirkan elektrik","Bahan yang paling berat"],b:0,u:"Fungsi kerja mesti lebih rendah daripada tenaga foton yang hendak dikesan."},
 {j:"pilih",t:"Arus fotosel ciptaan anda terlalu kecil untuk menghidupkan penggera. Cadangan manakah PALING sesuai?",p:["Tambah penguat transistor","Gunakan cahaya berfrekuensi lebih rendah","Tutup fotosel dengan kertas","Gunakan logam berfungsi kerja lebih tinggi"],b:0,u:"Transistor menguatkan arus kecil fotosel untuk menghidupkan penggera atau geganti."},
 {j:"pilih",t:"Anda mereka pengecas telefon suria mudah alih. Faktor manakah PALING mempengaruhi kuasa output?",p:["Luas panel, keamatan cahaya","Warna kotak pengecas","Berat kabel","Jenama telefon"],b:0,u:"Lebih banyak foton yang diserap menghasilkan lebih banyak cas."},
 {j:"nombor",t:"Panel suria ciptaan anda menerima 600 W m⁻² cahaya dan berluas 0.5 m². Kecekapannya 20%. Hitung kuasa elektrik output.",b:60,tol:0.1,suf:"W",u:"P = 600 × 0.5 × 0.20 = 60 W."},
 {j:"pilih",t:"Bagaimanakah anda menguji pengira pelawat ciptaan anda secara adil?",p:["Banding dengan kiraan manual","Uji sekali sahaja","Uji dalam gelap tanpa pelawat","Uji dengan laser dimatikan"],b:0,u:"Perbandingan dengan kiraan manual menunjukkan ketepatan sistem."},
 {j:"pilih",t:"Langkah keselamatan manakah PALING penting bagi alat yang menggunakan laser?",p:["Elak pancaran ke mata","Cat laser berwarna terang","Gunakan laser paling berkuasa","Halakan laser ke tingkap"],b:0,u:"Laser tertumpu boleh merosakkan retina walaupun kuasanya rendah."},
 {j:"banyak",t:"Pilih DUA data yang perlu dikumpul untuk menilai pengecas suria ciptaan anda.",p:["Arus dan voltan output","Masa mengecas penuh telefon","Warna bingkai panel suria","Jenama kabel USB yang dibeli"],b:[0,1],u:"Kuasa output dan masa mengecas menunjukkan prestasi sebenar."}],
 bos:{j:"buka",
  t:"Reka satu alat berasaskan kesan fotoelektrik atau foton untuk menyelesaikan masalah di sekolah atau rumah (contoh: pengira pelawat, penggera pencuri laser, lampu taman suria, pengecas suria mudah alih).",
  arahan:"Nyatakan masalah, prinsip fizik kuantum yang digunakan, bahan atau komponen (fotosel, sel suria, laser, LED), pemilihan bahan berdasarkan fungsi kerja atau tenaga foton, SATU pengiraan (contoh: E = hf, K = hf − W atau kuasa panel), cara menguji, dan SATU pertimbangan keselamatan atau kos.",
  u:"Jawapan TP6 yang kukuh memadankan bahan dengan tenaga foton yang hendak dikesan, menerangkan kesan fotoelektrik dengan betul, memberi pengiraan yang tepat, menambah penguat atau geganti jika perlu, mencadangkan ujian yang boleh diukur, serta mengambil kira keselamatan laser dan kos."}}
];

module.exports = {
  id:"f5b7", tingkatan:5, kod:"7.0 Fizik Kuantum",
  tajuk:"Dunia Kuantum",
  subtajuk:"Fizik Ting. 5 · Bab 7 Fizik Kuantum",
  spi:SPI.f5b7,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep kuantum tenaga, foton, kesan fotoelektrik dan fungsi kerja. Langkah seterusnya ialah menjelaskan ciri kesan fotoelektrik.",
   2:"{n} dapat menjelaskan ciri kesan fotoelektrik dan cara fotosel berfungsi. Perlu lebih latihan pengiraan tenaga foton dan persamaan Einstein.",
   3:"{n} boleh mengaplikasikan E = hf, λ = h/p dan persamaan Einstein untuk menyelesaikan masalah. Galakkan menganalisis graf tenaga kinetik melawan frekuensi.",
   4:"{n} mampu menganalisis graf tenaga kinetik maksimum melawan frekuensi untuk menentukan h, f₀ dan W. Seterusnya latih menilai aplikasi fizik kuantum.",
   5:"{n} dapat menilai pemilihan bahan dan aplikasi teknologi berasaskan fizik kuantum. Sudah bersedia mereka bentuk alat sendiri.",
   6:"{n} berjaya mereka bentuk alat berasaskan kesan fotoelektrik dengan pengiraan dan justifikasi yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Fizik Kuantum. Cadangan: ulang hentian pertama dan perhatikan cara panel suria di kalkulator berfungsi."
  },
  lampiran:{
   g1:{jenis:"graf", x:[6,7,8,9,10], xLabel:"Frekuensi cahaya (× 10¹⁴ Hz)", titik:true, yMin:0, yMaks:2.4, grid:6,
     siri:[{label:"Tenaga kinetik maksimum (eV)", y:[0.4,0.8,1.2,1.6,2.0], warna:"ungu"}],
     kapsyen:"Rajah 1 · Graf tenaga kinetik maksimum fotoelektron melawan frekuensi cahaya bagi satu logam",
     alt:"Graf garis lurus menaik: 0.4 eV pada 6, 0.8 pada 7, 1.2 pada 8, 1.6 pada 9 dan 2.0 eV pada 10 kali 10 kuasa 14 hertz"},
   j1:jadual(1, "Fungsi kerja beberapa logam",
     ["Logam", "Fungsi kerja (eV)"],
     [["Sesium","2.1"],["Natrium","2.3"],["Zink","4.3"],["Kuprum","4.7"]])
  },
  aras:ARAS
};
