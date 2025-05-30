import React, { useState, useEffect } from 'react';
import Product from '../Product/index';
import { API_PRODUCTS_URL } from '../../common/constants';
import { useFetch } from '../../hooks/useFetch';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import SearchBar from '../SearchBar/index';
import * as S from './index.styles';

/**
 * Component that fetches and displays a list of products with search functionality.
 * Allows adding products to the cart.
 *
 * @component
 * @returns {JSX.Element} The products list with search and add-to-cart features.
 */
function ProductsList() {
  const { addToCart } = useContext(CartContext);
  const { data, hasError, isLoading } = useFetch(API_PRODUCTS_URL);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Update filtered products when data changes
  useEffect(() => {
    if (data?.data) {
      setFilteredProducts(data.data);
    }
  }, [data]);

  /**
   * Filters the products list by title based on the search query.
   *
   * @param {string} query - The search query string.
   */
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

  /**
   * Adds a product to the cart.
   *
   * @param {Object} productDetails - The product to add to the cart.
   */
  function handleAddToCartButtonClick(productDetails) {
    addToCart(productDetails);
  }

  return (
    <div>
      <SearchBar products={data?.data || []} onSearch={handleSearch} />
      {filteredProducts.length > 0 ? (
        <S.ProductsGrid>
          {filteredProducts.map((productDetails) => (
            <Product
              key={productDetails.id}
              productDetails={productDetails}
              handleAddToCartButtonClick={handleAddToCartButtonClick}
            />
          ))}
        </S.ProductsGrid>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
}

export default ProductsList;
