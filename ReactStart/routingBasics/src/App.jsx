import { BrowserRouter, Routes, Route } from "react-router-dom";
import  MainNavigation  from './assets/Components/MainNavigation';  // Assuming MainNavigation is correctly exported from its file
import ErrorPage from "./assets/Components/ErrorPage";
import HomePage from "./assets/Components/HomePage";
import Products from "./assets/Components/Products";
import ProductDetails from "./assets/Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<HomePage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productID" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
