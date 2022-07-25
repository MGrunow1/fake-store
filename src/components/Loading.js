import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ClockLoader } from "react-spinners";
import { Title } from "./StyledComponents";

export default function Loading() {
    const { theme } = useContext(ThemeContext);
    const clockColor = (theme === "dark") ? "white" : "black";
    
    return (
        <Title>
            <p>Loading</p>
            <div>
                <ClockLoader color={clockColor} />
            </div>
        </Title>
    )
}
