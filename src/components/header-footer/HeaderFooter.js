import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import { FooterContainer, HeaderContainer, PageContainer } from "../StyledComponents";
import CartWidget from "./CartWidget";
import HamburgerMenu from "./HamburgerMenu";
import NavBar from "./NavBar";
import ThemeSwitch from "./ThemeSwitch";

export default function HeaderFooter() {
    const { theme } = useContext(ThemeContext);
    return (
        <PageContainer dark={theme === 'dark'}>
        <HeaderContainer dark={theme === 'dark'}>
            <HamburgerMenu />
            <NavBar />
            <CartWidget />
            <ThemeSwitch />
        </HeaderContainer>
        <div><Outlet /></div>
        <FooterContainer dark={theme === 'dark'}>
            &copy; 2022 Michael Grunow
        </FooterContainer>
        </PageContainer>
    )
}
