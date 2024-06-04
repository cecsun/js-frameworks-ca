/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevState) => [...prevState, product]);
  }

  function removeFromCart(productId) {
    setCart((prevState) => prevState.filter((product) => product.id !== productId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
