const Stripe = require("stripe");
const orderSchema = require("../Models/OrderModel")

require("dotenv").config()
const checkout = async (req,res) =>{

    const stripe = Stripe(process.env.SECRATE_KEY); 
    const { items,emailid } = req.body;

     console.log(req.body)
  
    try {
      const lineItems = items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, 
        },
        quantity: item.quantity,
      }));
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });
  
      res.status(200).json(session); 
    } catch (error) {
      console.error("Stripe Checkout Error:", error);
      res.status(500).json({ error: error.message });
    }
}


const saveorder = async (req,res) =>{

    const { products,emailid } = req.body;

   

    try {
      const processedProducts = products.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      }));
  
      const totalAmount = processedProducts.reduce(
        (acc, item) => acc + item.subtotal,
        0
      );
  
      const order = await orderSchema.create({
        products: processedProducts,
        totalAmount: totalAmount,
        emailid:emailid
      });
  
      res.status(201).json({ msg: "Order saved", order });
    } catch (error) {
      console.error("Order Save Error:", error.message);
      res.status(500).json({ msg: "Failed to save order" });
    }
}

const order = async (req, res) => {
    try {
      const orders = await orderSchema.find().sort({ createdAt: -1 }); 
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Error fetching orders" });
    }
  }





module.exports = {
    checkout,
    saveorder,
    order,

}