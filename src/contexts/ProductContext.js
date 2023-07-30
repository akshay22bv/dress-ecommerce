import React, { createContext, useState, useEffect } from "react";
import { data } from "../data/data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const response = await fetch(`http://fakestoreapi.com/products`);

    //   const data = await response.json();

    setProduct(data);
    // };

    // fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
