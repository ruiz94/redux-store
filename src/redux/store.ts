import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/products/products';
import cartSlice from './reducers/cart/cart.slice';

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
