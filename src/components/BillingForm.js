import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { MainForm } from "./StyledComponents";
import TextFormField from "./TextFormField";

export default function BillingForm() {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    
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
            <div>Credit Card Info</div>
            <input
             type="submit"
             />
         </MainForm>
        </>
    )
}
