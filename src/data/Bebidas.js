import React from "react";
import Cards from "../components/ProductCard";
import { Container, Divider, Grid, Stack, Text } from "@chakra-ui/react";
import contentCards from "./ContentCards";
import "../styles/Catalogue.css";
const result = contentCards.filter((product) => product.category === "Bebidas");

const Bebidas = () => {
  return (
    <>
      <Container maxW={"90%"}>
        <div className="secciones">
          <Stack direction="row" h="100px" p={4}>
            <Divider orientation="vertical" />
            <Text fontSize="4xl">Bebidas</Text>
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
              image={product.image}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Bebidas;
