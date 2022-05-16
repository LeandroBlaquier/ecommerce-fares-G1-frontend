import React from "react";
// import ProductSimple from "../components/ProductCard";
import ProductCards from "./ProductsPage";

const Catalogue = ({ title, price, imgCards, category }) => {
  return (
    <>
      <h1>Catalogo</h1>
      {/* <ProductSimple /> */}
      <ProductCards />
    </>
  );
};

export default Catalogue;
