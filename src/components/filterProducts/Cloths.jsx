import React, { useEffect, useState } from 'react'
// import Product from '../product/Product'
import Products from '../products/Products'
import data from '../data/Data'

function Cloths({addTocart}) {
 const [clothCart,setClothCart]=useState([...data])
 useEffect(()=>{
    const filterCloths= clothCart.filter((pro,index)=>pro.category==="Clothes")
    
    setClothCart(filterCloths)
    
 },[])
 
  return (
    <div >
        <Products   dataProduct={clothCart}  addTocart={addTocart}></Products>
    </div>
  )
}

export default Cloths
