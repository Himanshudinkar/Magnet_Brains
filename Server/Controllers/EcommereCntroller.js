const ProductModel = require("../Models/ProductModel")

const displayproduct = async (req,res) =>{

    try {
        const data = await ProductModel.find();
        res.status(202).send(data)
    } catch (error) {
        console.log("database not respond")
    }
   
}

module.exports = {
    displayproduct
}