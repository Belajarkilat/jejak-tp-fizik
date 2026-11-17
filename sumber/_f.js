/* Pembantu untuk sumber bab Fizik. Fail berawalan _ diabaikan oleh bina.js.

   jadual(n, tajuk, kepala, baris, nota): jadual data sebagai <figure> berkapsyen
   "Jadual n". App hanya memaparkannya pada soalan yang menyebut "Jadual"
   (lampiranUntuk dalam index.html), dan bina.js gagal jika tiada soalan dalam
   hentian itu yang menyebutnya.

   SPI: Standard Prestasi KSSM Fizik Tingkatan 4 dan 5 (Bahagian Pembangunan
   Kurikulum; dskp/fizik-en.pdf, edisi Bahasa Inggeris). Setiap bidang
   pembelajaran memakai deskriptor TP1-TP6 yang sama strukturnya:
     1 Recall knowledge and scientific skills on X.
     2 Understand X, and able to comprehend the concept.
     3 Apply knowledge of X to explain the occurrences or phenomena of nature and perform simple tasks.
     4 Analyse information about X in daily life problem solving about natural phenomena.
     5 Evaluate to make judgement about X in daily life problem solving and decision making to carry out a task.
     6 Invent by applying the knowledge and skills about X ... creatively and innovatively ...
   Versi Bahasa Melayu di bawah ialah terjemahan. MESTI disemak dengan DSKP Fizik BM. */
const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Sel jadual boleh membawa subskrip/superskrip ringkas: v_0 -> v<sub>0</sub>, m s^{-2} -> m s<sup>-2</sup>. */
function fHtml(t){
  return esc(t)
    .replace(/_\{([^}]+)\}/g, "<sub>$1</sub>").replace(/_(\d+)/g, "<sub>$1</sub>")
    .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>").replace(/\^([0-9]*[+\-−])/g, "<sup>$1</sup>");
}

function jadual(n, tajuk, kepala, baris, nota){
  const th = "<tr>" + kepala.map(k => "<th>" + fHtml(k) + "</th>").join("") + "</tr>";
  const tb = baris.map(r => "<tr>" + r.map(c => "<td>" + fHtml(c) + "</td>").join("") + "</tr>").join("");
  return '<figure class="figure jadual-fizik"><div class="tbl-wrap"><table class="tbl">' +
    "<thead>" + th + "</thead><tbody>" + tb + "</tbody></table></div>" +
    (nota ? '<p class="note">' + fHtml(nota) + "</p>" : "") +
    "<figcaption>Jadual " + n + " · " + esc(tajuk) + "</figcaption></figure>";
}

function tp(topik){
  return [
    "Mengingat kembali pengetahuan dan kemahiran saintifik mengenai " + topik + ".",
    "Memahami " + topik + " serta dapat menjelaskan kefahaman tersebut.",
    "Mengaplikasikan pengetahuan mengenai " + topik + " untuk menerangkan kejadian atau fenomena alam dan dapat melaksanakan tugasan mudah.",
    "Menganalisis maklumat mengenai " + topik + " dalam konteks penyelesaian masalah kehidupan harian mengenai kejadian atau fenomena alam.",
    "Menilai untuk membuat pertimbangan mengenai " + topik + " dalam konteks penyelesaian masalah kehidupan harian dan membuat keputusan untuk melaksanakan sesuatu tugasan.",
    "Mereka cipta dengan mengaplikasikan pengetahuan dan kemahiran mengenai " + topik + " dalam konteks penyelesaian masalah kehidupan harian atau membuat keputusan untuk melaksanakan aktiviti/tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira aspek sosial/ekonomi/budaya.",
  ];
}

const SPI = {
  /* Tingkatan 4 */
  f4b1: tp("Pengukuran"),
  f4b2: tp("Daya dan Gerakan I"),
  f4b3: tp("Kegravitian"),
  f4b4: tp("Haba"),
  f4b5: tp("Gelombang"),
  f4b6: tp("Cahaya dan Optik"),
  /* Tingkatan 5 */
  f5b1: tp("Daya dan Gerakan II"),
  f5b2: tp("Tekanan"),
  f5b3: tp("Elektrik"),
  f5b4: tp("Keelektromagnetan"),
  f5b5: tp("Elektronik"),
  f5b6: tp("Fizik Nuklear"),
  f5b7: tp("Fizik Kuantum"),
};

module.exports = { jadual, SPI, fHtml };
