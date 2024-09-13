
import React, { useEffect, useState } from 'react'
import Data from '../data/Data'
import { useParams } from 'react-router-dom'
import Products from '../products/Products'
// import data from '../data/Data'

function Search({addTocart}) {
  const  {term} = useParams()
  const termAsNumber = parseFloat(term)
  const [filterSearch,setFilterSearch] =useState([])
  useEffect(()=>{
         const filteredProducts = Data.filter((item) =>item.title.toLowerCase().includes(term.toLowerCase()))
         setFilterSearch(filteredProducts) 
         if(termAsNumber){
            const forId=  Data.filter((item)=>item.id===termAsNumber)
             console.log('id',forId)
            setFilterSearch(forId)
         }
    },[term])
 
    
  return (
   <div>
      <Products dataProduct={filterSearch} addTocart={addTocart}></Products>
      
      
    </div>
  )
}

export default Search;