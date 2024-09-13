import React, { useEffect, useState } from "react";
import "./Cart.css";


function Cart({ cart, inc, dec, total,remove }) {
  const quantityNavbar = cart.reduce((sum, item) => sum + item.quantity, 0);
 const [height,setHeight]= useState(false)
 const [forTotalAmount,setForTotalAmount] =useState(true)
 const [quant,setQuant] =useState([])
 console.log('quantity',quant)
  
  useEffect(() => {
    const filteredCart = cart.filter((pro) => pro.quantity > 0);
    setQuant(filteredCart);
  }, [cart]); 
 
 useEffect(()=>{
   if(quantityNavbar===0){
        setHeight(true)
        setForTotalAmount(false)
   }
   else{
    <></>
   }
 },[quantityNavbar])
  return (
  <div className="cart-All-Parent">
    
    <div className="pro-container">
  
      <div className="wrapper-container">
        {quant.map((item, index) => {
          return (
           
              <div className="pro-children" key={index}>
               
                <div className="img-cart-parent">
                  <img className="cart-img" src={item.image} alt="" />
                  <p className="cart-title">{item.title} </p>
                </div>
                
               
                  <p className="cart-price"> Price: {item.price}</p>
               
                <div className="cart-btn">
                  <button className="btn" onClick={() => inc(item)}>+</button>
                  <p> {item.quantity}</p>
                  <button className="btn" onClick={() => dec(item)}>-</button>
                </div>
              </div>
               
          );
        })}
        
    
      </div>
        
      <div className="total-amount-parent" >
          
          {quant.map((item, index) => {
            
            return (
              
            <div className="total-amount-c-parent ">
              <div className="total-amount-c"  >
                <img className="total-img" src={item.image} alt="" />
                
                <p className="pading"> <button className="btn" onClick={()=>dec(item)}>-</button>{item.quantity}
                <button className="btn" onClick={()=>inc(item)}>+</button></p>
                
                <button className="btn-cart" onClick={()=>remove(item)}>remove</button>
              </div>
            </div>  
            );
            
          })}
       { forTotalAmount?
          <div className="cart-totoal-item-parent" >
             <div className="cart-total-item" >
            <p className="total-item">Total Items</p>
             <p className="total-amount">{quantityNavbar}</p>
          </div>
          <div className="cart-total-amount" >
            <p className="total-item">Grand Total</p>
            <p className="total-amount">  <span style={{color:"red"}}>$:</span>{total}</p>
          </div>
          <button className="cart-totoal-item-parent-btn" >Buy Now</button>
         </div>
        :null
       }
      </div>
      
         
          
          
    </div>

    
    {height?
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",
      height:"60vh"
    } }>
    <h1 className="cart-empty" > Cart is Empty</h1>
    </div>:<></>
    
  }
  </div>  
    
  );
}

export default Cart;
