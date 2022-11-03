const mongoose = require("mongoose")


const userSchema =new mongoose.Schema({
    Name: String,
    balance:{
       type:Number,
       default:100
    },
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    age:Number,
    address:String,
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports =mongoose.model('user-Data',userSchema)