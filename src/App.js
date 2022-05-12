import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Product from "./components/Product";
import HomePage from "./pages/HomePage";
import AppRoute from "./routes/appRoute";
function App() {
  return (
    <>
      <HomePage />
      <Router>
        {/* <NavBar /> */}
        <AppRoute />
      </Router>
    </>
  );
}

export default App;
