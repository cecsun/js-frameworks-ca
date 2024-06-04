import React from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Product from '../../components/Product';

function CheckoutPage() {
    const { cart, removeFromCart } = useContext(CartContext);
    function handleRemoveFromCartButtonClick(productDetails) {
      removeFromCart(productDetails.id);
    }
    return (
      <div>
        <div>CheckoutPage</div>
        {cart.map((productDetails) => (
          <Product
            key={productDetails.id}
            productDetails={productDetails}
            checkout={true}
            handleRemoveFromCartButtonClick={handleRemoveFromCartButtonClick}
            // handleAddToCartButtonClick={handleAddToCartButtonClick}
          />
        ))}
        <div>total: {Math.round(cart.reduce((a, {discountedPrice}) => a + discountedPrice, 0)*100)/100}</div>
        <div>checkout</div>
      </div>

    );
  }

export default CheckoutPage;