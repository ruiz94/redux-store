import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from './product';
// import type { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';
import { IProductWithoutId } from '../../../components/ProductForm/types';

const initialProducts: IProduct[] = [
  {
    id: '1',
    title: 'The Binding of Issac',
    price: 600,
  },
  {
    id: '2',
    title: 'Pokemon Unite',
    price: 1200,
  },
  {
    id: '3',
    title: 'Animal Crossing',
    price: 1000,
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    addProduct: (state, action: PayloadAction<IProductWithoutId>) => {
      console.log({ state, action });
      const product: IProduct = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, product];
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const filteredState = state.filter(item => item.id !== action.payload);
      return [...filteredState];
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

// export const useProductSelector = (state: RootState) => state.products;

export default productSlice.reducer;
