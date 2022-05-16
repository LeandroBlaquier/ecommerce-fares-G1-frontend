import React from "react";
import Combos from "../data/Combos";
import Ofertas from "../data/Ofertas";
import Bebidas from "../data/Bebidas";
import Hamburguesas from "../data/Hamburguesas";
import Sandwiches from "../data/Sandwiches";
import Pizzas from "../data/Pizzas";
import "../styles/Catalogue.css";
const Catalogue = () => {
  return (
    <div className="fondo">
      <Ofertas />
      <Combos />
      <Bebidas />
      <Hamburguesas />
      <Sandwiches />
      <Pizzas />
    </div>
  );
};

export default Catalogue;
