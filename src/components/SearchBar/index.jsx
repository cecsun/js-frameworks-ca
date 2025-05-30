import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.styles.js';

/**
 * SearchBar component that allows searching through a list of products.
 * Displays filtered results and navigates to product details on click.
 *
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.products - List of products to search.
 * @param {string} props.products[].id - Unique identifier for each product.
 * @param {string} props.products[].title - Title of each product.
 * @param {function(string): void} props.onSearch - Callback invoked with the current search query.
 *
 * @returns {JSX.Element} Rendered search bar with filtered product results.
 */
function SearchBar({ products, onSearch }) {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length === 0) {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.title && product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [query, products]);

  /**
   * Updates the search query state and calls onSearch callback.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  /**
   * Navigates to the product detail page when a product is clicked.
   *
   * @param {string} productId - The ID of the clicked product.
   */
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <S.SearchWrapper>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      {filteredProducts.length > 0 && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => handleProductClick(product.id)}>
                {product.title}
            </li>
          ))}
        </ul>
      )}
    </S.SearchWrapper>
  );
}

export default SearchBar;
