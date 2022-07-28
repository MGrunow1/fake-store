import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CenteredList, ListItem, MediumText } from "../StyledComponents";

export default function CheckoutItem( {item} ) {
    const { name, price, quantity } = item
    const { theme } = useContext(ThemeContext);

    return (
        <CenteredList>
            <ListItem dark={theme === 'dark'}>
                <MediumText>
                    {name}
                </MediumText>
                <MediumText>
                    Cart contains: {quantity} @ ${price.toFixed(2)} each.
                </MediumText>
            </ListItem>
        </CenteredList>
    )
}
