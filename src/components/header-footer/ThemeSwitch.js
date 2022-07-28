import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Switch from "react-switch";
import { SwitchContainer } from "../StyledComponents";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <SwitchContainer>
            <Switch
                checked={theme === "dark"}
                 onChange={toggleTheme}
                    />
        </SwitchContainer>
    )
}
