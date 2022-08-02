import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import {
    ButtonTag,
    CenteredGroup,
    PrimaryButton,
    SecondaryButton,
    UndoButton
} from "../StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function AddChoiceToCart({ id, title, price, quantity}) {
    const { theme } = useContext(ThemeContext);
    const { addToCart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);
    
    function submitItem() {
        // create an entry to add to the cart
        const product = {id: id, name: title, price: price, quantity: quantity}
        addToCart(product);
        setIsAdded(true);
    }
    function undoAddition() {
        // set quantity as negative to subtract
        const reverseProduct = {id: id, quantity: -quantity}
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
                <Link to="/cart">
                    <PrimaryButton
                     dark={theme === 'dark'}>
                        View Cart
                    </PrimaryButton>
                </Link>
                <Link to="/products">
                    <SecondaryButton dark={theme === 'dark'}>
                        Continue shopping
                    </SecondaryButton>
                </Link>
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
                <Link to="/products">
                    <SecondaryButton dark={theme === 'dark'}>
                        Back to Product Page
                    </SecondaryButton>
                </Link>
            </CenteredGroup>
            </>
        )}
        </>
    )
}
