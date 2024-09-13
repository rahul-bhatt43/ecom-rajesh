import React, { useEffect, useState } from 'react'
import data from '../../components/data/Data'
import Products from '../../components/products/Products'

function CapSection({addTocart}) {
    const [capCart,setCapCart]= useState([])
    useEffect(()=>{
        const filterCap = data.filter((item)=>item.category==="Cap")
        setCapCart(filterCap)
    },[])
  return (
    <div>
        <h2 style={{marginLeft:"110px",marginTop:"60px",marginBottom:"-40px",
            color:"rgba(0, 0, 0, 0.79)"}} > Cap-Section</h2>
        <Products dataProduct={capCart} addTocart={addTocart}></Products>

    </div>
  )
}

export default CapSection