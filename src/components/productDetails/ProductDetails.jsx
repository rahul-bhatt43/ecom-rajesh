
import React, { useEffect, useState } from 'react';
import './ProductsDetails.css';
import { useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import Products from '../products/Products';
import data from '../data/Data';
function ProductDetail({ addTocart }) {
  const location = useLocation();
  const product = location.state.product;
  const [relatedPro,setRelatedpro]= useState([])
  console.log(relatedPro)
  
  useEffect(() => {
    const filterRelated= data.filter((item)=>item.category===product.category)
    setRelatedpro(filterRelated)
    // console.log(filterRelated)
  },[product.category])
  

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
    <div className='productdetail-container'>
      <div className='productdetail-img'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='second-div'>
        <h3 className='second-Title'>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className='product-price'>Price: <span>${product.price}</span> </p>
        <p className='product-category'>Category: <span>{product.category}</span> </p>
        <div className='product-rating'>
          <p>rating : </p>
          <ReactStars
            count={5}
            value={product.rating.rate}
            edit={false}
            size={40}
            activeColor="#ffd700"
          />
          <p>{product.rating.rate}</p>
          <span>({product.rating.count} reviews)</span>
        </div>
        <button className='productdetail-btn' onClick={() => addTocart(product)}>Add To Cart</button>
      </div>
    

    </div>
     <h2 className='related-Product'>Related Products</h2>
    <Products dataProduct={relatedPro} addTocart={addTocart}
    onClick={scrollToTop} ></Products>
    </div>
  );
}

export default ProductDetail;
