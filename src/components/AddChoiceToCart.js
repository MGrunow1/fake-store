import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ButtonTag, CenteredGroup, PrimaryButton, SecondaryButton, UndoButton } from "./StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function AddChoiceToCart(props) {
    const { theme } = useContext(ThemeContext);
    const [isAdded, setIsAdded] = useState(false);
    function submitItem() {
        setIsAdded(true);
    }
    function undoAddition() {
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
                  dark={theme === 'dark'}
                  aria-label="Undo">
                    <FontAwesomeIcon icon={faRotateLeft} />
                </UndoButton>
            </CenteredGroup>
            <CenteredGroup>
                <PrimaryButton
                  dark={theme === 'dark'}>
                      Checkout
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