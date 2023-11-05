import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailView from "./pages/Detail";

export default function Routes() {
  return (
    <BaseRoutes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipe/:id" element={<DetailView />} />

      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route> */}
    </BaseRoutes>
  );
}