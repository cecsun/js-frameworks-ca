import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const SIZE = '15';

function CartIcon() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        🛒
        <div
          style={{
            background: 'red',
            borderRadius: '50%',
            width: `${SIZE}px`,
            height: `${SIZE}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
        >
          {cart.length.toString()}
        </div>
      </div>
    </div>
  );
}

export default CartIcon;