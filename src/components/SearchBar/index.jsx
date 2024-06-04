import React, { useState, useEffect } from 'react';

function SearchBar({ products, onSearch }) {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      {filteredProducts.length > 0 && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
