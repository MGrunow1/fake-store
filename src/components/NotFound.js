import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { CenteredGroup, CenteredTitle, MediumText, PrimaryButton } from "./StyledComponents";

export default function NotFound() {
    const { theme } = useContext(ThemeContext);
    return(
        <div style={{height: "70vh"}}>
            <CenteredTitle>
                Page Not Found
            </CenteredTitle>
            <MediumText>&nbsp;</MediumText>
            <CenteredGroup>
                <Link to="/">
                    <PrimaryButton dark={theme === 'dark'}>
                        Try going back to the home page
                </PrimaryButton>
            </Link>
        </CenteredGroup>
        
        </div>
    )
}
