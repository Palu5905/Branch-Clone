const orderREQ = require("../models/orderSchema")
const producatREQ = require("../models/productSchema")
const userREQ = require("../models/userSchema")
const {isValidObjectId} = require("mongoose") 

const orderRE = async function (req, res) {
    const data = req.body
    const AllOrderData = await orderREQ.create(data)
    res.send({ mass: AllOrderData })
}

const orderAPI = async function (req, res) {
    const AllOrder = await orderREQ.find().populate('userId').populate('productId')
    res.send({ mass: AllOrder })
}

const orderData = async function(req,res){
    const {userId,productId}=req.body

    var headerdata =req.headers['isfreeappuser'];
    headerdata=headerdata.toLowerCase() === "true" ? true : false
    
    if(!userId || !productId){
        return res.send({mass:"userId And producatId is mandatory"})
    }
    if(!isValidObjectId(userId)){
        res.send({mass:"userId not a valid ID"})
    }
    if(!isValidObjectId(productId)){
        res.send({mass:"producatId not a valid ID"})
    }

   const UserData = await userREQ.findById(userId)
   if(!UserData){
    return res.send({mass:"user is not Define"})
   }

   const ProducatData =await producatREQ.findById(productId)
    if(!ProducatData){
    return res.send({mass:"producat ia not Define"})
   }

   if(headerdata){
    const orderData ={
        userId:userId,
        productId:productId,
        amount:0,
        isFreeAppUser:headerdata,
        date:new Date()
    }
    const orders =await orderREQ.create(orderData)
    return res.send({mass:orders})
   }else{
    if(UserData<ProducatData){
        return res.send({mass:"You dont have any Balance"})
    }
     const orderDetatil ={
        userId:userId,
        productId:productId,
        amount:ProducatData.price,
        isFreeAppUser:headerdata,
        date:new Date()
     }
     const orderW =await orderREQ.create(orderDetatil)
     //return res.send({mass:orderW})
     const user =await userREQ.findByIdAndUpdate(userId,{$set:{balance:UserData.balance-ProducatData.price}})
     return res.send({mass:user})
   }
  
}





module.exports.orderData=orderData;
module.exports.orderAPI = orderAPI;
module.exports.orderRE = orderRE;
