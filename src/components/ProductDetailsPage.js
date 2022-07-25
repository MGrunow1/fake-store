import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  LargeImage,
  ProductGrid,
  ProductText,
  SpacedText,
  SubmitButton,
  Title,
} from "./StyledComponents";
import Loading from "./Loading";

export default function ProductDetailsPage(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
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
            <SpacedText>{productInfo.description}</SpacedText>
            <SpacedText>${productInfo.price}</SpacedText>
            <SpacedText>(Category: {productInfo.category})</SpacedText>
            <SubmitButton dark={theme === 'dark'}>Add to Cart</SubmitButton>
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
