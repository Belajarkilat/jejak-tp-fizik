/* Sumber kandungan — Fizik KSSM Tingkatan 4, Bab 1 Pengukuran.
   SK 1.1 Kuantiti fizik, 1.2 Penyiasatan saintifik
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Unit", sk:"1.1 Kuantiti fizik: kuantiti asas dan unit S.I.", lampiran:null,
 kadNama:"Kuantiti Asas", kadEm:"\u{1F4CF}", kadFakta:"Tujuh kuantiti asas: panjang (m), jisim (kg), masa (s), suhu termodinamik (K), arus elektrik (A), keamatan berluminositi (cd) dan kuantiti bahan (mol).",
 bosKadNama:"Unit S.I.", bosKadEm:"\u{1F310}", bosKadFakta:"Sistem Unit Antarabangsa (S.I.) membolehkan saintis di seluruh dunia berkongsi ukuran tanpa kekeliruan.",
 soalan:[
 {j:"pilih",t:"Kuantiti fizik ialah kuantiti yang:",p:["Boleh diukur","Dapat dirasai oleh deria","Diterangkan dengan perkataan","Ditentukan oleh pendapat"],b:0,u:"Kuantiti fizik ialah kuantiti yang boleh diukur, seperti panjang, jisim dan masa."},
 {j:"pilih",t:"Unit S.I. bagi jisim ialah:",p:["kilogram (kg)","gram (g)","newton (N)","tan metrik (t)"],b:0,u:"Kilogram ialah unit asas S.I. bagi jisim. Newton ialah unit daya."},
 {j:"pilih",t:"Unit S.I. bagi suhu termodinamik ialah:",p:["darjah Celsius (°C)","kelvin (K)","darjah Fahrenheit (°F)","joule (J)"],b:1,u:"Suhu termodinamik diukur dalam kelvin. Darjah Celsius bukan unit asas S.I."},
 {j:"pilih",t:"Kuantiti manakah ialah kuantiti asas?",p:["Halaju purata","Isi padu cecair","Arus elektrik","Daya paduan"],b:2,u:"Arus elektrik (ampere) ialah salah satu daripada tujuh kuantiti asas."},
 {j:"pilih",t:"Simbol unit bagi kuantiti bahan ialah:",p:["mol","mol m⁻³","kg mol⁻¹","cd m⁻²"],b:0,u:"Kuantiti bahan diukur dalam mol."},
 {j:"pilih",t:"Unit manakah ialah unit imperial?",p:["meter","kaki","kilogram","saat"],b:1,u:"Kaki, inci, ela, batu, gelen dan psi ialah unit imperial."},
 {j:"pilih",t:"Kuantiti asas yang diukur dalam kandela (cd) ialah:",p:["Keamatan berluminositi","Kuantiti bahan sesuatu sampel","Suhu termodinamik objek","Arus elektrik dalam litar"],b:0,u:"Kandela ialah unit S.I. bagi keamatan berluminositi."},
 {j:"banyak",t:"Pilih DUA kuantiti asas.",p:["Masa","Panjang","Laju","Tekanan","Tenaga"],b:[0,1],u:"Masa dan panjang ialah kuantiti asas. Laju, tekanan dan tenaga ialah kuantiti terbitan."}],
 bos:{j:"susun",t:"Susun unit S.I. mengikut urutan kuantiti asas ini: panjang, jisim, masa, arus elektrik, suhu termodinamik.",p:["meter","kilogram","saat","ampere","kelvin"],b:[0,1,2,3,4],u:"Panjang (m), jisim (kg), masa (s), arus elektrik (A), suhu termodinamik (K)."}},

{n:2, tempat:"Bengkel Terbitan", sk:"1.1 Kuantiti terbitan · kuantiti skalar dan vektor", lampiran:null,
 kadNama:"Kuantiti Terbitan", kadEm:"\u{1F9E9}", kadFakta:"Kuantiti terbitan dibentuk daripada gabungan kuantiti asas melalui pendaraban atau pembahagian, contohnya laju = jarak ÷ masa.",
 bosKadNama:"Skalar dan Vektor", bosKadEm:"\u{27A1}\u{FE0F}", bosKadFakta:"Kuantiti skalar hanya ada magnitud. Kuantiti vektor ada magnitud dan arah.",
 soalan:[
 {j:"pilih",t:"Kuantiti terbitan ialah kuantiti fizik yang:",p:["Gabungan beberapa kuantiti asas","Tidak boleh dinyatakan dalam unit S.I.","Hanya diukur dengan alat elektronik","Mempunyai magnitud tetapi tiada unit"],b:0,u:"Contohnya ketumpatan = jisim ÷ isi padu, jadi unitnya kg m⁻³."},
 {j:"pilih",t:"Unit S.I. bagi luas ialah:",p:["m","m²","m³","m s⁻¹"],b:1,u:"Luas = panjang × lebar, jadi unitnya m × m = m²."},
 {j:"pilih",t:"Kuantiti skalar ialah kuantiti yang:",p:["Ada magnitud sahaja","Ada arah sahaja","Ada magnitud dan arah","Tiada magnitud dan arah"],b:0,u:"Contoh kuantiti skalar: jarak, laju, jisim, masa dan tenaga."},
 {j:"pilih",t:"Kuantiti manakah ialah kuantiti vektor?",p:["Jisim","Sesaran","Tenaga kinetik","Suhu badan"],b:1,u:"Sesaran mempunyai magnitud dan arah, contohnya 5 m ke timur."},
 {j:"pilih",t:"Mengapakah laju ialah kuantiti terbitan?",p:["Ia gabungan jarak dan masa","Ia diukur terus dengan pembaris","Ia ialah salah satu kuantiti asas S.I.","Ia mempunyai arah yang tetap"],b:0,u:"Laju = jarak ÷ masa, iaitu gabungan dua kuantiti asas."},
 {j:"pilih",t:"Sebuah kereta bergerak 60 km/j ke utara. Kuantiti yang dinyatakan ialah:",p:["Laju","Halaju","Jarak tempuh","Pecutan purata"],b:1,u:"Magnitud dan arah dinyatakan, jadi ia ialah halaju, iaitu kuantiti vektor."},
 {j:"pilih",t:"Pasangan manakah ialah skalar dan vektor yang betul?",p:["Jarak (skalar), sesaran (vektor)","Daya (skalar), berat objek (vektor)","Halaju (skalar), laju (vektor)","Masa (vektor), tenaga (skalar)"],b:0,u:"Jarak tiada arah, manakala sesaran mempunyai arah."},
 {j:"banyak",t:"Pilih DUA kuantiti vektor.",p:["Daya","Pecutan","Laju","Jisim","Masa"],b:[0,1],u:"Daya dan pecutan mempunyai arah. Laju, jisim dan masa ialah skalar."}],
 bos:{j:"pilih",t:"Ketumpatan ditakrifkan sebagai jisim per unit isi padu. Apakah unit S.I. bagi ketumpatan?",p:["kg m⁻³","kg m³","g cm³","m³ kg⁻¹"],b:0,u:"ρ = m ÷ V, jadi unitnya kg ÷ m³ = kg m⁻³."}},

{n:3, tempat:"Meja Penukaran", sk:"1.1 Unit S.I. kuantiti terbitan · unit imperial", lampiran:"j1",
 kadNama:"Unit Imperial", kadEm:"\u{1F4D0}", kadFakta:"Unit imperial seperti inci, kaki dan psi masih digunakan pada skrin TV, tayar dan paip. Kita perlu menukarnya kepada unit S.I.",
 bosKadNama:"Unit Asas Terbitan", bosKadEm:"\u{1F527}", bosKadFakta:"Unit kuantiti terbitan boleh ditulis dalam unit asas. Daya: F = ma, jadi 1 N = 1 kg m s⁻².",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, sebuah TV berskrin 55 inci. Berapakah ukuran skrin itu dalam sentimeter?",b:139.7,tol:0.1,suf:"cm",u:"55 × 2.54 cm = 139.7 cm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, tekanan tayar kereta ialah 32 psi. Berapakah tekanan itu dalam kPa? Beri jawapan kepada 1 tempat perpuluhan.",b:220.6,tol:0.2,suf:"kPa",u:"32 × 6.895 kPa = 220.6 kPa."},
 {j:"nombor",t:"Berdasarkan Jadual 1, jarak larian ialah 5.0 km. Berapakah jarak itu dalam batu? Beri jawapan kepada 2 tempat perpuluhan.",b:3.11,tol:0.01,suf:"batu",u:"5.0 km ÷ 1.609 km = 3.11 batu."},
 {j:"pilih",t:"Daya diberi oleh F = ma. Apakah unit daya dalam sebutan unit asas?",p:["kg m s⁻¹","kg m s⁻²","kg m² s⁻²","kg s⁻²"],b:1,u:"kg × m s⁻² = kg m s⁻², yang dinamakan newton (N)."},
 {j:"pilih",t:"Kerja = daya × sesaran. Apakah unit kerja dalam sebutan unit asas?",p:["kg m s⁻²","kg m² s⁻¹","kg m² s⁻²","kg m s⁻¹"],b:2,u:"(kg m s⁻²) × m = kg m² s⁻², iaitu joule (J)."},
 {j:"pilih",t:"Momentum = jisim × halaju. Apakah unit S.I. bagi momentum?",p:["kg m s⁻¹","kg m s⁻²","kg m⁻¹ s","kg s m⁻¹"],b:0,u:"kg × m s⁻¹ = kg m s⁻¹."},
 {j:"pilih",t:"Tekanan = daya ÷ luas. Apakah unit tekanan dalam sebutan unit asas?",p:["kg m s⁻²","kg m⁻² s⁻²","kg m⁻¹ s⁻²","kg m² s⁻²"],b:2,u:"(kg m s⁻²) ÷ m² = kg m⁻¹ s⁻², iaitu pascal (Pa)."},
 {j:"nombor",t:"Seorang pelari berlari sejauh 400 m dalam 50 s. Hitung lajunya dalam m s⁻¹.",b:8,tol:0.01,suf:"m s⁻¹",u:"Laju = jarak ÷ masa = 400 m ÷ 50 s = 8 m s⁻¹."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, sebatang paip berdiameter 0.75 inci. Diameter paip itu ialah kira-kira:",p:["1.9 cm","0.30 cm","7.50 cm","19.05 cm"],b:0,u:"0.75 × 2.54 cm = 1.905 cm ≈ 1.9 cm."}},

{n:4, tempat:"Bilik Graf", sk:"1.2 Mentafsir dan menganalisis graf", lampiran:"g1",
 kadNama:"Bentuk Graf", kadEm:"\u{1F4C8}", kadFakta:"Graf garis lurus melalui asalan menunjukkan hubungan berkadar terus. Garis lurus yang tidak melalui asalan menunjukkan pertambahan secara linear.",
 bosKadNama:"Kecerunan dan Pintasan", bosKadEm:"\u{1F4D0}", bosKadFakta:"Kecerunan = perubahan y ÷ perubahan x. Pintasan-y ialah nilai y apabila x sifar.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah hubungan antara panjang spring dengan jisim beban?",p:["Bertambah secara linear","Berkadar terus dengan jisim beban","Berkadar songsang dengan jisim beban","Berkurang secara linear dengan jisim"],b:0,u:"Graf ialah garis lurus yang naik tetapi tidak melalui asalan, jadi panjang bertambah secara linear, bukan berkadar terus."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah panjang asal spring tanpa beban?",b:5,tol:0.01,suf:"cm",u:"Pintasan-y graf ialah 5.0 cm, iaitu panjang spring apabila jisim beban sifar."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung kecerunan graf dalam cm g⁻¹.",b:0.02,tol:0.001,suf:"cm g⁻¹",u:"Kecerunan = (15.0 − 5.0) cm ÷ (500 − 0) g = 0.02 cm g⁻¹."},
 {j:"nombor",t:"Berdasarkan Rajah 1, gunakan interpolasi untuk menentukan panjang spring apabila jisim beban ialah 250 g.",b:10,tol:0.01,suf:"cm",u:"Pada 250 g, graf memberi 5.0 + 0.02 × 250 = 10.0 cm."},
 {j:"nombor",t:"Berdasarkan Rajah 1, gunakan ekstrapolasi untuk meramal panjang spring apabila jisim beban ialah 600 g.",b:17,tol:0.01,suf:"cm",u:"Lanjutkan garis: 5.0 + 0.02 × 600 = 17.0 cm, dengan andaian had kenyal belum dilepasi."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah pemanjangan spring apabila jisim beban ialah 300 g?",b:6,tol:0.01,suf:"cm",u:"Pemanjangan = panjang akhir − panjang asal = 11.0 − 5.0 = 6.0 cm."},
 {j:"pilih",t:"Luas di bawah graf halaju melawan masa mewakili:",p:["Pecutan purata","Sesaran","Daya paduan","Momentum"],b:1,u:"Halaju × masa = sesaran, jadi luas di bawah graf v-t ialah sesaran."},
 {j:"pilih",t:"Graf y melawan 1/x ialah garis lurus melalui asalan. Hubungan antara y dengan x ialah:",p:["y berkadar songsang dengan x","y berkadar terus dengan x","y bertambah secara linear dengan x","y tidak bergantung pada x"],b:0,u:"Jika y ∝ 1/x, maka y berkadar songsang dengan x."}],
 bos:{j:"pilih",t:"Mengapakah ramalan panjang spring pada 2 000 g menggunakan ekstrapolasi Rajah 1 mungkin tidak tepat?",p:["Spring mungkin melepasi had kenyal","Kecerunan graf bertambah dua kali ganda","Graf mesti dilukis dengan skala lain","Jisim beban tidak menjejaskan spring"],b:0,u:"Ekstrapolasi menganggap pola linear berterusan. Jika had kenyal dilepasi, spring tidak lagi mematuhi pola itu."}},

{n:5, tempat:"Makmal Bandul", sk:"1.2 Penyiasatan saintifik: eksperimen bandul ringkas", lampiran:"j2",
 kadNama:"Bandul Ringkas", kadEm:"\u{23F2}\u{FE0F}", kadFakta:"Tempoh ayunan bandul ringkas, T = 2π√(l/g). Graf T² melawan l ialah garis lurus dengan kecerunan 4π²/g.",
 bosKadNama:"Menilai Keputusan", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Nilai g daripada eksperimen dibandingkan dengan nilai piawai 9.81 m s⁻². Perbezaan mesti diberi justifikasi.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 2, hitung tempoh ayunan, T, bagi bandul sepanjang 0.60 m. Beri jawapan kepada 2 tempat perpuluhan.",b:1.56,tol:0.01,suf:"s",u:"T = masa 20 ayunan ÷ 20 = 31.1 s ÷ 20 = 1.555 s ≈ 1.56 s."},
 {j:"pilih",t:"Berdasarkan Jadual 2, mengapakah masa bagi 20 ayunan diukur, bukan satu ayunan sahaja?",p:["Kurangkan ralat masa tindak balas","Supaya bandul berayun dengan lebih laju","Supaya panjang bandul berubah","Menambah jisim ladung bandul"],b:0,u:"Ralat memulakan dan menghentikan jam randik dikongsi oleh 20 ayunan, jadi ralat bagi setiap ayunan menjadi lebih kecil."},
 {j:"pilih",t:"Dalam eksperimen pada Jadual 2, pemboleh ubah dimanipulasikan ialah:",p:["Panjang bandul, l","Tempoh ayunan, T","Jisim ladung","Pecutan graviti, g"],b:0,u:"Panjang bandul diubah oleh murid. Tempoh ayunan ialah pemboleh ubah bergerak balas."},
 {j:"pilih",t:"Graf manakah perlu diplot untuk menentukan nilai g?",p:["T² melawan l","T melawan jisim ladung","l melawan T","T melawan 1/l"],b:0,u:"Daripada T² = (4π²/g) l, graf T² melawan l ialah garis lurus melalui asalan."},
 {j:"nombor",t:"Kecerunan graf T² melawan l daripada Jadual 2 ialah 4.02 s² m⁻¹. Hitung nilai g. Beri jawapan kepada 2 tempat perpuluhan.",b:9.82,tol:0.02,suf:"m s⁻²",u:"g = 4π² ÷ kecerunan = 39.48 ÷ 4.02 = 9.82 m s⁻²."},
 {j:"pilih",t:"Nilai g yang diperoleh ialah 9.82 m s⁻², manakala nilai piawai ialah 9.81 m s⁻². Penilaian manakah PALING tepat?",p:["Keputusan boleh diterima kerana perbezaannya sangat kecil","Eksperimen gagal kerana nilainya tidak sama tepat","Nilai piawai g perlu ditukar kepada 9.82 m s⁻²","Panjang bandul tidak mempengaruhi keputusan"],b:0,u:"Perbezaan 0.01 m s⁻² (kira-kira 0.1%) boleh dijelaskan oleh ralat rawak kecil."},
 {j:"pilih",t:"Langkah berjaga-jaga manakah PALING sesuai semasa membaca jam randik?",p:["Mula mengira ketika ladung melalui titik keseimbangan","Mula mengira ketika ladung berada di hujung ayunan","Mengira ayunan dengan mata tertutup","Menolak ladung dengan kuat setiap kali"],b:0,u:"Ladung bergerak paling laju di titik keseimbangan, jadi saat ia melintas lebih mudah dikenal pasti."},
 {j:"banyak",t:"Pilih DUA pemboleh ubah yang perlu dimalarkan dalam eksperimen ini.",p:["Jisim ladung","Amplitud ayunan yang kecil","Panjang bandul","Tempoh ayunan"],b:[0,1],u:"Jisim ladung dan amplitud kecil (sudut kurang daripada 10°) dimalarkan supaya hanya panjang mempengaruhi tempoh."}],
 bos:{j:"pilih",t:"Seorang murid mengira g daripada SATU bacaan sahaja menggunakan g = 4π²l ÷ T² dan mendapat 8.70 m s⁻². Punca manakah PALING mungkin?",p:["Panjang diukur ke atas ladung, bukan ke pusatnya","Masa 20 ayunan diukur dengan jam randik digital","Amplitud ayunan dikekalkan kurang daripada 10°","Ladung yang lebih berat digunakan dalam eksperimen"],b:0,u:"l yang dicatat lebih pendek daripada panjang sebenar, jadi g = 4π²l ÷ T² menjadi lebih kecil. Kaedah graf T² melawan l mengelakkan ralat ini kerana ralat tetap pada l hanya mengubah pintasan, bukan kecerunan. Jisim ladung pula tidak mempengaruhi tempoh."}},

{n:6, tempat:"Studio Reka Ukur", sk:"1.1 hingga 1.2 Mereka cipta menggunakan pengetahuan pengukuran", lampiran:null,
 kadNama:"Reka Bentuk Eksperimen", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Reka bentuk yang baik menyatakan pemboleh ubah, cara mengukur dengan jitu, cara mengurangkan ralat dan cara menganalisis data.",
 bosKadNama:"Reka Cipta Ukur", bosKadEm:"\u{1F4A1}", bosKadFakta:"Alat ukur ciptaan sendiri perlu ditentukur dengan alat piawai sebelum digunakan.",
 soalan:[
 {j:"nombor",t:"Anda mereka jam bandul yang setiap ayunannya mengambil masa tepat 2.0 s. Berapakah panjang bandul yang diperlukan? (g = 9.81 m s⁻²) Beri jawapan kepada 2 tempat perpuluhan.",b:0.99,tol:0.01,suf:"m",u:"l = gT² ÷ 4π² = 9.81 × 4.0 ÷ 39.48 = 0.99 m."},
 {j:"pilih",t:"Jam bandul anda berdetik terlalu perlahan (tempoh terlalu panjang). Apakah pelarasan yang betul?",p:["Pendekkan panjang bandul","Tambah jisim ladung","Panjangkan tali bandul","Tambah amplitud ayunan"],b:0,u:"T bergantung pada √l. Mengurangkan l memendekkan tempoh."},
 {j:"pilih",t:"Anda mahu mengukur ketebalan sehelai kertas dengan pembaris biasa. Kaedah manakah PALING sesuai?",p:["Ukur 100 helai bersama, kemudian bahagi dengan 100","Ukur satu helai beberapa kali dengan pembaris","Anggarkan ketebalan berdasarkan berat kertas","Lipat kertas sekali dan ukur dengan pembaris"],b:0,u:"Mengukur banyak helai sekali gus mengurangkan ralat relatif bagi setiap helai."},
 {j:"pilih",t:"Anda membina pembaris daripada kayu sendiri. Apakah langkah PALING penting sebelum menggunakannya?",p:["Tentukur senggatannya dengan pembaris piawai","Cat pembaris dengan warna terang","Pastikan pembaris sepanjang mungkin","Tulis nama anda pada pembaris"],b:0,u:"Penentukuran memastikan bacaan alat buatan sendiri sepadan dengan unit piawai."},
 {j:"pilih",t:"Anda mahu menyiasat sama ada jisim ladung mempengaruhi tempoh bandul. Reka bentuk manakah PALING adil?",p:["Ubah jisim ladung, malarkan panjang dan amplitud","Ubah jisim dan panjang serentak","Ubah panjang, malarkan jisim ladung","Ubah amplitud, malarkan panjang dan jisim"],b:0,u:"Hanya pemboleh ubah yang disiasat diubah. Pemboleh ubah lain dimalarkan."},
 {j:"pilih",t:"Sebuah kedai menjual tayar dengan label 35 psi sahaja. Cadangan manakah PALING membantu pengguna Malaysia?",p:["Tambah label kPa di sebelah psi","Buang label psi tanpa menggantikannya","Tulis tekanan dalam unit kilogram","Minta pengguna meneka nilai sendiri"],b:0,u:"Memaparkan kedua-dua unit (35 psi ≈ 241 kPa) mengelakkan salah faham."},
 {j:"pilih",t:"Anda merancang mengukur ketinggian bangunan sekolah tanpa memanjatnya. Kaedah manakah PALING munasabah?",p:["Bandingkan bayang bangunan dengan bayang batang kayu","Ukur berat bangunan dengan penimbang","Kira bilangan tingkap di sebelah tepi","Teka ketinggian dari jauh sahaja"],b:0,u:"Nisbah tinggi kepada panjang bayang adalah sama bagi kayu dan bangunan pada masa yang sama."},
 {j:"banyak",t:"Pilih DUA ciri laporan eksperimen yang lengkap.",p:["Hipotesis dan pemboleh ubah dinyatakan","Graf dengan skala sesuai dan garis terbaik","Data mentah disembunyikan","Kesimpulan ditulis sebelum eksperimen"],b:[0,1],u:"Laporan lengkap menyatakan hipotesis, pemboleh ubah, data, graf berskala sesuai dan kesimpulan berdasarkan data."}],
 bos:{j:"buka",
  t:"Reka satu eksperimen di rumah untuk menentukan nilai pecutan graviti, g, menggunakan bandul ringkas dan jam randik telefon.",
  arahan:"Nyatakan bahan yang digunakan, pemboleh ubah (dimanipulasi, bergerak balas, dimalarkan), cara mengukur tempoh dengan jitu, graf yang akan diplot dan cara mengira g daripadanya, SATU cara mengurangkan ralat, serta cara anda membandingkan keputusan dengan nilai piawai.",
  u:"Jawapan TP6 yang kukuh menggunakan bahan murah (tali, kunci atau batu sebagai ladung), memanipulasikan panjang l, mengukur masa 20 ayunan dan mengulanginya, memplot T² melawan l, mengira g = 4π² ÷ kecerunan, mengukur l hingga ke pusat ladung, mengekalkan amplitud kecil, dan memberi justifikasi perbezaan dengan 9.81 m s⁻²."}}
];

module.exports = {
  id:"f4b1", tingkatan:4, kod:"1.0 Pengukuran",
  tajuk:"Ukur Dunia",
  subtajuk:"Fizik Ting. 4 · Bab 1 Pengukuran",
  spi:SPI.f4b1,
  ulasan:{
   1:"{n} dapat mengingat kembali kuantiti asas dan unit S.I.nya. Langkah seterusnya ialah menjelaskan kuantiti terbitan serta kuantiti skalar dan vektor.",
   2:"{n} dapat menjelaskan kuantiti terbitan serta membezakan kuantiti skalar dan vektor. Perlu lebih latihan menukar unit dan menerbitkan unit S.I.",
   3:"{n} boleh menerbitkan unit S.I. kuantiti terbitan dan menukar unit imperial kepada unit S.I. Galakkan latihan mentafsir graf.",
   4:"{n} mampu menganalisis graf untuk menentukan hubungan, kecerunan, pintasan, interpolasi dan ekstrapolasi. Seterusnya latih menilai keputusan eksperimen.",
   5:"{n} dapat menilai keputusan eksperimen bandul ringkas, mengira g dan memberi justifikasi perbezaan dengan nilai piawai. Sudah bersedia mereka bentuk eksperimen sendiri.",
   6:"{n} berjaya mereka bentuk eksperimen dan kaedah pengukuran yang kreatif, adil dan jitu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengukuran. Cadangan: ulang hentian pertama dan buat kad padanan tujuh kuantiti asas dengan unit S.I.nya."
  },
  lampiran:{
   j1:jadual(1, "Faktor penukaran unit imperial kepada unit S.I.",
     ["Unit imperial", "Nilai dalam unit S.I."],
     [["1 inci","2.54 cm"],["1 kaki","30.48 cm"],["1 batu","1.609 km"],["1 psi","6.895 kPa"]]),
   g1:{jenis:"graf", x:[0,100,200,300,400,500], xLabel:"Jisim beban (g)", titik:true, yMin:0, yMaks:16,
     siri:[{label:"Panjang spring (cm)", y:[5,7,9,11,13,15], warna:"ungu"}],
     kapsyen:"Rajah 1 · Panjang spring melawan jisim beban",
     alt:"Graf garis lurus: panjang spring 5.0 cm pada 0 g, naik 2.0 cm bagi setiap 100 g, hingga 15.0 cm pada 500 g"},
   j2:jadual(2, "Masa 20 ayunan bandul ringkas bagi panjang berbeza",
     ["Panjang, l (m)", "Masa 20 ayunan (s)", "Tempoh, T (s)", "T^{2} (s^{2})"],
     [["0.20","17.9","0.895","0.801"],["0.40","25.4","1.270","1.613"],["0.60","31.1","?","?"],["0.80","35.9","1.795","3.222"],["1.00","40.1","2.005","4.020"]])
  },
  aras:ARAS
};
