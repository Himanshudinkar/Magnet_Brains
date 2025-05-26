import axios from "axios";
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useDispatch } from "react-redux"
import { addtocart } from "../cartSlice"
import { MdShoppingBag } from "react-icons/md"
import { FaStar } from "react-icons/fa"

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = async () => {
    const api = "http://localhost:8080/ecommerce/displayproduct"
    try {
      const response = await axios.get(api)
      setMydata(response.data);
    } catch (error) {
      console.log(error.response.data.msg1)
    }
  };

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
    <div className="home-container">
  
      <div className="cover-section">
        <MdShoppingBag className="cover-icon" />
        <h1 className="cover-title">Explore Our Latest Collection</h1>
        <p className="cover-subtitle">Premium timepieces crafted for you</p>
      </div>

      
      <div className="card-grid">
        {mydata.map((item) => (
          <Card className="product-card" key={item._id}>
            <Card.Img
              variant="top"
              src={`http://localhost:8080/uploads/${item.image}`}
              alt={item.name}
              className="product-img"
            />
            <Card.Body>
              <Card.Title className="product-name">
                {item.name} <FaStar className="star-icon" />
              </Card.Title>
              <Card.Text className="product-desc">{item.description}</Card.Text>
              <div className="product-meta">
                <p><strong>Brand:</strong> {item.brand}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
              </div>
              <Button
                variant="info"
                className="add-btn"
                onClick={() =>
                  dispatch(
                    addtocart({
                      id: item._id,
                      name: item.name,
                      description: item.description,
                      brand: item.brand,
                      price: item.price,
                      image: item.image,
                      qunty: 1,
                    })
                  )
                }
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </>
  )
}

export default Home