Seperti yang Anda lihat, src/common memiliki jumlah direktori terbanyak di sini.  Saya menggunakan folder umum ini untuk mengisinya dengan kelas/file tambahan apa pun yang mungkin biasa digunakan oleh modul lain di aplikasi Anda.

 Tidak banyak yang perlu dijelaskan di sini, kecuali fakta bahwa kami menggunakan dasar-dasar inti NestJS [Baca Ini](https://docs.nestjs.com/custom-decorators) (seperti pelindung, pipa, dekorator) di folder ini & beberapa common constants, interfaces & helpers..


 ```json
 src/common
├── constants
│   └── settings.ts
├── decorators
│   ├── metadata
│   │   └── user-types.decorator.ts
│   ├── requests
│   │   └── logged-in-user.decorator.ts
│   └── validations
│       ├── UserExists.ts
│       └── UniqueUserEmail.ts
├── exceptions
│   └── http-exception.filter.ts
├── guards
│   └── user-types.guard.ts
├── helpers
│   ├── exceptions
│   │   └── validation.helper.ts
│   ├── responses
│   │   ├── error.helper.ts
│   │   └── success.helper.ts
│   ├── number.helper.ts
│   ├── array.helper.ts
│   ├── query.helper.ts
│   ├── request.helper.ts
│   └── string.helper.ts
├── interceptors
│   └── http-cache.interceptor.ts
├── interfaces
│   ├── inputs.interface.ts
│   └── search.interface.ts
├── middleware
│   └── models
│       └── user.middleware.ts
├── pipes
│   ├── models
│   │   └── user-entity.pipe.ts
│   ├── search.pipe.ts
│   └── validation.pipe.ts
└── serializers
    ├── responses
    │   ├── error.serializer.ts
    │   └── success.serializer.ts
    ├── validation
    │   └── validation-error.serializer.ts
    └── model.serializer.ts
 ```


 Satu hal tambahan yang akan Anda lihat di sini adalah folder `src/decorator/validations`.  Folder ini didasarkan pada validasi khusus yang dibuat menggunakan class-validator .

 Anda juga dapat menambahkan folder utils untuk kelas khusus… dalam hal ini, katakanlah kelas logger khusus?  Jadi Anda bisa membuat file di `src/common/utils/logger` 😀.