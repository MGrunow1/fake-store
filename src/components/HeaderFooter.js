import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import { HeaderContainer, PageContainer } from "./StyledComponents";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

export default function HeaderFooter() {
    const { theme } = useContext(ThemeContext);
    return (
        <PageContainer dark={theme === 'dark'}>
        <HeaderContainer>
            <NavBar />
            <CartWidget />
        </HeaderContainer>
        <div><Outlet /></div>
        </PageContainer>
    )
}