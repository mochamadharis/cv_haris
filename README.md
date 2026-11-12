# Personal CV & Academic Score App — Level 10 (Industry)

Aplikasi mobile berbasis **React Native & Expo** yang merepresentasikan profil digital, portofolio proyek, pengalaman magang, serta dashboard capaian akademik mahasiswa. Proyek ini disusun untuk memenuhi **Ujian Tengah Semester (UTS) Mata Kuliah Pemrograman Mobile 2** hingga capaian tertinggi **Level 10 — Industry**.

---

## 1. Identitas Mahasiswa

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Lengkap** | Moch Haris Ramadan |
| **NIM** | 242505029 |
| **Program Studi / Semester** | Sistem Informasi (SI-R-5) / Semester 5 |
| **Fakultas / Universitas** | Fakultas Komputer — Universitas Ma'soem |
| **Mata Kuliah** | Pemrograman Mobile 2 |
| **Dosen Pengampu** | Iin, M.Kom |
| **Level yang Diklaim** | **Level 10 — INDUSTRY** (*Kumulatif Level 1 s.d. Level 10*) |

---

## 2. Arsitektur Proyek & Pemisahan Tanggung Jawab (Level 5, 9, 10)

Proyek ini menerapkan prinsip *Separation of Concerns* yang memisahkan lapisan tampilan (*View/Screens*), komponen *reusable* (*Components*), penyimpanan data (*Data JSON*), layanan pengambilan data & penyimpanan preferensi (*Services*), logika bisnis murni (*Utils*), serta pengujian otomatis (*Tests*):

```text
personal-cv-haris/
├── App.js                         # Entry point utama aplikasi Expo
├── app/
│   └── index.jsx                  # Koordinator navigasi multi-screen, state tema, & siklus hidup data
├── screens/                       # [Level 9] Pemisahan halaman sesuai fungsinya
│   ├── HomeScreen.jsx             # Halaman 1: Ringkasan profil & kartu pintasan navigasi
│   ├── AboutScreen.jsx            # Halaman 2: Biodata akademik, Experience Timeline magang, & Hobi
│   ├── SkillsScreen.jsx           # Halaman 3: Dynamic Skills, pencarian, filter kategori, & Empty State
│   ├── PortfolioScreen.jsx        # Halaman 4: Galeri proyek portofolio, Search/Filter, & Empty State
│   ├── MyScoreScreen.jsx          # Halaman 5: Academic Dashboard + Simulasi Sinkronisasi Mock API LMS
│   └── ContactScreen.jsx          # Halaman 6: Formulir kontak interaktif + riwayat pesan terkirim
├── components/                    # [Level 5 & 8] Komponen UI modular & reusable
│   ├── ProfileHeader.jsx          # Header profil mahasiswa + Theme Switcher (Terang/Gelap)
│   ├── BottomNavBar.jsx           # Navigasi bawah antarhalaman (6 tab halaman)
│   ├── ProgressCard.jsx           # Komponen reusable kartu persentase Learning Progress
│   └── StateFeedback.jsx          # [Level 10] Komponen LoadingState, ErrorState, & EmptyState
├── data/                          # [Level 6 & 8] Data lokal JSON terstruktur
│   ├── profile.json               # Data profil, skill, magang, & portofolio proyek
│   └── academicScore.json         # Data identitas akademik, Current Score, LP, & Learning Progress
├── services/                      # [Level 10] Layanan Mock API & penyimpanan preferensi lokal
│   └── apiService.js              # Simulasi fetch data profil/LMS & PreferenceStorage
├── utils/                         # [Level 10] Logika bisnis & validasi terpisah dari UI
│   └── validators.js              # Fungsi validasi form, filter portofolio/skill, & rata-rata progres
├── tests/                         # [Level 10] Pengujian otomatis (Unit Testing)
│   └── validators.test.js         # 6 skenario pengujian otomatis terhadap fungsi utama
└── assets/
    └── profile.png                # Foto profil mahasiswa
```

---

## 3. Pemenuhan Persyaratan Kumulatif (Level 1 s.d. Level 10)

1. **Level 1 (Novice)**: Menampilkan NIM (`242505029`), Nama Lengkap (`Moch Haris Ramadan`), dan Foto Profil.
2. **Level 2 (Beginner)**: Menampilkan bidang minat Sistem Informasi, deskripsi diri, dan heading yang terstruktur.
3. **Level 3 (Elementary)**: Menggunakan `Flexbox`, `StyleSheet.create()`, dan hierarki tipografi yang nyaman dibaca di layar ponsel maupun web.
4. **Level 4 (Intermediate)**: Menyediakan `ContactScreen` dengan input Nama, Email, dan Pesan menggunakan `useState`, *event handling*, validasi input kosong, serta tampilan respons pesan terkirim.
5. **Level 5 (Competent)**: Memisahkan data dari komponen UI dan mengirimkan seluruh data melalui `Props`.
6. **Level 6 (Proficient)**: Menyimpan data profil dan portofolio dalam format JSON valid (`data/profile.json`).
7. **Level 7 (Advanced)**: Mengimplementasikan fitur eksplorasi *Dynamic Skills*, *Experience Timeline* (Magang Desa Hegarmanah & Pabrik Air Al Ma'soem), *Portfolio Gallery*, *Hobby Section*, *Search & Filter*, serta *Theme Switcher* (Mode Terang & Gelap).
8. **Level 8 (Expert)**: Menampilkan dashboard **My Score** (`Nilai: 89`, `Grade: A`, `12.375 LP`, `Attendance: 100%`, `Practice: 87%`, `Quest: 95%`, `Challenge: 100%`) dari `data/academicScore.json` menggunakan komponen reusable `<ProgressCard />`.
9. **Level 9 (Professional)**: Menggunakan navigasi antarhalaman (*Multi-Screen*: `Home`, `About`, `Skills`, `Portfolio`, `My Score`, `Contact`) yang konsisten dan mudah digunakan.
10. **Level 10 (Industry)**:
    - Memisahkan tanggung jawab komponen UI (`screens/`, `components/`), data (`data/`), layanan API (`services/apiService.js`), dan logika validasi (`utils/validators.js`).
    - Mengimplementasikan penanganan kondisi *Loading State*, *Error State* (dengan tombol *Retry*), dan *Empty State* (dengan tombol *Reset Filter*).
    - Menyimpan preferensi tema (Terang/Gelap) dan halaman aktif terakhir secara lokal (`PreferenceStorage`).
    - Menyertakan atribut aksesibilitas dasar (`accessibilityRole`, `accessibilityLabel`, `accessibilityState`).
    - Menyertakan pengujian otomatis (`tests/validators.test.js`) dan dokumentasi arsitektur lengkap (`README.md`).

---

## 4. Cara Menjalankan Aplikasi

1. **Instal Dependensi Proyek**
   ```bash
   npm install
   ```
2. **Instal Dukungan Web (Jika Ingin Membuka di Browser Laptop)**
   ```bash
   npx expo install react-dom react-native-web @expo/metro-runtime
   ```
3. **Jalankan Server Pengembangan Expo**
   ```bash
   npx expo start
   ```
   - Tekan **`w`** di terminal untuk membuka di Web Browser laptop.
   - Atau scan QR Code menggunakan aplikasi **Expo Go** di perangkat Android/iOS.

---

## 5. Cara Menjalankan Pengujian Otomatis (Unit Test — Level 10)

Proyek ini dilengkapi pengujian fungsi otomatis tanpa memerlukan konfigurasi tambahan. Jalankan perintah berikut di terminal:

```bash
npm test
```
atau:
```bash
node tests/validators.test.js
```
