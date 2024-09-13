import React, { useEffect, useState } from 'react'
import Products from '../products/Products'
import data from '../data/Data'

function Furnitures({addTocart}) {
 const [furnitureCart,setFurniture]=useState([...data])
 console.log('this is furnityre',furnitureCart)
 useEffect(()=>{
    const filterFurniture= furnitureCart.filter((pro,index)=>pro.category==="Furniture")
    
    setFurniture(filterFurniture)
    
 },[])
 
  return (
    <div >
        <Products   dataProduct={furnitureCart}  addTocart={addTocart}></Products>
    </div>
  )
}

export default Furnitures