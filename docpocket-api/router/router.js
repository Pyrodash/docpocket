async function Router(fastify){
    
    fastify.get('/validationRouter', {
        preValidation:[fastify.jwtauthentication]
    }, async(req, res) => {
        res.status(200).send({msg: "Successfully authenticated."})
    })
}