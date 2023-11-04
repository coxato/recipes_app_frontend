import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BaseRoutes>

        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />

      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route> */}
    </BaseRoutes>
  );
}