## Jobs 👷‍♂️

Terakhir, folder pekerjaan akan berisi `consumers/providers` antrian Anda.

```bash
src/jobs
├── consumers
│   └── verification-mail
│       └── verification-mail.job.consumer.ts
└── producers
    └── verification-mail
        └── verification-mail.job.producer.ts
```

Hal ini didasarkan pada [teknik antrian default yang disediakan dalam dokumentasi NestJS](https://docs.nestjs.com/techniques/queues) menggunakan paket `nestjs/bull` .

 Karena ini benar-benar dari dokumen, saya berharap Anda benar-benar dapat menghubungkan nama file dengan yang disediakan di dokumen & menemukan solusi Anda sendiri.
