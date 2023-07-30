import React from "react";
import { useContext } from "react";
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { category, description, id, image, price, rating, title } = product;

  return (
    <div>
      <div className="relative flex items-center justify-center py-4 border group">
        <div className="absolute top-0 flex flex-col gap-1 p-1 duration-300 opacity-0 cursor-pointer group-hover:right-1 group-hover:opacity-100 -right-11">
          <button
            className="active:scale-90"
            onClick={() => {
              addToCart({ product, id });
            }}
          >
            <AiOutlinePlus className="bg-red-500 rounded w-[25px] h-[25px] text-white p-1" />
          </button>{" "}
          <Link to={`product/${id}`}>
            <button className="active:scale-90">
              <AiFillEye className="bg-white w-[25px] h-[25px] p-1" />
            </button>
          </Link>
        </div>
        <img className="w-auto h-20 sm:h-40" src={image} alt="" />
      </div>
      <div className="p-2">
        <p className="capitalize text-[7px] sm:text-lg">{category}</p>
        <h1 className="font-semibold text-[8px] sm:text-lg">{title}</h1>
        <p className="font-semibold text-[8px] sm:text-lg">${price}</p>
      </div>
    </div>
  );
};

export default Product;
