// import { motion, MotionConfig } from "framer-motion";
import "./styles.css";
import image from "../assets/LC25eDtCT_1200x630__1.webp";
import IconsFields from "./iconsFields";
const Product = ({ titulo, descripcion, precio, cantidad, imagen }) => {
  return (
    // <MotionConfig reducedMotion="user">
    <div className="container ">
      <div className="product-body card">
        <h5 className="product-title">{titulo} titulo de producto</h5>
        <img src={image} alt="products" />
        <p>
          Descripcion: {descripcion} Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Explicabo, magnam?
        </p>
        <p>Stock: {cantidad} 34</p>
        <p>$ {precio} 123456</p>
        <div>
          <button className="comprar">Comprar</button>
        </div>
      </div>
      <IconsFields />
    </div>
    // </MotionConfig>
  );
};

export default Product;
