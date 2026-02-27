# Panduan Deploy ke GitHub Pages 🚀

## Langkah 1: Buat Repository di GitHub

1. Buka [GitHub](https://github.com) dan login
2. Klik tombol "+" di pojok kanan atas, pilih "New repository"
3. Beri nama repository: **Valentine** (atau nama lain yang kamu suka)
4. Set repository sebagai **Public**
5. **JANGAN** centang "Initialize this repository with a README"
6. Klik "Create repository"

## Langkah 2: Push Code ke GitHub

Setelah repository dibuat, GitHub akan menampilkan instruksi. Gunakan perintah berikut di terminal:

```powershell
git remote add origin https://github.com/USERNAME/Valentine.git
git push -u origin main
```

**Ganti `USERNAME` dengan username GitHub kamu!**

## Langkah 3: Deploy ke GitHub Pages

Jalankan script deploy:

```powershell
.\deploy.ps1
```

Atau manual dengan perintah berikut:

```powershell
# Build project
npm run build

# Tambah .nojekyll ke folder out
New-Item -ItemType File -Path "out\.nojekyll" -Force

# Deploy ke gh-pages branch
git add -f out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

## Langkah 4: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab "Settings"
3. Scroll ke bagian "Pages" di sidebar kiri
4. Di "Source", pilih branch **gh-pages**
5. Folder pilih **/ (root)**
6. Klik "Save"

## Langkah 5: Akses Website

Tunggu beberapa menit, lalu website akan aktif di:

```
https://USERNAME.github.io/Valentine/
```

**Ganti `USERNAME` dengan username GitHub kamu!**

## Update Website di Kemudian Hari

Jika kamu ingin mengubah website:

1. Edit file yang diperlukan
2. Build ulang: `npm run build`
3. Deploy ulang: `.\deploy.ps1`

---

## Troubleshooting

### Website tidak muncul / 404 Error
- Pastikan GitHub Pages sudah diaktifkan di Settings
- Tunggu 5-10 menit setelah push
- Cek apakah branch gh-pages sudah ada

### CSS tidak load / styling berantakan
- Pastikan `basePath` di `next.config.js` sesuai dengan nama repository
- Rebuild dan deploy ulang

### Ingin ganti nama repository
- Update `basePath` di `next.config.js` dengan nama repository baru
- Rebuild dan deploy ulang

---

💡 **Tips**: Setelah website online, kamu bisa share link ke pacarmu! Semoga berhasil! ❤️
