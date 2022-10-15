const today = new Date()
const currentDMY =today.getDate() +"-"+ today.getMonth() +"-"+ today.getFullYear();
const currentTime =today.getHours() +"-"+ today.getMinutes() +"-"+ today.getSeconds();

const finalDMYHours =currentDMY +' '+currentTime


const lithium ={
    batch:"lithium",
    week:"W3",
    day:"D5",
   topic:"Lithium W3D5, The topic for today is Nodejs Module system"
}

  const getBatchInfo = function(){
   return lithium;
  }
 getBatchInfo(lithium);
module.exports.finalDMYHours=finalDMYHours;
module.exports.getBatchInfo=getBatchInfo