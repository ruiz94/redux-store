import { IProduct } from '../products/product';

interface IProductCart extends IProduct {
  amount: number;
  subTotal: number;
}
export interface ICart {
  total: number;
  totalProducts: number;
  products: IProductCart[];
}
