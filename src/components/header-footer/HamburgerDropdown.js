import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HamburgerDropdownContainer } from "../StyledComponents";
import StyledNavLink from "./StyledNavLink";

export default function HamburgerDropdown({ isOpen, setIsOpen }) {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <HamburgerDropdownContainer
        isOpen={isOpen}
        dark={theme === 'dark'}
        onClick={closeMenu}>
            <StyledNavLink
                page="/products"
                text="Products"
            />
            <StyledNavLink
                page="/cart"
                text="View Cart"
            />
            {(cart.length > 0) &&
                <StyledNavLink
                    page="/checkout"
                    text="Checkout"
                />
            }
        </HamburgerDropdownContainer>
    )
}