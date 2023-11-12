Authentication 👨‍💻

Folder ini mirip dengan folder lain di src/models .  Satu-satunya perbedaan yang Anda temukan di sini adalah penambahan strategi otentikasi yang terlibat.  Anda juga bisa menyimpan strategi di foldernya sendiri.

```json

src/authentication
├── dto
│   └── login.dto.ts
├── interfaces
│   ├── jwt-payload.interface.ts
│   ├── login.interface.ts
│   └── token.interface.ts
├── serializers
│   └── token.serializer.ts
├── auth.controller.ts
├── auth.module.ts
├── auth.service.ts
└── jwt.strategy.ts

```

Semua file di sini berfungsi sesuai dengan tutorial autentikasi yang disediakan dalam dokumentasi NestJS itu sendiri [Teknik Authentication](https://docs.nestjs.com/techniques/authentication).  Tidak ada yang istimewa di sini!  😄
