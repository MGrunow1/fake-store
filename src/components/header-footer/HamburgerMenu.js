import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HamburgerButton } from "../StyledComponents";

export default function HamburgerMenu() {
    const { theme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    
    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }
    return (
        <HamburgerButton
         onClick={toggleIsOpen}
         dark={theme === 'dark'}>
            <FontAwesomeIcon icon={faBars} />
        </HamburgerButton>
    )
}
