import React from 'react'
import styled from 'styled-components'
import { CardProduto } from '../CardProduto/CardProduto'


const HomeBox = styled.main`
    box-sizing: border-box;
    border: 1px solid black;
    /* min-height: 90vh; */
    min-width: 300px;
    background-color: gray;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    
/* com o width deixei ele com o tamanho de 89% sombrando 11% para o filtro, coloquei o height porque ate o card do produto ia até o final da tela, usei para testes */
    width:89%;
    height:100%;
`


export class Home extends React.Component {
    state = {
        produtosHome: [],
        produtosCarrinho: [],
        prodID: 0,
    }

    adicionarCarrinho = (id) => {
        console.log("Adicionar Carrinho", id)
    }

    render() {
        {this.state.produtosHome.length <= 0 && this.setState({produtosHome: [{id: this.state.prodID + 1, name: 'Nome do Produto', imgUrl:'https://picsum.photos/200/150', price: 219.9}], prodID: this.state.prodID + 1})}
        
        let produtosNova
        if(this.state.produtosHome.length > 0){
            produtosNova = this.state.produtosHome.map((produto)=>{
                return(
                    <CardProduto
                        key={produto.id}
                        prodId={produto.id}
                        prodImg={produto.imgUrl}
                        prodNome={produto.name}
                        prodPreco={produto.price}
                        adicionarCarrinho={()=>this.adicionarCarrinho(produto.id)}
                    ></CardProduto>
                )
            })
        }

        return(
            <HomeBox>
                {produtosNova}
            </HomeBox>
        )
    }
}
