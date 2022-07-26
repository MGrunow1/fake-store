import { useContext, useEffect, useState } from "react";
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
import Loading from "./Loading";

export default function ProductDetailsPage(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
  const [chosenQuantity, setChosenQuantity] = useState(1);
  const { theme } = useContext(ThemeContext);

  // fetch product information
  useEffect(() => {
    async function getProductInfo() {
      setIsLoading(true);
      const url = `http://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProductInfo(data);
      setIsLoading(false);
    }
    getProductInfo();
  }, [id]);
  
  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
    <>
      {productInfo && (
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
      )}
    </>
    )}
  </>
  );
}
