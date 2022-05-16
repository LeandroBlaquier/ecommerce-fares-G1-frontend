import React from "react";
import Cards from "../components/ProductCard";
import { Container, Divider, Grid, Stack, Text } from "@chakra-ui/react";
import { contentCards } from "./ContentCards";
import "../styles/Catalogue.css";
const result = contentCards.filter(
  (product) => product.category === "Sandwiches"
);

const Sandwiches = () => {
  return (
    <>
      <Container maxW={"90%"}>
        <div className="secciones">
          <Stack direction="row" h="100px" p={4}>
            <Divider orientation="vertical" />
            <Text fontSize="4xl">Sandwiches</Text>
          </Stack>
        </div>
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(300px,1fr))"
          gap="1.9rem"
        >
          {result.map((product) => (
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
    </>
  );
};

export default Sandwiches;
