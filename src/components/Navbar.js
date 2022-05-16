import React from "react";
import { Link } from "react-router-dom";
import { navbarstyles } from "./Style";
// import { links } from "../data/Links";
import { Box, Flex, Text } from "@chakra-ui/react";
// import LoginButton from "./LoginButton";

const Links = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/contact", name: "Contact" },
  { link: "/products", name: "Products" },
];

const SlideBar = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <Box
        d={menuOpen ? "flex" : "none"}
        h="100%"
        w={["60%", "50%", "40%"]}
        bgColor="#090909e6"
        p="1rem"
        position="fixed"
        left="0"
        top="0"
        justifyContent="space-between"
        zIndex="200"
        transition="0.9s"
        flexDirection="column"
      >
        <Flex gap={4} flexDirection="column">
          {Links.map((item) => (
            <Link onClick={() => setMenuOpen()} to={item.link} key={item.id}>
              <Text
                color="white"
                style={navbarstyles.navbarLink}
                gap="3px"
                _hover={navbarstyles.hover}
              >
                {item.icon}|{"  "}
                {item.name}
              </Text>
            </Link>
          ))}
        </Flex>
        {/* <LoginButton /> */}
      </Box>
    </>
  );
};
export default SlideBar;
