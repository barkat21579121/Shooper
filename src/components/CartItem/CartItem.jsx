import React, { useContext } from "react";
import "../CartItem/cartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove from "../Assets/cart_cross_icon.png";


const CartItem = () => {
  const{ all_product, cartItem, removeFromCart ,getTotalAmount} = useContext(ShopContext);
  return (
    <div className="CartItem">
      <div className="cartItem-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div>
                <div className="cart-item-formate cartItem-formate-main">
                  <img src={e.image} className="carticon-product-item" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cart-itemQuantity" >{cartItem[e.id]}</button>
                  <p>${e.new_price*cartItem[e.id]}</p>
                  <img className="cart-remove-btn"
                    src={remove}
                    onClick={() => {
                      removeFromCart(e.id)
                      console.log(cartItem[e.id])
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null
        })}
      </div>
      <div className="cart-item-count">
        <div className="cart-total">
            <h1>Cart Total</h1>
            <div className="cart-total-icons">
                <p>Sub-Total</p>
                <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-icons">
                <p>shipping Fee</p>
                <p>Free</p>
            </div>
            <div className="cart-total-icons">
                <h3>Total </h3>
                <h3>${getTotalAmount()}</h3>
            </div>
            <button>Proceed to checkOut</button>
        </div>
        <div className="cart-item-promo">
          <p> If you have pro Code Enter Here</p> 
          <div className="cart-item-promoBox">
            <input placeholder="PromoCode"/>    
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
