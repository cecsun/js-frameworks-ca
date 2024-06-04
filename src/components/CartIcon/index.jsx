import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import * as S from './index.styles.js';
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <S.CartWrapper>
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