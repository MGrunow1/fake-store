import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { PrimaryButton, ProductGridItem, SizedImage } from "./StyledComponents";

export default function ProductCard(props) {
  const { theme } = useContext(ThemeContext);
  const { id, image, price, title } = props;

  return (
    <ProductGridItem>
      <Link to={`/products/${id}`}>
      <SizedImage
       src={image}
       alt={`Image of ${title}`}
       />
      </Link>
      <div>{title}</div>
      <div>${price}</div>
      <Link to={`/products/${id}`}>
        <PrimaryButton dark={theme === 'dark'}>
          More Details
        </PrimaryButton>
      </Link>
    </ProductGridItem>
  );
}
