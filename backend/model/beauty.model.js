const mongoose = require('mongoose');
// const Signup = require("./signup");
const beautySchema = new mongoose.Schema({
    category : {type : String,required : true},
    title : {type : String,required : true},
    advisor : {type: String,required : true},
    image : {type: String,required : true},
    description1 : {type: String,required : true},
    description2 : {type: String,required : true}
    
},{
    versionKey:false,
    timestamps:true
})

// product model

const Beauty = mongoose.model("beautyadvice",beautySchema);
module.exports = Beauty;