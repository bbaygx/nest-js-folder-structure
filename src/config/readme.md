## Config ⚙️

Mari kita mulai tutorial kita dengan inisialisasi variabel environment.  Saya menggunakan paket `@nestjs/config` dalam kasus penggunaan ini.

 Folder `config/` terdiri dari berbagai bagian tipe variabel untuk dimuat ke environment.

```json

src/config
├── app
│   ├── config.module.ts
│   ├── config.service.ts
│   └── configuration.ts
├── cache
│   ├── config.module.ts
│   ├── config.service.ts
│   └── configuration.ts
├── database
│   ├── mongo
│   │   ├── config.module.ts
│   │   ├── config.service.ts
│   │   └── configuration.ts
│   ├── mysql
│   │   └── [...]
│   └── postgres
│       └── [...]
├── queue
│   └── [...]
├── session
│   └── [...]
└── storage
    └── [...]

```

Catatan: Di sini [...] artinya sama dengan folder konfigurasi lainnya.

 Anda dapat melihat betapa unik & umum strukturnya.  Hal ini memudahkan pengembang lain yang mungkin baru mengenal proyek ini untuk dengan cepat memahami fungsi setiap file hanya dengan melihat struktur direktori.

 Anda dapat membaca lebih lanjut tentang cara kerja semua file di config dengan melihat postingan saya yang lain: [Membuat File Config di NestJS.](https://medium.com/the-crowdlinker-chronicle/creating-config-files-in-nestjs-dcd059ae15e4)