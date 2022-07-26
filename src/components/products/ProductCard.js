import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { GridItem, PrimaryButton, SizedImage } from "../StyledComponents";

export default function ProductCard({ id, image, price, title }) {
  const { theme } = useContext(ThemeContext);

  return (
    <GridItem>
      <Link to={`/products/${id}`}>
      <SizedImage
       src={image}
       alt={`Image of ${title}`}
       />
      </Link>
      <div>{title}</div>
      <div>${price.toFixed(2)}</div>
      <Link to={`/products/${id}`}>
        <PrimaryButton dark={theme === 'dark'}>
          More Details
        </PrimaryButton>
      </Link>
    </GridItem>
  );
}
