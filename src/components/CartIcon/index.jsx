import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import * as S from './index.styles.js';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

/**
 * CartIcon component that displays a shopping cart icon
 * with the number of items currently in the cart.
 * 
 * When clicked, it navigates the user to the checkout page.
 *
 * @component
 * @returns {JSX.Element} The rendered cart icon with item count.
 */
function CartIcon() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  /**
   * Handles navigation to the checkout page when the cart icon is clicked.
   */
  const handleCartClick = () => {
    navigate('/checkoutPage');
  };

  return (
    <div>
      <S.CartWrapper onClick={handleCartClick}>
        <S.CartIcon>
          <FaShoppingCart />
        </S.CartIcon>
        <S.CartNumber>
          {cart.length.toString()}
        </S.CartNumber>
      </S.CartWrapper>
    </div>
  );
}

export default CartIcon;
