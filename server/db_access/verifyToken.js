//token middleware
//im headers schauen, ob der token da ist
//bei jeder Route prüfen, ob ein token vorhanden ist
//header ist bei jeder Route dabei, body nicht immer

const jwt = require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    const token = req.headers.token 
    if(token){
        try {
            const jwtPayload = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = jwtPayload.sub
            next()
        } catch (error) {
            res.status(403).send({err: 'Token invalid'}) 
        }
    } else {
        res.status(403).send({err: 'Error, no token'})
    }
    
}

module.exports = {
    verifyToken
}
