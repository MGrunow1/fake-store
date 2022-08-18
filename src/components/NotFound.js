import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useRemoveDeletedItems } from "../hooks/useRemoveDeletedItems";
import { Link } from "react-router-dom";
import { CenteredGroup, CenteredTitle, MediumText, PrimaryButton } from "./StyledComponents";

export default function NotFound() {
    const { theme } = useContext(ThemeContext);
    const { cart, deleteFromCart } = useContext(CartContext);

    // clear out deleted items from cart
    useRemoveDeletedItems(cart, deleteFromCart);

    return(
        <div style={{height: "70vh"}}>
            <CenteredTitle>
                Page Not Found
            </CenteredTitle>
            <MediumText>&nbsp;</MediumText>
            <CenteredGroup>
                <Link to="/">
                    <PrimaryButton dark={theme === 'dark'}>
                        Try going back to the home page
                </PrimaryButton>
            </Link>
        </CenteredGroup>
        
        </div>
    )
}
