import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartWidgetContainer, Circle, NavLinkText } from "../StyledComponents";

export default function CartWidget() {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
    function styleByActiveStatus(isActive) {
        return isActive ? { fontWeight: "bold", textDecoration: "none"}
        : {fontWeight: "normal", textDecoration: "none"};
    }
    return (
        <NavLink to="/cart"  style={({isActive}) => styleByActiveStatus(isActive)}>
            <CartWidgetContainer dark={theme === 'dark'}>
                <FontAwesomeIcon icon={faCartShopping} />
                <NavLinkText dark={theme === 'dark'} lessMargin={true}>
                    Cart
                </NavLinkText>
                <Circle dark={theme === 'dark'}>
                    {cart.length}
                </Circle>
            </CartWidgetContainer>
        </NavLink>
    )
}
