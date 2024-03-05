import { useAppSelector } from '../../redux/hooks/hooks';
import { CartProduct } from './CartProduct';

export const Cart = () => {
  const cart = useAppSelector(state => state.cart);

  return (
    <div>
      <h3>Cart</h3>
      {/* <pre>{JSON.stringify(cart, null, 2)} </pre> */}
      <h4>
        Items: <span>{cart.totalProducts}</span>
      </h4>
      <h4>
        Total: <span>${cart.total}</span>
      </h4>
      <div className='cart-items'>
        {cart.products.length ? (
          cart.products.map(item => {
            return <CartProduct key={item.id} product={item} />;
          })
        ) : (
          <p className='no-cart-items'>No cart items</p>
        )}
      </div>
    </div>
  );
};
