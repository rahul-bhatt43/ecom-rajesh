import React from 'react'
import Footer from '../footer/Footer'
import Slider from '../slider/Slider'
import Product from '../product/Product'
import Cloths from '../filterProducts/Cloths'
import SecondNav from '../secondNav/SecondNav'
// import TopSelling from '../../pages/topSelling/TopSelling'
import TopSelling from '../topSelling/TopSelling'
// import CapSection from '../../pages/capSection/CapSection'
import CapSection from '../capSection/CapSection'
// import JwellerySection from '../../pages/jwellerySection/JwellerySection'
import JwellerySection from '../jwellerySection/JwellerySection'
// import DiscountProduct from '../../pages/discoutedProduct/DiscountProduct'
import DiscountProduct from '../discoutedProduct/DiscountProduct'


function Home({addTocart}) {
   
  return (
    <div>
         <SecondNav></SecondNav>
         <Slider></Slider>
         <DiscountProduct addTocart={addTocart}></DiscountProduct>
         <TopSelling addToCart={addTocart}></TopSelling>
         <CapSection addTocart={addTocart}></CapSection>
          <JwellerySection addTocart={addTocart}></JwellerySection>
        <Footer></Footer>   
    </div>
  )
}

export default Home