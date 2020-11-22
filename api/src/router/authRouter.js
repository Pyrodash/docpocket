/*



*/

const argon2 = require('argon2')
const User = require("../models/User")

module.exports = function(fastify, opts, next) {
    fastify.post('/login', async (req, res) => {
        try {
            if (!req.body) {
                req.body = {}
            }

            const { email, password } = req.body

            if(!email || !password) {
                return res.status(400).send()
            }

            const user = await User.findOne({ email }).exec()

            if (!user || !(await argon2.verify(user.password, password))) {
                return res.status(401).send()
            }

            const token = fastify.jwt.sign({ id: user._id })

            res.status(200).send({ token, id: user._id })
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    })

    next()
}