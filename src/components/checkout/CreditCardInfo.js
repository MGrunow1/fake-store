import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DropDownContainer, SelectDropDown } from "../StyledComponents";
import TextFormField from "./TextFormField";

export default function CreditCardInfo({cardNumber, setCardNumber}) {
  const { theme } = useContext(ThemeContext);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const years = [2022, 2023, 2024, 2025, 2026, 2027]
  return (
      <>
      <div style={{fontWeight: "bold"}}>
        Credit Card Info
      </div>
        <TextFormField
          labelID={"cardNumber"}
          labelText={"Card Number"}
          value={cardNumber}
          valueSetter={setCardNumber}
          />
        <div style={{display: "flex"}}>
          <DropDownContainer>
            <div>Card Month</div>
            <SelectDropDown name="month" dark={theme === 'dark'}>
              {monthNames.map((months, index) => (
                    <option key={index}>
                        {months}
                    </option>
                    ))}
            </SelectDropDown>
          </DropDownContainer>
          <DropDownContainer>
            <div>Card Year</div>
            <SelectDropDown name="year" dark={theme === 'dark'}>
              {years.map((year, index) => (
                    <option key={index}>
                        {year}
                    </option>
                    ))}
            </SelectDropDown>
          </DropDownContainer>
        </div>
      </>
  )
}
