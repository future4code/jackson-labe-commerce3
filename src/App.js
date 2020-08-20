import React, { Component } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import cart from './Cart/img/cart.png'
import styled from 'styled-components'
// import { CardProduto } from './CardProduto/CardProduto'
import { Home } from './Home/Home';
import Filtro from "./Filtro";

// Estilização do botão
const CartIcon = styled.div`
  display:flex;
  justify-items:center;
  align-items:center;

  position:fixed;
  bottom: 40px;
  right: 40px;
  border: 3px solid gainsboro;
  border-radius: 50%;
  background-color: rgba(36,44,46, 0.9) ;

img {
  width: 80px;
  transition: all 0.5s;
  margin: -6px -5px -6px -6px;
  :hover{
  transform: scale(0.9);
  transition: all 0.5s;
  margin: 2px;
  }
}
`// Fim Botão

export default class App extends Component {
  state = {
    sidebarOpen: false
  }

//click botão
  onSidebarOpen = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Filtro />

        <Home></Home>

        {/* lógica de click */}
        {this.state.sidebarOpen && (
          <Cart />
        )}
        
        <CartIcon onClick={this.onSidebarOpen}>
          <img src={cart} alt="" />
        </CartIcon>
        
      </div>
    );
  }

}