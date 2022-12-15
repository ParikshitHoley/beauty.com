var jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken=async(token)=>{
    return new Promise((resolve, reject)=>{
        const ans = jwt.verify(token,process.env.TOKEN , function(err, decoded) {
            if(err) return reject(err);
            return resolve(decoded)
          });
    })
}


const auth =async(req,res,next)=>{

    if(!req.headers.authorization)
    {
        return res.status(100).send("user-not authorised")
    }
    if(!req.headers.authorization.startsWith("Bearer "))
    {
        return res.status(100).send("dont try this")
    }
    let token = req.headers.authorization.split(" ")[1];
    let decoded;
    try{
         decoded = await verifyToken(token)
         
    }   
    catch(e)
    {
        return res.status(400).send(e.message)
    }
    return next();
    




}

module.exports =auth;