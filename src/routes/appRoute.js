import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import contentCards from "../data/ContentCards";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContacsPage";
import ProductCardPage from "../pages/ProductCardPage";
// import ProductPage from "../pages/ProductPage";
import ProductDetails from "../components/ProductDetails";
import NotFound from "../pages/NotFound";
import Catalogue from "../pages/Catalogue";
import Crud from "../pages/Crud";
const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Inventary" element={<Crud />} />
        <Route path="/products" element={<ProductCardPage />} />
        <Route
          path="/products/:id"
          element={<ProductDetails contentCards={contentCards} />}
        />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
