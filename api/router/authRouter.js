/*



*/

async function AuthRouter(fastify){
  fastify.post('/api/generateAccessToken', async (req, res) => {
    try {
      const {email, userid, password} = req.body;
      if(!email || !userid || !password) {
        res.status(400).send({error: true, msg: "Missing account details."})
      }

      // check if account information is correct w/ mongodb
      /*
      let userData = await db.query("SELECT email from user where user_id=?", [userid]);
      if(userData && userData.length > 0){

      } idk :/  */

      const token = fastify.jwt.sign({email, userid, password}, {
        expiresIn: '24h' // expiry not required, can be omitted.
      })
      res.status(200).send({token, email})
    } catch (error) {
      throw error;
    }
  })
}


module.exporters = AuthRouter;