const mongoose = require("mongoose")

const Schema = mongoose.Schema

const equipmentsSchema = new Schema({
    category: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    hours: {
        required: true,
        type: Number
    },
    location: {
        required: true,
        type: String
    },
    imageUrls: {
        type:[ String],
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('equipments', equipmentsSchema)