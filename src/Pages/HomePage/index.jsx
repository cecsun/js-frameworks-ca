import ProductsList from '../../components/ProductsList';

/**
 * HomePage component renders the main landing page
 * with a list of products.
 *
 * @component
 * @returns {JSX.Element} The rendered homepage.
 */
function HomePage() {
  return (
    <div>
      <ProductsList />
    </div>
  );
}

export default HomePage;
