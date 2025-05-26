import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () =>{
    
    return(
        <>
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ADMIN </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/dashboard/addproduct"}>Add Product</Nav.Link>
            <Nav.Link as={Link} to={"/dashboard/order"}>All Order</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>

     
     <main>
        <Outlet/>
     </main>


        </>
    )
}


export default Dashboard