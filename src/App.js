import React from 'react';
import './App.css';
import Cart from './Cart/Cart';
import './Cart/style.css'
// import { CardProduto } from './CardProduto/CardProduto'
import { Home } from './Home/Home';
import Filtro from "./Filtro";


function App() {
  return (
    <div className="App">
      <Filtro />
      <Home></Home>
      <Cart />
    </div>
  );
}

export default App;