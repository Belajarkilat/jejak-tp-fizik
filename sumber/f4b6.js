/* Sumber kandungan — Fizik KSSM Tingkatan 4, Bab 6 Cahaya dan Optik.
   SK 6.1 Pembiasan cahaya, 6.2 Pantulan dalam penuh, 6.3 Pembentukan imej oleh kanta,
   6.4 Formula kanta nipis, 6.5 Alatan optik, 6.6 Pembentukan imej oleh cermin sfera
   (DSKP KSSM Fizik Tingkatan 4 dan 5, dskp/fizik-en.pdf).
   Konvensyen nyata-adalah-positif: 1/f = 1/u + 1/v; kanta cekung f negatif. Jawapan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Kolam Pembiasan", sk:"6.1 Pembiasan cahaya · 6.2 Pantulan dalam penuh · 6.3 Jenis kanta", lampiran:null,
 kadNama:"Pembiasan", kadEm:"\u{1F4A7}", kadFakta:"Pembiasan cahaya ialah perubahan arah cahaya apabila merambat dari satu medium ke medium lain yang berbeza ketumpatan optik, kerana lajunya berubah.",
 bosKadNama:"Pantulan Dalam Penuh", bosKadEm:"\u{1F48E}", bosKadFakta:"Berlaku apabila cahaya bergerak dari medium tumpat ke medium kurang tumpat dan sudut tuju melebihi sudut genting.",
 soalan:[
 {j:"pilih",t:"Apabila cahaya bergerak dari udara ke dalam kaca, cahaya itu:",p:["Dibias mendekati normal","Dibias menjauhi normal","Bergerak lebih laju","Tidak berubah arah langsung"],b:0,u:"Kaca lebih tumpat secara optik. Laju cahaya berkurang, jadi sinar membengkok ke arah normal."},
 {j:"pilih",t:"Indeks biasan, n, sesuatu medium ditakrifkan sebagai:",p:["Laju cahaya dalam vakum ÷ laju cahaya dalam medium","Laju cahaya dalam medium ÷ laju cahaya dalam vakum","Sudut biasan ÷ sudut tuju","Ketebalan medium ÷ panjang gelombang"],b:0,u:"n = c ÷ v. Juga n = sin i ÷ sin r (Hukum Snell)."},
 {j:"pilih",t:"Sudut genting ialah sudut tuju dalam medium lebih tumpat apabila sudut biasan ialah:",p:["90°","0°","45°","180°"],b:0,u:"Pada sudut genting, sinar terbias bergerak di sepanjang sempadan, iaitu sudut biasan 90°."},
 {j:"pilih",t:"Kanta yang menumpukan sinar cahaya selari ke satu titik fokus ialah kanta:",p:["Cembung","Cekung","Satah","Silinder rata"],b:0,u:"Kanta cembung (kanta penumpu) lebih tebal di tengah."},
 {j:"pilih",t:"Kuasa kanta diukur dalam unit:",p:["Diopter (D)","Watt (W)","Joule (J)","Lux (lx)"],b:0,u:"P = 1 ÷ f, dengan f dalam meter. 1 D = 1 m⁻¹."},
 {j:"pilih",t:"Cermin sisi kenderaan biasanya ialah cermin:",p:["Cembung","Cekung","Satah","Parabola cekung"],b:0,u:"Cermin cembung memberi medan penglihatan yang luas. Imejnya maya, tegak dan diperkecil."},
 {j:"pilih",t:"Pantulan dalam penuh boleh berlaku apabila cahaya bergerak dari:",p:["Kaca ke udara","Udara ke kaca","Udara ke air","Vakum ke kaca"],b:0,u:"Syarat pertama: cahaya mesti bergerak dari medium lebih tumpat ke medium kurang tumpat."},
 {j:"banyak",t:"Pilih DUA syarat untuk pantulan dalam penuh berlaku.",p:["Cahaya dari medium lebih tumpat","Sudut tuju melebihi sudut genting","Cahaya dari medium kurang tumpat","Sudut tuju kurang daripada sudut genting"],b:[0,1],u:"Kedua-dua syarat mesti dipenuhi serentak."}],
 bos:{j:"pilih",t:"Gentian optik membawa isyarat internet ke rumah. Fenomena yang membolehkannya ialah:",p:["Pantulan dalam penuh","Pembiasan biasa","Pembelauan cahaya","Penyebaran cahaya"],b:0,u:"Cahaya dipantul berulang kali di dalam teras gentian tanpa keluar ke salutan."}},

{n:2, tempat:"Meja Sinar", sk:"6.1 Hukum Snell, n = c/v, dalam nyata dan dalam ketara", lampiran:"r1",
 kadNama:"Hukum Snell", kadEm:"\u{1F4D0}", kadFakta:"n = sin i ÷ sin r, dengan i sudut tuju dalam udara dan r sudut biasan dalam medium.",
 bosKadNama:"Dalam Ketara", bosKadEm:"\u{1F3CA}", bosKadFakta:"n = dalam nyata ÷ dalam ketara. Kolam kelihatan lebih cetek daripada dalam sebenarnya.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, sudut tuju ialah 45° dan indeks biasan kaca 1.5. Hitung sudut biasan. Beri jawapan kepada 1 tempat perpuluhan.",b:28.1,tol:0.2,suf:"°",u:"sin r = sin 45° ÷ 1.5 = 0.471, jadi r = 28.1°."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah sinar membengkok apabila memasuki kaca?",p:["Laju cahaya berkurang dalam kaca","Frekuensi cahaya bertambah dalam kaca","Kaca menyerap sebahagian cahaya","Kaca memantulkan semua cahaya"],b:0,u:"Perubahan laju di sempadan menyebabkan perubahan arah. Frekuensi cahaya tidak berubah."},
 {j:"nombor",t:"Hitung laju cahaya dalam kaca berindeks biasan 1.5. Beri jawapan dalam unit × 10⁸ m s⁻¹.",b:2,tol:0.01,suf:"× 10⁸ m s⁻¹",u:"v = c ÷ n = (3.0 × 10⁸) ÷ 1.5 = 2.0 × 10⁸ m s⁻¹."},
 {j:"nombor",t:"Sebuah kolam sedalam 2.0 m diisi air (n = 1.33). Berapakah dalam ketara kolam itu apabila dilihat dari atas? Beri jawapan kepada 2 tempat perpuluhan.",b:1.5,tol:0.02,suf:"m",u:"Dalam ketara = dalam nyata ÷ n = 2.0 ÷ 1.33 = 1.50 m."},
 {j:"pilih",t:"Pensel yang dicelup separuh dalam air kelihatan bengkok. Penjelasan manakah betul?",p:["Cahaya dari pensel dibias apabila keluar dari air","Pensel benar-benar membengkok dalam air","Air memantulkan cahaya ke arah yang salah","Cahaya bergerak lebih perlahan di udara"],b:0,u:"Cahaya dibias menjauhi normal ketika keluar dari air, jadi bahagian dalam air kelihatan lebih tinggi."},
 {j:"pilih",t:"Logamaya di jalan raya pada hari panas berlaku kerana:",p:["Cahaya dibias dan dipantulkan penuh oleh udara panas","Jalan raya menjadi basah dan berkilat","Wap air terkumpul di atas jalan","Cahaya Matahari dipantul oleh tar hitam"],b:0,u:"Udara panas dekat jalan kurang tumpat. Cahaya dibias secara berterusan sehingga berlaku pantulan dalam penuh."},
 {j:"nombor",t:"Cahaya dengan sudut tuju 30° di udara dibias kepada 19.5° dalam sejenis plastik. Hitung indeks biasan plastik itu. Beri jawapan kepada 2 tempat perpuluhan.",b:1.5,tol:0.02,suf:"",u:"n = sin 30° ÷ sin 19.5° = 0.500 ÷ 0.334 = 1.50."},
 {j:"pilih",t:"Seekor ikan di dalam air melihat seekor burung di atas. Burung itu kelihatan:",p:["Lebih tinggi daripada kedudukan sebenar","Lebih rendah daripada kedudukan sebenar","Pada kedudukan sebenar","Terbalik di permukaan air"],b:0,u:"Cahaya dari burung dibias mendekati normal ketika memasuki air, jadi ia kelihatan datang dari kedudukan lebih tinggi."}],
 bos:{j:"pilih",t:"Seorang kanak-kanak terjun ke kolam yang kelihatan cetek. Nasihat keselamatan manakah PALING tepat?",p:["Kolam lebih dalam daripada yang kelihatan","Kolam lebih cetek daripada yang kelihatan","Kedalaman kolam dapat dianggar dengan mata","Kolam jernih tidak pernah dalam"],b:0,u:"Dalam ketara lebih kecil daripada dalam nyata kerana pembiasan. Kolam sedalam 2 m kelihatan hanya 1.5 m."}},

{n:3, tempat:"Bilik Kanta", sk:"6.3 Pembentukan imej oleh kanta · 6.4 Formula kanta nipis", lampiran:"r2",
 kadNama:"1/f = 1/u + 1/v", kadEm:"\u{1F50D}", kadFakta:"u = jarak objek, v = jarak imej, f = panjang fokus. Pembesaran linear, m = v ÷ u.",
 bosKadNama:"Kuasa Kanta", bosKadEm:"\u{1F453}", bosKadFakta:"P = 1 ÷ f (f dalam meter). Kanta cembung berkuasa positif, kanta cekung berkuasa negatif.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, panjang fokus kanta ialah 3.0 cm dan objek berada 4.5 cm dari kanta. Hitung jarak imej.",b:9,tol:0.05,suf:"cm",u:"1/v = 1/3.0 − 1/4.5 = 1/9.0, jadi v = 9.0 cm."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung pembesaran linear imej.",b:2,tol:0.02,suf:"",u:"m = v ÷ u = 9.0 ÷ 4.5 = 2.0."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah ciri-ciri imej yang terbentuk?",p:["Nyata, songsang, diperbesar","Maya, tegak, diperbesar","Nyata, tegak, diperkecil","Maya, songsang, diperkecil"],b:0,u:"Objek di antara f dan 2f bagi kanta cembung menghasilkan imej nyata, songsang dan diperbesar."},
 {j:"nombor",t:"Objek diletakkan 5.0 cm dari kanta cembung berpanjang fokus 10 cm. Hitung jarak imej. (Imej maya bernilai negatif.)",b:-10,tol:0.05,suf:"cm",u:"1/v = 1/10 − 1/5.0 = −1/10, jadi v = −10 cm. Imej maya, tegak dan diperbesar, seperti kanta pembesar."},
 {j:"nombor",t:"Hitung kuasa kanta cembung berpanjang fokus 20 cm.",b:5,tol:0.01,suf:"D",u:"P = 1 ÷ f = 1 ÷ 0.20 m = +5 D."},
 {j:"nombor",t:"Seorang pesakit rabun jauh memakai kanta cekung berpanjang fokus 25 cm. Hitung kuasa kanta itu.",b:-4,tol:0.01,suf:"D",u:"P = 1 ÷ (−0.25 m) = −4 D. Kanta cekung berkuasa negatif."},
 {j:"pilih",t:"Kanta cekung sentiasa menghasilkan imej yang:",p:["Maya, tegak, diperkecil","Nyata, songsang, diperbesar","Nyata, tegak, diperkecil","Maya, songsang, diperbesar"],b:0,u:"Bagi semua kedudukan objek, kanta cekung membentuk imej maya, tegak dan diperkecil."},
 {j:"pilih",t:"Untuk menggunakan kanta cembung sebagai kanta pembesar, objek mesti diletakkan:",p:["Kurang daripada f dari kanta","Tepat pada 2f dari kanta","Lebih daripada 2f dari kanta","Di antara f dan 2f"],b:0,u:"Apabila u < f, imej maya, tegak dan diperbesar terbentuk pada sisi yang sama dengan objek."}],
 bos:{j:"nombor",t:"Objek diletakkan 15 cm dari kanta cekung berpanjang fokus 10 cm (f = −10 cm). Hitung jarak imej.",b:-6,tol:0.05,suf:"cm",u:"1/v = 1/(−10) − 1/15 = −1/6, jadi v = −6.0 cm. Imej maya dan diperkecil."}},

{n:4, tempat:"Makmal Pantulan Penuh", sk:"6.2 Menganalisis sudut genting dan pantulan dalam penuh", lampiran:"j1",
 kadNama:"Sudut Genting", kadEm:"\u{1F52C}", kadFakta:"n = 1 ÷ sin c. Semakin besar indeks biasan, semakin kecil sudut genting.",
 bosKadNama:"Kilauan Intan", bosKadEm:"\u{1F48E}", bosKadFakta:"Sudut genting intan sangat kecil (≈ 24°), jadi cahaya terperangkap dan dipantul berulang kali sebelum keluar.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung sudut genting kaca. Beri jawapan kepada 1 tempat perpuluhan.",b:41.8,tol:0.2,suf:"°",u:"sin c = 1 ÷ 1.50 = 0.667, jadi c = 41.8°."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung sudut genting intan. Beri jawapan kepada 1 tempat perpuluhan.",b:24.4,tol:0.2,suf:"°",u:"sin c = 1 ÷ 2.42 = 0.413, jadi c = 24.4°."},
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah mempunyai sudut genting paling besar?",p:["Air","Kaca","Intan","Plastik akrilik"],b:0,u:"Air mempunyai indeks biasan paling kecil (1.33), jadi sudut gentingnya paling besar (≈ 48.8°)."},
 {j:"pilih",t:"Berdasarkan Jadual 1, cahaya dalam kaca menuju ke sempadan kaca-udara dengan sudut tuju 45°. Apakah yang berlaku?",p:["Pantulan dalam penuh","Pembiasan menjauhi normal","Pembiasan mendekati normal","Cahaya diserap sepenuhnya"],b:0,u:"45° melebihi sudut genting kaca (41.8°), jadi semua cahaya dipantulkan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, cahaya dalam air menuju ke sempadan air-udara dengan sudut tuju 45°. Apakah yang berlaku?",p:["Pembiasan keluar ke udara","Pantulan dalam penuh","Cahaya bergerak di sepanjang sempadan","Cahaya diserap oleh air"],b:0,u:"45° kurang daripada sudut genting air (48.8°), jadi cahaya dibias keluar."},
 {j:"pilih",t:"Periskop prisma lebih baik daripada periskop cermin kerana:",p:["Imej lebih terang dan tiada imej berganda","Prisma lebih ringan daripada cermin","Prisma tidak memerlukan cahaya","Imej menjadi diperbesar"],b:0,u:"Pantulan dalam penuh memantulkan hampir 100% cahaya, dan tiada pantulan tambahan seperti pada lapisan kaca cermin."},
 {j:"pilih",t:"Gentian optik lebih baik daripada kabel kuprum untuk internet kerana:",p:["Kehilangan isyarat rendah dan kapasiti data tinggi","Ia mengalirkan arus elektrik dengan lebih baik","Ia lebih mudah dibengkokkan tanpa had","Isyarat bergerak lebih laju daripada cahaya"],b:0,u:"Cahaya dalam gentian kurang dilemahkan dan tidak terganggu oleh medan elektromagnet."},
 {j:"banyak",t:"Pilih DUA aplikasi pantulan dalam penuh.",p:["Endoskop perubatan","Pemantul pada lampu belakang basikal","Kanta cermin mata","Cermin solek"],b:[0,1],u:"Endoskop menggunakan gentian optik; pemantul basikal menggunakan prisma kecil. Kanta menggunakan pembiasan, cermin solek menggunakan pantulan biasa."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah intan berkilau lebih daripada kaca yang dipotong dengan bentuk sama?",p:["Sudut genting intan lebih kecil","Intan lebih keras daripada kaca","Intan menyerap lebih banyak cahaya","Indeks biasan intan lebih kecil"],b:0,u:"Dengan c ≈ 24°, kebanyakan cahaya dalam intan mengalami pantulan dalam penuh berulang kali sebelum keluar."}},

{n:5, tempat:"Kedai Optik", sk:"6.5 Alatan optik · 6.6 Cermin sfera", lampiran:null,
 kadNama:"Teleskop", kadEm:"\u{1F52D}", kadFakta:"Teleskop astronomi: pembesaran M = f_o ÷ f_e, panjang teleskop pada pelarasan normal = f_o + f_e.",
 bosKadNama:"Cermin Sfera", bosKadEm:"\u{1FA9E}", bosKadFakta:"Cermin cekung menumpukan cahaya (lampu suluh, dapur suria). Cermin cembung mencapahkan cahaya (cermin keselamatan jalan).",
 soalan:[
 {j:"nombor",t:"Teleskop astronomi mempunyai kanta objek f = 100 cm dan kanta mata f = 5 cm. Hitung pembesarannya pada pelarasan normal.",b:20,tol:0.05,suf:"kali",u:"M = f_o ÷ f_e = 100 ÷ 5 = 20."},
 {j:"nombor",t:"Bagi teleskop dalam soalan tadi, hitung panjang teleskop pada pelarasan normal.",b:105,tol:0.1,suf:"cm",u:"Panjang = f_o + f_e = 100 + 5 = 105 cm."},
 {j:"pilih",t:"Untuk teleskop berkuasa tinggi, gabungan kanta manakah PALING sesuai?",p:["Kanta objek f panjang, kanta mata f pendek","Kanta objek f pendek, kanta mata f panjang","Kedua-dua kanta f pendek","Kedua-dua kanta f sama panjang"],b:0,u:"M = f_o ÷ f_e menjadi besar apabila f_o panjang dan f_e pendek."},
 {j:"pilih",t:"Bagi mikroskop majmuk, gabungan kanta manakah betul?",p:["Kedua-dua kanta f pendek","Kanta objek f panjang, kanta mata f pendek","Kedua-dua kanta f panjang","Kanta cekung sebagai kanta objek"],b:0,u:"Mikroskop menggunakan kanta cembung berpanjang fokus pendek untuk kanta objek dan kanta mata."},
 {j:"nombor",t:"Objek diletakkan 30 cm di hadapan cermin cekung berpanjang fokus 10 cm. Hitung jarak imej.",b:15,tol:0.05,suf:"cm",u:"1/v = 1/10 − 1/30 = 1/15, jadi v = 15 cm. Imej nyata, songsang dan diperkecil."},
 {j:"pilih",t:"Cermin di selekoh tajam jalan bukit menggunakan cermin cembung kerana:",p:["Medan penglihatannya luas","Imejnya diperbesar","Imejnya nyata dan songsang","Ia menumpukan cahaya kenderaan"],b:0,u:"Pemandu dapat melihat kenderaan dari arah bertentangan dalam kawasan yang luas."},
 {j:"pilih",t:"Kamera telefon pintar menggunakan kanta cembung untuk membentuk imej pada penderia. Imej itu ialah:",p:["Nyata, songsang, diperkecil","Maya, tegak, diperbesar","Nyata, tegak, diperbesar","Maya, songsang, diperkecil"],b:0,u:"Objek jauh melebihi 2f, jadi imej nyata, songsang dan diperkecil terbentuk. Perisian memusingkannya semula."},
 {j:"banyak",t:"Pilih DUA kegunaan cermin cekung.",p:["Pemantul lampu suluh","Cermin solek yang membesarkan muka","Cermin keselamatan di kedai","Cermin sisi motosikal"],b:[0,1],u:"Cermin cekung menumpu cahaya dan membesarkan imej objek dekat. Cermin keselamatan dan cermin sisi ialah cermin cembung."}],
 bos:{j:"pilih",t:"Seorang murid rabun jauh ditawarkan dua kanta: cembung +2 D atau cekung −2 D. Pilihan manakah betul dan mengapa?",p:["Cekung, kerana mencapahkan cahaya sebelum masuk ke mata","Cembung, kerana menumpukan cahaya ke retina lebih awal","Cembung, kerana membesarkan objek yang jauh","Cekung, kerana menambah kuasa penumpuan mata"],b:0,u:"Mata rabun jauh menumpukan cahaya di hadapan retina. Kanta cekung mencapahkan cahaya supaya imej jatuh tepat pada retina."}},

{n:6, tempat:"Studio Reka Optik", sk:"6.1 hingga 6.6 Mereka cipta menggunakan pengetahuan optik", lampiran:null,
 kadNama:"Reka Alat Optik", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Alat optik dibina dengan memilih kanta atau cermin yang sesuai berdasarkan panjang fokus dan kedudukan imej yang dikehendaki.",
 bosKadNama:"Reka Cipta Optik", bosKadEm:"\u{1F4A1}", bosKadFakta:"Dapur suria menggunakan cermin cekung untuk menumpukan cahaya Matahari ke satu titik.",
 soalan:[
 {j:"pilih",t:"Anda mereka dapur suria untuk perkhemahan. Di manakah periuk perlu diletakkan?",p:["Pada titik fokus cermin cekung","Pada pusat kelengkungan cermin cembung","Di belakang cermin cekung","Sejauh mungkin dari cermin"],b:0,u:"Sinar Matahari yang selari ditumpukan ke titik fokus, jadi haba paling tinggi di situ."},
 {j:"pilih",t:"Anda membina periskop daripada kotak jus untuk melihat dari balik tembok. Pada sudut berapakah dua prisma (atau cermin) perlu dipasang?",p:["45° kepada paksi kotak","90° kepada paksi kotak","30° kepada paksi kotak","60° kepada paksi kotak"],b:0,u:"Sudut 45° membelokkan cahaya 90° pada setiap pantulan, jadi cahaya keluar selari dengan arah masuk."},
 {j:"nombor",t:"Anda membina teleskop ringkas dengan pembesaran 25 kali. Kanta objek yang ada berpanjang fokus 50 cm. Berapakah panjang fokus kanta mata yang diperlukan?",b:2,tol:0.02,suf:"cm",u:"f_e = f_o ÷ M = 50 ÷ 25 = 2.0 cm."},
 {j:"pilih",t:"Anda mahu menyalurkan cahaya Matahari ke bilik yang tiada tingkap. Reka bentuk manakah PALING berkesan?",p:["Tiub berlapik permukaan berkilat","Paip PVC hitam yang panjang","Kotak kayu bertutup rapat","Lapisan kain gelap di siling"],b:0,u:"Permukaan berkilat memantulkan cahaya berulang kali di sepanjang tiub ke dalam bilik."},
 {j:"pilih",t:"Anda mahu kanta pembesar yang memberi pembesaran lebih tinggi. Pilihan kanta cembung manakah PALING sesuai?",p:["Panjang fokus lebih pendek","Panjang fokus lebih panjang","Kanta cekung yang nipis","Kanta yang tidak melengkung"],b:0,u:"Kanta cembung yang lebih tebal dan berpanjang fokus pendek menghasilkan pembesaran lebih tinggi."},
 {j:"pilih",t:"Perpustakaan sekolah mahu cermin keselamatan supaya pustakawan nampak semua rak. Cermin manakah PALING sesuai?",p:["Cermin cembung di sudut siling","Cermin cekung di tengah dinding","Cermin satah kecil di meja","Cermin cekung di atas pintu"],b:0,u:"Cermin cembung memberi medan penglihatan paling luas."},
 {j:"pilih",t:"Anda mereka gentian optik daripada plastik untuk projek sains. Bahan teras dan salutan manakah PALING sesuai?",p:["Teras berindeks tinggi, salutan berindeks rendah","Teras berindeks rendah, salutan berindeks tinggi","Teras dan salutan berindeks sama","Teras legap, salutan lutsinar"],b:0,u:"Pantulan dalam penuh hanya berlaku apabila cahaya bergerak dari medium lebih tumpat (teras) ke medium kurang tumpat (salutan)."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa menguji dapur suria anda.",p:["Pakai cermin mata hitam","Jangan sentuh titik fokus","Lihat terus ke titik fokus","Letak kertas di titik fokus lama-lama"],b:[0,1],u:"Cahaya tertumpu sangat terang dan panas, boleh merosakkan mata dan menyebabkan lecuran atau kebakaran."}],
 bos:{j:"buka",
  t:"Reka satu alat optik ringkas untuk membantu orang di sekeliling anda (contoh: periskop untuk murid pendek di majlis, teleskop untuk kelab astronomi, dapur suria untuk kampung, cahaya tiub untuk stor gelap).",
  arahan:"Nyatakan tujuan, komponen optik yang dipilih (kanta cembung/cekung, cermin cekung/cembung atau prisma) dan panjang fokusnya, fenomena cahaya yang digunakan, lakaran atau penerangan susunan komponen, SATU pengiraan (contoh: pembesaran atau jarak imej), cara menguji, dan SATU pertimbangan kos atau keselamatan.",
  u:"Jawapan TP6 yang kukuh memilih komponen yang sesuai dengan tujuan, menerangkan fenomena (pembiasan, pantulan, pantulan dalam penuh) dengan betul, memberi susunan yang boleh dibina, menyertakan pengiraan yang tepat seperti M = f_o ÷ f_e atau 1/f = 1/u + 1/v, mencadangkan ujian, serta mempertimbangkan kos bahan dan keselamatan mata."}}
];

module.exports = {
  id:"f4b6", tingkatan:4, kod:"6.0 Cahaya dan Optik",
  tajuk:"Jejak Cahaya",
  subtajuk:"Fizik Ting. 4 · Bab 6 Cahaya dan Optik",
  spi:SPI.f4b6,
  ulasan:{
   1:"{n} dapat mengingat kembali konsep pembiasan, pantulan dalam penuh, jenis kanta dan cermin sfera. Langkah seterusnya ialah menjelaskan Hukum Snell.",
   2:"{n} dapat menjelaskan pembiasan menggunakan Hukum Snell, n = c/v dan konsep dalam ketara. Perlu lebih latihan menggunakan formula kanta nipis.",
   3:"{n} boleh mengaplikasikan formula kanta nipis dan kuasa kanta untuk menentukan kedudukan serta ciri imej. Galakkan menganalisis sudut genting.",
   4:"{n} mampu menganalisis sudut genting dan pantulan dalam penuh bagi pelbagai bahan. Seterusnya latih menilai alatan optik.",
   5:"{n} dapat menilai pemilihan kanta dan cermin dalam teleskop, mikroskop, kamera dan cermin mata. Sudah bersedia mereka bentuk alat optik sendiri.",
   6:"{n} berjaya mereka bentuk alat optik yang berfungsi dengan pengiraan dan justifikasi fizik yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Cahaya dan Optik. Cadangan: ulang hentian pertama dan perhatikan pensel dalam segelas air bersama rakan."
  },
  lampiran:{
   r1:{jenis:"sinar", mod:"pembiasan", sudutTuju:45, indeks:1.5, atas:"Udara", bawah:"Kaca",
     kapsyen:"Rajah 1 · Sinar cahaya memasuki blok kaca",
     alt:"Sinar cahaya dari udara memasuki kaca pada sudut tuju 45 darjah dan dibias mendekati normal"},
   r2:{jenis:"kanta", jenisKanta:"cembung", f:3, u:4.5, ho:0.8, skala:11,
     kapsyen:"Rajah 2 · Pembentukan imej oleh kanta cembung (f = 3.0 cm)",
     alt:"Objek 4.5 cm dari kanta cembung berpanjang fokus 3.0 cm membentuk imej nyata, songsang dan diperbesar 9.0 cm di sebelah lain kanta"},
   j1:jadual(1, "Indeks biasan beberapa bahan",
     ["Bahan", "Indeks biasan, n"],
     [["Air","1.33"],["Plastik akrilik","1.49"],["Kaca","1.50"],["Intan","2.42"]])
  },
  aras:ARAS
};
