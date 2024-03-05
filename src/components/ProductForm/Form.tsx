import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import type { IProductWithoutId } from './types';
import { addProduct } from '../../redux/reducers/products/products';

export const ProductForm = () => {
  // const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<IProductWithoutId>({
    title: '',
    price: 0,
  });
  const dispatch = useAppDispatch();

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (form.current) {
    //   const formData = new FormData(form.current);
    //   const newProduct: IProductWithoutId = {
    //     title: formData.get('title')! as string,
    //     price: parseInt(formData.get('price')! as string),
    //   };
    //   dispatch(addProduct(newProduct));
    //   // console.log(newProduct);
    // }
    // const newProduct = {
    //   ...state,
    //   price: parseInt(state.price),
    // };
    dispatch(addProduct(state));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  // console.log(state);

  return (
    <div>
      <form className='form-product' action='' onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            name='title'
            type='text'
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='price'>Price:</label>
          <input
            id='price'
            name='price'
            type='number'
            value={state.price}
            onChange={handleChange}
          />
        </div>
        <button className='btn addToCart' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};
