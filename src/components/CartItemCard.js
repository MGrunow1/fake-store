import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { MediumText, SecondaryButton } from "./StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import QuantityWidget from "./QuantityWidget";

export default function CartItemCard({itemInfo}) {
    const { deleteFromCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    function remove() {
        deleteFromCart(itemInfo.id);
    }
    
    return (
        <>
        <MediumText>
            {itemInfo.name}
        </MediumText>
        <QuantityWidget
          id={itemInfo.id}
          quantity={itemInfo.quantity} />
        <SecondaryButton
          onClick={remove}
          dark={theme === 'dark'}>
            <FontAwesomeIcon icon={faTrashCan} />
            <MediumText>Delete</MediumText>
        </SecondaryButton>
        </>
    )
}
