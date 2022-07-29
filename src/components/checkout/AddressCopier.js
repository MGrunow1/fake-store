import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Checkbox, FormInput, SpacedText } from "../StyledComponents";

export default function AddressCopier ({
        billingAddress,
        setBillingAddress
    }) {
    const { theme } = useContext(ThemeContext);
    const [copyAddress, setCopyAddress] = useState(false);

    function toggleShippingToBilling() {
        setCopyAddress(!copyAddress);
    }
    return (
        <>
        <SpacedText style={{display: "flex", flexWrap: "wrap"}}>
            <label htmlFor="billingAddress">
                "Billing Address"
            </label>
            <FormInput
             name="billingAddress"
             type="text"
             value={billingAddress}
             onChange={(event) => setBillingAddress(event.target.value)}
             dark={theme === 'dark'}
            />
            <div>
                <Checkbox
                  type="checkbox"
                  name="copy"
                  onChange={toggleShippingToBilling}
                  dark={theme === 'dark'}
                  />
                <label htmlFor="copy">
                    Copy shipping address
                    </label>
                </div>
        </SpacedText>
        </>
    )
}
