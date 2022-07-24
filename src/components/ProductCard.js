import { ProductGridItem, SizedImage } from "./StyledComponents";

export default function ProductCard(props) {
    const {image, price, title} = props;
  return (
    <ProductGridItem>
      <SizedImage
        src={image}
        alt={`Image of ${title}`} />
      <div>{title}</div>
      <div>${price}</div>
    </ProductGridItem>
  );
}
