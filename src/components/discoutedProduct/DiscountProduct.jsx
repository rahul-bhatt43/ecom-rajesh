import "./DiscountProduct.css"
import React, { useEffect, useState } from 'react';
import { discountedData } from "../data/Data";
import { Link } from 'react-router-dom';
function DiscountProduct({addTocart}) {
  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    const filterDiscountedProducts = discountedData.filter((item) => {
      return item.discount === "Special Discount" ;
    });

    const discountedPrices = filterDiscountedProducts.map((item) => {
      const discountPercentage = parseFloat(item.discouted.replace("%", "")); 
      const discountedPrice = item.realprice - (item.realprice * (discountPercentage / 100)); 
      return { ...item,price:discountedPrice}; 
    });

    setDiscountedProducts(discountedPrices);
  }, []);

  return (
    <div className='top-Wrapper'>
    <h1 className='top-Heading'>Special Offers</h1>
   <div className='top-Container'>

       {
           discountedProducts.map((item,index)=>{
               return(
                   <div key={index} className='top-Card'>
                       <div className='top-Card-Image'> 
                       <Link to={`/product-1/${item.id}`} state={{ product: item }}>
                              <img src={item.image} alt={item.name} />
                           </Link>
                       </div>   
                       <div className='top-Card-Title'>
                           <h3>{item.title}</h3>
                       </div>  
                       <div className='top-Card-Rating-discount'>
                           <p >{item.discount}</p>        
                           <span className='top-Card-Rating-Rate-discount'>{item.discouted}</span>
                       </div> 
                       <div className="top-Card-Price-discount">
                          <p className='top-Cart-Price-Product-discount'>${item.realprice}</p>
                          <p className='top-Card-Price-Color-discount'> $<span>{item.price}</span></p>
                       </div>
                       <div className='top-Card-Btn'>
                            <button onClick={()=>addTocart(item)}>Add To Cart</button>
                       </div>   
                   </div>
               )
           })
       }
   </div>

</div>
  );
}

export default DiscountProduct;