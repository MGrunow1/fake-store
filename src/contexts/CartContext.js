import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const addToCart = (newItem) => {
        const itemIndex = cart.findIndex(item => item.id === newItem.id);
        // check whether cart already has some of this type
        if (itemIndex === -1) {
            // add to cart list
            setCart(cart.concat(newItem));
            } else {
                // add number to quantity already there
                changeQuantityAtIndex(itemIndex, cart[itemIndex].quantity + newItem.quantity);
            }
    }
    
    const changeCartItemQuantity = (itemID, newQuantity) => {
        const itemIndex = cart.findIndex(item => item.id === itemID);
        if(itemIndex !== -1) {
        changeQuantityAtIndex(itemIndex, newQuantity);
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const deleteFromCart = (itemID) => {
        setCart(cart.filter(item => item.id !== itemID));
    }

    const changeQuantityAtIndex = (index, newQuantity) => {
        if(newQuantity > 0) {
            const newElement = cart[index];
            newElement.quantity = newQuantity;
            setCart(cart.slice(0,index).concat(newElement).concat(cart.slice(index+1, cart.length)));
        } else {
            // if quantity hits zero, delete the item
            deleteFromCart(cart[index].id);
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart, deleteFromCart, changeCartItemQuantity, clearCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };
