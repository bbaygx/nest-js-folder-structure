Providers 📥

Penyedia pada dasarnya akan menjadi modul inti yang memulai koneksi antara aplikasi & mesin penyedia (misalnya database).

 Saya yakin ini adalah salah satu cara paling sederhana untuk menyusun folder penyedia Anda:

```bash

src/providers
├── cache
│   └── redis
│       └── provider.module.ts
├── database
│   ├── mongo
│   │   └── provider.module.ts
│   ├── mysql
│   │   └── [...]
│   └── postgres
│       └── [...]
├── mail
│   └── smtp
│       └── [...]
└── queue
    └── redis
        └── [...]

```

Catatan: Di sini [...] artinya sama dengan folder konfigurasi lainnya.

 `provider.module.ts` Anda untuk setiap file akan terlihat seperti ini:

```javascript

import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MysqlConfigModule } from '../../../config/database/mysql/config.module';
import { MysqlConfigService } from '../../../config/database/mysql/config.service';@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MysqlConfigModule],
      useFactory: async (mysqlConfigService: MysqlConfigService) => ({
        type: 'mysql' as DatabaseType,
        host: mysqlConfigService.host,
        port: mysqlConfigService.port,
        username: mysqlConfigService.username,
        password: mysqlConfigService.password,
        database: mysqlConfigService.database,
        entities: [
          // ... All MySQL based schemas/entities
        ],
      }),
      inject: [MysqlConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MysqlDatabaseProviderModule {}

```

Perhatikan bagaimana kita mengimpor `MysqlConfigModule` & menyuntikkan `MysqlConfigService` dari folder `src/config/database/mysql`.

 IMO, ini sebersih mungkin.  Anda dapat mencoba membuat kelas dan langsung menyuntikkan kelas dengan menggunakan `useClass` alih-alih `useFactory` tetapi menurut saya itu tidak diperlukan… terutama karena Anda memerlukan nilai variabel lingkungan tersebut untuk diteruskan di sini.
