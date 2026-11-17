/* Sumber kandungan — Fizik KSSM Tingkatan 5, Bab 1 Daya dan Gerakan II.
   SK 1.1 Daya paduan, 1.2 Leraian daya, 1.3 Keseimbangan daya, 1.4 Kekenyalan
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf). g = 9.81 m s⁻². Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Gelanggang Daya", sk:"1.1 Daya paduan · 1.3 Keseimbangan daya · 1.4 Kekenyalan", lampiran:null,
 kadNama:"Daya Paduan", kadEm:"\u{2795}", kadFakta:"Daya paduan ialah satu daya tunggal yang mewakili jumlah vektor dua atau lebih daya yang bertindak ke atas objek.",
 bosKadNama:"Hukum Hooke", bosKadEm:"\u{1FA9D}", bosKadFakta:"Pemanjangan spring berkadar terus dengan daya yang dikenakan, F = kx, selagi had kenyal tidak dilepasi.",
 soalan:[
 {j:"pilih",t:"Dua daya 6 N dan 8 N bertindak pada arah yang sama ke atas satu objek. Daya paduannya ialah:",p:["14 N","2 N","10 N","48 N"],b:0,u:"Daya pada arah sama dijumlahkan: 6 + 8 = 14 N."},
 {j:"pilih",t:"Dua daya 6 N dan 8 N bertindak pada arah bertentangan. Daya paduannya ialah:",p:["2 N ke arah daya 8 N","14 N ke arah daya 8 N","2 N ke arah daya 6 N","10 N ke arah daya 6 N"],b:0,u:"8 − 6 = 2 N, pada arah daya yang lebih besar."},
 {j:"pilih",t:"Objek berada dalam keseimbangan daya apabila:",p:["Daya paduan sifar","Dua daya sama magnitud","Objek berhenti seketika","Satu daya sahaja bertindak"],b:0,u:"Daya paduan sifar bermakna objek pegun atau bergerak dengan halaju seragam."},
 {j:"pilih",t:"Kekenyalan ialah sifat bahan yang membolehkannya:",p:["Kembali ke bentuk asal","Kekal berubah bentuk selepas daya dialihkan","Mengalirkan haba dengan baik","Menyerap cahaya sepenuhnya"],b:0,u:"Bahan kenyal seperti spring dan getah kembali ke bentuk asal apabila daya dialihkan."},
 {j:"pilih",t:"Dalam Hukum Hooke, F = kx, simbol k mewakili:",p:["Pemalar spring","Pemanjangan spring","Panjang asal spring","Jisim beban"],b:0,u:"k ialah pemalar spring dengan unit N m⁻¹. Nilai k yang besar bermakna spring lebih keras."},
 {j:"pilih",t:"Melerai daya bermaksud:",p:["Memecahkan daya kepada komponen","Menjumlahkan dua daya menjadi satu","Menghapuskan daya geseran","Menggandakan magnitud daya"],b:0,u:"Biasanya daya dileraikan kepada komponen mengufuk dan menegak."},
 {j:"pilih",t:"Kaedah segi tiga daya digunakan untuk menentukan:",p:["Daya paduan dua daya","Jisim sesuatu objek","Pemalar spring","Pecutan graviti"],b:0,u:"Dua vektor dilukis hujung ke pangkal; sisi ketiga segi tiga ialah daya paduan."},
 {j:"banyak",t:"Pilih DUA keadaan yang menunjukkan daya paduan sifar.",p:["Buku pegun di atas meja","Kereta berhalaju seragam","Bola yang sedang jatuh bebas ke tanah","Kereta yang sedang memecut di lebuh raya"],b:[0,1],u:"Objek pegun dan objek berhalaju seragam berada dalam keseimbangan. Jatuh bebas dan memecut ada daya paduan."}],
 bos:{j:"pilih",t:"Tenaga yang tersimpan dalam spring yang diregang dikenali sebagai:",p:["Tenaga keupayaan kenyal","Tenaga kinetik","Tenaga keupayaan graviti","Tenaga haba"],b:0,u:"E = ½kx² = ½Fx. Tenaga ini dibebaskan apabila spring dilepaskan."}},

{n:2, tempat:"Bilik Vektor", sk:"1.1 Daya paduan · 1.2 Leraian daya", lampiran:null,
 kadNama:"Segi Tiga Daya", kadEm:"\u{1F4D0}", kadFakta:"Bagi dua daya berserenjang F₁ dan F₂, daya paduan = √(F₁² + F₂²).",
 bosKadNama:"Komponen Daya", bosKadEm:"\u{2197}\u{FE0F}", bosKadFakta:"Daya F pada sudut θ dengan ufuk: komponen mengufuk = F kos θ, komponen menegak = F sin θ.",
 soalan:[
 {j:"nombor",t:"Daya 3 N ke timur dan 4 N ke utara bertindak ke atas satu objek. Hitung magnitud daya paduan.",b:5,tol:0.01,suf:"N",u:"F = √(3² + 4²) = √25 = 5 N."},
 {j:"nombor",t:"Bagi daya paduan dalam soalan tadi, hitung sudutnya dari arah timur. Beri jawapan kepada 1 tempat perpuluhan.",b:53.1,tol:0.2,suf:"°",u:"θ = tan⁻¹(4 ÷ 3) = 53.1° dari timur ke arah utara."},
 {j:"nombor",t:"Seorang murid menarik beg beroda dengan daya 50 N pada sudut 30° dengan ufuk. Hitung komponen mengufuk daya itu. Beri jawapan kepada 1 tempat perpuluhan.",b:43.3,tol:0.1,suf:"N",u:"F(x) = 50 kos 30° = 43.3 N."},
 {j:"nombor",t:"Bagi tarikan beg dalam soalan tadi, hitung komponen menegak daya itu.",b:25,tol:0.1,suf:"N",u:"F(y) = 50 sin 30° = 25 N."},
 {j:"pilih",t:"Mengapakah lebih mudah menarik beg beroda dengan pemegang yang rendah (sudut kecil dengan ufuk)?",p:["Komponen mengufuk lebih besar","Komponen menegak lebih besar","Berat beg berkurang","Geseran menjadi sifar"],b:0,u:"F kos θ bertambah apabila θ berkurang, jadi lebih banyak daya menggerakkan beg ke hadapan."},
 {j:"nombor",t:"Dua daya 10 N bertindak pada satu titik dengan sudut 60° di antara keduanya. Hitung daya paduan. Beri jawapan kepada 1 tempat perpuluhan.",b:17.3,tol:0.1,suf:"N",u:"F(x) = 10 + 10 kos 60° = 15 N; F(y) = 10 sin 60° = 8.66 N; F = √(15² + 8.66²) = 17.3 N."},
 {j:"pilih",t:"Dua daya 5 N dan 12 N bertindak serentak. Julat daya paduan yang mungkin ialah:",p:["7 N hingga 17 N","0 N hingga 17 N","5 N hingga 12 N","12 N hingga 60 N"],b:0,u:"Minimum apabila bertentangan (12 − 5 = 7 N), maksimum apabila searah (12 + 5 = 17 N)."},
 {j:"pilih",t:"Seekor kapal ditarik oleh dua bot tunda pada sudut yang sama di kiri dan kanan. Kapal bergerak:",p:["Lurus ke hadapan","Ke arah bot kiri","Ke arah bot kanan","Ke belakang"],b:0,u:"Komponen sisi kedua-dua tarikan saling membatalkan. Komponen ke hadapan dijumlahkan."}],
 bos:{j:"nombor",t:"Sebuah bongkah 5.0 kg berada di atas satah condong licin bersudut 30°. Hitung komponen berat yang selari dengan satah. Beri jawapan kepada 1 tempat perpuluhan.",b:24.5,tol:0.1,suf:"N",u:"mg sin 30° = 5.0 × 9.81 × 0.5 = 24.5 N. Komponen inilah yang menggelongsorkan bongkah ke bawah."}},

{n:3, tempat:"Lif Sains", sk:"1.1 Daya paduan dalam lif dan objek bersambung · 1.3 Keseimbangan daya", lampiran:null,
 kadNama:"Berat Ketara", kadEm:"\u{1F6D7}", kadFakta:"Dalam lif yang memecut ke atas, bacaan penimbang R = m(g + a). Memecut ke bawah, R = m(g − a).",
 bosKadNama:"Keseimbangan", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Bagi objek dalam keseimbangan, jumlah komponen mengufuk = 0 dan jumlah komponen menegak = 0.",
 soalan:[
 {j:"nombor",t:"Seorang murid 60 kg berdiri di atas penimbang dalam lif yang memecut ke atas pada 2.0 m s⁻². Hitung bacaan penimbang. Beri jawapan kepada 1 tempat perpuluhan.",b:708.6,tol:0.2,suf:"N",u:"R − mg = ma → R = 60(9.81 + 2.0) = 708.6 N."},
 {j:"nombor",t:"Lif yang sama memecut ke bawah pada 2.0 m s⁻². Hitung bacaan penimbang yang baharu. Beri jawapan kepada 1 tempat perpuluhan.",b:468.6,tol:0.2,suf:"N",u:"mg − R = ma → R = 60(9.81 − 2.0) = 468.6 N."},
 {j:"pilih",t:"Lif bergerak ke atas dengan halaju seragam. Bacaan penimbang murid 60 kg ialah:",p:["Sama dengan beratnya, 588.6 N","Lebih besar daripada beratnya","Lebih kecil daripada beratnya","Sifar"],b:0,u:"Halaju seragam bermakna pecutan sifar, jadi R = mg = 60 × 9.81 = 588.6 N."},
 {j:"nombor",t:"Lampu 20 N digantung oleh dua tali sama panjang. Setiap tali membuat sudut 30° dengan ufuk. Hitung tegangan setiap tali.",b:20,tol:0.1,suf:"N",u:"2T sin 30° = 20 → T = 20 ÷ (2 × 0.5) = 20 N."},
 {j:"pilih",t:"Jika tali lampu dalam soalan tadi dipasang lebih mendatar (sudut lebih kecil dengan ufuk), tegangan tali akan:",p:["Bertambah","Berkurang","Tidak berubah","Menjadi sifar"],b:0,u:"T = W ÷ (2 sin θ). Apabila θ berkurang, sin θ berkurang, jadi T bertambah."},
 {j:"nombor",t:"Dua troli 2.0 kg dan 3.0 kg disambung dan ditarik oleh daya 10 N di atas lantai licin. Hitung pecutan sistem.",b:2,tol:0.01,suf:"m s⁻²",u:"a = F ÷ (m₁ + m₂) = 10 ÷ 5.0 = 2.0 m s⁻²."},
 {j:"nombor",t:"Dalam soalan tadi, daya 10 N menarik troli 3.0 kg di hadapan. Hitung tegangan tali yang menarik troli 2.0 kg di belakang.",b:4,tol:0.01,suf:"N",u:"T = m₂a = 2.0 × 2.0 = 4.0 N."},
 {j:"nombor",t:"Sebuah kotak 6.0 kg ditolak dengan daya 30 N. Daya geseran ialah 12 N. Hitung pecutan kotak.",b:3,tol:0.01,suf:"m s⁻²",u:"Daya paduan = 30 − 12 = 18 N. a = 18 ÷ 6.0 = 3.0 m s⁻²."}],
 bos:{j:"pilih",t:"Kabel lif hanya selamat sehingga 8 000 N. Lif dan penumpang berjisim 700 kg. Lif boleh memecut ke atas pada 2.0 m s⁻²?",p:["Tidak, tegangan 8 267 N melebihi had","Ya, tegangan cuma 6 867 N","Ya, tegangan cuma 1 400 N","Tidak, tegangan 15 400 N melebihi had"],b:0,u:"T = m(g + a) = 700(9.81 + 2.0) = 8 267 N, melebihi had 8 000 N."}},

{n:4, tempat:"Makmal Spring", sk:"1.4 Kekenyalan: Hukum Hooke dan graf daya-pemanjangan", lampiran:"g1",
 kadNama:"Graf F-x", kadEm:"\u{1F4C8}", kadFakta:"Kecerunan graf daya melawan pemanjangan = pemalar spring, k. Luas di bawah graf = tenaga keupayaan kenyal.",
 bosKadNama:"Susunan Spring", bosKadEm:"\u{1F517}", bosKadFakta:"Dua spring serupa disambung bersiri: pemanjangan berganda. Disambung selari: pemanjangan separuh.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung pemalar spring dalam N cm⁻¹.",b:2,tol:0.02,suf:"N cm⁻¹",u:"k = kecerunan = 10 N ÷ 5 cm = 2 N cm⁻¹ (200 N m⁻¹)."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah pemanjangan spring apabila daya 7 N dikenakan?",b:3.5,tol:0.02,suf:"cm",u:"x = F ÷ k = 7 ÷ 2 = 3.5 cm."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung tenaga keupayaan kenyal apabila spring diregang 4 cm. Beri jawapan dalam J.",b:0.16,tol:0.005,suf:"J",u:"E = ½Fx = ½ × 8 N × 0.04 m = 0.16 J (luas di bawah graf)."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang diwakili oleh luas di bawah graf?",p:["Tenaga keupayaan kenyal","Pemalar spring","Daya maksimum","Panjang asal spring"],b:0,u:"Luas = ½ × daya × pemanjangan = kerja yang dilakukan untuk meregang spring."},
 {j:"pilih",t:"Spring lain mempunyai graf F-x yang lebih curam daripada Rajah 1. Spring itu:",p:["Lebih keras","Lebih lembut","Lebih panjang","Lebih ringan"],b:0,u:"Kecerunan lebih besar bermakna k lebih besar, jadi spring lebih keras."},
 {j:"nombor",t:"Dua spring serupa seperti dalam Rajah 1 disambung bersiri. Hitung jumlah pemanjangan apabila beban 6 N digantung.",b:6,tol:0.02,suf:"cm",u:"Setiap spring menanggung 6 N dan memanjang 3 cm. Jumlah = 6 cm."},
 {j:"nombor",t:"Dua spring serupa seperti dalam Rajah 1 disambung selari. Hitung pemanjangan apabila beban 6 N digantung.",b:1.5,tol:0.02,suf:"cm",u:"Setiap spring menanggung 3 N, jadi pemanjangan = 3 ÷ 2 = 1.5 cm."},
 {j:"pilih",t:"Garis graf F-x menjadi melengkung selepas suatu titik. Ini menunjukkan bahawa:",p:["Had kenyal telah dilepasi","Spring menjadi lebih keras","Pemalar spring kekal sama","Beban terlalu ringan"],b:0,u:"Selepas had kenyal, Hukum Hooke tidak lagi dipatuhi dan spring mungkin tidak kembali ke panjang asal."}],
 bos:{j:"banyak",t:"Pilih DUA faktor yang menghasilkan spring lebih keras (k lebih besar).",p:["Dawai yang lebih tebal","Diameter gegelung lebih kecil","Spring yang lebih panjang","Dawai yang lebih nipis"],b:[0,1],u:"Dawai tebal dan gegelung kecil menjadikan spring lebih keras. Spring lebih panjang atau dawai nipis lebih lembut."}},

{n:5, tempat:"Bengkel Kejuruteraan", sk:"1.1 hingga 1.4 Menilai aplikasi daya dan kekenyalan", lampiran:null,
 kadNama:"Pilih Spring", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Pemilihan spring bergantung pada beban, pemanjangan yang dibenarkan dan keselesaan.",
 bosKadNama:"Keselamatan Struktur", bosKadEm:"\u{1F3D7}\u{FE0F}", bosKadFakta:"Jurutera memastikan daya pada setiap bahagian struktur tidak melebihi had kekuatan bahan.",
 soalan:[
 {j:"pilih",t:"Penyerap hentak kereta lori pengangkut barang berat perlu menggunakan spring:",p:["Dengan k yang besar","Dengan k yang kecil","Yang sangat panjang dan nipis","Tanpa had kenyal"],b:0,u:"Beban berat memerlukan spring keras supaya mampatan tidak melampau."},
 {j:"pilih",t:"Tilam spring yang selesa untuk tidur sepatutnya mempunyai:",p:["Banyak spring selari","Satu spring sangat keras di tengah","Spring tanpa kekenyalan","Spring yang telah melepasi had kenyal"],b:0,u:"Susunan selari mengagihkan berat badan dan mengurangkan mampatan setiap spring."},
 {j:"pilih",t:"Penimbang ikan di pasar menggunakan spring. Mengapakah spring itu tidak boleh dibebankan melebihi had?",p:["Bacaan menjadi tidak tepat","Spring menjadi lebih keras dan lebih tepat","Graviti berubah apabila beban berat","Jisim ikan bertambah"],b:0,u:"Selepas had kenyal, pemanjangan tidak lagi berkadar dengan beban, jadi skala tidak tepat."},
 {j:"pilih",t:"Dua reka bentuk tali buaian. Reka bentuk P: tali hampir menegak. Reka bentuk Q: tali condong 60° dari menegak. Reka bentuk manakah lebih selamat?",p:["P, kerana tegangan tali lebih kecil","Q, kerana tegangan tali lebih kecil","Q, kerana buaian lebih stabil","Sama sahaja kerana beratnya sama"],b:0,u:"Tali yang hampir menegak menanggung berat dengan tegangan paling kecil."},
 {j:"pilih",t:"Pemanah menarik tali busur ke belakang. Mengapakah anak panah bergerak lebih laju apabila tali ditarik lebih jauh?",p:["Lebih banyak tenaga tersimpan","Jisim anak panah berkurang","Pemalar busur bertambah","Graviti ke atas anak panah berkurang"],b:0,u:"E = ½kx²: tarikan lebih jauh menyimpan lebih banyak tenaga, ditukar kepada tenaga kinetik anak panah."},
 {j:"pilih",t:"Seorang pekerja menolak mesin rumput pada pemegang yang curam. Cadangan manakah PALING wajar untuk menjimatkan tenaga?",p:["Rendahkan pemegang","Tinggikan pemegang supaya tolakan lebih menegak","Tambah berat pada mesin rumput","Tolak dengan lebih kuat ke bawah"],b:0,u:"Tolakan lebih mendatar memberi komponen mengufuk lebih besar dan menambah sedikit sahaja daya normal."},
 {j:"pilih",t:"Kereta kabel tergantung pada satu kabel. Mengapakah kabel dibina dengan lenturan, bukan ditegang lurus sepenuhnya?",p:["Tegangan kabel lurus terlalu besar","Kabel lurus terlalu berat","Lenturan menambah graviti","Lenturan menjadikan kabel lebih pendek"],b:0,u:"Kabel yang hampir mendatar memerlukan tegangan yang amat besar untuk mengimbangi berat."},
 {j:"banyak",t:"Pilih DUA ciri spring yang sesuai untuk penimbang bayi di klinik.",p:["k sederhana supaya bacaan jelas","Had kenyal melebihi berat bayi maksimum","k sangat besar sehingga pemanjangan hampir sifar","Sudah melepasi had kenyal"],b:[0,1],u:"Spring mesti cukup lembut untuk bacaan jelas dan tidak melepasi had kenyal bagi semua berat bayi."}],
 bos:{j:"pilih",t:"Sebuah syarikat mahu mengangkat beban 1 000 kg dengan kren. Kabel X selamat hingga 12 000 N, kabel Y hingga 9 000 N. Beban diangkat dengan pecutan 1.0 m s⁻². Kabel manakah patut dipilih?",p:["X, kerana tegangan diperlukan 10 810 N","Y, kerana tegangan diperlukan 8 810 N","Y, kerana tegangan diperlukan 1 000 N","X atau Y, kerana tegangan 9 810 N"],b:0,u:"T = m(g + a) = 1 000(9.81 + 1.0) = 10 810 N. Hanya kabel X cukup kuat."}},

{n:6, tempat:"Studio Reka Daya", sk:"1.1 hingga 1.4 Mereka cipta menggunakan pengetahuan daya dan kekenyalan", lampiran:null,
 kadNama:"Reka Bentuk Seimbang", kadEm:"\u{1F309}", kadFakta:"Reka bentuk struktur mengagihkan daya supaya setiap bahagian berada dalam keseimbangan.",
 bosKadNama:"Reka Cipta Kenyal", bosKadEm:"\u{1F4A1}", bosKadFakta:"Pelancar mainan, alat senaman dan penimbang menggunakan tenaga keupayaan kenyal dengan cara berbeza.",
 soalan:[
 {j:"nombor",t:"Anda mereka penimbang spring untuk beban hingga 50 N dengan skala sepanjang 10 cm. Berapakah pemalar spring yang diperlukan dalam N cm⁻¹?",b:5,tol:0.02,suf:"N cm⁻¹",u:"k = F ÷ x = 50 ÷ 10 = 5 N cm⁻¹."},
 {j:"pilih",t:"Anda mereka pelancar bola kertas daripada getah. Untuk menambah jarak lontaran, ubahsuai manakah PALING berkesan?",p:["Guna dua getah disusun selari","Guna getah yang lebih panjang dan lembut","Tarik getah kurang jauh","Gunakan bola yang lebih berat"],b:0,u:"Susunan selari menggandakan k, jadi lebih banyak tenaga tersimpan untuk pemanjangan yang sama."},
 {j:"pilih",t:"Anda mereka rak dinding yang disokong oleh tali condong. Bagaimanakah anda mengurangkan tegangan tali?",p:["Pasang tali lebih curam","Pasang tali hampir mendatar","Gunakan tali yang lebih nipis","Letak beban di hujung rak"],b:0,u:"Tali yang lebih curam memberi komponen menegak yang lebih besar untuk tegangan yang sama."},
 {j:"pilih",t:"Anda mereka alat senaman regangan. Bagaimanakah anda menyediakan tahap kesukaran berbeza?",p:["Spring dengan k berbeza","Gunakan satu spring sahaja","Panjangkan pemegang alat","Cat spring dengan warna berbeza"],b:0,u:"k yang lebih besar memerlukan daya lebih besar untuk regangan yang sama."},
 {j:"pilih",t:"Anda mereka kereta mainan berkuasa spring. Spring dimampat 5 cm dengan k = 400 N m⁻¹. Berapakah tenaga yang tersimpan?",p:["0.5 J","10 J","1 000 J","20 J"],b:0,u:"E = ½kx² = ½ × 400 × 0.05² = 0.5 J."},
 {j:"pilih",t:"Untuk menguji reka bentuk pelancar anda secara adil, apakah yang perlu dimalarkan?",p:["Pemanjangan getah dan jisim bola","Warna bola dan warna getah","Masa ujian pada setiap hari","Nama murid yang membina"],b:0,u:"Pemanjangan dan jisim bola menentukan tenaga dan halaju pelancaran."},
 {j:"pilih",t:"Anda mereka buaian untuk taman permainan. Ciri manakah PALING penting untuk keselamatan?",p:["Tali yang cukup kuat","Tempat duduk yang berwarna terang","Tiang yang sangat tinggi dan nipis","Rantai yang paling ringan dan murah"],b:0,u:"Tali mesti menanggung tegangan maksimum dengan faktor keselamatan, termasuk daya tambahan semasa berayun."},
 {j:"banyak",t:"Pilih DUA data yang perlu dikumpul untuk mengesahkan spring penimbang ciptaan anda.",p:["Pemanjangan bagi beban diketahui","Beban maksimum sebelum had kenyal","Warna dawai spring yang dipilih","Harga runcit spring di kedai"],b:[0,1],u:"Penentukuran dan had kenyal menentukan ketepatan dan julat penimbang."}],
 bos:{j:"buka",
  t:"Reka satu alat ringkas yang menggunakan spring atau getah untuk kegunaan harian (contoh: penimbang ikan, pelancar bijih benih, alat senaman, penyerap hentak beg sekolah).",
  arahan:"Nyatakan tujuan alat, pemilihan spring atau getah (nilai k atau kekerasan) dan sebabnya, susunan (bersiri atau selari) dan kesannya, SATU pengiraan (contoh: F = kx atau E = ½kx²), cara memastikan had kenyal tidak dilepasi, cara menguji, dan SATU pertimbangan kos atau keselamatan.",
  u:"Jawapan TP6 yang kukuh memilih k yang sesuai dengan beban, menerangkan kesan susunan bersiri atau selari, memberi pengiraan yang betul, menentukur alat dengan beban yang diketahui, mengehadkan beban di bawah had kenyal, serta mengambil kira kos dan keselamatan pengguna."}}
];

module.exports = {
  id:"f5b1", tingkatan:5, kod:"1.0 Daya dan Gerakan II",
  tajuk:"Imbangan Daya",
  subtajuk:"Fizik Ting. 5 · Bab 1 Daya dan Gerakan II",
  spi:SPI.f5b1,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep daya paduan, keseimbangan daya dan kekenyalan. Langkah seterusnya ialah menentukan daya paduan dan meleraikan daya.",
   2:"{n} dapat menentukan daya paduan dan meleraikan daya kepada komponen berserenjang. Perlu lebih latihan menyelesaikan masalah lif dan objek bersambung.",
   3:"{n} boleh mengaplikasikan daya paduan dan keseimbangan daya dalam situasi lif, tali dan objek bersambung. Galakkan menganalisis graf daya-pemanjangan.",
   4:"{n} mampu menganalisis graf daya-pemanjangan, pemalar spring dan susunan spring. Seterusnya latih menilai reka bentuk berasaskan daya.",
   5:"{n} dapat menilai pemilihan spring, tali dan kabel berdasarkan daya dan had kenyal. Sudah bersedia mereka bentuk alat berasaskan kekenyalan.",
   6:"{n} berjaya mereka bentuk alat berasaskan spring atau getah dengan pengiraan dan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Daya dan Gerakan II. Cadangan: ulang hentian pertama dan cuba tarik beg dengan sudut berbeza untuk merasai komponen daya."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,1,2,3,4,5], xLabel:"Pemanjangan (cm)", titik:true, yMin:0, yMaks:12,
     siri:[{label:"Daya (N)", y:[0,2,4,6,8,10], warna:"ungu"}],
     kapsyen:"Rajah 1 · Graf daya melawan pemanjangan sebuah spring",
     alt:"Graf garis lurus melalui asalan: daya bertambah 2 N bagi setiap 1 cm pemanjangan, hingga 10 N pada 5 cm"}
  },
  aras:ARAS
};
