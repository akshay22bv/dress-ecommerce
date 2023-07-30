import React, { useContext, useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { SideBarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, handleClose, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);

  const [active, setActive] = useState(false);

  useEffect(() => {
    const onActive = () => {
      window.scrollY > 30 ? setActive(true) : setActive(false);
    };

    window.addEventListener("scroll", onActive);
  }, []);

  return (
    <div
      className={`fixed z-50 flex items-center justify-between w-full px-10 py-2  ${
        active ? "bg-white shadow" : "bg-pink-100"
      }`}
    >
      <div>
        <img
          className={`w-auto h-10`}
          src={
            "https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
          }
          alt=""
        />
      </div>
      <div className="relative">
        <button className="active:scale-95">
          <BsFillHandbagFill
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </button>
        <div className="absolute flex items-center justify-center w-4 h-4 text-sm text-white bg-red-600 rounded-full -top-2 -right-2">
          {itemAmount}
        </div>
      </div>
    </div>
  );
};

export default Header;
