import { useEffect, useState } from "react";

export function useGetProducts(id, loadingSetter, dependencyList) {
  const [productInfo, setProductInfo] = useState([]);
 
  useEffect(() => {
    async function getProductInfo() {
      loadingSetter(true);
      // if id is null, get all items
      const url = (id === null) ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/${id}` ;
      const response = await fetch(url);
      const data = await response.json();
      setProductInfo(data);
      loadingSetter(false);
    };
    getProductInfo();
  }, [id, loadingSetter, dependencyList]);

  return productInfo;
}
