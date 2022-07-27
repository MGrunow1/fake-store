import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";
import { CenteredGroup, PrimaryButton, ProductGrid } from "./StyledComponents";
import CartItemCard from "./CartItemCard";
import { Link } from "react-router-dom";

export default function CartPage() {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
    return (
        <>
        <ProductGrid>
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
        </ProductGrid>
            {(cart.length > 0) && 
            <CenteredGroup>
                <Link to="/checkout">
                    <PrimaryButton dark={theme === 'dark'}>
                        Proceed to checkout
                    </PrimaryButton>
                </Link>
            </CenteredGroup>
            }
        </>
    )
}
