const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    adminid:String,
    password:String
})

module.exports= mongoose.model("admin",AdminSchema)
