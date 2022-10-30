const mongoose = require('mongoose');


const publiSchema =new mongoose.Schema({
    name:String,
   headQuarter:String

},{timestamps:true})

module.exports= mongoose.model("NewPubli",publiSchema);
