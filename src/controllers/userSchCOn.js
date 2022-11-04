const userAllData = require("../models/userSchema")

const userAPI = async function (req, res) {
    const { name, address, balance, gender, age } = req.body
    var freeapp = req.headers['isfreeappuser']

    freeapp = freeapp.toLowerCase() === 'true' ? true : false

    if (!name || !address || !balance || !gender || !age) {
        return res.send({ mass: "All Data are mandatory" })
    }

    const userData = await userAllData.create({ name, address, balance, gender, age })
    res.send({ mass: userData })
}


module.exports.userAPI = userAPI;