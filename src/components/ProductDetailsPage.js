import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ShowDetails from "./ShowDetails";

export default function ProductDetailsPage() {
  const id = useParams().id;
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
  }, [id]);
  
  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
    <>
      {productInfo && (
        <>
        <ShowDetails productInfo={productInfo} />
        </>
      )}
    </>
    )}
  </>
  );
}
