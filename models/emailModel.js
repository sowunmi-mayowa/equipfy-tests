const mongoose = require("mongoose");

const Schema = mongoose.Schema

const emailSchema = new Schema({
    email: {
        required: true,
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('email', emailSchema)