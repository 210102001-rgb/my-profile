# my-profile

Landing page profil pribadi dibuat dengan Next.js (App Router), TypeScript, Tailwind CSS, dan Framer Motion.

Fitur:
- Struktur App Router Next.js
- Komponen terpisah: Header, Hero, Projects, Footer
- Ambil repositori GitHub publik secara server-side
- Animasi halus dengan Framer Motion

Cara menjalankan:
1. Install dependensi:
   npm install
2. Jalankan mode development:
   npm run dev
3. Buka http://localhost:3000

Penyesuaian cepat:
- Ganti teks "Nama Anda" pada app/components.
- Tambahkan foto profil di `public/me.jpg` dan ubah path jika perlu.
- Untuk repositori privat: set `GITHUB_TOKEN` di environment dan sesuaikan fetch header.