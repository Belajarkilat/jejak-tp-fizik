/* Sumber kandungan — Fizik KSSM Tingkatan 5, Bab 6 Fizik Nuklear.
   SK 6.1 Reputan radioaktif, 6.2 Tenaga nuklear
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   c = 3.0 × 10⁸ m s⁻¹, 1 u = 1.66 × 10⁻²⁷ kg. Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Radioaktif", sk:"6.1 Reputan radioaktif · 6.2 Tindak balas nuklear", lampiran:null,
 kadNama:"Reputan", kadEm:"\u{2622}\u{FE0F}", kadFakta:"Reputan radioaktif ialah proses rawak dan spontan di mana nukleus tidak stabil memancarkan sinaran untuk menjadi lebih stabil.",
 bosKadNama:"Separuh Hayat", bosKadEm:"\u{23F3}", bosKadFakta:"Separuh hayat ialah masa untuk separuh daripada nukleus radioaktif asal mereput.",
 soalan:[
 {j:"pilih",t:"Zarah alfa (α) terdiri daripada:",p:["Dua proton dan dua neutron","Satu elektron berhalaju tinggi","Gelombang elektromagnet","Satu proton dan satu neutron"],b:0,u:"Zarah alfa ialah nukleus helium, ⁴₂He."},
 {j:"pilih",t:"Zarah beta (β) ialah:",p:["Elektron berhalaju tinggi","Nukleus helium","Gelombang elektromagnet","Neutron bebas"],b:0,u:"Zarah beta terhasil apabila neutron dalam nukleus bertukar kepada proton dan elektron."},
 {j:"pilih",t:"Sinar gama (γ) ialah:",p:["Gelombang elektromagnet","Zarah bercas positif","Zarah bercas negatif","Nukleus helium"],b:0,u:"Sinar gama tidak bercas dan tidak berjisim, dengan kuasa penembusan paling tinggi."},
 {j:"pilih",t:"Pembelahan nukleus ialah:",p:["Nukleus berat terbelah","Dua nukleus ringan bercantum","Elektron dipancarkan dari atom","Atom kehilangan semua elektron"],b:0,u:"Contoh: uranium-235 menyerap neutron dan terbelah, membebaskan tenaga dan neutron baharu."},
 {j:"pilih",t:"Pelakuran nukleus ialah:",p:["Nukleus ringan bercantum","Nukleus berat terbelah dua","Neutron diserap oleh atom","Elektron bergabung dengan proton"],b:0,u:"Pelakuran berlaku dalam Matahari: nukleus hidrogen bercantum menjadi helium."},
 {j:"pilih",t:"Persamaan Einstein yang mengaitkan tenaga dan jisim ialah:",p:["E = mc²","E = mgh","E = ½mv²","E = Pt"],b:0,u:"Kecacatan jisim, Δm, ditukar kepada tenaga, E = Δmc²."},
 {j:"pilih",t:"Sinaran manakah mempunyai kuasa pengionan paling tinggi?",p:["Alfa","Beta","Gama","Gelombang radio"],b:0,u:"Zarah alfa besar dan bercas +2, jadi banyak mengionkan tetapi mudah dihentikan oleh kertas."},
 {j:"banyak",t:"Pilih DUA ciri reputan radioaktif.",p:["Berlaku secara rawak","Berlaku secara spontan","Dipercepat oleh pemanasan","Dikawal oleh tekanan udara"],b:[0,1],u:"Reputan tidak dipengaruhi oleh suhu, tekanan atau tindak balas kimia."}],
 bos:{j:"pilih",t:"Bahan yang PALING sesuai untuk menghalang sinar gama ialah:",p:["Kepingan plumbum tebal","Sehelai kertas","Kepingan aluminium nipis","Kain kapas"],b:0,u:"Sinar gama sangat menembusi dan hanya dikurangkan dengan ketara oleh plumbum tebal atau konkrit."}},

{n:2, tempat:"Makmal Persamaan", sk:"6.1 Persamaan reputan dan separuh hayat · 6.2 Tindak balas berantai", lampiran:null,
 kadNama:"Persamaan Reputan", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Dalam persamaan reputan, jumlah nombor nukleon dan jumlah nombor proton diabadikan.",
 bosKadNama:"Tindak Balas Berantai", bosKadEm:"\u{26D3}\u{FE0F}", bosKadFakta:"Neutron daripada satu pembelahan menyebabkan pembelahan lain. Dalam reaktor, rod kawalan menyerap neutron berlebihan.",
 soalan:[
 {j:"pilih",t:"Uranium-238 (²³⁸₉₂U) mereput dengan memancarkan zarah alfa. Nukleus baharu mempunyai nombor nukleon dan nombor proton:",p:["234 dan 90","238 dan 91","234 dan 92","236 dan 90"],b:0,u:"Alfa membawa 4 nukleon dan 2 proton: 238 − 4 = 234, 92 − 2 = 90 (torium)."},
 {j:"pilih",t:"Karbon-14 (¹⁴₆C) mereput dengan memancarkan zarah beta. Nukleus baharu ialah:",p:["¹⁴₇N","¹⁴₅B","¹⁰₄Be","¹³₆C"],b:0,u:"Reputan beta: nombor nukleon kekal, nombor proton bertambah 1. Hasilnya nitrogen-14."},
 {j:"pilih",t:"Apabila nukleus memancarkan sinar gama, nombor nukleon dan nombor protonnya:",p:["Tidak berubah","Berkurang 4 dan 2","Bertambah 1","Berkurang 1"],b:0,u:"Sinar gama hanya membawa tenaga dari nukleus yang teruja."},
 {j:"pilih",t:"Mengapakah separuh hayat sesuatu bahan radioaktif tidak berubah walaupun bahan dipanaskan?",p:["Reputan berlaku dalam nukleus","Bahan radioaktif tidak boleh dipanaskan","Haba menambah bilangan nukleus","Haba menghentikan reputan"],b:0,u:"Suhu hanya mempengaruhi elektron dan molekul, bukan proses dalam nukleus."},
 {j:"pilih",t:"Dalam tindak balas berantai, apakah peranan neutron yang dibebaskan?",p:["Membelah nukleus lain","Menyejukkan reaktor","Menyerap sinar gama","Menghentikan tindak balas"],b:0,u:"Setiap pembelahan U-235 membebaskan 2 atau 3 neutron yang boleh membelah nukleus lain."},
 {j:"pilih",t:"Rod kawalan dalam reaktor nuklear dibuat daripada boron atau kadmium kerana bahan itu:",p:["Menyerap neutron","Memantulkan neutron","Menghasilkan neutron","Memecutkan neutron"],b:0,u:"Rod diturunkan untuk menyerap lebih banyak neutron dan memperlahankan tindak balas."},
 {j:"pilih",t:"Moderator (contoh: air atau grafit) dalam reaktor berfungsi untuk:",p:["Memperlahankan neutron","Menyerap semua neutron","Menambah tenaga neutron","Menyimpan bahan api"],b:0,u:"Neutron perlahan lebih mudah diserap oleh U-235 untuk menyebabkan pembelahan."},
 {j:"pilih",t:"Bahan radioaktif mempunyai separuh hayat 8 hari. Selepas 24 hari, pecahan yang tinggal ialah:",p:["1/8","1/3","1/4","1/24"],b:0,u:"24 hari = 3 separuh hayat. (1/2)³ = 1/8."}],
 bos:{j:"pilih",t:"Radon-222 (²²²₈₆Rn) mereput melalui satu reputan alfa diikuti satu reputan beta. Nukleus akhir mempunyai:",p:["Nombor nukleon 218, nombor proton 85","Nombor nukleon 218, nombor proton 84","Nombor nukleon 222, nombor proton 85","Nombor nukleon 214, nombor proton 83"],b:0,u:"Alfa: 222 − 4 = 218, 86 − 2 = 84. Beta: 218 kekal, 84 + 1 = 85."}},

{n:3, tempat:"Stesen Tenaga", sk:"6.1 Masalah separuh hayat · 6.2 Tenaga nuklear E = Δmc²", lampiran:null,
 kadNama:"E = Δmc²", kadEm:"\u{1F4A5}", kadFakta:"Jisim yang kecil menghasilkan tenaga yang sangat besar kerana c² = 9 × 10¹⁶ m² s⁻².",
 bosKadNama:"Pentarikhan Karbon", bosKadEm:"\u{1F9B4}", bosKadFakta:"Karbon-14 mempunyai separuh hayat kira-kira 5 730 tahun dan digunakan untuk menganggar usia bahan organik.",
 soalan:[
 {j:"nombor",t:"Sampel radioaktif mempunyai keaktifan 64 bilangan per saat. Separuh hayatnya 2 jam. Hitung keaktifannya selepas 6 jam.",b:8,tol:0.01,suf:"bilangan per saat",u:"6 jam = 3 separuh hayat. 64 → 32 → 16 → 8."},
 {j:"nombor",t:"Keaktifan sampel berkurang daripada 800 kepada 50 bilangan per saat dalam 16 hari. Hitung separuh hayatnya.",b:4,tol:0.01,suf:"hari",u:"800 → 400 → 200 → 100 → 50 ialah 4 separuh hayat. 16 ÷ 4 = 4 hari."},
 {j:"nombor",t:"Tulang purba mengandungi 1/8 karbon-14 berbanding tulang baharu. Separuh hayat karbon-14 ialah 5 730 tahun. Anggarkan usia tulang itu.",b:17190,tol:5,suf:"tahun",u:"1/8 = (1/2)³, jadi 3 × 5 730 = 17 190 tahun."},
 {j:"nombor",t:"Dalam satu tindak balas pembelahan, kecacatan jisim ialah 0.2 u. Hitung tenaga yang dibebaskan. Beri jawapan dalam unit 10⁻¹¹ J kepada 2 tempat perpuluhan.",b:2.99,tol:0.01,suf:"× 10⁻¹¹ J",u:"Δm = 0.2 × 1.66 × 10⁻²⁷ = 3.32 × 10⁻²⁸ kg. E = Δmc² = 3.32 × 10⁻²⁸ × 9 × 10¹⁶ = 2.99 × 10⁻¹¹ J."},
 {j:"nombor",t:"Hitung tenaga yang dibebaskan jika 1.0 g jisim ditukar sepenuhnya kepada tenaga. Beri jawapan dalam unit 10¹³ J.",b:9,tol:0.01,suf:"× 10¹³ J",u:"E = mc² = 1.0 × 10⁻³ × (3.0 × 10⁸)² = 9.0 × 10¹³ J."},
 {j:"nombor",t:"Kecacatan jisim dalam satu tindak balas pelakuran ialah 2.0 × 10⁻²⁸ kg. Hitung tenaga yang dibebaskan dalam unit 10⁻¹¹ J.",b:1.8,tol:0.01,suf:"× 10⁻¹¹ J",u:"E = 2.0 × 10⁻²⁸ × 9 × 10¹⁶ = 1.8 × 10⁻¹¹ J."},
 {j:"nombor",t:"Iodin-131 mempunyai separuh hayat 8 hari. Hospital menerima 40 mg. Berapa jisim iodin-131 yang tinggal selepas 32 hari?",b:2.5,tol:0.01,suf:"mg",u:"32 hari = 4 separuh hayat. 40 → 20 → 10 → 5 → 2.5 mg."},
 {j:"pilih",t:"Mengapakah sumber radioaktif untuk perubatan dalam badan dipilih dengan separuh hayat yang pendek?",p:["Mengurangkan dos sinaran","Supaya lebih murah dibeli","Supaya lebih berat","Supaya sinaran lebih kuat sepanjang hayat"],b:0,u:"Separuh hayat pendek bermakna bahan cepat mereput dan tidak kekal lama dalam badan."}],
 bos:{j:"nombor",t:"Sumber 400 mg mempunyai separuh hayat 5 tahun. Berapa tahun diperlukan sehingga hanya 25 mg tinggal?",b:20,tol:0.01,suf:"tahun",u:"400 → 200 → 100 → 50 → 25 ialah 4 separuh hayat. 4 × 5 = 20 tahun."}},

{n:4, tempat:"Makmal Lengkung Reputan", sk:"6.1 Menganalisis lengkung reputan", lampiran:"g1",
 kadNama:"Lengkung Reputan", kadEm:"\u{1F4C9}", kadFakta:"Separuh hayat ditentukan daripada graf dengan mencari masa untuk keaktifan jatuh kepada separuh nilai awal.",
 bosKadNama:"Keaktifan", bosKadEm:"\u{1F4DF}", bosKadFakta:"Keaktifan ialah bilangan reputan per saat, diukur dengan tiub Geiger-Müller dan pembilang.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah keaktifan awal sampel?",b:800,tol:1,suf:"bilangan per minit",u:"Pada t = 0, keaktifan ialah 800 bilangan per minit."},
 {j:"nombor",t:"Berdasarkan Rajah 1, tentukan separuh hayat sampel.",b:4,tol:0.1,suf:"hari",u:"Keaktifan jatuh dari 800 kepada 400 dalam 4 hari."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah keaktifan selepas 12 hari?",b:100,tol:1,suf:"bilangan per minit",u:"12 hari = 3 separuh hayat: 800 ÷ 8 = 100."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapakah masa untuk keaktifan jatuh dari 400 kepada 200 bilangan per minit?",p:["4 hari","8 hari","2 hari","6 hari"],b:0,u:"Separuh hayat sentiasa sama, iaitu 4 hari, tanpa mengira keaktifan awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah lengkung tidak pernah mencecah sifar dalam masa yang singkat?",p:["Baki dibahagi dua setiap kali","Bahan menyerap sinaran semula","Reputan berhenti selepas 16 hari","Pembilang menjadi rosak"],b:0,u:"Reputan adalah eksponen: baki dibahagi dua setiap separuh hayat."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah pecahan nukleus asal yang telah mereput selepas 8 hari? Beri jawapan dalam bentuk perpuluhan.",b:0.75,tol:0.01,suf:"",u:"Baki = 1/4, jadi pecahan yang telah mereput = 3/4 = 0.75."},
 {j:"pilih",t:"Bacaan latar belakang 20 bilangan per minit tidak ditolak daripada data Rajah 1. Apakah kesannya?",p:["Separuh hayat kelihatan panjang","Separuh hayat kelihatan lebih pendek","Tiada kesan langsung","Keaktifan awal menjadi sifar"],b:0,u:"Bacaan latar belakang menambah nilai yang malar, jadi keaktifan kelihatan jatuh lebih perlahan."},
 {j:"pilih",t:"Sampel lain mempunyai separuh hayat 2 hari dengan keaktifan awal yang sama seperti Rajah 1. Lengkungnya akan:",p:["Menurun lebih curam","Menurun lebih landai","Bertindih dengan Rajah 1","Naik dengan masa"],b:0,u:"Separuh hayat pendek bermakna keaktifan jatuh lebih cepat."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, sampel dianggap selamat dibuang apabila keaktifannya di bawah 60 bilangan per minit. Bilakah ini berlaku?",p:["Antara 14 dan 16 hari","Antara 8 dan 10 hari","Antara 4 dan 6 hari","Selepas 32 hari"],b:0,u:"Pada 14 hari, keaktifan 71; pada 16 hari, 50. Jadi ia jatuh di bawah 60 antara 14 dan 16 hari."}},

{n:5, tempat:"Dewan Tenaga Negara", sk:"6.2 Menilai penggunaan tenaga nuklear", lampiran:null,
 kadNama:"Reaktor", kadEm:"\u{1F3ED}", kadFakta:"Dalam reaktor, haba daripada pembelahan mendidihkan air, stim memutarkan turbin, dan turbin memutarkan penjana.",
 bosKadNama:"Dasar Tenaga", bosKadEm:"\u{1F5F3}\u{FE0F}", bosKadFakta:"Keputusan tenaga nuklear menimbang kos, keselamatan, sisa radioaktif, pelepasan karbon dan penerimaan masyarakat.",
 soalan:[
 {j:"pilih",t:"Kelebihan utama tenaga nuklear berbanding arang batu ialah:",p:["Pelepasan CO₂ sangat rendah","Tiada sisa langsung","Kos pembinaan sangat murah","Tiada risiko kemalangan"],b:0,u:"Reaktor tidak membakar bahan api, jadi pelepasan CO₂ semasa operasi sangat rendah."},
 {j:"pilih",t:"Kelemahan utama tenaga nuklear ialah:",p:["Sisa radioaktif tahan lama","Bahan api terlalu banyak diperlukan","Tidak boleh menjana elektrik malam","Bergantung pada cuaca"],b:0,u:"Sisa berseparuh hayat panjang perlu disimpan dengan selamat selama ribuan tahun."},
 {j:"pilih",t:"Dalam reaktor nuklear, perubahan tenaga utama ialah:",p:["Nuklear → haba → elektrik","Kimia → haba → elektrik","Cahaya → elektrik","Kinetik → nuklear → elektrik"],b:0,u:"Tenaga nuklear menghasilkan haba, stim memutar turbin, penjana menghasilkan elektrik."},
 {j:"pilih",t:"Mengapakah reaktor nuklear dibina dengan dinding konkrit yang sangat tebal?",p:["Menghalang sinaran terlepas","Menyimpan air penyejuk","Menambah berat reaktor","Mengurangkan bunyi turbin"],b:0,u:"Konkrit tebal melindungi pekerja dan orang awam daripada sinaran gama dan neutron."},
 {j:"pilih",t:"Malaysia mempunyai banyak tenaga suria dan hidro. Penilaian manakah PALING seimbang tentang tenaga nuklear di Malaysia?",p:["Timbang kos, risiko dan alternatif","Bina segera sebelum negara jiran","Tolak kerana Malaysia negara kecil","Lebih murah daripada suria dan hidro"],b:0,u:"Keputusan perlu menimbang keselamatan, kos, sisa dan potensi sumber boleh baharu tempatan."},
 {j:"pilih",t:"Radioisotop kobalt-60 digunakan untuk mensteril alat perubatan. Sebabnya:",p:["Sinar gama membunuh kuman","Zarah alfa menembusi pembungkus","Zarah beta memanaskan alat","Kobalt melekat pada kuman"],b:0,u:"Sinar gama menembusi pembungkus dan membunuh bakteria tanpa memanaskan alat."},
 {j:"pilih",t:"Kilang kertas menggunakan sumber beta untuk mengawal ketebalan kertas. Mengapakah beta, bukan alfa atau gama?",p:["Beta separa menembusi kertas","Beta paling murah dibeli","Beta tidak mengionkan udara","Beta tidak mempunyai jisim"],b:0,u:"Alfa dihentikan sepenuhnya, gama menembusi tanpa perubahan bacaan. Beta memberi bacaan yang peka kepada ketebalan."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa mengendalikan sumber radioaktif di makmal.",p:["Guna penyepit panjang","Simpan dalam kotak plumbum","Pegang dengan tangan","Simpan dalam beg kain"],b:[0,1],u:"Jarak dan pelindung plumbum mengurangkan dos sinaran."}],
 bos:{j:"pilih",t:"Seorang ahli politik mencadangkan sisa radioaktif dibuang ke laut kerana 'laut sangat luas'. Penilaian manakah PALING tepat?",p:["Tidak wajar; masuk rantai makanan","Wajar kerana air menghalang semua sinaran","Wajar kerana separuh hayat menjadi pendek di laut","Tidak wajar kerana sisa akan meletup"],b:0,u:"Bahan radioaktif boleh terlepas dan terkumpul dalam hidupan laut. Separuh hayat tidak berubah."}},

{n:6, tempat:"Studio Reka Nuklear", sk:"6.1 hingga 6.2 Mereka cipta menggunakan pengetahuan fizik nuklear", lampiran:null,
 kadNama:"Reka Selamat", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Prinsip perlindungan sinaran: masa singkat, jarak jauh, pelindung tebal.",
 bosKadNama:"Reka Cipta Nuklear", bosKadEm:"\u{1F4A1}", bosKadFakta:"Pengesan kebocoran paip bawah tanah menggunakan radioisotop berseparuh hayat pendek yang dicampur ke dalam air.",
 soalan:[
 {j:"pilih",t:"Anda mereka sistem mengesan kebocoran paip air bawah tanah. Radioisotop manakah PALING sesuai?",p:["Pemancar gama berseparuh hayat pendek","Pemancar alfa berseparuh hayat panjang","Pemancar beta berseparuh hayat panjang","Pemancar alfa berseparuh hayat pendek"],b:0,u:"Gama menembusi tanah untuk dikesan di permukaan. Separuh hayat pendek mengurangkan pencemaran."},
 {j:"pilih",t:"Anda mereka pengesan asap untuk rumah. Sumber manakah PALING sesuai?",p:["Pemancar alfa","Pemancar gama yang kuat","Pemancar beta berkuasa tinggi","Sumber neutron yang laju"],b:0,u:"Alfa mengionkan udara dalam kebuk. Asap menyekat ion, jadi arus berkurang dan penggera berbunyi. Alfa mudah dihalang oleh bekas."},
 {j:"pilih",t:"Anda mereka bekas penyimpan sumber radioaktif sekolah. Bahan manakah PALING sesuai untuk dinding bekas?",p:["Plumbum","Plastik tebal","Kayu jati","Kadbod berlapis"],b:0,u:"Plumbum menyerap sinar gama dan beta dengan berkesan."},
 {j:"nombor",t:"Anda merancang penggunaan teknetium-99m (separuh hayat 6 jam) untuk imbasan. Dos awal 160 MBq. Berapakah keaktifan selepas 24 jam?",b:10,tol:0.01,suf:"MBq",u:"24 jam = 4 separuh hayat. 160 ÷ 16 = 10 MBq."},
 {j:"pilih",t:"Anda mereka prosedur keselamatan makmal sumber radioaktif. Peraturan manakah PALING penting?",p:["Kurangkan masa, jauhkan jarak","Makan di dalam makmal untuk menjimat masa","Simpan sumber dalam poket","Buang sumber ke dalam tong sampah biasa"],b:0,u:"Masa, jarak dan pelindung ialah tiga prinsip utama perlindungan sinaran."},
 {j:"pilih",t:"Anda mengkaji cara menyimpan sisa radioaktif aras tinggi. Cadangan manakah PALING sesuai?",p:["Ditanam dalam batuan stabil","Dibuang ke sungai","Dibakar di tempat terbuka","Disimpan di kawasan perumahan"],b:0,u:"Sisa diikat dalam kaca dan disimpan di repositori geologi dalam yang stabil."},
 {j:"pilih",t:"Untuk memeriksa kimpalan paip minyak, anda memilih sumber gama. Mengapakah bukan sinar-X dari mesin besar?",p:["Sumber gama mudah dibawa","Sinar-X tidak menembusi logam","Sinar gama lebih selamat dipegang","Sinar-X terlalu murah"],b:0,u:"Sumber gama kecil dan tidak memerlukan bekalan elektrik, sesuai di tapak terpencil."},
 {j:"banyak",t:"Pilih DUA faktor penting semasa memilih radioisotop untuk perubatan dalam badan.",p:["Separuh hayat yang pendek","Sinaran dapat dikesan dari luar","Warna bahan radioaktif itu","Harga runcit bahan di kedai"],b:[0,1],u:"Separuh hayat pendek mengurangkan dos, dan gama boleh dikesan oleh kamera di luar badan."}],
 bos:{j:"buka",
  t:"Reka satu cadangan penggunaan radioisotop atau tenaga nuklear untuk manfaat masyarakat (contoh: pengesan kebocoran paip, pensterilan makanan, rawatan kanser, penjanaan elektrik).",
  arahan:"Nyatakan tujuan, radioisotop atau jenis tindak balas yang dipilih, jenis sinaran dan separuh hayat yang sesuai serta sebabnya, SATU pengiraan (contoh: separuh hayat atau E = Δmc²), langkah keselamatan (masa, jarak, pelindung), cara pelupusan sisa, dan SATU pertimbangan etika atau kesan alam sekitar.",
  u:"Jawapan TP6 yang kukuh memadankan jenis sinaran dan separuh hayat dengan tujuan, memberi pengiraan yang betul, menerangkan langkah perlindungan sinaran, mencadangkan pelupusan sisa yang selamat, dan menimbang manfaat berbanding risiko kepada masyarakat dan alam sekitar."}}
];

module.exports = {
  id:"f5b6", tingkatan:5, kod:"6.0 Fizik Nuklear",
  tajuk:"Rahsia Nukleus",
  subtajuk:"Fizik Ting. 5 · Bab 6 Fizik Nuklear",
  spi:SPI.f5b6,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis sinaran radioaktif, pembelahan, pelakuran dan E = mc². Langkah seterusnya ialah menulis persamaan reputan.",
   2:"{n} dapat menjelaskan persamaan reputan, separuh hayat dan tindak balas berantai. Perlu lebih latihan pengiraan separuh hayat dan tenaga nuklear.",
   3:"{n} boleh mengaplikasikan separuh hayat dan E = Δmc² untuk menyelesaikan masalah. Galakkan menganalisis lengkung reputan.",
   4:"{n} mampu menganalisis lengkung reputan untuk menentukan separuh hayat dan keaktifan. Seterusnya latih menilai penggunaan tenaga nuklear.",
   5:"{n} dapat menilai kelebihan, kelemahan dan keselamatan tenaga nuklear dan radioisotop. Sudah bersedia mereka cadangan penggunaan sendiri.",
   6:"{n} berjaya mereka cadangan penggunaan radioisotop atau tenaga nuklear dengan justifikasi fizik dan keselamatan yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Fizik Nuklear. Cadangan: ulang hentian pertama dan baca tentang pengesan asap di rumah."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,2,4,6,8,10,12,14,16], xLabel:"Masa (hari)", titik:true, yMin:0, yMaks:900, grid:9,
     siri:[{label:"Keaktifan (bilangan per minit)", y:[800,566,400,283,200,141,100,71,50], warna:"ungu"}],
     kapsyen:"Rajah 1 · Lengkung reputan sebuah sampel radioaktif",
     alt:"Lengkung menurun: keaktifan 800 pada hari 0, 400 pada hari 4, 200 pada hari 8, 100 pada hari 12 dan 50 pada hari 16"}
  },
  aras:ARAS
};
