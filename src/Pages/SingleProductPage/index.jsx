import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { API_SINGLE_PRODUCT_URL } from '../../common/constants';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import * as S from './index.styles';

/**
 * SingleProductPage component fetches and displays detailed information
 * about a single product, including its image, description, price,
 * discount, and reviews. It also provides a button to add the product
 * to the cart.
 *
 * @component
 * @returns {JSX.Element} The rendered single product page.
 */
function SingleProductPage() {
  const params = useParams();
  const { data, hasError, isLoading } = useFetch(
    `${API_SINGLE_PRODUCT_URL}/${params.id}`,
  );

  const { addToCart } = useContext(CartContext);

  /**
   * Calculates the discount percentage between the original price and the discounted price.
   * Returns NaN if price or discountedPrice is not available.
   *
   * @type {number}
   */
  const discountPercentage =
    ((data?.data?.price - data?.data?.discountedPrice) / data?.data?.price) * 100;

  /**
   * Handles the "Add to cart" button click by adding the product to the cart context.
   */
  const handleButtonClick = () => {
    if (data?.data) {
      addToCart(data.data);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading data</div>;
  }

  if (data) {
    return (
      <S.SingleProductContainer>
        <S.Image>
          {data?.data?.image.url && (
            <img src={data?.data?.image.url} alt={data?.data?.title} />
          )}
        </S.Image>
        <ul>
          <S.Title>{data?.data?.title}</S.Title>
          <S.Description>{data?.data?.description}</S.Description>
          {data?.data?.discountedPrice < data?.data?.price && (
            <S.DiscountedPrice>
              {data?.data?.discountedPrice}
              <S.DiscountPercentage>
                {discountPercentage.toFixed(2)}% off
              </S.DiscountPercentage>
            </S.DiscountedPrice>
          )}
          <S.Price>{data?.data?.price}</S.Price>
          {data?.data?.reviews.map((review) => (
            <S.Reviews key={review.id}>
              <p>Reviews:</p>
              <li>Username: {review.username}</li>
              <li>Rating: {review.rating}</li>
              <li>"{review.description}"</li>
            </S.Reviews>
          ))}
        </ul>
        <button onClick={handleButtonClick}>Add to cart</button>
      </S.SingleProductContainer>
    );
  }

  return <div>Nothing</div>;
}

export default SingleProductPage;
