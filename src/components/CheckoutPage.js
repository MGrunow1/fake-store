import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext);
    const [totalCost, setTotalCost] = useState(0);

    // add total cost of cart
    useEffect(() => {
        let cost = 0;
        cart.forEach(element => {
            cost += (element.price * element.quantity);
        });
        setTotalCost(cost);
    }, [cart]);
  
    return (
        <>
        <div>Total cost: ${totalCost.toFixed(2)}</div>
        </>
    )
}
