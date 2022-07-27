import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CenteredGroup, CenteredTitle, PrimaryButton } from "./StyledComponents";
import BillingForm from "./BillingForm";
import CheckoutItem from "./CheckoutItem";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
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
        <CenteredGroup>
            {cart.length ? (
                <>
                <BillingForm />
                </>
            ) : (
                <Link to="/products">
                    <PrimaryButton dark={theme === 'dark'}>
                        View the products page
                    </PrimaryButton>
                </Link>
            )}
        </CenteredGroup>
        </>
    )
}
