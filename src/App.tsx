import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { ProductList } from './components/Products/ProductsList';
import { ProductForm } from './components/ProductForm/Form';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className='shopping-cart'>
        <div className='main-body'>
          <h2>Products Store</h2>
          <div className='products'>
            <ProductForm />
            <ProductList />
          </div>
        </div>
        <div className='cart'>
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
