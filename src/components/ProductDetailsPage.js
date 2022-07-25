import { useEffect, useState } from "react";

export default function ProductDetailsPage(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState([]);

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
  }, []);
  return (
    <></>
  )
}
