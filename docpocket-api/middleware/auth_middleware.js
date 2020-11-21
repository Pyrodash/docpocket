/**
* auth middleware decorator
**/

const fastifyPlugin = require('fastify-plugin');


// decorator function intended to verify jwt token from req.
module.exports = fastifyPlugin(async (fastify)=>{
  fastify.decorate('jwtauthentication', async (req, res) => {
    try {
      await req.jwtVerify();
    } catch (error) {
      res.send(error);
    }
  })

});