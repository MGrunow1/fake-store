import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductGrid } from "../StyledComponents";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useSortProducts } from "../../hooks/useSortProducts";
import Loading from "../Loading";
import PriceSortChooser from "./PriceSortChooser";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  const { cart, deleteFromCart } = useContext(CartContext);

  // whether or not the page is loading
  const [isLoading, setIsLoading] = useState(false);
  // how to sort ("none", "ascending", "descending")
  const [sortByPrice, setSortByPrice] = useState("none");

  // fetch unsorted list of products
  const productList = useGetProducts(null, setIsLoading, sortByPrice);

  // sort list of products
  const sortedProductList = useSortProducts(productList, sortByPrice);

  // clear out deleted items from cart
  useEffect(() => {
    cart.forEach(element => {
        if(element.isDeleted) {
            deleteFromCart(element.id);
        }
    })
}, [cart, deleteFromCart]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <PriceSortChooser
          sortByPrice={sortByPrice}
          setSortByPrice={setSortByPrice} />
        <ProductGrid>
          {sortedProductList ? (
            sortedProductList.map((product, index) => (
              <div key={index}>
                <ProductCard
                 id = {product.id}
                 image = {product.image}
                 price = {product.price}
                 title = {product.title} />
              </div>
           ))
          ) : (
            <div>No products found.</div>
          )}
        </ProductGrid>
        </>
      )}
    </>
  );
}
