import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ClockLoader } from "react-spinners";
import { CenteredGroup, CenteredList, Title } from "./StyledComponents";

export default function Loading() {
    const { theme } = useContext(ThemeContext);
    const clockColor = (theme === "dark") ? "#cdd6f0" : "#3c4c77";
    
    return (
        <Title>
            <CenteredList>
                Loading
            </CenteredList>
            <CenteredGroup>
                <ClockLoader color={clockColor} />
            </CenteredGroup>
        </Title>
    )
}
