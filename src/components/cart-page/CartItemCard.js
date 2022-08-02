import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { GridItem, MediumText, SecondaryButton, TrashIcon } from "../StyledComponents";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import QuantityWidget from "./QuantityWidget";

export default function CartItemCard({itemInfo: {id, name, quantity}}) {
    const { deleteFromCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    function remove() {
        deleteFromCart(id);
    }
    
    return (
        <GridItem>
            <div style={{display: "flex"}}>
                <SecondaryButton
                  onClick={remove}
                  dark={theme === 'dark'}>
                    <TrashIcon
                     icon={faTrashCan} />
                    <MediumText>
                        Delete
                    </MediumText>
                </SecondaryButton>
                <MediumText>
                    {name}
                </MediumText>
            </div>
            <QuantityWidget
              id={id}
              quantity={quantity} />
        </GridItem>
    )
}
