import {BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error'
import ProductDetail from "./pages/ProductDetail";

export default function App(){
return(
  <BrowserRouter>
  <RootLayout />
  <Routes>
     <Route path="*" element={<ErrorPage />} />
     <Route index element={<HomePage/> } />
     <Route path="products" element={<ProductsPage/>}  />
     <Route path="products/:productId" element={<ProductDetail/>} />
  </Routes>
 </BrowserRouter>
)
}

