## Mails ✉️

Folder mails hanya akan berisi konten yang akan digunakan di mailer Anda.

```bash

src/mails
└── verification
    └── content.ts

```

File `data.ts` ini hanyalah fungsi yang mengembalikan konten string untuk email Anda.

Something like:

```javascript
const content = (firstName: string, verificationLink: string): string => {
  return `Hello ${firstName}, <br><br> Please verify your <a href="${verificationLink}">account</a>. Thanks!`
}

```
