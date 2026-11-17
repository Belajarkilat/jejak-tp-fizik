/* Sumber kandungan — Fizik KSSM Tingkatan 5, Bab 4 Keelektromagnetan.
   SK 4.1 Daya ke atas konduktor pembawa arus dalam medan magnet, 4.2 Aruhan elektromagnet,
   4.3 Transformer (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Magnet", sk:"4.1 Daya ke atas konduktor · 4.2 Aruhan elektromagnet · 4.3 Transformer", lampiran:null,
 kadNama:"Medan Lastik", kadEm:"\u{1F9F2}", kadFakta:"Medan magnet dawai pembawa arus bergabung dengan medan magnet kekal menghasilkan medan lastik yang menolak dawai.",
 bosKadNama:"Aruhan", bosKadEm:"\u{1F300}", bosKadFakta:"Arus aruhan terhasil apabila konduktor memotong garis medan magnet atau apabila fluks magnet melalui gegelung berubah.",
 soalan:[
 {j:"pilih",t:"Dawai pembawa arus diletakkan dalam medan magnet. Apakah yang berlaku kepada dawai itu?",p:["Dawai mengalami daya","Dawai menjadi magnet kekal","Arus dalam dawai berhenti","Dawai menjadi sejuk"],b:0,u:"Interaksi medan magnet dawai dengan medan magnet luar menghasilkan daya ke atas dawai."},
 {j:"pilih",t:"Petua tangan kiri Fleming digunakan untuk menentukan arah:",p:["Daya ke atas konduktor","Arus aruhan","Garis medan magnet bumi","Putaran transformer"],b:0,u:"Jari telunjuk = medan, jari tengah = arus, ibu jari = gerakan (daya). Digunakan untuk motor."},
 {j:"pilih",t:"Petua tangan kanan Fleming digunakan untuk menentukan arah:",p:["Arus aruhan","Daya ke atas motor","Medan magnet kekal","Putaran kipas"],b:0,u:"Petua tangan kanan digunakan untuk penjana: ibu jari = gerakan, telunjuk = medan, jari tengah = arus aruhan."},
 {j:"pilih",t:"Hukum Faraday menyatakan bahawa magnitud d.g.e. aruhan berkadar terus dengan:",p:["Kadar perubahan fluks","Rintangan gegelung","Jisim magnet","Suhu konduktor"],b:0,u:"Semakin cepat fluks berubah, semakin besar d.g.e. aruhan."},
 {j:"pilih",t:"Hukum Lenz menyatakan bahawa arus aruhan mengalir pada arah yang:",p:["Menentang perubahan fluks","Membantu perubahan yang menghasilkannya","Sentiasa ikut arah jam","Selari dengan medan bumi"],b:0,u:"Hukum Lenz ialah akibat prinsip keabadian tenaga."},
 {j:"pilih",t:"Transformer berfungsi berdasarkan prinsip:",p:["Aruhan elektromagnet","Kesan haba arus","Pantulan gelombang","Prinsip Archimedes"],b:0,u:"Arus ulang-alik dalam gegelung primer menghasilkan fluks berubah yang mengaruhkan d.g.e. dalam gegelung sekunder."},
 {j:"pilih",t:"Transformer injak naik mempunyai:",p:["Lilitan sekunder lebih banyak","Lebih banyak lilitan primer","Bilangan lilitan yang sama","Tiada teras besi"],b:0,u:"Vs ÷ Vp = Ns ÷ Np, jadi Ns > Np menghasilkan voltan sekunder yang lebih tinggi."},
 {j:"banyak",t:"Pilih DUA komponen utama motor arus terus ringkas.",p:["Komutator","Magnet kekal","Gelang gelincir","Teras besi berlamina"],b:[0,1],u:"Motor a.t. ringkas ada gegelung, magnet kekal, komutator dan berus. Gelang gelincir digunakan dalam penjana a.u."}],
 bos:{j:"pilih",t:"Mengapakah transformer tidak berfungsi dengan bekalan arus terus yang malar?",p:["Fluks magnet tidak berubah","Arus terus terlalu kecil","Teras besi menjadi panas","Gegelung terbakar serta-merta"],b:0,u:"Tanpa perubahan fluks, tiada d.g.e. diaruhkan dalam gegelung sekunder."}},

{n:2, tempat:"Bengkel Motor", sk:"4.1 Motor arus terus · 4.2 Faktor aruhan", lampiran:null,
 kadNama:"Motor a.t.", kadEm:"\u{2699}\u{FE0F}", kadFakta:"Komutator menyongsangkan arah arus dalam gegelung setiap setengah putaran supaya gegelung terus berputar pada arah yang sama.",
 bosKadNama:"Laju Motor", bosKadEm:"\u{1F3CE}\u{FE0F}", bosKadFakta:"Laju putaran motor bertambah dengan arus yang lebih besar, magnet yang lebih kuat dan bilangan lilitan yang lebih banyak.",
 soalan:[
 {j:"pilih",t:"Apakah fungsi komutator dalam motor arus terus?",p:["Menyongsangkan arah arus","Menambah voltan bekalan","Menghasilkan medan magnet kekal","Mengurangkan geseran pada paksi"],b:0,u:"Tanpa komutator, gegelung hanya berayun ke depan dan ke belakang."},
 {j:"pilih",t:"Antara berikut, manakah TIDAK menambah magnitud daya ke atas dawai pembawa arus dalam medan magnet?",p:["Menyongsangkan arah arus","Menambah arus","Menggunakan magnet lebih kuat","Menambah panjang dawai dalam medan"],b:0,u:"Menyongsangkan arus hanya menyongsangkan arah daya, bukan magnitudnya."},
 {j:"pilih",t:"Arah arus dalam dawai disongsangkan. Apakah kesan ke atas daya pada dawai?",p:["Arah daya disongsangkan","Magnitud daya berganda","Daya menjadi sifar","Tiada perubahan"],b:0,u:"Arah daya bergantung pada arah arus dan arah medan magnet."},
 {j:"pilih",t:"Sebatang magnet ditolak masuk ke dalam gegelung yang disambung kepada galvanometer. Jarum galvanometer:",p:["Terpesong seketika","Kekal di sifar","Terpesong secara tetap","Berputar tanpa henti"],b:0,u:"Arus aruhan hanya terhasil semasa fluks berubah, iaitu semasa magnet bergerak."},
 {j:"pilih",t:"Magnet yang sama ditolak masuk dengan lebih laju. Pesongan galvanometer menjadi:",p:["Lebih besar","Lebih kecil","Sifar","Sama"],b:0,u:"Kadar perubahan fluks lebih tinggi menghasilkan d.g.e. aruhan lebih besar (Hukum Faraday)."},
 {j:"pilih",t:"Kutub utara magnet ditolak ke arah hujung gegelung. Menurut Hukum Lenz, hujung gegelung itu menjadi:",p:["Kutub utara","Kutub selatan","Tidak bermagnet","Bercas positif"],b:0,u:"Kutub utara terhasil untuk menolak magnet yang menghampiri, iaitu menentang perubahan."},
 {j:"pilih",t:"Penjana arus ulang-alik berbeza daripada penjana arus terus kerana menggunakan:",p:["Gelang gelincir","Komutator","Bateri","Fius"],b:0,u:"Gelang gelincir mengekalkan sambungan tetap pada setiap hujung gegelung, jadi arus keluar berubah arah."},
 {j:"banyak",t:"Pilih DUA cara menambah laju putaran motor arus terus.",p:["Tambah arus dalam gegelung","Guna magnet yang lebih kuat","Songsangkan kutub magnet","Kurangkan bilangan lilitan"],b:[0,1],u:"Arus lebih besar dan magnet lebih kuat menambah daya pada gegelung. Menyongsangkan kutub hanya menukar arah putaran."}],
 bos:{j:"pilih",t:"Dinamo basikal menyalakan lampu lebih terang apabila basikal dikayuh lebih laju. Penjelasan manakah PALING tepat?",p:["Kadar perubahan fluks bertambah","Rintangan lampu berkurang","Magnet menjadi lebih berat","Arus bateri bertambah"],b:0,u:"Magnet berputar lebih laju, jadi d.g.e. aruhan bertambah mengikut Hukum Faraday."}},

{n:3, tempat:"Stesen Transformer", sk:"4.3 Transformer: menyelesaikan masalah", lampiran:null,
 kadNama:"Vs/Vp = Ns/Np", kadEm:"\u{1F50C}", kadFakta:"Bagi transformer unggul, kuasa input = kuasa output: VpIp = VsIs.",
 bosKadNama:"Kecekapan", bosKadEm:"\u{1F4CA}", bosKadFakta:"Kecekapan = (VsIs ÷ VpIp) × 100%. Transformer sebenar kehilangan tenaga sebagai haba.",
 soalan:[
 {j:"nombor",t:"Transformer mempunyai 1 000 lilitan primer dan 50 lilitan sekunder. Voltan primer 240 V. Hitung voltan sekunder.",b:12,tol:0.01,suf:"V",u:"Vs = Vp × Ns ÷ Np = 240 × 50 ÷ 1 000 = 12 V."},
 {j:"nombor",t:"Transformer unggul tadi membekalkan lampu 12 V, 24 W. Hitung arus dalam gegelung primer.",b:0.1,tol:0.005,suf:"A",u:"Kuasa input = kuasa output = 24 W. Ip = 24 ÷ 240 = 0.1 A."},
 {j:"nombor",t:"Pengecas telefon menukar 240 V kepada 9 V. Gegelung primer ada 1 600 lilitan. Hitung bilangan lilitan sekunder.",b:60,tol:0.5,suf:"lilitan",u:"Ns = Np × Vs ÷ Vp = 1 600 × 9 ÷ 240 = 60 lilitan."},
 {j:"nombor",t:"Transformer menerima 240 V, 0.12 A dan membekalkan 12 V, 2.0 A. Hitung kecekapannya. Beri jawapan kepada 1 tempat perpuluhan.",b:83.3,tol:0.1,suf:"%",u:"Kecekapan = (12 × 2.0) ÷ (240 × 0.12) × 100% = 24 ÷ 28.8 × 100% = 83.3%."},
 {j:"nombor",t:"Transformer injak naik menukar 12 V kepada 240 V. Gegelung primer ada 40 lilitan. Hitung bilangan lilitan sekunder.",b:800,tol:1,suf:"lilitan",u:"Ns = 40 × 240 ÷ 12 = 800 lilitan."},
 {j:"pilih",t:"Mengapakah teras transformer dibuat daripada kepingan besi lembut berlamina?",p:["Mengurangkan arus pusar","Menambah rintangan gegelung","Menjadikan teras magnet kekal","Menambah berat transformer"],b:0,u:"Laminasi berpenebat memotong laluan arus pusar, jadi kehilangan haba berkurang."},
 {j:"pilih",t:"Mengapakah gegelung transformer menggunakan dawai kuprum yang tebal?",p:["Mengurangkan kehilangan haba","Menambah fluks magnet","Menjadikan transformer lebih murah","Menambah voltan sekunder"],b:0,u:"Dawai tebal berintangan rendah, jadi kehilangan I²R berkurang."},
 {j:"pilih",t:"Transformer injak turun mengurangkan voltan. Apakah yang berlaku kepada arus sekunder berbanding arus primer?",p:["Arus sekunder lebih besar","Arus sekunder lebih kecil","Arus sekunder sama","Arus sekunder sifar"],b:0,u:"VpIp = VsIs: apabila voltan berkurang, arus bertambah."}],
 bos:{j:"pilih",t:"Transformer dalam pengecas komputer riba terasa panas selepas digunakan. Punca utama kehilangan tenaga ini ialah:",p:["Arus pusar dan rintangan","Tekanan udara di sekeliling","Cahaya dari skrin komputer","Bunyi kipas komputer"],b:0,u:"Haba terhasil daripada rintangan dawai (I²R), arus pusar dalam teras dan histerisis."}},

{n:4, tempat:"Grid Nasional", sk:"4.3 Menganalisis kehilangan kuasa dalam penghantaran", lampiran:"j1",
 kadNama:"Voltan Tinggi", kadEm:"\u{1F5FC}", kadFakta:"Kuasa dihantar pada voltan tinggi supaya arus kecil. Kehilangan kuasa dalam kabel = I²R.",
 bosKadNama:"Grid Nasional", bosKadEm:"\u{1F310}", bosKadFakta:"Di Malaysia, elektrik dihantar melalui grid pada voltan seperti 132 kV, 275 kV dan 500 kV.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung arus dalam kabel apabila kuasa dihantar pada 11 kV. Beri jawapan kepada 1 tempat perpuluhan.",b:90.9,tol:0.1,suf:"A",u:"I = P ÷ V = 1 000 000 ÷ 11 000 = 90.9 A."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kehilangan kuasa dalam kabel pada 11 kV. Beri jawapan dalam kW kepada 1 tempat perpuluhan.",b:41.3,tol:0.1,suf:"kW",u:"P = I²R = 90.9² × 5.0 = 41 322 W = 41.3 kW."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung arus dalam kabel apabila kuasa dihantar pada 275 kV. Beri jawapan kepada 2 tempat perpuluhan.",b:3.64,tol:0.01,suf:"A",u:"I = 1 000 000 ÷ 275 000 = 3.64 A."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kehilangan kuasa dalam kabel pada 275 kV. Beri jawapan kepada nombor bulat terdekat.",b:66,tol:1,suf:"W",u:"P = 3.64² × 5.0 = 66 W."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah kesimpulan PALING tepat?",p:["Voltan tinggi, kehilangan kecil","Voltan tinggi, kehilangan besar","Rintangan kabel berubah dengan voltan","Kuasa dihantar berbeza bagi dua voltan"],b:0,u:"Arus lebih kecil pada voltan tinggi. Kehilangan I²R berkurang kira-kira 600 kali."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa peratus kuasa hilang dalam kabel apabila dihantar pada 11 kV? Beri jawapan kepada 1 tempat perpuluhan.",b:4.1,tol:0.1,suf:"%",u:"41.3 kW ÷ 1 000 kW × 100% = 4.1%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, transformer jenis manakah digunakan di stesen jana kuasa sebelum penghantaran?",p:["Injak naik","Injak turun","Tanpa teras besi","Arus terus"],b:0,u:"Voltan dinaikkan supaya arus penghantaran kecil."},
 {j:"pilih",t:"Mengapakah voltan perlu diturunkan sebelum sampai ke rumah?",p:["Voltan tinggi berbahaya","Arus rumah perlu menjadi sifar","Kabel rumah menjadi sejuk","Alat rumah perlu arus terus"],b:0,u:"Alat elektrik di rumah direka untuk 230-240 V. Voltan tinggi berbahaya dan memerlukan penebatan khas."}],
 bos:{j:"pilih",t:"Rintangan kabel digandakan tetapi voltan penghantaran 275 kV dikekalkan. Kehilangan kuasa menjadi:",p:["Dua kali ganda","Empat kali ganda","Separuh","Tidak berubah"],b:0,u:"P = I²R. Arus sama (voltan dan kuasa sama), jadi kehilangan berkadar terus dengan R."}},

{n:5, tempat:"Bilik Kawalan Tenaga", sk:"4.1 hingga 4.3 Menilai aplikasi keelektromagnetan", lampiran:null,
 kadNama:"Pilih Reka Bentuk", kadEm:"\u{1F9ED}", kadFakta:"Pemilihan motor, penjana dan transformer bergantung pada kecekapan, kos dan keperluan pengguna.",
 bosKadNama:"Tenaga Hijau", bosKadEm:"\u{1F33F}", bosKadFakta:"Penjana hidro dan angin menukar tenaga kinetik kepada tenaga elektrik melalui aruhan elektromagnet.",
 soalan:[
 {j:"pilih",t:"Pengeluar kipas siling mahu motor berputar lebih laju tanpa menambah voltan. Cadangan manakah PALING sesuai?",p:["Tambah lilitan gegelung","Guna dawai lebih nipis","Kurangkan lilitan gegelung","Buang teras besi"],b:0,u:"Lebih banyak lilitan dan medan lebih kuat menambah daya kilas."},
 {j:"pilih",t:"Sebuah kilang memilih antara dua transformer. Transformer P: 95% cekap, RM3 000. Transformer Q: 80% cekap, RM2 000. Untuk penggunaan 20 tahun, pilihan PALING wajar ialah:",p:["P, kerana jimat tenaga","Q, kerana harga belian lebih murah","Q, kerana lebih ringan","Sama sahaja kerana fungsinya sama"],b:0,u:"Kehilangan 15% lebih rendah selama 20 tahun menjimatkan jauh lebih daripada beza harga RM1 000."},
 {j:"pilih",t:"Penjana hidroelektrik di empangan menghasilkan lebih banyak kuasa apabila:",p:["Air mengalir lebih laju","Air lebih sejuk","Empangan dicat putih","Turbin lebih ringan"],b:0,u:"Turbin berputar lebih laju, jadi kadar perubahan fluks dan d.g.e. bertambah."},
 {j:"pilih",t:"Kereta elektrik menggunakan brek regeneratif. Penjelasan manakah PALING tepat?",p:["Motor bertindak sebagai penjana","Brek menukar haba menjadi cahaya","Bateri menolak kereta ke belakang","Roda berhenti kerana geseran udara"],b:0,u:"Semasa membrek, roda memutarkan motor yang bertindak sebagai penjana dan mengecas bateri. Daya Lenz memperlahankan kereta."},
 {j:"pilih",t:"Dapur aruhan memanaskan periuk besi tetapi tidak memanaskan periuk kaca. Sebabnya:",p:["Arus pusar dalam logam","Kaca memantulkan haba","Periuk besi lebih berat","Kaca menyerap magnet"],b:0,u:"Medan magnet berubah mengaruhkan arus pusar dalam logam. Kaca bukan konduktor."},
 {j:"pilih",t:"Pengecas tanpa wayar telefon pintar menggunakan prinsip:",p:["Aruhan elektromagnet","Pembiasan cahaya","Prinsip Bernoulli","Tekanan atmosfera"],b:0,u:"Gegelung dalam pengecas menghasilkan fluks berubah yang mengaruhkan arus dalam gegelung telefon."},
 {j:"pilih",t:"Penilaian manakah PALING tepat tentang penggunaan transformer untuk menyalakan lampu 12 V di kebun?",p:["Selamat dengan injak turun berpenebat","Tidak perlu transformer, sambung terus 240 V","Gunakan transformer injak naik","Gunakan arus terus dari soket"],b:0,u:"Transformer injak turun berpenebat menurunkan 240 V kepada 12 V yang lebih selamat di kawasan lembap."},
 {j:"banyak",t:"Pilih DUA cara meningkatkan kecekapan transformer.",p:["Guna teras besi lembut berlamina","Guna dawai kuprum tebal","Guna teras keluli padu tanpa lamina","Jarakkan gegelung primer dari sekunder"],b:[0,1],u:"Laminasi mengurangkan arus pusar, dawai tebal mengurangkan kehilangan I²R."}],
 bos:{j:"pilih",t:"Sebuah kampung pedalaman di Sabah mempunyai sungai deras tetapi tiada bekalan grid. Penyelesaian manakah PALING wajar?",p:["Penjana mikrohidro","Kabel dari bandar sejauh 200 km","Penjana diesel sahaja tanpa had","Bateri kereta yang dicas setiap hari"],b:0,u:"Mikrohidro memanfaatkan sumber tempatan, murah untuk dioperasi dan mesra alam."}},

{n:6, tempat:"Studio Reka Magnet", sk:"4.1 hingga 4.3 Mereka cipta menggunakan pengetahuan keelektromagnetan", lampiran:null,
 kadNama:"Reka Penjana", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Penjana ringkas memerlukan gegelung, magnet, gerakan relatif dan litar untuk mengalirkan arus.",
 bosKadNama:"Reka Cipta Elektromagnet", bosKadEm:"\u{1F4A1}", bosKadFakta:"Penjana mini daripada kipas angin terpakai boleh menyalakan LED apabila ditiup angin.",
 soalan:[
 {j:"pilih",t:"Anda mereka penjana mini yang diputar oleh kincir angin. Untuk menghasilkan d.g.e. lebih besar, ubahsuai manakah PALING berkesan?",p:["Tambah lilitan gegelung","Guna dawai berwarna","Kurangkan bilah kincir","Jauhkan magnet dari gegelung"],b:0,u:"d.g.e. aruhan berkadar dengan bilangan lilitan dan kadar perubahan fluks."},
 {j:"pilih",t:"Anda mahu penjana mini anda mengecas bateri. Jenis penjana manakah diperlukan?",p:["Penjana a.t. dengan komutator","Penjana a.u. dengan gelang gelincir","Transformer injak naik","Motor tanpa magnet"],b:0,u:"Bateri dicas dengan arus terus, jadi komutator diperlukan."},
 {j:"pilih",t:"Anda mereka lampu suluh goncang (shake flashlight). Komponen manakah PALING penting?",p:["Magnet bergerak dalam gegelung","Bateri yang besar dan berat","Kanta yang tebal dan jernih","Suis yang berwarna terang"],b:0,u:"Menggoncang menggerakkan magnet melalui gegelung, mengaruhkan arus untuk mengecas kapasitor."},
 {j:"nombor",t:"Anda mereka transformer untuk menukar 240 V kepada 6 V bagi projek LED. Gegelung primer 1 200 lilitan. Berapakah lilitan sekunder?",b:30,tol:0.5,suf:"lilitan",u:"Ns = 1 200 × 6 ÷ 240 = 30 lilitan."},
 {j:"pilih",t:"Untuk menguji motor ciptaan anda secara adil, apakah yang perlu dimalarkan semasa membandingkan bilangan lilitan?",p:["Voltan bekalan dan magnet","Warna dawai yang dipilih","Masa ujian setiap hari","Nama murid yang membina"],b:0,u:"Hanya pemboleh ubah dimanipulasi (bilangan lilitan) yang diubah."},
 {j:"pilih",t:"Anda mereka loceng elektrik untuk kelas. Komponen manakah menghasilkan magnet yang boleh dihidup dan dimatikan?",p:["Elektromagnet","Magnet kekal","Teras plastik","Spring keluli"],b:0,u:"Elektromagnet hanya bermagnet apabila arus mengalir."},
 {j:"pilih",t:"Ciri keselamatan manakah PALING penting bagi transformer buatan sendiri yang disambung ke soket 240 V?",p:["Penebatan dan fius","Warna kotak yang terang","Kabel yang sangat panjang","Teras tanpa lamina"],b:0,u:"Penebatan mencegah kejutan elektrik dan fius memutuskan litar jika arus berlebihan."},
 {j:"banyak",t:"Pilih DUA data yang perlu dikumpul untuk menilai penjana kincir angin anda.",p:["Voltan output pada pelbagai laju angin","Bilangan LED yang boleh dinyalakan","Warna bilah kincir yang dicat","Jenama magnet yang dibeli di kedai"],b:[0,1],u:"Voltan dan beban yang boleh ditanggung menunjukkan prestasi penjana."}],
 bos:{j:"buka",
  t:"Reka satu penjana elektrik ringkas untuk kegunaan komuniti tanpa bekalan elektrik (contoh: penjana mikrohidro di sungai, kincir angin di pantai, penjana basikal untuk mengecas telefon).",
  arahan:"Nyatakan sumber tenaga, komponen (gegelung, magnet, komutator atau gelang gelincir, transformer jika perlu), prinsip fizik yang terlibat (Hukum Faraday dan Lenz), SATU cara meningkatkan output, SATU pengiraan (contoh: nisbah lilitan transformer atau kuasa), cara menguji, dan SATU pertimbangan keselamatan atau kos.",
  u:"Jawapan TP6 yang kukuh memadankan sumber tenaga dengan lokasi, menerangkan aruhan elektromagnet dengan betul, memilih a.t. atau a.u. ikut kegunaan, mencadangkan cara menambah d.g.e. (lilitan, magnet kuat, putaran laju), memberi pengiraan yang betul, serta mengambil kira keselamatan dan kos."}}
];

module.exports = {
  id:"f5b4", tingkatan:5, kod:"4.0 Keelektromagnetan",
  tajuk:"Kuasa Magnet",
  subtajuk:"Fizik Ting. 5 · Bab 4 Keelektromagnetan",
  spi:SPI.f5b4,
  ulasan:{
   1:"{n} dapat mengingat kembali kesan daya ke atas konduktor pembawa arus, aruhan elektromagnet dan transformer. Langkah seterusnya ialah menjelaskan motor dan faktor aruhan.",
   2:"{n} dapat menjelaskan prinsip motor arus terus dan faktor yang mempengaruhi aruhan elektromagnet. Perlu lebih latihan pengiraan transformer.",
   3:"{n} boleh mengaplikasikan nisbah lilitan dan kecekapan transformer untuk menyelesaikan masalah. Galakkan menganalisis kehilangan kuasa dalam penghantaran.",
   4:"{n} mampu menganalisis kehilangan kuasa dalam penghantaran elektrik dan peranan voltan tinggi. Seterusnya latih menilai aplikasi keelektromagnetan.",
   5:"{n} dapat menilai aplikasi motor, penjana dan transformer untuk membuat keputusan yang wajar. Sudah bersedia mereka bentuk penjana sendiri.",
   6:"{n} berjaya mereka bentuk penjana atau alat elektromagnet dengan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Keelektromagnetan. Cadangan: ulang hentian pertama dan perhatikan cara dinamo basikal menyalakan lampu."
  },
  lampiran:{
   j1:jadual(1, "Penghantaran kuasa 1.0 MW melalui kabel berintangan 5.0 Ω",
     ["Kuantiti", "Pilihan A", "Pilihan B"],
     [["Kuasa dihantar","1.0 MW","1.0 MW"],["Voltan penghantaran","11 kV","275 kV"],["Rintangan kabel","5.0 Ω","5.0 Ω"]])
  },
  aras:ARAS
};
