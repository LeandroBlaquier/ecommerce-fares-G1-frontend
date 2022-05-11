import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
=======
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
>>>>>>> 7d2e4148718b1ab0a9de64c3329d23731ac7679b
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
