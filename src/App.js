import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
// import AppRoute from "./routes/appRoute";
function App() {
  return (
    <>
      <h1>Probando RUta</h1>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/product/:id" component={Product} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
