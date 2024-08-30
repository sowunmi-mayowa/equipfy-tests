const express = require("express")
const { postEmail } = require("../controllers/emailController")
const { getEquipments, createEquipments, getEquipment, getEquipmentsCategory, getEquipmentsByName, getEquipmentsByHours, getEquipmentsByPrices } = require("../controllers/equipmentController")

const router = express.Router()

router.get("/", getEquipments)

router.get("/byId/:id", getEquipment)

router.get("/byCategory/:type", getEquipmentsCategory)

router.get("/byName/:name", getEquipmentsByName)

router.get("/byHours/:min/:max", getEquipmentsByHours)

router.get("/byPrice/:min/:max", getEquipmentsByPrices)

router.post("/", createEquipments)

router.post("/email", postEmail)

module.exports = router