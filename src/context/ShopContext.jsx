import React, { createContext, useContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let Cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    Cart[index] = 0;
  }
  return Cart;
};

const ShopContextProvider = ({ children }) => {


  const [cartItem, setCartItems] = useState(getDefaultCart());
  console.log(cartItem);

  const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]:[itemId] + 1 }));
      console.log("sss",cartItem)
      console.log("itemid",itemId)

  };
//   console.log(setCartItems)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { all_product, cartItem, addToCart, removeFromCart };

  // console.log(contextValue)
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
