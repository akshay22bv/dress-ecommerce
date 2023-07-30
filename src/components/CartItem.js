import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { image, id, title, price, amount, description } = item;

  const { removeFromCart, increaseCartCount, decreaseCartCount } =
    useContext(CartContext);
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex  items-center gap-x-4 px-3">
        <img alt="" src={image} className="max-w-[80px]"></img>

        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <div className="max-w-[240px]">{title}</div>
            <button
              className="cursor-pointer active:scale-90"
              onClick={() => {
                removeFromCart({ id });
              }}
            >
              <FaTrash className="" />
            </button>
          </div>
          <div className="flex justify-between py-2">
            <div className="flex items-center justify-between gap-4 ">
              <button
                className="px-1 active:scale-90 rounded w-7 h-7 drop-shadow bg-black flex items-center justify-center text-white"
                onClick={() => {
                  increaseCartCount({ id, item });
                }}
              >
                <AiOutlinePlus className="" />
              </button>
              <p>{amount}</p>
              <button
                onClick={() => {
                  decreaseCartCount({ id, item });
                }}
                className="px-1 active:scale-90 rounded w-7 h-7 drop-shadow bg-black flex items-center justify-center text-white"
              >
                <AiOutlineMinus />
              </button>
            </div>
            <div>
              <h1>${price}</h1>
            </div>
            <div>
              <h1 className="font-semibold">{`$ ${parseFloat(
                price * amount
              ).toFixed(2)}`}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
