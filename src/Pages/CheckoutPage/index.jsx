import React from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Product from '../../components/Product';
import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";

/**
 * CheckoutPage component displays a list of products in the cart,
 * allows removing items, and proceeds to checkout.
 *
 * @component
 * @returns {JSX.Element} The rendered checkout page.
 */
function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  /**
   * Handles removing a product from the cart.
   *
   * @param {Object} productDetails - The product to remove.
   * @param {number|string} productDetails.id - The ID of the product.
   */
  function handleRemoveFromCartButtonClick(productDetails) {
    removeFromCart(productDetails.id);
  }

  /**
   * Handles the checkout button click.
   * Clears the cart and navigates to the success page.
   */
  function handleCheckoutButtonClick() {
    clearCart();
    navigate('/checkoutSuccessPage');
  }

  return (
    <S.CheckoutContainer>
      <h1>Checkout</h1>
      {cart.map((productDetails) => (
        <Product
          key={productDetails.id}
          productDetails={productDetails}
          checkout={true}
          handleRemoveFromCartButtonClick={handleRemoveFromCartButtonClick}
        />
      ))}
      <S.Total>
        Total: {Math.round(cart.reduce((a, { discountedPrice }) => a + discountedPrice, 0) * 100) / 100}
      </S.Total>
      <S.Button onClick={handleCheckoutButtonClick}>Checkout</S.Button>
    </S.CheckoutContainer>
  );
}

export default CheckoutPage;
