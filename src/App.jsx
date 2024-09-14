
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import Cart from './components/cart/Cart'

import Products from './components/products/Products';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import ProductDetails from './components/productDetails/ProductDetails';
import data from './components/data/Data';
import Cloths from './components/filterProducts/Cloths';
import Electronics from './components/filterProducts/Electronics';
import Furnitures from './components/filterProducts/Furnitures';
import Miscellaneous from './components/filterProducts/Miscellaneous';
import Shoes from './components/filterProducts/Shoes';


function App() {
  const [dataProduct, setDataProduct] = useState([...data]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    setLoading(false); 
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('oldproduct'));
    if (storedItems) {
      setCart(storedItems);
    }
  }, []);

  const addTocart = (item) => {
   
    const existing = cart.find(obj => obj.id === item.id);
    if (existing) {
      const updateCart = cart.map(items =>
        items.id === item.id
          ? { ...items, quantity: items.quantity + 1, totalPrice: (items.quantity + 1) * items.price }
          : items,
      );
      localStorage.setItem('oldproduct', JSON.stringify(updateCart));
      setCart(updateCart);
    } else {
      const elseCart = [...cart, { ...item, quantity: 1, totalPrice: item.price }];
      localStorage.setItem('oldproduct', JSON.stringify(elseCart));
      setCart(elseCart);
  }

  };

  const inc = (item) => {
    const incItem = cart.map(items =>
      items.id === item.id
        ? { ...items, quantity: items.quantity + 1, totalPrice: (items.quantity + 1) * items.price }
        : items
    );
    localStorage.setItem('oldproduct', JSON.stringify(incItem));
    setCart(incItem);
  };

  const dec = (item) => {
    if(item.quantity>0){
    const decItem = cart.map(items =>
      items.id === item.id
        ? { ...items, quantity: items.quantity - 1, totalPrice: (items.quantity - 1) * items.price }
        : items
    );
    localStorage.setItem('oldproduct', JSON.stringify(decItem));
    setCart(decItem);
  }
  };

  const remove = (item) => {
    const removeLocalItem = JSON.parse(localStorage.getItem('oldproduct'));
    const removeItem = removeLocalItem.filter((obj) => obj.id !== item.id);
    localStorage.setItem('oldproduct', JSON.stringify(removeItem));
    setCart(removeItem);
  };

  const total = cart.reduce((sum, current) => sum + current.totalPrice, 0);

  if (loading) return null; 

  return (
    <div>
<Router basename='/e-com'>
<NavBar user={user} cart={cart} />
<Routes>
 <Route path="/" element={user ? <Home addTocart={addTocart} /> : <Navigate to="/signup" />} />
          <Route path="/products" element={user ? <Products addTocart={addTocart} dataProduct={dataProduct} /> : <Navigate to="/signup" />} />
          <Route path="/cart" element={user ? <Cart total={total} remove={remove} dec={dec} inc={inc} cart={cart} /> : <Navigate to="/signup" />} />
  <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/search/:term" element={<Search addTocart={addTocart} />} />
  <Route path="/signup" element={<Signup />} />
          <Route path="/pro/:id" element={<ProductDetails addTocart={addTocart} />} />
          <Route path="/product-1/:id" element={<ProductDetails addTocart={addTocart} />} />
          <Route path='/cloths' element={user ?<Cloths addTocart={addTocart} ></Cloths> : <Navigate to="/signup" />} ></Route>
          <Route path='/electronics' element={user ? <Electronics addTocart={addTocart } ></Electronics> : <Navigate to="/signup" />}></Route>
          <Route path='/furnitures' element={user ? <Furnitures addTocart={addTocart} ></Furnitures> : <Navigate to="/signup" /> }></Route>
          <Route path='/shoes' element={user ? <Shoes addTocart={addTocart} ></Shoes> : <Navigate to="/signup" />}></Route>
          <Route path='/miscell' element={user ? <Miscellaneous addTocart={addTocart} ></Miscellaneous> : <Navigate to="/signup" />}></Route>
</Routes>
</Router>
    </div>
  );
}

export default App;




