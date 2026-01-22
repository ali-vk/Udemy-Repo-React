import { useParams } from "react-router-dom";

export default function ProductsDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Products Details Page</h1>
      <p>{params.productId}</p>
    </>
  );
}
