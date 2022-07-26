import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import { NavContainer } from "./StyledComponents";
export default function NavBar() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
        <NavContainer vertical={false}>
            <NavLink to="/products" style={{textDecoration: "none"}}>
                <div>Products</div>
            </NavLink>
            <NavLink to="/checkout" style={{textDecoration: "none"}}>
                <div>Checkout</div>
            </NavLink>
            <NavLink to="/cart" style={{textDecoration: "none"}}>
                <div>Cart</div>
            </NavLink>
        </NavContainer>
        </>
    )
}
