import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function HeaderFooter() {
    return (
        <>
        <header><NavBar /></header>
        <div><Outlet /></div>
        </>
    )
}