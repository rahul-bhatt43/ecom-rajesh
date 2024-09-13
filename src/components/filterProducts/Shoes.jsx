import React, { useEffect, useState } from 'react'
import Products from '../products/Products'
import data from '../data/Data'

function Shoes({addTocart}) {
 const [shoesCart,setShoesCart]=useState([...data])
 
 useEffect(()=>{
    const filterShoesCart= shoesCart.filter((pro,index)=>pro.category==="Shoes")
    
    setShoesCart(filterShoesCart)
    
 },[])
 
  return (
    <div >
        <Products   dataProduct={shoesCart}  addTocart={addTocart}></Products>
    </div>
  )
}

export default Shoes;