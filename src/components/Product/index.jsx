import React from 'react';
import * as S from './index.styles.js';

/**
 * Product component that displays product details, pricing,
 * and handles adding/removing the product from the cart.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.productDetails - Details of the product.
 * @param {string} props.productDetails.description - Product description.
 * @param {number} props.productDetails.discountedPrice - Discounted price of the product.
 * @param {Object} props.productDetails.image - Product image object.
 * @param {string} props.productDetails.image.url - URL of the product image.
 * @param {number} props.productDetails.price - Original price of the product.
 * @param {string} props.productDetails.title - Title of the product.
 * @param {string|number} props.productDetails.id - Unique identifier of the product.
 * @param {function(Object):void} props.handleAddToCartButtonClick - Callback to add product to cart.
 * @param {function(Object):void} props.handleRemoveFromCartButtonClick - Callback to remove product from cart.
 * @param {boolean} [props.checkout=false] - If true, component is rendered in checkout mode.
 *
 * @returns {JSX.Element} Rendered product component.
 */
export default function Product({
  productDetails,
  handleAddToCartButtonClick,
  handleRemoveFromCartButtonClick,
  checkout = false,
}) {
  const { description, discountedPrice, image, price, title, id } = productDetails;
  
  const discountPercentage = ((price - discountedPrice) / price) * 100;
  
  /**
   * Handles the add/remove button click based on checkout mode.
   */
  function handleButtonClick() {
    checkout
      ? handleRemoveFromCartButtonClick(productDetails)
      : handleAddToCartButtonClick(productDetails);
  }

  return (
    <S.ProductsContainer>
      <h3>{title}</h3>
      <img src={image.url} alt={title} style={{ width: '100%', height: '100%' }} />
      <p>{description}</p>
      {discountedPrice < price && (
        <>
          <S.DiscountedPrice>{discountedPrice}</S.DiscountedPrice>
          <S.DiscountPercentage>
            {discountPercentage.toFixed(2)}% off
          </S.DiscountPercentage>
        </>
      )} 
      <S.Price>{price}</S.Price>
      <S.StyledLink to={`/product/${id}`}>
        <button>View Product</button>
      </S.StyledLink>
      <S.Button onClick={handleButtonClick}>
        {checkout ? "Remove from cart" : "Add to cart"}
      </S.Button>
    </S.ProductsContainer>
  );
}
