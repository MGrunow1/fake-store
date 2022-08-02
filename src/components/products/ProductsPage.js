import { useEffect, useState } from "react";
import { ProductGrid } from "../StyledComponents";
import { getProductInfo, sortProductList } from "../../api/apiUtils";
import Loading from "../Loading";
import PriceSortChooser from "./PriceSortChooser";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  // initial product list (unsorted)
  const [productList, setProductList] = useState([]);
  // whether or not the page is loading
  const [isLoading, setIsLoading] = useState(false);
  // how to sort ("none", "ascending", "descending")
  const [sortByPrice, setSortByPrice] = useState("none");
  // storage for sorted list (filling this triggers display)
  const [sortedProductList, setSortedProductList] = useState([]);

  // fetch unsorted list of products
  useEffect(() => {
    // id of null gets all products
    getProductInfo(null, setIsLoading, setProductList);
    // reload list when sorting changes
  }, [sortByPrice]);

  // sort list of products
  useEffect(() => {
    // setting the sorted list allows display
    // (just using productList would render the products before any sorting)
    sortProductList(productList, setSortedProductList, sortByPrice)
  }, [productList, setSortedProductList, sortByPrice]);

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
