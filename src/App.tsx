import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./components/product-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product/t-shirt" />} /> /
      <Route path="/product/t-shirt" element={<ProductPage />} /> /
    </Routes>
  );
}

export default App;
