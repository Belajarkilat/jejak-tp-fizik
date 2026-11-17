/* Sumber kandungan — Fizik KSSM Tingkatan 5, Bab 5 Elektronik.
   SK 5.1 Elektron, 5.2 Diod semikonduktor, 5.3 Transistor
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   e = 1.6 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg. Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Tiub Sinar", sk:"5.1 Pancaran termion dan sinar katod · 5.2 Diod · 5.3 Transistor", lampiran:null,
 kadNama:"Sinar Katod", kadEm:"\u{1F4FA}", kadFakta:"Sinar katod ialah alur elektron berhalaju tinggi yang dipancarkan dari katod yang dipanaskan dalam tiub vakum.",
 bosKadNama:"Diod", bosKadEm:"\u{27A1}\u{FE0F}", bosKadFakta:"Diod membenarkan arus mengalir dalam satu arah sahaja, iaitu apabila dipincang depan.",
 soalan:[
 {j:"pilih",t:"Pancaran termion ialah:",p:["Pancaran elektron dari logam panas","Pancaran cahaya dari logam yang disejukkan","Pancaran proton dari nukleus atom","Pancaran haba dari tiub kaca"],b:0,u:"Elektron di permukaan logam panas mendapat tenaga yang cukup untuk terlepas."},
 {j:"pilih",t:"Sinar katod terdiri daripada:",p:["Elektron","Proton","Neutron","Foton"],b:0,u:"Sinar katod ialah alur elektron, jadi ia dipesongkan oleh medan elektrik dan medan magnet."},
 {j:"pilih",t:"Mengapakah tiub sinar katod perlu divakumkan?",p:["Elektron tidak berlanggar udara","Supaya kaca tidak pecah","Supaya katod tidak panas","Supaya skrin lebih terang pada siang hari"],b:0,u:"Molekul udara akan memperlahankan dan menyerakkan elektron."},
 {j:"pilih",t:"Bahan semikonduktor jenis-n didopkan dengan atom yang menyumbang:",p:["Elektron bebas","Lohong","Proton","Neutron"],b:0,u:"Atom pentavalen seperti fosforus menyumbang elektron bebas sebagai pembawa cas majoriti."},
 {j:"pilih",t:"Diod dipincang depan apabila:",p:["Terminal p ke terminal positif","Terminal n ke terminal positif","Kedua-dua terminal ke terminal negatif","Tiada bekalan disambung"],b:0,u:"Dalam pincang depan, rintangan diod rendah dan arus mengalir."},
 {j:"pilih",t:"Rektifikasi ialah proses:",p:["Menukar a.u. kepada a.t.","Menukar a.t. kepada a.u.","Menaikkan voltan a.u.","Menurunkan rintangan litar"],b:0,u:"Diod digunakan sebagai rektifier untuk menukar arus ulang-alik kepada arus terus."},
 {j:"pilih",t:"Tiga terminal transistor ialah:",p:["Pengeluar, tapak, pengumpul","Anod, katod dan grid","Primer, sekunder dan teras","Positif, negatif dan bumi"],b:0,u:"Transistor n-p-n dan p-n-p mempunyai pengeluar (E), tapak (B) dan pengumpul (C)."},
 {j:"banyak",t:"Pilih DUA fungsi transistor dalam litar elektronik.",p:["Penguat arus","Suis automatik","Rektifier gelombang penuh","Penyimpan cas"],b:[0,1],u:"Transistor menguatkan arus dan bertindak sebagai suis. Rektifikasi oleh diod dan penyimpanan cas oleh kapasitor."}],
 bos:{j:"pilih",t:"Apakah fungsi kapasitor dalam litar rektifier?",p:["Meratakan voltan output","Menukar a.t. kepada a.u.","Menambah frekuensi bekalan","Menaikkan voltan bekalan"],b:0,u:"Kapasitor dicas semasa voltan naik dan menyahcas semasa voltan turun, jadi output lebih rata."}},

{n:2, tempat:"Makmal Diod", sk:"5.1 Kesan medan ke atas sinar katod · 5.2 Rektifikasi", lampiran:null,
 kadNama:"Gelombang Penuh", kadEm:"\u{301C}", kadFakta:"Rektifier jambatan empat diod membenarkan kedua-dua separuh kitar a.u. mengalir pada arah yang sama melalui beban.",
 bosKadNama:"Pemesongan", bosKadEm:"\u{21AA}\u{FE0F}", bosKadFakta:"Sinar katod dipesongkan ke arah plat positif dalam medan elektrik, dan mengikut petua tangan kiri Fleming dalam medan magnet.",
 soalan:[
 {j:"pilih",t:"Sinar katod melalui dua plat selari bercas. Sinar itu terpesong ke arah:",p:["Plat positif","Plat negatif","Tidak terpesong","Ke belakang"],b:0,u:"Elektron bercas negatif, jadi ditarik ke plat positif."},
 {j:"pilih",t:"Mengapakah sinar katod boleh dipesongkan oleh medan magnet?",p:["Ia zarah bercas yang bergerak","Ia sejenis gelombang bunyi","Ia tidak mempunyai jisim","Ia sejenis gelombang cahaya"],b:0,u:"Zarah bercas yang bergerak dalam medan magnet mengalami daya."},
 {j:"pilih",t:"Rektifier separuh gelombang menggunakan:",p:["Satu diod","Empat diod","Satu transistor","Dua kapasitor"],b:0,u:"Satu diod hanya membenarkan separuh kitar positif mengalir."},
 {j:"pilih",t:"Rektifier gelombang penuh jenis jambatan menggunakan:",p:["Empat diod","Satu diod","Dua transistor","Tiga kapasitor"],b:0,u:"Empat diod disusun supaya arus melalui beban dalam arah sama bagi kedua-dua separuh kitar."},
 {j:"pilih",t:"Sebuah diod disambung terbalik (pincang songsang) bersiri dengan mentol dan bateri. Mentol itu:",p:["Tidak menyala","Menyala terang","Menyala malap","Berkelip-kelip"],b:0,u:"Pincang songsang menghasilkan rintangan yang sangat tinggi, jadi hampir tiada arus."},
 {j:"pilih",t:"Bentuk gelombang output rektifier separuh gelombang pada osiloskop menunjukkan:",p:["Separuh kitar positif","Kedua-dua separuh kitar positif","Garis lurus mendatar","Gelombang sinus lengkap"],b:0,u:"Separuh kitar negatif disekat oleh diod."},
 {j:"pilih",t:"Kapasitor yang lebih besar disambung selari dengan beban dalam rektifier. Kesannya:",p:["Output lebih rata","Output lebih beralun","Output menjadi a.u.","Output menjadi sifar"],b:0,u:"Kapasitor besar menyimpan lebih banyak cas dan menyahcas lebih perlahan."},
 {j:"pilih",t:"Mengapakah peranti elektronik seperti telefon memerlukan rektifier dalam pengecasnya?",p:["Bateri dicas dengan a.t.","Soket rumah membekalkan a.t.","Telefon memerlukan voltan 240 V","Rektifier menambah kuasa"],b:0,u:"Soket membekalkan a.u.; bateri memerlukan arus terus untuk dicas."}],
 bos:{j:"pilih",t:"Sinar katod dalam tiub mengalir dari kiri ke kanan. Medan magnet bertindak ke dalam kertas. Menurut petua tangan kiri Fleming, sinar terpesong:",p:["Ke bawah","Ke atas","Ke luar kertas","Tidak terpesong"],b:0,u:"Arus konvensional bertentangan dengan arah elektron, iaitu ke kiri. Medan ke dalam kertas dan arus ke kiri menghasilkan daya ke bawah."}},

{n:3, tempat:"Bilik Penguat", sk:"5.1 Halaju elektron · 5.3 Transistor sebagai penguat arus", lampiran:null,
 kadNama:"eV = ½mv²", kadEm:"\u{1F680}", kadFakta:"Tenaga keupayaan elektrik elektron (eV) ditukar sepenuhnya kepada tenaga kinetik apabila elektron dipecutkan.",
 bosKadNama:"Penguat", bosKadEm:"\u{1F50A}", bosKadFakta:"Arus tapak yang kecil mengawal arus pengumpul yang besar. Gandaan arus β = I(C) ÷ I(B).",
 soalan:[
 {j:"nombor",t:"Elektron dipecutkan oleh beza keupayaan 500 V. Hitung tenaga kinetik elektron. Beri jawapan dalam unit 10⁻¹⁷ J.",b:8,tol:0.01,suf:"× 10⁻¹⁷ J",u:"E = eV = 1.6 × 10⁻¹⁹ × 500 = 8.0 × 10⁻¹⁷ J."},
 {j:"nombor",t:"Bagi elektron dalam soalan tadi, hitung halajunya. Beri jawapan dalam unit 10⁷ m s⁻¹ kepada 2 tempat perpuluhan.",b:1.33,tol:0.01,suf:"× 10⁷ m s⁻¹",u:"v = √(2eV ÷ m) = √(2 × 8.0 × 10⁻¹⁷ ÷ 9.11 × 10⁻³¹) = 1.33 × 10⁷ m s⁻¹."},
 {j:"pilih",t:"Beza keupayaan pemecut dinaikkan empat kali ganda. Halaju elektron menjadi:",p:["Dua kali ganda","Empat kali ganda","Lapan kali ganda","Separuh"],b:0,u:"v berkadar dengan √V. √4 = 2."},
 {j:"nombor",t:"Arus tapak transistor ialah 20 μA dan arus pengumpul ialah 2.0 mA. Hitung gandaan arus.",b:100,tol:0.5,suf:"",u:"β = I(C) ÷ I(B) = 2.0 × 10⁻³ ÷ 20 × 10⁻⁶ = 100."},
 {j:"nombor",t:"Transistor yang sama mempunyai arus tapak 35 μA. Hitung arus pengumpul dalam mA.",b:3.5,tol:0.01,suf:"mA",u:"I(C) = βI(B) = 100 × 35 μA = 3 500 μA = 3.5 mA."},
 {j:"nombor",t:"Bagi transistor dalam soalan tadi, hitung arus pengeluar dalam mA. Beri jawapan kepada 3 tempat perpuluhan.",b:3.535,tol:0.002,suf:"mA",u:"I(E) = I(B) + I(C) = 0.035 + 3.5 = 3.535 mA."},
 {j:"pilih",t:"Transistor n-p-n hanya mengalirkan arus pengumpul apabila:",p:["V tapak-pengeluar melebihi 0.7 V","Arus tapak sifar","Pengumpul disambung ke negatif","Pengeluar dibiarkan terbuka"],b:0,u:"Simpang tapak-pengeluar mesti dipincang depan dengan voltan melebihi voltan ambang."},
 {j:"pilih",t:"Mikrofon menghasilkan arus yang sangat kecil. Transistor digunakan dalam pembesar suara untuk:",p:["Menguatkan arus isyarat","Merektifikasi isyarat","Menyimpan cas isyarat","Menurunkan voltan isyarat"],b:0,u:"Perubahan kecil dalam arus tapak menghasilkan perubahan besar dalam arus pengumpul."}],
 bos:{j:"nombor",t:"Pembahagi voltan terdiri daripada perintang 10 kΩ (atas) dan 2 kΩ (bawah) disambung kepada 6 V. Hitung voltan merentasi perintang 2 kΩ.",b:1,tol:0.01,suf:"V",u:"V = 6 × 2 ÷ (10 + 2) = 1.0 V."}},

{n:4, tempat:"Makmal Transistor", sk:"5.3 Menganalisis ciri transistor dan suis automatik", lampiran:"g1",
 kadNama:"Graf I(C)-I(B)", kadEm:"\u{1F4C8}", kadFakta:"Kecerunan graf arus pengumpul melawan arus tapak memberi gandaan arus transistor.",
 bosKadNama:"Suis Automatik", bosKadEm:"\u{1F319}", bosKadFakta:"Dengan perintang peka cahaya (LDR) di bahagian bawah pembahagi voltan, transistor menghidupkan lampu apabila gelap.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung gandaan arus transistor.",b:100,tol:0.5,suf:"",u:"Kecerunan = 4.0 mA ÷ 40 μA = 100."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah arus pengumpul apabila arus tapak ialah 25 μA? Beri jawapan dalam mA.",b:2.5,tol:0.02,suf:"mA",u:"I(C) = 100 × 25 μA = 2.5 mA."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku kepada arus pengumpul apabila arus tapak sifar?",p:["Arus pengumpul juga sifar","Arus pengumpul maksimum","Arus pengumpul 100 mA","Arus pengumpul menjadi negatif"],b:0,u:"Graf melalui asalan: tiada arus tapak bermaksud transistor dimatikan."},
 {j:"nombor",t:"Suis automatik: LDR di bahagian bawah dan perintang 10 kΩ di atas, disambung kepada 6 V. Dalam gelap, rintangan LDR ialah 90 kΩ. Hitung voltan merentasi LDR.",b:5.4,tol:0.02,suf:"V",u:"V = 6 × 90 ÷ (10 + 90) = 5.4 V."},
 {j:"nombor",t:"Dalam cahaya terang, rintangan LDR yang sama menjadi 1 kΩ. Hitung voltan merentasi LDR. Beri jawapan kepada 2 tempat perpuluhan.",b:0.55,tol:0.01,suf:"V",u:"V = 6 × 1 ÷ (10 + 1) = 0.55 V."},
 {j:"pilih",t:"Berdasarkan dua soalan tadi, voltan LDR disambung ke tapak transistor. Bilakah lampu pada pengumpul menyala?",p:["Dalam gelap","Dalam cahaya terang","Pada siang dan malam","Apabila LDR dipanaskan"],b:0,u:"Dalam gelap, 5.4 V melebihi 0.7 V, jadi transistor dihidupkan. Dalam terang, 0.55 V kurang daripada 0.7 V."},
 {j:"pilih",t:"LDR dan perintang 10 kΩ dalam litar tadi ditukar tempat. Apakah kesannya?",p:["Lampu menyala ketika terang","Lampu menyala dalam gelap","Lampu sentiasa padam","Litar menjadi litar pintas"],b:0,u:"Kini voltan tapak tinggi apabila rintangan LDR rendah, iaitu dalam cahaya terang."},
 {j:"pilih",t:"Untuk membina penggera kebakaran, LDR dalam litar suis automatik digantikan dengan:",p:["Termistor","Diod pemancar cahaya","Kapasitor","Fius"],b:0,u:"Rintangan termistor berkurang apabila suhu naik, jadi voltan tapak berubah mengikut suhu."}],
 bos:{j:"pilih",t:"Mengapakah geganti (relay) digunakan apabila transistor perlu menghidupkan pam air 240 V?",p:["Arus 240 V terlalu besar","Geganti menjadikan pam lebih laju","Geganti menukar a.t. kepada a.u.","Transistor memerlukan voltan 240 V"],b:0,u:"Arus pengumpul yang kecil menghidupkan geganti, dan suis geganti mengawal litar 240 V yang berasingan."}},

{n:5, tempat:"Bengkel Elektronik", sk:"5.1 hingga 5.3 Menilai aplikasi elektronik", lampiran:null,
 kadNama:"Pilih Komponen", kadEm:"\u{1F9F0}", kadFakta:"Pemilihan diod, kapasitor, transistor dan penderia bergantung pada fungsi litar yang diperlukan.",
 bosKadNama:"Rumah Pintar", bosKadEm:"\u{1F3E0}", bosKadFakta:"Lampu jalan, penggera dan kipas automatik menggunakan transistor sebagai suis yang dikawal oleh penderia.",
 soalan:[
 {j:"pilih",t:"Sebuah pengecas telefon memberi output yang sangat beralun. Cadangan manakah PALING berkesan?",p:["Rektifier jambatan, kapasitor","Guna satu diod sahaja","Buang kapasitor","Guna transformer injak naik"],b:0,u:"Rektifikasi gelombang penuh dan kapasitor perata menghasilkan output lebih rata."},
 {j:"pilih",t:"Lampu jalan automatik perlu menyala pada waktu senja. Penderia manakah PALING sesuai?",p:["LDR","Termistor","Mikrofon","Diod"],b:0,u:"Rintangan LDR berubah mengikut keamatan cahaya."},
 {j:"pilih",t:"Kipas di bilik server perlu hidup secara automatik apabila suhu terlalu tinggi. Susunan manakah PALING sesuai?",p:["Termistor dan transistor","LDR disambung terus ke kipas","Diod pincang songsang dan kipas","Kapasitor bersiri dengan kipas"],b:0,u:"Termistor mengesan suhu dan mengubah voltan tapak untuk menghidupkan transistor."},
 {j:"pilih",t:"Mengapakah diod disambung selari dengan gegelung geganti dalam litar transistor?",p:["Melindungi transistor","Menambah kuasa geganti","Menukar a.u. kepada a.t.","Menyimpan cas untuk lampu"],b:0,u:"Apabila arus gegelung terputus, d.g.e. aruhan besar boleh merosakkan transistor. Diod mengalirkannya dengan selamat."},
 {j:"pilih",t:"Penggera banjir menggunakan dua probe yang tersentuh air. Komponen yang mengesan air berfungsi sebagai:",p:["Perintang berubah","Kapasitor perata voltan","Rektifier gelombang penuh","Transformer injak turun"],b:0,u:"Air mengurangkan rintangan antara probe, jadi voltan tapak berubah dan transistor dihidupkan."},
 {j:"pilih",t:"Suis automatik lampu taman menyala walaupun pada waktu siang. Punca PALING mungkin:",p:["LDR tersalah tempat","Bateri terlalu baharu","Lampu terlalu terang","Transistor terlalu sejuk"],b:0,u:"Susunan terbalik menyebabkan voltan tapak tinggi dalam cahaya terang."},
 {j:"pilih",t:"Untuk menjadikan lampu jalan menyala pada keadaan lebih gelap sedikit, apakah yang perlu diubah?",p:["Ubah nilai perintang tetap","Tukar transistor kepada diod","Buang LDR","Gunakan bekalan a.u."],b:0,u:"Perintang boleh laras dalam pembahagi voltan menetapkan aras cahaya untuk menghidupkan transistor."},
 {j:"banyak",t:"Pilih DUA kelebihan menggunakan transistor sebagai suis berbanding suis mekanikal.",p:["Bertindak automatik melalui penderia","Tiada bahagian bergerak yang haus","Boleh mengawal 240 V terus tanpa geganti","Tidak memerlukan bekalan kuasa"],b:[0,1],u:"Transistor bertindak balas kepada penderia dan tidak haus. Ia masih memerlukan bekalan dan biasanya geganti untuk beban 240 V."}],
 bos:{j:"pilih",t:"Sekolah anda mahu sistem lampu koridor yang jimat. Reka bentuk manakah PALING sesuai?",p:["LDR dan penderia gerakan","Suis manual yang dihidupkan pengawal","Lampu dihidupkan 24 jam","Pemasa yang menyalakan lampu sepanjang siang"],b:0,u:"Lampu hanya menyala apabila gelap dan ada orang, jadi tenaga dijimatkan."}},

{n:6, tempat:"Studio Reka Litar Pintar", sk:"5.1 hingga 5.3 Mereka cipta menggunakan pengetahuan elektronik", lampiran:null,
 kadNama:"Reka Suis", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Suis automatik terdiri daripada penderia, pembahagi voltan, transistor, geganti dan beban.",
 bosKadNama:"Reka Cipta Elektronik", bosKadEm:"\u{1F4A1}", bosKadFakta:"Penyiram pokok automatik boleh dibina dengan penderia kelembapan tanah, transistor dan pam kecil.",
 soalan:[
 {j:"pilih",t:"Anda mereka penyiram pokok automatik. Penderia manakah perlu dipasang dalam tanah?",p:["Probe kelembapan tanah","Termistor dalam air","LDR di bawah daun","Mikrofon di batang"],b:0,u:"Rintangan antara probe bertambah apabila tanah kering, jadi voltan tapak berubah."},
 {j:"pilih",t:"Pam penyiram anda menggunakan 12 V a.t. dari bekalan 240 V a.u. Komponen manakah diperlukan?",p:["Transformer injak turun, rektifier","Transformer injak naik, fius","Satu kapasitor yang besar","Satu LDR dan satu fius"],b:0,u:"Transformer menurunkan voltan, rektifier menukar a.u. kepada a.t."},
 {j:"nombor",t:"Penggera anda menggunakan pembahagi voltan 9 V. Perintang atas 8 kΩ. Termistor di bawah ialah 1 kΩ pada suhu tinggi. Hitung voltan tapak.",b:1,tol:0.01,suf:"V",u:"V = 9 × 1 ÷ (8 + 1) = 1.0 V, melebihi 0.7 V jadi transistor dihidupkan."},
 {j:"pilih",t:"Dalam penggera soalan tadi, termistor berada di bahagian bawah pembahagi. Penggera berbunyi apabila:",p:["Suhu tinggi","Suhu rendah","Cahaya terang","Tiada bekalan"],b:0,u:"Rintangan termistor rendah pada suhu tinggi."},
 {j:"pilih",t:"Untuk lampu LED ciptaan anda yang dipasang dengan bateri, mengapakah perintang perlu disambung bersiri dengan LED?",p:["Mengehadkan arus LED","Menambah kecerahan LED","Menukar a.t. kepada a.u.","Menyimpan cas untuk malam"],b:0,u:"Tanpa perintang, arus berlebihan boleh merosakkan LED."},
 {j:"pilih",t:"Bagaimanakah anda menguji penggera kebakaran ciptaan anda dengan selamat?",p:["Guna pengering rambut","Bakar kertas di dalam kelas","Celup litar ke dalam air","Sambung terus ke 240 V"],b:0,u:"Pengering rambut menaikkan suhu termistor secara terkawal tanpa api."},
 {j:"pilih",t:"Litar anda perlu bekerja semasa bekalan elektrik terputus. Cadangan manakah PALING wajar?",p:["Tambah bateri sandaran","Gunakan kapasitor kecil","Gunakan diod pincang songsang","Buang transistor"],b:0,u:"Bateri sandaran membekalkan kuasa semasa gangguan bekalan."},
 {j:"banyak",t:"Pilih DUA data yang perlu dikumpul untuk menentukur suis automatik lampu taman anda.",p:["Rintangan LDR pada aras cahaya","Voltan tapak ketika lampu menyala","Warna kotak litar yang dipilih murid","Jenama transistor yang dibeli di kedai"],b:[0,1],u:"Data rintangan dan voltan ambang membantu memilih perintang yang betul."}],
 bos:{j:"buka",
  t:"Reka satu sistem elektronik automatik untuk menyelesaikan masalah di rumah atau sekolah (contoh: penyiram pokok automatik, penggera banjir, lampu koridor automatik, kipas automatik).",
  arahan:"Nyatakan masalah, penderia yang dipilih dan sebabnya, susunan pembahagi voltan dengan transistor (bahagian atas atau bawah), SATU pengiraan voltan tapak, keperluan geganti atau diod perlindungan, bekalan kuasa (transformer, rektifier atau bateri), cara menguji dan menentukur, serta SATU pertimbangan keselamatan atau kos.",
  u:"Jawapan TP6 yang kukuh memilih penderia yang sesuai, meletakkannya di bahagian betul pembahagi voltan, mengira voltan tapak melebihi 0.7 V pada keadaan yang dikehendaki, menggunakan geganti dan diod perlindungan untuk beban besar, mencadangkan ujian selamat, serta mengambil kira kos dan keselamatan."}}
];

module.exports = {
  id:"f5b5", tingkatan:5, kod:"5.0 Elektronik",
  tajuk:"Litar Pintar",
  subtajuk:"Fizik Ting. 5 · Bab 5 Elektronik",
  spi:SPI.f5b5,
  ulasan:{
   1:"{n} dapat mengingat kembali pancaran termion, sinar katod, diod dan transistor. Langkah seterusnya ialah menjelaskan rektifikasi dan pemesongan sinar katod.",
   2:"{n} dapat menjelaskan pemesongan sinar katod dan rektifikasi menggunakan diod dan kapasitor. Perlu lebih latihan pengiraan halaju elektron dan gandaan arus.",
   3:"{n} boleh mengaplikasikan eV = ½mv² dan gandaan arus transistor untuk menyelesaikan masalah. Galakkan menganalisis litar suis automatik.",
   4:"{n} mampu menganalisis graf ciri transistor dan litar suis automatik dengan pembahagi voltan. Seterusnya latih menilai aplikasi elektronik.",
   5:"{n} dapat menilai pemilihan komponen dan reka bentuk litar elektronik untuk keperluan sebenar. Sudah bersedia mereka bentuk sistem automatik.",
   6:"{n} berjaya mereka bentuk sistem elektronik automatik dengan pengiraan dan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Elektronik. Cadangan: ulang hentian pertama dan perhatikan lampu jalan yang menyala sendiri pada waktu senja."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,10,20,30,40], xLabel:"Arus tapak (μA)", titik:true, yMin:0, yMaks:5, grid:5,
     siri:[{label:"Arus pengumpul (mA)", y:[0,1,2,3,4], warna:"ungu"}],
     kapsyen:"Rajah 1 · Graf arus pengumpul melawan arus tapak bagi sebuah transistor",
     alt:"Graf garis lurus melalui asalan: arus pengumpul bertambah 1 mA bagi setiap 10 mikroampere arus tapak, hingga 4 mA pada 40 mikroampere"}
  },
  aras:ARAS
};
