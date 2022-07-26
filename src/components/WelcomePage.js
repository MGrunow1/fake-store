import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { CenteredTitle, PrimaryButton } from "./StyledComponents";

export default function WelcomePage() {
    const { theme } = useContext(ThemeContext);
    return(
        <>
        <CenteredTitle>
            Welcome to Grunow's Fake Store!
        </CenteredTitle>
        <CenteredTitle>
            <Link to="/products">
                <PrimaryButton dark={theme === 'dark'}>
                    See our products!
                </PrimaryButton>
            </Link>
        </CenteredTitle>
        </>
    )
}
