import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { QuantityInput, MediumText, SecondaryButton } from "./StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function CartItemCard({itemInfo}) {
    const { deleteFromCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
    const [quantity, setQuantity] = useState(itemInfo.quantity);

    function remove() {
        deleteFromCart(itemInfo.id);
    }
    
    return (
        <>
        <MediumText>
            {itemInfo.name}
            </MediumText>
        <MediumText>
            Quantity:
            </MediumText>
        <SecondaryButton
          onClick={remove}
          dark={theme === 'dark'}>
            <FontAwesomeIcon icon={faTrashCan} />
            <MediumText>Delete</MediumText>
        </SecondaryButton>
        </>
    )
}
