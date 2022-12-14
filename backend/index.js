const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors =require("cors");
app.use(cors())
app.use(express.json());



const Productcontrol = require("./controller/product.control")
app.use("/products",Productcontrol);

const Signupcontrol = require("./controller/signup.control");
app.use("/signup",Signupcontrol);

const Logincontrol = require("./controller/login.control");
app.use("/login",Logincontrol);

const Cartcontrol = require("./controller/cart.control");
app.use("/cart",Cartcontrol);

const Beautycontrol = require("./controller/beauty.control");
app.use("/beauty",Beautycontrol)

app.listen(5000,async()=>{
    try{
         await mongoose.connect("mongodb+srv://parikshitpatil:Parikshit123@cluster0.4vt0nwr.mongodb.net/?retryWrites=true&w=majority")
         console.log("done")
    }
    catch(e)
    {
        console.log(e.message)
    }
})