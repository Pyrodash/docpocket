const fastifyPlugin = require('fastify-plugin')
const { readFileSync } = require('fs')
const path = require('path')

// configure jwt
module.exports = fastifyPlugin(async (fastify)=>{
    const opts = {}

    if (process.env.JWT_SECRET) {
        opts.secret = process.env.JWT_SECRET
    } else {
        opts.secret = {
            private: readFileSync(path.join(__dirname, '..', 'certs', 'private.key'), 'utf8'),
            public: readFileSync(path.join(__dirname, '..', 'certs', 'public.key'), 'utf8')
        }

        opts.sign = { algorithm: 'RS256' }

        if (process.env.JWT_PASSPHRASE) {
            opts.secret.private = {
                key: opts.secret.private,
                passphrase: process.env.JWT_PASSPHRASE,
            }
        }
    }
    
    fastify.register(require('fastify-jwt'), opts)
})