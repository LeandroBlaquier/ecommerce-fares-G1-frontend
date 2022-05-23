import { Container, Grid } from "@chakra-ui/react";
import { useLocation } from "react-router";
import ProductDetails from "../components/ProductDetails";

const ProductCard = () => {
  const location = useLocation();
  const { title, description, price, image, category } = location.state; //const data = location.state?.data;
  // console.log(title, description, price, IMG, category);
  return (
    <Container maxW={"90%"}>
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(300px,1fr))"
        gap="1.9rem"
      >
        <ProductDetails
          title={title}
          category={category}
          description={description}
          price={price}
          image={image}
        />
      </Grid>
    </Container>
  );
};
export default ProductCard;
