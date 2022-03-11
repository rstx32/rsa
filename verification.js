const crypto = require('crypto')
const fs = require('fs')

const publicKey = Buffer.from(fs.readFileSync('output/public.pem', {
    encoding: 'utf-8',
  }))
const signature = Buffer.from(
  fs.readFileSync('output/sign.txt', { encoding: 'utf-8' }),
  'base64'
)
const data = fs.readFileSync('output/data.txt', { encoding: 'utf-8' })
const isVerified = crypto.verify(
  'sha256',
  Buffer.from(data),
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  },
  signature
)

console.log(`is verified? : ${isVerified}`)
