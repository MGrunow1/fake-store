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
    
    // mark item as deleted (does not remove)
    const markDeleted = (itemID) => {
        const itemIndex = cart.findIndex(item => item.id === itemID);
        // check whether the item actually is in the cart
        if(itemIndex !== -1) {
            const alteredElement = cart[itemIndex];
            alteredElement.isDeleted = true;
            setCart(cart.slice(0,itemIndex).concat(alteredElement).concat(cart.slice(itemIndex + 1, cart.length)));
        }
    }

    const deleteFromCart = (itemID) => {
        setCart(cart.filter(item => item.id !== itemID));
        console.log(cart)
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
        <CartContext.Provider value={{cart, addToCart, deleteFromCart, changeCartItemQuantity, clearCart, markDeleted}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };
