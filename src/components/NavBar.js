import { NavContainer } from "./StyledComponents";
import StyledNavLink from "./StyledNavLink";

export default function NavBar() {
    return (
        <>
        <NavContainer vertical={false}>
            <StyledNavLink
                page="/products"
                text="Products"
            />
            <StyledNavLink
                page="/checkout"
                text="Checkout"
            />
        </NavContainer>
        </>
    )
}
