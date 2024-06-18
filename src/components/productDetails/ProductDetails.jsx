// import React, { useState } from 'react';
// import './ProductsDetails.css'
// import { useLocation } from 'react-router-dom';

// function ProductDetail({addTocart}) {
//   const location = useLocation();
//   const product = location.state.product;

//   const [showFullDescription, setShowFullDescription] = useState(false);

// const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
// };


//   return (
//     <div className='productdetail-container'>
//       <div className='productdetail-img'>
//       <img src={product.image} alt={product.title} />
//       </div>
//       <div className='second-div'>
//       <h1>{product.title}</h1>
//       <p  className="product-description">{product.description}</p>
      
//     {/* <p className="product-description">{showFullDescription ? product.description : product.description.substring(100, 10) + "..."}</p> 
//     <button onClick={toggleDescription}>{showFullDescription ? "Hide Description" : "Show Full Description"}</button> */}
//       <p className='product-price'> Price : $ ₹{product.price}</p>
//       <p className='product-category'>Category: {product.category}</p>
//       <p className='product-rating'>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
//       <button className='productdetail-btn' onClick={()=>addTocart(product)}>AddToCart</button>
//       </div>
      
//     </div>
//   );
// }

// export default ProductDetail;



import React, { useState } from 'react';
import './ProductsDetails.css';
import { useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

function ProductDetail({ addTocart }) {
  const location = useLocation();
  const product = location.state.product;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className='productdetail-container'>
      <div className='productdetail-img'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='second-div'>
        <h1>{product.title}</h1>
        <p className="product-description">{product.description}</p>
        {/* <p className="product-description">{showFullDescription ? product.description : product.description.substring(100, 10) + "..."}</p> 
        <button onClick={toggleDescription}>{showFullDescription ? "Hide Description" : "Show Full Description"}</button> */}
        <p className='product-price'>Price: ₹{product.price}</p>
        <p className='product-category'>Category: {product.category}</p>
        <div className='product-rating'>
          <p>rating : {product.rating.rate}</p>
          <ReactStars
            count={5}
            value={product.rating.rate}
            edit={false}
            size={40}
            activeColor="#ffd700"
          />
          <span>({product.rating.count} reviews)</span>
        </div>
        <button className='productdetail-btn' onClick={() => addTocart(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
