import AppRoute from "./routes/appRoute";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      {/* esto mas adelante debe ser modificado */}
      <ChakraProvider>
        <Navbar />
        <AppRoute />
      </ChakraProvider>
    </>
  );
};

export default App;
