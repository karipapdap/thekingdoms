# Panduan Struktur Folder The Kingdoms Website

## 📂 Penjelasan Setiap Folder

### `/css`
Menyimpan semua stylesheet
- `styles.css` - Stylesheet utama yang berisi:
  - Navigation styling
  - Header & animations
  - Section layouts
  - Founder cards
  - Server cards
  - Community section
  - Responsive design (mobile)

**Cara menambah CSS baru**: Tambahkan rule baru di `styles.css`

---

### `/js`
Menyimpan semua script JavaScript
- `script.js` - JavaScript utama yang berisi:
  - Fade-in on scroll animation
  - Event listeners

**Cara menambah JavaScript baru**: Tambahkan fungsi di `script.js` dan import di HTML

---

### `/images`
Menyimpan semua aset gambar
Struktur yang ada:
- `header-bg.jpeg` - Background untuk header hero
- `server-bg.jpg` - Background untuk server section
- `survival.png` - Thumbnail The Kingdoms Survival
- `elpika.png` - Thumbnail ElpikaCraft
- `season2.png` - Thumbnail Season 2
- `bedrock.png` - Thumbnail Bedrock Edition
- `pipit.png` - Foto profil pipit
- `karipapdap.png` - Foto profil Karipapdap
- `eliana.png` - Foto profil ElianaRiqma

**Catatan**: Pastikan semua gambar dioptimalkan untuk web (compressed)

---

### `/projects`
Menyimpan subfolder untuk setiap server/project
- `TheKingdomsJavaSeason1/` - Halaman Season 1
- `ElpikaCraft/` - Halaman ElpikaCraft
- `playerss1/` - Daftar pemain Season 1

**Cara menambah project baru**:
1. Buat folder baru di `/projects`
2. Buat file `index.html` di dalamnya
3. Update link di halaman utama

---

### `/assets`
Folder untuk aset tambahan (optional)
Bisa digunakan untuk:
- Font custom
- Icons
- Dokumentasi

---

## 📄 File di Root

### `index.html`
Halaman utama website
- Navigation
- Hero header
- Founder section
- Server section (4 server cards)
- Community section
- Footer

### `CNAME`
Konfigurasi domain custom untuk GitHub Pages

### `README.md`
Dokumentasi umum proyek

### `PROJECT_STRUCTURE.md` (File ini)
Panduan struktur folder dan file

---

## 🔄 Workflow Umum

### Untuk Mengubah Home Page:
1. Edit `index.html`
2. Update CSS di `css/styles.css` jika diperlukan
3. Update JavaScript di `js/script.js` jika diperlukan

### Untuk Membuat Halaman Baru:
1. Buat folder di `/projects/`
2. Buat `index.html` di dalamnya
3. Link ke halaman baru dari halaman utama
4. Gunakan CSS yang sama (`css/styles.css`)

### Untuk Menambah Gambar:
1. Optimize gambar (gunakan tools seperti TinyPNG)
2. Simpan di `/images/`
3. Update path di HTML/CSS

---

## 💡 Tips & Best Practices

### CSS Classes yang Tersedia
- `.button` - Tombol dengan hover effect
- `.fade-in` - Animasi fade in on scroll
- `.founder-card` - Card untuk founder/profile
- `.server-card` - Card untuk server description
- `.server-section` - Background dengan parallax

### HTML Templates

**Button Link**:
```html
<a href="path/to/page" class="button">Text</a>
```

**Server Card**:
```html
<div class="server-card fade-in">
    <img src="images/filename.png" class="server-img">
    <h2>Server Name</h2>
    <p>Description</p>
    <a href="link" class="button">View</a>
</div>
```

---

## 🔗 Path References

**Dari file root (`index.html`):**
- CSS: `css/styles.css`
- JS: `js/script.js`
- Images: `images/filename.ext`
- Projects: `projects/foldername/`

**Dari file di `/projects/servername/index.html`:**
- CSS: `../../css/styles.css`
- JS: `../../js/script.js`
- Images: `../../images/filename.ext`
- Back to home: `../../`

---

## 📊 Stats Website

- **Total Sections**: 5 (Header, Founders, Servers, Community, Footer)
- **Total Server Cards**: 4
- **Total Founder Profiles**: 3
- **Total Pages**: 1 main + multiple project pages

---

Selamat mengembangkan The Kingdoms website! 🎮✨
