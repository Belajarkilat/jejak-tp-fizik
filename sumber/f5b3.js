/* Sumber kandungan — Fizik KSSM Tingkatan 5, Bab 3 Elektrik.
   SK 3.1 Arus dan beza keupayaan, 3.2 Rintangan, 3.3 Daya gerak elektrik dan rintangan dalam,
   3.4 Tenaga dan kuasa elektrik (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   Tiada enjin rajah litar: litar diterangkan dalam teks. Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Cas", sk:"3.1 Medan elektrik, arus dan beza keupayaan · 3.2 Rintangan", lampiran:null,
 kadNama:"Arus Elektrik", kadEm:"\u{26A1}", kadFakta:"Arus elektrik ialah kadar pengaliran cas, I = Q ÷ t. Unitnya ampere (A).",
 bosKadNama:"Hukum Ohm", bosKadEm:"\u{1F4CF}", bosKadFakta:"Bagi konduktor ohm pada suhu malar, beza keupayaan berkadar terus dengan arus: V = IR.",
 soalan:[
 {j:"pilih",t:"Medan elektrik ialah kawasan di mana:",p:["Cas mengalami daya elektrik","Arus elektrik sentiasa mengalir","Magnet mengalami daya tarikan","Jisim mengalami daya graviti"],b:0,u:"Kekuatan medan elektrik, E = F ÷ q, iaitu daya per unit cas."},
 {j:"pilih",t:"Beza keupayaan antara dua titik ditakrifkan sebagai:",p:["Kerja per unit cas","Cas per unit masa","Arus per unit rintangan","Kuasa per unit arus"],b:0,u:"V = W ÷ Q. 1 volt = 1 joule per coulomb."},
 {j:"pilih",t:"Unit S.I. bagi cas elektrik ialah:",p:["Coulomb (C)","Ampere (A)","Volt (V)","Ohm (Ω)"],b:0,u:"Q = It, jadi 1 C = 1 A s."},
 {j:"pilih",t:"Konduktor ohm ialah konduktor yang:",p:["Mematuhi Hukum Ohm","Rintangannya bertambah dengan arus","Tidak mengalirkan arus","Rintangannya sifar pada suhu bilik"],b:0,u:"Graf V melawan I bagi konduktor ohm ialah garis lurus melalui asalan."},
 {j:"pilih",t:"Kerintangan sesuatu dawai bergantung pada:",p:["Jenis bahan dawai","Panjang dawai","Luas keratan rentas dawai","Arus yang mengalir"],b:0,u:"Kerintangan, ρ, ialah sifat bahan. Rintangan pula bergantung pada ρ, panjang dan luas: R = ρL ÷ A."},
 {j:"pilih",t:"Daya gerak elektrik (d.g.e.) sel ialah:",p:["Tenaga dibekalkan bagi setiap 1 C cas","Daya yang menolak elektron dalam dawai","Beza keupayaan merentasi perintang luar sahaja","Arus maksimum yang boleh dibekalkan sel"],b:0,u:"d.g.e., ε, diukur dalam volt dan sama dengan beza keupayaan merentasi sel apabila tiada arus."},
 {j:"pilih",t:"Kuasa elektrik ialah:",p:["Kadar pemindahan tenaga","Jumlah cas yang mengalir","Tenaga per unit cas","Rintangan per unit panjang"],b:0,u:"P = E ÷ t = VI, dengan unit watt (W)."},
 {j:"banyak",t:"Pilih DUA faktor yang menambah rintangan seutas dawai.",p:["Panjang dawai bertambah","Luas keratan rentas berkurang","Dawai dibuat lebih tebal","Panjang dawai berkurang"],b:[0,1],u:"R = ρL ÷ A: rintangan berkadar terus dengan panjang dan berkadar songsang dengan luas keratan rentas."}],
 bos:{j:"pilih",t:"Bahan superkonduktor mempunyai rintangan:",p:["Sifar di bawah suhu genting","Sangat tinggi pada suhu bilik","Sama dengan kuprum","Bertambah apabila disejukkan"],b:0,u:"Superkonduktor tidak mempunyai rintangan di bawah suhu genting, jadi tiada tenaga hilang sebagai haba."}},

{n:2, tempat:"Makmal Litar", sk:"3.1 Medan elektrik · 3.2 Litar bersiri dan selari", lampiran:null,
 kadNama:"Bersiri dan Selari", kadEm:"\u{1F50C}", kadFakta:"Bersiri: R = R₁ + R₂ + ... Selari: 1/R = 1/R₁ + 1/R₂ + ...",
 bosKadNama:"Pendawaian Rumah", bosKadEm:"\u{1F3E0}", bosKadFakta:"Peralatan di rumah disambung selari supaya setiap satu menerima voltan penuh dan boleh dihidupkan secara berasingan.",
 soalan:[
 {j:"nombor",t:"Dua plat selari dipisahkan sejauh 0.05 m dan disambung kepada bekalan 2 000 V. Hitung kekuatan medan elektrik di antara plat.",b:40000,tol:5,suf:"V m⁻¹",u:"E = V ÷ d = 2 000 ÷ 0.05 = 40 000 V m⁻¹."},
 {j:"pilih",t:"Sebiji bola konduktor bercas negatif digantung di antara dua plat bercas. Ke manakah bola itu bergerak dahulu?",p:["Ke plat positif","Ke plat negatif","Kekal di tengah","Ke atas sahaja"],b:0,u:"Cas berlawanan menarik. Selepas menyentuh plat positif, bola menjadi positif dan ditolak ke plat negatif."},
 {j:"nombor",t:"Arus 0.5 A mengalir dalam lampu selama 1 minit. Hitung jumlah cas yang mengalir.",b:30,tol:0.01,suf:"C",u:"Q = It = 0.5 × 60 = 30 C."},
 {j:"nombor",t:"Perintang 2 Ω, 3 Ω dan 5 Ω disambung bersiri. Hitung rintangan berkesan.",b:10,tol:0.01,suf:"Ω",u:"R = 2 + 3 + 5 = 10 Ω."},
 {j:"nombor",t:"Perintang 6 Ω dan 3 Ω disambung selari. Hitung rintangan berkesan.",b:2,tol:0.01,suf:"Ω",u:"1/R = 1/6 + 1/3 = 1/2, jadi R = 2 Ω."},
 {j:"pilih",t:"Dalam litar selari, kuantiti manakah SAMA bagi setiap cabang?",p:["Beza keupayaan","Arus","Rintangan","Kuasa"],b:0,u:"Setiap cabang disambung terus merentasi bekalan yang sama."},
 {j:"pilih",t:"Satu mentol dalam rantaian lampu hiasan bersiri terbakar. Apakah yang berlaku kepada mentol lain?",p:["Semua padam","Semua menjadi lebih terang","Hanya mentol bersebelahan padam","Tiada perubahan"],b:0,u:"Litar bersiri hanya ada satu laluan. Apabila litar terputus, arus berhenti di semua mentol."},
 {j:"pilih",t:"Tiga perintang serupa disambung selari. Rintangan berkesannya ialah:",p:["Satu per tiga nilai asal","Tiga kali nilai asal","Sama dengan nilai asal","Dua per tiga nilai asal"],b:0,u:"Bagi n perintang serupa selari, R = R₁ ÷ n."}],
 bos:{j:"pilih",t:"Mengapakah lampu dan kipas di rumah disambung secara selari, bukan bersiri?",p:["Setiap alat menerima 240 V","Jumlah rintangan menjadi lebih besar","Arus sama dalam setiap alat","Bil elektrik menjadi lebih murah"],b:0,u:"Sambungan selari memberi voltan penuh kepada setiap alat, dan satu alat boleh dimatikan tanpa menjejaskan yang lain."}},

{n:3, tempat:"Bengkel Ohm", sk:"3.2 Menyelesaikan masalah litar dan kerintangan dawai", lampiran:null,
 kadNama:"R = ρL/A", kadEm:"\u{1F9F5}", kadFakta:"Kerintangan nikrom ≈ 1.1 × 10⁻⁶ Ω m, kuprum ≈ 1.7 × 10⁻⁸ Ω m. Sebab itu nikrom digunakan sebagai elemen pemanas.",
 bosKadNama:"Litar Gabungan", bosKadEm:"\u{1F9EE}", bosKadFakta:"Selesaikan bahagian selari dahulu, kemudian tambahkan perintang bersiri.",
 soalan:[
 {j:"nombor",t:"Bateri 12 V disambung kepada perintang 4 Ω. Hitung arus yang mengalir.",b:3,tol:0.01,suf:"A",u:"I = V ÷ R = 12 ÷ 4 = 3 A."},
 {j:"nombor",t:"Perintang 4 Ω disambung bersiri dengan gabungan selari 6 Ω dan 3 Ω, kepada bateri 12 V. Hitung arus daripada bateri.",b:2,tol:0.01,suf:"A",u:"Gabungan selari = 2 Ω. Jumlah = 4 + 2 = 6 Ω. I = 12 ÷ 6 = 2 A."},
 {j:"nombor",t:"Dalam litar tadi, hitung beza keupayaan merentasi gabungan selari 6 Ω dan 3 Ω.",b:4,tol:0.01,suf:"V",u:"V = IR = 2 × 2 = 4 V."},
 {j:"nombor",t:"Dalam litar tadi, hitung arus yang mengalir melalui perintang 6 Ω. Beri jawapan kepada 2 tempat perpuluhan.",b:0.67,tol:0.01,suf:"A",u:"I = V ÷ R = 4 ÷ 6 = 0.67 A. Baki 1.33 A mengalir melalui perintang 3 Ω."},
 {j:"nombor",t:"Dawai nikrom (ρ = 1.1 × 10⁻⁶ Ω m) sepanjang 2.0 m mempunyai luas keratan rentas 0.5 mm² (5 × 10⁻⁷ m²). Hitung rintangannya.",b:4.4,tol:0.02,suf:"Ω",u:"R = ρL ÷ A = (1.1 × 10⁻⁶)(2.0) ÷ (5 × 10⁻⁷) = 4.4 Ω."},
 {j:"nombor",t:"Dawai nikrom yang sama dipotong menjadi separuh panjang. Hitung rintangan baharu.",b:2.2,tol:0.02,suf:"Ω",u:"R berkadar dengan L: 4.4 ÷ 2 = 2.2 Ω."},
 {j:"pilih",t:"Mengapakah kabel penghantaran elektrik dibuat daripada aluminium atau kuprum yang tebal?",p:["Kehilangan tenaga lebih kecil","Rintangan tinggi menambah keselamatan","Bahan tebal lebih ringan","Logam tebal tidak berkarat"],b:0,u:"Kerintangan rendah dan luas besar memberi rintangan kecil, jadi kehilangan tenaga sebagai haba (I²R) kecil."},
 {j:"pilih",t:"Graf V melawan I bagi mentol berfilamen melengkung. Ini kerana:",p:["Rintangan filamen bertambah apabila panas","Rintangan filamen berkurang apabila panas","Mentol mematuhi Hukum Ohm","Arus tidak mengalir dalam mentol"],b:0,u:"Filamen ialah konduktor bukan ohm. Suhu yang tinggi menambah rintangannya."}],
 bos:{j:"nombor",t:"Tiga perintang 6 Ω disambung selari kepada bateri 12 V. Hitung jumlah kuasa yang dibekalkan.",b:72,tol:0.1,suf:"W",u:"R = 6 ÷ 3 = 2 Ω. P = V² ÷ R = 144 ÷ 2 = 72 W."}},

{n:4, tempat:"Bilik Sel Kering", sk:"3.3 Menganalisis d.g.e. dan rintangan dalam", lampiran:"g1",
 kadNama:"ε = V + Ir", kadEm:"\u{1F50B}", kadFakta:"Sebahagian tenaga sel hilang dalam rintangan dalamnya, r. Beza keupayaan terminal, V = ε − Ir.",
 bosKadNama:"Graf V-I Sel", bosKadEm:"\u{1F4C9}", bosKadFakta:"Dalam graf V melawan I bagi sel: pintasan-V = d.g.e., kecerunan = −r.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah d.g.e. sel itu?",b:3,tol:0.01,suf:"V",u:"Pintasan pada paksi V (apabila I = 0) ialah 3.0 V."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung rintangan dalam sel itu.",b:2,tol:0.01,suf:"Ω",u:"Kecerunan = (2.0 − 3.0) ÷ (0.5 − 0) = −2. Jadi r = 2 Ω."},
 {j:"nombor",t:"Sel dalam Rajah 1 disambung kepada perintang luar 4 Ω. Hitung arus dalam litar.",b:0.5,tol:0.01,suf:"A",u:"I = ε ÷ (R + r) = 3.0 ÷ (4 + 2) = 0.5 A."},
 {j:"nombor",t:"Bagi litar dalam soalan tadi, hitung beza keupayaan terminal sel.",b:2,tol:0.01,suf:"V",u:"V = IR = 0.5 × 4 = 2.0 V, atau V = ε − Ir = 3.0 − 0.5 × 2 = 2.0 V."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah bacaan voltmeter berkurang apabila arus bertambah?",p:["Kehilangan voltan Ir bertambah","D.g.e. sel berkurang dengan arus","Rintangan luar bertambah","Voltmeter menjadi rosak"],b:0,u:"Kehilangan voltan dalam sel, Ir, bertambah dengan arus, jadi V = ε − Ir berkurang."},
 {j:"pilih",t:"Dua sel serupa (ε, r) disambung bersiri. D.g.e. dan rintangan dalam berkesan menjadi:",p:["2ε dan 2r","ε dan r/2","2ε dan r/2","ε dan 2r"],b:0,u:"Sel bersiri: d.g.e. dan rintangan dalam dijumlahkan."},
 {j:"pilih",t:"Dua sel serupa (ε, r) disambung selari. D.g.e. dan rintangan dalam berkesan menjadi:",p:["ε dan r/2","2ε dan 2r","2ε dan r/2","ε dan 2r"],b:0,u:"Sel selari: d.g.e. kekal ε, tetapi rintangan dalam menjadi separuh."},
 {j:"pilih",t:"Bateri kereta lama menghidupkan lampu tetapi gagal menghidupkan motor pemula yang memerlukan arus besar. Punca PALING mungkin:",p:["Rintangan dalam bertambah","D.g.e. bateri bertambah","Rintangan motor sifar","Lampu menggunakan lebih banyak arus"],b:0,u:"Arus besar menyebabkan kehilangan voltan Ir yang besar, jadi voltan terminal jatuh terlalu rendah."}],
 bos:{j:"pilih",t:"Mengapakah litar pintas pada terminal bateri boleh berbahaya walaupun d.g.e.nya hanya 12 V?",p:["Arus menjadi sangat besar","D.g.e. bertambah apabila litar pintas","Voltan terminal menjadi 240 V","Rintangan dalam menjadi tak terhingga"],b:0,u:"I = ε ÷ r apabila R ≈ 0. Rintangan dalam kecil menghasilkan arus yang sangat besar dan haba yang boleh menyebabkan kebakaran."}},

{n:5, tempat:"Pejabat Bil Elektrik", sk:"3.4 Tenaga dan kuasa elektrik: menilai kecekapan dan kos", lampiran:"j1",
 kadNama:"P = VI", kadEm:"\u{1F4A1}", kadFakta:"P = VI = I²R = V² ÷ R. Tenaga E = Pt. 1 kWj = 3.6 × 10⁶ J.",
 bosKadNama:"Fius", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Kadar fius dipilih sedikit melebihi arus normal alat supaya fius hanya putus apabila arus berlebihan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung arus normal cerek elektrik. Beri jawapan kepada 2 tempat perpuluhan.",b:8.33,tol:0.02,suf:"A",u:"I = P ÷ V = 2 000 ÷ 240 = 8.33 A."},
 {j:"pilih",t:"Berdasarkan Jadual 1, fius manakah PALING sesuai untuk cerek elektrik? (Fius tersedia: 3 A, 5 A, 10 A, 13 A)",p:["10 A","3 A","5 A","13 A"],b:0,u:"Fius mesti melebihi 8.33 A tetapi sedekat mungkin dengannya. 10 A paling sesuai."},
 {j:"nombor",t:"Berdasarkan Jadual 1, cerek digunakan 30 minit sehari selama 30 hari. Hitung tenaga yang digunakan dalam kWj.",b:30,tol:0.05,suf:"kWj",u:"E = 2.0 kW × 0.5 j × 30 = 30 kWj."},
 {j:"nombor",t:"Berdasarkan Jadual 1 dan soalan tadi, tarif elektrik ialah RM0.22 sekWj. Hitung kos penggunaan cerek sebulan.",b:6.6,tol:0.01,suf:"RM",u:"Kos = 30 kWj × RM0.22 = RM6.60."},
 {j:"nombor",t:"Berdasarkan Jadual 1, lampu pijar menghasilkan 6 W tenaga cahaya. Hitung kecekapannya dalam peratus.",b:10,tol:0.1,suf:"%",u:"Kecekapan = 6 ÷ 60 × 100% = 10%. Selebihnya menjadi haba."},
 {j:"nombor",t:"Berdasarkan Jadual 1, lampu LED menghasilkan cahaya yang sama terang (6 W tenaga cahaya). Hitung kecekapannya dalam peratus.",b:60,tol:0.1,suf:"%",u:"Kecekapan = 6 ÷ 10 × 100% = 60%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, keputusan manakah PALING wajar untuk sekolah yang mahu menjimatkan bil elektrik?",p:["Ganti lampu pijar dengan lampu LED","Ganti lampu LED dengan lampu pijar","Gunakan lebih banyak cerek elektrik","Pasang fius bernilai lebih tinggi"],b:0,u:"LED menggunakan 10 W berbanding 60 W bagi cahaya yang sama, iaitu penjimatan kira-kira 83% tenaga."},
 {j:"nombor",t:"Pemanas 1 200 W digunakan selama 3 jam. Hitung tenaga yang digunakan dalam MJ. Beri jawapan kepada 2 tempat perpuluhan.",b:12.96,tol:0.02,suf:"MJ",u:"E = Pt = 1 200 × 3 × 3 600 = 12 960 000 J = 12.96 MJ."}],
 bos:{j:"pilih",t:"Seorang peniaga mahu memasang fius 13 A untuk cerek 2 000 W supaya fius 'tidak mudah putus'. Penilaian manakah PALING tepat?",p:["Kurang selamat; fius lambat putus","Lebih selamat kerana fius lebih tahan","Tiada beza kerana voltan tetap 240 V","Lebih jimat kerana arus lebih kecil"],b:0,u:"Fius yang terlalu tinggi membenarkan arus berlebihan mengalir. Dawai boleh menjadi terlalu panas sebelum fius putus."}},

{n:6, tempat:"Studio Reka Litar", sk:"3.1 hingga 3.4 Mereka cipta menggunakan pengetahuan elektrik", lampiran:null,
 kadNama:"Reka Litar", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Litar yang baik menggunakan komponen dengan kadar arus dan kuasa yang sesuai, serta ciri keselamatan seperti fius dan pembumian.",
 bosKadNama:"Reka Cipta Elektrik", bosKadEm:"\u{1F4A1}", bosKadFakta:"Sistem suria kecil untuk lampu kebun menggunakan panel suria, bateri dan lampu LED yang cekap.",
 soalan:[
 {j:"nombor",t:"Anda mereka pemanas kecil 24 W untuk bekas bekalan makanan menggunakan bekalan 12 V. Berapakah rintangan elemen pemanas yang diperlukan?",b:6,tol:0.01,suf:"Ω",u:"R = V² ÷ P = 144 ÷ 24 = 6 Ω."},
 {j:"nombor",t:"Elemen 6 Ω anda dibuat daripada dawai nikrom (ρ = 1.1 × 10⁻⁶ Ω m) berkeratan rentas 2.2 × 10⁻⁷ m². Berapakah panjang dawai yang diperlukan? Beri jawapan kepada 1 tempat perpuluhan.",b:1.2,tol:0.02,suf:"m",u:"L = RA ÷ ρ = 6 × 2.2 × 10⁻⁷ ÷ 1.1 × 10⁻⁶ = 1.2 m."},
 {j:"pilih",t:"Anda mereka lampu kecemasan berkuasa bateri untuk rumah. Jenis lampu manakah PALING sesuai?",p:["LED","Mentol pijar","Lampu halogen","Lampu wap natrium"],b:0,u:"LED paling cekap, jadi bateri tahan lebih lama."},
 {j:"pilih",t:"Anda mereka litar lampu hiasan untuk kantin. Susunan manakah PALING sesuai supaya satu lampu rosak tidak memadamkan yang lain?",p:["Selari","Bersiri","Bersiri dengan satu suis","Bersiri dengan satu fius"],b:0,u:"Dalam susunan selari, setiap lampu mempunyai laluan arusnya sendiri."},
 {j:"pilih",t:"Untuk alat pemanas anda, bahan manakah PALING sesuai sebagai elemen pemanas?",p:["Nikrom","Kuprum","Perak","Aluminium"],b:0,u:"Nikrom mempunyai kerintangan tinggi dan takat lebur tinggi, serta tidak mudah teroksida."},
 {j:"pilih",t:"Anda mahu bekalan bateri bertahan lebih lama untuk peranti yang menggunakan arus kecil. Susunan sel manakah PALING sesuai?",p:["Sel serupa disambung selari","Sel serupa disambung bersiri","Satu sel sahaja","Sel rosak bercampur sel baharu"],b:0,u:"Sel selari memberi d.g.e. yang sama dengan jumlah kapasiti yang lebih besar, jadi bertahan lebih lama."},
 {j:"pilih",t:"Ciri keselamatan manakah WAJIB ada pada alat elektrik berbadan logam yang anda reka?",p:["Dawai bumi pada badan logam","Badan logam yang dicat cerah","Suis yang sangat besar","Kabel yang sangat panjang"],b:0,u:"Dawai bumi mengalirkan arus bocor ke bumi supaya pengguna tidak terkena kejutan elektrik."},
 {j:"banyak",t:"Pilih DUA data yang perlu dikumpul untuk menilai kecekapan pemanas ciptaan anda.",p:["Kuasa input elektrik","Kenaikan suhu jisim air diketahui","Warna penutup pemanas yang dipilih","Jenama dawai nikrom yang dibeli"],b:[0,1],u:"Kecekapan = tenaga haba berguna (mcΔθ) ÷ tenaga elektrik (Pt)."}],
 bos:{j:"buka",
  t:"Reka satu sistem lampu suria untuk menerangi laluan pejalan kaki di kampung atau sekolah anda pada waktu malam.",
  arahan:"Nyatakan komponen (panel suria, bateri, lampu LED, suis atau penderia cahaya), susunan sambungan (bersiri atau selari) dan sebabnya, SATU pengiraan (contoh: kuasa, arus, tenaga sehari dalam kWj atau Wj), cara memastikan keselamatan (fius, penebat, kalis air), cara menguji, dan SATU pertimbangan kos atau penyelenggaraan.",
  u:"Jawapan TP6 yang kukuh memilih LED kerana kecekapan, menyambung lampu selari, menganggar tenaga harian dengan betul (contoh: 5 lampu × 10 W × 12 j = 600 Wj), memilih bateri dan panel yang mencukupi, memasukkan fius dan kalis air, mencadangkan ujian, dan mengambil kira kos serta penyelenggaraan."}}
];

module.exports = {
  id:"f5b3", tingkatan:5, kod:"3.0 Elektrik",
  tajuk:"Arus Kehidupan",
  subtajuk:"Fizik Ting. 5 · Bab 3 Elektrik",
  spi:SPI.f5b3,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep medan elektrik, arus, beza keupayaan, rintangan, d.g.e. dan kuasa. Langkah seterusnya ialah menjelaskan litar bersiri dan selari.",
   2:"{n} dapat menjelaskan medan elektrik serta ciri litar bersiri dan selari. Perlu lebih latihan menyelesaikan masalah litar gabungan dan kerintangan.",
   3:"{n} boleh mengaplikasikan Hukum Ohm, litar gabungan dan R = ρL/A untuk menyelesaikan masalah. Galakkan menganalisis graf d.g.e. dan rintangan dalam.",
   4:"{n} mampu menganalisis graf V-I untuk menentukan d.g.e. dan rintangan dalam. Seterusnya latih menilai penggunaan tenaga dan kos elektrik.",
   5:"{n} dapat menilai kecekapan alat, kos tenaga dan pemilihan fius untuk membuat keputusan yang wajar. Sudah bersedia mereka bentuk litar sendiri.",
   6:"{n} berjaya mereka bentuk sistem elektrik yang cekap dan selamat dengan pengiraan yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Elektrik. Cadangan: ulang hentian pertama dan baca label kuasa peralatan elektrik di rumah bersama keluarga."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,0.1,0.2,0.3,0.4,0.5], xLabel:"Arus, I (A)", titik:true, yMin:0, yMaks:3.5,
     siri:[{label:"Beza keupayaan terminal, V (V)", y:[3.0,2.8,2.6,2.4,2.2,2.0], warna:"ungu"}],
     kapsyen:"Rajah 1 · Graf beza keupayaan terminal melawan arus bagi sebiji sel",
     alt:"Graf garis lurus menurun: V ialah 3.0 volt pada arus sifar dan berkurang 0.2 volt bagi setiap 0.1 ampere, hingga 2.0 volt pada 0.5 ampere"},
   j1:jadual(1, "Kadar kuasa beberapa alat elektrik (bekalan 240 V)",
     ["Alat", "Kuasa (W)"],
     [["Cerek elektrik","2 000"],["Lampu pijar","60"],["Lampu LED (terang sama)","10"]])
  },
  aras:ARAS
};
