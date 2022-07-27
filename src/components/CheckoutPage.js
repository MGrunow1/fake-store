import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CheckoutItem from "./CheckoutItem";
import { CenteredTitle } from "./StyledComponents";

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
        <CenteredTitle>Checkout</CenteredTitle>
        <div>
            {cart.length ? (
                cart.map((item, index) => (
                    <div key={index}>
                        <CheckoutItem item={item} />
                    </div>
                    ))
            ) : (
                <div style={{textAlign: "center", fontWeight: "bold"}}>
                    Nothing to checkout.
                </div>
            )}
        </div>
        <div style={{textAlign: "center", fontWeight: "bold"}}>
            Total cost: ${totalCost.toFixed(2)}
        </div>
        </>
    )
}
