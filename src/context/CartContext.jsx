import { createContext, useState } from 'react';

/**
 * Context that holds cart state and related actions for adding,
 * removing, and clearing products in a shopping cart.
 *
 * @type {React.Context<{
 *   cart: Array<Object>,
 *   addToCart: (product: Object) => void,
 *   removeFromCart: (productId: string | number) => void,
 *   clearCart: () => void
 * }>}
 */
export const CartContext = createContext();

/**
 * Provides cart context to child components. Manages cart state
 * and exposes functions to add, remove, and clear products.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Components that need access to cart context.
 * @returns {JSX.Element} The context provider for the cart.
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /**
   * Adds a product to the cart.
   *
   * @param {Object} product - The product object to add.
   */
  function addToCart(product) {
    setCart((prevState) => [...prevState, product]);
  }

  /**
   * Removes a product from the cart by ID.
   *
   * @param {string|number} productId - The ID of the product to remove.
   */
  function removeFromCart(productId) {
    setCart((prevState) => prevState.filter((product) => product.id !== productId));
  }

  /**
   * Clears all items from the cart.
   */
  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
