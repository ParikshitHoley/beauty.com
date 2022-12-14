const express = require("express");
const router = express.Router();
const Beauty = require("../model/beauty.model");


router.post("/",async(req,res)=>{
    try{
        const data = await Beauty.create(req.body);
        res.status(200).send(data);


    }
    catch(err){
        res.status(404).send(err.message);
    }
})


router.get("/",async(req,res)=>{
    try{
        const data = await Beauty.find().lean().exec();
        res.status(200).send(data);


    }
    catch(err){
        res.status(404).send(err.message);
    }
})


router.get("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await Beauty.find({_id:id}).lean().exec();
        res.status(200).send(data);


    }
    catch(err){
        res.status(404).send(err.message);
    }
})

module.exports = router;