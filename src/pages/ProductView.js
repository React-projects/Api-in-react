// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductView() {
  let { productId } = useParams();
const [product,setproduct] =useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setproduct(product)

      });
  },[]);


  return (
    <>
    {product && <h1>This is product {product.title}</h1>}
      
    </>
  );
}

export default ProductView;
