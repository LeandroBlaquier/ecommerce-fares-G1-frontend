import { Box, Container, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

import iconFooter from "../assests/icon-footer.png";
import yt from "../assests/icon-yt.png";
import face from "../assests/icon-face.png";
import twitter from "../assests/icon-twitter.png";
import insta from "../assests/icon-insta.png";

const Footer = () => {
  return (
    <>
      <Box padding="3rem 0" color="white" bg="#505050">
        <Container maxWidth="90%">
          <Flex
            direction={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex direction={["column", "column", "row", "row"]} gap="3rem">
              <Box textAlign={["center", "center", "start", "start"]}>
                <Divider
                  m={["0 auto 5px", "0 auto 5px", "0 0 9px"]}
                  // mb="9px"
                  bg="white"
                  width="58px"
                  border="1.4px"
                  orientation="horizontal"
                />
                <Text fontWeight={700}>My Account</Text>
                <Text>Overview</Text>
                <Text>Order History</Text>
                <Text>Wishlist</Text>
                <Text>Account information</Text>
              </Box>
              <Box d={["none", "none", "block"]}>
                <Divider
                  mb="9px"
                  bg="white"
                  width="58px"
                  border="1.4px"
                  orientation="horizontal"
                />
                <Text fontWeight={700}>Store</Text>
                <Text>Segurity Notice</Text>
                <Text>Locations & Hours</Text>
                <Text>Rentals</Text>
                <Text>Privacy Notice</Text>
              </Box>
            </Flex>
            <Flex
              mt={1}
              gap={4}
              alignItems={["center", "center", "flex-end", "flex-end"]}
              height="fit-content"
              flexDirection="column"
            >
              <Link
                d={["none", "none", "flex", "flex"]}
                alignItems="center"
                gap="0.6rem"
              >
                <Image src={iconFooter} width="100px" alt="logo" />
                <Text fontSize={32}>
                  <strong>Make</strong>Food
                </Text>
              </Link>
              <Box gap={3} d="flex" mt={[5, 5, 0, 0]}>
                <Link href="https://www.youtube.com/user/pmpeloc/videos" isExternal><Image src={yt} margin="10px" alt="youtube" /></Link>
                <Link to='#'><Image src={twitter} margin="10px" alt="twitter" /></Link>
                <Link to='#'><Image src={insta} margin="10px" alt="instagram" /></Link>
                <Link to='#'><Image src={face} margin="10px" alt="facebook" /></Link>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Flex
        justify={["center", "center", "center", "normal"]}
        color="white"
        bg="#252525"
      >
        <Container maxWidth="90%">
          <Text textAlign={['center','center','start']} p="0.5rem 0">©2022 Make Food</Text>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
