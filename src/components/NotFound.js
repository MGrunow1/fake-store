import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { CenteredGroup, CenteredTitle, MediumText, PrimaryButton } from "./StyledComponents";

export default function NotFound() {
    const { theme } = useContext(ThemeContext);
    const { cart, deleteFromCart } = useContext(CartContext);

    // clear out deleted items from cart
    useEffect(() => {
        cart.forEach(element => {
            if(element.isDeleted) {
                deleteFromCart(element.id);
            }
        })
    }, [cart, deleteFromCart]);

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
