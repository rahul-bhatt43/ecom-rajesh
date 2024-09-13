
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Products from '../products/Products';
import data from '../data/Data';

function RelatedProducts({ addTocart }) {
    const location = useLocation();
    const product = location.state.product;
    const [relatedPro, setRelatedPro] = useState([]);

    useEffect(() => {
        const filterPro = data.filter((item) => item.category === product.category);
        setRelatedPro(filterPro);
    }, [product.category]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className='products-Wrapper'>
                <div className='products-Container'>
                    {
                        relatedPro.map((item, index) => {
                            return (
                                <div key={index} className='products-Card'>
                                    <div className='products-Card-Image'>
                                        <Link to={`/product-1/${item.id}`} state={{ product: item }} onClick={scrollToTop}>
                                            <img src={item.image} alt={item.name} />
                                        </Link>
                                    </div>
                                    <div className='products-Card-Title'>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="products-Card-Price">
                                        <p className='products-Card-Price-Color'>price: <span> $ {item.price}</span></p>
                                    </div>
                                    <div className='products-Card-Btn'>
                                        <button onClick={() => addTocart(item)}>Add To Cart</button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default RelatedProducts;