const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const signupSchema = new mongoose.Schema({
    email : {type: "string", required: true, unique : true},
    password : {type: "string", required: true},
    name : {type: "string", required: true}
    
},{
    timestamps:true,
    versionKey: false,
})


signupSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password, this.password);
}
signupSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();

})





const Signup = mongoose.model("signup", signupSchema);

module.exports = Signup;