import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MediumText, ProductGridItem, SecondaryButton, TrashIcon } from "../StyledComponents";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import QuantityWidget from "./QuantityWidget";

export default function CartItemCard({itemInfo: {id, name, quantity}}) {
    const { deleteFromCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    function remove() {
        deleteFromCart(id);
    }
    
    return (
        <ProductGridItem>
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
        </ProductGridItem>
    )
}
