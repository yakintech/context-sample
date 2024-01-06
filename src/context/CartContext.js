import { createContext, useEffect, useState } from "react";
import { cartStorageHelper } from "../utils/cartStorageHelper";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    //Global state
     const [cart, setcart] = useState([]);

     useEffect(() => {
       
        const cart = cartStorageHelper.getCart();
        if(cart){
            setcart(cart);
        }
       
     }, [])
     

    return <CartContext.Provider value={{cart,setcart}}>
        {children}
    </CartContext.Provider>
}
