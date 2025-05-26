const express = require("express")
const route = express.Router();
const PaymentController = require("../Controllers/PaymentController")

route.post("/checkout",PaymentController.checkout)
route.post("/saveorder",PaymentController.saveorder)
route.get("/order",PaymentController.order)

module.exports = route