import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import { PageContainer } from "./StyledComponents";
import NavBar from "./NavBar";

export default function HeaderFooter() {
    const { theme } = useContext(ThemeContext);
    return (
        <PageContainer dark={theme === 'dark'}>
        <header><NavBar /></header>
        <div><Outlet /></div>
        </PageContainer>
    )
}