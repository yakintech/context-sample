import { createContext, useEffect, useState } from "react";
import { cartStorageHelper } from "../utils/cartStorageHelper";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    //Global state
     const [cart, setcart] = useState([]);

     const addToCartItem = (product) => {
        let productCheck = cart.find(p => p.id === product.id)

        if (productCheck) {
            productCheck.quantity += 1
            setcart([...cart])
            cartStorageHelper.setCart([...cart])
        }
        else {
            let cartItem = {
                id: product.id,
                name: product.name,
                quantity: 1,
                unitPrice: product.unitPrice,
           }

            setcart([...cart, cartItem])
            cartStorageHelper.setCart([...cart, cartItem])
        }
     }

     useEffect(() => {
       
        const cart = cartStorageHelper.getCart();
        if(cart){
            setcart(cart);
        }
       
     }, [])
     

    return <CartContext.Provider value={{cart,setcart,addToCartItem}}>
        {children}
    </CartContext.Provider>
}
