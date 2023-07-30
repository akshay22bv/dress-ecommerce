import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const { product } = useContext(ProductContext);

  let filterProduct = product?.filter((item) => item.id === parseInt(id))[0];

  const { image, description, price, category, rating, title } = filterProduct;
  return (
    <div className="py-16">
      <div className="flex flex-col items-center p-10 md:flex-row md:justify-around">
        <div className="w-1/2 py-2 md:w-1/3">
          <img src={image} alt="" className="w-full md:w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-xl font-semibold md:text-lg">{title}</h1>
          <p className="py-1 text-xs">{description}</p>
          <h1 className="py-1 font-semibold">${price}</h1>
          <button
            onClick={() => {
              addToCart({ product: filterProduct, id });
            }}
            className="p-2 text-white bg-black rounded active:scale-90"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
