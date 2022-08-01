import { useEffect, useState } from "react";
import { ProductGrid } from "../StyledComponents";
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

  // fetch list of products
  useEffect(() => {
    async function getProductList() {
      setIsLoading(true);
      const url = `http://fakestoreapi.com/products`;
      const response = await fetch(url);
      const data = await response.json();
      // set unsorted list (sorted in another useEffect)
      setProductList(data);
      setIsLoading(false);
    }
    getProductList();
    // reload list when sorting changes
  }, [sortByPrice]);

  // sort list of products
  useEffect(() => {
    let sortedArray = []
    switch(sortByPrice) {
      case "ascending":
        // use comparison function to find higher price
        sortedArray = productList.sort((a, b) => a.price - b.price);
        break;
      case "descending":
        // use comparison function to find lower price
        sortedArray = productList.sort((a, b) => b.price - a.price);
        break;
      case "none":
        // no sort, just copy
        sortedArray = productList;
        break;
      default:
        sortedArray = productList;
    }
    // setting the sorted list allows display
    // (just using productList would render the products before any sorting)
    setSortedProductList(sortedArray);
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
