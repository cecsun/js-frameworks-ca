import React from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Product from '../../components/Product';
import * as S from "./index.styles";

function CheckoutPage() {
    const { cart, removeFromCart } = useContext(CartContext);
    function handleRemoveFromCartButtonClick(productDetails) {
      removeFromCart(productDetails.id);
    }

    function handleCheckoutButtonClick() {
      window.location.href = '/checkoutSuccessPage';
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
        <S.Total>Total: {Math.round(cart.reduce((a, {discountedPrice}) => a + discountedPrice, 0)*100)/100}</S.Total>
        <S.Button onClick={handleCheckoutButtonClick}>Checkout</S.Button>
      </S.CheckoutContainer>

    );
  }

export default CheckoutPage;