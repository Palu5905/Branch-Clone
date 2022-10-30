const publisher =require("../models/publisherModel")

const publiData =async function(req,res){
   let requestData =req.body
   let AllData = await publisher.create(requestData)
   res.send({mass:AllData})
}


module.exports.publiData=publiData;
