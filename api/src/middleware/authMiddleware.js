/**
* auth middleware decorator
**/

const fastifyPlugin = require('fastify-plugin')
const User = require('../models/User')


// decorator function intended to verify jwt token from req.
module.exports = fastifyPlugin((fastify, opts, next) => {
    fastify.decorate('authenticate', async (req, res) => {
        try {
            await req.jwtVerify()

            if (req.user && req.user.id) {
                req.user = await User.findById(req.user.id).exec()
            } else {
                req.user = null
            }
        } catch (error) {
            res.send(error)
        }
    })

    next()
})
