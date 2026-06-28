import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "@fontsource/inter";
import "./styles/global.css";
import "./index.css";
import ErrorBoundary from "./components/common/ErrorBoundary";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

