import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner } from "react-bootstrap";

const Order = () => {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/payment/order");
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-white"> All Orders</h2>
      
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Products</th>
              <th>Total Price (₹)</th>
              <th>Order Date</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  {order.products.map((p, i) => (
                    <div key={i}>
                      <strong>{p.name}</strong> × {p.quantity} = ₹
                      {p.price * p.quantity}
                    </div>
                  ))}
                </td>
                <td>
                  ₹
                  {order.products.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td>{order.emailid}</td>
              </tr>
            ))}
          </tbody>
        </Table>
     
    </div>
  )
}

export default Order