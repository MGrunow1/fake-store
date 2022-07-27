import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FormInput, SpacedText} from "../StyledComponents";

export default function TextFormField({ labelID, labelText, value, valueSetter }) {
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
             value={value}
             onChange={(event) => valueSetter(event.target.value)}
             dark={theme === 'dark'}
            />
        </SpacedText>
        </>
    )
}
