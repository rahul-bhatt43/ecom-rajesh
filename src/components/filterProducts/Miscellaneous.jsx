import React, { useEffect, useState } from 'react'
import Products from '../products/Products'
import data from '../data/Data'

function Miscellaneous({addTocart}) {
 const [miscellCart,setMiscell]=useState([...data])
 console.log( 'missel',miscellCart)
 
 useEffect(()=>{
    const filterMiscell= miscellCart.filter((pro,index)=>pro.category==="Miscellaneous")
    
    setMiscell(filterMiscell)
    
 },[])
 
  return (
    <div >
        <Products   dataProduct={miscellCart}  addTocart={addTocart}></Products>
    </div>
  )
}

export default Miscellaneous