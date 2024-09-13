import React, { useEffect, useState } from 'react'
import Products from '../products/Products'
import data from '../data/Data'

function Electronics({addTocart}) {
    const [electrProducts, setElectroProducts]= useState([...data])
    useEffect(()=>{
        const filteredProducts = data.filter(product=>product.category==='electronics')
        setElectroProducts(filteredProducts)
        console.log(filteredProducts)
    },[])

  return (
    <div>
       <Products dataProduct={electrProducts} addTocart={addTocart}></Products>


    </div>
  )
}

export default Electronics