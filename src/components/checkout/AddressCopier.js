import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Checkbox, FormInput, SpacedText } from "../StyledComponents";

export default function AddressCopier ({ billingAddress, setBillingAddress, shippingAddress }) {
    const { theme } = useContext(ThemeContext);
    const [copyAddress, setCopyAddress] = useState(false);

    // update billing address when automatically matching shipping
    useEffect(() => {
        if(copyAddress) {
            setBillingAddress(shippingAddress)
        }
    }, [copyAddress, setBillingAddress, shippingAddress]);

    function toggleShippingToBilling() {
        setCopyAddress(!copyAddress);
    }
    return (
        <SpacedText style={{display: "flex", flexWrap: "wrap"}}>
            <label htmlFor="billingAddress">
                Billing Address
            </label>
            <FormInput
             name="billingAddress"
             type="text"
             value={billingAddress}
             disabled={copyAddress}
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
    )
}
