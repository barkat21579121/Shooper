import React, { createContext } from "react";
import all_product from '../components/Assets/all_product';


export const ShopContext = createContext(null);
const ShopContextProvider =({children})=>{
    const contextValue ={all_product}
    // console.log(contextValue)
    return <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
}
export default ShopContextProvider;