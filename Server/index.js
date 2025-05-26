const express = require("express")
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
const path = require("path");
const { config } = require("dotenv");
const Adminroute = require("./Route/AdminRoute")
const EcommerceRoute = require("./Route/EcommerceRoute")
const PaymentRoute = require("./Route/Payment")
require("dotenv").config()

mongoose.connect(process.env.DB_CON)
.then(()=>{
    console.log("DB Connected")
})
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use("/uploads"  , express.static("uploads"))

app.use("/admin",Adminroute)
app.use("/ecommerce",EcommerceRoute)
app.use("/payment",PaymentRoute)


const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("server on")
})
