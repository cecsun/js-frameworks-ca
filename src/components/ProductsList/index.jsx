import Product from '../Product';
import { API_PRODUCTS_URL } from '../../common/constants';
import { useFetch } from '../../hooks/useFetch';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductsList() {
  const { addToCart } = useContext(CartContext);

  const { data, hasError, isLoading } = useFetch(API_PRODUCTS_URL);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading data</div>;
  }

  function handleAddToCartButtonClick(productDetails) {
    addToCart(productDetails);
  }

  if (data?.data?.length > 0) {
    return (
      <div>
        {data.data.map((productDetails) => (
          <Product
            key={productDetails.id}
            productDetails={productDetails}
            handleAddToCartButtonClick={handleAddToCartButtonClick}
          />
        ))}
      </div>
    );
  }

  return <div>No data</div>;
}

export default ProductsList;
