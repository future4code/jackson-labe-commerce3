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

    valorMinimo:-Infinity,
    valorMaximo: Infinity,
    buscarProduto: '',

    prodID: 0,
  }

  componentDidMount() {
    //Caso ainda não tenhamos nenhum produto na página, 12 produtos ficticios serão adicionados
      if (this.state.produtosHome.length <= 0){
          for(let i = 1; i<13;i++){
              this.setState((state, props) => ({
                  produtosHome: [...state.produtosHome,{id: state.prodID + 1, name: `Produto ${i}`, imgUrl:'https://picsum.photos/200/150', price: 219.9 + (i*2)}]
                      , prodID: state.prodID + 1})
              )
          }
      }
  }

  onChangeValorMin = (event) => {
    event.target.value === '' ?
    this.setState({valorMinimo: -Infinity}) :
    this.setState({valorMinimo: event.target.value})
  }

  onChangeValorMax = (event) => {
    event.target.value === '' ?
    this.setState({valorMaximo: Infinity}) :
    this.setState({valorMaximo: event.target.value})
  }

  onChangeBuscarProduto = (event) => {
    this.setState({buscarProduto: event.target.value})
  }



  cartAdicionar = (id) => {
    const novoCart = [...this.state.produtosCart]
    const produtoIndexCart = this.state.produtosCart.findIndex((produto) => produto.id === id)
    
    if(produtoIndexCart> -1) {
      novoCart[produtoIndexCart].quantidade +=1
    } else {
      let homeIndex = this.state.produtosHome.findIndex((produto) => produto.id === id)
      let novoProduto = this.state.produtosHome[homeIndex]
      novoCart.push({...novoProduto, quantidade:1})
    }

    this.setState({produtosCart: novoCart})
    console.log(novoCart)
  }


  
  cartExcluir = (id) => {
    const produtoExcluido = this.state.produtosCart.filter((produto) => {
      if (produto.id === id){return false} else {return true}
    })
    const produtosCartNovo = [...produtoExcluido]
  }

//click botão
  onSidebarOpen = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  render() {
    const produtosHomeNovo = this.state.produtosHome.filter((produto) => {
      // console.log(`produtosHomeNovo ${ produto.name}`)
      if((produto.price >= Number(this.state.valorMinimo) && produto.price <= Number(this.state.valorMaximo))
          &&
          (this.state.buscarProduto === '' || produto.name === this.state.buscarProduto)){
        return true
      } else {
        return false
      }
    })

    // console.log(produtosHomeNovo)

    return (
      <div className="App">
{/* ------ THIAGO --------------------- */}
        <Filtro
          onChangeValorMin={this.onChangeValorMin}
          onChangeValorMax={this.onChangeValorMax}
          onChangeBuscarProduto={this.onChangeBuscarProduto}
          valorMin={this.state.valorMinimo}
          valorMax={this.state.valorMaximo}
          valorBusca={this.state.valorBusca}
        />






























































































{/* ------ RAPHAEL --------------------- */}
        <Home
          produtosHome={produtosHomeNovo}
          cartAdicionar={this.cartAdicionar}
        ></Home>



































































































{/* ------ MATHEUS --------------------- */}
        {/* lógica de click */}
        {this.state.sidebarOpen ? 
          <Cart /> : null
        }
        
        <CartIcon onClick={this.onSidebarOpen}>
          <img src={cart} alt="" />
        </CartIcon>











      </div>
    );
  }

}