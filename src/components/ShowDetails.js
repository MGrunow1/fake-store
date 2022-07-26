import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  InputLabel,
  LargeImage,
  LeftAlign,
  ProductGrid,
  ProductText,
  QuantityInput,
  SpacedText,
  Title,
} from "./StyledComponents";
import AddChoiceToCart from "./AddChoiceToCart";

export default function ShowDetails(props) {
    const [chosenQuantity, setChosenQuantity] = useState(1);
    const { theme } = useContext(ThemeContext);
    const { productInfo } = props

    return (
        <ProductGrid>
          <ProductText>
            <Title>{productInfo.title}</Title>
            <LeftAlign>{productInfo.description}</LeftAlign>
            <SpacedText>${productInfo.price}</SpacedText>
            <SpacedText>(Category: {productInfo.category})</SpacedText>
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
            <AddChoiceToCart info={productInfo} quantity={chosenQuantity} />
          </ProductText>
          <div style={{ height: "90vh" }}>
            <LargeImage
              src={productInfo.image}
              alt={`Image of ${productInfo.title}`}
            />
          </div>
        </ProductGrid>
    )
}
