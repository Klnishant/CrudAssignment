const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is require"],
        trim:true,
        maxLength:[30,"name must be less than 30 character"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
    },
    password: { 
        type: String,
        required: [true,"Password must be required"],
        maxLength:[8, "Password must be 8 character long"]
    },
})

module.exports = mongoose.model("User", userSchema)