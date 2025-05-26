const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:String,
    description:String,
    brand:String,
    category:String,
    price:Number,
    image:String
})

module.exports = mongoose.model("product", ProductSchema)