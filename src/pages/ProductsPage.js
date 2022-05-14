import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import Cards from "../components/ProductCard";
import { contentCards } from "../data/ContentCards";

const ProductCards = () => {
  return (
    <Container maxW={"90%"}>
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(300px,1fr))"
        gap="1.9rem"
      >
        {contentCards.map((product) => (
          //Link {`products/${product}`}
          <Cards
            key={product.id}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            imgCards={product.IMG}
          />
        ))}
      </Grid>
    </Container>
  );
};
export default ProductCards;
