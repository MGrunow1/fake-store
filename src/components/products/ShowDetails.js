import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  InputLabel,
  LargeImage,
  LeftAlign,
  ProductGrid,
  ProductText,
  QuantityInput,
  SpacedText,
  Title,
} from "../StyledComponents";
import AddChoiceToCart from "./AddChoiceToCart";

export default function ShowDetails({ productInfo: {id, title, category, price, description, image }}) {
    const [chosenQuantity, setChosenQuantity] = useState(1);
    const { theme } = useContext(ThemeContext);
    // give the price two decimal places, to show cents
    const itemPrice = (price) ? price.toFixed(2) : 0;

    return (
        <ProductGrid>
          <ProductText>
            <Title>{title}</Title>
            <LeftAlign>{description}</LeftAlign>
            <SpacedText>${itemPrice}</SpacedText>
            <SpacedText>(Category: {category})</SpacedText>
            <SpacedText>
              <InputLabel htmlFor="quantity">Quantity:</InputLabel>
              <QuantityInput name="quantity"
                type="number"
                dark={theme === 'dark'}
                min={1}
                value={chosenQuantity}
                onChange={(event) => setChosenQuantity(Number(event.target.value))}
              />
            </SpacedText>
            <AddChoiceToCart id={id} title={title} price={price} quantity={chosenQuantity} />
          </ProductText>
          <div style={{ height: "90vh", overflow: "scroll" }}>
            <LargeImage
              src={image}
              alt={`Image of ${title}`}
            />
          </div>
        </ProductGrid>
    )
}
