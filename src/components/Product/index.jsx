import * as S from './index.styles.js';

export default function Product({
  productDetails,
  handleAddToCartButtonClick,
  handleRemoveFromCartButtonClick,
  checkout = false,
}) {
  const { description, discountedPrice, image, price, title, id } = productDetails;
  function handleButtonClick() {
    checkout ? handleRemoveFromCartButtonClick(productDetails) : handleAddToCartButtonClick(productDetails);
  }

  return (
    <S.ProductsContainer>
      <h3>{title}</h3>
      <img src={image.url} alt={title} style={{ width: '100%', height: '100%' }} />
      <p>{description}</p>
      {discountedPrice < price && <S.DiscountedPrice>{discountedPrice}</S.DiscountedPrice>}
      <S.Price>{price}</S.Price>
      <S.StyledLink to={`/product/${id}`}>
        <button>View Product</button>
      </S.StyledLink>
      <S.Button onClick={handleButtonClick}>{checkout ? "Remove from cart" : "Add to cart"}</S.Button>
    </S.ProductsContainer>
  );
}
