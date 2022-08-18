import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ButtonTag,
    CenteredGroup,
    GridItem,
    MediumText,
    SecondaryButton,
    TrashIcon,
    UndoButton,
} from "../StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import QuantityWidget from "./QuantityWidget";

export default function CartItemCard({itemInfo: {id, name, quantity, isDeleted}}) {
    const { markDeleted, undeleteItem } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    function remove() {
        markDeleted(id);
    }

    function undoRemove() {
        undeleteItem(id);
    }
    
    return (
        <GridItem>
            {isDeleted ? (
                <>
                <CenteredGroup>
                    <ButtonTag dark={theme === 'dark'}>
                        Removed
                    </ButtonTag>
                    <UndoButton
                      onClick={undoRemove}
                      dark={theme === 'dark'}>
                        Undo&nbsp;
                        <FontAwesomeIcon icon={faRotateLeft} />
                    </UndoButton>
                </CenteredGroup>
                </>
            ) : (
                <>
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
                </>
            )}
        </GridItem>
    )
}
