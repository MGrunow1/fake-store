import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MainForm } from "../StyledComponents";
import CreditCardInfo from "./CreditCardInfo";
import TextFormField from "./TextFormField";

export default function BillingForm() {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
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
              <TextFormField
              labelID={"billingAddress"}
              labelText={"Billing Address"}
              value={billingAddress}
              valueSetter={setBillingAddress}
              />
            <CreditCardInfo cardNumber={cardNumber} setCardNumber={setCardNumber} />
            <input
             type="submit"
             />
         </MainForm>
        </>
    )
}
