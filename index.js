const express = require("express");
const cors = require("cors");
const mySql = require("mysql");

const app = express();
app.use(cors())

const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equipments"
})

app.get('/', (req, res) => {
    return res.send("working")
})

app.get("/equipments", (req, res) => {
    const sql = "SELECT * from equipment"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get(`/equipments/:type`, (req, res) => {
    const type = req.params.type
    const sql = "SELECT * from equipment WHERE category=?"
    db.query(sql, [type], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen('8001', () => {
    console.log("listening")
})