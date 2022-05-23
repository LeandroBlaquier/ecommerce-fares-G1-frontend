import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import contentCards from "../data/ContentCards";

const ProductsCards = () => {
  return (
    <Container maxW={"90%"}>
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(300px,1fr))"
        gap="1.9rem"
      >
        {contentCards.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            state={{
              title: product.title,
              description: product.description,
              price: product.price,
              image: product.image,
            }}
          >
            <ProductCard
              title={product.title}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </Link>
        ))}
      </Grid>
    </Container>
  );
};
export default ProductsCards;
