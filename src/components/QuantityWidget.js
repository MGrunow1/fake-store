import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function QuantityWidget({id, quantity, setQuantity}) {
    function changeQuantity() {
        const { changeCartItemQuantity } = useContext(CartContext);
        changeCartItemQuantity(itemInfo.id, quantity);
    }
    return (
        <></>
    )
}