import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import StyledNavLink from "./StyledNavLink";
import { CartWidgetContainer } from "../StyledComponents";

export default function CartWidget() {
    const { cart } = useContext(CartContext);
    return (
        <CartWidgetContainer>
            <FontAwesomeIcon icon={faCartShopping} />
            <StyledNavLink
                page="/cart"
                text="Cart"
            />
            <div>{cart.length}</div>
        </CartWidgetContainer>
    )
}
