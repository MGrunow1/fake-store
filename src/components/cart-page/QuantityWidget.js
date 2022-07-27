import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { QuantityInput, SecondaryButton } from "../StyledComponents";

export default function QuantityWidget({ id, quantity }) {
    const { changeCartItemQuantity } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);
    const [wantToChange, setWantToChange] = useState(false);
    const [chosenQuantity, setChosenQuantity] = useState(quantity);

    // update quantity when the page changes
    // (fixes bug where widget remembers a quantity from a deleted item)
    useEffect(() => {
        setChosenQuantity(quantity);
    }, [quantity]);
    
    function allowChange() {
        setWantToChange(true);
    }

    function changeQuantity() {
        changeCartItemQuantity(id, chosenQuantity);
        setWantToChange(false);
    }

    return (
        <>
        <div>
            {wantToChange ? (
                <>
                Quantity:
                <QuantityInput name="quantity"
                type="number"
                dark={theme === 'dark'}
                min={1}
                value={chosenQuantity}
                onChange={(event) => setChosenQuantity(Number(event.target.value))}
                />
                <SecondaryButton
                  onClick={changeQuantity}
                  dark={theme === 'dark'}>
                    Accept
                </SecondaryButton>
                </>
            ) : (
                <>
                Quantity: {chosenQuantity}
                <SecondaryButton
                  onClick={allowChange}
                  dark={theme === 'dark'}>
                    Change
                </SecondaryButton>
              </>
            )}
        </div>
        </>
    )
}