import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartEmpty } from "./cartSlice";

const Success = () => {

     const cartItems = useSelector((state) => state.mycart.cart);
    const dispatch= useDispatch();

     const saveOrder = async () => {
      try {
        await axios.post("http://localhost:8080/payment/saveorder", {
          products: cartItems.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.qunty,
          })),
        });

        console.log("All orders saved successfully");

         dispatch(cartEmpty());
      } catch (error) {
        console.error("Error saving orders:", error.message);
      }
    }


  useEffect(() => {
    saveOrder()
  }, []);


  return (
    <div className="text-center text-dark mt-5">
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default Success;