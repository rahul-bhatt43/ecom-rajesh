// import React, { useState } from "react";
// import './Search.css'

// const product = [
//   {
//     id: 1,
//     title: "jacket",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "t-shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "mens-jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
// ];
// function Search() {
//   const [search, setSearch] = useState("");
//   // console.log(search)
//   const filterSearchData = product
//     .filter((obj) => obj.title.toLowerCase().includes(search))
//     .slice(0, 3);
//   console.log(filterSearchData);
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           name=""
//           id=""
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div>
//         <div>
//           {search ? (
//             filterSearchData.map((item, index) => {
//               return (
//                 <div className="search-parent">
//                   <div className="search-child" key={index}>
//                     <img className="search-img" src={item.image} alt="" />
//                     <h1>{item.title}</h1>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;
import React, { useState } from "react";
import './Search.css';

const product = [
  
    {
    id: 1,
    title: "jacket",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "t-shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "mens-jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },

];

function Search() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  
  React.useEffect(() => {
    const filteredProducts = product.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSuggestions(filteredProducts.slice(0, 5)); 
  }, [search]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="fas fa-search"></i> 
        <ul className={`suggestions ${search.length > 0 ? 'active' : ''}`}>
          {suggestions.length > 0 && (
            <>
              {suggestions.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Search;

