import React from 'react';
import './App.css';
import Cart from './Cart/Cart';
import './Cart/style.css'
import { CardProduto } from './CardProduto/CardProduto'
import { Home } from './Home/Home';



function App() {
  return (
    <div className="App">
      <Cart />
      <Home></Home>
    </div>
  );
}

export default App;
