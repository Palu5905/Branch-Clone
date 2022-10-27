const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

////==========================================================

const authorName = async function(req,res){
    let authorData =req.body
    let authorSavaData =await UserModel.create(authorData)
    res.send(authorSavaData);
}



module.exports.authorName=authorName





module.exports.createUser= createUser
module.exports.getUsersData= getUsersData