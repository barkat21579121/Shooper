import React, { createContext,  useState } from "react";
import all_product from "../components/Assets/all_product";
// import Items from "../components/items/items";

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
  console.log("ok",cartItem);
  const getTotalAmount =(()=>{
  let totalAmount=0;
  for (let key in cartItem){
    if(cartItem[key]>0){
      let itemInfo = all_product.find((e)=> e.id === Number(key) )
      totalAmount += itemInfo.new_price* cartItem[key]
    }
  }
return totalAmount;
  })
const GetTotalCart=(()=>{
 let TotalCart =0;
for  (let key in cartItem){
  if(cartItem[key]>0){
    TotalCart += cartItem[key]
  }
}
return TotalCart
})
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log("sss", cartItem);
    // console.log("itemid", itemId);
  };
  //   console.log(setCartItems)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = {GetTotalCart, all_product, cartItem, addToCart, removeFromCart ,getTotalAmount };

  // console.log(contextValue)
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
