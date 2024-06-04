import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.styles.js';

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

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

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
