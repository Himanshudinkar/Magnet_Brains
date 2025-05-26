const express = require("express")
const route = express.Router()
const upload = require("../Middleware/Multer")

const AdminController = require("../Controllers/AdminControllers")


route.post("/adminlogin" , AdminController.adminlogin)
route.post("/product",upload.single("image"),AdminController.product)

module.exports = route