import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let params = useParams();
  console.log(params);
  return (
    <div>
      {/* <h1>Producto:{id}</h1> */}
      funca
    </div>
  );
};

export default Product;
