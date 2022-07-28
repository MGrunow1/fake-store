import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Switch from "react-switch";
import { SwitchContainer, SwitchIcon } from "../StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <SwitchContainer>
            <Switch
                checked={theme === "dark"}
                onChange={toggleTheme}
                offColor="#000"
                onColor="#ccc"
                offHandleColor="#eee"
                onHandleColor="#000"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={<SwitchIcon>
                        <FontAwesomeIcon icon={faSun} />
                    </SwitchIcon>
                }
                checkedHandleIcon={<SwitchIcon>
                    <FontAwesomeIcon icon={faMoon} />
                </SwitchIcon>
            }
            />
        </SwitchContainer>
    )
}
