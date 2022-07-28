import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import { NavContainer } from "./StyledComponents";
export default function NavBar() {
    const { theme } = useContext(ThemeContext);
    function styleByActiveStatus(isActive) {
        return isActive ? { fontWeight: "bold", textDecoration: "none"}
        : {fontWeight: "normal", textDecoration: "none"};
    }
    return (
        <>
        <NavContainer vertical={false}>
            <NavLink to="/products" style={({isActive}) => styleByActiveStatus(isActive)}>
                <div>Products</div>
            </NavLink>
            <NavLink to="/checkout" style={({isActive}) => styleByActiveStatus(isActive)}>
                <div>Checkout</div>
            </NavLink>
            <NavLink to="/cart" style={({isActive}) => styleByActiveStatus(isActive)}>
                <div>Cart</div>
            </NavLink>
        </NavContainer>
        </>
    )
}
