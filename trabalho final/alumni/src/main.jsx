import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import "./styles/variables.css";
import "./styles/global.css";
import Header from "./components/header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
