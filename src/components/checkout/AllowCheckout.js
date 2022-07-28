import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Navigate } from "react-router-dom";
export default function AllowCheckout(props) {
    const { cart } = useContext(CartContext);

    // show checkout if cart is not empty
    // if cart is empty, redirect to products
    if(cart.length > 0) {
        return props.children;
    } else {
        return <Navigate to="/products" />
    }
}
