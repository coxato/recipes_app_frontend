import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// context providers
import { AuthProvider } from "./context/authContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>);

