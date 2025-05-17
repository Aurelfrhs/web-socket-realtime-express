const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')

    if(!token) return res.status(401).json({message: "Access Denied"})

    jwt.verify(token.split(' ')[1], "XI_PPLG_1_AUREL", (err, user) => {
        if(err) return res.status(401).json({message: "Token Invalid"})
        
        req.user = user

        next()
    }) 
}

module.exports = {
    authenticateJWT
}