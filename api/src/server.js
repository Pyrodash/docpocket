const fastify = require('fastify')({
    logger: true
})
  
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/doctdb')
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

fastify.register(require('fastify-jwt'), {
    secret: "test@#$%" // use .env
})

const path = require('path')
const AutoLoad = require('fastify-autoload')

fastify.register(require('./database'))
fastify.register(require('./middleware/auth_middleware'));
fastify.register(require('./router/authRouter.js'))
/*
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
fastify.listen(8000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`Docpocket API listening on ${address}`)
}); 
