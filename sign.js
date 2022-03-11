const crypto = require('crypto')
const fs = require('fs')

const privateKey = Buffer.from(
  fs.readFileSync('output/private.pem', {
    encoding: 'utf-8',
  })
)
const data = fs.readFileSync('output/data.txt', { encoding: 'utf-8' })
const signature = crypto.sign('sha256', Buffer.from(data), {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
})

fs.writeFileSync('output/sign.txt', signature.toString('base64'), {
  encoding: 'utf-8',
})