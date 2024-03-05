import { IProduct } from '../../redux/reducers/products/product';

export type IProductWithoutId = Omit<IProduct, 'id'>;
