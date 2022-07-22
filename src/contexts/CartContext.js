import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const addToCart = (itemID, quantity = 1) => {
        //TODO function to add to cart
    }
    
    //TODO function to remove from cart
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };
