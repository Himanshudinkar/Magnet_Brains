import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import AdminLogin from './Pages/AdminLogin'
import Dashboard from './Pages/Dashboard'
import AddProduct from './Pages/AddProduct'
import CartData from './CartData'
import Success from './Success'
import Order from './Pages/Order'

function App() {


  return (
    <>


    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/cartdata' element = {<CartData/>} />
      <Route path='/success' element = {<Success/>}/>
      </Route>

    </Routes>


<Routes>
  <Route path='/admin' element = {<AdminLogin/>}>

  </Route>
</Routes>


<Routes>
  <Route path='/dashboard' element = {<Dashboard/>}>
  <Route index element = {<Order/>} />
  <Route path='/dashboard/addproduct' element = {<AddProduct/>}/>
  <Route path='/dashboard/order' element = {<Order/>}/>
  </Route>
</Routes>
  
  


    </>
  )
}

export default App