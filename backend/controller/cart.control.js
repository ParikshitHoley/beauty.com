const express = require("express");
const router = express.Router();
const Cart = require("../model/cart.model");
const auth = require("../middleware/auth");

router.post("/",auth,async(req,res)=>{
    try{
        const data = await Cart.create(req.body);
        res.status(200).send(data);


    }
    catch(err){
        res.status(404).send(err.message);
    }
})

router.delete("/:id",auth,async(req,res)=>{
    try{
        const id = req.params.id;
        const cart = await Cart.findByIdAndDelete({_id:id});
        res.status(200).send(cart);
    }
    catch(e)
    {
        return res.status(404).send(e.message)
    }
})

router.get("/:id",auth,async(req,res)=>{
    try{
          const id = req.params.id;
          const cart = await Cart.find({user:id}).populate({path:"product"}).lean().exec();
          const data = cart
          return res.status(200).send(cart);
    }
    catch(e)
    {
        res.status(400).send(e.message)
    }
})

module.exports= router;