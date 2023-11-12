## Models 💾

Model hanya akan menjadi folder induk yang berisi semua data terkait model.

```json
src/models
├── addresses
│   ├── entities
│   │   └── address.entity.ts
│   ├── interfaces
│   │   └── address.interface.ts
│   ├── serializers
│   │   └── address.serializer.ts
│   ├── addressess.controller.ts
│   ├── addresses.module.ts
│   ├── addresses.repository.ts
│   └── addresses.service.ts
└── users
    ├── entities
    │   └── user.entity.ts
    ├── interfaces
    │   └── user.interface.ts
    ├── serializers
    │   └── user.serializer.ts
    ├── users.controller.ts
    ├── users.module.ts
    ├── users.repository.ts
    └── users.service.ts
```

Untuk mengetahui apa saja isi dari masing-masing file, silahkan baca postingan saya yang lain: [Cara Terbaik Menginjeksi Repositori menggunakan TypeORM (NestJS).](https://medium.com/the-crowdlinker-chronicle/best-way-to-inject-repositories-using-typeorm-nestjs-e134c3dbf53c)