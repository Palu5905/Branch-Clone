const productREQ = require("../models/productSchema")

const product = async function (req, res) {
    const { name, category, price } = req.body
    if (!name || !category || !price) {
        return res.send("All Category Are is Most Importent")
    }
    const producatData = await productREQ.create({ name, category, price })
    res.send({ Mass: producatData })

}

module.exports.product = product

