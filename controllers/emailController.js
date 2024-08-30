const Email = require("../models/emailModel")
const mongoose = require("mongoose")

const postEmail = async(req, res) => {
    const {email} = req.body

    try{
        const emails = await Email.create({email})
        res.status(200).json(emails)
    }
    catch(error){
        res.status(500).json({"error": error.message})
    }
}

module.exports = {postEmail}