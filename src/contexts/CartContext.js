import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState([]);

  const [total, setTotal] = useState(null);

  useEffect(() => {
    const items = cart.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
    setItemAmount(items);
  }, [cart]);

  useEffect(() => {
    const items = cart.reduce((acc, cur) => {
      return acc + cur.amount * cur.price;
    }, 0);
    setTotal(items);
  }, [cart]);

  const addToCart = ({ product, id }) => {
    const exist = cart.findIndex((item) => item.id === parseInt(id));

    if (exist !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === exist) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      const newCart = { ...product, amount: 1 };
      setCart([...cart, newCart]);
    }
  };

  const removeFromCart = ({ id }) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  const increaseCartCount = ({ id, item }) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  };

  const decreaseCartCount = ({ id, product }) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          if (item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      })
      .filter((item) => item !== null);

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        increaseCartCount,
        decreaseCartCount,
        clearCart,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
