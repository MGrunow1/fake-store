import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //TODO: actually use isLoading to display a loading spinner

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
      {productList ? (
        productList.map((product, index) => (
          <div key={index}>
            <div>{product.title}</div>
          </div>
        ))
      ) : (
        <div>No products found.</div>
      )}
    </>
  );
}
