import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { API_SINGLE_PRODUCT_URL } from '../../common/constants';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

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

  if (data) {
    return (
      <div>
        <ul>
          <li>Title: {data?.data?.title} </li>
          <li>Description: {data?.data?.description} </li>
          <li>Discounted Price: {data?.data?.discountedPrice}</li>
          <li>Price: {data?.data?.price}</li>
        </ul>
        {data?.data?.image.url && <img src={data?.data?.image.url} alt={data?.data?.title} />}
        <button onClick={handleButtonClick}>Add to cart</button>
      </div>
    );
  }

  return <div>Nothing</div>;
}

export default SingleProductPage;