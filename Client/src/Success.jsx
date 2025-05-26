import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartEmpty } from "./cartSlice";
import { useNavigate } from "react-router-dom";

const Success = () => {

     const cartItems = useSelector((state) => state.mycart.cart);
    const dispatch= useDispatch();

    const navigate = useNavigate();

     const saveOrder = async () => {
      try {
        await axios.post("http://localhost:8080/payment/saveorder", {
          products: cartItems.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.qunty,
          })),
          emailid:localStorage.getItem("emailid")
        });

        console.log("All orders saved successfully");

         dispatch(cartEmpty());
      } catch (error) {
        console.error("Error saving orders:")
      }
    }


  useEffect(() => {
    saveOrder()
  }, []);


  return (
    <div className="text-center text-dark mt-5" style={{padding:"160px"}}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <button style={{backgroundColor:"#0c1f2c",color:"white",padding:"5px",borderRadius:"10px"}} onClick={()=>{navigate("/")}} >BACK TO HOME</button>
    </div>
  );
};

export default Success;