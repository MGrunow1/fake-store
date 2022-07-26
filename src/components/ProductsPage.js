import { useEffect, useState } from "react";
import { ProductGrid } from "./StyledComponents";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch list of products
  useEffect(() => {
    async function getProductList() {
      setIsLoading(true);
      const url = `http://fakestoreapi.com/products`;
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data);
      setIsLoading(false);
    }
    getProductList();
  }, []);
  return (
    <>
      {isLoading ? (
      <Loading />
      ) : (
      <ProductGrid>
        {productList ? (
          productList.map((product, index) => (
            <div key={index}>
              <ProductCard
               image = {product.image}
               price = {product.price}
               title = {product.title} />
            </div>
          ))
        ) : (
          <div>No products found.</div>
        )}
      </ProductGrid>
      )}
    </>
  );
}
