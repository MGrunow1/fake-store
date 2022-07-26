import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";
import { ButtonTag, CenteredGroup, PrimaryButton, SecondaryButton, UndoButton } from "./StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function AddChoiceToCart(props) {
    const { theme } = useContext(ThemeContext);
    const { addToCart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);
    const {info, quantity} = props;
    function submitItem() {
        const product = {id: info.id, name: info.title, price: info.price, quantity: quantity}
        addToCart(product);
        setIsAdded(true);
    }
    function undoAddition() {
        // set quantity as negative to subtract
        const reverseProduct = {id: info.id, quantity: -quantity}
        addToCart(reverseProduct);
        setIsAdded(false);
    }
    return (
        <>
        {isAdded ? (
            <>
            <CenteredGroup>
                <ButtonTag dark={theme === 'dark'}>
                    Added
                </ButtonTag>
                <UndoButton
                  onClick={undoAddition}
                  dark={theme === 'dark'}>
                    Undo&nbsp;
                    <FontAwesomeIcon icon={faRotateLeft} />
                </UndoButton>
            </CenteredGroup>
            <CenteredGroup>
                <PrimaryButton
                  dark={theme === 'dark'}>
                      View Cart
                </PrimaryButton>
                <SecondaryButton dark={theme === 'dark'}>
                      Back to Product Page
                </SecondaryButton>
            </CenteredGroup>
            
            </>
        ) : (
            <>
            <CenteredGroup>
                <PrimaryButton
                  onClick={submitItem}
                  dark={theme === 'dark'}>
                    Add to Cart
                </PrimaryButton>
                <SecondaryButton dark={theme === 'dark'}>
                    Back to Product Page
                </SecondaryButton>
            </CenteredGroup>
            </>
        )}
        </>
    )
}