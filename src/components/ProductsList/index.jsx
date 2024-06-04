import React, { useState, useEffect } from 'react';
import Product from '../Product/index';
import { API_PRODUCTS_URL } from '../../common/constants';
import { useFetch } from '../../hooks/useFetch';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import SearchBar from '../SearchBar/index';

function ProductsList() {
  const { addToCart } = useContext(CartContext);
  const { data, hasError, isLoading } = useFetch(API_PRODUCTS_URL);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data?.data) {
      setFilteredProducts(data.data);
    }
  }, [data]);

  const handleSearch = (query) => {
    if (query.length === 0) {
      setFilteredProducts(data.data);
    } else {
      const filtered = data.data.filter((product) =>
        product.title && product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading data</div>;
  }

  function handleAddToCartButtonClick(productDetails) {
    addToCart(productDetails);
  }

  return (
    <div>
      <SearchBar products={data?.data || []} onSearch={handleSearch} />
      {filteredProducts.length > 0 ? (
        <div>
          {filteredProducts.map((productDetails) => (
            <Product
              key={productDetails.id}
              productDetails={productDetails}
              handleAddToCartButtonClick={handleAddToCartButtonClick}
            />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
}

export default ProductsList;
