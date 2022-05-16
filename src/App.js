
import AppRoute from "./routes/appRoute";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <ChakraProvider>
        {/* esto mas adelante debe ser modificado */}
        <Navbar />
        <AppRoute />
        <Footer/>
      </ChakraProvider>

    </>
  );
};

export default App;
