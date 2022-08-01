import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CenteredGroup, RadioButton, RadioOption } from "../StyledComponents";
export default function PriceSortChooser({ sortByPrice, setSortByPrice }) {
    const { theme } = useContext(ThemeContext);

    function setAscending() {
        setSortByPrice("ascending");
    }

    function setDescending() {
        setSortByPrice("descending");
    }

    function setNone() {
        setSortByPrice("none");
    }

    return (
        <CenteredGroup>
            <RadioOption>
                <RadioButton
                    type="radio"
                    id="none"
                    name="sortType"
                    defaultChecked={sortByPrice === "none"}
                    onChange={setNone}
                    dark={theme === 'dark'} />
                <label htmlFor="none">
                    No sorting
                </label>
            </RadioOption>
            <RadioOption>
                <RadioButton
                    type="radio"
                    id="descending"
                    name="sortType"
                    defaultChecked={sortByPrice === "descending"}
                    onChange={setDescending}
                    dark={theme === 'dark'} />
                <label htmlFor="descending">
                    Sort by descending price
                </label>
            </RadioOption>
            <RadioOption>
                <RadioButton
                    type="radio"
                    id="ascending"
                    name="sortType"
                    defaultChecked={sortByPrice === "ascending"}
                    onChange={setAscending}
                    dark={theme === 'dark'} />
                <label htmlFor="none">
                    Sort by ascending price
                </label>
            </RadioOption>
        </CenteredGroup>
    )
}
