const mongoose = require('mongoose');
// const Signup = require("./signup");
const productSchema = new mongoose.Schema({
    name : {type : String,required : true},
    company : {type : String,required : true},
    address: {type : String,required : true},
    price : {type : Number,required : true},
    discount : {type:Number,required : true},
    rating : {type:Number,required : true},
    manufacturer : {type : String,required : true},
    image: {type : String,required : true},
    category: {type : String,required : true},
    description : {type: String,required : true},
    subcategory: {type : String,required : true},
},{
    versionKey:false,
    timestamps:true
})

// product model

const Product = mongoose.model("glosseryproduct",productSchema);
module.exports = Product;