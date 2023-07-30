import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductProvider from "./contexts/ProductContext";
import SideBarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <SideBarProvider>
          <div className="overflow-hidden">
            <Router>
              <Header />
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </SideBarProvider>
      </ProductProvider>
    </CartProvider>
  );
};

export default App;
