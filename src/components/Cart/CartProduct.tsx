import { IProductCart } from '../../redux/reducers/cart/cart';
import './cartProduct.css';
import { useAppDispatch } from '../../redux/hooks/hooks';
import {
  incrementProduct,
  decrementProduct,
  deleteProduct,
} from '../../redux/reducers/cart/cart.slice';

interface Props {
  product: IProductCart;
}

export const CartProduct = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleDecrement = () => dispatch(decrementProduct(product.id));
  const handleIncrement = () => dispatch(incrementProduct(product.id));
  const handleDelete = () => dispatch(deleteProduct(product.id));

  return (
    <div className='cart-item'>
      <span className='delete-item' onClick={handleDelete}>
        x
      </span>
      <div className='info'>
        <p className='title'>{product.title}</p>
        <p className='price'>
          Price:
          <span>
            ${product.price} x {product.amount}
          </span>
        </p>
      </div>
      <div className='controls'>
        <button className='btn remove' onClick={handleDecrement}>
          -
        </button>
        <button className='btn add' onClick={handleIncrement}>
          +
        </button>
      </div>
      <p className='subtotal'>
        subTotal: <span>${product.subTotal}</span>
      </p>
    </div>
  );
};
