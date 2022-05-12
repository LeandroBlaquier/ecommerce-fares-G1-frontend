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
  );
};

export default AppRoute;
