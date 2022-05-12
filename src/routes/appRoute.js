<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from "../components/Product";
import FormikExample from "../components/formCategories";
import HomePage from '../pages/HomePage';
const AppRoute = () => {
  return (
    <>
    <Router>
      {/* inserte su ruta sin modificar la de otros porfavor */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/Addcategories" element={<FormikExample/>} />
      </Routes>

    </Router>
    </>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContacsPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";
const App = () => {
  return (
    <Router>
      {/* esto mas adelante debe ser modificado */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
>>>>>>> c4c4cfde77ceefcecc61b6fd6a47eed0e8688931
  );
};

export default App;
