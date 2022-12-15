const express = require("express");
const Signup = require("../model/signup");
const router = express.Router();

var jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken=(user)=>{
    return jwt.sign({user}, process.env.TOKEN);

}

router.post("/", async(req,res)=>{
    try{
        const login = await Signup.findOne({email:req.body.email});
        if(!login){return res.status(100).send({error:true,message :"user not exist"});}
       const match = login.checkPassword(req.body.password)
            if(match){
                const token = generateToken(login);
                res.status(200).send({login,token,error:false})
            }
            if(!match)return res.status(100).send({error:true,message :"wrong password"})


    }
    catch(e)
    {
        res.status(400).send({error:true,message:e.message});
    }
})

module.exports= router;