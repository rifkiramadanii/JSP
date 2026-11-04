# 🌿 Journal of Social and Praxis (JSP) - Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Ini adalah repositori antarmuka (*frontend*) modern dan responsif untuk **Journal of Social and Praxis (JSP)**. Proyek ini dibangun untuk menggantikan/mendampingi tampilan standar dari **Open Journal Systems (OJS)** dengan menggunakan teknologi web modern.

Tampilan website mengusung tema **Earthy Sage Green** yang memberikan kesan akademis, profesional, dan elegan, dipadukan dengan tipografi editorial (*Crimson Pro* dan *DM Sans*).

## ✨ Fitur Utama

*   **Integrasi OJS API:** Menarik data publikasi, *issue*, dan *article metadata* langsung dari *backend* OJS secara *real-time*.
*   **Desain Modern & Responsif:** Menggunakan Tailwind CSS v4 dengan pendekatan desain yang ramah pembaca dan mendukung layar *mobile* maupun *desktop*.
*   **Routing Cepat:** Perpindahan halaman tanpa *reload* menggunakan React Router.
*   **Halaman Lengkap Jurnal Akademik:**
    *   🏠 **Homepage:** *Hero section* interaktif, Statistik Jurnal, *Preview Current Issue*, dan pengumuman *Call for Papers*.
    *   📖 **Current Issue & Archives:** Daftar terbitan terkini dan edisi lampau (dengan fitur *accordion*).
    *   📝 **Article Detail:** Metadata lengkap, abstrak, fitur unduh PDF, dan generator sitasi (*How to Cite*) format APA 7th Edition.
    *   ℹ️ **About & Policies:** Tim Editorial, *Author Guidelines*, *Publication Process*, *Privacy Statement*, dan Kontak.

## 🛠️ Teknologi yang Digunakan

*   **Framework:** [React 18](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Routing:** React Router DOM
*   **HTTP Client:** Axios
*   **Icons:** Lucide React
*   **Fonts:** Crimson Pro (Serif) & DM Sans (Sans-serif) dari Google Fonts

## 🚀 Cara Instalasi & Menjalankan Proyek (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal (*development*) Anda.

### 1. Prasyarat
Pastikan Anda sudah menginstal:
*   [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru)
*   NPM atau Yarn

### 2. Kloning Repositori
```bash
git clone https://github.com/username-anda/jsp-frontend.git
cd jsp-frontend
```

### 3. Instalasi Dependensi
```bash
npm install
# atau
yarn install
```

### 4. Konfigurasi Environment Variables
Buat sebuah file bernama `.env` di *root directory* proyek (sejajar dengan `package.json`), lalu masukkan URL API OJS Anda:
```env
# Ganti URL di bawah ini dengan endpoint OJS milik Anda
VITE_OJS_API_URL=https://jurnal.contoh.ac.id/index.php/jsp/api/v1
```

### 5. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
```
Buka browser Anda dan akses URL yang tertera di terminal (biasanya `http://localhost:5173`).

## 📚 Panduan Penggunaan Website

Bagi *Author* atau *Visitor* yang mengakses website JSP:

1.  **Mencari Artikel:** Pengunjung dapat melihat edisi terbaru di halaman utama atau menelusuri menu **Archives** untuk mencari artikel dari tahun-tahun sebelumnya.
2.  **Membaca & Sitasi:** Klik judul artikel untuk membaca abstrak. Tersedia tombol **Download PDF** dan **How to Cite** (otomatis menyalin format APA 7th) di halaman detail artikel.
3.  **Proses Pengiriman Naskah (Submission):**
    *   Penulis diarahkan untuk membaca **Author Guidelines** terlebih dahulu pada menu *About*.
    *   Penulis dapat mengunduh format naskah melalui tombol **Unduh Template Artikel**.
    *   Untuk mulai mengirimkan naskah, klik tombol **Submit a Manuscript** (atau *Call for Papers* di beranda). Website akan mengarahkan penulis ke portal *submission* OJS (contoh: `jspsubmission.j-psc.com`).

## 🔗 Catatan Penting untuk Integrasi OJS

Agar frontend ini dapat menarik data dari server OJS Anda, pastikan:
1.  **Versi OJS:** Anda menggunakan OJS versi 3.2 ke atas (yang sudah mendukung REST API).
2.  **Konfigurasi CORS:** Server OJS harus mengizinkan *Cross-Origin Resource Sharing (CORS)* dari domain frontend Anda. Konfigurasi ini biasanya dilakukan di level *web server* (Apache/Nginx) atau *plugin* OJS.
3.  **Artikel Diterbitkan:** API publik OJS hanya akan mengembalikan data untuk *Issue* dan *Article* yang statusnya sudah diterbitkan (*Published*).

## 📄 Lisensi
Proyek antarmuka ini bersifat *open-source* atau disesuaikan dengan kebijakan institusi/penerbit Journal of Social and Praxis.