import React, { useEffect, useState } from 'react'
import data from '../../components/data/Data'
import Products from '../../components/products/Products'

function JwellerySection({addTocart}) {
    const [jwelleryCart,setJwelleryCart]= useState([])
    useEffect(()=>{
        const filterJwellery = data.filter((item)=>item.category==="jewelery")
        setJwelleryCart(filterJwellery)
    },[])
  return (
    <div>
        <h2 style={{marginLeft:"110px",marginTop:"60px",marginBottom:"-40px",
            color:"rgba(0, 0, 0, 0.79)"}} > Jwelery-Section</h2>
        <Products dataProduct={jwelleryCart} addTocart={addTocart}></Products>

    </div>
  )
}

export default JwellerySection;