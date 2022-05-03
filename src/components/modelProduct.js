import { motion, MotionConfig } from "framer-motion";
import "./styles.css";

const Product = ({ titulo, descripcion, precio, cantidad, imagen }) => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="container">
        <motion.div
          className="product-body"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          <h5 className="product-title">{titulo}</h5>
          <img src={imagen} alt="products" />
          <p>Descripcion: {descripcion}</p>
          <p>Stock: {cantidad}</p>
          <p>$ {precio} </p>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default Product;
