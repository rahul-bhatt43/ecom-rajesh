import React, { useEffect, useState } from 'react'
import './TopSelling.css'
import data from '../../components/data/Data'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function TopSelling({addToCart}) {
  const [topSelling,setTopSelling]= useState([...data])
 
  useEffect(()=>{
    const FilterTopSell = topSelling.filter(pro=>pro.topproduct==='top-selling')
    console.log('topsel',FilterTopSell)
    setTopSelling(FilterTopSell)
},[])
  return (
    <div className='top-Wrapper'>
         <h1 className='top-Heading'>Top Selling Products</h1>
        <div className='top-Container'>

            {
                topSelling.map((item,index)=>{
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
                            <div className='top-Card-Rating'>
                                <p>rating :</p>
                                   <ReactStars
                                    count={5}
                                    value={item.rating.rate}
                                    edit={false}
                                    size={20}
                                    activeColor="#ffd700"
                                    />
                                <span className='top-Card-Rating-Rate'>{item.rating.rate}</span>
                            </div> 
                            <div className="top-Card-Price">
                               <p className='top-Cart-Price-Product'>{item.topproduct}</p>
                               <p className='top-Card-Price-Color'>price: $ <span>{item.price}</span></p>
                            </div>
                            <div className='top-Card-Btn'>
                                 <button onClick={()=>addToCart(item)}>Add To Cart</button>
                            </div>   
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default TopSelling