const mongoose = require('mongoose')


const producatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('product-Data', producatSchema)