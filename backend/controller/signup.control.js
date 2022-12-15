const express = require('express');
const Signup = require("../model/signup");
const router = express.Router();
var jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken=(user)=>{
    return jwt.sign({user}, process.env.TOKEN);

}
router.post("/", async(req,res)=>{
    try{
        const user =await Signup.findOne({email : req.body.email});
        if(user) return res.status(400).send({message : "user already exist",error:true});
     
        const new_user = await Signup.create(req.body);
        var token = generateToken(new_user)
        res.status(200).send({new_user,token,error:false});

    }
    catch(e){
        res.status(400).send({message : e.message,error:true});
    }
})





module.exports=router