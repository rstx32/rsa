const crypto = require('crypto')
const fs = require('fs')

const data = 'restu indera dwihandoko'
const publicKeyFile = fs.readFileSync('output/public.pem', { encoding: 'utf-8' })
const publicKey = Buffer.from(publicKeyFile)
const encrypt = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(data)
)

fs.writeFileSync('output/encrypted.txt', encrypt.toString('base64'), {
  encoding: 'utf-8',
})
