

import React, { useCallback, useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import data from '../data/Data';
function NavBar({ user, cart }) {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('user');
    localStorage.removeItem('oldproduct'); 
    navigate('/login', { replace: true }); 
    window.location.reload();
  };
 

  const quantityNavbar = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [searchInp, setSearchInp] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [newForId,setNewForId]= useState()
  // console.log("this is filtered data",searchResult)
  // console.log("after search data",searchInp)
  useEffect(()=>{
    if(searchInp){
    const filteredSearch = data.filter((item) =>item.title.toLowerCase().includes(searchInp.toLowerCase()))
    setSearchResult(filteredSearch)
    
    }else if(searchInp===''){
      setSearchResult([])
    }
  },[searchInp])

  const handleClick = useCallback((id) => {
    setNewForId(id);
    navigate(`/search/${id}`); // Use the `id` parameter directly instead of `newForId`
    setSearchInp('')
  }, [navigate]);


  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInp}`);
    setSearchInp("")
  };

  return (
   
    <div className='wrapper'>
      
        <div className='container'>
            <ul className='nav-ul'>
          {/* <div className='logo-parent'> */}
          <Link to={"/"}>
            <img className='logo-img' src="https://media2.giphy.com/media/kzqpRUnyH873DhjD7c/200_d.gif"
              alt="website-Logo" width={50} height={50} />
          </Link>
         {user?
        
          <form className='form-first' onSubmit={submitHandler}>
            <input type="search" placeholder='Search your products here'
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)} />
              
          </form>
          :<></>
        }
          {/* </div> */}
         <div className='logout-cart'> 
              {user ? (
        <>
            <div className='nav-Username-Parent'>
              <span>Welcome ,</span>
              <span className='nav-Username'>{user.email.split('@')[0]}</span>
            </div>
              
              <button className='btn-login' onClick={handleLogout}>Logout</button>
        </>
      ) : (
            <div>
              <Link to="/login">
                <button className='btn-login'>Login</button>
              </Link>
              <Link to="/signup">
                <button className='btn-login'>Signup</button>
              </Link>
            </div>
      )}
       { user?
          <Link to={"/cart"}>
            <li className='length-cart-nav'>
              <span className='length-icon'>
                <i className="fas fa-cart-shopping"></i>
                </span>
              <span className='length-count'>{quantityNavbar}</span>
            </li>
          </Link>
          :<></>
       }
        </div>  
            </ul>

    { user?
       <div>
        <form className='form-up' onSubmit={submitHandler}>
            <input type="text" placeholder='Search your products here'
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)} />
        </form>
        <div className='form-up-search'>
        {
          searchResult.map((item,index)=>{
            return(
              <div key={index} className='form-up-search-Cart'>
                <p onClick={() => handleClick(item.id)} >{item.title}</p>
              </div>
            )
          })
        }
      </div>

        </div>

        :<></>
        
    }  
      </div>
      <div className='search-result'>
        {
          searchResult.map((item,index)=>{
            return(
              <div key={index} className='search-Result-Cart'>
                <p onClick={() => handleClick(item.id)} >{item.title}</p>
   </div>
  )
          })
        }
      </div>
      
     
    </div>

    

  );
}

export default NavBar;







