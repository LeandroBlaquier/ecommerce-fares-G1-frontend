import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  chakra,
  Flex,
  Badge,
} from "@chakra-ui/react";

const ProductSimple = ({ title, price, imgCards, category }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: imgCards,
            backgroundPosition: "center",
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={imgCards}
          />
        </Box>
        <Badge borderRadius="full" px="2" colorScheme="green">
          New Product
        </Badge>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"}>
            {category}
          </Text>
          <Heading fontSize={"16px"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $ {price}
            </Text>
          </Stack>
        </Stack>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py={2}
          roundedBottom="lg"
        >
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "blue.100",
            }}
            _focus={{
              bg: "blue.300",
            }}
          >
            Comprar
          </chakra.button>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "red.200",
            }}
            _focus={{
              bg: "red.400",
            }}
          >
            Agregar al carrito
          </chakra.button>
        </Flex>
      </Box>
    </Center>
  );
};
export default ProductSimple;
