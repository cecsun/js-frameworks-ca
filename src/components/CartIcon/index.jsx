import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import * as S from './index.styles.js';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function CartIcon() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

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