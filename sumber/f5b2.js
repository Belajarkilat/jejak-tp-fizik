/* Sumber kandungan — Fizik KSSM Tingkatan 5, Bab 2 Tekanan.
   SK 2.1 Tekanan cecair, 2.2 Tekanan atmosfera, 2.3 Tekanan gas, 2.4 Prinsip Pascal,
   2.5 Prinsip Archimedes, 2.6 Prinsip Bernoulli
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf). g = 9.81 m s⁻²; ρ air = 1 000 kg m⁻³.
   Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Kolam Tekanan", sk:"2.1 Tekanan cecair · 2.2 Tekanan atmosfera · 2.4 hingga 2.6 Prinsip asas", lampiran:null,
 kadNama:"P = hρg", kadEm:"\u{1F30A}", kadFakta:"Tekanan cecair bergantung pada kedalaman, ketumpatan cecair dan pecutan graviti, bukan pada bentuk bekas.",
 bosKadNama:"Tiga Prinsip", bosKadEm:"\u{1F4DC}", bosKadFakta:"Pascal: tekanan dipindahkan seragam dalam bendalir tertutup. Archimedes: daya apungan = berat bendalir yang disesarkan. Bernoulli: halaju tinggi, tekanan rendah.",
 soalan:[
 {j:"pilih",t:"Tekanan ditakrifkan sebagai:",p:["Daya per unit luas","Daya × luas","Jisim per unit isi padu","Daya × jarak"],b:0,u:"P = F ÷ A, dengan unit pascal (Pa) atau N m⁻²."},
 {j:"pilih",t:"Tekanan dalam cecair bertambah apabila:",p:["Kedalaman bertambah","Luas permukaan bertambah","Bentuk bekas berubah","Isi padu bekas bertambah"],b:0,u:"P = hρg: tekanan berkadar terus dengan kedalaman h."},
 {j:"pilih",t:"Tekanan atmosfera disebabkan oleh:",p:["Berat udara di atas","Tiupan angin ke atas permukaan","Putaran Bumi pada paksinya","Haba Matahari di atmosfera"],b:0,u:"Molekul udara di atmosfera mempunyai berat dan berlanggar dengan permukaan."},
 {j:"pilih",t:"Nilai tekanan atmosfera pada aras laut ialah kira-kira:",p:["76 cm Hg","10 cm Hg","760 cm Hg","7.6 cm Hg"],b:0,u:"76 cm Hg ≈ 1.01 × 10⁵ Pa ≈ 10.3 m air."},
 {j:"pilih",t:"Prinsip Pascal menyatakan bahawa tekanan yang dikenakan pada bendalir dalam bekas tertutup:",p:["Dipindahkan secara seragam","Berkurang apabila jauh dari omboh","Hanya bertindak ke arah bawah","Bertukar menjadi haba"],b:0,u:"Inilah asas sistem hidraulik seperti brek kereta dan jek hidraulik."},
 {j:"pilih",t:"Menurut Prinsip Archimedes, daya apungan sama dengan:",p:["Berat bendalir disesarkan","Berat objek di udara","Isi padu objek","Ketumpatan bendalir"],b:0,u:"F_apung = ρVg, dengan V isi padu bendalir yang disesarkan."},
 {j:"pilih",t:"Menurut Prinsip Bernoulli, apabila halaju bendalir bertambah, tekanannya:",p:["Berkurang","Bertambah","Tidak berubah","Menjadi dua kali"],b:0,u:"Bendalir yang bergerak laju mengenakan tekanan yang lebih rendah."},
 {j:"banyak",t:"Pilih DUA faktor yang mempengaruhi tekanan cecair.",p:["Kedalaman","Ketumpatan cecair","Luas dasar bekas","Bentuk bekas"],b:[0,1],u:"P = hρg. Luas dan bentuk bekas tidak mempengaruhi tekanan pada kedalaman tertentu."}],
 bos:{j:"pilih",t:"Alat yang digunakan untuk mengukur tekanan gas dalam bekas ialah:",p:["Manometer","Barometer","Termometer","Hidrometer"],b:0,u:"Manometer tiub-U membandingkan tekanan gas dengan tekanan atmosfera. Barometer mengukur tekanan atmosfera."}},

{n:2, tempat:"Empangan dan Kasut", sk:"2.1 Faktor dan aplikasi tekanan cecair · 2.2 Kesan tekanan atmosfera", lampiran:null,
 kadNama:"Empangan", kadEm:"\u{1F3DE}\u{FE0F}", kadFakta:"Dinding empangan lebih tebal di dasar kerana tekanan air paling tinggi di bahagian paling dalam.",
 bosKadNama:"Sedut Straw", bosKadEm:"\u{1F964}", bosKadFakta:"Apabila udara dalam straw disedut, tekanan di dalamnya berkurang. Tekanan atmosfera menolak minuman ke atas.",
 soalan:[
 {j:"pilih",t:"Mengapakah dinding empangan dibina lebih tebal di bahagian bawah?",p:["Tekanan air paling tinggi di dasar","Air di dasar lebih panas","Ikan berkumpul di dasar","Tekanan atmosfera lebih tinggi di dasar"],b:0,u:"Tekanan bertambah dengan kedalaman, jadi dasar empangan menanggung daya terbesar."},
 {j:"pilih",t:"Kasut tumit tinggi yang runcing boleh merosakkan lantai kayu kerana:",p:["Luas sentuhannya kecil","Berat pemakai bertambah","Tumit runcing lebih berat","Lantai kayu terlalu lembut"],b:0,u:"P = F ÷ A: daya yang sama pada luas kecil menghasilkan tekanan yang sangat tinggi."},
 {j:"pilih",t:"Pisau yang tajam lebih mudah memotong kerana:",p:["Luas mata pisau kecil","Pisau tajam lebih berat","Daya tangan bertambah","Geseran bertambah"],b:0,u:"Luas kecil menghasilkan tekanan tinggi bagi daya yang sama."},
 {j:"pilih",t:"Kenderaan tentera di kawasan berlumpur menggunakan rantai lebar. Sebabnya:",p:["Mengurangkan tekanan pada tanah","Menambah tekanan pada tanah","Menambah berat kenderaan","Mengurangkan berat kenderaan"],b:0,u:"Luas sentuhan besar mengurangkan tekanan, jadi kenderaan tidak tenggelam."},
 {j:"pilih",t:"Beg infusi (drip) di hospital digantung tinggi di atas pesakit kerana:",p:["Lajur tinggi, tekanan tinggi","Ubat lebih sejuk di tempat tinggi","Graviti di tempat tinggi lebih kuat","Udara di atas lebih bersih"],b:0,u:"Lajur cecair yang tinggi memberi tekanan yang cukup untuk mengatasi tekanan darah dalam vena."},
 {j:"pilih",t:"Penyedut getah melekat pada dinding licin kerana:",p:["Tekanan luar lebih tinggi","Getah melekat seperti gam","Tekanan dalam penyedut lebih tinggi","Daya graviti menariknya ke dinding"],b:0,u:"Udara di dalam penyedut ditolak keluar. Tekanan atmosfera di luar menekan penyedut ke dinding."},
 {j:"pilih",t:"Telinga terasa sakit ketika kapal terbang mendarat dengan cepat. Sebabnya:",p:["Tekanan udara luar bertambah dengan cepat","Tekanan udara luar berkurang dengan cepat","Suhu kabin menurun dengan cepat","Bunyi enjin terlalu kuat"],b:0,u:"Tekanan luar lebih tinggi daripada tekanan dalam telinga tengah, jadi gegendang telinga tertolak ke dalam."},
 {j:"pilih",t:"Tekanan atmosfera di puncak Gunung Kinabalu lebih rendah daripada di aras laut kerana:",p:["Lajur udara lebih pendek","Udara di puncak lebih panas","Graviti di puncak sifar","Angin di puncak lebih kuat"],b:0,u:"Semakin tinggi altitud, semakin sedikit udara di atas, jadi tekanan berkurang."}],
 bos:{j:"pilih",t:"Dua bekas berbeza bentuk diisi air hingga ketinggian sama. Bekas A sempit, bekas B lebar. Tekanan di dasar:",p:["Sama dalam kedua-dua bekas","Lebih tinggi dalam bekas B","Lebih tinggi dalam bekas A","Bergantung pada jisim air"],b:0,u:"P = hρg hanya bergantung pada kedalaman dan ketumpatan, bukan bentuk atau isi padu bekas."}},

{n:3, tempat:"Bilik Hidraulik", sk:"2.1 hingga 2.4 Menyelesaikan masalah tekanan cecair, gas dan Pascal", lampiran:null,
 kadNama:"F₁/A₁ = F₂/A₂", kadEm:"\u{1F6DE}", kadFakta:"Dalam sistem hidraulik, daya kecil pada omboh kecil menghasilkan daya besar pada omboh besar.",
 bosKadNama:"Manometer", bosKadEm:"\u{1F9EA}", bosKadFakta:"Tekanan gas = tekanan atmosfera + hρg, dengan h perbezaan aras cecair dalam tiub-U.",
 soalan:[
 {j:"nombor",t:"Hitung tekanan air pada kedalaman 10 m di sebuah tasik. Beri jawapan dalam kPa kepada 1 tempat perpuluhan.",b:98.1,tol:0.1,suf:"kPa",u:"P = hρg = 10 × 1 000 × 9.81 = 98 100 Pa = 98.1 kPa."},
 {j:"nombor",t:"Tekanan atmosfera ialah 101 kPa. Hitung jumlah tekanan yang dialami penyelam pada kedalaman 10 m dalam tasik itu. Beri jawapan dalam kPa kepada 1 tempat perpuluhan.",b:199.1,tol:0.1,suf:"kPa",u:"Jumlah = 101 + 98.1 = 199.1 kPa, hampir dua kali tekanan di permukaan."},
 {j:"nombor",t:"Barometer merkuri menunjukkan bacaan 76 cm Hg. Ketumpatan merkuri 13 600 kg m⁻³. Hitung tekanan atmosfera dalam kPa. Beri jawapan kepada 1 tempat perpuluhan.",b:101.4,tol:0.1,suf:"kPa",u:"P = hρg = 0.76 × 13 600 × 9.81 = 101 396 Pa ≈ 101.4 kPa."},
 {j:"nombor",t:"Manometer air disambung pada bekas gas. Aras air di sebelah terbuka 20 cm lebih tinggi. Tekanan atmosfera 101 000 Pa. Hitung tekanan gas dalam Pa.",b:102962,tol:2,suf:"Pa",u:"P = 101 000 + 0.20 × 1 000 × 9.81 = 101 000 + 1 962 = 102 962 Pa."},
 {j:"nombor",t:"Jek hidraulik mempunyai omboh kecil 2 cm² dan omboh besar 50 cm². Daya 40 N dikenakan pada omboh kecil. Hitung daya pada omboh besar.",b:1000,tol:1,suf:"N",u:"F₂ = F₁ × A₂ ÷ A₁ = 40 × 50 ÷ 2 = 1 000 N."},
 {j:"nombor",t:"Dalam jek hidraulik tadi, omboh kecil ditolak ke bawah sejauh 25 cm. Berapakah jarak omboh besar naik?",b:1,tol:0.01,suf:"cm",u:"Isi padu cecair yang dipindahkan sama: 2 × 25 = 50 × d, jadi d = 1 cm."},
 {j:"nombor",t:"Seorang wanita seberat 500 N berdiri di atas sebelah tumit kasut seluas 1 cm² (1 × 10⁻⁴ m²). Hitung tekanan pada lantai dalam kPa.",b:5000,tol:1,suf:"kPa",u:"P = F ÷ A = 500 ÷ (1 × 10⁻⁴) = 5 × 10⁶ Pa = 5 000 kPa."},
 {j:"pilih",t:"Mengapakah cecair hidraulik dalam sistem brek mesti bebas daripada gelembung udara?",p:["Udara boleh dimampatkan","Udara menyebabkan cecair menjadi panas","Udara menambah ketumpatan cecair","Udara menjadikan brek terlalu kuat"],b:0,u:"Cecair hampir tidak boleh dimampat. Gelembung udara termampat dan menyerap sebahagian tekanan, jadi brek kurang berkesan."}],
 bos:{j:"nombor",t:"Kren hidraulik perlu mengangkat kereta 15 000 N. Omboh besar berluas 300 cm² dan omboh kecil 2 cm². Berapakah daya minimum pada omboh kecil?",b:100,tol:0.5,suf:"N",u:"F₁ = F₂ × A₁ ÷ A₂ = 15 000 × 2 ÷ 300 = 100 N."}},

{n:4, tempat:"Makmal Apungan", sk:"2.5 Menganalisis Prinsip Archimedes", lampiran:"j1",
 kadNama:"Daya Apungan", kadEm:"\u{1F6F3}\u{FE0F}", kadFakta:"Daya apungan = berat di udara − berat ketara dalam cecair = ρVg.",
 bosKadNama:"Terapung", bosKadEm:"\u{1F6A2}", bosKadFakta:"Objek terapung apabila daya apungan sama dengan beratnya. Kapal besi terapung kerana bentuknya menyesarkan banyak air.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung daya apungan ke atas objek dalam air.",b:2,tol:0.01,suf:"N",u:"F = 5.0 − 3.0 = 2.0 N."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung daya apungan ke atas objek dalam cecair X.",b:1.6,tol:0.01,suf:"N",u:"F = 5.0 − 3.4 = 1.6 N."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung isi padu objek dalam cm³. Beri jawapan kepada nombor bulat terdekat.",b:204,tol:1,suf:"cm³",u:"V = F ÷ (ρg) = 2.0 ÷ (1 000 × 9.81) = 2.04 × 10⁻⁴ m³ = 204 cm³."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung ketumpatan cecair X.",b:800,tol:2,suf:"kg m⁻³",u:"ρ_X = F_X ÷ (Vg) = 1.6 ÷ (2.04 × 10⁻⁴ × 9.81) = 800 kg m⁻³. Atau: ρ_X = 1 000 × 1.6 ÷ 2.0."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah daya apungan dalam cecair X lebih kecil berbanding dalam air?",p:["Cecair X kurang tumpat daripada air","Cecair X lebih tumpat daripada air","Isi padu objek berubah","Berat objek berubah"],b:0,u:"Bagi isi padu yang sama, cecair kurang tumpat menghasilkan berat bendalir disesarkan yang lebih kecil."},
 {j:"nombor",t:"Sebuah objek berisi padu 0.002 m³ ditenggelamkan sepenuhnya dalam air. Hitung daya apungan ke atasnya.",b:19.62,tol:0.05,suf:"N",u:"F = ρVg = 1 000 × 0.002 × 9.81 = 19.62 N."},
 {j:"nombor",t:"Sebuah bot 5 000 kg terapung di laut (ρ = 1 025 kg m⁻³). Hitung isi padu air laut yang disesarkan. Beri jawapan kepada 2 tempat perpuluhan.",b:4.88,tol:0.02,suf:"m³",u:"Terapung: berat = daya apungan → V = m ÷ ρ = 5 000 ÷ 1 025 = 4.88 m³."},
 {j:"pilih",t:"Bot dalam soalan tadi bergerak dari laut ke sungai (air tawar). Apakah yang berlaku?",p:["Bot tenggelam lebih dalam","Bot naik lebih tinggi","Bot tenggelam ke dasar","Tiada perubahan langsung"],b:0,u:"Air tawar kurang tumpat, jadi lebih banyak air perlu disesarkan untuk menanggung berat yang sama."}],
 bos:{j:"pilih",t:"Kapal selam mahu menyelam. Apakah yang perlu dilakukan pada tangki balastnya?",p:["Isi tangki dengan air laut","Pam air keluar dari tangki","Isi tangki dengan udara mampat","Kosongkan tangki sepenuhnya"],b:0,u:"Air menambah berat kapal selam melebihi daya apungan, jadi ia menyelam. Untuk timbul, air dipam keluar dan diganti udara."}},

{n:5, tempat:"Terowong Angin", sk:"2.6 Prinsip Bernoulli · 2.4 dan 2.5 Menilai aplikasi", lampiran:null,
 kadNama:"Daya Angkat", kadEm:"\u{2708}\u{FE0F}", kadFakta:"Bentuk aerofoil menyebabkan udara di atas sayap bergerak lebih laju. Tekanan di atas lebih rendah, jadi terhasil daya angkat.",
 bosKadNama:"Pilih Prinsip", bosKadEm:"\u{1F9ED}", bosKadFakta:"Jurutera memilih prinsip Pascal, Archimedes atau Bernoulli berdasarkan masalah yang perlu diselesaikan.",
 soalan:[
 {j:"pilih",t:"Daya angkat pada sayap kapal terbang terhasil kerana:",p:["Tekanan di atas sayap lebih rendah","Tekanan di bawah sayap lebih rendah","Sayap lebih ringan daripada udara","Enjin menolak sayap ke atas"],b:0,u:"Udara di atas sayap bergerak lebih laju, jadi tekanannya rendah. Perbezaan tekanan menolak sayap ke atas."},
 {j:"pilih",t:"Mengapakah orang ramai dinasihatkan berdiri di belakang garisan kuning di stesen LRT?",p:["Tekanan rendah boleh menarik mereka","Tren menghasilkan haba yang tinggi","Lantai di tepi landasan licin","Tren mengeluarkan bunyi yang kuat"],b:0,u:"Udara bergerak laju di antara tren dan penumpang, jadi tekanannya rendah. Tekanan lebih tinggi di belakang menolak penumpang ke arah tren."},
 {j:"pilih",t:"Bumbung rumah boleh tercabut semasa ribut kencang kerana:",p:["Tekanan di atas bumbung menjadi rendah","Tekanan di dalam rumah menjadi rendah","Angin menolak bumbung ke bawah","Hujan menambah berat bumbung"],b:0,u:"Angin laju di atas bumbung merendahkan tekanan. Tekanan lebih tinggi di dalam rumah menolak bumbung ke atas."},
 {j:"pilih",t:"Pemain bola sepak menendang bola dengan putaran supaya bola melengkung. Prinsip yang terlibat ialah:",p:["Prinsip Bernoulli","Prinsip Pascal","Prinsip Archimedes","Hukum Boyle"],b:0,u:"Putaran menyebabkan udara di satu sisi bola bergerak lebih laju. Perbezaan tekanan membelokkan bola."},
 {j:"pilih",t:"Belon udara panas naik kerana:",p:["Udara panas di dalamnya kurang tumpat","Udara panas lebih berat daripada udara sejuk","Tekanan atmosfera bertambah","Belon kehilangan jisim fabriknya"],b:0,u:"Berat udara sejuk yang disesarkan melebihi berat belon serta udara panas di dalamnya (Prinsip Archimedes)."},
 {j:"pilih",t:"Hidrometer digunakan untuk mengukur ketumpatan susu. Hidrometer tenggelam lebih dalam dalam susu yang dicampur air kerana:",p:["Ketumpatan campuran lebih rendah","Ketumpatan campuran lebih tinggi","Hidrometer menjadi lebih berat","Tekanan atmosfera berubah"],b:0,u:"Cecair kurang tumpat memerlukan isi padu sesaran lebih besar untuk menghasilkan daya apungan yang sama."},
 {j:"pilih",t:"Pam bunga semburan menghasilkan semburan halus. Penjelasan manakah betul?",p:["Udara laju merendahkan tekanan","Tekanan tinggi di hujung tiub menolak cecair ke bawah","Cecair dipanaskan dan menjadi wap","Daya apungan menolak cecair ke atas"],b:0,u:"Prinsip Bernoulli: aliran udara laju di atas tiub merendahkan tekanan, jadi tekanan atmosfera menolak cecair naik."},
 {j:"banyak",t:"Pilih DUA aplikasi Prinsip Pascal.",p:["Brek hidraulik kereta","Kerusi pergigian hidraulik","Sayap kapal terbang","Pelampung keselamatan"],b:[0,1],u:"Brek dan kerusi pergigian menggunakan sistem hidraulik. Sayap (Bernoulli) dan pelampung (Archimedes) menggunakan prinsip lain."}],
 bos:{j:"pilih",t:"Kampung anda dilanda banjir. Pasukan penyelamat perlu mengangkat kereta yang tersekat lumpur dan menyediakan rakit. Pilihan manakah PALING tepat?",p:["Jek hidraulik, tong plastik kosong","Tuas kayu, tong plastik berisi air","Kipas angin besar, papan besi tebal","Tali nilon panjang, tong berisi pasir"],b:0,u:"Jek hidraulik menggandakan daya (Pascal). Tong kosong menyesarkan banyak air dengan berat kecil, jadi daya apungan besar (Archimedes)."}},

{n:6, tempat:"Studio Reka Tekanan", sk:"2.1 hingga 2.6 Mereka cipta menggunakan pengetahuan tekanan", lampiran:null,
 kadNama:"Reka Bentuk Bendalir", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Reka bentuk yang menggunakan bendalir memanfaatkan tekanan, apungan atau aliran untuk menyelesaikan masalah.",
 bosKadNama:"Reka Cipta Tekanan", bosKadEm:"\u{1F4A1}", bosKadFakta:"Rakit kecemasan daripada botol plastik kosong ialah contoh reka cipta murah berasaskan Prinsip Archimedes.",
 soalan:[
 {j:"nombor",t:"Anda mereka rakit kecemasan daripada botol plastik 1.5 L (1.5 × 10⁻³ m³) untuk menampung beban 600 N. Berapakah bilangan minimum botol yang perlu ditenggelamkan sepenuhnya? (Abaikan berat botol.)",b:41,tol:0.01,suf:"botol",u:"Apungan setiap botol = 1 000 × 1.5 × 10⁻³ × 9.81 = 14.7 N. 600 ÷ 14.7 = 40.8, jadi sekurang-kurangnya 41 botol."},
 {j:"pilih",t:"Anda mereka lengan robot hidraulik daripada picagari dan tiub. Untuk mendapat daya keluaran besar, picagari mana perlu ditolak?",p:["Picagari kecil menolak picagari besar","Picagari besar menolak picagari kecil","Dua picagari sama saiz","Picagari kosong tanpa air"],b:0,u:"F₂ = F₁ × A₂ ÷ A₁: omboh kecil menolak omboh besar menggandakan daya."},
 {j:"pilih",t:"Untuk lengan robot hidraulik anda, bendalir manakah PALING sesuai di dalam tiub?",p:["Air tanpa gelembung udara","Udara dari pam basikal","Pasir halus yang kering","Air bersabun berbuih"],b:0,u:"Cecair hampir tidak boleh dimampat. Udara dan buih termampat dan mengurangkan kecekapan."},
 {j:"pilih",t:"Anda mereka kapal mainan daripada aluminium foil yang boleh menampung banyak syiling. Reka bentuk manakah PALING berkesan?",p:["Bekas lebar dan cetek","Bola foil yang dikepal padat","Kepingan foil yang rata tanpa dinding","Kon sempit yang sangat tinggi"],b:0,u:"Bekas lebar menyesarkan isi padu air yang besar, jadi daya apungan maksimum besar."},
 {j:"pilih",t:"Anda mereka penyembur racun rumpai tangan. Bahagian manakah PALING penting untuk menghasilkan semburan halus?",p:["Muncung yang sempit","Tangki yang lebih besar","Pemegang yang lebih panjang","Tali sandang yang lebih lebar"],b:0,u:"Muncung sempit menambah halaju aliran dan merendahkan tekanan, jadi cecair dipecahkan menjadi titisan halus."},
 {j:"pilih",t:"Anda mencadangkan cara mengurangkan risiko bumbung sekolah tercabut semasa ribut. Cadangan manakah PALING wajar?",p:["Seimbangkan tekanan dalam dan luar","Tutup semua tingkap dengan rapat","Gunakan bumbung yang lebih ringan","Cat bumbung dengan warna gelap"],b:0,u:"Mengurangkan perbezaan tekanan antara bahagian dalam dan atas bumbung mengurangkan daya angkat."},
 {j:"pilih",t:"Anda mereka tangki air untuk rumah di bukit. Di manakah tangki perlu diletakkan supaya air sampai ke semua paip?",p:["Lebih tinggi daripada semua paip","Di bawah lantai rumah","Sama tinggi dengan paip dapur","Di dalam bilik air paling bawah"],b:0,u:"Tekanan air di paip bergantung pada ketinggian lajur air di atasnya (P = hρg)."},
 {j:"banyak",t:"Pilih DUA ujian yang sesuai untuk menilai rakit botol plastik anda.",p:["Beban maksimum sebelum tenggelam","Kestabilan apabila beban diletak di tepi","Warna botol yang digunakan","Jenama air minuman dalam botol"],b:[0,1],u:"Beban maksimum dan kestabilan menentukan keselamatan rakit."}],
 bos:{j:"buka",
  t:"Reka satu alat berasaskan prinsip tekanan untuk membantu komuniti anda (contoh: rakit kecemasan banjir, pengangkat hidraulik bengkel kecil, penyembur baja, sistem air graviti untuk kebun).",
  arahan:"Nyatakan masalah yang diselesaikan, prinsip yang digunakan (tekanan cecair, Pascal, Archimedes atau Bernoulli), bahan dan sebab pemilihannya, SATU pengiraan (contoh: F₂ = F₁A₂/A₁, F = ρVg atau P = hρg), cara menguji, SATU risiko keselamatan dan cara mengurangkannya, serta kos anggaran.",
  u:"Jawapan TP6 yang kukuh memadankan prinsip yang betul dengan masalah, menerangkan mekanismenya, memilih bahan murah dan sesuai, memberi pengiraan yang tepat dengan faktor keselamatan, mencadangkan ujian yang boleh diukur, dan mengambil kira keselamatan serta kos untuk komuniti."}}
];

module.exports = {
  id:"f5b2", tingkatan:5, kod:"2.0 Tekanan",
  tajuk:"Kuasa Tekanan",
  subtajuk:"Fizik Ting. 5 · Bab 2 Tekanan",
  spi:SPI.f5b2,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep tekanan, tekanan cecair, tekanan atmosfera serta Prinsip Pascal, Archimedes dan Bernoulli. Langkah seterusnya ialah menjelaskan aplikasinya.",
   2:"{n} dapat menjelaskan aplikasi tekanan cecair dan tekanan atmosfera dalam kehidupan harian. Perlu lebih latihan pengiraan tekanan dan sistem hidraulik.",
   3:"{n} boleh mengaplikasikan P = hρg, manometer dan Prinsip Pascal untuk menyelesaikan masalah. Galakkan menganalisis data daya apungan.",
   4:"{n} mampu menganalisis daya apungan dan ketumpatan menggunakan Prinsip Archimedes. Seterusnya latih menilai aplikasi Prinsip Bernoulli.",
   5:"{n} dapat menilai aplikasi Prinsip Pascal, Archimedes dan Bernoulli untuk membuat keputusan yang wajar. Sudah bersedia mereka bentuk alat berasaskan tekanan.",
   6:"{n} berjaya mereka bentuk alat berasaskan tekanan dengan pengiraan dan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Tekanan. Cadangan: ulang hentian pertama dan cuba sedut minuman dengan straw berlubang untuk memahami tekanan atmosfera."
  },
  lampiran:{
   j1:jadual(1, "Berat sebuah objek di udara dan dalam dua cecair",
     ["Keadaan", "Bacaan neraca spring (N)"],
     [["Di udara","5.0"],["Tenggelam sepenuhnya dalam air (ρ = 1 000 kg m^{-3})","3.0"],["Tenggelam sepenuhnya dalam cecair X","3.4"]])
  },
  aras:ARAS
};
