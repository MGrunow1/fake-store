import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProductInfo } from "../../api/apiUtils";
import { useGetProducts } from "../../hooks/useGetProducts";
import Loading from "../Loading";
import ShowDetails from "./ShowDetails";

export default function ProductDetailsPage() {
  const id = useParams().id;
  const [isLoading, setIsLoading] = useState(false);
  // const [productInfo, setProductInfo] = useState([]);

  // fetch product information
  // useEffect(() => {
  //   getProductInfo(id, setIsLoading, setProductInfo);
  // }, [id]);
  const productInfo = useGetProducts(null, setIsLoading, [id]);
  
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
