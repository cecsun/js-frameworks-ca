import { Link } from 'react-router-dom';

export default function Product({
  productDetails,
  handleAddToCartButtonClick,
}) {
  const { description, discountedPrice, image, price, title, id } = productDetails;
  function handleButtonClick() {
    handleAddToCartButtonClick(productDetails);
  }

  return (
    <div>
      <h3>{title}</h3>
      <img src={image.url} alt={title} />
      <p>{description}</p>
      <div>{discountedPrice}</div>
      <div>{price}</div>
      <Link to={`/product/${id}`}>View</Link>
      <button onClick={handleButtonClick}>Add to cart</button>
    </div>
  );
}
