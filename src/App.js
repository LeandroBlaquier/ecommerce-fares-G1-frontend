import AppRoute from "./routes/AppRoute";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <AppRoute />
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
