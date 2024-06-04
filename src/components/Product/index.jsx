import { Link } from 'react-router-dom';
import * as S from './index.styles.js';

export default function Product({
  productDetails,
  handleAddToCartButtonClick,
}) {
  const { description, discountedPrice, image, price, title, id } = productDetails;
  function handleButtonClick() {
    handleAddToCartButtonClick(productDetails);
  }

  return (
    <S.ProductsContainer>
      <h3>{title}</h3>
      <img src={image.url} alt={title} style={{ width: '100%', height: '100%' }} />
      <p>{description}</p>
      <S.DiscountedPrice>{discountedPrice}</S.DiscountedPrice>
      <S.Price>{price}</S.Price>
      <S.StyledLink to={`/product/${id}`}>View</S.StyledLink>
      <S.Button onClick={handleButtonClick}>Add to cart</S.Button>
    </S.ProductsContainer>
  );
}
