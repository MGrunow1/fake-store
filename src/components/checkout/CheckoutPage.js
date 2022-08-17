import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CenteredGroup, CenteredTitle} from "../StyledComponents";
import BillingForm from "./BillingForm";
import CheckoutItem from "./CheckoutItem";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext);
    const [totalCost, setTotalCost] = useState(0);

    // add total cost of cart
    useEffect(() => {
        let cost = 0;
        cart.forEach(element => {
            if(!element.isDeleted) {
                cost += (element.price * element.quantity);
            }
        });
        setTotalCost(cost);
    }, [cart]);
  
    return (
        <>
        <CenteredTitle>Checkout</CenteredTitle>
        <div>
            {cart.map((item, index) => (
                <div key={index}>
                    <CheckoutItem item={item} />
                </div>
            ))}
        </div>
        <div style={{textAlign: "center", fontWeight: "bold"}}>
            Total cost: ${totalCost.toFixed(2)}
        </div>
        <CenteredGroup>
            <BillingForm />
        </CenteredGroup>
        </>
    )
}
