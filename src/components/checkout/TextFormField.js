import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FormInput, SpacedText} from "../StyledComponents";

export default function TextFormField({ autocomplete, labelID, labelText, value, valueSetter }) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
        <SpacedText>
            <label htmlFor={labelID}>
                {labelText}
            </label>
            <FormInput
             name={labelID}
             type="text"
             autoComplete={autocomplete}
             value={value}
             onChange={(event) => valueSetter(event.target.value)}
             dark={theme === 'dark'}
            />
        </SpacedText>
        </>
    )
}
