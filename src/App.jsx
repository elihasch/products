import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import NotFinde from "./pages/404";
import Layout from "./layout/Layout";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFinde />} />
      </Routes>
    </Layout>
  );
}

export default App;
