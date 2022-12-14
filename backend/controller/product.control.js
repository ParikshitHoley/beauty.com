
const { request } = require('express');
const express = require('express');
const router = express.Router();
const Product = require("../model/product.model")
// const auth = require("../middleware/auth")
router.post("/",async(req,res)=>{
    try{
       
        const product = await Product.create(req.body);
        return res.status(200).send(product)

    }
    catch(e)
    {
        return res.status(400).send(e.message);

    }
})

router.get("/",async(req,res)=>{
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 8;
        const skip = (page-1)*size;

       const product= await Product.find().skip(skip).limit(size).lean().exec();

    //    const totalpages = Math.ceil((await Product.find().countDocuments())/size)
       return res.status(200).send(product)
    }
    catch(e)
    {
        return res.status(400).send(e.message)
    }
})

//------------------------------filter--------------------

router.get("/:value",async(req,res)=>{
    try{
        const val = req.params.value;
            const product= await Product.find({price:{$lt:val}}).sort({price:-1}).lean().exec();
            return res.status(200).send(product) 
    }
    catch(e)
    {
        return res.status(400).send(e.message)
    }
})

//-----------------------------end-------------------------

//------------------------categorystart--------------------
router.get("/category/:value",async(req,res)=>{
    try{
        const val = req.params.value;
        if(val === "category")
        {
            const product= await Product.find().lean().exec();
            return res.status(200).send(product)  
        }
        else{
            const product= await Product.find({category:val}).lean().exec();
            return res.status(200).send(product) 
        }
    
    }
    catch(e)
    {
        return res.status(400).send(e.message)
    }
})

//------------------------categoryend--------------------

router.get("/search/:query",async(req,res)=>{
    try{
        // const text = req.params.query;
        var regex = new RegExp(req.params.query,"i")
       const product= await Product.find({$or:[{name:regex}]})
       return res.status(200).send(product)
    }
    catch(e)
    {
        return res.status(400).send(e.message)
    }
})
router.get("/single/:id",async(req,res)=>{
    try{
        const id = req.params.id;
       const product= await Product.findOne({_id:id}).lean().exec();
       return res.status(200).send(product)
    }
    catch(e)
    {
        return res.status(400).send(e.message)
    }
})

module.exports= router;