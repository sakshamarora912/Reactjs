import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx'
import {DUMMY_PRODUCTS} from '../src/dummy-products.js'
import CartContextProvider from './store/CartContext.jsx'

function App() {
  return (
    <CartContextProvider>
      <Header/>
      <Shop>
      {DUMMY_PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Product {...product}/>
            </li>
          );
        })}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
