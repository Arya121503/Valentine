# Script untuk deploy ke GitHub Pages
Write-Host "🚀 Memulai deployment ke GitHub Pages..." -ForegroundColor Cyan

# Build project
Write-Host "`n📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build gagal! Perbaiki error terlebih dahulu." -ForegroundColor Red
    exit 1
}

# Tambah .nojekyll
Write-Host "`n📝 Menambahkan .nojekyll..." -ForegroundColor Yellow
New-Item -ItemType File -Path "out\.nojekyll" -Force | Out-Null

# Check if remote exists
$remoteExists = git remote | Select-String -Pattern "origin" -Quiet

if (-not $remoteExists) {
    Write-Host "`n⚠️  Remote 'origin' belum disetup!" -ForegroundColor Red
    Write-Host "Jalankan perintah berikut terlebih dahulu:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/USERNAME/Valentine.git" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
    Write-Host "`n(Ganti USERNAME dengan username GitHub kamu)" -ForegroundColor Yellow
    exit 1
}

# Check if gh-pages branch exists remotely
$ghPagesBranchExists = git ls-remote --heads origin gh-pages

if ($ghPagesBranchExists) {
    Write-Host "`n🔄 Branch gh-pages sudah ada, akan di-update..." -ForegroundColor Yellow
} else {
    Write-Host "`n🌿 Membuat branch gh-pages baru..." -ForegroundColor Yellow
}

# Deploy menggunakan git subtree
Write-Host "`n🚢 Deploying ke GitHub Pages..." -ForegroundColor Yellow
git add out/
git commit -m "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git subtree push --prefix out origin gh-pages

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deployment berhasil!" -ForegroundColor Green
    Write-Host "`n🌐 Website akan segera online di:" -ForegroundColor Cyan
    Write-Host "https://USERNAME.github.io/Valentine/" -ForegroundColor White
    Write-Host "`n(Ganti USERNAME dengan username GitHub kamu)" -ForegroundColor Yellow
    Write-Host "`n⏱️  Tunggu 2-5 menit untuk GitHub Pages memproses website." -ForegroundColor Yellow
} else {
    Write-Host "`n❌ Deployment gagal!" -ForegroundColor Red
    Write-Host "Cek error di atas dan coba lagi." -ForegroundColor Yellow
}
