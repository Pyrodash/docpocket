require('dotenv').config()

const fastify = require('fastify')({})

const mongoose = require('mongoose')
const User = require('./models/User')

mongoose.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

fastify.register(require('./config/jwt'))

fastify.register(require('./middleware/authMiddleware'));
fastify.register(require('./router/authRouter.js'), { prefix: '/auth' })

/*
const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {

  // loads all our plugins/routes defined in services

  fastify.register(AutoLoad, {
      dir: path.join(__dirname, 'services'),
      options: Object.assign({ prefix: '/api' }, opts)
    })

  next()
}
*/




 // Run the server!
fastify.listen(process.env.API_PORT, '0.0.0.0', function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    console.log(`Docpocket API listening at ${address}`)
})
