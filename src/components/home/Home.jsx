import React from 'react'
// import Products from '../products/Products'
// import Slider from '../slider/Slider'
import Footer from '../footer/Footer'
import Slider from '../slider/Slider'
import Product from '../product/Product'
// import Product from '../product/Product'
// import { useState } from 'react'
// import Cart from '../../pages/cart/Cart'



function Home({addTocart}) {
   
  return (
    <div>
         <Slider></Slider>
         <h1 style={{ color: 'blue', fontSize: '50px', textAlign: 'center' }}>
          Top Selling Products
         </h1>
        {/* <Products  addTocart={addTocart}></Products>  */}
        <Product addToCart={addTocart}></Product>
        

        <Footer></Footer>   
    </div>
  )
}

export default Home