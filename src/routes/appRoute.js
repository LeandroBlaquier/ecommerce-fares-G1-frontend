import { Routes, Route } from "react-router-dom";
import Product from "../components/Product";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/products/:id" component={Product} />
      </Routes>
    </>
  );
};

export default AppRoute;
