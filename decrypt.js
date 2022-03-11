const crypto = require('crypto')
const fs = require('fs')

const dataToDecrypt = fs.readFileSync('output/encrypted.txt', { encoding: 'utf-8' })
const privateKeyFile = fs.readFileSync('output/private.pem', { encoding: 'utf-8' })
const privateKey = Buffer.from(privateKeyFile)

const decrypt = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(dataToDecrypt, 'base64')
)

fs.writeFileSync('output/decrypted.txt', decrypt.toString('utf-8'), {encoding: 'utf-8'})