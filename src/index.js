import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// context providers
import { AuthProvider } from "./context/authContext";

import "./index.css";
import App from "./App";

render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);