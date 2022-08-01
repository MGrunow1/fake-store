import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import { FooterContainer, HeaderContainer, PageContainer } from "../StyledComponents";
import CartWidget from "./CartWidget";
import HamburgerDropdown from "./HamburgerDropdown";
import HamburgerMenu from "./HamburgerMenu";
import NavBar from "./NavBar";
import ThemeSwitch from "./ThemeSwitch";

export default function HeaderFooter() {
    const { theme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <PageContainer dark={theme === 'dark'}>
        <HeaderContainer dark={theme === 'dark'}>
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <NavBar />
            <CartWidget />
            <ThemeSwitch />
        </HeaderContainer>
        <HamburgerDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
        <div style={{marginTop: "20px"}}>
            <Outlet />
        </div>
        <FooterContainer dark={theme === 'dark'}>
            &copy; 2022 Michael Grunow
        </FooterContainer>
        </PageContainer>
    )
}
