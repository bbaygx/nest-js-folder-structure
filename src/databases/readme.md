## Database Migrations/Seeders 📤

 Folder `src/database` sangat sederhana:

 ```bash 
    src/database
    ├── factories
    │   ├── addresses
    │   │   └── factory.ts
    │   └── users
    │       └── factory.ts
    ├── migrations
    │   ├── 1590973586541-CreateAddressesTable.ts
    │   └── 1592951122241-CreateUsersTable.ts
    └── seeders
        ├── addresses
        │   ├── seeder.module.ts
        │   └── seeder.service.ts
        └── users
            ├── seeder.module.ts
            └── seeder.service.ts
````

 Saya telah mengatur konfigurasi TypeORM saya untuk menghasilkan migrasi ke folder `src/database/migrations`, Anda dapat melakukan hal yang sama dengan memperbarui kunci migrasi di file ormconfig.js Anda.  Anda dapat membaca lebih lanjut tentangnya di sini.

 Untuk mempelajari lebih lanjut cara kerja `src/database/factories` &  `src/database/migrations`, silakan baca artikel saya yang lain: Seeding Database Menggunakan NestJS [Disini](https://medium.com/the-crowdlinker-chronicle/seeding-databases-using-nestjs-cd6634e8efc5).
 Otentikasi 👨‍💻

 Folder ini mirip dengan folder lain di src/models .  Satu-satunya perbedaan yang Anda temukan di sini adalah penambahan strategi otentikasi yang terlibat.  Anda juga bisa menyimpan strategi di foldernya sendiri.

