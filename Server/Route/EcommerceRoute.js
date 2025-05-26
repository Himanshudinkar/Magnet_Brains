const express = require("express")
const route = express.Router();
const EcommerceController = require("../Controllers/EcommereCntroller")

route.get("/displayproduct",EcommerceController.displayproduct)

module.exports = route