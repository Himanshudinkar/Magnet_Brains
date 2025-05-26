import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { productremove, quntydecrese, quntyincrese } from "./cartSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { use, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./css/CartData.css"
const CartData = () => {
  const product = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  let totalAmount = 0;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email,setEmail] = useState("")

  console.log(email)
  

  const handleCheckout = async () => {
    const stripe = await loadStripe("pk_test_51ROZvjQOYyecGieYq6V9TSPevVTj8BEhomR0lT7sEWLpL74sFHFwuEbuZzAd6t5cy2zNZjOAFz1jOWrBxPTxt6V900uAvOZFHv"); 

    try {
      const response = await axios.post("http://localhost:8080/payment/checkout", {
        items: product.map((item) => ({
          name: item.name,
          quantity: item.qunty,
          price: item.price,
         
        })),
    });

      localStorage.setItem("emailid",email)
      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,

      });

      
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };


  const ans = product.map((item) => {
    totalAmount += item.price * item.qunty;
    return (
      <tr key={item.id}>
        <td>
          <img src={`http://localhost:8080/uploads/${item.image}`} alt={item.name} />
        </td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>₹{item.price}</td>
        <td>
          <FaMinus
            className="icon-btn"
            onClick={() => dispatch(quntydecrese({ id: item.id }))}
          />
          {item.qunty}
          <FaPlus
            className="icon-btn"
            onClick={() => dispatch(quntyincrese({ id: item.id }))}
          />
        </td>
        <td>₹{item.price * item.qunty}</td>
        <td>
          <MdDelete
            className="icon-btn"
            onClick={() => dispatch(productremove({ id: item.id }))}
          />
        </td>
      </tr>
    );
  });

  return (
    <>
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>

      <table className="cart-table">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>BRAND</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>

      <div className="total-amount">Total Amount = ₹{totalAmount}</div>

      <button className="checkout-btn" onClick={handleShow}>Proceed to Checkout</button>
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Email:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" name="email"  placeholder="Enter Your Email" style={{paddingRight:"260px"}} onChange={(e)=>{setEmail(e.target.value)}} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCheckout}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CartData;