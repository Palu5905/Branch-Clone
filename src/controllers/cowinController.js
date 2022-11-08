let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

////================================================================
/////// Assignment for Axios 

const districtId = async function (req, res) {
    try {
        let disIDQ = req.query.district_id
        let disIDate = req.query.data

        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${disIDQ}&date=${disIDate}`,
        }

        let FinalResult = await axios(options)
        console.log(FinalResult.data)
        res.status(200).send({ mass: FinalResult.data })
    }
    catch (err) {
        res.status(401).send({ mass: err.message })
    }
}


const weatherInfo = async function (req, res) {
    try {
        let london = req.query.q
        let appCode = req.query.appid

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${appCode}`,
        }
        let weatherResult = await axios(options)
        console.log(weatherResult)
        res.status(200).send({ mass: weatherResult.data })
    }
    catch (err) {
        res.status(401).send({ mass: err.message })
    }
}


const londonTemp =async function(req,res){
    try{
    let temp = req.query.q
    let code =req.query.appid

    var options ={
        method:"get",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${temp}&appid=${code}`,
    }

    let temperature = await axios(options)
    console.log(temperature)
    res.status(200).send({temperature:temperature.data.main.temp}) 
}
catch(err){
    res.status(401).send({mass:err.message})
}
}


const Allmems =async function(req,res){
try{
    var options ={
        method:"get",
        url:`https://api.imgflip.com/get_memes`,
    }
    let Allmem = await axios(options)
    console.log(Allmem)
    res.status(200).send({mass:Allmem.data})
}
catch(err){
    res.status(401).send({mass:err.message})
}
}


const FinalMems =async function(req,res){
    try{
    var teId =req.query.template_id
    var text =req.query.text0
    var text1 =req.query.text1
    var user =req.query.username
    var pass =req.query.password

    var options ={
        method: "post",
        url:`https://api.imgflip.com/caption_image?template_id=${teId}&text0=${text}&text1=${text1}&username=${user}&password=${pass}`,
}
  let crateMems = await axios(options)
  console.log(crateMems)
  res.status(200).send({mass:crateMems.data})
}
catch(err){
    res.status(401).send({mass:err.message})
}
}





module.exports.districtId = districtId;
module.exports.weatherInfo = weatherInfo;
module.exports.londonTemp=londonTemp;
module.exports.Allmems=Allmems;
module.exports.FinalMems=FinalMems;



























module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp