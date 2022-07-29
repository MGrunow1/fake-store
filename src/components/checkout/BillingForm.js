import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { MainForm, PrimaryButton } from "../StyledComponents";
import AddressCopier from "./AddressCopier";
import CreditCardInfo from "./CreditCardInfo";
import TextFormField from "./TextFormField";

export default function BillingForm() {
    const { theme } = useContext(ThemeContext);
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
        clearCart();
        navigate("/products")
    }

    return (
        <MainForm
          onSubmit={handleSubmit}
          dark={theme === 'dark'}>
            <TextFormField
              labelID={"customerName"}
              labelText={"Customer Name"}
              value={name}
              valueSetter={setName}
            />
            <TextFormField
              labelID={"shippingAddress"}
              labelText={"Shipping Address"}
              value={shippingAddress}
              valueSetter={setShippingAddress}
            />
            <AddressCopier
              billingAddress={billingAddress}
              setBillingAddress={setBillingAddress}
              shippingAddress={shippingAddress}
            />
            <CreditCardInfo
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
            />
            <PrimaryButton as="input"
             type="submit"
             dark={theme === 'dark'}
             style={{alignSelf: "center"}}
            />
        </MainForm>
    )
}
