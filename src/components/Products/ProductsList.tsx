// import { useSelector } from 'react-redux';
// import { useProductSelector } from '../../redux/redcuers/products';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { addProductToCart } from '../../redux/reducers/cart/cart.slice';
import { IProduct } from '../../redux/reducers/products/product';
import { removeProduct } from '../../redux/reducers/products/products';

export const ProductList = () => {
  // const products = useSelector(useProductSelector);
  const products = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeProduct(id));
  };

  const handleAddToCart = (item: IProduct) => {
    dispatch(addProductToCart(item));
  };

  console.log(products);
  return (
    <div>
      <ul className='items'>
        {products.map(item => {
          return (
            <li className='item' key={item.id}>
              <span>
                {item.title} | ${item.price}
              </span>
              <button
                className='btn remove'
                onClick={() => handleRemove(item.id)}
              >
                -
              </button>
              <button className='btn add' onClick={() => handleAddToCart(item)}>
                +
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
