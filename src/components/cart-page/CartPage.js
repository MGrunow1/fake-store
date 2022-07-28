import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { CenteredGroup, PrimaryButton, SecondaryButton } from "../StyledComponents";
import CartItemCard from "./CartItemCard";

export default function CartPage() {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
    return (
        <>
        <CenteredGroup>
            {cart.length ? (
                cart.map((item, index) => (
                    <div key={index}>
                        <CartItemCard itemInfo={item} />
                    </div>
                    ))
            ) : (
                <div>
                    Your cart is empty.
                </div>
            )}
        </CenteredGroup>
        <CenteredGroup>
            {cart.length ? (
                <>
                <Link to="/checkout">
                    <PrimaryButton dark={theme === 'dark'}>
                        Proceed to checkout
                    </PrimaryButton>
                </Link>
                <Link to="/products">
                    <SecondaryButton dark={theme === 'dark'}>
                        Continue shopping
                    </SecondaryButton>
                </Link>
                </>
            ) : (
                <Link to="/products">
                    <SecondaryButton dark={theme === 'dark'}>
                        View the products page
                    </SecondaryButton>
                </Link>
            )}
        </CenteredGroup>
        </>
    )
}
