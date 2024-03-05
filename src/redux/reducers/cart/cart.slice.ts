import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../products/product';
import { ICart, IProductCart } from './cart';

const initialCartState: ICart = {
  total: 0,
  totalProducts: 0,
  products: [],
};

const calculateTotals = (products: IProductCart[]) => {
  const total = products.reduce<number>(
    (acc, product) => acc + product.subTotal,
    0,
  );

  const totalProducts = products.reduce<number>(
    (acc, product) => acc + product.amount,
    0,
  );

  return [total, totalProducts];
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      // console.log({ state, action });
      const product = action.payload;
      const existAProduct = state.products.find(prod => prod.id === product.id);

      const cartProduct: IProductCart = {
        ...product,
        amount: existAProduct ? existAProduct.amount + 1 : 1,
        subTotal: existAProduct
          ? existAProduct.price * (existAProduct.amount + 1)
          : product.price,
      };

      const filteredProducts = state.products.filter(
        prod => prod.id !== product.id,
      );
      const products = [...filteredProducts, cartProduct];

      const [total, totalProducts] = calculateTotals(products);

      return {
        ...state,
        total,
        totalProducts,
        products,
      };
    },
    incrementProduct: (state, action: PayloadAction<string>) => {
      const productID = action.payload;
      const product = state.products.find(item => item.id === productID);

      if (!product) return state;

      const filteredProducts = state.products.filter(
        item => item.id !== productID,
      );
      const products: IProductCart[] = [
        ...filteredProducts,
        {
          ...product,
          amount: product.amount + 1,
          subTotal: product.price * (product.amount + 1),
        },
      ];

      const [total, totalProducts] = calculateTotals(products);
      return {
        ...state,
        products,
        total,
        totalProducts,
      };
    },
    decrementProduct: (state, action: PayloadAction<string>) => {
      const productID = action.payload;
      const product = state.products.find(item => item.id === productID);

      if (!product) return state;

      const filteredProducts = state.products.filter(
        item => item.id !== productID,
      );

      const amount = product.amount - 1;
      const products: IProductCart[] = amount
        ? [
            ...filteredProducts,
            {
              ...product,
              amount: amount,
              subTotal: product.price * amount,
            },
          ]
        : filteredProducts;

      const [total, totalProducts] = calculateTotals(products);
      return {
        ...state,
        products,
        total,
        totalProducts,
      };
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const filteredProducts = state.products.filter(
        item => item.id !== action.payload,
      );
      const [total, totalProducts] = calculateTotals(filteredProducts);
      return {
        ...state,
        products: filteredProducts,
        total,
        totalProducts,
      };
    },
  },
});

export const {
  addProductToCart,
  incrementProduct,
  decrementProduct,
  deleteProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
