const AdminSchema = require("../Models/AdminModel")
const ProductSchema = require("../Models/ProductModel")
const adminlogin = async(req,res) =>{
    const { adminid,password} = req.body;


    try {
        const Admin = await AdminSchema.findOne({adminid:adminid})

        if(!Admin)
        {
            res.status(400).send({msg1:"Admin Id Invalid"})
        }

        if(Admin.password != password)
        {
            res.status(400).send({msg1:"Please Enter Correct Password"})
        }

        res.status(200).send({msg:"Login Succesfully"})
    } catch (error) {
        res.status(400).send({msg1:"Database Not Respond"})
    }
}


const product = async(req,res) =>{
    const {name,description,brand,category,price} = req.body
    const image = req.file.filename
   
const data = await ProductSchema.create({

    name:name,
    description:description,
    brand:brand,
    category:category,
    price:price,
    image:image

})

res.send("okk")
   
}


module.exports = {
    adminlogin,
    product
}
