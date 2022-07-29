import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavContainer } from "../StyledComponents";
import StyledNavLink from "./StyledNavLink";

export default function NavBar() {
    const { cart } = useContext(CartContext);
    return (
        <>
        <NavContainer vertical={false}>
            <StyledNavLink
                page="/products"
                text="Products"
            />
            {(cart.length > 0) &&
                <StyledNavLink
                    page="/checkout"
                    text="Checkout"
                />
            }
            
        </NavContainer>
        </>
    )
}
