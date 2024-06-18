

import React from 'react'

import './Product.css'
import { Link,useNavigate } from 'react-router-dom';

const product = [
  {
    "id": 10,
    "title": "Vasu wife bra",
    "price": 7.95,
    "description": "Feel irresistibly sexy with the Vasu Wife Bra. This exquisite piece is crafted from soft, breathable fabric that caresses your skin, ensuring all-day comfort. The sleek V-neck design highlights your curves, giving you a confident and alluring silhouette. Perfect for any occasion, the Vasu Wife Bra keeps you feeling fresh and seductive from morning till night.",
    "category": "women's clothing",
    "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/bra/4/3/6/non-padded-free-regular-yes-regular-non-padded-bra-mynix-original-imahyjz6jhsk7fmp.jpeg?q=70",
    "rating": {
        "rate": 4.5,
        "count": 146
    }
},

     
    {
        "id": 11,
        "title": "Vasu wife underwear ",
        "price": 12.3,
        "description": "Slip into the Vasu Wife Underwear and discover the ultimate blend of style and comfort. This slim-fit piece is designed to hug your body in all the right places, accentuating your natural curves. The lightweight, breathable fabric feels like a second skin, making you feel effortlessly sexy and confident. Whether it's for everyday wear or a special night, Vasu Wife Underwear is your go-to for a seductive and comfortable experience.",
        "category": "men's clothing",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/panty/d/v/p/l-gplaindr012-l-4-panty-for-girls-new-design-comfortable-wear-original-imagnpee2wvxybjd.jpeg?q=70",
        "rating": {
            "rate": 5,
            "count": 259
        }
    },
    {
        "id": 12,
        "title": "Vasu wife 5 bra pack ",
        "price": 12.3,
        "description": "Unleash your inner goddess with the Vasu Wife 5 Bra Pack. Each bra in this luxurious collection is designed to enhance your curves with a soft, lightweight touch. The breathable fabric ensures you stay comfortable, while the sleek design provides a seductive and confident look. Perfect for any mood or occasion, the Vasu Wife 5 Bra Pack offers versatile elegance that keeps you feeling sexy and empowered every day.",
        "category": "men's clothing",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/bra/c/d/r/lightly-padded-30-3-regular-yes-regular-nightt-sashu-original-imaghxdqa2hremk2.jpeg?q=70",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 13,
        "title": "Intel Laptop ",
        "price": 12.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/0/5/-original-imagvrefuybuvbe5.jpeg?q=70",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 14,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/2/y/l-15647865-try-this-original-imaghvmmbcvspg9e.jpeg?q=70",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 15,
        "title": "Mens Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 16,
        "title": "intel Laptop Ryzon",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/0/5/-original-imagvrefuybuvbe5.jpeg?q=70",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    },
    
    {
      "id": 22,
      "title": "Moto g SmartPhone",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
  },

];

function Product({ addToCart }) {
  // const navigate= useNavigate()
  
  return (
    <div className='product-container'> 
      {
        product.map((item, index) => {
          return (
            <div className='product-card' key={index}> 
              {/* <img src={item.image} alt={item.title} /> */}
              {/* Wrap image in Link to navigate on click */}
          {/* <Link to={`/pro/${item.id}`}> 
            <img src={item.image} alt={item.title} />
           </Link> */}
          <Link to={`/product-1/${item.id}`} state={{ product: item }}>
                <img src={item.image} alt={item.title} />
              </Link>
              <div className='product-details'> 
                <h3>{item.title}</h3>
                <p>
                  <span className='price-tag'>Price: $</span> {item.price}
                </p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Product;
