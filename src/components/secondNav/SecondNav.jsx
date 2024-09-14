import React from 'react'
import './SecondNav.css'
import { Link } from 'react-router-dom'
function SecondNav() {
  return (
    <div className='secondnav-Wrapper'>
         {/* filter section ul */}
       <ul className="filtersection">
         <div className='cloth-Filter-Parent'>
         <Link to={'/products'} className='filtersection-Li'>
         <img  src="https://www.anikdairy.com/images/products/all-products-banner.jpg" alt="" />
         </Link>
         <Link to={'/products'} className='filtersection-Li'>All Products</Link>
       
         </div>
          <div className='cloth-Filter-Parent'> 
           <Link to={'/cloths'} className="filtersection-Li">
            <img src="https://i.imgur.com/QkIa5tT.jpeg"  alt="" />  
           </Link>       
            <Link to={'/cloths'} className="filtersection-Li">Cloths</Link>
          </div>
          
          <div className='cloth-Filter-Parent'> 
            <Link to={'/electronics'} className="filtersection-Li">
            <img src="https://i.imgur.com/ZANVnHE.jpeg"/>
            </Link>
          <Link to={'/electronics'} className="filtersection-Li">Electronics</Link>
          </div>
          <div className='cloth-Filter-Parent'> 
          <Link to={'/furnitures'} className="filtersection-Li">
            <img src="https://i.imgur.com/Qphac99.jpeg"/>
          </Link>  
          <Link to={'/furnitures'} className="filtersection-Li">Furnitures</Link>
          </div>
          <div className='cloth-Filter-Parent'> 
          <Link to={'/shoes'} className="filtersection-Li">
            <img src="https://i.imgur.com/hKcMNJs.jpeg"/>
          </Link>  
          <Link to={'/shoes'} className="filtersection-Li">Shoes</Link>
          </div>
          <div className='cloth-Filter-Parent'> 
          <Link to={'/miscell'} className="filtersection-Li">
           <img src="https://i.imgur.com/BG8J0Fj.jpg"/>
           </Link>
          <Link to={'/miscell'} className="filtersection-Li filter-li">Miscellaneous</Link>
          </div>
        </ul>
    </div>
  )
}

export default SecondNav