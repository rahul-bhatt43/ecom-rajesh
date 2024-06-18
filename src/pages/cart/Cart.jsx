import React from "react";
import "./Cart.css";


function Cart({ cart, inc, dec, total,remove }) {
  return (
    <div className="pro-container">
      <div className="wrapper-container">
        {/* <h1>Shoping Cart</h1> */}
        {cart.map((item, index) => {
          return (
            <div className="pro-parent">
              <div className="pro-children" key={index}>
                <div className="img-cart-parent">
                  <img className="cart-img" src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.title} </p>
                </div>
                <div>
                  <p> Price: {item.price}</p>
                </div>
                <div>
                  <p> Qun: {item.quantity}</p>
                </div>
                <div>
                  <button className="btn" onClick={() => inc(item)}>+</button>
                  <button className="btn" onClick={() => dec(item)}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        
          {cart.map((item, index) => {
            return (
            <div className="total-amount-c-parent">
              <div className="total-amount-c" >
                <img className="total-img" src={item.image} alt="" />
                
                <p className="pading"> <button className="btn" onClick={()=>dec(item)}>-</button>{item.quantity}
                <button className="btn" onClick={()=>inc(item)}>+</button></p>
                
                {/* <h3> Total:{total}</h3> */}
                <button className="btn-cart" onClick={()=>remove(item)}>remove</button>
              </div>
            </div>  
            );
          })}
          <h3 className="total-amount"> Grand Total : {total}</h3>
       
      </div>
      
         
          
    </div>
  );
}

export default Cart;
