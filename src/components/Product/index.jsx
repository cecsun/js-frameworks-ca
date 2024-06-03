/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

// http://localhost:5173/product/109566af-c5c2-4f87-86cb-76f36fb8d378

export default function Product({
  productDetails,
  handleAddToCartButtonClick,
}) {
  const { description, discountedPrice, price, title, id } = productDetails;
  function handleButtonClick() {
    handleAddToCartButtonClick(productDetails);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{discountedPrice}</div>
      <div>{price}</div>
      <Link to={`/product/${id}`}>View</Link>
      <button onClick={handleButtonClick}>Add to cart</button>
    </div>
  );
}
