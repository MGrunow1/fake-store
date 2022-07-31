import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartWidgetContainer, Circle } from "../StyledComponents";
import StyledNavLink from "./StyledNavLink";

export default function CartWidget() {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
    return (
        <NavLink to="/cart" style={{textDecoration: "none"}}>
            <CartWidgetContainer dark={theme === 'dark'}>
                <FontAwesomeIcon icon={faCartShopping} />
                <StyledNavLink
                    page="/cart"
                    text="Cart"
                    lessMargin={true}
                />
                <Circle dark={theme === 'dark'}>
                    {cart.length}
                </Circle>
            </CartWidgetContainer>
        </NavLink>
    )
}
