import { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  const [viewCart, setViewCart] = useState(false);
  const pageContent =  viewCart ? <Cart /> : <ProductList />
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <hr />
      { pageContent } 
      <hr />
      <Footer viewCart={viewCart} />
    </>
  )

  return content;
}

export default App;
