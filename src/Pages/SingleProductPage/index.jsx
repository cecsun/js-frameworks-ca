import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { API_SINGLE_PRODUCT_URL } from '../../common/constants';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import * as S from './index.styles';

function SingleProductPage() {
  const params = useParams();
  const { data, hasError, isLoading } = useFetch(
    `${API_SINGLE_PRODUCT_URL}/${params.id}`,
  );

  const { addToCart } = useContext(CartContext);

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
  console.log(data)
  if (data) {
    return (
      <S.SingleProductContainer>
        <S.Image>{data?.data?.image.url && <img src={data?.data?.image.url} alt={data?.data?.title} />}</S.Image>
        <ul>
          <S.Title>{data?.data?.title} </S.Title>
          <S.Description>{data?.data?.description} </S.Description>
          <S.DiscountedPrice>{data?.data?.discountedPrice < data?.data?.price && <li>{data?.data?.discountedPrice}</li>}</S.DiscountedPrice>
          <S.Price>{data?.data?.price}</S.Price>
          {data?.data?.reviews.map((review) => (
            <S.Reviews key={review.id}><p>Reviews:</p>
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