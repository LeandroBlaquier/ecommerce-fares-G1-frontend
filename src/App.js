
import AppRoute from "./routes/appRoute";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <ChakraProvider>
        {/* esto mas adelante debe ser modificado */}
        <Navbar />
        <AppRoute />
      </ChakraProvider>

    </>
  );
};

export default App;
