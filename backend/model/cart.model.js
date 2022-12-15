const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product : {type: mongoose.Schema.Types.ObjectId, ref :"glosseryproduct", required: true},
    user :{type : mongoose.Schema.Types.ObjectId, ref: "signup" , required: true},
    quantity : {type:"Number", required:true,default:1},
    total : {type : "Number",required : true}

},{
    timestamps:true,
    versionKey:false
})

const Cart = mongoose.model('Cart',cartSchema);

module.exports=Cart;


