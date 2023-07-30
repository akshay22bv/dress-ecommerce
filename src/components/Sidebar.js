import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { BsFillTrashFill } from "react-icons/bs";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div
      className={`bg-white h-full w-full  lg:w-[35vw] right-0 fixed ${
        isOpen ? "right-0" : "-right-full"
      } z-50 top-0 p-1 duration-500 shadow-lg`}
    >
      <div className="flex justify-between px-2">
        <h1>Total Products</h1>
        <button className="active:scale-95" onClick={handleClose}>
          <IoMdArrowRoundForward />
        </button>
      </div>

      <div className="h-[85vh] overflow-y-scroll scroll-smooth scroll-hidden">
        {cart?.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </div>

      <div className="flex items-center justify-between w-full p-5">
        <div>
          <span className="font-semibold">
            Total: $ {parseFloat(total).toFixed(2)}
          </span>
        </div>
        <button
          title="Clear Cart Items"
          className="p-2 text-white bg-red-600 rounded"
          onClick={clearCart}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
