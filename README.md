# email-base

### 1. email connection configuration
{app_root}/config.[mode].js

```js
module.exports = {
  email: {
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'account@emailhost',
      pass: 'password'
    },
    secureConnection: false,
    tls: {
      ciphers: 'SSLv3'
    }
  }
}
```

### 2. send email as virtual user (e.g. no-reply@hatiolab.com)
1. add member into shared mailbox
2. call sendEmail function with shared mailbox address as sender paramerter    
    (e.g. sendEmail({sender: no-reply@hatiolab.com}) )
