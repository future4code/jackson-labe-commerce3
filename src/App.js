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
  cursor: pointer;

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
`
// Fim Botão

export default class App extends Component {
  state = {
    sidebarOpen: false,
    produtosHome: [],
    produtosCart: [],

    valorMinimo: -Infinity,
    valorMaximo: Infinity,
    buscarProduto: '',

    prodID: 0,
  }

  componentDidMount() {
    //Caso ainda não tenhamos nenhum produto na página, 12 produtos ficticios serão adicionados
    if (this.state.produtosHome.length <= 0) {
      for (let i = 1; i < 13; i++) {
        this.setState((state, props) => ({
          produtosHome: [...state.produtosHome, { id: state.prodID + 1, name: 'Nome do Produto', imgUrl: 'https://picsum.photos/200/150', price: 219.9 }]
          , prodID: state.prodID + 1
        })
        )
      }
    }
  }

  onChangeValorMin = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeValorMax = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  onChangeBuscarProduto = (event) => {
    this.setState({ buscarProduto: event.target.value })
  }

  cartAdicionar = (id) => {
    console.log(`cartAdicionar (id: ${id})`)
    const produtoAdicionado = this.state.produtosCart.findIndex((produto) => produto.id === id)
    const produtosCartNovo = [...this.state.produtosCart]

    console.log(produtosCartNovo)

    if (produtoAdicionado > -1) {
      produtosCartNovo[produtoAdicionado].quantidade += 1
    } else {
      let homeIndex = this.state.produtosHome.findIndex((produtos) => produtos.id === id)
      let novoProduto = this.state.produtosHome[homeIndex]
      produtosCartNovo.push({ ...novoProduto, quantidade: 1 })
    }

    this.setState({
      produtosCart: produtosCartNovo
    })
  }


  cartExcluir = (id) => {
    const produtosCartNovo = [...this.state.produtosCart]

    const produtoExcluido = produtosCartNovo.findIndex((produto) => produto.id === id)
console.log(produtoExcluido)
    produtosCartNovo.splice(produtoExcluido, 1)

    this.setState({
      produtosCart: produtosCartNovo
    })
  }

  //click botão
  onSidebarOpen = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  soma () {
    return this.state.produtosCart.reduce((e1, e2)=>{
        

        return e1 + e2.quantidade
        
    },0)
  }

  render() {
    const produtosHomeNovo = this.state.produtosHome.filter((produto) => {
      if (produto.price >= this.state.valorMinimo && produto.price <= this.state.valorMaximo) {
        return true
      } else {
        return false
      }
    })

    const somas = this.soma()
    return (
      <div className="App">
        {/* ------ THIAGO --------------------- */}
        <Filtro
          onChangeValorMin={this.onChangeValorMin}
          onChangeValorMax={this.onChangeValorMax}
          onChangeBuscarProduto={this.onChangeBuscarProduto}
        />






























































































        {/* ------ RAPHAEL --------------------- */}
        <Home
          produtosHome={produtosHomeNovo}
          cartAdicionar={this.cartAdicionar}>
        </Home>



































































































        {/* ------ MATHEUS --------------------- */}

        
        {/* lógica de click */}
        {this.state.sidebarOpen ?
          <Cart
            cartSx={this.state.produtosCart}
            cartExcluir={this.cartExcluir}
          /> : null
        }

        <CartIcon onClick={this.onSidebarOpen} >
         <span>{somas}</span>
          <img src={cart} alt="" />
        </CartIcon>

        {this.cartAdicionar ? <div>{this.produtosCartNovo}</div> : null}









      </div>
    );
  }

}