:: 1. Hapus repo lokal lama kalau ada
rmdir -Recurse -Force .git

:: 2. Inisialisasi repo baru
git init

:: 3. Set nama dan email GitHub kamu
git config --global user.name "rayhandinisa-ai"
git config --global user.email "rayhandinisa@gmail.com"

:: 4. Buat README.md
echo "# My Backend" > README.md

:: 5. Tambahkan semua file ke commit
git add .

:: 6. Commit pertama
git commit -m "first commit"

:: 7. Set branch utama ke main
git branch -M main

:: 8. Tambahkan remote GitHub
git remote add origin https://github.com/rayhandinisa-ai/sirum.git

::9. Jika sudah ada remove dulu repositorynya
git remote remove origin rayhandinisa-ai/sirum.git

:: 9. Push ke GitHub
git push -u origin main
