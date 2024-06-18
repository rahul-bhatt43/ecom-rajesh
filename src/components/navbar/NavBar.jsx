import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../search/Search';
import { motion, AnimatePresence } from 'framer-motion';


function NavBar({user,cart}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  };
  const quantityNavbar= cart.reduce((sum,item)=>sum+item.quantity,0)

  return (
    <div className='wrapper'>
        <div className='container'>
            <ul className='nav-ul'>
               <Link to={"/"}>Home</Link> 
              <Link to={'/products'}>Products</Link>
               
              <Link to={"/cart"} >
              <li className='length-cart-nav'>
              <span><img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" /></span> 
               {quantityNavbar}</li>
              
              </Link>
              <Search></Search>

              {user ? (
        <>
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
            </ul>
        </div>


   </div>
  )
}

export default NavBar