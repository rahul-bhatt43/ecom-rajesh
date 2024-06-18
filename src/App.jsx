


import React from 'react'
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom'
import  {  useEffect } from 'react';
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
// import Footer from './components/footer/Footer'
import Cart from './pages/cart/Cart';
import Products from './components/products/Products';
import { useState } from 'react'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ProductDetails from './components/productDetails/ProductDetails';

function App() {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null);
  console.log(cart)

  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const addTocart = (item) => {
    const existing = cart.find(obj => obj.id === item.id)
    if (existing) {
      const updateCart = cart.map(items =>
        items.id === item.id
          ? { ...items, quantity: items.quantity + 1, totalPrice: (items.quantity + 1) * items.price }
          : items
      )
      setCart(updateCart)
    } else {
      setCart([...cart, { ...item, quantity: 1, totalPrice: item.price }])
    }
  }

  const inc = (item) => {
    const incItem = cart.map(items =>
      items.id === item.id
        ? { ...items, quantity: items.quantity + 1, totalPrice: (items.quantity + 1) * items.price }
        : items
    )
    setCart(incItem)
  }

  const dec = (item) => {
    const decItem = cart.map(items =>
      items.id === item.id
        ? { ...items, quantity: items.quantity - 1, totalPrice: (items.quantity - 1) * items.price }
        : items
    )
    setCart(decItem)
  }
  const remove=(item)=>{
    const removeItem= cart.filter((obj)=>obj.id !==item.id)
    setCart(removeItem)
  }
  const total = cart.reduce((sum, current) => sum + current.totalPrice, 0)

  return (
    <div>
      
<Router>
<NavBar user={user} cart={cart} />
<Routes>
 <Route path="/" element={user ? <Home addTocart={addTocart} /> : <Navigate to="/signup" />} />
 <Route path='/products' element={user ?<Products addTocart={addTocart}></Products>:<Navigate to="/signup" />}></Route>
 <Route path="/cart" element={user ? <Cart total={total}remove={remove} dec={dec} inc={inc} cart={cart} /> : <Navigate to="/signup" />} />
  <Route path="/login" element={<Login setUser={setUser} />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/pro/:id" element={<ProductDetails addTocart={addTocart}></ProductDetails>} />
  <Route path="/product-1/:id" element={<ProductDetails addTocart={addTocart}></ProductDetails>} />

  
</Routes>
</Router>

    </div>
  )
}

export default App




