const fs = require('fs')
const crypto = require('crypto')

// generate rsa pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem',
  },
})

// export public key
fs.writeFileSync('output/public.pem', publicKey, {encoding: 'utf-8'})

// export private key
fs.writeFileSync('output/private.pem', privateKey, {encoding: 'utf-8'})