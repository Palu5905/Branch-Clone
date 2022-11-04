const mongoose = require('mongoose')
const objectID = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: objectID,
        ref: "user-Data",
    },
    productId: {
        type: objectID,
        ref: "product-Data",
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

module.exports = mongoose.model("order-Data", orderSchema)