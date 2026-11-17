/* Sumber kandungan — Fizik KSSM Tingkatan 4, Bab 4 Haba.
   SK 4.1 Keseimbangan terma, 4.2 Muatan haba tentu, 4.3 Haba pendam tentu, 4.4 Hukum gas
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   Nilai: c air 4 200 J kg⁻¹ °C⁻¹, l pelakuran ais 3.34 × 10⁵ J kg⁻¹, l pengewapan air 2.26 × 10⁶ J kg⁻¹.
   Semua jawapan berangka disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Termometer Makmal", sk:"4.1 Keseimbangan terma · 4.2 Muatan haba · 4.3 Haba pendam", lampiran:null,
 kadNama:"Keseimbangan Terma", kadEm:"\u{1F321}\u{FE0F}", kadFakta:"Dua jasad berada dalam keseimbangan terma apabila kadar pemindahan haba bersih di antara mereka ialah sifar, iaitu suhunya sama.",
 bosKadNama:"Haba Pendam", bosKadEm:"\u{1F9CA}", bosKadFakta:"Haba pendam diserap atau dibebaskan semasa perubahan keadaan jirim tanpa perubahan suhu.",
 soalan:[
 {j:"pilih",t:"Haba mengalir secara semula jadi dari jasad:",p:["Panas ke jasad sejuk","Sejuk ke jasad panas","Berat ke jasad ringan","Besar ke jasad kecil"],b:0,u:"Pemindahan haba bersih berlaku dari kawasan suhu tinggi ke kawasan suhu rendah."},
 {j:"pilih",t:"Unit S.I. bagi muatan haba tentu ialah:",p:["J kg⁻¹ °C⁻¹","J °C⁻¹","J kg⁻¹","W kg⁻¹"],b:0,u:"c = Q ÷ (mΔθ), jadi unitnya J kg⁻¹ °C⁻¹ (atau J kg⁻¹ K⁻¹)."},
 {j:"pilih",t:"Muatan haba, C, sesuatu objek ialah kuantiti haba yang diperlukan untuk:",p:["Menaikkan suhu objek itu sebanyak 1 °C","Menaikkan suhu 1 kg bahan sebanyak 1 °C","Mengubah 1 kg pepejal kepada cecair","Mendidihkan objek itu sepenuhnya"],b:0,u:"C = Q ÷ Δθ bagi seluruh objek. Muatan haba tentu pula merujuk kepada 1 kg bahan."},
 {j:"pilih",t:"Haba pendam tentu pengewapan ialah kuantiti haba yang diperlukan untuk:",p:["Menukar 1 kg cecair kepada gas tanpa perubahan suhu","Menaikkan suhu 1 kg cecair sebanyak 1 °C","Menukar 1 kg pepejal kepada cecair tanpa perubahan suhu","Menukar 1 kg gas kepada cecair pada suhu bilik"],b:0,u:"Bagi air pada 100 °C, nilainya 2.26 × 10⁶ J kg⁻¹."},
 {j:"pilih",t:"Suhu 27 °C bersamaan dengan:",p:["300 K","246 K","27 K","327 K"],b:0,u:"T (K) = θ (°C) + 273 = 27 + 273 = 300 K."},
 {j:"pilih",t:"Hukum Boyle menyatakan bahawa bagi gas berjisim tetap pada suhu malar:",p:["p berkadar songsang dengan V","Isi padu berkadar terus dengan suhu","Tekanan berkadar terus dengan suhu","Tekanan berkadar terus dengan isi padu"],b:0,u:"pV = pemalar apabila suhu dan jisim gas tetap."},
 {j:"pilih",t:"Suhu sifar mutlak ialah:",p:["−273 °C","0 °C","−100 °C","−373 °C"],b:0,u:"0 K = −273 °C. Pada suhu ini, tenaga kinetik molekul gas adalah minimum."},
 {j:"banyak",t:"Pilih DUA proses yang menyerap haba pendam.",p:["Peleburan","Pendidihan","Pembekuan","Kondensasi"],b:[0,1],u:"Peleburan dan pendidihan menyerap haba. Pembekuan dan kondensasi membebaskan haba."}],
 bos:{j:"pilih",t:"Seorang doktor meletakkan termometer di bawah lidah pesakit selama beberapa minit. Mengapa?",p:["Supaya keseimbangan terma dicapai","Supaya termometer menjadi lebih panas daripada badan","Supaya merkuri menyejat sepenuhnya","Supaya suhu badan pesakit menurun"],b:0,u:"Bacaan tepat hanya apabila termometer dan badan berada pada suhu yang sama."}},

{n:2, tempat:"Dapur Keseimbangan", sk:"4.1 Penentukuran termometer · 4.2 Aplikasi muatan haba tentu", lampiran:null,
 kadNama:"Takat Tetap", kadEm:"\u{1F4CF}", kadFakta:"Termometer cecair dalam kaca ditentukur menggunakan takat lebur ais (0 °C) dan takat didih air (100 °C). θ = (l_θ − l₀) ÷ (l₁₀₀ − l₀) × 100 °C.",
 bosKadNama:"Bayu Laut", bosKadEm:"\u{1F3D6}\u{FE0F}", bosKadFakta:"Daratan memanas lebih cepat daripada laut pada siang hari kerana muatan haba tentu air laut lebih tinggi.",
 soalan:[
 {j:"nombor",t:"Panjang turus merkuri ialah 4.0 cm dalam ais lebur dan 24.0 cm dalam stim air mendidih. Dalam suatu cecair, panjangnya 13.0 cm. Hitung suhu cecair itu.",b:45,tol:0.1,suf:"°C",u:"θ = (13.0 − 4.0) ÷ (24.0 − 4.0) × 100 = 45 °C."},
 {j:"pilih",t:"Mengapakah air digunakan sebagai agen penyejuk dalam radiator kereta?",p:["Muatan haba tentunya tinggi","Takat didihnya sangat rendah berbanding minyak","Ketumpatannya sangat rendah","Ia mengalirkan elektrik dengan baik"],b:0,u:"Air menyerap banyak haba dengan kenaikan suhu yang kecil."},
 {j:"pilih",t:"Pada waktu siang, bayu bertiup dari laut ke darat kerana:",p:["Daratan lebih cepat panas, udara di atasnya naik","Laut lebih cepat panas, udara di atasnya naik","Daratan lebih lambat panas berbanding laut","Laut membebaskan wap air yang berat"],b:0,u:"Udara panas di atas daratan naik, dan udara sejuk dari laut bergerak menggantikannya."},
 {j:"pilih",t:"Periuk masakan biasanya mempunyai badan aluminium dan pemegang plastik. Sebabnya:",p:["Aluminium cepat panas, plastik lambat panas","Aluminium lambat panas, plastik cepat panas","Kedua-duanya mempunyai muatan haba tentu sama","Plastik lebih tumpat daripada aluminium"],b:0,u:"Muatan haba tentu aluminium lebih rendah, jadi cepat panas. Plastik ialah penebat yang lambat panas."},
 {j:"pilih",t:"Dua bongkah berjisim sama, besi dan aluminium, menerima haba yang sama. Suhu besi naik lebih tinggi. Kesimpulannya:",p:["Muatan haba tentu besi lebih rendah","Muatan haba tentu besi lebih tinggi","Jisim besi sebenarnya lebih besar","Aluminium menerima lebih banyak haba"],b:0,u:"Δθ = Q ÷ (mc). Bagi Q dan m yang sama, c yang lebih kecil memberi Δθ yang lebih besar."},
 {j:"pilih",t:"Sebiji sudu logam panas dimasukkan ke dalam secawan air sejuk. Keseimbangan terma dicapai apabila:",p:["Suhu sudu sama dengan suhu air","Semua haba dalam sudu sudah habis","Air menjadi lebih panas daripada sudu","Sudu menjadi lebih sejuk daripada air"],b:0,u:"Pada keseimbangan terma, tiada lagi pemindahan haba bersih."},
 {j:"pilih",t:"Mengapakah kawasan pantai mempunyai julat suhu harian yang lebih kecil berbanding kawasan pedalaman?",p:["Laut lambat panas dan lambat sejuk","Udara pantai mengandungi lebih banyak garam","Pantai menerima kurang cahaya Matahari","Pasir tidak menyerap sebarang haba"],b:0,u:"Muatan haba tentu air yang tinggi menstabilkan suhu kawasan sekitarnya."},
 {j:"banyak",t:"Pilih DUA ciri cecair yang sesuai digunakan dalam termometer.",p:["Mengembang secara seragam","Legap dan mudah dilihat","Melekat pada dinding kaca","Takat didih yang rendah"],b:[0,1],u:"Cecair yang mengembang seragam dan mudah dilihat memberi bacaan tepat."}],
 bos:{j:"pilih",t:"Pada waktu malam, bayu darat bertiup dari darat ke laut. Penerangan manakah betul?",p:["Darat menyejuk lebih cepat, udara di atas laut naik","Laut menyejuk lebih cepat, udara di atas darat naik","Darat dan laut menyejuk pada kadar yang sama","Laut menjadi sejuk dan menarik udara turun"],b:0,u:"Laut kekal lebih panas pada waktu malam, jadi udara di atasnya naik dan udara darat yang sejuk bergerak ke laut."}},

{n:3, tempat:"Bilik Pemanas", sk:"4.2 Menyelesaikan masalah muatan haba tentu", lampiran:null,
 kadNama:"Q = mcΔθ", kadEm:"\u{1F525}", kadFakta:"Haba yang diperlukan, Q = mcΔθ. Bagi pemanas elektrik, Q = Pt.",
 bosKadNama:"Campuran", bosKadEm:"\u{2615}", bosKadFakta:"Apabila dua cecair dicampur, haba yang dibebaskan oleh cecair panas = haba yang diserap oleh cecair sejuk (jika tiada kehilangan haba).",
 soalan:[
 {j:"nombor",t:"Hitung haba yang diperlukan untuk memanaskan 2.0 kg air dari 30 °C ke 100 °C. Beri jawapan dalam kJ.",b:588,tol:1,suf:"kJ",u:"Q = mcΔθ = 2.0 × 4 200 × 70 = 588 000 J = 588 kJ."},
 {j:"nombor",t:"Sebuah bongkah menyerap 9 000 J haba dan suhunya naik 20 °C. Hitung muatan haba bongkah itu.",b:450,tol:0.5,suf:"J °C⁻¹",u:"C = Q ÷ Δθ = 9 000 ÷ 20 = 450 J °C⁻¹."},
 {j:"nombor",t:"Pemanas rendam 50 W memanaskan bongkah logam 1.0 kg selama 5 minit. Suhunya naik 16 °C. Hitung muatan haba tentu logam itu. Beri jawapan kepada nombor bulat terdekat.",b:938,tol:1,suf:"J kg⁻¹ °C⁻¹",u:"Q = Pt = 50 × 300 = 15 000 J. c = 15 000 ÷ (1.0 × 16) = 937.5 ≈ 938 J kg⁻¹ °C⁻¹."},
 {j:"pilih",t:"Nilai c dalam soalan tadi lebih tinggi daripada nilai sebenar aluminium (900 J kg⁻¹ °C⁻¹). Punca PALING mungkin:",p:["Sebahagian haba hilang ke persekitaran","Pemanas membekalkan lebih tenaga","Jisim bongkah lebih kecil daripada 1.0 kg","Termometer dibaca terlalu tinggi"],b:0,u:"Haba yang hilang menyebabkan kenaikan suhu lebih kecil, jadi c yang dikira lebih tinggi."},
 {j:"nombor",t:"0.20 kg air pada 80 °C dicampur dengan 0.30 kg air pada 20 °C. Hitung suhu akhir campuran jika tiada haba hilang.",b:44,tol:0.1,suf:"°C",u:"0.20 × 4 200 × (80 − θ) = 0.30 × 4 200 × (θ − 20) → 16 − 0.2θ = 0.3θ − 6 → θ = 44 °C."},
 {j:"nombor",t:"Sebuah cerek elektrik 2 000 W memanaskan 1.5 kg air dari 25 °C ke 100 °C. Hitung masa minimum yang diperlukan. Beri jawapan kepada nombor bulat terdekat.",b:236,tol:1,suf:"s",u:"Q = 1.5 × 4 200 × 75 = 472 500 J. t = Q ÷ P = 472 500 ÷ 2 000 = 236 s."},
 {j:"pilih",t:"Untuk mengurangkan kehilangan haba dalam eksperimen menentukan muatan haba tentu, langkah manakah PALING berkesan?",p:["Balut bongkah dengan kain penebat","Gunakan bongkah yang lebih kecil","Panaskan bongkah untuk masa lebih singkat","Letakkan bongkah di hadapan kipas"],b:0,u:"Penebat mengurangkan pemindahan haba ke persekitaran."},
 {j:"pilih",t:"Mengapakah minyak masak dipanaskan lebih cepat daripada air yang sama jisim di atas dapur yang sama?",p:["Muatan haba tentu minyak lebih rendah","Ketumpatan minyak lebih tinggi","Takat didih minyak lebih rendah","Minyak menyerap lebih banyak haba"],b:0,u:"Muatan haba tentu minyak (kira-kira 2 000 J kg⁻¹ °C⁻¹) kurang separuh daripada air."}],
 bos:{j:"nombor",t:"Sebiji bebola besi 0.50 kg pada 200 °C dimasukkan ke dalam 1.0 kg air pada 25 °C. Suhu akhir ialah 34 °C. Hitung muatan haba tentu besi. Beri jawapan kepada nombor bulat terdekat.",b:455,tol:1,suf:"J kg⁻¹ °C⁻¹",u:"Haba diserap air = 1.0 × 4 200 × 9 = 37 800 J. c = 37 800 ÷ (0.50 × 166) = 455 J kg⁻¹ °C⁻¹."}},

{n:4, tempat:"Lengkung Pemanasan", sk:"4.3 Menganalisis haba pendam tentu", lampiran:"g1",
 kadNama:"Bahagian Mendatar", kadEm:"\u{1F4C9}", kadFakta:"Pada bahagian mendatar lengkung pemanasan, haba digunakan untuk memutuskan ikatan antara molekul, bukan menaikkan tenaga kinetik.",
 bosKadNama:"Q = ml", bosKadEm:"\u{2668}\u{FE0F}", bosKadFakta:"Haba pendam, Q = ml. Haba pendam tentu pengewapan air hampir tujuh kali haba pendam tentu pelakuran ais.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah takat lebur bahan itu?",b:0,tol:0.5,suf:"°C",u:"Bahagian mendatar pertama berlaku pada 0 °C, iaitu takat lebur ais."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapa lamakah proses peleburan berlaku?",b:6,tol:0.01,suf:"minit",u:"Peleburan berlaku dari minit ke-2 hingga minit ke-8, iaitu 6 minit."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah keadaan jirim pada minit ke-10?",p:["Cecair","Pepejal","Gas","Pepejal dan cecair"],b:0,u:"Pada minit ke-10, suhu ialah 25 °C dan sedang naik, jadi semuanya cecair."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah suhu kekal pada 100 °C dari minit ke-16 hingga ke-26?",p:["Haba memutuskan ikatan antara molekul","Pemanas berhenti membekalkan haba","Tenaga kinetik molekul bertambah dengan cepat","Haba hilang ke persekitaran sama banyak"],b:0,u:"Haba pendam pengewapan mengatasi daya tarikan antara molekul. Tenaga kinetik purata tidak berubah, jadi suhu malar."},
 {j:"nombor",t:"Berdasarkan Rajah 1, pemanas 500 W memanaskan 0.54 kg ais. Hitung haba yang diserap semasa peleburan. Beri jawapan dalam kJ.",b:180,tol:0.5,suf:"kJ",u:"Q = Pt = 500 × (6 × 60) = 180 000 J = 180 kJ."},
 {j:"nombor",t:"Berdasarkan Rajah 1 dan data soalan tadi (500 W, 0.54 kg), hitung haba pendam tentu pelakuran ais. Beri jawapan dalam unit × 10⁵ J kg⁻¹ kepada 2 tempat perpuluhan.",b:3.33,tol:0.02,suf:"× 10⁵ J kg⁻¹",u:"l = Q ÷ m = 180 000 ÷ 0.54 = 3.33 × 10⁵ J kg⁻¹."},
 {j:"nombor",t:"Hitung haba yang diperlukan untuk mendidihkan sepenuhnya 0.20 kg air pada 100 °C. Beri jawapan dalam kJ.",b:452,tol:1,suf:"kJ",u:"Q = ml = 0.20 × 2.26 × 10⁶ = 452 000 J = 452 kJ."},
 {j:"pilih",t:"Stim pada 100 °C menyebabkan lecuran lebih teruk daripada air pada 100 °C kerana stim:",p:["Membebaskan haba pendam","Mempunyai suhu yang lebih tinggi","Mempunyai muatan haba tentu sifar","Bergerak lebih perlahan pada kulit"],b:0,u:"Setiap kilogram stim membebaskan 2.26 × 10⁶ J semasa terkondensasi di kulit, sebelum menyejuk seperti air panas."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, bahagian mendatar pada 100 °C lebih panjang daripada bahagian pada 0 °C. Kesimpulan manakah PALING tepat?",p:["Haba pendam pengewapan lebih besar","Air mendidih lebih cepat daripada ais melebur","Pemanas membekalkan lebih kuasa semasa pendidihan","Jisim bahan bertambah semasa pendidihan"],b:0,u:"Kuasa pemanas malar, jadi masa yang lebih panjang bermakna lebih banyak haba diperlukan untuk mendidihkan bahan."}},

{n:5, tempat:"Makmal Hukum Gas", sk:"4.4 Hukum Boyle, Hukum Charles dan Hukum Gay-Lussac", lampiran:"j1",
 kadNama:"Hukum Gas", kadEm:"\u{1F388}", kadFakta:"Boyle: p₁V₁ = p₂V₂ (T malar). Charles: V₁/T₁ = V₂/T₂ (p malar). Gay-Lussac: p₁/T₁ = p₂/T₂ (V malar). T mesti dalam kelvin.",
 bosKadNama:"Tekanan Tayar", bosKadEm:"\u{1F6DE}", bosKadFakta:"Tayar yang panas selepas perjalanan jauh mempunyai tekanan lebih tinggi. Semak tekanan ketika tayar sejuk.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah hubungan antara tekanan dengan isi padu gas?",p:["pV adalah malar","p ÷ V adalah malar","p + V adalah malar","p − V adalah malar"],b:0,u:"100 × 60 = 120 × 50 = 150 × 40 = 6 000 kPa cm³. Ini Hukum Boyle."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah tekanan gas apabila isi padunya 20 cm³?",b:300,tol:0.5,suf:"kPa",u:"p = 6 000 ÷ 20 = 300 kPa."},
 {j:"pilih",t:"Berdasarkan Jadual 1, graf manakah akan menghasilkan garis lurus melalui asalan?",p:["p melawan 1/V","p melawan V","V melawan p²","p melawan V²"],b:0,u:"Jika p ∝ 1/V, graf p melawan 1/V ialah garis lurus melalui asalan."},
 {j:"nombor",t:"Gas berisi padu 300 cm³ pada 27 °C dipanaskan pada tekanan malar hingga 127 °C. Hitung isi padu baharunya.",b:400,tol:0.5,suf:"cm³",u:"V₂ = V₁ × T₂ ÷ T₁ = 300 × 400 ÷ 300 = 400 cm³ (suhu dalam kelvin)."},
 {j:"nombor",t:"Tekanan tayar ialah 200 kPa pada 27 °C. Selepas perjalanan jauh, suhunya 57 °C. Hitung tekanan baharu jika isi padu tayar tidak berubah.",b:220,tol:0.5,suf:"kPa",u:"p₂ = p₁ × T₂ ÷ T₁ = 200 × 330 ÷ 300 = 220 kPa."},
 {j:"pilih",t:"Seorang murid mengira dengan Hukum Charles menggunakan suhu dalam °C dan mendapat jawapan yang salah. Mengapa?",p:["Suhu mesti dalam kelvin","Hukum Charles hanya sah bagi cecair","Isi padu mesti dalam liter","Tekanan mesti diubah dalam eksperimen"],b:0,u:"V ∝ T hanya benar apabila T diukur dari sifar mutlak, iaitu dalam kelvin."},
 {j:"pilih",t:"Menurut teori kinetik gas, tekanan gas dalam bekas tertutup bertambah apabila dipanaskan kerana molekul:",p:["Lebih kerap melanggar dinding","Menjadi lebih besar dan berat","Bergerak lebih perlahan dan rapat","Melekat pada dinding bekas"],b:0,u:"Tenaga kinetik purata bertambah, jadi kadar perlanggaran dan daya pada dinding bertambah."},
 {j:"banyak",t:"Pilih DUA pemboleh ubah yang dimalarkan dalam eksperimen Hukum Boyle pada Jadual 1.",p:["Suhu gas","Jisim gas","Isi padu gas","Tekanan gas"],b:[0,1],u:"Hukum Boyle menghubungkan p dengan V bagi gas berjisim tetap pada suhu malar."}],
 bos:{j:"pilih",t:"Label tin aerosol berbunyi 'Jangan simpan melebihi 50 °C'. Penilaian manakah PALING tepat?",p:["Tekanan bertambah, tin boleh meletup","Isi padu tin berkurang apabila dipanaskan","Gas dalam tin akan terkondensasi","Tekanan gas berkurang apabila dipanaskan"],b:0,u:"Isi padu tin tetap, jadi p ∝ T (Hukum Gay-Lussac). Suhu tinggi meningkatkan tekanan melebihi kekuatan tin."}},

{n:6, tempat:"Studio Reka Haba", sk:"4.1 hingga 4.4 Mereka cipta menggunakan pengetahuan haba", lampiran:null,
 kadNama:"Reka Bentuk Terma", kadEm:"\u{1F9CA}", kadFakta:"Kotak penyejuk yang baik mengurangkan pemindahan haba melalui konduksi, perolakan dan sinaran.",
 bosKadNama:"Reka Cipta Haba", bosKadEm:"\u{1F4A1}", bosKadFakta:"Pemanas air suria menggunakan permukaan hitam untuk menyerap sinaran dan air untuk menyimpan haba.",
 soalan:[
 {j:"pilih",t:"Anda mereka kotak penyejuk untuk penjual ikan di pasar. Bahan dinding manakah PALING sesuai?",p:["Polistirena tebal","Kepingan aluminium nipis","Kepingan kaca jernih","Papan lapis nipis"],b:0,u:"Polistirena mengandungi udara terperangkap yang merupakan penebat haba yang baik."},
 {j:"pilih",t:"Untuk kotak penyejuk anda, ais atau air sejuk 0 °C yang sama jisim lebih berkesan menyejukkan ikan?",p:["Ais, kerana haba pendamnya","Air, kerana muatan haba tentunya tinggi","Sama sahaja kerana suhunya sama","Air, kerana mengalir ke semua ikan"],b:0,u:"Ais menyerap 3.34 × 10⁵ J kg⁻¹ untuk melebur sebelum suhunya naik, jauh lebih banyak daripada air sejuk."},
 {j:"pilih",t:"Anda mereka pemanas air suria di atas bumbung. Warna permukaan pengumpul manakah PALING sesuai?",p:["Hitam pudar","Putih berkilat","Perak berkilat","Kuning cerah"],b:0,u:"Permukaan hitam pudar ialah penyerap sinaran yang terbaik."},
 {j:"nombor",t:"Pemanas air suria anda perlu memanaskan 100 kg air dari 28 °C ke 60 °C. Berapakah tenaga minimum yang diperlukan? Beri jawapan dalam MJ kepada 2 tempat perpuluhan.",b:13.44,tol:0.02,suf:"MJ",u:"Q = 100 × 4 200 × 32 = 13 440 000 J = 13.44 MJ."},
 {j:"pilih",t:"Anda mereka periuk tekanan. Mengapakah makanan lebih cepat masak di dalamnya?",p:["Tekanan tinggi menaikkan takat didih air","Tekanan tinggi menurunkan takat didih air","Stim di dalamnya kurang panas","Periuk menyerap kurang haba"],b:0,u:"Pada tekanan lebih tinggi, air mendidih pada suhu melebihi 100 °C, jadi makanan masak lebih cepat."},
 {j:"pilih",t:"Pelajar mahu menyejukkan minuman tin di kantin tanpa ais. Cadangan manakah PALING berkesan?",p:["Balut tin dengan kain basah","Balut tin dengan aluminium kering","Letakkan tin di bawah cahaya Matahari","Masukkan tin ke dalam bekas plastik tertutup"],b:0,u:"Penyejatan air dari kain menyerap haba pendam daripada tin, dan kipas mempercepatkan penyejatan."},
 {j:"pilih",t:"Anda mencadangkan cara memastikan tekanan tayar bas sekolah sentiasa selamat. Cadangan manakah PALING tepat?",p:["Semak tekanan ketika tayar sejuk","Semak tekanan selepas perjalanan jauh","Tambah angin sehingga tayar keras","Kurangkan angin apabila tayar panas"],b:0,u:"Tayar panas menunjukkan tekanan lebih tinggi (Hukum Gay-Lussac). Bacaan sejuk ialah rujukan piawai."},
 {j:"banyak",t:"Pilih DUA ciri reka bentuk termos yang mengurangkan kehilangan haba.",p:["Dinding berlapis dua dengan vakum","Permukaan dalam berkilat","Penutup logam yang nipis","Badan kaca tanpa lapisan"],b:[0,1],u:"Vakum menghalang konduksi dan perolakan; permukaan berkilat mengurangkan sinaran."}],
 bos:{j:"buka",
  t:"Reka satu bekas untuk mengekalkan kesegaran makanan laut atau sayur peniaga pasar malam selama 6 jam tanpa elektrik.",
  arahan:"Nyatakan bahan dinding dan sebabnya, bahan penyejuk yang dipilih (contoh: ais) dengan justifikasi haba pendam, anggaran jisim ais berdasarkan pengiraan Q = ml atau Q = mcΔθ, cara mengurangkan konduksi, perolakan dan sinaran, SATU cara menguji keberkesanan, dan SATU pertimbangan kos.",
  u:"Jawapan TP6 yang kukuh memilih penebat seperti polistirena, menggunakan ais kerana haba pendam pelakuran yang besar, membuat pengiraan munasabah, menerangkan cara mengurangkan ketiga-tiga cara pemindahan haba, mencadangkan ujian dengan termometer pada selang masa tertentu, dan mempertimbangkan kos bahan untuk peniaga kecil."}}
];

module.exports = {
  id:"f4b4", tingkatan:4, kod:"4.0 Haba",
  tajuk:"Aliran Haba",
  subtajuk:"Fizik Ting. 4 · Bab 4 Haba",
  spi:SPI.f4b4,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep keseimbangan terma, muatan haba, haba pendam dan hukum gas. Langkah seterusnya ialah menjelaskan aplikasinya.",
   2:"{n} dapat menjelaskan keseimbangan terma, penentukuran termometer dan aplikasi muatan haba tentu seperti bayu laut. Perlu lebih latihan pengiraan Q = mcΔθ.",
   3:"{n} boleh mengaplikasikan Q = mcΔθ dan Q = Pt untuk menyelesaikan masalah pemanasan dan campuran. Galakkan menganalisis lengkung pemanasan.",
   4:"{n} mampu menganalisis lengkung pemanasan dan mengira haba pendam tentu. Seterusnya latih menilai situasi menggunakan hukum gas.",
   5:"{n} dapat menilai situasi harian menggunakan Hukum Boyle, Charles dan Gay-Lussac dengan suhu dalam kelvin. Sudah bersedia mereka bentuk alat terma.",
   6:"{n} berjaya mereka bentuk alat terma yang praktikal dengan pengiraan dan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Haba. Cadangan: ulang hentian pertama dan perhatikan suhu air dan ais di dapur bersama keluarga."
  },
  lampiran:{
   g1:{jenis:"graf", x:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28], setiap:2, xLabel:"Masa (minit)", titik:true, yMin:-20, yMaks:120,
     siri:[{label:"Suhu (°C)", y:[-20,0,0,0,0,25,50,75,100,100,100,100,100,100,120], warna:"merah"}],
     kapsyen:"Rajah 1 · Lengkung pemanasan ais dengan pemanas 500 W",
     alt:"Graf suhu melawan masa: suhu naik dari −20 ke 0 darjah Celsius dalam 2 minit, kekal 0 dari minit 2 hingga 8, naik ke 100 pada minit 16, kekal 100 hingga minit 26, kemudian naik ke 120 pada minit 28"},
   j1:jadual(1, "Tekanan dan isi padu udara terperangkap pada suhu bilik",
     ["Tekanan, p (kPa)", "Isi padu, V (cm^3)"],
     [["100","60"],["120","50"],["150","40"],["200","30"],["?","20"]])
  },
  aras:ARAS
};
