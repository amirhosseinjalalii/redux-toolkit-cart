import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your bag </h2>
      </header>
      <div>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className='btn clear-btn'
            onClick={() => dispatch(clearCart())}
          >
            clear
          </button>
        </footer>
      </div>
    </section>
  );
};

export default CartContainer;
