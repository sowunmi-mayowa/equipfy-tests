const Equipment = require("../models/equipmentsModel")
const mongoose = require("mongoose")

const getEquipments = async(req, res) => {
    const equipment = await Equipment.find({}).sort({createdAt: -1})
    res.status(200).json(equipment)
}

const getEquipment = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: "Equipment not found"})
    }

    const equipment = await Equipment.findById(id)

    if(!equipment){
        return res.status(404).json({mssg: "Equipment not found"})
    }
    
    res.status(200).json({equipment})

}

const createEquipments = async(req, res) => {
    const {category, price, name, location, imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8} = req.body

    try{
        const equipment = await Equipment.create({category, price, name, location, imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8})
        res.status(200).json({equipment})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getEquipmentsCategory = async(req, res) => {
    const type = req.params.type

    try{
        const category = await Equipment.find({category: type})
        res.status(200).json(category)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getEquipmentsByName = async (req, res) => {
    const { name } = req.params
    console.log("equipment name is ", name)
    
    try{
        const equipment = await Equipment.find({ name: { $regex: new RegExp(name, 'i') } })

        if(!equipment || equipment.length === 0){
            return res.status(404).json({ mssg: 'No equipment found' });
        }

        res.status(200).json(equipment)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const getEquipmentsByHours = async (req, res) => {
    
    const { min, max } = req.params
    try{
        
        const equipments = await Equipment.find({
            hours: { $gte: parseInt(min), $lte: parseInt(max) },
        });
        res.json(equipments)
    }
    catch(error){
        res.status(400).json({mssg: error.message})
    }
}

const getEquipmentsByPrices = async (req, res) => {
    const {min, max} = req.params;
    console.log(min, max)

    try{
        const equipments = await Equipment.find({
            price: { $gte: parseInt(min), $lte: parseInt(max) },
        })
        res.status(200).json(equipments)
    }
    catch(error){
        res.status(404).json({mssg: error.message})
    }
}

module.exports = {
    getEquipments,
    createEquipments,
    getEquipment,
    getEquipmentsCategory,
    getEquipmentsByName,
    getEquipmentsByHours,
    getEquipmentsByPrices
}