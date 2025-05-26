import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FaCartShopping } from "react-icons/fa6"
import { BsWatch } from "react-icons/bs"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../css/TopNav.css"

const TopNav = () => {
  const product = useSelector((state) => state.mycart.cart)
  const proLength = product.length
  const navigate = useNavigate()

  return (
    <>
    <Navbar bg="dark" variant="dark" className="top-navbar">
      <Container>
        <div className="brand-section">
          <BsWatch className="brand-icon" />
          <Navbar.Brand className="brand-text">TimeZone Watches</Navbar.Brand>
        </div>
        <Nav className="ms-auto nav-right">
          <div className="cart-wrapper" onClick={() => navigate("/cartdata")}>
            <FaCartShopping className="cart-icon" />
            {proLength > 0 && <span className="cart-count">{proLength}</span>}
          </div>
        </Nav>
      </Container>
    </Navbar>
</>
  )
}

export default TopNav
