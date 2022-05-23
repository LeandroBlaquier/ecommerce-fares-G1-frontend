import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assests/icon-footer.png";

const menuItems = [
  { link: "/", name: "Homepage" },
  { link: "/about", name: "About" },
  { link: "/contact", name: "Contactos" },
  { link: "/products", name: "Productos" },
];

const App = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box bg={"transparent"} zIndex={"overlay"} as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container>
          <HStack justify="space-around">
            <img src={Logo} alt="" height={"60px"} width={"50px"} />
            {isDesktop ? (
              <Flex justify="space-between" gap={"100px"}>
                <ButtonGroup variant="link" spacing="20">
                  {menuItems.map((item) => (
                    <Button variant={"ghost"}>
                      <a href={item.link}>{item.name}</a>
                    </Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="10">
                  <Button variant="ghost">
                    <a href="/signup">Iniciar sesion</a>
                  </Button>
                  <Button variant="ghost">
                    <a href="/signin">Registrarte</a>
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
export default App;
