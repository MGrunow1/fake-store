import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import { NavLinkText } from "./StyledComponents";

export default function StyledNavLink({ page, text }) {
    const { theme } = useContext(ThemeContext);
    function styleByActiveStatus(isActive) {
        return isActive ? { fontWeight: "bold", textDecoration: "none"}
        : {fontWeight: "normal", textDecoration: "none"};
    }
    return(
        <>
        <NavLink to={page} style={({isActive}) => styleByActiveStatus(isActive)}>
            <NavLinkText dark={theme === 'dark'}>
                {text}
            </NavLinkText>
         </NavLink>
        </>
    )
}
