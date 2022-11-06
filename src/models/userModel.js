const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName :String,
    lastName :String,
     mobile:Number,
    emailId:String,
    password:String,
    gender:{
        typeof:String,
        enum: ["male", "female", "LGBTQ"],
    },
     isDeleted:{
         typeof:Boolean,
         default:false
      },
    age:Number,
}, { timestamps: true });

module.exports = mongoose.model('userDetils', userSchema)
