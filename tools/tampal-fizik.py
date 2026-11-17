"""Tampalan (17 Nov 2026): tukar salinan app Jejak TP Kimia kepada Jejak TP Fizik (T4-T5 sahaja).
Id bab f{tingkatan}b{bab}; jadual/fungsi DB berawalan jf_ (projek Supabase noaeag, sama seperti Kimia).
Jalankan sekali dari akar repo: python tools/tampal-fizik.py"""
import re, glob
def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8', newline='\n').write(s)
FAIL = ['index.html','semak.html','landing.html','terma.html','privasi.html','manifest.webmanifest','sw.js',
        'sumber.js','konfig.js','skema.sql','bina.js','bab-indeks.js','CNAME','robots.txt','akses.js','package.json'] \
       + glob.glob('migrasi-*.sql') + glob.glob('tools/*.js') + glob.glob('tools/lukis/*.js') \
       + glob.glob('supabase/**/*.*', recursive=True)
# Senarai keluarga merentas app (Sains..Kimia) dikekalkan; Fizik ditambah kemudian semasa lancar.
# Placeholder TIDAK boleh mengandungi perkataan Kimia (UMUM akan menukarnya).
LINDUNG = [('["jk","Kimia","https://jejaktpkimia.naikgred.com/?keluarga=1"]', '@@KK@@'),
           ('Sejarah, English dan Kimia', '@@S5@@')]
UMUM = [
 ('Anak NaikGred Kimia','Anak NaikGred Fizik'), ('Jejak TP Kimia','Jejak TP Fizik'),
 ('jejaktpkimia','jejaktpfizik'), ('jejak-tp-kimia','jejak-tp-fizik'),
 ('bayar-kimia','bayar-fizik'), ('TOYYIB_KATEGORI_KIMIA','TOYYIB_KATEGORI_FIZIK'),
 ('dskp/kimia-en','dskp/fizik-en'), ('rakam-video.js','rakam-video.js'),
 ('jk_','jf_'), ('"jk-','"jf-'), ("'jk-","'jf-"), ('const P = "jk"','const P = "jf"'),
 ('KIMIA','FIZIK'), ('Kimia','Fizik'), ('kimia','fizik'),
]
for p in FAIL:
    try: s = baca(p)
    except Exception: continue
    t = s
    for a, b in LINDUNG: t = t.replace(a, b)
    for a, b in UMUM: t = t.replace(a, b)
    t = t.replace('@@KK@@', LINDUNG[0][0] + ',["jf","Fizik","https://jejaktpfizik.naikgred.com/?keluarga=1"]')          .replace('@@S5@@', 'Sejarah, English, Kimia dan Fizik')
    # id bab k4b1 -> f4b1 (hanya bentuk id bab; tidak menyentuh perkataan lain)
    t = re.sub(r'\bk([45])b(\d+)\b', r'f\1b\2', t)
    t = t.replace('"k"+t+"b"', '"f"+t+"b"').replace('"k"+', '"f"+')
    t = t.replace('/^k(\\d)b/', '/^f(\\d)b/').replace('/^k(\\d)b(\\d+)$/', '/^f(\\d)b(\\d+)$/') \
         .replace('/^k\\d+b\\d+$/', '/^f\\d+b\\d+$/').replace('/^k\\db\\d+\\.js$/', '/^f\\db\\d+\\.js$/')
    if t != s: tulis(p, t); print('dikemas kini:', p)
s = baca('index.html')
G = [
 ('var JUMLAH_BAB={4:8,5:5};', 'var JUMLAH_BAB={4:6,5:7};'),
 ('Fizik Tingkatan 4 (8 bab) dan Tingkatan 5 (5 bab)', 'Fizik Tingkatan 4 (6 bab) dan Tingkatan 5 (7 bab)'),
]
for a, b in G:
    if a not in s: print('TIADA:', a)
    s = s.replace(a, b)
tulis('index.html', s)
t = baca('sw.js'); t = re.sub(r'(VERSI\s*=\s*")[^"]*(")', r'\1jf-2026-11-17a\2', t); tulis('sw.js', t)
for p in ['index.html','semak.html','landing.html','bina.js']:
    baki = [l.strip()[:150] for l in baca(p).split('\n') if re.search(r'Kimia|kimia|\bk\db\d|jk_|"jk', l)]
    print(p, 'baki:', len(baki))
    for l in baki: print('   ', l)
